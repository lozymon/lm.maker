( function (window) {

    "use strict";

    var Lozymon = {
        version: '0.1',
        author: 'Kim Andre Furevikstrand',
        email: 'lozymon@gmail.com',
        isDebugging: false,
        tpo: []
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

    /**
     * add Javascript tag to the element
     *
     * @param  Element elemnt
     * @param  Path    path   path to the javascript
     * @return void
     */
    Lozymon.addJavaScript function ( elemnt, path )
    {
        // load as tag
        if ( element ) {
            var script  = document.createElement('script');
            script.src  = path;
            script.type = "text/javascript";
            elemnt.appendChild(script);
        }
        // load with webrun
        else {
            webrun.include( path );
        }
    }

    /**
     * add StyleSheet tag to the element
     * if element not is informed then use webrun include to load javascript object
     *
     * @param  Element element
     * @param  Path    path   path to the stylesheet
     * @return void
     */
    Lozymon.addStyleSheet = function ( element, path )
    {
        var link  = document.createElement('link');
        link.href = path;
        link.type = "text/css";
        link.rel  = "stylesheet";
        element.appendChild( link );
    }

    /**
     * Load tpo files
     *
     * @return void
     */
    Lozymon.loadTPO = function()
    {
        // load tpo file
        webrun.include('lm/tpo.json.js');
        // sort list
        items.sort(function (a, b) {
          if (a.sort > b.sort) { return 1; }
          if (a.sort < b.sort) { return -1;}
          return 0;
        });
        // get body element
        var v_bodyArray = document.getElementsByTagName("body");
        // if body exists
        if (v_bodyArray.length) {
            // get first body element
            var v_body = v_bodyArray[0];
            // add all tpo to the body
            for (var i = 0; i < Lozymon.tpo.length ; i++) {
                // load object
                var tpo = Lozymon.tpo[i];
                // create path with version
                var path = tpo.path + '?lm_v=' + tpo.version;
                // if type is javascript
                if (tpo.type == 'J') {
                    var element = ( tpo.useWebrunInclude == true ) ? null : b_body;
                    this.addJavaScript( element, path );
                }
                // if type is StyleSheet
                else if (tpo.typo == 'S') {
                    this.addStyleSheet( v_body, path );
                }
            }
        }
    }

    window.lm = Lozymon;

    // load objects
    Lozymon.loadTPO();

    return Lozymon;

})( typeof window !== "undefined" ? window : this );