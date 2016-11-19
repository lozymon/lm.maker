( function (window, lm, $) {

    "use strict";

    var maker_jQuery = {
        version: '0.1',
        author: 'Kim Andre Furevikstrand',
        email: 'lozymon@gmail.com',
        event: {},
    }

    maker_jQuery.add = function ( element, selector, context ) {
        return element.add( selector, context );
    }

    maker_jQuery.addBack = function ( element, selector ) {
        return element.addBack( selector );
    }

    maker_jQuery.addClass = function ( element, obj, params ) {
        if ( lm.isFunction( obj ) ) {
            return element.addClass( function(index) {
                return executeRuleFromJS( obj, [ this, index, params ] );
            });
        }
        return element.addClass( obj );
    }

    maker_jQuery.attr = function ( element, attributeName, value, fluxo ) {
        if ( fluxo ) {
            return element.attr( attributeName, function(index, val) {
                return executeRuleFromJS( fluxo, [ this, value, index, val ] );
            });
        }
        return element.attr( attributeName, value );
    }

    maker_jQuery.change = function ( element, eventData, handler ) {
        return element.change( function( event ) {
            return executeRuleFromJS( handler, [ this, event, eventData ] );
        });
    }

    maker_jQuery.click = function ( element, eventData, handler ) {
        return element.click( function( event ) {
            return executeRuleFromJS( handler, [ this, event, eventData ] );
        });
    }

    maker_jQuery.dblclick = function ( element, eventData, handler ) {
        return element.dblclick( function( event ) {
            return executeRuleFromJS( handler, [ this, event, eventData ] );
        });
    }

    maker_jQuery.css = function ( element, propertyName, value, fluxo ) {
        if ( fluxo ) {
            return element.css( propertyName, function(index, val) {
                return executeRuleFromJS( fluxo, [ this, value, index, val ] );
            });
        }

        if ( value ) {
            return element.css( propertyName, value );
        }

        return element.css( propertyName );
    }

    maker_jQuery.animate = function ( element, properties, duration, easing, complete, params ) {
        return element.animate( properties, duration, easing, function() {
            if ( complete ) {
                return executeRuleFromJS( complete, [ this, params ] );
            }
        });
    }

    /**
     * Add handlers to be called when the Deferred object is either resolved or rejected.
     *
     * @param  Deferred deferred
     * @param  Fluxo    alwaysCallbacks A function, or array of functions, that is called when the Deferred is resolved or rejected.
     * @param  Object   params          params passado to function
     * @return Deferred
     */
    maker_jQuery.always = function ( deferred, alwaysCallbacks, params ) {
        return deferred.always( function() {
            return executeRuleFromJS( alwaysCallbacks, [ this, params ] );
        });
    }

    /**
     * Add handlers to be called when the Deferred object is rejected.
     *
     * @param  Deferred deferred
     * @param  Fluxo    failFilter A function that is called when the Deferred is rejected.
     * @param  Object   params     params passado to function
     * @return Deferred
     */
    maker_jQuery.catch = function ( deferred, failFilter, params ) {
        return deferred.catch( function() {
            return executeRuleFromJS( failFilter, [ this, params ] );
        });
    }

    /**
     * Add handlers to be called when the Deferred object is resolved.
     *
     * @param  Deferred deferred
     * @param  Fluxo    doneCallbacks A function, or array of functions, that are called when the Deferred is resolved.
     * @param  Object   params        params passado to function
     * @return Deferred
     */
    maker_jQuery.done = function ( deferred, doneCallbacks, params ) {
        return deferred.done( function() {
            return executeRuleFromJS( doneCallbacks, [ this, params ] );
        });
    }

    /**
     * Add handlers to be called when the Deferred object is rejected.
     *
     * @param  Deferred deferred
     * @param  Fluxo    failCallbacks A function, or array of functions, that are called when the Deferred is rejected.
     * @param  Object   params        params passado to function
     * @return Deferred
     */
    maker_jQuery.fail = function ( deferred, failCallbacks, params ) {
        return deferred.fail( function() {
            return executeRuleFromJS( failCallbacks, [ this, params ] );
        });
    }

    /**
     * Call the progressCallbacks on a Deferred object with the given context and args.
     *
     * @param  Deferred deferred
     * @param  Object   args     Optional arguments that are passed to the progressCallbacks.
     * @return Deferred
     */
    maker_jQuery.notify = function ( deferred, args ) {
        return deferred.notify( args );
    }

    /**
     * Call the progressCallbacks on a Deferred object with the given context and args.
     *
     * @param  Deferred deferred
     * @param  Object   context  Context passed to the progressCallbacks as the this object.
     * @param  Array    args     An optional array of arguments that are passed to the progressCallbacks.
     * @return Deferred
     */
    maker_jQuery.notifyWith = function ( deferred, context, args ) {
        return deferred.notifyWith( context, args );
    }

    /**
     *  Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     *
     * @param  Deferred deferred
     * @param  Fluxo    doneFilter     An optional function that is called when the Deferred is resolved.
     * @param  Fluxo    failFilter     An optional function that is called when the Deferred is rejected.
     * @param  Fluxo    progressFilter An optional function that is called when progress notifications are sent to the Deferred.
     * @param  Object   params         params passado to function
     * @return Promise
     */
    maker_jQuery.pipe = function ( deferred, doneFilter, failFilter, progressFilter, params ) {
        return deferred.pipe( function() {
          if ( doneFilter ) {
            return executeRuleFromJS( doneFilter, [ this, params ] );
          }
        }, function() {
          if ( failFilter ) {
            return executeRuleFromJS( failFilter, [ this, params ] );
          }
        }, function() {
          if ( progressFilter ) {
            return executeRuleFromJS( progressFilter, [ this, params ] );
          }
        });
    }

    /**
     *  Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     *
     * @param  Deferred deferred
     * @param  Fluxo    progressCallbacks A function, or array of functions, to be called when the Deferred generates progress notifications.
     * @param  Object   params            params passado to function
     * @return Deferred
     */
    maker_jQuery.progress = function ( deferred, progressCallbacks, params ) {
        return deferred.progress( function() {
            return executeRuleFromJS( progressCallbacks, [ this, params ] );
        });
    }

    /**
     * Return a Deferred's Promise object.
     *
     * @param  Deferred deferred
     * @param  Object   target     Object onto which the promise methods have to be attached
     * @return Deferred
     */
    maker_jQuery.promise = function ( deferred, target ) {
        return deferred.promise( target );
    }

    /**
     * Reject a Deferred object and call any failCallbacks with the given args.
     *
     * @param  Deferred deferred
     * @param  Array    args     Optional arguments that are passed to the failCallbacks.
     * @return Deferred
     */
    maker_jQuery.reject = function ( deferred, args ) {
        return deferred.reject( args );
    }

    /**
     * Resolve a Deferred object and call any doneCallbacks with the given context and args.
     *
     * @param  Deferred deferred
     * @param  Object   context  Context passed to the failCallbacks as the this object.
     * @param  Array    args     An optional array of arguments that are passed to the failCallbacks.
     * @return Deferred
     */
    maker_jQuery.rejectWith = function ( deferred, context, args ) {
        return deferred.rejectWith( context, args );
    }

    /**
     * Resolve a Deferred object and call any doneCallbacks with the given args.
     *
     * @param  Deferred deferred
     * @param  Array    args     Optional arguments that are passed to the doneCallbacks.
     * @return Deferred
     */
    maker_jQuery.resolve = function ( deferred, args ) {
        return deferred.resolve( args );
    }

    /**
     * Resolve a Deferred object and call any doneCallbacks with the given context and args.
     *
     * @param  Deferred deferred
     * @param  Object   context  Context passed to the doneCallbacks as the this object.
     * @param  Array    args     An optional array of arguments that are passed to the doneCallbacks.
     * @return Deferred
     */
    maker_jQuery.resolveWith = function ( deferred, context, args ) {
        return deferred.resolveWith( context, args );
    }

    /**
     * Determine the current state of a Deferred object.
     *
     * @param  Deferred deferred
     * @return String
     */
    maker_jQuery.state = function ( deferred ) {
        return deferred.state();
    }

    /**
     *  Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     *
     * @param  Deferred deferred
     * @param  Fluxo    doneFilter     A function that is called when the Deferred is resolved.
     * @param  Fluxo    failFilter     An optional function that is called when the Deferred is rejected.
     * @param  Fluxo    progressFilter An optional function that is called when progress notifications are sent to the Deferred.
     * @param  Object   params         params passado to function
     * @return Promise
     */
    maker_jQuery.then = function ( deferred, doneFilter, failFilter, progressFilter, params ) {
        return deferred.then( function() {
          if ( doneFilter ) {
            return executeRuleFromJS( doneFilter, [ this, params ] );
          }
        }, function() {
          if ( failFilter ) {
            return executeRuleFromJS( failFilter, [ this, params ] );
          }
        }, function() {
          if ( progressFilter ) {
            return executeRuleFromJS( progressFilter, [ this, params ] );
          }
        });
    }

    /**
     * Set a timer to delay execution of subsequent items in the queue.
     *
     * @param  jQuery  element   jQuery element
     * @param  Integer duration  An integer indicating the number of milliseconds to delay execution of the next item in the queue.
     * @param  String  queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @return jQuery
     */
    maker_jQuery.delay = function ( element, duration, queueName ) {
        return element.delay( duration, queueName );
    }

    /**
     *  Attach a handler to one or more events for all elements that match the
     *  selector, now or in the future, based on a specific set of root elements.
     *
     * @param  jQuery element   jQuery element
     * @param  String selector  A selector to filter the elements that trigger the event.
     * @param  String eventType A string containing one or more space-separated JavaScript
     *                          event types, such as "click" or "keydown," or custom event names.
     * @param  Fluxo  handler   A function to execute at the time the event is triggered.
     * @param  Object params    params passado to function
     * @return jQuery
     */
    maker_jQuery.delegate = function ( element, selector, eventType, handler, params ) {
        return element.delegate( selector, eventType, params,  function( eventObject ) {
           return executeRuleFromJS( handler, [ this, eventObject, params ] );
        });
    }

    /**
     * Execute the next function on the queue for the matched elements.
     *
     * @param  jQuery  element   jQuery element
     * @param  String  selector  A selector to filter the elements that trigger the event.
     * @param  Object  events    A plain object of one or more event types and functions to execute for them.
     * @return jQuery
     */
    maker_jQuery.delegateEvent = function ( element, selector, events ) {
        return element.delegate( selector, events );
    }

    /**
     * Execute the next function on the queue for the matched elements.
     *
     * @param  jQuery  element   jQuery element
     * @param  String  queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @return jQuery
     */
    maker_jQuery.dequeue = function ( element, queueName ) {
        return element.dequeue( queueName );
    }

    /**
     * Remove the set of matched elements from the DOM.
     *
     * @param  jQuery   element  jQuery element
     * @param  Selector selector A selector expression that filters the set of matched elements to be removed.
     * @return jQuery
     */
    maker_jQuery.detach = function ( element, selector ) {
        return element.detach( selector );
    }

    /**
     * Iterate over a jQuery object, executing a function for each matched element.
     *
     * @param  jQuery element jQuery
     * @param  Fluxo  fluxo   A function to execute for each matched element.
     * @param  Onject params  params passado to function
     * @return jQuery
     */
    maker_jQuery.each = function ( element, fluxo, params ) {
       return element.each( function( index, element ) {
           return executeRuleFromJS( fluxo, [ this, index, element, params ] );
       });
    }

    /**
     * Remove all child nodes of the set of matched elements from the DOM.
     *
     * @param  jQuery element jQuery
     * @return jQuery
     */
    maker_jQuery.empty = function ( element ) {
        return element.empty();
    }

    /**
     * End the most recent filtering operation in the current chain and return
     * the set of matched elements to its previous state.
     *
     * @param  jQuery element jQuery
     * @return jQuery
     */
    maker_jQuery.end = function ( element ) {
        return element.end();
    }

    /**
     * Reduce the set of matched elements to the one at the specified index.
     * @param  jQuery  element An jQuery element
     * @param  Index   index   An integer indicating the 0-based position of the element.
     *                         or An integer indicating the position of the element,
     *                         counting backwards from the last element in the set.
     * @return jQuery
     */
    maker_jQuery.eq = function ( element, index ) {
        return element.eq( index );
    }

    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param  Element element   A jQuery element
     * @param  Object  options   A map of additional options to pass to the method.
     * @return jQuery
     */
    maker_jQuery.fadeInOptions = function ( element, options ) {
        return element.fadeIn( options );
    }

    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param  Element element   A jQuery element
     * @param  String  duration  A string or number determining how long the animation will run.
     * @param  String  easing    A string indicating which easing function to use for the transition.
     * @param  Fluxo   complete  A function to call once the animation is complete, called once per matched element.
     * @param  Object  params    params passado to function
     * @return jQuery
     */
    maker_jQuery.fadeIn = function ( element, duration, easing, complete, params ) {
        return element.fadeIn( duration, easing, function( ) {
            return executeRuleFromJS( complete, [ this, params ] );
        });
    }

    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param  Element element   A jQuery element
     * @param  Object  options   A map of additional options to pass to the method.
     * @return jQuery
     */
    maker_jQuery.fadeOutOptions = function ( element, options ) {
        return element.fadeOut( options );
    }

    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param  Element element   A jQuery element
     * @param  String  duration  A string or number determining how long the animation will run.
     * @param  String  easing    A string indicating which easing function to use for the transition.
     * @param  Fluxo   complete  A function to call once the animation is complete, called once per matched element.
     * @param  Object  params    params passado to function
     * @return jQuery
     */
    maker_jQuery.fadeOut = function ( element, duration, easing, complete, params ) {
        return element.fadeOut( duration, easing, function( ) {
            return executeRuleFromJS( complete, [ this, params ] );
        });
    }

    /**
     * Adjust the opacity of the matched elements.
     *
     * @param  Element element   A jQuery element
     * @param  String  duration  A string or number determining how long the animation will run.
     * @param  String  opacity   A number between 0 and 1 denoting the target opacity.
     * @param  String  easing    A string indicating which easing function to use for the transition.
     * @param  Fluxo   complete  A function to call once the animation is complete.
     * @param  Object  params    params passado to function
     * @return jQuery
     */
    maker_jQuery.fadeToggle = function ( element, duration, opacity, easing, complete, params ) {
        return element.fadeToggle( duration, opacity, easing, function( ) {
            return executeRuleFromJS( complete, [ this, params ] );
        });
    }

    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param  Element element   A jQuery element
     * @param  Object  options   A map of additional options to pass to the method.
     * @return jQuery
     */
    maker_jQuery.fadeToggleOptions = function ( element, options ) {
        return element.fadeToggle( options );
    }

    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param  Element element   A jQuery element
     * @param  String  duration  A string or number determining how long the animation will run.
     * @param  String  easing    A string indicating which easing function to use for the transition.
     * @param  Fluxo   complete  A function to call once the animation is complete, called once per matched element.
     * @param  Object  params    params passado to function
     * @return jQuery
     */
    maker_jQuery.fadeToggle = function ( element, duration, easing, complete, params ) {
        return element.fadeToggle( duration, easing, function( ) {
            return executeRuleFromJS( complete, [ this, params ] );
        });
    }

    /**
     * Reduce the set of matched elements to those that match the selector or pass the function's test.
     *
     * @param  Element element   A jQuery element
     * @param  Object  selector  A string containing a selector expression to match the current set of elements against.
     *                           or One or more DOM elements to match the current set of elements against.
     *                           or An existing jQuery object to match the current set of elements against.
     * @return jQuery
     */
    maker_jQuery.filter = function ( element, selector ) {
        return element.filter( selector );
    }

    /**
     * Reduce the set of matched elements to those that match the selector or pass the function's test.
     *
     * @param  Element element   A jQuery element
     * @param  Fluxo   fluxo     A function used as a test for each element in the set. this is the current DOM element.
     * @param  Object  params    params passado to function
     * @return jQuery
     */
    maker_jQuery.filterHandler = function ( element, fluxo, params ) {
        return element.filter( params, function( index, element ) {
            return executeRuleFromJS( fluxo, [ this, index, element, params ] );
        });
    }

    /**
     * Get the descendants of each element in the current set of matched elements,
     * filtered by a selector, jQuery object, or element.
     *
     * @param  Element element   A jQuery element
     * @param  Object  selector  A string containing a selector expression to match elements against.
     *                           or An element or a jQuery object to match elements against.
     * @return jQuery
     */
    maker_jQuery.find = function ( element, selector ) {
        return element.find( selector );
    }

    /**
     * Stop the currently-running animation, remove all queued animations,
     * and complete all animations for the matched elements.
     *
     * @param  Element element   A jQuery element
     * @param  String  queue     The name of the queue in which to stop animations.
     * @return jQuery
     */
    maker_jQuery.finish = function ( element, queue ) {
        return element.finish( queue );
    }

    /**
     * Reduce the set of matched elements to the first in the set.
     *
     * @param  Element element   A jQuery element
     * @return jQuery
     */
    maker_jQuery.first = function ( element ) {
        return element.first();
    }

    /**
     * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
     *
     * @param  Element element   A jQuery element
     * @return jQuery
     */
    maker_jQuery.focus = function ( element ) {
        return element.focus();
    }

    /**
     * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
     *
     * @param  Element element   A jQuery element
     * @param  Fluxo   fluxo     A function to execute each time the event is triggered.
     * @param  Object  params    params passado to function
     * @return jQuery
     */
    maker_jQuery.focusHandler = function ( element, fluxo, params ) {
        return element.focus( params, function( eventObject ) {
            return executeRuleFromJS( fluxo, [ this, eventObject, params ] );
        });
    }

    /**
     * Retrieve one of the elements matched by the jQuery object.
     * if Index is null then Retrieve the elements matched by the jQuery object.
     *
     * @param  Element element   A jQuery element
     * @param  Integer index     A zero-based integer indicating which element to retrieve.
     * @return Element
     */
    maker_jQuery.get = function ( element, index ) {
        return element.get( index );
    }

    /**
     * Reduce the set of matched elements to those that have a descendant that
     * matches the selector or DOM element.
     *
     * @param  Element element   A jQuery element
     * @param  Object  selector  A string containing a selector expression to match elements against.
     *                           or A DOM element to match elements against.
     * @return Booelan
     */
    maker_jQuery.has = function ( element, selector ) {
        return element.has( selector );
    }

    /**
     * Determine whether any of the matched elements are assigned the given class.
     *
     * @param  Element element   A jQuery element
     * @param  String  className The class name to search for.
     * @return Booelan
     */
    maker_jQuery.hasClass = function ( element, className  ) {
        return element.hasClass( className  );
    }

    /**
     * Set the CSS height of every matched element.
     *
     * @param  Element element   A jQuery element
     * @param  String  value     An integer representing the number of pixels, or an integer
     *                           with an optional unit of measure appended (as a string).
     * @return Number
     */
    maker_jQuery.setHeight = function ( element, value ) {
        return element.height( value );
    }

    /**
     * Set the CSS height of every matched element.
     *
     * @param  Element element   A jQuery element
     * @param  Fluxo   fluxo     A function returning the height to set. Receives the
     *                           index position of the element in the set and the old
     *                           height as arguments. Within the function, this refers
     *                           to the current element in the set.
     * @param  Object  params    params passado to function
     * @return jQuery
     */
    maker_jQuery.setHeightHandler = function ( element, fluxo, params ) {
        return element.height( function( index, height ) {
            return executeRuleFromJS( fluxo, [ this, index, height, params ] );
        });
    }

    /**
     * Hide the matched elements.
     *
     * @return Integer
     */
    maker_jQuery.hide = function ( element ) {
        return element.hide();
    }

    /**
     * Bind a single handler to the matched elements, to be executed when the
     * mouse pointer enters or leaves the elements.
     *
     * @param  Element element   A jQuery element
     * @param  Object  options   A map of additional options to pass to the method.
     * @return jQuery
     */
    maker_jQuery.hideOptions = function ( element, options ) {
        return element.hide( options );
    }

    /**
     * Bind a single handler to the matched elements, to be executed when the
     * mouse pointer enters or leaves the elements.
     *
     * @param  Element element   A jQuery element
     * @param  String  duration  A string or number determining how long the animation will run.
     * @param  String  easing    A string indicating which easing function to use for the transition.
     * @param  Fluxo   complete  A function to call once the animation is complete, called once per matched element.
     * @param  Object  params    params passado to function
     * @return jQuery
     */
    maker_jQuery.hide = function ( element, duration, easing, complete, params ) {
        return element.hide( duration, easing, function( ) {
            return executeRuleFromJS( complete, [ this, params ] );
        });
    }


    /**
     * Bind two handlers to the matched elements, to be executed when the mouse
     * pointer enters and leaves the elements.
     *
     * @param  Element element   A jQuery element
     * @param  Fluxo   fluxo     A function to execute when the mouse pointer enters the element.
     * @param  Object  params    params passado to function
     * @param  Fluxo   fluxoTwo  A function to execute when the mouse pointer leaves the element..
     * @param  Object  paramsTwo params passado to function
     * @return jQuery
     */
    maker_jQuery.hoverTwo = function ( element, fluxo, params, fluxoTwo, paramsTwo ) {
        return element.hover( function( eventObject ) {
            return executeRuleFromJS( fluxo, [ this, eventObject, params ] );
        }, function( eventObject ) {
            return executeRuleFromJS( fluxoTwo, [ this, eventObject, paramsTwo ] );
        });
    }

    /**
     * Bind a single handler to the matched elements, to be executed when the
     * mouse pointer enters or leaves the elements.
     *
     * @param  Element element   A jQuery element
     * @param  Fluxo   fluxo     A function to execute when the mouse pointer enters or leaves the element.
     * @param  Object  params    params passado to function
     * @return jQuery
     */
    maker_jQuery.hover = function ( element, fluxo, params ) {
        return element.hover( function( eventObject ) {
            return executeRuleFromJS( fluxo, [ this, eventObject, params ] );
        });
    }

    /**
     * Get the HTML contents of the first element in the set of matched elements.
     *
     * @return Integer
     */
    maker_jQuery.getHtml = function ( element ) {
        return element.html();
    }

    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param  Element element  A jQuery element
     * @param  Object  value    A string of HTML to set as the content of each matched element.
     * @return jQuery
     */
    maker_jQuery.setHtml = function ( element, htmlString ) {
        return element.html( htmlString );
    }

    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param  Element element  A jQuery element
     * @param  Fluxo   fluxo    A function returning the HTML content to set. Receives the
     *                          index position of the element in the set and the old HTML
     *                          value as arguments. jQuery empties the element before calling
     *                          the function; use the oldhtml argument to reference the previous
     *                          content. Within the function, this refers to the current element in the set.
     * @param  Object  params   params passado to function
     * @return jQuery
     */
    maker_jQuery.setInnerHeightHandler = function ( element, fluxo, params ) {
        return element.html( function( index, oldhtml ) {
            return executeRuleFromJS( fluxo, [ this, index, oldhtml, params ] );
        });
    }

    /**
     * Search for a given element from among the matched elements.
     *
     * @return Integer
     */
    maker_jQuery.getIndex = function ( element ) {
        return element.index();
    }

    /**
     * Search for a given element from among the matched elements.
     *
     * @param  Element element  A jQuery element
     * @param  Object  selector A selector representing a jQuery collection in which to look for an element.
     *                          or The DOM element or first element within the jQuery object to look for.
     * @return Integer
     */
    maker_jQuery.setIndex = function ( element, selector ) {
        return element.index( selector );
    }

    /**
     * Get the current computed height for the first element in the set of
     * matched elements, including padding but not border.
     *
     * @return Number
     */
    maker_jQuery.getInnerHeight = function ( element ) {
        return element.innerHeight();
    }

    /**
     * Insert every element in the set of matched elements after the target.
     *
     * @param  Element element  A jQuery element
     * @param  Object  value    A number representing the number of pixels, or a
     *                          number along with an optional unit of measure
     *                          appended (as a string).
     * @return jQuery
     */
    maker_jQuery.setInnerHeight = function ( element, value ) {
        return element.innerHeight( value );
    }

    /**
     * Insert every element in the set of matched elements after the target.
     *
     * @param  Element element  A jQuery element
     * @param  Fluxo   fluxo    A function returning the inner height (including padding but not border)
     *                          to set. Receives the index position of the element in the set and
     *                          the old inner height as arguments. Within the function, this refers
     *                          to the current element in the set.
     * @return jQuery
     */
    maker_jQuery.setInnerHeightHandler = function ( element, fluxo, params ) {
        return element.innerHeight( function( index, height  ) {
            return executeRuleFromJS( fluxo, [ this, index, height, params ] );
        });
    }

    /**
     * Insert every element in the set of matched elements after the target.
     *
     * @param  Element element  A jQuery element
     * @param  Object  target   A selector, element, array of elements, HTML string,
     *                          or jQuery object; the matched set of elements will be
     *                          inserted after the element(s) specified by this parameter.
     * @return jQuery
     */
    maker_jQuery.insertAfter = function ( element, target ) {
        return element.insertAfter( target );
    }

    /**
     * Insert every element in the set of matched elements before the target.
     *
     * @param  Element element  A jQuery element
     * @param  Object  target   A selector, element, array of elements, HTML string,
     *                          or jQuery object; the matched set of elements will be
     *                          inserted before the element(s) specified by this parameter.
     * @return jQuery
     */
    maker_jQuery.insertBefore = function ( element, target ) {
        return element.insertBefore( target );
    }

    /**
     * Check the current matched set of elements against a selector, element,
     * or jQuery object and return true if at least one of these elements
     * matches the given arguments.
     *
     * @param  Element element  A jQuery element
     * @param  Element selector A string containing a selector expression to match elements against.
     *                          or An existing jQuery object to match the current set of elements against.
     *                          or One or more elements to match the current set of elements against.
     * @return Boolean
     */
    maker_jQuery.is = function ( element, selector ) {
        return element.is( selector );
    }

    /**
     * Check the current matched set of elements against a selector, element,
     * or jQuery object and return true if at least one of these elements
     * matches the given arguments.
     *
     * @param  Element element A jQuery element
     * @param  Fluxo   fluxo   A function used as a test for every element in the set.
     *                         It accepts two arguments, index, which is the element's
     *                         index in the jQuery collection, and element, which is
     *                         the DOM element. Within the function, this refers to
     *                         the current DOM element.
     * @param  Object params   params passado to the function
     * @return undefined
     */
    maker_jQuery.isFunction = function ( element, fluxo, params ) {
        return element.is( function( index, element ) {
            return executeRuleFromJS( fluxo, [ this, index, element, params ] );
        });
    }


    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param  Object selector A string containing a selector expression
     * @return jQuery
     */
    maker_jQuery.jQuery = function ( selector ) {
        return $( selector );
    }

    /**
     * A string containing the jQuery version number.
     *
     * @return String
     */
    maker_jQuery.fnjQuery = function ( url, settings ) {
      return $.fn.jquery;
    }

    /**
     * Set default values for future Ajax requests. Its use is not recommended.
     *
     * @param String url      A string containing the URL to which the request is sent.
     * @param Object settings A set of key/value pairs that configure the Ajax request.
     *                        All settings are optional. A default can be set for any
     *                        option with $.ajaxSetup(). See jQuery.ajax( settings )
     *                        below for a complete list of all settings.
     * @return void
     */
    maker_jQuery.ajax = function ( url, settings ) {
      return $.ajax( url, settings );
    }

    /**
     * Handle custom Ajax options or modify existing options before each
     * request is sent and before they are processed by $.ajax().
     *
     * @param  String dataType An optional string containing one or more space-separated dataTypes
     * @param  Fluxo  handler  A handler to set default values for future Ajax requests.
     * @param  Object params   params passado para function
     * @return undefined
     */
    maker_jQuery.ajaxPrefilter = function ( dataType, handler ) {
        return $.ajaxPrefilter( dataType, function( options, originalOptions, jqXHR ) {
            return executeRuleFromJS( handler, [ this, options, originalOptions, jqXHR, params ] );
        });
    }

    /**
     * Set default values for future Ajax requests. Its use is not recommended.
     *
     * @param String options A set of key/value pairs that configure the default
     *                       Ajax request. All options are optional.
     * @return void
     */
    maker_jQuery.ajaxSetup = function ( options  ) {
      return $.ajaxSetup( options  );
    }

    /**
     * Creates an object that handles the actual transmission of Ajax data.
     *
     * @param  String dataType A string identifying the data type to use
     * @param  Fluxo  handler  A handler to return the new transport object to use
     *                         with the data type provided in the first argument.
     * @param  Object params   params passado para function
     * @return undefined
     */
    maker_jQuery.ajaxTransport = function ( dataType, handler ) {
        return $.ajaxTransport( dataType, function( options, originalOptions, jqXHR ) {
            return executeRuleFromJS( handler, [ this, options, originalOptions, jqXHR, params ] );
        });
    }

    /**
     * A multi-purpose callbacks list object that provides a powerful way to manage callback lists.
     *
     * @param String flags An optional list of space-separated flags that change how the callback list behaves.
     * @return Callbacks
     */
    maker_jQuery.Callbacks = function ( flags ) {
      return $.Callbacks( flags );
    }

    /**
     * Check to see if a DOM element is a descendant of another DOM element.
     *
     * @param  Element container The DOM element that may contain the other element.
     * @param  Element contained The DOM element that may be contained by (a descendant of) the other element.
     * @return Boolean
     */
    maker_jQuery.contains = function ( container, contained ) {
      return $.contains( container, contained );
    }

    /**
     * Hook directly into jQuery to override how particular CSS properties are
     * retrieved or set, normalize CSS property naming, or create custom properties.
     *
     * @return Object
     */
    maker_jQuery.cssHooks = function () {
      return $.cssHooks;
    }

    /**
     * An object containing all CSS properties that may be used without a unit.
     * The .css() method uses this object to see if it may append px to unitless values.
     *
     * @return Object
     */
    maker_jQuery.cssNumber = function () {
      return $.cssNumber;
    }

    /**
     * Returns value at named data store for the element, as set by
     * jQuery.data(element, name, value), or the full data store for the element.
     *
     * @param  Element element The DOM element to associate with the data.
     * @param  String  key     A string naming the piece of data to set.
     * @return Object
     */
    maker_jQuery.getData = function ( element, key ) {
      return $.data( element, key );
    }

    /**
     * Returns value at named data store for the element, as set by
     * jQuery.data(element, name, value), or the full data store for the element.
     *
     * @param  Element element The DOM element to associate with the data.
     * @param  String  key     A string naming the piece of data to set.
     * @param  Object  value   The new data value; this can be any Javascript type except undefined.
     * @return Object
     */
    maker_jQuery.setData = function ( element, key, value ) {
      return $.data( element, key, value );
    }

    /**
     * A factory function that returns a chainable utility object with methods
     * to register multiple callbacks into callback queues, invoke callback
     * queues, and relay the success or failure state of any synchronous
     * or asynchronous function.
     *
     * @param  Element beforeStart A DOM element from which to remove and execute a queued function.
     * @return Deferred
     */
    maker_jQuery.Deferred = function ( beforeStart ) {
      return $.Deferred( beforeStart );
    }


    /**
     * Execute the next function on the queue for the matched element.
     *
     * @param  Element element   A DOM element from which to remove and execute a queued function.
     * @param  String  queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @return undefined
     */
    maker_jQuery.dequeue = function ( element, queueName ) {
      return $.dequeue( element, queueName );
    }

    /**
     * A generic iterator function, which can be used to seamlessly iterate
     * over both objects and arrays. Arrays and array-like objects with a
     * length property (such as a function's arguments object) are iterated
     * by numeric index, from 0 to length-1. Other objects are iterated
     * via their named properties.
     *
     * @param  Object object  The array to iterate over.
     * @param  Object fluxo   The function that will be executed on every object.
     * @param  Object params  params passado para function
     * @return void
     */
    maker_jQuery.each = function ( object, fluxo, params ) {
        return $.each( object, function(index, value ) {
            return executeRuleFromJS( fluxo, [ this, index, value, params ] );
        });
    }

    /**
     * Takes a string and throws an exception containing it.
     *
     * @param  Object message The message to send out.
     * @return void
     */
    maker_jQuery.error = function ( message  ) {
      $.error( message  );
    }

    /**
     * Escapes any character that has a special meaning in a CSS selector.
     *
     * @param  Object selector A string containing a selector expression to escape.
     * @return Number
     */
    maker_jQuery.escapeSelector = function ( selector ) {
      return $.escapeSelector( selector );
    }

    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param  Boolean deep   If true, the merge becomes recursive (aka. deep copy).
     * @param  Object target  An object that will receive the new properties if additional
     *                        objects are passed in or that will extend the jQuery namespace
     *                        if it is the sole argument.
     * @param  Object object1 An object containing additional properties to merge in.
     * @param  Object objectN Additional objects containing properties to merge in.
     * @return Object
     */
    maker_jQuery.extend = function ( deep, target, object1, objectN ) {
      return $.extend( deep, target, object1, objectN );
    }

    /**
     * Globally disable all animations.
     *
     * @param  Object object An object to merge onto the jQuery prototype.
     * @return Number
     */
    maker_jQuery.getFxExtend = function ( object ) {
      return $.fx.extend(object);
    }

    /**
     * Globally disable all animations.
     *
     * @return Number
     */
    maker_jQuery.getFxInterval = function () {
      return $.fx.interval;
    }

    /**
     * The rate (in milliseconds) at which animations fire.
     *
     * @param  Number  value
     * @return Number
     */
    maker_jQuery.setfxInterval = function ( value ) {
      return $.fx.interval = value;
    }

    /**
     * Globally disable all animations.
     *
     * @return Boolean
     */
    maker_jQuery.getFxOff = function () {
      return $.fx.off;
    }

    /**
     * Globally disable all animations.
     *
     * @param  Boolean  value
     * @return Boolean
     */
    maker_jQuery.setFxOff = function ( value ) {
      return $.fx.off = value;
    }

    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param  String  url      A string containing the URL to which the request is sent.
     * @param  Object  data     A plain object or string that is sent to the server with the request.
     * @param  Fluxo   success  A callback function that is executed if the request succeeds.
     *                          Required if dataType is provided, but you can use null or
     *                          jQuery.noop as a placeholder.
     * @param  Object  params   params passed to the function
     * @param  String  dataType The type of data expected from the server. Default:
     *                          Intelligent Guess (xml, json, script, text, html).
     * @return jqXHR
     */
    maker_jQuery.get = function ( url, data, success, params, dataType ) {
      if ( success ) {
        return $.get( url, data, dataType );
      }

      return $.get( url, data, function( data, textStatus, jqXHR ) {
        return executeRuleFromJS( success, [ this, data, textStatus, jqXHR, params ] );
      }, dataType);
    }

    /**
     * Load JSON-encoded data from the server using a GET HTTP request.
     *
     * @param  String  url     The array-like object to search through.
     * @param  Object  data    A plain object or string that is sent to the server with the request.
     * @param  Fluxo   success A callback function that is executed if the request succeeds.
     * @param  Object  params  params passed to the function
     * @return jqXHR
     */
    maker_jQuery.getJSON = function ( url, data, success, params ) {
      if ( success ) {
        return $.getJSON( url, data );
      }

      return $.getJSON( url, data, function( data, textStatus, jqXHR ) {
        return executeRuleFromJS( success, [ this, data, textStatus, jqXHR, params ] );
      });
    }

    /**
     * Load a JavaScript file from the server using a GET HTTP request,
     * then execute it.
     *
     * @param  Object  url     The array-like object to search through.
     * @param  Fluxo   success A callback function that is executed if the request succeeds.
     * @param  Object  params  params passed to the function
     * @return jqXHR
     */
    maker_jQuery.getScript = function ( url, success, params) {
      if ( success ) {
        return $.getScript( url );
      }

      return $.getScript( url, function( script, textStatus, jqXHR ) {
        return executeRuleFromJS( success, [ this, script, textStatus, jqXHR, params ] );
      });
    }

    /**
     * Execute some JavaScript code globally.
     *
     * @param  String  code The JavaScript code to execute.
     * @return void
     */
    maker_jQuery.hasData = function ( code ) {
      return $.hasData( code );
    }

    /**
     * Finds the elements of an array which satisfy a filter function.
     * The original array is not affected.
     *
     * @param  Object  array  The array-like object to search through.
     * @param  Fluxo   func   The function to process each item against. The first argument
     *                        to the function is the item, and the second argument is the
     *                        index. The function should return a Boolean value.
     *                        this will be the global window object.
     * @param  Object  params params passed to the function
     * @param  Boolean invert If "invert" is false, or not provided, then the function
     *                        returns an array consisting of all elements for which
     *                        "callback" returns true. If "invert" is true, then the
     *                        function returns an array consisting of all elements
     *                        for which "callback" returns false.
     * @return Array
     */
    maker_jQuery.grep = function ( array, func, params, invert ) {
      return $.grep( array, function( elementOfArray, indexInArray ) {
        return executeRuleFromJS( func, [ this, elementOfArray, indexInArray, params ] );
      }, invert);
    }

    /**
     * Determine whether an element has any jQuery data associated with it.
     *
     * @param  Element element A DOM element to be checked for data.
     * @return Boolean
     */
    maker_jQuery.hasData = function ( element ) {
      return $.hasData( element );
    }

    /**
     * Holds or releases the execution of jQuery's ready event.
     *
     * @param  Boolean   html Indicates whether the ready hold is being requested or released
     * @return undefined
     */
    maker_jQuery.holdReady = function ( html ) {
      return $.holdReady( html );
    }

    /**
     * Modify and filter HTML strings passed through jQuery manipulation methods.
     *
     * @param  String html The HTML string on which to operate.
     * @return String
     */
    maker_jQuery.htmlPrefilter = function ( html ) {
      return $.htmlPrefilter( html );
    }

    /**
     * Search for a specified value within an array and return
     * its index (or -1 if not found).
     *
     * @param  Object  value     The value to search for.
     * @param  Array   array     An array through which to search.
     * @param  Number  fromIndex The index of the array at which to begin the search.
     *                           The default is 0, which will search the whole array.
     * @return Number
     */
    maker_jQuery.inArray = function ( value, array, fromIndex ) {
      return $.inArray( value, array, fromIndex );
    }

    /**
     * Determine whether the argument is an array.
     *
     * @param  Object  obj Object to test whether or not it is an array.
     * @return Boolean
     */
    maker_jQuery.isArray = function ( obj ) {
      return $.isArray( obj );
    }

    /**
     * Check to see if an object is empty (contains no enumerable properties).
     *
     * @param  Object  obj The object that will be checked to see if it's empty.
     * @return Boolean
     */
    maker_jQuery.isEmptyObject = function ( obj ) {
      return $.isEmptyObject( obj );
    }

    /**
     * Determine if the argument passed is a JavaScript function object.
     *
     * @param  Object  obj Object to test whether or not it is a function.
     * @return Boolean
     */
    maker_jQuery.isFunction = function ( obj ) {
      return $.isFunction( obj );
    }

    /**
     * Determines whether its argument represents a JavaScript number.
     *
     * @param  Object  value The value to be tested.
     * @return Boolean
     */
    maker_jQuery.isNumeric = function ( value ) {
      return $.isNumeric( value );
    }

    /**
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     *
     * @param  Object  obj The object that will be checked to see if it's a plain object.
     * @return Boolean
     */
    maker_jQuery.isPlainObject = function ( obj ) {
      return $.isPlainObject( obj );
    }

    /**
     * Determine whether the argument is a window.
     *
     * @param  Element obj Object to test whether or not it is a window.
     * @return Boolean
     */
    maker_jQuery.isWindow = function ( obj ) {
      return $.isWindow( obj );
    }

    /**
     * Check to see if a DOM node is within an XML document (or is an XML document).
     *
     * @param  Element node The DOM node that will be checked to see if it's in an XML document.
     * @return Boolean
     */
    maker_jQuery.isXMLDoc = function ( node ) {
      return $.isXMLDoc( node );
    }

    /**
     * Convert an array-like object into a true JavaScript array.
     *
     * @param  Object obj Any object to turn into a native Array.
     * @return Array
     */
    maker_jQuery.makeArray = function ( obj ) {
      return $.makeArray( obj );
    }

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param  Object object   The Array to translate. or
     *                         The Object to translate.
     * @param  Fluxo  callback The function to process each item against. The first argument
     *                         to the function is the array item, the second argument is the
     *                         index in array or the key of the object property The function
     *                         can return any value. A returned array will be flattened into
     *                         the resulting array. Within the function, this refers to the
     *                         global (window) object.
     * @param  String params   params passado to the function
     * @return jqXHR
     */
    maker_jQuery.map = function ( object, callback, params ) {
      return $.map( object, function( elementOf, key ) {
        return executeRuleFromJS( success, [ this, elementOf, key, params ] );
      });
    }

    /**
     * Merge the contents of two arrays together into the first array.
     *
     * @param  Object first  The first array-like object to merge, the elements of second added.
     * @param  Object second The second array-like object to merge into the first, unaltered.
     * @return Array
     */
    maker_jQuery.merge = function ( first, second ) {
      return $.merge( first, second );
    }

    /**
     * Relinquish jQuery's control of the $ variable.
     *
     * @param  Boolean removeAll A Boolean indicating whether to remove all jQuery
     *                           variables from the global scope (including jQuery itself).
     * @return String
     */
    maker_jQuery.noConflict = function ( removeAll ) {
      return $.noConflict( removeAll );
    }

    /**
     * An empty function.
     *
     * @return undefined
     */
    maker_jQuery.noop = function () {
      return $.noop();
    }

    /**
     * Return a number representing the current time.
     *
     * @return Number
     */
    maker_jQuery.now = function () {
      return $.now();
    }

    /**
     * Create a serialized representation of an array, a plain object,
     * or a jQuery object suitable for use in a URL query string or Ajax request.
     * In case a jQuery object is passed, it should contain input elements with name/value properties.
     *
     * @param  Object  obj         An array, a plain object, or a jQuery object to serialize.
     * @param  Boolean traditional A Boolean indicating whether to perform a traditional "shallow" serialization.
     * @return String
     */
    maker_jQuery.param = function ( obj, traditional ) {
      return $.param( obj, traditional );
    }

    /**
     * Takes a well-formed JSON string and returns the resulting JavaScript value.
     *
     * @param  String  data        HTML string to be parsed
     * @param  Element context     Document element to serve as the context in
     *                             which the HTML fragment will be created
     * @param  Boolean keepScripts A Boolean indicating whether to include
     *                             scripts passed in the HTML string
     * @return jqXHR
     */
    maker_jQuery.parseHTML = function ( data, context, keepScripts ) {
      return $.parseHTML( data, context, keepScripts );
    }

    /**
     * Takes a well-formed JSON string and returns the resulting JavaScript value.
     *
     * @param  String json The JSON string to parse.
     * @return jqXHR
     */
    maker_jQuery.parseJSON = function ( json ) {
      return $.parseJSON( json );
    }

    /**
     * Parses a string into an XML document.
     *
     * @param  String data A well-formed XML string to be parsed
     * @return jqXHR
     */
    maker_jQuery.parseXML = function ( data ) {
      return $.parseXML( data );
    }

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param  String url      A string containing the URL to which the request is sent.
     * @param  Object data     A plain object or string that is sent to the server
     *                         with the request.
     * @param  Fluxo  success  A callback function that is executed if the request
     *                         succeeds. Required if dataType is provided,
     *                         but can be null in that case.
     * @param  String dataType The type of data expected from the server.
     *                         Default: Intelligent Guess (xml, json, script, text, html).
     * @return jqXHR
     */
    maker_jQuery.post = function ( url, data, success, dataType ) {
      return $.post( url, data, function( data, textStatus, jqXHR ) {
        return executeRuleFromJS( success, [ this, data, textStatus, jqXHR ] );
      }, dataType );
    }

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param  Object settings A set of key/value pairs that configure the Ajax request.
     *                         All properties except for url are optional. A default can
     *                         be set for any option with $.ajaxSetup().
     *                         See jQuery.ajax( settings ) for a complete list of
     *                         all settings. Type will automatically be set to POST.
     * @return jqXHR
     */
    maker_jQuery.postSettings = function ( settings ) {
      return $.post( settings );
    }

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param  Fluxo  handler             The function whose context will be changed.
     * @param  Object context             The object to which the context (this) of the
     *                                    function should be set.
     * @param  Object additionalArguments Any number of arguments to be passed to the
     *                                    function referenced in the function argument.
     * @return Function
     */
    maker_jQuery.proxy = function ( handler, context, additionalArguments ) {
      return $.proxy( function() {
        return executeRuleFromJS( handler, [ this, additionalArguments ] );
      }, context, additionalArguments );
    }

    /**
     * Show the queue of functions to be executed on the matched element.
     *
     * @param  Element element   A DOM element to inspect for an attached queue.
     * @param  String  queueName A string containing the name of the queue.
     *                           Defaults to fx, the standard effects queue.
     * @return Array
     */
    maker_jQuery.getQueue = function ( element, queueName ) {
      return $.queue( element, queueName );
    }

    /**
     * Manipulate the queue of functions to be executed on the matched element.
     *
     * @param  Element element   A DOM element where the array of queued functions is attached.
     * @param  String  queueName string containing the name of the queue.
     *                           Defaults to fx, the standard effects queue.
     * @param  Array   newQueue  An array of functions to replace the current queue contents.
     * @return jQuery
     */
    maker_jQuery.setQueue = function ( element, queueName, newQueue ) {
      return $.queue( element, queueName, newQueue );
    }

    /**
     * Manipulate the queue of functions to be executed on the matched element.
     *
     * @param  Element element   A DOM element where the array of queued functions is attached.
     * @param  String  queueName string containing the name of the queue.
     *                           Defaults to fx, the standard effects queue.
     * @param  Fluxo   callback  An array of functions to replace the current queue contents.
     * @param  Object  params    params passed to the function
     * @return jQuery
     */
    maker_jQuery.setQueue = function ( element, queueName, callback ) {
      return $.queue( duration, easing, function() {
        return executeRuleFromJS( callback, [ this, params ] );
      });
    }

    /**
     * Handles errors thrown synchronously in functions wrapped in jQuery().
     *
     * @param  Error error An error thrown in the function wrapped in jQuery().
     * @return Selector
     */
    maker_jQuery.readyException = function ( error ) {
      return $.readyException( error );
    }

    /**
     * Remove a previously-stored piece of data.
     *
     * @param  Element element A DOM element from which to remove data.
     * @param  String  name    A string naming the piece of data to remove.
     * @return String
     */
    maker_jQuery.removeData = function ( element, name ) {
      return $.removeData( element, name );
    }

    /**
     * Creates an object containing a set of properties ready to be used in the
     * definition of custom animations.
     *
     * @param  String duration A string or number determining how long the animation will run.
     * @param  String easing   A string indicating which easing function to use for the transition.
     * @param  Fluxo  complete A function to call once the animation is complete, called once per matched element.
     * @param  Object params   params passado to the function
     * @return jQuery
     */
    maker_jQuery.speed = function ( duration, easing, complete, params ) {
      return $.speed( duration, easing, function() {
        if ( complete ) {
          return executeRuleFromJS( complete, [ this, params ] );
        }
      });
    }

    /**
     * A collection of properties that represent the presence of different browser
     * features or bugs. Intended for jQuery's internal use; specific properties
     * may be removed when they are no longer needed internally to improve page
     * startup performance. For your own project's feature-detection needs, we
     * strongly recommend the use of an external library such as Modernizr instead
     * of dependency on properties in jQuery.support.
     *
     * @return Object
     */
    maker_jQuery.support = function () {
      return $.support;
    }

    /**
     * Remove the whitespace from the beginning and end of a string.
     *
     * @param  Object str The string to trim.
     * @return String
     */
    maker_jQuery.trim = function ( str ) {
      return $.trim( str );
    }

    /**
     * Determine the internal JavaScript [[Class]] of an object.
     *
     * @param  Object obj Object to get the internal JavaScript [[Class]] of.
     * @return String
     */
    maker_jQuery.type = function ( obj ) {
      return $.type( obj );
    }

    /**
     * Sorts an array of DOM elements, in place, with the duplicates removed.
     * Note that this only works on arrays of DOM elements, not strings or numbers.
     *
     * @param  Array arr The Array of DOM elements.
     * @return Array
     */
    maker_jQuery.unique = function ( arr ) {
      return $.unique( arr );
    }

    /**
     * Sorts an array of DOM elements, in place, with the duplicates removed.
     * Note that this only works on arrays of DOM elements, not strings or numbers.
     *
     * @param  Array arr The Array of DOM elements.
     * @return Array
     */
    maker_jQuery.uniqueSort = function ( arr ) {
      return $.uniqueSort( arr );
    }

    /**
     * Provides a way to execute callback functions based on zero or more objects,
     * usually Deferred objects that represent asynchronous events.
     *
     * @param  Deferred deferreds Zero or more Deferred objects, or plain JavaScript objects.
     * @return jQuery
     */
    maker_jQuery.when = function ( deferreds ) {
      return $.when( deferreds );
    }

    /**
     * Reduce the set of matched elements to the final one in the set.
     *
     * @param  jQuery element  jQuery element
     * @return jQuery
     */
    maker_jQuery.last = function ( element ) {
      return element.last();
    }

    /**
     * Bind an event handler to the "keydown" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute each time the event is triggered.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.keydown = function ( element, handler, params ) {
      return element.keydown( function( event ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, event, params ] );
        }
      });
    }

    /**
     * Bind an event handler to the "keypress" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute each time the event is triggered.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.keypress = function ( element, handler, params ) {
      return element.keypress( function( event ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, event, params ] );
        }
      });
    }

    /**
     * Bind an event handler to the "keyup" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute each time the event is triggered.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.keyup = function ( element, handler, params ) {
      return element.keyup( function( event ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, event, params ] );
        }
      });
    }

    /**
     * Reduce the set of matched elements to the final one in the set.
     *
     * @param  jQuery element  jQuery element
     * @return jQuery
     */
    maker_jQuery.last = function ( element ) {
      return element.last();
    }

    /**
     * The number of elements in the jQuery object.
     *
     * @param  jQuery element  jQuery element
     * @return Integer
     */
    maker_jQuery.length = function ( element ) {
      return element.length;
    }

    /**
     * Load data from the server and place the returned HTML into the matched element.
     *
     * @param  jQuery element  jQuery element
     * @param  String url      A string containing the URL to which the request is sent.
     * @param  Object data     A plain object or string that is sent to the server with the request.
     * @param  Fluxo  complete A callback function that is executed when the request completes.
     * @return jQuery
     */
    maker_jQuery.load = function ( element, url, data, complete ) {
      return element.load( url, data, function( responseText, textStatus, jqXHR ) {
        if ( complete ) {
          return executeRuleFromJS( complete, [ this, responseText, textStatus, jqXHR, params ] );
        }
      });
    }

    /**
     * Pass each element in the current matched set through a function,
     * producing a new jQuery object containing the return values.
     *
     * @param  jQuery element  jQuery element
     * @param  Fluxo  callback A function object that will be invoked for each
     *                         element in the current set.
     * @param  Object params   params passed to the function
     * @return jQuery
     */
    maker_jQuery.map = function ( element, callback, params ) {
      return element.map( function( index, domElement ) {
        if ( callback ) {
          return executeRuleFromJS( callback, [ this, index, domElement, params ] );
        }
      });
    }

    /**
     * Bind an event handler to the "mousedown" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute each time the event is triggered.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.mousedown = function ( element, handler, params ) {
      return element.mousedown( function( event ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, event, params ] );
        }
      });
    }

    /**
     * Bind an event handler to the "mouseenter" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute each time the event is triggered.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.mouseenter = function ( element, handler, params ) {
      return element.mouseenter( function( event ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, event, params ] );
        }
      });
    }

    /**
     * Bind an event handler to the "mouseleave" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute each time the event is triggered.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.mouseleave = function ( element, handler, params ) {
      return element.mouseleave( function( event ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, event, params ] );
        }
      });
    }

    /**
     * Bind an event handler to the "mousemove" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute each time the event is triggered.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.mousemove = function ( element, handler, params ) {
      return element.mousemove( function( event ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, event, params ] );
        }
      });
    }

    /**
     * Bind an event handler to the "mouseout" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute each time the event is triggered.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.mouseout = function ( element, handler, params ) {
      return element.mouseout( function( event ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, event, params ] );
        }
      });
    }

    /**
     * Bind an event handler to the "mouseover" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute each time the event is triggered.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.mouseover = function ( element, handler, params ) {
      return element.mouseover( function( event ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, event, params ] );
        }
      });
    }

    /**
     * Bind an event handler to the "mouseup" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute each time the event is triggered.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.mouseup = function ( element, handler, params ) {
      return element.mouseup( function( event ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, event, params ] );
        }
      });
    }

    /**
     * Get the immediately following sibling of each element in the set of matched elements.
     * If a selector is provided, it retrieves the next sibling only if it matches that selector.
     *
     * @param  jQuery element  jQuery element
     * @param  String selector A string containing a selector expression to match elements against.
     * @return jQuery
     */
    maker_jQuery.next = function ( element, selector ) {
      return element.next( selector );
    }

    /**
     * Get all following siblings of each element in the set of matched elements,
     * optionally filtered by a selector.
     *
     * @param  jQuery element  jQuery element
     * @param  String selector A string containing a selector expression to match elements against.
     * @return jQuery
     */
    maker_jQuery.nextAll = function ( element, selector ) {
      return element.nextAll( selector );
    }

    /**
     * Get all following siblings of each element up to but not including the
     * element matched by the selector, DOM node, or jQuery object passed.
     *
     * @param  jQuery element  jQuery element
     * @param  Object selector A string containing a selector expression to indicate
     *                         where to stop matching following sibling elements.
     *                         or A DOM node or jQuery object indicating where to
     *                         stop matching following sibling elements.
     * @param  Object filter   A string containing a selector expression to match
     *                         elements against.
     * @return jQuery
     */
    maker_jQuery.nextUntil = function ( element, selector, filter ) {
      return element.nextUntil( selector, filter );
    }

    /**
     * Remove elements from the set of matched elements.
     *
     * @param  jQuery element  jQuery element
     * @param  Object selector A string containing a selector expression, a DOM element,
     *                         or an array of elements to match against the set
     *                         or An existing jQuery object to match the current
     *                         set of elements against.
     * @return jQuery
     */
    maker_jQuery.not = function ( element, selector ) {
      return element.not( selector );
    }

    /**
     * Remove elements from the set of matched elements.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function used as a test for each element in the set.
     *                        It accepts two arguments, index, which is the element's
     *                        index in the jQuery collection, and element, which is
     *                        the DOM element. Within the function, this refers to
     *                        the current DOM element.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.notHandler = function ( element, handler, params ) {
      return element.not( function( event ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, event, params ] );
        }
      });
    }

    /**
     * Remove an event handler.
     *
     * @param  jQuery element  jQuery element
     * @param  String events   One or more space-separated event types and optional
     *                         namespaces, such as "click" or "keydown.myPlugin"
     * @param  String selector A selector which should match the one originally
     *                         passed to .on() when attaching event handlers.
     * @param  Fluxo  handler  A handler function previously attached for the
     *                         event(s), or the special value false.
     * @param  Object params   params passed to the function
     * @return jQuery
     */
    maker_jQuery.off = function ( element, events, selector, handler, params ) {
      return element.off( events, selector, function( event ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, event, params ] );
        }
      });
    }

    /**
     * Get the current coordinates of the first element in the set of matched
     * elements, relative to the document.
     *
     * @param  jQuery element jQuery element
     * @return Object
     */
    maker_jQuery.getOffset = function ( element ) {
        return element.offset();
    }

    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param  jQuery element     jQuery element
     * @param  String coordinates An object containing the properties top and left,
     *                            which are numbers indicating the new top and left
     *                            coordinates for the elements.
     * @return jQuery
     */
    maker_jQuery.setOffset = function ( element, coordinates ) {
      return element.offset( coordinates );
    }

    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param jQuery element jQuery element
     * @param Fluxo  handler A function to return the coordinates to set.
     *                       Receives the index of the element in the collection
     *                       as the first argument and the current coordinates
     *                       as the second argument. The function should return
     *                       an object with the new top and left properties.
     * @param jQuery params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.setOffsetHandler = function ( element, handler, params ) {
      return element.offset( function( index, coords ) {
        return executeRuleFromJS( handler, [ this, index, coords, params ] );
      });
    }

    /**
     * Get the closest ancestor element that is positioned.
     *
     * @param  jQuery element jQuery element
     * @return jQuery
     */
    maker_jQuery.offsetParent = function ( element ) {
        return element.offsetParent();
    }

    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param  jQuery element  jQuery element
     * @param  String events   One or more space-separated event types and optional
     *                         namespaces, such as "click" or "keydown.myPlugin"
     * @param  String selector A selector string to filter the descendants of the
     *                         selected elements that trigger the event. If the
     *                         selector is null or omitted, the event is always
     *                         triggered when it reaches the selected element.
     * @param  Object data     Data to be passed to the handler in event.data
     *                         when an event is triggered.
     * @param  Fluxo  handler  A function to execute when the event is triggered.
     *                         The value false is also allowed as a shorthand
     *                         for a function that simply does return false.
     * @return jQuery
     */
    maker_jQuery.on = function ( element, events, selector, data, handler ) {
      return element.on( events, selector, data, function( event ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, event, data ] );
        }
      });
    }

    /**
     * Attach a handler to an event for the elements. The handler is executed
     * at most once per element per event type.
     *
     * @param  jQuery element  jQuery element
     * @param  String events   One or more space-separated event types and optional
     *                         namespaces, such as "click" or "keydown.myPlugin".
     * @param  String selector A selector string to filter the descendants of the
     *                         selected elements that trigger the event. If the
     *                         selector is null or omitted, the event is always
     *                         triggered when it reaches the selected element.
     * @param  Object data     Data to be passed to the handler in event.data
     *                         when an event is triggered.
     * @param  Fluxo  handler  A function to execute when the event is triggered.
     *                         The value false is also allowed as a shorthand
     *                         for a function that simply does return false.
     * @return jQuery
     */
    maker_jQuery.one = function ( element, events, selector, data, handler ) {
      return element.one( events, selector, data, function( eventObject ) {
        if ( handler ) {
          return executeRuleFromJS( handler, [ this, eventObject, data ] );
        }
      });
    }

    /**
     * Get the current computed height for the first element in the set of
     * matched elements, including padding, border, and optionally margin.
     * Returns a number (without "px") representation of the value or null if
     * called on an empty set of elements.
     *
     * @param  jQuery  element       jQuery element
     * @param  Boolean includeMargin A Boolean indicating whether to include the
     *                               element's margin in the calculation.
     * @return jQuery
     */
    maker_jQuery.getOuterHeight = function ( element, includeMargin  ) {
      return element.outerHeight( includeMargin  );
    }

    /**
     * Set the CSS outer Height of each element in the set of matched elements.
     *
     * @param  jQuery element jQuery element
     * @param  String value   A number representing the number of pixels,
     *                        or a number along with an optional unit of
     *                        measure appended (as a string).
     * @return jQuery
     */
    maker_jQuery.setOuterHeight = function ( element, value  ) {
      return element.outerHeight( value  );
    }

    /**
     * Set the CSS outer Height of each element in the set of matched elements.
     *
     * @param jQuery element jQuery element
     * @param Fluxo  handler A function returning the outer height to set. Receives
     *                       the index position of the element in the set and the
     *                       old outer height as arguments. Within the function,
     *                       this refers to the current element in the set.
     * @param jQuery params
     * @return jQuery
     */
    maker_jQuery.setOuterHeightHandler = function ( element, handler, params ) {
      return element.outerHeight( function( index, height ) {
        return executeRuleFromJS( handler, [ this, index, height, params ] );
      });
    }

    /**
     * Get the current computed width for the first element in the set of matched
     * elements, including padding and border.
     *
     * @param  jQuery  element       jQuery element
     * @param  Boolean includeMargin A Boolean indicating whether to include the
     *                               element's margin in the calculation.
     * @return jQuery
     */
    maker_jQuery.getOuterWidth = function ( element, includeMargin  ) {
      return element.outerWidth( includeMargin  );
    }

    /**
     * Set the CSS outer width of each element in the set of matched elements.
     *
     * @param  jQuery element jQuery element
     * @param  String value   A number representing the number of pixels, or a
     *                        number along with an optional unit of measure
     *                        appended (as a string).
     * @return jQuery
     */
    maker_jQuery.setOuterWidth = function ( element, value  ) {
      return element.outerWidth( value  );
    }

    /**
     * Set the CSS outer width of each element in the set of matched elements.
     *
     * @param jQuery element jQuery element
     * @param Fluxo  handler A function returning the outer width to set. Receives
     *                       the index position of the element in the set and the
     *                       old outer width as arguments. Within the function,
     *                       this refers to the current element in the set.
     * @param jQuery params
     * @return jQuery
     */
    maker_jQuery.setOuterWidthHandler = function ( element, handler, params ) {
      return element.outerWidth( function( index, width ) {
        return executeRuleFromJS( handler, [ this, index, width, params ] );
      });
    }

    /**
     * Get the parent of each element in the current set of matched elements,
     * optionally filtered by a selector.
     *
     * @param  jQuery element  jQuery element
     * @param  Object selector A string containing a selector expression to match
     *                         elements against.
     * @return jQuery
     */
    maker_jQuery.parent = function ( element, selector ) {
      return element.parent( selector );
    }

    /**
     * Get the ancestors of each element in the current set of matched elements,
     * optionally filtered by a selector.
     *
     * @param  jQuery element  jQuery element
     * @param  Object selector A string containing a selector expression to match
     *                         elements against.
     * @return jQuery
     */
    maker_jQuery.parents = function ( element, selector ) {
      return element.parents( selector );
    }

    /**
     * Get the ancestors of each element in the current set of matched elements,
     * up to but not including the element matched by the selector, DOM node,
     * or jQuery object.
     *
     * @param  jQuery   element  jQuery element
     * @param  Object   selector A string containing a selector expression to indicate
     *                           where to stop matching ancestor elements. or A DOM
     *                           node or jQuery object indicating where to stop
     *                           matching ancestor elements.
     * @param  Selector filter   A string containing a selector expression to match
     *                           elements against.
     * @return jQuery
     */
    maker_jQuery.parentsUntil = function ( element, selector, filter ) {
      return element.parentsUntil( selector, filter );
    }

    /**
     * Get the current coordinates of the first element in the set of matched elements,
     * relative to the offset parent.
     *
     * @param  jQuery element  jQuery element
     * @return Object
     */
    maker_jQuery.position = function ( element ) {
      return element.position();
    }

    /**
     * Insert content, specified by the parameter, to the beginning of each element
     * in the set of matched elements.
     *
     * @param  jQuery element    jQuery element
     * @param  Object properties DOM element, text node, array of elements and text
     *                           nodes, HTML string, or jQuery object to insert at the
     *                           beginning of each element in the set of matched elements.
     * @return jQuery
     */
    maker_jQuery.prepend = function ( element, properties ) {
      return element.prepend( properties );
    }

    /**
     * Insert content, specified by the parameter, to the beginning of each element
     * in the set of matched elements.
     *
     * @param jQuery element jQuery element
     * @param Fluxo  handler A function that returns an HTML string, DOM element(s),
     *                       text node(s), or jQuery object to insert at the beginning
     *                       of each element in the set of matched elements.
     *                       Receives the index position of the element in the set
     *                       and the old HTML value of the element as arguments.
     *                       Within the function, this refers to the current element in the set.
     * @param jQuery params
     * @return jQuery
     */
    maker_jQuery.prependHandler = function ( element, handler, params ) {
      return element.prepend( function( elementOfArray, obj ) {
        return executeRuleFromJS( handler, [ this, elementOfArray, obj, params ] );
      });
    }

    /**
     * Insert every element in the set of matched elements to the beginning
     * of the target.
     *
     * @param  jQuery element jQuery element
     * @param  Object target  A selector, element, HTML string, array of elements,
     *                        or jQuery object; the matched set of elements will
     *                        be inserted at the beginning of the element(s)
     *                        specified by this parameter.
     * @return jQuery
     */
    maker_jQuery.prependTo = function ( element, target  ) {
      return element.prependTo( target  );
    }

    /**
     * Get the immediately preceding sibling of each element in the set of
     * matched elements. If a selector is provided, it retrieves the previous
     * sibling only if it matches that selector.
     *
     * @param  jQuery element  jQuery element
     * @param  String selector A string containing a selector expression to
     *                         match elements against.
     * @return jQuery
     */
    maker_jQuery.prev = function ( element, selector ) {
      return element.prev( selector );
    }

    /**
     * Get all preceding siblings of each element in the set of matched elements,
     * optionally filtered by a selector.
     *
     * @param  jQuery element  jQuery element
     * @param  String selector A string containing a selector expression to match
     *                         elements against.
     * @return jQuery
     */
    maker_jQuery.prevAll = function ( element, selector ) {
      return element.prevAll( selector );
    }

    /**
     * Get all preceding siblings of each element up to but not including the
     * element matched by the selector, DOM node, or jQuery object.
     *
     * @param  jQuery element  jQuery element
     * @param  Object selector A string containing a selector expression to indicate
     *                         where to stop matching preceding sibling elements.
     *                         or A DOM node or jQuery object indicating where to
     *                         stop matching preceding sibling elements.
     * @param  String filter   A string containing a selector expression to match
     *                         elements against.
     * @return jQuery
     */
    maker_jQuery.prevUntil = function ( element, selector, filter ) {
      return element.prevUntil( selector, filter );
    }

    /**
     * Return a Promise object to observe when all actions of a certain type
     * bound to the collection, queued or not, have finished.
     *
     * @param  jQuery element jQuery element
     * @param  String type    The type of queue that needs to be observed.
     * @param  String target  Object onto which the promise methods have to be attached
     * @return Promise
     */
    maker_jQuery.promise = function ( element, type, target ) {
      return element.promise( type, target );
    }

    /**
     * Get the value of a property for the first element in the set of matched elements.
     *
     * @param  jQuery element       jQuery element
     * @param  String propertyName  The name of the property to get.
     * @return Object
     */
    maker_jQuery.getProp = function ( element, propertyName ) {
      return element.prop( propertyName );
    }

    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param  jQuery element       jQuery element
     * @param  String propertyName  The name of the property to set.
     * @param  String value         A value to set for the property.
     * @return jQuery
     */
    maker_jQuery.setProp = function ( element, propertyName, value ) {
      return element.prop( propertyName, value );
    }

    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param  jQuery element     jQuery element
     * @param  String properties  An object of property-value pairs to set.
     * @return jQuery
     */
    maker_jQuery.setPropProperties = function ( element, properties ) {
      return element.prop( properties );
    }

    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param jQuery element      jQuery element
     * @param String propertyName The name of the property to set.
     * @param Fluxo  handler      A function returning the value to set. Receives
     *                            the index position of the element in the set and
     *                            the old property value as arguments. Within the
     *                            function, the keyword this refers to the current element.
     * @param jQuery params
     * @return jQuery
     */
    maker_jQuery.setPropHandler = function ( element, propertyName, handler, params ) {
      return element.queue( function( index, oldPropertyValue ) {
        return executeRuleFromJS( handler, [ this, index, oldPropertyValue, params ] );
      });
    }

    /**
     * Add a collection of DOM elements onto the jQuery stack.
     *
     * @param  jQuery element   jQuery element
     * @param  Array  elements  An array of elements to push onto the stack and
     *                          make into a new jQuery object.
     * @param  String name      The name of a jQuery method that generated the
     *                          array of elements.
     * @param  Array  argument  The arguments that were passed in to the jQuery
     *                          method (for serialization).
     * @return jQuery
     */
    maker_jQuery.pushStack = function ( element, elements, name, argument ) {
      return element.pushStack( elements, name, argument );
    }

    /**
     * Show the queue of functions to be executed on the matched elements.
     *
     * @param  jQuery element   jQuery element
     * @param  String queueName A string containing the name of the queue.
     *                          Defaults to fx, the standard effects queue.
     * @return jQuery
     */
    maker_jQuery.queue = function ( element, queueName ) {
      return element.queue( queueName );
    }

    /**
     * Manipulate the queue of functions to be executed,
     * once for each matched element.
     *
     * @param  jQuery element   jQuery element
     * @param  String queueName A string containing the name of the queue.
     *                          Defaults to fx, the standard effects queue.
     * @param  array  newQueue  An array of functions to replace the current
     *                          queue contents.
     * @return jQuery
     */
    maker_jQuery.newQueue = function ( element, queueName, newQueue ) {
      return element.queue( queueName, newQueue );
    }

    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     *
     * @param  jQuery   element   jQuery element
     * @param  String   queueName A string containing the name of the queue.
     *                            Defaults to fx, the standard effects queue.
     * @param  Fluxo    callback  The new function to add to the queue, with a
     *                            function to call that will dequeue the next item.
     * @param  Object   params    params passed to the function
     * @return jQuery
     */
    maker_jQuery.queueCallback = function ( element, queueName, callback, params ) {
      return element.queue( function( next ) {
        return executeRuleFromJS( callback, [ this, next, params ] );
      });
    }

    /**
     * Specify a function to execute when the DOM is fully loaded.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute after the DOM is ready.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.ready = function ( element, handler, params ) {
     return element.ready( function() {
       return executeRuleFromJS( handler, [ this, params ] );
     });
    }

    /**
     * Remove the set of matched elements from the DOM.
     *
     * @param  jQuery element  jQuery element
     * @param  String selector A selector expression that filters the set of
     *                         matched elements to be removed.
     * @return jQuery
     */
    maker_jQuery.remove = function ( element,  selector ) {
     return element.remove( selector );
    }

    /**
     * Remove an attribute from each element in the set of matched elements.
     *
     * @param  jQuery element       jQuery element
     * @param  Strign attributeName An attribute to remove; as of version 1.7,
     *                              it can be a space-separated list of attributes.
     * @return jQuery
     */
    maker_jQuery.removeAttr = function ( element,  attributeName ) {
      return element.removeAttr( attributeName );
    }

    /**
     * Remove a single class, multiple classes, or all classes from each
     * element in the set of matched elements.
     *
     * @param  jQuery element jQuery element
     * @param  Object object  A string naming the piece of data to delete.
     *                        or An array or space-separated string naming the
     *                        pieces of data to delete.
     * @return jQuery
     */
    maker_jQuery.removeClass = function ( element, object ) {
      return element.removeClass( object );
    }

    /**
     * Remove a single class, multiple classes, or all classes from each
     * element in the set of matched elements.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function returning one or more space-separated
     *                        class names to be removed. Receives the index
     *                        position of the element in the set and the
     *                        old class value as arguments.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.removeClassHandler = function ( element, handler, params ) {
     return element.removeClass( function( index, className ) {
       return executeRuleFromJS( handler, [ this, index, className, params ] );
     });
    }

    /**
     * Remove a property for the set of matched elements.
     *
     * @param  jQuery element jQuery element
     * @param  Object object  A string naming the piece of data to delete. or An
     *                        array or space-separated string naming the pieces
     *                        of data to delete.
     * @return jQuery
     */
    maker_jQuery.removeData = function ( element, object ) {
      return element.removeData( object );
    }

    /**
     * Remove a property for the set of matched elements.
     *
     * @param  jQuery element      jQuery element
     * @param  String propertyName The name of the property to remove.
     * @return jQuery
     */
    maker_jQuery.removeProp = function ( element, propertyName ) {
      return element.removeProp( propertyName );
    }

    /**
     * Replace each element in the set of matched elements with the provided
     * new content and return the set of elements that was removed.
     *
     * @param  jQuery element    jQuery element
     * @param  Object newContent The content to insert. May be an HTML string,
     *                           DOM element, array of DOM elements,
     *                           or jQuery object.
     * @return jQuery
     */
    maker_jQuery.replaceWith = function ( element, newContent ) {
      return element.replaceWith( newContent );
    }

    /**
     * Replace each element in the set of matched elements with the provided
     * new content and return the set of elements that was removed.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function that returns content with which to
     *                        replace the set of matched elements.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.replaceWithHandler = function ( element, handler, params ) {
      return element.replaceWith( function() {
        return executeRuleFromJS( handler, [ this, params ] );
      });
    }

    /**
     * Bind an event handler to the "resize" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @return jQuery
     */
    maker_jQuery.resize = function ( element ) {
      return element.resize();
    }

    /**
     * Bind an event handler to the "resize" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute each time the event is triggered.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.resizeHandler = function ( element, handler, params ) {
      return element.resize( function( event ) {
        return executeRuleFromJS( handler, [ this, event, params ] );
      });
    }

    /**
     * Bind an event handler to the "scroll" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @return jQuery
     */
    maker_jQuery.scroll = function ( element ) {
      return element.scroll();
    }

    /**
     * Bind an event handler to the "scroll" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute each time the event is triggered.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.scrollHandler = function ( element, handler, params ) {
      return element.scroll( function( event ) {
        return executeRuleFromJS( handler, [ this, event, params ] );
      });
    }

    /**
     * Get the current horizontal position of the scroll bar for the
     * first element in the set of matched elements.
     *
     * @param  jQuery element jQuery element
     * @return Number
     */
    maker_jQuery.getScrollLeft = function ( element ) {
      return element.scrollLeft();
    }

    /**
     * Set the current horizontal position of the scroll bar for each of
     * the set of matched elements
     *
     * @param  jQuery element jQuery element
     * @param  Number value   An integer indicating the new position to set the scroll bar to.
     * @return jQuery
     */
    maker_jQuery.setScrollLeft = function ( element, value ) {
      return element.scrollLeft( value );
    }

    /**
     * Get the current vertical position of the scroll bar for the first
     * element in the set of matched elements or set the vertical position
     * of the scroll bar for every matched element.
     *
     * @param  jQuery element jQuery element
     * @return Number
     */
    maker_jQuery.getScrollTop = function ( element ) {
      return element.scrollTop();
    }

    /**
     * Set the current vertical position of the scroll bar for each of
     * the set of matched elements.
     *
     * @param  jQuery element jQuery element
     * @param  Number value   A number indicating the new position to set the scroll bar to.
     * @return jQuery
     */
    maker_jQuery.setScrollTop = function ( element, value ) {
      return element.scrollTop( value );
    }

    /**
     * Bind an event handler to the "select" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @return jQuery
     */
    maker_jQuery.select = function ( element ) {
      return element.select();
    }

    /**
     * Bind an event handler to the "select" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  handler A function to execute each time the event is triggered.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.selectHandler = function ( element, handler, params ) {
      return element.select( function( event ) {
        return executeRuleFromJS( handler, [ this, event, params ] );
      });
    }

    /**
     * Encode a set of form elements as a string for submission.
     *
     * @param  jQuery element jQuery element
     * @return String
     */
    maker_jQuery.serialize = function ( element ) {
      return element.serialize();
    }

    /**
     * Encode a set of form elements as an array of names and values.
     *
     * @param  jQuery element jQuery element
     * @return Array
     */
    maker_jQuery.serializeArray = function ( element ) {
      return element.serializeArray();
    }

    /**
     * Display the matched elements.
     *
     * @param  jQuery  element  jQuery element
     * @return jQuery
     */
    maker_jQuery.show = function ( element ) {
       return element.show();
    }

    /**
     * Display the matched elements.
     *
     * @param  jQuery  element  jQuery element
     * @param  Object  element  A map of additional options to pass to the method.
     * @return jQuery
     */
    maker_jQuery.showOptions = function ( element, options ) {
       return element.show( options );
    }

    /**
     * Display the matched elements.
     *
     * @param  jQuery element  jQuery element
     * @param  String duration A string or number determining how long the
     *                         animation will run.
     * @param  String easing   A string indicating which easing function to use
     *                         for the transition.
     * @param  Fluxo  complete A function to call once the animation is complete,
     *                         called once per matched element.
     * @param  Object params   Params passed to the function
     * @return jQuery
     */
    maker_jQuery.showDuration = function ( element, duration, easing, complete, params ) {
       return element.slideToggle( duration ,easing ,function() {
         if ( complete ) {
           return executeRuleFromJS( complete, [ this, params ] );
         }
       });
    }

    /**
     *  Display or hide the matched elements with a sliding motion.
     *
     * @param  jQuery element  jQuery element
     * @param  String duration A string or number determining how long the
     *                         animation will run.
     * @param  String easing   A string indicating which easing function to use
     *                         for the transition.
     * @param  Fluxo  complete A function to call once the animation is complete,
     *                         called once per matched element.
     * @param  Object params   Params pased to function
     * @return jQuery
     */
    maker_jQuery.slideToggle = function ( element, duration ,easing ,complete, params ) {
       return element.slideToggle( duration ,easing ,function() {
         if ( complete ) {
           return executeRuleFromJS( complete, [ this, params ] );
         }
       });
    }

    /**
     * Get the siblings of each element in the set of matched elements,
     * optionally filtered by a selector.
     *
     * @param  jQuery   element  jQuery element
     * @param  Selector selector A string containing a selector expression to
     *                           match elements against.
     * @return jQuery
     */
    maker_jQuery.siblings = function ( element, selector ) {
        return element.siblings( selector );
    }

    /**
     * Reduce the set of matched elements to a subset specified by a range of indices.
     *
     * @param  jQuery  element jQuery element
     * @param  Integer start   An integer indicating the 0-based position at which
     *                         the elements begin to be selected. If negative, it
     *                         indicates an offset from the end of the set.
     * @param  Integer end     An integer indicating the 0-based position at which
     *                         the elements stop being selected. If negative, it
     *                         indicates an offset from the end of the set. If omitted,
     *                         the range continues until the end of the set.
     * @return jQuery
     */
    maker_jQuery.slice = function ( element, start, end ) {
        return element.slice( start, end );
    }

    /**
     * Display the matched elements with a sliding motion.
     *
     * @param  jQuery  element  jQuery element
     * @param  Object  options  A map of additional options to pass to the method.
     * @return jQuery
     */
    maker_jQuery.slideDownOptions = function ( element, options ) {
       return element.slideDown( options );
    }

    /**
     *  Display the matched elements with a sliding motion.
     *
     * @param  jQuery element  jQuery element
     * @param  String duration A string or number determining how long the
     *                         animation will run.
     * @param  String easing   A string indicating which easing function to use
     *                         for the transition.
     * @param  Fluxo  complete A function to call once the animation is complete,
     *                         called once per matched element.
     * @param  Object params   Params pased to function
     * @return jQuery
     */
    maker_jQuery.slideDown = function ( element, duration ,easing ,complete, params ) {
       return element.slideDown( duration ,easing ,function() {
         if ( complete ) {
           return executeRuleFromJS( complete, [ this, params ] );
         }
       });
    }

    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param  jQuery  element  jQuery element
     * @param  Object  options  A map of additional options to pass to the method.
     * @return jQuery
     */
    maker_jQuery.slideToggleOptions = function ( element, options ) {
       return element.slideToggle( options );
    }

    /**
     *  Display or hide the matched elements with a sliding motion.
     *
     * @param  jQuery element  jQuery element
     * @param  String duration A string or number determining how long the
     *                         animation will run.
     * @param  String easing   A string indicating which easing function to use
     *                         for the transition.
     * @param  Fluxo  complete A function to call once the animation is complete,
     *                         called once per matched element.
     * @param  Object params   Params pased to function
     * @return jQuery
     */
    maker_jQuery.slideToggle = function ( element, duration ,easing ,complete, params ) {
       return element.slideToggle( duration ,easing ,function() {
         if ( complete ) {
           return executeRuleFromJS( complete, [ this, params ] );
         }
       });
    }

    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param  jQuery  element  jQuery element
     * @param  Object  options  A map of additional options to pass to the method.
     * @return jQuery
     */
    maker_jQuery.slideUpOptions = function ( element, options ) {
       return element.slideUp( options );
    }

    /**
     *  Hide the matched elements with a sliding motion.
     *
     * @param  jQuery element  jQuery element
     * @param  String duration A string or number determining how long the
     *                         animation will run.
     * @param  String easing   A string indicating which easing function to use
     *                         for the transition.
     * @param  Fluxo  complete A function to call once the animation is complete,
     *                         called once per matched element.
     * @param  Object params   Params pased to function
     * @return jQuery
     */
    maker_jQuery.slideUp = function ( element, duration ,easing ,complete, params ) {
       return element.slideUp( duration ,easing ,function() {
         if ( complete ) {
           return executeRuleFromJS( complete, [ this, params ] );
         }
       });
    }

    /**
     * Stop the currently-running animation on the matched elements.
     *
     * @param  jQuery  element    jQuery element
     * @param  String  queue      The name of the queue in which to stop
     *                            animations.
     * @param  Boolean clearQueue A Boolean indicating whether to remove queued
     *                            animation as well. Defaults to false.
     * @param  Boolean jumpToEnd  A Boolean indicating whether to complete the
     *                            current animation immediately. Defaults to false.
     * @return jQuery
     */
    maker_jQuery.stop = function ( element, queue, clearQueue, jumpToEnd ){
        return element.stop( queue, clearQueue, jumpToEnd );
    }

    /**
     * Bind an event handler to the "submit" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery event
     * @param  Fluxo  fluxo   A function to execute each time the event is triggered.
     * @param  Object params  Params passed to the function
     * @return jQuery
     */
    maker_jQuery.submit = function ( element, fluxo, params ) {
        return element.submit( function( event ) {
          return executeRuleFromJS( fluxo, [ this, event, params ] );
        });
    }

    /**
     * Bind an event handler to the "submit" JavaScript event,
     * or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @return String
     */
    maker_jQuery.submit = function ( element ) {
        return element.submit();
    }

    /**
     * Get the combined text contents of each element in the set
     * of matched elements, including their descendants.
     *
     * @param  jQuery element jQuery element
     * @return String
     */
    maker_jQuery.getText = function ( element ) {
        return element.text();
    }

    /**
     * Set the content of each element in the set of matched elements
     * to the specified text.
     *
     * @param  jQuery element jQuery element
     * @param  String text    The text to set as the content of each matched element.
     *                        When Number or Boolean is supplied, it will be converted
     *                        to a String representation.
     * @return jQuery
     */
    maker_jQuery.setText = function ( element, text ) {
        return element.text( text );
    }

    /**
     * Set the content of each element in the set of matched
     * elements to the specified text.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  fluxo   A function returning the text content to set.
     *                        Receives the index position of the element in the
     *                        set and the old text value as arguments.
     * @param  Object params  params passed to the function
     * @return jQuery
     */
    maker_jQuery.setTextWithFluxo = function ( element, fluxo ) {
        return element.text( function( index, txt ) {
          return executeRuleFromJS( fluxo, [ this, index, txt, params ] );
        });
    }

    /**
     * Retrieve all the elements contained in the jQuery set, as an array.
     *
     * @param  jQuery  element  jQuery element
     * @return Array
     */
    maker_jQuery.toArray = function ( element ) {
       return element.toArray();
    }

    /**
     * Display or hide the matched elements.
     *
     * @param  jQuery  element  jQuery element
     * @param  Boolean display  Use true to show the element or false to hide it.
     * @return jQuery
     */
    maker_jQuery.toggle = function ( element, display ) {
       return element.toggle( display );
    }

    /**
     * Display or hide the matched elements.
     *
     * @param  jQuery  element  jQuery element
     * @param  Object  options  A map of additional options to pass to the method.
     * @return jQuery
     */
    maker_jQuery.toggleOptions = function ( element, options ) {
       return element.toggle( options );
    }

    /**
     *  Display or hide the matched elements.
     *
     * @param  jQuery element  jQuery element
     * @param  String duration A string or number determining how long the
     *                         animation will run.
     * @param  String easing   A string indicating which easing function to use
     *                         for the transition.
     * @param  Fluxo  complete A function to call once the animation is complete,
     *                         called once per matched element.
     * @param  Object params   Params pased to function
     * @return jQuery
     */
    maker_jQuery.toggleOptions = function ( element, duration ,easing ,complete, params ) {
       return element.toggle( duration ,easing ,function() {
         if ( complete ) {
           return executeRuleFromJS( complete, [ this, params ] );
         }
       });
    }

    /**
     * Add or remove one or more classes from each element in the
     * set of matched elements, depending on either the class's
     * presence or the value of the state argument.
     *
     * @param  jQuery element    jQuery element
     * @param  String className  One or more class names (separated by spaces)
     *                           to be toggled for each element in the matched set.
     * @return jQuery
     */
    maker_jQuery.toggleClassName = function ( element, className ) {
       return element.toggleClass( className );
    }

    /**
     * Add or remove one or more classes from each element in the
     * set of matched elements, depending on either the class's
     * presence or the value of the state argument.
     *
     * @param  jQuery          element    jQuery element
     * @param  String | Fluxo  className  One or more class names (separated by spaces)
     *                                    to be toggled for each element in the matched set.
     * @param  Boolean         state      A Boolean (not just truthy/falsy) value to
     *                                    determine whether the class should be added or removed.
     * @return jQuery
     */
    maker_jQuery.toggleClass = function ( element, className, state ) {
       return element.toggleClass( state );
    }

    /**
     * Execute all handlers and behaviors attached to the matched
     * elements for the given event type.
     *
     * @param  jQuery         element         jQuery element
     * @param  String | Event eventType       A string containing a JavaScript event type,
     *                                        such as click or submit. or A jQuery.Event object.
     * @param  Object         extraParameters Additional parameters to pass along to the event handler.
     * @return jQuery
     */
    maker_jQuery.trigger = function ( element, eventType, extraParameters ) {
        return element.trigger( eventType, extraParameters );
    }

    /**
     * Execute all handlers attached to an element for an event.
     *
     * @param  jQuery         element         jQuery element
     * @param  String | Event eventType       A string containing a JavaScript event type,
     *                                        such as click or submit. or A jQuery.Event object.
     * @param  Object         extraParameters Additional parameters to pass along to the event handler.
     * @return Object
     */
    maker_jQuery.triggerHandler = function ( element, eventType, extraParameters ) {
        return element.triggerHandler( eventType, extraParameters );
    }

    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param  jQuery element jQuery Element
     * @param  Event  event   A jQuery.Event object.
     * @return jQuery
     */
    maker_jQuery.unbindEvent = function ( element, event ) {
        return element.unbind( event );
    }

    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param  jQuery element jQuery Element
     * @return jQuery
     */
    maker_jQuery.unbind = function ( element ) {
        return element.unbind();
    }

    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param  jQuery element   jQuery element
     * @param  Strign eventType A string containing a JavaScript event type,
     *                          such as click or submit.
     * @param  Fluxo  handler   The function that is to be no longer executed.
     * @param  Object params    Params thets pased to the function
     * @return jQuery
     */
    maker_jQuery.unbindHandler = function ( element, eventType, handler, params ) {
        return element.unbind( eventType, eventType, function( event ) {
            if ( complete ) {
                return executeRuleFromJS( handler, [ this, event, params ] );
            }
        });
    }

    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param  jQuery  element   jQuery Object
     * @param  String  eventType A string containing a JavaScript event type,
     *                           such as click or submit.
     * @param  Boolean bool      Unbinds the corresponding 'return false' function
     *                           that was bound using .bind( eventType, false ).
     * @return jQuery
     */
    maker_jQuery.unbindFalse = function ( element, eventType, bool ) {
        return element.unbind( eventType, bool );
    }

    /**
     * Remove a handler from the event for all elements which match the current
     * selector, based upon a specific set of root elements.
     *
     * @url http://api.jquery.com/undelegate/#undelegate
     * @param  jQuery element
     * @return jQuery
     */
    maker_jQuery.undelegate = function ( element ) {
      return element.undelegate();
    }

    /**
     * Remove a handler from the event for all elements which match the current
     * selector, based upon a specific set of root elements.
     *
     * @url http://api.jquery.com/undelegate/#undelegate-namespace
     * @param  jQuery element
     * @param  String namespace A string containing a namespace to unbind all
     *                          events from.
     * @return jQuery
     */
    maker_jQuery.undelegateNamespace = function ( element, namespace ) {
      return element.undelegate( namespace );
    }

    /**
     * Remove a handler from the event for all elements which match the
     * current selector, based upon a specific set of root elements.
     *
     * @url http://api.jquery.com/undelegate/#undelegate-selector-events
     * @param  jQuery      element
     * @param  String      selector A selector which will be used to filter the
     *                              event results.
     * @param  PlainObject events   An object of one or more event types and
     *                              previously bound functions to unbind from them.
     * @return jQuery
     */
    maker_jQuery.undelegateEvents = function ( element, selector, events ) {
      return element.undelegate( selector, events );
    }

    /**
     * Remove a handler from the event for all elements which match the current
     * selector, based upon a specific set of root elements.
     *
     * @url http://api.jquery.com/undelegate/#undelegate-selector-eventType
     * @param  jQuery element
     * @param  String selector  A selector which will be used to filter the
     *                          event results.
     * @param  String eventType A string containing a JavaScript event type,
     *                          such as "click" or "keydown"
     * @return jQuery
     */
    maker_jQuery.undelegateEventType = function ( element, selector, eventType ) {
      return element.undelegate( selector, eventType );
    }

    /**
     * Remove a handler from the event for all elements which match the current
     * selector, based upon a specific set of root elements.
     *
     * @url http://api.jquery.com/undelegate/#undelegate-selector-eventType-handler
     * @param  jQuery element
     * @param  String selector
     * @param  String eventType
     * @param  Fluxo handler
     * @param  Object params
     * @return jQuery
     */
    maker_jQuery.undelegateHandler = function ( element, selector, eventType, handler, params ) {
      return element.undelegate( selector, eventType, function( event ) {
        return executeRuleFromJS( handler, [ this, event, params ] );
      });
    }

    /**
     * Remove the parents of the set of matched elements from the DOM,
     * leaving the matched elements in their place.
     *
     * @param  jQuery element
     * @param  String selector
     * @return Object
     */
    maker_jQuery.unwrap = function ( element, selector ) {
        return element.unwrap( selector );
    }

    /**
     * Get the current value of the first element in the set of matched elements.
     *
     * @param  jQuery element
     * @return Object
     */
    maker_jQuery.val = function ( element ) {
        return element.val();
    }

    /**
     * Set the value of each element in the set of matched elements
     *
     * @param  jQuery element
     * @param  Object value
     * @param  Fluxo fluxo
     * @param  Object params
     * @return jQuery
     */
    maker_jQuery.val = function ( element, value, fluxo, params ) {
        if ( fluxo ) {
            return element.val( function(index, val) {
                return executeRuleFromJS( fluxo, [ this, index, val, params ] );
            });
        }

        return element.val();
    }

    /**
     * Get the current computed width for the first element in the set of
     * matched elements
     *
     * @param  jQuery element
     * @return Number
     */
    maker_jQuery.getWidth = function ( element ) {
        return element.width();
    }

    /**
     * Set the CSS width of each element in the set of matched elements.
     *
     * @param  jQuery element
     * @param  Object value
     * @param  Fluxo fluxo
     * @param  Object params
     * @return jQuery
     */
    maker_jQuery.setWidth = function ( element, value, fluxo, params ) {
        if ( fluxo ) {
            return element.width( function(index, val) {
                return executeRuleFromJS( fluxo, [ this, index, val, params ] );
            });
        }

        return element.width( value );
    }

    /**
     * Wrap an HTML structure around each element in the set of matched elements.
     *
     * @param  jQuery element
     * @param  Object wrappingElement
     * @param  Fluxo fluxo
     * @param  Object params
     * @return jQuery
     */
    maker_jQuery.wrap = function ( element, wrappingElement, fluxo, params ) {
      if ( fluxo ) {
          return element.wrap( function( index ) {
            return executeRuleFromJS( fluxo, [ this, index, params ] );
          });
      }

      return return element.wrap( wrappingElement );
    }

    /**
     * Wrap an HTML structure around all elements in the set of matched elements.
     *
     * @param  jQuery element
     * @param  Object wrappingElement
     * @param  Fluxo fluxo
     * @param  Object params
     * @return jQuery
     */
    maker_jQuery.wrapAll = function ( element, wrappingElement, fluxo, params ) {
      if ( fluxo ) {
          return element.wrapAll( function( index ) {
            return executeRuleFromJS( fluxo, [ this, index, params ] );
          });
      }

      return return element.wrapAll( wrappingElement );
    }

    /**
     * Wrap an HTML structure around the content of each element in the set of
     * matched elements.
     *
     * @param  jQuery element
     * @param  Object wrappingElement
     * @param  Fluxo fluxo
     * @param  Object params
     * @return jQuery
     */
    maker_jQuery.wrapInner = function ( element, wrappingElement, fluxo, params ) {
      if ( fluxo ) {
          return element.wrapInner( function( index ) {
            return executeRuleFromJS( fluxo, [ this, index, params ] );
          });
      }

      return return element.wrapInner( wrappingElement );
    }

    /**
     * The current DOM element within the event bubbling phase.
     *
     * @param  Evemt event
     * @return Element
     */
    maker_jQuery.event.currentTarget = function ( event ) {
        return event.currentTarget;
    }

    /**
     * An optional object of data passed to an event method when the current executing handler is bound.
     *
     * @param  Evemt event
     * @return Object
     */
    maker_jQuery.event.data = function ( event ) {
        return event.data;
    }

    /**
     * The element where the currently-called jQuery event handler was attached.
     *
     * @param  Evemt event
     * @return Boolean
     */
    maker_jQuery.event.delegateTarget = function ( event ) {
        return event.delegateTarget;
    }

    /**
     * Returns whether event.preventDefault() was ever called on this event object.
     *
     * @param  Evemt event
     * @return Boolean
     */
    maker_jQuery.event.isDefaultPrevented = function ( event ) {
        return event.isDefaultPrevented();
    }

    /**
     * Returns whether event.stopImmediatePropagation() was ever called on this event object.
     *
     * @param  Evemt event
     * @return Boolean
     */
    maker_jQuery.event.isImmediatePropagationStopped = function ( event ) {
        return event.isImmediatePropagationStopped();
    }

    /**
     * Returns whether event.stopPropagation() was ever called on this event object.
     *
     * @param  Evemt event
     * @return Boolean
     */
    maker_jQuery.event.isPropagationStopped = function ( event ) {
        return event.isPropagationStopped();
    }

    /**
     * Indicates whether the META key was pressed when the event fired.
     *
     * @param  Evemt event
     * @return Boolean
     */
    maker_jQuery.event.metaKey = function ( event ) {
        return event.metaKey;
    }

    /**
     * The namespace specified when the event was triggered.
     *
     * @param  Evemt event
     * @return String
     */
    maker_jQuery.event.namespaceReturns = function ( event ) {
        return event.namespaceReturns;
    }

    /**
     * The mouse position relative to the left edge of the document.
     *
     * @param  Evemt event
     * @return Number
     */
    maker_jQuery.event.pageX = function ( event ) {
        return event.pageX;
    }

    /**
     * The mouse position relative to the top edge of the document.
     *
     * @param  Evemt event
     * @return Number
     */
    maker_jQuery.event.pageY = function ( event ) {
        return event.pageY;
    }

    /**
     * If this method is called, the default action of the event will not be triggered.
     *
     * @param  Evemt event
     * @return undefined
     */
    maker_jQuery.event.preventDefault = function ( event ) {
        return event.preventDefault();
    }

    /**
     * The other DOM element involved in the event, if any.
     *
     * @param  Evemt event
     * @return Element
     */
    maker_jQuery.event.relatedTargetReturns = function ( event ) {
        return event.relatedTargetReturns;
    }

    /**
     * The last value returned by an event handler that was triggered by this event, unless the value was  undefined.
     *
     * @param  Evemt event
     * @return Object
     */
    maker_jQuery.event.result = function ( event ) {
        return event.result;
    }

    /**
     * Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.
     *
     * @param  Evemt event
     * @return void
     */
    maker_jQuery.event.stopImmediatePropagation = function ( event ) {
        event.stopImmediatePropagation();
    }

    /**
     * Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
     *
     * @param  Evemt event
     * @return void
     */
    maker_jQuery.event.stopPropagation = function ( event ) {
        event.stopPropagation();
    }

    /**
     * The DOM element that initiated the event.
     *
     * @param  Evemt event
     * @return Element
     */
    maker_jQuery.event.target = function ( event ) {
        return event.target;
    }

    /**
     * The difference in milliseconds between the time the browser created the event and January 1, 1970.
     *
     * @param  Evemt event
     * @return Number
     */
    maker_jQuery.event.timeStamp = function ( event ) {
        return event.timeStamp;
    }

    /**
     * Describes the nature of the event.
     *
     * @param  Evemt event
     * @return String
     */
    maker_jQuery.event.type = function ( event ) {
        return event.type;
    }

    /**
     * For key or mouse events, this property indicates the specific key or button that was pressed.
     *
     * @param  Evemt event
     * @return Number
     */
    maker_jQuery.event.which = function ( event ) {
        return event.which;
    }

    lm.maker_jQuery = lm.mq = maker_jQuery;

    return maker_jQuery;

})( window, lm, jQuery );
