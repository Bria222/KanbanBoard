/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --main-font: \"Poppins\", sans-serif;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #fff;\r\n}\r\n\r\nheader {\r\n  background-color: rgb(215, 219, 219);\r\n  height: max-content;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-content: center;\r\n  padding: 20px;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.link-lists {\r\n  display: flex;\r\n  gap: 40px;\r\n  margin-right: 80px;\r\n  list-style: none;\r\n}\r\n\r\n.link-lists > li a {\r\n  list-style: none;\r\n  text-decoration: none;\r\n  color: rgb(53, 53, 53);\r\n}\r\n\r\n.logo {\r\n  width: 100px;\r\n}\r\n\r\n.link-logo {\r\n  text-decoration: none;\r\n  border: 1px solid black;\r\n  border-radius: 50%;\r\n  padding: 20px;\r\n}\r\n\r\n.grid-cards-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  margin-top: 6em;\r\n  gap: 30px;\r\n  padding: 50px;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.6rem 0;\r\n  transition: 500ms ease-in;\r\n}\r\n\r\n.item:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.show-image {\r\n  width: 210px;\r\n  height: 295px;\r\n}\r\n\r\n.card-title {\r\n  font-family: var(--main-font);\r\n  font-size: 1.2em;\r\n  color: #fff;\r\n}\r\n\r\n.movie-title {\r\n  text-align: center;\r\n  width: 200px;\r\n}\r\n\r\n.comment-btn,\r\n.reserve-btn {\r\n  border: 2px solid black;\r\n  padding: 0.4em;\r\n  font-family: var(--main-font);\r\n  font-weight: bold;\r\n  color: rgb(5, 5, 5);\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  border-radius: 8px;\r\n}\r\n\r\n.comment-and-like {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.p-like {\r\n  color: black;\r\n}\r\n\r\n.heart {\r\n  width: 100px;\r\n  height: 100px;\r\n  background:\r\n    url(\"https://cssanimation.rocks/images/posts/steps/heart.png\")\r\n    no-repeat;\r\n  background-position: 0 0;\r\n  cursor: pointer;\r\n  transition: background-position 1s steps(28);\r\n  transition-duration: 0s;\r\n  margin-bottom: 0;\r\n  margin-top: 0;\r\n}\r\n\r\n.heart.is-active {\r\n  transition-duration: 1s;\r\n  background-position: -2800px 0;\r\n}\r\n\r\n.loading {\r\n  width: 160px;\r\n  height: 160px;\r\n  border-radius: 150px;\r\n  border: 15px aquamarine;\r\n  border-top-color: rgba(0, 0, 0, 0.3);\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-top: -80px;\r\n  margin-left: -80px;\r\n  animation: loading 1.2s linear infinite;\r\n  z-index: 999999999;\r\n}\r\n\r\n@keyframes loading {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.mask {\r\n  background: rgba(0, 0, 0, 0.918);\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: absolute;\r\n  z-index: 99999999;\r\n}\r\n\r\n.load-more {\r\n  padding: 8px;\r\n  background-color: aquamarine;\r\n  margin: 5px auto;\r\n  width: 40%;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  border-radius: 3px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  border-top: 2px solid;\r\n  text-align: center;\r\n  padding: 2rem 0;\r\n  margin: 2rem 0 0 0;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/* //comment popup// */\r\n.movie-popup {\r\n  display: none;\r\n  background: #fff;\r\n  position: fixed;\r\n  z-index: 9999;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  overflow: auto;\r\n}\r\n\r\nh2 {\r\n  margin-left: 275px;\r\n  padding-top: 30px;\r\n}\r\n\r\n.movie-popup .popup-title {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 20px 0;\r\n}\r\n\r\n.movie-popup table {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  text-align: left;\r\n}\r\n\r\n.popup-img {\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n.comments {\r\n  margin-left: 90px;\r\n  list-style-type: none;\r\n}\r\n\r\n.comment-title {\r\n  margin-left: 90px;\r\n  padding-top: 30px;\r\n}\r\n\r\n#close-popup {\r\n  display: block;\r\n  width: 100%;\r\n  text-align: right;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  font-weight: 900;\r\n  padding: 20px 30px 0 0;\r\n}\r\n\r\n.com-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 25px;\r\n  margin-bottom: 20px;\r\n  margin-left: 130px;\r\n  align-items: center;\r\n}\r\n\r\n.com-form input,\r\n.com-form button {\r\n  width: 300px;\r\n  height: 35px;\r\n  padding-left: 10px;\r\n  outline: none;\r\n  background-color: white;\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\n.com-form button {\r\n  box-shadow: 2px 2px 4px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.com-form textarea {\r\n  width: 400px;\r\n  height: 155px;\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\n.com-form h2 {\r\n  text-align: center;\r\n  display: contents;\r\n}\r\n\r\ntd {\r\n  padding-bottom: 1rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nli {\r\n  font-size: 1.5rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap\");\r\n\r\n:root {\r\n  --main-font: \"Poppins\", sans-serif;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #fff;\r\n}\r\n\r\nheader {\r\n  background-color: rgb(215, 219, 219);\r\n  height: max-content;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-content: center;\r\n  padding: 20px;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.link-lists {\r\n  display: flex;\r\n  gap: 40px;\r\n  margin-right: 80px;\r\n  list-style: none;\r\n}\r\n\r\n.link-lists > li a {\r\n  list-style: none;\r\n  text-decoration: none;\r\n  color: rgb(53, 53, 53);\r\n}\r\n\r\n.logo {\r\n  width: 100px;\r\n}\r\n\r\n.link-logo {\r\n  text-decoration: none;\r\n  border: 1px solid black;\r\n  border-radius: 50%;\r\n  padding: 20px;\r\n}\r\n\r\n.grid-cards-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  margin-top: 6em;\r\n  gap: 30px;\r\n  padding: 50px;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.6rem 0;\r\n  transition: 500ms ease-in;\r\n}\r\n\r\n.item:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.show-image {\r\n  width: 210px;\r\n  height: 295px;\r\n}\r\n\r\n.card-title {\r\n  font-family: var(--main-font);\r\n  font-size: 1.2em;\r\n  color: #fff;\r\n}\r\n\r\n.movie-title {\r\n  text-align: center;\r\n  width: 200px;\r\n}\r\n\r\n.comment-btn,\r\n.reserve-btn {\r\n  border: 2px solid black;\r\n  padding: 0.4em;\r\n  font-family: var(--main-font);\r\n  font-weight: bold;\r\n  color: rgb(5, 5, 5);\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  border-radius: 8px;\r\n}\r\n\r\n.comment-and-like {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.p-like {\r\n  color: black;\r\n}\r\n\r\n.heart {\r\n  width: 100px;\r\n  height: 100px;\r\n  background:\r\n    url(\"https://cssanimation.rocks/images/posts/steps/heart.png\")\r\n    no-repeat;\r\n  background-position: 0 0;\r\n  cursor: pointer;\r\n  transition: background-position 1s steps(28);\r\n  transition-duration: 0s;\r\n  margin-bottom: 0;\r\n  margin-top: 0;\r\n}\r\n\r\n.heart.is-active {\r\n  transition-duration: 1s;\r\n  background-position: -2800px 0;\r\n}\r\n\r\n.loading {\r\n  width: 160px;\r\n  height: 160px;\r\n  border-radius: 150px;\r\n  border: 15px aquamarine;\r\n  border-top-color: rgba(0, 0, 0, 0.3);\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-top: -80px;\r\n  margin-left: -80px;\r\n  animation: loading 1.2s linear infinite;\r\n  z-index: 999999999;\r\n}\r\n\r\n@keyframes loading {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.mask {\r\n  background: rgba(0, 0, 0, 0.918);\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: absolute;\r\n  z-index: 99999999;\r\n}\r\n\r\n.load-more {\r\n  padding: 8px;\r\n  background-color: aquamarine;\r\n  margin: 5px auto;\r\n  width: 40%;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  border-radius: 3px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  border-top: 2px solid;\r\n  text-align: center;\r\n  padding: 2rem 0;\r\n  margin: 2rem 0 0 0;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/* //comment popup// */\r\n.movie-popup {\r\n  display: none;\r\n  background: #fff;\r\n  position: fixed;\r\n  z-index: 9999;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  overflow: auto;\r\n}\r\n\r\nh2 {\r\n  margin-left: 275px;\r\n  padding-top: 30px;\r\n}\r\n\r\n.movie-popup .popup-title {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 20px 0;\r\n}\r\n\r\n.movie-popup table {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  text-align: left;\r\n}\r\n\r\n.popup-img {\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n.comments {\r\n  margin-left: 90px;\r\n  list-style-type: none;\r\n}\r\n\r\n.comment-title {\r\n  margin-left: 90px;\r\n  padding-top: 30px;\r\n}\r\n\r\n#close-popup {\r\n  display: block;\r\n  width: 100%;\r\n  text-align: right;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  font-weight: 900;\r\n  padding: 20px 30px 0 0;\r\n}\r\n\r\n.com-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 25px;\r\n  margin-bottom: 20px;\r\n  margin-left: 130px;\r\n  align-items: center;\r\n}\r\n\r\n.com-form input,\r\n.com-form button {\r\n  width: 300px;\r\n  height: 35px;\r\n  padding-left: 10px;\r\n  outline: none;\r\n  background-color: white;\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\n.com-form button {\r\n  box-shadow: 2px 2px 4px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.com-form textarea {\r\n  width: 400px;\r\n  height: 155px;\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\n.com-form h2 {\r\n  text-align: center;\r\n  display: contents;\r\n}\r\n\r\ntd {\r\n  padding-bottom: 1rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nli {\r\n  font-size: 1.5rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLikes": () => (/* binding */ addLikes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "likeCount": () => (/* binding */ likeCount)
/* harmony export */ });
const url1 = 'https://api.tvmaze.com/shows';
const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VWIl4IKk3y3x1neav2bU/likes';

