!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=4)}([function(e,r,t){"use strict";(function(e,n){var o,i=t(1);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var a=Object(i.a)(o);r.a=a}).call(this,t(2),t(3)(e))},function(e,r,t){"use strict";function n(e){var r,t=e.Symbol;return"function"==typeof t?t.observable?r=t.observable:(r=t("observable"),t.observable=r):r="@@observable",r}t.d(r,"a",function(){return n})},function(e,r){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,r){e.exports=function(e){if(!e.webpackPolyfill){var r=Object.create(e);r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),Object.defineProperty(r,"exports",{enumerable:!0}),r.webpackPolyfill=1}return r}},function(e,r,t){"use strict";t.r(r);var n=t(0),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!=typeof e||null===e)return!1;for(var r=e;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r}var u={DIGITS:"123456789"},s="ABCDEFGHI",f=u.DIGITS,c=null,l=null,d=null,v=null,p={easy:62,medium:53,hard:44,"very-hard":35,insane:26,inhuman:17};u.BLANK_CHAR=".",u.BLANK_BOARD=".................................................................................",u.generate=function(e,r){"string"!=typeof e&&void 0!==e||(e=p[e]||p.easy),e=u._force_range(e,82,17),r=r||!0;for(var t="",n=0;n<81;++n)t+=".";var o=u._get_candidates_map(t),i=u._shuffle(c);for(var a in i){var s=i[a],f=u._rand_range(o[s].length),l=o[s][f];if(!u._assign(o,s,l))break;var d=[];for(var a in c){1==o[s=c[a]].length&&d.push(o[s])}if(d.length>=e&&u._strip_dups(d).length>=8){var v="",h=[];for(var n in c){1==o[s=c[n]].length?(v+=o[s],h.push(n)):v+=u.BLANK_CHAR}var _=h.length;if(_>e){h=u._shuffle(h);for(n=0;n<_-e;++n){var b=parseInt(h[n]);v=v.substr(0,b)+u.BLANK_CHAR+v.substr(b+1)}}if(u.solve(v))return v}}return u.generate(e)},u.solve=function(e,r){var t=u.validate_board(e);if(!0!==t)throw t;var n=0;for(var o in e)e[o]!==u.BLANK_CHAR&&u._in(e[o],u.DIGITS)&&++n;if(n<17)throw"Too few givens. Minimum givens is 17";r=r||!1;var i=u._get_candidates_map(e),a=u._search(i,r);if(a){var s="";for(var f in a)s+=a[f];return s}return!1},u.get_candidates=function(e){var r=u.validate_board(e);if(!0!==r)throw r;var t=u._get_candidates_map(e);if(!t)return!1;var n=[],o=[],i=0;for(var a in t){var s=t[a];o.push(s),i%9==8&&(n.push(o),o=[]),++i}return n},u._get_candidates_map=function(e){var r=u.validate_board(e);if(!0!==r)throw r;var t={},n=u._get_square_vals_map(e);for(var o in c)t[c[o]]=u.DIGITS;for(var i in n){var a=n[i];if(u._in(a,u.DIGITS))if(!u._assign(t,i,a))return!1}return t},u._search=function(e,r){if(!e)return!1;r=r||!1;var t=0;for(var n in c){(s=e[a=c[n]].length)>t&&(t=s,a)}if(1===t)return e;var o=10,i=null;for(n in c){var a,s;(s=e[a=c[n]].length)<o&&s>1&&(o=s,i=a)}var f=e[i];if(r)for(l=f.length-1;l>=0;--l){v=f[l],p=JSON.parse(JSON.stringify(e));if(d=u._search(u._assign(p,i,v),r))return d}else for(var l in f){var d,v=f[l],p=JSON.parse(JSON.stringify(e));if(d=u._search(u._assign(p,i,v)))return d}return!1},u._assign=function(e,r,t){var n=e[r].replace(t,"");for(var o in n){var i=n[o];if(!u._eliminate(e,r,i))return!1}return e},u._eliminate=function(e,r,t){if(!u._in(t,e[r]))return e;e[r]=e[r].replace(t,"");var n=e[r].length;if(1===n){var o=e[r];for(var i in v[r]){var a=v[r][i];if(!u._eliminate(e,a,o))return!1}}if(0===n)return!1;for(var s in d[r]){var f=d[r][s],c=[];for(var l in f){var p=f[l];u._in(t,e[p])&&c.push(p)}if(0===c.length)return!1;if(1===c.length&&!u._assign(e,c[0],t))return!1}return e},u._get_square_vals_map=function(e){var r={};if(e.length!=c.length)throw"Board/squares length mismatch.";for(var t in c)r[c[t]]=e[t];return r},u._get_square_units_map=function(e,r){var t={};for(var n in e){var o=e[n],i=[];for(var a in r){var u=r[a];-1!==u.indexOf(o)&&i.push(u)}t[o]=i}return t},u._get_square_peers_map=function(e,r){var t={};for(var n in e){var o=e[n],i=r[o],a=[];for(var u in i){var s=i[u];for(var f in s){var c=s[f];-1===a.indexOf(c)&&c!==o&&a.push(c)}}t[o]=a}return t},u._get_all_units=function(e,r){var t=[];for(var n in e)t.push(u._cross(e[n],r));for(var o in r)t.push(u._cross(e,r[o]));var i=["ABC","DEF","GHI"],a=["123","456","789"];for(var s in i)for(var f in a)t.push(u._cross(i[s],a[f]));return t},u.board_string_to_grid=function(e){var r=[],t=[];for(var n in e)t.push(e[n]),n%9==8&&(r.push(t),t=[]);return r},u.board_grid_to_string=function(e){for(var r="",t=0;t<9;++t)for(var n=0;n<9;++n)r+=e[t][n];return r},u.print_board=function(e){var r=u.validate_board(e);if(!0!==r)throw r;var t="";for(var n in e){t+=e[n]+" ",n%3==2&&(t+="  "),n%9==8&&(t+="\n"),n%27==26&&(t+="\n")}console.log(t)},u.validate_board=function(e){if(!e)return"Empty board";if(81!==e.length)return"Invalid board size. Board must be exactly 81 squares.";for(var r in e)if(!u._in(e[r],u.DIGITS)&&e[r]!==u.BLANK_CHAR)return"Invalid board character encountered at index "+r+": "+e[r];return!0},u._cross=function(e,r){var t=[];for(var n in e)for(var o in r)t.push(e[n]+r[o]);return t},u._in=function(e,r){return-1!==r.indexOf(e)},u._first_true=function(e){for(var r in e)if(e[r])return e[r];return!1},u._shuffle=function(e){for(var r=[],t=0;t<e.length;++t)r.push(!1);for(var t in e){for(var n=u._rand_range(e.length);r[n];)n=n+1>e.length-1?0:n+1;r[n]=e[t]}return r},u._rand_range=function(e,r){if(r=r||0,e)return Math.floor(Math.random()*(e-r))+r;throw"Range undefined"},u._strip_dups=function(e){var r=[],t={};for(var n in e){var o=e[n];t[o]||(r.push(o),t[o]=!0)}return r},u._force_range=function(e,r,t){return(e=e||0)<(t=t||0)?t:e>r?r:e},c=u._cross(s,f),l=u._get_all_units(s,f),d=u._get_square_units_map(c,l),v=u._get_square_peers_map(c,d);var h=u;function _(e,r){const t=9*r;y(e.slice(t,t+9))}function b(e,r){let t=[];for(let n=0;n<9;n++)t.push(e[9*n+r]);y(t)}function g(e,r){const t=3*Math.floor(r/3),n=t+2,o=3*r%9,i=o+2;y(e.filter((e,r)=>r%9>=t&&r%9<=n&&Math.floor(r/9)>=o&&Math.floor(r/9)<=i))}function y(e){const r=e.map(e=>e.value),t="123456789".split("").filter(e=>r.indexOf(e)!==r.lastIndexOf(e));e.forEach((e,r)=>{t.includes(e.value)&&"given"!==e.class&&(e.class="conflict")})}const m={class:"normal",value:""};function w(e){let r={};return r.difficulty=e,r.board=h.generate(e).split("").map(e=>"."===e?m:{class:"given",value:e}),r}var E=function e(r,t,o){var u;if("function"==typeof t&&"function"==typeof o||"function"==typeof o&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===o&&(o=t,t=void 0),void 0!==o){if("function"!=typeof o)throw new Error("Expected the enhancer to be a function.");return o(e)(r,t)}if("function"!=typeof r)throw new Error("Expected the reducer to be a function.");var s=r,f=t,c=[],l=c,d=!1;function v(){l===c&&(l=c.slice())}function p(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return f}function h(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var r=!0;return v(),l.push(e),function(){if(r){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");r=!1,v();var t=l.indexOf(e);l.splice(t,1)}}}function _(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,f=s(f,e)}finally{d=!1}for(var r=c=l,t=0;t<r.length;t++)(0,r[t])();return e}return _({type:i.INIT}),(u={dispatch:_,subscribe:h,getState:p,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,_({type:i.REPLACE})}})[n.a]=function(){var e,r=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(p())}return t(),{unsubscribe:r(t)}}})[n.a]=function(){return this},e},u}(function(e=JSON.parse(localStorage.getItem("sudoku_saved_game"))||w("medium"),r){let t=JSON.parse(JSON.stringify(e));switch(r.type){case"RESET_GAME":return t.board=t.board.map(e=>"given"===e.class?e:m),t;case"CELL_INPUT":if(!"123456789".includes(r.value)||"given"===t.board[r.index].class)return t;t.board[r.index].value=r.value;break;case"NEW_GAME":t=w(r.value)}return function(e){e.forEach(e=>{"conflict"===e.class&&(e.class="normal")});for(let r=0;r<9;r++)_(e,r),b(e,r),g(e,r)}(t.board),localStorage.setItem("sudoku_saved_game",JSON.stringify(t)),t});let I,O;function N(e){e.preventDefault();const r=Number(this.id.slice(1)),t=r%9,n=Math.floor(r/9);let o;switch(e.key){case"ArrowLeft":o=9*n+(t+8)%9;break;case"ArrowUp":o=(n+8)%9*9+t;break;case"ArrowRight":o=9*n+(t+1)%9;break;case"ArrowDown":o=(n+1)%9*9+t;break;case"Backspace":case"Delete":return void E.dispatch({type:"CELL_INPUT",index:r,value:""});default:return void E.dispatch({type:"CELL_INPUT",index:Number(this.id.slice(1)),value:e.key})}O[o].focus()}function S(){var e;window.confirm("Start new game?")?(e=(()=>E.dispatch({type:"NEW_GAME",value:this.value})),document.getElementById("sudokuBoard").classList.add("invisible"),setTimeout(()=>{e(),document.getElementById("sudokuBoard").classList.remove("invisible")},350)):this.value=E.getState().difficulty}function x(){const e=E.getState(),r=e.board;O.forEach((e,t)=>{e.value=r[t].value,e.className="cell-input "+r[t].class}),document.getElementById("difficultySelect").value=e.difficulty}document.querySelector("#sudokuBoard").innerHTML=function(){let e="<tbody>";for(let r=0;r<9;r++){e+="<tr>";for(let r=0;r<9;r++)e+='<td class="cell">',e+='<input type="number">',e+="</td>";e+="</tr>"}return e+="</tbody>"}(),(I=[...document.querySelectorAll("#sudokuBoard td")]).forEach((e,r)=>(function(e,r){e.id="c"+r,e.childNodes[0].id="i"+r,e.childNodes[0].className="cell-input",e.childNodes[0].addEventListener("keydown",N)})(e,r)),O=I.map(e=>e.childNodes[0]),document.getElementById("difficultySelect").addEventListener("change",S),x(),E.subscribe(x),document.getElementById("i0").focus()}]);