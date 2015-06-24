/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
!function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function n(e,t){var n=r(e,t)?o:i;n(e,t)}var r,i,o;"classList"in document.documentElement?(r=function(e,t){return e.classList.contains(t)},i=function(e,t){e.classList.add(t)},o=function(e,t){e.classList.remove(t)}):(r=function(e,n){return t(n).test(e.className)},i=function(e,t){r(e,t)||(e.className=e.className+" "+t)},o=function(e,n){e.className=e.className.replace(t(n)," ")});var a={hasClass:r,addClass:i,removeClass:o,toggleClass:n,has:r,add:i,remove:o,toggle:n};"function"==typeof define&&define.amd?define(a):e.classie=a}(window);