const fetchData = (url, CostumSettings = {}) => {
  const response = fetch(url, CostumSettings)
    .then((res) => res.json());
  return response;
};

const getData = () => fetchData(url1);

const likeCount = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VWIl4IKk3y3x1neav2bU/likes');
  const data = await response.json();
  return data;
};

const addLikes = async (id) => {
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  };
  const res = await fetchData(url2, settings)
    .catch((err) => err);
  return res;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commentCounter": () => (/* binding */ commentCounter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fetchMovieComments": () => (/* binding */ fetchMovieComments)
/* harmony export */ });
const commentsEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DWcDAh13W8mhMfudWgwK/comments';
const fetchMovieComments = async (movieId) => {
  const response = await fetch(`${commentsEndpoint}?item_id=${movieId}`).catch((err) => err);
  return response.json();
};

// async function to fetch total number of available comments for a movie wih a specific ID
const getTotalComments = async (movieId) => {
  const res = await fetchMovieComments(movieId)
    .then((data) => (!data.error ? data.length : 0))
    .catch(() => 0);
  return res;
};
const popup = document.querySelector('.movie-popup');

// Update UI total number of comments
const updateTotalCommentsCount = (movieId) => {
  getTotalComments(movieId).then((total) => {
    popup.querySelector('.total-comments').innerHTML = total;
  });
};
const commentCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');

