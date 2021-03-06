# lm.maker

<font color="red">This is a ALPHA release</font>

### Globaly load StyleSheet and JavaScript files

If you have a javascript or a style sheet that you want to load globally in make, you can use the tpo.json.js to achieve that.
The file is located in the Maker.commons\lm folder, se the example below to how you can include your file

```javascript
lm.tpo = [
    {
        "description":"my style",  // add a description
        "version":"0.0.1",         // object version
        "path":"lm/css/style.css"  // path to the object, suported extension is js and css
    },{
        "description":"my javascript", // add a description
        "version":"0.0.1",             // object version
        "path":"lm/js/javascript.js",  // path to the object, suported extension is js and css
        "useWebrunInclude": true       // if true its use webrun.include or if false then use <script></script> tag
    },...
]
```

####lm Object
  - Create Object
  - Set Object Property
  - Get Object Property
  - Array List To Object

####lm Utility
  - Add JavaScript
  - Add StyleSheet
  - Get URL Extension
  - isArray
  - Console Log

####lm Sweet Alert
  - Sweet Alert Basic message
  - Sweet Alert Close
  - Sweet Alert Confirm message
  - Sweet Alert Message
  - Sweet Alert set defaults propertys

###lm jQuery

Getting the value of a input element using jQuery and flow.

jQuery element you can use the maker component name to find the element like shown in the image below, then we use find to select the input element, and then use get value to get the value of the input element

