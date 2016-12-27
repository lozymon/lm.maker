( function (window, lm) {

    "use strict";

    var maker_swal = {
        version: '0.1',
        author: 'Kim Andre Furevikstrand',
        email: 'lozymon@gmail.com'
    }

    /**
     * Close the sweet alert
     *
     * @return undefined
     */
    maker_swal.close = function() {
        swal.close();
    }

    /**
     * If you end up using a lot of the same settings when
     * calling SweetAlert, you can use setDefaults at the
     * start of your program to set them once and for all!
     *
     * @param Object options
     */
    maker_swal.setDefaults = function( options ) {
        swal.setDefaults( options );
    }

    /**
     * show sweet alert
     *
     * @param  Object options
     * @param  Fluxo  fluxo
     * @param  Array  params
     * @return undefined
     */
    maker_swal.message = function( options, fluxo, params ) {
        if ( fluxo ) {
            swal( options, function(isConfirm) {
                var v_params = [];
                if ( lm.isArray(params) ) {
                    params.unshift(isConfirm);
                    v_params = params;
                } else if ( params ) {
                    v_params.push(isConfirm);
                    v_params.push(params);
                } else {
                    v_params.push(isConfirm);
                }

                console.log( v_params  )

                executeRuleFromJS( fluxo, v_params );
            });
        } else {
            swal( options );
        }
    }

    /**
     * A basic message
     *
     * @param  String title
     * @param  String text
     * @param  String type
     * @return undefined
     */
    maker_swal.basicMessage = function( title, text, type ) {
        var options = {};
        options.html = true;

        if ( title ) {
            options.title = title;
        }

        if ( text ) {
            options.text = text;
        }

        if ( type ) {
            options.type = type;
        }

        maker_swal.message( options );
    }

    /**
     * Confirme message
     *
     * @param  String title
     * @param  String text
     * @param  String type
     * @param  String cancelButtonText
     * @param  String confirmButtonColor
     * @param  String confirmButtonText
     * @param  Fluxo  fluxo
     * @param  Array  params
     * @return undefined
     */
    maker_swal.confirmMessage = function( title, text, type, cancelButtonText, confirmButtonColor, confirmButtonText, fluxo, params ) {
        var options = {};

        options.closeOnConfirm = false;
        options.closeOnCancel = false;
        options.showCancelButton = true;

        if ( title ) {
            options.title = title;
        }

        if ( text ) {
            options.text = text;
        }

        if ( type ) {
            options.type = type;
        }

        if ( cancelButtonText ) {
            options.cancelButtonText = cancelButtonText;
        }

        if ( confirmButtonColor ) {
            options.confirmButtonColor = confirmButtonColor;
        }

        if ( confirmButtonText ) {
            options.confirmButtonText = confirmButtonText;
        }

        maker_swal.message( options, fluxo, params );
    }

    lm.maker_swal = maker_swal;

    return maker_swal;

})( window, lm );