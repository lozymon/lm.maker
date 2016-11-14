( function (window, lm) {

    "use strict";

    var maker_object = {
        version: '0.1',
        author: 'Kim Andre Furevikstrand',
        email: 'lozymon@gmail.com',
        event: {},
    }

    maker_object.createObject = function() {
        return new Object;
    }

    maker_object.setObjectProperty = function( object, property, value ) {
        object[ property ] = value;
        return object;
    }

    maker_object.getObjectProperty = function( object, property ) {
        return object[ property ];
    }

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