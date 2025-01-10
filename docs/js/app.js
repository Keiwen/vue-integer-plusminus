/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./demo/main.js":
/*!**********************!*\
  !*** ./demo/main.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _Demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demo */ \"./demo/Demo.vue\");\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_Demo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n//# sourceURL=webpack://vue-integer-plusminus/./demo/main.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'Demo',\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const ipmValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(5);\n    const ipmMin = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);\n    const ipmMax = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(9);\n    const ipmStep = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);\n    const ipmSlotHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('Your value is');\n    const ipmSlotDecr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('-1');\n    const ipmSlotIncr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('+1');\n    const ipmVertical = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);\n    const ipmDisabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);\n    const demoSlotValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(50);\n    const __returned__ = {\n      ipmValue,\n      ipmMin,\n      ipmMax,\n      ipmStep,\n      ipmSlotHeader,\n      ipmSlotDecr,\n      ipmSlotIncr,\n      ipmVertical,\n      ipmDisabled,\n      demoSlotValue,\n      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,\n      get IntegerPlusminus() {\n        return _src_index__WEBPACK_IMPORTED_MODULE_1__.IntegerPlusminus;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://vue-integer-plusminus/./demo/Demo.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IntegerPlusminus.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IntegerPlusminus.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'IntegerPlusminus',\n  props: {\n    modelValue: Number,\n    initialValue: {\n      type: Number,\n      default: 0\n    },\n    min: {\n      type: Number,\n      default: 0\n    },\n    max: {\n      type: Number,\n      default: undefined\n    },\n    step: {\n      type: Number,\n      default: 1\n    },\n    vertical: {\n      type: Boolean,\n      default: false\n    },\n    incrementAriaLabel: {\n      type: String,\n      default: undefined\n    },\n    decrementAriaLabel: {\n      type: String,\n      default: undefined\n    },\n    spinButtonAriaLabel: {\n      type: String,\n      default: undefined\n    },\n    formName: {\n      type: String,\n      default: 'integerPlusMinus'\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    }\n  },\n  emits: ['update:modelValue', 'ipm-input', 'ipm-increment', 'ipm-decrement'],\n  setup(__props, {\n    expose: __expose,\n    emit: __emit\n  }) {\n    __expose();\n    const props = __props;\n    const intValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);\n    const spinButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);\n    const emit = __emit;\n\n    // computed\n    const canIncrement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      if (props.disabled) return false;\n      return props.max === undefined || intValue.value + props.step <= props.max;\n    });\n    const canDecrement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      if (props.disabled) return false;\n      return intValue.value - props.step >= props.min;\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {\n      window.addEventListener('keydown', keyUp);\n      if (props.modelValue === undefined) {\n        intValue.value = props.initialValue;\n      } else {\n        intValue.value = props.modelValue;\n      }\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.modelValue, (newValue, oldValue) => {\n      if (newValue !== intValue.value) intValue.value = newValue;\n    });\n\n    // methods\n    const inputChange = () => {\n      if (props.modelValue !== undefined) {\n        emit('update:modelValue', intValue.value);\n        emit('ipm-input', intValue.value);\n      }\n    };\n    const isSpinButtonFocused = () => {\n      return document.activeElement === spinButton.value;\n    };\n    const setToMin = () => {\n      if (props.disabled) return;\n      intValue.value = props.min;\n      inputChange();\n    };\n    const setToMax = () => {\n      if (props.disabled) return;\n      intValue.value = props.max;\n      inputChange();\n    };\n    const increment = () => {\n      if (canIncrement.value) {\n        intValue.value = intValue.value + props.step;\n        emit('ipm-increment', intValue.value);\n        inputChange();\n      }\n    };\n    const decrement = () => {\n      if (canDecrement.value) {\n        intValue.value = intValue.value - props.step;\n        emit('ipm-decrement', intValue.value);\n        inputChange();\n      }\n    };\n    const keyUp = event => {\n      if (isSpinButtonFocused()) {\n        if (event.keyCode === 33 || event.keyCode === 38) {\n          // page up || up arrow\n          increment();\n          event.preventDefault();\n        }\n        if (event.keyCode === 34 || event.keyCode === 40) {\n          // page down || down arrow\n          decrement();\n          event.preventDefault();\n        }\n        if (event.keyCode === 36) {\n          // home button\n          setToMin();\n          event.preventDefault();\n        }\n\n        // if max, set to max\n        if (props.max !== undefined && event.keyCode === 35) {\n          // end button\n          setToMax();\n          event.preventDefault();\n        }\n      }\n    };\n    const getBtnClass = isFirstBtn => {\n      let btnClass = 'int-pm-';\n      if (isFirstBtn && !props.vertical || !isFirstBtn && props.vertical) {\n        btnClass += 'decrement';\n        if (!canDecrement.value) btnClass += ' disabled';\n      } else {\n        btnClass += 'increment';\n        if (!canIncrement.value) btnClass += ' disabled';\n      }\n      return btnClass;\n    };\n    const __returned__ = {\n      props,\n      intValue,\n      spinButton,\n      emit,\n      canIncrement,\n      canDecrement,\n      inputChange,\n      isSpinButtonFocused,\n      setToMin,\n      setToMax,\n      increment,\n      decrement,\n      keyUp,\n      getBtnClass,\n      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,\n      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,\n      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,\n      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://vue-integer-plusminus/./src/components/IntegerPlusminus.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=template&id=4e98d191":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=template&id=4e98d191 ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"container\"\n};\nconst _hoisted_2 = {\n  class: \"playWith\"\n};\nconst _hoisted_3 = {\n  key: 0\n};\nconst _hoisted_4 = {\n  class: \"gallery\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"fieldset\", null, [_cache[34] || (_cache[34] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Integer plus/minus\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [_cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, \"Play with it\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"IntegerPlusminus\"], {\n    min: $setup.ipmMin,\n    max: $setup.ipmMax,\n    step: $setup.ipmStep,\n    vertical: $setup.ipmVertical,\n    disabled: $setup.ipmDisabled,\n    \"increment-aria-label\": 'increase by 1',\n    \"decrement-aria-label\": 'decrease by 1',\n    \"spin-button-aria-label\": 'first example',\n    modelValue: $setup.ipmValue,\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $setup.ipmValue = $event)\n  }, {\n    decrement: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.ipmSlotDecr), 1 /* TEXT */)]),\n    increment: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.ipmSlotIncr), 1 /* TEXT */)]),\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [$setup.ipmSlotHeader ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.ipmSlotHeader), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.ipmValue) + \" \", 1 /* TEXT */)]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"min\", \"max\", \"step\", \"vertical\", \"disabled\", \"modelValue\"]), _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"hr\", null, null, -1 /* HOISTED */)), _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"ipmValue\"\n  }, \"Value:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"number\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $setup.ipmValue = $event),\n    id: \"ipmValue\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.ipmValue]]), _cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"ipmVertical\"\n  }, \"Vertical:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"checkbox\",\n    \"onUpdate:modelValue\": _cache[2] || (_cache[2] = $event => $setup.ipmVertical = $event),\n    id: \"ipmVertical\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.ipmVertical]]), _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"ipmDisabled\"\n  }, \"Disabled:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"checkbox\",\n    \"onUpdate:modelValue\": _cache[3] || (_cache[3] = $event => $setup.ipmDisabled = $event),\n    id: \"ipmDisabled\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.ipmDisabled]]), _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"ipmMin\"\n  }, \"Min:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"number\",\n    \"onUpdate:modelValue\": _cache[4] || (_cache[4] = $event => $setup.ipmMin = $event),\n    id: \"ipmMin\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.ipmMin]]), _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"ipmMax\"\n  }, \"Max:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"number\",\n    \"onUpdate:modelValue\": _cache[5] || (_cache[5] = $event => $setup.ipmMax = $event),\n    id: \"ipmMax\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.ipmMax]]), _cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"ipmStep\"\n  }, \"Step:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"number\",\n    \"onUpdate:modelValue\": _cache[6] || (_cache[6] = $event => $setup.ipmStep = $event),\n    id: \"ipmStep\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.ipmStep]]), _cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), _cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"ipmSlotHeader\"\n  }, \"Additional text:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    \"onUpdate:modelValue\": _cache[7] || (_cache[7] = $event => $setup.ipmSlotHeader = $event),\n    id: \"ipmSlotHeader\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.ipmSlotHeader]]), _cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), _cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), _cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"ipmSlotDecr\"\n  }, \"Decrement button:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    \"onUpdate:modelValue\": _cache[8] || (_cache[8] = $event => $setup.ipmSlotDecr = $event),\n    id: \"ipmSlotDecr\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.ipmSlotDecr]]), _cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"ipmSlotIncr\"\n  }, \"Increment button:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    \"onUpdate:modelValue\": _cache[9] || (_cache[9] = $event => $setup.ipmSlotIncr = $event),\n    id: \"ipmSlotIncr\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.ipmSlotIncr]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [_cache[31] || (_cache[31] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, \"Gallery\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"IntegerPlusminus\"], {\n    min: 1,\n    max: 3,\n    \"initial-value\": 2,\n    \"increment-aria-label\": 'increase by 1',\n    \"decrement-aria-label\": 'decrease by 1',\n    \"spin-button-aria-label\": \"example two\"\n  }), _cache[32] || (_cache[32] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"IntegerPlusminus\"], {\n    min: 0,\n    max: 100,\n    step: 10,\n    \"increment-aria-label\": 'increase score by 10',\n    \"decrement-aria-label\": 'decrease score by 10',\n    \"spin-button-aria-label\": \"game points\",\n    modelValue: $setup.demoSlotValue,\n    \"onUpdate:modelValue\": _cache[10] || (_cache[10] = $event => $setup.demoSlotValue = $event)\n  }, {\n    increment: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => _cache[28] || (_cache[28] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Win\")])),\n    decrement: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => _cache[29] || (_cache[29] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Loss\")])),\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"You have \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.demoSlotValue) + \" points\", 1 /* TEXT */), _cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"i\", null, \"Games worth 10 points\", -1 /* HOISTED */))]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"modelValue\"]), _cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"IntegerPlusminus\"], {\n    class: \"demo-vertical\",\n    min: 0,\n    max: 9,\n    vertical: true,\n    \"initial-value\": 5,\n    \"increment-aria-label\": 'increase by 1',\n    \"decrement-aria-label\": 'decrease by 1',\n    \"spin-button-aria-label\": \"example 3\"\n  })])])]);\n}\n\n//# sourceURL=webpack://vue-integer-plusminus/./demo/Demo.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IntegerPlusminus.vue?vue&type=template&id=6d3208b0":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IntegerPlusminus.vue?vue&type=template&id=6d3208b0 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = [\"aria-label\", \"disabled\"];\nconst _hoisted_2 = [\"aria-valuenow\", \"aria-valuemin\", \"aria-valuemax\", \"aria-label\"];\nconst _hoisted_3 = [\"name\", \"value\"];\nconst _hoisted_4 = [\"aria-label\", \"disabled\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"int-pm\", {\n      'int-pm-vertical': $props.vertical\n    }])\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"int-pm-btn\", $setup.getBtnClass(true)]),\n    onClick: _cache[0] || (_cache[0] = $event => $props.vertical ? $setup.increment() : $setup.decrement()),\n    \"aria-label\": $props.decrementAriaLabel,\n    disabled: $props.disabled\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, $props.vertical ? 'increment' : 'decrement', {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.vertical ? '+' : '-'), 1 /* TEXT */)])], 10 /* CLASS, PROPS */, _hoisted_1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"int-pm-value\",\n    ref: \"spinButton\",\n    role: \"spinbutton\",\n    tabindex: \"0\",\n    \"aria-valuenow\": $setup.intValue,\n    \"aria-valuemin\": $props.min,\n    \"aria-valuemax\": $props.max,\n    \"aria-label\": $props.spinButtonAriaLabel\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, \"default\", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.intValue), 1 /* TEXT */)])], 8 /* PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"hidden\",\n    name: $props.formName,\n    value: $setup.intValue\n  }, null, 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"int-pm-btn\", $setup.getBtnClass(false)]),\n    onClick: _cache[1] || (_cache[1] = $event => $props.vertical ? $setup.decrement() : $setup.increment()),\n    \"aria-label\": $props.incrementAriaLabel,\n    disabled: $props.disabled\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, $props.vertical ? 'decrement' : 'increment', {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.vertical ? '-' : '+'), 1 /* TEXT */)])], 10 /* CLASS, PROPS */, _hoisted_4)], 2 /* CLASS */);\n}\n\n//# sourceURL=webpack://vue-integer-plusminus/./src/components/IntegerPlusminus.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IntegerPlusminus: function() { return /* reexport safe */ _components_IntegerPlusminus_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   install: function() { return /* binding */ install; }\n/* harmony export */ });\n/* harmony import */ var _components_IntegerPlusminus_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/IntegerPlusminus.vue */ \"./src/components/IntegerPlusminus.vue\");\n/* harmony import */ var _styles_common_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/common.scss */ \"./src/styles/common.scss\");\n/* harmony import */ var _styles_common_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_common_scss__WEBPACK_IMPORTED_MODULE_1__);\n// Component imports\n\n\n\n// Default export for global usage\nconst install = app => {\n  app.component('integer-plusminus', _components_IntegerPlusminus_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (install);\n\n// Named export for specific usage\n\n\n//# sourceURL=webpack://vue-integer-plusminus/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nh1 {\\r\\n  margin-top: 0;\\r\\n  margin-bottom: 0;\\n}\\n.container {\\r\\n  margin-top: 20px;\\n}\\n.playWith {\\r\\n  width: 70%;\\r\\n  float: left;\\n}\\n.gallery {\\r\\n  float: right;\\r\\n  width: 20%;\\n}\\n.half {\\r\\n  width: 50%;\\r\\n  float: left;\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-integer-plusminus/./demo/Demo.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use[3]!./src/styles/common.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use[3]!./src/styles/common.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --ipm-border-color: #CCCCCC;\\n  --ipm-background-color: transparent;\\n  --ipm-btn-color: inherit;\\n  --ipm-btn-background-color: #DDDDDD;\\n  --ipm-btn-background-color-hover: #CCCCCC;\\n  --ipm-btn-background-color-disabled: #EEEEEE;\\n  --ipm-btn-color-disabled: #777777;\\n}\\n\\n.int-pm {\\n  display: flex;\\n  text-align: center;\\n}\\n.int-pm .int-pm-value {\\n  border-width: 1px 0;\\n  border-color: var(--ipm-border-color);\\n  border-style: solid;\\n  padding: 0 10px;\\n  background-color: var(--ipm-background-color);\\n}\\n.int-pm .int-pm-btn {\\n  border: 1px solid var(--ipm-border-color);\\n  background-color: var(--ipm-btn-background-color);\\n  cursor: pointer;\\n  padding: 5px 10px;\\n  color: var(--ipm-btn-color);\\n}\\n.int-pm .int-pm-btn:hover {\\n  background-color: var(--ipm-btn-background-color-hover);\\n}\\n.int-pm .int-pm-btn.disabled {\\n  background-color: var(--ipm-btn-background-color-disabled);\\n  color: var(--ipm-btn-background-disabled);\\n  cursor: not-allowed;\\n}\\n.int-pm .int-pm-btn.disabled:hover {\\n  background-color: var(--ipm-btn-background-color-disabled);\\n}\\n.int-pm.int-pm-vertical {\\n  flex-direction: column;\\n}\\n.int-pm.int-pm-vertical .int-pm-value {\\n  border-width: 0 1px;\\n  padding: 5px 10px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-integer-plusminus/./src/styles/common.scss?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use%5B3%5D");

