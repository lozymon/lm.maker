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

    maker_jQuery.val = function ( element ) {
        return element.val();
    }

    maker_jQuery.text = function ( element ) {
        return element.text();
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