webpackHotUpdate_N_E("pages/index",{

/***/ "./components/UserForm.js":
/*!********************************!*\
  !*** ./components/UserForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserForm; });
/* harmony import */ var C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/UserForm.module.scss */ "./styles/UserForm.module.scss");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/validate */ "./utils/validate.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _common_CustomButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/CustomButton */ "./components/common/CustomButton.js");





var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\UserForm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









var fields = [{
  id: 0,
  name: "userName",
  label: "Фамилия и имя",
  placeholder: "Укажите Вашу вамилию и имя",
  type: "text",
  iconPath: "/badge.png"
}, {
  id: 1,
  name: "email",
  label: "E-mail",
  placeholder: "ivanova@mail.ru",
  type: "email",
  iconPath: "/mail.png"
}, {
  id: 2,
  name: "phoneNumber",
  label: "Номер телефона",
  type: "tel",
  placeholder: "Укажите номер телефона",
  iconPath: "/phone.png"
}];
function UserForm(_ref) {
  _s();

  var _this = this;

  var isFormOpen = _ref.isFormOpen,
      handleDialogOpen = _ref.handleDialogOpen;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLoading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isError = _useState2[0],
      setError = _useState2[1];

  function handleFormSubmit(_x) {
    return _handleFormSubmit.apply(this, arguments);
  }

  function _handleFormSubmit() {
    _handleFormSubmit = Object(C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
      var _response;

      return C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("http://localhost:3005/api", JSON.stringify(values));

            case 3:
              _response = _context.sent;
              setLoading(true);
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.response);
              setLoading(false);

            case 11:
              setLoading(false);
              handleDialogOpen();
              console.log(response);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return _handleFormSubmit.apply(this, arguments);
  }

  var renderUserForm = function renderUserForm(fields) {
    return fields.map(function (field) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
        key: field.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 7
        }
      }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        name: field.name,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.TextField,
        render: function render(_ref2) {
          var input = _ref2.input,
              meta = _ref2.meta,
              rest = Object(C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, ["input", "meta"]);

          return __jsx("div", {
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.FieldItem,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }
          }, __jsx("label", {
            htmlFor: field.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }
          }, __jsx("img", {
            src: field.iconPath,
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.FieldIcon,
            alt: field.label,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }
          })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], Object(C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            id: field.name
          }, input, rest, {
            placeholder: field.placeholder,
            type: field.type,
            error: Object(_utils_validate__WEBPACK_IMPORTED_MODULE_10__["isFieldError"])(meta),
            label: field.label,
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.TextField,
            variant: "outlined",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }
          })), __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_11__["default"], {
            meta: meta,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }
          }));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }), fields.length - 1 !== field.id ? __jsx("div", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.Divider,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }
      }) : null);
    });
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.UserFormMuiPaper,
    style: isFormOpen ? {
      display: "block"
    } : {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: handleFormSubmit,
    validate: _utils_validate__WEBPACK_IMPORTED_MODULE_10__["validateForm"],
    render: function render(_ref3) {
      var handleSubmit = _ref3.handleSubmit,
          values = _ref3.values;
      return __jsx("form", {
        onSubmit: handleSubmit,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.UserForm,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }
      }, __jsx("section", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.MainFormContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
        }
      }, renderUserForm(fields)), __jsx(_common_CustomButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isLoading: isLoading,
        name: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",
        type: "submit",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }));
}

_s(UserForm, "PZuJpiiq6lo7fLijO15XRQGvkno=");

_c = UserForm;

var _c;

