(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesA/home/device/index"],{

/***/ 251:
/*!****************************************************************************************!*\
  !*** D:/project/wumei-smart-app-new/main.js?{"page":"pagesA%2Fhome%2Fdevice%2Findex"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pagesA/home/device/index.vue */ 252));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 252:
/*!*******************************************************************!*\
  !*** D:/project/wumei-smart-app-new/pagesA/home/device/index.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_e3598ef6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=e3598ef6& */ 253);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 255);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ 259);
/* harmony import */ var _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_e3598ef6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_e3598ef6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_e3598ef6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesA/home/device/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 253:
/*!**************************************************************************************************!*\
  !*** D:/project/wumei-smart-app-new/pagesA/home/device/index.vue?vue&type=template&id=e3598ef6& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_e3598ef6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=e3598ef6& */ 254);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_e3598ef6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_e3598ef6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_e3598ef6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_e3598ef6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 254:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/wumei-smart-app-new/pagesA/home/device/index.vue?vue&type=template&id=e3598ef6& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uSticky: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-sticky/u-sticky */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-sticky/u-sticky")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-sticky/u-sticky.vue */ 546))
    },
    uTabs: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-tabs/u-tabs */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-tabs/u-tabs.vue */ 554))
    },
    "u-Form": function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u--form/u--form */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u--form/u--form")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u--form/u--form.vue */ 477))
    },
    "u-Text": function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u--text/u--text */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u--text/u--text")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u--text/u--text.vue */ 471))
    },
    uFormItem: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-form-item/u-form-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-form-item/u-form-item")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-form-item/u-form-item.vue */ 483))
    },
    "u-Input": function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u--input/u--input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u--input/u--input")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u--input/u--input.vue */ 491))
    },
    uniDataSelect: function () {
      return Promise.all(/*! import() | uni_modules/uni-data-select/components/uni-data-select/uni-data-select */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-data-select/components/uni-data-select/uni-data-select")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue */ 682))
    },
    uSwitch: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-switch/u-switch */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-switch/u-switch")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-switch/u-switch.vue */ 698))
    },
    uTextarea: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-textarea/u-textarea */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-textarea/u-textarea")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-textarea/u-textarea.vue */ 706))
    },
    uButton: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 504))
    },
    "u-Image": function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u--image/u--image */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u--image/u--image")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u--image/u--image.vue */ 465))
    },
    uLoadingIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-loading-icon/u-loading-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue */ 571))
    },
    uModal: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-modal/u-modal */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-modal/u-modal")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-modal/u-modal.vue */ 530))
    },
    uIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 562))
    },
    uTag: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-tag/u-tag */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-tag/u-tag")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-tag/u-tag.vue */ 714))
    },
    uEmpty: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-empty/u-empty */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-empty/u-empty")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-empty/u-empty.vue */ 579))
    },
    uLoadmore: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-loadmore/u-loadmore */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-loadmore/u-loadmore")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-loadmore/u-loadmore.vue */ 587))
    },
    uTabbar: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-tabbar/u-tabbar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-tabbar/u-tabbar")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-tabbar/u-tabbar.vue */ 722))
    },
    uTabbarItem: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-tabbar-item/u-tabbar-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-tabbar-item/u-tabbar-item")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-tabbar-item/u-tabbar-item.vue */ 730))
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
  var m0 = _vm.formatVersion(_vm.deviceForm.firmwareVersion)
  var m1 = _vm.formatVersion(_vm.deviceForm.firmwareVersion)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 255:
