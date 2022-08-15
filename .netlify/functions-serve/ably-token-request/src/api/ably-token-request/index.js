var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// api/ably-token-request/node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "api/ably-token-request/node_modules/dotenv/lib/main.js"(exports, module2) {
    var fs = require("fs");
    var path = require("path");
    var os = require("os");
    var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function parse(src) {
      const obj = {};
      let lines = src.toString();
      lines = lines.replace(/\r\n?/mg, "\n");
      let match;
      while ((match = LINE.exec(lines)) != null) {
        const key = match[1];
        let value = match[2] || "";
        value = value.trim();
        const maybeQuote = value[0];
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        if (maybeQuote === '"') {
          value = value.replace(/\\n/g, "\n");
          value = value.replace(/\\r/g, "\r");
        }
        obj[key] = value;
      }
      return obj;
    }
    function _log(message) {
      console.log(`[dotenv][DEBUG] ${message}`);
    }
    function _resolveHome(envPath) {
      return envPath[0] === "~" ? path.join(os.homedir(), envPath.slice(1)) : envPath;
    }
    function config2(options) {
      let dotenvPath = path.resolve(process.cwd(), ".env");
      let encoding = "utf8";
      const debug = Boolean(options && options.debug);
      const override = Boolean(options && options.override);
      if (options) {
        if (options.path != null) {
          dotenvPath = _resolveHome(options.path);
        }
        if (options.encoding != null) {
          encoding = options.encoding;
        }
      }
      try {
        const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, { encoding }));
        Object.keys(parsed).forEach(function(key) {
          if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
            process.env[key] = parsed[key];
          } else {
            if (override === true) {
              process.env[key] = parsed[key];
            }
            if (debug) {
              if (override === true) {
                _log(`"${key}" is already defined in \`process.env\` and WAS overwritten`);
              } else {
                _log(`"${key}" is already defined in \`process.env\` and was NOT overwritten`);
              }
            }
          }
        });
        return { parsed };
      } catch (e) {
        if (debug) {
          _log(`Failed to load ${dotenvPath} ${e.message}`);
        }
        return { error: e };
      }
    }
    var DotenvModule = {
      config: config2,
      parse
    };
    module2.exports.config = DotenvModule.config;
    module2.exports.parse = DotenvModule.parse;
    module2.exports = DotenvModule;
  }
});

// api/ably-token-request/node_modules/@sindresorhus/is/dist/index.js
var require_dist = __commonJS({
  "api/ably-token-request/node_modules/@sindresorhus/is/dist/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var typedArrayTypeNames = [
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Uint16Array",
      "Int32Array",
      "Uint32Array",
      "Float32Array",
      "Float64Array",
      "BigInt64Array",
      "BigUint64Array"
    ];
    function isTypedArrayName(name) {
      return typedArrayTypeNames.includes(name);
    }
    var objectTypeNames = [
      "Function",
      "Generator",
      "AsyncGenerator",
      "GeneratorFunction",
      "AsyncGeneratorFunction",
      "AsyncFunction",
      "Observable",
      "Array",
      "Buffer",
      "Blob",
      "Object",
      "RegExp",
      "Date",
      "Error",
      "Map",
      "Set",
      "WeakMap",
      "WeakSet",
      "ArrayBuffer",
      "SharedArrayBuffer",
      "DataView",
      "Promise",
      "URL",
      "FormData",
      "URLSearchParams",
      "HTMLElement",
      ...typedArrayTypeNames
    ];
    function isObjectTypeName(name) {
      return objectTypeNames.includes(name);
    }
    var primitiveTypeNames = [
      "null",
      "undefined",
      "string",
      "number",
      "bigint",
      "boolean",
      "symbol"
    ];
    function isPrimitiveTypeName(name) {
      return primitiveTypeNames.includes(name);
    }
    function isOfType(type) {
      return (value) => typeof value === type;
    }
    var { toString } = Object.prototype;
    var getObjectType = (value) => {
      const objectTypeName = toString.call(value).slice(8, -1);
      if (/HTML\w+Element/.test(objectTypeName) && is.domElement(value)) {
        return "HTMLElement";
      }
      if (isObjectTypeName(objectTypeName)) {
        return objectTypeName;
      }
      return void 0;
    };
    var isObjectOfType = (type) => (value) => getObjectType(value) === type;
    function is(value) {
      if (value === null) {
        return "null";
      }
      switch (typeof value) {
        case "undefined":
          return "undefined";
        case "string":
          return "string";
        case "number":
          return "number";
        case "boolean":
          return "boolean";
        case "function":
          return "Function";
        case "bigint":
          return "bigint";
        case "symbol":
          return "symbol";
        default:
      }
      if (is.observable(value)) {
        return "Observable";
      }
      if (is.array(value)) {
        return "Array";
      }
      if (is.buffer(value)) {
        return "Buffer";
      }
      const tagType = getObjectType(value);
      if (tagType) {
        return tagType;
      }
      if (value instanceof String || value instanceof Boolean || value instanceof Number) {
        throw new TypeError("Please don't use object wrappers for primitive types");
      }
      return "Object";
    }
    is.undefined = isOfType("undefined");
    is.string = isOfType("string");
    var isNumberType = isOfType("number");
    is.number = (value) => isNumberType(value) && !is.nan(value);
    is.bigint = isOfType("bigint");
    is.function_ = isOfType("function");
    is.null_ = (value) => value === null;
    is.class_ = (value) => is.function_(value) && value.toString().startsWith("class ");
    is.boolean = (value) => value === true || value === false;
    is.symbol = isOfType("symbol");
    is.numericString = (value) => is.string(value) && !is.emptyStringOrWhitespace(value) && !Number.isNaN(Number(value));
    is.array = (value, assertion) => {
      if (!Array.isArray(value)) {
        return false;
      }
      if (!is.function_(assertion)) {
        return true;
      }
      return value.every(assertion);
    };
    is.buffer = (value) => {
      var _a, _b, _c, _d;
      return (_d = (_c = (_b = (_a = value) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.isBuffer) === null || _c === void 0 ? void 0 : _c.call(_b, value)) !== null && _d !== void 0 ? _d : false;
    };
    is.blob = (value) => isObjectOfType("Blob")(value);
    is.nullOrUndefined = (value) => is.null_(value) || is.undefined(value);
    is.object = (value) => !is.null_(value) && (typeof value === "object" || is.function_(value));
    is.iterable = (value) => {
      var _a;
      return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.iterator]);
    };
    is.asyncIterable = (value) => {
      var _a;
      return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.asyncIterator]);
    };
    is.generator = (value) => {
      var _a, _b;
      return is.iterable(value) && is.function_((_a = value) === null || _a === void 0 ? void 0 : _a.next) && is.function_((_b = value) === null || _b === void 0 ? void 0 : _b.throw);
    };
    is.asyncGenerator = (value) => is.asyncIterable(value) && is.function_(value.next) && is.function_(value.throw);
    is.nativePromise = (value) => isObjectOfType("Promise")(value);
    var hasPromiseAPI = (value) => {
      var _a, _b;
      return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a.then) && is.function_((_b = value) === null || _b === void 0 ? void 0 : _b.catch);
    };
    is.promise = (value) => is.nativePromise(value) || hasPromiseAPI(value);
    is.generatorFunction = isObjectOfType("GeneratorFunction");
    is.asyncGeneratorFunction = (value) => getObjectType(value) === "AsyncGeneratorFunction";
    is.asyncFunction = (value) => getObjectType(value) === "AsyncFunction";
    is.boundFunction = (value) => is.function_(value) && !value.hasOwnProperty("prototype");
    is.regExp = isObjectOfType("RegExp");
    is.date = isObjectOfType("Date");
    is.error = isObjectOfType("Error");
    is.map = (value) => isObjectOfType("Map")(value);
    is.set = (value) => isObjectOfType("Set")(value);
    is.weakMap = (value) => isObjectOfType("WeakMap")(value);
    is.weakSet = (value) => isObjectOfType("WeakSet")(value);
    is.int8Array = isObjectOfType("Int8Array");
    is.uint8Array = isObjectOfType("Uint8Array");
    is.uint8ClampedArray = isObjectOfType("Uint8ClampedArray");
    is.int16Array = isObjectOfType("Int16Array");
    is.uint16Array = isObjectOfType("Uint16Array");
    is.int32Array = isObjectOfType("Int32Array");
    is.uint32Array = isObjectOfType("Uint32Array");
    is.float32Array = isObjectOfType("Float32Array");
    is.float64Array = isObjectOfType("Float64Array");
    is.bigInt64Array = isObjectOfType("BigInt64Array");
    is.bigUint64Array = isObjectOfType("BigUint64Array");
    is.arrayBuffer = isObjectOfType("ArrayBuffer");
    is.sharedArrayBuffer = isObjectOfType("SharedArrayBuffer");
    is.dataView = isObjectOfType("DataView");
    is.enumCase = (value, targetEnum) => Object.values(targetEnum).includes(value);
    is.directInstanceOf = (instance, class_) => Object.getPrototypeOf(instance) === class_.prototype;
    is.urlInstance = (value) => isObjectOfType("URL")(value);
    is.urlString = (value) => {
      if (!is.string(value)) {
        return false;
      }
      try {
        new URL(value);
        return true;
      } catch (_a) {
        return false;
      }
    };
    is.truthy = (value) => Boolean(value);
    is.falsy = (value) => !value;
    is.nan = (value) => Number.isNaN(value);
    is.primitive = (value) => is.null_(value) || isPrimitiveTypeName(typeof value);
    is.integer = (value) => Number.isInteger(value);
    is.safeInteger = (value) => Number.isSafeInteger(value);
    is.plainObject = (value) => {
      if (toString.call(value) !== "[object Object]") {
        return false;
      }
      const prototype = Object.getPrototypeOf(value);
      return prototype === null || prototype === Object.getPrototypeOf({});
    };
    is.typedArray = (value) => isTypedArrayName(getObjectType(value));
    var isValidLength = (value) => is.safeInteger(value) && value >= 0;
    is.arrayLike = (value) => !is.nullOrUndefined(value) && !is.function_(value) && isValidLength(value.length);
    is.inRange = (value, range) => {
      if (is.number(range)) {
        return value >= Math.min(0, range) && value <= Math.max(range, 0);
      }
      if (is.array(range) && range.length === 2) {
        return value >= Math.min(...range) && value <= Math.max(...range);
      }
      throw new TypeError(`Invalid range: ${JSON.stringify(range)}`);
    };
    var NODE_TYPE_ELEMENT = 1;
    var DOM_PROPERTIES_TO_CHECK = [
      "innerHTML",
      "ownerDocument",
      "style",
      "attributes",
      "nodeValue"
    ];
    is.domElement = (value) => {
      return is.object(value) && value.nodeType === NODE_TYPE_ELEMENT && is.string(value.nodeName) && !is.plainObject(value) && DOM_PROPERTIES_TO_CHECK.every((property) => property in value);
    };
    is.observable = (value) => {
      var _a, _b, _c, _d;
      if (!value) {
        return false;
      }
      if (value === ((_b = (_a = value)[Symbol.observable]) === null || _b === void 0 ? void 0 : _b.call(_a))) {
        return true;
      }
      if (value === ((_d = (_c = value)["@@observable"]) === null || _d === void 0 ? void 0 : _d.call(_c))) {
        return true;
      }
      return false;
    };
    is.nodeStream = (value) => is.object(value) && is.function_(value.pipe) && !is.observable(value);
    is.infinite = (value) => value === Infinity || value === -Infinity;
    var isAbsoluteMod2 = (remainder) => (value) => is.integer(value) && Math.abs(value % 2) === remainder;
    is.evenInteger = isAbsoluteMod2(0);
    is.oddInteger = isAbsoluteMod2(1);
    is.emptyArray = (value) => is.array(value) && value.length === 0;
    is.nonEmptyArray = (value) => is.array(value) && value.length > 0;
    is.emptyString = (value) => is.string(value) && value.length === 0;
    var isWhiteSpaceString = (value) => is.string(value) && !/\S/.test(value);
    is.emptyStringOrWhitespace = (value) => is.emptyString(value) || isWhiteSpaceString(value);
    is.nonEmptyString = (value) => is.string(value) && value.length > 0;
    is.nonEmptyStringAndNotWhitespace = (value) => is.string(value) && !is.emptyStringOrWhitespace(value);
    is.emptyObject = (value) => is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length === 0;
    is.nonEmptyObject = (value) => is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length > 0;
    is.emptySet = (value) => is.set(value) && value.size === 0;
    is.nonEmptySet = (value) => is.set(value) && value.size > 0;
    is.emptyMap = (value) => is.map(value) && value.size === 0;
    is.nonEmptyMap = (value) => is.map(value) && value.size > 0;
    is.propertyKey = (value) => is.any([is.string, is.number, is.symbol], value);
    is.formData = (value) => isObjectOfType("FormData")(value);
    is.urlSearchParams = (value) => isObjectOfType("URLSearchParams")(value);
    var predicateOnArray = (method, predicate, values) => {
      if (!is.function_(predicate)) {
        throw new TypeError(`Invalid predicate: ${JSON.stringify(predicate)}`);
      }
      if (values.length === 0) {
        throw new TypeError("Invalid number of values");
      }
      return method.call(values, predicate);
    };
    is.any = (predicate, ...values) => {
      const predicates = is.array(predicate) ? predicate : [predicate];
      return predicates.some((singlePredicate) => predicateOnArray(Array.prototype.some, singlePredicate, values));
    };
    is.all = (predicate, ...values) => predicateOnArray(Array.prototype.every, predicate, values);
    var assertType = (condition, description, value, options = {}) => {
      if (!condition) {
        const { multipleValues } = options;
        const valuesMessage = multipleValues ? `received values of types ${[
          ...new Set(value.map((singleValue) => `\`${is(singleValue)}\``))
        ].join(", ")}` : `received value of type \`${is(value)}\``;
        throw new TypeError(`Expected value which is \`${description}\`, ${valuesMessage}.`);
      }
    };
    exports.assert = {
      undefined: (value) => assertType(is.undefined(value), "undefined", value),
      string: (value) => assertType(is.string(value), "string", value),
      number: (value) => assertType(is.number(value), "number", value),
      bigint: (value) => assertType(is.bigint(value), "bigint", value),
      function_: (value) => assertType(is.function_(value), "Function", value),
      null_: (value) => assertType(is.null_(value), "null", value),
      class_: (value) => assertType(is.class_(value), "Class", value),
      boolean: (value) => assertType(is.boolean(value), "boolean", value),
      symbol: (value) => assertType(is.symbol(value), "symbol", value),
      numericString: (value) => assertType(is.numericString(value), "string with a number", value),
      array: (value, assertion) => {
        const assert = assertType;
        assert(is.array(value), "Array", value);
        if (assertion) {
          value.forEach(assertion);
        }
      },
      buffer: (value) => assertType(is.buffer(value), "Buffer", value),
      blob: (value) => assertType(is.blob(value), "Blob", value),
      nullOrUndefined: (value) => assertType(is.nullOrUndefined(value), "null or undefined", value),
      object: (value) => assertType(is.object(value), "Object", value),
      iterable: (value) => assertType(is.iterable(value), "Iterable", value),
      asyncIterable: (value) => assertType(is.asyncIterable(value), "AsyncIterable", value),
      generator: (value) => assertType(is.generator(value), "Generator", value),
      asyncGenerator: (value) => assertType(is.asyncGenerator(value), "AsyncGenerator", value),
      nativePromise: (value) => assertType(is.nativePromise(value), "native Promise", value),
      promise: (value) => assertType(is.promise(value), "Promise", value),
      generatorFunction: (value) => assertType(is.generatorFunction(value), "GeneratorFunction", value),
      asyncGeneratorFunction: (value) => assertType(is.asyncGeneratorFunction(value), "AsyncGeneratorFunction", value),
      asyncFunction: (value) => assertType(is.asyncFunction(value), "AsyncFunction", value),
      boundFunction: (value) => assertType(is.boundFunction(value), "Function", value),
      regExp: (value) => assertType(is.regExp(value), "RegExp", value),
      date: (value) => assertType(is.date(value), "Date", value),
      error: (value) => assertType(is.error(value), "Error", value),
      map: (value) => assertType(is.map(value), "Map", value),
      set: (value) => assertType(is.set(value), "Set", value),
      weakMap: (value) => assertType(is.weakMap(value), "WeakMap", value),
      weakSet: (value) => assertType(is.weakSet(value), "WeakSet", value),
      int8Array: (value) => assertType(is.int8Array(value), "Int8Array", value),
      uint8Array: (value) => assertType(is.uint8Array(value), "Uint8Array", value),
      uint8ClampedArray: (value) => assertType(is.uint8ClampedArray(value), "Uint8ClampedArray", value),
      int16Array: (value) => assertType(is.int16Array(value), "Int16Array", value),
      uint16Array: (value) => assertType(is.uint16Array(value), "Uint16Array", value),
      int32Array: (value) => assertType(is.int32Array(value), "Int32Array", value),
      uint32Array: (value) => assertType(is.uint32Array(value), "Uint32Array", value),
      float32Array: (value) => assertType(is.float32Array(value), "Float32Array", value),
      float64Array: (value) => assertType(is.float64Array(value), "Float64Array", value),
      bigInt64Array: (value) => assertType(is.bigInt64Array(value), "BigInt64Array", value),
      bigUint64Array: (value) => assertType(is.bigUint64Array(value), "BigUint64Array", value),
      arrayBuffer: (value) => assertType(is.arrayBuffer(value), "ArrayBuffer", value),
      sharedArrayBuffer: (value) => assertType(is.sharedArrayBuffer(value), "SharedArrayBuffer", value),
      dataView: (value) => assertType(is.dataView(value), "DataView", value),
      enumCase: (value, targetEnum) => assertType(is.enumCase(value, targetEnum), "EnumCase", value),
      urlInstance: (value) => assertType(is.urlInstance(value), "URL", value),
      urlString: (value) => assertType(is.urlString(value), "string with a URL", value),
      truthy: (value) => assertType(is.truthy(value), "truthy", value),
      falsy: (value) => assertType(is.falsy(value), "falsy", value),
      nan: (value) => assertType(is.nan(value), "NaN", value),
      primitive: (value) => assertType(is.primitive(value), "primitive", value),
      integer: (value) => assertType(is.integer(value), "integer", value),
      safeInteger: (value) => assertType(is.safeInteger(value), "integer", value),
      plainObject: (value) => assertType(is.plainObject(value), "plain object", value),
      typedArray: (value) => assertType(is.typedArray(value), "TypedArray", value),
      arrayLike: (value) => assertType(is.arrayLike(value), "array-like", value),
      domElement: (value) => assertType(is.domElement(value), "HTMLElement", value),
      observable: (value) => assertType(is.observable(value), "Observable", value),
      nodeStream: (value) => assertType(is.nodeStream(value), "Node.js Stream", value),
      infinite: (value) => assertType(is.infinite(value), "infinite number", value),
      emptyArray: (value) => assertType(is.emptyArray(value), "empty array", value),
      nonEmptyArray: (value) => assertType(is.nonEmptyArray(value), "non-empty array", value),
      emptyString: (value) => assertType(is.emptyString(value), "empty string", value),
      emptyStringOrWhitespace: (value) => assertType(is.emptyStringOrWhitespace(value), "empty string or whitespace", value),
      nonEmptyString: (value) => assertType(is.nonEmptyString(value), "non-empty string", value),
      nonEmptyStringAndNotWhitespace: (value) => assertType(is.nonEmptyStringAndNotWhitespace(value), "non-empty string and not whitespace", value),
      emptyObject: (value) => assertType(is.emptyObject(value), "empty object", value),
      nonEmptyObject: (value) => assertType(is.nonEmptyObject(value), "non-empty object", value),
      emptySet: (value) => assertType(is.emptySet(value), "empty set", value),
      nonEmptySet: (value) => assertType(is.nonEmptySet(value), "non-empty set", value),
      emptyMap: (value) => assertType(is.emptyMap(value), "empty map", value),
      nonEmptyMap: (value) => assertType(is.nonEmptyMap(value), "non-empty map", value),
      propertyKey: (value) => assertType(is.propertyKey(value), "PropertyKey", value),
      formData: (value) => assertType(is.formData(value), "FormData", value),
      urlSearchParams: (value) => assertType(is.urlSearchParams(value), "URLSearchParams", value),
      evenInteger: (value) => assertType(is.evenInteger(value), "even integer", value),
      oddInteger: (value) => assertType(is.oddInteger(value), "odd integer", value),
      directInstanceOf: (instance, class_) => assertType(is.directInstanceOf(instance, class_), "T", instance),
      inRange: (value, range) => assertType(is.inRange(value, range), "in range", value),
      any: (predicate, ...values) => {
        return assertType(is.any(predicate, ...values), "predicate returns truthy for any value", values, { multipleValues: true });
      },
      all: (predicate, ...values) => assertType(is.all(predicate, ...values), "predicate returns truthy for all values", values, { multipleValues: true })
    };
    Object.defineProperties(is, {
      class: {
        value: is.class_
      },
      function: {
        value: is.function_
      },
      null: {
        value: is.null_
      }
    });
    Object.defineProperties(exports.assert, {
      class: {
        value: exports.assert.class_
      },
      function: {
        value: exports.assert.function_
      },
      null: {
        value: exports.assert.null_
      }
    });
    exports.default = is;
    module2.exports = is;
    module2.exports.default = is;
    module2.exports.assert = exports.assert;
  }
});

// api/ably-token-request/node_modules/p-cancelable/index.js
var require_p_cancelable = __commonJS({
  "api/ably-token-request/node_modules/p-cancelable/index.js"(exports, module2) {
    "use strict";
    var CancelError = class extends Error {
      constructor(reason) {
        super(reason || "Promise was canceled");
        this.name = "CancelError";
      }
      get isCanceled() {
        return true;
      }
    };
    var PCancelable = class {
      static fn(userFn) {
        return (...arguments_) => {
          return new PCancelable((resolve, reject, onCancel) => {
            arguments_.push(onCancel);
            userFn(...arguments_).then(resolve, reject);
          });
        };
      }
      constructor(executor) {
        this._cancelHandlers = [];
        this._isPending = true;
        this._isCanceled = false;
        this._rejectOnCancel = true;
        this._promise = new Promise((resolve, reject) => {
          this._reject = reject;
          const onResolve = (value) => {
            if (!this._isCanceled || !onCancel.shouldReject) {
              this._isPending = false;
              resolve(value);
            }
          };
          const onReject = (error) => {
            this._isPending = false;
            reject(error);
          };
          const onCancel = (handler2) => {
            if (!this._isPending) {
              throw new Error("The `onCancel` handler was attached after the promise settled.");
            }
            this._cancelHandlers.push(handler2);
          };
          Object.defineProperties(onCancel, {
            shouldReject: {
              get: () => this._rejectOnCancel,
              set: (boolean) => {
                this._rejectOnCancel = boolean;
              }
            }
          });
          return executor(onResolve, onReject, onCancel);
        });
      }
      then(onFulfilled, onRejected) {
        return this._promise.then(onFulfilled, onRejected);
      }
      catch(onRejected) {
        return this._promise.catch(onRejected);
      }
      finally(onFinally) {
        return this._promise.finally(onFinally);
      }
      cancel(reason) {
        if (!this._isPending || this._isCanceled) {
          return;
        }
        this._isCanceled = true;
        if (this._cancelHandlers.length > 0) {
          try {
            for (const handler2 of this._cancelHandlers) {
              handler2();
            }
          } catch (error) {
            this._reject(error);
            return;
          }
        }
        if (this._rejectOnCancel) {
          this._reject(new CancelError(reason));
        }
      }
      get isCanceled() {
        return this._isCanceled;
      }
    };
    Object.setPrototypeOf(PCancelable.prototype, Promise.prototype);
    module2.exports = PCancelable;
    module2.exports.CancelError = CancelError;
  }
});

// api/ably-token-request/node_modules/defer-to-connect/dist/source/index.js
var require_source = __commonJS({
  "api/ably-token-request/node_modules/defer-to-connect/dist/source/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isTLSSocket(socket) {
      return socket.encrypted;
    }
    var deferToConnect = (socket, fn) => {
      let listeners;
      if (typeof fn === "function") {
        const connect = fn;
        listeners = { connect };
      } else {
        listeners = fn;
      }
      const hasConnectListener = typeof listeners.connect === "function";
      const hasSecureConnectListener = typeof listeners.secureConnect === "function";
      const hasCloseListener = typeof listeners.close === "function";
      const onConnect = () => {
        if (hasConnectListener) {
          listeners.connect();
        }
        if (isTLSSocket(socket) && hasSecureConnectListener) {
          if (socket.authorized) {
            listeners.secureConnect();
          } else if (!socket.authorizationError) {
            socket.once("secureConnect", listeners.secureConnect);
          }
        }
        if (hasCloseListener) {
          socket.once("close", listeners.close);
        }
      };
      if (socket.writable && !socket.connecting) {
        onConnect();
      } else if (socket.connecting) {
        socket.once("connect", onConnect);
      } else if (socket.destroyed && hasCloseListener) {
        listeners.close(socket._hadError);
      }
    };
    exports.default = deferToConnect;
    module2.exports = deferToConnect;
    module2.exports.default = deferToConnect;
  }
});

// api/ably-token-request/node_modules/@szmarczak/http-timer/dist/source/index.js
var require_source2 = __commonJS({
  "api/ably-token-request/node_modules/@szmarczak/http-timer/dist/source/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var defer_to_connect_1 = require_source();
    var util_1 = require("util");
    var nodejsMajorVersion = Number(process.versions.node.split(".")[0]);
    var timer = (request) => {
      if (request.timings) {
        return request.timings;
      }
      const timings = {
        start: Date.now(),
        socket: void 0,
        lookup: void 0,
        connect: void 0,
        secureConnect: void 0,
        upload: void 0,
        response: void 0,
        end: void 0,
        error: void 0,
        abort: void 0,
        phases: {
          wait: void 0,
          dns: void 0,
          tcp: void 0,
          tls: void 0,
          request: void 0,
          firstByte: void 0,
          download: void 0,
          total: void 0
        }
      };
      request.timings = timings;
      const handleError = (origin) => {
        const emit = origin.emit.bind(origin);
        origin.emit = (event, ...args) => {
          if (event === "error") {
            timings.error = Date.now();
            timings.phases.total = timings.error - timings.start;
            origin.emit = emit;
          }
          return emit(event, ...args);
        };
      };
      handleError(request);
      const onAbort = () => {
        timings.abort = Date.now();
        if (!timings.response || nodejsMajorVersion >= 13) {
          timings.phases.total = Date.now() - timings.start;
        }
      };
      request.prependOnceListener("abort", onAbort);
      const onSocket = (socket) => {
        timings.socket = Date.now();
        timings.phases.wait = timings.socket - timings.start;
        if (util_1.types.isProxy(socket)) {
          return;
        }
        const lookupListener = () => {
          timings.lookup = Date.now();
          timings.phases.dns = timings.lookup - timings.socket;
        };
        socket.prependOnceListener("lookup", lookupListener);
        defer_to_connect_1.default(socket, {
          connect: () => {
            timings.connect = Date.now();
            if (timings.lookup === void 0) {
              socket.removeListener("lookup", lookupListener);
              timings.lookup = timings.connect;
              timings.phases.dns = timings.lookup - timings.socket;
            }
            timings.phases.tcp = timings.connect - timings.lookup;
          },
          secureConnect: () => {
            timings.secureConnect = Date.now();
            timings.phases.tls = timings.secureConnect - timings.connect;
          }
        });
      };
      if (request.socket) {
        onSocket(request.socket);
      } else {
        request.prependOnceListener("socket", onSocket);
      }
      const onUpload = () => {
        var _a;
        timings.upload = Date.now();
        timings.phases.request = timings.upload - ((_a = timings.secureConnect) !== null && _a !== void 0 ? _a : timings.connect);
      };
      const writableFinished = () => {
        if (typeof request.writableFinished === "boolean") {
          return request.writableFinished;
        }
        return request.finished && request.outputSize === 0 && (!request.socket || request.socket.writableLength === 0);
      };
      if (writableFinished()) {
        onUpload();
      } else {
        request.prependOnceListener("finish", onUpload);
      }
      request.prependOnceListener("response", (response) => {
        timings.response = Date.now();
        timings.phases.firstByte = timings.response - timings.upload;
        response.timings = timings;
        handleError(response);
        response.prependOnceListener("end", () => {
          timings.end = Date.now();
          timings.phases.download = timings.end - timings.response;
          timings.phases.total = timings.end - timings.start;
        });
        response.prependOnceListener("aborted", onAbort);
      });
      return timings;
    };
    exports.default = timer;
    module2.exports = timer;
    module2.exports.default = timer;
  }
});

// api/ably-token-request/node_modules/cacheable-lookup/source/index.js
var require_source3 = __commonJS({
  "api/ably-token-request/node_modules/cacheable-lookup/source/index.js"(exports, module2) {
    "use strict";
    var {
      V4MAPPED,
      ADDRCONFIG,
      ALL,
      promises: {
        Resolver: AsyncResolver
      },
      lookup: dnsLookup
    } = require("dns");
    var { promisify } = require("util");
    var os = require("os");
    var kCacheableLookupCreateConnection = Symbol("cacheableLookupCreateConnection");
    var kCacheableLookupInstance = Symbol("cacheableLookupInstance");
    var kExpires = Symbol("expires");
    var supportsALL = typeof ALL === "number";
    var verifyAgent = (agent) => {
      if (!(agent && typeof agent.createConnection === "function")) {
        throw new Error("Expected an Agent instance as the first argument");
      }
    };
    var map4to6 = (entries) => {
      for (const entry of entries) {
        if (entry.family === 6) {
          continue;
        }
        entry.address = `::ffff:${entry.address}`;
        entry.family = 6;
      }
    };
    var getIfaceInfo = () => {
      let has4 = false;
      let has6 = false;
      for (const device of Object.values(os.networkInterfaces())) {
        for (const iface of device) {
          if (iface.internal) {
            continue;
          }
          if (iface.family === "IPv6") {
            has6 = true;
          } else {
            has4 = true;
          }
          if (has4 && has6) {
            return { has4, has6 };
          }
        }
      }
      return { has4, has6 };
    };
    var isIterable = (map) => {
      return Symbol.iterator in map;
    };
    var ttl = { ttl: true };
    var all = { all: true };
    var CacheableLookup = class {
      constructor({
        cache = /* @__PURE__ */ new Map(),
        maxTtl = Infinity,
        fallbackDuration = 3600,
        errorTtl = 0.15,
        resolver = new AsyncResolver(),
        lookup = dnsLookup
      } = {}) {
        this.maxTtl = maxTtl;
        this.errorTtl = errorTtl;
        this._cache = cache;
        this._resolver = resolver;
        this._dnsLookup = promisify(lookup);
        if (this._resolver instanceof AsyncResolver) {
          this._resolve4 = this._resolver.resolve4.bind(this._resolver);
          this._resolve6 = this._resolver.resolve6.bind(this._resolver);
        } else {
          this._resolve4 = promisify(this._resolver.resolve4.bind(this._resolver));
          this._resolve6 = promisify(this._resolver.resolve6.bind(this._resolver));
        }
        this._iface = getIfaceInfo();
        this._pending = {};
        this._nextRemovalTime = false;
        this._hostnamesToFallback = /* @__PURE__ */ new Set();
        if (fallbackDuration < 1) {
          this._fallback = false;
        } else {
          this._fallback = true;
          const interval = setInterval(() => {
            this._hostnamesToFallback.clear();
          }, fallbackDuration * 1e3);
          if (interval.unref) {
            interval.unref();
          }
        }
        this.lookup = this.lookup.bind(this);
        this.lookupAsync = this.lookupAsync.bind(this);
      }
      set servers(servers) {
        this.clear();
        this._resolver.setServers(servers);
      }
      get servers() {
        return this._resolver.getServers();
      }
      lookup(hostname, options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = {};
        } else if (typeof options === "number") {
          options = {
            family: options
          };
        }
        if (!callback) {
          throw new Error("Callback must be a function.");
        }
        this.lookupAsync(hostname, options).then((result) => {
          if (options.all) {
            callback(null, result);
          } else {
            callback(null, result.address, result.family, result.expires, result.ttl);
          }
        }, callback);
      }
      async lookupAsync(hostname, options = {}) {
        if (typeof options === "number") {
          options = {
            family: options
          };
        }
        let cached = await this.query(hostname);
        if (options.family === 6) {
          const filtered = cached.filter((entry) => entry.family === 6);
          if (options.hints & V4MAPPED) {
            if (supportsALL && options.hints & ALL || filtered.length === 0) {
              map4to6(cached);
            } else {
              cached = filtered;
            }
          } else {
            cached = filtered;
          }
        } else if (options.family === 4) {
          cached = cached.filter((entry) => entry.family === 4);
        }
        if (options.hints & ADDRCONFIG) {
          const { _iface } = this;
          cached = cached.filter((entry) => entry.family === 6 ? _iface.has6 : _iface.has4);
        }
        if (cached.length === 0) {
          const error = new Error(`cacheableLookup ENOTFOUND ${hostname}`);
          error.code = "ENOTFOUND";
          error.hostname = hostname;
          throw error;
        }
        if (options.all) {
          return cached;
        }
        return cached[0];
      }
      async query(hostname) {
        let cached = await this._cache.get(hostname);
        if (!cached) {
          const pending = this._pending[hostname];
          if (pending) {
            cached = await pending;
          } else {
            const newPromise = this.queryAndCache(hostname);
            this._pending[hostname] = newPromise;
            try {
              cached = await newPromise;
            } finally {
              delete this._pending[hostname];
            }
          }
        }
        cached = cached.map((entry) => {
          return __spreadValues({}, entry);
        });
        return cached;
      }
      async _resolve(hostname) {
        const wrap = async (promise) => {
          try {
            return await promise;
          } catch (error) {
            if (error.code === "ENODATA" || error.code === "ENOTFOUND") {
              return [];
            }
            throw error;
          }
        };
        const [A, AAAA] = await Promise.all([
          this._resolve4(hostname, ttl),
          this._resolve6(hostname, ttl)
        ].map((promise) => wrap(promise)));
        let aTtl = 0;
        let aaaaTtl = 0;
        let cacheTtl = 0;
        const now = Date.now();
        for (const entry of A) {
          entry.family = 4;
          entry.expires = now + entry.ttl * 1e3;
          aTtl = Math.max(aTtl, entry.ttl);
        }
        for (const entry of AAAA) {
          entry.family = 6;
          entry.expires = now + entry.ttl * 1e3;
          aaaaTtl = Math.max(aaaaTtl, entry.ttl);
        }
        if (A.length > 0) {
          if (AAAA.length > 0) {
            cacheTtl = Math.min(aTtl, aaaaTtl);
          } else {
            cacheTtl = aTtl;
          }
        } else {
          cacheTtl = aaaaTtl;
        }
        return {
          entries: [
            ...A,
            ...AAAA
          ],
          cacheTtl
        };
      }
      async _lookup(hostname) {
        try {
          const entries = await this._dnsLookup(hostname, {
            all: true
          });
          return {
            entries,
            cacheTtl: 0
          };
        } catch (_) {
          return {
            entries: [],
            cacheTtl: 0
          };
        }
      }
      async _set(hostname, data, cacheTtl) {
        if (this.maxTtl > 0 && cacheTtl > 0) {
          cacheTtl = Math.min(cacheTtl, this.maxTtl) * 1e3;
          data[kExpires] = Date.now() + cacheTtl;
          try {
            await this._cache.set(hostname, data, cacheTtl);
          } catch (error) {
            this.lookupAsync = async () => {
              const cacheError = new Error("Cache Error. Please recreate the CacheableLookup instance.");
              cacheError.cause = error;
              throw cacheError;
            };
          }
          if (isIterable(this._cache)) {
            this._tick(cacheTtl);
          }
        }
      }
      async queryAndCache(hostname) {
        if (this._hostnamesToFallback.has(hostname)) {
          return this._dnsLookup(hostname, all);
        }
        let query = await this._resolve(hostname);
        if (query.entries.length === 0 && this._fallback) {
          query = await this._lookup(hostname);
          if (query.entries.length !== 0) {
            this._hostnamesToFallback.add(hostname);
          }
        }
        const cacheTtl = query.entries.length === 0 ? this.errorTtl : query.cacheTtl;
        await this._set(hostname, query.entries, cacheTtl);
        return query.entries;
      }
      _tick(ms) {
        const nextRemovalTime = this._nextRemovalTime;
        if (!nextRemovalTime || ms < nextRemovalTime) {
          clearTimeout(this._removalTimeout);
          this._nextRemovalTime = ms;
          this._removalTimeout = setTimeout(() => {
            this._nextRemovalTime = false;
            let nextExpiry = Infinity;
            const now = Date.now();
            for (const [hostname, entries] of this._cache) {
              const expires = entries[kExpires];
              if (now >= expires) {
                this._cache.delete(hostname);
              } else if (expires < nextExpiry) {
                nextExpiry = expires;
              }
            }
            if (nextExpiry !== Infinity) {
              this._tick(nextExpiry - now);
            }
          }, ms);
          if (this._removalTimeout.unref) {
            this._removalTimeout.unref();
          }
        }
      }
      install(agent) {
        verifyAgent(agent);
        if (kCacheableLookupCreateConnection in agent) {
          throw new Error("CacheableLookup has been already installed");
        }
        agent[kCacheableLookupCreateConnection] = agent.createConnection;
        agent[kCacheableLookupInstance] = this;
        agent.createConnection = (options, callback) => {
          if (!("lookup" in options)) {
            options.lookup = this.lookup;
          }
          return agent[kCacheableLookupCreateConnection](options, callback);
        };
      }
      uninstall(agent) {
        verifyAgent(agent);
        if (agent[kCacheableLookupCreateConnection]) {
          if (agent[kCacheableLookupInstance] !== this) {
            throw new Error("The agent is not owned by this CacheableLookup instance");
          }
          agent.createConnection = agent[kCacheableLookupCreateConnection];
          delete agent[kCacheableLookupCreateConnection];
          delete agent[kCacheableLookupInstance];
        }
      }
      updateInterfaceInfo() {
        const { _iface } = this;
        this._iface = getIfaceInfo();
        if (_iface.has4 && !this._iface.has4 || _iface.has6 && !this._iface.has6) {
          this._cache.clear();
        }
      }
      clear(hostname) {
        if (hostname) {
          this._cache.delete(hostname);
          return;
        }
        this._cache.clear();
      }
    };
    module2.exports = CacheableLookup;
    module2.exports.default = CacheableLookup;
  }
});

// api/ably-token-request/node_modules/normalize-url/index.js
var require_normalize_url = __commonJS({
  "api/ably-token-request/node_modules/normalize-url/index.js"(exports, module2) {
    "use strict";
    var DATA_URL_DEFAULT_MIME_TYPE = "text/plain";
    var DATA_URL_DEFAULT_CHARSET = "us-ascii";
    var testParameter = (name, filters) => {
      return filters.some((filter) => filter instanceof RegExp ? filter.test(name) : filter === name);
    };
    var normalizeDataURL = (urlString, { stripHash }) => {
      const match = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(urlString);
      if (!match) {
        throw new Error(`Invalid URL: ${urlString}`);
      }
      let { type, data, hash } = match.groups;
      const mediaType = type.split(";");
      hash = stripHash ? "" : hash;
      let isBase64 = false;
      if (mediaType[mediaType.length - 1] === "base64") {
        mediaType.pop();
        isBase64 = true;
      }
      const mimeType = (mediaType.shift() || "").toLowerCase();
      const attributes = mediaType.map((attribute) => {
        let [key, value = ""] = attribute.split("=").map((string) => string.trim());
        if (key === "charset") {
          value = value.toLowerCase();
          if (value === DATA_URL_DEFAULT_CHARSET) {
            return "";
          }
        }
        return `${key}${value ? `=${value}` : ""}`;
      }).filter(Boolean);
      const normalizedMediaType = [
        ...attributes
      ];
      if (isBase64) {
        normalizedMediaType.push("base64");
      }
      if (normalizedMediaType.length !== 0 || mimeType && mimeType !== DATA_URL_DEFAULT_MIME_TYPE) {
        normalizedMediaType.unshift(mimeType);
      }
      return `data:${normalizedMediaType.join(";")},${isBase64 ? data.trim() : data}${hash ? `#${hash}` : ""}`;
    };
    var normalizeUrl = (urlString, options) => {
      options = __spreadValues({
        defaultProtocol: "http:",
        normalizeProtocol: true,
        forceHttp: false,
        forceHttps: false,
        stripAuthentication: true,
        stripHash: false,
        stripTextFragment: true,
        stripWWW: true,
        removeQueryParameters: [/^utm_\w+/i],
        removeTrailingSlash: true,
        removeSingleSlash: true,
        removeDirectoryIndex: false,
        sortQueryParameters: true
      }, options);
      urlString = urlString.trim();
      if (/^data:/i.test(urlString)) {
        return normalizeDataURL(urlString, options);
      }
      if (/^view-source:/i.test(urlString)) {
        throw new Error("`view-source:` is not supported as it is a non-standard protocol");
      }
      const hasRelativeProtocol = urlString.startsWith("//");
      const isRelativeUrl = !hasRelativeProtocol && /^\.*\//.test(urlString);
      if (!isRelativeUrl) {
        urlString = urlString.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, options.defaultProtocol);
      }
      const urlObj = new URL(urlString);
      if (options.forceHttp && options.forceHttps) {
        throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");
      }
      if (options.forceHttp && urlObj.protocol === "https:") {
        urlObj.protocol = "http:";
      }
      if (options.forceHttps && urlObj.protocol === "http:") {
        urlObj.protocol = "https:";
      }
      if (options.stripAuthentication) {
        urlObj.username = "";
        urlObj.password = "";
      }
      if (options.stripHash) {
        urlObj.hash = "";
      } else if (options.stripTextFragment) {
        urlObj.hash = urlObj.hash.replace(/#?:~:text.*?$/i, "");
      }
      if (urlObj.pathname) {
        urlObj.pathname = urlObj.pathname.replace(/(?<!\b(?:[a-z][a-z\d+\-.]{1,50}:))\/{2,}/g, "/");
      }
      if (urlObj.pathname) {
        try {
          urlObj.pathname = decodeURI(urlObj.pathname);
        } catch (_) {
        }
      }
      if (options.removeDirectoryIndex === true) {
        options.removeDirectoryIndex = [/^index\.[a-z]+$/];
      }
      if (Array.isArray(options.removeDirectoryIndex) && options.removeDirectoryIndex.length > 0) {
        let pathComponents = urlObj.pathname.split("/");
        const lastComponent = pathComponents[pathComponents.length - 1];
        if (testParameter(lastComponent, options.removeDirectoryIndex)) {
          pathComponents = pathComponents.slice(0, pathComponents.length - 1);
          urlObj.pathname = pathComponents.slice(1).join("/") + "/";
        }
      }
      if (urlObj.hostname) {
        urlObj.hostname = urlObj.hostname.replace(/\.$/, "");
        if (options.stripWWW && /^www\.(?!www\.)(?:[a-z\-\d]{1,63})\.(?:[a-z.\-\d]{2,63})$/.test(urlObj.hostname)) {
          urlObj.hostname = urlObj.hostname.replace(/^www\./, "");
        }
      }
      if (Array.isArray(options.removeQueryParameters)) {
        for (const key of [...urlObj.searchParams.keys()]) {
          if (testParameter(key, options.removeQueryParameters)) {
            urlObj.searchParams.delete(key);
          }
        }
      }
      if (options.removeQueryParameters === true) {
        urlObj.search = "";
      }
      if (options.sortQueryParameters) {
        urlObj.searchParams.sort();
      }
      if (options.removeTrailingSlash) {
        urlObj.pathname = urlObj.pathname.replace(/\/$/, "");
      }
      const oldUrlString = urlString;
      urlString = urlObj.toString();
      if (!options.removeSingleSlash && urlObj.pathname === "/" && !oldUrlString.endsWith("/") && urlObj.hash === "") {
        urlString = urlString.replace(/\/$/, "");
      }
      if ((options.removeTrailingSlash || urlObj.pathname === "/") && urlObj.hash === "" && options.removeSingleSlash) {
        urlString = urlString.replace(/\/$/, "");
      }
      if (hasRelativeProtocol && !options.normalizeProtocol) {
        urlString = urlString.replace(/^http:\/\//, "//");
      }
      if (options.stripProtocol) {
        urlString = urlString.replace(/^(?:https?:)?\/\//, "");
      }
      return urlString;
    };
    module2.exports = normalizeUrl;
  }
});

// api/ably-token-request/node_modules/wrappy/wrappy.js
var require_wrappy = __commonJS({
  "api/ably-token-request/node_modules/wrappy/wrappy.js"(exports, module2) {
    module2.exports = wrappy;
    function wrappy(fn, cb) {
      if (fn && cb)
        return wrappy(fn)(cb);
      if (typeof fn !== "function")
        throw new TypeError("need wrapper function");
      Object.keys(fn).forEach(function(k) {
        wrapper[k] = fn[k];
      });
      return wrapper;
      function wrapper() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        var ret = fn.apply(this, args);
        var cb2 = args[args.length - 1];
        if (typeof ret === "function" && ret !== cb2) {
          Object.keys(cb2).forEach(function(k) {
            ret[k] = cb2[k];
          });
        }
        return ret;
      }
    }
  }
});

// api/ably-token-request/node_modules/once/once.js
var require_once = __commonJS({
  "api/ably-token-request/node_modules/once/once.js"(exports, module2) {
    var wrappy = require_wrappy();
    module2.exports = wrappy(once);
    module2.exports.strict = wrappy(onceStrict);
    once.proto = once(function() {
      Object.defineProperty(Function.prototype, "once", {
        value: function() {
          return once(this);
        },
        configurable: true
      });
      Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
          return onceStrict(this);
        },
        configurable: true
      });
    });
    function once(fn) {
      var f = function() {
        if (f.called)
          return f.value;
        f.called = true;
        return f.value = fn.apply(this, arguments);
      };
      f.called = false;
      return f;
    }
    function onceStrict(fn) {
      var f = function() {
        if (f.called)
          throw new Error(f.onceError);
        f.called = true;
        return f.value = fn.apply(this, arguments);
      };
      var name = fn.name || "Function wrapped with `once`";
      f.onceError = name + " shouldn't be called more than once";
      f.called = false;
      return f;
    }
  }
});

// api/ably-token-request/node_modules/end-of-stream/index.js
var require_end_of_stream = __commonJS({
  "api/ably-token-request/node_modules/end-of-stream/index.js"(exports, module2) {
    var once = require_once();
    var noop = function() {
    };
    var isRequest = function(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    };
    var isChildProcess = function(stream) {
      return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3;
    };
    var eos = function(stream, opts, callback) {
      if (typeof opts === "function")
        return eos(stream, null, opts);
      if (!opts)
        opts = {};
      callback = once(callback || noop);
      var ws = stream._writableState;
      var rs = stream._readableState;
      var readable = opts.readable || opts.readable !== false && stream.readable;
      var writable = opts.writable || opts.writable !== false && stream.writable;
      var cancelled = false;
      var onlegacyfinish = function() {
        if (!stream.writable)
          onfinish();
      };
      var onfinish = function() {
        writable = false;
        if (!readable)
          callback.call(stream);
      };
      var onend = function() {
        readable = false;
        if (!writable)
          callback.call(stream);
      };
      var onexit = function(exitCode) {
        callback.call(stream, exitCode ? new Error("exited with error code: " + exitCode) : null);
      };
      var onerror = function(err) {
        callback.call(stream, err);
      };
      var onclose = function() {
        process.nextTick(onclosenexttick);
      };
      var onclosenexttick = function() {
        if (cancelled)
          return;
        if (readable && !(rs && (rs.ended && !rs.destroyed)))
          return callback.call(stream, new Error("premature close"));
        if (writable && !(ws && (ws.ended && !ws.destroyed)))
          return callback.call(stream, new Error("premature close"));
      };
      var onrequest = function() {
        stream.req.on("finish", onfinish);
      };
      if (isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req)
          onrequest();
        else
          stream.on("request", onrequest);
      } else if (writable && !ws) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
      }
      if (isChildProcess(stream))
        stream.on("exit", onexit);
      stream.on("end", onend);
      stream.on("finish", onfinish);
      if (opts.error !== false)
        stream.on("error", onerror);
      stream.on("close", onclose);
      return function() {
        cancelled = true;
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req)
          stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("exit", onexit);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
      };
    };
    module2.exports = eos;
  }
});

// api/ably-token-request/node_modules/pump/index.js
var require_pump = __commonJS({
  "api/ably-token-request/node_modules/pump/index.js"(exports, module2) {
    var once = require_once();
    var eos = require_end_of_stream();
    var fs = require("fs");
    var noop = function() {
    };
    var ancient = /^v?\.0/.test(process.version);
    var isFn = function(fn) {
      return typeof fn === "function";
    };
    var isFS = function(stream) {
      if (!ancient)
        return false;
      if (!fs)
        return false;
      return (stream instanceof (fs.ReadStream || noop) || stream instanceof (fs.WriteStream || noop)) && isFn(stream.close);
    };
    var isRequest = function(stream) {
      return stream.setHeader && isFn(stream.abort);
    };
    var destroyer = function(stream, reading, writing, callback) {
      callback = once(callback);
      var closed = false;
      stream.on("close", function() {
        closed = true;
      });
      eos(stream, { readable: reading, writable: writing }, function(err) {
        if (err)
          return callback(err);
        closed = true;
        callback();
      });
      var destroyed = false;
      return function(err) {
        if (closed)
          return;
        if (destroyed)
          return;
        destroyed = true;
        if (isFS(stream))
          return stream.close(noop);
        if (isRequest(stream))
          return stream.abort();
        if (isFn(stream.destroy))
          return stream.destroy();
        callback(err || new Error("stream was destroyed"));
      };
    };
    var call = function(fn) {
      fn();
    };
    var pipe = function(from, to) {
      return from.pipe(to);
    };
    var pump = function() {
      var streams = Array.prototype.slice.call(arguments);
      var callback = isFn(streams[streams.length - 1] || noop) && streams.pop() || noop;
      if (Array.isArray(streams[0]))
        streams = streams[0];
      if (streams.length < 2)
        throw new Error("pump requires two streams per minimum");
      var error;
      var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
          if (!error)
            error = err;
          if (err)
            destroys.forEach(call);
          if (reading)
            return;
          destroys.forEach(call);
          callback(error);
        });
      });
      return streams.reduce(pipe);
    };
    module2.exports = pump;
  }
});

// api/ably-token-request/node_modules/get-stream/buffer-stream.js
var require_buffer_stream = __commonJS({
  "api/ably-token-request/node_modules/get-stream/buffer-stream.js"(exports, module2) {
    "use strict";
    var { PassThrough: PassThroughStream } = require("stream");
    module2.exports = (options) => {
      options = __spreadValues({}, options);
      const { array } = options;
      let { encoding } = options;
      const isBuffer = encoding === "buffer";
      let objectMode = false;
      if (array) {
        objectMode = !(encoding || isBuffer);
      } else {
        encoding = encoding || "utf8";
      }
      if (isBuffer) {
        encoding = null;
      }
      const stream = new PassThroughStream({ objectMode });
      if (encoding) {
        stream.setEncoding(encoding);
      }
      let length = 0;
      const chunks = [];
      stream.on("data", (chunk) => {
        chunks.push(chunk);
        if (objectMode) {
          length = chunks.length;
        } else {
          length += chunk.length;
        }
      });
      stream.getBufferedValue = () => {
        if (array) {
          return chunks;
        }
        return isBuffer ? Buffer.concat(chunks, length) : chunks.join("");
      };
      stream.getBufferedLength = () => length;
      return stream;
    };
  }
});

// api/ably-token-request/node_modules/get-stream/index.js
var require_get_stream = __commonJS({
  "api/ably-token-request/node_modules/get-stream/index.js"(exports, module2) {
    "use strict";
    var { constants: BufferConstants } = require("buffer");
    var pump = require_pump();
    var bufferStream = require_buffer_stream();
    var MaxBufferError = class extends Error {
      constructor() {
        super("maxBuffer exceeded");
        this.name = "MaxBufferError";
      }
    };
    async function getStream(inputStream, options) {
      if (!inputStream) {
        return Promise.reject(new Error("Expected a stream"));
      }
      options = __spreadValues({
        maxBuffer: Infinity
      }, options);
      const { maxBuffer } = options;
      let stream;
      await new Promise((resolve, reject) => {
        const rejectPromise = (error) => {
          if (error && stream.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
            error.bufferedData = stream.getBufferedValue();
          }
          reject(error);
        };
        stream = pump(inputStream, bufferStream(options), (error) => {
          if (error) {
            rejectPromise(error);
            return;
          }
          resolve();
        });
        stream.on("data", () => {
          if (stream.getBufferedLength() > maxBuffer) {
            rejectPromise(new MaxBufferError());
          }
        });
      });
      return stream.getBufferedValue();
    }
    module2.exports = getStream;
    module2.exports.default = getStream;
    module2.exports.buffer = (stream, options) => getStream(stream, __spreadProps(__spreadValues({}, options), { encoding: "buffer" }));
    module2.exports.array = (stream, options) => getStream(stream, __spreadProps(__spreadValues({}, options), { array: true }));
    module2.exports.MaxBufferError = MaxBufferError;
  }
});

// api/ably-token-request/node_modules/http-cache-semantics/index.js
var require_http_cache_semantics = __commonJS({
  "api/ably-token-request/node_modules/http-cache-semantics/index.js"(exports, module2) {
    "use strict";
    var statusCodeCacheableByDefault = /* @__PURE__ */ new Set([
      200,
      203,
      204,
      206,
      300,
      301,
      404,
      405,
      410,
      414,
      501
    ]);
    var understoodStatuses = /* @__PURE__ */ new Set([
      200,
      203,
      204,
      300,
      301,
      302,
      303,
      307,
      308,
      404,
      405,
      410,
      414,
      501
    ]);
    var errorStatusCodes = /* @__PURE__ */ new Set([
      500,
      502,
      503,
      504
    ]);
    var hopByHopHeaders = {
      date: true,
      connection: true,
      "keep-alive": true,
      "proxy-authenticate": true,
      "proxy-authorization": true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true
    };
    var excludedFromRevalidationUpdate = {
      "content-length": true,
      "content-encoding": true,
      "transfer-encoding": true,
      "content-range": true
    };
    function toNumberOrZero(s) {
      const n = parseInt(s, 10);
      return isFinite(n) ? n : 0;
    }
    function isErrorResponse(response) {
      if (!response) {
        return true;
      }
      return errorStatusCodes.has(response.status);
    }
    function parseCacheControl(header) {
      const cc = {};
      if (!header)
        return cc;
      const parts = header.trim().split(/\s*,\s*/);
      for (const part of parts) {
        const [k, v] = part.split(/\s*=\s*/, 2);
        cc[k] = v === void 0 ? true : v.replace(/^"|"$/g, "");
      }
      return cc;
    }
    function formatCacheControl(cc) {
      let parts = [];
      for (const k in cc) {
        const v = cc[k];
        parts.push(v === true ? k : k + "=" + v);
      }
      if (!parts.length) {
        return void 0;
      }
      return parts.join(", ");
    }
    module2.exports = class CachePolicy {
      constructor(req, res, {
        shared,
        cacheHeuristic,
        immutableMinTimeToLive,
        ignoreCargoCult,
        _fromObject
      } = {}) {
        if (_fromObject) {
          this._fromObject(_fromObject);
          return;
        }
        if (!res || !res.headers) {
          throw Error("Response headers missing");
        }
        this._assertRequestHasHeaders(req);
        this._responseTime = this.now();
        this._isShared = shared !== false;
        this._cacheHeuristic = cacheHeuristic !== void 0 ? cacheHeuristic : 0.1;
        this._immutableMinTtl = immutableMinTimeToLive !== void 0 ? immutableMinTimeToLive : 24 * 3600 * 1e3;
        this._status = "status" in res ? res.status : 200;
        this._resHeaders = res.headers;
        this._rescc = parseCacheControl(res.headers["cache-control"]);
        this._method = "method" in req ? req.method : "GET";
        this._url = req.url;
        this._host = req.headers.host;
        this._noAuthorization = !req.headers.authorization;
        this._reqHeaders = res.headers.vary ? req.headers : null;
        this._reqcc = parseCacheControl(req.headers["cache-control"]);
        if (ignoreCargoCult && "pre-check" in this._rescc && "post-check" in this._rescc) {
          delete this._rescc["pre-check"];
          delete this._rescc["post-check"];
          delete this._rescc["no-cache"];
          delete this._rescc["no-store"];
          delete this._rescc["must-revalidate"];
          this._resHeaders = Object.assign({}, this._resHeaders, {
            "cache-control": formatCacheControl(this._rescc)
          });
          delete this._resHeaders.expires;
          delete this._resHeaders.pragma;
        }
        if (res.headers["cache-control"] == null && /no-cache/.test(res.headers.pragma)) {
          this._rescc["no-cache"] = true;
        }
      }
      now() {
        return Date.now();
      }
      storable() {
        return !!(!this._reqcc["no-store"] && (this._method === "GET" || this._method === "HEAD" || this._method === "POST" && this._hasExplicitExpiration()) && understoodStatuses.has(this._status) && !this._rescc["no-store"] && (!this._isShared || !this._rescc.private) && (!this._isShared || this._noAuthorization || this._allowsStoringAuthenticated()) && (this._resHeaders.expires || this._rescc["max-age"] || this._isShared && this._rescc["s-maxage"] || this._rescc.public || statusCodeCacheableByDefault.has(this._status)));
      }
      _hasExplicitExpiration() {
        return this._isShared && this._rescc["s-maxage"] || this._rescc["max-age"] || this._resHeaders.expires;
      }
      _assertRequestHasHeaders(req) {
        if (!req || !req.headers) {
          throw Error("Request headers missing");
        }
      }
      satisfiesWithoutRevalidation(req) {
        this._assertRequestHasHeaders(req);
        const requestCC = parseCacheControl(req.headers["cache-control"]);
        if (requestCC["no-cache"] || /no-cache/.test(req.headers.pragma)) {
          return false;
        }
        if (requestCC["max-age"] && this.age() > requestCC["max-age"]) {
          return false;
        }
        if (requestCC["min-fresh"] && this.timeToLive() < 1e3 * requestCC["min-fresh"]) {
          return false;
        }
        if (this.stale()) {
          const allowsStale = requestCC["max-stale"] && !this._rescc["must-revalidate"] && (requestCC["max-stale"] === true || requestCC["max-stale"] > this.age() - this.maxAge());
          if (!allowsStale) {
            return false;
          }
        }
        return this._requestMatches(req, false);
      }
      _requestMatches(req, allowHeadMethod) {
        return (!this._url || this._url === req.url) && this._host === req.headers.host && (!req.method || this._method === req.method || allowHeadMethod && req.method === "HEAD") && this._varyMatches(req);
      }
      _allowsStoringAuthenticated() {
        return this._rescc["must-revalidate"] || this._rescc.public || this._rescc["s-maxage"];
      }
      _varyMatches(req) {
        if (!this._resHeaders.vary) {
          return true;
        }
        if (this._resHeaders.vary === "*") {
          return false;
        }
        const fields = this._resHeaders.vary.trim().toLowerCase().split(/\s*,\s*/);
        for (const name of fields) {
          if (req.headers[name] !== this._reqHeaders[name])
            return false;
        }
        return true;
      }
      _copyWithoutHopByHopHeaders(inHeaders) {
        const headers = {};
        for (const name in inHeaders) {
          if (hopByHopHeaders[name])
            continue;
          headers[name] = inHeaders[name];
        }
        if (inHeaders.connection) {
          const tokens = inHeaders.connection.trim().split(/\s*,\s*/);
          for (const name of tokens) {
            delete headers[name];
          }
        }
        if (headers.warning) {
          const warnings = headers.warning.split(/,/).filter((warning) => {
            return !/^\s*1[0-9][0-9]/.test(warning);
          });
          if (!warnings.length) {
            delete headers.warning;
          } else {
            headers.warning = warnings.join(",").trim();
          }
        }
        return headers;
      }
      responseHeaders() {
        const headers = this._copyWithoutHopByHopHeaders(this._resHeaders);
        const age = this.age();
        if (age > 3600 * 24 && !this._hasExplicitExpiration() && this.maxAge() > 3600 * 24) {
          headers.warning = (headers.warning ? `${headers.warning}, ` : "") + '113 - "rfc7234 5.5.4"';
        }
        headers.age = `${Math.round(age)}`;
        headers.date = new Date(this.now()).toUTCString();
        return headers;
      }
      date() {
        const serverDate = Date.parse(this._resHeaders.date);
        if (isFinite(serverDate)) {
          return serverDate;
        }
        return this._responseTime;
      }
      age() {
        let age = this._ageValue();
        const residentTime = (this.now() - this._responseTime) / 1e3;
        return age + residentTime;
      }
      _ageValue() {
        return toNumberOrZero(this._resHeaders.age);
      }
      maxAge() {
        if (!this.storable() || this._rescc["no-cache"]) {
          return 0;
        }
        if (this._isShared && (this._resHeaders["set-cookie"] && !this._rescc.public && !this._rescc.immutable)) {
          return 0;
        }
        if (this._resHeaders.vary === "*") {
          return 0;
        }
        if (this._isShared) {
          if (this._rescc["proxy-revalidate"]) {
            return 0;
          }
          if (this._rescc["s-maxage"]) {
            return toNumberOrZero(this._rescc["s-maxage"]);
          }
        }
        if (this._rescc["max-age"]) {
          return toNumberOrZero(this._rescc["max-age"]);
        }
        const defaultMinTtl = this._rescc.immutable ? this._immutableMinTtl : 0;
        const serverDate = this.date();
        if (this._resHeaders.expires) {
          const expires = Date.parse(this._resHeaders.expires);
          if (Number.isNaN(expires) || expires < serverDate) {
            return 0;
          }
          return Math.max(defaultMinTtl, (expires - serverDate) / 1e3);
        }
        if (this._resHeaders["last-modified"]) {
          const lastModified = Date.parse(this._resHeaders["last-modified"]);
          if (isFinite(lastModified) && serverDate > lastModified) {
            return Math.max(defaultMinTtl, (serverDate - lastModified) / 1e3 * this._cacheHeuristic);
          }
        }
        return defaultMinTtl;
      }
      timeToLive() {
        const age = this.maxAge() - this.age();
        const staleIfErrorAge = age + toNumberOrZero(this._rescc["stale-if-error"]);
        const staleWhileRevalidateAge = age + toNumberOrZero(this._rescc["stale-while-revalidate"]);
        return Math.max(0, age, staleIfErrorAge, staleWhileRevalidateAge) * 1e3;
      }
      stale() {
        return this.maxAge() <= this.age();
      }
      _useStaleIfError() {
        return this.maxAge() + toNumberOrZero(this._rescc["stale-if-error"]) > this.age();
      }
      useStaleWhileRevalidate() {
        return this.maxAge() + toNumberOrZero(this._rescc["stale-while-revalidate"]) > this.age();
      }
      static fromObject(obj) {
        return new this(void 0, void 0, { _fromObject: obj });
      }
      _fromObject(obj) {
        if (this._responseTime)
          throw Error("Reinitialized");
        if (!obj || obj.v !== 1)
          throw Error("Invalid serialization");
        this._responseTime = obj.t;
        this._isShared = obj.sh;
        this._cacheHeuristic = obj.ch;
        this._immutableMinTtl = obj.imm !== void 0 ? obj.imm : 24 * 3600 * 1e3;
        this._status = obj.st;
        this._resHeaders = obj.resh;
        this._rescc = obj.rescc;
        this._method = obj.m;
        this._url = obj.u;
        this._host = obj.h;
        this._noAuthorization = obj.a;
        this._reqHeaders = obj.reqh;
        this._reqcc = obj.reqcc;
      }
      toObject() {
        return {
          v: 1,
          t: this._responseTime,
          sh: this._isShared,
          ch: this._cacheHeuristic,
          imm: this._immutableMinTtl,
          st: this._status,
          resh: this._resHeaders,
          rescc: this._rescc,
          m: this._method,
          u: this._url,
          h: this._host,
          a: this._noAuthorization,
          reqh: this._reqHeaders,
          reqcc: this._reqcc
        };
      }
      revalidationHeaders(incomingReq) {
        this._assertRequestHasHeaders(incomingReq);
        const headers = this._copyWithoutHopByHopHeaders(incomingReq.headers);
        delete headers["if-range"];
        if (!this._requestMatches(incomingReq, true) || !this.storable()) {
          delete headers["if-none-match"];
          delete headers["if-modified-since"];
          return headers;
        }
        if (this._resHeaders.etag) {
          headers["if-none-match"] = headers["if-none-match"] ? `${headers["if-none-match"]}, ${this._resHeaders.etag}` : this._resHeaders.etag;
        }
        const forbidsWeakValidators = headers["accept-ranges"] || headers["if-match"] || headers["if-unmodified-since"] || this._method && this._method != "GET";
        if (forbidsWeakValidators) {
          delete headers["if-modified-since"];
          if (headers["if-none-match"]) {
            const etags = headers["if-none-match"].split(/,/).filter((etag) => {
              return !/^\s*W\//.test(etag);
            });
            if (!etags.length) {
              delete headers["if-none-match"];
            } else {
              headers["if-none-match"] = etags.join(",").trim();
            }
          }
        } else if (this._resHeaders["last-modified"] && !headers["if-modified-since"]) {
          headers["if-modified-since"] = this._resHeaders["last-modified"];
        }
        return headers;
      }
      revalidatedPolicy(request, response) {
        this._assertRequestHasHeaders(request);
        if (this._useStaleIfError() && isErrorResponse(response)) {
          return {
            modified: false,
            matches: false,
            policy: this
          };
        }
        if (!response || !response.headers) {
          throw Error("Response headers missing");
        }
        let matches = false;
        if (response.status !== void 0 && response.status != 304) {
          matches = false;
        } else if (response.headers.etag && !/^\s*W\//.test(response.headers.etag)) {
          matches = this._resHeaders.etag && this._resHeaders.etag.replace(/^\s*W\//, "") === response.headers.etag;
        } else if (this._resHeaders.etag && response.headers.etag) {
          matches = this._resHeaders.etag.replace(/^\s*W\//, "") === response.headers.etag.replace(/^\s*W\//, "");
        } else if (this._resHeaders["last-modified"]) {
          matches = this._resHeaders["last-modified"] === response.headers["last-modified"];
        } else {
          if (!this._resHeaders.etag && !this._resHeaders["last-modified"] && !response.headers.etag && !response.headers["last-modified"]) {
            matches = true;
          }
        }
        if (!matches) {
          return {
            policy: new this.constructor(request, response),
            modified: response.status != 304,
            matches: false
          };
        }
        const headers = {};
        for (const k in this._resHeaders) {
          headers[k] = k in response.headers && !excludedFromRevalidationUpdate[k] ? response.headers[k] : this._resHeaders[k];
        }
        const newResponse = Object.assign({}, response, {
          status: this._status,
          method: this._method,
          headers
        });
        return {
          policy: new this.constructor(request, newResponse, {
            shared: this._isShared,
            cacheHeuristic: this._cacheHeuristic,
            immutableMinTimeToLive: this._immutableMinTtl
          }),
          modified: false,
          matches: true
        };
      }
    };
  }
});

// api/ably-token-request/node_modules/lowercase-keys/index.js
var require_lowercase_keys = __commonJS({
  "api/ably-token-request/node_modules/lowercase-keys/index.js"(exports, module2) {
    "use strict";
    module2.exports = (object) => {
      const result = {};
      for (const [key, value] of Object.entries(object)) {
        result[key.toLowerCase()] = value;
      }
      return result;
    };
  }
});

// api/ably-token-request/node_modules/responselike/src/index.js
var require_src = __commonJS({
  "api/ably-token-request/node_modules/responselike/src/index.js"(exports, module2) {
    "use strict";
    var Readable = require("stream").Readable;
    var lowercaseKeys = require_lowercase_keys();
    var Response = class extends Readable {
      constructor(statusCode, headers, body, url) {
        if (typeof statusCode !== "number") {
          throw new TypeError("Argument `statusCode` should be a number");
        }
        if (typeof headers !== "object") {
          throw new TypeError("Argument `headers` should be an object");
        }
        if (!(body instanceof Buffer)) {
          throw new TypeError("Argument `body` should be a buffer");
        }
        if (typeof url !== "string") {
          throw new TypeError("Argument `url` should be a string");
        }
        super();
        this.statusCode = statusCode;
        this.headers = lowercaseKeys(headers);
        this.body = body;
        this.url = url;
      }
      _read() {
        this.push(this.body);
        this.push(null);
      }
    };
    module2.exports = Response;
  }
});

// api/ably-token-request/node_modules/mimic-response/index.js
var require_mimic_response = __commonJS({
  "api/ably-token-request/node_modules/mimic-response/index.js"(exports, module2) {
    "use strict";
    var knownProps = [
      "destroy",
      "setTimeout",
      "socket",
      "headers",
      "trailers",
      "rawHeaders",
      "statusCode",
      "httpVersion",
      "httpVersionMinor",
      "httpVersionMajor",
      "rawTrailers",
      "statusMessage"
    ];
    module2.exports = (fromStream, toStream) => {
      const fromProps = new Set(Object.keys(fromStream).concat(knownProps));
      for (const prop of fromProps) {
        if (prop in toStream) {
          continue;
        }
        toStream[prop] = typeof fromStream[prop] === "function" ? fromStream[prop].bind(fromStream) : fromStream[prop];
      }
    };
  }
});

// api/ably-token-request/node_modules/clone-response/src/index.js
var require_src2 = __commonJS({
  "api/ably-token-request/node_modules/clone-response/src/index.js"(exports, module2) {
    "use strict";
    var PassThrough = require("stream").PassThrough;
    var mimicResponse = require_mimic_response();
    var cloneResponse = (response) => {
      if (!(response && response.pipe)) {
        throw new TypeError("Parameter `response` must be a response stream.");
      }
      const clone = new PassThrough();
      mimicResponse(response, clone);
      return response.pipe(clone);
    };
    module2.exports = cloneResponse;
  }
});

// api/ably-token-request/node_modules/json-buffer/index.js
var require_json_buffer = __commonJS({
  "api/ably-token-request/node_modules/json-buffer/index.js"(exports) {
    exports.stringify = function stringify(o) {
      if (typeof o == "undefined")
        return o;
      if (o && Buffer.isBuffer(o))
        return JSON.stringify(":base64:" + o.toString("base64"));
      if (o && o.toJSON)
        o = o.toJSON();
      if (o && typeof o === "object") {
        var s = "";
        var array = Array.isArray(o);
        s = array ? "[" : "{";
        var first = true;
        for (var k in o) {
          var ignore = typeof o[k] == "function" || !array && typeof o[k] === "undefined";
          if (Object.hasOwnProperty.call(o, k) && !ignore) {
            if (!first)
              s += ",";
            first = false;
            if (array) {
              if (o[k] == void 0)
                s += "null";
              else
                s += stringify(o[k]);
            } else if (o[k] !== void 0) {
              s += stringify(k) + ":" + stringify(o[k]);
            }
          }
        }
        s += array ? "]" : "}";
        return s;
      } else if (typeof o === "string") {
        return JSON.stringify(/^:/.test(o) ? ":" + o : o);
      } else if (typeof o === "undefined") {
        return "null";
      } else
        return JSON.stringify(o);
    };
    exports.parse = function(s) {
      return JSON.parse(s, function(key, value) {
        if (typeof value === "string") {
          if (/^:base64:/.test(value))
            return Buffer.from(value.substring(8), "base64");
          else
            return /^:/.test(value) ? value.substring(1) : value;
        }
        return value;
      });
    };
  }
});

// api/ably-token-request/node_modules/compress-brotli/src/merge-options.js
var require_merge_options = __commonJS({
  "api/ably-token-request/node_modules/compress-brotli/src/merge-options.js"(exports, module2) {
    "use strict";
    module2.exports = (defaultOptions = {}, options = {}) => {
      const params = __spreadValues(__spreadValues({}, defaultOptions.params || {}), options.params || {});
      return __spreadValues(__spreadValues(__spreadValues({}, defaultOptions), options), Object.keys(params).length ? {
        params
      } : {});
    };
  }
});

// api/ably-token-request/node_modules/compress-brotli/src/index.js
var require_src3 = __commonJS({
  "api/ably-token-request/node_modules/compress-brotli/src/index.js"(exports, module2) {
    "use strict";
    var { promisify } = require("util");
    var JSONB = require_json_buffer();
    var zlib = require("zlib");
    var mergeOptions = require_merge_options();
    var compress = promisify(zlib.brotliCompress);
    var decompress = promisify(zlib.brotliDecompress);
    var identity = (val) => val;
    var createCompress = ({
      enable = true,
      serialize = JSONB.stringify,
      deserialize = JSONB.parse,
      compressOptions,
      decompressOptions
    } = {}) => {
      if (!enable) {
        return { serialize, deserialize, decompress: identity, compress: identity };
      }
      return {
        serialize,
        deserialize,
        compress: async (data, options = {}) => {
          if (data === void 0)
            return data;
          const serializedData = serialize(data);
          return compress(serializedData, mergeOptions(compressOptions, options));
        },
        decompress: async (data, options = {}) => {
          if (data === void 0)
            return data;
          return deserialize(await decompress(data, mergeOptions(decompressOptions, options)));
        }
      };
    };
    module2.exports = createCompress;
    module2.exports.stringify = JSONB.stringify;
    module2.exports.parse = JSONB.parse;
  }
});

// api/ably-token-request/node_modules/keyv/src/index.js
var require_src4 = __commonJS({
  "api/ably-token-request/node_modules/keyv/src/index.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events");
    var JSONB = require_json_buffer();
    var compressBrotli = require_src3();
    var loadStore = (options) => {
      const adapters = {
        redis: "@keyv/redis",
        rediss: "@keyv/redis",
        mongodb: "@keyv/mongo",
        mongo: "@keyv/mongo",
        sqlite: "@keyv/sqlite",
        postgresql: "@keyv/postgres",
        postgres: "@keyv/postgres",
        mysql: "@keyv/mysql",
        etcd: "@keyv/etcd",
        offline: "@keyv/offline",
        tiered: "@keyv/tiered"
      };
      if (options.adapter || options.uri) {
        const adapter = options.adapter || /^[^:+]*/.exec(options.uri)[0];
        return new (require(adapters[adapter]))(options);
      }
      return /* @__PURE__ */ new Map();
    };
    var iterableAdapters = [
      "sqlite",
      "postgres",
      "mysql",
      "mongo",
      "redis",
      "tiered"
    ];
    var Keyv = class extends EventEmitter {
      constructor(uri, _a = {}) {
        var _b = _a, { emitErrors = true } = _b, options = __objRest(_b, ["emitErrors"]);
        super();
        this.opts = __spreadValues(__spreadValues({
          namespace: "keyv",
          serialize: JSONB.stringify,
          deserialize: JSONB.parse
        }, typeof uri === "string" ? { uri } : uri), options);
        if (!this.opts.store) {
          const adapterOptions = __spreadValues({}, this.opts);
          this.opts.store = loadStore(adapterOptions);
        }
        if (this.opts.compress) {
          const brotli = compressBrotli(this.opts.compress.opts);
          this.opts.serialize = async ({ value, expires }) => brotli.serialize({ value: await brotli.compress(value), expires });
          this.opts.deserialize = async (data) => {
            const { value, expires } = brotli.deserialize(data);
            return { value: await brotli.decompress(value), expires };
          };
        }
        if (typeof this.opts.store.on === "function" && emitErrors) {
          this.opts.store.on("error", (error) => this.emit("error", error));
        }
        this.opts.store.namespace = this.opts.namespace;
        const generateIterator = (iterator) => async function* () {
          for await (const [key, raw] of typeof iterator === "function" ? iterator(this.opts.store.namespace) : iterator) {
            const data = this.opts.deserialize(raw);
            if (this.opts.store.namespace && !key.includes(this.opts.store.namespace)) {
              continue;
            }
            if (typeof data.expires === "number" && Date.now() > data.expires) {
              this.delete(key);
              continue;
            }
            yield [this._getKeyUnprefix(key), data.value];
          }
        };
        if (typeof this.opts.store[Symbol.iterator] === "function" && this.opts.store instanceof Map) {
          this.iterator = generateIterator(this.opts.store);
        } else if (typeof this.opts.store.iterator === "function" && this.opts.store.opts && this._checkIterableAdaptar()) {
          this.iterator = generateIterator(this.opts.store.iterator.bind(this.opts.store));
        }
      }
      _checkIterableAdaptar() {
        return iterableAdapters.includes(this.opts.store.opts.dialect) || iterableAdapters.findIndex((element) => this.opts.store.opts.url.includes(element)) >= 0;
      }
      _getKeyPrefix(key) {
        return `${this.opts.namespace}:${key}`;
      }
      _getKeyPrefixArray(keys) {
        return keys.map((key) => `${this.opts.namespace}:${key}`);
      }
      _getKeyUnprefix(key) {
        return key.split(":").splice(1).join(":");
      }
      get(key, options) {
        const { store } = this.opts;
        const isArray = Array.isArray(key);
        const keyPrefixed = isArray ? this._getKeyPrefixArray(key) : this._getKeyPrefix(key);
        if (isArray && store.getMany === void 0) {
          const promises = [];
          for (const key2 of keyPrefixed) {
            promises.push(Promise.resolve().then(() => store.get(key2)).then((data) => typeof data === "string" ? this.opts.deserialize(data) : data).then((data) => {
              if (data === void 0 || data === null) {
                return void 0;
              }
              if (typeof data.expires === "number" && Date.now() > data.expires) {
                return this.delete(key2).then(() => void 0);
              }
              return options && options.raw ? data : data.value;
            }));
          }
          return Promise.allSettled(promises).then((values) => {
            const data = [];
            for (const value of values) {
              data.push(value.value);
            }
            return data.every((x) => x === void 0) ? [] : data;
          });
        }
        return Promise.resolve().then(() => isArray ? store.getMany(keyPrefixed) : store.get(keyPrefixed)).then((data) => typeof data === "string" ? this.opts.deserialize(data) : data).then((data) => {
          if (data === void 0 || data === null) {
            return void 0;
          }
          if (isArray) {
            const result = [];
            if (data.length === 0) {
              return [];
            }
            for (let row of data) {
              if (typeof row === "string") {
                row = this.opts.deserialize(row);
              }
              if (row === void 0 || row === null) {
                result.push(void 0);
                continue;
              }
              if (typeof row.expires === "number" && Date.now() > row.expires) {
                this.delete(key).then(() => void 0);
                result.push(void 0);
              } else {
                result.push(options && options.raw ? row : row.value);
              }
            }
            return result.every((x) => x === void 0) ? [] : result;
          }
          if (typeof data.expires === "number" && Date.now() > data.expires) {
            return this.delete(key).then(() => void 0);
          }
          return options && options.raw ? data : data.value;
        });
      }
      set(key, value, ttl) {
        const keyPrefixed = this._getKeyPrefix(key);
        if (typeof ttl === "undefined") {
          ttl = this.opts.ttl;
        }
        if (ttl === 0) {
          ttl = void 0;
        }
        const { store } = this.opts;
        return Promise.resolve().then(() => {
          const expires = typeof ttl === "number" ? Date.now() + ttl : null;
          if (typeof value === "symbol") {
            this.emit("error", "symbol cannot be serialized");
          }
          value = { value, expires };
          return this.opts.serialize(value);
        }).then((value2) => store.set(keyPrefixed, value2, ttl)).then(() => true);
      }
      delete(key) {
        const { store } = this.opts;
        if (Array.isArray(key)) {
          const keyPrefixed2 = this._getKeyPrefixArray(key);
          if (store.deleteMany === void 0) {
            const promises = [];
            for (const key2 of keyPrefixed2) {
              promises.push(store.delete(key2));
            }
            return Promise.allSettled(promises).then((values) => values.every((x) => x.value === true));
          }
          return Promise.resolve().then(() => store.deleteMany(keyPrefixed2));
        }
        const keyPrefixed = this._getKeyPrefix(key);
        return Promise.resolve().then(() => store.delete(keyPrefixed));
      }
      clear() {
        const { store } = this.opts;
        return Promise.resolve().then(() => store.clear());
      }
      has(key) {
        const keyPrefixed = this._getKeyPrefix(key);
        const { store } = this.opts;
        return Promise.resolve().then(async () => {
          if (typeof store.has === "function") {
            return store.has(keyPrefixed);
          }
          const value = await store.get(keyPrefixed);
          return value !== void 0;
        });
      }
      disconnect() {
        const { store } = this.opts;
        if (typeof store.disconnect === "function") {
          return store.disconnect();
        }
      }
    };
    module2.exports = Keyv;
  }
});

// api/ably-token-request/node_modules/cacheable-request/src/index.js
var require_src5 = __commonJS({
  "api/ably-token-request/node_modules/cacheable-request/src/index.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events");
    var urlLib = require("url");
    var normalizeUrl = require_normalize_url();
    var getStream = require_get_stream();
    var CachePolicy = require_http_cache_semantics();
    var Response = require_src();
    var lowercaseKeys = require_lowercase_keys();
    var cloneResponse = require_src2();
    var Keyv = require_src4();
    var CacheableRequest = class {
      constructor(request, cacheAdapter) {
        if (typeof request !== "function") {
          throw new TypeError("Parameter `request` must be a function");
        }
        this.cache = new Keyv({
          uri: typeof cacheAdapter === "string" && cacheAdapter,
          store: typeof cacheAdapter !== "string" && cacheAdapter,
          namespace: "cacheable-request"
        });
        return this.createCacheableRequest(request);
      }
      createCacheableRequest(request) {
        return (opts, cb) => {
          let url;
          if (typeof opts === "string") {
            url = normalizeUrlObject(urlLib.parse(opts));
            opts = {};
          } else if (opts instanceof urlLib.URL) {
            url = normalizeUrlObject(urlLib.parse(opts.toString()));
            opts = {};
          } else {
            const [pathname, ...searchParts] = (opts.path || "").split("?");
            const search = searchParts.length > 0 ? `?${searchParts.join("?")}` : "";
            url = normalizeUrlObject(__spreadProps(__spreadValues({}, opts), { pathname, search }));
          }
          opts = __spreadValues(__spreadValues({
            headers: {},
            method: "GET",
            cache: true,
            strictTtl: false,
            automaticFailover: false
          }, opts), urlObjectToRequestOptions(url));
          opts.headers = lowercaseKeys(opts.headers);
          const ee = new EventEmitter();
          const normalizedUrlString = normalizeUrl(urlLib.format(url), {
            stripWWW: false,
            removeTrailingSlash: false,
            stripAuthentication: false
          });
          const key = `${opts.method}:${normalizedUrlString}`;
          let revalidate = false;
          let madeRequest = false;
          const makeRequest = (opts2) => {
            madeRequest = true;
            let requestErrored = false;
            let requestErrorCallback;
            const requestErrorPromise = new Promise((resolve) => {
              requestErrorCallback = () => {
                if (!requestErrored) {
                  requestErrored = true;
                  resolve();
                }
              };
            });
            const handler2 = (response) => {
              if (revalidate && !opts2.forceRefresh) {
                response.status = response.statusCode;
                const revalidatedPolicy = CachePolicy.fromObject(revalidate.cachePolicy).revalidatedPolicy(opts2, response);
                if (!revalidatedPolicy.modified) {
                  const headers = revalidatedPolicy.policy.responseHeaders();
                  response = new Response(revalidate.statusCode, headers, revalidate.body, revalidate.url);
                  response.cachePolicy = revalidatedPolicy.policy;
                  response.fromCache = true;
                }
              }
              if (!response.fromCache) {
                response.cachePolicy = new CachePolicy(opts2, response, opts2);
                response.fromCache = false;
              }
              let clonedResponse;
              if (opts2.cache && response.cachePolicy.storable()) {
                clonedResponse = cloneResponse(response);
                (async () => {
                  try {
                    const bodyPromise = getStream.buffer(response);
                    await Promise.race([
                      requestErrorPromise,
                      new Promise((resolve) => response.once("end", resolve))
                    ]);
                    if (requestErrored) {
                      return;
                    }
                    const body = await bodyPromise;
                    const value = {
                      cachePolicy: response.cachePolicy.toObject(),
                      url: response.url,
                      statusCode: response.fromCache ? revalidate.statusCode : response.statusCode,
                      body
                    };
                    let ttl = opts2.strictTtl ? response.cachePolicy.timeToLive() : void 0;
                    if (opts2.maxTtl) {
                      ttl = ttl ? Math.min(ttl, opts2.maxTtl) : opts2.maxTtl;
                    }
                    await this.cache.set(key, value, ttl);
                  } catch (error) {
                    ee.emit("error", new CacheableRequest.CacheError(error));
                  }
                })();
              } else if (opts2.cache && revalidate) {
                (async () => {
                  try {
                    await this.cache.delete(key);
                  } catch (error) {
                    ee.emit("error", new CacheableRequest.CacheError(error));
                  }
                })();
              }
              ee.emit("response", clonedResponse || response);
              if (typeof cb === "function") {
                cb(clonedResponse || response);
              }
            };
            try {
              const req = request(opts2, handler2);
              req.once("error", requestErrorCallback);
              req.once("abort", requestErrorCallback);
              ee.emit("request", req);
            } catch (error) {
              ee.emit("error", new CacheableRequest.RequestError(error));
            }
          };
          (async () => {
            const get = async (opts2) => {
              await Promise.resolve();
              const cacheEntry = opts2.cache ? await this.cache.get(key) : void 0;
              if (typeof cacheEntry === "undefined") {
                return makeRequest(opts2);
              }
              const policy = CachePolicy.fromObject(cacheEntry.cachePolicy);
              if (policy.satisfiesWithoutRevalidation(opts2) && !opts2.forceRefresh) {
                const headers = policy.responseHeaders();
                const response = new Response(cacheEntry.statusCode, headers, cacheEntry.body, cacheEntry.url);
                response.cachePolicy = policy;
                response.fromCache = true;
                ee.emit("response", response);
                if (typeof cb === "function") {
                  cb(response);
                }
              } else {
                revalidate = cacheEntry;
                opts2.headers = policy.revalidationHeaders(opts2);
                makeRequest(opts2);
              }
            };
            const errorHandler = (error) => ee.emit("error", new CacheableRequest.CacheError(error));
            this.cache.once("error", errorHandler);
            ee.on("response", () => this.cache.removeListener("error", errorHandler));
            try {
              await get(opts);
            } catch (error) {
              if (opts.automaticFailover && !madeRequest) {
                makeRequest(opts);
              }
              ee.emit("error", new CacheableRequest.CacheError(error));
            }
          })();
          return ee;
        };
      }
    };
    function urlObjectToRequestOptions(url) {
      const options = __spreadValues({}, url);
      options.path = `${url.pathname || "/"}${url.search || ""}`;
      delete options.pathname;
      delete options.search;
      return options;
    }
    function normalizeUrlObject(url) {
      return {
        protocol: url.protocol,
        auth: url.auth,
        hostname: url.hostname || url.host || "localhost",
        port: url.port,
        pathname: url.pathname,
        search: url.search
      };
    }
    CacheableRequest.RequestError = class extends Error {
      constructor(error) {
        super(error.message);
        this.name = "RequestError";
        Object.assign(this, error);
      }
    };
    CacheableRequest.CacheError = class extends Error {
      constructor(error) {
        super(error.message);
        this.name = "CacheError";
        Object.assign(this, error);
      }
    };
    module2.exports = CacheableRequest;
  }
});

// api/ably-token-request/node_modules/decompress-response/node_modules/mimic-response/index.js
var require_mimic_response2 = __commonJS({
  "api/ably-token-request/node_modules/decompress-response/node_modules/mimic-response/index.js"(exports, module2) {
    "use strict";
    var knownProperties = [
      "aborted",
      "complete",
      "headers",
      "httpVersion",
      "httpVersionMinor",
      "httpVersionMajor",
      "method",
      "rawHeaders",
      "rawTrailers",
      "setTimeout",
      "socket",
      "statusCode",
      "statusMessage",
      "trailers",
      "url"
    ];
    module2.exports = (fromStream, toStream) => {
      if (toStream._readableState.autoDestroy) {
        throw new Error("The second stream must have the `autoDestroy` option set to `false`");
      }
      const fromProperties = new Set(Object.keys(fromStream).concat(knownProperties));
      const properties = {};
      for (const property of fromProperties) {
        if (property in toStream) {
          continue;
        }
        properties[property] = {
          get() {
            const value = fromStream[property];
            const isFunction = typeof value === "function";
            return isFunction ? value.bind(fromStream) : value;
          },
          set(value) {
            fromStream[property] = value;
          },
          enumerable: true,
          configurable: false
        };
      }
      Object.defineProperties(toStream, properties);
      fromStream.once("aborted", () => {
        toStream.destroy();
        toStream.emit("aborted");
      });
      fromStream.once("close", () => {
        if (fromStream.complete) {
          if (toStream.readable) {
            toStream.once("end", () => {
              toStream.emit("close");
            });
          } else {
            toStream.emit("close");
          }
        } else {
          toStream.emit("close");
        }
      });
      return toStream;
    };
  }
});

// api/ably-token-request/node_modules/decompress-response/index.js
var require_decompress_response = __commonJS({
  "api/ably-token-request/node_modules/decompress-response/index.js"(exports, module2) {
    "use strict";
    var { Transform, PassThrough } = require("stream");
    var zlib = require("zlib");
    var mimicResponse = require_mimic_response2();
    module2.exports = (response) => {
      const contentEncoding = (response.headers["content-encoding"] || "").toLowerCase();
      if (!["gzip", "deflate", "br"].includes(contentEncoding)) {
        return response;
      }
      const isBrotli = contentEncoding === "br";
      if (isBrotli && typeof zlib.createBrotliDecompress !== "function") {
        response.destroy(new Error("Brotli is not supported on Node.js < 12"));
        return response;
      }
      let isEmpty = true;
      const checker = new Transform({
        transform(data, _encoding, callback) {
          isEmpty = false;
          callback(null, data);
        },
        flush(callback) {
          callback();
        }
      });
      const finalStream = new PassThrough({
        autoDestroy: false,
        destroy(error, callback) {
          response.destroy();
          callback(error);
        }
      });
      const decompressStream = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();
      decompressStream.once("error", (error) => {
        if (isEmpty && !response.readable) {
          finalStream.end();
          return;
        }
        finalStream.destroy(error);
      });
      mimicResponse(response, finalStream);
      response.pipe(checker).pipe(decompressStream).pipe(finalStream);
      return finalStream;
    };
  }
});

// api/ably-token-request/node_modules/quick-lru/index.js
var require_quick_lru = __commonJS({
  "api/ably-token-request/node_modules/quick-lru/index.js"(exports, module2) {
    "use strict";
    var QuickLRU = class {
      constructor(options = {}) {
        if (!(options.maxSize && options.maxSize > 0)) {
          throw new TypeError("`maxSize` must be a number greater than 0");
        }
        this.maxSize = options.maxSize;
        this.onEviction = options.onEviction;
        this.cache = /* @__PURE__ */ new Map();
        this.oldCache = /* @__PURE__ */ new Map();
        this._size = 0;
      }
      _set(key, value) {
        this.cache.set(key, value);
        this._size++;
        if (this._size >= this.maxSize) {
          this._size = 0;
          if (typeof this.onEviction === "function") {
            for (const [key2, value2] of this.oldCache.entries()) {
              this.onEviction(key2, value2);
            }
          }
          this.oldCache = this.cache;
          this.cache = /* @__PURE__ */ new Map();
        }
      }
      get(key) {
        if (this.cache.has(key)) {
          return this.cache.get(key);
        }
        if (this.oldCache.has(key)) {
          const value = this.oldCache.get(key);
          this.oldCache.delete(key);
          this._set(key, value);
          return value;
        }
      }
      set(key, value) {
        if (this.cache.has(key)) {
          this.cache.set(key, value);
        } else {
          this._set(key, value);
        }
        return this;
      }
      has(key) {
        return this.cache.has(key) || this.oldCache.has(key);
      }
      peek(key) {
        if (this.cache.has(key)) {
          return this.cache.get(key);
        }
        if (this.oldCache.has(key)) {
          return this.oldCache.get(key);
        }
      }
      delete(key) {
        const deleted = this.cache.delete(key);
        if (deleted) {
          this._size--;
        }
        return this.oldCache.delete(key) || deleted;
      }
      clear() {
        this.cache.clear();
        this.oldCache.clear();
        this._size = 0;
      }
      *keys() {
        for (const [key] of this) {
          yield key;
        }
      }
      *values() {
        for (const [, value] of this) {
          yield value;
        }
      }
      *[Symbol.iterator]() {
        for (const item of this.cache) {
          yield item;
        }
        for (const item of this.oldCache) {
          const [key] = item;
          if (!this.cache.has(key)) {
            yield item;
          }
        }
      }
      get size() {
        let oldCacheSize = 0;
        for (const key of this.oldCache.keys()) {
          if (!this.cache.has(key)) {
            oldCacheSize++;
          }
        }
        return Math.min(this._size + oldCacheSize, this.maxSize);
      }
    };
    module2.exports = QuickLRU;
  }
});

// api/ably-token-request/node_modules/http2-wrapper/source/agent.js
var require_agent = __commonJS({
  "api/ably-token-request/node_modules/http2-wrapper/source/agent.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events");
    var tls = require("tls");
    var http2 = require("http2");
    var QuickLRU = require_quick_lru();
    var kCurrentStreamsCount = Symbol("currentStreamsCount");
    var kRequest = Symbol("request");
    var kOriginSet = Symbol("cachedOriginSet");
    var kGracefullyClosing = Symbol("gracefullyClosing");
    var nameKeys = [
      "maxDeflateDynamicTableSize",
      "maxSessionMemory",
      "maxHeaderListPairs",
      "maxOutstandingPings",
      "maxReservedRemoteStreams",
      "maxSendHeaderBlockLength",
      "paddingStrategy",
      "localAddress",
      "path",
      "rejectUnauthorized",
      "minDHSize",
      "ca",
      "cert",
      "clientCertEngine",
      "ciphers",
      "key",
      "pfx",
      "servername",
      "minVersion",
      "maxVersion",
      "secureProtocol",
      "crl",
      "honorCipherOrder",
      "ecdhCurve",
      "dhparam",
      "secureOptions",
      "sessionIdContext"
    ];
    var getSortedIndex = (array, value, compare) => {
      let low = 0;
      let high = array.length;
      while (low < high) {
        const mid = low + high >>> 1;
        if (compare(array[mid], value)) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return low;
    };
    var compareSessions = (a, b) => {
      return a.remoteSettings.maxConcurrentStreams > b.remoteSettings.maxConcurrentStreams;
    };
    var closeCoveredSessions = (where, session) => {
      for (const coveredSession of where) {
        if (coveredSession[kOriginSet].length < session[kOriginSet].length && coveredSession[kOriginSet].every((origin) => session[kOriginSet].includes(origin)) && coveredSession[kCurrentStreamsCount] + session[kCurrentStreamsCount] <= session.remoteSettings.maxConcurrentStreams) {
          gracefullyClose(coveredSession);
        }
      }
    };
    var closeSessionIfCovered = (where, coveredSession) => {
      for (const session of where) {
        if (coveredSession[kOriginSet].length < session[kOriginSet].length && coveredSession[kOriginSet].every((origin) => session[kOriginSet].includes(origin)) && coveredSession[kCurrentStreamsCount] + session[kCurrentStreamsCount] <= session.remoteSettings.maxConcurrentStreams) {
          gracefullyClose(coveredSession);
        }
      }
    };
    var getSessions = ({ agent, isFree }) => {
      const result = {};
      for (const normalizedOptions in agent.sessions) {
        const sessions = agent.sessions[normalizedOptions];
        const filtered = sessions.filter((session) => {
          const result2 = session[Agent.kCurrentStreamsCount] < session.remoteSettings.maxConcurrentStreams;
          return isFree ? result2 : !result2;
        });
        if (filtered.length !== 0) {
          result[normalizedOptions] = filtered;
        }
      }
      return result;
    };
    var gracefullyClose = (session) => {
      session[kGracefullyClosing] = true;
      if (session[kCurrentStreamsCount] === 0) {
        session.close();
      }
    };
    var Agent = class extends EventEmitter {
      constructor({ timeout = 6e4, maxSessions = Infinity, maxFreeSessions = 10, maxCachedTlsSessions = 100 } = {}) {
        super();
        this.sessions = {};
        this.queue = {};
        this.timeout = timeout;
        this.maxSessions = maxSessions;
        this.maxFreeSessions = maxFreeSessions;
        this._freeSessionsCount = 0;
        this._sessionsCount = 0;
        this.settings = {
          enablePush: false
        };
        this.tlsSessionCache = new QuickLRU({ maxSize: maxCachedTlsSessions });
      }
      static normalizeOrigin(url, servername) {
        if (typeof url === "string") {
          url = new URL(url);
        }
        if (servername && url.hostname !== servername) {
          url.hostname = servername;
        }
        return url.origin;
      }
      normalizeOptions(options) {
        let normalized = "";
        if (options) {
          for (const key of nameKeys) {
            if (options[key]) {
              normalized += `:${options[key]}`;
            }
          }
        }
        return normalized;
      }
      _tryToCreateNewSession(normalizedOptions, normalizedOrigin) {
        if (!(normalizedOptions in this.queue) || !(normalizedOrigin in this.queue[normalizedOptions])) {
          return;
        }
        const item = this.queue[normalizedOptions][normalizedOrigin];
        if (this._sessionsCount < this.maxSessions && !item.completed) {
          item.completed = true;
          item();
        }
      }
      getSession(origin, options, listeners) {
        return new Promise((resolve, reject) => {
          if (Array.isArray(listeners)) {
            listeners = [...listeners];
            resolve();
          } else {
            listeners = [{ resolve, reject }];
          }
          const normalizedOptions = this.normalizeOptions(options);
          const normalizedOrigin = Agent.normalizeOrigin(origin, options && options.servername);
          if (normalizedOrigin === void 0) {
            for (const { reject: reject2 } of listeners) {
              reject2(new TypeError("The `origin` argument needs to be a string or an URL object"));
            }
            return;
          }
          if (normalizedOptions in this.sessions) {
            const sessions = this.sessions[normalizedOptions];
            let maxConcurrentStreams = -1;
            let currentStreamsCount = -1;
            let optimalSession;
            for (const session of sessions) {
              const sessionMaxConcurrentStreams = session.remoteSettings.maxConcurrentStreams;
              if (sessionMaxConcurrentStreams < maxConcurrentStreams) {
                break;
              }
              if (session[kOriginSet].includes(normalizedOrigin)) {
                const sessionCurrentStreamsCount = session[kCurrentStreamsCount];
                if (sessionCurrentStreamsCount >= sessionMaxConcurrentStreams || session[kGracefullyClosing] || session.destroyed) {
                  continue;
                }
                if (!optimalSession) {
                  maxConcurrentStreams = sessionMaxConcurrentStreams;
                }
                if (sessionCurrentStreamsCount > currentStreamsCount) {
                  optimalSession = session;
                  currentStreamsCount = sessionCurrentStreamsCount;
                }
              }
            }
            if (optimalSession) {
              if (listeners.length !== 1) {
                for (const { reject: reject2 } of listeners) {
                  const error = new Error(`Expected the length of listeners to be 1, got ${listeners.length}.
Please report this to https://github.com/szmarczak/http2-wrapper/`);
                  reject2(error);
                }
                return;
              }
              listeners[0].resolve(optimalSession);
              return;
            }
          }
          if (normalizedOptions in this.queue) {
            if (normalizedOrigin in this.queue[normalizedOptions]) {
              this.queue[normalizedOptions][normalizedOrigin].listeners.push(...listeners);
              this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
              return;
            }
          } else {
            this.queue[normalizedOptions] = {};
          }
          const removeFromQueue = () => {
            if (normalizedOptions in this.queue && this.queue[normalizedOptions][normalizedOrigin] === entry) {
              delete this.queue[normalizedOptions][normalizedOrigin];
              if (Object.keys(this.queue[normalizedOptions]).length === 0) {
                delete this.queue[normalizedOptions];
              }
            }
          };
          const entry = () => {
            const name = `${normalizedOrigin}:${normalizedOptions}`;
            let receivedSettings = false;
            try {
              const session = http2.connect(origin, __spreadValues({
                createConnection: this.createConnection,
                settings: this.settings,
                session: this.tlsSessionCache.get(name)
              }, options));
              session[kCurrentStreamsCount] = 0;
              session[kGracefullyClosing] = false;
              const isFree = () => session[kCurrentStreamsCount] < session.remoteSettings.maxConcurrentStreams;
              let wasFree = true;
              session.socket.once("session", (tlsSession) => {
                this.tlsSessionCache.set(name, tlsSession);
              });
              session.once("error", (error) => {
                for (const { reject: reject2 } of listeners) {
                  reject2(error);
                }
                this.tlsSessionCache.delete(name);
              });
              session.setTimeout(this.timeout, () => {
                session.destroy();
              });
              session.once("close", () => {
                if (receivedSettings) {
                  if (wasFree) {
                    this._freeSessionsCount--;
                  }
                  this._sessionsCount--;
                  const where = this.sessions[normalizedOptions];
                  where.splice(where.indexOf(session), 1);
                  if (where.length === 0) {
                    delete this.sessions[normalizedOptions];
                  }
                } else {
                  const error = new Error("Session closed without receiving a SETTINGS frame");
                  error.code = "HTTP2WRAPPER_NOSETTINGS";
                  for (const { reject: reject2 } of listeners) {
                    reject2(error);
                  }
                  removeFromQueue();
                }
                this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
              });
              const processListeners = () => {
                if (!(normalizedOptions in this.queue) || !isFree()) {
                  return;
                }
                for (const origin2 of session[kOriginSet]) {
                  if (origin2 in this.queue[normalizedOptions]) {
                    const { listeners: listeners2 } = this.queue[normalizedOptions][origin2];
                    while (listeners2.length !== 0 && isFree()) {
                      listeners2.shift().resolve(session);
                    }
                    const where = this.queue[normalizedOptions];
                    if (where[origin2].listeners.length === 0) {
                      delete where[origin2];
                      if (Object.keys(where).length === 0) {
                        delete this.queue[normalizedOptions];
                        break;
                      }
                    }
                    if (!isFree()) {
                      break;
                    }
                  }
                }
              };
              session.on("origin", () => {
                session[kOriginSet] = session.originSet;
                if (!isFree()) {
                  return;
                }
                processListeners();
                closeCoveredSessions(this.sessions[normalizedOptions], session);
              });
              session.once("remoteSettings", () => {
                session.ref();
                session.unref();
                this._sessionsCount++;
                if (entry.destroyed) {
                  const error = new Error("Agent has been destroyed");
                  for (const listener of listeners) {
                    listener.reject(error);
                  }
                  session.destroy();
                  return;
                }
                session[kOriginSet] = session.originSet;
                {
                  const where = this.sessions;
                  if (normalizedOptions in where) {
                    const sessions = where[normalizedOptions];
                    sessions.splice(getSortedIndex(sessions, session, compareSessions), 0, session);
                  } else {
                    where[normalizedOptions] = [session];
                  }
                }
                this._freeSessionsCount += 1;
                receivedSettings = true;
                this.emit("session", session);
                processListeners();
                removeFromQueue();
                if (session[kCurrentStreamsCount] === 0 && this._freeSessionsCount > this.maxFreeSessions) {
                  session.close();
                }
                if (listeners.length !== 0) {
                  this.getSession(normalizedOrigin, options, listeners);
                  listeners.length = 0;
                }
                session.on("remoteSettings", () => {
                  processListeners();
                  closeCoveredSessions(this.sessions[normalizedOptions], session);
                });
              });
              session[kRequest] = session.request;
              session.request = (headers, streamOptions) => {
                if (session[kGracefullyClosing]) {
                  throw new Error("The session is gracefully closing. No new streams are allowed.");
                }
                const stream = session[kRequest](headers, streamOptions);
                session.ref();
                ++session[kCurrentStreamsCount];
                if (session[kCurrentStreamsCount] === session.remoteSettings.maxConcurrentStreams) {
                  this._freeSessionsCount--;
                }
                stream.once("close", () => {
                  wasFree = isFree();
                  --session[kCurrentStreamsCount];
                  if (!session.destroyed && !session.closed) {
                    closeSessionIfCovered(this.sessions[normalizedOptions], session);
                    if (isFree() && !session.closed) {
                      if (!wasFree) {
                        this._freeSessionsCount++;
                        wasFree = true;
                      }
                      const isEmpty = session[kCurrentStreamsCount] === 0;
                      if (isEmpty) {
                        session.unref();
                      }
                      if (isEmpty && (this._freeSessionsCount > this.maxFreeSessions || session[kGracefullyClosing])) {
                        session.close();
                      } else {
                        closeCoveredSessions(this.sessions[normalizedOptions], session);
                        processListeners();
                      }
                    }
                  }
                });
                return stream;
              };
            } catch (error) {
              for (const listener of listeners) {
                listener.reject(error);
              }
              removeFromQueue();
            }
          };
          entry.listeners = listeners;
          entry.completed = false;
          entry.destroyed = false;
          this.queue[normalizedOptions][normalizedOrigin] = entry;
          this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
        });
      }
      request(origin, options, headers, streamOptions) {
        return new Promise((resolve, reject) => {
          this.getSession(origin, options, [{
            reject,
            resolve: (session) => {
              try {
                resolve(session.request(headers, streamOptions));
              } catch (error) {
                reject(error);
              }
            }
          }]);
        });
      }
      createConnection(origin, options) {
        return Agent.connect(origin, options);
      }
      static connect(origin, options) {
        options.ALPNProtocols = ["h2"];
        const port = origin.port || 443;
        const host = origin.hostname || origin.host;
        if (typeof options.servername === "undefined") {
          options.servername = host;
        }
        return tls.connect(port, host, options);
      }
      closeFreeSessions() {
        for (const sessions of Object.values(this.sessions)) {
          for (const session of sessions) {
            if (session[kCurrentStreamsCount] === 0) {
              session.close();
            }
          }
        }
      }
      destroy(reason) {
        for (const sessions of Object.values(this.sessions)) {
          for (const session of sessions) {
            session.destroy(reason);
          }
        }
        for (const entriesOfAuthority of Object.values(this.queue)) {
          for (const entry of Object.values(entriesOfAuthority)) {
            entry.destroyed = true;
          }
        }
        this.queue = {};
      }
      get freeSessions() {
        return getSessions({ agent: this, isFree: true });
      }
      get busySessions() {
        return getSessions({ agent: this, isFree: false });
      }
    };
    Agent.kCurrentStreamsCount = kCurrentStreamsCount;
    Agent.kGracefullyClosing = kGracefullyClosing;
    module2.exports = {
      Agent,
      globalAgent: new Agent()
    };
  }
});

// api/ably-token-request/node_modules/http2-wrapper/source/incoming-message.js
var require_incoming_message = __commonJS({
  "api/ably-token-request/node_modules/http2-wrapper/source/incoming-message.js"(exports, module2) {
    "use strict";
    var { Readable } = require("stream");
    var IncomingMessage = class extends Readable {
      constructor(socket, highWaterMark) {
        super({
          highWaterMark,
          autoDestroy: false
        });
        this.statusCode = null;
        this.statusMessage = "";
        this.httpVersion = "2.0";
        this.httpVersionMajor = 2;
        this.httpVersionMinor = 0;
        this.headers = {};
        this.trailers = {};
        this.req = null;
        this.aborted = false;
        this.complete = false;
        this.upgrade = null;
        this.rawHeaders = [];
        this.rawTrailers = [];
        this.socket = socket;
        this.connection = socket;
        this._dumped = false;
      }
      _destroy(error) {
        this.req._request.destroy(error);
      }
      setTimeout(ms, callback) {
        this.req.setTimeout(ms, callback);
        return this;
      }
      _dump() {
        if (!this._dumped) {
          this._dumped = true;
          this.removeAllListeners("data");
          this.resume();
        }
      }
      _read() {
        if (this.req) {
          this.req._request.resume();
        }
      }
    };
    module2.exports = IncomingMessage;
  }
});

// api/ably-token-request/node_modules/http2-wrapper/source/utils/url-to-options.js
var require_url_to_options = __commonJS({
  "api/ably-token-request/node_modules/http2-wrapper/source/utils/url-to-options.js"(exports, module2) {
    "use strict";
    module2.exports = (url) => {
      const options = {
        protocol: url.protocol,
        hostname: typeof url.hostname === "string" && url.hostname.startsWith("[") ? url.hostname.slice(1, -1) : url.hostname,
        host: url.host,
        hash: url.hash,
        search: url.search,
        pathname: url.pathname,
        href: url.href,
        path: `${url.pathname || ""}${url.search || ""}`
      };
      if (typeof url.port === "string" && url.port.length !== 0) {
        options.port = Number(url.port);
      }
      if (url.username || url.password) {
        options.auth = `${url.username || ""}:${url.password || ""}`;
      }
      return options;
    };
  }
});

// api/ably-token-request/node_modules/http2-wrapper/source/utils/proxy-events.js
var require_proxy_events = __commonJS({
  "api/ably-token-request/node_modules/http2-wrapper/source/utils/proxy-events.js"(exports, module2) {
    "use strict";
    module2.exports = (from, to, events) => {
      for (const event of events) {
        from.on(event, (...args) => to.emit(event, ...args));
      }
    };
  }
});

// api/ably-token-request/node_modules/http2-wrapper/source/utils/is-request-pseudo-header.js
var require_is_request_pseudo_header = __commonJS({
  "api/ably-token-request/node_modules/http2-wrapper/source/utils/is-request-pseudo-header.js"(exports, module2) {
    "use strict";
    module2.exports = (header) => {
      switch (header) {
        case ":method":
        case ":scheme":
        case ":authority":
        case ":path":
          return true;
        default:
          return false;
      }
    };
  }
});

// api/ably-token-request/node_modules/http2-wrapper/source/utils/errors.js
var require_errors = __commonJS({
  "api/ably-token-request/node_modules/http2-wrapper/source/utils/errors.js"(exports, module2) {
    "use strict";
    var makeError = (Base, key, getMessage) => {
      module2.exports[key] = class NodeError extends Base {
        constructor(...args) {
          super(typeof getMessage === "string" ? getMessage : getMessage(args));
          this.name = `${super.name} [${key}]`;
          this.code = key;
        }
      };
    };
    makeError(TypeError, "ERR_INVALID_ARG_TYPE", (args) => {
      const type = args[0].includes(".") ? "property" : "argument";
      let valid = args[1];
      const isManyTypes = Array.isArray(valid);
      if (isManyTypes) {
        valid = `${valid.slice(0, -1).join(", ")} or ${valid.slice(-1)}`;
      }
      return `The "${args[0]}" ${type} must be ${isManyTypes ? "one of" : "of"} type ${valid}. Received ${typeof args[2]}`;
    });
    makeError(TypeError, "ERR_INVALID_PROTOCOL", (args) => {
      return `Protocol "${args[0]}" not supported. Expected "${args[1]}"`;
    });
    makeError(Error, "ERR_HTTP_HEADERS_SENT", (args) => {
      return `Cannot ${args[0]} headers after they are sent to the client`;
    });
    makeError(TypeError, "ERR_INVALID_HTTP_TOKEN", (args) => {
      return `${args[0]} must be a valid HTTP token [${args[1]}]`;
    });
    makeError(TypeError, "ERR_HTTP_INVALID_HEADER_VALUE", (args) => {
      return `Invalid value "${args[0]} for header "${args[1]}"`;
    });
    makeError(TypeError, "ERR_INVALID_CHAR", (args) => {
      return `Invalid character in ${args[0]} [${args[1]}]`;
    });
  }
});

// api/ably-token-request/node_modules/http2-wrapper/source/client-request.js
var require_client_request = __commonJS({
  "api/ably-token-request/node_modules/http2-wrapper/source/client-request.js"(exports, module2) {
    "use strict";
    var http2 = require("http2");
    var { Writable } = require("stream");
    var { Agent, globalAgent } = require_agent();
    var IncomingMessage = require_incoming_message();
    var urlToOptions = require_url_to_options();
    var proxyEvents = require_proxy_events();
    var isRequestPseudoHeader = require_is_request_pseudo_header();
    var {
      ERR_INVALID_ARG_TYPE,
      ERR_INVALID_PROTOCOL,
      ERR_HTTP_HEADERS_SENT,
      ERR_INVALID_HTTP_TOKEN,
      ERR_HTTP_INVALID_HEADER_VALUE,
      ERR_INVALID_CHAR
    } = require_errors();
    var {
      HTTP2_HEADER_STATUS,
      HTTP2_HEADER_METHOD,
      HTTP2_HEADER_PATH,
      HTTP2_METHOD_CONNECT
    } = http2.constants;
    var kHeaders = Symbol("headers");
    var kOrigin = Symbol("origin");
    var kSession = Symbol("session");
    var kOptions = Symbol("options");
    var kFlushedHeaders = Symbol("flushedHeaders");
    var kJobs = Symbol("jobs");
    var isValidHttpToken = /^[\^`\-\w!#$%&*+.|~]+$/;
    var isInvalidHeaderValue = /[^\t\u0020-\u007E\u0080-\u00FF]/;
    var ClientRequest = class extends Writable {
      constructor(input, options, callback) {
        super({
          autoDestroy: false
        });
        const hasInput = typeof input === "string" || input instanceof URL;
        if (hasInput) {
          input = urlToOptions(input instanceof URL ? input : new URL(input));
        }
        if (typeof options === "function" || options === void 0) {
          callback = options;
          options = hasInput ? input : __spreadValues({}, input);
        } else {
          options = __spreadValues(__spreadValues({}, input), options);
        }
        if (options.h2session) {
          this[kSession] = options.h2session;
        } else if (options.agent === false) {
          this.agent = new Agent({ maxFreeSessions: 0 });
        } else if (typeof options.agent === "undefined" || options.agent === null) {
          if (typeof options.createConnection === "function") {
            this.agent = new Agent({ maxFreeSessions: 0 });
            this.agent.createConnection = options.createConnection;
          } else {
            this.agent = globalAgent;
          }
        } else if (typeof options.agent.request === "function") {
          this.agent = options.agent;
        } else {
          throw new ERR_INVALID_ARG_TYPE("options.agent", ["Agent-like Object", "undefined", "false"], options.agent);
        }
        if (options.protocol && options.protocol !== "https:") {
          throw new ERR_INVALID_PROTOCOL(options.protocol, "https:");
        }
        const port = options.port || options.defaultPort || this.agent && this.agent.defaultPort || 443;
        const host = options.hostname || options.host || "localhost";
        delete options.hostname;
        delete options.host;
        delete options.port;
        const { timeout } = options;
        options.timeout = void 0;
        this[kHeaders] = /* @__PURE__ */ Object.create(null);
        this[kJobs] = [];
        this.socket = null;
        this.connection = null;
        this.method = options.method || "GET";
        this.path = options.path;
        this.res = null;
        this.aborted = false;
        this.reusedSocket = false;
        if (options.headers) {
          for (const [header, value] of Object.entries(options.headers)) {
            this.setHeader(header, value);
          }
        }
        if (options.auth && !("authorization" in this[kHeaders])) {
          this[kHeaders].authorization = "Basic " + Buffer.from(options.auth).toString("base64");
        }
        options.session = options.tlsSession;
        options.path = options.socketPath;
        this[kOptions] = options;
        if (port === 443) {
          this[kOrigin] = `https://${host}`;
          if (!(":authority" in this[kHeaders])) {
            this[kHeaders][":authority"] = host;
          }
        } else {
          this[kOrigin] = `https://${host}:${port}`;
          if (!(":authority" in this[kHeaders])) {
            this[kHeaders][":authority"] = `${host}:${port}`;
          }
        }
        if (timeout) {
          this.setTimeout(timeout);
        }
        if (callback) {
          this.once("response", callback);
        }
        this[kFlushedHeaders] = false;
      }
      get method() {
        return this[kHeaders][HTTP2_HEADER_METHOD];
      }
      set method(value) {
        if (value) {
          this[kHeaders][HTTP2_HEADER_METHOD] = value.toUpperCase();
        }
      }
      get path() {
        return this[kHeaders][HTTP2_HEADER_PATH];
      }
      set path(value) {
        if (value) {
          this[kHeaders][HTTP2_HEADER_PATH] = value;
        }
      }
      get _mustNotHaveABody() {
        return this.method === "GET" || this.method === "HEAD" || this.method === "DELETE";
      }
      _write(chunk, encoding, callback) {
        if (this._mustNotHaveABody) {
          callback(new Error("The GET, HEAD and DELETE methods must NOT have a body"));
          return;
        }
        this.flushHeaders();
        const callWrite = () => this._request.write(chunk, encoding, callback);
        if (this._request) {
          callWrite();
        } else {
          this[kJobs].push(callWrite);
        }
      }
      _final(callback) {
        if (this.destroyed) {
          return;
        }
        this.flushHeaders();
        const callEnd = () => {
          if (this._mustNotHaveABody) {
            callback();
            return;
          }
          this._request.end(callback);
        };
        if (this._request) {
          callEnd();
        } else {
          this[kJobs].push(callEnd);
        }
      }
      abort() {
        if (this.res && this.res.complete) {
          return;
        }
        if (!this.aborted) {
          process.nextTick(() => this.emit("abort"));
        }
        this.aborted = true;
        this.destroy();
      }
      _destroy(error, callback) {
        if (this.res) {
          this.res._dump();
        }
        if (this._request) {
          this._request.destroy();
        }
        callback(error);
      }
      async flushHeaders() {
        if (this[kFlushedHeaders] || this.destroyed) {
          return;
        }
        this[kFlushedHeaders] = true;
        const isConnectMethod = this.method === HTTP2_METHOD_CONNECT;
        const onStream = (stream) => {
          this._request = stream;
          if (this.destroyed) {
            stream.destroy();
            return;
          }
          if (!isConnectMethod) {
            proxyEvents(stream, this, ["timeout", "continue", "close", "error"]);
          }
          const waitForEnd = (fn) => {
            return (...args) => {
              if (!this.writable && !this.destroyed) {
                fn(...args);
              } else {
                this.once("finish", () => {
                  fn(...args);
                });
              }
            };
          };
          stream.once("response", waitForEnd((headers, flags, rawHeaders) => {
            const response = new IncomingMessage(this.socket, stream.readableHighWaterMark);
            this.res = response;
            response.req = this;
            response.statusCode = headers[HTTP2_HEADER_STATUS];
            response.headers = headers;
            response.rawHeaders = rawHeaders;
            response.once("end", () => {
              if (this.aborted) {
                response.aborted = true;
                response.emit("aborted");
              } else {
                response.complete = true;
                response.socket = null;
                response.connection = null;
              }
            });
            if (isConnectMethod) {
              response.upgrade = true;
              if (this.emit("connect", response, stream, Buffer.alloc(0))) {
                this.emit("close");
              } else {
                stream.destroy();
              }
            } else {
              stream.on("data", (chunk) => {
                if (!response._dumped && !response.push(chunk)) {
                  stream.pause();
                }
              });
              stream.once("end", () => {
                response.push(null);
              });
              if (!this.emit("response", response)) {
                response._dump();
              }
            }
          }));
          stream.once("headers", waitForEnd((headers) => this.emit("information", { statusCode: headers[HTTP2_HEADER_STATUS] })));
          stream.once("trailers", waitForEnd((trailers, flags, rawTrailers) => {
            const { res } = this;
            res.trailers = trailers;
            res.rawTrailers = rawTrailers;
          }));
          const { socket } = stream.session;
          this.socket = socket;
          this.connection = socket;
          for (const job of this[kJobs]) {
            job();
          }
          this.emit("socket", this.socket);
        };
        if (this[kSession]) {
          try {
            onStream(this[kSession].request(this[kHeaders]));
          } catch (error) {
            this.emit("error", error);
          }
        } else {
          this.reusedSocket = true;
          try {
            onStream(await this.agent.request(this[kOrigin], this[kOptions], this[kHeaders]));
          } catch (error) {
            this.emit("error", error);
          }
        }
      }
      getHeader(name) {
        if (typeof name !== "string") {
          throw new ERR_INVALID_ARG_TYPE("name", "string", name);
        }
        return this[kHeaders][name.toLowerCase()];
      }
      get headersSent() {
        return this[kFlushedHeaders];
      }
      removeHeader(name) {
        if (typeof name !== "string") {
          throw new ERR_INVALID_ARG_TYPE("name", "string", name);
        }
        if (this.headersSent) {
          throw new ERR_HTTP_HEADERS_SENT("remove");
        }
        delete this[kHeaders][name.toLowerCase()];
      }
      setHeader(name, value) {
        if (this.headersSent) {
          throw new ERR_HTTP_HEADERS_SENT("set");
        }
        if (typeof name !== "string" || !isValidHttpToken.test(name) && !isRequestPseudoHeader(name)) {
          throw new ERR_INVALID_HTTP_TOKEN("Header name", name);
        }
        if (typeof value === "undefined") {
          throw new ERR_HTTP_INVALID_HEADER_VALUE(value, name);
        }
        if (isInvalidHeaderValue.test(value)) {
          throw new ERR_INVALID_CHAR("header content", name);
        }
        this[kHeaders][name.toLowerCase()] = value;
      }
      setNoDelay() {
      }
      setSocketKeepAlive() {
      }
      setTimeout(ms, callback) {
        const applyTimeout = () => this._request.setTimeout(ms, callback);
        if (this._request) {
          applyTimeout();
        } else {
          this[kJobs].push(applyTimeout);
        }
        return this;
      }
      get maxHeadersCount() {
        if (!this.destroyed && this._request) {
          return this._request.session.localSettings.maxHeaderListSize;
        }
        return void 0;
      }
      set maxHeadersCount(_value) {
      }
    };
    module2.exports = ClientRequest;
  }
});

// api/ably-token-request/node_modules/resolve-alpn/index.js
var require_resolve_alpn = __commonJS({
  "api/ably-token-request/node_modules/resolve-alpn/index.js"(exports, module2) {
    "use strict";
    var tls = require("tls");
    module2.exports = (options = {}, connect = tls.connect) => new Promise((resolve, reject) => {
      let timeout = false;
      let socket;
      const callback = async () => {
        await socketPromise;
        socket.off("timeout", onTimeout);
        socket.off("error", reject);
        if (options.resolveSocket) {
          resolve({ alpnProtocol: socket.alpnProtocol, socket, timeout });
          if (timeout) {
            await Promise.resolve();
            socket.emit("timeout");
          }
        } else {
          socket.destroy();
          resolve({ alpnProtocol: socket.alpnProtocol, timeout });
        }
      };
      const onTimeout = async () => {
        timeout = true;
        callback();
      };
      const socketPromise = (async () => {
        try {
          socket = await connect(options, callback);
          socket.on("error", reject);
          socket.once("timeout", onTimeout);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }
});

// api/ably-token-request/node_modules/http2-wrapper/source/utils/calculate-server-name.js
var require_calculate_server_name = __commonJS({
  "api/ably-token-request/node_modules/http2-wrapper/source/utils/calculate-server-name.js"(exports, module2) {
    "use strict";
    var net = require("net");
    module2.exports = (options) => {
      let servername = options.host;
      const hostHeader = options.headers && options.headers.host;
      if (hostHeader) {
        if (hostHeader.startsWith("[")) {
          const index = hostHeader.indexOf("]");
          if (index === -1) {
            servername = hostHeader;
          } else {
            servername = hostHeader.slice(1, -1);
          }
        } else {
          servername = hostHeader.split(":", 1)[0];
        }
      }
      if (net.isIP(servername)) {
        return "";
      }
      return servername;
    };
  }
});

// api/ably-token-request/node_modules/http2-wrapper/source/auto.js
var require_auto = __commonJS({
  "api/ably-token-request/node_modules/http2-wrapper/source/auto.js"(exports, module2) {
    "use strict";
    var http = require("http");
    var https = require("https");
    var resolveALPN = require_resolve_alpn();
    var QuickLRU = require_quick_lru();
    var Http2ClientRequest = require_client_request();
    var calculateServerName = require_calculate_server_name();
    var urlToOptions = require_url_to_options();
    var cache = new QuickLRU({ maxSize: 100 });
    var queue = /* @__PURE__ */ new Map();
    var installSocket = (agent, socket, options) => {
      socket._httpMessage = { shouldKeepAlive: true };
      const onFree = () => {
        agent.emit("free", socket, options);
      };
      socket.on("free", onFree);
      const onClose = () => {
        agent.removeSocket(socket, options);
      };
      socket.on("close", onClose);
      const onRemove = () => {
        agent.removeSocket(socket, options);
        socket.off("close", onClose);
        socket.off("free", onFree);
        socket.off("agentRemove", onRemove);
      };
      socket.on("agentRemove", onRemove);
      agent.emit("free", socket, options);
    };
    var resolveProtocol = async (options) => {
      const name = `${options.host}:${options.port}:${options.ALPNProtocols.sort()}`;
      if (!cache.has(name)) {
        if (queue.has(name)) {
          const result = await queue.get(name);
          return result.alpnProtocol;
        }
        const { path, agent } = options;
        options.path = options.socketPath;
        const resultPromise = resolveALPN(options);
        queue.set(name, resultPromise);
        try {
          const { socket, alpnProtocol } = await resultPromise;
          cache.set(name, alpnProtocol);
          options.path = path;
          if (alpnProtocol === "h2") {
            socket.destroy();
          } else {
            const { globalAgent } = https;
            const defaultCreateConnection = https.Agent.prototype.createConnection;
            if (agent) {
              if (agent.createConnection === defaultCreateConnection) {
                installSocket(agent, socket, options);
              } else {
                socket.destroy();
              }
            } else if (globalAgent.createConnection === defaultCreateConnection) {
              installSocket(globalAgent, socket, options);
            } else {
              socket.destroy();
            }
          }
          queue.delete(name);
          return alpnProtocol;
        } catch (error) {
          queue.delete(name);
          throw error;
        }
      }
      return cache.get(name);
    };
    module2.exports = async (input, options, callback) => {
      if (typeof input === "string" || input instanceof URL) {
        input = urlToOptions(new URL(input));
      }
      if (typeof options === "function") {
        callback = options;
        options = void 0;
      }
      options = __spreadProps(__spreadValues(__spreadValues({
        ALPNProtocols: ["h2", "http/1.1"]
      }, input), options), {
        resolveSocket: true
      });
      if (!Array.isArray(options.ALPNProtocols) || options.ALPNProtocols.length === 0) {
        throw new Error("The `ALPNProtocols` option must be an Array with at least one entry");
      }
      options.protocol = options.protocol || "https:";
      const isHttps = options.protocol === "https:";
      options.host = options.hostname || options.host || "localhost";
      options.session = options.tlsSession;
      options.servername = options.servername || calculateServerName(options);
      options.port = options.port || (isHttps ? 443 : 80);
      options._defaultAgent = isHttps ? https.globalAgent : http.globalAgent;
      const agents = options.agent;
      if (agents) {
        if (agents.addRequest) {
          throw new Error("The `options.agent` object can contain only `http`, `https` or `http2` properties");
        }
        options.agent = agents[isHttps ? "https" : "http"];
      }
      if (isHttps) {
        const protocol = await resolveProtocol(options);
        if (protocol === "h2") {
          if (agents) {
            options.agent = agents.http2;
          }
          return new Http2ClientRequest(options, callback);
        }
      }
      return http.request(options, callback);
    };
    module2.exports.protocolCache = cache;
  }
});

// api/ably-token-request/node_modules/http2-wrapper/source/index.js
var require_source4 = __commonJS({
  "api/ably-token-request/node_modules/http2-wrapper/source/index.js"(exports, module2) {
    "use strict";
    var http2 = require("http2");
    var agent = require_agent();
    var ClientRequest = require_client_request();
    var IncomingMessage = require_incoming_message();
    var auto = require_auto();
    var request = (url, options, callback) => {
      return new ClientRequest(url, options, callback);
    };
    var get = (url, options, callback) => {
      const req = new ClientRequest(url, options, callback);
      req.end();
      return req;
    };
    module2.exports = __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, http2), {
      ClientRequest,
      IncomingMessage
    }), agent), {
      request,
      get,
      auto
    });
  }
});

// api/ably-token-request/node_modules/got/dist/source/core/utils/is-form-data.js
var require_is_form_data = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/core/utils/is-form-data.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var is_1 = require_dist();
    exports.default = (body) => is_1.default.nodeStream(body) && is_1.default.function_(body.getBoundary);
  }
});

// api/ably-token-request/node_modules/got/dist/source/core/utils/get-body-size.js
var require_get_body_size = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/core/utils/get-body-size.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fs_1 = require("fs");
    var util_1 = require("util");
    var is_1 = require_dist();
    var is_form_data_1 = require_is_form_data();
    var statAsync = util_1.promisify(fs_1.stat);
    exports.default = async (body, headers) => {
      if (headers && "content-length" in headers) {
        return Number(headers["content-length"]);
      }
      if (!body) {
        return 0;
      }
      if (is_1.default.string(body)) {
        return Buffer.byteLength(body);
      }
      if (is_1.default.buffer(body)) {
        return body.length;
      }
      if (is_form_data_1.default(body)) {
        return util_1.promisify(body.getLength.bind(body))();
      }
      if (body instanceof fs_1.ReadStream) {
        const { size } = await statAsync(body.path);
        if (size === 0) {
          return void 0;
        }
        return size;
      }
      return void 0;
    };
  }
});

// api/ably-token-request/node_modules/got/dist/source/core/utils/proxy-events.js
var require_proxy_events2 = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/core/utils/proxy-events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_1(from, to, events) {
      const fns = {};
      for (const event of events) {
        fns[event] = (...args) => {
          to.emit(event, ...args);
        };
        from.on(event, fns[event]);
      }
      return () => {
        for (const event of events) {
          from.off(event, fns[event]);
        }
      };
    }
    exports.default = default_1;
  }
});

// api/ably-token-request/node_modules/got/dist/source/core/utils/unhandle.js
var require_unhandle = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/core/utils/unhandle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = () => {
      const handlers = [];
      return {
        once(origin, event, fn) {
          origin.once(event, fn);
          handlers.push({ origin, event, fn });
        },
        unhandleAll() {
          for (const handler2 of handlers) {
            const { origin, event, fn } = handler2;
            origin.removeListener(event, fn);
          }
          handlers.length = 0;
        }
      };
    };
  }
});

// api/ably-token-request/node_modules/got/dist/source/core/utils/timed-out.js
var require_timed_out = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/core/utils/timed-out.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TimeoutError = void 0;
    var net = require("net");
    var unhandle_1 = require_unhandle();
    var reentry = Symbol("reentry");
    var noop = () => {
    };
    var TimeoutError = class extends Error {
      constructor(threshold, event) {
        super(`Timeout awaiting '${event}' for ${threshold}ms`);
        this.event = event;
        this.name = "TimeoutError";
        this.code = "ETIMEDOUT";
      }
    };
    exports.TimeoutError = TimeoutError;
    exports.default = (request, delays, options) => {
      if (reentry in request) {
        return noop;
      }
      request[reentry] = true;
      const cancelers = [];
      const { once, unhandleAll } = unhandle_1.default();
      const addTimeout = (delay, callback, event) => {
        var _a;
        const timeout = setTimeout(callback, delay, delay, event);
        (_a = timeout.unref) === null || _a === void 0 ? void 0 : _a.call(timeout);
        const cancel = () => {
          clearTimeout(timeout);
        };
        cancelers.push(cancel);
        return cancel;
      };
      const { host, hostname } = options;
      const timeoutHandler = (delay, event) => {
        request.destroy(new TimeoutError(delay, event));
      };
      const cancelTimeouts = () => {
        for (const cancel of cancelers) {
          cancel();
        }
        unhandleAll();
      };
      request.once("error", (error) => {
        cancelTimeouts();
        if (request.listenerCount("error") === 0) {
          throw error;
        }
      });
      request.once("close", cancelTimeouts);
      once(request, "response", (response) => {
        once(response, "end", cancelTimeouts);
      });
      if (typeof delays.request !== "undefined") {
        addTimeout(delays.request, timeoutHandler, "request");
      }
      if (typeof delays.socket !== "undefined") {
        const socketTimeoutHandler = () => {
          timeoutHandler(delays.socket, "socket");
        };
        request.setTimeout(delays.socket, socketTimeoutHandler);
        cancelers.push(() => {
          request.removeListener("timeout", socketTimeoutHandler);
        });
      }
      once(request, "socket", (socket) => {
        var _a;
        const { socketPath } = request;
        if (socket.connecting) {
          const hasPath = Boolean(socketPath !== null && socketPath !== void 0 ? socketPath : net.isIP((_a = hostname !== null && hostname !== void 0 ? hostname : host) !== null && _a !== void 0 ? _a : "") !== 0);
          if (typeof delays.lookup !== "undefined" && !hasPath && typeof socket.address().address === "undefined") {
            const cancelTimeout = addTimeout(delays.lookup, timeoutHandler, "lookup");
            once(socket, "lookup", cancelTimeout);
          }
          if (typeof delays.connect !== "undefined") {
            const timeConnect = () => addTimeout(delays.connect, timeoutHandler, "connect");
            if (hasPath) {
              once(socket, "connect", timeConnect());
            } else {
              once(socket, "lookup", (error) => {
                if (error === null) {
                  once(socket, "connect", timeConnect());
                }
              });
            }
          }
          if (typeof delays.secureConnect !== "undefined" && options.protocol === "https:") {
            once(socket, "connect", () => {
              const cancelTimeout = addTimeout(delays.secureConnect, timeoutHandler, "secureConnect");
              once(socket, "secureConnect", cancelTimeout);
            });
          }
        }
        if (typeof delays.send !== "undefined") {
          const timeRequest = () => addTimeout(delays.send, timeoutHandler, "send");
          if (socket.connecting) {
            once(socket, "connect", () => {
              once(request, "upload-complete", timeRequest());
            });
          } else {
            once(request, "upload-complete", timeRequest());
          }
        }
      });
      if (typeof delays.response !== "undefined") {
        once(request, "upload-complete", () => {
          const cancelTimeout = addTimeout(delays.response, timeoutHandler, "response");
          once(request, "response", cancelTimeout);
        });
      }
      return cancelTimeouts;
    };
  }
});

// api/ably-token-request/node_modules/got/dist/source/core/utils/url-to-options.js
var require_url_to_options2 = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/core/utils/url-to-options.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var is_1 = require_dist();
    exports.default = (url) => {
      url = url;
      const options = {
        protocol: url.protocol,
        hostname: is_1.default.string(url.hostname) && url.hostname.startsWith("[") ? url.hostname.slice(1, -1) : url.hostname,
        host: url.host,
        hash: url.hash,
        search: url.search,
        pathname: url.pathname,
        href: url.href,
        path: `${url.pathname || ""}${url.search || ""}`
      };
      if (is_1.default.string(url.port) && url.port.length > 0) {
        options.port = Number(url.port);
      }
      if (url.username || url.password) {
        options.auth = `${url.username || ""}:${url.password || ""}`;
      }
      return options;
    };
  }
});

// api/ably-token-request/node_modules/got/dist/source/core/utils/options-to-url.js
var require_options_to_url = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/core/utils/options-to-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var url_1 = require("url");
    var keys = [
      "protocol",
      "host",
      "hostname",
      "port",
      "pathname",
      "search"
    ];
    exports.default = (origin, options) => {
      var _a, _b;
      if (options.path) {
        if (options.pathname) {
          throw new TypeError("Parameters `path` and `pathname` are mutually exclusive.");
        }
        if (options.search) {
          throw new TypeError("Parameters `path` and `search` are mutually exclusive.");
        }
        if (options.searchParams) {
          throw new TypeError("Parameters `path` and `searchParams` are mutually exclusive.");
        }
      }
      if (options.search && options.searchParams) {
        throw new TypeError("Parameters `search` and `searchParams` are mutually exclusive.");
      }
      if (!origin) {
        if (!options.protocol) {
          throw new TypeError("No URL protocol specified");
        }
        origin = `${options.protocol}//${(_b = (_a = options.hostname) !== null && _a !== void 0 ? _a : options.host) !== null && _b !== void 0 ? _b : ""}`;
      }
      const url = new url_1.URL(origin);
      if (options.path) {
        const searchIndex = options.path.indexOf("?");
        if (searchIndex === -1) {
          options.pathname = options.path;
        } else {
          options.pathname = options.path.slice(0, searchIndex);
          options.search = options.path.slice(searchIndex + 1);
        }
        delete options.path;
      }
      for (const key of keys) {
        if (options[key]) {
          url[key] = options[key].toString();
        }
      }
      return url;
    };
  }
});

// api/ably-token-request/node_modules/got/dist/source/core/utils/weakable-map.js
var require_weakable_map = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/core/utils/weakable-map.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WeakableMap = class {
      constructor() {
        this.weakMap = /* @__PURE__ */ new WeakMap();
        this.map = /* @__PURE__ */ new Map();
      }
      set(key, value) {
        if (typeof key === "object") {
          this.weakMap.set(key, value);
        } else {
          this.map.set(key, value);
        }
      }
      get(key) {
        if (typeof key === "object") {
          return this.weakMap.get(key);
        }
        return this.map.get(key);
      }
      has(key) {
        if (typeof key === "object") {
          return this.weakMap.has(key);
        }
        return this.map.has(key);
      }
    };
    exports.default = WeakableMap;
  }
});

// api/ably-token-request/node_modules/got/dist/source/core/utils/get-buffer.js
var require_get_buffer = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/core/utils/get-buffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getBuffer = async (stream) => {
      const chunks = [];
      let length = 0;
      for await (const chunk of stream) {
        chunks.push(chunk);
        length += Buffer.byteLength(chunk);
      }
      if (Buffer.isBuffer(chunks[0])) {
        return Buffer.concat(chunks, length);
      }
      return Buffer.from(chunks.join(""));
    };
    exports.default = getBuffer;
  }
});

// api/ably-token-request/node_modules/got/dist/source/core/utils/dns-ip-version.js
var require_dns_ip_version = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/core/utils/dns-ip-version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dnsLookupIpVersionToFamily = exports.isDnsLookupIpVersion = void 0;
    var conversionTable = {
      auto: 0,
      ipv4: 4,
      ipv6: 6
    };
    exports.isDnsLookupIpVersion = (value) => {
      return value in conversionTable;
    };
    exports.dnsLookupIpVersionToFamily = (dnsLookupIpVersion) => {
      if (exports.isDnsLookupIpVersion(dnsLookupIpVersion)) {
        return conversionTable[dnsLookupIpVersion];
      }
      throw new Error("Invalid DNS lookup IP version");
    };
  }
});

// api/ably-token-request/node_modules/got/dist/source/core/utils/is-response-ok.js
var require_is_response_ok = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/core/utils/is-response-ok.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isResponseOk = void 0;
    exports.isResponseOk = (response) => {
      const { statusCode } = response;
      const limitStatusCode = response.request.options.followRedirect ? 299 : 399;
      return statusCode >= 200 && statusCode <= limitStatusCode || statusCode === 304;
    };
  }
});

// api/ably-token-request/node_modules/got/dist/source/utils/deprecation-warning.js
var require_deprecation_warning = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/utils/deprecation-warning.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var alreadyWarned = /* @__PURE__ */ new Set();
    exports.default = (message) => {
      if (alreadyWarned.has(message)) {
        return;
      }
      alreadyWarned.add(message);
      process.emitWarning(`Got: ${message}`, {
        type: "DeprecationWarning"
      });
    };
  }
});

// api/ably-token-request/node_modules/got/dist/source/as-promise/normalize-arguments.js
var require_normalize_arguments = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/as-promise/normalize-arguments.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var is_1 = require_dist();
    var normalizeArguments = (options, defaults) => {
      if (is_1.default.null_(options.encoding)) {
        throw new TypeError("To get a Buffer, set `options.responseType` to `buffer` instead");
      }
      is_1.assert.any([is_1.default.string, is_1.default.undefined], options.encoding);
      is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.resolveBodyOnly);
      is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.methodRewriting);
      is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.isStream);
      is_1.assert.any([is_1.default.string, is_1.default.undefined], options.responseType);
      if (options.responseType === void 0) {
        options.responseType = "text";
      }
      const { retry } = options;
      if (defaults) {
        options.retry = __spreadValues({}, defaults.retry);
      } else {
        options.retry = {
          calculateDelay: (retryObject) => retryObject.computedValue,
          limit: 0,
          methods: [],
          statusCodes: [],
          errorCodes: [],
          maxRetryAfter: void 0
        };
      }
      if (is_1.default.object(retry)) {
        options.retry = __spreadValues(__spreadValues({}, options.retry), retry);
        options.retry.methods = [...new Set(options.retry.methods.map((method) => method.toUpperCase()))];
        options.retry.statusCodes = [...new Set(options.retry.statusCodes)];
        options.retry.errorCodes = [...new Set(options.retry.errorCodes)];
      } else if (is_1.default.number(retry)) {
        options.retry.limit = retry;
      }
      if (is_1.default.undefined(options.retry.maxRetryAfter)) {
        options.retry.maxRetryAfter = Math.min(...[options.timeout.request, options.timeout.connect].filter(is_1.default.number));
      }
      if (is_1.default.object(options.pagination)) {
        if (defaults) {
          options.pagination = __spreadValues(__spreadValues({}, defaults.pagination), options.pagination);
        }
        const { pagination } = options;
        if (!is_1.default.function_(pagination.transform)) {
          throw new Error("`options.pagination.transform` must be implemented");
        }
        if (!is_1.default.function_(pagination.shouldContinue)) {
          throw new Error("`options.pagination.shouldContinue` must be implemented");
        }
        if (!is_1.default.function_(pagination.filter)) {
          throw new TypeError("`options.pagination.filter` must be implemented");
        }
        if (!is_1.default.function_(pagination.paginate)) {
          throw new Error("`options.pagination.paginate` must be implemented");
        }
      }
      if (options.responseType === "json" && options.headers.accept === void 0) {
        options.headers.accept = "application/json";
      }
      return options;
    };
    exports.default = normalizeArguments;
  }
});

// api/ably-token-request/node_modules/got/dist/source/core/calculate-retry-delay.js
var require_calculate_retry_delay = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/core/calculate-retry-delay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.retryAfterStatusCodes = void 0;
    exports.retryAfterStatusCodes = /* @__PURE__ */ new Set([413, 429, 503]);
    var calculateRetryDelay = ({ attemptCount, retryOptions, error, retryAfter }) => {
      if (attemptCount > retryOptions.limit) {
        return 0;
      }
      const hasMethod = retryOptions.methods.includes(error.options.method);
      const hasErrorCode = retryOptions.errorCodes.includes(error.code);
      const hasStatusCode = error.response && retryOptions.statusCodes.includes(error.response.statusCode);
      if (!hasMethod || !hasErrorCode && !hasStatusCode) {
        return 0;
      }
      if (error.response) {
        if (retryAfter) {
          if (retryOptions.maxRetryAfter === void 0 || retryAfter > retryOptions.maxRetryAfter) {
            return 0;
          }
          return retryAfter;
        }
        if (error.response.statusCode === 413) {
          return 0;
        }
      }
      const noise = Math.random() * 100;
      return 2 ** (attemptCount - 1) * 1e3 + noise;
    };
    exports.default = calculateRetryDelay;
  }
});

// api/ably-token-request/node_modules/got/dist/source/core/index.js
var require_core = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/core/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UnsupportedProtocolError = exports.ReadError = exports.TimeoutError = exports.UploadError = exports.CacheError = exports.HTTPError = exports.MaxRedirectsError = exports.RequestError = exports.setNonEnumerableProperties = exports.knownHookEvents = exports.withoutBody = exports.kIsNormalizedAlready = void 0;
    var util_1 = require("util");
    var stream_1 = require("stream");
    var fs_1 = require("fs");
    var url_1 = require("url");
    var http = require("http");
    var http_1 = require("http");
    var https = require("https");
    var http_timer_1 = require_source2();
    var cacheable_lookup_1 = require_source3();
    var CacheableRequest = require_src5();
    var decompressResponse = require_decompress_response();
    var http2wrapper = require_source4();
    var lowercaseKeys = require_lowercase_keys();
    var is_1 = require_dist();
    var get_body_size_1 = require_get_body_size();
    var is_form_data_1 = require_is_form_data();
    var proxy_events_1 = require_proxy_events2();
    var timed_out_1 = require_timed_out();
    var url_to_options_1 = require_url_to_options2();
    var options_to_url_1 = require_options_to_url();
    var weakable_map_1 = require_weakable_map();
    var get_buffer_1 = require_get_buffer();
    var dns_ip_version_1 = require_dns_ip_version();
    var is_response_ok_1 = require_is_response_ok();
    var deprecation_warning_1 = require_deprecation_warning();
    var normalize_arguments_1 = require_normalize_arguments();
    var calculate_retry_delay_1 = require_calculate_retry_delay();
    var globalDnsCache;
    var kRequest = Symbol("request");
    var kResponse = Symbol("response");
    var kResponseSize = Symbol("responseSize");
    var kDownloadedSize = Symbol("downloadedSize");
    var kBodySize = Symbol("bodySize");
    var kUploadedSize = Symbol("uploadedSize");
    var kServerResponsesPiped = Symbol("serverResponsesPiped");
    var kUnproxyEvents = Symbol("unproxyEvents");
    var kIsFromCache = Symbol("isFromCache");
    var kCancelTimeouts = Symbol("cancelTimeouts");
    var kStartedReading = Symbol("startedReading");
    var kStopReading = Symbol("stopReading");
    var kTriggerRead = Symbol("triggerRead");
    var kBody = Symbol("body");
    var kJobs = Symbol("jobs");
    var kOriginalResponse = Symbol("originalResponse");
    var kRetryTimeout = Symbol("retryTimeout");
    exports.kIsNormalizedAlready = Symbol("isNormalizedAlready");
    var supportsBrotli = is_1.default.string(process.versions.brotli);
    exports.withoutBody = /* @__PURE__ */ new Set(["GET", "HEAD"]);
    exports.knownHookEvents = [
      "init",
      "beforeRequest",
      "beforeRedirect",
      "beforeError",
      "beforeRetry",
      "afterResponse"
    ];
    function validateSearchParameters(searchParameters) {
      for (const key in searchParameters) {
        const value = searchParameters[key];
        if (!is_1.default.string(value) && !is_1.default.number(value) && !is_1.default.boolean(value) && !is_1.default.null_(value) && !is_1.default.undefined(value)) {
          throw new TypeError(`The \`searchParams\` value '${String(value)}' must be a string, number, boolean or null`);
        }
      }
    }
    function isClientRequest(clientRequest) {
      return is_1.default.object(clientRequest) && !("statusCode" in clientRequest);
    }
    var cacheableStore = new weakable_map_1.default();
    var waitForOpenFile = async (file) => new Promise((resolve, reject) => {
      const onError = (error) => {
        reject(error);
      };
      if (!file.pending) {
        resolve();
      }
      file.once("error", onError);
      file.once("ready", () => {
        file.off("error", onError);
        resolve();
      });
    });
    var redirectCodes = /* @__PURE__ */ new Set([300, 301, 302, 303, 304, 307, 308]);
    var nonEnumerableProperties = [
      "context",
      "body",
      "json",
      "form"
    ];
    exports.setNonEnumerableProperties = (sources, to) => {
      const properties = {};
      for (const source of sources) {
        if (!source) {
          continue;
        }
        for (const name of nonEnumerableProperties) {
          if (!(name in source)) {
            continue;
          }
          properties[name] = {
            writable: true,
            configurable: true,
            enumerable: false,
            value: source[name]
          };
        }
      }
      Object.defineProperties(to, properties);
    };
    var RequestError = class extends Error {
      constructor(message, error, self2) {
        var _a, _b;
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = "RequestError";
        this.code = (_a = error.code) !== null && _a !== void 0 ? _a : "ERR_GOT_REQUEST_ERROR";
        if (self2 instanceof Request) {
          Object.defineProperty(this, "request", {
            enumerable: false,
            value: self2
          });
          Object.defineProperty(this, "response", {
            enumerable: false,
            value: self2[kResponse]
          });
          Object.defineProperty(this, "options", {
            enumerable: false,
            value: self2.options
          });
        } else {
          Object.defineProperty(this, "options", {
            enumerable: false,
            value: self2
          });
        }
        this.timings = (_b = this.request) === null || _b === void 0 ? void 0 : _b.timings;
        if (is_1.default.string(error.stack) && is_1.default.string(this.stack)) {
          const indexOfMessage = this.stack.indexOf(this.message) + this.message.length;
          const thisStackTrace = this.stack.slice(indexOfMessage).split("\n").reverse();
          const errorStackTrace = error.stack.slice(error.stack.indexOf(error.message) + error.message.length).split("\n").reverse();
          while (errorStackTrace.length !== 0 && errorStackTrace[0] === thisStackTrace[0]) {
            thisStackTrace.shift();
          }
          this.stack = `${this.stack.slice(0, indexOfMessage)}${thisStackTrace.reverse().join("\n")}${errorStackTrace.reverse().join("\n")}`;
        }
      }
    };
    exports.RequestError = RequestError;
    var MaxRedirectsError = class extends RequestError {
      constructor(request) {
        super(`Redirected ${request.options.maxRedirects} times. Aborting.`, {}, request);
        this.name = "MaxRedirectsError";
        this.code = "ERR_TOO_MANY_REDIRECTS";
      }
    };
    exports.MaxRedirectsError = MaxRedirectsError;
    var HTTPError = class extends RequestError {
      constructor(response) {
        super(`Response code ${response.statusCode} (${response.statusMessage})`, {}, response.request);
        this.name = "HTTPError";
        this.code = "ERR_NON_2XX_3XX_RESPONSE";
      }
    };
    exports.HTTPError = HTTPError;
    var CacheError = class extends RequestError {
      constructor(error, request) {
        super(error.message, error, request);
        this.name = "CacheError";
        this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_CACHE_ACCESS" : this.code;
      }
    };
    exports.CacheError = CacheError;
    var UploadError = class extends RequestError {
      constructor(error, request) {
        super(error.message, error, request);
        this.name = "UploadError";
        this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_UPLOAD" : this.code;
      }
    };
    exports.UploadError = UploadError;
    var TimeoutError = class extends RequestError {
      constructor(error, timings, request) {
        super(error.message, error, request);
        this.name = "TimeoutError";
        this.event = error.event;
        this.timings = timings;
      }
    };
    exports.TimeoutError = TimeoutError;
    var ReadError = class extends RequestError {
      constructor(error, request) {
        super(error.message, error, request);
        this.name = "ReadError";
        this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_READING_RESPONSE_STREAM" : this.code;
      }
    };
    exports.ReadError = ReadError;
    var UnsupportedProtocolError = class extends RequestError {
      constructor(options) {
        super(`Unsupported protocol "${options.url.protocol}"`, {}, options);
        this.name = "UnsupportedProtocolError";
        this.code = "ERR_UNSUPPORTED_PROTOCOL";
      }
    };
    exports.UnsupportedProtocolError = UnsupportedProtocolError;
    var proxiedRequestEvents = [
      "socket",
      "connect",
      "continue",
      "information",
      "upgrade",
      "timeout"
    ];
    var Request = class extends stream_1.Duplex {
      constructor(url, options = {}, defaults) {
        super({
          autoDestroy: false,
          highWaterMark: 0
        });
        this[kDownloadedSize] = 0;
        this[kUploadedSize] = 0;
        this.requestInitialized = false;
        this[kServerResponsesPiped] = /* @__PURE__ */ new Set();
        this.redirects = [];
        this[kStopReading] = false;
        this[kTriggerRead] = false;
        this[kJobs] = [];
        this.retryCount = 0;
        this._progressCallbacks = [];
        const unlockWrite = () => this._unlockWrite();
        const lockWrite = () => this._lockWrite();
        this.on("pipe", (source) => {
          source.prependListener("data", unlockWrite);
          source.on("data", lockWrite);
          source.prependListener("end", unlockWrite);
          source.on("end", lockWrite);
        });
        this.on("unpipe", (source) => {
          source.off("data", unlockWrite);
          source.off("data", lockWrite);
          source.off("end", unlockWrite);
          source.off("end", lockWrite);
        });
        this.on("pipe", (source) => {
          if (source instanceof http_1.IncomingMessage) {
            this.options.headers = __spreadValues(__spreadValues({}, source.headers), this.options.headers);
          }
        });
        const { json, body, form } = options;
        if (json || body || form) {
          this._lockWrite();
        }
        if (exports.kIsNormalizedAlready in options) {
          this.options = options;
        } else {
          try {
            this.options = this.constructor.normalizeArguments(url, options, defaults);
          } catch (error) {
            if (is_1.default.nodeStream(options.body)) {
              options.body.destroy();
            }
            this.destroy(error);
            return;
          }
        }
        (async () => {
          var _a;
          try {
            if (this.options.body instanceof fs_1.ReadStream) {
              await waitForOpenFile(this.options.body);
            }
            const { url: normalizedURL } = this.options;
            if (!normalizedURL) {
              throw new TypeError("Missing `url` property");
            }
            this.requestUrl = normalizedURL.toString();
            decodeURI(this.requestUrl);
            await this._finalizeBody();
            await this._makeRequest();
            if (this.destroyed) {
              (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.destroy();
              return;
            }
            for (const job of this[kJobs]) {
              job();
            }
            this[kJobs].length = 0;
            this.requestInitialized = true;
          } catch (error) {
            if (error instanceof RequestError) {
              this._beforeError(error);
              return;
            }
            if (!this.destroyed) {
              this.destroy(error);
            }
          }
        })();
      }
      static normalizeArguments(url, options, defaults) {
        var _a, _b, _c, _d, _e;
        const rawOptions = options;
        if (is_1.default.object(url) && !is_1.default.urlInstance(url)) {
          options = __spreadValues(__spreadValues(__spreadValues({}, defaults), url), options);
        } else {
          if (url && options && options.url !== void 0) {
            throw new TypeError("The `url` option is mutually exclusive with the `input` argument");
          }
          options = __spreadValues(__spreadValues({}, defaults), options);
          if (url !== void 0) {
            options.url = url;
          }
          if (is_1.default.urlInstance(options.url)) {
            options.url = new url_1.URL(options.url.toString());
          }
        }
        if (options.cache === false) {
          options.cache = void 0;
        }
        if (options.dnsCache === false) {
          options.dnsCache = void 0;
        }
        is_1.assert.any([is_1.default.string, is_1.default.undefined], options.method);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.headers);
        is_1.assert.any([is_1.default.string, is_1.default.urlInstance, is_1.default.undefined], options.prefixUrl);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.cookieJar);
        is_1.assert.any([is_1.default.object, is_1.default.string, is_1.default.undefined], options.searchParams);
        is_1.assert.any([is_1.default.object, is_1.default.string, is_1.default.undefined], options.cache);
        is_1.assert.any([is_1.default.object, is_1.default.number, is_1.default.undefined], options.timeout);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.context);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.hooks);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.decompress);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.ignoreInvalidCookies);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.followRedirect);
        is_1.assert.any([is_1.default.number, is_1.default.undefined], options.maxRedirects);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.throwHttpErrors);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.http2);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.allowGetBody);
        is_1.assert.any([is_1.default.string, is_1.default.undefined], options.localAddress);
        is_1.assert.any([dns_ip_version_1.isDnsLookupIpVersion, is_1.default.undefined], options.dnsLookupIpVersion);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.https);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.rejectUnauthorized);
        if (options.https) {
          is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.https.rejectUnauthorized);
          is_1.assert.any([is_1.default.function_, is_1.default.undefined], options.https.checkServerIdentity);
          is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.certificateAuthority);
          is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.key);
          is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.certificate);
          is_1.assert.any([is_1.default.string, is_1.default.undefined], options.https.passphrase);
          is_1.assert.any([is_1.default.string, is_1.default.buffer, is_1.default.array, is_1.default.undefined], options.https.pfx);
        }
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.cacheOptions);
        if (is_1.default.string(options.method)) {
          options.method = options.method.toUpperCase();
        } else {
          options.method = "GET";
        }
        if (options.headers === (defaults === null || defaults === void 0 ? void 0 : defaults.headers)) {
          options.headers = __spreadValues({}, options.headers);
        } else {
          options.headers = lowercaseKeys(__spreadValues(__spreadValues({}, defaults === null || defaults === void 0 ? void 0 : defaults.headers), options.headers));
        }
        if ("slashes" in options) {
          throw new TypeError("The legacy `url.Url` has been deprecated. Use `URL` instead.");
        }
        if ("auth" in options) {
          throw new TypeError("Parameter `auth` is deprecated. Use `username` / `password` instead.");
        }
        if ("searchParams" in options) {
          if (options.searchParams && options.searchParams !== (defaults === null || defaults === void 0 ? void 0 : defaults.searchParams)) {
            let searchParameters;
            if (is_1.default.string(options.searchParams) || options.searchParams instanceof url_1.URLSearchParams) {
              searchParameters = new url_1.URLSearchParams(options.searchParams);
            } else {
              validateSearchParameters(options.searchParams);
              searchParameters = new url_1.URLSearchParams();
              for (const key in options.searchParams) {
                const value = options.searchParams[key];
                if (value === null) {
                  searchParameters.append(key, "");
                } else if (value !== void 0) {
                  searchParameters.append(key, value);
                }
              }
            }
            (_a = defaults === null || defaults === void 0 ? void 0 : defaults.searchParams) === null || _a === void 0 ? void 0 : _a.forEach((value, key) => {
              if (!searchParameters.has(key)) {
                searchParameters.append(key, value);
              }
            });
            options.searchParams = searchParameters;
          }
        }
        options.username = (_b = options.username) !== null && _b !== void 0 ? _b : "";
        options.password = (_c = options.password) !== null && _c !== void 0 ? _c : "";
        if (is_1.default.undefined(options.prefixUrl)) {
          options.prefixUrl = (_d = defaults === null || defaults === void 0 ? void 0 : defaults.prefixUrl) !== null && _d !== void 0 ? _d : "";
        } else {
          options.prefixUrl = options.prefixUrl.toString();
          if (options.prefixUrl !== "" && !options.prefixUrl.endsWith("/")) {
            options.prefixUrl += "/";
          }
        }
        if (is_1.default.string(options.url)) {
          if (options.url.startsWith("/")) {
            throw new Error("`input` must not start with a slash when using `prefixUrl`");
          }
          options.url = options_to_url_1.default(options.prefixUrl + options.url, options);
        } else if (is_1.default.undefined(options.url) && options.prefixUrl !== "" || options.protocol) {
          options.url = options_to_url_1.default(options.prefixUrl, options);
        }
        if (options.url) {
          if ("port" in options) {
            delete options.port;
          }
          let { prefixUrl } = options;
          Object.defineProperty(options, "prefixUrl", {
            set: (value) => {
              const url2 = options.url;
              if (!url2.href.startsWith(value)) {
                throw new Error(`Cannot change \`prefixUrl\` from ${prefixUrl} to ${value}: ${url2.href}`);
              }
              options.url = new url_1.URL(value + url2.href.slice(prefixUrl.length));
              prefixUrl = value;
            },
            get: () => prefixUrl
          });
          let { protocol } = options.url;
          if (protocol === "unix:") {
            protocol = "http:";
            options.url = new url_1.URL(`http://unix${options.url.pathname}${options.url.search}`);
          }
          if (options.searchParams) {
            options.url.search = options.searchParams.toString();
          }
          if (protocol !== "http:" && protocol !== "https:") {
            throw new UnsupportedProtocolError(options);
          }
          if (options.username === "") {
            options.username = options.url.username;
          } else {
            options.url.username = options.username;
          }
          if (options.password === "") {
            options.password = options.url.password;
          } else {
            options.url.password = options.password;
          }
        }
        const { cookieJar } = options;
        if (cookieJar) {
          let { setCookie, getCookieString } = cookieJar;
          is_1.assert.function_(setCookie);
          is_1.assert.function_(getCookieString);
          if (setCookie.length === 4 && getCookieString.length === 0) {
            setCookie = util_1.promisify(setCookie.bind(options.cookieJar));
            getCookieString = util_1.promisify(getCookieString.bind(options.cookieJar));
            options.cookieJar = {
              setCookie,
              getCookieString
            };
          }
        }
        const { cache } = options;
        if (cache) {
          if (!cacheableStore.has(cache)) {
            cacheableStore.set(cache, new CacheableRequest((requestOptions, handler2) => {
              const result = requestOptions[kRequest](requestOptions, handler2);
              if (is_1.default.promise(result)) {
                result.once = (event, handler3) => {
                  if (event === "error") {
                    result.catch(handler3);
                  } else if (event === "abort") {
                    (async () => {
                      try {
                        const request = await result;
                        request.once("abort", handler3);
                      } catch (_a2) {
                      }
                    })();
                  } else {
                    throw new Error(`Unknown HTTP2 promise event: ${event}`);
                  }
                  return result;
                };
              }
              return result;
            }, cache));
          }
        }
        options.cacheOptions = __spreadValues({}, options.cacheOptions);
        if (options.dnsCache === true) {
          if (!globalDnsCache) {
            globalDnsCache = new cacheable_lookup_1.default();
          }
          options.dnsCache = globalDnsCache;
        } else if (!is_1.default.undefined(options.dnsCache) && !options.dnsCache.lookup) {
          throw new TypeError(`Parameter \`dnsCache\` must be a CacheableLookup instance or a boolean, got ${is_1.default(options.dnsCache)}`);
        }
        if (is_1.default.number(options.timeout)) {
          options.timeout = { request: options.timeout };
        } else if (defaults && options.timeout !== defaults.timeout) {
          options.timeout = __spreadValues(__spreadValues({}, defaults.timeout), options.timeout);
        } else {
          options.timeout = __spreadValues({}, options.timeout);
        }
        if (!options.context) {
          options.context = {};
        }
        const areHooksDefault = options.hooks === (defaults === null || defaults === void 0 ? void 0 : defaults.hooks);
        options.hooks = __spreadValues({}, options.hooks);
        for (const event of exports.knownHookEvents) {
          if (event in options.hooks) {
            if (is_1.default.array(options.hooks[event])) {
              options.hooks[event] = [...options.hooks[event]];
            } else {
              throw new TypeError(`Parameter \`${event}\` must be an Array, got ${is_1.default(options.hooks[event])}`);
            }
          } else {
            options.hooks[event] = [];
          }
        }
        if (defaults && !areHooksDefault) {
          for (const event of exports.knownHookEvents) {
            const defaultHooks = defaults.hooks[event];
            if (defaultHooks.length > 0) {
              options.hooks[event] = [
                ...defaults.hooks[event],
                ...options.hooks[event]
              ];
            }
          }
        }
        if ("family" in options) {
          deprecation_warning_1.default('"options.family" was never documented, please use "options.dnsLookupIpVersion"');
        }
        if (defaults === null || defaults === void 0 ? void 0 : defaults.https) {
          options.https = __spreadValues(__spreadValues({}, defaults.https), options.https);
        }
        if ("rejectUnauthorized" in options) {
          deprecation_warning_1.default('"options.rejectUnauthorized" is now deprecated, please use "options.https.rejectUnauthorized"');
        }
        if ("checkServerIdentity" in options) {
          deprecation_warning_1.default('"options.checkServerIdentity" was never documented, please use "options.https.checkServerIdentity"');
        }
        if ("ca" in options) {
          deprecation_warning_1.default('"options.ca" was never documented, please use "options.https.certificateAuthority"');
        }
        if ("key" in options) {
          deprecation_warning_1.default('"options.key" was never documented, please use "options.https.key"');
        }
        if ("cert" in options) {
          deprecation_warning_1.default('"options.cert" was never documented, please use "options.https.certificate"');
        }
        if ("passphrase" in options) {
          deprecation_warning_1.default('"options.passphrase" was never documented, please use "options.https.passphrase"');
        }
        if ("pfx" in options) {
          deprecation_warning_1.default('"options.pfx" was never documented, please use "options.https.pfx"');
        }
        if ("followRedirects" in options) {
          throw new TypeError("The `followRedirects` option does not exist. Use `followRedirect` instead.");
        }
        if (options.agent) {
          for (const key in options.agent) {
            if (key !== "http" && key !== "https" && key !== "http2") {
              throw new TypeError(`Expected the \`options.agent\` properties to be \`http\`, \`https\` or \`http2\`, got \`${key}\``);
            }
          }
        }
        options.maxRedirects = (_e = options.maxRedirects) !== null && _e !== void 0 ? _e : 0;
        exports.setNonEnumerableProperties([defaults, rawOptions], options);
        return normalize_arguments_1.default(options, defaults);
      }
      _lockWrite() {
        const onLockedWrite = () => {
          throw new TypeError("The payload has been already provided");
        };
        this.write = onLockedWrite;
        this.end = onLockedWrite;
      }
      _unlockWrite() {
        this.write = super.write;
        this.end = super.end;
      }
      async _finalizeBody() {
        const { options } = this;
        const { headers } = options;
        const isForm = !is_1.default.undefined(options.form);
        const isJSON = !is_1.default.undefined(options.json);
        const isBody = !is_1.default.undefined(options.body);
        const hasPayload = isForm || isJSON || isBody;
        const cannotHaveBody = exports.withoutBody.has(options.method) && !(options.method === "GET" && options.allowGetBody);
        this._cannotHaveBody = cannotHaveBody;
        if (hasPayload) {
          if (cannotHaveBody) {
            throw new TypeError(`The \`${options.method}\` method cannot be used with a body`);
          }
          if ([isBody, isForm, isJSON].filter((isTrue) => isTrue).length > 1) {
            throw new TypeError("The `body`, `json` and `form` options are mutually exclusive");
          }
          if (isBody && !(options.body instanceof stream_1.Readable) && !is_1.default.string(options.body) && !is_1.default.buffer(options.body) && !is_form_data_1.default(options.body)) {
            throw new TypeError("The `body` option must be a stream.Readable, string or Buffer");
          }
          if (isForm && !is_1.default.object(options.form)) {
            throw new TypeError("The `form` option must be an Object");
          }
          {
            const noContentType = !is_1.default.string(headers["content-type"]);
            if (isBody) {
              if (is_form_data_1.default(options.body) && noContentType) {
                headers["content-type"] = `multipart/form-data; boundary=${options.body.getBoundary()}`;
              }
              this[kBody] = options.body;
            } else if (isForm) {
              if (noContentType) {
                headers["content-type"] = "application/x-www-form-urlencoded";
              }
              this[kBody] = new url_1.URLSearchParams(options.form).toString();
            } else {
              if (noContentType) {
                headers["content-type"] = "application/json";
              }
              this[kBody] = options.stringifyJson(options.json);
            }
            const uploadBodySize = await get_body_size_1.default(this[kBody], options.headers);
            if (is_1.default.undefined(headers["content-length"]) && is_1.default.undefined(headers["transfer-encoding"])) {
              if (!cannotHaveBody && !is_1.default.undefined(uploadBodySize)) {
                headers["content-length"] = String(uploadBodySize);
              }
            }
          }
        } else if (cannotHaveBody) {
          this._lockWrite();
        } else {
          this._unlockWrite();
        }
        this[kBodySize] = Number(headers["content-length"]) || void 0;
      }
      async _onResponseBase(response) {
        const { options } = this;
        const { url } = options;
        this[kOriginalResponse] = response;
        if (options.decompress) {
          response = decompressResponse(response);
        }
        const statusCode = response.statusCode;
        const typedResponse = response;
        typedResponse.statusMessage = typedResponse.statusMessage ? typedResponse.statusMessage : http.STATUS_CODES[statusCode];
        typedResponse.url = options.url.toString();
        typedResponse.requestUrl = this.requestUrl;
        typedResponse.redirectUrls = this.redirects;
        typedResponse.request = this;
        typedResponse.isFromCache = response.fromCache || false;
        typedResponse.ip = this.ip;
        typedResponse.retryCount = this.retryCount;
        this[kIsFromCache] = typedResponse.isFromCache;
        this[kResponseSize] = Number(response.headers["content-length"]) || void 0;
        this[kResponse] = response;
        response.once("end", () => {
          this[kResponseSize] = this[kDownloadedSize];
          this.emit("downloadProgress", this.downloadProgress);
        });
        response.once("error", (error) => {
          response.destroy();
          this._beforeError(new ReadError(error, this));
        });
        response.once("aborted", () => {
          this._beforeError(new ReadError({
            name: "Error",
            message: "The server aborted pending request",
            code: "ECONNRESET"
          }, this));
        });
        this.emit("downloadProgress", this.downloadProgress);
        const rawCookies = response.headers["set-cookie"];
        if (is_1.default.object(options.cookieJar) && rawCookies) {
          let promises = rawCookies.map(async (rawCookie) => options.cookieJar.setCookie(rawCookie, url.toString()));
          if (options.ignoreInvalidCookies) {
            promises = promises.map(async (p) => p.catch(() => {
            }));
          }
          try {
            await Promise.all(promises);
          } catch (error) {
            this._beforeError(error);
            return;
          }
        }
        if (options.followRedirect && response.headers.location && redirectCodes.has(statusCode)) {
          response.resume();
          if (this[kRequest]) {
            this[kCancelTimeouts]();
            delete this[kRequest];
            this[kUnproxyEvents]();
          }
          const shouldBeGet = statusCode === 303 && options.method !== "GET" && options.method !== "HEAD";
          if (shouldBeGet || !options.methodRewriting) {
            options.method = "GET";
            if ("body" in options) {
              delete options.body;
            }
            if ("json" in options) {
              delete options.json;
            }
            if ("form" in options) {
              delete options.form;
            }
            this[kBody] = void 0;
            delete options.headers["content-length"];
          }
          if (this.redirects.length >= options.maxRedirects) {
            this._beforeError(new MaxRedirectsError(this));
            return;
          }
          try {
            let isUnixSocketURL = function(url2) {
              return url2.protocol === "unix:" || url2.hostname === "unix";
            };
            const redirectBuffer = Buffer.from(response.headers.location, "binary").toString();
            const redirectUrl = new url_1.URL(redirectBuffer, url);
            const redirectString = redirectUrl.toString();
            decodeURI(redirectString);
            if (!isUnixSocketURL(url) && isUnixSocketURL(redirectUrl)) {
              this._beforeError(new RequestError("Cannot redirect to UNIX socket", {}, this));
              return;
            }
            if (redirectUrl.hostname !== url.hostname || redirectUrl.port !== url.port) {
              if ("host" in options.headers) {
                delete options.headers.host;
              }
              if ("cookie" in options.headers) {
                delete options.headers.cookie;
              }
              if ("authorization" in options.headers) {
                delete options.headers.authorization;
              }
              if (options.username || options.password) {
                options.username = "";
                options.password = "";
              }
            } else {
              redirectUrl.username = options.username;
              redirectUrl.password = options.password;
            }
            this.redirects.push(redirectString);
            options.url = redirectUrl;
            for (const hook of options.hooks.beforeRedirect) {
              await hook(options, typedResponse);
            }
            this.emit("redirect", typedResponse, options);
            await this._makeRequest();
          } catch (error) {
            this._beforeError(error);
            return;
          }
          return;
        }
        if (options.isStream && options.throwHttpErrors && !is_response_ok_1.isResponseOk(typedResponse)) {
          this._beforeError(new HTTPError(typedResponse));
          return;
        }
        response.on("readable", () => {
          if (this[kTriggerRead]) {
            this._read();
          }
        });
        this.on("resume", () => {
          response.resume();
        });
        this.on("pause", () => {
          response.pause();
        });
        response.once("end", () => {
          this.push(null);
        });
        this.emit("response", response);
        for (const destination of this[kServerResponsesPiped]) {
          if (destination.headersSent) {
            continue;
          }
          for (const key in response.headers) {
            const isAllowed = options.decompress ? key !== "content-encoding" : true;
            const value = response.headers[key];
            if (isAllowed) {
              destination.setHeader(key, value);
            }
          }
          destination.statusCode = statusCode;
        }
      }
      async _onResponse(response) {
        try {
          await this._onResponseBase(response);
        } catch (error) {
          this._beforeError(error);
        }
      }
      _onRequest(request) {
        const { options } = this;
        const { timeout, url } = options;
        http_timer_1.default(request);
        this[kCancelTimeouts] = timed_out_1.default(request, timeout, url);
        const responseEventName = options.cache ? "cacheableResponse" : "response";
        request.once(responseEventName, (response) => {
          void this._onResponse(response);
        });
        request.once("error", (error) => {
          var _a;
          request.destroy();
          (_a = request.res) === null || _a === void 0 ? void 0 : _a.removeAllListeners("end");
          error = error instanceof timed_out_1.TimeoutError ? new TimeoutError(error, this.timings, this) : new RequestError(error.message, error, this);
          this._beforeError(error);
        });
        this[kUnproxyEvents] = proxy_events_1.default(request, this, proxiedRequestEvents);
        this[kRequest] = request;
        this.emit("uploadProgress", this.uploadProgress);
        const body = this[kBody];
        const currentRequest = this.redirects.length === 0 ? this : request;
        if (is_1.default.nodeStream(body)) {
          body.pipe(currentRequest);
          body.once("error", (error) => {
            this._beforeError(new UploadError(error, this));
          });
        } else {
          this._unlockWrite();
          if (!is_1.default.undefined(body)) {
            this._writeRequest(body, void 0, () => {
            });
            currentRequest.end();
            this._lockWrite();
          } else if (this._cannotHaveBody || this._noPipe) {
            currentRequest.end();
            this._lockWrite();
          }
        }
        this.emit("request", request);
      }
      async _createCacheableRequest(url, options) {
        return new Promise((resolve, reject) => {
          Object.assign(options, url_to_options_1.default(url));
          delete options.url;
          let request;
          const cacheRequest = cacheableStore.get(options.cache)(options, async (response) => {
            response._readableState.autoDestroy = false;
            if (request) {
              (await request).emit("cacheableResponse", response);
            }
            resolve(response);
          });
          options.url = url;
          cacheRequest.once("error", reject);
          cacheRequest.once("request", async (requestOrPromise) => {
            request = requestOrPromise;
            resolve(request);
          });
        });
      }
      async _makeRequest() {
        var _a, _b, _c, _d, _e;
        const { options } = this;
        const { headers } = options;
        for (const key in headers) {
          if (is_1.default.undefined(headers[key])) {
            delete headers[key];
          } else if (is_1.default.null_(headers[key])) {
            throw new TypeError(`Use \`undefined\` instead of \`null\` to delete the \`${key}\` header`);
          }
        }
        if (options.decompress && is_1.default.undefined(headers["accept-encoding"])) {
          headers["accept-encoding"] = supportsBrotli ? "gzip, deflate, br" : "gzip, deflate";
        }
        if (options.cookieJar) {
          const cookieString = await options.cookieJar.getCookieString(options.url.toString());
          if (is_1.default.nonEmptyString(cookieString)) {
            options.headers.cookie = cookieString;
          }
        }
        for (const hook of options.hooks.beforeRequest) {
          const result = await hook(options);
          if (!is_1.default.undefined(result)) {
            options.request = () => result;
            break;
          }
        }
        if (options.body && this[kBody] !== options.body) {
          this[kBody] = options.body;
        }
        const { agent, request, timeout, url } = options;
        if (options.dnsCache && !("lookup" in options)) {
          options.lookup = options.dnsCache.lookup;
        }
        if (url.hostname === "unix") {
          const matches = /(?<socketPath>.+?):(?<path>.+)/.exec(`${url.pathname}${url.search}`);
          if (matches === null || matches === void 0 ? void 0 : matches.groups) {
            const { socketPath, path } = matches.groups;
            Object.assign(options, {
              socketPath,
              path,
              host: ""
            });
          }
        }
        const isHttps = url.protocol === "https:";
        let fallbackFn;
        if (options.http2) {
          fallbackFn = http2wrapper.auto;
        } else {
          fallbackFn = isHttps ? https.request : http.request;
        }
        const realFn = (_a = options.request) !== null && _a !== void 0 ? _a : fallbackFn;
        const fn = options.cache ? this._createCacheableRequest : realFn;
        if (agent && !options.http2) {
          options.agent = agent[isHttps ? "https" : "http"];
        }
        options[kRequest] = realFn;
        delete options.request;
        delete options.timeout;
        const requestOptions = options;
        requestOptions.shared = (_b = options.cacheOptions) === null || _b === void 0 ? void 0 : _b.shared;
        requestOptions.cacheHeuristic = (_c = options.cacheOptions) === null || _c === void 0 ? void 0 : _c.cacheHeuristic;
        requestOptions.immutableMinTimeToLive = (_d = options.cacheOptions) === null || _d === void 0 ? void 0 : _d.immutableMinTimeToLive;
        requestOptions.ignoreCargoCult = (_e = options.cacheOptions) === null || _e === void 0 ? void 0 : _e.ignoreCargoCult;
        if (options.dnsLookupIpVersion !== void 0) {
          try {
            requestOptions.family = dns_ip_version_1.dnsLookupIpVersionToFamily(options.dnsLookupIpVersion);
          } catch (_f) {
            throw new Error("Invalid `dnsLookupIpVersion` option value");
          }
        }
        if (options.https) {
          if ("rejectUnauthorized" in options.https) {
            requestOptions.rejectUnauthorized = options.https.rejectUnauthorized;
          }
          if (options.https.checkServerIdentity) {
            requestOptions.checkServerIdentity = options.https.checkServerIdentity;
          }
          if (options.https.certificateAuthority) {
            requestOptions.ca = options.https.certificateAuthority;
          }
          if (options.https.certificate) {
            requestOptions.cert = options.https.certificate;
          }
          if (options.https.key) {
            requestOptions.key = options.https.key;
          }
          if (options.https.passphrase) {
            requestOptions.passphrase = options.https.passphrase;
          }
          if (options.https.pfx) {
            requestOptions.pfx = options.https.pfx;
          }
        }
        try {
          let requestOrResponse = await fn(url, requestOptions);
          if (is_1.default.undefined(requestOrResponse)) {
            requestOrResponse = fallbackFn(url, requestOptions);
          }
          options.request = request;
          options.timeout = timeout;
          options.agent = agent;
          if (options.https) {
            if ("rejectUnauthorized" in options.https) {
              delete requestOptions.rejectUnauthorized;
            }
            if (options.https.checkServerIdentity) {
              delete requestOptions.checkServerIdentity;
            }
            if (options.https.certificateAuthority) {
              delete requestOptions.ca;
            }
            if (options.https.certificate) {
              delete requestOptions.cert;
            }
            if (options.https.key) {
              delete requestOptions.key;
            }
            if (options.https.passphrase) {
              delete requestOptions.passphrase;
            }
            if (options.https.pfx) {
              delete requestOptions.pfx;
            }
          }
          if (isClientRequest(requestOrResponse)) {
            this._onRequest(requestOrResponse);
          } else if (this.writable) {
            this.once("finish", () => {
              void this._onResponse(requestOrResponse);
            });
            this._unlockWrite();
            this.end();
            this._lockWrite();
          } else {
            void this._onResponse(requestOrResponse);
          }
        } catch (error) {
          if (error instanceof CacheableRequest.CacheError) {
            throw new CacheError(error, this);
          }
          throw new RequestError(error.message, error, this);
        }
      }
      async _error(error) {
        try {
          for (const hook of this.options.hooks.beforeError) {
            error = await hook(error);
          }
        } catch (error_) {
          error = new RequestError(error_.message, error_, this);
        }
        this.destroy(error);
      }
      _beforeError(error) {
        if (this[kStopReading]) {
          return;
        }
        const { options } = this;
        const retryCount = this.retryCount + 1;
        this[kStopReading] = true;
        if (!(error instanceof RequestError)) {
          error = new RequestError(error.message, error, this);
        }
        const typedError = error;
        const { response } = typedError;
        void (async () => {
          if (response && !response.body) {
            response.setEncoding(this._readableState.encoding);
            try {
              response.rawBody = await get_buffer_1.default(response);
              response.body = response.rawBody.toString();
            } catch (_a) {
            }
          }
          if (this.listenerCount("retry") !== 0) {
            let backoff;
            try {
              let retryAfter;
              if (response && "retry-after" in response.headers) {
                retryAfter = Number(response.headers["retry-after"]);
                if (Number.isNaN(retryAfter)) {
                  retryAfter = Date.parse(response.headers["retry-after"]) - Date.now();
                  if (retryAfter <= 0) {
                    retryAfter = 1;
                  }
                } else {
                  retryAfter *= 1e3;
                }
              }
              backoff = await options.retry.calculateDelay({
                attemptCount: retryCount,
                retryOptions: options.retry,
                error: typedError,
                retryAfter,
                computedValue: calculate_retry_delay_1.default({
                  attemptCount: retryCount,
                  retryOptions: options.retry,
                  error: typedError,
                  retryAfter,
                  computedValue: 0
                })
              });
            } catch (error_) {
              void this._error(new RequestError(error_.message, error_, this));
              return;
            }
            if (backoff) {
              const retry = async () => {
                try {
                  for (const hook of this.options.hooks.beforeRetry) {
                    await hook(this.options, typedError, retryCount);
                  }
                } catch (error_) {
                  void this._error(new RequestError(error_.message, error, this));
                  return;
                }
                if (this.destroyed) {
                  return;
                }
                this.destroy();
                this.emit("retry", retryCount, error);
              };
              this[kRetryTimeout] = setTimeout(retry, backoff);
              return;
            }
          }
          void this._error(typedError);
        })();
      }
      _read() {
        this[kTriggerRead] = true;
        const response = this[kResponse];
        if (response && !this[kStopReading]) {
          if (response.readableLength) {
            this[kTriggerRead] = false;
          }
          let data;
          while ((data = response.read()) !== null) {
            this[kDownloadedSize] += data.length;
            this[kStartedReading] = true;
            const progress = this.downloadProgress;
            if (progress.percent < 1) {
              this.emit("downloadProgress", progress);
            }
            this.push(data);
          }
        }
      }
      _write(chunk, encoding, callback) {
        const write = () => {
          this._writeRequest(chunk, encoding, callback);
        };
        if (this.requestInitialized) {
          write();
        } else {
          this[kJobs].push(write);
        }
      }
      _writeRequest(chunk, encoding, callback) {
        if (this[kRequest].destroyed) {
          return;
        }
        this._progressCallbacks.push(() => {
          this[kUploadedSize] += Buffer.byteLength(chunk, encoding);
          const progress = this.uploadProgress;
          if (progress.percent < 1) {
            this.emit("uploadProgress", progress);
          }
        });
        this[kRequest].write(chunk, encoding, (error) => {
          if (!error && this._progressCallbacks.length > 0) {
            this._progressCallbacks.shift()();
          }
          callback(error);
        });
      }
      _final(callback) {
        const endRequest = () => {
          while (this._progressCallbacks.length !== 0) {
            this._progressCallbacks.shift()();
          }
          if (!(kRequest in this)) {
            callback();
            return;
          }
          if (this[kRequest].destroyed) {
            callback();
            return;
          }
          this[kRequest].end((error) => {
            if (!error) {
              this[kBodySize] = this[kUploadedSize];
              this.emit("uploadProgress", this.uploadProgress);
              this[kRequest].emit("upload-complete");
            }
            callback(error);
          });
        };
        if (this.requestInitialized) {
          endRequest();
        } else {
          this[kJobs].push(endRequest);
        }
      }
      _destroy(error, callback) {
        var _a;
        this[kStopReading] = true;
        clearTimeout(this[kRetryTimeout]);
        if (kRequest in this) {
          this[kCancelTimeouts]();
          if (!((_a = this[kResponse]) === null || _a === void 0 ? void 0 : _a.complete)) {
            this[kRequest].destroy();
          }
        }
        if (error !== null && !is_1.default.undefined(error) && !(error instanceof RequestError)) {
          error = new RequestError(error.message, error, this);
        }
        callback(error);
      }
      get _isAboutToError() {
        return this[kStopReading];
      }
      get ip() {
        var _a;
        return (_a = this.socket) === null || _a === void 0 ? void 0 : _a.remoteAddress;
      }
      get aborted() {
        var _a, _b, _c;
        return ((_b = (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.destroyed) !== null && _b !== void 0 ? _b : this.destroyed) && !((_c = this[kOriginalResponse]) === null || _c === void 0 ? void 0 : _c.complete);
      }
      get socket() {
        var _a, _b;
        return (_b = (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.socket) !== null && _b !== void 0 ? _b : void 0;
      }
      get downloadProgress() {
        let percent;
        if (this[kResponseSize]) {
          percent = this[kDownloadedSize] / this[kResponseSize];
        } else if (this[kResponseSize] === this[kDownloadedSize]) {
          percent = 1;
        } else {
          percent = 0;
        }
        return {
          percent,
          transferred: this[kDownloadedSize],
          total: this[kResponseSize]
        };
      }
      get uploadProgress() {
        let percent;
        if (this[kBodySize]) {
          percent = this[kUploadedSize] / this[kBodySize];
        } else if (this[kBodySize] === this[kUploadedSize]) {
          percent = 1;
        } else {
          percent = 0;
        }
        return {
          percent,
          transferred: this[kUploadedSize],
          total: this[kBodySize]
        };
      }
      get timings() {
        var _a;
        return (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.timings;
      }
      get isFromCache() {
        return this[kIsFromCache];
      }
      pipe(destination, options) {
        if (this[kStartedReading]) {
          throw new Error("Failed to pipe. The response has been emitted already.");
        }
        if (destination instanceof http_1.ServerResponse) {
          this[kServerResponsesPiped].add(destination);
        }
        return super.pipe(destination, options);
      }
      unpipe(destination) {
        if (destination instanceof http_1.ServerResponse) {
          this[kServerResponsesPiped].delete(destination);
        }
        super.unpipe(destination);
        return this;
      }
    };
    exports.default = Request;
  }
});

// api/ably-token-request/node_modules/got/dist/source/as-promise/types.js
var require_types = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/as-promise/types.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CancelError = exports.ParseError = void 0;
    var core_1 = require_core();
    var ParseError = class extends core_1.RequestError {
      constructor(error, response) {
        const { options } = response.request;
        super(`${error.message} in "${options.url.toString()}"`, error, response.request);
        this.name = "ParseError";
        this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_BODY_PARSE_FAILURE" : this.code;
      }
    };
    exports.ParseError = ParseError;
    var CancelError = class extends core_1.RequestError {
      constructor(request) {
        super("Promise was canceled", {}, request);
        this.name = "CancelError";
        this.code = "ERR_CANCELED";
      }
      get isCanceled() {
        return true;
      }
    };
    exports.CancelError = CancelError;
    __exportStar(require_core(), exports);
  }
});

// api/ably-token-request/node_modules/got/dist/source/as-promise/parse-body.js
var require_parse_body = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/as-promise/parse-body.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var types_1 = require_types();
    var parseBody = (response, responseType, parseJson, encoding) => {
      const { rawBody } = response;
      try {
        if (responseType === "text") {
          return rawBody.toString(encoding);
        }
        if (responseType === "json") {
          return rawBody.length === 0 ? "" : parseJson(rawBody.toString());
        }
        if (responseType === "buffer") {
          return rawBody;
        }
        throw new types_1.ParseError({
          message: `Unknown body type '${responseType}'`,
          name: "Error"
        }, response);
      } catch (error) {
        throw new types_1.ParseError(error, response);
      }
    };
    exports.default = parseBody;
  }
});

// api/ably-token-request/node_modules/got/dist/source/as-promise/index.js
var require_as_promise = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/as-promise/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = require("events");
    var is_1 = require_dist();
    var PCancelable = require_p_cancelable();
    var types_1 = require_types();
    var parse_body_1 = require_parse_body();
    var core_1 = require_core();
    var proxy_events_1 = require_proxy_events2();
    var get_buffer_1 = require_get_buffer();
    var is_response_ok_1 = require_is_response_ok();
    var proxiedRequestEvents = [
      "request",
      "response",
      "redirect",
      "uploadProgress",
      "downloadProgress"
    ];
    function asPromise(normalizedOptions) {
      let globalRequest;
      let globalResponse;
      const emitter = new events_1.EventEmitter();
      const promise = new PCancelable((resolve, reject, onCancel) => {
        const makeRequest = (retryCount) => {
          const request = new core_1.default(void 0, normalizedOptions);
          request.retryCount = retryCount;
          request._noPipe = true;
          onCancel(() => request.destroy());
          onCancel.shouldReject = false;
          onCancel(() => reject(new types_1.CancelError(request)));
          globalRequest = request;
          request.once("response", async (response) => {
            var _a;
            response.retryCount = retryCount;
            if (response.request.aborted) {
              return;
            }
            let rawBody;
            try {
              rawBody = await get_buffer_1.default(request);
              response.rawBody = rawBody;
            } catch (_b) {
              return;
            }
            if (request._isAboutToError) {
              return;
            }
            const contentEncoding = ((_a = response.headers["content-encoding"]) !== null && _a !== void 0 ? _a : "").toLowerCase();
            const isCompressed = ["gzip", "deflate", "br"].includes(contentEncoding);
            const { options } = request;
            if (isCompressed && !options.decompress) {
              response.body = rawBody;
            } else {
              try {
                response.body = parse_body_1.default(response, options.responseType, options.parseJson, options.encoding);
              } catch (error) {
                response.body = rawBody.toString();
                if (is_response_ok_1.isResponseOk(response)) {
                  request._beforeError(error);
                  return;
                }
              }
            }
            try {
              for (const [index, hook] of options.hooks.afterResponse.entries()) {
                response = await hook(response, async (updatedOptions) => {
                  const typedOptions = core_1.default.normalizeArguments(void 0, __spreadProps(__spreadValues({}, updatedOptions), {
                    retry: {
                      calculateDelay: () => 0
                    },
                    throwHttpErrors: false,
                    resolveBodyOnly: false
                  }), options);
                  typedOptions.hooks.afterResponse = typedOptions.hooks.afterResponse.slice(0, index);
                  for (const hook2 of typedOptions.hooks.beforeRetry) {
                    await hook2(typedOptions);
                  }
                  const promise2 = asPromise(typedOptions);
                  onCancel(() => {
                    promise2.catch(() => {
                    });
                    promise2.cancel();
                  });
                  return promise2;
                });
              }
            } catch (error) {
              request._beforeError(new types_1.RequestError(error.message, error, request));
              return;
            }
            globalResponse = response;
            if (!is_response_ok_1.isResponseOk(response)) {
              request._beforeError(new types_1.HTTPError(response));
              return;
            }
            resolve(request.options.resolveBodyOnly ? response.body : response);
          });
          const onError = (error) => {
            if (promise.isCanceled) {
              return;
            }
            const { options } = request;
            if (error instanceof types_1.HTTPError && !options.throwHttpErrors) {
              const { response } = error;
              resolve(request.options.resolveBodyOnly ? response.body : response);
              return;
            }
            reject(error);
          };
          request.once("error", onError);
          const previousBody = request.options.body;
          request.once("retry", (newRetryCount, error) => {
            var _a, _b;
            if (previousBody === ((_a = error.request) === null || _a === void 0 ? void 0 : _a.options.body) && is_1.default.nodeStream((_b = error.request) === null || _b === void 0 ? void 0 : _b.options.body)) {
              onError(error);
              return;
            }
            makeRequest(newRetryCount);
          });
          proxy_events_1.default(request, emitter, proxiedRequestEvents);
        };
        makeRequest(0);
      });
      promise.on = (event, fn) => {
        emitter.on(event, fn);
        return promise;
      };
      const shortcut = (responseType) => {
        const newPromise = (async () => {
          await promise;
          const { options } = globalResponse.request;
          return parse_body_1.default(globalResponse, responseType, options.parseJson, options.encoding);
        })();
        Object.defineProperties(newPromise, Object.getOwnPropertyDescriptors(promise));
        return newPromise;
      };
      promise.json = () => {
        const { headers } = globalRequest.options;
        if (!globalRequest.writableFinished && headers.accept === void 0) {
          headers.accept = "application/json";
        }
        return shortcut("json");
      };
      promise.buffer = () => shortcut("buffer");
      promise.text = () => shortcut("text");
      return promise;
    }
    exports.default = asPromise;
    __exportStar(require_types(), exports);
  }
});

// api/ably-token-request/node_modules/got/dist/source/as-promise/create-rejection.js
var require_create_rejection = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/as-promise/create-rejection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var types_1 = require_types();
    function createRejection(error, ...beforeErrorGroups) {
      const promise = (async () => {
        if (error instanceof types_1.RequestError) {
          try {
            for (const hooks of beforeErrorGroups) {
              if (hooks) {
                for (const hook of hooks) {
                  error = await hook(error);
                }
              }
            }
          } catch (error_) {
            error = error_;
          }
        }
        throw error;
      })();
      const returnPromise = () => promise;
      promise.json = returnPromise;
      promise.text = returnPromise;
      promise.buffer = returnPromise;
      promise.on = returnPromise;
      return promise;
    }
    exports.default = createRejection;
  }
});

// api/ably-token-request/node_modules/got/dist/source/utils/deep-freeze.js
var require_deep_freeze = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/utils/deep-freeze.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var is_1 = require_dist();
    function deepFreeze(object) {
      for (const value of Object.values(object)) {
        if (is_1.default.plainObject(value) || is_1.default.array(value)) {
          deepFreeze(value);
        }
      }
      return Object.freeze(object);
    }
    exports.default = deepFreeze;
  }
});

// api/ably-token-request/node_modules/got/dist/source/types.js
var require_types2 = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// api/ably-token-request/node_modules/got/dist/source/create.js
var require_create = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/create.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultHandler = void 0;
    var is_1 = require_dist();
    var as_promise_1 = require_as_promise();
    var create_rejection_1 = require_create_rejection();
    var core_1 = require_core();
    var deep_freeze_1 = require_deep_freeze();
    var errors = {
      RequestError: as_promise_1.RequestError,
      CacheError: as_promise_1.CacheError,
      ReadError: as_promise_1.ReadError,
      HTTPError: as_promise_1.HTTPError,
      MaxRedirectsError: as_promise_1.MaxRedirectsError,
      TimeoutError: as_promise_1.TimeoutError,
      ParseError: as_promise_1.ParseError,
      CancelError: as_promise_1.CancelError,
      UnsupportedProtocolError: as_promise_1.UnsupportedProtocolError,
      UploadError: as_promise_1.UploadError
    };
    var delay = async (ms) => new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
    var { normalizeArguments } = core_1.default;
    var mergeOptions = (...sources) => {
      let mergedOptions;
      for (const source of sources) {
        mergedOptions = normalizeArguments(void 0, source, mergedOptions);
      }
      return mergedOptions;
    };
    var getPromiseOrStream = (options) => options.isStream ? new core_1.default(void 0, options) : as_promise_1.default(options);
    var isGotInstance = (value) => "defaults" in value && "options" in value.defaults;
    var aliases = [
      "get",
      "post",
      "put",
      "patch",
      "head",
      "delete"
    ];
    exports.defaultHandler = (options, next) => next(options);
    var callInitHooks = (hooks, options) => {
      if (hooks) {
        for (const hook of hooks) {
          hook(options);
        }
      }
    };
    var create = (defaults) => {
      defaults._rawHandlers = defaults.handlers;
      defaults.handlers = defaults.handlers.map((fn) => (options, next) => {
        let root;
        const result = fn(options, (newOptions) => {
          root = next(newOptions);
          return root;
        });
        if (result !== root && !options.isStream && root) {
          const typedResult = result;
          const { then: promiseThen, catch: promiseCatch, finally: promiseFianlly } = typedResult;
          Object.setPrototypeOf(typedResult, Object.getPrototypeOf(root));
          Object.defineProperties(typedResult, Object.getOwnPropertyDescriptors(root));
          typedResult.then = promiseThen;
          typedResult.catch = promiseCatch;
          typedResult.finally = promiseFianlly;
        }
        return result;
      });
      const got = (url, options = {}, _defaults) => {
        var _a, _b;
        let iteration = 0;
        const iterateHandlers = (newOptions) => {
          return defaults.handlers[iteration++](newOptions, iteration === defaults.handlers.length ? getPromiseOrStream : iterateHandlers);
        };
        if (is_1.default.plainObject(url)) {
          const mergedOptions = __spreadValues(__spreadValues({}, url), options);
          core_1.setNonEnumerableProperties([url, options], mergedOptions);
          options = mergedOptions;
          url = void 0;
        }
        try {
          let initHookError;
          try {
            callInitHooks(defaults.options.hooks.init, options);
            callInitHooks((_a = options.hooks) === null || _a === void 0 ? void 0 : _a.init, options);
          } catch (error) {
            initHookError = error;
          }
          const normalizedOptions = normalizeArguments(url, options, _defaults !== null && _defaults !== void 0 ? _defaults : defaults.options);
          normalizedOptions[core_1.kIsNormalizedAlready] = true;
          if (initHookError) {
            throw new as_promise_1.RequestError(initHookError.message, initHookError, normalizedOptions);
          }
          return iterateHandlers(normalizedOptions);
        } catch (error) {
          if (options.isStream) {
            throw error;
          } else {
            return create_rejection_1.default(error, defaults.options.hooks.beforeError, (_b = options.hooks) === null || _b === void 0 ? void 0 : _b.beforeError);
          }
        }
      };
      got.extend = (...instancesOrOptions) => {
        const optionsArray = [defaults.options];
        let handlers = [...defaults._rawHandlers];
        let isMutableDefaults;
        for (const value of instancesOrOptions) {
          if (isGotInstance(value)) {
            optionsArray.push(value.defaults.options);
            handlers.push(...value.defaults._rawHandlers);
            isMutableDefaults = value.defaults.mutableDefaults;
          } else {
            optionsArray.push(value);
            if ("handlers" in value) {
              handlers.push(...value.handlers);
            }
            isMutableDefaults = value.mutableDefaults;
          }
        }
        handlers = handlers.filter((handler2) => handler2 !== exports.defaultHandler);
        if (handlers.length === 0) {
          handlers.push(exports.defaultHandler);
        }
        return create({
          options: mergeOptions(...optionsArray),
          handlers,
          mutableDefaults: Boolean(isMutableDefaults)
        });
      };
      const paginateEach = async function* (url, options) {
        let normalizedOptions = normalizeArguments(url, options, defaults.options);
        normalizedOptions.resolveBodyOnly = false;
        const pagination = normalizedOptions.pagination;
        if (!is_1.default.object(pagination)) {
          throw new TypeError("`options.pagination` must be implemented");
        }
        const all = [];
        let { countLimit } = pagination;
        let numberOfRequests = 0;
        while (numberOfRequests < pagination.requestLimit) {
          if (numberOfRequests !== 0) {
            await delay(pagination.backoff);
          }
          const result = await got(void 0, void 0, normalizedOptions);
          const parsed = await pagination.transform(result);
          const current = [];
          for (const item of parsed) {
            if (pagination.filter(item, all, current)) {
              if (!pagination.shouldContinue(item, all, current)) {
                return;
              }
              yield item;
              if (pagination.stackAllItems) {
                all.push(item);
              }
              current.push(item);
              if (--countLimit <= 0) {
                return;
              }
            }
          }
          const optionsToMerge = pagination.paginate(result, all, current);
          if (optionsToMerge === false) {
            return;
          }
          if (optionsToMerge === result.request.options) {
            normalizedOptions = result.request.options;
          } else if (optionsToMerge !== void 0) {
            normalizedOptions = normalizeArguments(void 0, optionsToMerge, normalizedOptions);
          }
          numberOfRequests++;
        }
      };
      got.paginate = paginateEach;
      got.paginate.all = async (url, options) => {
        const results = [];
        for await (const item of paginateEach(url, options)) {
          results.push(item);
        }
        return results;
      };
      got.paginate.each = paginateEach;
      got.stream = (url, options) => got(url, __spreadProps(__spreadValues({}, options), { isStream: true }));
      for (const method of aliases) {
        got[method] = (url, options) => got(url, __spreadProps(__spreadValues({}, options), { method }));
        got.stream[method] = (url, options) => {
          return got(url, __spreadProps(__spreadValues({}, options), { method, isStream: true }));
        };
      }
      Object.assign(got, errors);
      Object.defineProperty(got, "defaults", {
        value: defaults.mutableDefaults ? defaults : deep_freeze_1.default(defaults),
        writable: defaults.mutableDefaults,
        configurable: defaults.mutableDefaults,
        enumerable: true
      });
      got.mergeOptions = mergeOptions;
      return got;
    };
    exports.default = create;
    __exportStar(require_types2(), exports);
  }
});

// api/ably-token-request/node_modules/got/dist/source/index.js
var require_source5 = __commonJS({
  "api/ably-token-request/node_modules/got/dist/source/index.js"(exports, module2) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var url_1 = require("url");
    var create_1 = require_create();
    var defaults = {
      options: {
        method: "GET",
        retry: {
          limit: 2,
          methods: [
            "GET",
            "PUT",
            "HEAD",
            "DELETE",
            "OPTIONS",
            "TRACE"
          ],
          statusCodes: [
            408,
            413,
            429,
            500,
            502,
            503,
            504,
            521,
            522,
            524
          ],
          errorCodes: [
            "ETIMEDOUT",
            "ECONNRESET",
            "EADDRINUSE",
            "ECONNREFUSED",
            "EPIPE",
            "ENOTFOUND",
            "ENETUNREACH",
            "EAI_AGAIN"
          ],
          maxRetryAfter: void 0,
          calculateDelay: ({ computedValue }) => computedValue
        },
        timeout: {},
        headers: {
          "user-agent": "got (https://github.com/sindresorhus/got)"
        },
        hooks: {
          init: [],
          beforeRequest: [],
          beforeRedirect: [],
          beforeRetry: [],
          beforeError: [],
          afterResponse: []
        },
        cache: void 0,
        dnsCache: void 0,
        decompress: true,
        throwHttpErrors: true,
        followRedirect: true,
        isStream: false,
        responseType: "text",
        resolveBodyOnly: false,
        maxRedirects: 10,
        prefixUrl: "",
        methodRewriting: true,
        ignoreInvalidCookies: false,
        context: {},
        http2: false,
        allowGetBody: false,
        https: void 0,
        pagination: {
          transform: (response) => {
            if (response.request.options.responseType === "json") {
              return response.body;
            }
            return JSON.parse(response.body);
          },
          paginate: (response) => {
            if (!Reflect.has(response.headers, "link")) {
              return false;
            }
            const items = response.headers.link.split(",");
            let next;
            for (const item of items) {
              const parsed = item.split(";");
              if (parsed[1].includes("next")) {
                next = parsed[0].trimStart().trim();
                next = next.slice(1, -1);
                break;
              }
            }
            if (next) {
              const options = {
                url: new url_1.URL(next)
              };
              return options;
            }
            return false;
          },
          filter: () => true,
          shouldContinue: () => true,
          countLimit: Infinity,
          backoff: 0,
          requestLimit: 1e4,
          stackAllItems: true
        },
        parseJson: (text) => JSON.parse(text),
        stringifyJson: (object) => JSON.stringify(object),
        cacheOptions: {}
      },
      handlers: [create_1.defaultHandler],
      mutableDefaults: false
    };
    var got = create_1.default(defaults);
    exports.default = got;
    module2.exports = got;
    module2.exports.default = got;
    module2.exports.__esModule = true;
    __exportStar(require_create(), exports);
    __exportStar(require_as_promise(), exports);
  }
});

// api/ably-token-request/node_modules/async-limiter/index.js
var require_async_limiter = __commonJS({
  "api/ably-token-request/node_modules/async-limiter/index.js"(exports, module2) {
    "use strict";
    function Queue(options) {
      if (!(this instanceof Queue)) {
        return new Queue(options);
      }
      options = options || {};
      this.concurrency = options.concurrency || Infinity;
      this.pending = 0;
      this.jobs = [];
      this.cbs = [];
      this._done = done.bind(this);
    }
    var arrayAddMethods = [
      "push",
      "unshift",
      "splice"
    ];
    arrayAddMethods.forEach(function(method) {
      Queue.prototype[method] = function() {
        var methodResult = Array.prototype[method].apply(this.jobs, arguments);
        this._run();
        return methodResult;
      };
    });
    Object.defineProperty(Queue.prototype, "length", {
      get: function() {
        return this.pending + this.jobs.length;
      }
    });
    Queue.prototype._run = function() {
      if (this.pending === this.concurrency) {
        return;
      }
      if (this.jobs.length) {
        var job = this.jobs.shift();
        this.pending++;
        job(this._done);
        this._run();
      }
      if (this.pending === 0) {
        while (this.cbs.length !== 0) {
          var cb = this.cbs.pop();
          process.nextTick(cb);
        }
      }
    };
    Queue.prototype.onDone = function(cb) {
      if (typeof cb === "function") {
        this.cbs.push(cb);
        this._run();
      }
    };
    function done() {
      this.pending--;
      this._run();
    }
    module2.exports = Queue;
  }
});

// api/ably-token-request/node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "api/ably-token-request/node_modules/ws/lib/buffer-util.js"(exports, module2) {
    "use strict";
    function concat(list, totalLength) {
      const target = Buffer.allocUnsafe(totalLength);
      var offset = 0;
      for (var i = 0; i < list.length; i++) {
        const buf = list[i];
        buf.copy(target, offset);
        offset += buf.length;
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (var i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      const length = buffer.length;
      for (var i = 0; i < length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    try {
      const bufferUtil = require("bufferutil");
      const bu = bufferUtil.BufferUtil || bufferUtil;
      module2.exports = {
        mask(source, mask, output, offset, length) {
          if (length < 48)
            _mask(source, mask, output, offset, length);
          else
            bu.mask(source, mask, output, offset, length);
        },
        unmask(buffer, mask) {
          if (buffer.length < 32)
            _unmask(buffer, mask);
          else
            bu.unmask(buffer, mask);
        },
        concat
      };
    } catch (e) {
      module2.exports = { concat, mask: _mask, unmask: _unmask };
    }
  }
});

// api/ably-token-request/node_modules/ws/lib/constants.js
var require_constants = __commonJS({
  "api/ably-token-request/node_modules/ws/lib/constants.js"(exports, module2) {
    "use strict";
    module2.exports = {
      BINARY_TYPES: ["nodebuffer", "arraybuffer", "fragments"],
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      kStatusCode: Symbol("status-code"),
      kWebSocket: Symbol("websocket"),
      EMPTY_BUFFER: Buffer.alloc(0),
      NOOP: () => {
      }
    };
  }
});

// api/ably-token-request/node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "api/ably-token-request/node_modules/ws/lib/permessage-deflate.js"(exports, module2) {
    "use strict";
    var Limiter = require_async_limiter();
    var zlib = require("zlib");
    var bufferUtil = require_buffer_util();
    var constants = require_constants();
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var EMPTY_BLOCK = Buffer.from([0]);
    var kPerMessageDeflate = Symbol("permessage-deflate");
    var kWriteInProgress = Symbol("write-in-progress");
    var kPendingClose = Symbol("pending-close");
    var kTotalLength = Symbol("total-length");
    var kCallback = Symbol("callback");
    var kBuffers = Symbol("buffers");
    var kError = Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate = class {
      constructor(options, isServer, maxPayload) {
        this._maxPayload = maxPayload | 0;
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._isServer = !!isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter({ concurrency });
        }
      }
      static get extensionName() {
        return "permessage-deflate";
      }
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      cleanup() {
        if (this._inflate) {
          if (this._inflate[kWriteInProgress]) {
            this._inflate[kPendingClose] = true;
          } else {
            this._inflate.close();
            this._inflate = null;
          }
        }
        if (this._deflate) {
          if (this._deflate[kWriteInProgress]) {
            this._deflate[kPendingClose] = true;
          } else {
            this._deflate.close();
            this._deflate = null;
          }
        }
      }
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
        }
        return params;
      }
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            var value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      decompress(data, fin, callback) {
        zlibLimiter.push((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      compress(data, fin, callback) {
        zlibLimiter.push((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw(Object.assign({}, this._options.zlibInflateOptions, { windowBits }));
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate[kWriteInProgress] = true;
        this._inflate.write(data);
        if (fin)
          this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(this._inflate[kBuffers], this._inflate[kTotalLength]);
          if (fin && this.params[`${endpoint}_no_context_takeover`] || this._inflate[kPendingClose]) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kWriteInProgress] = false;
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
          }
          callback(null, data2);
        });
      }
      _compress(data, fin, callback) {
        if (!data || data.length === 0) {
          process.nextTick(callback, null, EMPTY_BLOCK);
          return;
        }
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw(Object.assign({
            memLevel: this._options.memLevel,
            level: this._options.level
          }, this._options.zlibDeflateOptions, { windowBits }));
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kWriteInProgress] = true;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          var data2 = bufferUtil.concat(this._deflate[kBuffers], this._deflate[kTotalLength]);
          if (fin)
            data2 = data2.slice(0, data2.length - 4);
          if (fin && this.params[`${endpoint}_no_context_takeover`] || this._deflate[kPendingClose]) {
            this._deflate.close();
            this._deflate = null;
          } else {
            this._deflate[kWriteInProgress] = false;
            this._deflate[kTotalLength] = 0;
            this._deflate[kBuffers] = [];
          }
          callback(null, data2);
        });
      }
    };
    module2.exports = PerMessageDeflate;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError][constants.kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      err[constants.kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// api/ably-token-request/node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "api/ably-token-request/node_modules/ws/lib/event-target.js"(exports, module2) {
    "use strict";
    var Event = class {
      constructor(type, target) {
        this.target = target;
        this.type = type;
      }
    };
    var MessageEvent = class extends Event {
      constructor(data, target) {
        super("message", target);
        this.data = data;
      }
    };
    var CloseEvent = class extends Event {
      constructor(code, reason, target) {
        super("close", target);
        this.wasClean = target._closeFrameReceived && target._closeFrameSent;
        this.reason = reason;
        this.code = code;
      }
    };
    var OpenEvent = class extends Event {
      constructor(target) {
        super("open", target);
      }
    };
    var ErrorEvent = class extends Event {
      constructor(error, target) {
        super("error", target);
        this.message = error.message;
        this.error = error;
      }
    };
    var EventTarget = {
      addEventListener(method, listener) {
        if (typeof listener !== "function")
          return;
        function onMessage(data) {
          listener.call(this, new MessageEvent(data, this));
        }
        function onClose(code, message) {
          listener.call(this, new CloseEvent(code, message, this));
        }
        function onError(error) {
          listener.call(this, new ErrorEvent(error, this));
        }
        function onOpen() {
          listener.call(this, new OpenEvent(this));
        }
        if (method === "message") {
          onMessage._listener = listener;
          this.on(method, onMessage);
        } else if (method === "close") {
          onClose._listener = listener;
          this.on(method, onClose);
        } else if (method === "error") {
          onError._listener = listener;
          this.on(method, onError);
        } else if (method === "open") {
          onOpen._listener = listener;
          this.on(method, onOpen);
        } else {
          this.on(method, listener);
        }
      },
      removeEventListener(method, listener) {
        const listeners = this.listeners(method);
        for (var i = 0; i < listeners.length; i++) {
          if (listeners[i] === listener || listeners[i]._listener === listener) {
            this.removeListener(method, listeners[i]);
          }
        }
      }
    };
    module2.exports = EventTarget;
  }
});

// api/ably-token-request/node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "api/ably-token-request/node_modules/ws/lib/extension.js"(exports, module2) {
    "use strict";
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
    ];
    function push(dest, name, elem) {
      if (Object.prototype.hasOwnProperty.call(dest, name))
        dest[name].push(elem);
      else
        dest[name] = [elem];
    }
    function parse(header) {
      const offers = {};
      if (header === void 0 || header === "")
        return offers;
      var params = {};
      var mustUnescape = false;
      var isEscaping = false;
      var inQuotes = false;
      var extensionName;
      var paramName;
      var start = -1;
      var end = -1;
      for (var i = 0; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = {};
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = {};
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1)
              start = i;
            else if (!mustUnescape)
              mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1)
                start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            var value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = {};
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1)
        end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, {});
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension) => {
        var configurations = extensions[extension];
        if (!Array.isArray(configurations))
          configurations = [configurations];
        return configurations.map((params) => {
          return [extension].concat(Object.keys(params).map((k) => {
            var values = params[k];
            if (!Array.isArray(values))
              values = [values];
            return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
          })).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module2.exports = { format, parse };
  }
});

// api/ably-token-request/node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "api/ably-token-request/node_modules/ws/lib/validation.js"(exports) {
    "use strict";
    try {
      const isValidUTF8 = require("utf-8-validate");
      exports.isValidUTF8 = typeof isValidUTF8 === "object" ? isValidUTF8.Validation.isValidUTF8 : isValidUTF8;
    } catch (e) {
      exports.isValidUTF8 = () => true;
    }
    exports.isValidStatusCode = (code) => {
      return code >= 1e3 && code <= 1013 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    };
  }
});

// api/ably-token-request/node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "api/ably-token-request/node_modules/ws/lib/receiver.js"(exports, module2) {
    "use strict";
    var stream = require("stream");
    var PerMessageDeflate = require_permessage_deflate();
    var bufferUtil = require_buffer_util();
    var validation = require_validation();
    var constants = require_constants();
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var Receiver = class extends stream.Writable {
      constructor(binaryType, extensions, maxPayload) {
        super();
        this._binaryType = binaryType || constants.BINARY_TYPES[0];
        this[constants.kWebSocket] = void 0;
        this._extensions = extensions || {};
        this._maxPayload = maxPayload | 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._state = GET_INFO;
        this._loop = false;
      }
      _write(chunk, encoding, cb) {
        if (this._opcode === 8)
          return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length)
          return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = buf.slice(n);
          return buf.slice(0, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          if (n >= buf.length) {
            this._buffers.shift().copy(dst, dst.length - n);
          } else {
            buf.copy(dst, dst.length - n, 0, n);
            this._buffers[0] = buf.slice(n);
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      startLoop(cb) {
        var err;
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              err = this.getInfo();
              break;
            case GET_PAYLOAD_LENGTH_16:
              err = this.getPayloadLength16();
              break;
            case GET_PAYLOAD_LENGTH_64:
              err = this.getPayloadLength64();
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              err = this.getData(cb);
              break;
            default:
              this._loop = false;
              return;
          }
        } while (this._loop);
        cb(err);
      }
      getInfo() {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          this._loop = false;
          return error(RangeError, "RSV2 and RSV3 must be clear", true, 1002);
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
          this._loop = false;
          return error(RangeError, "RSV1 must be clear", true, 1002);
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            this._loop = false;
            return error(RangeError, "RSV1 must be clear", true, 1002);
          }
          if (!this._fragmented) {
            this._loop = false;
            return error(RangeError, "invalid opcode 0", true, 1002);
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            this._loop = false;
            return error(RangeError, `invalid opcode ${this._opcode}`, true, 1002);
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            this._loop = false;
            return error(RangeError, "FIN must be set", true, 1002);
          }
          if (compressed) {
            this._loop = false;
            return error(RangeError, "RSV1 must be clear", true, 1002);
          }
          if (this._payloadLength > 125) {
            this._loop = false;
            return error(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002);
          }
        } else {
          this._loop = false;
          return error(RangeError, `invalid opcode ${this._opcode}`, true, 1002);
        }
        if (!this._fin && !this._fragmented)
          this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._payloadLength === 126)
          this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127)
          this._state = GET_PAYLOAD_LENGTH_64;
        else
          return this.haveLength();
      }
      getPayloadLength16() {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        return this.haveLength();
      }
      getPayloadLength64() {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          this._loop = false;
          return error(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", false, 1009);
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        return this.haveLength();
      }
      haveLength() {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            this._loop = false;
            return error(RangeError, "Max payload size exceeded", false, 1009);
          }
        }
        if (this._masked)
          this._state = GET_MASK;
        else
          this._state = GET_DATA;
      }
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      getData(cb) {
        var data = constants.EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked)
            bufferUtil.unmask(data, this._mask);
        }
        if (this._opcode > 7)
          return this.controlMessage(data);
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        return this.dataMessage();
      }
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err)
            return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              return cb(error(RangeError, "Max payload size exceeded", false, 1009));
            }
            this._fragments.push(buf);
          }
          const er = this.dataMessage();
          if (er)
            return cb(er);
          this.startLoop(cb);
        });
      }
      dataMessage() {
        if (this._fin) {
          const messageLength = this._messageLength;
          const fragments = this._fragments;
          this._totalPayloadLength = 0;
          this._messageLength = 0;
          this._fragmented = 0;
          this._fragments = [];
          if (this._opcode === 2) {
            var data;
            if (this._binaryType === "nodebuffer") {
              data = toBuffer(fragments, messageLength);
            } else if (this._binaryType === "arraybuffer") {
              data = toArrayBuffer(toBuffer(fragments, messageLength));
            } else {
              data = fragments;
            }
            this.emit("message", data);
          } else {
            const buf = toBuffer(fragments, messageLength);
            if (!validation.isValidUTF8(buf)) {
              this._loop = false;
              return error(Error, "invalid UTF-8 sequence", true, 1007);
            }
            this.emit("message", buf.toString());
          }
        }
        this._state = GET_INFO;
      }
      controlMessage(data) {
        if (this._opcode === 8) {
          this._loop = false;
          if (data.length === 0) {
            this.emit("conclude", 1005, "");
            this.end();
          } else if (data.length === 1) {
            return error(RangeError, "invalid payload length 1", true, 1002);
          } else {
            const code = data.readUInt16BE(0);
            if (!validation.isValidStatusCode(code)) {
              return error(RangeError, `invalid status code ${code}`, true, 1002);
            }
            const buf = data.slice(2);
            if (!validation.isValidUTF8(buf)) {
              return error(Error, "invalid UTF-8 sequence", true, 1007);
            }
            this.emit("conclude", code, buf.toString());
            this.end();
          }
          return;
        }
        if (this._opcode === 9)
          this.emit("ping", data);
        else
          this.emit("pong", data);
        this._state = GET_INFO;
      }
    };
    module2.exports = Receiver;
    function error(ErrorCtor, message, prefix, statusCode) {
      const err = new ErrorCtor(prefix ? `Invalid WebSocket frame: ${message}` : message);
      Error.captureStackTrace(err, error);
      err[constants.kStatusCode] = statusCode;
      return err;
    }
    function toBuffer(fragments, messageLength) {
      if (fragments.length === 1)
        return fragments[0];
      if (fragments.length > 1)
        return bufferUtil.concat(fragments, messageLength);
      return constants.EMPTY_BUFFER;
    }
    function toArrayBuffer(buf) {
      if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    }
  }
});

// api/ably-token-request/node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "api/ably-token-request/node_modules/ws/lib/sender.js"(exports, module2) {
    "use strict";
    var crypto = require("crypto");
    var PerMessageDeflate = require_permessage_deflate();
    var bufferUtil = require_buffer_util();
    var validation = require_validation();
    var constants = require_constants();
    var Sender = class {
      constructor(socket, extensions) {
        this._extensions = extensions || {};
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._deflating = false;
        this._queue = [];
      }
      static frame(data, options) {
        const merge = data.length < 1024 || options.mask && options.readOnly;
        var offset = options.mask ? 6 : 2;
        var payloadLength = data.length;
        if (data.length >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (data.length > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? data.length + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1)
          target[0] |= 64;
        if (payloadLength === 126) {
          target.writeUInt16BE(data.length, 2);
        } else if (payloadLength === 127) {
          target.writeUInt32BE(0, 2);
          target.writeUInt32BE(data.length, 6);
        }
        if (!options.mask) {
          target[1] = payloadLength;
          if (merge) {
            data.copy(target, offset);
            return [target];
          }
          return [target, data];
        }
        const mask = crypto.randomBytes(4);
        target[1] = payloadLength | 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (merge) {
          bufferUtil.mask(data, mask, target, offset, data.length);
          return [target];
        }
        bufferUtil.mask(data, mask, data, 0, data.length);
        return [target, data];
      }
      close(code, data, mask, cb) {
        var buf;
        if (code === void 0) {
          buf = constants.EMPTY_BUFFER;
        } else if (typeof code !== "number" || !validation.isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || data === "") {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          buf = Buffer.allocUnsafe(2 + Buffer.byteLength(data));
          buf.writeUInt16BE(code, 0);
          buf.write(data, 2);
        }
        if (this._deflating) {
          this.enqueue([this.doClose, buf, mask, cb]);
        } else {
          this.doClose(buf, mask, cb);
        }
      }
      doClose(data, mask, cb) {
        this.sendFrame(Sender.frame(data, {
          fin: true,
          rsv1: false,
          opcode: 8,
          mask,
          readOnly: false
        }), cb);
      }
      ping(data, mask, cb) {
        var readOnly = true;
        if (!Buffer.isBuffer(data)) {
          if (data instanceof ArrayBuffer) {
            data = Buffer.from(data);
          } else if (ArrayBuffer.isView(data)) {
            data = viewToBuffer(data);
          } else {
            data = Buffer.from(data);
            readOnly = false;
          }
        }
        if (this._deflating) {
          this.enqueue([this.doPing, data, mask, readOnly, cb]);
        } else {
          this.doPing(data, mask, readOnly, cb);
        }
      }
      doPing(data, mask, readOnly, cb) {
        this.sendFrame(Sender.frame(data, {
          fin: true,
          rsv1: false,
          opcode: 9,
          mask,
          readOnly
        }), cb);
      }
      pong(data, mask, cb) {
        var readOnly = true;
        if (!Buffer.isBuffer(data)) {
          if (data instanceof ArrayBuffer) {
            data = Buffer.from(data);
          } else if (ArrayBuffer.isView(data)) {
            data = viewToBuffer(data);
          } else {
            data = Buffer.from(data);
            readOnly = false;
          }
        }
        if (this._deflating) {
          this.enqueue([this.doPong, data, mask, readOnly, cb]);
        } else {
          this.doPong(data, mask, readOnly, cb);
        }
      }
      doPong(data, mask, readOnly, cb) {
        this.sendFrame(Sender.frame(data, {
          fin: true,
          rsv1: false,
          opcode: 10,
          mask,
          readOnly
        }), cb);
      }
      send(data, options, cb) {
        var opcode = options.binary ? 2 : 1;
        var rsv1 = options.compress;
        var readOnly = true;
        if (!Buffer.isBuffer(data)) {
          if (data instanceof ArrayBuffer) {
            data = Buffer.from(data);
          } else if (ArrayBuffer.isView(data)) {
            data = viewToBuffer(data);
          } else {
            data = Buffer.from(data);
            readOnly = false;
          }
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate) {
            rsv1 = data.length >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin)
          this._firstFragment = true;
        if (perMessageDeflate) {
          const opts = {
            fin: options.fin,
            rsv1,
            opcode,
            mask: options.mask,
            readOnly
          };
          if (this._deflating) {
            this.enqueue([this.dispatch, data, this._compress, opts, cb]);
          } else {
            this.dispatch(data, this._compress, opts, cb);
          }
        } else {
          this.sendFrame(Sender.frame(data, {
            fin: options.fin,
            rsv1: false,
            opcode,
            mask: options.mask,
            readOnly
          }), cb);
        }
      }
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        this._deflating = true;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          options.readOnly = false;
          this.sendFrame(Sender.frame(buf, options), cb);
          this._deflating = false;
          this.dequeue();
        });
      }
      dequeue() {
        while (!this._deflating && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[1].length;
          params[0].apply(this, params.slice(1));
        }
      }
      enqueue(params) {
        this._bufferedBytes += params[1].length;
        this._queue.push(params);
      }
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module2.exports = Sender;
    function viewToBuffer(view) {
      const buf = Buffer.from(view.buffer);
      if (view.byteLength !== view.buffer.byteLength) {
        return buf.slice(view.byteOffset, view.byteOffset + view.byteLength);
      }
      return buf;
    }
  }
});

// api/ably-token-request/node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "api/ably-token-request/node_modules/ws/lib/websocket.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events");
    var crypto = require("crypto");
    var https = require("https");
    var http = require("http");
    var net = require("net");
    var tls = require("tls");
    var url = require("url");
    var PerMessageDeflate = require_permessage_deflate();
    var EventTarget = require_event_target();
    var extension = require_extension();
    var constants = require_constants();
    var Receiver = require_receiver();
    var Sender = require_sender();
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var kWebSocket = constants.kWebSocket;
    var protocolVersions = [8, 13];
    var closeTimeout = 30 * 1e3;
    var WebSocket = class extends EventEmitter {
      constructor(address, protocols, options) {
        super();
        this.readyState = WebSocket.CONNECTING;
        this.protocol = "";
        this._binaryType = constants.BINARY_TYPES[0];
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = "";
        this._closeTimer = null;
        this._closeCode = 1006;
        this._extensions = {};
        this._isServer = true;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          if (Array.isArray(protocols)) {
            protocols = protocols.join(", ");
          } else if (typeof protocols === "object" && protocols !== null) {
            options = protocols;
            protocols = void 0;
          }
          initAsClient.call(this, address, protocols, options);
        }
      }
      get CONNECTING() {
        return WebSocket.CONNECTING;
      }
      get CLOSING() {
        return WebSocket.CLOSING;
      }
      get CLOSED() {
        return WebSocket.CLOSED;
      }
      get OPEN() {
        return WebSocket.OPEN;
      }
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (constants.BINARY_TYPES.indexOf(type) < 0)
          return;
        this._binaryType = type;
        if (this._receiver)
          this._receiver._binaryType = type;
      }
      get bufferedAmount() {
        if (!this._socket)
          return 0;
        return (this._socket.bufferSize || 0) + this._sender._bufferedBytes;
      }
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      setSocket(socket, head, maxPayload) {
        const receiver = new Receiver(this._binaryType, this._extensions, maxPayload);
        this._sender = new Sender(socket, this._extensions);
        this._receiver = receiver;
        this._socket = socket;
        receiver[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        socket.setTimeout(0);
        socket.setNoDelay();
        if (head.length > 0)
          socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this.readyState = WebSocket.OPEN;
        this.emit("open");
      }
      emitClose() {
        this.readyState = WebSocket.CLOSED;
        if (!this._socket) {
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate.extensionName]) {
          this._extensions[PerMessageDeflate.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this.emit("close", this._closeCode, this._closeMessage);
      }
      close(code, data) {
        if (this.readyState === WebSocket.CLOSED)
          return;
        if (this.readyState === WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          return abortHandshake(this, this._req, msg);
        }
        if (this.readyState === WebSocket.CLOSING) {
          if (this._closeFrameSent && this._closeFrameReceived)
            this._socket.end();
          return;
        }
        this.readyState = WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err)
            return;
          this._closeFrameSent = true;
          if (this._socket.writable) {
            if (this._closeFrameReceived)
              this._socket.end();
            this._closeTimer = setTimeout(this._socket.destroy.bind(this._socket), closeTimeout);
          }
        });
      }
      ping(data, mask, cb) {
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (this.readyState !== WebSocket.OPEN) {
          const err = new Error(`WebSocket is not open: readyState ${this.readyState} (${readyStates[this.readyState]})`);
          if (cb)
            return cb(err);
          throw err;
        }
        if (typeof data === "number")
          data = data.toString();
        if (mask === void 0)
          mask = !this._isServer;
        this._sender.ping(data || constants.EMPTY_BUFFER, mask, cb);
      }
      pong(data, mask, cb) {
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (this.readyState !== WebSocket.OPEN) {
          const err = new Error(`WebSocket is not open: readyState ${this.readyState} (${readyStates[this.readyState]})`);
          if (cb)
            return cb(err);
          throw err;
        }
        if (typeof data === "number")
          data = data.toString();
        if (mask === void 0)
          mask = !this._isServer;
        this._sender.pong(data || constants.EMPTY_BUFFER, mask, cb);
      }
      send(data, options, cb) {
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (this.readyState !== WebSocket.OPEN) {
          const err = new Error(`WebSocket is not open: readyState ${this.readyState} (${readyStates[this.readyState]})`);
          if (cb)
            return cb(err);
          throw err;
        }
        if (typeof data === "number")
          data = data.toString();
        const opts = Object.assign({
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true
        }, options);
        if (!this._extensions[PerMessageDeflate.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || constants.EMPTY_BUFFER, opts, cb);
      }
      terminate() {
        if (this.readyState === WebSocket.CLOSED)
          return;
        if (this.readyState === WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          return abortHandshake(this, this._req, msg);
        }
        if (this._socket) {
          this.readyState = WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    readyStates.forEach((readyState, i) => {
      WebSocket[readyStates[i]] = i;
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket.prototype, `on${method}`, {
        get() {
          const listeners = this.listeners(method);
          for (var i = 0; i < listeners.length; i++) {
            if (listeners[i]._listener)
              return listeners[i]._listener;
          }
        },
        set(listener) {
          const listeners = this.listeners(method);
          for (var i = 0; i < listeners.length; i++) {
            if (listeners[i]._listener)
              this.removeListener(method, listeners[i]);
          }
          this.addEventListener(method, listener);
        }
      });
    });
    WebSocket.prototype.addEventListener = EventTarget.addEventListener;
    WebSocket.prototype.removeEventListener = EventTarget.removeEventListener;
    module2.exports = WebSocket;
    function initAsClient(address, protocols, options) {
      options = Object.assign({
        protocolVersion: protocolVersions[1],
        perMessageDeflate: true
      }, options, {
        createConnection: void 0,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: void 0,
        auth: void 0,
        host: void 0,
        path: void 0,
        port: void 0
      });
      if (protocolVersions.indexOf(options.protocolVersion) === -1) {
        throw new RangeError(`Unsupported protocol version: ${options.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`);
      }
      this._isServer = false;
      var parsedUrl;
      if (typeof address === "object" && address.href !== void 0) {
        parsedUrl = address;
        this.url = address.href;
      } else {
        parsedUrl = url.parse(address);
        this.url = address;
      }
      const isUnixSocket = parsedUrl.protocol === "ws+unix:";
      if (!parsedUrl.host && (!isUnixSocket || !parsedUrl.pathname)) {
        throw new Error(`Invalid URL: ${this.url}`);
      }
      const isSecure = parsedUrl.protocol === "wss:" || parsedUrl.protocol === "https:";
      const key = crypto.randomBytes(16).toString("base64");
      const httpObj = isSecure ? https : http;
      const path = parsedUrl.search ? `${parsedUrl.pathname || "/"}${parsedUrl.search}` : parsedUrl.pathname || "/";
      var perMessageDeflate;
      options.createConnection = isSecure ? tlsConnect : netConnect;
      options.port = parsedUrl.port || (isSecure ? 443 : 80);
      options.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      options.headers = Object.assign({
        "Sec-WebSocket-Version": options.protocolVersion,
        "Sec-WebSocket-Key": key,
        "Connection": "Upgrade",
        "Upgrade": "websocket"
      }, options.headers);
      options.path = path;
      if (options.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate(options.perMessageDeflate !== true ? options.perMessageDeflate : {}, false);
        options.headers["Sec-WebSocket-Extensions"] = extension.format({
          [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols) {
        options.headers["Sec-WebSocket-Protocol"] = protocols;
      }
      if (options.origin) {
        if (options.protocolVersion < 13) {
          options.headers["Sec-WebSocket-Origin"] = options.origin;
        } else {
          options.headers.Origin = options.origin;
        }
      }
      if (parsedUrl.auth) {
        options.auth = parsedUrl.auth;
      } else if (parsedUrl.username || parsedUrl.password) {
        options.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isUnixSocket) {
        const parts = path.split(":");
        if (options.agent == null && process.versions.modules < 57) {
          options._socketPath = parts[0];
        } else {
          options.socketPath = parts[0];
        }
        options.path = parts[1];
      }
      var req = this._req = httpObj.get(options);
      if (options.handshakeTimeout) {
        req.setTimeout(options.handshakeTimeout, () => abortHandshake(this, req, "Opening handshake has timed out"));
      }
      req.on("error", (err) => {
        if (this._req.aborted)
          return;
        req = this._req = null;
        this.readyState = WebSocket.CLOSING;
        this.emit("error", err);
        this.emitClose();
      });
      req.on("response", (res) => {
        if (this.emit("unexpected-response", req, res))
          return;
        abortHandshake(this, req, `Unexpected server response: ${res.statusCode}`);
      });
      req.on("upgrade", (res, socket, head) => {
        this.emit("upgrade", res);
        if (this.readyState !== WebSocket.CONNECTING)
          return;
        req = this._req = null;
        const digest = crypto.createHash("sha1").update(key + constants.GUID, "binary").digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(this, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        const protList = (protocols || "").split(/, */);
        var protError;
        if (!protocols && serverProt) {
          protError = "Server sent a subprotocol but none was requested";
        } else if (protocols && !serverProt) {
          protError = "Server sent no subprotocol";
        } else if (serverProt && protList.indexOf(serverProt) === -1) {
          protError = "Server sent an invalid subprotocol";
        }
        if (protError) {
          abortHandshake(this, socket, protError);
          return;
        }
        if (serverProt)
          this.protocol = serverProt;
        if (perMessageDeflate) {
          try {
            const extensions = extension.parse(res.headers["sec-websocket-extensions"]);
            if (extensions[PerMessageDeflate.extensionName]) {
              perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
              this._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            abortHandshake(this, socket, "Invalid Sec-WebSocket-Extensions header");
            return;
          }
        }
        this.setSocket(socket, head, 0);
      });
    }
    function netConnect(options) {
      options.path = options.socketPath || options._socketPath || void 0;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = options.socketPath || options._socketPath || void 0;
      options.servername = options.servername || options.host;
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket.readyState = WebSocket.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream.abort();
        stream.once("abort", websocket.emitClose.bind(websocket));
        websocket.emit("error", err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._socket.removeListener("data", socketOnData);
      websocket._socket.resume();
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (code === 1005)
        websocket.close();
      else
        websocket.close(code, reason);
    }
    function receiverOnDrain() {
      this[kWebSocket]._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      websocket._socket.removeListener("data", socketOnData);
      websocket.readyState = WebSocket.CLOSING;
      websocket._closeCode = err[constants.kStatusCode];
      websocket.emit("error", err);
      websocket._socket.destroy();
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data) {
      this[kWebSocket].emit("message", data);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      websocket.pong(data, !websocket._isServer, constants.NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("end", socketOnEnd);
      websocket.readyState = WebSocket.CLOSING;
      websocket._socket.read();
      websocket._receiver.end();
      this.removeListener("data", socketOnData);
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket.readyState = WebSocket.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", constants.NOOP);
      if (websocket) {
        websocket.readyState = WebSocket.CLOSING;
        this.destroy();
      }
    }
  }
});

// api/ably-token-request/node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "api/ably-token-request/node_modules/ws/lib/websocket-server.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events");
    var crypto = require("crypto");
    var http = require("http");
    var url = require("url");
    var PerMessageDeflate = require_permessage_deflate();
    var extension = require_extension();
    var constants = require_constants();
    var WebSocket = require_websocket();
    var WebSocketServer = class extends EventEmitter {
      constructor(options, callback) {
        super();
        options = Object.assign({
          maxPayload: 100 * 1024 * 1024,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          verifyClient: null,
          noServer: false,
          backlog: null,
          server: null,
          host: null,
          path: null,
          port: null
        }, options);
        if (options.port == null && !options.server && !options.noServer) {
          throw new TypeError('One of the "port", "server", or "noServer" options must be specified');
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(options.port, options.host, options.backlog, callback);
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, (ws) => {
                this.emit("connection", ws, req);
              });
            }
          });
        }
        if (options.perMessageDeflate === true)
          options.perMessageDeflate = {};
        if (options.clientTracking)
          this.clients = /* @__PURE__ */ new Set();
        this.options = options;
      }
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server)
          return null;
        return this._server.address();
      }
      close(cb) {
        if (this.clients) {
          for (const client of this.clients)
            client.terminate();
        }
        const server = this._server;
        if (server) {
          this._removeListeners();
          this._removeListeners = this._server = null;
          if (this.options.port != null)
            return server.close(cb);
        }
        if (cb)
          cb();
      }
      shouldHandle(req) {
        if (this.options.path && url.parse(req.url).pathname !== this.options.path) {
          return false;
        }
        return true;
      }
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const version = +req.headers["sec-websocket-version"];
        const extensions = {};
        if (req.method !== "GET" || req.headers.upgrade.toLowerCase() !== "websocket" || !req.headers["sec-websocket-key"] || version !== 8 && version !== 13 || !this.shouldHandle(req)) {
          return abortHandshake(socket, 400);
        }
        if (this.options.perMessageDeflate) {
          const perMessageDeflate = new PerMessageDeflate(this.options.perMessageDeflate, true, this.options.maxPayload);
          try {
            const offers = extension.parse(req.headers["sec-websocket-extensions"]);
            if (offers[PerMessageDeflate.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
              extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            return abortHandshake(socket, 400);
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.connection.authorized || req.connection.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(extensions, req, socket, head, cb);
            });
            return;
          }
          if (!this.options.verifyClient(info))
            return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, req, socket, head, cb);
      }
      completeUpgrade(extensions, req, socket, head, cb) {
        if (!socket.readable || !socket.writable)
          return socket.destroy();
        const key = crypto.createHash("sha1").update(req.headers["sec-websocket-key"] + constants.GUID, "binary").digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${key}`
        ];
        const ws = new WebSocket(null);
        var protocol = req.headers["sec-websocket-protocol"];
        if (protocol) {
          protocol = protocol.split(",").map(trim);
          if (this.options.handleProtocols) {
            protocol = this.options.handleProtocols(protocol, req);
          } else {
            protocol = protocol[0];
          }
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws.protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate.extensionName]) {
          const params = extensions[PerMessageDeflate.extensionName].params;
          const value = extension.format({
            [PerMessageDeflate.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, this.options.maxPayload);
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => this.clients.delete(ws));
        }
        cb(ws);
      }
    };
    module2.exports = WebSocketServer;
    function addListeners(server, map) {
      for (const event of Object.keys(map))
        server.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      if (socket.writable) {
        message = message || http.STATUS_CODES[code];
        headers = Object.assign({
          "Connection": "close",
          "Content-type": "text/html",
          "Content-Length": Buffer.byteLength(message)
        }, headers);
        socket.write(`HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message);
      }
      socket.removeListener("error", socketOnError);
      socket.destroy();
    }
    function trim(str) {
      return str.trim();
    }
  }
});

// api/ably-token-request/node_modules/ws/index.js
var require_ws = __commonJS({
  "api/ably-token-request/node_modules/ws/index.js"(exports, module2) {
    "use strict";
    var WebSocket = require_websocket();
    WebSocket.Server = require_websocket_server();
    WebSocket.Receiver = require_receiver();
    WebSocket.Sender = require_sender();
    module2.exports = WebSocket;
  }
});

// api/ably-token-request/node_modules/ably/build/ably-node.js
var require_ably_node = __commonJS({
  "api/ably-token-request/node_modules/ably/build/ably-node.js"(exports, module2) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module2 === "object")
        module2.exports = factory(require_source5(), require_ws());
      else if (typeof define === "function" && define.amd)
        define(["got", "ws"], factory);
      else if (typeof exports === "object")
        exports["Ably"] = factory(require_source5(), require_ws());
      else
        root["Ably"] = factory(root["got"], root["ws"]);
    })(global, function(__WEBPACK_EXTERNAL_MODULE__54__, __WEBPACK_EXTERNAL_MODULE__56__) {
      return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
          }
          var module3 = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
          };
          modules[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__);
          module3.l = true;
          return module3.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports2, name, getter) {
          if (!__webpack_require__.o(exports2, name)) {
            Object.defineProperty(exports2, name, { enumerable: true, get: getter });
          }
        };
        __webpack_require__.r = function(exports2) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
        __webpack_require__.t = function(value, mode) {
          if (mode & 1)
            value = __webpack_require__(value);
          if (mode & 8)
            return value;
          if (mode & 4 && typeof value === "object" && value && value.__esModule)
            return value;
          var ns = /* @__PURE__ */ Object.create(null);
          __webpack_require__.r(ns);
          Object.defineProperty(ns, "default", { enumerable: true, value });
          if (mode & 2 && typeof value != "string")
            for (var key in value)
              __webpack_require__.d(ns, key, function(key2) {
                return value[key2];
              }.bind(null, key));
          return ns;
        };
        __webpack_require__.n = function(module3) {
          var getter = module3 && module3.__esModule ? function getDefault() {
            return module3["default"];
          } : function getModuleExports() {
            return module3;
          };
          __webpack_require__.d(getter, "a", getter);
          return getter;
        };
        __webpack_require__.o = function(object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 35);
      }([
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var globalObject = global || (typeof window !== "undefined" ? window : self);
          var LogLevels;
          (function(LogLevels2) {
            LogLevels2[LogLevels2["None"] = 0] = "None";
            LogLevels2[LogLevels2["Error"] = 1] = "Error";
            LogLevels2[LogLevels2["Major"] = 2] = "Major";
            LogLevels2[LogLevels2["Minor"] = 3] = "Minor";
            LogLevels2[LogLevels2["Micro"] = 4] = "Micro";
          })(LogLevels || (LogLevels = {}));
          function pad(timeSegment, three) {
            return ("" + timeSegment).padStart(three ? 3 : 2, "0");
          }
          function getHandler(logger) {
            return platform_1["default"].Config.logTimestamps ? function(msg) {
              var time = new Date();
              logger(pad(time.getHours()) + ":" + pad(time.getMinutes()) + ":" + pad(time.getSeconds()) + "." + pad(time.getMilliseconds(), 1) + " " + msg);
            } : logger;
          }
          var getDefaultLoggers = function() {
            var _a, _b;
            var consoleLogger;
            var errorLogger;
            if (typeof Window === "undefined" && typeof WorkerGlobalScope === "undefined" || typeof ((_b = (_a = globalObject === null || globalObject === void 0 ? void 0 : globalObject.console) === null || _a === void 0 ? void 0 : _a.log) === null || _b === void 0 ? void 0 : _b.apply) === "function") {
              consoleLogger = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }
                console.log.apply(console, args);
              };
              errorLogger = console.warn ? function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }
                console.warn.apply(console, args);
              } : consoleLogger;
            } else if (globalObject === null || globalObject === void 0 ? void 0 : globalObject.console.log) {
              consoleLogger = errorLogger = function() {
                Function.prototype.apply.call(console.log, console, arguments);
              };
            } else {
              consoleLogger = errorLogger = function() {
              };
            }
            return [consoleLogger, errorLogger].map(getHandler);
          };
          var Logger = function() {
            function Logger2() {
              Logger2.logLevel = Logger2.LOG_DEFAULT;
            }
            Logger2.initLogHandlers = function() {
              var _a = getDefaultLoggers(), logHandler = _a[0], logErrorHandler = _a[1];
              this.logHandler = logHandler;
              this.logErrorHandler = logErrorHandler;
            };
            Logger2.logLevel = LogLevels.Error;
            Logger2.LOG_NONE = LogLevels.None;
            Logger2.LOG_ERROR = LogLevels.Error;
            Logger2.LOG_MAJOR = LogLevels.Major;
            Logger2.LOG_MINOR = LogLevels.Minor;
            Logger2.LOG_MICRO = LogLevels.Micro;
            Logger2.LOG_DEFAULT = LogLevels.Error;
            Logger2.LOG_DEBUG = LogLevels.Micro;
            Logger2.logAction = function(level, action, message) {
              if (Logger2.shouldLog(level)) {
                (level === LogLevels.Error ? Logger2.logErrorHandler : Logger2.logHandler)("Ably: " + action + ": " + message);
              }
            };
            Logger2.deprecated = function(original, replacement) {
              Logger2.deprecatedWithMsg(original, "Please use '" + replacement + "' instead.");
            };
            Logger2.deprecatedWithMsg = function(funcName, msg) {
              if (Logger2.shouldLog(LogLevels.Error)) {
                Logger2.logErrorHandler("Ably: Deprecation warning - '" + funcName + "' is deprecated and will be removed from a future version. " + msg);
              }
            };
            Logger2.shouldLog = function(level) {
              return level <= Logger2.logLevel;
            };
            Logger2.setLog = function(level, handler2) {
              if (level !== void 0)
                Logger2.logLevel = level;
              if (handler2 !== void 0)
                Logger2.logHandler = Logger2.logErrorHandler = handler2;
            };
            return Logger2;
          }();
          exports2["default"] = Logger;
        },
        function(module3, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_require__.d(__webpack_exports__, "__extends", function() {
            return __extends;
          });
          __webpack_require__.d(__webpack_exports__, "__assign", function() {
            return __assign;
          });
          __webpack_require__.d(__webpack_exports__, "__rest", function() {
            return __rest;
          });
          __webpack_require__.d(__webpack_exports__, "__decorate", function() {
            return __decorate;
          });
          __webpack_require__.d(__webpack_exports__, "__param", function() {
            return __param;
          });
          __webpack_require__.d(__webpack_exports__, "__metadata", function() {
            return __metadata;
          });
          __webpack_require__.d(__webpack_exports__, "__awaiter", function() {
            return __awaiter;
          });
          __webpack_require__.d(__webpack_exports__, "__generator", function() {
            return __generator;
          });
          __webpack_require__.d(__webpack_exports__, "__createBinding", function() {
            return __createBinding;
          });
          __webpack_require__.d(__webpack_exports__, "__exportStar", function() {
            return __exportStar;
          });
          __webpack_require__.d(__webpack_exports__, "__values", function() {
            return __values;
          });
          __webpack_require__.d(__webpack_exports__, "__read", function() {
            return __read;
          });
          __webpack_require__.d(__webpack_exports__, "__spread", function() {
            return __spread;
          });
          __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() {
            return __spreadArrays;
          });
          __webpack_require__.d(__webpack_exports__, "__spreadArray", function() {
            return __spreadArray;
          });
          __webpack_require__.d(__webpack_exports__, "__await", function() {
            return __await;
          });
          __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() {
            return __asyncGenerator;
          });
          __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() {
            return __asyncDelegator;
          });
          __webpack_require__.d(__webpack_exports__, "__asyncValues", function() {
            return __asyncValues;
          });
          __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() {
            return __makeTemplateObject;
          });
          __webpack_require__.d(__webpack_exports__, "__importStar", function() {
            return __importStar;
          });
          __webpack_require__.d(__webpack_exports__, "__importDefault", function() {
            return __importDefault;
          });
          __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() {
            return __classPrivateFieldGet;
          });
          __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() {
            return __classPrivateFieldSet;
          });
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (Object.prototype.hasOwnProperty.call(b2, p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          function __extends(d, b) {
            if (typeof b !== "function" && b !== null)
              throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          }
          var __assign = function() {
            __assign = Object.assign || function __assign2(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
              }
              return t;
            };
            return __assign.apply(this, arguments);
          };
          function __rest(s, e) {
            var t = {};
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === "function")
              for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
              }
            return t;
          }
          function __decorate(decorators, target, key, desc) {
            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                  r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          }
          function __param(paramIndex, decorator) {
            return function(target, key) {
              decorator(target, key, paramIndex);
            };
          }
          function __metadata(metadataKey, metadataValue) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
              return Reflect.metadata(metadataKey, metadataValue);
          }
          function __awaiter(thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P ? value : new P(function(resolve) {
                resolve(value);
              });
            }
            return new (P || (P = Promise))(function(resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator["throw"](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
              }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
          }
          function __generator(thisArg, body) {
            var _ = { label: 0, sent: function() {
              if (t[0] & 1)
                throw t[1];
              return t[1];
            }, trys: [], ops: [] }, f, y, t, g;
            return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
              return this;
            }), g;
            function verb(n) {
              return function(v) {
                return step([n, v]);
              };
            }
            function step(op) {
              if (f)
                throw new TypeError("Generator is already executing.");
              while (_)
                try {
                  if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                  if (y = 0, t)
                    op = [op[0] & 2, t.value];
                  switch (op[0]) {
                    case 0:
                    case 1:
                      t = op;
                      break;
                    case 4:
                      _.label++;
                      return { value: op[1], done: false };
                    case 5:
                      _.label++;
                      y = op[1];
                      op = [0];
                      continue;
                    case 7:
                      op = _.ops.pop();
                      _.trys.pop();
                      continue;
                    default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                      }
                      if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                      }
                      if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                      }
                      if (t[2])
                        _.ops.pop();
                      _.trys.pop();
                      continue;
                  }
                  op = body.call(thisArg, _);
                } catch (e) {
                  op = [6, e];
                  y = 0;
                } finally {
                  f = t = 0;
                }
              if (op[0] & 5)
                throw op[1];
              return { value: op[0] ? op[1] : void 0, done: true };
            }
          }
          var __createBinding = Object.create ? function(o, m, k, k2) {
            if (k2 === void 0)
              k2 = k;
            Object.defineProperty(o, k2, { enumerable: true, get: function() {
              return m[k];
            } });
          } : function(o, m, k, k2) {
            if (k2 === void 0)
              k2 = k;
            o[k2] = m[k];
          };
          function __exportStar(m, o) {
            for (var p in m)
              if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
          }
          function __values(o) {
            var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
            if (m)
              return m.call(o);
            if (o && typeof o.length === "number")
              return {
                next: function() {
                  if (o && i >= o.length)
                    o = void 0;
                  return { value: o && o[i++], done: !o };
                }
              };
            throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }
          function __read(o, n) {
            var m = typeof Symbol === "function" && o[Symbol.iterator];
            if (!m)
              return o;
            var i = m.call(o), r, ar = [], e;
            try {
              while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
            } catch (error) {
              e = { error };
            } finally {
              try {
                if (r && !r.done && (m = i["return"]))
                  m.call(i);
              } finally {
                if (e)
                  throw e.error;
              }
            }
            return ar;
          }
          function __spread() {
            for (var ar = [], i = 0; i < arguments.length; i++)
              ar = ar.concat(__read(arguments[i]));
            return ar;
          }
          function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++)
              s += arguments[i].length;
            for (var r = Array(s), k = 0, i = 0; i < il; i++)
              for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
            return r;
          }
          function __spreadArray(to, from, pack) {
            if (pack || arguments.length === 2)
              for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                  if (!ar)
                    ar = Array.prototype.slice.call(from, 0, i);
                  ar[i] = from[i];
                }
              }
            return to.concat(ar || Array.prototype.slice.call(from));
          }
          function __await(v) {
            return this instanceof __await ? (this.v = v, this) : new __await(v);
          }
          function __asyncGenerator(thisArg, _arguments, generator) {
            if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
            var g = generator.apply(thisArg, _arguments || []), i, q = [];
            return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
              return this;
            }, i;
            function verb(n) {
              if (g[n])
                i[n] = function(v) {
                  return new Promise(function(a, b) {
                    q.push([n, v, a, b]) > 1 || resume(n, v);
                  });
                };
            }
            function resume(n, v) {
              try {
                step(g[n](v));
              } catch (e) {
                settle(q[0][3], e);
              }
            }
            function step(r) {
              r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
            }
            function fulfill(value) {
              resume("next", value);
            }
            function reject(value) {
              resume("throw", value);
            }
            function settle(f, v) {
              if (f(v), q.shift(), q.length)
                resume(q[0][0], q[0][1]);
            }
          }
          function __asyncDelegator(o) {
            var i, p;
            return i = {}, verb("next"), verb("throw", function(e) {
              throw e;
            }), verb("return"), i[Symbol.iterator] = function() {
              return this;
            }, i;
            function verb(n, f) {
              i[n] = o[n] ? function(v) {
                return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
              } : f;
            }
          }
          function __asyncValues(o) {
            if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
            var m = o[Symbol.asyncIterator], i;
            return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
              return this;
            }, i);
            function verb(n) {
              i[n] = o[n] && function(v) {
                return new Promise(function(resolve, reject) {
                  v = o[n](v), settle(resolve, reject, v.done, v.value);
                });
              };
            }
            function settle(resolve, reject, d, v) {
              Promise.resolve(v).then(function(v2) {
                resolve({ value: v2, done: d });
              }, reject);
            }
          }
          function __makeTemplateObject(cooked, raw) {
            if (Object.defineProperty) {
              Object.defineProperty(cooked, "raw", { value: raw });
            } else {
              cooked.raw = raw;
            }
            return cooked;
          }
          ;
          var __setModuleDefault = Object.create ? function(o, v) {
            Object.defineProperty(o, "default", { enumerable: true, value: v });
          } : function(o, v) {
            o["default"] = v;
          };
          function __importStar(mod) {
            if (mod && mod.__esModule)
              return mod;
            var result = {};
            if (mod != null) {
              for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                  __createBinding(result, mod, k);
            }
            __setModuleDefault(result, mod);
            return result;
          }
          function __importDefault(mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          }
          function __classPrivateFieldGet(receiver, state, kind, f) {
            if (kind === "a" && !f)
              throw new TypeError("Private accessor was defined without a getter");
            if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
          }
          function __classPrivateFieldSet(receiver, state, value, kind, f) {
            if (kind === "m")
              throw new TypeError("Private method is not writable");
            if (kind === "a" && !f)
              throw new TypeError("Private accessor was defined without a setter");
            if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
          }
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          exports2.allToUpperCase = exports2.allToLowerCase = exports2.encodeBody = exports2.decodeBody = exports2.Format = exports2.promisify = exports2.trim = exports2.arrChooseN = exports2.randomHexString = exports2.randomString = exports2.cheapRandStr = exports2.dataSizeBytes = exports2.inspectBody = exports2.inspectError = exports2.isErrorInfo = exports2.now = exports2.parseQueryString = exports2.toQueryString = exports2.arrPopRandomElement = exports2.defaultPostHeaders = exports2.defaultGetHeaders = exports2.allSame = exports2.arrEvery = exports2.arrFilter = exports2.arrMap = exports2.safeArrForEach = exports2.arrForEach = exports2.forInOwnNonNullProperties = exports2.valuesArray = exports2.keysArray = exports2.arrWithoutValue = exports2.arrDeleteValue = exports2.arrIn = exports2.arrIndexOf = exports2.arrSubtract = exports2.arrIntersectOb = exports2.arrIntersect = exports2.intersect = exports2.containsValue = exports2.inherits = exports2.prototypicalClone = exports2.shallowClone = exports2.isEmptyArg = exports2.isOnlyPropIn = exports2.isEmpty = exports2.isObject = exports2.ensureArray = exports2.isArray = exports2.copy = exports2.mixin = void 0;
          exports2.getGlobalObject = exports2.getJitterCoefficient = exports2.getBackoffCoefficient = void 0;
          var tslib_1 = __webpack_require__(1);
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var defaults_1 = tslib_1.__importDefault(__webpack_require__(6));
          function randomPosn(arrOrStr) {
            return Math.floor(Math.random() * arrOrStr.length);
          }
          function mixin(target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
            }
            for (var i = 0; i < args.length; i++) {
              var source = args[i];
              if (!source) {
                break;
              }
              var hasOwnProperty = Object.prototype.hasOwnProperty;
              for (var key in source) {
                if (!hasOwnProperty || hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          }
          exports2.mixin = mixin;
          function copy(src) {
            return mixin({}, src);
          }
          exports2.copy = copy;
          exports2.isArray = Array.isArray || function(value) {
            return Object.prototype.toString.call(value) == "[object Array]";
          };
          function ensureArray(obj) {
            if (isEmptyArg(obj)) {
              return [];
            }
            if (exports2.isArray(obj)) {
              return obj;
            }
            return [obj];
          }
          exports2.ensureArray = ensureArray;
          function isObject(ob) {
            return Object.prototype.toString.call(ob) == "[object Object]";
          }
          exports2.isObject = isObject;
          function isEmpty(ob) {
            for (var prop in ob)
              return false;
            return true;
          }
          exports2.isEmpty = isEmpty;
          function isOnlyPropIn(ob, property) {
            for (var prop in ob) {
              if (prop !== property) {
                return false;
              }
            }
            return true;
          }
          exports2.isOnlyPropIn = isOnlyPropIn;
          function isEmptyArg(arg) {
            return arg === null || arg === void 0;
          }
          exports2.isEmptyArg = isEmptyArg;
          function shallowClone(ob) {
            var result = new Object();
            for (var prop in ob)
              result[prop] = ob[prop];
            return result;
          }
          exports2.shallowClone = shallowClone;
          function prototypicalClone(ob, ownProperties) {
            var F = function() {
              function F2() {
              }
              return F2;
            }();
            F.prototype = ob;
            var result = new F();
            if (ownProperties)
              mixin(result, ownProperties);
            return result;
          }
          exports2.prototypicalClone = prototypicalClone;
          var inherits = function(ctor, superCtor) {
            if (platform_1["default"].Config.inherits) {
              platform_1["default"].Config.inherits(ctor, superCtor);
              return;
            }
            ctor.super_ = superCtor;
            ctor.prototype = prototypicalClone(superCtor.prototype, { constructor: ctor });
          };
          exports2.inherits = inherits;
          function containsValue(ob, val) {
            for (var i in ob) {
              if (ob[i] == val)
                return true;
            }
            return false;
          }
          exports2.containsValue = containsValue;
          function intersect(arr, ob) {
            return exports2.isArray(ob) ? arrIntersect(arr, ob) : arrIntersectOb(arr, ob);
          }
          exports2.intersect = intersect;
          function arrIntersect(arr1, arr2) {
            var result = [];
            for (var i = 0; i < arr1.length; i++) {
              var member = arr1[i];
              if (exports2.arrIndexOf(arr2, member) != -1)
                result.push(member);
            }
            return result;
          }
          exports2.arrIntersect = arrIntersect;
          function arrIntersectOb(arr, ob) {
            var result = [];
            for (var i = 0; i < arr.length; i++) {
              var member = arr[i];
              if (member in ob)
                result.push(member);
            }
            return result;
          }
          exports2.arrIntersectOb = arrIntersectOb;
          function arrSubtract(arr1, arr2) {
            var result = [];
            for (var i = 0; i < arr1.length; i++) {
              var element = arr1[i];
              if (exports2.arrIndexOf(arr2, element) == -1)
                result.push(element);
            }
            return result;
          }
          exports2.arrSubtract = arrSubtract;
          exports2.arrIndexOf = Array.prototype.indexOf ? function(arr, elem, fromIndex) {
            return arr.indexOf(elem, fromIndex);
          } : function(arr, elem, fromIndex) {
            fromIndex = fromIndex || 0;
            var len = arr.length;
            for (; fromIndex < len; fromIndex++) {
              if (arr[fromIndex] === elem) {
                return fromIndex;
              }
            }
            return -1;
          };
          function arrIn(arr, val) {
            return exports2.arrIndexOf(arr, val) !== -1;
          }
          exports2.arrIn = arrIn;
          function arrDeleteValue(arr, val) {
            var idx = exports2.arrIndexOf(arr, val);
            var res = idx != -1;
            if (res)
              arr.splice(idx, 1);
            return res;
          }
          exports2.arrDeleteValue = arrDeleteValue;
          function arrWithoutValue(arr, val) {
            var newArr = arr.slice();
            arrDeleteValue(newArr, val);
            return newArr;
          }
          exports2.arrWithoutValue = arrWithoutValue;
          function keysArray(ob, ownOnly) {
            var result = [];
            for (var prop in ob) {
              if (ownOnly && !Object.prototype.hasOwnProperty.call(ob, prop))
                continue;
              result.push(prop);
            }
            return result;
          }
          exports2.keysArray = keysArray;
          function valuesArray(ob, ownOnly) {
            var result = [];
            for (var prop in ob) {
              if (ownOnly && !Object.prototype.hasOwnProperty.call(ob, prop))
                continue;
              result.push(ob[prop]);
            }
            return result;
          }
          exports2.valuesArray = valuesArray;
          function forInOwnNonNullProperties(ob, fn) {
            for (var prop in ob) {
              if (Object.prototype.hasOwnProperty.call(ob, prop) && ob[prop]) {
                fn(prop);
              }
            }
          }
          exports2.forInOwnNonNullProperties = forInOwnNonNullProperties;
          exports2.arrForEach = Array.prototype.forEach ? function(arr, fn) {
            arr.forEach(fn);
          } : function(arr, fn) {
            var len = arr.length;
            for (var i = 0; i < len; i++) {
              fn(arr[i], i, arr);
            }
          };
          function safeArrForEach(arr, fn) {
            return exports2.arrForEach(arr.slice(), fn);
          }
          exports2.safeArrForEach = safeArrForEach;
          exports2.arrMap = Array.prototype.map ? function(arr, fn) {
            return arr.map(fn);
          } : function(arr, fn) {
            var result = [];
            var len = arr.length;
            for (var i = 0; i < len; i++) {
              result.push(fn(arr[i], i, arr));
            }
            return result;
          };
          exports2.arrFilter = Array.prototype.filter ? function(arr, fn) {
            return arr.filter(fn);
          } : function(arr, fn) {
            var result = [], len = arr.length;
            for (var i = 0; i < len; i++) {
              if (fn(arr[i])) {
                result.push(arr[i]);
              }
            }
            return result;
          };
          exports2.arrEvery = Array.prototype.every ? function(arr, fn) {
            return arr.every(fn);
          } : function(arr, fn) {
            var len = arr.length;
            for (var i = 0; i < len; i++) {
              if (!fn(arr[i], i, arr)) {
                return false;
              }
            }
            return true;
          };
          function allSame(arr, prop) {
            if (arr.length === 0) {
              return true;
            }
            var first = arr[0][prop];
            return exports2.arrEvery(arr, function(item) {
              return item[prop] === first;
            });
          }
          exports2.allSame = allSame;
          var contentTypes = {
            json: "application/json",
            jsonp: "application/javascript",
            xml: "application/xml",
            html: "text/html",
            msgpack: "application/x-msgpack"
          };
          function defaultGetHeaders(format) {
            var accept = contentTypes[format || Format.json];
            return {
              accept,
              "X-Ably-Version": defaults_1["default"].apiVersion,
              "Ably-Agent": defaults_1["default"].agent
            };
          }
          exports2.defaultGetHeaders = defaultGetHeaders;
          function defaultPostHeaders(format) {
            var contentType;
            var accept = contentType = contentTypes[format || Format.json];
            return {
              accept,
              "content-type": contentType,
              "X-Ably-Version": defaults_1["default"].apiVersion,
              "Ably-Agent": defaults_1["default"].agent
            };
          }
          exports2.defaultPostHeaders = defaultPostHeaders;
          function arrPopRandomElement(arr) {
            return arr.splice(randomPosn(arr), 1)[0];
          }
          exports2.arrPopRandomElement = arrPopRandomElement;
          function toQueryString(params) {
            var parts = [];
            if (params) {
              for (var key in params)
                parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
            }
            return parts.length ? "?" + parts.join("&") : "";
          }
          exports2.toQueryString = toQueryString;
          function parseQueryString(query) {
            var match;
            var search = /([^?&=]+)=?([^&]*)/g;
            var result = {};
            while (match = search.exec(query))
              result[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
            return result;
          }
          exports2.parseQueryString = parseQueryString;
          exports2.now = Date.now || function() {
            return new Date().getTime();
          };
          function isErrorInfo(err) {
            return err.constructor.name == "ErrorInfo";
          }
          exports2.isErrorInfo = isErrorInfo;
          function inspectError(err) {
            var _a, _b;
            if (err instanceof Error || ((_b = (_a = err) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) === "ErrorInfo")
              return platform_1["default"].Config.inspect(err);
            return err.toString();
          }
          exports2.inspectError = inspectError;
          function inspectBody(body) {
            if (platform_1["default"].BufferUtils.isBuffer(body)) {
              return body.toString();
            } else if (typeof body === "string") {
              return body;
            } else {
              return platform_1["default"].Config.inspect(body);
            }
          }
          exports2.inspectBody = inspectBody;
          function dataSizeBytes(data) {
            if (platform_1["default"].BufferUtils.isBuffer(data)) {
              return platform_1["default"].BufferUtils.byteLength(data);
            }
            if (typeof data === "string") {
              return platform_1["default"].Config.stringByteSize(data);
            }
            throw new Error("Expected input of Utils.dataSizeBytes to be a buffer or string, but was: " + typeof data);
          }
          exports2.dataSizeBytes = dataSizeBytes;
          function cheapRandStr() {
            return String(Math.random()).substr(2);
          }
          exports2.cheapRandStr = cheapRandStr;
          var randomString = function(numBytes) {
            if (platform_1["default"].Config.getRandomValues && typeof Uint8Array !== "undefined") {
              var uIntArr = new Uint8Array(numBytes);
              platform_1["default"].Config.getRandomValues(uIntArr);
              return platform_1["default"].BufferUtils.base64Encode(uIntArr);
            }
            var charset = platform_1["default"].BufferUtils.base64CharSet;
            var length = Math.round(numBytes * 4 / 3);
            var result = "";
            for (var i = 0; i < length; i++) {
              result += charset[randomPosn(charset)];
            }
            return result;
          };
          exports2.randomString = randomString;
          var randomHexString = function(numBytes) {
            if (platform_1["default"].Config.getRandomValues && typeof Uint8Array !== "undefined") {
              var uIntArr = new Uint8Array(numBytes);
              platform_1["default"].Config.getRandomValues(uIntArr);
              return platform_1["default"].BufferUtils.hexEncode(uIntArr);
            }
            var charset = platform_1["default"].BufferUtils.hexCharSet;
            var length = numBytes * 2;
            var result = "";
            for (var i = 0; i < length; i++) {
              result += charset[randomPosn(charset)];
            }
            return result;
          };
          exports2.randomHexString = randomHexString;
          function arrChooseN(arr, n) {
            var numItems = Math.min(n, arr.length), mutableArr = arr.slice(), result = [];
            for (var i = 0; i < numItems; i++) {
              result.push(arrPopRandomElement(mutableArr));
            }
            return result;
          }
          exports2.arrChooseN = arrChooseN;
          exports2.trim = String.prototype.trim ? function(str) {
            return str.trim();
          } : function(str) {
            return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          };
          function promisify(ob, fnName, args) {
            return new Promise(function(resolve, reject) {
              ob[fnName].apply(ob, tslib_1.__spreadArray(tslib_1.__spreadArray([], args), [function(err, res) {
                err ? reject(err) : resolve(res);
              }]));
            });
          }
          exports2.promisify = promisify;
          var Format;
          (function(Format2) {
            Format2["msgpack"] = "msgpack";
            Format2["json"] = "json";
          })(Format = exports2.Format || (exports2.Format = {}));
          function decodeBody(body, format) {
            return format == "msgpack" ? platform_1["default"].Config.msgpack.decode(body) : JSON.parse(String(body));
          }
          exports2.decodeBody = decodeBody;
          function encodeBody(body, format) {
            return format == "msgpack" ? platform_1["default"].Config.msgpack.encode(body, true) : JSON.stringify(body);
          }
          exports2.encodeBody = encodeBody;
          function allToLowerCase(arr) {
            return arr.map(function(element) {
              return element && element.toLowerCase();
            });
          }
          exports2.allToLowerCase = allToLowerCase;
          function allToUpperCase(arr) {
            return arr.map(function(element) {
              return element && element.toUpperCase();
            });
          }
          exports2.allToUpperCase = allToUpperCase;
          function getBackoffCoefficient(n) {
            return Math.min((n + 2) / 3, 2);
          }
          exports2.getBackoffCoefficient = getBackoffCoefficient;
          function getJitterCoefficient() {
            return 1 - Math.random() * 0.2;
          }
          exports2.getJitterCoefficient = getJitterCoefficient;
          function getGlobalObject() {
            if (global) {
              return global;
            }
            if (typeof window !== "undefined") {
              return window;
            }
            return self;
          }
          exports2.getGlobalObject = getGlobalObject;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var ErrorInfo = function() {
            function ErrorInfo2(message, code, statusCode, cause) {
              this.message = message;
              this.code = code;
              this.statusCode = statusCode;
              this.cause = cause;
            }
            ErrorInfo2.prototype.toString = function() {
              var result = "[" + this.constructor.name;
              if (this.message)
                result += ": " + this.message;
              if (this.statusCode)
                result += "; statusCode=" + this.statusCode;
              if (this.code)
                result += "; code=" + this.code;
              if (this.cause)
                result += "; cause=" + Utils.inspectError(this.cause);
              if (this.href && !(this.message && this.message.indexOf("help.ably.io") > -1))
                result += "; see " + this.href + " ";
              result += "]";
              return result;
            };
            ErrorInfo2.fromValues = function(values) {
              var _a = values, message = _a.message, code = _a.code, statusCode = _a.statusCode;
              if (typeof message !== "string" || typeof code !== "number" || typeof statusCode !== "number") {
                throw new Error("ErrorInfo.fromValues(): invalid values: " + platform_1["default"].Config.inspect(values));
              }
              var result = Object.assign(new ErrorInfo2(message, code, statusCode), values);
              if (result.code && !result.href) {
                result.href = "https://help.ably.io/error/" + result.code;
              }
              return result;
            };
            return ErrorInfo2;
          }();
          exports2["default"] = ErrorInfo;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var Platform = function() {
            function Platform2() {
            }
            return Platform2;
          }();
          exports2["default"] = Platform;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          function callListener(eventThis, listener, args) {
            try {
              listener.apply(eventThis, args);
            } catch (e) {
              logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "EventEmitter.emit()", "Unexpected listener exception: " + e + "; stack = " + (e && e.stack));
            }
          }
          function removeListener(targetListeners, listener, eventFilter) {
            var listeners;
            var index;
            var eventName;
            for (var targetListenersIndex = 0; targetListenersIndex < targetListeners.length; targetListenersIndex++) {
              listeners = targetListeners[targetListenersIndex];
              if (eventFilter) {
                listeners = listeners[eventFilter];
              }
              if (Utils.isArray(listeners)) {
                while ((index = Utils.arrIndexOf(listeners, listener)) !== -1) {
                  listeners.splice(index, 1);
                }
                if (eventFilter && listeners.length === 0) {
                  delete targetListeners[targetListenersIndex][eventFilter];
                }
              } else if (Utils.isObject(listeners)) {
                for (eventName in listeners) {
                  if (Object.prototype.hasOwnProperty.call(listeners, eventName) && Utils.isArray(listeners[eventName])) {
                    removeListener([listeners], listener, eventName);
                  }
                }
              }
            }
          }
          var EventEmitter = function() {
            function EventEmitter2() {
              this.any = [];
              this.events = /* @__PURE__ */ Object.create(null);
              this.anyOnce = [];
              this.eventsOnce = /* @__PURE__ */ Object.create(null);
            }
            EventEmitter2.prototype.on = function() {
              var _this = this;
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (args.length === 1) {
                var listener = args[0];
                if (typeof listener === "function") {
                  this.any.push(listener);
                } else {
                  throw new Error("EventListener.on(): Invalid arguments: " + platform_1["default"].Config.inspect(args));
                }
              }
              if (args.length === 2) {
                var event_1 = args[0], listener_1 = args[1];
                if (typeof listener_1 !== "function") {
                  throw new Error("EventListener.on(): Invalid arguments: " + platform_1["default"].Config.inspect(args));
                }
                if (Utils.isEmptyArg(event_1)) {
                  this.any.push(listener_1);
                } else if (Utils.isArray(event_1)) {
                  event_1.forEach(function(eventName) {
                    _this.on(eventName, listener_1);
                  });
                } else {
                  if (typeof event_1 !== "string") {
                    throw new Error("EventListener.on(): Invalid arguments: " + platform_1["default"].Config.inspect(args));
                  }
                  var listeners = this.events[event_1] || (this.events[event_1] = []);
                  listeners.push(listener_1);
                }
              }
            };
            EventEmitter2.prototype.off = function() {
              var _a;
              var _this = this;
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (args.length == 0 || Utils.isEmptyArg(args[0]) && Utils.isEmptyArg(args[1])) {
                this.any = [];
                this.events = /* @__PURE__ */ Object.create(null);
                this.anyOnce = [];
                this.eventsOnce = /* @__PURE__ */ Object.create(null);
                return;
              }
              var firstArg = args[0], secondArg = args[1];
              var listener = null;
              var event = null;
              if (args.length === 1 || !secondArg) {
                if (typeof firstArg === "function") {
                  listener = firstArg;
                } else {
                  event = firstArg;
                }
              } else {
                if (typeof secondArg !== "function") {
                  throw new Error("EventEmitter.off(): invalid arguments:" + platform_1["default"].Config.inspect(args));
                }
                _a = [firstArg, secondArg], event = _a[0], listener = _a[1];
              }
              if (listener && Utils.isEmptyArg(event)) {
                removeListener([this.any, this.events, this.anyOnce, this.eventsOnce], listener);
                return;
              }
              if (Utils.isArray(event)) {
                event.forEach(function(eventName) {
                  _this.off(eventName, listener);
                });
                return;
              }
              if (typeof event !== "string") {
                throw new Error("EventEmitter.off(): invalid arguments:" + platform_1["default"].Config.inspect(args));
              }
              if (listener) {
                removeListener([this.events, this.eventsOnce], listener, event);
              } else {
                delete this.events[event];
                delete this.eventsOnce[event];
              }
            };
            EventEmitter2.prototype.listeners = function(event) {
              if (event) {
                var listeners = this.events[event] || [];
                if (this.eventsOnce[event])
                  Array.prototype.push.apply(listeners, this.eventsOnce[event]);
                return listeners.length ? listeners : null;
              }
              return this.any.length ? this.any : null;
            };
            EventEmitter2.prototype.emit = function(event) {
              var args = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
              }
              var eventThis = { event };
              var listeners = [];
              if (this.anyOnce.length) {
                Array.prototype.push.apply(listeners, this.anyOnce);
                this.anyOnce = [];
              }
              if (this.any.length) {
                Array.prototype.push.apply(listeners, this.any);
              }
              var eventsOnceListeners = this.eventsOnce[event];
              if (eventsOnceListeners) {
                Array.prototype.push.apply(listeners, eventsOnceListeners);
                delete this.eventsOnce[event];
              }
              var eventsListeners = this.events[event];
              if (eventsListeners) {
                Array.prototype.push.apply(listeners, eventsListeners);
              }
              Utils.arrForEach(listeners, function(listener) {
                callListener(eventThis, listener, args);
              });
            };
            EventEmitter2.prototype.once = function() {
              var _this = this;
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              var argCount = args.length;
              if ((argCount === 0 || argCount === 1 && typeof args[0] !== "function") && platform_1["default"].Config.Promise) {
                var event_2 = args[0];
                if (typeof event_2 !== "string") {
                  throw new Error("EventEmitter.once(): Invalid arguments:" + platform_1["default"].Config.inspect(args));
                }
                return new platform_1["default"].Config.Promise(function(resolve) {
                  _this.once(event_2, resolve);
                });
              }
              var firstArg = args[0], secondArg = args[1];
              if (args.length === 1 && typeof firstArg === "function") {
                this.anyOnce.push(firstArg);
              } else if (Utils.isEmptyArg(firstArg)) {
                if (typeof secondArg !== "function") {
                  throw new Error("EventEmitter.once(): Invalid arguments:" + platform_1["default"].Config.inspect(args));
                }
                this.anyOnce.push(secondArg);
              } else if (Utils.isArray(firstArg)) {
                var self_1 = this;
                var listenerWrapper_1 = function() {
                  var innerArgs = Array.prototype.slice.call(arguments);
                  Utils.arrForEach(firstArg, function(eventName) {
                    self_1.off(eventName, listenerWrapper_1);
                  });
                  if (typeof secondArg !== "function") {
                    throw new Error("EventEmitter.once(): Invalid arguments:" + platform_1["default"].Config.inspect(args));
                  }
                  secondArg.apply(this, innerArgs);
                };
                Utils.arrForEach(firstArg, function(eventName) {
                  self_1.on(eventName, listenerWrapper_1);
                });
              } else {
                if (typeof firstArg !== "string") {
                  throw new Error("EventEmitter.once(): Invalid arguments:" + platform_1["default"].Config.inspect(args));
                }
                var listeners = this.eventsOnce[firstArg] || (this.eventsOnce[firstArg] = []);
                if (secondArg) {
                  if (typeof secondArg !== "function") {
                    throw new Error("EventEmitter.once(): Invalid arguments:" + platform_1["default"].Config.inspect(args));
                  }
                  listeners.push(secondArg);
                }
              }
            };
            EventEmitter2.prototype.whenState = function(targetState, currentState, listener) {
              var _this = this;
              var listenerArgs = [];
              for (var _i = 3; _i < arguments.length; _i++) {
                listenerArgs[_i - 3] = arguments[_i];
              }
              var eventThis = { event: targetState };
              if (typeof targetState !== "string" || typeof currentState !== "string") {
                throw "whenState requires a valid event String argument";
              }
              if (typeof listener !== "function" && platform_1["default"].Config.Promise) {
                return new platform_1["default"].Config.Promise(function(resolve) {
                  EventEmitter2.prototype.whenState.apply(_this, [targetState, currentState, resolve].concat(listenerArgs));
                });
              }
              if (targetState === currentState) {
                callListener(eventThis, listener, listenerArgs);
              } else {
                this.once(targetState, listener);
              }
            };
            return EventEmitter2;
          }();
          exports2["default"] = EventEmitter;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          exports2.getDefaults = exports2.normaliseOptions = exports2.objectifyOptions = exports2.getHosts = exports2.getFallbackHosts = exports2.environmentFallbackHosts = exports2.getHttpScheme = exports2.getPort = exports2.getHost = void 0;
          var tslib_1 = __webpack_require__(1);
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var package_json_1 = __webpack_require__(36);
          var agent = "ably-js/" + package_json_1.version;
          var Defaults = {
            ENVIRONMENT: "",
            REST_HOST: "rest.ably.io",
            REALTIME_HOST: "realtime.ably.io",
            FALLBACK_HOSTS: [
              "A.ably-realtime.com",
              "B.ably-realtime.com",
              "C.ably-realtime.com",
              "D.ably-realtime.com",
              "E.ably-realtime.com"
            ],
            PORT: 80,
            TLS_PORT: 443,
            TIMEOUTS: {
              disconnectedRetryTimeout: 15e3,
              suspendedRetryTimeout: 3e4,
              httpRequestTimeout: 15e3,
              channelRetryTimeout: 15e3,
              fallbackRetryTimeout: 6e5,
              connectionStateTtl: 12e4,
              realtimeRequestTimeout: 1e4,
              recvTimeout: 9e4,
              preferenceConnectTimeout: 6e3,
              parallelUpgradeDelay: 6e3
            },
            httpMaxRetryCount: 3,
            maxMessageSize: 65536,
            version: package_json_1.version,
            apiVersion: "1.2",
            agent,
            getHost,
            getPort,
            getHttpScheme,
            environmentFallbackHosts,
            getFallbackHosts,
            getHosts,
            checkHost,
            objectifyOptions,
            normaliseOptions
          };
          function getHost(options, host, ws) {
            if (ws)
              host = host == options.restHost && options.realtimeHost || host || options.realtimeHost;
            else
              host = host || options.restHost;
            return host;
          }
          exports2.getHost = getHost;
          function getPort(options, tls) {
            return tls || options.tls ? options.tlsPort : options.port;
          }
          exports2.getPort = getPort;
          function getHttpScheme(options) {
            return options.tls ? "https://" : "http://";
          }
          exports2.getHttpScheme = getHttpScheme;
          function environmentFallbackHosts(environment) {
            return [
              environment + "-a-fallback.ably-realtime.com",
              environment + "-b-fallback.ably-realtime.com",
              environment + "-c-fallback.ably-realtime.com",
              environment + "-d-fallback.ably-realtime.com",
              environment + "-e-fallback.ably-realtime.com"
            ];
          }
          exports2.environmentFallbackHosts = environmentFallbackHosts;
          function getFallbackHosts(options) {
            var fallbackHosts = options.fallbackHosts, httpMaxRetryCount = typeof options.httpMaxRetryCount !== "undefined" ? options.httpMaxRetryCount : Defaults.httpMaxRetryCount;
            return fallbackHosts ? Utils.arrChooseN(fallbackHosts, httpMaxRetryCount) : [];
          }
          exports2.getFallbackHosts = getFallbackHosts;
          function getHosts(options) {
            return [options.restHost].concat(getFallbackHosts(options));
          }
          exports2.getHosts = getHosts;
          function checkHost(host) {
            if (typeof host !== "string") {
              throw new errorinfo_1["default"]("host must be a string; was a " + typeof host, 4e4, 400);
            }
            if (!host.length) {
              throw new errorinfo_1["default"]("host must not be zero-length", 4e4, 400);
            }
          }
          function getRealtimeHost(options, production, environment) {
            if (options.realtimeHost)
              return options.realtimeHost;
            if (options.restHost) {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Defaults.normaliseOptions", 'restHost is set to "' + options.restHost + '" but realtimeHost is not set, so setting realtimeHost to "' + options.restHost + '" too. If this is not what you want, please set realtimeHost explicitly.');
              return options.restHost;
            }
            return production ? Defaults.REALTIME_HOST : environment + "-" + Defaults.REALTIME_HOST;
          }
          function getTimeouts(options) {
            var timeouts = {};
            for (var prop in Defaults.TIMEOUTS) {
              timeouts[prop] = options[prop] || Defaults.TIMEOUTS[prop];
            }
            return timeouts;
          }
          function objectifyOptions(options) {
            if (typeof options == "string") {
              return options.indexOf(":") == -1 ? { token: options } : { key: options };
            }
            return options;
          }
          exports2.objectifyOptions = objectifyOptions;
          function normaliseOptions(options) {
            if (options.host) {
              logger_1["default"].deprecated("host", "restHost");
              options.restHost = options.host;
            }
            if (options.wsHost) {
              logger_1["default"].deprecated("wsHost", "realtimeHost");
              options.realtimeHost = options.wsHost;
            }
            if (options.queueEvents) {
              logger_1["default"].deprecated("queueEvents", "queueMessages");
              options.queueMessages = options.queueEvents;
            }
            if (options.fallbackHostsUseDefault) {
              if (options.fallbackHosts) {
                var msg = "fallbackHosts and fallbackHostsUseDefault cannot both be set";
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Defaults.normaliseOptions", msg);
                throw new errorinfo_1["default"](msg, 4e4, 400);
              }
              if (options.port || options.tlsPort) {
                var msg = "fallbackHostsUseDefault cannot be set when port or tlsPort are set";
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Defaults.normaliseOptions", msg);
                throw new errorinfo_1["default"](msg, 4e4, 400);
              }
              if (options.environment) {
                logger_1["default"].deprecatedWithMsg("fallbackHostsUseDefault", "There is no longer a need to set this when the environment option is also set since the library will now generate the correct fallback hosts using the environment option.");
              } else {
                logger_1["default"].deprecated("fallbackHostsUseDefault", "fallbackHosts: Ably.Defaults.FALLBACK_HOSTS");
              }
              options.fallbackHosts = Defaults.FALLBACK_HOSTS;
            }
            if (options.recover === true) {
              logger_1["default"].deprecated("{recover: true}", "{recover: function(lastConnectionDetails, cb) { cb(true); }}");
              options.recover = function(lastConnectionDetails, cb) {
                cb(true);
              };
            }
            if (typeof options.recover === "function" && options.closeOnUnload === true) {
              logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Defaults.normaliseOptions", "closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter");
              options.recover = void 0;
            }
            if (!("closeOnUnload" in options)) {
              options.closeOnUnload = !options.recover;
            }
            if (options.transports && Utils.arrIn(options.transports, "xhr")) {
              logger_1["default"].deprecated('transports: ["xhr"]', 'transports: ["xhr_streaming"]');
              Utils.arrDeleteValue(options.transports, "xhr");
              options.transports.push("xhr_streaming");
            }
            if (!("queueMessages" in options))
              options.queueMessages = true;
            var environment = options.environment && String(options.environment).toLowerCase() || Defaults.ENVIRONMENT;
            var production = !environment || environment === "production";
            if (!options.fallbackHosts && !options.restHost && !options.realtimeHost && !options.port && !options.tlsPort) {
              options.fallbackHosts = production ? Defaults.FALLBACK_HOSTS : environmentFallbackHosts(environment);
            }
            var restHost = options.restHost || (production ? Defaults.REST_HOST : environment + "-" + Defaults.REST_HOST);
            var realtimeHost = getRealtimeHost(options, production, environment);
            Utils.arrForEach((options.fallbackHosts || []).concat(restHost, realtimeHost), checkHost);
            options.port = options.port || Defaults.PORT;
            options.tlsPort = options.tlsPort || Defaults.TLS_PORT;
            if (!("tls" in options))
              options.tls = true;
            var timeouts = getTimeouts(options);
            if ("useBinaryProtocol" in options) {
              options.useBinaryProtocol = platform_1["default"].Config.supportsBinary && options.useBinaryProtocol;
            } else {
              options.useBinaryProtocol = platform_1["default"].Config.preferBinary;
            }
            if (options.clientId) {
              var headers = options.headers = options.headers || {};
              headers["X-Ably-ClientId"] = platform_1["default"].BufferUtils.base64Encode(platform_1["default"].BufferUtils.utf8Encode(options.clientId));
            }
            if (!("idempotentRestPublishing" in options)) {
              options.idempotentRestPublishing = true;
            }
            if (options.promises && !platform_1["default"].Config.Promise) {
              logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Defaults.normaliseOptions", "{promises: true} was specified, but no Promise constructor found; disabling promises");
              options.promises = false;
            }
            if (options.agents) {
              for (var key in options.agents) {
                Defaults.agent += " " + key + "/" + options.agents[key];
              }
            }
            return tslib_1.__assign(tslib_1.__assign({}, options), {
              useBinaryProtocol: "useBinaryProtocol" in options ? platform_1["default"].Config.supportsBinary && options.useBinaryProtocol : platform_1["default"].Config.preferBinary,
              realtimeHost,
              restHost,
              maxMessageSize: options.maxMessageSize || Defaults.maxMessageSize,
              timeouts
            });
          }
          exports2.normaliseOptions = normaliseOptions;
          exports2["default"] = Defaults;
          function getDefaults(platformDefaults) {
            return Object.assign(Defaults, platformDefaults);
          }
          exports2.getDefaults = getDefaults;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          function normaliseContext(context) {
            if (!context || !context.channelOptions) {
              return {
                channelOptions: context,
                plugins: {},
                baseEncodedPreviousPayload: void 0
              };
            }
            return context;
          }
          function normalizeCipherOptions(options) {
            if (options && options.cipher && !options.cipher.channelCipher) {
              if (!platform_1["default"].Crypto)
                throw new Error("Encryption not enabled; use ably.encryption.js instead");
              var cipher = platform_1["default"].Crypto.getCipher(options.cipher);
              return {
                cipher: cipher.cipherParams,
                channelCipher: cipher.cipher
              };
            }
            return options;
          }
          function getMessageSize(msg) {
            var size = 0;
            if (msg.name) {
              size += msg.name.length;
            }
            if (msg.clientId) {
              size += msg.clientId.length;
            }
            if (msg.extras) {
              size += JSON.stringify(msg.extras).length;
            }
            if (msg.data) {
              size += Utils.dataSizeBytes(msg.data);
            }
            return size;
          }
          var Message = function() {
            function Message2() {
            }
            Message2.prototype.toJSON = function() {
              var encoding = this.encoding;
              var data = this.data;
              if (data && platform_1["default"].BufferUtils.isBuffer(data)) {
                if (arguments.length > 0) {
                  encoding = encoding ? encoding + "/base64" : "base64";
                  data = platform_1["default"].BufferUtils.base64Encode(data);
                } else {
                  data = platform_1["default"].BufferUtils.toBuffer(data);
                }
              }
              return {
                name: this.name,
                id: this.id,
                clientId: this.clientId,
                connectionId: this.connectionId,
                connectionKey: this.connectionKey,
                extras: this.extras,
                encoding,
                data
              };
            };
            Message2.prototype.toString = function() {
              var result = "[Message";
              if (this.name)
                result += "; name=" + this.name;
              if (this.id)
                result += "; id=" + this.id;
              if (this.timestamp)
                result += "; timestamp=" + this.timestamp;
              if (this.clientId)
                result += "; clientId=" + this.clientId;
              if (this.connectionId)
                result += "; connectionId=" + this.connectionId;
              if (this.encoding)
                result += "; encoding=" + this.encoding;
              if (this.extras)
                result += "; extras =" + JSON.stringify(this.extras);
              if (this.data) {
                if (typeof this.data == "string")
                  result += "; data=" + this.data;
                else if (platform_1["default"].BufferUtils.isBuffer(this.data))
                  result += "; data (buffer)=" + platform_1["default"].BufferUtils.base64Encode(this.data);
                else
                  result += "; data (json)=" + JSON.stringify(this.data);
              }
              if (this.extras)
                result += "; extras=" + JSON.stringify(this.extras);
              result += "]";
              return result;
            };
            Message2.encrypt = function(msg, options, callback) {
              var data = msg.data, encoding = msg.encoding, cipher = options.channelCipher;
              encoding = encoding ? encoding + "/" : "";
              if (!platform_1["default"].BufferUtils.isBuffer(data)) {
                data = platform_1["default"].BufferUtils.utf8Encode(String(data));
                encoding = encoding + "utf-8/";
              }
              cipher.encrypt(data, function(err, data2) {
                if (err) {
                  callback(err);
                  return;
                }
                msg.data = data2;
                msg.encoding = encoding + "cipher+" + cipher.algorithm;
                callback(null, msg);
              });
            };
            Message2.encode = function(msg, options, callback) {
              var data = msg.data;
              var nativeDataType = typeof data == "string" || platform_1["default"].BufferUtils.isBuffer(data) || data === null || data === void 0;
              if (!nativeDataType) {
                if (Utils.isObject(data) || Utils.isArray(data)) {
                  msg.data = JSON.stringify(data);
                  msg.encoding = msg.encoding ? msg.encoding + "/json" : "json";
                } else {
                  throw new errorinfo_1["default"]("Data type is unsupported", 40013, 400);
                }
              }
              if (options != null && options.cipher) {
                Message2.encrypt(msg, options, callback);
              } else {
                callback(null, msg);
              }
            };
            Message2.encodeArray = function(messages, options, callback) {
              var processed = 0;
              for (var i = 0; i < messages.length; i++) {
                Message2.encode(messages[i], options, function(err) {
                  if (err) {
                    callback(err);
                    return;
                  }
                  processed++;
                  if (processed == messages.length) {
                    callback(null, messages);
                  }
                });
              }
            };
            Message2.decode = function(message, inputContext) {
              var context = normaliseContext(inputContext);
              var lastPayload = message.data;
              var encoding = message.encoding;
              if (encoding) {
                var xforms = encoding.split("/");
                var lastProcessedEncodingIndex = void 0, encodingsToProcess = xforms.length, data = message.data;
                var xform = "";
                try {
                  while ((lastProcessedEncodingIndex = encodingsToProcess) > 0) {
                    var match = xforms[--encodingsToProcess].match(/([-\w]+)(\+([\w-]+))?/);
                    if (!match)
                      break;
                    xform = match[1];
                    switch (xform) {
                      case "base64":
                        data = platform_1["default"].BufferUtils.base64Decode(String(data));
                        if (lastProcessedEncodingIndex == xforms.length) {
                          lastPayload = data;
                        }
                        continue;
                      case "utf-8":
                        data = platform_1["default"].BufferUtils.utf8Decode(data);
                        continue;
                      case "json":
                        data = JSON.parse(data);
                        continue;
                      case "cipher":
                        if (context.channelOptions != null && context.channelOptions.cipher && context.channelOptions.channelCipher) {
                          var xformAlgorithm = match[3], cipher = context.channelOptions.channelCipher;
                          if (xformAlgorithm != cipher.algorithm) {
                            throw new Error("Unable to decrypt message with given cipher; incompatible cipher params");
                          }
                          data = cipher.decrypt(data);
                          continue;
                        } else {
                          throw new Error("Unable to decrypt message; not an encrypted channel");
                        }
                      case "vcdiff":
                        if (!context.plugins || !context.plugins.vcdiff) {
                          throw new errorinfo_1["default"]("Missing Vcdiff decoder (https://github.com/ably-forks/vcdiff-decoder)", 40019, 400);
                        }
                        if (typeof Uint8Array === "undefined") {
                          throw new errorinfo_1["default"]("Delta decoding not supported on this browser (need ArrayBuffer & Uint8Array)", 40020, 400);
                        }
                        try {
                          var deltaBase = context.baseEncodedPreviousPayload;
                          if (typeof deltaBase === "string") {
                            deltaBase = platform_1["default"].BufferUtils.utf8Encode(deltaBase);
                          }
                          deltaBase = platform_1["default"].BufferUtils.toBuffer(deltaBase);
                          data = platform_1["default"].BufferUtils.toBuffer(data);
                          data = platform_1["default"].BufferUtils.typedArrayToBuffer(context.plugins.vcdiff.decode(data, deltaBase));
                          lastPayload = data;
                        } catch (e) {
                          throw new errorinfo_1["default"]("Vcdiff delta decode failed with " + e, 40018, 400);
                        }
                        continue;
                      default:
                        throw new Error("Unknown encoding");
                    }
                  }
                } catch (e) {
                  var err = e;
                  throw new errorinfo_1["default"]("Error processing the " + xform + " encoding, decoder returned \u2018" + err.message + "\u2019", err.code || 40013, 400);
                } finally {
                  message.encoding = lastProcessedEncodingIndex <= 0 ? null : xforms.slice(0, lastProcessedEncodingIndex).join("/");
                  message.data = data;
                }
              }
              context.baseEncodedPreviousPayload = lastPayload;
            };
            Message2.fromResponseBody = function(body, options, format) {
              if (format) {
                body = Utils.decodeBody(body, format);
              }
              for (var i = 0; i < body.length; i++) {
                var msg = body[i] = Message2.fromValues(body[i]);
                try {
                  Message2.decode(msg, options);
                } catch (e) {
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Message.fromResponseBody()", e.toString());
                }
              }
              return body;
            };
            Message2.fromValues = function(values) {
              return Object.assign(new Message2(), values);
            };
            Message2.fromValuesArray = function(values) {
              var count = values.length, result = new Array(count);
              for (var i = 0; i < count; i++)
                result[i] = Message2.fromValues(values[i]);
              return result;
            };
            Message2.fromEncoded = function(encoded, inputOptions) {
              var msg = Message2.fromValues(encoded);
              var options = normalizeCipherOptions(inputOptions);
              try {
                Message2.decode(msg, options);
              } catch (e) {
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Message.fromEncoded()", e.toString());
              }
              return msg;
            };
            Message2.fromEncodedArray = function(encodedArray, options) {
              normalizeCipherOptions(options);
              return encodedArray.map(function(encoded) {
                return Message2.fromEncoded(encoded, options);
              });
            };
            Message2.getMessagesSize = function(messages) {
              var msg, total = 0;
              for (var i = 0; i < messages.length; i++) {
                msg = messages[i];
                total += msg.size || (msg.size = getMessageSize(msg));
              }
              return total;
            };
            Message2.serialize = Utils.encodeBody;
            return Message2;
          }();
          exports2["default"] = Message;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var message_1 = tslib_1.__importDefault(__webpack_require__(7));
          var presencemessage_1 = tslib_1.__importDefault(__webpack_require__(11));
          var actions = {
            HEARTBEAT: 0,
            ACK: 1,
            NACK: 2,
            CONNECT: 3,
            CONNECTED: 4,
            DISCONNECT: 5,
            DISCONNECTED: 6,
            CLOSE: 7,
            CLOSED: 8,
            ERROR: 9,
            ATTACH: 10,
            ATTACHED: 11,
            DETACH: 12,
            DETACHED: 13,
            PRESENCE: 14,
            MESSAGE: 15,
            SYNC: 16,
            AUTH: 17
          };
          var ActionName = [];
          Object.keys(actions).forEach(function(name) {
            ActionName[actions[name]] = name;
          });
          var flags = {
            HAS_PRESENCE: 1 << 0,
            HAS_BACKLOG: 1 << 1,
            RESUMED: 1 << 2,
            TRANSIENT: 1 << 4,
            ATTACH_RESUME: 1 << 5,
            PRESENCE: 1 << 16,
            PUBLISH: 1 << 17,
            SUBSCRIBE: 1 << 18,
            PRESENCE_SUBSCRIBE: 1 << 19
          };
          var flagNames = Object.keys(flags);
          flags.MODE_ALL = flags.PRESENCE | flags.PUBLISH | flags.SUBSCRIBE | flags.PRESENCE_SUBSCRIBE;
          function toStringArray(array) {
            var result = [];
            if (array) {
              for (var i = 0; i < array.length; i++) {
                result.push(array[i].toString());
              }
            }
            return "[ " + result.join(", ") + " ]";
          }
          var simpleAttributes = "id channel channelSerial connectionId connectionKey connectionSerial count msgSerial timestamp".split(" ");
          var ProtocolMessage = function() {
            function ProtocolMessage2() {
              var _this = this;
              this.hasFlag = function(flag) {
                return (_this.flags & flags[flag]) > 0;
              };
            }
            ProtocolMessage2.prototype.setFlag = function(flag) {
              return this.flags = this.flags | flags[flag];
            };
            ProtocolMessage2.prototype.getMode = function() {
              return this.flags && this.flags & flags.MODE_ALL;
            };
            ProtocolMessage2.prototype.encodeModesToFlags = function(modes) {
              var _this = this;
              modes.forEach(function(mode) {
                return _this.setFlag(mode);
              });
            };
            ProtocolMessage2.prototype.decodeModesFromFlags = function() {
              var _this = this;
              var modes = [];
              ProtocolMessage2.channelModes.forEach(function(mode) {
                if (_this.hasFlag(mode)) {
                  modes.push(mode);
                }
              });
              return modes.length > 0 ? modes : void 0;
            };
            ProtocolMessage2.fromValues = function(values) {
              return Object.assign(new ProtocolMessage2(), values);
            };
            ProtocolMessage2.Action = actions;
            ProtocolMessage2.channelModes = ["PRESENCE", "PUBLISH", "SUBSCRIBE", "PRESENCE_SUBSCRIBE"];
            ProtocolMessage2.ActionName = ActionName;
            ProtocolMessage2.serialize = Utils.encodeBody;
            ProtocolMessage2.deserialize = function(serialized, format) {
              var deserialized = Utils.decodeBody(serialized, format);
              return ProtocolMessage2.fromDeserialized(deserialized);
            };
            ProtocolMessage2.fromDeserialized = function(deserialized) {
              var error = deserialized.error;
              if (error)
                deserialized.error = errorinfo_1["default"].fromValues(error);
              var messages = deserialized.messages;
              if (messages)
                for (var i = 0; i < messages.length; i++)
                  messages[i] = message_1["default"].fromValues(messages[i]);
              var presence = deserialized.presence;
              if (presence)
                for (var i = 0; i < presence.length; i++)
                  presence[i] = presencemessage_1["default"].fromValues(presence[i], true);
              return Object.assign(new ProtocolMessage2(), deserialized);
            };
            ProtocolMessage2.stringify = function(msg) {
              var result = "[ProtocolMessage";
              if (msg.action !== void 0)
                result += "; action=" + ProtocolMessage2.ActionName[msg.action] || false;
              var attribute;
              for (var attribIndex = 0; attribIndex < simpleAttributes.length; attribIndex++) {
                attribute = simpleAttributes[attribIndex];
                if (msg[attribute] !== void 0)
                  result += "; " + attribute + "=" + msg[attribute];
              }
              if (msg.messages)
                result += "; messages=" + toStringArray(message_1["default"].fromValuesArray(msg.messages));
              if (msg.presence)
                result += "; presence=" + toStringArray(presencemessage_1["default"].fromValuesArray(msg.presence));
              if (msg.error)
                result += "; error=" + errorinfo_1["default"].fromValues(msg.error).toString();
              if (msg.auth && msg.auth.accessToken)
                result += "; token=" + msg.auth.accessToken;
              if (msg.flags)
                result += "; flags=" + flagNames.filter(msg.hasFlag).join(",");
              if (msg.params) {
                var stringifiedParams_1 = "";
                Utils.forInOwnNonNullProperties(msg.params, function(prop) {
                  if (stringifiedParams_1.length > 0) {
                    stringifiedParams_1 += "; ";
                  }
                  stringifiedParams_1 += prop + "=" + msg.params[prop];
                });
                if (stringifiedParams_1.length > 0) {
                  result += "; params=[" + stringifiedParams_1 + "]";
                }
              }
              result += "]";
              return result;
            };
            ProtocolMessage2.isDuplicate = function(a, b) {
              if (a && b) {
                if ((a.action === actions.MESSAGE || a.action === actions.PRESENCE) && a.action === b.action && a.channel === b.channel && a.id === b.id) {
                  if (a.action === actions.PRESENCE) {
                    return true;
                  } else if (a.messages.length === b.messages.length) {
                    for (var i = 0; i < a.messages.length; i++) {
                      var aMessage = a.messages[i];
                      var bMessage = b.messages[i];
                      if ((aMessage.extras && aMessage.extras.delta && aMessage.extras.delta.format) !== (bMessage.extras && bMessage.extras.delta && bMessage.extras.delta.format)) {
                        return false;
                      }
                    }
                    return true;
                  }
                }
              }
              return false;
            };
            return ProtocolMessage2;
          }();
          exports2["default"] = ProtocolMessage;
        },
        function(module3, exports2) {
          module3.exports = require("crypto");
        },
        function(module3, exports2, __webpack_require__) {
          ;
          (function(root, factory) {
            if (true) {
              module3.exports = exports2 = factory();
            } else {
            }
          })(this, function() {
            var CryptoJS = CryptoJS || function(Math2, undefined2) {
              var crypto;
              if (typeof window !== "undefined" && window.crypto) {
                crypto = window.crypto;
              }
              if (!crypto && typeof window !== "undefined" && window.msCrypto) {
                crypto = window.msCrypto;
              }
              if (!crypto && typeof global !== "undefined" && global.crypto) {
                crypto = global.crypto;
              }
              if (!crypto && true) {
                try {
                  crypto = __webpack_require__(9);
                } catch (err) {
                }
              }
              var cryptoSecureRandomInt = function() {
                if (crypto) {
                  if (typeof crypto.getRandomValues === "function") {
                    try {
                      return crypto.getRandomValues(new Uint32Array(1))[0];
                    } catch (err) {
                    }
                  }
                  if (typeof crypto.randomBytes === "function") {
                    try {
                      return crypto.randomBytes(4).readInt32LE();
                    } catch (err) {
                    }
                  }
                }
                throw new Error("Native crypto module could not be used to get secure random number.");
              };
              var create = Object.create || function() {
                function F() {
                }
                return function(obj) {
                  var subtype;
                  F.prototype = obj;
                  subtype = new F();
                  F.prototype = null;
                  return subtype;
                };
              }();
              var C = {};
              var C_lib = C.lib = {};
              var Base = C_lib.Base = function() {
                return {
                  extend: function(overrides) {
                    var subtype = create(this);
                    if (overrides) {
                      subtype.mixIn(overrides);
                    }
                    if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                      subtype.init = function() {
                        subtype.$super.init.apply(this, arguments);
                      };
                    }
                    subtype.init.prototype = subtype;
                    subtype.$super = this;
                    return subtype;
                  },
                  create: function() {
                    var instance = this.extend();
                    instance.init.apply(instance, arguments);
                    return instance;
                  },
                  init: function() {
                  },
                  mixIn: function(properties) {
                    for (var propertyName in properties) {
                      if (properties.hasOwnProperty(propertyName)) {
                        this[propertyName] = properties[propertyName];
                      }
                    }
                    if (properties.hasOwnProperty("toString")) {
                      this.toString = properties.toString;
                    }
                  },
                  clone: function() {
                    return this.init.prototype.extend(this);
                  }
                };
              }();
              var WordArray = C_lib.WordArray = Base.extend({
                init: function(words, sigBytes) {
                  words = this.words = words || [];
                  if (sigBytes != undefined2) {
                    this.sigBytes = sigBytes;
                  } else {
                    this.sigBytes = words.length * 4;
                  }
                },
                toString: function(encoder) {
                  return (encoder || Hex).stringify(this);
                },
                concat: function(wordArray) {
                  var thisWords = this.words;
                  var thatWords = wordArray.words;
                  var thisSigBytes = this.sigBytes;
                  var thatSigBytes = wordArray.sigBytes;
                  this.clamp();
                  if (thisSigBytes % 4) {
                    for (var i = 0; i < thatSigBytes; i++) {
                      var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                      thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
                    }
                  } else {
                    for (var i = 0; i < thatSigBytes; i += 4) {
                      thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
                    }
                  }
                  this.sigBytes += thatSigBytes;
                  return this;
                },
                clamp: function() {
                  var words = this.words;
                  var sigBytes = this.sigBytes;
                  words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
                  words.length = Math2.ceil(sigBytes / 4);
                },
                clone: function() {
                  var clone = Base.clone.call(this);
                  clone.words = this.words.slice(0);
                  return clone;
                },
                random: function(nBytes) {
                  var words = [];
                  for (var i = 0; i < nBytes; i += 4) {
                    words.push(cryptoSecureRandomInt());
                  }
                  return new WordArray.init(words, nBytes);
                }
              });
              var C_enc = C.enc = {};
              var Hex = C_enc.Hex = {
                stringify: function(wordArray) {
                  var words = wordArray.words;
                  var sigBytes = wordArray.sigBytes;
                  var hexChars = [];
                  for (var i = 0; i < sigBytes; i++) {
                    var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    hexChars.push((bite >>> 4).toString(16));
                    hexChars.push((bite & 15).toString(16));
                  }
                  return hexChars.join("");
                },
                parse: function(hexStr) {
                  var hexStrLength = hexStr.length;
                  var words = [];
                  for (var i = 0; i < hexStrLength; i += 2) {
                    words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
                  }
                  return new WordArray.init(words, hexStrLength / 2);
                }
              };
              var Latin1 = C_enc.Latin1 = {
                stringify: function(wordArray) {
                  var words = wordArray.words;
                  var sigBytes = wordArray.sigBytes;
                  var latin1Chars = [];
                  for (var i = 0; i < sigBytes; i++) {
                    var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    latin1Chars.push(String.fromCharCode(bite));
                  }
                  return latin1Chars.join("");
                },
                parse: function(latin1Str) {
                  var latin1StrLength = latin1Str.length;
                  var words = [];
                  for (var i = 0; i < latin1StrLength; i++) {
                    words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
                  }
                  return new WordArray.init(words, latin1StrLength);
                }
              };
              var Utf8 = C_enc.Utf8 = {
                stringify: function(wordArray) {
                  try {
                    return decodeURIComponent(escape(Latin1.stringify(wordArray)));
                  } catch (e) {
                    throw new Error("Malformed UTF-8 data");
                  }
                },
                parse: function(utf8Str) {
                  return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
                }
              };
              var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
                reset: function() {
                  this._data = new WordArray.init();
                  this._nDataBytes = 0;
                },
                _append: function(data) {
                  if (typeof data == "string") {
                    data = Utf8.parse(data);
                  }
                  this._data.concat(data);
                  this._nDataBytes += data.sigBytes;
                },
                _process: function(doFlush) {
                  var processedWords;
                  var data = this._data;
                  var dataWords = data.words;
                  var dataSigBytes = data.sigBytes;
                  var blockSize = this.blockSize;
                  var blockSizeBytes = blockSize * 4;
                  var nBlocksReady = dataSigBytes / blockSizeBytes;
                  if (doFlush) {
                    nBlocksReady = Math2.ceil(nBlocksReady);
                  } else {
                    nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
                  }
                  var nWordsReady = nBlocksReady * blockSize;
                  var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
                  if (nWordsReady) {
                    for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                      this._doProcessBlock(dataWords, offset);
                    }
                    processedWords = dataWords.splice(0, nWordsReady);
                    data.sigBytes -= nBytesReady;
                  }
                  return new WordArray.init(processedWords, nBytesReady);
                },
                clone: function() {
                  var clone = Base.clone.call(this);
                  clone._data = this._data.clone();
                  return clone;
                },
                _minBufferSize: 0
              });
              var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
                cfg: Base.extend(),
                init: function(cfg) {
                  this.cfg = this.cfg.extend(cfg);
                  this.reset();
                },
                reset: function() {
                  BufferedBlockAlgorithm.reset.call(this);
                  this._doReset();
                },
                update: function(messageUpdate) {
                  this._append(messageUpdate);
                  this._process();
                  return this;
                },
                finalize: function(messageUpdate) {
                  if (messageUpdate) {
                    this._append(messageUpdate);
                  }
                  var hash = this._doFinalize();
                  return hash;
                },
                blockSize: 512 / 32,
                _createHelper: function(hasher) {
                  return function(message, cfg) {
                    return new hasher.init(cfg).finalize(message);
                  };
                },
                _createHmacHelper: function(hasher) {
                  return function(message, key) {
                    return new C_algo.HMAC.init(hasher, key).finalize(message);
                  };
                }
              });
              var C_algo = C.algo = {};
              return C;
            }(Math);
            return CryptoJS;
          });
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var message_1 = tslib_1.__importDefault(__webpack_require__(7));
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          function toActionValue(actionString) {
            return PresenceMessage.Actions.indexOf(actionString);
          }
          var PresenceMessage = function() {
            function PresenceMessage2() {
            }
            PresenceMessage2.prototype.isSynthesized = function() {
              if (!this.id || !this.connectionId) {
                return true;
              }
              return this.id.substring(this.connectionId.length, 0) !== this.connectionId;
            };
            PresenceMessage2.prototype.parseId = function() {
              if (!this.id)
                throw new Error("parseId(): Presence message does not contain an id");
              var parts = this.id.split(":");
              return {
                connectionId: parts[0],
                msgSerial: parseInt(parts[1], 10),
                index: parseInt(parts[2], 10)
              };
            };
            PresenceMessage2.prototype.toJSON = function() {
              var data = this.data;
              var encoding = this.encoding;
              if (data && platform_1["default"].BufferUtils.isBuffer(data)) {
                if (arguments.length > 0) {
                  encoding = encoding ? encoding + "/base64" : "base64";
                  data = platform_1["default"].BufferUtils.base64Encode(data);
                } else {
                  data = platform_1["default"].BufferUtils.toBuffer(data);
                }
              }
              return {
                clientId: this.clientId,
                action: toActionValue(this.action),
                data,
                encoding
              };
            };
            PresenceMessage2.prototype.toString = function() {
              var result = "[PresenceMessage";
              result += "; action=" + this.action;
              if (this.id)
                result += "; id=" + this.id;
              if (this.timestamp)
                result += "; timestamp=" + this.timestamp;
              if (this.clientId)
                result += "; clientId=" + this.clientId;
              if (this.connectionId)
                result += "; connectionId=" + this.connectionId;
              if (this.encoding)
                result += "; encoding=" + this.encoding;
              if (this.data) {
                if (typeof this.data == "string")
                  result += "; data=" + this.data;
                else if (platform_1["default"].BufferUtils.isBuffer(this.data))
                  result += "; data (buffer)=" + platform_1["default"].BufferUtils.base64Encode(this.data);
                else
                  result += "; data (json)=" + JSON.stringify(this.data);
              }
              result += "]";
              return result;
            };
            PresenceMessage2.fromResponseBody = function(body, options, format) {
              var messages = [];
              if (format) {
                body = Utils.decodeBody(body, format);
              }
              for (var i = 0; i < body.length; i++) {
                var msg = messages[i] = PresenceMessage2.fromValues(body[i], true);
                try {
                  PresenceMessage2.decode(msg, options);
                } catch (e) {
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "PresenceMessage.fromResponseBody()", e.toString());
                }
              }
              return messages;
            };
            PresenceMessage2.fromValues = function(values, stringifyAction) {
              if (stringifyAction) {
                values.action = PresenceMessage2.Actions[values.action];
              }
              return Object.assign(new PresenceMessage2(), values);
            };
            PresenceMessage2.fromValuesArray = function(values) {
              var count = values.length, result = new Array(count);
              for (var i = 0; i < count; i++)
                result[i] = PresenceMessage2.fromValues(values[i]);
              return result;
            };
            PresenceMessage2.fromEncoded = function(encoded, options) {
              var msg = PresenceMessage2.fromValues(encoded, true);
              try {
                PresenceMessage2.decode(msg, options);
              } catch (e) {
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "PresenceMessage.fromEncoded()", e.toString());
              }
              return msg;
            };
            PresenceMessage2.fromEncodedArray = function(encodedArray, options) {
              return encodedArray.map(function(encoded) {
                return PresenceMessage2.fromEncoded(encoded, options);
              });
            };
            PresenceMessage2.Actions = ["absent", "present", "enter", "leave", "update"];
            PresenceMessage2.encode = message_1["default"].encode;
            PresenceMessage2.decode = message_1["default"].decode;
            PresenceMessage2.getMessagesSize = message_1["default"].getMessagesSize;
            return PresenceMessage2;
          }();
          exports2["default"] = PresenceMessage;
        },
        function(module3, exports2) {
          module3.exports = require("buffer");
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var multicaster_1 = tslib_1.__importDefault(__webpack_require__(21));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var hmac_sha256_1 = tslib_1.__importDefault(__webpack_require__(37));
          var enc_base64_1 = __webpack_require__(40);
          var enc_utf8_1 = __webpack_require__(41);
          var HttpMethods_1 = tslib_1.__importDefault(__webpack_require__(14));
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var MAX_TOKEN_LENGTH = Math.pow(2, 17);
          function noop() {
          }
          function random() {
            return ("000000" + Math.floor(Math.random() * 1e16)).slice(-16);
          }
          function isRealtime(client) {
            return !!client.connection;
          }
          function normaliseAuthcallbackError(err) {
            if (!Utils.isErrorInfo(err)) {
              return new errorinfo_1["default"](Utils.inspectError(err), err.code || 40170, err.statusCode || 401);
            }
            if (!err.code) {
              if (err.statusCode === 403) {
                err.code = 40300;
              } else {
                err.code = 40170;
                err.statusCode = 401;
              }
            }
            return err;
          }
          var toBase64 = function(str) {
            if (platform_1["default"].Config.createHmac) {
              return Buffer.from(str, "ascii").toString("base64");
            }
            return enc_base64_1.stringify(enc_utf8_1.parse(str));
          };
          var hmac = function(text, key) {
            if (platform_1["default"].Config.createHmac) {
              var inst = platform_1["default"].Config.createHmac("SHA256", key);
              inst.update(text);
              return inst.digest("base64");
            }
            return enc_base64_1.stringify(hmac_sha256_1["default"](text, key));
          };
          function c14n(capability) {
            if (!capability)
              return "";
            if (typeof capability == "string")
              capability = JSON.parse(capability);
            var c14nCapability = {};
            var keys = Utils.keysArray(capability, true);
            if (!keys)
              return "";
            keys.sort();
            for (var i = 0; i < keys.length; i++) {
              c14nCapability[keys[i]] = capability[keys[i]].sort();
            }
            return JSON.stringify(c14nCapability);
          }
          function logAndValidateTokenAuthMethod(authOptions) {
            if (authOptions.authCallback) {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Auth()", "using token auth with authCallback");
            } else if (authOptions.authUrl) {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Auth()", "using token auth with authUrl");
            } else if (authOptions.key) {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Auth()", "using token auth with client-side signing");
            } else if (authOptions.tokenDetails) {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Auth()", "using token auth with supplied token only");
            } else {
              var msg = "authOptions must include valid authentication parameters";
              logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Auth()", msg);
              throw new Error(msg);
            }
          }
          function basicAuthForced(options) {
            return "useTokenAuth" in options && !options.useTokenAuth;
          }
          function useTokenAuth(options) {
            return options.useTokenAuth || !basicAuthForced(options) && (options.authCallback || options.authUrl || options.token || options.tokenDetails);
          }
          function noWayToRenew(options) {
            return !options.key && !options.authCallback && !options.authUrl;
          }
          var trId = 0;
          function getTokenRequestId() {
            return trId++;
          }
          var Auth = function() {
            function Auth2(client, options) {
              this.authOptions = {};
              this.client = client;
              this.tokenParams = options.defaultTokenParams || {};
              this.currentTokenRequestId = null;
              this.waitingForTokenRequest = null;
              if (useTokenAuth(options)) {
                if (options.key && !hmac) {
                  var msg = "client-side token request signing not supported";
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Auth()", msg);
                  throw new Error(msg);
                }
                if (noWayToRenew(options)) {
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Auth()", "Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help");
                }
                this._saveTokenOptions(options.defaultTokenParams, options);
                logAndValidateTokenAuthMethod(this.authOptions);
              } else {
                if (!options.key) {
                  var msg = "No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)";
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Auth()", msg);
                  throw new errorinfo_1["default"](msg, 40160, 401);
                }
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Auth()", "anonymous, using basic auth");
                this._saveBasicOptions(options);
              }
            }
            Auth2.prototype.authorize = function(tokenParams, authOptions, callback) {
              var _this = this;
              var _authOptions;
              if (typeof tokenParams == "function" && !callback) {
                callback = tokenParams;
                _authOptions = tokenParams = null;
              } else if (typeof authOptions == "function" && !callback) {
                callback = authOptions;
                _authOptions = null;
              } else {
                _authOptions = authOptions;
              }
              if (!callback) {
                if (this.client.options.promises) {
                  return Utils.promisify(this, "authorize", arguments);
                }
              }
              if (_authOptions && _authOptions.key && this.authOptions.key !== _authOptions.key) {
                throw new errorinfo_1["default"]("Unable to update auth options with incompatible key", 40102, 401);
              }
              if (_authOptions && "force" in _authOptions) {
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Auth.authorize", "Deprecation warning: specifying {force: true} in authOptions is no longer necessary, authorize() now always gets a new token. Please remove this, as in version 1.0 and later, having a non-null authOptions will overwrite stored library authOptions, which may not be what you want");
                if (Utils.isOnlyPropIn(_authOptions, "force")) {
                  _authOptions = null;
                }
              }
              this._forceNewToken(tokenParams, _authOptions, function(err, tokenDetails) {
                if (err) {
                  if (_this.client.connection) {
                    _this.client.connection.connectionManager.actOnErrorFromAuthorize(err);
                  }
                  callback === null || callback === void 0 ? void 0 : callback(err);
                  return;
                }
                if (isRealtime(_this.client)) {
                  _this.client.connection.connectionManager.onAuthUpdated(tokenDetails, callback || noop);
                } else {
                  callback === null || callback === void 0 ? void 0 : callback(null, tokenDetails);
                }
              });
            };
            Auth2.prototype.authorise = function(tokenParams, authOptions, callback) {
              logger_1["default"].deprecated("Auth.authorise", "Auth.authorize");
              this.authorize(tokenParams, authOptions, callback);
            };
            Auth2.prototype._forceNewToken = function(tokenParams, authOptions, callback) {
              var _this = this;
              this.tokenDetails = null;
              this._saveTokenOptions(tokenParams, authOptions);
              logAndValidateTokenAuthMethod(this.authOptions);
              this._ensureValidAuthCredentials(true, function(err, tokenDetails) {
                delete _this.tokenParams.timestamp;
                delete _this.authOptions.queryTime;
                callback(err, tokenDetails);
              });
            };
            Auth2.prototype.requestToken = function(tokenParams, authOptions, callback) {
              var _this = this;
              if (typeof tokenParams == "function" && !callback) {
                callback = tokenParams;
                authOptions = tokenParams = null;
              } else if (typeof authOptions == "function" && !callback) {
                callback = authOptions;
                authOptions = null;
              }
              if (!callback && this.client.options.promises) {
                return Utils.promisify(this, "requestToken", arguments);
              }
              authOptions = authOptions || this.authOptions;
              tokenParams = tokenParams || Utils.copy(this.tokenParams);
              var _callback = callback || noop;
              var tokenRequestCallback, client = this.client;
              if (authOptions.authCallback) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Auth.requestToken()", "using token auth with authCallback");
                tokenRequestCallback = authOptions.authCallback;
              } else if (authOptions.authUrl) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Auth.requestToken()", "using token auth with authUrl");
                tokenRequestCallback = function(params, cb) {
                  var authHeaders = Utils.mixin({ accept: "application/json, text/plain" }, authOptions.authHeaders);
                  var usePost = authOptions.authMethod && authOptions.authMethod.toLowerCase() === "post";
                  var providedQsParams;
                  var queryIdx = authOptions.authUrl.indexOf("?");
                  if (queryIdx > -1) {
                    providedQsParams = Utils.parseQueryString(authOptions.authUrl.slice(queryIdx));
                    authOptions.authUrl = authOptions.authUrl.slice(0, queryIdx);
                    if (!usePost) {
                      authOptions.authParams = Utils.mixin(providedQsParams, authOptions.authParams);
                    }
                  }
                  var authParams = Utils.mixin({}, authOptions.authParams || {}, params);
                  var authUrlRequestCallback = function(err, body2, headers2, unpacked) {
                    var contentType;
                    if (err) {
                      logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received Error: " + Utils.inspectError(err));
                    } else {
                      contentType = headers2["content-type"];
                      logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received; content-type: " + contentType + "; body: " + Utils.inspectBody(body2));
                    }
                    if (err || unpacked)
                      return cb(err, body2);
                    if (platform_1["default"].BufferUtils.isBuffer(body2))
                      body2 = body2.toString();
                    if (!contentType) {
                      cb(new errorinfo_1["default"]("authUrl response is missing a content-type header", 40170, 401));
                      return;
                    }
                    var json = contentType.indexOf("application/json") > -1, text = contentType.indexOf("text/plain") > -1 || contentType.indexOf("application/jwt") > -1;
                    if (!json && !text) {
                      cb(new errorinfo_1["default"]("authUrl responded with unacceptable content-type " + contentType + ", should be either text/plain, application/jwt or application/json", 40170, 401));
                      return;
                    }
                    if (json) {
                      if (body2.length > MAX_TOKEN_LENGTH) {
                        cb(new errorinfo_1["default"]("authUrl response exceeded max permitted length", 40170, 401));
                        return;
                      }
                      try {
                        body2 = JSON.parse(body2);
                      } catch (e) {
                        cb(new errorinfo_1["default"]("Unexpected error processing authURL response; err = " + e.message, 40170, 401));
                        return;
                      }
                    }
                    cb(null, body2, contentType);
                  };
                  logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Requesting token from " + authOptions.authUrl + "; Params: " + JSON.stringify(authParams) + "; method: " + (usePost ? "POST" : "GET"));
                  if (usePost) {
                    var headers = authHeaders || {};
                    headers["content-type"] = "application/x-www-form-urlencoded";
                    var body = Utils.toQueryString(authParams).slice(1);
                    _this.client.http.doUri(HttpMethods_1["default"].Post, client, authOptions.authUrl, headers, body, providedQsParams, authUrlRequestCallback);
                  } else {
                    _this.client.http.doUri(HttpMethods_1["default"].Get, client, authOptions.authUrl, authHeaders || {}, null, authParams, authUrlRequestCallback);
                  }
                };
              } else if (authOptions.key) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Auth.requestToken()", "using token auth with client-side signing");
                tokenRequestCallback = function(params, cb) {
                  _this.createTokenRequest(params, authOptions, cb);
                };
              } else {
                var msg = "Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)";
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Auth()", "library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help");
                _callback(new errorinfo_1["default"](msg, 40171, 403));
                return;
              }
              if ("capability" in tokenParams)
                tokenParams.capability = c14n(tokenParams.capability);
              var tokenRequest = function(signedTokenParams, tokenCb) {
                var keyName = signedTokenParams.keyName, path = "/keys/" + keyName + "/requestToken", tokenUri = function(host) {
                  return client.baseUri(host) + path;
                };
                var requestHeaders = Utils.defaultPostHeaders();
                if (authOptions.requestHeaders)
                  Utils.mixin(requestHeaders, authOptions.requestHeaders);
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Auth.requestToken().requestToken", "Sending POST to " + path + "; Token params: " + JSON.stringify(signedTokenParams));
                _this.client.http["do"](HttpMethods_1["default"].Post, client, tokenUri, requestHeaders, JSON.stringify(signedTokenParams), null, tokenCb);
              };
              var tokenRequestCallbackTimeoutExpired = false, timeoutLength = this.client.options.timeouts.realtimeRequestTimeout, tokenRequestCallbackTimeout = setTimeout(function() {
                tokenRequestCallbackTimeoutExpired = true;
                var msg2 = "Token request callback timed out after " + timeoutLength / 1e3 + " seconds";
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Auth.requestToken()", msg2);
                _callback(new errorinfo_1["default"](msg2, 40170, 401));
              }, timeoutLength);
              tokenRequestCallback(tokenParams, function(err, tokenRequestOrDetails, contentType) {
                if (tokenRequestCallbackTimeoutExpired)
                  return;
                clearTimeout(tokenRequestCallbackTimeout);
                if (err) {
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Auth.requestToken()", "token request signing call returned error; err = " + Utils.inspectError(err));
                  _callback(normaliseAuthcallbackError(err));
                  return;
                }
                if (typeof tokenRequestOrDetails === "string") {
                  if (tokenRequestOrDetails.length === 0) {
                    _callback(new errorinfo_1["default"]("Token string is empty", 40170, 401));
                  } else if (tokenRequestOrDetails.length > MAX_TOKEN_LENGTH) {
                    _callback(new errorinfo_1["default"]("Token string exceeded max permitted length (was " + tokenRequestOrDetails.length + " bytes)", 40170, 401));
                  } else if (tokenRequestOrDetails === "undefined" || tokenRequestOrDetails === "null") {
                    _callback(new errorinfo_1["default"]("Token string was literal null/undefined", 40170, 401));
                  } else if (tokenRequestOrDetails[0] === "{" && !(contentType && contentType.indexOf("application/jwt") > -1)) {
                    _callback(new errorinfo_1["default"]("Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details", 40170, 401));
                  } else {
                    _callback(null, { token: tokenRequestOrDetails });
                  }
                  return;
                }
                if (typeof tokenRequestOrDetails !== "object") {
                  var msg2 = "Expected token request callback to call back with a token string or token request/details object, but got a " + typeof tokenRequestOrDetails;
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Auth.requestToken()", msg2);
                  _callback(new errorinfo_1["default"](msg2, 40170, 401));
                  return;
                }
                var objectSize = JSON.stringify(tokenRequestOrDetails).length;
                if (objectSize > MAX_TOKEN_LENGTH && !authOptions.suppressMaxLengthCheck) {
                  _callback(new errorinfo_1["default"]("Token request/details object exceeded max permitted stringified size (was " + objectSize + " bytes)", 40170, 401));
                  return;
                }
                if ("issued" in tokenRequestOrDetails) {
                  _callback(null, tokenRequestOrDetails);
                  return;
                }
                if (!("keyName" in tokenRequestOrDetails)) {
                  var msg2 = "Expected token request callback to call back with a token string, token request object, or token details object";
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Auth.requestToken()", msg2);
                  _callback(new errorinfo_1["default"](msg2, 40170, 401));
                  return;
                }
                tokenRequest(tokenRequestOrDetails, function(err2, tokenResponse, headers, unpacked) {
                  if (err2) {
                    logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Auth.requestToken()", "token request API call returned error; err = " + Utils.inspectError(err2));
                    _callback(normaliseAuthcallbackError(err2));
                    return;
                  }
                  if (!unpacked)
                    tokenResponse = JSON.parse(tokenResponse);
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Auth.getToken()", "token received");
                  _callback(null, tokenResponse);
                });
              });
            };
            Auth2.prototype.createTokenRequest = function(tokenParams, authOptions, callback) {
              var _this = this;
              if (typeof tokenParams == "function" && !callback) {
                callback = tokenParams;
                authOptions = tokenParams = null;
              } else if (typeof authOptions == "function" && !callback) {
                callback = authOptions;
                authOptions = null;
              }
              if (!callback && this.client.options.promises) {
                return Utils.promisify(this, "createTokenRequest", arguments);
              }
              authOptions = authOptions || this.authOptions;
              tokenParams = tokenParams || Utils.copy(this.tokenParams);
              var key = authOptions.key;
              if (!key) {
                callback(new errorinfo_1["default"]("No key specified", 40101, 403));
                return;
              }
              var keyParts = key.split(":"), keyName = keyParts[0], keySecret = keyParts[1];
              if (!keySecret) {
                callback(new errorinfo_1["default"]("Invalid key specified", 40101, 403));
                return;
              }
              if (tokenParams.clientId === "") {
                callback(new errorinfo_1["default"]("clientId can\u2019t be an empty string", 40012, 400));
                return;
              }
              if ("capability" in tokenParams) {
                tokenParams.capability = c14n(tokenParams.capability);
              }
              var request = Utils.mixin({ keyName }, tokenParams), clientId = tokenParams.clientId || "", ttl = tokenParams.ttl || "", capability = tokenParams.capability || "";
              (function(authoriseCb) {
                if (request.timestamp) {
                  authoriseCb();
                  return;
                }
                _this.getTimestamp(authOptions && authOptions.queryTime, function(err, time) {
                  if (err) {
                    callback(err);
                    return;
                  }
                  request.timestamp = time;
                  authoriseCb();
                });
              })(function() {
                var nonce = request.nonce || (request.nonce = random()), timestamp = request.timestamp;
                var signText = request.keyName + "\n" + ttl + "\n" + capability + "\n" + clientId + "\n" + timestamp + "\n" + nonce + "\n";
                request.mac = request.mac || hmac(signText, keySecret);
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Auth.getTokenRequest()", "generated signed request");
                callback(null, request);
              });
            };
            Auth2.prototype.getAuthParams = function(callback) {
              if (this.method == "basic")
                callback(null, { key: this.key });
              else
                this._ensureValidAuthCredentials(false, function(err, tokenDetails) {
                  if (err) {
                    callback(err);
                    return;
                  }
                  if (!tokenDetails) {
                    throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
                  }
                  callback(null, { access_token: tokenDetails.token });
                });
            };
            Auth2.prototype.getAuthHeaders = function(callback) {
              if (this.method == "basic") {
                callback(null, { authorization: "Basic " + this.basicKey });
              } else {
                this._ensureValidAuthCredentials(false, function(err, tokenDetails) {
                  if (err) {
                    callback(err);
                    return;
                  }
                  if (!tokenDetails) {
                    throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
                  }
                  callback(null, { authorization: "Bearer " + toBase64(tokenDetails.token) });
                });
              }
            };
            Auth2.prototype.getTimestamp = function(queryTime, callback) {
              if (!this.isTimeOffsetSet() && (queryTime || this.authOptions.queryTime)) {
                this.client.time(callback);
              } else {
                callback(null, this.getTimestampUsingOffset());
              }
            };
            Auth2.prototype.getTimestampUsingOffset = function() {
              return Utils.now() + (this.client.serverTimeOffset || 0);
            };
            Auth2.prototype.isTimeOffsetSet = function() {
              return this.client.serverTimeOffset !== null;
            };
            Auth2.prototype._saveBasicOptions = function(authOptions) {
              this.method = "basic";
              this.key = authOptions.key;
              this.basicKey = toBase64(authOptions.key);
              this.authOptions = authOptions || {};
              if ("clientId" in authOptions) {
                this._userSetClientId(authOptions.clientId);
              }
            };
            Auth2.prototype._saveTokenOptions = function(tokenParams, authOptions) {
              this.method = "token";
              if (tokenParams) {
                this.tokenParams = tokenParams;
              }
              if (authOptions) {
                if (authOptions.token) {
                  authOptions.tokenDetails = typeof authOptions.token === "string" ? { token: authOptions.token } : authOptions.token;
                }
                if (authOptions.tokenDetails) {
                  this.tokenDetails = authOptions.tokenDetails;
                }
                if ("clientId" in authOptions) {
                  this._userSetClientId(authOptions.clientId);
                }
                this.authOptions = authOptions;
              }
            };
            Auth2.prototype._ensureValidAuthCredentials = function(forceSupersede, callback) {
              var _this = this;
              var token = this.tokenDetails;
              if (token) {
                if (this._tokenClientIdMismatch(token.clientId)) {
                  callback(new errorinfo_1["default"]("Mismatch between clientId in token (" + token.clientId + ") and current clientId (" + this.clientId + ")", 40102, 403));
                  return;
                }
                if (!this.isTimeOffsetSet() || !token.expires || token.expires >= this.getTimestampUsingOffset()) {
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Auth.getToken()", "using cached token; expires = " + token.expires);
                  callback(null, token);
                  return;
                }
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Auth.getToken()", "deleting expired token");
                this.tokenDetails = null;
              }
              (this.waitingForTokenRequest || (this.waitingForTokenRequest = multicaster_1["default"].create())).push(callback);
              if (this.currentTokenRequestId !== null && !forceSupersede) {
                return;
              }
              var tokenRequestId = this.currentTokenRequestId = getTokenRequestId();
              this.requestToken(this.tokenParams, this.authOptions, function(err, tokenResponse) {
                if (_this.currentTokenRequestId > tokenRequestId) {
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Auth._ensureValidAuthCredentials()", "Discarding token request response; overtaken by newer one");
                  return;
                }
                _this.currentTokenRequestId = null;
                var callbacks = _this.waitingForTokenRequest || noop;
                _this.waitingForTokenRequest = null;
                if (err) {
                  callbacks(err);
                  return;
                }
                callbacks(null, _this.tokenDetails = tokenResponse);
              });
            };
            Auth2.prototype._userSetClientId = function(clientId) {
              if (!(typeof clientId === "string" || clientId === null)) {
                throw new errorinfo_1["default"]("clientId must be either a string or null", 40012, 400);
              } else if (clientId === "*") {
                throw new errorinfo_1["default"]('Can\u2019t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)', 40012, 400);
              } else {
                var err = this._uncheckedSetClientId(clientId);
                if (err)
                  throw err;
              }
            };
            Auth2.prototype._uncheckedSetClientId = function(clientId) {
              if (this._tokenClientIdMismatch(clientId)) {
                var msg = "Unexpected clientId mismatch: client has " + this.clientId + ", requested " + clientId;
                var err = new errorinfo_1["default"](msg, 40102, 401);
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Auth._uncheckedSetClientId()", msg);
                return err;
              } else {
                this.clientId = this.tokenParams.clientId = clientId;
                return null;
              }
            };
            Auth2.prototype._tokenClientIdMismatch = function(tokenClientId) {
              return !!(this.clientId && this.clientId !== "*" && tokenClientId && tokenClientId !== "*" && this.clientId !== tokenClientId);
            };
            Auth2.isTokenErr = function(error) {
              return error.code && error.code >= 40140 && error.code < 40150;
            };
            return Auth2;
          }();
          exports2["default"] = Auth;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var HttpMethods;
          (function(HttpMethods2) {
            HttpMethods2["Get"] = "get";
            HttpMethods2["Delete"] = "delete";
            HttpMethods2["Post"] = "post";
            HttpMethods2["Put"] = "put";
            HttpMethods2["Patch"] = "patch";
          })(HttpMethods || (HttpMethods = {}));
          exports2["default"] = HttpMethods;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          exports2.HttpPaginatedResponse = exports2.PaginatedResult = void 0;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var resource_1 = tslib_1.__importDefault(__webpack_require__(22));
          function getRelParams(linkUrl) {
            var urlMatch = linkUrl.match(/^\.\/(\w+)\?(.*)$/);
            return urlMatch && urlMatch[2] && Utils.parseQueryString(urlMatch[2]);
          }
          function parseRelLinks(linkHeader) {
            if (typeof linkHeader == "string")
              linkHeader = linkHeader.split(",");
            var relParams = {};
            for (var i = 0; i < linkHeader.length; i++) {
              var linkMatch = linkHeader[i].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);
              if (linkMatch) {
                var params = getRelParams(linkMatch[1]);
                if (params)
                  relParams[linkMatch[2]] = params;
              }
            }
            return relParams;
          }
          function returnErrOnly(err, body, useHPR) {
            return !(useHPR && (body || typeof err.code === "number"));
          }
          var PaginatedResource = function() {
            function PaginatedResource2(rest, path, headers, envelope, bodyHandler, useHttpPaginatedResponse) {
              this.rest = rest;
              this.path = path;
              this.headers = headers;
              this.envelope = envelope !== null && envelope !== void 0 ? envelope : null;
              this.bodyHandler = bodyHandler;
              this.useHttpPaginatedResponse = useHttpPaginatedResponse || false;
            }
            PaginatedResource2.prototype.get = function(params, callback) {
              var _this = this;
              resource_1["default"].get(this.rest, this.path, this.headers, params, this.envelope, function(err, body, headers, unpacked, statusCode) {
                _this.handlePage(err, body, headers, unpacked, statusCode, callback);
              });
            };
            PaginatedResource2.prototype["delete"] = function(params, callback) {
              var _this = this;
              resource_1["default"]["delete"](this.rest, this.path, this.headers, params, this.envelope, function(err, body, headers, unpacked, statusCode) {
                _this.handlePage(err, body, headers, unpacked, statusCode, callback);
              });
            };
            PaginatedResource2.prototype.post = function(params, body, callback) {
              var _this = this;
              resource_1["default"].post(this.rest, this.path, body, this.headers, params, this.envelope, function(err, responseBody, headers, unpacked, statusCode) {
                if (callback) {
                  _this.handlePage(err, responseBody, headers, unpacked, statusCode, callback);
                }
              });
            };
            PaginatedResource2.prototype.put = function(params, body, callback) {
              var _this = this;
              resource_1["default"].put(this.rest, this.path, body, this.headers, params, this.envelope, function(err, responseBody, headers, unpacked, statusCode) {
                if (callback) {
                  _this.handlePage(err, responseBody, headers, unpacked, statusCode, callback);
                }
              });
            };
            PaginatedResource2.prototype.patch = function(params, body, callback) {
              var _this = this;
              resource_1["default"].patch(this.rest, this.path, body, this.headers, params, this.envelope, function(err, responseBody, headers, unpacked, statusCode) {
                if (callback) {
                  _this.handlePage(err, responseBody, headers, unpacked, statusCode, callback);
                }
              });
            };
            PaginatedResource2.prototype.handlePage = function(err, body, headers, unpacked, statusCode, callback) {
              if (err && returnErrOnly(err, body, this.useHttpPaginatedResponse)) {
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "PaginatedResource.handlePage()", "Unexpected error getting resource: err = " + Utils.inspectError(err));
                callback === null || callback === void 0 ? void 0 : callback(err);
                return;
              }
              var items, linkHeader, relParams;
              try {
                items = this.bodyHandler(body, headers || {}, unpacked);
              } catch (e) {
                callback === null || callback === void 0 ? void 0 : callback(err || e);
                return;
              }
              if (headers && (linkHeader = headers["Link"] || headers["link"])) {
                relParams = parseRelLinks(linkHeader);
              }
              if (this.useHttpPaginatedResponse) {
                callback(null, new HttpPaginatedResponse(this, items, headers || {}, statusCode, relParams, err));
              } else {
                callback(null, new PaginatedResult(this, items, relParams));
              }
            };
            return PaginatedResource2;
          }();
          var PaginatedResult = function() {
            function PaginatedResult2(resource, items, relParams) {
              var _this = this;
              this.resource = resource;
              this.items = items;
              var self2 = this;
              if (relParams) {
                if ("first" in relParams) {
                  this.first = function(callback) {
                    if (!callback && self2.resource.rest.options.promises) {
                      return Utils.promisify(self2, "first", []);
                    }
                    self2.get(relParams.first, callback);
                  };
                }
                if ("current" in relParams) {
                  this.current = function(callback) {
                    if (!callback && self2.resource.rest.options.promises) {
                      return Utils.promisify(self2, "current", []);
                    }
                    self2.get(relParams.current, callback);
                  };
                }
                this.next = function(callback) {
                  if (!callback && self2.resource.rest.options.promises) {
                    return Utils.promisify(self2, "next", []);
                  }
                  if ("next" in relParams) {
                    self2.get(relParams.next, callback);
                  } else {
                    callback(null);
                  }
                };
                this.hasNext = function() {
                  return "next" in relParams;
                };
                this.isLast = function() {
                  var _a;
                  return !((_a = _this.hasNext) === null || _a === void 0 ? void 0 : _a.call(_this));
                };
              }
            }
            PaginatedResult2.prototype.get = function(params, callback) {
              var res = this.resource;
              resource_1["default"].get(res.rest, res.path, res.headers, params, res.envelope, function(err, body, headers, unpacked, statusCode) {
                res.handlePage(err, body, headers, unpacked, statusCode, callback);
              });
            };
            return PaginatedResult2;
          }();
          exports2.PaginatedResult = PaginatedResult;
          var HttpPaginatedResponse = function(_super) {
            tslib_1.__extends(HttpPaginatedResponse2, _super);
            function HttpPaginatedResponse2(resource, items, headers, statusCode, relParams, err) {
              var _this = _super.call(this, resource, items, relParams) || this;
              _this.statusCode = statusCode;
              _this.success = statusCode < 300 && statusCode >= 200;
              _this.headers = headers;
              _this.errorCode = err && err.code;
              _this.errorMessage = err && err.message;
              return _this;
            }
            HttpPaginatedResponse2.prototype.toJSON = function() {
              return {
                items: this.items,
                statusCode: this.statusCode,
                success: this.success,
                headers: this.headers,
                errorCode: this.errorCode,
                errorMessage: this.errorMessage
              };
            };
            return HttpPaginatedResponse2;
          }(PaginatedResult);
          exports2.HttpPaginatedResponse = HttpPaginatedResponse;
          exports2["default"] = PaginatedResource;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          exports2.isRetriable = void 0;
          var tslib_1 = __webpack_require__(1);
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var ConnectionErrors = {
            disconnected: errorinfo_1["default"].fromValues({
              statusCode: 400,
              code: 80003,
              message: "Connection to server temporarily unavailable"
            }),
            suspended: errorinfo_1["default"].fromValues({
              statusCode: 400,
              code: 80002,
              message: "Connection to server unavailable"
            }),
            failed: errorinfo_1["default"].fromValues({
              statusCode: 400,
              code: 8e4,
              message: "Connection failed or disconnected by server"
            }),
            closing: errorinfo_1["default"].fromValues({
              statusCode: 400,
              code: 80017,
              message: "Connection closing"
            }),
            closed: errorinfo_1["default"].fromValues({
              statusCode: 400,
              code: 80017,
              message: "Connection closed"
            }),
            unknownConnectionErr: errorinfo_1["default"].fromValues({
              statusCode: 500,
              code: 50002,
              message: "Internal connection error"
            }),
            unknownChannelErr: errorinfo_1["default"].fromValues({
              statusCode: 500,
              code: 50001,
              message: "Internal channel error"
            })
          };
          function isRetriable(err) {
            if (!err.statusCode || !err.code || err.statusCode >= 500) {
              return true;
            }
            var retriable = false;
            Object.values(ConnectionErrors).forEach(function(connErr) {
              if (connErr.code && connErr.code == err.code) {
                retriable = true;
              }
            });
            return retriable;
          }
          exports2.isRetriable = isRetriable;
          exports2["default"] = ConnectionErrors;
        },
        function(module3, exports2) {
          module3.exports = require("http");
        },
        function(module3, exports2) {
          module3.exports = require("https");
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var XHRStates;
          (function(XHRStates2) {
            XHRStates2[XHRStates2["REQ_SEND"] = 0] = "REQ_SEND";
            XHRStates2[XHRStates2["REQ_RECV"] = 1] = "REQ_RECV";
            XHRStates2[XHRStates2["REQ_RECV_POLL"] = 2] = "REQ_RECV_POLL";
            XHRStates2[XHRStates2["REQ_RECV_STREAM"] = 3] = "REQ_RECV_STREAM";
          })(XHRStates || (XHRStates = {}));
          exports2["default"] = XHRStates;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(8));
          var transport_1 = tslib_1.__importDefault(__webpack_require__(24));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var defaults_1 = tslib_1.__importDefault(__webpack_require__(6));
          var connectionerrors_1 = tslib_1.__importDefault(__webpack_require__(16));
          var auth_1 = tslib_1.__importDefault(__webpack_require__(13));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var XHRStates_1 = tslib_1.__importDefault(__webpack_require__(19));
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          function shouldBeErrorAction(err) {
            var UNRESOLVABLE_ERROR_CODES = [80015, 80017, 80030];
            if (err.code) {
              if (auth_1["default"].isTokenErr(err))
                return false;
              if (Utils.arrIn(UNRESOLVABLE_ERROR_CODES, err.code))
                return true;
              return err.code >= 4e4 && err.code < 5e4;
            } else {
              return false;
            }
          }
          function protocolMessageFromRawError(err) {
            if (shouldBeErrorAction(err)) {
              return [protocolmessage_1["default"].fromValues({ action: protocolmessage_1["default"].Action.ERROR, error: err })];
            } else {
              return [protocolmessage_1["default"].fromValues({ action: protocolmessage_1["default"].Action.DISCONNECTED, error: err })];
            }
          }
          var CometTransport = function(_super) {
            tslib_1.__extends(CometTransport2, _super);
            function CometTransport2(connectionManager, auth, params) {
              var _this = _super.call(this, connectionManager, auth, params, true) || this;
              _this.onAuthUpdated = function(tokenDetails) {
                _this.authParams = { access_token: tokenDetails.token };
              };
              _this.stream = "stream" in params ? params.stream : true;
              _this.sendRequest = null;
              _this.recvRequest = null;
              _this.pendingCallback = null;
              _this.pendingItems = null;
              return _this;
            }
            CometTransport2.prototype.connect = function() {
              var _this = this;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "CometTransport.connect()", "starting");
              transport_1["default"].prototype.connect.call(this);
              var params = this.params;
              var options = params.options;
              var host = defaults_1["default"].getHost(options, params.host);
              var port = defaults_1["default"].getPort(options);
              var cometScheme = options.tls ? "https://" : "http://";
              this.baseUri = cometScheme + host + ":" + port + "/comet/";
              var connectUri = this.baseUri + "connect";
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "CometTransport.connect()", "uri: " + connectUri);
              this.auth.getAuthParams(function(err, authParams) {
                if (err) {
                  _this.disconnect(err);
                  return;
                }
                if (_this.isDisposed) {
                  return;
                }
                _this.authParams = authParams;
                var connectParams = _this.params.getConnectParams(authParams);
                if ("stream" in connectParams)
                  _this.stream = connectParams.stream;
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "CometTransport.connect()", "connectParams:" + Utils.toQueryString(connectParams));
                var preconnected = false;
                var connectRequest = _this.recvRequest = _this.createRequest(connectUri, null, connectParams, null, _this.stream ? XHRStates_1["default"].REQ_RECV_STREAM : XHRStates_1["default"].REQ_RECV);
                connectRequest.on("data", function(data) {
                  if (!_this.recvRequest) {
                    return;
                  }
                  if (!preconnected) {
                    preconnected = true;
                    _this.emit("preconnect");
                  }
                  _this.onData(data);
                });
                connectRequest.on("complete", function(err2) {
                  if (!_this.recvRequest) {
                    err2 = err2 || new errorinfo_1["default"]("Request cancelled", 80003, 400);
                  }
                  _this.recvRequest = null;
                  if (!preconnected && !err2) {
                    preconnected = true;
                    _this.emit("preconnect");
                  }
                  _this.onActivity();
                  if (err2) {
                    if (err2.code) {
                      _this.onData(protocolMessageFromRawError(err2));
                    } else {
                      _this.disconnect(err2);
                    }
                    return;
                  }
                  platform_1["default"].Config.nextTick(function() {
                    _this.recv();
                  });
                });
                connectRequest.exec();
              });
            };
            CometTransport2.prototype.requestClose = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "CometTransport.requestClose()");
              this._requestCloseOrDisconnect(true);
            };
            CometTransport2.prototype.requestDisconnect = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "CometTransport.requestDisconnect()");
              this._requestCloseOrDisconnect(false);
            };
            CometTransport2.prototype._requestCloseOrDisconnect = function(closing) {
              var _this = this;
              var closeOrDisconnectUri = closing ? this.closeUri : this.disconnectUri;
              if (closeOrDisconnectUri) {
                var request = this.createRequest(closeOrDisconnectUri, null, this.authParams, null, XHRStates_1["default"].REQ_SEND);
                request.on("complete", function(err) {
                  if (err) {
                    logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "CometTransport.request" + (closing ? "Close()" : "Disconnect()"), "request returned err = " + Utils.inspectError(err));
                    _this.finish("disconnected", err);
                  }
                });
                request.exec();
              }
            };
            CometTransport2.prototype.dispose = function() {
              var _this = this;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "CometTransport.dispose()", "");
              if (!this.isDisposed) {
                this.isDisposed = true;
                if (this.recvRequest) {
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "CometTransport.dispose()", "aborting recv request");
                  this.recvRequest.abort();
                  this.recvRequest = null;
                }
                this.finish("disconnected", connectionerrors_1["default"].disconnected);
                platform_1["default"].Config.nextTick(function() {
                  _this.emit("disposed");
                });
              }
            };
            CometTransport2.prototype.onConnect = function(message) {
              if (this.isDisposed) {
                return;
              }
              var connectionStr = message.connectionKey;
              transport_1["default"].prototype.onConnect.call(this, message);
              var baseConnectionUri = this.baseUri + connectionStr;
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "CometTransport.onConnect()", "baseUri = " + baseConnectionUri + "; connectionKey = " + message.connectionKey);
              this.sendUri = baseConnectionUri + "/send";
              this.recvUri = baseConnectionUri + "/recv";
              this.closeUri = baseConnectionUri + "/close";
              this.disconnectUri = baseConnectionUri + "/disconnect";
            };
            CometTransport2.prototype.send = function(message) {
              if (this.sendRequest) {
                this.pendingItems = this.pendingItems || [];
                this.pendingItems.push(message);
                return;
              }
              var pendingItems = this.pendingItems || [];
              pendingItems.push(message);
              this.pendingItems = null;
              this.sendItems(pendingItems);
            };
            CometTransport2.prototype.sendAnyPending = function() {
              var pendingItems = this.pendingItems;
              if (!pendingItems) {
                return;
              }
              this.pendingItems = null;
              this.sendItems(pendingItems);
            };
            CometTransport2.prototype.sendItems = function(items) {
              var _this = this;
              var sendRequest = this.sendRequest = this.createRequest(this.sendUri, null, this.authParams, this.encodeRequest(items), XHRStates_1["default"].REQ_SEND);
              sendRequest.on("complete", function(err, data) {
                if (err)
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "CometTransport.sendItems()", "on complete: err = " + Utils.inspectError(err));
                _this.sendRequest = null;
                if (err) {
                  if (err.code) {
                    _this.onData(protocolMessageFromRawError(err));
                  } else {
                    _this.disconnect(err);
                  }
                  return;
                }
                if (data) {
                  _this.onData(data);
                }
                if (_this.pendingItems) {
                  platform_1["default"].Config.nextTick(function() {
                    if (!_this.sendRequest) {
                      _this.sendAnyPending();
                    }
                  });
                }
              });
              sendRequest.exec();
            };
            CometTransport2.prototype.recv = function() {
              var _this = this;
              if (this.recvRequest)
                return;
              if (!this.isConnected)
                return;
              var recvRequest = this.recvRequest = this.createRequest(this.recvUri, null, this.authParams, null, this.stream ? XHRStates_1["default"].REQ_RECV_STREAM : XHRStates_1["default"].REQ_RECV_POLL);
              recvRequest.on("data", function(data) {
                _this.onData(data);
              });
              recvRequest.on("complete", function(err) {
                _this.recvRequest = null;
                _this.onActivity();
                if (err) {
                  if (err.code) {
                    _this.onData(protocolMessageFromRawError(err));
                  } else {
                    _this.disconnect(err);
                  }
                  return;
                }
                platform_1["default"].Config.nextTick(function() {
                  _this.recv();
                });
              });
              recvRequest.exec();
            };
            CometTransport2.prototype.onData = function(responseData) {
              try {
                var items = this.decodeResponse(responseData);
                if (items && items.length)
                  for (var i = 0; i < items.length; i++)
                    this.onProtocolMessage(protocolmessage_1["default"].fromDeserialized(items[i]));
              } catch (e) {
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "CometTransport.onData()", "Unexpected exception handing channel event: " + e.stack);
              }
            };
            CometTransport2.prototype.encodeRequest = function(requestItems) {
              return JSON.stringify(requestItems);
            };
            CometTransport2.prototype.decodeResponse = function(responseData) {
              if (typeof responseData == "string")
                return JSON.parse(responseData);
              return responseData;
            };
            return CometTransport2;
          }(transport_1["default"]);
          exports2["default"] = CometTransport;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var Multicaster = function() {
            function Multicaster2(members) {
              this.members = members || [];
            }
            Multicaster2.prototype.call = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              for (var _a = 0, _b = this.members; _a < _b.length; _a++) {
                var member = _b[_a];
                if (member) {
                  try {
                    member.apply(void 0, args);
                  } catch (e) {
                    logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Multicaster multiple callback handler", "Unexpected exception: " + e + "; stack = " + e.stack);
                  }
                }
              }
            };
            Multicaster2.prototype.push = function() {
              var _a;
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              (_a = this.members).push.apply(_a, args);
            };
            Multicaster2.create = function(members) {
              var instance = new Multicaster2(members);
              return Object.assign(function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }
                return instance.call.apply(instance, args);
              }, {
                push: function(fn) {
                  return instance.push(fn);
                }
              });
            };
            return Multicaster2;
          }();
          exports2["default"] = Multicaster;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var auth_1 = tslib_1.__importDefault(__webpack_require__(13));
          var HttpMethods_1 = tslib_1.__importDefault(__webpack_require__(14));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          function withAuthDetails(rest, headers, params, errCallback, opCallback) {
            if (rest.http.supportsAuthHeaders) {
              rest.auth.getAuthHeaders(function(err, authHeaders) {
                if (err)
                  errCallback(err);
                else
                  opCallback(Utils.mixin(authHeaders, headers), params);
              });
            } else {
              rest.auth.getAuthParams(function(err, authParams) {
                if (err)
                  errCallback(err);
                else
                  opCallback(headers, Utils.mixin(authParams, params));
              });
            }
          }
          function unenvelope(callback, format) {
            return function(err, body, outerHeaders, unpacked, outerStatusCode) {
              if (err && !body) {
                callback(err);
                return;
              }
              if (!unpacked) {
                try {
                  body = Utils.decodeBody(body, format);
                } catch (e) {
                  callback(e);
                  return;
                }
              }
              if (!body) {
                callback(new errorinfo_1["default"]("unenvelope(): Response body is missing", null));
                return;
              }
              var _a = body, wrappedStatusCode = _a.statusCode, response = _a.response, wrappedHeaders = _a.headers;
              if (wrappedStatusCode === void 0) {
                callback(err, body, outerHeaders, true, outerStatusCode);
                return;
              }
              if (wrappedStatusCode < 200 || wrappedStatusCode >= 300) {
                var wrappedErr = response && response.error || err;
                if (!wrappedErr) {
                  wrappedErr = new Error("Error in unenveloping " + body);
                  wrappedErr.statusCode = wrappedStatusCode;
                }
                callback(wrappedErr, response, wrappedHeaders, true, wrappedStatusCode);
                return;
              }
              callback(err, response, wrappedHeaders, true, wrappedStatusCode);
            };
          }
          function paramString(params) {
            var paramPairs = [];
            if (params) {
              for (var needle in params) {
                paramPairs.push(needle + "=" + params[needle]);
              }
            }
            return paramPairs.join("&");
          }
          function urlFromPathAndParams(path, params) {
            return path + (params ? "?" : "") + paramString(params);
          }
          function logResponseHandler(callback, method, path, params) {
            return function(err, body, headers, unpacked, statusCode) {
              if (err) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Resource." + method + "()", "Received Error; " + urlFromPathAndParams(path, params) + "; Error: " + Utils.inspectError(err));
              } else {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Resource." + method + "()", "Received; " + urlFromPathAndParams(path, params) + "; Headers: " + paramString(headers) + "; StatusCode: " + statusCode + "; Body: " + (platform_1["default"].BufferUtils.isBuffer(body) ? body.toString() : body));
              }
              if (callback) {
                callback(err, body, headers, unpacked, statusCode);
              }
            };
          }
          var Resource = function() {
            function Resource2() {
            }
            Resource2.get = function(rest, path, headers, params, envelope, callback) {
              Resource2["do"](HttpMethods_1["default"].Get, rest, path, null, headers, params, envelope, callback);
            };
            Resource2["delete"] = function(rest, path, headers, params, envelope, callback) {
              Resource2["do"](HttpMethods_1["default"].Delete, rest, path, null, headers, params, envelope, callback);
            };
            Resource2.post = function(rest, path, body, headers, params, envelope, callback) {
              Resource2["do"](HttpMethods_1["default"].Post, rest, path, body, headers, params, envelope, callback);
            };
            Resource2.patch = function(rest, path, body, headers, params, envelope, callback) {
              Resource2["do"](HttpMethods_1["default"].Patch, rest, path, body, headers, params, envelope, callback);
            };
            Resource2.put = function(rest, path, body, headers, params, envelope, callback) {
              Resource2["do"](HttpMethods_1["default"].Put, rest, path, body, headers, params, envelope, callback);
            };
            Resource2["do"] = function(method, rest, path, body, headers, params, envelope, callback) {
              if (logger_1["default"].shouldLog(logger_1["default"].LOG_MICRO)) {
                callback = logResponseHandler(callback, method, path, params);
              }
              if (envelope) {
                callback = callback && unenvelope(callback, envelope);
                (params = params || {})["envelope"] = envelope;
              }
              function doRequest(headers2, params2) {
                var _a;
                if (logger_1["default"].shouldLog(logger_1["default"].LOG_MICRO)) {
                  logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Resource." + method + "()", "Sending; " + urlFromPathAndParams(path, params2));
                }
                if (logger_1["default"].shouldLog(logger_1["default"].LOG_MICRO)) {
                  var decodedBody = body;
                  if (((_a = headers2["content-type"]) === null || _a === void 0 ? void 0 : _a.indexOf("msgpack")) > 0) {
                    try {
                      decodedBody = platform_1["default"].Config.msgpack.decode(body);
                    } catch (decodeErr) {
                      logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Resource." + method + "()", "Sending MsgPack Decoding Error: " + Utils.inspectError(decodeErr));
                    }
                  }
                  logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Resource." + method + "()", "Sending; " + urlFromPathAndParams(path, params2) + "; Body: " + decodedBody);
                }
                rest.http["do"](method, rest, path, headers2, body, params2, function(err, res, headers3, unpacked, statusCode) {
                  if (err && auth_1["default"].isTokenErr(err)) {
                    rest.auth.authorize(null, null, function(err2) {
                      if (err2) {
                        callback(err2);
                        return;
                      }
                      withAuthDetails(rest, headers3, params2, callback, doRequest);
                    });
                    return;
                  }
                  callback(err, res, headers3, unpacked, statusCode);
                });
              }
              withAuthDetails(rest, headers, params, callback, doRequest);
            };
            return Resource2;
          }();
          exports2["default"] = Resource;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          exports2.TransportParams = void 0;
          var tslib_1 = __webpack_require__(1);
          var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(8));
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var protocol_1 = tslib_1.__importStar(__webpack_require__(48));
          var defaults_1 = tslib_1.__importDefault(__webpack_require__(6));
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(5));
          var messagequeue_1 = tslib_1.__importDefault(__webpack_require__(30));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var connectionstatechange_1 = tslib_1.__importDefault(__webpack_require__(31));
          var connectionerrors_1 = tslib_1.__importStar(__webpack_require__(16));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var auth_1 = tslib_1.__importDefault(__webpack_require__(13));
          var message_1 = tslib_1.__importDefault(__webpack_require__(7));
          var multicaster_1 = tslib_1.__importDefault(__webpack_require__(21));
          var websockettransport_1 = tslib_1.__importDefault(__webpack_require__(49));
          var transport_1 = tslib_1.__importDefault(__webpack_require__(24));
          var HttpStatusCodes_1 = tslib_1.__importDefault(__webpack_require__(25));
          var haveWebStorage = function() {
            var _a;
            return typeof platform_1["default"].WebStorage !== "undefined" && ((_a = platform_1["default"].WebStorage) === null || _a === void 0 ? void 0 : _a.localSupported);
          };
          var haveSessionStorage = function() {
            var _a;
            return typeof platform_1["default"].WebStorage !== "undefined" && ((_a = platform_1["default"].WebStorage) === null || _a === void 0 ? void 0 : _a.sessionSupported);
          };
          var actions = protocolmessage_1["default"].Action;
          var noop = function() {
          };
          var transportPreferenceName = "ably-transport-preference";
          var sessionRecoveryName = "ably-connection-recovery";
          function getSessionRecoverData() {
            var _a, _b;
            return haveSessionStorage() && ((_b = (_a = platform_1["default"].WebStorage) === null || _a === void 0 ? void 0 : _a.getSession) === null || _b === void 0 ? void 0 : _b.call(_a, sessionRecoveryName));
          }
          function setSessionRecoverData(value) {
            var _a, _b;
            return haveSessionStorage() && ((_b = (_a = platform_1["default"].WebStorage) === null || _a === void 0 ? void 0 : _a.setSession) === null || _b === void 0 ? void 0 : _b.call(_a, sessionRecoveryName, value));
          }
          function clearSessionRecoverData() {
            var _a, _b;
            return haveSessionStorage() && ((_b = (_a = platform_1["default"].WebStorage) === null || _a === void 0 ? void 0 : _a.removeSession) === null || _b === void 0 ? void 0 : _b.call(_a, sessionRecoveryName));
          }
          function betterTransportThan(a, b) {
            return Utils.arrIndexOf(platform_1["default"].Defaults.transportPreferenceOrder, a.shortName) > Utils.arrIndexOf(platform_1["default"].Defaults.transportPreferenceOrder, b.shortName);
          }
          function bundleWith(dest, src, maxSize) {
            var action;
            if (dest.channel !== src.channel) {
              return false;
            }
            if ((action = dest.action) !== actions.PRESENCE && action !== actions.MESSAGE) {
              return false;
            }
            if (action !== src.action) {
              return false;
            }
            var kind = action === actions.PRESENCE ? "presence" : "messages", proposed = dest[kind].concat(src[kind]), size = message_1["default"].getMessagesSize(proposed);
            if (size > maxSize) {
              return false;
            }
            if (!Utils.allSame(proposed, "clientId")) {
              return false;
            }
            if (!Utils.arrEvery(proposed, function(msg) {
              return !msg.id;
            })) {
              return false;
            }
            dest[kind] = proposed;
            return true;
          }
          var TransportParams = function() {
            function TransportParams2(options, host, mode, connectionKey) {
              this.options = options;
              this.host = host;
              this.mode = mode;
              this.connectionKey = connectionKey;
              this.format = options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json;
              this.connectionSerial = void 0;
              this.timeSerial = void 0;
            }
            TransportParams2.prototype.getConnectParams = function(authParams) {
              var params = authParams ? Utils.copy(authParams) : {};
              var options = this.options;
              switch (this.mode) {
                case "upgrade":
                  params.upgrade = this.connectionKey;
                  break;
                case "resume":
                  params.resume = this.connectionKey;
                  if (this.timeSerial !== void 0) {
                    params.timeSerial = this.timeSerial;
                  } else if (this.connectionSerial !== void 0) {
                    params.connectionSerial = this.connectionSerial;
                  }
                  break;
                case "recover": {
                  var match = options.recover.split(":");
                  if (match) {
                    params.recover = match[0];
                    var recoverSerial = match[1];
                    if (isNaN(Number(recoverSerial))) {
                      params.timeSerial = recoverSerial;
                    } else {
                      params.connectionSerial = recoverSerial;
                    }
                  }
                  break;
                }
                default:
              }
              if (options.clientId !== void 0) {
                params.clientId = options.clientId;
              }
              if (options.echoMessages === false) {
                params.echo = "false";
              }
              if (this.format !== void 0) {
                params.format = this.format;
              }
              if (this.stream !== void 0) {
                params.stream = this.stream;
              }
              if (this.heartbeats !== void 0) {
                params.heartbeats = this.heartbeats;
              }
              params.v = defaults_1["default"].apiVersion;
              params.agent = encodeURIComponent(defaults_1["default"].agent);
              if (options.transportParams !== void 0) {
                Utils.mixin(params, options.transportParams);
              }
              return params;
            };
            TransportParams2.prototype.toString = function() {
              var result = "[mode=" + this.mode;
              if (this.host) {
                result += ",host=" + this.host;
              }
              if (this.connectionKey) {
                result += ",connectionKey=" + this.connectionKey;
              }
              if (this.connectionSerial !== void 0) {
                result += ",connectionSerial=" + this.connectionSerial;
              }
              if (this.timeSerial) {
                result += ",timeSerial=" + this.timeSerial;
              }
              if (this.format) {
                result += ",format=" + this.format;
              }
              result += "]";
              return result;
            };
            return TransportParams2;
          }();
          exports2.TransportParams = TransportParams;
          var ConnectionManager = function(_super) {
            tslib_1.__extends(ConnectionManager2, _super);
            function ConnectionManager2(realtime, options) {
              var _this = _super.call(this) || this;
              _this.disconnectedRetryCount = 0;
              ConnectionManager2.initTransports();
              _this.realtime = realtime;
              _this.options = options;
              var timeouts = options.timeouts;
              var connectingTimeout = timeouts.preferenceConnectTimeout + timeouts.realtimeRequestTimeout;
              _this.states = {
                initialized: {
                  state: "initialized",
                  terminal: false,
                  queueEvents: true,
                  sendEvents: false,
                  failState: "disconnected"
                },
                connecting: {
                  state: "connecting",
                  terminal: false,
                  queueEvents: true,
                  sendEvents: false,
                  retryDelay: connectingTimeout,
                  failState: "disconnected"
                },
                connected: {
                  state: "connected",
                  terminal: false,
                  queueEvents: false,
                  sendEvents: true,
                  failState: "disconnected"
                },
                synchronizing: {
                  state: "connected",
                  terminal: false,
                  queueEvents: true,
                  sendEvents: false,
                  forceQueueEvents: true,
                  failState: "disconnected"
                },
                disconnected: {
                  state: "disconnected",
                  terminal: false,
                  queueEvents: true,
                  sendEvents: false,
                  retryDelay: timeouts.disconnectedRetryTimeout,
                  failState: "disconnected"
                },
                suspended: {
                  state: "suspended",
                  terminal: false,
                  queueEvents: false,
                  sendEvents: false,
                  retryDelay: timeouts.suspendedRetryTimeout,
                  failState: "suspended"
                },
                closing: {
                  state: "closing",
                  terminal: false,
                  queueEvents: false,
                  sendEvents: false,
                  retryDelay: timeouts.realtimeRequestTimeout,
                  failState: "closed"
                },
                closed: { state: "closed", terminal: true, queueEvents: false, sendEvents: false, failState: "closed" },
                failed: { state: "failed", terminal: true, queueEvents: false, sendEvents: false, failState: "failed" }
              };
              _this.state = _this.states.initialized;
              _this.errorReason = null;
              _this.queuedMessages = new messagequeue_1["default"]();
              _this.msgSerial = 0;
              _this.connectionDetails = void 0;
              _this.connectionId = void 0;
              _this.connectionKey = void 0;
              _this.timeSerial = void 0;
              _this.connectionSerial = void 0;
              _this.connectionStateTtl = timeouts.connectionStateTtl;
              _this.maxIdleInterval = null;
              _this.transports = Utils.intersect(options.transports || defaults_1["default"].defaultTransports, ConnectionManager2.supportedTransports);
              _this.baseTransport = Utils.intersect(defaults_1["default"].baseTransportOrder, _this.transports)[0];
              _this.upgradeTransports = Utils.intersect(_this.transports, defaults_1["default"].upgradeTransports);
              _this.transportPreference = null;
              _this.httpHosts = defaults_1["default"].getHosts(options);
              _this.activeProtocol = null;
              _this.proposedTransports = [];
              _this.pendingTransports = [];
              _this.host = null;
              _this.lastAutoReconnectAttempt = null;
              _this.lastActivity = null;
              _this.mostRecentMsg = null;
              _this.forceFallbackHost = false;
              _this.connectCounter = 0;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Realtime.ConnectionManager()", "started");
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Realtime.ConnectionManager()", "requested transports = [" + (options.transports || defaults_1["default"].defaultTransports) + "]");
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Realtime.ConnectionManager()", "available transports = [" + _this.transports + "]");
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Realtime.ConnectionManager()", "http hosts = [" + _this.httpHosts + "]");
              if (!_this.transports.length) {
                var msg = "no requested transports available";
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "realtime.ConnectionManager()", msg);
                throw new Error(msg);
              }
              var addEventListener = platform_1["default"].Config.addEventListener;
              if (addEventListener) {
                if (haveSessionStorage() && typeof options.recover === "function") {
                  addEventListener("beforeunload", _this.persistConnection.bind(_this));
                }
                if (options.closeOnUnload === true) {
                  addEventListener("beforeunload", function() {
                    logger_1["default"].logAction(logger_1["default"].LOG_MAJOR, "Realtime.ConnectionManager()", "beforeunload event has triggered the connection to close as closeOnUnload is true");
                    _this.requestState({ state: "closing" });
                  });
                }
                addEventListener("online", function() {
                  if (_this.state == _this.states.disconnected || _this.state == _this.states.suspended) {
                    logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager caught browser \u2018online\u2019 event", "reattempting connection");
                    _this.requestState({ state: "connecting" });
                  }
                });
                addEventListener("offline", function() {
                  if (_this.state == _this.states.connected) {
                    logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager caught browser \u2018offline\u2019 event", "disconnecting active transport");
                    _this.disconnectAllTransports();
                  }
                });
              }
              return _this;
            }
            ConnectionManager2.initTransports = function() {
              websockettransport_1["default"](ConnectionManager2);
              Utils.arrForEach(platform_1["default"].Transports, function(initFn) {
                initFn(ConnectionManager2);
              });
            };
            ConnectionManager2.prototype.createTransportParams = function(host, mode) {
              var params = new TransportParams(this.options, host, mode, this.connectionKey);
              if (this.timeSerial) {
                params.timeSerial = String(this.timeSerial);
              } else if (this.connectionSerial !== void 0) {
                params.connectionSerial = this.connectionSerial;
              }
              return params;
            };
            ConnectionManager2.prototype.getTransportParams = function(callback) {
              var _this = this;
              var decideMode = function(modeCb) {
                if (_this.connectionKey) {
                  modeCb("resume");
                  return;
                }
                if (typeof _this.options.recover === "string") {
                  modeCb("recover");
                  return;
                }
                var recoverFn = _this.options.recover, lastSessionData = getSessionRecoverData();
                if (lastSessionData && typeof recoverFn === "function") {
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.getTransportParams()", "Calling clientOptions-provided recover function with last session data");
                  recoverFn(lastSessionData, function(shouldRecover) {
                    if (shouldRecover) {
                      _this.options.recover = lastSessionData.recoveryKey;
                      modeCb("recover");
                    } else {
                      modeCb("clean");
                    }
                  });
                  return;
                }
                modeCb("clean");
              };
              decideMode(function(mode) {
                var transportParams = _this.createTransportParams(null, mode);
                if (mode === "recover") {
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport recovery mode = recover; recoveryKey = " + _this.options.recover);
                  var match = _this.options.recover.split(":");
                  if (match && match[2]) {
                    _this.msgSerial = Number(match[2]);
                  }
                } else {
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport params = " + transportParams.toString());
                }
                callback(transportParams);
              });
            };
            ConnectionManager2.prototype.tryATransport = function(transportParams, candidate, callback) {
              var _this = this;
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.tryATransport()", "trying " + candidate);
              transport_1["default"].tryConnect(ConnectionManager2.supportedTransports[candidate], this, this.realtime.auth, transportParams, function(wrappedErr, transport) {
                var state = _this.state;
                if (state == _this.states.closing || state == _this.states.closed || state == _this.states.failed) {
                  if (transport) {
                    logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.tryATransport()", "connection " + state.state + " while we were attempting the transport; closing " + transport);
                    transport.close();
                  }
                  callback(true);
                  return;
                }
                if (wrappedErr) {
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.tryATransport()", "transport " + candidate + " " + wrappedErr.event + ", err: " + wrappedErr.error.toString());
                  if (auth_1["default"].isTokenErr(wrappedErr.error) && !(_this.errorReason && auth_1["default"].isTokenErr(_this.errorReason))) {
                    _this.errorReason = wrappedErr.error;
                    _this.realtime.auth._forceNewToken(null, null, function(err) {
                      if (err) {
                        _this.actOnErrorFromAuthorize(err);
                        return;
                      }
                      _this.tryATransport(transportParams, candidate, callback);
                    });
                  } else if (wrappedErr.event === "failed") {
                    _this.notifyState({ state: "failed", error: wrappedErr.error });
                    callback(true);
                  } else if (wrappedErr.event === "disconnected") {
                    if (!connectionerrors_1.isRetriable(wrappedErr.error)) {
                      _this.notifyState({ state: _this.states.connecting.failState, error: wrappedErr.error });
                      callback(true);
                    } else {
                      callback(false);
                    }
                  }
                  return;
                }
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.tryATransport()", "viable transport " + candidate + "; setting pending");
                _this.setTransportPending(transport, transportParams);
                callback(null, transport);
              });
            };
            ConnectionManager2.prototype.setTransportPending = function(transport, transportParams) {
              var _this = this;
              var mode = transportParams.mode;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.setTransportPending()", "transport = " + transport + "; mode = " + mode);
              Utils.arrDeleteValue(this.proposedTransports, transport);
              this.pendingTransports.push(transport);
              var optimalTransport = platform_1["default"].Defaults.transportPreferenceOrder[platform_1["default"].Defaults.transportPreferenceOrder.length - 1];
              transport.once("connected", function(error, connectionId, connectionDetails, connectionPosition) {
                if (mode == "upgrade") {
                  if (transport.shortName !== optimalTransport && Utils.arrIn(_this.getUpgradePossibilities(), optimalTransport) && _this.activeProtocol) {
                    setTimeout(function() {
                      _this.scheduleTransportActivation(error, transport, connectionId, connectionDetails, connectionPosition);
                    }, _this.options.timeouts.parallelUpgradeDelay);
                  } else {
                    _this.scheduleTransportActivation(error, transport, connectionId, connectionDetails, connectionPosition);
                  }
                } else {
                  _this.activateTransport(error, transport, connectionId, connectionDetails, connectionPosition);
                  platform_1["default"].Config.nextTick(function() {
                    _this.connectImpl(transportParams);
                  });
                }
                if (mode === "recover" && _this.options.recover) {
                  _this.options.recover = null;
                  _this.unpersistConnection();
                }
              });
              var self2 = this;
              transport.on(["disconnected", "closed", "failed"], function(error) {
                self2.deactivateTransport(transport, this.event, error);
              });
              this.emit("transport.pending", transport);
            };
            ConnectionManager2.prototype.scheduleTransportActivation = function(error, transport, connectionId, connectionDetails, upgradeConnectionPosition) {
              var _this = this;
              var currentTransport = this.activeProtocol && this.activeProtocol.getTransport(), abandon = function() {
                transport.disconnect();
                Utils.arrDeleteValue(_this.pendingTransports, transport);
              };
              if (this.state !== this.states.connected && this.state !== this.states.connecting) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + this.state.state + (this.state === this.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + transport.shortName);
                abandon();
                return;
              }
              if (currentTransport && !betterTransportThan(transport, currentTransport)) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + transport.shortName + " is no better than current active transport " + currentTransport.shortName + " - abandoning upgrade");
                abandon();
                return;
              }
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Scheduling transport upgrade; transport = " + transport);
              var onReadyToUpgrade = function(err) {
                var oldProtocol;
                if (err) {
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.scheduleTransportActivation()", "Unable to activate transport; transport = " + transport + "; err = " + err);
                  return;
                }
                if (!transport.isConnected) {
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + transport.shortName + "is no longer connected; abandoning upgrade");
                  abandon();
                  return;
                }
                if (_this.state === _this.states.connected) {
                  logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Currently connected, so temporarily pausing events until the upgrade is complete");
                  _this.state = _this.states.synchronizing;
                  oldProtocol = _this.activeProtocol;
                } else if (_this.state !== _this.states.connecting) {
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + _this.state.state + (_this.state === _this.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + transport.shortName);
                  abandon();
                  return;
                }
                var connectionReset = connectionId !== _this.connectionId, syncPosition = connectionReset ? upgradeConnectionPosition : _this;
                if (connectionReset) {
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.scheduleTransportActivation()", "Upgrade resulted in new connectionId; resetting library connection position from " + (_this.timeSerial || _this.connectionSerial) + " to " + (syncPosition.timeSerial || syncPosition.connectionSerial) + "; upgrade error was " + error);
                }
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Syncing transport; transport = " + transport);
                _this.sync(transport, syncPosition, function(syncErr, connectionId2, postSyncPosition) {
                  if (syncErr) {
                    if (_this.state === _this.states.synchronizing) {
                      logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.scheduleTransportActivation()", "Unexpected error attempting to sync transport; transport = " + transport + "; err = " + syncErr);
                      _this.disconnectAllTransports();
                    }
                    return;
                  }
                  var finishUpgrade = function() {
                    logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Activating transport; transport = " + transport);
                    _this.activateTransport(error, transport, connectionId2, connectionDetails, postSyncPosition);
                    if (_this.state === _this.states.synchronizing) {
                      logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, sending queued messages on upgraded transport; transport = " + transport);
                      _this.state = _this.states.connected;
                    } else {
                      logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, but state is now " + _this.state.state + ", so leaving unchanged");
                    }
                    if (_this.state.sendEvents) {
                      _this.sendQueuedMessages();
                    }
                  };
                  if (oldProtocol) {
                    oldProtocol.onceIdle(finishUpgrade);
                  } else {
                    finishUpgrade();
                  }
                });
              };
              if (currentTransport) {
                this.realtime.channels.onceNopending(onReadyToUpgrade);
              } else {
                onReadyToUpgrade();
              }
            };
            ConnectionManager2.prototype.activateTransport = function(error, transport, connectionId, connectionDetails, connectionPosition) {
              var _this = this;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.activateTransport()", "transport = " + transport);
              if (error) {
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.activateTransport()", "error = " + error);
              }
              if (connectionId) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.activateTransport()", "connectionId =  " + connectionId);
              }
              if (connectionDetails) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.activateTransport()", "connectionDetails =  " + JSON.stringify(connectionDetails));
              }
              if (connectionPosition) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.activateTransport()", "serial =  " + (connectionPosition.timeSerial || connectionPosition.connectionSerial));
              }
              this.persistTransportPreference(transport);
              var existingState = this.state, connectedState = this.states.connected.state;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.activateTransport()", "current state = " + existingState.state);
              if (existingState.state == this.states.closing.state || existingState.state == this.states.closed.state || existingState.state == this.states.failed.state) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.activateTransport()", "Disconnecting transport and abandoning");
                transport.disconnect();
                return false;
              }
              Utils.arrDeleteValue(this.pendingTransports, transport);
              if (!transport.isConnected) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.activateTransport()", "Declining to activate transport " + transport + " since it appears to no longer be connected");
                return false;
              }
              var existingActiveProtocol = this.activeProtocol;
              this.activeProtocol = new protocol_1["default"](transport);
              this.host = transport.params.host;
              var connectionKey = connectionDetails.connectionKey;
              if (connectionKey && this.connectionKey != connectionKey) {
                this.setConnection(connectionId, connectionDetails, connectionPosition, !!error);
              }
              this.onConnectionDetailsUpdate(connectionDetails, transport);
              platform_1["default"].Config.nextTick(function() {
                transport.on("connected", function(connectedErr, _connectionId, connectionDetails2) {
                  _this.onConnectionDetailsUpdate(connectionDetails2, transport);
                  _this.emit("update", new connectionstatechange_1["default"](connectedState, connectedState, null, connectedErr));
                });
              });
              if (existingState.state === this.states.connected.state) {
                if (error) {
                  this.errorReason = this.realtime.connection.errorReason = error;
                  this.emit("update", new connectionstatechange_1["default"](connectedState, connectedState, null, error));
                }
              } else {
                this.notifyState({ state: "connected", error });
                this.errorReason = this.realtime.connection.errorReason = error || null;
              }
              this.emit("transport.active", transport);
              if (existingActiveProtocol) {
                if (existingActiveProtocol.messageQueue.count() > 0) {
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.activateTransport()", "Previous active protocol (for transport " + existingActiveProtocol.transport.shortName + ", new one is " + transport.shortName + ") finishing with " + existingActiveProtocol.messageQueue.count() + " messages still pending");
                }
                if (existingActiveProtocol.transport === transport) {
                  var msg = "Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = " + transport.shortName + "; stack = " + new Error().stack;
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.activateTransport()", msg);
                } else {
                  existingActiveProtocol.finish();
                }
              }
              Utils.safeArrForEach(this.pendingTransports, function(pendingTransport) {
                if (pendingTransport === transport) {
                  var msg2 = "Assumption violated: activating a transport that is still marked as a pending transport; transport = " + transport.shortName + "; stack = " + new Error().stack;
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.activateTransport()", msg2);
                  Utils.arrDeleteValue(_this.pendingTransports, transport);
                } else {
                  pendingTransport.disconnect();
                }
              });
              Utils.safeArrForEach(this.proposedTransports, function(proposedTransport) {
                if (proposedTransport === transport) {
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.activateTransport()", "Assumption violated: activating a transport that is still marked as a proposed transport; transport = " + transport.shortName + "; stack = " + new Error().stack);
                  Utils.arrDeleteValue(_this.proposedTransports, transport);
                } else {
                  proposedTransport.dispose();
                }
              });
              return true;
            };
            ConnectionManager2.prototype.deactivateTransport = function(transport, state, error) {
              var currentProtocol = this.activeProtocol, wasActive = currentProtocol && currentProtocol.getTransport() === transport, wasPending = Utils.arrDeleteValue(this.pendingTransports, transport), wasProposed = Utils.arrDeleteValue(this.proposedTransports, transport), noTransportsScheduledForActivation = this.noTransportsScheduledForActivation();
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.deactivateTransport()", "transport = " + transport);
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.deactivateTransport()", "state = " + state + (wasActive ? "; was active" : wasPending ? "; was pending" : wasProposed ? "; was proposed" : "") + (noTransportsScheduledForActivation ? "" : "; another transport is scheduled for activation"));
              if (error && error.message)
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.deactivateTransport()", "reason =  " + error.message);
              if (wasActive) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.deactivateTransport()", "Getting, clearing, and requeuing " + this.activeProtocol.messageQueue.count() + " pending messages");
                this.queuePendingMessages(currentProtocol.getPendingMessages());
                platform_1["default"].Config.nextTick(function() {
                  currentProtocol.clearPendingMessages();
                });
                this.activeProtocol = this.host = null;
                clearTimeout(this.channelResumeCheckTimer);
              }
              this.emit("transport.inactive", transport);
              if (wasActive && noTransportsScheduledForActivation || wasActive && state === "failed" || state === "closed" || currentProtocol === null && wasPending && this.pendingTransports.length === 0) {
                if (state === "disconnected" && error && error.statusCode > 500 && this.httpHosts.length > 1) {
                  this.unpersistTransportPreference();
                  this.forceFallbackHost = true;
                  this.notifyState({ state, error, retryImmediately: true });
                  return;
                }
                var newConnectionState = state === "failed" && auth_1["default"].isTokenErr(error) ? "disconnected" : state;
                this.notifyState({ state: newConnectionState, error });
                return;
              }
              if (wasActive && state === "disconnected" && this.state !== this.states.synchronizing) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.deactivateTransport()", "wasActive but another transport is connected and scheduled for activation, so going into the connecting state until it activates");
                this.startSuspendTimer();
                this.startTransitionTimer(this.states.connecting);
                this.notifyState({ state: "connecting", error });
              }
            };
            ConnectionManager2.prototype.noTransportsScheduledForActivation = function() {
              return Utils.isEmpty(this.pendingTransports) || this.pendingTransports.every(function(transport) {
                return !transport.isConnected;
              });
            };
            ConnectionManager2.prototype.sync = function(transport, requestedSyncPosition, callback) {
              var timeout = setTimeout(function() {
                transport.off("sync");
                callback(new errorinfo_1["default"]("Timeout waiting for sync response", 5e4, 500));
              }, this.options.timeouts.realtimeRequestTimeout);
              var syncMessage = protocolmessage_1["default"].fromValues({
                action: actions.SYNC,
                connectionKey: this.connectionKey
              });
              if (requestedSyncPosition.timeSerial) {
                syncMessage.timeSerial = requestedSyncPosition.timeSerial;
              } else if (requestedSyncPosition.connectionSerial !== void 0) {
                syncMessage.connectionSerial = requestedSyncPosition.connectionSerial;
              }
              transport.send(syncMessage);
              transport.once("sync", function(connectionId, syncPosition) {
                clearTimeout(timeout);
                callback(null, connectionId, syncPosition);
              });
            };
            ConnectionManager2.prototype.setConnection = function(connectionId, connectionDetails, connectionPosition, hasConnectionError) {
              var _this = this;
              var prevConnId = this.connectionId, connIdChanged = prevConnId && prevConnId !== connectionId, recoverFailure = !prevConnId && hasConnectionError;
              if (connIdChanged || recoverFailure) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.setConnection()", "Resetting msgSerial");
                this.msgSerial = 0;
              }
              if (this.connectionId !== connectionId) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.setConnection()", "New connectionId; reattaching any attached channels");
                platform_1["default"].Config.nextTick(function() {
                  _this.realtime.channels.reattach();
                });
              } else if (this.options.checkChannelsOnResume) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.setConnection()", "Same connectionId; checkChannelsOnResume is enabled");
                clearTimeout(this.channelResumeCheckTimer);
                this.realtime.channels.resetAttachedMsgIndicators();
                this.channelResumeCheckTimer = setTimeout(function() {
                  _this.realtime.channels.checkAttachedMsgIndicators(connectionId);
                }, 3e4);
              }
              this.realtime.connection.id = this.connectionId = connectionId;
              this.realtime.connection.key = this.connectionKey = connectionDetails.connectionKey;
              var forceResetMessageSerial = connIdChanged || !prevConnId;
              this.setConnectionSerial(connectionPosition, forceResetMessageSerial, false);
            };
            ConnectionManager2.prototype.clearConnection = function() {
              this.realtime.connection.id = this.connectionId = void 0;
              this.realtime.connection.key = this.connectionKey = void 0;
              this.clearConnectionSerial();
              this.msgSerial = 0;
              this.unpersistConnection();
            };
            ConnectionManager2.prototype.setConnectionSerial = function(connectionPosition, force, fromChannelMessage) {
              var timeSerial = connectionPosition.timeSerial, connectionSerial = connectionPosition.connectionSerial;
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.setConnectionSerial()", "Updating connection serial; serial = " + connectionSerial + "; timeSerial = " + timeSerial + "; force = " + force + "; previous = " + this.connectionSerial);
              if (timeSerial !== void 0) {
                if (timeSerial <= this.timeSerial && !force) {
                  if (fromChannelMessage) {
                    logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.setConnectionSerial()", "received message with timeSerial " + timeSerial + ", but current timeSerial is " + this.timeSerial + "; assuming message is a duplicate and discarding it");
                  }
                  return true;
                }
                this.realtime.connection.timeSerial = this.timeSerial = timeSerial;
                this.setRecoveryKey();
                return;
              }
              if (connectionSerial !== void 0) {
                if (connectionSerial <= this.connectionSerial && !force) {
                  if (fromChannelMessage) {
                    logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.setConnectionSerial()", "received message with connectionSerial " + connectionSerial + ", but current connectionSerial is " + this.connectionSerial + "; assuming message is a duplicate and discarding it");
                  }
                  return true;
                }
                this.realtime.connection.serial = this.connectionSerial = connectionSerial;
                this.setRecoveryKey();
              }
            };
            ConnectionManager2.prototype.clearConnectionSerial = function() {
              this.realtime.connection.serial = this.connectionSerial = void 0;
              this.realtime.connection.timeSerial = this.timeSerial = void 0;
              this.clearRecoveryKey();
            };
            ConnectionManager2.prototype.setRecoveryKey = function() {
              this.realtime.connection.recoveryKey = this.connectionKey + ":" + (this.timeSerial || this.connectionSerial) + ":" + this.msgSerial;
            };
            ConnectionManager2.prototype.clearRecoveryKey = function() {
              this.realtime.connection.recoveryKey = null;
            };
            ConnectionManager2.prototype.checkConnectionStateFreshness = function() {
              if (!this.lastActivity || !this.connectionId) {
                return;
              }
              var sinceLast = Utils.now() - this.lastActivity;
              if (sinceLast > this.connectionStateTtl + this.maxIdleInterval) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.checkConnectionStateFreshness()", "Last known activity from realtime was " + sinceLast + "ms ago; discarding connection state");
                this.clearConnection();
                this.states.connecting.failState = "suspended";
              }
            };
            ConnectionManager2.prototype.persistConnection = function() {
              if (haveSessionStorage()) {
                var recoveryKey = this.realtime.connection.recoveryKey;
                if (recoveryKey) {
                  setSessionRecoverData({
                    recoveryKey,
                    disconnectedAt: Utils.now(),
                    location: global.location,
                    clientId: this.realtime.auth.clientId
                  });
                }
              }
            };
            ConnectionManager2.prototype.unpersistConnection = function() {
              clearSessionRecoverData();
            };
            ConnectionManager2.prototype.getError = function() {
              return this.errorReason || this.getStateError();
            };
            ConnectionManager2.prototype.getStateError = function() {
              return connectionerrors_1["default"][this.state.state];
            };
            ConnectionManager2.prototype.activeState = function() {
              return this.state.queueEvents || this.state.sendEvents;
            };
            ConnectionManager2.prototype.enactStateChange = function(stateChange) {
              var logLevel = stateChange.current === "failed" ? logger_1["default"].LOG_ERROR : logger_1["default"].LOG_MAJOR;
              logger_1["default"].logAction(logLevel, "Connection state", stateChange.current + (stateChange.reason ? "; reason: " + stateChange.reason : ""));
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.enactStateChange", "setting new state: " + stateChange.current + "; reason = " + (stateChange.reason && stateChange.reason.message));
              var newState = this.state = this.states[stateChange.current];
              if (stateChange.reason) {
                this.errorReason = stateChange.reason;
                this.realtime.connection.errorReason = stateChange.reason;
              }
              if (newState.terminal || newState.state === "suspended") {
                this.clearConnection();
              }
              this.emit("connectionstate", stateChange);
            };
            ConnectionManager2.prototype.startTransitionTimer = function(transitionState) {
              var _this = this;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.startTransitionTimer()", "transitionState: " + transitionState.state);
              if (this.transitionTimer) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.startTransitionTimer()", "clearing already-running timer");
                clearTimeout(this.transitionTimer);
              }
              this.transitionTimer = setTimeout(function() {
                if (_this.transitionTimer) {
                  _this.transitionTimer = null;
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager " + transitionState.state + " timer expired", "requesting new state: " + transitionState.failState);
                  _this.notifyState({ state: transitionState.failState });
                }
              }, transitionState.retryDelay);
            };
            ConnectionManager2.prototype.cancelTransitionTimer = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.cancelTransitionTimer()", "");
              if (this.transitionTimer) {
                clearTimeout(this.transitionTimer);
                this.transitionTimer = null;
              }
            };
            ConnectionManager2.prototype.startSuspendTimer = function() {
              var _this = this;
              if (this.suspendTimer)
                return;
              this.suspendTimer = setTimeout(function() {
                if (_this.suspendTimer) {
                  _this.suspendTimer = null;
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager suspend timer expired", "requesting new state: suspended");
                  _this.states.connecting.failState = "suspended";
                  _this.notifyState({ state: "suspended" });
                }
              }, this.connectionStateTtl);
            };
            ConnectionManager2.prototype.checkSuspendTimer = function(state) {
              if (state !== "disconnected" && state !== "suspended" && state !== "connecting")
                this.cancelSuspendTimer();
            };
            ConnectionManager2.prototype.cancelSuspendTimer = function() {
              this.states.connecting.failState = "disconnected";
              if (this.suspendTimer) {
                clearTimeout(this.suspendTimer);
                this.suspendTimer = null;
              }
            };
            ConnectionManager2.prototype.startRetryTimer = function(interval) {
              var _this = this;
              this.retryTimer = setTimeout(function() {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager retry timer expired", "retrying");
                _this.retryTimer = null;
                _this.requestState({ state: "connecting" });
              }, interval);
            };
            ConnectionManager2.prototype.cancelRetryTimer = function() {
              if (this.retryTimer) {
                clearTimeout(this.retryTimer);
                this.retryTimer = null;
              }
            };
            ConnectionManager2.prototype.notifyState = function(indicated) {
              var _this = this;
              var state = indicated.state;
              var retryImmediately = state === "disconnected" && (this.state === this.states.connected || this.state === this.states.synchronizing || indicated.retryImmediately || this.state === this.states.connecting && indicated.error && auth_1["default"].isTokenErr(indicated.error) && !(this.errorReason && auth_1["default"].isTokenErr(this.errorReason)));
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.notifyState()", "new state: " + state + (retryImmediately ? "; will retry connection immediately" : ""));
              if (state == this.state.state)
                return;
              this.cancelTransitionTimer();
              this.cancelRetryTimer();
              this.checkSuspendTimer(indicated.state);
              if (state === "suspended" || state === "connected") {
                this.disconnectedRetryCount = 0;
              }
              if (this.state.terminal)
                return;
              var newState = this.states[indicated.state];
              var retryDelay = newState.retryDelay;
              if (newState.state === "disconnected") {
                this.disconnectedRetryCount++;
                retryDelay = newState.retryDelay * Utils.getBackoffCoefficient(this.disconnectedRetryCount) * Utils.getJitterCoefficient();
              }
              var change = new connectionstatechange_1["default"](this.state.state, newState.state, retryDelay, indicated.error || connectionerrors_1["default"][newState.state]);
              if (retryImmediately) {
                var autoReconnect = function() {
                  if (_this.state === _this.states.disconnected) {
                    _this.lastAutoReconnectAttempt = Utils.now();
                    _this.requestState({ state: "connecting" });
                  }
                };
                var sinceLast = this.lastAutoReconnectAttempt && Utils.now() - this.lastAutoReconnectAttempt + 1;
                if (sinceLast && sinceLast < 1e3) {
                  logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.notifyState()", "Last reconnect attempt was only " + sinceLast + "ms ago, waiting another " + (1e3 - sinceLast) + "ms before trying again");
                  setTimeout(autoReconnect, 1e3 - sinceLast);
                } else {
                  platform_1["default"].Config.nextTick(autoReconnect);
                }
              } else if (state === "disconnected" || state === "suspended") {
                this.startRetryTimer(retryDelay);
              }
              if (state === "disconnected" && !retryImmediately || state === "suspended" || newState.terminal) {
                platform_1["default"].Config.nextTick(function() {
                  _this.disconnectAllTransports();
                });
              }
              if (state == "connected" && !this.activeProtocol) {
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.notifyState()", "Broken invariant: attempted to go into connected state, but there is no active protocol");
              }
              this.enactStateChange(change);
              if (this.state.sendEvents) {
                this.sendQueuedMessages();
              } else if (!this.state.queueEvents) {
                this.realtime.channels.propogateConnectionInterruption(state, change.reason);
                this.failQueuedMessages(change.reason);
              }
            };
            ConnectionManager2.prototype.requestState = function(request) {
              var _this = this;
              var state = request.state;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.requestState()", "requested state: " + state + "; current state: " + this.state.state);
              if (state == this.state.state)
                return;
              this.cancelTransitionTimer();
              this.cancelRetryTimer();
              this.checkSuspendTimer(state);
              if (state == "connecting" && this.state.state == "connected")
                return;
              if (state == "closing" && this.state.state == "closed")
                return;
              var newState = this.states[state], change = new connectionstatechange_1["default"](this.state.state, newState.state, null, request.error || connectionerrors_1["default"][newState.state]);
              this.enactStateChange(change);
              if (state == "connecting") {
                platform_1["default"].Config.nextTick(function() {
                  _this.startConnect();
                });
              }
              if (state == "closing") {
                this.closeImpl();
              }
            };
            ConnectionManager2.prototype.startConnect = function() {
              var _this = this;
              if (this.state !== this.states.connecting) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.startConnect()", "Must be in connecting state to connect, but was " + this.state.state);
                return;
              }
              var auth = this.realtime.auth;
              var connectCount = ++this.connectCounter;
              var connect = function() {
                _this.checkConnectionStateFreshness();
                _this.getTransportParams(function(transportParams) {
                  if (connectCount !== _this.connectCounter) {
                    return;
                  }
                  _this.connectImpl(transportParams, connectCount);
                });
              };
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.startConnect()", "starting connection");
              this.startSuspendTimer();
              this.startTransitionTimer(this.states.connecting);
              if (auth.method === "basic") {
                connect();
              } else {
                var authCb = function(err) {
                  if (connectCount !== _this.connectCounter) {
                    return;
                  }
                  if (err) {
                    _this.actOnErrorFromAuthorize(err);
                  } else {
                    connect();
                  }
                };
                if (this.errorReason && auth_1["default"].isTokenErr(this.errorReason)) {
                  auth._forceNewToken(null, null, authCb);
                } else {
                  auth._ensureValidAuthCredentials(false, authCb);
                }
              }
            };
            ConnectionManager2.prototype.connectImpl = function(transportParams, connectCount) {
              var state = this.state.state;
              if (state !== this.states.connecting.state && state !== this.states.connected.state) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.connectImpl()", "Must be in connecting state to connect (or connected to upgrade), but was " + state);
              } else if (this.pendingTransports.length) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.connectImpl()", "Transports " + this.pendingTransports[0].toString() + " currently pending; taking no action");
              } else if (state == this.states.connected.state) {
                this.upgradeIfNeeded(transportParams);
              } else if (this.transports.length > 1 && this.getTransportPreference()) {
                this.connectPreference(transportParams);
              } else {
                this.connectBase(transportParams, connectCount);
              }
            };
            ConnectionManager2.prototype.connectPreference = function(transportParams) {
              var _this = this;
              var preference = this.getTransportPreference();
              var preferenceTimeoutExpired = false;
              if (!Utils.arrIn(this.transports, preference)) {
                this.unpersistTransportPreference();
                this.connectImpl(transportParams);
              }
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.connectPreference()", "Trying to connect with stored transport preference " + preference);
              var preferenceTimeout = setTimeout(function() {
                preferenceTimeoutExpired = true;
                if (!(_this.state.state === _this.states.connected.state)) {
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.connectPreference()", "Shortcircuit connection attempt with " + preference + " failed; clearing preference and trying from scratch");
                  _this.disconnectAllTransports();
                  _this.unpersistTransportPreference();
                }
                _this.connectImpl(transportParams);
              }, this.options.timeouts.preferenceConnectTimeout);
              transportParams.host = this.httpHosts[0];
              this.tryATransport(transportParams, preference, function(fatal, transport) {
                clearTimeout(preferenceTimeout);
                if (preferenceTimeoutExpired && transport) {
                  transport.off();
                  transport.disconnect();
                  Utils.arrDeleteValue(_this.pendingTransports, transport);
                } else if (!transport && !fatal) {
                  _this.unpersistTransportPreference();
                  _this.connectImpl(transportParams);
                }
              });
            };
            ConnectionManager2.prototype.connectBase = function(transportParams, connectCount) {
              var _this = this;
              var giveUp = function(err) {
                _this.notifyState({ state: _this.states.connecting.failState, error: err });
              };
              var candidateHosts = this.httpHosts.slice();
              var hostAttemptCb = function(fatal, transport) {
                if (connectCount !== _this.connectCounter) {
                  return;
                }
                if (!transport && !fatal) {
                  tryFallbackHosts();
                }
              };
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.connectBase()", "Trying to connect with base transport " + this.baseTransport);
              var host = candidateHosts.shift();
              if (!host) {
                giveUp(new errorinfo_1["default"]("Unable to connect (no available host)", 80003, 404));
                return;
              }
              transportParams.host = host;
              var tryFallbackHosts = function() {
                if (!candidateHosts.length) {
                  giveUp(new errorinfo_1["default"]("Unable to connect (and no more fallback hosts to try)", 80003, 404));
                  return;
                }
                if (!_this.realtime.http.checkConnectivity) {
                  giveUp(new errorinfo_1["default"]("Internal error: Http.checkConnectivity not set", null, 500));
                  return;
                }
                _this.realtime.http.checkConnectivity(function(err, connectivity) {
                  if (connectCount !== _this.connectCounter) {
                    return;
                  }
                  if (err) {
                    giveUp(err);
                    return;
                  }
                  if (!connectivity) {
                    giveUp(new errorinfo_1["default"]("Unable to connect (network unreachable)", 80003, 404));
                    return;
                  }
                  transportParams.host = Utils.arrPopRandomElement(candidateHosts);
                  _this.tryATransport(transportParams, _this.baseTransport, hostAttemptCb);
                });
              };
              if (this.forceFallbackHost && candidateHosts.length) {
                this.forceFallbackHost = false;
                tryFallbackHosts();
                return;
              }
              this.tryATransport(transportParams, this.baseTransport, hostAttemptCb);
            };
            ConnectionManager2.prototype.getUpgradePossibilities = function() {
              var current = this.activeProtocol.getTransport().shortName;
              var currentPosition = Utils.arrIndexOf(this.upgradeTransports, current);
              return this.upgradeTransports.slice(currentPosition + 1);
            };
            ConnectionManager2.prototype.upgradeIfNeeded = function(transportParams) {
              var _this = this;
              var upgradePossibilities = this.getUpgradePossibilities();
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.upgradeIfNeeded()", "upgrade possibilities: " + platform_1["default"].Config.inspect(upgradePossibilities));
              if (!upgradePossibilities.length) {
                return;
              }
              Utils.arrForEach(upgradePossibilities, function(upgradeTransport) {
                var upgradeTransportParams = _this.createTransportParams(transportParams.host, "upgrade");
                _this.tryATransport(upgradeTransportParams, upgradeTransport, noop);
              });
            };
            ConnectionManager2.prototype.closeImpl = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.closeImpl()", "closing connection");
              this.cancelSuspendTimer();
              this.startTransitionTimer(this.states.closing);
              Utils.safeArrForEach(this.pendingTransports, function(transport) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.closeImpl()", "Closing pending transport: " + transport);
                if (transport)
                  transport.close();
              });
              Utils.safeArrForEach(this.proposedTransports, function(transport) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.closeImpl()", "Disposing of proposed transport: " + transport);
                if (transport)
                  transport.dispose();
              });
              if (this.activeProtocol) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.closeImpl()", "Closing active transport: " + this.activeProtocol.getTransport());
                this.activeProtocol.getTransport().close();
              }
              this.notifyState({ state: "closed" });
            };
            ConnectionManager2.prototype.onAuthUpdated = function(tokenDetails, callback) {
              var _this = this;
              var _a;
              switch (this.state.state) {
                case "connected": {
                  logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Sending AUTH message on active transport");
                  if ((this.pendingTransports.length || this.proposedTransports.length) && this.state !== this.states.synchronizing) {
                    this.disconnectAllTransports(true);
                    var transportParams_1 = this.activeProtocol.getTransport().params;
                    platform_1["default"].Config.nextTick(function() {
                      if (_this.state.state === "connected") {
                        _this.upgradeIfNeeded(transportParams_1);
                      }
                    });
                  }
                  var activeTransport = (_a = this.activeProtocol) === null || _a === void 0 ? void 0 : _a.getTransport();
                  if (activeTransport && activeTransport.onAuthUpdated) {
                    activeTransport.onAuthUpdated(tokenDetails);
                  }
                  var authMsg = protocolmessage_1["default"].fromValues({
                    action: actions.AUTH,
                    auth: {
                      accessToken: tokenDetails.token
                    }
                  });
                  this.send(authMsg);
                  var successListener_1 = function() {
                    _this.off(failureListener_1);
                    callback(null, tokenDetails);
                  };
                  var failureListener_1 = function(stateChange) {
                    if (stateChange.current === "failed") {
                      _this.off(successListener_1);
                      _this.off(failureListener_1);
                      callback(stateChange.reason || _this.getStateError());
                    }
                  };
                  this.once("connectiondetails", successListener_1);
                  this.on("connectionstate", failureListener_1);
                  break;
                }
                case "connecting":
                  logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Aborting current connection attempts in order to start again with the new auth details");
                  this.disconnectAllTransports();
                default: {
                  logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Connection state is " + this.state.state + "; waiting until either connected or failed");
                  var listener_1 = function(stateChange) {
                    switch (stateChange.current) {
                      case "connected":
                        _this.off(listener_1);
                        callback(null, tokenDetails);
                        break;
                      case "failed":
                      case "closed":
                      case "suspended":
                        _this.off(listener_1);
                        callback(stateChange.reason || _this.getStateError());
                        break;
                      default:
                        break;
                    }
                  };
                  this.on("connectionstate", listener_1);
                  if (this.state.state === "connecting") {
                    this.startConnect();
                  } else {
                    this.requestState({ state: "connecting" });
                  }
                }
              }
            };
            ConnectionManager2.prototype.disconnectAllTransports = function(exceptActive) {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.disconnectAllTransports()", "Disconnecting all transports" + (exceptActive ? " except the active transport" : ""));
              this.connectCounter++;
              Utils.safeArrForEach(this.pendingTransports, function(transport) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting pending transport: " + transport);
                if (transport)
                  transport.disconnect();
              });
              this.pendingTransports = [];
              Utils.safeArrForEach(this.proposedTransports, function(transport) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disposing of proposed transport: " + transport);
                if (transport)
                  transport.dispose();
              });
              this.proposedTransports = [];
              if (this.activeProtocol && !exceptActive) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting active transport: " + this.activeProtocol.getTransport());
                this.activeProtocol.getTransport().disconnect();
              }
            };
            ConnectionManager2.prototype.send = function(msg, queueEvent, callback) {
              callback = callback || noop;
              var state = this.state;
              if (state.sendEvents) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.send()", "sending event");
                this.sendImpl(new protocol_1.PendingMessage(msg, callback));
                return;
              }
              var shouldQueue = queueEvent && state.queueEvents || state.forceQueueEvents;
              if (!shouldQueue) {
                var err = "rejecting event, queueEvent was " + queueEvent + ", state was " + state.state;
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.send()", err);
                callback(this.errorReason || new errorinfo_1["default"](err, 9e4, 400));
                return;
              }
              if (logger_1["default"].shouldLog(logger_1["default"].LOG_MICRO)) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.send()", "queueing msg; " + protocolmessage_1["default"].stringify(msg));
              }
              this.queue(msg, callback);
            };
            ConnectionManager2.prototype.sendImpl = function(pendingMessage) {
              var msg = pendingMessage.message;
              if (pendingMessage.ackRequired && !pendingMessage.sendAttempted) {
                msg.msgSerial = this.msgSerial++;
                this.setRecoveryKey();
              }
              try {
                this.activeProtocol.send(pendingMessage);
              } catch (e) {
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.sendImpl()", "Unexpected exception in transport.send(): " + e.stack);
              }
            };
            ConnectionManager2.prototype.queue = function(msg, callback) {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.queue()", "queueing event");
              var lastQueued = this.queuedMessages.last();
              var maxSize = this.options.maxMessageSize;
              if (lastQueued && !lastQueued.sendAttempted && bundleWith(lastQueued.message, msg, maxSize)) {
                if (!lastQueued.merged) {
                  lastQueued.callback = multicaster_1["default"].create([lastQueued.callback]);
                  lastQueued.merged = true;
                }
                lastQueued.callback.push(callback);
              } else {
                this.queuedMessages.push(new protocol_1.PendingMessage(msg, callback));
              }
            };
            ConnectionManager2.prototype.sendQueuedMessages = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.sendQueuedMessages()", "sending " + this.queuedMessages.count() + " queued messages");
              var pendingMessage;
              while (pendingMessage = this.queuedMessages.shift())
                this.sendImpl(pendingMessage);
            };
            ConnectionManager2.prototype.queuePendingMessages = function(pendingMessages) {
              if (pendingMessages && pendingMessages.length) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.queuePendingMessages()", "queueing " + pendingMessages.length + " pending messages");
                this.queuedMessages.prepend(pendingMessages);
              }
            };
            ConnectionManager2.prototype.failQueuedMessages = function(err) {
              var numQueued = this.queuedMessages.count();
              if (numQueued > 0) {
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.failQueuedMessages()", "failing " + numQueued + " queued messages, err = " + Utils.inspectError(err));
                this.queuedMessages.completeAllMessages(err);
              }
            };
            ConnectionManager2.prototype.onChannelMessage = function(message, transport) {
              var onActiveTransport = this.activeProtocol && transport === this.activeProtocol.getTransport(), onUpgradeTransport = Utils.arrIn(this.pendingTransports, transport) && this.state == this.states.synchronizing, notControlMsg = message.action === actions.MESSAGE || message.action === actions.PRESENCE;
              if (onActiveTransport || onUpgradeTransport) {
                if (notControlMsg) {
                  var suppressed = this.setConnectionSerial(message, false, true);
                  if (suppressed) {
                    return;
                  }
                  if (protocolmessage_1["default"].isDuplicate(message, this.mostRecentMsg)) {
                    logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.onChannelMessage()", "received message with different connectionSerial, but same message id as a previous; discarding; id = " + message.id);
                    return;
                  }
                  this.mostRecentMsg = message;
                }
                this.realtime.channels.onChannelMessage(message);
              } else {
                if (Utils.arrIndexOf([actions.ACK, actions.NACK, actions.ERROR], message.action) > -1) {
                  this.realtime.channels.onChannelMessage(message);
                } else {
                  logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "ConnectionManager.onChannelMessage()", "received message " + JSON.stringify(message) + "on defunct transport; discarding");
                }
              }
            };
            ConnectionManager2.prototype.ping = function(transport, callback) {
              var _this = this;
              if (transport) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.ping()", "transport = " + transport);
                var onTimeout = function() {
                  transport.off("heartbeat", onHeartbeat_1);
                  callback(new errorinfo_1["default"]("Timeout waiting for heartbeat response", 5e4, 500));
                };
                var pingStart_1 = Utils.now(), id_1 = Utils.cheapRandStr();
                var onHeartbeat_1 = function(responseId) {
                  if (responseId === id_1) {
                    transport.off("heartbeat", onHeartbeat_1);
                    clearTimeout(timer_1);
                    var responseTime = Utils.now() - pingStart_1;
                    callback(null, responseTime);
                  }
                };
                var timer_1 = setTimeout(onTimeout, this.options.timeouts.realtimeRequestTimeout);
                transport.on("heartbeat", onHeartbeat_1);
                transport.ping(id_1);
                return;
              }
              if (this.state.state !== "connected") {
                callback(new errorinfo_1["default"]("Unable to ping service; not connected", 4e4, 400));
                return;
              }
              var completed = false;
              var onPingComplete = function(err, responseTime) {
                _this.off("transport.active", onTransportActive);
                if (!completed) {
                  completed = true;
                  callback(err, responseTime);
                }
              };
              var onTransportActive = function() {
                if (!completed) {
                  completed = true;
                  platform_1["default"].Config.nextTick(function() {
                    _this.ping(null, callback);
                  });
                }
              };
              this.on("transport.active", onTransportActive);
              this.ping(this.activeProtocol.getTransport(), onPingComplete);
            };
            ConnectionManager2.prototype.abort = function(error) {
              this.activeProtocol.getTransport().fail(error);
            };
            ConnectionManager2.prototype.registerProposedTransport = function(transport) {
              this.proposedTransports.push(transport);
            };
            ConnectionManager2.prototype.getTransportPreference = function() {
              var _a, _b;
              return this.transportPreference || haveWebStorage() && ((_b = (_a = platform_1["default"].WebStorage) === null || _a === void 0 ? void 0 : _a.get) === null || _b === void 0 ? void 0 : _b.call(_a, transportPreferenceName));
            };
            ConnectionManager2.prototype.persistTransportPreference = function(transport) {
              var _a, _b;
              if (Utils.arrIn(defaults_1["default"].upgradeTransports, transport.shortName)) {
                this.transportPreference = transport.shortName;
                if (haveWebStorage()) {
                  (_b = (_a = platform_1["default"].WebStorage) === null || _a === void 0 ? void 0 : _a.set) === null || _b === void 0 ? void 0 : _b.call(_a, transportPreferenceName, transport.shortName);
                }
              }
            };
            ConnectionManager2.prototype.unpersistTransportPreference = function() {
              var _a, _b;
              this.transportPreference = null;
              if (haveWebStorage()) {
                (_b = (_a = platform_1["default"].WebStorage) === null || _a === void 0 ? void 0 : _a.remove) === null || _b === void 0 ? void 0 : _b.call(_a, transportPreferenceName);
              }
            };
            ConnectionManager2.prototype.actOnErrorFromAuthorize = function(err) {
              if (err.code === 40171) {
                this.notifyState({ state: "failed", error: err });
              } else if (err.statusCode === HttpStatusCodes_1["default"].Forbidden) {
                var msg = "Client configured authentication provider returned 403; failing the connection";
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.actOnErrorFromAuthorize()", msg);
                this.notifyState({ state: "failed", error: new errorinfo_1["default"](msg, 80019, 403, err) });
              } else {
                var msg = "Client configured authentication provider request failed";
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "ConnectionManager.actOnErrorFromAuthorize", msg);
                this.notifyState({ state: this.state.failState, error: new errorinfo_1["default"](msg, 80019, 401, err) });
              }
            };
            ConnectionManager2.prototype.onConnectionDetailsUpdate = function(connectionDetails, transport) {
              if (!connectionDetails) {
                return;
              }
              this.connectionDetails = connectionDetails;
              if (connectionDetails.maxMessageSize) {
                this.options.maxMessageSize = connectionDetails.maxMessageSize;
              }
              var clientId = connectionDetails.clientId;
              if (clientId) {
                var err = this.realtime.auth._uncheckedSetClientId(clientId);
                if (err) {
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "ConnectionManager.onConnectionDetailsUpdate()", err.message);
                  transport.fail(err);
                  return;
                }
              }
              var connectionStateTtl = connectionDetails.connectionStateTtl;
              if (connectionStateTtl) {
                this.connectionStateTtl = connectionStateTtl;
              }
              this.maxIdleInterval = connectionDetails.maxIdleInterval;
              this.emit("connectiondetails", connectionDetails);
            };
            ConnectionManager2.supportedTransports = {};
            return ConnectionManager2;
          }(eventemitter_1["default"]);
          exports2["default"] = ConnectionManager;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(8));
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(5));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var connectionerrors_1 = tslib_1.__importDefault(__webpack_require__(16));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var actions = protocolmessage_1["default"].Action;
          var closeMessage = protocolmessage_1["default"].fromValues({ action: actions.CLOSE });
          var disconnectMessage = protocolmessage_1["default"].fromValues({ action: actions.DISCONNECT });
          var Transport = function(_super) {
            tslib_1.__extends(Transport2, _super);
            function Transport2(connectionManager, auth, params, forceJsonProtocol) {
              var _this = _super.call(this) || this;
              if (forceJsonProtocol) {
                params.format = void 0;
                params.heartbeats = true;
              }
              _this.connectionManager = connectionManager;
              connectionManager.registerProposedTransport(_this);
              _this.auth = auth;
              _this.params = params;
              _this.timeouts = params.options.timeouts;
              _this.format = params.format;
              _this.isConnected = false;
              _this.isFinished = false;
              _this.isDisposed = false;
              _this.maxIdleInterval = null;
              _this.idleTimer = null;
              _this.lastActivity = null;
              return _this;
            }
            Transport2.prototype.connect = function() {
            };
            Transport2.prototype.close = function() {
              if (this.isConnected) {
                this.requestClose();
              }
              this.finish("closed", connectionerrors_1["default"].closed);
            };
            Transport2.prototype.disconnect = function(err) {
              if (this.isConnected) {
                this.requestDisconnect();
              }
              this.finish("disconnected", err || connectionerrors_1["default"].disconnected);
            };
            Transport2.prototype.fail = function(err) {
              if (this.isConnected) {
                this.requestDisconnect();
              }
              this.finish("failed", err || connectionerrors_1["default"].failed);
            };
            Transport2.prototype.finish = function(event, err) {
              var _a;
              if (this.isFinished) {
                return;
              }
              this.isFinished = true;
              this.isConnected = false;
              this.maxIdleInterval = null;
              clearTimeout((_a = this.idleTimer) !== null && _a !== void 0 ? _a : void 0);
              this.idleTimer = null;
              this.emit(event, err);
              this.dispose();
            };
            Transport2.prototype.onProtocolMessage = function(message) {
              if (logger_1["default"].shouldLog(logger_1["default"].LOG_MICRO)) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Transport.onProtocolMessage()", "received on " + this.shortName + ": " + protocolmessage_1["default"].stringify(message) + "; connectionId = " + this.connectionManager.connectionId);
              }
              this.onActivity();
              switch (message.action) {
                case actions.HEARTBEAT:
                  logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Transport.onProtocolMessage()", this.shortName + " heartbeat; connectionId = " + this.connectionManager.connectionId);
                  this.emit("heartbeat", message.id);
                  break;
                case actions.CONNECTED:
                  this.onConnect(message);
                  this.emit("connected", message.error, message.connectionId, message.connectionDetails, message);
                  break;
                case actions.CLOSED:
                  this.onClose(message);
                  break;
                case actions.DISCONNECTED:
                  this.onDisconnect(message);
                  break;
                case actions.ACK:
                  this.emit("ack", message.msgSerial, message.count);
                  break;
                case actions.NACK:
                  this.emit("nack", message.msgSerial, message.count, message.error);
                  break;
                case actions.SYNC:
                  if (message.connectionId !== void 0) {
                    this.emit("sync", message.connectionId, message);
                    break;
                  }
                  this.connectionManager.onChannelMessage(message, this);
                  break;
                case actions.AUTH:
                  this.auth.authorize(function(err) {
                    if (err) {
                      logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Transport.onProtocolMessage()", "Ably requested re-authentication, but unable to obtain a new token: " + Utils.inspectError(err));
                    }
                  });
                  break;
                case actions.ERROR:
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Transport.onProtocolMessage()", "received error action; connectionId = " + this.connectionManager.connectionId + "; err = " + platform_1["default"].Config.inspect(message.error) + (message.channel ? ", channel: " + message.channel : ""));
                  if (message.channel === void 0) {
                    this.onFatalError(message);
                    break;
                  }
                  this.connectionManager.onChannelMessage(message, this);
                  break;
                default:
                  this.connectionManager.onChannelMessage(message, this);
              }
            };
            Transport2.prototype.onConnect = function(message) {
              this.isConnected = true;
              if (!message.connectionDetails) {
                throw new Error("Transport.onConnect(): Connect message recieved without connectionDetails");
              }
              var maxPromisedIdle = message.connectionDetails.maxIdleInterval;
              if (maxPromisedIdle) {
                this.maxIdleInterval = maxPromisedIdle + this.timeouts.realtimeRequestTimeout;
                this.onActivity();
              }
            };
            Transport2.prototype.onDisconnect = function(message) {
              var err = message && message.error;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Transport.onDisconnect()", "err = " + Utils.inspectError(err));
              this.finish("disconnected", err);
            };
            Transport2.prototype.onFatalError = function(message) {
              var err = message && message.error;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Transport.onFatalError()", "err = " + Utils.inspectError(err));
              this.finish("failed", err);
            };
            Transport2.prototype.onClose = function(message) {
              var err = message && message.error;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Transport.onClose()", "err = " + Utils.inspectError(err));
              this.finish("closed", err);
            };
            Transport2.prototype.requestClose = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Transport.requestClose()", "");
              this.send(closeMessage);
            };
            Transport2.prototype.requestDisconnect = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Transport.requestDisconnect()", "");
              this.send(disconnectMessage);
            };
            Transport2.prototype.ping = function(id) {
              var msg = { action: protocolmessage_1["default"].Action.HEARTBEAT };
              if (id)
                msg.id = id;
              this.send(protocolmessage_1["default"].fromValues(msg));
            };
            Transport2.prototype.dispose = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Transport.dispose()", "");
              this.isDisposed = true;
              this.off();
            };
            Transport2.prototype.onActivity = function() {
              if (!this.maxIdleInterval) {
                return;
              }
              this.lastActivity = this.connectionManager.lastActivity = Utils.now();
              this.setIdleTimer(this.maxIdleInterval + 100);
            };
            Transport2.prototype.setIdleTimer = function(timeout) {
              var _this = this;
              if (!this.idleTimer) {
                this.idleTimer = setTimeout(function() {
                  _this.onIdleTimerExpire();
                }, timeout);
              }
            };
            Transport2.prototype.onIdleTimerExpire = function() {
              if (!this.lastActivity || !this.maxIdleInterval) {
                throw new Error("Transport.onIdleTimerExpire(): lastActivity/maxIdleInterval not set");
              }
              this.idleTimer = null;
              var sinceLast = Utils.now() - this.lastActivity;
              var timeRemaining = this.maxIdleInterval - sinceLast;
              if (timeRemaining <= 0) {
                var msg = "No activity seen from realtime in " + sinceLast + "ms; assuming connection has dropped";
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Transport.onIdleTimerExpire()", msg);
                this.disconnect(new errorinfo_1["default"](msg, 80003, 408));
              } else {
                this.setIdleTimer(timeRemaining + 100);
              }
            };
            Transport2.tryConnect = function(transportCtor, connectionManager, auth, transportParams, callback) {
              var transport = new transportCtor(connectionManager, auth, transportParams);
              var transportAttemptTimer;
              var errorCb = function(err) {
                clearTimeout(transportAttemptTimer);
                callback({ event: this.event, error: err });
              };
              var realtimeRequestTimeout = connectionManager.options.timeouts.realtimeRequestTimeout;
              transportAttemptTimer = setTimeout(function() {
                transport.off(["preconnect", "disconnected", "failed"]);
                transport.dispose();
                errorCb.call({ event: "disconnected" }, new errorinfo_1["default"]("Timeout waiting for transport to indicate itself viable", 5e4, 500));
              }, realtimeRequestTimeout);
              transport.on(["failed", "disconnected"], errorCb);
              transport.on("preconnect", function() {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Transport.tryConnect()", "viable transport " + transport);
                clearTimeout(transportAttemptTimer);
                transport.off(["failed", "disconnected"], errorCb);
                callback(null, transport);
              });
              transport.connect();
            };
            return Transport2;
          }(eventemitter_1["default"]);
          exports2["default"] = Transport;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          exports2.isSuccessCode = void 0;
          var HttpStatusCodes;
          (function(HttpStatusCodes2) {
            HttpStatusCodes2[HttpStatusCodes2["Success"] = 200] = "Success";
            HttpStatusCodes2[HttpStatusCodes2["NoContent"] = 204] = "NoContent";
            HttpStatusCodes2[HttpStatusCodes2["BadRequest"] = 400] = "BadRequest";
            HttpStatusCodes2[HttpStatusCodes2["Unauthorized"] = 401] = "Unauthorized";
            HttpStatusCodes2[HttpStatusCodes2["Forbidden"] = 403] = "Forbidden";
            HttpStatusCodes2[HttpStatusCodes2["RequestTimeout"] = 408] = "RequestTimeout";
            HttpStatusCodes2[HttpStatusCodes2["InternalServerError"] = 500] = "InternalServerError";
          })(HttpStatusCodes || (HttpStatusCodes = {}));
          function isSuccessCode(statusCode) {
            return statusCode >= HttpStatusCodes.Success && statusCode < HttpStatusCodes.BadRequest;
          }
          exports2.isSuccessCode = isSuccessCode;
          exports2["default"] = HttpStatusCodes;
        },
        function(module3, exports2) {
          module3.exports = require("util");
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var defaults_1 = tslib_1.__importDefault(__webpack_require__(6));
          var auth_1 = tslib_1.__importDefault(__webpack_require__(13));
          var push_1 = tslib_1.__importDefault(__webpack_require__(42));
          var paginatedresource_1 = tslib_1.__importDefault(__webpack_require__(15));
          var channel_1 = tslib_1.__importDefault(__webpack_require__(28));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var stats_1 = tslib_1.__importDefault(__webpack_require__(45));
          var HttpMethods_1 = tslib_1.__importDefault(__webpack_require__(14));
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var noop = function() {
          };
          var Rest2 = function() {
            function Rest3(options) {
              if (!options) {
                var msg = "no options provided";
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Rest()", msg);
                throw new Error(msg);
              }
              var optionsObj = defaults_1["default"].objectifyOptions(options);
              if (optionsObj.log) {
                logger_1["default"].setLog(optionsObj.log.level, optionsObj.log.handler);
              }
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Rest()", "initialized with clientOptions " + platform_1["default"].Config.inspect(options));
              var normalOptions = this.options = defaults_1["default"].normaliseOptions(optionsObj);
              if (normalOptions.key) {
                var keyMatch = normalOptions.key.match(/^([^:\s]+):([^:.\s]+)$/);
                if (!keyMatch) {
                  var msg = "invalid key parameter";
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Rest()", msg);
                  throw new errorinfo_1["default"](msg, 40400, 404);
                }
                normalOptions.keyName = keyMatch[1];
                normalOptions.keySecret = keyMatch[2];
              }
              if ("clientId" in normalOptions) {
                if (!(typeof normalOptions.clientId === "string" || normalOptions.clientId === null))
                  throw new errorinfo_1["default"]("clientId must be either a string or null", 40012, 400);
                else if (normalOptions.clientId === "*")
                  throw new errorinfo_1["default"]('Can\u2019t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})', 40012, 400);
              }
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Rest()", "started; version = " + defaults_1["default"].version);
              this.baseUri = this.authority = function(host) {
                return defaults_1["default"].getHttpScheme(normalOptions) + host + ":" + defaults_1["default"].getPort(normalOptions, false);
              };
              this._currentFallback = null;
              this.serverTimeOffset = null;
              this.http = new platform_1["default"].Http();
              this.auth = new auth_1["default"](this, normalOptions);
              this.channels = new Channels(this);
              this.push = new push_1["default"](this);
            }
            Rest3.prototype.stats = function(params, callback) {
              if (callback === void 0) {
                if (typeof params == "function") {
                  callback = params;
                  params = null;
                } else {
                  if (this.options.promises) {
                    return Utils.promisify(this, "stats", arguments);
                  }
                  callback = noop;
                }
              }
              var headers = Utils.defaultGetHeaders(), format = this.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.http.supportsLinkHeaders ? void 0 : format;
              if (this.options.headers)
                Utils.mixin(headers, this.options.headers);
              new paginatedresource_1["default"](this, "/stats", headers, envelope, function(body, headers2, unpacked) {
                var statsValues = unpacked ? body : JSON.parse(body);
                for (var i = 0; i < statsValues.length; i++)
                  statsValues[i] = stats_1["default"].fromValues(statsValues[i]);
                return statsValues;
              }).get(params, callback);
            };
            Rest3.prototype.time = function(params, callback) {
              var _this = this;
              if (callback === void 0) {
                if (typeof params == "function") {
                  callback = params;
                  params = null;
                } else {
                  if (this.options.promises) {
                    return Utils.promisify(this, "time", arguments);
                  }
                }
              }
              var _callback = callback || noop;
              var headers = Utils.defaultGetHeaders();
              if (this.options.headers)
                Utils.mixin(headers, this.options.headers);
              var timeUri = function(host) {
                return _this.authority(host) + "/time";
              };
              this.http["do"](HttpMethods_1["default"].Get, this, timeUri, headers, null, params, function(err, res, headers2, unpacked) {
                if (err) {
                  _callback(err);
                  return;
                }
                if (!unpacked)
                  res = JSON.parse(res);
                var time = res[0];
                if (!time) {
                  _callback(new errorinfo_1["default"]("Internal error (unexpected result type from GET /time)", 5e4, 500));
                  return;
                }
                _this.serverTimeOffset = time - Utils.now();
                _callback(null, time);
              });
            };
            Rest3.prototype.request = function(method, path, params, body, customHeaders, callback) {
              var useBinary = this.options.useBinaryProtocol, encoder = useBinary ? platform_1["default"].Config.msgpack.encode : JSON.stringify, decoder = useBinary ? platform_1["default"].Config.msgpack.decode : JSON.parse, format = useBinary ? Utils.Format.msgpack : Utils.Format.json, envelope = this.http.supportsLinkHeaders ? void 0 : format;
              params = params || {};
              var _method = method.toLowerCase();
              var headers = _method == "get" ? Utils.defaultGetHeaders(format) : Utils.defaultPostHeaders(format);
              if (callback === void 0) {
                if (this.options.promises) {
                  return Utils.promisify(this, "request", arguments);
                }
                callback = noop;
              }
              if (typeof body !== "string") {
                body = encoder(body);
              }
              if (this.options.headers) {
                Utils.mixin(headers, this.options.headers);
              }
              if (customHeaders) {
                Utils.mixin(headers, customHeaders);
              }
              var paginatedResource = new paginatedresource_1["default"](this, path, headers, envelope, function(resbody, headers2, unpacked) {
                return Utils.ensureArray(unpacked ? resbody : decoder(resbody));
              }, true);
              if (!Utils.arrIn(platform_1["default"].Http.methods, _method)) {
                throw new errorinfo_1["default"]("Unsupported method " + _method, 40500, 405);
              }
              if (Utils.arrIn(platform_1["default"].Http.methodsWithBody, _method)) {
                paginatedResource[_method](params, body, callback);
              } else {
                paginatedResource[_method](params, callback);
              }
            };
            Rest3.prototype.setLog = function(logOptions) {
              logger_1["default"].setLog(logOptions.level, logOptions.handler);
            };
            Rest3.Promise = function(options) {
              options = defaults_1["default"].objectifyOptions(options);
              options.promises = true;
              return new Rest3(options);
            };
            Rest3.Callbacks = Rest3;
            Rest3.Platform = platform_1["default"];
            return Rest3;
          }();
          var Channels = function() {
            function Channels2(rest) {
              this.rest = rest;
              this.all = {};
            }
            Channels2.prototype.get = function(name, channelOptions) {
              name = String(name);
              var channel = this.all[name];
              if (!channel) {
                this.all[name] = channel = new channel_1["default"](this.rest, name, channelOptions);
              } else if (channelOptions) {
                channel.setOptions(channelOptions);
              }
              return channel;
            };
            Channels2.prototype.release = function(name) {
              delete this.all[String(name)];
            };
            return Channels2;
          }();
          exports2["default"] = Rest2;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(5));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var presence_1 = tslib_1.__importDefault(__webpack_require__(29));
          var message_1 = tslib_1.__importDefault(__webpack_require__(7));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var paginatedresource_1 = tslib_1.__importDefault(__webpack_require__(15));
          var resource_1 = tslib_1.__importDefault(__webpack_require__(22));
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          function noop() {
          }
          var MSG_ID_ENTROPY_BYTES = 9;
          function allEmptyIds(messages) {
            return Utils.arrEvery(messages, function(message) {
              return !message.id;
            });
          }
          function normaliseChannelOptions(options) {
            var channelOptions = options || {};
            if (channelOptions.cipher) {
              if (!platform_1["default"].Crypto)
                throw new Error("Encryption not enabled; use ably.encryption.js instead");
              var cipher = platform_1["default"].Crypto.getCipher(channelOptions.cipher);
              channelOptions.cipher = cipher.cipherParams;
              channelOptions.channelCipher = cipher.cipher;
            } else if ("cipher" in channelOptions) {
              channelOptions.cipher = void 0;
              channelOptions.channelCipher = null;
            }
            return channelOptions;
          }
          var Channel = function(_super) {
            tslib_1.__extends(Channel2, _super);
            function Channel2(rest, name, channelOptions) {
              var _this = _super.call(this) || this;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Channel()", "started; name = " + name);
              _this.rest = rest;
              _this.name = name;
              _this.basePath = "/channels/" + encodeURIComponent(name);
              _this.presence = new presence_1["default"](_this);
              _this.channelOptions = normaliseChannelOptions(channelOptions);
              return _this;
            }
            Channel2.prototype.setOptions = function(options) {
              this.channelOptions = normaliseChannelOptions(options);
            };
            Channel2.prototype.history = function(params, callback) {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Channel.history()", "channel = " + this.name);
              if (callback === void 0) {
                if (typeof params == "function") {
                  callback = params;
                  params = null;
                } else {
                  if (this.rest.options.promises) {
                    return Utils.promisify(this, "history", arguments);
                  }
                  callback = noop;
                }
              }
              this._history(params, callback);
            };
            Channel2.prototype._history = function(params, callback) {
              var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.rest.http.supportsLinkHeaders ? void 0 : format, headers = Utils.defaultGetHeaders(format);
              if (rest.options.headers)
                Utils.mixin(headers, rest.options.headers);
              var options = this.channelOptions;
              new paginatedresource_1["default"](rest, this.basePath + "/messages", headers, envelope, function(body, headers2, unpacked) {
                return message_1["default"].fromResponseBody(body, options, unpacked ? void 0 : format);
              }).get(params, callback);
            };
            Channel2.prototype.publish = function() {
              var _this = this;
              var argCount = arguments.length, first = arguments[0], second = arguments[1];
              var callback = arguments[argCount - 1];
              var messages;
              var params;
              if (typeof callback !== "function") {
                if (this.rest.options.promises) {
                  return Utils.promisify(this, "publish", arguments);
                }
                callback = noop;
              }
              if (typeof first === "string" || first === null) {
                messages = [message_1["default"].fromValues({ name: first, data: second })];
                params = arguments[2];
              } else if (Utils.isObject(first)) {
                messages = [message_1["default"].fromValues(first)];
                params = arguments[1];
              } else if (Utils.isArray(first)) {
                messages = message_1["default"].fromValuesArray(first);
                params = arguments[1];
              } else {
                throw new errorinfo_1["default"]("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
              }
              if (typeof params !== "object" || !params) {
                params = {};
              }
              var rest = this.rest, options = rest.options, format = options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, idempotentRestPublishing = rest.options.idempotentRestPublishing, headers = Utils.defaultPostHeaders(format);
              if (options.headers)
                Utils.mixin(headers, options.headers);
              if (idempotentRestPublishing && allEmptyIds(messages)) {
                var msgIdBase_1 = Utils.randomString(MSG_ID_ENTROPY_BYTES);
                Utils.arrForEach(messages, function(message, index) {
                  message.id = msgIdBase_1 + ":" + index.toString();
                });
              }
              message_1["default"].encodeArray(messages, this.channelOptions, function(err) {
                if (err) {
                  callback(err);
                  return;
                }
                var size = message_1["default"].getMessagesSize(messages), maxMessageSize = options.maxMessageSize;
                if (size > maxMessageSize) {
                  callback(new errorinfo_1["default"]("Maximum size of messages that can be published at once exceeded ( was " + size + " bytes; limit is " + maxMessageSize + " bytes)", 40009, 400));
                  return;
                }
                _this._publish(message_1["default"].serialize(messages, format), headers, params, callback);
              });
            };
            Channel2.prototype._publish = function(requestBody, headers, params, callback) {
              resource_1["default"].post(this.rest, this.basePath + "/messages", requestBody, headers, params, null, callback);
            };
            Channel2.prototype.status = function(callback) {
              if (typeof callback !== "function" && this.rest.options.promises) {
                return Utils.promisify(this, "status", []);
              }
              var format = this.rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json;
              var headers = Utils.defaultPostHeaders(format);
              resource_1["default"].get(this.rest, this.basePath, headers, {}, format, callback || noop);
            };
            return Channel2;
          }(eventemitter_1["default"]);
          exports2["default"] = Channel;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(5));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var paginatedresource_1 = tslib_1.__importDefault(__webpack_require__(15));
          var presencemessage_1 = tslib_1.__importDefault(__webpack_require__(11));
          function noop() {
          }
          var Presence = function(_super) {
            tslib_1.__extends(Presence2, _super);
            function Presence2(channel) {
              var _this = _super.call(this) || this;
              _this.channel = channel;
              _this.basePath = channel.basePath + "/presence";
              return _this;
            }
            Presence2.prototype.get = function(params, callback) {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Presence.get()", "channel = " + this.channel.name);
              if (callback === void 0) {
                if (typeof params == "function") {
                  callback = params;
                  params = null;
                } else {
                  if (this.channel.rest.options.promises) {
                    return Utils.promisify(this, "get", arguments);
                  }
                  callback = noop;
                }
              }
              var rest = this.channel.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.channel.rest.http.supportsLinkHeaders ? void 0 : format, headers = Utils.defaultGetHeaders(format);
              if (rest.options.headers)
                Utils.mixin(headers, rest.options.headers);
              var options = this.channel.channelOptions;
              new paginatedresource_1["default"](rest, this.basePath, headers, envelope, function(body, headers2, unpacked) {
                return presencemessage_1["default"].fromResponseBody(body, options, unpacked ? void 0 : format);
              }).get(params, callback);
            };
            Presence2.prototype.history = function(params, callback) {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Presence.history()", "channel = " + this.channel.name);
              this._history(params, callback);
            };
            Presence2.prototype._history = function(params, callback) {
              if (callback === void 0) {
                if (typeof params == "function") {
                  callback = params;
                  params = null;
                } else {
                  if (this.channel.rest.options.promises) {
                    return Utils.promisify(this, "_history", arguments);
                  }
                  callback = noop;
                }
              }
              var rest = this.channel.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.channel.rest.http.supportsLinkHeaders ? void 0 : format, headers = Utils.defaultGetHeaders(format);
              if (rest.options.headers)
                Utils.mixin(headers, rest.options.headers);
              var options = this.channel.channelOptions;
              new paginatedresource_1["default"](rest, this.basePath + "/history", headers, envelope, function(body, headers2, unpacked) {
                return presencemessage_1["default"].fromResponseBody(body, options, unpacked ? void 0 : format);
              }).get(params, callback);
            };
            return Presence2;
          }(eventemitter_1["default"]);
          exports2["default"] = Presence;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(5));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var MessageQueue = function(_super) {
            tslib_1.__extends(MessageQueue2, _super);
            function MessageQueue2() {
              var _this = _super.call(this) || this;
              _this.messages = [];
              return _this;
            }
            MessageQueue2.prototype.count = function() {
              return this.messages.length;
            };
            MessageQueue2.prototype.push = function(message) {
              this.messages.push(message);
            };
            MessageQueue2.prototype.shift = function() {
              return this.messages.shift();
            };
            MessageQueue2.prototype.last = function() {
              return this.messages[this.messages.length - 1];
            };
            MessageQueue2.prototype.copyAll = function() {
              return this.messages.slice();
            };
            MessageQueue2.prototype.append = function(messages) {
              this.messages.push.apply(this.messages, messages);
            };
            MessageQueue2.prototype.prepend = function(messages) {
              this.messages.unshift.apply(this.messages, messages);
            };
            MessageQueue2.prototype.completeMessages = function(serial, count, err) {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "MessageQueue.completeMessages()", "serial = " + serial + "; count = " + count);
              err = err || null;
              var messages = this.messages;
              if (messages.length === 0) {
                throw new Error("MessageQueue.completeMessages(): completeMessages called on any empty MessageQueue");
              }
              var first = messages[0];
              if (first) {
                var startSerial = first.message.msgSerial;
                var endSerial = serial + count;
                if (endSerial > startSerial) {
                  var completeMessages = messages.splice(0, endSerial - startSerial);
                  for (var _i = 0, completeMessages_1 = completeMessages; _i < completeMessages_1.length; _i++) {
                    var message = completeMessages_1[_i];
                    message.callback(err);
                  }
                }
                if (messages.length == 0)
                  this.emit("idle");
              }
            };
            MessageQueue2.prototype.completeAllMessages = function(err) {
              this.completeMessages(0, Number.MAX_SAFE_INTEGER || Number.MAX_VALUE, err);
            };
            MessageQueue2.prototype.clear = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "MessageQueue.clear()", "clearing " + this.messages.length + " messages");
              this.messages = [];
              this.emit("idle");
            };
            return MessageQueue2;
          }(eventemitter_1["default"]);
          exports2["default"] = MessageQueue;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var ConnectionStateChange = function() {
            function ConnectionStateChange2(previous, current, retryIn, reason) {
              this.previous = previous;
              this.current = current;
              if (retryIn)
                this.retryIn = retryIn;
              if (reason)
                this.reason = reason;
            }
            return ConnectionStateChange2;
          }();
          exports2["default"] = ConnectionStateChange;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(8));
          var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(5));
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var channel_1 = tslib_1.__importDefault(__webpack_require__(28));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var realtimepresence_1 = tslib_1.__importDefault(__webpack_require__(50));
          var message_1 = tslib_1.__importDefault(__webpack_require__(7));
          var channelstatechange_1 = tslib_1.__importDefault(__webpack_require__(33));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var presencemessage_1 = tslib_1.__importDefault(__webpack_require__(11));
          var connectionerrors_1 = tslib_1.__importDefault(__webpack_require__(16));
          var actions = protocolmessage_1["default"].Action;
          var noop = function() {
          };
          var statechangeOp = "statechange";
          var syncOp = "sync";
          function validateChannelOptions(options) {
            if (options && "params" in options && !Utils.isObject(options.params)) {
              return new errorinfo_1["default"]("options.params must be an object", 4e4, 400);
            }
            if (options && "modes" in options) {
              if (!Utils.isArray(options.modes)) {
                return new errorinfo_1["default"]("options.modes must be an array", 4e4, 400);
              }
              for (var i = 0; i < options.modes.length; i++) {
                var currentMode = options.modes[i];
                if (!currentMode || typeof currentMode !== "string" || !Utils.arrIn(protocolmessage_1["default"].channelModes, String.prototype.toUpperCase.call(currentMode))) {
                  return new errorinfo_1["default"]("Invalid channel mode: " + currentMode, 4e4, 400);
                }
              }
            }
          }
          var RealtimeChannel = function(_super) {
            tslib_1.__extends(RealtimeChannel2, _super);
            function RealtimeChannel2(realtime, name, options) {
              var _this = _super.call(this, realtime, name, options) || this;
              _this.retryCount = 0;
              _this.history = function(params, callback) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "RealtimeChannel.history()", "channel = " + this.name);
                if (callback === void 0) {
                  if (typeof params == "function") {
                    callback = params;
                    params = null;
                  } else {
                    if (this.rest.options.promises) {
                      return Utils.promisify(this, "history", arguments);
                    }
                    callback = noop;
                  }
                }
                if (params && params.untilAttach) {
                  if (this.state !== "attached") {
                    callback(new errorinfo_1["default"]("option untilAttach requires the channel to be attached", 4e4, 400));
                    return;
                  }
                  if (!this.properties.attachSerial) {
                    callback(new errorinfo_1["default"]("untilAttach was specified and channel is attached, but attachSerial is not defined", 4e4, 400));
                    return;
                  }
                  delete params.untilAttach;
                  params.from_serial = this.properties.attachSerial;
                }
                channel_1["default"].prototype._history.call(this, params, callback);
              };
              _this.whenState = function(state, listener) {
                return eventemitter_1["default"].prototype.whenState.call(_this, state, _this.state, listener);
              };
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "RealtimeChannel()", "started; name = " + name);
              _this.realtime = realtime;
              _this.presence = new realtimepresence_1["default"](_this);
              _this.connectionManager = realtime.connection.connectionManager;
              _this.state = "initialized";
              _this.subscriptions = new eventemitter_1["default"]();
              _this.syncChannelSerial = void 0;
              _this.properties = {
                attachSerial: void 0
              };
              _this.setOptions(options);
              _this.errorReason = null;
              _this._requestedFlags = null;
              _this._mode = null;
              _this._attachedMsgIndicator = false;
              _this._attachResume = false;
              _this._decodingContext = {
                channelOptions: _this.channelOptions,
                plugins: realtime.options.plugins || {},
                baseEncodedPreviousPayload: void 0
              };
              _this._lastPayload = {
                messageId: null,
                protocolMessageChannelSerial: null,
                decodeFailureRecoveryInProgress: null
              };
              _this._allChannelChanges = new eventemitter_1["default"]();
              return _this;
            }
            RealtimeChannel2.invalidStateError = function(state) {
              return {
                statusCode: 400,
                code: 90001,
                message: "Channel operation failed as channel state is " + state
              };
            };
            RealtimeChannel2.processListenerArgs = function(args) {
              args = Array.prototype.slice.call(args);
              if (typeof args[0] === "function") {
                args.unshift(null);
              }
              if (args[args.length - 1] == void 0) {
                args.pop();
              }
              return args;
            };
            RealtimeChannel2.prototype.setOptions = function(options, callback) {
              if (!callback) {
                if (this.rest.options.promises) {
                  return Utils.promisify(this, "setOptions", arguments);
                }
              }
              var _callback = callback || function(err2) {
                if (err2) {
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "RealtimeChannel.setOptions()", "Set options failed: " + err2.toString());
                }
              };
              var err = validateChannelOptions(options);
              if (err) {
                _callback(err);
                return;
              }
              channel_1["default"].prototype.setOptions.call(this, options);
              if (this._decodingContext)
                this._decodingContext.channelOptions = this.channelOptions;
              if (this._shouldReattachToSetOptions(options)) {
                this.attachImpl();
                this._allChannelChanges.once(function(stateChange) {
                  switch (this.event) {
                    case "update":
                    case "attached":
                      _callback === null || _callback === void 0 ? void 0 : _callback(null);
                      return;
                    default:
                      _callback === null || _callback === void 0 ? void 0 : _callback(stateChange.reason);
                      return;
                  }
                });
              } else {
                _callback();
              }
            };
            RealtimeChannel2.prototype._shouldReattachToSetOptions = function(options) {
              return (this.state === "attached" || this.state === "attaching") && (options.params || options.modes);
            };
            RealtimeChannel2.prototype.publish = function() {
              var _this = this;
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              var messages = args[0];
              var argCount = args.length;
              var callback = args[argCount - 1];
              if (typeof callback !== "function") {
                if (this.realtime.options.promises) {
                  return Utils.promisify(this, "publish", arguments);
                }
                callback = noop;
                ++argCount;
              }
              if (!this.connectionManager.activeState()) {
                callback(this.connectionManager.getError());
                return;
              }
              if (argCount == 2) {
                if (Utils.isObject(messages))
                  messages = [message_1["default"].fromValues(messages)];
                else if (Utils.isArray(messages))
                  messages = message_1["default"].fromValuesArray(messages);
                else
                  throw new errorinfo_1["default"]("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
              } else {
                messages = [message_1["default"].fromValues({ name: args[0], data: args[1] })];
              }
              var maxMessageSize = this.realtime.options.maxMessageSize;
              message_1["default"].encodeArray(messages, this.channelOptions, function(err) {
                if (err) {
                  callback(err);
                  return;
                }
                var size = message_1["default"].getMessagesSize(messages);
                if (size > maxMessageSize) {
                  callback(new errorinfo_1["default"]("Maximum size of messages that can be published at once exceeded ( was " + size + " bytes; limit is " + maxMessageSize + " bytes)", 40009, 400));
                  return;
                }
                _this.__publish(messages, callback);
              });
            };
            RealtimeChannel2.prototype.__publish = function(messages, callback) {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "RealtimeChannel.publish()", "message count = " + messages.length);
              var state = this.state;
              switch (state) {
                case "failed":
                case "suspended":
                  callback(errorinfo_1["default"].fromValues(RealtimeChannel2.invalidStateError(state)));
                  break;
                default: {
                  logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "RealtimeChannel.publish()", "sending message; channel state is " + state);
                  var msg = new protocolmessage_1["default"]();
                  msg.action = actions.MESSAGE;
                  msg.channel = this.name;
                  msg.messages = messages;
                  this.sendMessage(msg, callback);
                  break;
                }
              }
            };
            RealtimeChannel2.prototype.onEvent = function(messages) {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "RealtimeChannel.onEvent()", "received message");
              var subscriptions = this.subscriptions;
              for (var i = 0; i < messages.length; i++) {
                var message = messages[i];
                subscriptions.emit(message.name, message);
              }
            };
            RealtimeChannel2.prototype.attach = function(flags, callback) {
              var _flags;
              if (typeof flags === "function") {
                callback = flags;
                _flags = null;
              } else {
                _flags = flags;
              }
              if (!callback) {
                if (this.realtime.options.promises) {
                  return Utils.promisify(this, "attach", arguments);
                }
                callback = function(err) {
                  if (err) {
                    logger_1["default"].logAction(logger_1["default"].LOG_MAJOR, "RealtimeChannel.attach()", "Channel attach failed: " + err.toString());
                  }
                };
              }
              if (_flags) {
                logger_1["default"].deprecated("channel.attach() with flags", "channel.setOptions() with channelOptions.params");
                this._requestedFlags = _flags;
              } else if (this.state === "attached") {
                callback();
                return;
              }
              this._attach(false, null, callback);
            };
            RealtimeChannel2.prototype._attach = function(forceReattach, attachReason, callback) {
              if (!callback) {
                callback = function(err) {
                  if (err) {
                    logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "RealtimeChannel._attach()", "Channel attach failed: " + err.toString());
                  }
                };
              }
              var connectionManager = this.connectionManager;
              if (!connectionManager.activeState()) {
                callback(connectionManager.getError());
                return;
              }
              if (this.state !== "attaching" || forceReattach) {
                this.requestState("attaching", attachReason);
              }
              this.once(function(stateChange) {
                switch (this.event) {
                  case "attached":
                    callback === null || callback === void 0 ? void 0 : callback();
                    break;
                  case "detached":
                  case "suspended":
                  case "failed":
                    callback === null || callback === void 0 ? void 0 : callback(stateChange.reason || connectionManager.getError() || new errorinfo_1["default"]("Unable to attach; reason unknown; state = " + this.event, 9e4, 500));
                    break;
                  case "detaching":
                    callback === null || callback === void 0 ? void 0 : callback(new errorinfo_1["default"]("Attach request superseded by a subsequent detach request", 9e4, 409));
                    break;
                }
              });
            };
            RealtimeChannel2.prototype.attachImpl = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "RealtimeChannel.attachImpl()", "sending ATTACH message");
              this.setInProgress(statechangeOp, true);
              var attachMsg = protocolmessage_1["default"].fromValues({
                action: actions.ATTACH,
                channel: this.name,
                params: this.channelOptions.params
              });
              if (this._requestedFlags) {
                attachMsg.encodeModesToFlags(this._requestedFlags);
              } else if (this.channelOptions.modes) {
                attachMsg.encodeModesToFlags(Utils.allToUpperCase(this.channelOptions.modes));
              }
              if (this._attachResume) {
                attachMsg.setFlag("ATTACH_RESUME");
              }
              if (this._lastPayload.decodeFailureRecoveryInProgress) {
                attachMsg.channelSerial = this._lastPayload.protocolMessageChannelSerial;
              }
              this.sendMessage(attachMsg, noop);
            };
            RealtimeChannel2.prototype.detach = function(callback) {
              if (!callback) {
                if (this.realtime.options.promises) {
                  return Utils.promisify(this, "detach", arguments);
                }
                callback = noop;
              }
              var connectionManager = this.connectionManager;
              if (!connectionManager.activeState()) {
                callback(connectionManager.getError());
                return;
              }
              switch (this.state) {
                case "suspended":
                  this.notifyState("detached");
                  callback();
                  break;
                case "detached":
                  callback();
                  break;
                case "failed":
                  callback(new errorinfo_1["default"]("Unable to detach; channel state = failed", 90001, 400));
                  break;
                default:
                  this.requestState("detaching");
                case "detaching":
                  this.once(function(stateChange) {
                    switch (this.event) {
                      case "detached":
                        callback();
                        break;
                      case "attached":
                      case "suspended":
                      case "failed":
                        callback(stateChange.reason || connectionManager.getError() || new errorinfo_1["default"]("Unable to detach; reason unknown; state = " + this.event, 9e4, 500));
                        break;
                      case "attaching":
                        callback(new errorinfo_1["default"]("Detach request superseded by a subsequent attach request", 9e4, 409));
                        break;
                    }
                  });
              }
            };
            RealtimeChannel2.prototype.detachImpl = function(callback) {
              if (this.connectionManager.mostRecentMsg && this.connectionManager.mostRecentMsg.channel === this.name) {
                this.connectionManager.mostRecentMsg = null;
              }
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "RealtimeChannel.detach()", "sending DETACH message");
              this.setInProgress(statechangeOp, true);
              var msg = protocolmessage_1["default"].fromValues({ action: actions.DETACH, channel: this.name });
              this.sendMessage(msg, callback || noop);
            };
            RealtimeChannel2.prototype.subscribe = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              var _a = RealtimeChannel2.processListenerArgs(args), event = _a[0], listener = _a[1], callback = _a[2];
              if (!callback && this.realtime.options.promises) {
                return Utils.promisify(this, "subscribe", [event, listener]);
              }
              if (this.state === "failed") {
                callback === null || callback === void 0 ? void 0 : callback(errorinfo_1["default"].fromValues(RealtimeChannel2.invalidStateError("failed")));
                return;
              }
              if (event && typeof event === "object" && !Array.isArray(event)) {
                this._subscribeFilter(event, listener);
              } else {
                this.subscriptions.on(event, listener);
              }
              return this.attach(callback || noop);
            };
            RealtimeChannel2.prototype._subscribeFilter = function(filter, listener) {
              var filteredListener = function(m) {
                var _a, _b, _c, _d, _e, _f;
                var mapping = {
                  name: m.name,
                  refTimeserial: (_b = (_a = m.extras) === null || _a === void 0 ? void 0 : _a.ref) === null || _b === void 0 ? void 0 : _b.timeserial,
                  refType: (_d = (_c = m.extras) === null || _c === void 0 ? void 0 : _c.ref) === null || _d === void 0 ? void 0 : _d.type,
                  isRef: !!((_f = (_e = m.extras) === null || _e === void 0 ? void 0 : _e.ref) === null || _f === void 0 ? void 0 : _f.timeserial),
                  clientId: m.clientId
                };
                if (Object.entries(filter).find(function(_a2) {
                  var key = _a2[0], value = _a2[1];
                  return value !== void 0 ? mapping[key] !== value : false;
                })) {
                  return;
                }
                listener(m);
              };
              this._addFilteredSubscription(filter, listener, filteredListener);
              this.subscriptions.on(filteredListener);
            };
            RealtimeChannel2.prototype._addFilteredSubscription = function(filter, realListener, filteredListener) {
              var _a;
              if (!this.filteredSubscriptions) {
                this.filteredSubscriptions = /* @__PURE__ */ new Map();
              }
              if (this.filteredSubscriptions.has(realListener)) {
                var realListenerMap = this.filteredSubscriptions.get(realListener);
                realListenerMap.set(filter, ((_a = realListenerMap === null || realListenerMap === void 0 ? void 0 : realListenerMap.get(filter)) === null || _a === void 0 ? void 0 : _a.concat(filteredListener)) || [filteredListener]);
              } else {
                this.filteredSubscriptions.set(realListener, /* @__PURE__ */ new Map([[filter, [filteredListener]]]));
              }
            };
            RealtimeChannel2.prototype._getAndDeleteFilteredSubscriptions = function(filter, realListener) {
              var _this = this;
              if (!this.filteredSubscriptions) {
                return [];
              }
              if (!realListener && filter) {
                return Array.from(this.filteredSubscriptions.entries()).map(function(_a) {
                  var _b;
                  var key = _a[0], filterMaps = _a[1];
                  var listenerMaps = filterMaps.get(filter);
                  filterMaps["delete"](filter);
                  if (filterMaps.size === 0) {
                    (_b = _this.filteredSubscriptions) === null || _b === void 0 ? void 0 : _b["delete"](key);
                  }
                  return listenerMaps;
                }).reduce(function(prev, cur) {
                  var _a;
                  return cur ? (_a = prev).concat.apply(_a, cur) : prev;
                }, []);
              }
              if (!realListener || !this.filteredSubscriptions.has(realListener)) {
                return [];
              }
              var realListenerMap = this.filteredSubscriptions.get(realListener);
              if (!filter) {
                var listeners_1 = Array.from(realListenerMap.values()).reduce(function(prev, cur) {
                  return prev.concat.apply(prev, cur);
                }, []);
                this.filteredSubscriptions["delete"](realListener);
                return listeners_1;
              }
              var listeners = realListenerMap.get(filter);
              realListenerMap["delete"](filter);
              return listeners || [];
            };
            RealtimeChannel2.prototype.unsubscribe = function() {
              var _this = this;
              var _a;
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              var _b = RealtimeChannel2.processListenerArgs(args), event = _b[0], listener = _b[1];
              if (typeof event === "object" && !listener || ((_a = this.filteredSubscriptions) === null || _a === void 0 ? void 0 : _a.has(listener))) {
                this._getAndDeleteFilteredSubscriptions(event, listener).forEach(function(l) {
                  return _this.subscriptions.off(l);
                });
                return;
              }
              this.subscriptions.off(event, listener);
            };
            RealtimeChannel2.prototype.sync = function() {
              switch (this.state) {
                case "initialized":
                case "detaching":
                case "detached":
                  throw new errorinfo_1["default"]("Unable to sync to channel; not attached", 4e4);
                default:
              }
              var connectionManager = this.connectionManager;
              if (!connectionManager.activeState()) {
                throw connectionManager.getError();
              }
              var syncMessage = protocolmessage_1["default"].fromValues({ action: actions.SYNC, channel: this.name });
              if (this.syncChannelSerial) {
                syncMessage.channelSerial = this.syncChannelSerial;
              }
              connectionManager.send(syncMessage);
            };
            RealtimeChannel2.prototype.sendMessage = function(msg, callback) {
              this.connectionManager.send(msg, this.realtime.options.queueMessages, callback);
            };
            RealtimeChannel2.prototype.sendPresence = function(presence, callback) {
              var msg = protocolmessage_1["default"].fromValues({
                action: actions.PRESENCE,
                channel: this.name,
                presence: Utils.isArray(presence) ? presencemessage_1["default"].fromValuesArray(presence) : [presencemessage_1["default"].fromValues(presence)]
              });
              this.sendMessage(msg, callback);
            };
            RealtimeChannel2.prototype.onMessage = function(message) {
              var syncChannelSerial, isSync = false;
              switch (message.action) {
                case actions.ATTACHED: {
                  this._attachedMsgIndicator = true;
                  this.properties.attachSerial = message.channelSerial;
                  this._mode = message.getMode();
                  this.params = message.params || {};
                  var modesFromFlags = message.decodeModesFromFlags();
                  this.modes = modesFromFlags && Utils.allToLowerCase(modesFromFlags) || void 0;
                  var resumed = message.hasFlag("RESUMED");
                  var hasPresence = message.hasFlag("HAS_PRESENCE");
                  if (this.state === "attached") {
                    this.setInProgress(statechangeOp, false);
                    if (!resumed) {
                      this.presence.onAttached(hasPresence);
                    }
                    var change = new channelstatechange_1["default"](this.state, this.state, resumed, message.error);
                    this._allChannelChanges.emit("update", change);
                    if (!resumed || this.channelOptions.updateOnAttached) {
                      this.emit("update", change);
                    }
                  } else if (this.state === "detaching") {
                    this.checkPendingState();
                  } else {
                    this.notifyState("attached", message.error, resumed, hasPresence);
                  }
                  break;
                }
                case actions.DETACHED: {
                  var detachErr = message.error ? errorinfo_1["default"].fromValues(message.error) : new errorinfo_1["default"]("Channel detached", 90001, 404);
                  if (this.state === "detaching") {
                    this.notifyState("detached", detachErr);
                  } else if (this.state === "attaching") {
                    this.notifyState("suspended", detachErr);
                  } else {
                    this.requestState("attaching", detachErr);
                  }
                  break;
                }
                case actions.SYNC:
                  isSync = true;
                  syncChannelSerial = this.syncChannelSerial = message.channelSerial;
                  if (!message.presence)
                    break;
                case actions.PRESENCE: {
                  var presence = message.presence;
                  var id = message.id, connectionId = message.connectionId, timestamp = message.timestamp;
                  var options = this.channelOptions;
                  var presenceMsg = void 0;
                  for (var i = 0; i < presence.length; i++) {
                    try {
                      presenceMsg = presence[i];
                      presencemessage_1["default"].decode(presenceMsg, options);
                      if (!presenceMsg.connectionId)
                        presenceMsg.connectionId = connectionId;
                      if (!presenceMsg.timestamp)
                        presenceMsg.timestamp = timestamp;
                      if (!presenceMsg.id)
                        presenceMsg.id = id + ":" + i;
                    } catch (e) {
                      logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "RealtimeChannel.onMessage()", e.toString());
                    }
                  }
                  this.presence.setPresence(presence, isSync, syncChannelSerial);
                  break;
                }
                case actions.MESSAGE: {
                  if (this.state !== "attached") {
                    logger_1["default"].logAction(logger_1["default"].LOG_MAJOR, "RealtimeChannel.onMessage()", 'Message "' + message.id + '" skipped as this channel "' + this.name + '" state is not "attached" (state is "' + this.state + '").');
                    return;
                  }
                  var messages = message.messages, firstMessage = messages[0], lastMessage = messages[messages.length - 1], id = message.id, connectionId = message.connectionId, timestamp = message.timestamp;
                  if (firstMessage.extras && firstMessage.extras.delta && firstMessage.extras.delta.from !== this._lastPayload.messageId) {
                    var msg = 'Delta message decode failure - previous message not available for message "' + message.id + '" on this channel "' + this.name + '".';
                    logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "RealtimeChannel.onMessage()", msg);
                    this._startDecodeFailureRecovery(new errorinfo_1["default"](msg, 40018, 400));
                    break;
                  }
                  for (var i = 0; i < messages.length; i++) {
                    var msg = messages[i];
                    try {
                      message_1["default"].decode(msg, this._decodingContext);
                    } catch (e) {
                      logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "RealtimeChannel.onMessage()", e.toString());
                      switch (e.code) {
                        case 40018:
                          this._startDecodeFailureRecovery(e);
                          return;
                        case 40019:
                        case 40021:
                          this.notifyState("failed", e);
                          return;
                      }
                    }
                    if (!msg.connectionId)
                      msg.connectionId = connectionId;
                    if (!msg.timestamp)
                      msg.timestamp = timestamp;
                    if (!msg.id)
                      msg.id = id + ":" + i;
                  }
                  this._lastPayload.messageId = lastMessage.id;
                  this._lastPayload.protocolMessageChannelSerial = message.channelSerial;
                  this.onEvent(messages);
                  break;
                }
                case actions.ERROR: {
                  var err = message.error;
                  if (err && err.code == 80016) {
                    this.checkPendingState();
                  } else {
                    this.notifyState("failed", errorinfo_1["default"].fromValues(err));
                  }
                  break;
                }
                default:
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "RealtimeChannel.onMessage()", "Fatal protocol error: unrecognised action (" + message.action + ")");
                  this.connectionManager.abort(connectionerrors_1["default"].unknownChannelErr);
              }
            };
            RealtimeChannel2.prototype._startDecodeFailureRecovery = function(reason) {
              var _this = this;
              if (!this._lastPayload.decodeFailureRecoveryInProgress) {
                logger_1["default"].logAction(logger_1["default"].LOG_MAJOR, "RealtimeChannel.onMessage()", "Starting decode failure recovery process.");
                this._lastPayload.decodeFailureRecoveryInProgress = true;
                this._attach(true, reason, function() {
                  _this._lastPayload.decodeFailureRecoveryInProgress = false;
                });
              }
            };
            RealtimeChannel2.prototype.onAttached = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "RealtimeChannel.onAttached", "activating channel; name = " + this.name);
            };
            RealtimeChannel2.prototype.notifyState = function(state, reason, resumed, hasPresence) {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "RealtimeChannel.notifyState", "name = " + this.name + ", current state = " + this.state + ", notifying state " + state);
              this.clearStateTimer();
              if (state === this.state) {
                return;
              }
              this.presence.actOnChannelState(state, hasPresence, reason);
              if (state === "suspended" && this.connectionManager.state.sendEvents) {
                this.startRetryTimer();
              } else {
                this.cancelRetryTimer();
              }
              if (reason) {
                this.errorReason = reason;
              }
              var change = new channelstatechange_1["default"](this.state, state, resumed, reason);
              var logLevel = state === "failed" ? logger_1["default"].LOG_ERROR : logger_1["default"].LOG_MAJOR;
              logger_1["default"].logAction(logLevel, 'Channel state for channel "' + this.name + '"', state + (reason ? "; reason: " + reason : ""));
              if (state !== "attaching" && state !== "suspended") {
                this.retryCount = 0;
              }
              if (state === "attached") {
                this.onAttached();
                this.setInProgress(syncOp, hasPresence);
                this.setInProgress(statechangeOp, false);
              } else if (state === "detached" || state === "failed" || state === "suspended") {
                this.setInProgress(statechangeOp, false);
                this.setInProgress(syncOp, false);
              }
              if (state === "attached") {
                this._attachResume = true;
              } else if (state === "detaching" || state === "failed") {
                this._attachResume = false;
              }
              this.state = state;
              this._allChannelChanges.emit(state, change);
              this.emit(state, change);
            };
            RealtimeChannel2.prototype.requestState = function(state, reason) {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "RealtimeChannel.requestState", "name = " + this.name + ", state = " + state);
              this.notifyState(state, reason);
              this.checkPendingState();
            };
            RealtimeChannel2.prototype.checkPendingState = function() {
              var cmState = this.connectionManager.state;
              if (!(cmState.sendEvents || cmState.forceQueueEvents)) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "RealtimeChannel.checkPendingState", "sendEvents is false; state is " + this.connectionManager.state.state);
                return;
              }
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "RealtimeChannel.checkPendingState", "name = " + this.name + ", state = " + this.state);
              switch (this.state) {
                case "attaching":
                  this.startStateTimerIfNotRunning();
                  this.attachImpl();
                  break;
                case "detaching":
                  this.startStateTimerIfNotRunning();
                  this.detachImpl();
                  break;
                case "attached":
                  this.sync();
                  break;
                default:
                  break;
              }
            };
            RealtimeChannel2.prototype.timeoutPendingState = function() {
              switch (this.state) {
                case "attaching": {
                  var err = new errorinfo_1["default"]("Channel attach timed out", 90007, 408);
                  this.notifyState("suspended", err);
                  break;
                }
                case "detaching": {
                  var err = new errorinfo_1["default"]("Channel detach timed out", 90007, 408);
                  this.notifyState("attached", err);
                  break;
                }
                default:
                  this.checkPendingState();
                  break;
              }
            };
            RealtimeChannel2.prototype.startStateTimerIfNotRunning = function() {
              var _this = this;
              if (!this.stateTimer) {
                this.stateTimer = setTimeout(function() {
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "RealtimeChannel.startStateTimerIfNotRunning", "timer expired");
                  _this.stateTimer = null;
                  _this.timeoutPendingState();
                }, this.realtime.options.timeouts.realtimeRequestTimeout);
              }
            };
            RealtimeChannel2.prototype.clearStateTimer = function() {
              var stateTimer = this.stateTimer;
              if (stateTimer) {
                clearTimeout(stateTimer);
                this.stateTimer = null;
              }
            };
            RealtimeChannel2.prototype.startRetryTimer = function() {
              var _this = this;
              if (this.retryTimer)
                return;
              this.retryCount++;
              var retryDelay = this.realtime.options.timeouts.channelRetryTimeout * Utils.getJitterCoefficient() * Utils.getBackoffCoefficient(this.retryCount);
              this.retryTimer = setTimeout(function() {
                if (_this.state === "suspended" && _this.connectionManager.state.sendEvents) {
                  _this.retryTimer = null;
                  logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "RealtimeChannel retry timer expired", "attempting a new attach");
                  _this.requestState("attaching");
                }
              }, retryDelay);
            };
            RealtimeChannel2.prototype.cancelRetryTimer = function() {
              if (this.retryTimer) {
                clearTimeout(this.retryTimer);
                this.retryTimer = null;
              }
            };
            RealtimeChannel2.prototype.setInProgress = function(operation, value) {
              this.rest.channels.setInProgress(this, operation, value);
            };
            RealtimeChannel2.prototype.getReleaseErr = function() {
              var s = this.state;
              if (s === "initialized" || s === "detached" || s === "failed") {
                return null;
              }
              return new errorinfo_1["default"]("Can only release a channel in a state where there is no possibility of further updates from the server being received (initialized, detached, or failed); was " + s, 90001, 400);
            };
            RealtimeChannel2.progressOps = {
              statechange: statechangeOp,
              sync: syncOp
            };
            return RealtimeChannel2;
          }(channel_1["default"]);
          exports2["default"] = RealtimeChannel;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var ChannelStateChange = function() {
            function ChannelStateChange2(previous, current, resumed, reason) {
              this.previous = previous;
              this.current = current;
              if (current === "attached")
                this.resumed = resumed;
              if (reason)
                this.reason = reason;
            }
            return ChannelStateChange2;
          }();
          exports2["default"] = ChannelStateChange;
        },
        function(module3, exports2) {
          module3.exports = require("url");
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var rest_1 = tslib_1.__importDefault(__webpack_require__(27));
          var realtime_1 = tslib_1.__importDefault(__webpack_require__(46));
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var bufferutils_1 = tslib_1.__importDefault(__webpack_require__(51));
          var crypto_1 = tslib_1.__importDefault(__webpack_require__(52));
          var http_1 = tslib_1.__importDefault(__webpack_require__(53));
          var platform_2 = tslib_1.__importDefault(__webpack_require__(55));
          var transport_1 = tslib_1.__importDefault(__webpack_require__(70));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var defaults_1 = __webpack_require__(6);
          var connectionmanager_1 = tslib_1.__importDefault(__webpack_require__(23));
          var defaults_2 = tslib_1.__importDefault(__webpack_require__(68));
          var message_1 = tslib_1.__importDefault(__webpack_require__(7));
          var presencemessage_1 = tslib_1.__importDefault(__webpack_require__(11));
          platform_1["default"].Crypto = crypto_1["default"];
          platform_1["default"].BufferUtils = bufferutils_1["default"];
          platform_1["default"].Http = http_1["default"];
          platform_1["default"].Config = platform_2["default"];
          platform_1["default"].Transports = transport_1["default"];
          platform_1["default"].WebStorage = null;
          rest_1["default"].Crypto = crypto_1["default"];
          realtime_1["default"].Crypto = crypto_1["default"];
          rest_1["default"].Message = message_1["default"];
          realtime_1["default"].Message = message_1["default"];
          rest_1["default"].PresenceMessage = presencemessage_1["default"];
          realtime_1["default"].PresenceMessage = presencemessage_1["default"];
          realtime_1["default"].ConnectionManager = connectionmanager_1["default"];
          logger_1["default"].initLogHandlers();
          platform_1["default"].Defaults = defaults_1.getDefaults(defaults_2["default"]);
          if (platform_1["default"].Config.agent) {
            platform_1["default"].Defaults.agent += " " + platform_1["default"].Config.agent;
          }
          exports2["default"] = {
            Rest: rest_1["default"],
            Realtime: realtime_1["default"],
            msgpack: null
          };
        },
        function(module3) {
          module3.exports = JSON.parse('{"name":"ably","description":"Realtime client library for Ably, the realtime messaging service","version":"1.2.29","license":"Apache-2.0","bugs":{"url":"https://github.com/ably/ably-js/issues","email":"support@ably.com"},"main":"./build/ably-node.js","typings":"./ably.d.ts","react-native":{"./build/ably-node.js":"./build/ably-reactnative.js"},"browser":{"./build/ably-node.js":"./build/ably-commonjs.js"},"files":["build/**","ably.d.ts","callbacks.d.ts","callbacks.js","promises.d.ts","promises.js","resources/**"],"dependencies":{"@ably/msgpack-js":"^0.4.0","got":"^11.8.2","ws":"^5.1"},"devDependencies":{"@ably/vcdiff-decoder":"1.0.4","@types/crypto-js":"^4.0.1","@types/node":"^15.0.0","@types/request":"^2.48.7","@types/ws":"^8.2.0","@typescript-eslint/eslint-plugin":"^5.14.0","@typescript-eslint/parser":"^5.14.0","async":"ably-forks/async#requirejs","aws-sdk":"^2.1075.0","chai":"^4.2.0","copy-webpack-plugin":"^6.4.1","cors":"~2.7","crypto-js":"ably-forks/crypto-js#crypto-lite","eslint":"^7.13.0","eslint-plugin-security":"^1.4.0","express":"^4.17.1","glob":"~4.4","google-closure-compiler":"^20180610.0.1","grunt":"^1.4.1","grunt-bump":"^0.3.1","grunt-cli":"~1.2.0","grunt-closure-tools":"^1.0.0","grunt-contrib-concat":"~0.5","grunt-shell":"~1.1","grunt-webpack":"^4.0.2","hexy":"~0.2","kexec":"ably-forks/node-kexec#update-for-node-12","minimist":"^1.2.5","mocha":"^8.1.3","null-loader":"^4.0.1","playwright":"^1.10.0","prettier":"^2.5.1","requirejs":"~2.1","shelljs":"~0.8","source-map-explorer":"^2.5.2","ts-loader":"^8.2.0","tsconfig-paths-webpack-plugin":"^3.5.2","tslib":"^2.3.1","typescript":"^4.2.4","webpack":"^4.44.2","webpack-cli":"^4.2.0"},"engines":{"node":">=5.10.x"},"repository":"ably/ably-js","jspm":{"registry":"npm","directories":{"lib":"browser/static"},"main":"ably"},"scripts":{"grunt":"grunt","test":"grunt test","test:node":"grunt test:node","test:webserver":"grunt test:webserver","test:playwright":"node test/support/runPlaywrightTests.js","concat":"grunt concat","build":"grunt build:all","build:node":"grunt build:node","build:browser":"grunt build:browser","requirejs":"grunt requirejs","lint":"eslint .","lint:fix":"eslint --fix .","check-closure-compiler":"grunt check-closure-compiler","prepare":"npm run build","format":"prettier --write --ignore-path .gitignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js","format:check":"prettier --check --ignore-path .gitignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js","sourcemap":"source-map-explorer build/ably.min.js","sourcemap:noencryption":"source-map-explorer build/ably.noencryption.min.js"}}');
        },
        function(module3, exports2, __webpack_require__) {
          ;
          (function(root, factory) {
            if (true) {
              module3.exports = exports2 = factory(__webpack_require__(10), __webpack_require__(38), __webpack_require__(39));
            } else {
            }
          })(this, function(CryptoJS) {
            return CryptoJS.HmacSHA256;
          });
        },
        function(module3, exports2, __webpack_require__) {
          ;
          (function(root, factory) {
            if (true) {
              module3.exports = exports2 = factory(__webpack_require__(10));
            } else {
            }
          })(this, function(CryptoJS) {
            (function(Math2) {
              var C = CryptoJS;
              var C_lib = C.lib;
              var WordArray = C_lib.WordArray;
              var Hasher = C_lib.Hasher;
              var C_algo = C.algo;
              var H = [];
              var K = [];
              (function() {
                function isPrime(n2) {
                  var sqrtN = Math2.sqrt(n2);
                  for (var factor = 2; factor <= sqrtN; factor++) {
                    if (!(n2 % factor)) {
                      return false;
                    }
                  }
                  return true;
                }
                function getFractionalBits(n2) {
                  return (n2 - (n2 | 0)) * 4294967296 | 0;
                }
                var n = 2;
                var nPrime = 0;
                while (nPrime < 64) {
                  if (isPrime(n)) {
                    if (nPrime < 8) {
                      H[nPrime] = getFractionalBits(Math2.pow(n, 1 / 2));
                    }
                    K[nPrime] = getFractionalBits(Math2.pow(n, 1 / 3));
                    nPrime++;
                  }
                  n++;
                }
              })();
              var W = [];
              var SHA256 = C_algo.SHA256 = Hasher.extend({
                _doReset: function() {
                  this._hash = new WordArray.init(H.slice(0));
                },
                _doProcessBlock: function(M, offset) {
                  var H2 = this._hash.words;
                  var a = H2[0];
                  var b = H2[1];
                  var c = H2[2];
                  var d = H2[3];
                  var e = H2[4];
                  var f = H2[5];
                  var g = H2[6];
                  var h = H2[7];
                  for (var i = 0; i < 64; i++) {
                    if (i < 16) {
                      W[i] = M[offset + i] | 0;
                    } else {
                      var gamma0x = W[i - 15];
                      var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                      var gamma1x = W[i - 2];
                      var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                      W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                    }
                    var ch = e & f ^ ~e & g;
                    var maj = a & b ^ a & c ^ b & c;
                    var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
                    var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
                    var t1 = h + sigma1 + ch + K[i] + W[i];
                    var t2 = sigma0 + maj;
                    h = g;
                    g = f;
                    f = e;
                    e = d + t1 | 0;
                    d = c;
                    c = b;
                    b = a;
                    a = t1 + t2 | 0;
                  }
                  H2[0] = H2[0] + a | 0;
                  H2[1] = H2[1] + b | 0;
                  H2[2] = H2[2] + c | 0;
                  H2[3] = H2[3] + d | 0;
                  H2[4] = H2[4] + e | 0;
                  H2[5] = H2[5] + f | 0;
                  H2[6] = H2[6] + g | 0;
                  H2[7] = H2[7] + h | 0;
                },
                _doFinalize: function() {
                  var data = this._data;
                  var dataWords = data.words;
                  var nBitsTotal = this._nDataBytes * 8;
                  var nBitsLeft = data.sigBytes * 8;
                  dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
                  dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
                  dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
                  data.sigBytes = dataWords.length * 4;
                  this._process();
                  return this._hash;
                },
                clone: function() {
                  var clone = Hasher.clone.call(this);
                  clone._hash = this._hash.clone();
                  return clone;
                }
              });
              C.SHA256 = Hasher._createHelper(SHA256);
              C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
            })(Math);
            return CryptoJS.SHA256;
          });
        },
        function(module3, exports2, __webpack_require__) {
          ;
          (function(root, factory) {
            if (true) {
              module3.exports = exports2 = factory(__webpack_require__(10));
            } else {
            }
          })(this, function(CryptoJS) {
            (function() {
              var C = CryptoJS;
              var C_lib = C.lib;
              var Base = C_lib.Base;
              var C_enc = C.enc;
              var Utf8 = C_enc.Utf8;
              var C_algo = C.algo;
              var HMAC = C_algo.HMAC = Base.extend({
                init: function(hasher, key) {
                  hasher = this._hasher = new hasher.init();
                  if (typeof key == "string") {
                    key = Utf8.parse(key);
                  }
                  var hasherBlockSize = hasher.blockSize;
                  var hasherBlockSizeBytes = hasherBlockSize * 4;
                  if (key.sigBytes > hasherBlockSizeBytes) {
                    key = hasher.finalize(key);
                  }
                  key.clamp();
                  var oKey = this._oKey = key.clone();
                  var iKey = this._iKey = key.clone();
                  var oKeyWords = oKey.words;
                  var iKeyWords = iKey.words;
                  for (var i = 0; i < hasherBlockSize; i++) {
                    oKeyWords[i] ^= 1549556828;
                    iKeyWords[i] ^= 909522486;
                  }
                  oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
                  this.reset();
                },
                reset: function() {
                  var hasher = this._hasher;
                  hasher.reset();
                  hasher.update(this._iKey);
                },
                update: function(messageUpdate) {
                  this._hasher.update(messageUpdate);
                  return this;
                },
                finalize: function(messageUpdate) {
                  var hasher = this._hasher;
                  var innerHash = hasher.finalize(messageUpdate);
                  hasher.reset();
                  var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
                  return hmac;
                }
              });
            })();
          });
        },
        function(module3, exports2, __webpack_require__) {
          ;
          (function(root, factory) {
            if (true) {
              module3.exports = exports2 = factory(__webpack_require__(10));
            } else {
            }
          })(this, function(CryptoJS) {
            (function() {
              var C = CryptoJS;
              var C_lib = C.lib;
              var WordArray = C_lib.WordArray;
              var C_enc = C.enc;
              var Base64 = C_enc.Base64 = {
                stringify: function(wordArray) {
                  var words = wordArray.words;
                  var sigBytes = wordArray.sigBytes;
                  var map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                  wordArray.clamp();
                  var base64Chars = [];
                  for (var i = 0; i < sigBytes; i += 3) {
                    var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
                    var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
                    var triplet = byte1 << 16 | byte2 << 8 | byte3;
                    for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                      base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
                    }
                  }
                  var paddingChar = map.charAt(64);
                  if (paddingChar) {
                    while (base64Chars.length % 4) {
                      base64Chars.push(paddingChar);
                    }
                  }
                  return base64Chars.join("");
                },
                parse: function(base64Str) {
                  var base64StrLength = base64Str.length;
                  var map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                  var reverseMap = this._reverseMap;
                  if (!reverseMap) {
                    reverseMap = this._reverseMap = [];
                    for (var j = 0; j < map.length; j++) {
                      reverseMap[map.charCodeAt(j)] = j;
                    }
                  }
                  var paddingChar = map.charAt(64);
                  if (paddingChar) {
                    var paddingIndex = base64Str.indexOf(paddingChar);
                    if (paddingIndex !== -1) {
                      base64StrLength = paddingIndex;
                    }
                  }
                  return parseLoop(base64Str, base64StrLength, reverseMap);
                }
              };
              function parseLoop(base64Str, base64StrLength, reverseMap) {
                var words = [];
                var nBytes = 0;
                for (var i = 0; i < base64StrLength; i++) {
                  if (i % 4) {
                    var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
                    var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
                    var bitsCombined = bits1 | bits2;
                    words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
                    nBytes++;
                  }
                }
                return WordArray.create(words, nBytes);
              }
            })();
            return CryptoJS.enc.Base64;
          });
        },
        function(module3, exports2, __webpack_require__) {
          ;
          (function(root, factory) {
            if (true) {
              module3.exports = exports2 = factory(__webpack_require__(10));
            } else {
            }
          })(this, function(CryptoJS) {
            return CryptoJS.enc.Utf8;
          });
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var devicedetails_1 = tslib_1.__importDefault(__webpack_require__(43));
          var resource_1 = tslib_1.__importDefault(__webpack_require__(22));
          var paginatedresource_1 = tslib_1.__importDefault(__webpack_require__(15));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var pushchannelsubscription_1 = tslib_1.__importDefault(__webpack_require__(44));
          var noop = function() {
          };
          var Push = function() {
            function Push2(rest) {
              this.rest = rest;
              this.admin = new Admin(rest);
            }
            return Push2;
          }();
          var Admin = function() {
            function Admin2(rest) {
              this.rest = rest;
              this.deviceRegistrations = new DeviceRegistrations(rest);
              this.channelSubscriptions = new ChannelSubscriptions(rest);
            }
            Admin2.prototype.publish = function(recipient, payload, callback) {
              var rest = this.rest;
              var format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultPostHeaders(format), params = {};
              var body = Utils.mixin({ recipient }, payload);
              if (typeof callback !== "function") {
                if (this.rest.options.promises) {
                  return Utils.promisify(this, "publish", arguments);
                }
                callback = noop;
              }
              if (rest.options.headers)
                Utils.mixin(headers, rest.options.headers);
              if (rest.options.pushFullWait)
                Utils.mixin(params, { fullWait: "true" });
              var requestBody = Utils.encodeBody(body, format);
              resource_1["default"].post(rest, "/push/publish", requestBody, headers, params, null, function(err) {
                return callback(err);
              });
            };
            return Admin2;
          }();
          var DeviceRegistrations = function() {
            function DeviceRegistrations2(rest) {
              this.rest = rest;
            }
            DeviceRegistrations2.prototype.save = function(device, callback) {
              var rest = this.rest;
              var body = devicedetails_1["default"].fromValues(device);
              var format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultPostHeaders(format), params = {};
              if (typeof callback !== "function") {
                if (this.rest.options.promises) {
                  return Utils.promisify(this, "save", arguments);
                }
                callback = noop;
              }
              if (rest.options.headers)
                Utils.mixin(headers, rest.options.headers);
              if (rest.options.pushFullWait)
                Utils.mixin(params, { fullWait: "true" });
              var requestBody = Utils.encodeBody(body, format);
              resource_1["default"].put(rest, "/push/deviceRegistrations/" + encodeURIComponent(device.id), requestBody, headers, params, null, function(err, body2, headers2, unpacked) {
                callback(err, !err ? devicedetails_1["default"].fromResponseBody(body2, unpacked ? void 0 : format) : void 0);
              });
            };
            DeviceRegistrations2.prototype.get = function(deviceIdOrDetails, callback) {
              var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultGetHeaders(format), deviceId = deviceIdOrDetails.id || deviceIdOrDetails;
              if (typeof callback !== "function") {
                if (this.rest.options.promises) {
                  return Utils.promisify(this, "get", arguments);
                }
                callback = noop;
              }
              if (typeof deviceId !== "string" || !deviceId.length) {
                callback(new errorinfo_1["default"]("First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails", 4e4, 400));
                return;
              }
              if (rest.options.headers)
                Utils.mixin(headers, rest.options.headers);
              resource_1["default"].get(rest, "/push/deviceRegistrations/" + encodeURIComponent(deviceId), headers, {}, null, function(err, body, headers2, unpacked) {
                callback(err, !err ? devicedetails_1["default"].fromResponseBody(body, unpacked ? void 0 : format) : void 0);
              });
            };
            DeviceRegistrations2.prototype.list = function(params, callback) {
              var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.rest.http.supportsLinkHeaders ? void 0 : format, headers = Utils.defaultGetHeaders(format);
              if (typeof callback !== "function") {
                if (this.rest.options.promises) {
                  return Utils.promisify(this, "list", arguments);
                }
                callback = noop;
              }
              if (rest.options.headers)
                Utils.mixin(headers, rest.options.headers);
              new paginatedresource_1["default"](rest, "/push/deviceRegistrations", headers, envelope, function(body, headers2, unpacked) {
                return devicedetails_1["default"].fromResponseBody(body, unpacked ? void 0 : format);
              }).get(params, callback);
            };
            DeviceRegistrations2.prototype.remove = function(deviceIdOrDetails, callback) {
              var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultGetHeaders(format), params = {}, deviceId = deviceIdOrDetails.id || deviceIdOrDetails;
              if (typeof callback !== "function") {
                if (this.rest.options.promises) {
                  return Utils.promisify(this, "remove", arguments);
                }
                callback = noop;
              }
              if (typeof deviceId !== "string" || !deviceId.length) {
                callback(new errorinfo_1["default"]("First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails", 4e4, 400));
                return;
              }
              if (rest.options.headers)
                Utils.mixin(headers, rest.options.headers);
              if (rest.options.pushFullWait)
                Utils.mixin(params, { fullWait: "true" });
              resource_1["default"]["delete"](rest, "/push/deviceRegistrations/" + encodeURIComponent(deviceId), headers, params, null, function(err) {
                return callback(err);
              });
            };
            DeviceRegistrations2.prototype.removeWhere = function(params, callback) {
              var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultGetHeaders(format);
              if (typeof callback !== "function") {
                if (this.rest.options.promises) {
                  return Utils.promisify(this, "removeWhere", arguments);
                }
                callback = noop;
              }
              if (rest.options.headers)
                Utils.mixin(headers, rest.options.headers);
              if (rest.options.pushFullWait)
                Utils.mixin(params, { fullWait: "true" });
              resource_1["default"]["delete"](rest, "/push/deviceRegistrations", headers, params, null, function(err) {
                return callback(err);
              });
            };
            return DeviceRegistrations2;
          }();
          var ChannelSubscriptions = function() {
            function ChannelSubscriptions2(rest) {
              this.remove = ChannelSubscriptions2.prototype.removeWhere;
              this.rest = rest;
            }
            ChannelSubscriptions2.prototype.save = function(subscription, callback) {
              var rest = this.rest;
              var body = pushchannelsubscription_1["default"].fromValues(subscription);
              var format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultPostHeaders(format), params = {};
              if (typeof callback !== "function") {
                if (this.rest.options.promises) {
                  return Utils.promisify(this, "save", arguments);
                }
                callback = noop;
              }
              if (rest.options.headers)
                Utils.mixin(headers, rest.options.headers);
              if (rest.options.pushFullWait)
                Utils.mixin(params, { fullWait: "true" });
              var requestBody = Utils.encodeBody(body, format);
              resource_1["default"].post(rest, "/push/channelSubscriptions", requestBody, headers, params, null, function(err, body2, headers2, unpacked) {
                callback(err, !err && pushchannelsubscription_1["default"].fromResponseBody(body2, unpacked ? void 0 : format));
              });
            };
            ChannelSubscriptions2.prototype.list = function(params, callback) {
              var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.rest.http.supportsLinkHeaders ? void 0 : format, headers = Utils.defaultGetHeaders(format);
              if (typeof callback !== "function") {
                if (this.rest.options.promises) {
                  return Utils.promisify(this, "list", arguments);
                }
                callback = noop;
              }
              if (rest.options.headers)
                Utils.mixin(headers, rest.options.headers);
              new paginatedresource_1["default"](rest, "/push/channelSubscriptions", headers, envelope, function(body, headers2, unpacked) {
                return pushchannelsubscription_1["default"].fromResponseBody(body, unpacked ? void 0 : format);
              }).get(params, callback);
            };
            ChannelSubscriptions2.prototype.removeWhere = function(params, callback) {
              var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultGetHeaders(format);
              if (typeof callback !== "function") {
                if (this.rest.options.promises) {
                  return Utils.promisify(this, "removeWhere", arguments);
                }
                callback = noop;
              }
              if (rest.options.headers)
                Utils.mixin(headers, rest.options.headers);
              if (rest.options.pushFullWait)
                Utils.mixin(params, { fullWait: "true" });
              resource_1["default"]["delete"](rest, "/push/channelSubscriptions", headers, params, null, function(err) {
                return callback(err);
              });
            };
            ChannelSubscriptions2.prototype.listChannels = function(params, callback) {
              var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.rest.http.supportsLinkHeaders ? void 0 : format, headers = Utils.defaultGetHeaders(format);
              if (typeof callback !== "function") {
                if (this.rest.options.promises) {
                  return Utils.promisify(this, "listChannels", arguments);
                }
                callback = noop;
              }
              if (rest.options.headers)
                Utils.mixin(headers, rest.options.headers);
              if (rest.options.pushFullWait)
                Utils.mixin(params, { fullWait: "true" });
              new paginatedresource_1["default"](rest, "/push/channels", headers, envelope, function(body, headers2, unpacked) {
                var parsedBody = !unpacked && format ? Utils.decodeBody(body, format) : body;
                for (var i = 0; i < parsedBody.length; i++) {
                  parsedBody[i] = String(parsedBody[i]);
                }
                return parsedBody;
              }).get(params, callback);
            };
            return ChannelSubscriptions2;
          }();
          exports2["default"] = Push;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var DeviceFormFactor;
          (function(DeviceFormFactor2) {
            DeviceFormFactor2["Phone"] = "phone";
            DeviceFormFactor2["Tablet"] = "tablet";
            DeviceFormFactor2["Desktop"] = "desktop";
            DeviceFormFactor2["TV"] = "tv";
            DeviceFormFactor2["Watch"] = "watch";
            DeviceFormFactor2["Car"] = "car";
            DeviceFormFactor2["Embedded"] = "embedded";
            DeviceFormFactor2["Other"] = "other";
          })(DeviceFormFactor || (DeviceFormFactor = {}));
          var DevicePlatform;
          (function(DevicePlatform2) {
            DevicePlatform2["Android"] = "android";
            DevicePlatform2["IOS"] = "ios";
            DevicePlatform2["Browser"] = "browser";
          })(DevicePlatform || (DevicePlatform = {}));
          var DeviceDetails = function() {
            function DeviceDetails2() {
            }
            DeviceDetails2.prototype.toJSON = function() {
              var _a, _b, _c;
              return {
                id: this.id,
                deviceSecret: this.deviceSecret,
                platform: this.platform,
                formFactor: this.formFactor,
                clientId: this.clientId,
                metadata: this.metadata,
                deviceIdentityToken: this.deviceIdentityToken,
                push: {
                  recipient: (_a = this.push) === null || _a === void 0 ? void 0 : _a.recipient,
                  state: (_b = this.push) === null || _b === void 0 ? void 0 : _b.state,
                  error: (_c = this.push) === null || _c === void 0 ? void 0 : _c.error
                }
              };
            };
            DeviceDetails2.prototype.toString = function() {
              var _a, _b, _c, _d;
              var result = "[DeviceDetails";
              if (this.id)
                result += "; id=" + this.id;
              if (this.platform)
                result += "; platform=" + this.platform;
              if (this.formFactor)
                result += "; formFactor=" + this.formFactor;
              if (this.clientId)
                result += "; clientId=" + this.clientId;
              if (this.metadata)
                result += "; metadata=" + this.metadata;
              if (this.deviceIdentityToken)
                result += "; deviceIdentityToken=" + JSON.stringify(this.deviceIdentityToken);
              if ((_a = this.push) === null || _a === void 0 ? void 0 : _a.recipient)
                result += "; push.recipient=" + JSON.stringify(this.push.recipient);
              if ((_b = this.push) === null || _b === void 0 ? void 0 : _b.state)
                result += "; push.state=" + this.push.state;
              if ((_c = this.push) === null || _c === void 0 ? void 0 : _c.error)
                result += "; push.error=" + JSON.stringify(this.push.error);
              if ((_d = this.push) === null || _d === void 0 ? void 0 : _d.metadata)
                result += "; push.metadata=" + this.push.metadata;
              result += "]";
              return result;
            };
            DeviceDetails2.fromResponseBody = function(body, format) {
              if (format) {
                body = Utils.decodeBody(body, format);
              }
              if (Utils.isArray(body)) {
                return DeviceDetails2.fromValuesArray(body);
              } else {
                return DeviceDetails2.fromValues(body);
              }
            };
            DeviceDetails2.fromValues = function(values) {
              values.error = values.error && errorinfo_1["default"].fromValues(values.error);
              return Object.assign(new DeviceDetails2(), values);
            };
            DeviceDetails2.fromValuesArray = function(values) {
              var count = values.length, result = new Array(count);
              for (var i = 0; i < count; i++)
                result[i] = DeviceDetails2.fromValues(values[i]);
              return result;
            };
            DeviceDetails2.toRequestBody = Utils.encodeBody;
            return DeviceDetails2;
          }();
          exports2["default"] = DeviceDetails;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var PushChannelSubscription = function() {
            function PushChannelSubscription2() {
            }
            PushChannelSubscription2.prototype.toJSON = function() {
              return {
                channel: this.channel,
                deviceId: this.deviceId,
                clientId: this.clientId
              };
            };
            PushChannelSubscription2.prototype.toString = function() {
              var result = "[PushChannelSubscription";
              if (this.channel)
                result += "; channel=" + this.channel;
              if (this.deviceId)
                result += "; deviceId=" + this.deviceId;
              if (this.clientId)
                result += "; clientId=" + this.clientId;
              result += "]";
              return result;
            };
            PushChannelSubscription2.fromResponseBody = function(body, format) {
              if (format) {
                body = Utils.decodeBody(body, format);
              }
              if (Utils.isArray(body)) {
                return PushChannelSubscription2.fromValuesArray(body);
              } else {
                return PushChannelSubscription2.fromValues(body);
              }
            };
            PushChannelSubscription2.fromValues = function(values) {
              return Object.assign(new PushChannelSubscription2(), values);
            };
            PushChannelSubscription2.fromValuesArray = function(values) {
              var count = values.length, result = new Array(count);
              for (var i = 0; i < count; i++)
                result[i] = PushChannelSubscription2.fromValues(values[i]);
              return result;
            };
            PushChannelSubscription2.toRequestBody = Utils.encodeBody;
            return PushChannelSubscription2;
          }();
          exports2["default"] = PushChannelSubscription;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var MessageCount = function() {
            function MessageCount2(values) {
              this.count = values && values.count || 0;
              this.data = values && values.data || 0;
              this.uncompressedData = values && values.uncompressedData || 0;
              this.failed = values && values.failed || 0;
              this.refused = values && values.refused || 0;
            }
            return MessageCount2;
          }();
          var MessageCategory = function(_super) {
            tslib_1.__extends(MessageCategory2, _super);
            function MessageCategory2(values) {
              var _this = _super.call(this, values) || this;
              if (values && values.category) {
                _this.category = {};
                Utils.forInOwnNonNullProperties(values.category, function(prop) {
                  _this.category[prop] = new MessageCount(values.category[prop]);
                });
              }
              return _this;
            }
            return MessageCategory2;
          }(MessageCount);
          var ResourceCount = function() {
            function ResourceCount2(values) {
              this.peak = values && values.peak || 0;
              this.min = values && values.min || 0;
              this.mean = values && values.mean || 0;
              this.opened = values && values.opened || 0;
              this.refused = values && values.refused || 0;
            }
            return ResourceCount2;
          }();
          var RequestCount = function() {
            function RequestCount2(values) {
              this.succeeded = values && values.succeeded || 0;
              this.failed = values && values.failed || 0;
              this.refused = values && values.refused || 0;
            }
            return RequestCount2;
          }();
          var ConnectionTypes = function() {
            function ConnectionTypes2(values) {
              this.plain = new ResourceCount(values && values.plain);
              this.tls = new ResourceCount(values && values.tls);
              this.all = new ResourceCount(values && values.all);
            }
            return ConnectionTypes2;
          }();
          var MessageTypes = function() {
            function MessageTypes2(values) {
              this.messages = new MessageCategory(values && values.messages);
              this.presence = new MessageCategory(values && values.presence);
              this.all = new MessageCategory(values && values.all);
            }
            return MessageTypes2;
          }();
          var MessageTraffic = function() {
            function MessageTraffic2(values) {
              this.realtime = new MessageTypes(values && values.realtime);
              this.rest = new MessageTypes(values && values.rest);
              this.webhook = new MessageTypes(values && values.webhook);
              this.sharedQueue = new MessageTypes(values && values.sharedQueue);
              this.externalQueue = new MessageTypes(values && values.externalQueue);
              this.httpEvent = new MessageTypes(values && values.httpEvent);
              this.push = new MessageTypes(values && values.push);
              this.all = new MessageTypes(values && values.all);
            }
            return MessageTraffic2;
          }();
          var MessageDirections = function() {
            function MessageDirections2(values) {
              this.all = new MessageTypes(values && values.all);
              this.inbound = new MessageTraffic(values && values.inbound);
              this.outbound = new MessageTraffic(values && values.outbound);
            }
            return MessageDirections2;
          }();
          var XchgMessages = function() {
            function XchgMessages2(values) {
              this.all = new MessageTypes(values && values.all);
              this.producerPaid = new MessageDirections(values && values.producerPaid);
              this.consumerPaid = new MessageDirections(values && values.consumerPaid);
            }
            return XchgMessages2;
          }();
          var PushStats = function() {
            function PushStats2(values) {
              this.messages = values && values.messages || 0;
              var notifications = values && values.notifications;
              this.notifications = {
                invalid: notifications && notifications.invalid || 0,
                attempted: notifications && notifications.attempted || 0,
                successful: notifications && notifications.successful || 0,
                failed: notifications && notifications.failed || 0
              };
              this.directPublishes = values && values.directPublishes || 0;
            }
            return PushStats2;
          }();
          var ProcessedCount = function() {
            function ProcessedCount2(values) {
              this.succeeded = values && values.succeeded || 0;
              this.skipped = values && values.skipped || 0;
              this.failed = values && values.failed || 0;
            }
            return ProcessedCount2;
          }();
          var ProcessedMessages = function() {
            function ProcessedMessages2(values) {
              var _this = this;
              this.delta = void 0;
              if (values && values.delta) {
                this.delta = {};
                Utils.forInOwnNonNullProperties(values.delta, function(prop) {
                  _this.delta[prop] = new ProcessedCount(values.delta[prop]);
                });
              }
            }
            return ProcessedMessages2;
          }();
          var Stats = function(_super) {
            tslib_1.__extends(Stats2, _super);
            function Stats2(values) {
              var _this = _super.call(this, values) || this;
              _this.persisted = new MessageTypes(values && values.persisted);
              _this.connections = new ConnectionTypes(values && values.connections);
              _this.channels = new ResourceCount(values && values.channels);
              _this.apiRequests = new RequestCount(values && values.apiRequests);
              _this.tokenRequests = new RequestCount(values && values.tokenRequests);
              _this.xchgProducer = new XchgMessages(values && values.xchgProducer);
              _this.xchgConsumer = new XchgMessages(values && values.xchgConsumer);
              _this.push = new PushStats(values && values.pushStats);
              _this.processed = new ProcessedMessages(values && values.processed);
              _this.inProgress = values && values.inProgress || void 0;
              _this.unit = values && values.unit || void 0;
              _this.intervalId = values && values.intervalId || void 0;
              return _this;
            }
            Stats2.fromValues = function(values) {
              return new Stats2(values);
            };
            return Stats2;
          }(MessageDirections);
          exports2["default"] = Stats;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var rest_1 = tslib_1.__importDefault(__webpack_require__(27));
          var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(5));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var connection_1 = tslib_1.__importDefault(__webpack_require__(47));
          var realtimechannel_1 = tslib_1.__importDefault(__webpack_require__(32));
          var defaults_1 = tslib_1.__importDefault(__webpack_require__(6));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(8));
          var connectionmanager_1 = tslib_1.__importDefault(__webpack_require__(23));
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var message_1 = tslib_1.__importDefault(__webpack_require__(7));
          var Realtime = function(_super) {
            tslib_1.__extends(Realtime2, _super);
            function Realtime2(options) {
              var _this = _super.call(this, options) || this;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Realtime()", "");
              _this.connection = new connection_1["default"](_this, _this.options);
              _this.channels = new Channels(_this);
              if (options.autoConnect !== false)
                _this.connect();
              return _this;
            }
            Realtime2.prototype.connect = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Realtime.connect()", "");
              this.connection.connect();
            };
            Realtime2.prototype.close = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Realtime.close()", "");
              this.connection.close();
            };
            Realtime2.Promise = function(options) {
              options = defaults_1["default"].objectifyOptions(options);
              options.promises = true;
              return new Realtime2(options);
            };
            Realtime2.Callbacks = Realtime2;
            Realtime2.Utils = Utils;
            Realtime2.ConnectionManager = connectionmanager_1["default"];
            Realtime2.Platform = platform_1["default"];
            Realtime2.ProtocolMessage = protocolmessage_1["default"];
            Realtime2.Message = message_1["default"];
            return Realtime2;
          }(rest_1["default"]);
          var Channels = function(_super) {
            tslib_1.__extends(Channels2, _super);
            function Channels2(realtime) {
              var _this = _super.call(this) || this;
              _this.realtime = realtime;
              _this.all = {};
              _this.inProgress = {};
              realtime.connection.connectionManager.on("transport.active", function() {
                _this.onTransportActive();
              });
              return _this;
            }
            Channels2.prototype.onChannelMessage = function(msg) {
              var channelName = msg.channel;
              if (channelName === void 0) {
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Channels.onChannelMessage()", "received event unspecified channel, action = " + msg.action);
                return;
              }
              var channel = this.all[channelName];
              if (!channel) {
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Channels.onChannelMessage()", "received event for non-existent channel: " + channelName);
                return;
              }
              channel.onMessage(msg);
            };
            Channels2.prototype.onTransportActive = function() {
              for (var channelName in this.all) {
                var channel = this.all[channelName];
                if (channel.state === "attaching" || channel.state === "detaching") {
                  channel.checkPendingState();
                } else if (channel.state === "suspended") {
                  channel.attach();
                }
              }
            };
            Channels2.prototype.reattach = function(reason) {
              for (var channelId in this.all) {
                var channel = this.all[channelId];
                if (channel.state === "attached") {
                  channel.requestState("attaching", reason);
                }
              }
            };
            Channels2.prototype.resetAttachedMsgIndicators = function() {
              for (var channelId in this.all) {
                var channel = this.all[channelId];
                if (channel.state === "attached") {
                  channel._attachedMsgIndicator = false;
                }
              }
            };
            Channels2.prototype.checkAttachedMsgIndicators = function(connectionId) {
              for (var channelId in this.all) {
                var channel = this.all[channelId];
                if (channel.state === "attached" && channel._attachedMsgIndicator === false) {
                  var msg = "30s after a resume, found channel which has not received an attached; channelId = " + channelId + "; connectionId = " + connectionId;
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Channels.checkAttachedMsgIndicators()", msg);
                  channel.requestState("attaching");
                }
              }
            };
            Channels2.prototype.propogateConnectionInterruption = function(connectionState, reason) {
              var connectionStateToChannelState = {
                closing: "detached",
                closed: "detached",
                failed: "failed",
                suspended: "suspended"
              };
              var fromChannelStates = ["attaching", "attached", "detaching", "suspended"];
              var toChannelState = connectionStateToChannelState[connectionState];
              for (var channelId in this.all) {
                var channel = this.all[channelId];
                if (Utils.arrIn(fromChannelStates, channel.state)) {
                  channel.notifyState(toChannelState, reason);
                }
              }
            };
            Channels2.prototype.get = function(name, channelOptions) {
              name = String(name);
              var channel = this.all[name];
              if (!channel) {
                channel = this.all[name] = new realtimechannel_1["default"](this.realtime, name, channelOptions);
              } else if (channelOptions) {
                if (channel._shouldReattachToSetOptions(channelOptions)) {
                  throw new errorinfo_1["default"]("Channels.get() cannot be used to set channel options that would cause the channel to reattach. Please, use RealtimeChannel.setOptions() instead.", 4e4, 400);
                }
                channel.setOptions(channelOptions);
              }
              return channel;
            };
            Channels2.prototype.release = function(name) {
              name = String(name);
              var channel = this.all[name];
              if (!channel) {
                return;
              }
              var releaseErr = channel.getReleaseErr();
              if (releaseErr) {
                throw releaseErr;
              }
              delete this.all[name];
              delete this.inProgress[name];
            };
            Channels2.prototype.setInProgress = function(channel, operation, inProgress) {
              this.inProgress[channel.name] = this.inProgress[channel.name] || {};
              this.inProgress[channel.name][operation] = inProgress;
              if (!inProgress && this.hasNopending()) {
                this.emit("nopending");
              }
            };
            Channels2.prototype.onceNopending = function(listener) {
              if (this.hasNopending()) {
                listener();
                return;
              }
              this.once("nopending", listener);
            };
            Channels2.prototype.hasNopending = function() {
              return Utils.arrEvery(Utils.valuesArray(this.inProgress, true), function(operations) {
                return !Utils.containsValue(operations, true);
              });
            };
            return Channels2;
          }(eventemitter_1["default"]);
          exports2["default"] = Realtime;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(5));
          var connectionmanager_1 = tslib_1.__importDefault(__webpack_require__(23));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var connectionstatechange_1 = tslib_1.__importDefault(__webpack_require__(31));
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          function noop() {
          }
          var Connection = function(_super) {
            tslib_1.__extends(Connection2, _super);
            function Connection2(ably, options) {
              var _this = _super.call(this) || this;
              _this.whenState = function(state, listener) {
                return eventemitter_1["default"].prototype.whenState.call(_this, state, _this.state, listener, new connectionstatechange_1["default"](void 0, state));
              };
              _this.ably = ably;
              _this.connectionManager = new connectionmanager_1["default"](ably, options);
              _this.state = _this.connectionManager.state.state;
              _this.key = void 0;
              _this.id = void 0;
              _this.serial = void 0;
              _this.timeSerial = void 0;
              _this.recoveryKey = void 0;
              _this.errorReason = null;
              _this.connectionManager.on("connectionstate", function(stateChange) {
                var state = _this.state = stateChange.current;
                platform_1["default"].Config.nextTick(function() {
                  _this.emit(state, stateChange);
                });
              });
              _this.connectionManager.on("update", function(stateChange) {
                platform_1["default"].Config.nextTick(function() {
                  _this.emit("update", stateChange);
                });
              });
              return _this;
            }
            Connection2.prototype.connect = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Connection.connect()", "");
              this.connectionManager.requestState({ state: "connecting" });
            };
            Connection2.prototype.ping = function(callback) {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Connection.ping()", "");
              if (!callback) {
                if (this.ably.options.promises) {
                  return Utils.promisify(this, "ping", arguments);
                }
                callback = noop;
              }
              this.connectionManager.ping(null, callback);
            };
            Connection2.prototype.close = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "Connection.close()", "connectionKey = " + this.key);
              this.connectionManager.requestState({ state: "closing" });
            };
            return Connection2;
          }(eventemitter_1["default"]);
          exports2["default"] = Connection;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          exports2.PendingMessage = void 0;
          var tslib_1 = __webpack_require__(1);
          var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(8));
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(5));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var messagequeue_1 = tslib_1.__importDefault(__webpack_require__(30));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var actions = protocolmessage_1["default"].Action;
          var PendingMessage = function() {
            function PendingMessage2(message, callback) {
              this.message = message;
              this.callback = callback;
              this.merged = false;
              var action = message.action;
              this.sendAttempted = false;
              this.ackRequired = action == actions.MESSAGE || action == actions.PRESENCE;
            }
            return PendingMessage2;
          }();
          exports2.PendingMessage = PendingMessage;
          var Protocol = function(_super) {
            tslib_1.__extends(Protocol2, _super);
            function Protocol2(transport) {
              var _this = _super.call(this) || this;
              _this.transport = transport;
              _this.messageQueue = new messagequeue_1["default"]();
              transport.on("ack", function(serial, count) {
                _this.onAck(serial, count);
              });
              transport.on("nack", function(serial, count, err) {
                _this.onNack(serial, count, err);
              });
              return _this;
            }
            Protocol2.prototype.onAck = function(serial, count) {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Protocol.onAck()", "serial = " + serial + "; count = " + count);
              this.messageQueue.completeMessages(serial, count);
            };
            Protocol2.prototype.onNack = function(serial, count, err) {
              logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "Protocol.onNack()", "serial = " + serial + "; count = " + count + "; err = " + Utils.inspectError(err));
              if (!err) {
                err = new errorinfo_1["default"]("Unable to send message; channel not responding", 50001, 500);
              }
              this.messageQueue.completeMessages(serial, count, err);
            };
            Protocol2.prototype.onceIdle = function(listener) {
              var messageQueue = this.messageQueue;
              if (messageQueue.count() === 0) {
                listener();
                return;
              }
              messageQueue.once("idle", listener);
            };
            Protocol2.prototype.send = function(pendingMessage) {
              if (pendingMessage.ackRequired) {
                this.messageQueue.push(pendingMessage);
              }
              if (logger_1["default"].shouldLog(logger_1["default"].LOG_MICRO)) {
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "Protocol.send()", "sending msg; " + protocolmessage_1["default"].stringify(pendingMessage.message));
              }
              pendingMessage.sendAttempted = true;
              this.transport.send(pendingMessage.message);
            };
            Protocol2.prototype.getTransport = function() {
              return this.transport;
            };
            Protocol2.prototype.getPendingMessages = function() {
              return this.messageQueue.copyAll();
            };
            Protocol2.prototype.clearPendingMessages = function() {
              return this.messageQueue.clear();
            };
            Protocol2.prototype.finish = function() {
              var transport = this.transport;
              this.onceIdle(function() {
                transport.disconnect();
              });
            };
            return Protocol2;
          }(eventemitter_1["default"]);
          exports2["default"] = Protocol;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var transport_1 = tslib_1.__importDefault(__webpack_require__(24));
          var defaults_1 = tslib_1.__importDefault(__webpack_require__(6));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(8));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var shortName = "web_socket";
          function isNodeWebSocket(ws) {
            return !!ws.on;
          }
          var WebSocketTransport = function(_super) {
            tslib_1.__extends(WebSocketTransport2, _super);
            function WebSocketTransport2(connectionManager, auth, params) {
              var _this = _super.call(this, connectionManager, auth, params) || this;
              _this.shortName = shortName;
              params.heartbeats = platform_1["default"].Config.useProtocolHeartbeats;
              _this.wsHost = defaults_1["default"].getHost(params.options, params.host, true);
              return _this;
            }
            WebSocketTransport2.isAvailable = function() {
              return !!platform_1["default"].Config.WebSocket;
            };
            WebSocketTransport2.prototype.createWebSocket = function(uri, connectParams) {
              var paramCount = 0;
              if (connectParams) {
                for (var key in connectParams)
                  uri += (paramCount++ ? "&" : "?") + key + "=" + connectParams[key];
              }
              this.uri = uri;
              return new platform_1["default"].Config.WebSocket(uri);
            };
            WebSocketTransport2.prototype.toString = function() {
              return "WebSocketTransport; uri=" + this.uri;
            };
            WebSocketTransport2.prototype.connect = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "WebSocketTransport.connect()", "starting");
              transport_1["default"].prototype.connect.call(this);
              var self2 = this, params = this.params, options = params.options;
              var wsScheme = options.tls ? "wss://" : "ws://";
              var wsUri = wsScheme + this.wsHost + ":" + defaults_1["default"].getPort(options) + "/";
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "WebSocketTransport.connect()", "uri: " + wsUri);
              this.auth.getAuthParams(function(err, authParams) {
                if (self2.isDisposed) {
                  return;
                }
                var paramStr = "";
                for (var param in authParams)
                  paramStr += " " + param + ": " + authParams[param] + ";";
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "WebSocketTransport.connect()", "authParams:" + paramStr + " err: " + err);
                if (err) {
                  self2.disconnect(err);
                  return;
                }
                var connectParams = params.getConnectParams(authParams);
                try {
                  var wsConnection = self2.wsConnection = self2.createWebSocket(wsUri, connectParams);
                  wsConnection.binaryType = platform_1["default"].Config.binaryType;
                  wsConnection.onopen = function() {
                    self2.onWsOpen();
                  };
                  wsConnection.onclose = function(ev) {
                    self2.onWsClose(ev);
                  };
                  wsConnection.onmessage = function(ev) {
                    self2.onWsData(ev.data);
                  };
                  wsConnection.onerror = function(ev) {
                    self2.onWsError(ev);
                  };
                  if (isNodeWebSocket(wsConnection)) {
                    wsConnection.on("ping", function() {
                      self2.onActivity();
                    });
                  }
                } catch (e) {
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "WebSocketTransport.connect()", "Unexpected exception creating websocket: err = " + (e.stack || e.message));
                  self2.disconnect(e);
                }
              });
            };
            WebSocketTransport2.prototype.send = function(message) {
              var wsConnection = this.wsConnection;
              if (!wsConnection) {
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "WebSocketTransport.send()", "No socket connection");
                return;
              }
              try {
                wsConnection.send(protocolmessage_1["default"].serialize(message, this.params.format));
              } catch (e) {
                var msg = "Exception from ws connection when trying to send: " + Utils.inspectError(e);
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "WebSocketTransport.send()", msg);
                this.finish("disconnected", new errorinfo_1["default"](msg, 5e4, 500));
              }
            };
            WebSocketTransport2.prototype.onWsData = function(data) {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "WebSocketTransport.onWsData()", "data received; length = " + data.length + "; type = " + typeof data);
              try {
                this.onProtocolMessage(protocolmessage_1["default"].deserialize(data, this.format));
              } catch (e) {
                logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "WebSocketTransport.onWsData()", "Unexpected exception handing channel message: " + e.stack);
              }
            };
            WebSocketTransport2.prototype.onWsOpen = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "WebSocketTransport.onWsOpen()", "opened WebSocket");
              this.emit("preconnect");
            };
            WebSocketTransport2.prototype.onWsClose = function(ev) {
              var wasClean, code;
              if (typeof ev == "object") {
                code = ev.code;
                wasClean = ev.wasClean || code === 1e3;
              } else {
                code = ev;
                wasClean = code == 1e3;
              }
              delete this.wsConnection;
              if (wasClean) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "WebSocketTransport.onWsClose()", "Cleanly closed WebSocket");
                var err = new errorinfo_1["default"]("Websocket closed", 80003, 400);
                this.finish("disconnected", err);
              } else {
                var msg = "Unclean disconnection of WebSocket ; code = " + code, err = new errorinfo_1["default"](msg, 80003, 400);
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "WebSocketTransport.onWsClose()", msg);
                this.finish("disconnected", err);
              }
              this.emit("disposed");
            };
            WebSocketTransport2.prototype.onWsError = function(err) {
              var _this = this;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "WebSocketTransport.onError()", "Error from WebSocket: " + err.message);
              platform_1["default"].Config.nextTick(function() {
                _this.disconnect(Error(err.message));
              });
            };
            WebSocketTransport2.prototype.dispose = function() {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "WebSocketTransport.dispose()", "");
              this.isDisposed = true;
              var wsConnection = this.wsConnection;
              if (wsConnection) {
                wsConnection.onmessage = function() {
                };
                delete this.wsConnection;
                platform_1["default"].Config.nextTick(function() {
                  logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "WebSocketTransport.dispose()", "closing websocket");
                  if (!wsConnection) {
                    throw new Error("WebSocketTransport.dispose(): wsConnection is not defined");
                  }
                  wsConnection.close();
                });
              }
            };
            return WebSocketTransport2;
          }(transport_1["default"]);
          function initialiseTransport(connectionManager) {
            if (WebSocketTransport.isAvailable())
              connectionManager.supportedTransports[shortName] = WebSocketTransport;
            return WebSocketTransport;
          }
          exports2["default"] = initialiseTransport;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var Utils = tslib_1.__importStar(__webpack_require__(2));
          var presence_1 = tslib_1.__importDefault(__webpack_require__(29));
          var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(5));
          var logger_1 = tslib_1.__importDefault(__webpack_require__(0));
          var presencemessage_1 = tslib_1.__importDefault(__webpack_require__(11));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var realtimechannel_1 = tslib_1.__importDefault(__webpack_require__(32));
          var multicaster_1 = tslib_1.__importDefault(__webpack_require__(21));
          var channelstatechange_1 = tslib_1.__importDefault(__webpack_require__(33));
          var noop = function() {
          };
          function memberKey(item) {
            return item.clientId + ":" + item.connectionId;
          }
          function getClientId(realtimePresence) {
            return realtimePresence.channel.realtime.auth.clientId;
          }
          function isAnonymousOrWildcard(realtimePresence) {
            var realtime = realtimePresence.channel.realtime;
            var clientId = realtime.auth.clientId;
            return (!clientId || clientId === "*") && realtime.connection.state === "connected";
          }
          function waitAttached(channel, callback, action) {
            switch (channel.state) {
              case "attached":
              case "suspended":
                action();
                break;
              case "initialized":
              case "detached":
              case "detaching":
              case "attaching":
                channel.attach(function(err) {
                  if (err)
                    callback(err);
                  else
                    action();
                });
                break;
              default:
                callback(errorinfo_1["default"].fromValues(realtimechannel_1["default"].invalidStateError(channel.state)));
            }
          }
          function newerThan(item, existing) {
            if (item.isSynthesized() || existing.isSynthesized()) {
              return item.timestamp > existing.timestamp;
            }
            var itemOrderings = item.parseId(), existingOrderings = existing.parseId();
            if (itemOrderings.msgSerial === existingOrderings.msgSerial) {
              return itemOrderings.index > existingOrderings.index;
            } else {
              return itemOrderings.msgSerial > existingOrderings.msgSerial;
            }
          }
          var RealtimePresence = function(_super) {
            tslib_1.__extends(RealtimePresence2, _super);
            function RealtimePresence2(channel) {
              var _this = _super.call(this, channel) || this;
              _this.channel = channel;
              _this.syncComplete = false;
              _this.members = new PresenceMap(_this);
              _this._myMembers = new PresenceMap(_this);
              _this.subscriptions = new eventemitter_1["default"]();
              _this.pendingPresence = [];
              return _this;
            }
            RealtimePresence2.prototype.enter = function(data, callback) {
              if (isAnonymousOrWildcard(this)) {
                throw new errorinfo_1["default"]("clientId must be specified to enter a presence channel", 40012, 400);
              }
              return this._enterOrUpdateClient(void 0, data, "enter", callback);
            };
            RealtimePresence2.prototype.update = function(data, callback) {
              if (isAnonymousOrWildcard(this)) {
                throw new errorinfo_1["default"]("clientId must be specified to update presence data", 40012, 400);
              }
              return this._enterOrUpdateClient(void 0, data, "update", callback);
            };
            RealtimePresence2.prototype.enterClient = function(clientId, data, callback) {
              return this._enterOrUpdateClient(clientId, data, "enter", callback);
            };
            RealtimePresence2.prototype.updateClient = function(clientId, data, callback) {
              return this._enterOrUpdateClient(clientId, data, "update", callback);
            };
            RealtimePresence2.prototype._enterOrUpdateClient = function(clientId, data, action, callback) {
              var _this = this;
              if (!callback) {
                if (typeof data === "function") {
                  callback = data;
                  data = null;
                } else {
                  if (this.channel.realtime.options.promises) {
                    return Utils.promisify(this, "_enterOrUpdateClient", [clientId, data, action]);
                  }
                  callback = noop;
                }
              }
              var channel = this.channel;
              if (!channel.connectionManager.activeState()) {
                callback(channel.connectionManager.getError());
                return;
              }
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "RealtimePresence." + action + "Client()", "channel = " + channel.name + ", client = " + (clientId || "(implicit) " + getClientId(this)));
              var presence = presencemessage_1["default"].fromValues({
                action,
                data
              });
              if (clientId) {
                presence.clientId = clientId;
              }
              presencemessage_1["default"].encode(presence, channel.channelOptions, function(err) {
                if (err) {
                  callback(err);
                  return;
                }
                switch (channel.state) {
                  case "attached":
                    channel.sendPresence(presence, callback);
                    break;
                  case "initialized":
                  case "detached":
                    channel.attach();
                  case "attaching":
                    _this.pendingPresence.push({
                      presence,
                      callback
                    });
                    break;
                  default:
                    err = new errorinfo_1["default"]("Unable to " + action + " presence channel while in " + channel.state + " state", 90001);
                    err.code = 90001;
                    callback(err);
                }
              });
            };
            RealtimePresence2.prototype.leave = function(data, callback) {
              if (isAnonymousOrWildcard(this)) {
                throw new errorinfo_1["default"]("clientId must have been specified to enter or leave a presence channel", 40012, 400);
              }
              return this.leaveClient(void 0, data, callback);
            };
            RealtimePresence2.prototype.leaveClient = function(clientId, data, callback) {
              if (!callback) {
                if (typeof data === "function") {
                  callback = data;
                  data = null;
                } else {
                  if (this.channel.realtime.options.promises) {
                    return Utils.promisify(this, "leaveClient", [clientId, data]);
                  }
                  callback = noop;
                }
              }
              var channel = this.channel;
              if (!channel.connectionManager.activeState()) {
                callback === null || callback === void 0 ? void 0 : callback(channel.connectionManager.getError());
                return;
              }
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "RealtimePresence.leaveClient()", "leaving; channel = " + this.channel.name + ", client = " + clientId);
              var presence = presencemessage_1["default"].fromValues({
                action: "leave",
                data
              });
              if (clientId) {
                presence.clientId = clientId;
              }
              switch (channel.state) {
                case "attached":
                  channel.sendPresence(presence, callback);
                  break;
                case "attaching":
                  this.pendingPresence.push({
                    presence,
                    callback
                  });
                  break;
                case "initialized":
                case "failed": {
                  var err = new errorinfo_1["default"]("Unable to leave presence channel (incompatible state)", 90001);
                  callback === null || callback === void 0 ? void 0 : callback(err);
                  break;
                }
                default:
                  callback === null || callback === void 0 ? void 0 : callback(realtimechannel_1["default"].invalidStateError(channel.state));
              }
            };
            RealtimePresence2.prototype.get = function(params, callback) {
              var _this = this;
              var args = Array.prototype.slice.call(arguments);
              if (args.length == 1 && typeof args[0] == "function")
                args.unshift(null);
              params = args[0];
              callback = args[1];
              var waitForSync = !params || ("waitForSync" in params ? params.waitForSync : true);
              if (!callback) {
                if (this.channel.realtime.options.promises) {
                  return Utils.promisify(this, "get", args);
                }
                callback = noop;
              }
              function returnMembers(members) {
                callback(null, params ? members.list(params) : members.values());
              }
              if (this.channel.state === "suspended") {
                if (waitForSync) {
                  callback(errorinfo_1["default"].fromValues({
                    statusCode: 400,
                    code: 91005,
                    message: "Presence state is out of sync due to channel being in the SUSPENDED state"
                  }));
                } else {
                  returnMembers(this.members);
                }
                return;
              }
              waitAttached(this.channel, callback, function() {
                var members = _this.members;
                if (waitForSync) {
                  members.waitSync(function() {
                    returnMembers(members);
                  });
                } else {
                  returnMembers(members);
                }
              });
            };
            RealtimePresence2.prototype.history = function(params, callback) {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "RealtimePresence.history()", "channel = " + this.name);
              if (callback === void 0) {
                if (typeof params == "function") {
                  callback = params;
                  params = null;
                } else {
                  if (this.channel.realtime.options.promises) {
                    return Utils.promisify(this, "history", arguments);
                  }
                  callback = noop;
                }
              }
              if (params && params.untilAttach) {
                if (this.channel.state === "attached") {
                  delete params.untilAttach;
                  params.from_serial = this.channel.properties.attachSerial;
                } else {
                  callback(new errorinfo_1["default"]("option untilAttach requires the channel to be attached, was: " + this.channel.state, 4e4, 400));
                }
              }
              presence_1["default"].prototype._history.call(this, params, callback);
            };
            RealtimePresence2.prototype.setPresence = function(presenceSet, isSync, syncChannelSerial) {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "RealtimePresence.setPresence()", "received presence for " + presenceSet.length + " participants; syncChannelSerial = " + syncChannelSerial);
              var syncCursor, match;
              var members = this.members, myMembers = this._myMembers, broadcastMessages = [], connId = this.channel.connectionManager.connectionId;
              if (isSync) {
                this.members.startSync();
                if (syncChannelSerial && (match = syncChannelSerial.match(/^[\w-]+:(.*)$/))) {
                  syncCursor = match[1];
                }
              }
              for (var i = 0; i < presenceSet.length; i++) {
                var presence = presencemessage_1["default"].fromValues(presenceSet[i]);
                switch (presence.action) {
                  case "leave":
                    if (members.remove(presence)) {
                      broadcastMessages.push(presence);
                    }
                    if (presence.connectionId === connId && !presence.isSynthesized()) {
                      myMembers.remove(presence);
                    }
                    break;
                  case "enter":
                  case "present":
                  case "update":
                    if (members.put(presence)) {
                      broadcastMessages.push(presence);
                    }
                    if (presence.connectionId === connId) {
                      myMembers.put(presence);
                    }
                    break;
                }
              }
              if (isSync && !syncCursor) {
                members.endSync();
                this._ensureMyMembersPresent();
                this.channel.setInProgress(realtimechannel_1["default"].progressOps.sync, false);
                this.channel.syncChannelSerial = null;
              }
              for (var i = 0; i < broadcastMessages.length; i++) {
                var presence = broadcastMessages[i];
                this.subscriptions.emit(presence.action, presence);
              }
            };
            RealtimePresence2.prototype.onAttached = function(hasPresence) {
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "RealtimePresence.onAttached()", "channel = " + this.channel.name + ", hasPresence = " + hasPresence);
              if (hasPresence) {
                this.members.startSync();
              } else {
                this._synthesizeLeaves(this.members.values());
                this.members.clear();
                this._ensureMyMembersPresent();
              }
              var pendingPresence = this.pendingPresence, pendingPresCount = pendingPresence.length;
              if (pendingPresCount) {
                this.pendingPresence = [];
                var presenceArray = [];
                var multicaster = multicaster_1["default"].create();
                logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "RealtimePresence.onAttached", "sending " + pendingPresCount + " queued presence messages");
                for (var i = 0; i < pendingPresCount; i++) {
                  var event_1 = pendingPresence[i];
                  presenceArray.push(event_1.presence);
                  multicaster.push(event_1.callback);
                }
                this.channel.sendPresence(presenceArray, multicaster);
              }
            };
            RealtimePresence2.prototype.actOnChannelState = function(state, hasPresence, err) {
              switch (state) {
                case "attached":
                  this.onAttached(hasPresence);
                  break;
                case "detached":
                case "failed":
                  this._clearMyMembers();
                  this.members.clear();
                case "suspended":
                  this.failPendingPresence(err);
                  break;
              }
            };
            RealtimePresence2.prototype.failPendingPresence = function(err) {
              if (this.pendingPresence.length) {
                logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "RealtimeChannel.failPendingPresence", "channel; name = " + this.channel.name + ", err = " + Utils.inspectError(err));
                for (var i = 0; i < this.pendingPresence.length; i++)
                  try {
                    this.pendingPresence[i].callback(err);
                  } catch (e) {
                  }
                this.pendingPresence = [];
              }
            };
            RealtimePresence2.prototype._clearMyMembers = function() {
              this._myMembers.clear();
            };
            RealtimePresence2.prototype._ensureMyMembersPresent = function() {
              var _this = this;
              var members = this.members, myMembers = this._myMembers, reenterCb = function(err) {
                if (err) {
                  var msg = "Presence auto-re-enter failed: " + err.toString();
                  var wrappedErr = new errorinfo_1["default"](msg, 91004, 400);
                  logger_1["default"].logAction(logger_1["default"].LOG_ERROR, "RealtimePresence._ensureMyMembersPresent()", msg);
                  var change = new channelstatechange_1["default"](_this.channel.state, _this.channel.state, true, wrappedErr);
                  _this.channel.emit("update", change);
                }
              };
              for (var memberKey_1 in myMembers.map) {
                if (!(memberKey_1 in members.map)) {
                  var entry = myMembers.map[memberKey_1];
                  logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "RealtimePresence._ensureMyMembersPresent()", 'Auto-reentering clientId "' + entry.clientId + '" into the presence set');
                  this._enterOrUpdateClient(entry.clientId, entry.data, "enter", reenterCb);
                  delete myMembers.map[memberKey_1];
                }
              }
            };
            RealtimePresence2.prototype._synthesizeLeaves = function(items) {
              var subscriptions = this.subscriptions;
              Utils.arrForEach(items, function(item) {
                var presence = presencemessage_1["default"].fromValues({
                  action: "leave",
                  connectionId: item.connectionId,
                  clientId: item.clientId,
                  data: item.data,
                  encoding: item.encoding,
                  timestamp: Utils.now()
                });
                subscriptions.emit("leave", presence);
              });
            };
            RealtimePresence2.prototype.on = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              logger_1["default"].deprecated("presence.on", "presence.subscribe");
              this.subscribe.apply(this, args);
            };
            RealtimePresence2.prototype.off = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              logger_1["default"].deprecated("presence.off", "presence.unsubscribe");
              this.unsubscribe.apply(this, args);
            };
            RealtimePresence2.prototype.subscribe = function() {
              var _args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                _args[_i] = arguments[_i];
              }
              var args = realtimechannel_1["default"].processListenerArgs(_args);
              var event = args[0];
              var listener = args[1];
              var callback = args[2];
              var channel = this.channel;
              if (!callback) {
                if (this.channel.realtime.options.promises) {
                  return Utils.promisify(this, "subscribe", [event, listener]);
                }
                callback = noop;
              }
              if (channel.state === "failed") {
                callback(errorinfo_1["default"].fromValues(realtimechannel_1["default"].invalidStateError("failed")));
                return;
              }
              this.subscriptions.on(event, listener);
              channel.attach(callback);
            };
            RealtimePresence2.prototype.unsubscribe = function() {
              var _args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                _args[_i] = arguments[_i];
              }
              var args = realtimechannel_1["default"].processListenerArgs(_args);
              var event = args[0];
              var listener = args[1];
              this.subscriptions.off(event, listener);
            };
            return RealtimePresence2;
          }(presence_1["default"]);
          var PresenceMap = function(_super) {
            tslib_1.__extends(PresenceMap2, _super);
            function PresenceMap2(presence) {
              var _this = _super.call(this) || this;
              _this.presence = presence;
              _this.map = {};
              _this.syncInProgress = false;
              _this.residualMembers = null;
              return _this;
            }
            PresenceMap2.prototype.get = function(key) {
              return this.map[key];
            };
            PresenceMap2.prototype.getClient = function(clientId) {
              var map = this.map, result = [];
              for (var key in map) {
                var item = map[key];
                if (item.clientId == clientId && item.action != "absent")
                  result.push(item);
              }
              return result;
            };
            PresenceMap2.prototype.list = function(params) {
              var map = this.map, clientId = params && params.clientId, connectionId = params && params.connectionId, result = [];
              for (var key in map) {
                var item = map[key];
                if (item.action === "absent")
                  continue;
                if (clientId && clientId != item.clientId)
                  continue;
                if (connectionId && connectionId != item.connectionId)
                  continue;
                result.push(item);
              }
              return result;
            };
            PresenceMap2.prototype.put = function(item) {
              if (item.action === "enter" || item.action === "update") {
                item = presencemessage_1["default"].fromValues(item);
                item.action = "present";
              }
              var map = this.map, key = memberKey(item);
              if (this.residualMembers)
                delete this.residualMembers[key];
              var existingItem = map[key];
              if (existingItem && !newerThan(item, existingItem)) {
                return false;
              }
              map[key] = item;
              return true;
            };
            PresenceMap2.prototype.values = function() {
              var map = this.map, result = [];
              for (var key in map) {
                var item = map[key];
                if (item.action != "absent")
                  result.push(item);
              }
              return result;
            };
            PresenceMap2.prototype.remove = function(item) {
              var map = this.map, key = memberKey(item);
              var existingItem = map[key];
              if (existingItem && !newerThan(item, existingItem)) {
                return false;
              }
              if (this.syncInProgress) {
                item = presencemessage_1["default"].fromValues(item);
                item.action = "absent";
                map[key] = item;
              } else {
                delete map[key];
              }
              return true;
            };
            PresenceMap2.prototype.startSync = function() {
              var map = this.map, syncInProgress = this.syncInProgress;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "PresenceMap.startSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + syncInProgress);
              if (!this.syncInProgress) {
                this.residualMembers = Utils.copy(map);
                this.setInProgress(true);
              }
            };
            PresenceMap2.prototype.endSync = function() {
              var map = this.map, syncInProgress = this.syncInProgress;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "PresenceMap.endSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + syncInProgress);
              if (syncInProgress) {
                for (var memberKey_2 in map) {
                  var entry = map[memberKey_2];
                  if (entry.action === "absent") {
                    delete map[memberKey_2];
                  }
                }
                this.presence._synthesizeLeaves(Utils.valuesArray(this.residualMembers));
                for (var memberKey_3 in this.residualMembers) {
                  delete map[memberKey_3];
                }
                this.residualMembers = null;
                this.setInProgress(false);
              }
              this.emit("sync");
            };
            PresenceMap2.prototype.waitSync = function(callback) {
              var syncInProgress = this.syncInProgress;
              logger_1["default"].logAction(logger_1["default"].LOG_MINOR, "PresenceMap.waitSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + syncInProgress);
              if (!syncInProgress) {
                callback();
                return;
              }
              this.once("sync", callback);
            };
            PresenceMap2.prototype.clear = function() {
              this.map = {};
              this.setInProgress(false);
              this.residualMembers = null;
            };
            PresenceMap2.prototype.setInProgress = function(inProgress) {
              logger_1["default"].logAction(logger_1["default"].LOG_MICRO, "PresenceMap.setInProgress()", "inProgress = " + inProgress);
              this.syncInProgress = inProgress;
              this.presence.syncComplete = !inProgress;
            };
            return PresenceMap2;
          }(eventemitter_1["default"]);
          exports2["default"] = RealtimePresence;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var BufferUtils = function() {
            function BufferUtils2() {
              this.base64CharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              this.hexCharSet = "0123456789abcdef";
            }
            BufferUtils2.prototype.base64Decode = function(string) {
              return Buffer.from(string, "base64");
            };
            BufferUtils2.prototype.base64Encode = function(buffer) {
              return this.toBuffer(buffer).toString("base64");
            };
            BufferUtils2.prototype.bufferCompare = function(buffer1, buffer2) {
              if (!buffer1)
                return -1;
              if (!buffer2)
                return 1;
              return buffer1.compare(buffer2);
            };
            BufferUtils2.prototype.byteLength = function(buffer) {
              return buffer.byteLength;
            };
            BufferUtils2.prototype.hexDecode = function(string) {
              return Buffer.from(string, "hex");
            };
            BufferUtils2.prototype.hexEncode = function(buffer) {
              return this.toBuffer(buffer).toString("hex");
            };
            BufferUtils2.prototype.isArrayBuffer = function(ob) {
              return ob !== null && ob !== void 0 && ob.constructor === ArrayBuffer;
            };
            BufferUtils2.prototype.isBuffer = function(buffer) {
              return Buffer.isBuffer(buffer) || this.isArrayBuffer(buffer) || ArrayBuffer.isView(buffer);
            };
            BufferUtils2.prototype.toArrayBuffer = function(buffer) {
              return this.toBuffer(buffer).buffer;
            };
            BufferUtils2.prototype.toBuffer = function(buffer) {
              if (Buffer.isBuffer(buffer)) {
                return buffer;
              }
              return Buffer.from(buffer);
            };
            BufferUtils2.prototype.typedArrayToBuffer = function(typedArray) {
              return this.toBuffer(typedArray.buffer);
            };
            BufferUtils2.prototype.utf8Decode = function(buffer) {
              if (!this.isBuffer(buffer)) {
                throw new Error("Expected input of utf8Decode to be a buffer, arraybuffer, or view");
              }
              return this.toBuffer(buffer).toString("utf8");
            };
            BufferUtils2.prototype.utf8Encode = function(string) {
              return Buffer.from(string, "utf8");
            };
            return BufferUtils2;
          }();
          exports2["default"] = new BufferUtils();
        },
        function(module3, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          var _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
          var _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_0__);
          var _common_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
          var _common_platform__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(_common_platform__WEBPACK_IMPORTED_MODULE_1__);
          var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
          var crypto__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);
          var Crypto = function() {
            var DEFAULT_ALGORITHM = "aes";
            var DEFAULT_KEYLENGTH = 256;
            var DEFAULT_MODE = "cbc";
            var DEFAULT_BLOCKLENGTH = 16;
            function generateRandom(bytes, callback) {
              return crypto__WEBPACK_IMPORTED_MODULE_2___default.a.randomBytes(bytes, callback);
            }
            function getPaddedLength(plaintextLength) {
              return plaintextLength + DEFAULT_BLOCKLENGTH & -DEFAULT_BLOCKLENGTH;
            }
            function validateCipherParams(params) {
              if (params.algorithm === "aes" && params.mode === "cbc") {
                if (params.keyLength === 128 || params.keyLength === 256) {
                  return;
                }
                throw new Error("Unsupported key length " + params.keyLength + " for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)");
              }
            }
            function normaliseBase64(string) {
              return string.replace("_", "/").replace("-", "+");
            }
            function filledBuffer(length, value) {
              var result = Buffer.alloc(length);
              result.fill(value);
              return result;
            }
            var pkcs5Padding = [filledBuffer(16, 16)];
            for (var i = 1; i <= 16; i++)
              pkcs5Padding.push(filledBuffer(i, i));
            function toBuffer(bufferOrString) {
              return typeof bufferOrString == "string" ? Buffer.from(bufferOrString, "binary") : bufferOrString;
            }
            function Crypto2() {
            }
            function CipherParams() {
              this.algorithm = null;
              this.keyLength = null;
              this.mode = null;
              this.key = null;
              this.iv = null;
            }
            Crypto2.CipherParams = CipherParams;
            function isInstCipherParams(params) {
              return params.algorithm && params.key && params.keyLength && params.mode;
            }
            Crypto2.getDefaultParams = function(params) {
              var key;
              if (typeof params === "function" || typeof params === "string") {
                _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_0___default.a.deprecated("Crypto.getDefaultParams(key, callback)", "Crypto.getDefaultParams({key: key})");
                if (typeof params === "function") {
                  Crypto2.generateRandomKey(function(key2) {
                    params(null, Crypto2.getDefaultParams({ key: key2 }));
                  });
                } else if (typeof arguments[1] === "function") {
                  arguments[1](null, Crypto2.getDefaultParams({ key: params }));
                } else {
                  throw new Error("Invalid arguments for Crypto.getDefaultParams");
                }
                return;
              }
              if (!params.key) {
                throw new Error("Crypto.getDefaultParams: a key is required");
              }
              if (typeof params.key === "string") {
                key = _common_platform__WEBPACK_IMPORTED_MODULE_1___default.a.BufferUtils.base64Decode(normaliseBase64(params.key));
              } else {
                key = params.key;
              }
              var cipherParams = new CipherParams();
              cipherParams.key = key;
              cipherParams.algorithm = params.algorithm || DEFAULT_ALGORITHM;
              cipherParams.keyLength = key.length * 8;
              cipherParams.mode = params.mode || DEFAULT_MODE;
              if (params.keyLength && params.keyLength !== cipherParams.keyLength) {
                throw new Error("Crypto.getDefaultParams: a keyLength of " + params.keyLength + " was specified, but the key actually has length " + cipherParams.keyLength);
              }
              validateCipherParams(cipherParams);
              return cipherParams;
            };
            Crypto2.generateRandomKey = function(keyLength, callback) {
              if (arguments.length == 1 && typeof keyLength == "function") {
                callback = keyLength;
                keyLength = void 0;
              }
              generateRandom((keyLength || DEFAULT_KEYLENGTH) / 8, callback);
            };
            Crypto2.getCipher = function(params) {
              var cipherParams = isInstCipherParams(params) ? params : Crypto2.getDefaultParams(params);
              var iv = params.iv || generateRandom(DEFAULT_BLOCKLENGTH);
              return { cipherParams, cipher: new CBCCipher(cipherParams, iv) };
            };
            function CBCCipher(params, iv) {
              var algorithm = this.algorithm = params.algorithm + "-" + String(params.keyLength) + "-" + params.mode;
              var key = this.key = params.key;
              var iv = this.iv = iv;
              this.encryptCipher = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.createCipheriv(algorithm, key, iv);
              this.blockLength = iv.length;
            }
            CBCCipher.prototype.encrypt = function(plaintext, callback) {
              _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_0___default.a.logAction(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_0___default.a.LOG_MICRO, "CBCCipher.encrypt()", "");
              var plaintextLength = plaintext.length, paddedLength = getPaddedLength(plaintextLength), iv = this.getIv();
              var cipherOut = this.encryptCipher.update(Buffer.concat([plaintext, pkcs5Padding[paddedLength - plaintextLength]]));
              var ciphertext = Buffer.concat([iv, toBuffer(cipherOut)]);
              return callback(null, ciphertext);
            };
            CBCCipher.prototype.decrypt = function(ciphertext) {
              var blockLength = this.blockLength, decryptCipher = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.createDecipheriv(this.algorithm, this.key, ciphertext.slice(0, blockLength)), plaintext = toBuffer(decryptCipher.update(ciphertext.slice(blockLength))), final = decryptCipher.final();
              if (final && final.length)
                plaintext = Buffer.concat([plaintext, toBuffer(final)]);
              return plaintext;
            };
            CBCCipher.prototype.getIv = function() {
              if (this.iv) {
                var iv = this.iv;
                this.iv = null;
                return iv;
              }
              var randomBlock = generateRandom(DEFAULT_BLOCKLENGTH);
              return toBuffer(this.encryptCipher.update(randomBlock));
            };
            return Crypto2;
          }();
          __webpack_exports__["default"] = Crypto;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          var _a;
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var platform_1 = tslib_1.__importDefault(__webpack_require__(4));
          var defaults_1 = tslib_1.__importDefault(__webpack_require__(6));
          var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(3));
          var HttpMethods_1 = tslib_1.__importDefault(__webpack_require__(14));
          var got_1 = tslib_1.__importDefault(__webpack_require__(54));
          var http_1 = tslib_1.__importDefault(__webpack_require__(17));
          var https_1 = tslib_1.__importDefault(__webpack_require__(18));
          var handler2 = function(uri, params, callback) {
            return function(err, response, body) {
              if (err) {
                callback === null || callback === void 0 ? void 0 : callback(err);
                return;
              }
              var statusCode = response.statusCode, headers = response.headers;
              if (statusCode >= 300) {
                switch (headers["content-type"]) {
                  case "application/json":
                    body = JSON.parse(body);
                    break;
                  case "application/x-msgpack":
                    body = platform_1["default"].Config.msgpack.decode(body);
                }
                var error = body.error ? errorinfo_1["default"].fromValues(body.error) : new errorinfo_1["default"](headers["x-ably-errormessage"] || "Error response received from server: " + statusCode + " body was: " + platform_1["default"].Config.inspect(body), Number(headers["x-ably-errorcode"]), statusCode);
                callback === null || callback === void 0 ? void 0 : callback(error, body, headers, true, statusCode);
                return;
              }
              callback === null || callback === void 0 ? void 0 : callback(null, body, headers, false, statusCode);
            };
          };
          function shouldFallback(err) {
            var code = err.code, statusCode = err.statusCode;
            return code === "ENETUNREACH" || code === "EHOSTUNREACH" || code === "EHOSTDOWN" || code === "ETIMEDOUT" || code === "ESOCKETTIMEDOUT" || code === "ENOTFOUND" || code === "ECONNRESET" || code === "ECONNREFUSED" || statusCode >= 500 && statusCode <= 504;
          }
          function getHosts(client) {
            var connection = client.connection;
            var connectionHost = connection && connection.connectionManager.host;
            if (connectionHost) {
              return [connectionHost].concat(defaults_1["default"].getFallbackHosts(client.options));
            }
            return defaults_1["default"].getHosts(client.options);
          }
          var Http = (_a = function() {
            function class_1() {
              var _this = this;
              this.agent = null;
              this._getHosts = getHosts;
              this.supportsAuthHeaders = true;
              this.supportsLinkHeaders = true;
              this.checkConnectivity = function(callback) {
                _this.doUri(HttpMethods_1["default"].Get, null, defaults_1["default"].internetUpUrl, null, null, null, function(err, responseText) {
                  var _a2;
                  callback(null, !err && ((_a2 = responseText) === null || _a2 === void 0 ? void 0 : _a2.toString().trim()) === "yes");
                });
              };
              this.Request = void 0;
            }
            class_1.prototype["do"] = function(method, rest, path, headers, body, params, callback) {
              var _this = this;
              var uriFromHost = typeof path === "function" ? path : function(host) {
                return rest.baseUri(host) + path;
              };
              var currentFallback = rest._currentFallback;
              if (currentFallback) {
                if (currentFallback.validUntil > Date.now()) {
                  this.doUri(method, rest, uriFromHost(currentFallback.host), headers, body, params, function(err) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                      args[_i - 1] = arguments[_i];
                    }
                    if (err && shouldFallback(err)) {
                      rest._currentFallback = null;
                      _this["do"](method, rest, path, headers, body, params, callback);
                      return;
                    }
                    callback.apply(void 0, tslib_1.__spreadArray([err], args));
                  });
                  return;
                } else {
                  rest._currentFallback = null;
                }
              }
              var hosts = getHosts(rest);
              if (hosts.length === 1) {
                this.doUri(method, rest, uriFromHost(hosts[0]), headers, body, params, callback);
                return;
              }
              var tryAHost = function(candidateHosts, persistOnSuccess) {
                var host = candidateHosts.shift();
                _this.doUri(method, rest, uriFromHost(host), headers, body, params, function(err) {
                  var args = [];
                  for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                  }
                  if (err && shouldFallback(err) && candidateHosts.length) {
                    tryAHost(candidateHosts, true);
                    return;
                  }
                  if (persistOnSuccess) {
                    rest._currentFallback = {
                      host,
                      validUntil: Date.now() + rest.options.timeouts.fallbackRetryTimeout
                    };
                  }
                  callback.apply(void 0, tslib_1.__spreadArray([err], args));
                });
              };
              tryAHost(hosts);
            };
            class_1.prototype.doUri = function(method, rest, uri, headers, body, params, callback) {
              var agentOptions = rest && rest.options.restAgentOptions || defaults_1["default"].restAgentOptions;
              var doOptions = { headers: headers || void 0, responseType: "buffer" };
              if (!this.agent) {
                this.agent = {
                  http: new http_1["default"].Agent(agentOptions),
                  https: new https_1["default"].Agent(agentOptions)
                };
              }
              if (body) {
                doOptions.body = body;
              }
              if (params)
                doOptions.searchParams = params;
              doOptions.agent = this.agent;
              doOptions.url = uri;
              doOptions.timeout = { request: (rest && rest.options.timeouts || defaults_1["default"].TIMEOUTS).httpRequestTimeout };
              got_1["default"][method](doOptions).then(function(res) {
                handler2(uri, params, callback)(null, res, res.body);
              })["catch"](function(err) {
                if (err instanceof got_1["default"].HTTPError) {
                  handler2(uri, params, callback)(null, err.response, err.response.body);
                  return;
                }
                handler2(uri, params, callback)(err);
              });
            };
            return class_1;
          }(), _a.methods = [HttpMethods_1["default"].Get, HttpMethods_1["default"].Delete, HttpMethods_1["default"].Post, HttpMethods_1["default"].Put, HttpMethods_1["default"].Patch], _a.methodsWithoutBody = [HttpMethods_1["default"].Get, HttpMethods_1["default"].Delete], _a.methodsWithBody = [HttpMethods_1["default"].Post, HttpMethods_1["default"].Put, HttpMethods_1["default"].Patch], _a);
          exports2["default"] = Http;
        },
        function(module3, exports2) {
          module3.exports = __WEBPACK_EXTERNAL_MODULE__54__;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var crypto_1 = tslib_1.__importDefault(__webpack_require__(9));
          var ws_1 = tslib_1.__importDefault(__webpack_require__(56));
          var util_1 = tslib_1.__importDefault(__webpack_require__(26));
          var Platform = {
            agent: "nodejs/" + process.versions.node,
            logTimestamps: true,
            userAgent: null,
            binaryType: "nodebuffer",
            WebSocket: ws_1["default"],
            useProtocolHeartbeats: false,
            createHmac: crypto_1["default"].createHmac,
            msgpack: __webpack_require__(57),
            supportsBinary: true,
            preferBinary: true,
            nextTick: process.nextTick,
            inspect: util_1["default"].inspect,
            stringByteSize: Buffer.byteLength,
            inherits: util_1["default"].inherits,
            addEventListener: null,
            getRandomValues: function(arr, callback) {
              var bytes = crypto_1["default"].randomBytes(arr.length);
              arr.set(bytes);
              if (callback) {
                callback(null);
              }
            },
            Promise: global && global.Promise
          };
          exports2["default"] = Platform;
        },
        function(module3, exports2) {
          module3.exports = __WEBPACK_EXTERNAL_MODULE__56__;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          var bops = __webpack_require__(58);
          exports2.encode = function(value, sparse) {
            var size = sizeof(value, sparse);
            if (size == 0)
              return void 0;
            var buffer = bops.create(size);
            encode(value, buffer, 0, sparse);
            return buffer;
          };
          exports2.decode = decode;
          var SH_L_32 = (1 << 16) * (1 << 16), SH_R_32 = 1 / SH_L_32;
          function readInt64BE(buf, offset) {
            offset = offset || 0;
            return buf.readInt32BE(offset + 0) * SH_L_32 + buf.readUInt32BE(offset + 4);
          }
          function readUInt64BE(buf, offset) {
            offset = offset || 0;
            return buf.readUInt32BE(offset + 0) * SH_L_32 + buf.readUInt32BE(offset + 4);
          }
          function writeInt64BE(buf, val, offset) {
            if (val < 9223372036854776e3) {
              buf.writeInt32BE(Math.floor(val * SH_R_32), offset);
              buf.writeInt32BE(val & -1, offset + 4);
            } else {
              buf.writeUInt32BE(2147483647, offset);
              buf.writeUInt32BE(4294967295, offset + 4);
            }
          }
          function writeUInt64BE(buf, val, offset) {
            if (val < 18446744073709552e3) {
              buf.writeUInt32BE(Math.floor(val * SH_R_32), offset);
              buf.writeInt32BE(val & -1, offset + 4);
            } else {
              buf.writeUInt32BE(4294967295, offset);
              buf.writeUInt32BE(4294967295, offset + 4);
            }
          }
          function Decoder(buffer, offset) {
            this.offset = offset || 0;
            this.buffer = buffer;
            this.bufferLength = buffer.length;
          }
          Decoder.prototype.map = function(length) {
            if (length * 2 > this.bufferLength) {
              throw new Error(`malformed messagepack detected: buffer size was ${this.bufferLength}, but referenced a map of length ${length})`);
            }
            var value = {};
            for (var i = 0; i < length; i++) {
              var key = this.parse();
              value[key] = this.parse();
            }
            return value;
          };
          Decoder.prototype.bin = Decoder.prototype.buf = function(length) {
            if (length > this.bufferLength) {
              throw new Error(`malformed messagepack detected: buffer size was ${this.bufferLength}, but referenced a binary of length ${length})`);
            }
            var value = bops.subarray(this.buffer, this.offset, this.offset + length);
            this.offset += length;
            return value;
          };
          Decoder.prototype.str = function(length) {
            if (length > this.bufferLength) {
              throw new Error(`malformed messagepack detected: buffer size was ${this.bufferLength}, but referenced a string of length ${length})`);
            }
            var value = bops.to(bops.subarray(this.buffer, this.offset, this.offset + length));
            this.offset += length;
            return value;
          };
          Decoder.prototype.array = function(length) {
            if (length > this.bufferLength) {
              throw new Error(`malformed messagepack detected: buffer size was ${this.bufferLength}, but referenced an array of length ${length})`);
            }
            var value = new Array(length);
            for (var i = 0; i < length; i++) {
              value[i] = this.parse();
            }
            return value;
          };
          Decoder.prototype.parse = function() {
            var type = this.buffer[this.offset];
            var value, length, extType;
            if (type === void 0) {
              throw new Error("malformed messagepack (referenced offset is outside buffer)");
            }
            if ((type & 128) === 0) {
              this.offset++;
              return type;
            }
            if ((type & 240) === 128) {
              length = type & 15;
              this.offset++;
              return this.map(length);
            }
            if ((type & 240) === 144) {
              length = type & 15;
              this.offset++;
              return this.array(length);
            }
            if ((type & 224) === 160) {
              length = type & 31;
              this.offset++;
              return this.str(length);
            }
            if ((type & 224) === 224) {
              value = bops.readInt8(this.buffer, this.offset);
              this.offset++;
              return value;
            }
            switch (type) {
              case 192:
                this.offset++;
                return null;
              case 194:
                this.offset++;
                return false;
              case 195:
                this.offset++;
                return true;
              case 196:
                length = bops.readUInt8(this.buffer, this.offset + 1);
                this.offset += 2;
                return this.bin(length);
              case 197:
                length = bops.readUInt16BE(this.buffer, this.offset + 1);
                this.offset += 3;
                return this.bin(length);
              case 198:
                length = bops.readUInt32BE(this.buffer, this.offset + 1);
                this.offset += 5;
                return this.bin(length);
              case 199:
                length = bops.readUInt8(this.buffer, this.offset + 1);
                extType = bops.readUInt8(this.buffer, this.offset + 2);
                this.offset += 3;
                return [extType, this.bin(length)];
              case 200:
                length = bops.readUInt16BE(this.buffer, this.offset + 1);
                extType = bops.readUInt8(this.buffer, this.offset + 3);
                this.offset += 4;
                return [extType, this.bin(length)];
              case 201:
                length = bops.readUInt32BE(this.buffer, this.offset + 1);
                extType = bops.readUInt8(this.buffer, this.offset + 5);
                this.offset += 6;
                return [extType, this.bin(length)];
              case 202:
                value = bops.readFloatBE(this.buffer, this.offset + 1);
                this.offset += 5;
                return value;
              case 203:
                value = bops.readDoubleBE(this.buffer, this.offset + 1);
                this.offset += 9;
                return value;
              case 204:
                value = this.buffer[this.offset + 1];
                this.offset += 2;
                return value;
              case 205:
                value = bops.readUInt16BE(this.buffer, this.offset + 1);
                this.offset += 3;
                return value;
              case 206:
                value = bops.readUInt32BE(this.buffer, this.offset + 1);
                this.offset += 5;
                return value;
              case 207:
                value = readUInt64BE(this.buffer, this.offset + 1);
                this.offset += 9;
                return value;
              case 208:
                value = bops.readInt8(this.buffer, this.offset + 1);
                this.offset += 2;
                return value;
              case 209:
                value = bops.readInt16BE(this.buffer, this.offset + 1);
                this.offset += 3;
                return value;
              case 210:
                value = bops.readInt32BE(this.buffer, this.offset + 1);
                this.offset += 5;
                return value;
              case 211:
                value = readInt64BE(this.buffer, this.offset + 1);
                this.offset += 9;
                return value;
              case 212:
                extType = bops.readUInt8(this.buffer, this.offset + 1);
                value = bops.readUInt8(this.buffer, this.offset + 2);
                this.offset += 3;
                return extType === 0 && value === 0 ? void 0 : [extType, value];
              case 213:
                extType = bops.readUInt8(this.buffer, this.offset + 1);
                this.offset += 2;
                return [extType, this.bin(2)];
              case 214:
                extType = bops.readUInt8(this.buffer, this.offset + 1);
                this.offset += 2;
                return [extType, this.bin(4)];
              case 215:
                extType = bops.readUInt8(this.buffer, this.offset + 1);
                this.offset += 2;
                return [extType, this.bin(8)];
              case 216:
                extType = bops.readUInt8(this.buffer, this.offset + 1);
                this.offset += 2;
                return [extType, this.bin(16)];
              case 217:
                length = bops.readUInt8(this.buffer, this.offset + 1);
                this.offset += 2;
                return this.str(length);
              case 218:
                length = bops.readUInt16BE(this.buffer, this.offset + 1);
                this.offset += 3;
                return this.str(length);
              case 219:
                length = bops.readUInt32BE(this.buffer, this.offset + 1);
                this.offset += 5;
                return this.str(length);
              case 220:
                length = bops.readUInt16BE(this.buffer, this.offset + 1);
                this.offset += 3;
                return this.array(length);
              case 221:
                length = bops.readUInt32BE(this.buffer, this.offset + 1);
                this.offset += 5;
                return this.array(length);
              case 222:
                length = bops.readUInt16BE(this.buffer, this.offset + 1);
                this.offset += 3;
                return this.map(length);
              case 223:
                length = bops.readUInt32BE(this.buffer, this.offset + 1);
                this.offset += 5;
                return this.map(length);
            }
            throw new Error("Unknown type 0x" + type.toString(16));
          };
          function decode(buffer) {
            var decoder = new Decoder(buffer);
            var value = decoder.parse();
            if (decoder.offset !== buffer.length)
              throw new Error(buffer.length - decoder.offset + " trailing bytes");
            return value;
          }
          function encodeableKeys(value, sparse) {
            return Object.keys(value).filter(function(e) {
              var val = value[e], type = typeof val;
              return (!sparse || val !== void 0 && val !== null) && (type !== "function" || !!val.toJSON);
            });
          }
          function encode(value, buffer, offset, sparse, isMapElement) {
            var type = typeof value;
            var length, size;
            if (type === "string") {
              value = bops.from(value);
              length = value.length;
              if (length < 32) {
                buffer[offset] = length | 160;
                bops.copy(value, buffer, offset + 1);
                return 1 + length;
              }
              if (length < 256) {
                buffer[offset] = 217;
                bops.writeUInt8(buffer, length, offset + 1);
                bops.copy(value, buffer, offset + 2);
                return 2 + length;
              }
              if (length < 65536) {
                buffer[offset] = 218;
                bops.writeUInt16BE(buffer, length, offset + 1);
                bops.copy(value, buffer, offset + 3);
                return 3 + length;
              }
              if (length < 4294967296) {
                buffer[offset] = 219;
                bops.writeUInt32BE(buffer, length, offset + 1);
                bops.copy(value, buffer, offset + 5);
                return 5 + length;
              }
            }
            if (bops.is(value)) {
              length = value.length;
              if (length < 256) {
                buffer[offset] = 196;
                bops.writeUInt8(buffer, length, offset + 1);
                bops.copy(value, buffer, offset + 2);
                return 2 + length;
              }
              if (length < 65536) {
                buffer[offset] = 197;
                bops.writeUInt16BE(buffer, length, offset + 1);
                bops.copy(value, buffer, offset + 3);
                return 3 + length;
              }
              if (length < 4294967296) {
                buffer[offset] = 198;
                bops.writeUInt32BE(buffer, length, offset + 1);
                bops.copy(value, buffer, offset + 5);
                return 5 + length;
              }
            }
            if (type === "number") {
              if (Math.floor(value) !== value) {
                buffer[offset] = 203;
                bops.writeDoubleBE(buffer, value, offset + 1);
                return 9;
              }
              if (value >= 0) {
                if (value < 128) {
                  buffer[offset] = value;
                  return 1;
                }
                if (value < 256) {
                  buffer[offset] = 204;
                  buffer[offset + 1] = value;
                  return 2;
                }
                if (value < 65536) {
                  buffer[offset] = 205;
                  bops.writeUInt16BE(buffer, value, offset + 1);
                  return 3;
                }
                if (value < 4294967296) {
                  buffer[offset] = 206;
                  bops.writeUInt32BE(buffer, value, offset + 1);
                  return 5;
                }
                if (value < 18446744073709552e3) {
                  buffer[offset] = 207;
                  writeUInt64BE(buffer, value, offset + 1);
                  return 9;
                }
                throw new Error("Number too big 0x" + value.toString(16));
              }
              if (value >= -32) {
                bops.writeInt8(buffer, value, offset);
                return 1;
              }
              if (value >= -128) {
                buffer[offset] = 208;
                bops.writeInt8(buffer, value, offset + 1);
                return 2;
              }
              if (value >= -32768) {
                buffer[offset] = 209;
                bops.writeInt16BE(buffer, value, offset + 1);
                return 3;
              }
              if (value >= -2147483648) {
                buffer[offset] = 210;
                bops.writeInt32BE(buffer, value, offset + 1);
                return 5;
              }
              if (value >= -9223372036854776e3) {
                buffer[offset] = 211;
                writeInt64BE(buffer, value, offset + 1);
                return 9;
              }
              throw new Error("Number too small -0x" + value.toString(16).substr(1));
            }
            if (type === "undefined") {
              if (sparse && isMapElement)
                return 0;
              buffer[offset] = 212;
              buffer[offset + 1] = 0;
              buffer[offset + 2] = 0;
              return 3;
            }
            if (value === null) {
              if (sparse && isMapElement)
                return 0;
              buffer[offset] = 192;
              return 1;
            }
            if (type === "boolean") {
              buffer[offset] = value ? 195 : 194;
              return 1;
            }
            if (typeof value.toJSON === "function")
              return encode(value.toJSON(), buffer, offset, sparse);
            if (type === "object") {
              size = 0;
              var isArray = Array.isArray(value);
              if (isArray) {
                length = value.length;
              } else {
                var keys = encodeableKeys(value, sparse);
                length = keys.length;
              }
              if (length < 16) {
                buffer[offset] = length | (isArray ? 144 : 128);
                size = 1;
              } else if (length < 65536) {
                buffer[offset] = isArray ? 220 : 222;
                bops.writeUInt16BE(buffer, length, offset + 1);
                size = 3;
              } else if (length < 4294967296) {
                buffer[offset] = isArray ? 221 : 223;
                bops.writeUInt32BE(buffer, length, offset + 1);
                size = 5;
              }
              if (isArray) {
                for (var i = 0; i < length; i++) {
                  size += encode(value[i], buffer, offset + size, sparse);
                }
              } else {
                for (var i = 0; i < length; i++) {
                  var key = keys[i];
                  size += encode(key, buffer, offset + size);
                  size += encode(value[key], buffer, offset + size, sparse, true);
                }
              }
              return size;
            }
            if (type === "function")
              return void 0;
            throw new Error("Unknown type " + type);
          }
          function sizeof(value, sparse, isMapElement) {
            var type = typeof value;
            var length, size;
            if (type === "string") {
              length = bops.from(value).length;
              if (length < 32) {
                return 1 + length;
              }
              if (length < 256) {
                return 2 + length;
              }
              if (length < 65536) {
                return 3 + length;
              }
              if (length < 4294967296) {
                return 5 + length;
              }
            }
            if (bops.is(value)) {
              length = value.length;
              if (length < 256) {
                return 2 + length;
              }
              if (length < 65536) {
                return 3 + length;
              }
              if (length < 4294967296) {
                return 5 + length;
              }
            }
            if (type === "number") {
              if (Math.floor(value) !== value)
                return 9;
              if (value >= 0) {
                if (value < 128)
                  return 1;
                if (value < 256)
                  return 2;
                if (value < 65536)
                  return 3;
                if (value < 4294967296)
                  return 5;
                if (value < 18446744073709552e3)
                  return 9;
                throw new Error("Number too big 0x" + value.toString(16));
              }
              if (value >= -32)
                return 1;
              if (value >= -128)
                return 2;
              if (value >= -32768)
                return 3;
              if (value >= -2147483648)
                return 5;
              if (value >= -9223372036854776e3)
                return 9;
              throw new Error("Number too small -0x" + value.toString(16).substr(1));
            }
            if (type === "boolean")
              return 1;
            if (value === null)
              return sparse && isMapElement ? 0 : 1;
            if (value === void 0)
              return sparse && isMapElement ? 0 : 3;
            if (typeof value.toJSON === "function")
              return sizeof(value.toJSON(), sparse);
            if (type === "object") {
              size = 0;
              if (Array.isArray(value)) {
                length = value.length;
                for (var i = 0; i < length; i++) {
                  size += sizeof(value[i], sparse);
                }
              } else {
                var keys = encodeableKeys(value, sparse);
                length = keys.length;
                for (var i = 0; i < length; i++) {
                  var key = keys[i];
                  size += sizeof(key) + sizeof(value[key], sparse, true);
                }
              }
              if (length < 16) {
                return 1 + size;
              }
              if (length < 65536) {
                return 3 + size;
              }
              if (length < 4294967296) {
                return 5 + size;
              }
              throw new Error("Array or object too long 0x" + length.toString(16));
            }
            if (type === "function")
              return 0;
            throw new Error("Unknown type " + type);
          }
        },
        function(module3, exports2, __webpack_require__) {
          var proto = {};
          module3.exports = proto;
          proto.from = __webpack_require__(59);
          proto.to = __webpack_require__(60);
          proto.is = __webpack_require__(61);
          proto.subarray = __webpack_require__(62);
          proto.join = __webpack_require__(63);
          proto.copy = __webpack_require__(64);
          proto.create = __webpack_require__(65);
          mix(__webpack_require__(66), proto);
          mix(__webpack_require__(67), proto);
          function mix(from, into) {
            for (var key in from) {
              into[key] = from[key];
            }
          }
        },
        function(module3, exports2, __webpack_require__) {
          var Buffer2 = __webpack_require__(12).Buffer;
          var version = ((process || {}).version || "v0.0.0").slice(1).split(".")[0];
          module3.exports = Number(version) < 6 ? function from(source, encoding) {
            return new Buffer2(source, encoding);
          } : function from(source, encoding) {
            return Buffer2.from(source, encoding);
          };
        },
        function(module3, exports2) {
          module3.exports = function(source, encoding) {
            return source.toString(encoding);
          };
        },
        function(module3, exports2, __webpack_require__) {
          var Buffer2 = __webpack_require__(12).Buffer;
          module3.exports = function(buffer) {
            return Buffer2.isBuffer(buffer);
          };
        },
        function(module3, exports2) {
          module3.exports = function(source, from, to) {
            return arguments.length === 2 ? source.slice(from) : source.slice(from, to);
          };
        },
        function(module3, exports2, __webpack_require__) {
          var Buffer2 = __webpack_require__(12).Buffer;
          module3.exports = function(targets, hint) {
            return hint !== void 0 ? Buffer2.concat(targets, hint) : Buffer2.concat(targets);
          };
        },
        function(module3, exports2) {
          module3.exports = copy;
          function copy(source, target, target_start, source_start, source_end) {
            return source.copy(target, target_start, source_start, source_end);
          }
        },
        function(module3, exports2, __webpack_require__) {
          var Buffer2 = __webpack_require__(12).Buffer;
          var version = ((process || {}).version || "v0.0.0").slice(1).split(".")[0];
          module3.exports = Number(version) < 6 ? function create(size) {
            return new Buffer2(size);
          } : function create(size) {
            return Buffer2.alloc(size);
          };
        },
        function(module3, exports2) {
          var proto = {}, rex = /read.+/, buildFn;
          buildFn = function(key2) {
            var code = "return buf." + key2 + "(" + ["a", "b", "c"].join(",") + ")";
            return new Function(["buf", "a", "b", "c"], code);
          };
          module3.exports = proto;
          for (var key in Buffer.prototype) {
            if (rex.test(key)) {
              proto[key] = buildFn(key);
            }
          }
        },
        function(module3, exports2, __webpack_require__) {
          var Buffer2 = __webpack_require__(12).Buffer;
          var proto = {}, rex = /write.+/, buildFn;
          buildFn = function(key2) {
            var code = "return buf." + key2 + "(" + ["a", "b", "c"].join(",") + ")";
            return new Function(["buf", "a", "b", "c"], code);
          };
          module3.exports = proto;
          for (var key in Buffer2.prototype) {
            if (rex.test(key)) {
              proto[key] = buildFn(key);
            }
          }
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var tslib_1 = __webpack_require__(1);
          var TransportNames_1 = tslib_1.__importDefault(__webpack_require__(69));
          var Defaults = {
            internetUpUrl: "https://internet-up.ably-realtime.com/is-the-internet-up.txt",
            defaultTransports: [TransportNames_1["default"].WebSocket],
            baseTransportOrder: [TransportNames_1["default"].Comet, TransportNames_1["default"].WebSocket],
            transportPreferenceOrder: [TransportNames_1["default"].Comet, TransportNames_1["default"].WebSocket],
            upgradeTransports: [TransportNames_1["default"].WebSocket],
            restAgentOptions: { maxSockets: 40, keepAlive: true }
          };
          exports2["default"] = Defaults;
        },
        function(module3, exports2, __webpack_require__) {
          "use strict";
          exports2.__esModule = true;
          var TransportNames;
          (function(TransportNames2) {
            TransportNames2["WebSocket"] = "web_socket";
            TransportNames2["Comet"] = "comet";
            TransportNames2["XhrStreaming"] = "xhr_streaming";
            TransportNames2["XhrPolling"] = "xhr_polling";
            TransportNames2["JsonP"] = "jsonp";
          })(TransportNames || (TransportNames = {}));
          exports2["default"] = TransportNames;
        },
        function(module3, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          var comettransport = __webpack_require__(20);
          var comettransport_default = /* @__PURE__ */ __webpack_require__.n(comettransport);
          var logger = __webpack_require__(0);
          var logger_default = /* @__PURE__ */ __webpack_require__.n(logger);
          var utils = __webpack_require__(2);
          var errorinfo = __webpack_require__(3);
          var errorinfo_default = /* @__PURE__ */ __webpack_require__.n(errorinfo);
          var eventemitter = __webpack_require__(5);
          var eventemitter_default = /* @__PURE__ */ __webpack_require__.n(eventemitter);
          var HttpStatusCodes = __webpack_require__(25);
          var HttpStatusCodes_default = /* @__PURE__ */ __webpack_require__.n(HttpStatusCodes);
          var XHRStates = __webpack_require__(19);
          var XHRStates_default = /* @__PURE__ */ __webpack_require__.n(XHRStates);
          var external_http_ = __webpack_require__(17);
          var external_http_default = /* @__PURE__ */ __webpack_require__.n(external_http_);
          var external_https_ = __webpack_require__(18);
          var external_https_default = /* @__PURE__ */ __webpack_require__.n(external_https_);
          var external_url_ = __webpack_require__(34);
          var external_url_default = /* @__PURE__ */ __webpack_require__.n(external_url_);
          var external_util_ = __webpack_require__(26);
          var external_util_default = /* @__PURE__ */ __webpack_require__.n(external_util_);
          var nodecomettransport_NodeCometTransport = function(connectionManager) {
            var noop = function() {
            };
            var shortName = "comet";
            function NodeCometTransport(connectionManager2, auth, params) {
              comettransport_default.a.call(this, connectionManager2, auth, params);
              this.httpAgent = null;
              this.httpsAgent = null;
              this.pendingRequests = 0;
              this.shortName = shortName;
            }
            external_util_default.a.inherits(NodeCometTransport, comettransport_default.a);
            NodeCometTransport.isAvailable = function() {
              return true;
            };
            connectionManager.supportedTransports[shortName] = NodeCometTransport;
            NodeCometTransport.prototype.toString = function() {
              return "NodeCometTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected + "; format=" + this.format + "; stream=" + this.stream;
            };
            NodeCometTransport.prototype.getAgent = function(tls) {
              var prop = tls ? "httpsAgent" : "httpAgent", agent = this[prop];
              if (!agent)
                agent = this[prop] = new (tls ? external_https_default.a : external_http_default.a).Agent({ keepAlive: true });
              return agent;
            };
            NodeCometTransport.prototype.dispose = function() {
              var self2 = this;
              this.onceNoPending(function() {
                if (self2.httpAgent)
                  self2.httpAgent.destroy();
                if (self2.httpsAgent)
                  self2.httpsAgent.destroy();
              });
              comettransport_default.a.prototype.dispose.call(this);
            };
            NodeCometTransport.prototype.request = function(uri, params, body, requestMode, callback) {
              var req = this.createRequest(uri, params, body, requestMode);
              req.once("complete", callback);
              req.exec();
              return req;
            };
            NodeCometTransport.prototype.createRequest = function(uri, headers, params, body, requestMode) {
              return new Request(uri, headers, params, body, requestMode, this.format, this.timeouts, this);
            };
            NodeCometTransport.prototype.addPending = function() {
              ++this.pendingRequests;
            };
            NodeCometTransport.prototype.removePending = function() {
              if (--this.pendingRequests <= 0) {
                this.emit("nopending");
              }
            };
            NodeCometTransport.prototype.onceNoPending = function(listener) {
              if (this.pendingRequests == 0) {
                listener();
                return;
              }
              this.once("nopending", listener);
            };
            function Request(uri, headers, params, body, requestMode, format, timeouts, transport) {
              eventemitter_default.a.call(this);
              if (typeof uri == "string")
                uri = external_url_default.a.parse(uri);
              var tls = uri.protocol == "https:";
              this.client = tls ? external_https_default.a : external_http_default.a;
              this.requestMode = requestMode;
              this.timeouts = timeouts;
              this.transport = transport;
              this.requestComplete = false;
              this.req = this.res = null;
              var method = "GET", contentType = format == "msgpack" ? "application/x-msgpack" : "application/json";
              headers = headers ? utils["mixin"]({}, headers) : {};
              headers["accept"] = contentType;
              if (body) {
                method = "POST";
                if (!Buffer.isBuffer(body)) {
                  if (typeof body == "object")
                    body = JSON.stringify(body);
                  body = Buffer.from(body);
                }
                this.body = body;
                headers["Content-Length"] = body.length;
                headers["Content-Type"] = contentType;
              }
              var requestOptions = this.requestOptions = {
                hostname: uri.hostname,
                port: uri.port,
                path: uri.path + utils["toQueryString"](params),
                method,
                headers
              };
              if (transport)
                requestOptions.agent = transport.getAgent(tls);
            }
            utils["inherits"](Request, eventemitter_default.a);
            Request.prototype.exec = function() {
              var timeout = this.requestMode == XHRStates_default.a.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout, self2 = this;
              var timer = this.timer = setTimeout(function() {
                self2.abort();
              }, timeout), req = this.req = this.client.request(this.requestOptions);
              req.on("error", this.onReqError = function(err) {
                err = new errorinfo_default.a("Request error: " + err.message, null, 400);
                clearTimeout(timer);
                self2.timer = null;
                self2.complete(err);
              });
              req.on("response", function(res) {
                clearTimeout(timer);
                self2.timer = null;
                var statusCode = res.statusCode;
                if (statusCode == HttpStatusCodes_default.a.NoContent) {
                  res.resume();
                  self2.complete();
                  return;
                }
                res.on("error", self2.onResError = function(err) {
                  err = new errorinfo_default.a("Response error: " + err.message, null, 400);
                  self2.complete(err);
                });
                self2.res = res;
                if (self2.requestMode == XHRStates_default.a.REQ_RECV_STREAM && statusCode < 400) {
                  self2.readStream();
                } else {
                  self2.readFully();
                }
              });
              if (this.transport)
                this.transport.addPending();
              req.end(this.body);
            };
            Request.prototype.readStream = function() {
              var res = this.res, self2 = this;
              this.chunks = [];
              this.streamComplete = false;
              function onChunk(chunk) {
                try {
                  chunk = JSON.parse(chunk);
                } catch (e) {
                  var msg = "Malformed response body from server: " + e.message;
                  logger_default.a.logAction(logger_default.a.LOG_ERROR, "NodeCometTransport.Request.readStream()", msg);
                  self2.complete(new errorinfo_default.a(msg, null, 400));
                  return;
                }
                self2.emit("data", chunk);
              }
              res.on("data", this.ondata = function(data) {
                var newChunks = String(data).split("\n"), chunks = self2.chunks;
                if (newChunks.length > 1 && chunks.length > 0) {
                  chunks.push(newChunks.shift());
                  self2.chunks = [];
                  onChunk(chunks.join(""));
                }
                var trailingNewChunk = newChunks.pop();
                if (trailingNewChunk.length) {
                  self2.chunks.push(trailingNewChunk);
                }
                newChunks.map(onChunk);
              });
              res.on("end", function() {
                self2.streamComplete = true;
                process.nextTick(function() {
                  self2.complete();
                });
              });
            };
            Request.prototype.readFully = function() {
              var res = this.res, chunks = [], self2 = this;
              res.on("data", function(chunk) {
                chunks.push(chunk);
              });
              res.on("end", function() {
                process.nextTick(function() {
                  var body = Buffer.concat(chunks), statusCode = res.statusCode;
                  try {
                    body = JSON.parse(String(body));
                  } catch (e) {
                    var msg = "Malformed response body from server: " + e.message;
                    logger_default.a.logAction(logger_default.a.LOG_ERROR, "NodeCometTransport.Request.readFully()", msg);
                    self2.complete(new errorinfo_default.a(msg, null, 400));
                    return;
                  }
                  if (statusCode < 400 || utils["isArray"](body)) {
                    self2.complete(null, body);
                    return;
                  }
                  var err = body.error && errorinfo_default.a.fromValues(body.error);
                  if (!err) {
                    err = new errorinfo_default.a("Error response received from server: " + statusCode + ", body was: " + utils["inspect"](body), null, statusCode);
                  }
                  self2.complete(err);
                });
              });
            };
            Request.prototype.complete = function(err, body) {
              if (!this.requestComplete) {
                this.requestComplete = true;
                if (body)
                  this.emit("data", body);
                this.emit("complete", err, body);
                if (err) {
                  if (this.ondata && !this.streamComplete) {
                    if (this.ondata && this.res)
                      this.res.removeListener("data", this.ondata);
                  }
                }
                if (this.transport) {
                  this.transport.removePending();
                }
              }
            };
            Request.prototype.abort = function() {
              logger_default.a.logAction(logger_default.a.LOG_MINOR, "NodeCometTransport.Request.abort()", "");
              var timer = this.timer;
              if (timer) {
                clearTimeout(timer);
                this.timer = null;
              }
              var req = this.req;
              if (req) {
                logger_default.a.logAction(logger_default.a.LOG_MINOR, "NodeCometTransport.Request.abort()", "aborting request");
                req.removeListener("error", this.onReqError);
                req.on("error", noop);
                req.abort();
                this.req = null;
              }
              this.complete({ statusCode: 400, code: 80003, message: "Cancelled" });
            };
            return NodeCometTransport;
          };
          var nodecomettransport = nodecomettransport_NodeCometTransport;
          var lib_transport = __webpack_exports__["default"] = [nodecomettransport];
        }
      ])["default"];
    });
  }
});

// api/ably-token-request/node_modules/ably/promises.js
var require_promises = __commonJS({
  "api/ably-token-request/node_modules/ably/promises.js"(exports, module2) {
    "use strict";
    function promisifyOptions(options) {
      if (typeof options == "string") {
        options = options.indexOf(":") == -1 ? { token: options } : { key: options };
      }
      options.promises = true;
      return options;
    }
    var Ably2 = require_ably_node();
    var RestPromise = function(options) {
      return new Ably2.Rest(promisifyOptions(options));
    };
    Object.assign(RestPromise, Ably2.Rest);
    var RealtimePromise = function(options) {
      return new Ably2.Realtime(promisifyOptions(options));
    };
    Object.assign(RealtimePromise, Ably2.Realtime);
    module2.exports = {
      Rest: RestPromise,
      Realtime: RealtimePromise
    };
  }
});

// api/ably-token-request/index.ts
var ably_token_request_exports = {};
__export(ably_token_request_exports, {
  handler: () => handler
});
var dotenv = __toESM(require_main());
var Ably = __toESM(require_promises());
dotenv.config();
async function handler(event, context) {
  if (!process.env.ABLY_API_KEY) {
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(`Missing ABLY_API_KEY environment variable.
        If you're running locally, please ensure you have a ./.env file with a value for ABLY_API_KEY=your-key.
        If you're running in Netlify, make sure you've configured env variable ABLY_API_KEY. 
        Please see README.md for more details on configuring your Ably API Key.`)
    };
  }
  const clientId = event.queryStringParameters["clientId"] || process.env.DEFAULT_CLIENT_ID || "NO_CLIENT_ID";
  const client = new Ably.Rest(process.env.ABLY_API_KEY);
  const tokenRequestData = await client.auth.createTokenRequest({ clientId });
  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(tokenRequestData)
  };
}
module.exports = __toCommonJS(ably_token_request_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/*!
 * @license Copyright 2015-2022 Ably Real-time Ltd (ably.com)
 * 
 * Ably JavaScript Library v1.2.29
 * https://github.com/ably/ably-js
 * 
 * Released under the Apache Licence v2.0
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=index.js.map
