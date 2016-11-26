var docs = [
    {
        title: 'jQuery',
        description: 'Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string.',
        parametros: [
            {type:'object', description: 'A string containing a selector expression or A DOM element to wrap in a jQuery objec or An array containing a set of DOM elements to wrap in a jQuery object. or A plain object to wrap in a jQuery object. or An existing jQuery object to clone.'}
        ],
        return: 'jQuery'
    },{
        title: 'jQuery add',
        description: 'Create a new jQuery object with elements added to the set of matched elements.',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: 'A string representing a selector expression to find additional elements to add to the set of matched elements. or One or more elements to add to the set of matched elements. or An existing jQuery object to add to the set of matched elements. or A string representing a selector expression to find additional elements to add to the set of matched elements.'},
            {type:'Element', description: 'The point in the document at which the selector should begin matching; similar to the context argument of the $(selector, context) method.'}
        ],
        return: 'jQuery'
    },{
        title: 'jQuery addBack',
        description: 'Add the previous set of elements on the stack to the current set, optionally filtered by a selector.',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Selector', description: 'A string containing a selector expression to match the current set of elements against.'}
        ],
        return: 'jQuery'
    },{
        title: 'jQuery addClass',
        description: 'Adds the specified class(es) to each element in the set of matched elements.',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'String', description: 'Adds the specified class(es) to each element in the set of matched elements.'}
        ],
        return: 'jQuery'
    },{
        title: 'jQuery addClass Handler',
        description: 'Adds the specified class(es) to each element in the set of matched elements.',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Fluxo( Integer index, String currentClassName ) => String', description: 'A function returning one or more space-separated class names to be added to the existing class name(s). Receives the index position of the element in the set and the existing class name(s) as arguments. Within the function, this refers to the current element in the set.'}
        ],
        return: 'jQuery'
    },{
        title: 'jQuery after',
        description: 'Insert content, specified by the parameter, after each element in the set of matched elements.',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: 'HTML string, DOM element, text node, array of elements and text nodes, or jQuery object to insert after each element in the set of matched elements.'}
        ],
        return: 'jQuery'
    },{
        title: 'jQuery after handler',
        description: 'Insert content, specified by the parameter, after each element in the set of matched elements.',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Fluxo( Integer index, String html ) => htmlString or Element or Text or jQuery', description: 'A function that returns an HTML string, DOM element(s), text node(s), or jQuery object to insert after each element in the set of matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.'},
            {type:'Object', description: 'params passed to function'}
        ],
        return: 'jQuery'
    },{
        title: 'jQuery ajax',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery ajaxComplete',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery ajaxError',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery ajaxPrefilter',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery ajaxSend',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery ajaxSetup',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery ajaxStart',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery ajaxStop',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery ajaxSuccess',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery animate',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery animateOptions',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery append',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery appendTo',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery attr',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery before',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery before handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery bind',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery bind handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery bind preventBubble',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery blur',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Callbacks add',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Callbacks disable',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Callbacks disabled',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Callbacks empty',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Callbacks fire',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Callbacks fireWith',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Callbacks fired',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Callbacks has',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Callbacks lock',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Callbacks locked',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Callbacks remove',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery change',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery children',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery clearQueue',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery click',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery clone',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery closest',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery contains',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery contents',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery context',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery contextmenu',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery cssHooks',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery cssNumber',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery dblclick',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred always',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred catch',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred done',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred fail',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred notify',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred notifyWith',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred pipe',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred progress',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred promise',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred reject',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred rejectWith',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred resolve',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred resolveWith',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred state',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Deferred then',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery delay',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery delegate',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery delegate event',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery dequeue',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery dequeue element',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery detach',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery each',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery each element',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery empty',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery end',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery eq',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery error',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery escapeSelector',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event currentTarget',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event data',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event delegateTarget',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event isDefaultPrevented',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event isImmediatePropagationStopped',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event isPropagationStopped',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event metaKey',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event namespace',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event pageX',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event pageY',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event preventDefault',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event relatedTarget',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event result',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event stopImmediatePropagation',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event stopPropagation',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event target',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event timeStamp',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event type',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Event which',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery extend',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery fadeIn',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery fadeIn options',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery fadeOut',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery fadeOut options',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery fadeToggle',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery fadeToggle options',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery filter',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery filter handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery find',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery finish',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery first',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Query version',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery focus',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery focus handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery fx interval',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery fx off',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get attr',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get css',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get data',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get data from element',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get element',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get fx extend',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get height',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get HTML',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get index',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get innerHeight',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery getJSON',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get offset',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get outerHeight',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get outerWidth',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get prop',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get queue',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery getScript',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get scrollLeft',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get scrollTop',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get text',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get val',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery get width',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery grep',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery has',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery hasData',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery hide',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery hide completed',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery hide options',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery holdReady',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery hover',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery hover In Out',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery inArray',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery insertAfter',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery insertBefore',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery isArray',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery isEmptyObject',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery isFunction',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery isFunction',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery isNumeric',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery isPlainObject',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery isWindow',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery isXMLDoc',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery keydown',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery keypress',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery keyup',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery last',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery length',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery load',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery makeArray',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery map',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery map element',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery merge',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery mousedown',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery mouseenter',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery mouseleave',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery mousemove',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery mouseup',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery new queue',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery next',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery nextAll',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery nextUntil',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery noConflict',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery noop',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery not',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery not handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery now',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery off',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery offsetParent',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery on',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery one',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery param',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery parent',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery parents',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery parentsUntil',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery parseHTML',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery parseJSON',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery parseXML',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery position',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery post',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery post settings',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery prepend',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery prepend handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery prependTo',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery prev',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery prevAll',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery prevUntil',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery promise',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery proxy',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery pushStack',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery queue',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery new queue callback',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery ready',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery readyException',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery remove',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery removeAttr',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery removeClass',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery removeClass handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery removeData',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery removeData from element',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery removeProp',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery replaceWith',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery replaceWith handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery resize',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery resize handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery scroll',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery scroll handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery select',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery select handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery serialize',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set attr',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set attr handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set css',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set css handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set css properties',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set data',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set data to element',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set height',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set height handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set HTML',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set HTML handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set index',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set innerHeight',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set innerHeight handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set offset',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set offset handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set outerHeight',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set outerWidth',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set outerWidth handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set prop',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set prop handle',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set prop properties',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set queue',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set queue callback',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set scrollLeft',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set scrollTop',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set text',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set text handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set val',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set val handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set width',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery set width handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery show',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery show complete',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery show options',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery siblings',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery slice',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery slideDown',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery slideDown options',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery slideToggle',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery slideToggle options',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery slideUp',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery slideUp options',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery speed',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery stop',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery submit',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery submit handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery support',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery Text',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery toArray',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery toggle',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery toggleClass',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery toggleClass handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery toggleClass Name',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery toggle handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery toggle options',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery trigger',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery triggerHandler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery trim',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery type',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery unbind',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery unbind event',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery unbind false',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery undelegate',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery undelegate eventType',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery undelegate event',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery undelegate handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery undelegate namespace',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery unique',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery uniqueSort',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery unwrap',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery when',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery wrap',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery wrapAll',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery wrapAll handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery wrap handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery wrapInner',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    },{
        title: 'jQuery wrapInner handler',
        description: '',
        parametros: [
            {type:'jQuery', description: 'jQuery Element'},
            {type:'Object', description: ''},
            {type:'Element', description: ''}
        ]
    }
]