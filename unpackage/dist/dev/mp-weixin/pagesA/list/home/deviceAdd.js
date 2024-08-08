(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesA/list/home/deviceAdd"],{

/***/ 310:
/*!******************************************************************************************!*\
  !*** D:/project/wumei-smart-app-new/main.js?{"page":"pagesA%2Flist%2Fhome%2FdeviceAdd"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _deviceAdd = _interopRequireDefault(__webpack_require__(/*! ./pagesA/list/home/deviceAdd.vue */ 311));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_deviceAdd.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 311:
/*!*********************************************************************!*\
  !*** D:/project/wumei-smart-app-new/pagesA/list/home/deviceAdd.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviceAdd_vue_vue_type_template_id_0cdbedc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deviceAdd.vue?vue&type=template&id=0cdbedc8& */ 312);
/* harmony import */ var _deviceAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deviceAdd.vue?vue&type=script&lang=js& */ 314);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _deviceAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _deviceAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _deviceAdd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deviceAdd.vue?vue&type=style&index=0&lang=scss& */ 316);
/* harmony import */ var _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _deviceAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deviceAdd_vue_vue_type_template_id_0cdbedc8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deviceAdd_vue_vue_type_template_id_0cdbedc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _deviceAdd_vue_vue_type_template_id_0cdbedc8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesA/list/home/deviceAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 312:
/*!****************************************************************************************************!*\
  !*** D:/project/wumei-smart-app-new/pagesA/list/home/deviceAdd.vue?vue&type=template&id=0cdbedc8& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_template_id_0cdbedc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./deviceAdd.vue?vue&type=template&id=0cdbedc8& */ 313);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_template_id_0cdbedc8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_template_id_0cdbedc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_template_id_0cdbedc8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_template_id_0cdbedc8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 313:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/wumei-smart-app-new/pagesA/list/home/deviceAdd.vue?vue&type=template&id=0cdbedc8& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    "u-Form": function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u--form/u--form */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u--form/u--form")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u--form/u--form.vue */ 477))
    },
    "u-Text": function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u--text/u--text */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u--text/u--text")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u--text/u--text.vue */ 471))
    },
    uFormItem: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-form-item/u-form-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-form-item/u-form-item")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-form-item/u-form-item.vue */ 483))
    },
    uInput: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-input/u-input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-input/u-input")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-input/u-input.vue */ 497))
    },
    uIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 562))
    },
    uCheckboxGroup: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-checkbox-group/u-checkbox-group */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-checkbox-group/u-checkbox-group")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-checkbox-group/u-checkbox-group.vue */ 802))
    },
    uCheckbox: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-checkbox/u-checkbox */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-checkbox/u-checkbox")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-checkbox/u-checkbox.vue */ 810))
    },
    uTextarea: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-textarea/u-textarea */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-textarea/u-textarea")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-textarea/u-textarea.vue */ 706))
    },
    uTabs: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-tabs/u-tabs */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-tabs/u-tabs.vue */ 554))
    },
    uSteps: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-steps/u-steps */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-steps/u-steps")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-steps/u-steps.vue */ 826))
    },
    uStepsItem: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-steps-item/u-steps-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-steps-item/u-steps-item")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-steps-item/u-steps-item.vue */ 834))
    },
    circleProgress: function () {
      return __webpack_require__.e(/*! import() | components/circleProgress/circleProgress */ "components/circleProgress/circleProgress").then(__webpack_require__.bind(null, /*! @/components/circleProgress/circleProgress.vue */ 842))
    },
    uLoadingIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-loading-icon/u-loading-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue */ 571))
    },
    uButton: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 504))
    },
    uniTable: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-table/uni-table */ "uni_modules/uni-table/components/uni-table/uni-table").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-table/uni-table.vue */ 849))
    },
    uniTr: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-tr/uni-tr */ "uni_modules/uni-table/components/uni-tr/uni-tr").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-tr/uni-tr.vue */ 856))
    },
    uniTh: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-th/uni-th */ "uni_modules/uni-table/components/uni-th/uni-th").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-th/uni-th.vue */ 863))
    },
    uniTd: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-td/uni-td */ "uni_modules/uni-table/components/uni-td/uni-td").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-td/uni-td.vue */ 870))
    },
    uLineProgress: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-line-progress/u-line-progress */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-line-progress/u-line-progress")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-line-progress/u-line-progress.vue */ 877))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var a0 = {}
  var g0 = _vm.checkboxConfigs.indexOf("advance")
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.passwordShow = !_vm.passwordShow
    }
    _vm.e1 = function ($event) {
      _vm.passwordShow = !_vm.passwordShow
    }
    _vm.e2 = function ($event) {
      _vm.userIdDisabled = !_vm.userIdDisabled
    }
    _vm.e3 = function ($event) {
      _vm.userIdDisabled = !_vm.userIdDisabled
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        a0: a0,
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 314:
/*!**********************************************************************************************!*\
  !*** D:/project/wumei-smart-app-new/pagesA/list/home/deviceAdd.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./deviceAdd.vue?vue&type=script&lang=js& */ 315);
