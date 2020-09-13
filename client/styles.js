(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\aichq-client\src\styles.sass */"F4Rk");


/***/ }),

/***/ "F4Rk":
/*!*************************!*\
  !*** ./src/styles.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.sass */ "w3Cn");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "w3Cn":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.sass ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html body {\n  font-family: \"Mukta\", sans-serif;\n  background-color: #08323F;\n  overflow-x: hidden;\n  position: relative;\n  min-height: 100%;\n}\n.section-student-reg {\n  background: #072129;\n}\n.section-form-card {\n  background: #cdcdcd;\n  color: #000000;\n  margin: 0px 300px;\n  padding: 30px 50px 10px 50px;\n}\n.form-control {\n  font-weight: 400;\n  border: 2px solid #000000;\n  border-radius: 5px;\n  background-color: #ffffff;\n  padding: 5px 10px;\n  font-size: 17px;\n}\n.form-control:focus {\n  box-shadow: none;\n  border-color: #000000;\n}\n.text-accent {\n  color: #E96F44;\n}\n.border {\n  border: 1px solid #ffffff;\n}\n.link {\n  color: #000000;\n  font-weight: 600;\n}\n.link:hover {\n  color: #000000;\n  transition: 0.3s ease;\n  opacity: 0.3;\n  text-decoration: none;\n}\n.active {\n  opacity: 0.3;\n}\n.list-group-custom {\n  padding: 65px 100px 50px 100px;\n}\n.list-item {\n  font-size: 18px;\n  position: relative;\n  left: 0;\n  transition: ease-in-out 0.2s;\n  list-style-type: none;\n  background-color: #cdcdcd;\n  padding: 20px;\n  border: 3px solid #000000;\n  font-weight: 600;\n  cursor: pointer;\n  border-radius: 10px;\n}\n.list-item:hover {\n  left: 15px;\n}\n.btn {\n  background-color: #FBB256;\n  color: #000000;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n  border: 3px solid #000000;\n  padding: 10px 30px;\n  font-size: 20px;\n  transition: 0.3s ease-in-out;\n  border-radius: 10px;\n}\n.btn:focus {\n  box-shadow: none;\n}\n.btn:hover {\n  background-color: #b46604;\n}\n.btn-secondary {\n  background-color: #f38075;\n  border: none;\n  color: #000000;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n  padding: 7px 22px;\n  font-size: 18px;\n  transition: 0.3s ease-in-out;\n  border-radius: 5px;\n}\n.btn-secondary-signup {\n  background-color: #FBB256;\n  color: #000000;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n  border: 3px solid #000000;\n  padding: 7px 22px;\n  font-size: 18px;\n  transition: 0.3s ease-in-out;\n  border-radius: 10px;\n}\n.btn-secondary-signup:focus {\n  box-shadow: none;\n}\n.btn-secondary-signup:hover {\n  background-color: #b46604;\n}\n.btn-secondary:focus {\n  box-shadow: none;\n}\n.btn-secondary:hover {\n  background-color: #be2011;\n}\n.pointer {\n  cursor: pointer;\n}\n.no-underline, .no-underline:hover {\n  text-decoration: none;\n  color: #000000;\n}\n.footer {\n  background-color: #072129;\n  padding: 30px;\n}", "",{"version":3,"sources":["webpack://src/app/app.component.sass","webpack://src/app/stylings/variables.sass","webpack://src/styles.sass"],"names":[],"mappings":"AAGI;EACI,gCAAA;EACA,yBCLW;EDMX,kBAAA;EACA,kBAAA;EACA,gBAAA;AEDR;AFII;EACI,mBCXa;ACUrB;AFEI;EACI,mBCZW;EDaX,cAAA;EACA,iBAAA;EACA,4BAAA;AEAR;AFEA;EACI,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,yBAAA;EACA,iBAAA;EACA,eAAA;AECJ;AFAI;EACI,gBAAA;EACA,qBAAA;AEER;AFAA;EACI,cC5BmB;AC+BvB;AFDA;EACI,yBAAA;AEIJ;AFFA;EACI,cAAA;EACA,gBAAA;AEKJ;AFJI;EACI,cAAA;EACA,qBAAA;EACA,YAAA;EACA,qBAAA;AEMR;AFJA;EACI,YAAA;AEOJ;AFLA;EACI,8BAAA;AEQJ;AFNA;EACI,eAAA;EACA,kBAAA;EACA,OAAA;EACA,4BAAA;EACA,qBAAA;EACA,yBCvDe;EDwDf,aAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;AESJ;AFRI;EACI,UAAA;AEUR;AFRA;EACI,yBC/DgB;EDgEhB,cAAA;EACA,gBAAA;EACA,qBAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,4BAAA;EACA,mBAAA;AEWJ;AFVI;EACI,gBAAA;AEYR;AFXI;EACI,yBAAA;AEaR;AFXA;EACI,yBC7EkB;ED8ElB,YAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;EACA,iBAAA;EACA,eAAA;EACA,4BAAA;EACA,kBAAA;AEcJ;AFbI;EACI,yBCxFY;EDyFZ,cAAA;EACA,gBAAA;EACA,qBAAA;EACA,yBAAA;EACA,iBAAA;EACA,eAAA;EACA,4BAAA;EACA,mBAAA;AEeR;AFdQ;EACI,gBAAA;AEgBZ;AFfQ;EACI,yBAAA;AEiBZ;AFhBI;EACI,gBAAA;AEkBR;AFjBI;EACI,yBAAA;AEmBR;AFjBA;EACI,eAAA;AEoBJ;AFlBA;EACI,qBAAA;EACA,cAAA;AEqBJ;AFnBA;EACI,yBAAA;EACA,aAAA;AEsBJ","sourcesContent":["@import 'stylings/variables'\r\n\r\nhtml\r\n    body\r\n        font-family: 'Mukta', sans-serif\r\n        background-color: $bg-color-primary\r\n        overflow-x: hidden\r\n        position: relative\r\n        min-height: 100%\r\n\r\n.section\r\n    &-student-reg\r\n        background: $bg-color-secondary\r\n    &-form-card\r\n        background: $fg-color-primary\r\n        color: #000000\r\n        margin: 0px 300px\r\n        padding: 30px 50px 10px 50px\r\n\r\n.form-control\r\n    font-weight: 400\r\n    border: 2px solid #000000\r\n    border-radius: 5px\r\n    background-color: #ffffff\r\n    padding: 5px 10px\r\n    font-size: 17px\r\n    &:focus\r\n        box-shadow: none\r\n        border-color: #000000\r\n\r\n.text-accent\r\n    color: $accent-color-primary\r\n\r\n.border\r\n    border: 1px solid #ffffff\r\n\r\n.link\r\n    color: #000000\r\n    font-weight: 600\r\n    &:hover\r\n        color: #000000\r\n        transition: 0.3s ease\r\n        opacity: 0.3\r\n        text-decoration: none\r\n\r\n.active\r\n    opacity: 0.3\r\n\r\n.list-group-custom\r\n    padding: 65px 100px 50px 100px\r\n\r\n.list-item\r\n    font-size: 18px\r\n    position: relative\r\n    left: 0\r\n    transition: ease-in-out 0.2s\r\n    list-style-type: none\r\n    background-color: $fg-color-primary\r\n    padding: 20px\r\n    border: 3px solid #000000 \r\n    font-weight: 600\r\n    cursor: pointer\r\n    border-radius: 10px\r\n    &:hover\r\n        left: 15px\r\n\r\n.btn\r\n    background-color: $btn-color-primary\r\n    color: #000000\r\n    font-weight: 600\r\n    letter-spacing: 1.5px\r\n    border: 3px solid #000000\r\n    padding: 10px 30px\r\n    font-size: 20px\r\n    transition: 0.3s ease-in-out\r\n    border-radius: 10px\r\n    &:focus\r\n        box-shadow: none\r\n    &:hover\r\n        background-color: darken($btn-color-primary, 30%)\r\n\r\n.btn-secondary\r\n    background-color: $btn-color-secondary\r\n    border: none\r\n    color: #000000\r\n    font-weight: 600\r\n    letter-spacing: 1.5px\r\n    padding: 7px 22px\r\n    font-size: 18px\r\n    transition: 0.3s ease-in-out\r\n    border-radius: 5px\r\n    &-signup\r\n        background-color: $btn-color-primary\r\n        color: #000000\r\n        font-weight: 600\r\n        letter-spacing: 1.5px\r\n        border: 3px solid #000000\r\n        padding: 7px 22px\r\n        font-size: 18px\r\n        transition: 0.3s ease-in-out\r\n        border-radius: 10px\r\n        &:focus\r\n            box-shadow: none\r\n        &:hover\r\n            background-color: darken($btn-color-primary, 30%)\r\n    &:focus\r\n        box-shadow: none\r\n    &:hover\r\n        background-color: darken($btn-color-secondary, 30%)\r\n\r\n.pointer\r\n    cursor: pointer\r\n\r\n.no-underline, .no-underline:hover\r\n    text-decoration: none\r\n    color: #000000\r\n\r\n.footer\r\n    background-color: #072129\r\n    padding: 30px","$bg-color-primary: #08323F\r\n$bg-color-secondary: #072129\r\n$fg-color-primary: #cdcdcd\r\n$accent-color-primary: #E96F44\r\n$btn-color-primary: #FBB256\r\n$btn-color-secondary: #f38075","@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700&display=swap')\r\n@import './app/app.component'"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map