$RefreshReg$(_c, "UserForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyJdLCJuYW1lcyI6WyJmaWVsZHMiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsImljb25QYXRoIiwiVXNlckZvcm0iLCJpc0Zvcm1PcGVuIiwiaGFuZGxlRGlhbG9nT3BlbiIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImlzRXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUZvcm1TdWJtaXQiLCJ2YWx1ZXMiLCJheGlvcyIsInBvc3QiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyVXNlckZvcm0iLCJtYXAiLCJmaWVsZCIsIlVzZXJGb3JtU3R5bGVzIiwiVGV4dEZpZWxkIiwiaW5wdXQiLCJtZXRhIiwicmVzdCIsIkZpZWxkSXRlbSIsIkZpZWxkSWNvbiIsImlzRmllbGRFcnJvciIsImxlbmd0aCIsIkRpdmlkZXIiLCJVc2VyRm9ybU11aVBhcGVyIiwiZGlzcGxheSIsInZhbGlkYXRlRm9ybSIsImhhbmRsZVN1Ym1pdCIsIk1haW5Gb3JtQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLENBQ2I7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFLFVBRlI7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsYUFBVyxFQUFFLDRCQUpmO0FBS0VDLE1BQUksRUFBRSxNQUxSO0FBTUVDLFVBQVEsRUFBRTtBQU5aLENBRGEsRUFTYjtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsT0FGUjtBQUdFQyxPQUFLLEVBQUUsUUFIVDtBQUlFQyxhQUFXLEVBQUUsaUJBSmY7QUFLRUMsTUFBSSxF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LGNBQWMsQ0FBQ3hCLE1BQUQsQ0FEakIsQ0FERixFQUtFLE1BQUMsNkRBQUQ7QUFDRSxpQkFBUyxFQUFFVyxTQURiO0FBRUUsWUFBSSxFQUFDLCtHQUZQO0FBR0UsWUFBSSxFQUFDLFFBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxGLENBRE07QUFBQSxLQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGO0FBd0JEOztHQWpGdUJKLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWZkYjViYTEwNDU1YTViZTI2YTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gXCJyZWFjdC1maW5hbC1mb3JtXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5cclxuaW1wb3J0IFVzZXJGb3JtU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvVXNlckZvcm0ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdmFsaWRhdGVGb3JtLCBpc0ZpZWxkRXJyb3IgfSBmcm9tIFwiLi4vdXRpbHMvdmFsaWRhdGVcIjtcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcclxuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tIFwiLi9jb21tb24vQ3VzdG9tQnV0dG9uXCI7XHJcblxyXG5jb25zdCBmaWVsZHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBuYW1lOiBcInVzZXJOYW1lXCIsXHJcbiAgICBsYWJlbDogXCLQpNCw0LzQuNC70LjRjyDQuCDQuNC80Y9cIixcclxuICAgIHBsYWNlaG9sZGVyOiBcItCj0LrQsNC20LjRgtC1INCS0LDRiNGDINCy0LDQvNC40LvQuNGOINC4INC40LzRj1wiLFxyXG4gICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICBpY29uUGF0aDogXCIvYmFkZ2UucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIG5hbWU6IFwiZW1haWxcIixcclxuICAgIGxhYmVsOiBcIkUtbWFpbFwiLFxyXG4gICAgcGxhY2Vob2xkZXI6IFwiaXZhbm92YUBtYWlsLnJ1XCIsXHJcbiAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICBpY29uUGF0aDogXCIvbWFpbC5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogXCJwaG9uZU51bWJlclwiLFxyXG4gICAgbGFiZWw6IFwi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIsXHJcbiAgICB0eXBlOiBcInRlbFwiLFxyXG4gICAgcGxhY2Vob2xkZXI6IFwi0KPQutCw0LbQuNGC0LUg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIsXHJcbiAgICBpY29uUGF0aDogXCIvcGhvbmUucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJGb3JtKHsgaXNGb3JtT3BlbiwgaGFuZGxlRGlhbG9nT3BlbiB9KSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdCh2YWx1ZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9hcGlcIixcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXHJcbiAgICAgICk7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBoYW5kbGVEaWFsb2dPcGVuKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyVXNlckZvcm0gPSAoZmllbGRzKSA9PlxyXG4gICAgZmllbGRzLm1hcCgoZmllbGQpID0+IChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17ZmllbGQuaWR9PlxyXG4gICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgbmFtZT17ZmllbGQubmFtZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVGV4dEZpZWxkfVxyXG4gICAgICAgICAgcmVuZGVyPXsoeyBpbnB1dCwgbWV0YSwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5GaWVsZEl0ZW19PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtmaWVsZC5pZH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZmllbGQuaWNvblBhdGh9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRmllbGRJY29ufVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2ZpZWxkLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgey4uLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmllbGQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtmaWVsZC50eXBlfVxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e2lzRmllbGRFcnJvcihtZXRhKX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbWV0YT17bWV0YX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2ZpZWxkcy5sZW5ndGggLSAxICE9PSBmaWVsZC5pZCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5EaXZpZGVyfSAvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXJcclxuICAgICAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5Vc2VyRm9ybU11aVBhcGVyfVxyXG4gICAgICBzdHlsZT17aXNGb3JtT3BlbiA/IHsgZGlzcGxheTogXCJibG9ja1wiIH0gOiB7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICA+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlRm9ybX1cclxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVXNlckZvcm19PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLk1haW5Gb3JtQ29udGVudH0+XHJcbiAgICAgICAgICAgICAge3JlbmRlclVzZXJGb3JtKGZpZWxkcyl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxDdXN0b21CdXR0b25cclxuICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuICAgICAgICAgICAgICBuYW1lPVwi0KHQvtGF0YDQsNC90LjRgtGMINC40LfQvNC10L3QtdC90LjRj1wiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9