/***/ }),

/***/ "./demo/Demo.vue":
/*!***********************!*\
  !*** ./demo/Demo.vue ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Demo_vue_vue_type_template_id_4e98d191__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Demo.vue?vue&type=template&id=4e98d191 */ \"./demo/Demo.vue?vue&type=template&id=4e98d191\");\n/* harmony import */ var _Demo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demo.vue?vue&type=script&setup=true&lang=js */ \"./demo/Demo.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _Demo_vue_vue_type_style_index_0_id_4e98d191_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css */ \"./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Demo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Demo_vue_vue_type_template_id_4e98d191__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"demo/Demo.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://vue-integer-plusminus/./demo/Demo.vue?");

/***/ }),

/***/ "./src/components/IntegerPlusminus.vue":
/*!*********************************************!*\
  !*** ./src/components/IntegerPlusminus.vue ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IntegerPlusminus_vue_vue_type_template_id_6d3208b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IntegerPlusminus.vue?vue&type=template&id=6d3208b0 */ \"./src/components/IntegerPlusminus.vue?vue&type=template&id=6d3208b0\");\n/* harmony import */ var _IntegerPlusminus_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IntegerPlusminus.vue?vue&type=script&setup=true&lang=js */ \"./src/components/IntegerPlusminus.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_IntegerPlusminus_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_IntegerPlusminus_vue_vue_type_template_id_6d3208b0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/IntegerPlusminus.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://vue-integer-plusminus/./src/components/IntegerPlusminus.vue?");

