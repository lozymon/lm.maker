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
    Lozymon.log = function()
    {
        console.log(arguments);
    }

    /**
     * logs to the console with date time
     * @return void
     */
    Lozymon.debug = function()
    {
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
    Lozymon.isFunction = function(obj)
    {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    };

    /**
     * start debug mode
     * @return void
     */
    Lozymon.startDebugging = function()
    {
        this.isDebugging = true;
    }

    /**
     * chech if object is an array
     * @param  object  obj
     * @return Boolean
     */
    Lozymon.isArray = function (obj)
    {
        return !!obj && Array === obj.constructor;
    }

    /**
     * add Javascript tag to the element
     *
     * @param  Element element
     * @param  Path    path   path to the javascript
     * @return void
     */
    Lozymon.addJavaScript = function ( element, path )
    {
        // load as tag
        if ( element ) {
            var script  = document.createElement('script');
            script.src  = path;
            script.type = "text/javascript";
            element.appendChild(script);
        }
        // load with webrun
        else {
            webrun.include( path );
        }
    }

    /**
     * add StyleSheet tag to the element
     * if  not is informed then use webrun include to load javascript object
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
     * gets the url extension
     *
     * @param  String url
     * @return String
     */
    Lozymon.getUrlExtension = function ( url )
    {
        var extension = (/[.]/.exec(url)) ? /\.([^\./\?]+)($|\?)/.exec(url) : undefined;

        if ( extension !== undefined ) {
            return extension[1].toLowerCase();
        }

        return undefined;
    }

    /**
     * add version to url
     *
     * @param String url
     * @param String version
     */
    Lozymon.addUrlVersion = function ( url, version )
    {
        var x = (/[\?]/.exec( url )) ? '&' : '?';

        return url + x + 'lm_version=' + version;
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

        // if there are not any element in the list then exit here
        if ( lm.tpo.length == 0 ) {
            return;
        }

        // get body element
        var v_bodyArray = document.getElementsByTagName("body");

        // if body exists
        if ( v_bodyArray.length ) {

            // get first body element
            var v_body = v_bodyArray[0];

            // add all tpo to the body
            for (var i = 0; i < Lozymon.tpo.length ; i++) {

                // load object
                var tpo = Lozymon.tpo[i];

                // if tmp is undefined then goto nest object
                if (tpo == undefined) {
                    continue;
                }
                // find file extension
                var extension = this.getUrlExtension(tpo.path);

                // if type is javascript
                if (extension == 'js') {
                    var element = ( tpo.useWebrunInclude == true ) ? null : v_body;
                    this.addJavaScript( element, this.addUrlVersion(tpo.path, tpo.version) );
                }

                // if type is StyleSheet
                else if (extension == 'css') {
                    this.addStyleSheet( v_body, this.addUrlVersion(tpo.path, tpo.version) );
                }
            }
        }
    }

    window.lm = Lozymon;

    // load objects
    Lozymon.loadTPO();

    return Lozymon;

})( typeof window !== "undefined" ? window : this );
