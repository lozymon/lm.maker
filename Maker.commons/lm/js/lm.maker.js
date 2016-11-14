( function (window) {

    "use strict";

    var Lozymon = {
        version: '0.1',
        author: 'Kim Andre Furevikstrand',
        email: 'lozymon@gmail.com',
        isDebugging: false,
    }

    /**
     * loging to the console
     * @return void
     */
    Lozymon.log = function() {
        console.log(arguments);
    }

    /**
     * logs to the console with date time
     * @return void
     */
    Lozymon.debug = function() {
        if ( this.isDebugging ) {
            // get date time
            var date = new Date();

            // slice arguments to array
            var args = [].slice.call( arguments );

            // add date to the argument list
            args.unshift(date.toLocaleString());

            // redy to log out arguments
            this.log.apply ( this, args );
        }
    }

    /**
     * test if object is a function
     * @param  object  obj
     * @return Boolean
     */
    Lozymon.isFunction = function(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    };

    /**
     * start debug mode
     * @return void
     */
    Lozymon.startDebugging = function() {
        this.isDebugging = true;
    }

    /**
     * chech if object is an array
     * @param  object  obj
     * @return Boolean
     */
    Lozymon.isArray = function (obj){
        return !!obj && Array === obj.constructor;
    }

    window.lm = Lozymon;

    return Lozymon;

})( typeof window !== "undefined" ? window : this );