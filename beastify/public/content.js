/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/Content/Content.fs.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertBeast": () => (/* binding */ insertBeast),
/* harmony export */   "removeExistingBeasts": () => (/* binding */ removeExistingBeasts)
/* harmony export */ });

const removeExistingBeasts = void 0;

function insertBeast(beastURL) {
    const image = document.createElement("img");
    image.setAttribute("src", beastURL);
    image.className = "beastify-image";
    image.style.height = "100vh";
    document.body.appendChild(image);
}

(chrome).runtime.onMessage.addListener((message) => {
    const matchValue = message.command;
    if (matchValue === "beastify") {
        insertBeast(message.beastUrl);
    }
    else if (matchValue === "reset") {
    }
});


/******/ })()
;
//# sourceMappingURL=content.js.map