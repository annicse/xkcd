/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xkcd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xkcd */ "./assets/js/xkcd.js");
//document.addEventListener("DOMContentLoaded", function() {})

document.addEventListener("DOMContentLoaded", function () {
  _xkcd__WEBPACK_IMPORTED_MODULE_0__["default"].init();
  _xkcd__WEBPACK_IMPORTED_MODULE_0__["default"].getComicByID(661);
}); //

/***/ }),

/***/ "./assets/js/xkcd.js":
/*!***************************!*\
  !*** ./assets/js/xkcd.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Xkcd = {
  url: 'search.php',
  searchItems: '',
  getComicByID: function getComicByID(id) {
    var formData = new FormData();
    formData.append('getComic', '1');
    if (id) formData.append('comicID', id);
    fetch(Xkcd.url, {
      'method': 'post',
      'body': formData
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      Xkcd.setComicHtml(res);
    })["catch"](function (e) {
      return console.log('Error: ' + e);
    });
  },
  getComicBySearch: function getComicBySearch(searchQuery) {
    var formData = new FormData();
    formData.append('getComic', '1');
    if (searchQuery) formData.append('searchQuery', searchQuery);
    fetch(Xkcd.url, {
      'method': 'post',
      'body': formData
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      Xkcd.setComicHtml(res);
      Xkcd.searchItems = res.other_result_ids;
      var comicIDsArr = res.other_result_ids.split(',');
      console.log(comicIDsArr.length);

      if (comicIDsArr.length > 1) {
        document.getElementById('comic-nav').classList.add('active');
      }
    })["catch"](function (e) {
      return console.log('Error: ' + e);
    });
  },
  putStatus: function putStatus(msg) {
    var statusMsgContainer = document.getElementById('status-msg');
    statusMsgContainer.innerHTML = msg;
  },
  setComicHtml: function setComicHtml(values) {
    var comicOutput = document.getElementById('comic-data');
    comicOutput.querySelector('header h2').innerHTML = values.safe_title;
    comicOutput.querySelector('img').setAttribute('src', values.img);
    comicOutput.querySelector('img').setAttribute('alt', values.safe_title);
    comicOutput.querySelector('#transcript p').innerHTML = values.transcript;
  },
  nextPrev: function nextPrev() {
    var nextPrevButtons = document.querySelectorAll('#comic-nav nav a');
    var nextButton = document.querySelector('#comic-nav nav a.next');
    var prevButton = document.querySelector('#comic-nav nav a.prev');
    nextPrevButtons.forEach(function (elm) {
      elm.addEventListener('click', function (e) {
        e.preventDefault();
        var comicIDsArr = Xkcd.searchItems.split(',');
        var nextPageID = elm.getAttribute('data-nextPageID'),
            buttonType = elm.className,
            nextID;
        nextID = parseInt(nextPageID);
        Xkcd.getComicByID(comicIDsArr[nextID]);

        if (buttonType === 'next') {
          nextButton.setAttribute('data-nextPageID', nextID + 1);
          prevButton.setAttribute('data-nextPageID', nextID - 1);
        } else {
          prevButton.setAttribute('data-nextPageID', nextID - 1);
          nextButton.setAttribute('data-nextPageID', nextID + 1);
        }
      });
    });
  },
  init: function init() {
    var srcBtn = document.getElementById('do-search');
    srcBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var comicName = document.getElementById('comic_name').value;

      if (comicName !== '') {
        Xkcd.getComicBySearch(comicName);
      } else {
        Xkcd.putStatus('Please enter a search topic');
      }
    });
    Xkcd.nextPrev();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Xkcd);

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./assets/js/main.js ./assets/scss/main.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/hasan/LocalSites/xkcd/app/public/assets/js/main.js */"./assets/js/main.js");
module.exports = __webpack_require__(/*! /Users/hasan/LocalSites/xkcd/app/public/assets/scss/main.scss */"./assets/scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map