/*!********************************************************************************************!*\
  !*** D:/project/wumei-smart-app-new/pagesA/home/device/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 256);
/* harmony import */ var _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 256:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/wumei-smart-app-new/pagesA/home/device/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 36));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 38));
var _device = __webpack_require__(/*! @/apis/modules/device */ 177);
var _sip = __webpack_require__(/*! @/apis/modules/sip */ 257);
var _common = __webpack_require__(/*! @/helpers/common.js */ 258);
var _envConfig = _interopRequireDefault(__webpack_require__(/*! @/env.config.js */ 42));
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
var runningStatus = function runningStatus() {
  __webpack_require__.e(/*! require.ensure | pagesA/home/device/status/index */ "pagesA/home/device/status/index").then((function () {
    return resolve(__webpack_require__(/*! ./status/index.vue */ 738));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var deviceLog = function deviceLog() {
  __webpack_require__.e(/*! require.ensure | pagesA/home/device/log/index */ "pagesA/home/device/log/index").then((function () {
    return resolve(__webpack_require__(/*! ./log/index.vue */ 743));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var deviceTiming = function deviceTiming() {
  Promise.all(/*! require.ensure | pagesA/home/device/timing/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pagesA/home/device/timing/index")]).then((function () {
    return resolve(__webpack_require__(/*! ./timing/index.vue */ 750));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    runningStatus: runningStatus,
    deviceLog: deviceLog,
    deviceTiming: deviceTiming
  },
  data: function data() {
    return {
      title: '设备',
      deviceId: 0,
      tabIndex: 0,
      tabbarIndex: 0,
      disabled: false,
      tabList: [{
        name: '运行状态'
      }, {
        name: '设备详情'
      }],
      show: false,
      // 删除设备模态框
      modalTitle: '删除警告',
      // 对话框标题
      content: '',
      // 对话框内容
      deviceForm: {
        isShadow: 0,
        // 避免u-switch报错，初始化
        deviceName: '',
        locationWay: 1
      },
      // 设备详情
      deviceDisable: 0,
      // 设备状态（1=禁用，0=不禁用）
      isSubDev: false,
      // 是否有子设备
      imageUrl: '',
      // 图片地址
      locationList: [{
        // 定位方式
        value: 1,
        text: '自动定位'
      }, {
        value: 2,
        text: '设备定位'
      }, {
        value: 3,
        text: '自定义位置'
      }],
      deviceRules: {
        // 表单校验
        deviceName: [{
          required: true,
          message: '设备名称不能为空',
          trigger: ['blur', 'change']
        }]
      },
      // 设备通道
      channelLoadStatus: 'nomore',
      channelQueryParams: {
        pageNum: 1,
        pageSize: 10,
        deviceSipId: ''
      },
      channelTotal: 0,
      channelList: []
    };
  },
  onLoad: function onLoad(option) {
    this.deviceId = Number(option.deviceId);
    if (this.deviceId == 118) {
      this.disabled = true;
    }
    this.connectMqtt(); // 连接mqtt
  },
  onUnload: function onUnload() {
    this.mqttUnSubscribe(this.deviceForm); // 取消订阅主题
  },

  methods: {
    /* 连接Mqtt消息服务器 */connectMqtt: function connectMqtt() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.$mqttTool.client === null)) {
                  _context.next = 3;
                  break;
                }
                _context.next = 3;
                return _this.$mqttTool.connect(_this.vuex_token);
              case 3:
                _this.mqttCallback();
                // 获取设备信息并订阅主题
                _this.getDevice();
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    /* Mqtt回调处理  */mqttCallback: function mqttCallback() {
      var _this2 = this;
      this.$mqttTool.client.on('message', function (topic, message, buffer) {
        var topics = topic.split('/');
        var productId = topics[1];
        var deviceNum = topics[2];
        message = JSON.parse(message.toString());
        if (!message) {
          return;
        }
        ;
        if (topics[3] == 'status' || topics[2] == 'status') {
          console.log('接收到【设备状态-详情】主题：', topic);
          console.log('接收到【设备状态-详情】内容：', message);
          // 更新列表中设备的状态
          if (_this2.deviceForm.serialNumber == deviceNum) {
            _this2.deviceForm.status = message.status;
            _this2.deviceForm.isShadow = message.isShadow;
            _this2.deviceForm.rssid = message.rssid;
          }
        }
        ;
        //不是modbus不转发到子页面，其他设备的页面有回调方法
        if (_this2.isSubDev) {
          /*发送设备上报到子模块*/
          if (topic.endsWith('ws/service')) {
            console.log('接收到【设备数据上报】主题：', topic);
            console.log('接收到【设备数据上报】主题：', message);
            _this2.$bus.$emit("updateDeviceStatus", {
              serialNumber: topics[2],
              productId: _this2.deviceForm.productId,
              data: message
            });
          }
        }
      });
    },
    /** Mqtt订阅主题 */mqttSubscribe: function mqttSubscribe(device) {
      // 订阅当前设备状态和实时监测
      var topicStatus = '/' + device.productId + '/' + device.serialNumber + '/status/post';
      var topicMonitor = '/' + device.productId + '/' + device.serialNumber + '/monitor/post';
      var topicReply = '/' + device.productId + '/' + device.serialNumber + '/service/reply';
      var topicService = '/' + device.productId + '/' + device.serialNumber + '/ws/service';
      var topics = [];
      topics.push(topicStatus);
      topics.push(topicMonitor);
      topics.push(topicReply);
      topics.push(topicService);
      this.$mqttTool.subscribe(topics);
    },
    /** Mqtt取消订阅主题 */mqttUnSubscribe: function mqttUnSubscribe(device) {
      // 订阅当前设备状态和实时监测
      var topicStatus = '/' + device.productId + '/' + device.serialNumber + '/status/post';
      var topicMonitor = '/' + device.productId + '/' + device.serialNumber + '/monitor/post';
      var topicReply = '/' + device.productId + '/' + device.serialNumber + '/service/reply';
      var topicService = '/' + device.productId + '/' + device.serialNumber + '/ws/service';
      var topics = [];
      topics.push(topicStatus);
      topics.push(topicMonitor);
      topics.push(topicReply);
      topics.push(topicService);
      this.$mqttTool.unsubscribe(topics);
      console.log('取消订阅', topics);
    },
    // 单击选显卡
    tabClick: function tabClick(item) {
      this.tabIndex = item.index;
    },
    // 导航栏改变
    tabbarChange: function tabbarChange() {},
    // 导航栏单击
    tabbarClick: function tabbarClick(index) {
      this.tabbarIndex = index;
    },
    // 格式化版本显示
    formatVersion: function formatVersion(version) {
      return "Version ".concat(version);
    },
    // 刷新设备
    onPullDownRefresh: function onPullDownRefresh() {
      if (this.tabbarIndex == 0) {
        if (this.tabIndex == 0) {
          // 设备运行状态
          this.getDevice();
          this.$refs.runningStatus.baseStatusRefresh();
        } else if (this.tabIndex == 2) {
          // 设备信息
          this.getDevice();
        } else {
          uni.stopPullDownRefresh();
        }
      } else if (this.tabbarIndex == 1) {
        // 设备定时
        this.$refs.deviceTiming.deviceTimerRefresh();
        uni.stopPullDownRefresh();
      } else {
        uni.stopPullDownRefresh();
      }
    },
    /**获取设备详情*/getDevice: function getDevice() {
      var _this3 = this;
      (0, _device.getDevice)(this.deviceId).then( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(response) {
          var data;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  data = response.data;
                  console.log(data);
                  if (!(data.deviceType !== 3)) {
                    _context2.next = 13;
                    break;
                  }
                  _context2.next = 6;
                  return _this3.getCacheThingsModdel(data.productId);
                case 6:
                  data.cacheThingsModel = _context2.sent;
                  _context2.next = 9;
                  return _this3.getRunningStatusInfo(_this3.deviceId, data.slaveId);
                case 9:
                  data.thingsModels = _context2.sent;
                  // 格式化物模型，拆分出监测值,数组添加前缀
                  _this3.formatThingsModel(data);
                  _context2.next = 16;
                  break;
                case 13:
                  _context2.next = 15;
                  return _this3.getChannelList(data.serialNumber);
                case 15:
                  _this3.channelList = _context2.sent;
                case 16:
                  _this3.title = data.deviceName;
                  _this3.isSubDev = data.subDeviceList.length > 0;
                  _this3.imageUrl = data.imgUrl;
                  if (_this3.imageUrl != null && _this3.imageUrl != '') {
                    _this3.imageUrl = _envConfig.default.baseUrl + _this3.imageUrl;
                  } else {
                    _this3.imageUrl = '/static/common/device.png';
                  }
                  // 禁用状态
                  if (data.status == 2) {
                    _this3.deviceDisable = 1;
                  }
                  // 设置监控设备
                  if (data.deviceType == 3) {
                    _this3.tabList = [{
                      name: '设备通道'
                    }, {
                      name: '设备详情'
                    }];
                  }
                  // 获取定位方式
                  data.locationWayInfo = (0, _common.getLocationWayInfo)(data.locationWay);
                  //Mqtt订阅
                  uni.stopPullDownRefresh();
                  _this3.mqttSubscribe(data);
                  _this3.deviceForm = data;
                  _context2.next = 31;
                  break;
                case 28:
                  _context2.prev = 28;
                  _context2.t0 = _context2["catch"](0);
                  console.log(_context2.t0);
                case 31:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 28]]);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    // 设置设备的状态（1-未激活，2-禁用，3-在线，4-离线）
    setDeviceStatus: function setDeviceStatus() {
      if (this.deviceDisable == 1) {
        this.deviceForm.status = 2;
      } else {
        // 禁用状态，启用后状态是离线
        if (this.deviceForm.status == 2) {
          this.deviceForm.status = 4;
        }
      }
    },
    // 设备数据同步
    deviceSynchronization: function deviceSynchronization() {
      var _this4 = this;
      (0, _device.deviceSynchronization)(this.deviceForm.serialNumber).then( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(response) {
          var data;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  data = response.data;
                  if (!(data.deviceType !== 3)) {
                    _context3.next = 10;
                    break;
                  }
                  _context3.next = 5;
                  return _this4.getCacheThingsModdel(data.productId);
                case 5:
                  data.cacheThingsModel = _context3.sent;
                  _context3.next = 8;
                  return _this4.getRunningStatusInfo(_this4.deviceId, data.slaveId);
                case 8:
                  data.thingsModels = _context3.sent;
                  // 格式化物模型，拆分出监测值,数组添加前缀
                  _this4.formatThingsModel(data);
                case 10:
                  _this4.title = data.deviceName;
                  _this4.imageUrl = data.imgUrl;
                  if (_this4.imageUrl != null && _this4.imageUrl != '') {
                    _this4.imageUrl = _envConfig.default.baseUrl + _this4.imageUrl;
                  } else {
                    _this4.imageUrl = '/static/common/device.png';
                  }
                  // 禁用状态
                  if (data.status == 2) {
                    _this4.deviceDisable = 1;
                  }
                  _this4.deviceForm = response.data;
                  _context3.next = 20;
                  break;
                case 17:
                  _context3.prev = 17;
                  _context3.t0 = _context3["catch"](0);
                  console.log(_context3.t0);
                case 20:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[0, 17]]);
        }));
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    },
    /** 删除设备按钮操作 */handleDelete: function handleDelete() {
      this.content = '是否确认删除 ' + this.deviceForm.deviceName + ' ？';
      this.show = true;
    },
    // 确认删除设备
    confirm: function confirm() {
      this.show = false;
      (0, _device.delDevice)(this.deviceForm.deviceId).then(function (res) {
        if (res.code == 200) {
          // 跳转主页,通过globalData传递参数
          getApp().globalData.operate = 'operate';
          uni.switchTab({
            url: '/pages/tabBar/home/index'
          });
        } else if (res.code == 500) {
          uni.showToast({
            icon: 'none',
            title: res.msg
          });
        }
      });
    },
    // 取消
    cancel: function cancel() {
      this.show = false;
    },
    /** 提交按钮 */submitForm: function submitForm() {
      var _this5 = this;
      if (!this.deviceForm.locationWay) {
        uni.showToast({
          icon: 'none',
          title: '定位方式不能为空'
        });
        return;
      }
      this.$refs.deviceForm.validate().then(function (e) {
        if (_this5.deviceForm.deviceId !== 0) {
          _this5.setDeviceStatus(); // 设置设备状态
          var device = {
            deviceId: _this5.deviceForm.deviceId,
            deviceName: _this5.deviceForm.deviceName,
            isShadow: _this5.deviceForm.isShadow,
            status: _this5.deviceForm.status,
            remark: _this5.deviceForm.remark,
            locationWay: _this5.deviceForm.locationWay,
            longitude: _this5.deviceForm.longitude,
            latitude: _this5.deviceForm.latitude,
            networkAddress: _this5.deviceForm.networkAddress
          };
          (0, _device.updateDevice)(device).then(function (res) {
            if (res.code === 200) {
              uni.showToast({
                icon: 'success',
                title: '修改成功'
              });
            }
          });
        }
      });
    },
    gotoShare: function gotoShare() {
      uni.$u.route('/pagesA/device/share/list', {
        deviceId: this.deviceForm.deviceId,
        productId: this.deviceForm.productId,
        deviceName: this.deviceForm.deviceName
      });
    },
    /** 获取缓存物模型*/getCacheThingsModdel: function getCacheThingsModdel(productId) {
      return new Promise(function (resolve, reject) {
        (0, _device.cacheJsonThingsModel)(productId).then(function (res) {
          resolve(JSON.parse(res.data));
        }).catch(function (err) {
          reject(err);
        });
      });
    },
    // 获取设备运行状态
    getRunningStatusInfo: function getRunningStatusInfo(deviceId, slaveId) {
      return new Promise(function (resolve, reject) {
        (0, _device.getRunningStatus)(deviceId, slaveId).then(function (res) {
          resolve(res.data.thingsModels);
        }).catch(function (err) {
          reject(err);
        });
      });
    },
    // 物模型格式化
    formatThingsModel: function formatThingsModel(data) {
      if (data && data.length !== 0) {
        data.chartList = [];
        data.monitorList = [];
        data.statisticList = [];
        for (var i = 0; i < data.thingsModels.length; i++) {
          if (data.thingsModels[i].datatype.type === "array") {
            if (data.thingsModels[i].datatype.arrayType === "object") {
              for (var k = 0; k < data.thingsModels[i].datatype.arrayParams.length; k++) {
                for (var j = 0; j < data.thingsModels[i].datatype.arrayParams[k].length; j++) {
                  // 数组元素中参数ID添加前缀，例如：array_00_
                  var index = k > 9 ? String(k) : '0' + k;
                  var prefix = 'array_' + index + '_';
                  data.thingsModels[i].datatype.arrayParams[k][j].id = prefix + data.thingsModels[i].datatype.arrayParams[k][j].id;
                  // 图表、实时监测分类放置
                  if (data.thingsModels[i].datatype.arrayParams[k][j].isChart === 1) {
                    data.thingsModels[i].datatype.arrayParams[k][j].name = "[" + data.thingsModels[i].name + (k + 1) + "] " + data.thingsModels[i].datatype.arrayParams[k][j].name;
                    data.thingsModels[i].datatype.arrayParams[k][j].datatype.arrayType = "object";
                    data.chartList.push(data.thingsModels[i].datatype.arrayParams[k][j]);

                    // 实时监测
                    if (data.thingsModels[i].datatype.arrayParams[k][j].isMonitor == 1) {
                      data.monitorList.push(data.thingsModels[i].datatype.arrayParams[k][j]);
                    }
                    data.thingsModels[i].datatype.arrayParams[k].splice(j--, 1);
                  }
                }
              }
            } else {
              // 字符串拆分为物模型数组 model=id/name/type/isReadonly/value/shadow
              var values = data.thingsModels[i].value != "" ? data.thingsModels[i].value.split(',') : [];
              var shadows = data.thingsModels[i].shadow != "" ? data.thingsModels[i].shadow.split(',') : [];
              for (var _j = 0; _j < data.thingsModels[i].datatype.arrayCount; _j++) {
                if (!data.thingsModels[i].datatype.arrayModel) {
                  data.thingsModels[i].datatype.arrayModel = [];
                }
                // 数组里面的ID需要添加前缀和索引，例如：array_00_temperature
                var _index = _j > 9 ? String(_j) : '0' + _j;
                var _prefix = 'array_' + _index + '_';
                data.thingsModels[i].datatype.arrayModel[_j] = {
                  id: _prefix + data.thingsModels[i].id,
                  name: data.thingsModels[i].name,
                  type: data.thingsModels[i].type,
                  isReadonly: data.thingsModels[i].isReadonly,
                  value: values[_j] ? values[_j] : "",
                  shadow: shadows[_j] ? shadows[_j] : ""
                };
              }
            }
          } else if (data.thingsModels[i].datatype.type === "object") {
            for (var _j2 = 0; _j2 < data.thingsModels[i].datatype.params.length; _j2++) {
              // 图表、实时监测分类放置
              if (data.thingsModels[i].datatype.params[_j2].isChart === 1) {
                // 图表
                data.thingsModels[i].datatype.params[_j2].name = "[" + data.thingsModels[i].name + "] " + data.thingsModels[i].datatype.params[_j2].name;
                data.chartList.push(data.thingsModels[i].datatype.params[_j2]);
                // 实时监测
                if (data.thingsModels[i].datatype.params[_j2].isMonitor == 1) {
                  data.monitorList.push(data.thingsModels[i].datatype.params[_j2]);
                }
                data.thingsModels[i].datatype.params.splice(_j2--, 1);
              }
            }
          } else if (data.thingsModels[i].isChart === 1) {
            // 图表、实时监测、分类放置
            data.chartList.push(data.thingsModels[i]);
            // 实时监测
            if (data.thingsModels[i].isMonitor == 1) {
              data.monitorList.push(data.thingsModels[i]);
            }
            // 使用i--解决索引变更问题
            data.thingsModels.splice(i--, 1);
          }
        }
      }
    },
    // 设备通道
    getChannelList: function getChannelList(serialNumber) {
      var _this6 = this;
      this.channelQueryParams.deviceSipId = serialNumber;
      return new Promise(function (resolve, reject) {
        (0, _sip.listChannel)(_this6.channelQueryParams).then(function (response) {
          _this6.channelTotal = response.total;
          response.rows.map(function (item) {
            item.statusInfo = (0, _common.getSipStatusInfo)(item.status);
            return item;
          });
          resolve(response.rows);
        }).catch(function (error) {
          reject(error);
        });
      });
    },
    gotoDevicePlayer: function gotoDevicePlayer(deviceSipId, channelSipId, status) {
      var statusInfo = (0, _common.getSipStatusInfo)(status);
      if (status !== 2) {
        uni.showToast({
          icon: 'none',
          title: "\u65E0\u6CD5\u67E5\u770B".concat((0, _common.getSipStatusInfo)(status).name, "\u6570\u636E")
        });
        return;
      }
      uni.showToast({
        icon: 'none',
        title: '暂不支持微信小程序'
      });
    },
    onReachBottom: function onReachBottom() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var list;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(_this7.tabIndex === 0)) {
                  _context4.next = 12;
                  break;
                }
                _this7.channelLoadStatus = 'loading';
                _this7.channelQueryParams.pageNum = _this7.channelQueryParams.pageNum + 1;
                if (!((_this7.channelQueryParams.pageNum - 1) * _this7.channelQueryParams.pageSize >= _this7.channelTotal)) {
                  _context4.next = 7;
                  break;
                }
                _this7.channelLoadStatus = 'nomore';
                _context4.next = 12;
                break;
              case 7:
                _context4.next = 9;
                return _this7.getChannelList(_this7.deviceForm.serialNumber);
              case 9:
                list = _context4.sent;
                _this7.channelList = _this7.channelList.concat(list);
                _this7.channelLoadStatus = 'nomore';
              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    // 返回监听
    onBackPress: function onBackPress(options) {
      if (options.from === 'navigateBack') {
        return false;
      }
      uni.switchTab({
        url: '/pages/tabBar/home/index'
      });
      return true;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 259:
/*!*****************************************************************************************************!*\
  !*** D:/project/wumei-smart-app-new/pagesA/home/device/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HbuiderX/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&lang=scss& */ 260);
/* harmony import */ var _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuiderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 260:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/wumei-smart-app-new/pagesA/home/device/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[251,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pagesA/home/device/index.js.map