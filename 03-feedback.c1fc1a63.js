function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var r,a,i,o,f,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function x(e){return l=e,f=setTimeout(h,t),c?y(e):o}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function h(){var e=v();if(S(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?d(n,i-(e-l)):n}(e))}function j(e){return f=void 0,g&&r?y(e):(r=a=void 0,o)}function T(){var e=v(),n=S(e);if(r=arguments,a=this,u=e,n){if(void 0===f)return x(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),o}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=a=f=void 0},T.flush=function(){return void 0===f?o:j(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||o.test(e)?f(e.slice(2),n?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),g(e,t,{leading:r,maxWait:t,trailing:a})};const y={form:document.querySelector(".feedback-form"),email:document.querySelector('[name="email"]'),textarea:document.querySelector('[name="message"]')},x={};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));localStorage.getItem("feedback-form-state")&&(e.email&&(y.email.value=e.email,x[y.email.name]=y.email.value),e.message&&(y.textarea.value=e.message,x[y.textarea.name]=y.textarea.value))}(),y.form.addEventListener("submit",(function(e){e.preventDefault(),""===y.email.value||""===y.textarea.value?alert("Please fill in all the fields"):(e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(x))})),y.form.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(x))}),500));
//# sourceMappingURL=03-feedback.c1fc1a63.js.map