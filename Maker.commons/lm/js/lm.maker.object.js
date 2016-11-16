( function (window, lm) {

    "use strict";

    var maker_object = {
        version: '0.1',
        author: 'Kim Andre Furevikstrand',
        email: 'lozymon@gmail.com'
    }

    /**
     * Creating new Object
     *
     * @return Object
     */
    maker_object.createObject = function() {
        return new Object;
    }

    /**
     * Set a properties and it's value
     *
     * @param  Object object   Object thets resiving property and it's value
     * @param  String property Name of the property
     * @param  Object value    Value to set to the property
     * @return Obejct
     */
    maker_object.setObjectProperty = function( object, property, value ) {
        object[ property ] = value;
        return object;
    }

    /**
     * Gets a value from a given property
     * @param  Object object   Object
     * @param  String property Name of the property
     * @return Object
     */
    maker_object.getObjectProperty = function( object, property ) {
        return object[ property ];
    }

    /**
     * Convert a array list to a object
     *
     * ex:
     *   [['property1', 'value1'], ['property2', 'value2']]
     * to:
     *   {
     *     property1: 'value1',
     *     property2: 'value2'
     *   }
     *
     * @param  Array arrayList array
     * @return Object
     */
    maker_object.arrayListToObject = function( arrayList ) {
        var obj = new Object;

        for (var i = 0; i < arrayList.length; i++) {
            if ( lm.isArray( arrayList[i] ) && arrayList[i].length >= 2 ) {
                obj[ arrayList[i][0] ] = arrayList[i][1];
            }
        }

        return obj;
    }

    lm.maker_object = lm.obj = maker_object;

    return maker_object;

})( window, lm );
