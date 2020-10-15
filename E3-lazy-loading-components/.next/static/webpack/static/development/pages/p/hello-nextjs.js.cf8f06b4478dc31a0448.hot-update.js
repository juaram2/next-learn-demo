webpackHotUpdate("static/development/pages/p/hello-nextjs.js",{

/***/ "./lib/with-post.js":
/*!**************************!*\
  !*** ./lib/with-post.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithPost; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/aram/Desktop/next-learn-demo/E3-lazy-loading-components/lib/with-post.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




marked__WEBPACK_IMPORTED_MODULE_7___default.a.setOptions({
  gfm: true,
  tables: true,
  breaks: true
});
function WithPost(options) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PostPage, _React$Component);

      function PostPage() {
        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostPage);

        return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostPage).apply(this, arguments));
      }

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostPage, [{
        key: "renderMarkdown",
        value: function renderMarkdown() {
          // If a code snippet contains in the markdown content
          // then use Highlight component
          if (/~~~/.test(options.content)) {
            return __jsx("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            }, __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_8___default.a, {
              innerHTML: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            }, marked__WEBPACK_IMPORTED_MODULE_7___default()(options.content)));
          } // If not, simply render the generated HTML from markdown


          return __jsx("div", {
            dangerouslySetInnerHTML: {
              __html: marked__WEBPACK_IMPORTED_MODULE_7___default()(options.content)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          });
        }
      }, {
        key: "render",
        value: function render() {
          return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, __jsx("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, options.title), this.renderMarkdown());
        }
      }]);

      return PostPage;
    }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)
  );
}

/***/ })

})
//# sourceMappingURL=hello-nextjs.js.cf8f06b4478dc31a0448.hot-update.js.map