/***/ }),

/***/ "./demo/Demo.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************!*\
  !*** ./demo/Demo.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Demo.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://vue-integer-plusminus/./demo/Demo.vue?");

/***/ }),

/***/ "./src/components/IntegerPlusminus.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./src/components/IntegerPlusminus.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IntegerPlusminus_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IntegerPlusminus_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IntegerPlusminus.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IntegerPlusminus.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://vue-integer-plusminus/./src/components/IntegerPlusminus.vue?");

/***/ }),

/***/ "./demo/Demo.vue?vue&type=template&id=4e98d191":
/*!*****************************************************!*\
  !*** ./demo/Demo.vue?vue&type=template&id=4e98d191 ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_template_id_4e98d191__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_template_id_4e98d191__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Demo.vue?vue&type=template&id=4e98d191 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=template&id=4e98d191\");\n\n\n//# sourceURL=webpack://vue-integer-plusminus/./demo/Demo.vue?");

/***/ }),

/***/ "./src/components/IntegerPlusminus.vue?vue&type=template&id=6d3208b0":
/*!***************************************************************************!*\
  !*** ./src/components/IntegerPlusminus.vue?vue&type=template&id=6d3208b0 ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IntegerPlusminus_vue_vue_type_template_id_6d3208b0__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IntegerPlusminus_vue_vue_type_template_id_6d3208b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IntegerPlusminus.vue?vue&type=template&id=6d3208b0 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IntegerPlusminus.vue?vue&type=template&id=6d3208b0\");\n\n\n//# sourceURL=webpack://vue-integer-plusminus/./src/components/IntegerPlusminus.vue?");

/***/ }),

/***/ "./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css":
/*!*******************************************************************!*\
  !*** ./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_style_index_0_id_4e98d191_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_style_index_0_id_4e98d191_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_style_index_0_id_4e98d191_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_style_index_0_id_4e98d191_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_style_index_0_id_4e98d191_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://vue-integer-plusminus/./demo/Demo.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"37bfffba\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-integer-plusminus/./demo/Demo.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/styles/common.scss":
/*!********************************!*\
  !*** ./src/styles/common.scss ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use[3]!./common.scss */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use[3]!./src/styles/common.scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"72f112a5\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-integer-plusminus/./src/styles/common.scss?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvue_integer_plusminus"] = self["webpackChunkvue_integer_plusminus"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./demo/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;