document.addEventListener('click', async (e) => {
  if (e.target.matches('.comment-btn')) {
    const data = await fetchMovieComments(e.target.id);
    const commentNumber = commentCounter(data);
    document.querySelector('.total-comments').textContent = commentNumber || 0;
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTotalCommentsCount);



/***/ }),

/***/ "./src/modules/commentPop.js":
/*!***********************************!*\
  !*** ./src/modules/commentPop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");


const url1 = 'https://api.tvmaze.com/shows';
const commentsEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DWcDAh13W8mhMfudWgwK/comments';
const popup = document.querySelector('.movie-popup');

const get = (url) => fetch(url)
  .then((res) => res.json())
  .then((data) => data)
  .catch((error) => error);

const post = (url, params = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
}).then((res) => res.text())
  .then((data) => (data.error
    ? { error: true, info: data }
    : { error: false, info: data }))
  .catch((error) => ({ error: true, info: error }));

const addComment = async (params) => {
  const response = await post(commentsEndpoint, params);
  return response;
};
const fetchMovieData = async (movieId) => {
  const response = await get(`${url1}/${movieId}`);
  return response;
};

const displayMovieComments = (data) => {
  popup.querySelector('.comments').innerHTML = data;
};
const enableClosePopup = () => {
  document.querySelector('#close-popup').addEventListener('click', () => {
    popup.style.display = 'none';
    popup.innerHTML = '';
  });
};

const showComments = (movieId) => {
  (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__.fetchMovieComments)(movieId).then((data) => {
    if (!data.error) {
      let comments = '';
      data.forEach((comment) => {
        comments += `<li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>`;
      });
      displayMovieComments(comments);
    } else {
      displayMovieComments('No comments have been posted yet. Be the first to write something...');
    }
  });
};
const displayMoviePopup = (movieId) => {
  popup.innerHTML = `Loading...<br>
  <span id="close-popup">X</span>`;

  fetchMovieData(movieId).then((data) => {
    popup.innerHTML = `
    <span id="close-popup">X</span>
    <img src="${data.image.medium}" class="popup-img">
    <h3 class="popup-title">${data.name}</h3>
    <table>
      <tr>
        <td>
          <b>premiered:</b> ${data.premiered}
        </td>
        <td>
          <b>Ended:</b> ${data.ended}
        </td>
      </tr>
      <tr>
        <td>
          <b>Language:</b> ${data.language}
        </td>
        <td>
          <b>Type:</b> ${data.type}
        </td>
      </tr>
    </table>
    <h3 class="comment-title">
    Comments(<span class="total-comments">0</span>)
    </h3>
    <ul class="comments">
      fetching comments...
    </ul>
    <form class="com-form">
      <h2>Add a comment</h2>
      <input type="text" name="username" placeholder="Your name" required>
      <textarea placeholder="Your insights" name="comment" required minlength="1"></textarea>
      <button type="submit">Submit</button>
    </form>
    `;

    enableClosePopup();
    showComments(movieId);

    const form = popup.querySelector('.com-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = form.elements.username.value;
      const msg = form.elements.comment.value;
      addComment({
        item_id: movieId,
        username: user,
        comment: msg,
      }).then(() => {
        showComments(movieId);
        (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movieId);
        form.reset();
      });
    });
  });

  popup.style.display = 'block';
  enableClosePopup();
};
const enableComments = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((movie) => {
    movie.addEventListener('click', () => {
      const movieId = movie.getAttribute('movie_id');
      displayMoviePopup(movieId);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enableComments);


/***/ }),

/***/ "./src/modules/createCardItem.js":
/*!***************************************!*\
  !*** ./src/modules/createCardItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cardContainer = document.querySelector('.grid-cards-container');

const createCardItem = (item, itemLike = 0) => {
  const cardElement = document.createElement('article');
  const cardImage = document.createElement('img');
  const cardTitle = document.createElement('h4');
  const commentAndLikeDiv = document.createElement('div');
  const commentBtn = document.createElement('button');
  const reserveBtn = document.createElement('button');
  const pLikesTag = document.createElement('p');
  const likeHeart = document.createElement('div');
  const movieTitle = document.createElement('h4');

  cardContainer.append(cardElement);
  cardElement.append(cardImage, cardTitle, commentAndLikeDiv);
  cardElement.classList.add('item');
  cardTitle.classList.add('card-title');
  movieTitle.classList.add('movie-title');
  likeHeart.classList.add('heart');
  likeHeart.id = item.id;
  commentAndLikeDiv.append(movieTitle, likeHeart, pLikesTag, commentBtn);
  pLikesTag.classList.add('p-like');
  commentAndLikeDiv.classList.add('comment-and-like');
  commentBtn.classList.add('comment-btn');
  // reserveBtn.classList.add('comment-btn');
  reserveBtn.classList.add('reserve-btn');
  commentBtn.setAttribute('movie_id', item.id);
  reserveBtn.setAttribute('movie_id', item.id);
  commentBtn.id = item.id;
  reserveBtn.id = item.id;
  commentBtn.textContent = 'Comment';
  reserveBtn.textContent = 'Reserve';
  movieTitle.textContent = 'Movie Title';

  pLikesTag.textContent = `${itemLike} likes`;
  cardImage.src = item.image.medium;
  cardTitle.textContent = item.name;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCardItem);

/***/ }),