![alt tag](https://github.com/lozymon/lm.maker/blob/master/docs/images/get%20value%20from%20input.png)

In the next exemple we are changing the background of a input element. In this example we are also using the maker component name and the find to localice input element. Then we uses jQuery set css to set the background color of the input.

![alt tag](https://github.com/lozymon/lm.maker/blob/master/docs/images/set%20css%20attribute%20to%20element.png)

####lm jQuery functions

  - jQuery
  - jQuery Callbacks
  - jQuery Deferred
  - jQuery add
  - jQuery addBack
  - jQuery addClass
  - jQuery addClass Handler
  - jQuery after
  - jQuery after handler
  - jQuery ajax
  - jQuery ajaxComplete
  - jQuery ajaxError
  - jQuery ajaxPrefilter
  - jQuery ajaxSend
  - jQuery ajaxSetup
  - jQuery ajaxStart
  - jQuery ajaxStop
  - jQuery ajaxSuccess
  - jQuery animate
  - jQuery animateOptions
  - jQuery append
  - jQuery appendTo
  - jQuery attr
  - jQuery before
  - jQuery before handler
  - jQuery bind
  - jQuery bind handler
  - jQuery bind preventBubble
  - jQuery blur
  - jQuery Callbacks add
  - jQuery Callbacks disable
  - jQuery Callbacks disabled
  - jQuery Callbacks empty
  - jQuery Callbacks fire
  - jQuery Callbacks fireWith
  - jQuery Callbacks fired
  - jQuery Callbacks has
  - jQuery Callbacks lock
  - jQuery Callbacks locked
  - jQuery Callbacks remove
  - jQuery change
  - jQuery children
  - jQuery clearQueue
  - jQuery click
  - jQuery clone
  - jQuery closest
  - jQuery contains
  - jQuery contents
  - jQuery context
  - jQuery contextmenu
  - jQuery cssHooks
  - jQuery cssNumber
  - jQuery dblclick
  - jQuery Deferred always
  - jQuery Deferred catch
  - jQuery Deferred done
  - jQuery Deferred fail
  - jQuery Deferred notify
  - jQuery Deferred notifyWith
  - jQuery Deferred pipe
  - jQuery Deferred progress
  - jQuery Deferred promise
  - jQuery Deferred reject
  - jQuery Deferred rejectWith
  - jQuery Deferred resolve
  - jQuery Deferred resolveWith
  - jQuery Deferred state
  - jQuery Deferred then
  - jQuery delay
  - jQuery delegate
  - jQuery delegate event
  - jQuery dequeue
  - jQuery dequeue element
  - jQuery detach
  - jQuery each
  - jQuery each element
  - jQuery empty
  - jQuery end
  - jQuery eq
  - jQuery error
  - jQuery escapeSelector
  - jQuery Event currentTarget
  - jQuery Event data
  - jQuery Event delegateTarget
  - jQuery Event isDefaultPrevented
  - jQuery Event isImmediatePropagationStopped
  - jQuery Event isPropagationStopped
  - jQuery Event metaKey
  - jQuery Event namespace
  - jQuery Event pageX
  - jQuery Event pageY
  - jQuery Event preventDefault
  - jQuery Event relatedTarget
  - jQuery Event result
  - jQuery Event stopImmediatePropagation
  - jQuery Event stopPropagation
  - jQuery Event target
  - jQuery Event timeStamp
  - jQuery Event type
  - jQuery Event which
  - jQuery extend
  - jQuery fadeIn
  - jQuery fadeIn options
  - jQuery fadeOut
  - jQuery fadeOut options
  - jQuery fadeToggle
  - jQuery fadeToggle options
  - jQuery filter
  - jQuery filter handler
  - jQuery find
  - jQuery finish
  - jQuery first
  - jQuery Query version
  - jQuery focus
  - jQuery focus handler
  - jQuery fx interval
  - jQuery fx off
  - jQuery get
  - jQuery get attr
  - jQuery get css
  - jQuery get data
  - jQuery get data from element
  - jQuery get element
  - jQuery get fx extend
  - jQuery get height
  - jQuery get HTML
  - jQuery get index
  - jQuery get innerHeight
  - jQuery getJSON
  - jQuery get offset
  - jQuery get outerHeight
  - jQuery get outerWidth
  - jQuery get prop
  - jQuery get queue
  - jQuery getScript
  - jQuery get scrollLeft
  - jQuery get scrollTop
  - jQuery get text
  - jQuery get val
  - jQuery get width
  - jQuery grep
  - jQuery has
  - jQuery hasData
  - jQuery hide
  - jQuery hide completed
  - jQuery hide options
  - jQuery holdReady
  - jQuery hover
  - jQuery hover In Out
  - jQuery inArray
  - jQuery insertAfter
  - jQuery insertBefore
  - jQuery isArray
  - jQuery isEmptyObject
  - jQuery isFunction
  - jQuery isFunction
  - jQuery isNumeric
  - jQuery isPlainObject
  - jQuery isWindow
  - jQuery isXMLDoc
  - jQuery keydown
  - jQuery keypress
  - jQuery keyup
  - jQuery last
  - jQuery length
  - jQuery load
  - jQuery makeArray
  - jQuery map
  - jQuery map element
  - jQuery merge
  - jQuery mousedown
  - jQuery mouseenter
  - jQuery mouseleave
  - jQuery mousemove
  - jQuery mouseup
  - jQuery new queue
  - jQuery next
  - jQuery nextAll
  - jQuery nextUntil
  - jQuery noConflict
  - jQuery noop
  - jQuery not
  - jQuery not handler
  - jQuery now
  - jQuery off
  - jQuery offsetParent
  - jQuery on
  - jQuery one
  - jQuery param
  - jQuery parent
  - jQuery parents
  - jQuery parentsUntil
  - jQuery parseHTML
  - jQuery parseJSON
  - jQuery parseXML
  - jQuery position
  - jQuery post
  - jQuery post settings
  - jQuery prepend
  - jQuery prepend handler
  - jQuery prependTo
  - jQuery prev
  - jQuery prevAll
  - jQuery prevUntil
  - jQuery promise
  - jQuery proxy
  - jQuery pushStack
  - jQuery queue
  - jQuery new queue callback
  - jQuery ready
  - jQuery readyException
  - jQuery remove
  - jQuery removeAttr
  - jQuery removeClass
  - jQuery removeClass handler
  - jQuery removeData
  - jQuery removeData from element
  - jQuery removeProp
  - jQuery replaceWith
  - jQuery replaceWith handler
  - jQuery resize
  - jQuery resize handler
  - jQuery scroll
  - jQuery scroll handler
  - jQuery select
  - jQuery select handler
  - jQuery serialize
  - jQuery set attr
  - jQuery set attr handler
  - jQuery set css
  - jQuery set css handler
  - jQuery set css properties
  - jQuery set data
  - jQuery set data to element
  - jQuery set height
  - jQuery set height handler
  - jQuery set HTML
  - jQuery set HTML handler
  - jQuery set index
  - jQuery set innerHeight
  - jQuery set innerHeight handler
  - jQuery set offset
  - jQuery set offset handler
  - jQuery set outerHeight
  - jQuery set outerWidth
  - jQuery set outerWidth handler
  - jQuery set prop
  - jQuery set prop handle
  - jQuery set prop properties
  - jQuery set queue
  - jQuery set queue callback
  - jQuery set scrollLeft
  - jQuery set scrollTop
  - jQuery set text
  - jQuery set text handler
  - jQuery set val
  - jQuery set val handler
  - jQuery set width
  - jQuery set width handler
  - jQuery show
  - jQuery show complete
  - jQuery show options
  - jQuery siblings
  - jQuery slice
  - jQuery slideDown
  - jQuery slideDown options
  - jQuery slideToggle
  - jQuery slideToggle options
  - jQuery slideUp
  - jQuery slideUp options
  - jQuery speed
  - jQuery stop
  - jQuery submit
  - jQuery submit handler
  - jQuery support
  - jQuery Text
  - jQuery toArray
  - jQuery toggle
  - jQuery toggleClass
  - jQuery toggleClass handler
  - jQuery toggleClass Name
  - jQuery toggle handler
  - jQuery toggle options
  - jQuery trigger
  - jQuery triggerHandler
  - jQuery trim
  - jQuery type
  - jQuery unbind
  - jQuery unbind event
  - jQuery unbind false
  - jQuery undelegate
  - jQuery undelegate eventType
  - jQuery undelegate event
  - jQuery undelegate handler
  - jQuery undelegate namespace
  - jQuery unique
  - jQuery uniqueSort
  - jQuery unwrap
  - jQuery when
  - jQuery wrap
  - jQuery wrapAll
  - jQuery wrapAll handler
  - jQuery wrap handler
  - jQuery wrapInner
  - jQuery wrapInner handler
