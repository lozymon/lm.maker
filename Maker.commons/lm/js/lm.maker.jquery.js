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

    maker_jQuery.on = function ( element, event, selector, data, fluxo ) {
        return element.on( event, selector, data, function( e ) {
            return executeRuleFromJS( fluxo, [ this, e, e.data ] );
        });
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
     * Stop the currently-running animation on the matched elements.
     *
     * @param  jQuery  element    jQuery element
     * @param  String  queue      The name of the queue in which to stop animations.
     * @param  Boolean clearQueue A Boolean indicating whether to remove queued animation as well. Defaults to false.
     * @param  Boolean jumpToEnd  A Boolean indicating whether to complete the current animation immediately. Defaults to false.
     * @return jQuery
     */
    maker_jQuery.stop = function ( element, queue, clearQueue, jumpToEnd ){
        return element.stop( queue, clearQueue, jumpToEnd );
    }

    /**
     * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
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
     * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
     *
     * @param  jQuery element jQuery element
     * @return String
     */
    maker_jQuery.submit = function ( element ) {
        return element.submit();
    }

    /**
     * Get the combined text contents of each element in the set of matched elements, including their descendants.
     *
     * @param  jQuery element jQuery element
     * @return String
     */
    maker_jQuery.getText = function ( element ) {
        return element.text();
    }

    /**
     * Set the content of each element in the set of matched elements to the specified text.
     *
     * @param  jQuery element jQuery element
     * @param  String text    The text to set as the content of each matched element. When Number or Boolean is supplied, it will be converted to a String representation.
     * @return jQuery
     */
    maker_jQuery.setText = function ( element, text ) {
        return element.text( text );
    }

    /**
     * Set the content of each element in the set of matched elements to the specified text.
     *
     * @param  jQuery element jQuery element
     * @param  Fluxo  fluxo   A function returning the text content to set. Receives the index position of the element in the set and the old text value as arguments.
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
       return element.toggle( display );
    }

    /**
     *  Display or hide the matched elements.
     *
     * @param  jQuery element  jQuery element
     * @param  String duration A string or number determining how long the animation will run.
     * @param  String easing   A string indicating which easing function to use for the transition.
     * @param  Fluxo  complete A function to call once the animation is complete, called once per matched element.
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
     * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.
     *
     * @param  jQuery element    jQuery element
     * @param  String className  One or more class names (separated by spaces) to be toggled for each element in the matched set.
     * @return jQuery
     */
    maker_jQuery.toggleClassName = function ( element, className ) {
       return element.toggleClass( className );
    }

    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.
     *
     * @param  jQuery          element    jQuery element
     * @param  String | Fluxo  className  One or more class names (separated by spaces) to be toggled for each element in the matched set.
     * @param  Boolean         state      A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.
     * @return jQuery
     */
    maker_jQuery.toggleClass = function ( element, className, state ) {
       return element.toggleClass( state );
    }

    /**
     * Execute all handlers and behaviors attached to the matched elements for the given event type.
     *
     * @param  jQuery         element         jQuery element
     * @param  String | Event eventType       A string containing a JavaScript event type, such as click or submit. or A jQuery.Event object.
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
     * @param  String | Event eventType       A string containing a JavaScript event type, such as click or submit. or A jQuery.Event object.
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
     * @param  Strign eventType A string containing a JavaScript event type, such as click or submit.
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
     * @param  String  eventType A string containing a JavaScript event type, such as click or submit.
     * @param  Boolean bool      Unbinds the corresponding 'return false' function that was bound using .bind( eventType, false ).
     * @return jQuery
     */
    maker_jQuery.unbindFalse = function ( element, eventType, bool ) {
        return element.unbind( eventType, bool );
    }

    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
     *
     * @url http://api.jquery.com/undelegate/#undelegate
     * @param  jQuery element
     * @return jQuery
     */
    maker_jQuery.undelegate = function ( element ) {
      return element.undelegate();
    }

    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
     *
     * @url http://api.jquery.com/undelegate/#undelegate-namespace
     * @param  jQuery element
     * @param  String namespace - A string containing a namespace to unbind all events from.
     * @return jQuery
     */
    maker_jQuery.undelegateNamespace = function ( element, namespace ) {
      return element.undelegate( namespace );
    }

    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
     *
     * @url http://api.jquery.com/undelegate/#undelegate-selector-events
     * @param  jQuery element
     * @param  String selector - A selector which will be used to filter the event results.
     * @param  PlainObject events - An object of one or more event types and previously bound functions to unbind from them.
     * @return jQuery
     */
    maker_jQuery.undelegateEvents = function ( element, selector, events ) {
      return element.undelegate( selector, events );
    }

    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
     *
     * @url http://api.jquery.com/undelegate/#undelegate-selector-eventType
     * @param  jQuery element
     * @param  String selector - A selector which will be used to filter the event results.
     * @param  String eventType - A string containing a JavaScript event type, such as "click" or "keydown"
     * @return jQuery
     */
    maker_jQuery.undelegateEventType = function ( element, selector, eventType ) {
      return element.undelegate( selector, eventType );
    }

    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
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
     * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
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
     * Get the current computed width for the first element in the set of matched elements
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
     * Wrap an HTML structure around the content of each element in the set of matched elements.
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