/* harmony import */ var _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 315:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/wumei-smart-app-new/pagesA/list/home/deviceAdd.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 36));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 38));
var _common = __webpack_require__(/*! @/apis/modules/common */ 170);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      // 是否为微信小程序
      isWeChat: false,
      // 复选框配置remeber、advance
      checkboxConfigs: ['remeber'],
      // 配网模式选项卡索引
      tabIndex: 0,
      // wifi密码可见性
      passwordShow: true,
      // 用户编号是否可编辑
      userIdDisabled: true,
      // wifi信息
      form: {
        type: 0,
        // 类型0=设备配网，1=关联设备
        SSID: '',
        password: '',
        userId: 0,
        deviceNum: '',
        authCode: '',
        extra: ''
      },
      // 计数
      count: {
        // 进度定时器
        timer: {},
        // 显示文本
        text: '未检测到设备',
        // 文字类型
        type: 'warning'
      },
      // 发现设备计时器
      discoverTimer: {},
      // 单设备配网进度
      progress: 0,
      // 单设备配网步骤
      step: 1,
      // wifi列表加载
      loading: false,
      // wifi列表
      wifiList: [
        // {
        // 	SSID: 'wumei-device1',
        // 	secure: false,
        // 	signalStrength: 30,
        // 	checked: false,
        // 	process: 0,
        // 	text: '准备配网',
        // 	type: 'primary'
        // },
        // {
        // 	SSID: 'wumei-device2',
        // 	secure: true,
        // 	signalStrength: 90,
        // 	checked: false,
        // 	process: 0,
        // 	text: '准备配网',
        // 	type: 'primary'
        // }
      ],
      // 选中的wifi列表
      selectedWifiList: [],
      // Wifi表格选中的索引
      // index: [],
      // 多设备配网步骤,0=未开始配网，1=配网中，2=配网结束
      mstep: 0,
      // 更新WIFI按钮
      updateDisable: false,
      rules: {
        SSID: [{
          required: true,
          message: 'WIFI名称不能为空',
          trigger: ['blur', 'change']
        }],
        password: [{
          required: true,
          message: 'WIFI密码不能为空',
          trigger: ['blur', 'change']
        }],
        userId: [{
          required: true,
          message: '用户编号不能为空',
          trigger: ['blur', 'change']
        }]
      }
    };
  },
  created: function created() {
    this.initInWeChat();
    this.tabIndex = 1;
    this.isWeChat = true;

    //获取登录用户信息
    if (this.profile == null) {
      this.getProfile();
    } else {
      this.form.userId = this.profile.userId;
    }
    // 断开Mqtt连接
    this.endMqtt();
    // 获取WIFI信息
    this.getWifi();
    if (this.tabIndex == 0) {
      // 发现设备
      this.discoverDevice();
    }
  },
  onUnload: function onUnload() {
    clearInterval(this.discoverTimer);
    // 页面卸载时连接mqtt
    this.connectMqtt();
  },
  methods: {
    /* 断开Mqtt消息服务器 */endMqtt: function endMqtt() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$mqttTool.end();
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    /* 连接Mqtt消息服务器 */connectMqtt: function connectMqtt() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.$mqttTool.client == null)) {
                  _context2.next = 4;
                  break;
                }
                console.log('连接mqtt...');
                _context2.next = 4;
                return _this2.$mqttTool.connect(_this2.vuex_token);
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // 获取登录用户信息
    getProfile: function getProfile() {
      var _this3 = this;
      // 调用用户信息接口
      (0, _common.getProfile)().then(function (res) {
        //存储用户信息,TODO 需要调用一次，不然其他页面调用返回空
        uni.$u.vuex('profile', res.data);
        _this3.profile;
        _this3.form.userId = _this3.profile.userId;
      }).catch(function (err) {
        _this3.$u.toast(err.msg);
      });
    },
    // 单击选显卡
    tabClick: function tabClick(item) {
      this.tabIndex = item.index;
      if (this.tabIndex == 0) {
        // 发现设备
        this.discoverDevice();
      } else {
        // 清除发现设备定时器
        clearInterval(this.discoverTimer);
      }
    },
    // 返回
    goBack: function goBack() {
      getApp().globalData.operate = 'operate';
      uni.navigateBack({
        delta: 1
      });
    },
    // 扫码
    openScan: function openScan() {
      var _this4 = this;
      // 允许从相机和相册扫码
      uni.scanCode({
        success: function success(res) {
          console.log('条码类型：' + res.scanType);
          console.log('条码内容：' + res.result);
          if (res.result.substr(0, 1) != '{') {
            console.log('坑点：解析二维码后第一个位置包含一个特殊字符，大部分编译器和调试工具识别不了这个特殊字符');
            res.result = res.result.substring(1);
          }
          // 解析JSON
          try {
            var json = JSON.parse(res.result);
            // type=1 代表扫码关联设备
            if (json.type == 1) {
              _this4.form.deviceNum = json.deviceNumber;
              return;
            }
            uni.showToast({
              icon: 'none',
              title: '解析二维码，格式不正确'
            });
          } catch (error) {
            uni.showToast({
              icon: 'none',
              title: '解析二维码，格式不正确'
            });
          }
        }
      });
    },
    // 保存WIFI
    saveWifi: function saveWifi() {
      if (this.form.SSID != '' && this.form.password != '') {
        // 本地缓存存储
        uni.setStorageSync('WIFI_SSID', this.form.SSID);
        uni.setStorageSync('WIFI_PASSWORD', this.form.password);
      }
    },
    // 获取WIFI
    getWifi: function getWifi() {
      // 本地缓存获取
      var wifi_ssid = uni.getStorageSync('WIFI_SSID');
      var wifi_password = uni.getStorageSync('WIFI_PASSWORD');
      if (wifi_ssid && wifi_ssid != '') {
        this.form.SSID = wifi_ssid;
      }
      if (wifi_password && wifi_password != '') {
        this.form.password = wifi_password;
      }
    },
    // 获取配网接口地址
    getParamString: function getParamString() {
      console.log('form', this.form);
      var ip = 'http://192.168.4.1/config';
      var params = '?SSID=' + this.form.SSID + '&password=' + this.form.password + '&userId=' + this.form.userId;
      if (this.form.deviceNum && this.form.deviceNum != '') {
        params = params + '&deviceNum=' + this.form.deviceNum;
      }
      if (this.form.deviceName && this.form.deviceName != '') {
        params = params + '&deviceName=' + this.form.deviceName;
      }
      if (this.form.authCode && this.form.authCode != '') {
        params = params + '&authCode=' + this.form.authCode;
      }
      if (this.form.extra && this.form.extra != '') {
        params = params + '&extra=' + this.form.extra;
      }
      return ip + params;
    },
    // 设备AP配网
    apConfig: function apConfig() {
      var _this5 = this;
      return new Promise(function (resolve, reject) {
        uni.request({
          url: _this5.getParamString(),
          method: 'POST',
          timeout: 10000,
          success: function success(res) {
            resolve(true);
          },
          fail: function fail(res) {
            reject(false);
          }
        });
      });
    },
    /****************************************** 单设备 *********************************************/
    // 检查设备是否配网准备就绪
    discoverDevice: function discoverDevice() {
      var _this6 = this;
      this.discoverTimer = setInterval(function () {
        if (_this6.tabIndex == 0) {
          uni.request({
            url: 'http://192.168.4.1/status',
            method: 'GET',
            timeout: 5000,
            success: function success(res) {
              clearInterval(_this6.discoverTimer);
              _this6.step = 2;
              _this6.progress == 0;
              _this6.count = {
                text: '已检测到设备',
                type: 'success',
                process: 0
              };
            }
          });
        }
      }, 5000);
    },
    // 配网进度显示
    showConfigProgress: function showConfigProgress() {
      var _this7 = this;
      this.count.timer = setInterval(function () {
        if (_this7.progress == 96) {
          clearInterval(_this7.count.timer);
        } else {
          _this7.progress = _this7.progress + 1;
        }
      }, 100);
    },
    // 重新开始配网
    restartConfig: function restartConfig() {
      this.progress = 0;
      this.step = 1;
      this.count = {
        // 进度定时器
        timer: {},
        // 显示文本
        text: '未检测到设备',
        // 文字类型
        type: 'warning'
      };
      this.discoverDevice();
    },
    // 开始配网
    beginConfig: function beginConfig() {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var result;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this8.$refs.form.validate()) {
                  _context3.next = 3;
                  break;
                }
                uni.$u.toast('用户编号和WIFI账号密码不能为空');
                return _context3.abrupt("return");
              case 3:
                //保存WIFI信息
                if (_this8.checkboxConfigs.indexOf('remeber') != -1) {
                  _this8.saveWifi();
                }
                // 设置进度
                _this8.progress = 0;
                _this8.showConfigProgress();
                _this8.count.text = '发送配置信息...';
                _this8.count.type = 'info';
                // 配网
                _context3.prev = 8;
                _context3.next = 11;
                return _this8.apConfig();
              case 11:
                result = _context3.sent;
                console.log('ap config result:', result);
                if (result) {
                  // 清除计数器
                  clearInterval(_this8.count.timer);
                  _this8.progress = 100;
                  _this8.count.text = '配网成功，如果设备没有正常连接，请检查WIFI信息是否正确以及网络状况';
                  _this8.count.type = 'success';
                  _this8.step = 3;
                } else {
                  // 清除计数器
                  clearInterval(_this8.count.timer);
                  _this8.count.text = '配网失败，请确认设备进入配网模式，并连接了该热点';
                  _this8.count.type = 'error';
                  _this8.step = 4;
                }
                _context3.next = 22;
                break;
              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](8);
                // 清除计数器
                clearInterval(_this8.count.timer);
                _this8.count.text = '配网失败，请确认设备进入配网模式，并连接了该热点';
                _this8.count.type = 'error';
                _this8.step = 4;
              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[8, 16]]);
      }))();
    },
    /****************************************** 多设备,小程序可用 *********************************************/
    // 表格中的Wifi选择改变
    selectChange: function selectChange(wifi) {
      if (wifi.checked == true) {
        wifi.checked = false;
        for (var i = 0; i < this.selectedWifiList.length; i++) {
          if (wifi.SSID == this.selectedWifiList[i].SSID) {
            this.selectedWifiList.splice(i, 1);
          }
        }
      } else {
        wifi.checked = true;
        this.selectedWifiList.push(wifi);
      }
      console.log(this.selectedWifiList);
    },
    // 获取选中Wifi在所有wifi列表中的索引
    getWifiIndex: function getWifiIndex(SSID) {
      for (var i = 0; i < this.wifiList.length; i++) {
        if (SSID == this.wifiList[i].SSID) {
          return i;
        }
      }
      return -1;
    },
    // 小程序多设备配网
    beginConfigInWeChart: function beginConfigInWeChart() {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var that, _loop, i;
        return _regenerator.default.wrap(function _callee4$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (_this9.$refs.form.validate()) {
                  _context5.next = 3;
                  break;
                }
                uni.$u.toast('用户编号和WIFI账号密码不能为空');
                return _context5.abrupt("return");
              case 3:
                if (!(_this9.selectedWifiList.length == 0)) {
                  _context5.next = 6;
                  break;
                }
                uni.$u.toast('请选择设备热点');
                return _context5.abrupt("return");
              case 6:
                //保存WIFI信息
                if (_this9.checkboxConfigs.indexOf('remeber') != -1) {
                  _this9.saveWifi();
                }
                _this9.mstep = 1;
                that = _this9;
                _loop = /*#__PURE__*/_regenerator.default.mark(function _loop(i) {
                  var index, processTimer, result, apResult;
                  return _regenerator.default.wrap(function _loop$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          index = _this9.getWifiIndex(that.selectedWifiList[i].SSID);
                          console.log('wifi在列表中的索引：', index);
                          // 配网进度显示
                          that.wifiList[index].type = 'primary';
                          that.wifiList[index].text = '配网中...';
                          processTimer = setInterval(function () {
                            if (that.wifiList[index].process == 90) {
                              clearInterval(processTimer);
                            } else {
                              that.wifiList[index].process = that.wifiList[index].process + 1;
                            }
                          }, 350); // 微信连接设备热点
                          _context4.prev = 5;
                          _context4.next = 8;
                          return that.connectWifiInWeChat(that.wifiList[index].SSID, '');
                        case 8:
                          result = _context4.sent;
                          console.log('连接设备热点： ' + that.wifiList[index].SSID + ' result:', result);
                          if (!(result == true)) {
                            _context4.next = 16;
                            break;
                          }
                          _context4.next = 13;
                          return that.apConfig();
                        case 13:
                          apResult = _context4.sent;
                          console.log('AP配网，result:', apResult);
                          if (apResult == true) {
                            // 配网成功
                            clearInterval(processTimer);
                            that.wifiList[index].process = 100;
                            that.wifiList[index].type = 'success';
                            that.wifiList[index].text = '配网成功';
                          } else {
                            // 配网失败
                            that.failConfigInWeChat(that.wifiList[index], processTimer);
                          }
                        case 16:
                          _context4.next = 22;
                          break;
                        case 18:
                          _context4.prev = 18;
                          _context4.t0 = _context4["catch"](5);
                          console.log('连接WIFI异常，catch: ', _context4.t0);
                          // 配网失败
                          that.failConfigInWeChat(that.wifiList[index], processTimer);
                        case 22:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _loop, null, [[5, 18]]);
                });
                i = 0;
              case 11:
                if (!(i < that.selectedWifiList.length)) {
                  _context5.next = 16;
                  break;
                }
                return _context5.delegateYield(_loop(i), "t0", 13);
              case 13:
                i++;
                _context5.next = 11;
                break;
              case 16:
                //配网成功后停止wifi然后启动、手机自动连接wifi
                that.mstep = 2;
                _context5.prev = 17;
                console.log('停止Wifi...');
                _context5.next = 21;
                return that.stopWifiInWeChat();
              case 21:
                _context5.next = 27;
                break;
              case 23:
                _context5.prev = 23;
                _context5.t1 = _context5["catch"](17);
                console.log('停止Wifi异常', _context5.t1);
                uni.showToast({
                  icon: 'none',
                  title: '配网后，请连接上网用的Wifi'
                });
              case 27:
                _context5.prev = 27;
                console.log('启动Wifi...');
                _context5.next = 31;
                return that.startWifiInWeChat();
              case 31:
                _context5.next = 37;
                break;
              case 33:
                _context5.prev = 33;
                _context5.t2 = _context5["catch"](27);
                console.log('启动Wifi异常', _context5.t2);
                uni.showToast({
                  icon: 'none',
                  title: '配网后，请连接上网用的Wifi'
                });
              case 37:
                that.mstep = 3;
              case 38:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee4, null, [[17, 23], [27, 33]]);
      }))();
    },
    // 多设备配网失败
    failConfigInWeChat: function failConfigInWeChat(wifi, processTimer) {
      clearInterval(processTimer);
      wifi.type = 'error';
      wifi.text = '配网失败';
    },
    // 微信小程序连接wifi
    connectWifiInWeChat: function connectWifiInWeChat(ssid, password) {
      return new Promise(function (resolve, reject) {
        wx.connectWifi({
          SSID: ssid,
          password: password,
          success: function success(res) {
            resolve(true);
          },
          fail: function fail(res) {
            reject(res);
          }
        });
      });
    },
    // 微信小程序停止wifi
    stopWifiInWeChat: function stopWifiInWeChat() {
      return new Promise(function (resolve, reject) {
        wx.stopWifi({
          success: function success(res) {
            resolve(true);
          },
          fail: function fail(res) {
            reject(res);
          }
        });
      });
    },
    // 微信小程序启动wifi
    startWifiInWeChat: function startWifiInWeChat() {
      return new Promise(function (resolve, reject) {
        wx.startWifi({
          success: function success(res) {
            resolve(true);
          },
          fail: function fail(res) {
            reject(res);
          }
        });
      });
    },
    // 获取连接的wifi信息
    getConnectedWifiInWeChart: function getConnectedWifiInWeChart() {
      var that = this;
      wx.getConnectedWifi({
        success: function success(res) {
          console.log('success wifi info ', res);
          if (that.form.SSID == '') {
            that.form.SSID = res.wifi.SSID;
          }
        },
        fail: function fail(res) {
          console.log(res);
          uni.showToast({
            icon: 'none',
            title: '请确保手机Wifi已打开，然后重新进入页面'
          });
        }
      });
    },
    // 获取wifi列表
    getWifiListInWeChart: function getWifiListInWeChart() {
      var that = this;
      that.wifiList = [];
      wx.getWifiList({
        // 请求获取wifi列表
        success: function success(e) {
          wx.onGetWifiList(function (res) {
            console.log('wifi列表');
            console.log(res.wifiList);
            var platform = uni.getSystemInfoSync().platform;
            var tmpList = [];
            res.wifiList.map(function (item) {
              if (item.SSID.length > 0) {
                // 设置热点的配网进度默认为0,未选中状态,进度条默认蓝色
                item.process = 0;
                item.checked = false;
                item.type = 'primary';
                item.text = '准备配网';
                item.signalStrength = platform === 'ios' ? Math.round(item.signalStrength * 100) : item.signalStrength; //ios signalStrength 值是0-1, android 值是1-100
                tmpList.push(item);
              }
            });
            that.wifiList = tmpList; // 存放wifi列表
            console.log('列表数据', that.wifiList);
            that.loading = false;
            // 配网未开始
            that.mstep = 0;
          });
        },
        fail: function fail(res) {
          console.log(res);
          uni.showToast({
            icon: 'none',
            title: '请确保手机Wifi已打开，然后重新进入页面'
          });
        }
      });
    },
    // 更新WIFI列表
    updateWfifiListInWeChat: function updateWfifiListInWeChat() {
      var _this10 = this;
      // 清空选中的wifi
      this.selectedWifiList = [];
      this.updateDisable = true;
      this.initInWeChat();
      setTimeout(function (res) {
        _this10.updateDisable = false;
      }, 6000);
    },
    // 小程序初始化Wifi模块
    initInWeChat: function initInWeChat() {
      var that = this;
      that.loading = true;
      uni.getLocation({
        //授权定位后才能获取wifi
        type: 'wgs84',
        success: function success(res) {
          that.wifiList = [];
          wx.startWifi({
            success: function success(res) {
              console.log('启动Wifi模块成功' + res.errMsg);
              // 获取连接的wifi信息
              that.getConnectedWifiInWeChart();
              // 获取wifi列表
              that.getWifiListInWeChart();
            },
            fail: function fail(res) {
              that.loading = false;
              console.log('启动Wifi模块失败' + res);
              uni.showToast({
                icon: 'none',
                title: '启动Wifi模块失败，请重新打开小程序'
              });
            }
          });
        },
        fail: function fail(error) {
          console.log(error, 'xxx');
          that.loading = false;
          uni.showToast({
            title: '初始化Wifi模块失败,请重新打开小程序',
            icon: 'none'
          });
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 316:
/*!*******************************************************************************************************!*\
  !*** D:/project/wumei-smart-app-new/pagesA/list/home/deviceAdd.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./deviceAdd.vue?vue&type=style&index=0&lang=scss& */ 317);
/* harmony import */ var _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceAdd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 317:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/wumei-smart-app-new/pagesA/list/home/deviceAdd.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[310,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pagesA/list/home/deviceAdd.js.map