/***/ "./src/modules/getMovieTitle.js":
/*!**************************************!*\
  !*** ./src/modules/getMovieTitle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const url1 = 'https://api.tvmaze.com/shows';

const getMovieTitle = async () => {
  const movieTitle = document.querySelectorAll('.movie-title');
  const titleArray = [];
  const response = await fetch(url1);
  const data = await response.json();
  data.forEach((title) => {
    titleArray.push(title.name);
    movieTitle.forEach((movie, index) => {
      movie.innerHTML = titleArray[index];
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovieTitle);

/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "itemsCounter": () => (/* binding */ itemsCounter)
/* harmony export */ });
const itemsCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');

const displayTvShownumbers = (data) => {
  const TvShowLink = document.querySelector('.tv-show-link');
  const counter = itemsCounter(data);
  TvShowLink.textContent = `TvShows(${counter})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTvShownumbers);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api.js */ "./src/modules/api.js");
/* harmony import */ var _modules_createCardItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createCardItem.js */ "./src/modules/createCardItem.js");
/* harmony import */ var _modules_itemsCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/itemsCounter.js */ "./src/modules/itemsCounter.js");
/* harmony import */ var _modules_getMovieTitle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/getMovieTitle.js */ "./src/modules/getMovieTitle.js");
/* harmony import */ var _modules_commentPop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/commentPop.js */ "./src/modules/commentPop.js");







document.addEventListener('click', async (e) => {
  if (e.target.matches('.heart')) {
    e.target.classList.toggle('is-active');
    const id = Number(e.target.id);
    const like = Number(e.target.nextSibling.textContent.match(/[0-9]/g).join(''));
    e.target.nextSibling.textContent = `${like + 1} likes`;
    await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.addLikes)(id);
  }
});

const loading = () => {
  const cardsContainer = document.querySelector('.grid-cards-container');
  const loadDiv = document.createElement('div');
  const mask = document.createElement('div');
  loadDiv.classList.add('loading');
  mask.classList.add('mask');
  cardsContainer.append(mask, loadDiv);
};

const removeLoding = () => {
  document.querySelector('.loading').remove();
  document.querySelector('.mask').remove();
};

const renderItems = async (showCount = 16) => {
  loading();
  const itemsData = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const showLess = itemsData.slice(0, showCount);
  (0,_modules_itemsCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(showLess);
  removeLoding();
  const likes = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.likeCount)();
  showLess.forEach((element, i) => {
    let numLikes = 0;
    numLikes = likes.filter((like) => like.item_id === showLess[i].id);
    if (numLikes.length > 0) {
      (0,_modules_createCardItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(showLess[i], numLikes[0].likes);
    } else {
      (0,_modules_createCardItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(showLess[i], 0);
    }
  });
};

renderItems().then(() => {
  (0,_modules_getMovieTitle_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_commentPop_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxP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Ozs7Ozs7QUNBcUI7QUFDMkM7QUFDUDtBQUNJO0FBQ047QUFDRjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRCxVQUFVLHlEQUFRO0FBQ2xCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQU87QUFDakM7QUFDQSxFQUFFLG9FQUFvQjtBQUN0QjtBQUNBLHNCQUFzQiwwREFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0VBQWM7QUFDcEIsTUFBTTtBQUNOLE1BQU0sc0VBQWM7QUFDcEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxRUFBYTtBQUNmLEVBQUUsa0VBQWM7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL21vZHVsZXMvY29tbWVudENvdW50ZXIuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9zcmMvbW9kdWxlcy9jb21tZW50UG9wLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL21vZHVsZXMvY3JlYXRlQ2FyZEl0ZW0uanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9zcmMvbW9kdWxlcy9nZXRNb3ZpZVRpdGxlLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL21vZHVsZXMvaXRlbXNDb3VudGVyLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2thbmJhbmJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2thbmJhbmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2thbmJhbmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tbWFpbi1mb250OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTksIDIxOSk7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstbGlzdHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogODBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saW5rLWxpc3RzID4gbGkgYSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHJnYig1MywgNTMsIDUzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGluay1sb2dvIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgbWFyZ2luLXRvcDogNmVtO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgcGFkZGluZzogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNnJlbSAwO1xcclxcbiAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW06aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDIxMHB4O1xcclxcbiAgaGVpZ2h0OiAyOTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS10aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0bixcXHJcXG4ucmVzZXJ2ZS1idG4ge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAwLjRlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogcmdiKDUsIDUsIDUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWFuZC1saWtlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnAtbGlrZSB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5oZWFydCB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgYmFja2dyb3VuZDpcXHJcXG4gICAgdXJsKFxcXCJodHRwczovL2Nzc2FuaW1hdGlvbi5yb2Nrcy9pbWFnZXMvcG9zdHMvc3RlcHMvaGVhcnQucG5nXFxcIilcXHJcXG4gICAgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAxcyBzdGVwcygyOCk7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQuaXMtYWN0aXZlIHtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI4MDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZyB7XFxyXFxuICB3aWR0aDogMTYwcHg7XFxyXFxuICBoZWlnaHQ6IDE2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxyXFxuICBib3JkZXI6IDE1cHggYXF1YW1hcmluZTtcXHJcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIG1hcmdpbi10b3A6IC04MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDEuMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgei1pbmRleDogOTk5OTk5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFzayB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTE4KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDk5OTk5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZC1tb3JlIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gIG1hcmdpbjogMnJlbSAwIDAgMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvL2NvbW1lbnQgcG9wdXAvLyAqL1xcclxcbi5tb3ZpZS1wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI3NXB4O1xcclxcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1wb3B1cCAucG9wdXAtdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXBvcHVwIHRhYmxlIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10aXRsZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogOTBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2UtcG9wdXAge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMzBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5jb20tZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTMwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tLWZvcm0gaW5wdXQsXFxyXFxuLmNvbS1mb3JtIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tLWZvcm0gYnV0dG9uIHtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb20tZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDE1NXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbS1mb3JtIGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xcclxcbn1cXHJcXG5cXHJcXG50ZCB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2Vz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Q1YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tbWFpbi1mb250OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTksIDIxOSk7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstbGlzdHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogODBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saW5rLWxpc3RzID4gbGkgYSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHJnYig1MywgNTMsIDUzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGluay1sb2dvIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgbWFyZ2luLXRvcDogNmVtO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgcGFkZGluZzogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNnJlbSAwO1xcclxcbiAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW06aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDIxMHB4O1xcclxcbiAgaGVpZ2h0OiAyOTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS10aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0bixcXHJcXG4ucmVzZXJ2ZS1idG4ge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAwLjRlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogcmdiKDUsIDUsIDUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWFuZC1saWtlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnAtbGlrZSB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5oZWFydCB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgYmFja2dyb3VuZDpcXHJcXG4gICAgdXJsKFxcXCJodHRwczovL2Nzc2FuaW1hdGlvbi5yb2Nrcy9pbWFnZXMvcG9zdHMvc3RlcHMvaGVhcnQucG5nXFxcIilcXHJcXG4gICAgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAxcyBzdGVwcygyOCk7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQuaXMtYWN0aXZlIHtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI4MDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZyB7XFxyXFxuICB3aWR0aDogMTYwcHg7XFxyXFxuICBoZWlnaHQ6IDE2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxyXFxuICBib3JkZXI6IDE1cHggYXF1YW1hcmluZTtcXHJcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIG1hcmdpbi10b3A6IC04MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDEuMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgei1pbmRleDogOTk5OTk5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFzayB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTE4KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDk5OTk5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZC1tb3JlIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gIG1hcmdpbjogMnJlbSAwIDAgMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvL2NvbW1lbnQgcG9wdXAvLyAqL1xcclxcbi5tb3ZpZS1wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI3NXB4O1xcclxcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1wb3B1cCAucG9wdXAtdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXBvcHVwIHRhYmxlIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10aXRsZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogOTBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2UtcG9wdXAge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMzBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5jb20tZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTMwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tLWZvcm0gaW5wdXQsXFxyXFxuLmNvbS1mb3JtIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tLWZvcm0gYnV0dG9uIHtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb20tZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDE1NXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbS1mb3JtIGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xcclxcbn1cXHJcXG5cXHJcXG50ZCB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB1cmwxID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xyXG5jb25zdCB1cmwyID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1ZXSWw0SUtrM3kzeDFuZWF2MmJVL2xpa2VzJztcclxuXHJcbmNvbnN0IGZldGNoRGF0YSA9ICh1cmwsIENvc3R1bVNldHRpbmdzID0ge30pID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGZldGNoKHVybCwgQ29zdHVtU2V0dGluZ3MpXHJcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn07XHJcblxyXG5jb25zdCBnZXREYXRhID0gKCkgPT4gZmV0Y2hEYXRhKHVybDEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpa2VDb3VudCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9WV0lsNElLazN5M3gxbmVhdjJiVS9saWtlcycpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkTGlrZXMgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkIH0pLFxyXG4gIH07XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hEYXRhKHVybDIsIHNldHRpbmdzKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGVycik7XHJcbiAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7IiwiY29uc3QgY29tbWVudHNFbmRwb2ludCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9EV2NEQWgxM1c4bWhNZnVkV2d3Sy9jb21tZW50cyc7XHJcbmNvbnN0IGZldGNoTW92aWVDb21tZW50cyA9IGFzeW5jIChtb3ZpZUlkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb21tZW50c0VuZHBvaW50fT9pdGVtX2lkPSR7bW92aWVJZH1gKS5jYXRjaCgoZXJyKSA9PiBlcnIpO1xyXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiB0byBmZXRjaCB0b3RhbCBudW1iZXIgb2YgYXZhaWxhYmxlIGNvbW1lbnRzIGZvciBhIG1vdmllIHdpaCBhIHNwZWNpZmljIElEXHJcbmNvbnN0IGdldFRvdGFsQ29tbWVudHMgPSBhc3luYyAobW92aWVJZCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoTW92aWVDb21tZW50cyhtb3ZpZUlkKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+ICghZGF0YS5lcnJvciA/IGRhdGEubGVuZ3RoIDogMCkpXHJcbiAgICAuY2F0Y2goKCkgPT4gMCk7XHJcbiAgcmV0dXJuIHJlcztcclxufTtcclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtcG9wdXAnKTtcclxuXHJcbi8vIFVwZGF0ZSBVSSB0b3RhbCBudW1iZXIgb2YgY29tbWVudHNcclxuY29uc3QgdXBkYXRlVG90YWxDb21tZW50c0NvdW50ID0gKG1vdmllSWQpID0+IHtcclxuICBnZXRUb3RhbENvbW1lbnRzKG1vdmllSWQpLnRoZW4oKHRvdGFsKSA9PiB7XHJcbiAgICBwb3B1cC5xdWVyeVNlbGVjdG9yKCcudG90YWwtY29tbWVudHMnKS5pbm5lckhUTUwgPSB0b3RhbDtcclxuICB9KTtcclxufTtcclxuY29uc3QgY29tbWVudENvdW50ZXIgPSAoZGF0YSkgPT4gKHR5cGVvZiAoZGF0YSkgPT09ICdvYmplY3QnID8gZGF0YS5sZW5ndGggOiAnaW52YWxpZCcpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuY29tbWVudC1idG4nKSkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoTW92aWVDb21tZW50cyhlLnRhcmdldC5pZCk7XHJcbiAgICBjb25zdCBjb21tZW50TnVtYmVyID0gY29tbWVudENvdW50ZXIoZGF0YSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtY29tbWVudHMnKS50ZXh0Q29udGVudCA9IGNvbW1lbnROdW1iZXIgfHwgMDtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlVG90YWxDb21tZW50c0NvdW50O1xyXG5leHBvcnQgeyBmZXRjaE1vdmllQ29tbWVudHMsIGNvbW1lbnRDb3VudGVyIH07XHJcbiIsImltcG9ydCB1cGRhdGVUb3RhbENvbW1lbnRzQ291bnQsIHsgZmV0Y2hNb3ZpZUNvbW1lbnRzIH0gZnJvbSAnLi9jb21tZW50Q291bnRlci5qcyc7XHJcblxyXG5jb25zdCB1cmwxID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xyXG5jb25zdCBjb21tZW50c0VuZHBvaW50ID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0RXY0RBaDEzVzhtaE1mdWRXZ3dLL2NvbW1lbnRzJztcclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtcG9wdXAnKTtcclxuXHJcbmNvbnN0IGdldCA9ICh1cmwpID0+IGZldGNoKHVybClcclxuICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gIC50aGVuKChkYXRhKSA9PiBkYXRhKVxyXG4gIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yKTtcclxuXHJcbmNvbnN0IHBvc3QgPSAodXJsLCBwYXJhbXMgPSB7fSkgPT4gZmV0Y2godXJsLCB7XHJcbiAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICB9LFxyXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyksXHJcbn0pLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcclxuICAudGhlbigoZGF0YSkgPT4gKGRhdGEuZXJyb3JcclxuICAgID8geyBlcnJvcjogdHJ1ZSwgaW5mbzogZGF0YSB9XHJcbiAgICA6IHsgZXJyb3I6IGZhbHNlLCBpbmZvOiBkYXRhIH0pKVxyXG4gIC5jYXRjaCgoZXJyb3IpID0+ICh7IGVycm9yOiB0cnVlLCBpbmZvOiBlcnJvciB9KSk7XHJcblxyXG5jb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcG9zdChjb21tZW50c0VuZHBvaW50LCBwYXJhbXMpO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuY29uc3QgZmV0Y2hNb3ZpZURhdGEgPSBhc3luYyAobW92aWVJZCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0KGAke3VybDF9LyR7bW92aWVJZH1gKTtcclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5TW92aWVDb21tZW50cyA9IChkYXRhKSA9PiB7XHJcbiAgcG9wdXAucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJykuaW5uZXJIVE1MID0gZGF0YTtcclxufTtcclxuY29uc3QgZW5hYmxlQ2xvc2VQb3B1cCA9ICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtcG9wdXAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBwb3B1cC5pbm5lckhUTUwgPSAnJztcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNob3dDb21tZW50cyA9IChtb3ZpZUlkKSA9PiB7XHJcbiAgZmV0Y2hNb3ZpZUNvbW1lbnRzKG1vdmllSWQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGlmICghZGF0YS5lcnJvcikge1xyXG4gICAgICBsZXQgY29tbWVudHMgPSAnJztcclxuICAgICAgZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgY29tbWVudHMgKz0gYDxsaT4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50LnVzZXJuYW1lfTogJHtjb21tZW50LmNvbW1lbnR9PC9saT5gO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGxheU1vdmllQ29tbWVudHMoY29tbWVudHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGxheU1vdmllQ29tbWVudHMoJ05vIGNvbW1lbnRzIGhhdmUgYmVlbiBwb3N0ZWQgeWV0LiBCZSB0aGUgZmlyc3QgdG8gd3JpdGUgc29tZXRoaW5nLi4uJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlNb3ZpZVBvcHVwID0gKG1vdmllSWQpID0+IHtcclxuICBwb3B1cC5pbm5lckhUTUwgPSBgTG9hZGluZy4uLjxicj5cclxuICA8c3BhbiBpZD1cImNsb3NlLXBvcHVwXCI+WDwvc3Bhbj5gO1xyXG5cclxuICBmZXRjaE1vdmllRGF0YShtb3ZpZUlkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBwb3B1cC5pbm5lckhUTUwgPSBgXHJcbiAgICA8c3BhbiBpZD1cImNsb3NlLXBvcHVwXCI+WDwvc3Bhbj5cclxuICAgIDxpbWcgc3JjPVwiJHtkYXRhLmltYWdlLm1lZGl1bX1cIiBjbGFzcz1cInBvcHVwLWltZ1wiPlxyXG4gICAgPGgzIGNsYXNzPVwicG9wdXAtdGl0bGVcIj4ke2RhdGEubmFtZX08L2gzPlxyXG4gICAgPHRhYmxlPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPGI+cHJlbWllcmVkOjwvYj4gJHtkYXRhLnByZW1pZXJlZH1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxiPkVuZGVkOjwvYj4gJHtkYXRhLmVuZGVkfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8Yj5MYW5ndWFnZTo8L2I+ICR7ZGF0YS5sYW5ndWFnZX1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxiPlR5cGU6PC9iPiAke2RhdGEudHlwZX1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90YWJsZT5cclxuICAgIDxoMyBjbGFzcz1cImNvbW1lbnQtdGl0bGVcIj5cclxuICAgIENvbW1lbnRzKDxzcGFuIGNsYXNzPVwidG90YWwtY29tbWVudHNcIj4wPC9zcGFuPilcclxuICAgIDwvaDM+XHJcbiAgICA8dWwgY2xhc3M9XCJjb21tZW50c1wiPlxyXG4gICAgICBmZXRjaGluZyBjb21tZW50cy4uLlxyXG4gICAgPC91bD5cclxuICAgIDxmb3JtIGNsYXNzPVwiY29tLWZvcm1cIj5cclxuICAgICAgPGgyPkFkZCBhIGNvbW1lbnQ8L2gyPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHJlcXVpcmVkPlxyXG4gICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCIgbmFtZT1cImNvbW1lbnRcIiByZXF1aXJlZCBtaW5sZW5ndGg9XCIxXCI+PC90ZXh0YXJlYT5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBgO1xyXG5cclxuICAgIGVuYWJsZUNsb3NlUG9wdXAoKTtcclxuICAgIHNob3dDb21tZW50cyhtb3ZpZUlkKTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gcG9wdXAucXVlcnlTZWxlY3RvcignLmNvbS1mb3JtJyk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgdXNlciA9IGZvcm0uZWxlbWVudHMudXNlcm5hbWUudmFsdWU7XHJcbiAgICAgIGNvbnN0IG1zZyA9IGZvcm0uZWxlbWVudHMuY29tbWVudC52YWx1ZTtcclxuICAgICAgYWRkQ29tbWVudCh7XHJcbiAgICAgICAgaXRlbV9pZDogbW92aWVJZCxcclxuICAgICAgICB1c2VybmFtZTogdXNlcixcclxuICAgICAgICBjb21tZW50OiBtc2csXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHNob3dDb21tZW50cyhtb3ZpZUlkKTtcclxuICAgICAgICB1cGRhdGVUb3RhbENvbW1lbnRzQ291bnQobW92aWVJZCk7XHJcbiAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBlbmFibGVDbG9zZVBvcHVwKCk7XHJcbn07XHJcbmNvbnN0IGVuYWJsZUNvbW1lbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbW1lbnRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtYnRuJyk7XHJcbiAgY29tbWVudEJ0bnMuZm9yRWFjaCgobW92aWUpID0+IHtcclxuICAgIG1vdmllLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBtb3ZpZUlkID0gbW92aWUuZ2V0QXR0cmlidXRlKCdtb3ZpZV9pZCcpO1xyXG4gICAgICBkaXNwbGF5TW92aWVQb3B1cChtb3ZpZUlkKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW5hYmxlQ29tbWVudHM7XHJcbiIsImNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1jYXJkcy1jb250YWluZXInKTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNhcmRJdGVtID0gKGl0ZW0sIGl0ZW1MaWtlID0gMCkgPT4ge1xyXG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gIGNvbnN0IGNhcmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgY29uc3QgY29tbWVudEFuZExpa2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgcmVzZXJ2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnN0IHBMaWtlc1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBsaWtlSGVhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBtb3ZpZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuXHJcbiAgY2FyZENvbnRhaW5lci5hcHBlbmQoY2FyZEVsZW1lbnQpO1xyXG4gIGNhcmRFbGVtZW50LmFwcGVuZChjYXJkSW1hZ2UsIGNhcmRUaXRsZSwgY29tbWVudEFuZExpa2VEaXYpO1xyXG4gIGNhcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcclxuICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xyXG4gIG1vdmllVGl0bGUuY2xhc3NMaXN0LmFkZCgnbW92aWUtdGl0bGUnKTtcclxuICBsaWtlSGVhcnQuY2xhc3NMaXN0LmFkZCgnaGVhcnQnKTtcclxuICBsaWtlSGVhcnQuaWQgPSBpdGVtLmlkO1xyXG4gIGNvbW1lbnRBbmRMaWtlRGl2LmFwcGVuZChtb3ZpZVRpdGxlLCBsaWtlSGVhcnQsIHBMaWtlc1RhZywgY29tbWVudEJ0bik7XHJcbiAgcExpa2VzVGFnLmNsYXNzTGlzdC5hZGQoJ3AtbGlrZScpO1xyXG4gIGNvbW1lbnRBbmRMaWtlRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtYW5kLWxpa2UnKTtcclxuICBjb21tZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtYnRuJyk7XHJcbiAgLy8gcmVzZXJ2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWJ0bicpO1xyXG4gIHJlc2VydmVCdG4uY2xhc3NMaXN0LmFkZCgncmVzZXJ2ZS1idG4nKTtcclxuICBjb21tZW50QnRuLnNldEF0dHJpYnV0ZSgnbW92aWVfaWQnLCBpdGVtLmlkKTtcclxuICByZXNlcnZlQnRuLnNldEF0dHJpYnV0ZSgnbW92aWVfaWQnLCBpdGVtLmlkKTtcclxuICBjb21tZW50QnRuLmlkID0gaXRlbS5pZDtcclxuICByZXNlcnZlQnRuLmlkID0gaXRlbS5pZDtcclxuICBjb21tZW50QnRuLnRleHRDb250ZW50ID0gJ0NvbW1lbnQnO1xyXG4gIHJlc2VydmVCdG4udGV4dENvbnRlbnQgPSAnUmVzZXJ2ZSc7XHJcbiAgbW92aWVUaXRsZS50ZXh0Q29udGVudCA9ICdNb3ZpZSBUaXRsZSc7XHJcblxyXG4gIHBMaWtlc1RhZy50ZXh0Q29udGVudCA9IGAke2l0ZW1MaWtlfSBsaWtlc2A7XHJcbiAgY2FyZEltYWdlLnNyYyA9IGl0ZW0uaW1hZ2UubWVkaXVtO1xyXG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmRJdGVtOyIsImNvbnN0IHVybDEgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XHJcblxyXG5jb25zdCBnZXRNb3ZpZVRpdGxlID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IG1vdmllVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW92aWUtdGl0bGUnKTtcclxuICBjb25zdCB0aXRsZUFycmF5ID0gW107XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwxKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGRhdGEuZm9yRWFjaCgodGl0bGUpID0+IHtcclxuICAgIHRpdGxlQXJyYXkucHVzaCh0aXRsZS5uYW1lKTtcclxuICAgIG1vdmllVGl0bGUuZm9yRWFjaCgobW92aWUsIGluZGV4KSA9PiB7XHJcbiAgICAgIG1vdmllLmlubmVySFRNTCA9IHRpdGxlQXJyYXlbaW5kZXhdO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGdldE1vdmllVGl0bGU7IiwiZXhwb3J0IGNvbnN0IGl0ZW1zQ291bnRlciA9IChkYXRhKSA9PiAodHlwZW9mIChkYXRhKSA9PT0gJ29iamVjdCcgPyBkYXRhLmxlbmd0aCA6ICdpbnZhbGlkJyk7XHJcblxyXG5jb25zdCBkaXNwbGF5VHZTaG93bnVtYmVycyA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgVHZTaG93TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50di1zaG93LWxpbmsnKTtcclxuICBjb25zdCBjb3VudGVyID0gaXRlbXNDb3VudGVyKGRhdGEpO1xyXG4gIFR2U2hvd0xpbmsudGV4dENvbnRlbnQgPSBgVHZTaG93cygke2NvdW50ZXJ9KWA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5VHZTaG93bnVtYmVyczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGdldERhdGEsIHsgYWRkTGlrZXMsIGxpa2VDb3VudCB9IGZyb20gJy4vbW9kdWxlcy9hcGkuanMnO1xyXG5pbXBvcnQgY3JlYXRlQ2FyZEl0ZW0gZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZUNhcmRJdGVtLmpzJztcclxuaW1wb3J0IGRpc3BsYXlUdlNob3dudW1iZXJzIGZyb20gJy4vbW9kdWxlcy9pdGVtc0NvdW50ZXIuanMnO1xyXG5pbXBvcnQgZ2V0TW92aWVUaXRsZSBmcm9tICcuL21vZHVsZXMvZ2V0TW92aWVUaXRsZS5qcyc7XHJcbmltcG9ydCBlbmFibGVDb21tZW50cyBmcm9tICcuL21vZHVsZXMvY29tbWVudFBvcC5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5oZWFydCcpKSB7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcclxuICAgIGNvbnN0IGlkID0gTnVtYmVyKGUudGFyZ2V0LmlkKTtcclxuICAgIGNvbnN0IGxpa2UgPSBOdW1iZXIoZS50YXJnZXQubmV4dFNpYmxpbmcudGV4dENvbnRlbnQubWF0Y2goL1swLTldL2cpLmpvaW4oJycpKTtcclxuICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gYCR7bGlrZSArIDF9IGxpa2VzYDtcclxuICAgIGF3YWl0IGFkZExpa2VzKGlkKTtcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgbG9hZGluZyA9ICgpID0+IHtcclxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWNhcmRzLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGxvYWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbG9hZERpdi5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XHJcbiAgbWFzay5jbGFzc0xpc3QuYWRkKCdtYXNrJyk7XHJcbiAgY2FyZHNDb250YWluZXIuYXBwZW5kKG1hc2ssIGxvYWREaXYpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlTG9kaW5nID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykucmVtb3ZlKCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc2snKS5yZW1vdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckl0ZW1zID0gYXN5bmMgKHNob3dDb3VudCA9IDE2KSA9PiB7XHJcbiAgbG9hZGluZygpO1xyXG4gIGNvbnN0IGl0ZW1zRGF0YSA9IGF3YWl0IGdldERhdGEoKTtcclxuICBjb25zdCBzaG93TGVzcyA9IGl0ZW1zRGF0YS5zbGljZSgwLCBzaG93Q291bnQpO1xyXG4gIGRpc3BsYXlUdlNob3dudW1iZXJzKHNob3dMZXNzKTtcclxuICByZW1vdmVMb2RpbmcoKTtcclxuICBjb25zdCBsaWtlcyA9IGF3YWl0IGxpa2VDb3VudCgpO1xyXG4gIHNob3dMZXNzLmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcclxuICAgIGxldCBudW1MaWtlcyA9IDA7XHJcbiAgICBudW1MaWtlcyA9IGxpa2VzLmZpbHRlcigobGlrZSkgPT4gbGlrZS5pdGVtX2lkID09PSBzaG93TGVzc1tpXS5pZCk7XHJcbiAgICBpZiAobnVtTGlrZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjcmVhdGVDYXJkSXRlbShzaG93TGVzc1tpXSwgbnVtTGlrZXNbMF0ubGlrZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3JlYXRlQ2FyZEl0ZW0oc2hvd0xlc3NbaV0sIDApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxucmVuZGVySXRlbXMoKS50aGVuKCgpID0+IHtcclxuICBnZXRNb3ZpZVRpdGxlKCk7XHJcbiAgZW5hYmxlQ29tbWVudHMoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==