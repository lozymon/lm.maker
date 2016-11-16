( function (window, lm, $) {

    "use strict";

    var maker_jQuery = {
        version: '0.1',
        author: 'Kim Andre Furevikstrand',
        email: 'lozymon@gmail.com',
        event: {},
    }

    maker_jQuery.jQuery = function ( selector ) {
        return $( selector );
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

    maker_jQuery.each = function ( element, fluxo, params ) {
        return element.each( function(index, event) {
            return executeRuleFromJS( fluxo, [ this, index, event, params ] );
        });
    }

    maker_jQuery.empty = function ( element ) {
        return element.empty();
    }

    maker_jQuery.eq = function ( element, index ) {
        return element.eq( index );
    }

    maker_jQuery.end = function ( element ) {
        return element.end();
    }

    maker_jQuery.animate = function ( element, properties, duration, easing, complete, params ) {
        return element.animate( properties, duration, easing, function() {
            if ( complete ) {
                return executeRuleFromJS( complete, [ this, params ] );
            }
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

    maker_jQuery.event.currentTarget = function ( event ) {
        return event.currentTarget;
    }

    maker_jQuery.event.data = function ( event ) {
        return event.data;
    }

    maker_jQuery.event.delegateTarget = function ( event ) {
        return event.delegateTarget;
    }

    maker_jQuery.event.isDefaultPrevented = function ( event ) {
        return event.isDefaultPrevented();
    }

    maker_jQuery.event.isImmediatePropagationStopped = function ( event ) {
        return event.isImmediatePropagationStopped();
    }

    maker_jQuery.event.isPropagationStopped = function ( event ) {
        return event.isPropagationStopped();
    }

    maker_jQuery.event.metaKey = function ( event ) {
        return event.metaKey;
    }

    maker_jQuery.event.namespaceReturns = function ( event ) {
        return event.namespaceReturns;
    }

    maker_jQuery.event.pageX = function ( event ) {
        return event.pageX;
    }

    maker_jQuery.event.pageY = function ( event ) {
        return event.pageY;
    }

    maker_jQuery.event.preventDefault = function ( event ) {
        return event.preventDefault();
    }

    maker_jQuery.event.relatedTargetReturns = function ( event ) {
        return event.relatedTargetReturns;
    }

    maker_jQuery.event.result = function ( event ) {
        return event.result;
    }

    maker_jQuery.event.stopImmediatePropagation = function ( event ) {
        return event.stopImmediatePropagation();
    }

    maker_jQuery.event.stopPropagation = function ( event ) {
        return event.stopPropagation();
    }

    maker_jQuery.event.target = function ( event ) {
        return event.target;
    }

    maker_jQuery.event.timeStamp = function ( event ) {
        return event.timeStamp;
    }

    maker_jQuery.event.type = function ( event ) {
        return event.type;
    }

    maker_jQuery.event.which = function ( event ) {
        return event.which;
    }

    lm.maker_jQuery = lm.mq = maker_jQuery;

    return maker_jQuery;

})( window, lm, jQuery );
