/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Decimal.js":
/*!**************************************************************************!*\
  !*** ./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Decimal.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abs": () => (/* binding */ abs),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "ceiling": () => (/* binding */ ceiling),
/* harmony export */   "compare": () => (/* binding */ compare),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "fromIntArray": () => (/* binding */ fromIntArray),
/* harmony export */   "fromInts": () => (/* binding */ fromInts),
/* harmony export */   "fromParts": () => (/* binding */ fromParts),
/* harmony export */   "getBits": () => (/* binding */ getBits),
/* harmony export */   "get_MaxValue": () => (/* binding */ get_MaxValue),
/* harmony export */   "get_MinValue": () => (/* binding */ get_MinValue),
/* harmony export */   "get_MinusOne": () => (/* binding */ get_MinusOne),
/* harmony export */   "get_One": () => (/* binding */ get_One),
/* harmony export */   "get_Zero": () => (/* binding */ get_Zero),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "op_Addition": () => (/* binding */ op_Addition),
/* harmony export */   "op_Division": () => (/* binding */ op_Division),
/* harmony export */   "op_Modulus": () => (/* binding */ op_Modulus),
/* harmony export */   "op_Multiply": () => (/* binding */ op_Multiply),
/* harmony export */   "op_Subtraction": () => (/* binding */ op_Subtraction),
/* harmony export */   "op_UnaryNegation": () => (/* binding */ op_UnaryNegation),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "pow": () => (/* binding */ pow),
/* harmony export */   "remainder": () => (/* binding */ remainder),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "sqrt": () => (/* binding */ sqrt),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "toNumber": () => (/* binding */ toNumber),
/* harmony export */   "toString": () => (/* binding */ toString),
/* harmony export */   "truncate": () => (/* binding */ truncate),
/* harmony export */   "tryParse": () => (/* binding */ tryParse)
/* harmony export */ });
/* harmony import */ var _lib_big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/big.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/lib/big.js");
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Types.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_big_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
const get_Zero = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__["default"](0);
const get_One = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__["default"](1);
const get_MinusOne = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__["default"](-1);
const get_MaxValue = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__["default"]("79228162514264337593543950335");
const get_MinValue = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__["default"]("-79228162514264337593543950335");
function compare(x, y) {
    return x.cmp(y);
}
function equals(x, y) {
    return !x.cmp(y);
}
function abs(x) {
    return x.abs();
}
function round(x, digits = 0) {
    return x.round(digits, 2 /* ROUND_HALF_EVEN */);
}
function truncate(x) {
    return x.round(0, 0 /* ROUND_DOWN */);
}
function ceiling(x) {
    return x.round(0, x.cmp(0) >= 0 ? 3 /* ROUND_UP */ : 0 /* ROUND_DOWN */);
}
function floor(x) {
    return x.round(0, x.cmp(0) >= 0 ? 0 /* ROUND_DOWN */ : 3 /* ROUND_UP */);
}
function pow(x, n) {
    return x.pow(n);
}
function sqrt(x) {
    return x.sqrt();
}
function op_Addition(x, y) {
    return x.add(y);
}
function op_Subtraction(x, y) {
    return x.sub(y);
}
function op_Multiply(x, y) {
    return x.mul(y);
}
function op_Division(x, y) {
    return x.div(y);
}
function op_Modulus(x, y) {
    return x.mod(y);
}
function op_UnaryNegation(x) {
    const x2 = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__["default"](x);
    x2.s = -x2.s || 0;
    return x2;
}
const add = op_Addition;
const subtract = op_Subtraction;
const multiply = op_Multiply;
const divide = op_Division;
const remainder = op_Modulus;
const negate = op_UnaryNegation;
function toString(x) {
    return x.toString();
}
function tryParse(str, defValue) {
    try {
        defValue.contents = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__["default"](str.trim());
        return true;
    }
    catch (_a) {
        return false;
    }
}
function parse(str) {
    const defValue = new _Types_js__WEBPACK_IMPORTED_MODULE_1__.FSharpRef(get_Zero);
    if (tryParse(str, defValue)) {
        return defValue.contents;
    }
    else {
        throw new Error("Input string was not in a correct format.");
    }
}
function toNumber(x) {
    return +x;
}
function decimalToHex(dec, bitSize) {
    const hex = new Uint8Array(bitSize / 4 | 0);
    let hexCount = 1;
    for (let d = 0; d < dec.length; d++) {
        let value = dec[d];
        for (let i = 0; i < hexCount; i++) {
            const digit = hex[i] * 10 + value | 0;
            hex[i] = digit & 0xF;
            value = digit >> 4;
        }
        if (value !== 0) {
            hex[hexCount++] = value;
        }
    }
    return hex.slice(0, hexCount); // digits in reverse order
}
function hexToDecimal(hex, bitSize) {
    const dec = new Uint8Array(bitSize * 301 / 1000 + 1 | 0);
    let decCount = 1;
    for (let d = hex.length - 1; d >= 0; d--) {
        let carry = hex[d];
        for (let i = 0; i < decCount; i++) {
            const val = dec[i] * 16 + carry | 0;
            dec[i] = (val % 10) | 0;
            carry = (val / 10) | 0;
        }
        while (carry > 0) {
            dec[decCount++] = (carry % 10) | 0;
            carry = (carry / 10) | 0;
        }
    }
    return dec.slice(0, decCount); // digits in reverse order
}
function setInt32Bits(hexDigits, bits, offset) {
    for (let i = 0; i < 8; i++) {
        hexDigits[offset + i] = (bits >> (i * 4)) & 0xF;
    }
}
function getInt32Bits(hexDigits, offset) {
    let bits = 0;
    for (let i = 0; i < 8; i++) {
        bits = bits | (hexDigits[offset + i] << (i * 4));
    }
    return bits;
}
function fromIntArray(bits) {
    return fromInts(bits[0], bits[1], bits[2], bits[3]);
}
function fromInts(low, mid, high, signExp) {
    const isNegative = signExp < 0;
    const scale = (signExp >> 16) & 0x7F;
    return fromParts(low, mid, high, isNegative, scale);
}
function fromParts(low, mid, high, isNegative, scale) {
    const bitSize = 96;
    const hexDigits = new Uint8Array(bitSize / 4);
    setInt32Bits(hexDigits, low, 0);
    setInt32Bits(hexDigits, mid, 8);
    setInt32Bits(hexDigits, high, 16);
    const decDigits = hexToDecimal(hexDigits, bitSize);
    scale = scale & 0x7F;
    const big = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__["default"](0);
    big.c = Array.from(decDigits.reverse());
    big.e = decDigits.length - scale - 1;
    big.s = isNegative ? -1 : 1;
    const d = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__["default"](big);
    return d;
}
function getBits(d) {
    const bitSize = 96;
    const decDigits = Uint8Array.from(d.c);
    const hexDigits = decimalToHex(decDigits, bitSize);
    const low = getInt32Bits(hexDigits, 0);
    const mid = getInt32Bits(hexDigits, 8);
    const high = getInt32Bits(hexDigits, 16);
    const decStr = d.toString();
    const dotPos = decStr.indexOf(".");
    const scale = dotPos < 0 ? 0 : decStr.length - dotPos - 1;
    const signExp = ((scale & 0x7F) << 16) | (d.s < 0 ? 0x80000000 : 0);
    return [low, mid, high, signExp];
}
// export function makeRangeStepFunction(step: Decimal, last: Decimal) {
//   const stepComparedWithZero = step.cmp(get_Zero);
//   if (stepComparedWithZero === 0) {
//     throw new Error("The step of a range cannot be zero");
//   }
//   const stepGreaterThanZero = stepComparedWithZero > 0;
//   return (x: Decimal) => {
//     const comparedWithLast = x.cmp(last);
//     if ((stepGreaterThanZero && comparedWithLast <= 0)
//       || (!stepGreaterThanZero && comparedWithLast >= 0)) {
//       return [x, op_Addition(x, step)];
//     } else {
//       return undefined;
//     }
//   };
// }


/***/ }),

/***/ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Int32.js":
/*!************************************************************************!*\
  !*** ./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Int32.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberStyles": () => (/* binding */ NumberStyles),
/* harmony export */   "divRem": () => (/* binding */ divRem),
/* harmony export */   "isValid": () => (/* binding */ isValid),
/* harmony export */   "op_UnaryNegation_Int16": () => (/* binding */ op_UnaryNegation_Int16),
/* harmony export */   "op_UnaryNegation_Int32": () => (/* binding */ op_UnaryNegation_Int32),
/* harmony export */   "op_UnaryNegation_Int8": () => (/* binding */ op_UnaryNegation_Int8),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "tryParse": () => (/* binding */ tryParse)
/* harmony export */ });
// export type decimal = Decimal;
var NumberStyles;
(function (NumberStyles) {
    // None = 0x00000000,
    // AllowLeadingWhite = 0x00000001,
    // AllowTrailingWhite = 0x00000002,
    // AllowLeadingSign = 0x00000004,
    // AllowTrailingSign = 0x00000008,
    // AllowParentheses = 0x00000010,
    // AllowDecimalPoint = 0x00000020,
    // AllowThousands = 0x00000040,
    // AllowExponent = 0x00000080,
    // AllowCurrencySymbol = 0x00000100,
    NumberStyles[NumberStyles["AllowHexSpecifier"] = 512] = "AllowHexSpecifier";
    // Integer = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign,
    // HexNumber = AllowLeadingWhite | AllowTrailingWhite | AllowHexSpecifier,
    // Number = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
    //          AllowTrailingSign | AllowDecimalPoint | AllowThousands,
    // Float = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
    //         AllowDecimalPoint | AllowExponent,
    // Currency = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
    //            AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol,
    // Any = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
    //       AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol | AllowExponent,
})(NumberStyles || (NumberStyles = {}));
function validResponse(regexMatch, radix) {
    const [/*all*/ , sign, prefix, digits] = regexMatch;
    return {
        sign: sign || "",
        prefix: prefix || "",
        digits,
        radix,
    };
}
function getRange(unsigned, bitsize) {
    switch (bitsize) {
        case 8: return unsigned ? [0, 255] : [-128, 127];
        case 16: return unsigned ? [0, 65535] : [-32768, 32767];
        case 32: return unsigned ? [0, 4294967295] : [-2147483648, 2147483647];
        default: throw new Error("Invalid bit size.");
    }
}
function getInvalidDigits(radix) {
    switch (radix) {
        case 2: return /[^0-1]/;
        case 8: return /[^0-7]/;
        case 10: return /[^0-9]/;
        case 16: return /[^0-9a-fA-F]/;
        default:
            throw new Error("Invalid Base.");
    }
}
function getRadix(prefix, style) {
    if (style & NumberStyles.AllowHexSpecifier) {
        return 16;
    }
    else {
        switch (prefix) {
            case "0b":
            case "0B": return 2;
            case "0o":
            case "0O": return 8;
            case "0x":
            case "0X": return 16;
            default: return 10;
        }
    }
}
function isValid(str, style, radix) {
    const integerRegex = /^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/;
    const res = integerRegex.exec(str.replace(/_/g, ""));
    if (res != null) {
        const [/*all*/ , /*sign*/ , prefix, digits] = res;
        radix = radix || getRadix(prefix, style);
        const invalidDigits = getInvalidDigits(radix);
        if (!invalidDigits.test(digits)) {
            return validResponse(res, radix);
        }
    }
    return null;
}
function parse(str, style, unsigned, bitsize, radix) {
    const res = isValid(str, style, radix);
    if (res != null) {
        let v = Number.parseInt(res.sign + res.digits, res.radix);
        if (!Number.isNaN(v)) {
            const [umin, umax] = getRange(true, bitsize);
            if (!unsigned && res.radix !== 10 && v >= umin && v <= umax) {
                v = v << (32 - bitsize) >> (32 - bitsize);
            }
            const [min, max] = getRange(unsigned, bitsize);
            if (v >= min && v <= max) {
                return v;
            }
        }
    }
    throw new Error("Input string was not in a correct format.");
}
function tryParse(str, style, unsigned, bitsize, defValue) {
    try {
        defValue.contents = parse(str, style, unsigned, bitsize);
        return true;
    }
    catch (_a) {
        return false;
    }
}
function op_UnaryNegation_Int8(x) {
    return x === -128 ? x : -x;
}
function op_UnaryNegation_Int16(x) {
    return x === -32768 ? x : -x;
}
function op_UnaryNegation_Int32(x) {
    return x === -2147483648 ? x : -x;
}
function divRem(x, y, out) {
    const div = ~~(x / y);
    const rem = x % y;
    if (out === void 0) {
        return [div, rem];
    }
    else {
        out.contents = rem;
        return div;
    }
}


/***/ }),

/***/ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Long.js":
/*!***********************************************************************!*\
  !*** ./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Long.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abs": () => (/* binding */ abs),
/* harmony export */   "compare": () => (/* binding */ compare),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "divRem": () => (/* binding */ divRem),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "fromBits": () => (/* binding */ fromBits),
/* harmony export */   "fromBytes": () => (/* binding */ fromBytes),
/* harmony export */   "fromInt": () => (/* binding */ fromInt),
/* harmony export */   "fromInteger": () => (/* binding */ fromInteger),
/* harmony export */   "fromNumber": () => (/* binding */ fromNumber),
/* harmony export */   "fromString": () => (/* binding */ fromString),
/* harmony export */   "fromValue": () => (/* binding */ fromValue),
/* harmony export */   "getHighBits": () => (/* binding */ getHighBits),
/* harmony export */   "getHighBitsUnsigned": () => (/* binding */ getHighBitsUnsigned),
/* harmony export */   "getLowBits": () => (/* binding */ getLowBits),
/* harmony export */   "getLowBitsUnsigned": () => (/* binding */ getLowBitsUnsigned),
/* harmony export */   "get_One": () => (/* binding */ get_One),
/* harmony export */   "get_Zero": () => (/* binding */ get_Zero),
/* harmony export */   "op_Addition": () => (/* binding */ op_Addition),
/* harmony export */   "op_BitwiseAnd": () => (/* binding */ op_BitwiseAnd),
/* harmony export */   "op_BitwiseOr": () => (/* binding */ op_BitwiseOr),
/* harmony export */   "op_Division": () => (/* binding */ op_Division),
/* harmony export */   "op_Equality": () => (/* binding */ op_Equality),
/* harmony export */   "op_ExclusiveOr": () => (/* binding */ op_ExclusiveOr),
/* harmony export */   "op_GreaterThan": () => (/* binding */ op_GreaterThan),
/* harmony export */   "op_GreaterThanOrEqual": () => (/* binding */ op_GreaterThanOrEqual),
/* harmony export */   "op_Inequality": () => (/* binding */ op_Inequality),
/* harmony export */   "op_LeftShift": () => (/* binding */ op_LeftShift),
/* harmony export */   "op_LessThan": () => (/* binding */ op_LessThan),
/* harmony export */   "op_LessThanOrEqual": () => (/* binding */ op_LessThanOrEqual),
/* harmony export */   "op_LogicalNot": () => (/* binding */ op_LogicalNot),
/* harmony export */   "op_Modulus": () => (/* binding */ op_Modulus),
/* harmony export */   "op_Multiply": () => (/* binding */ op_Multiply),
/* harmony export */   "op_RightShift": () => (/* binding */ op_RightShift),
/* harmony export */   "op_RightShiftUnsigned": () => (/* binding */ op_RightShiftUnsigned),
/* harmony export */   "op_Subtraction": () => (/* binding */ op_Subtraction),
/* harmony export */   "op_UnaryNegation": () => (/* binding */ op_UnaryNegation),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "ticksToUnixEpochMilliseconds": () => (/* binding */ ticksToUnixEpochMilliseconds),
/* harmony export */   "toBytes": () => (/* binding */ toBytes),
/* harmony export */   "toInt": () => (/* binding */ toInt),
/* harmony export */   "toNumber": () => (/* binding */ toNumber),
/* harmony export */   "toString": () => (/* binding */ toString),
/* harmony export */   "tryParse": () => (/* binding */ tryParse),
/* harmony export */   "unixEpochMillisecondsToTicks": () => (/* binding */ unixEpochMillisecondsToTicks)
/* harmony export */ });
/* harmony import */ var _Int32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Int32.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Int32.js");
/* harmony import */ var _lib_long_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/long.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/lib/long.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_long_js__WEBPACK_IMPORTED_MODULE_0__.Long);
const get_Zero = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.ZERO;
const get_One = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.ONE;
const op_Addition = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.add;
const op_Subtraction = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.subtract;
const op_Multiply = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.multiply;
const op_Division = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.divide;
const op_Modulus = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.modulo;
const op_UnaryNegation = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.negate;
const op_LeftShift = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.shiftLeft;
const op_RightShift = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.shiftRight;
const op_RightShiftUnsigned = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.shiftRightUnsigned;
const op_BitwiseAnd = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.and;
const op_BitwiseOr = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.or;
const op_ExclusiveOr = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.xor;
const op_LogicalNot = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.not;
const op_LessThan = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.lessThan;
const op_LessThanOrEqual = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.lessThanOrEqual;
const op_GreaterThan = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.greaterThan;
const op_GreaterThanOrEqual = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.greaterThanOrEqual;
const op_Equality = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.equals;
const op_Inequality = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.notEquals;
const equals = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.equals;
const compare = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.compare;
const fromInt = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.fromInt;
const fromBits = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.fromBits;
const fromBytes = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.fromBytes;
const fromNumber = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.fromNumber;
const fromString = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.fromString;
const fromValue = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.fromValue;
const toInt = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.toInt;
const toBytes = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.toBytes;
const toNumber = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.toNumber;
const toString = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.toString;
const getLowBits = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.getLowBits;
const getHighBits = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.getHighBits;
const getLowBitsUnsigned = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.getLowBitsUnsigned;
const getHighBitsUnsigned = _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.getHighBitsUnsigned;
function getMaxValue(unsigned, radix, isNegative) {
    switch (radix) {
        case 2: return unsigned ?
            "1111111111111111111111111111111111111111111111111111111111111111" :
            (isNegative ? "1000000000000000000000000000000000000000000000000000000000000000"
                : "111111111111111111111111111111111111111111111111111111111111111");
        case 8: return unsigned ?
            "1777777777777777777777" :
            (isNegative ? "1000000000000000000000" : "777777777777777777777");
        case 10: return unsigned ?
            "18446744073709551615" :
            (isNegative ? "9223372036854775808" : "9223372036854775807");
        case 16: return unsigned ?
            "FFFFFFFFFFFFFFFF" :
            (isNegative ? "8000000000000000" : "7FFFFFFFFFFFFFFF");
        default: throw new Error("Invalid radix.");
    }
}
function abs(x) {
    if (!x.unsigned && _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.isNegative(x)) {
        return op_UnaryNegation(x);
    }
    else {
        return x;
    }
}
function fromInteger(value, unsigned, kind) {
    let x = value;
    let xh = 0;
    switch (kind) {
        case 0:
            x = value << 24 >> 24;
            xh = x;
            break;
        case 4:
            x = value << 24 >>> 24;
            break;
        case 1:
            x = value << 16 >> 16;
            xh = x;
            break;
        case 5:
            x = value << 16 >>> 16;
            break;
        case 2:
            x = value >> 0;
            xh = x;
            break;
        case 6:
            x = value >>> 0;
            break;
    }
    return _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.fromBits(x, xh >> 31, unsigned);
}
function parse(str, style, unsigned, _bitsize, radix) {
    const res = (0,_Int32_js__WEBPACK_IMPORTED_MODULE_1__.isValid)(str, style, radix);
    if (res != null) {
        const lessOrEqual = (x, y) => {
            const len = Math.max(x.length, y.length);
            return x.padStart(len, "0") <= y.padStart(len, "0");
        };
        const isNegative = res.sign === "-";
        const maxValue = getMaxValue(unsigned || res.radix !== 10, res.radix, isNegative);
        if (lessOrEqual(res.digits.toUpperCase(), maxValue)) {
            str = isNegative ? res.sign + res.digits : res.digits;
            return _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.fromString(str, unsigned, res.radix);
        }
    }
    throw new Error("Input string was not in a correct format.");
}
function tryParse(str, style, unsigned, bitsize, defValue) {
    try {
        defValue.contents = parse(str, style, unsigned, bitsize);
        return true;
    }
    catch (_a) {
        return false;
    }
}
function unixEpochMillisecondsToTicks(ms, offset) {
    return op_Multiply(op_Addition(op_Addition(_lib_long_js__WEBPACK_IMPORTED_MODULE_0__.fromNumber(ms), 62135596800000), offset), 10000);
}
function ticksToUnixEpochMilliseconds(ticks) {
    return _lib_long_js__WEBPACK_IMPORTED_MODULE_0__.toNumber(op_Subtraction(op_Division(ticks, 10000), 62135596800000));
}
function divRem(x, y, out) {
    const div = op_Division(x, y);
    const rem = op_Modulus(x, y);
    if (out === void 0) {
        return [div, rem];
    }
    else {
        out.contents = rem;
        return div;
    }
}


/***/ }),

/***/ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Numeric.js":
/*!**************************************************************************!*\
  !*** ./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Numeric.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compare": () => (/* binding */ compare),
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "symbol": () => (/* binding */ symbol),
/* harmony export */   "toExponential": () => (/* binding */ toExponential),
/* harmony export */   "toFixed": () => (/* binding */ toFixed),
/* harmony export */   "toHex": () => (/* binding */ toHex),
/* harmony export */   "toPrecision": () => (/* binding */ toPrecision)
/* harmony export */ });
const symbol = Symbol("numeric");
function isNumeric(x) {
    return typeof x === "number" || (x === null || x === void 0 ? void 0 : x[symbol]);
}
function compare(x, y) {
    if (typeof x === "number") {
        return x < y ? -1 : (x > y ? 1 : 0);
    }
    else {
        return x.CompareTo(y);
    }
}
function multiply(x, y) {
    if (typeof x === "number") {
        return x * y;
    }
    else {
        return x[symbol]().multiply(y);
    }
}
function toFixed(x, dp) {
    if (typeof x === "number") {
        return x.toFixed(dp);
    }
    else {
        return x[symbol]().toFixed(dp);
    }
}
function toPrecision(x, sd) {
    if (typeof x === "number") {
        return x.toPrecision(sd);
    }
    else {
        return x[symbol]().toPrecision(sd);
    }
}
function toExponential(x, dp) {
    if (typeof x === "number") {
        return x.toExponential(dp);
    }
    else {
        return x[symbol]().toExponential(dp);
    }
}
function toHex(x) {
    if (typeof x === "number") {
        return (Number(x) >>> 0).toString(16);
    }
    else {
        return x[symbol]().toHex();
    }
}


/***/ }),

/***/ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Option.js":
/*!*************************************************************************!*\
  !*** ./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Option.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Some": () => (/* binding */ Some),
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "defaultArg": () => (/* binding */ defaultArg),
/* harmony export */   "defaultArgWith": () => (/* binding */ defaultArgWith),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "flatten": () => (/* binding */ flatten),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "map2": () => (/* binding */ map2),
/* harmony export */   "map3": () => (/* binding */ map3),
/* harmony export */   "ofNullable": () => (/* binding */ ofNullable),
/* harmony export */   "orElse": () => (/* binding */ orElse),
/* harmony export */   "orElseWith": () => (/* binding */ orElseWith),
/* harmony export */   "some": () => (/* binding */ some),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "toNullable": () => (/* binding */ toNullable),
/* harmony export */   "tryOp": () => (/* binding */ tryOp),
/* harmony export */   "value": () => (/* binding */ value)
/* harmony export */ });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Util.js");

// Using a class here for better compatibility with TS files importing Some
class Some {
    constructor(value) {
        this.value = value;
    }
    toJSON() {
        return this.value;
    }
    // Don't add "Some" for consistency with erased options
    toString() {
        return String(this.value);
    }
    GetHashCode() {
        return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.structuralHash)(this.value);
    }
    Equals(other) {
        if (other == null) {
            return false;
        }
        else {
            return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.equals)(this.value, other instanceof Some ? other.value : other);
        }
    }
    CompareTo(other) {
        if (other == null) {
            return 1;
        }
        else {
            return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.compare)(this.value, other instanceof Some ? other.value : other);
        }
    }
}
function some(x) {
    return x == null || x instanceof Some ? new Some(x) : x;
}
function value(x) {
    if (x == null) {
        throw new Error("Option has no value");
    }
    else {
        return x instanceof Some ? x.value : x;
    }
}
function ofNullable(x) {
    // This will fail with unit probably, an alternative would be:
    // return x === null ? undefined : (x === undefined ? new Some(x) : x);
    return x == null ? undefined : x;
}
function toNullable(x) {
    return x == null ? null : value(x);
}
function flatten(x) {
    return x == null ? undefined : value(x);
}
function toArray(opt) {
    return (opt == null) ? [] : [value(opt)];
}
function defaultArg(opt, defaultValue) {
    return (opt != null) ? value(opt) : defaultValue;
}
function defaultArgWith(opt, defThunk) {
    return (opt != null) ? value(opt) : defThunk();
}
function orElse(opt, ifNone) {
    return opt == null ? ifNone : opt;
}
function orElseWith(opt, ifNoneThunk) {
    return opt == null ? ifNoneThunk() : opt;
}
function filter(predicate, opt) {
    return (opt != null) ? (predicate(value(opt)) ? opt : undefined) : opt;
}
function map(mapping, opt) {
    return (opt != null) ? some(mapping(value(opt))) : undefined;
}
function map2(mapping, opt1, opt2) {
    return (opt1 != null && opt2 != null) ? mapping(value(opt1), value(opt2)) : undefined;
}
function map3(mapping, opt1, opt2, opt3) {
    return (opt1 != null && opt2 != null && opt3 != null) ? mapping(value(opt1), value(opt2), value(opt3)) : undefined;
}
function bind(binder, opt) {
    return opt != null ? binder(value(opt)) : undefined;
}
function tryOp(op, arg) {
    try {
        return some(op(arg));
    }
    catch (_a) {
        return undefined;
    }
}


/***/ }),

/***/ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Reflection.js":
/*!*****************************************************************************!*\
  !*** ./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Reflection.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseInfo": () => (/* binding */ CaseInfo),
/* harmony export */   "GenericParameter": () => (/* binding */ GenericParameter),
/* harmony export */   "MethodInfo": () => (/* binding */ MethodInfo),
/* harmony export */   "TypeInfo": () => (/* binding */ TypeInfo),
/* harmony export */   "anonRecord_type": () => (/* binding */ anonRecord_type),
/* harmony export */   "array_type": () => (/* binding */ array_type),
/* harmony export */   "bigint_type": () => (/* binding */ bigint_type),
/* harmony export */   "bool_type": () => (/* binding */ bool_type),
/* harmony export */   "char_type": () => (/* binding */ char_type),
/* harmony export */   "class_type": () => (/* binding */ class_type),
/* harmony export */   "createInstance": () => (/* binding */ createInstance),
/* harmony export */   "decimal_type": () => (/* binding */ decimal_type),
/* harmony export */   "delegate_type": () => (/* binding */ delegate_type),
/* harmony export */   "enum_type": () => (/* binding */ enum_type),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "float32_type": () => (/* binding */ float32_type),
/* harmony export */   "float64_type": () => (/* binding */ float64_type),
/* harmony export */   "fullName": () => (/* binding */ fullName),
/* harmony export */   "generic_type": () => (/* binding */ generic_type),
/* harmony export */   "getCaseFields": () => (/* binding */ getCaseFields),
/* harmony export */   "getCaseName": () => (/* binding */ getCaseName),
/* harmony export */   "getCaseTag": () => (/* binding */ getCaseTag),
/* harmony export */   "getElementType": () => (/* binding */ getElementType),
/* harmony export */   "getEnumName": () => (/* binding */ getEnumName),
/* harmony export */   "getEnumNames": () => (/* binding */ getEnumNames),
/* harmony export */   "getEnumUnderlyingType": () => (/* binding */ getEnumUnderlyingType),
/* harmony export */   "getEnumValues": () => (/* binding */ getEnumValues),
/* harmony export */   "getFunctionElements": () => (/* binding */ getFunctionElements),
/* harmony export */   "getGenericTypeDefinition": () => (/* binding */ getGenericTypeDefinition),
/* harmony export */   "getGenerics": () => (/* binding */ getGenerics),
/* harmony export */   "getHashCode": () => (/* binding */ getHashCode),
/* harmony export */   "getRecordElements": () => (/* binding */ getRecordElements),
/* harmony export */   "getRecordField": () => (/* binding */ getRecordField),
/* harmony export */   "getRecordFields": () => (/* binding */ getRecordFields),
/* harmony export */   "getTupleElements": () => (/* binding */ getTupleElements),
/* harmony export */   "getTupleField": () => (/* binding */ getTupleField),
/* harmony export */   "getTupleFields": () => (/* binding */ getTupleFields),
/* harmony export */   "getUnionCaseFields": () => (/* binding */ getUnionCaseFields),
/* harmony export */   "getUnionCases": () => (/* binding */ getUnionCases),
/* harmony export */   "getUnionFields": () => (/* binding */ getUnionFields),
/* harmony export */   "getValue": () => (/* binding */ getValue),
/* harmony export */   "int16_type": () => (/* binding */ int16_type),
/* harmony export */   "int32_type": () => (/* binding */ int32_type),
/* harmony export */   "int64_type": () => (/* binding */ int64_type),
/* harmony export */   "int8_type": () => (/* binding */ int8_type),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isEnum": () => (/* binding */ isEnum),
/* harmony export */   "isEnumDefined": () => (/* binding */ isEnumDefined),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isGenericParameter": () => (/* binding */ isGenericParameter),
/* harmony export */   "isGenericType": () => (/* binding */ isGenericType),
/* harmony export */   "isInstanceOfType": () => (/* binding */ isInstanceOfType),
/* harmony export */   "isRecord": () => (/* binding */ isRecord),
/* harmony export */   "isSubclassOf": () => (/* binding */ isSubclassOf),
/* harmony export */   "isTuple": () => (/* binding */ isTuple),
/* harmony export */   "isUnion": () => (/* binding */ isUnion),
/* harmony export */   "lambda_type": () => (/* binding */ lambda_type),
/* harmony export */   "list_type": () => (/* binding */ list_type),
/* harmony export */   "makeGenericType": () => (/* binding */ makeGenericType),
/* harmony export */   "makeRecord": () => (/* binding */ makeRecord),
/* harmony export */   "makeTuple": () => (/* binding */ makeTuple),
/* harmony export */   "makeUnion": () => (/* binding */ makeUnion),
/* harmony export */   "measure_type": () => (/* binding */ measure_type),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "namespace": () => (/* binding */ namespace),
/* harmony export */   "nativeint_type": () => (/* binding */ nativeint_type),
/* harmony export */   "obj_type": () => (/* binding */ obj_type),
/* harmony export */   "option_type": () => (/* binding */ option_type),
/* harmony export */   "parseEnum": () => (/* binding */ parseEnum),
/* harmony export */   "record_type": () => (/* binding */ record_type),
/* harmony export */   "string_type": () => (/* binding */ string_type),
/* harmony export */   "tryParseEnum": () => (/* binding */ tryParseEnum),
/* harmony export */   "tuple_type": () => (/* binding */ tuple_type),
/* harmony export */   "uint16_type": () => (/* binding */ uint16_type),
/* harmony export */   "uint32_type": () => (/* binding */ uint32_type),
/* harmony export */   "uint64_type": () => (/* binding */ uint64_type),
/* harmony export */   "uint8_type": () => (/* binding */ uint8_type),
/* harmony export */   "unativeint_type": () => (/* binding */ unativeint_type),
/* harmony export */   "union_type": () => (/* binding */ union_type),
/* harmony export */   "unit_type": () => (/* binding */ unit_type)
/* harmony export */ });
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Types.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Util.js");
/* harmony import */ var _Decimal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Decimal.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Decimal.js");
/* harmony import */ var _Long_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Long.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Long.js");




class CaseInfo {
    constructor(declaringType, tag, name, fields) {
        this.declaringType = declaringType;
        this.tag = tag;
        this.name = name;
        this.fields = fields;
    }
}
class MethodInfo {
    constructor(name, parameters, returnType) {
        this.name = name;
        this.parameters = parameters;
        this.returnType = returnType;
    }
}
class TypeInfo {
    constructor(fullname, generics, construct, parent, fields, cases, enumCases) {
        this.fullname = fullname;
        this.generics = generics;
        this.construct = construct;
        this.parent = parent;
        this.fields = fields;
        this.cases = cases;
        this.enumCases = enumCases;
    }
    toString() {
        return fullName(this);
    }
    GetHashCode() {
        return getHashCode(this);
    }
    Equals(other) {
        return equals(this, other);
    }
}
class GenericParameter extends TypeInfo {
    constructor(name) {
        super(name);
    }
}
function getGenerics(t) {
    return t.generics != null ? t.generics : [];
}
function getHashCode(t) {
    const fullnameHash = (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.stringHash)(t.fullname);
    const genHashes = getGenerics(t).map(getHashCode);
    return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.combineHashCodes)([fullnameHash, ...genHashes]);
}
function equals(t1, t2) {
    if (t1.fullname === "") { // Anonymous records
        return t2.fullname === ""
            && (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.equalArraysWith)(getRecordElements(t1), getRecordElements(t2), ([k1, v1], [k2, v2]) => k1 === k2 && equals(v1, v2));
    }
    else {
        return t1.fullname === t2.fullname
            && (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.equalArraysWith)(getGenerics(t1), getGenerics(t2), equals);
    }
}
function class_type(fullname, generics, construct, parent) {
    return new TypeInfo(fullname, generics, construct, parent);
}
function record_type(fullname, generics, construct, fields) {
    return new TypeInfo(fullname, generics, construct, undefined, fields);
}
function anonRecord_type(...fields) {
    return new TypeInfo("", undefined, undefined, undefined, () => fields);
}
function union_type(fullname, generics, construct, cases) {
    const t = new TypeInfo(fullname, generics, construct, undefined, undefined, () => {
        const caseNames = construct.prototype.cases();
        return cases().map((fields, i) => new CaseInfo(t, i, caseNames[i], fields));
    });
    return t;
}
function tuple_type(...generics) {
    return new TypeInfo("System.Tuple`" + generics.length, generics);
}
function delegate_type(...generics) {
    return new TypeInfo("System.Func`" + generics.length, generics);
}
function lambda_type(argType, returnType) {
    return new TypeInfo("Microsoft.FSharp.Core.FSharpFunc`2", [argType, returnType]);
}
function option_type(generic) {
    return new TypeInfo("Microsoft.FSharp.Core.FSharpOption`1", [generic]);
}
function list_type(generic) {
    return new TypeInfo("Microsoft.FSharp.Collections.FSharpList`1", [generic]);
}
function array_type(generic) {
    return new TypeInfo("[]", [generic]);
}
function enum_type(fullname, underlyingType, enumCases) {
    return new TypeInfo(fullname, [underlyingType], undefined, undefined, undefined, undefined, enumCases);
}
function measure_type(fullname) {
    return new TypeInfo(fullname);
}
function generic_type(name) {
    return new GenericParameter(name);
}
const obj_type = new TypeInfo("System.Object");
const unit_type = new TypeInfo("Microsoft.FSharp.Core.Unit");
const char_type = new TypeInfo("System.Char");
const string_type = new TypeInfo("System.String");
const bool_type = new TypeInfo("System.Boolean");
const int8_type = new TypeInfo("System.SByte");
const uint8_type = new TypeInfo("System.Byte");
const int16_type = new TypeInfo("System.Int16");
const uint16_type = new TypeInfo("System.UInt16");
const int32_type = new TypeInfo("System.Int32");
const uint32_type = new TypeInfo("System.UInt32");
const int64_type = new TypeInfo("System.Int64");
const uint64_type = new TypeInfo("System.UInt64");
const bigint_type = new TypeInfo("System.Numerics.BigInteger");
const nativeint_type = new TypeInfo("System.IntPtr");
const unativeint_type = new TypeInfo("System.UIntPtr");
const float32_type = new TypeInfo("System.Single");
const float64_type = new TypeInfo("System.Double");
const decimal_type = new TypeInfo("System.Decimal");
function name(info) {
    if (Array.isArray(info)) {
        return info[0];
    }
    else if (info instanceof TypeInfo) {
        const elemType = getElementType(info);
        if (elemType != null) {
            return name(elemType) + "[]";
        }
        else {
            const i = info.fullname.lastIndexOf(".");
            return i === -1 ? info.fullname : info.fullname.substr(i + 1);
        }
    }
    else {
        return info.name;
    }
}
function fullName(t) {
    const elemType = getElementType(t);
    if (elemType != null) {
        return fullName(elemType) + "[]";
    }
    else if (t.generics == null || t.generics.length === 0) {
        return t.fullname;
    }
    else {
        return t.fullname + "[" + t.generics.map((x) => fullName(x)).join(",") + "]";
    }
}
function namespace(t) {
    const elemType = getElementType(t);
    if (elemType != null) {
        return namespace(elemType);
    }
    else {
        const i = t.fullname.lastIndexOf(".");
        return i === -1 ? "" : t.fullname.substr(0, i);
    }
}
function isArray(t) {
    return getElementType(t) != null;
}
function getElementType(t) {
    var _a;
    return t.fullname === "[]" && ((_a = t.generics) === null || _a === void 0 ? void 0 : _a.length) === 1 ? t.generics[0] : undefined;
}
function isGenericType(t) {
    return t.generics != null && t.generics.length > 0;
}
function isGenericParameter(t) {
    return t instanceof GenericParameter;
}
function isEnum(t) {
    return t.enumCases != null && t.enumCases.length > 0;
}
function isSubclassOf(t1, t2) {
    return (t2.fullname === obj_type.fullname) || (t1.parent != null && (t1.parent.Equals(t2) || isSubclassOf(t1.parent, t2)));
}
function isErasedToNumber(t) {
    return isEnum(t) || [
        int8_type.fullname,
        uint8_type.fullname,
        int16_type.fullname,
        uint16_type.fullname,
        int32_type.fullname,
        uint32_type.fullname,
        float32_type.fullname,
        float64_type.fullname,
    ].includes(t.fullname);
}
function isInstanceOfType(t, o) {
    if (t.fullname === obj_type.fullname)
        return true;
    switch (typeof o) {
        case "boolean":
            return t.fullname === bool_type.fullname;
        case "string":
            return t.fullname === string_type.fullname;
        case "function":
            return isFunction(t);
        case "number":
            return isErasedToNumber(t);
        default:
            return t.construct != null && o instanceof t.construct;
    }
}
/**
 * This doesn't replace types for fields (records) or cases (unions)
 * but it should be enough for type comparison purposes
 */
function getGenericTypeDefinition(t) {
    return t.generics == null ? t : new TypeInfo(t.fullname, t.generics.map(() => obj_type));
}
function getEnumUnderlyingType(t) {
    var _a;
    return (_a = t.generics) === null || _a === void 0 ? void 0 : _a[0];
}
function getEnumValues(t) {
    if (isEnum(t) && t.enumCases != null) {
        return t.enumCases.map((kv) => kv[1]);
    }
    else {
        throw new Error(`${t.fullname} is not an enum type`);
    }
}
function getEnumNames(t) {
    if (isEnum(t) && t.enumCases != null) {
        return t.enumCases.map((kv) => kv[0]);
    }
    else {
        throw new Error(`${t.fullname} is not an enum type`);
    }
}
function getEnumCase(t, v) {
    if (t.enumCases != null) {
        if (typeof v === "string") {
            for (const kv of t.enumCases) {
                if (kv[0] === v) {
                    return kv;
                }
            }
            throw new Error(`'${v}' was not found in ${t.fullname}`);
        }
        else {
            for (const kv of t.enumCases) {
                if (kv[1] === v) {
                    return kv;
                }
            }
            // .NET returns the number even if it doesn't match any of the cases
            return ["", v];
        }
    }
    else {
        throw new Error(`${t.fullname} is not an enum type`);
    }
}
function parseEnum(t, str) {
    // TODO: better int parsing here, parseInt ceils floats: "4.8" -> 4
    const value = parseInt(str, 10);
    return getEnumCase(t, isNaN(value) ? str : value)[1];
}
function tryParseEnum(t, str, defValue) {
    try {
        defValue.contents = parseEnum(t, str);
        return true;
    }
    catch (_a) {
        return false;
    }
}
function getEnumName(t, v) {
    return getEnumCase(t, v)[0];
}
function isEnumDefined(t, v) {
    try {
        const kv = getEnumCase(t, v);
        return kv[0] != null && kv[0] !== "";
    }
    catch (_a) {
        // supress error
    }
    return false;
}
// FSharpType
function getUnionCases(t) {
    if (t.cases != null) {
        return t.cases();
    }
    else {
        throw new Error(`${t.fullname} is not an F# union type`);
    }
}
function getRecordElements(t) {
    if (t.fields != null) {
        return t.fields();
    }
    else {
        throw new Error(`${t.fullname} is not an F# record type`);
    }
}
function getTupleElements(t) {
    if (isTuple(t) && t.generics != null) {
        return t.generics;
    }
    else {
        throw new Error(`${t.fullname} is not a tuple type`);
    }
}
function getFunctionElements(t) {
    if (isFunction(t) && t.generics != null) {
        const gen = t.generics;
        return [gen[0], gen[1]];
    }
    else {
        throw new Error(`${t.fullname} is not an F# function type`);
    }
}
function isUnion(t) {
    return t instanceof TypeInfo ? t.cases != null : t instanceof _Types_js__WEBPACK_IMPORTED_MODULE_1__.Union;
}
function isRecord(t) {
    return t instanceof TypeInfo ? t.fields != null : t instanceof _Types_js__WEBPACK_IMPORTED_MODULE_1__.Record;
}
function isTuple(t) {
    return t.fullname.startsWith("System.Tuple");
}
// In .NET this is false for delegates
function isFunction(t) {
    return t.fullname === "Microsoft.FSharp.Core.FSharpFunc`2";
}
// FSharpValue
function getUnionFields(v, t) {
    const cases = getUnionCases(t);
    const case_ = cases[v.tag];
    if (case_ == null) {
        throw new Error(`Cannot find case ${v.name} in union type`);
    }
    return [case_, v.fields];
}
function getUnionCaseFields(uci) {
    return uci.fields == null ? [] : uci.fields;
}
// This is used as replacement of `FSharpValue.GetRecordFields`
// For `FSharpTypes.GetRecordFields` see `getRecordElements`
// Object.keys returns keys in the order they were added to the object
function getRecordFields(v) {
    return Object.keys(v).map((k) => v[k]);
}
function getRecordField(v, field) {
    return v[field[0]];
}
function getTupleFields(v) {
    return v;
}
function getTupleField(v, i) {
    return v[i];
}
function makeUnion(uci, values) {
    const expectedLength = (uci.fields || []).length;
    if (values.length !== expectedLength) {
        throw new Error(`Expected an array of length ${expectedLength} but got ${values.length}`);
    }
    return uci.declaringType.construct != null
        ? new uci.declaringType.construct(uci.tag, values)
        : {};
}
function makeRecord(t, values) {
    const fields = getRecordElements(t);
    if (fields.length !== values.length) {
        throw new Error(`Expected an array of length ${fields.length} but got ${values.length}`);
    }
    return t.construct != null
        ? new t.construct(...values)
        : fields.reduce((obj, [key, _t], i) => {
            obj[key] = values[i];
            return obj;
        }, {});
}
function makeTuple(values, _t) {
    return values;
}
function makeGenericType(t, generics) {
    return new TypeInfo(t.fullname, generics, t.construct, t.parent, t.fields, t.cases);
}
function createInstance(t, consArgs) {
    // TODO: Check if consArgs length is same as t.construct?
    // (Arg types can still be different)
    if (typeof t.construct === "function") {
        return new t.construct(...(consArgs !== null && consArgs !== void 0 ? consArgs : []));
    }
    else if (isErasedToNumber(t)) {
        return 0;
    }
    else {
        switch (t.fullname) {
            case obj_type.fullname:
                return {};
            case bool_type.fullname:
                return false;
            case "System.Int64":
            case "System.UInt64":
                // typeof<int64> and typeof<uint64> get transformed to class_type("System.Int64")
                // and class_type("System.UInt64") respectively. Test for the name of the primitive type.
                return (0,_Long_js__WEBPACK_IMPORTED_MODULE_2__.fromInt)(0);
            case decimal_type.fullname:
                return new _Decimal_js__WEBPACK_IMPORTED_MODULE_3__["default"](0);
            case char_type.fullname:
                // Even though char is a value type, it's erased to string, and Unchecked.defaultof<char> is null
                return null;
            default:
                throw new Error(`Cannot access constructor of ${t.fullname}`);
        }
    }
}
function getValue(propertyInfo, v) {
    return v[propertyInfo[0]];
}
// Fable.Core.Reflection
function assertUnion(x) {
    if (!(x instanceof _Types_js__WEBPACK_IMPORTED_MODULE_1__.Union)) {
        throw new Error(`Value is not an F# union type`);
    }
}
function getCaseTag(x) {
    assertUnion(x);
    return x.tag;
}
function getCaseName(x) {
    assertUnion(x);
    return x.cases()[x.tag];
}
function getCaseFields(x) {
    assertUnion(x);
    return x.fields;
}


/***/ }),

/***/ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Types.js":
/*!************************************************************************!*\
  !*** ./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Types.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Attribute": () => (/* binding */ Attribute),
/* harmony export */   "Exception": () => (/* binding */ Exception),
/* harmony export */   "FSharpException": () => (/* binding */ FSharpException),
/* harmony export */   "FSharpRef": () => (/* binding */ FSharpRef),
/* harmony export */   "MatchFailureException": () => (/* binding */ MatchFailureException),
/* harmony export */   "Record": () => (/* binding */ Record),
/* harmony export */   "Union": () => (/* binding */ Union),
/* harmony export */   "ensureErrorOrException": () => (/* binding */ ensureErrorOrException),
/* harmony export */   "isException": () => (/* binding */ isException),
/* harmony export */   "seqToString": () => (/* binding */ seqToString),
/* harmony export */   "toString": () => (/* binding */ toString),
/* harmony export */   "unionToString": () => (/* binding */ unionToString)
/* harmony export */ });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Util.js");

function seqToString(self) {
    let count = 0;
    let str = "[";
    for (const x of self) {
        if (count === 0) {
            str += toString(x);
        }
        else if (count === 100) {
            str += "; ...";
            break;
        }
        else {
            str += "; " + toString(x);
        }
        count++;
    }
    return str + "]";
}
function toString(x, callStack = 0) {
    var _a, _b;
    if (x != null && typeof x === "object") {
        if (typeof x.toString === "function") {
            return x.toString();
        }
        else if (Symbol.iterator in x) {
            return seqToString(x);
        }
        else { // TODO: Date?
            const cons = (_a = Object.getPrototypeOf(x)) === null || _a === void 0 ? void 0 : _a.constructor;
            return cons === Object && callStack < 10
                // Same format as recordToString
                ? "{ " + Object.entries(x).map(([k, v]) => k + " = " + toString(v, callStack + 1)).join("\n  ") + " }"
                : (_b = cons === null || cons === void 0 ? void 0 : cons.name) !== null && _b !== void 0 ? _b : "";
        }
    }
    return String(x);
}
function unionToString(name, fields) {
    if (fields.length === 0) {
        return name;
    }
    else {
        let fieldStr;
        let withParens = true;
        if (fields.length === 1) {
            fieldStr = toString(fields[0]);
            withParens = fieldStr.indexOf(" ") >= 0;
        }
        else {
            fieldStr = fields.map((x) => toString(x)).join(", ");
        }
        return name + (withParens ? " (" : " ") + fieldStr + (withParens ? ")" : "");
    }
}
class Union {
    get name() {
        return this.cases()[this.tag];
    }
    toJSON() {
        return this.fields.length === 0 ? this.name : [this.name].concat(this.fields);
    }
    toString() {
        return unionToString(this.name, this.fields);
    }
    GetHashCode() {
        const hashes = this.fields.map((x) => (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.structuralHash)(x));
        hashes.splice(0, 0, (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.numberHash)(this.tag));
        return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.combineHashCodes)(hashes);
    }
    Equals(other) {
        if (this === other) {
            return true;
        }
        else if (!(0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.sameConstructor)(this, other)) {
            return false;
        }
        else if (this.tag === other.tag) {
            return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.equalArrays)(this.fields, other.fields);
        }
        else {
            return false;
        }
    }
    CompareTo(other) {
        if (this === other) {
            return 0;
        }
        else if (!(0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.sameConstructor)(this, other)) {
            return -1;
        }
        else if (this.tag === other.tag) {
            return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.compareArrays)(this.fields, other.fields);
        }
        else {
            return this.tag < other.tag ? -1 : 1;
        }
    }
}
function recordToJSON(self) {
    const o = {};
    const keys = Object.keys(self);
    for (let i = 0; i < keys.length; i++) {
        o[keys[i]] = self[keys[i]];
    }
    return o;
}
function recordToString(self) {
    return "{ " + Object.entries(self).map(([k, v]) => k + " = " + toString(v)).join("\n  ") + " }";
}
function recordGetHashCode(self) {
    const hashes = Object.values(self).map((v) => (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.structuralHash)(v));
    return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.combineHashCodes)(hashes);
}
function recordEquals(self, other) {
    if (self === other) {
        return true;
    }
    else if (!(0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.sameConstructor)(self, other)) {
        return false;
    }
    else {
        const thisNames = Object.keys(self);
        for (let i = 0; i < thisNames.length; i++) {
            if (!(0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.equals)(self[thisNames[i]], other[thisNames[i]])) {
                return false;
            }
        }
        return true;
    }
}
function recordCompareTo(self, other) {
    if (self === other) {
        return 0;
    }
    else if (!(0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.sameConstructor)(self, other)) {
        return -1;
    }
    else {
        const thisNames = Object.keys(self);
        for (let i = 0; i < thisNames.length; i++) {
            const result = (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.compare)(self[thisNames[i]], other[thisNames[i]]);
            if (result !== 0) {
                return result;
            }
        }
        return 0;
    }
}
class Record {
    toJSON() { return recordToJSON(this); }
    toString() { return recordToString(this); }
    GetHashCode() { return recordGetHashCode(this); }
    Equals(other) { return recordEquals(this, other); }
    CompareTo(other) { return recordCompareTo(this, other); }
}
class FSharpRef {
    constructor(contentsOrGetter, setter) {
        if (typeof setter === "function") {
            this.getter = contentsOrGetter;
            this.setter = setter;
        }
        else {
            this.getter = () => contentsOrGetter;
            this.setter = (v) => { contentsOrGetter = v; };
        }
    }
    get contents() {
        return this.getter();
    }
    set contents(v) {
        this.setter(v);
    }
}
// EXCEPTIONS
// Exception is intentionally not derived from Error, for performance reasons (see #2160)
class Exception {
    constructor(message) {
        this.message = message;
    }
}
function isException(x) {
    return x instanceof Exception || x instanceof Error;
}
function ensureErrorOrException(e) {
    return isException(e) ? e : new Error(String(e));
}
class FSharpException extends Exception {
    toJSON() { return recordToJSON(this); }
    toString() { return recordToString(this); }
    GetHashCode() { return recordGetHashCode(this); }
    Equals(other) { return recordEquals(this, other); }
    CompareTo(other) { return recordCompareTo(this, other); }
}
class MatchFailureException extends FSharpException {
    constructor(arg1, arg2, arg3) {
        super();
        this.arg1 = arg1;
        this.arg2 = arg2 | 0;
        this.arg3 = arg3 | 0;
        this.message = "The match cases were incomplete";
    }
}
class Attribute {
}


/***/ }),

/***/ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Util.js":
/*!***********************************************************************!*\
  !*** ./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Util.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Comparer": () => (/* binding */ Comparer),
/* harmony export */   "Enumerable": () => (/* binding */ Enumerable),
/* harmony export */   "Enumerator": () => (/* binding */ Enumerator),
/* harmony export */   "Lazy": () => (/* binding */ Lazy),
/* harmony export */   "ObjectRef": () => (/* binding */ ObjectRef),
/* harmony export */   "arrayHash": () => (/* binding */ arrayHash),
/* harmony export */   "assertEqual": () => (/* binding */ assertEqual),
/* harmony export */   "assertNotEqual": () => (/* binding */ assertNotEqual),
/* harmony export */   "checkArity": () => (/* binding */ checkArity),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "combineHashCodes": () => (/* binding */ combineHashCodes),
/* harmony export */   "compare": () => (/* binding */ compare),
/* harmony export */   "compareArrays": () => (/* binding */ compareArrays),
/* harmony export */   "compareArraysWith": () => (/* binding */ compareArraysWith),
/* harmony export */   "compareDates": () => (/* binding */ compareDates),
/* harmony export */   "comparePrimitives": () => (/* binding */ comparePrimitives),
/* harmony export */   "comparerFromEqualityComparer": () => (/* binding */ comparerFromEqualityComparer),
/* harmony export */   "copyToArray": () => (/* binding */ copyToArray),
/* harmony export */   "count": () => (/* binding */ count),
/* harmony export */   "createAtom": () => (/* binding */ createAtom),
/* harmony export */   "createObj": () => (/* binding */ createObj),
/* harmony export */   "curry": () => (/* binding */ curry),
/* harmony export */   "dateHash": () => (/* binding */ dateHash),
/* harmony export */   "dateOffset": () => (/* binding */ dateOffset),
/* harmony export */   "defaultOf": () => (/* binding */ defaultOf),
/* harmony export */   "disposeSafe": () => (/* binding */ disposeSafe),
/* harmony export */   "enumerableToIterator": () => (/* binding */ enumerableToIterator),
/* harmony export */   "equalArrays": () => (/* binding */ equalArrays),
/* harmony export */   "equalArraysWith": () => (/* binding */ equalArraysWith),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "escapeDataString": () => (/* binding */ escapeDataString),
/* harmony export */   "escapeUriString": () => (/* binding */ escapeUriString),
/* harmony export */   "fastStructuralHash": () => (/* binding */ fastStructuralHash),
/* harmony export */   "getEnumerator": () => (/* binding */ getEnumerator),
/* harmony export */   "identityHash": () => (/* binding */ identityHash),
/* harmony export */   "int16ToString": () => (/* binding */ int16ToString),
/* harmony export */   "int32ToString": () => (/* binding */ int32ToString),
/* harmony export */   "isArrayLike": () => (/* binding */ isArrayLike),
/* harmony export */   "isComparable": () => (/* binding */ isComparable),
/* harmony export */   "isComparer": () => (/* binding */ isComparer),
/* harmony export */   "isDisposable": () => (/* binding */ isDisposable),
/* harmony export */   "isEnumerable": () => (/* binding */ isEnumerable),
/* harmony export */   "isEquatable": () => (/* binding */ isEquatable),
/* harmony export */   "isHashable": () => (/* binding */ isHashable),
/* harmony export */   "isIterable": () => (/* binding */ isIterable),
/* harmony export */   "jsOptions": () => (/* binding */ jsOptions),
/* harmony export */   "lazyFromValue": () => (/* binding */ lazyFromValue),
/* harmony export */   "mapCurriedArgs": () => (/* binding */ mapCurriedArgs),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "numberHash": () => (/* binding */ numberHash),
/* harmony export */   "padLeftAndRightWithZeros": () => (/* binding */ padLeftAndRightWithZeros),
/* harmony export */   "padWithZeros": () => (/* binding */ padWithZeros),
/* harmony export */   "partialApply": () => (/* binding */ partialApply),
/* harmony export */   "physicalHash": () => (/* binding */ physicalHash),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "safeHash": () => (/* binding */ safeHash),
/* harmony export */   "sameConstructor": () => (/* binding */ sameConstructor),
/* harmony export */   "sign": () => (/* binding */ sign),
/* harmony export */   "stringHash": () => (/* binding */ stringHash),
/* harmony export */   "structuralHash": () => (/* binding */ structuralHash),
/* harmony export */   "toEnumerable": () => (/* binding */ toEnumerable),
/* harmony export */   "toIterator": () => (/* binding */ toIterator),
/* harmony export */   "uncurry": () => (/* binding */ uncurry),
/* harmony export */   "unescapeDataString": () => (/* binding */ unescapeDataString)
/* harmony export */ });
// tslint:disable:ban-types
function isArrayLike(x) {
    return Array.isArray(x) || ArrayBuffer.isView(x);
}
function isIterable(x) {
    return x != null && typeof x === "object" && Symbol.iterator in x;
}
function isEnumerable(x) {
    return x != null && typeof x.GetEnumerator === "function";
}
function isComparer(x) {
    return x != null && typeof x.Compare === "function";
}
function isComparable(x) {
    return x != null && typeof x.CompareTo === "function";
}
function isEquatable(x) {
    return x != null && typeof x.Equals === "function";
}
function isHashable(x) {
    return x != null && typeof x.GetHashCode === "function";
}
function isDisposable(x) {
    return x != null && typeof x.Dispose === "function";
}
function disposeSafe(x) {
    if (isDisposable(x)) {
        x.Dispose();
    }
}
function defaultOf() {
    return null;
}
function sameConstructor(x, y) {
    var _a, _b;
    return ((_a = Object.getPrototypeOf(x)) === null || _a === void 0 ? void 0 : _a.constructor) === ((_b = Object.getPrototypeOf(y)) === null || _b === void 0 ? void 0 : _b.constructor);
}
class Enumerable {
    constructor(en) {
        this.en = en;
    }
    GetEnumerator() { return this.en; }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        const hasNext = this.en["System.Collections.IEnumerator.MoveNext"]();
        const current = hasNext ? this.en["System.Collections.Generic.IEnumerator`1.get_Current"]() : undefined;
        return { done: !hasNext, value: current };
    }
}
class Enumerator {
    constructor(iter) {
        this.iter = iter;
        this.current = defaultOf();
    }
    ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
        return this.current;
    }
    ["System.Collections.IEnumerator.get_Current"]() {
        return this.current;
    }
    ["System.Collections.IEnumerator.MoveNext"]() {
        const cur = this.iter.next();
        this.current = cur.value;
        return !cur.done;
    }
    ["System.Collections.IEnumerator.Reset"]() {
        throw new Error("JS iterators cannot be reset");
    }
    Dispose() {
        return;
    }
}
function toEnumerable(e) {
    if (isEnumerable(e)) {
        return e;
    }
    else {
        return new Enumerable(new Enumerator(e[Symbol.iterator]()));
    }
}
function getEnumerator(e) {
    if (isEnumerable(e)) {
        return e.GetEnumerator();
    }
    else {
        return new Enumerator(e[Symbol.iterator]());
    }
}
function toIterator(en) {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            const hasNext = en["System.Collections.IEnumerator.MoveNext"]();
            const current = hasNext ? en["System.Collections.Generic.IEnumerator`1.get_Current"]() : undefined;
            return { done: !hasNext, value: current };
        },
    };
}
function enumerableToIterator(e) {
    return toIterator(toEnumerable(e).GetEnumerator());
}
class Comparer {
    constructor(f) {
        this.Compare = f || compare;
    }
}
function comparerFromEqualityComparer(comparer) {
    // Sometimes IEqualityComparer also implements IComparer
    if (isComparer(comparer)) {
        return new Comparer(comparer.Compare);
    }
    else {
        return new Comparer((x, y) => {
            const xhash = comparer.GetHashCode(x);
            const yhash = comparer.GetHashCode(y);
            if (xhash === yhash) {
                return comparer.Equals(x, y) ? 0 : -1;
            }
            else {
                return xhash < yhash ? -1 : 1;
            }
        });
    }
}
function assertEqual(actual, expected, msg) {
    if (!equals(actual, expected)) {
        throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
            actual,
            expected,
        });
    }
}
function assertNotEqual(actual, expected, msg) {
    if (equals(actual, expected)) {
        throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
            actual,
            expected,
        });
    }
}
class Lazy {
    constructor(factory) {
        this.factory = factory;
        this.isValueCreated = false;
    }
    get Value() {
        if (!this.isValueCreated) {
            this.createdValue = this.factory();
            this.isValueCreated = true;
        }
        return this.createdValue;
    }
    get IsValueCreated() {
        return this.isValueCreated;
    }
}
function lazyFromValue(v) {
    return new Lazy(() => v);
}
function padWithZeros(i, length) {
    let str = i.toString(10);
    while (str.length < length) {
        str = "0" + str;
    }
    return str;
}
function padLeftAndRightWithZeros(i, lengthLeft, lengthRight) {
    let str = i.toString(10);
    while (str.length < lengthLeft) {
        str = "0" + str;
    }
    while (str.length < lengthRight) {
        str = str + "0";
    }
    return str;
}
function dateOffset(date) {
    const date1 = date;
    return typeof date1.offset === "number"
        ? date1.offset
        : (date.kind === 1 /* DateKind.UTC */
            ? 0 : date.getTimezoneOffset() * -60000);
}
function int16ToString(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 0xFFFF + i + 1 : i;
    return i.toString(radix);
}
function int32ToString(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 0xFFFFFFFF + i + 1 : i;
    return i.toString(radix);
}
class ObjectRef {
    static id(o) {
        if (!ObjectRef.idMap.has(o)) {
            ObjectRef.idMap.set(o, ++ObjectRef.count);
        }
        return ObjectRef.idMap.get(o);
    }
}
ObjectRef.idMap = new WeakMap();
ObjectRef.count = 0;
function stringHash(s) {
    let i = 0;
    let h = 5381;
    const len = s.length;
    while (i < len) {
        h = (h * 33) ^ s.charCodeAt(i++);
    }
    return h;
}
function numberHash(x) {
    return x * 2654435761 | 0;
}
// From https://stackoverflow.com/a/37449594
function combineHashCodes(hashes) {
    if (hashes.length === 0) {
        return 0;
    }
    return hashes.reduce((h1, h2) => {
        return ((h1 << 5) + h1) ^ h2;
    });
}
function physicalHash(x) {
    if (x == null) {
        return 0;
    }
    switch (typeof x) {
        case "boolean":
            return x ? 1 : 0;
        case "number":
            return numberHash(x);
        case "string":
            return stringHash(x);
        default:
            return numberHash(ObjectRef.id(x));
    }
}
function identityHash(x) {
    if (isHashable(x)) {
        return x.GetHashCode();
    }
    else {
        return physicalHash(x);
    }
}
function dateHash(x) {
    return x.getTime();
}
function arrayHash(x) {
    const len = x.length;
    const hashes = new Array(len);
    for (let i = 0; i < len; i++) {
        hashes[i] = structuralHash(x[i]);
    }
    return combineHashCodes(hashes);
}
function structuralHash(x) {
    var _a;
    if (x == null) {
        return 0;
    }
    switch (typeof x) {
        case "boolean":
            return x ? 1 : 0;
        case "number":
            return numberHash(x);
        case "string":
            return stringHash(x);
        default: {
            if (isHashable(x)) {
                return x.GetHashCode();
            }
            else if (isArrayLike(x)) {
                return arrayHash(x);
            }
            else if (x instanceof Date) {
                return dateHash(x);
            }
            else if (((_a = Object.getPrototypeOf(x)) === null || _a === void 0 ? void 0 : _a.constructor) === Object) {
                // TODO: check call-stack to prevent cyclic objects?
                const hashes = Object.values(x).map((v) => structuralHash(v));
                return combineHashCodes(hashes);
            }
            else {
                // Classes don't implement GetHashCode by default, but must use identity hashing
                return numberHash(ObjectRef.id(x));
                // return stringHash(String(x));
            }
        }
    }
}
// Intended for custom numeric types, like long or decimal
function fastStructuralHash(x) {
    return stringHash(String(x));
}
// Intended for declared types that may or may not implement GetHashCode
function safeHash(x) {
    // return x == null ? 0 : isHashable(x) ? x.GetHashCode() : numberHash(ObjectRef.id(x));
    return identityHash(x);
}
function equalArraysWith(x, y, eq) {
    if (x == null) {
        return y == null;
    }
    if (y == null) {
        return false;
    }
    if (x.length !== y.length) {
        return false;
    }
    for (let i = 0; i < x.length; i++) {
        if (!eq(x[i], y[i])) {
            return false;
        }
    }
    return true;
}
function equalArrays(x, y) {
    return equalArraysWith(x, y, equals);
}
function equalObjects(x, y) {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) {
        return false;
    }
    xKeys.sort();
    yKeys.sort();
    for (let i = 0; i < xKeys.length; i++) {
        if (xKeys[i] !== yKeys[i] || !equals(x[xKeys[i]], y[yKeys[i]])) {
            return false;
        }
    }
    return true;
}
function equals(x, y) {
    var _a;
    if (x === y) {
        return true;
    }
    else if (x == null) {
        return y == null;
    }
    else if (y == null) {
        return false;
    }
    else if (isEquatable(x)) {
        return x.Equals(y);
    }
    else if (isArrayLike(x)) {
        return isArrayLike(y) && equalArrays(x, y);
    }
    else if (typeof x !== "object") {
        return false;
    }
    else if (x instanceof Date) {
        return (y instanceof Date) && compareDates(x, y) === 0;
    }
    else {
        return ((_a = Object.getPrototypeOf(x)) === null || _a === void 0 ? void 0 : _a.constructor) === Object && equalObjects(x, y);
    }
}
function compareDates(x, y) {
    let xtime;
    let ytime;
    // DateTimeOffset and DateTime deals with equality differently.
    if ("offset" in x && "offset" in y) {
        xtime = x.getTime();
        ytime = y.getTime();
    }
    else {
        xtime = x.getTime() + dateOffset(x);
        ytime = y.getTime() + dateOffset(y);
    }
    return xtime === ytime ? 0 : (xtime < ytime ? -1 : 1);
}
function comparePrimitives(x, y) {
    return x === y ? 0 : (x < y ? -1 : 1);
}
function compareArraysWith(x, y, comp) {
    if (x == null) {
        return y == null ? 0 : 1;
    }
    if (y == null) {
        return -1;
    }
    if (x.length !== y.length) {
        return x.length < y.length ? -1 : 1;
    }
    for (let i = 0, j = 0; i < x.length; i++) {
        j = comp(x[i], y[i]);
        if (j !== 0) {
            return j;
        }
    }
    return 0;
}
function compareArrays(x, y) {
    return compareArraysWith(x, y, compare);
}
function compareObjects(x, y) {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) {
        return xKeys.length < yKeys.length ? -1 : 1;
    }
    xKeys.sort();
    yKeys.sort();
    for (let i = 0, j = 0; i < xKeys.length; i++) {
        const key = xKeys[i];
        if (key !== yKeys[i]) {
            return key < yKeys[i] ? -1 : 1;
        }
        else {
            j = compare(x[key], y[key]);
            if (j !== 0) {
                return j;
            }
        }
    }
    return 0;
}
function compare(x, y) {
    var _a;
    if (x === y) {
        return 0;
    }
    else if (x == null) {
        return y == null ? 0 : -1;
    }
    else if (y == null) {
        return 1;
    }
    else if (isComparable(x)) {
        return x.CompareTo(y);
    }
    else if (isArrayLike(x)) {
        return isArrayLike(y) ? compareArrays(x, y) : -1;
    }
    else if (typeof x !== "object") {
        return x < y ? -1 : 1;
    }
    else if (x instanceof Date) {
        return y instanceof Date ? compareDates(x, y) : -1;
    }
    else {
        return ((_a = Object.getPrototypeOf(x)) === null || _a === void 0 ? void 0 : _a.constructor) === Object ? compareObjects(x, y) : -1;
    }
}
function min(comparer, x, y) {
    return comparer(x, y) < 0 ? x : y;
}
function max(comparer, x, y) {
    return comparer(x, y) > 0 ? x : y;
}
function clamp(comparer, value, min, max) {
    return (comparer(value, min) < 0) ? min : (comparer(value, max) > 0) ? max : value;
}
function createAtom(value) {
    let atom = value;
    return (...args) => {
        if (args.length === 0) {
            return atom;
        }
        else {
            atom = args[0];
        }
    };
}
function createObj(fields) {
    const obj = {};
    for (const kv of fields) {
        obj[kv[0]] = kv[1];
    }
    return obj;
}
function jsOptions(mutator) {
    const opts = {};
    mutator(opts);
    return opts;
}
function round(value, digits = 0) {
    const m = Math.pow(10, digits);
    const n = +(digits ? value * m : value).toFixed(8);
    const i = Math.floor(n);
    const f = n - i;
    const e = 1e-8;
    const r = (f > 0.5 - e && f < 0.5 + e) ? ((i % 2 === 0) ? i : i + 1) : Math.round(n);
    return digits ? r / m : r;
}
function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
function unescapeDataString(s) {
    // https://stackoverflow.com/a/4458580/524236
    return decodeURIComponent((s).replace(/\+/g, "%20"));
}
function escapeDataString(s) {
    return encodeURIComponent(s).replace(/!/g, "%21")
        .replace(/'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/\*/g, "%2A");
}
function escapeUriString(s) {
    return encodeURI(s);
}
// ICollection.Clear and Count members can be called on Arrays
// or Dictionaries so we need a runtime check (see #1120)
function count(col) {
    if (isArrayLike(col)) {
        return col.length;
    }
    else {
        let count = 0;
        for (const _ of col) {
            count++;
        }
        return count;
    }
}
function clear(col) {
    if (isArrayLike(col)) {
        col.splice(0);
    }
    else {
        col.clear();
    }
}
const CURRIED = Symbol("curried");
function uncurry(arity, f) {
    // f may be a function option with None value
    if (f == null || f.length > 1) {
        return f;
    }
    const uncurried = (...args) => {
        let res = f;
        for (let i = 0; i < arity; i++) {
            res = res(args[i]);
        }
        return res;
    };
    uncurried[CURRIED] = f;
    return uncurried;
}
function _curry(args, arity, f) {
    return (arg) => arity === 1
        ? f(...args.concat([arg]))
        // Note it's important to generate a new args array every time
        // because a partially applied function can be run multiple times
        : _curry(args.concat([arg]), arity - 1, f);
}
function curry(arity, f) {
    if (f == null || f.length === 1) {
        return f;
    }
    else if (CURRIED in f) {
        return f[CURRIED];
    }
    else {
        return _curry([], arity, f);
    }
}
function checkArity(arity, f) {
    return f.length > arity
        ? (...args1) => (...args2) => f.apply(undefined, args1.concat(args2))
        : f;
}
function partialApply(arity, f, args) {
    if (f == null) {
        return undefined;
    }
    else if (CURRIED in f) {
        f = f[CURRIED];
        for (let i = 0; i < args.length; i++) {
            f = f(args[i]);
        }
        return f;
    }
    else {
        return _curry(args, arity, f);
    }
}
function mapCurriedArgs(fn, mappings) {
    function mapArg(fn, arg, mappings, idx) {
        const mapping = mappings[idx];
        if (mapping !== 0) {
            const expectedArity = mapping[0];
            const actualArity = mapping[1];
            if (expectedArity > 1) {
                arg = curry(expectedArity, arg);
            }
            if (actualArity > 1) {
                arg = uncurry(actualArity, arg);
            }
        }
        const res = fn(arg);
        if (idx + 1 === mappings.length) {
            return res;
        }
        else {
            return (arg) => mapArg(res, arg, mappings, idx + 1);
        }
    }
    return (arg) => mapArg(fn, arg, mappings, 0);
}
// More performant method to copy arrays, see #2352
function copyToArray(source, sourceIndex, target, targetIndex, count) {
    if (ArrayBuffer.isView(source) && ArrayBuffer.isView(target)) {
        target.set(source.subarray(sourceIndex, sourceIndex + count), targetIndex);
    }
    else {
        for (let i = 0; i < count; ++i) {
            target[targetIndex + i] = source[sourceIndex + i];
        }
    }
}


/***/ }),

/***/ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/lib/big.js":
/*!**************************************************************************!*\
  !*** ./src/Popup/fable_modules/fable-library.4.0.0-theta-018/lib/big.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Big": () => (/* binding */ Big),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Util.js");
/* harmony import */ var _Numeric_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Numeric.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Numeric.js");
// Adapted from https://github.com/MikeMcl/big.js/blob/0f94dc9110d55c4f324a47ba6a2e832ce23ac589/big.mjs
/* tslint:disable */


// The shared prototype object.
var P = {
    GetHashCode() { return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.combineHashCodes)([this.s, this.e].concat(this.c)); },
    Equals(x) { return !this.cmp(x); },
    CompareTo(x) { return this.cmp(x); },
    [_Numeric_js__WEBPACK_IMPORTED_MODULE_1__.symbol]() {
        const _this = this;
        return {
            multiply: y => _this.mul(y),
            toPrecision: sd => _this.toPrecision(sd),
            toExponential: dp => _this.toExponential(dp),
            toFixed: dp => _this.toFixed(dp),
            toHex: () => (Number(_this) >>> 0).toString(16),
        };
    }
};
/*
 *  big.js v6.0.3
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2020 Michael Mclaughlin
 *  https://github.com/MikeMcl/big.js/LICENCE.md
 */
/************************************** EDITABLE DEFAULTS *****************************************/
// The default values below must be integers within the stated ranges.
/*
 * The maximum number of decimal places (DP) of the results of operations involving division:
 * div and sqrt, and pow with negative exponents.
 */
var DP = 28, // 0 to MAX_DP
/*
 * The rounding mode (RM) used when rounding to the above decimal places.
 *
 *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
 *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
 *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
 *  3  Away from zero.                                  (ROUND_UP)
 */
RM = 1, // 0, 1, 2 or 3
// The maximum value of DP and Big.DP.
MAX_DP = 1E6, // 0 to 1000000
// The maximum magnitude of the exponent argument to the pow method.
MAX_POWER = 1E6, // 1 to 1000000
/*
 * The negative exponent (NE) at and beneath which toString returns exponential notation.
 * (JavaScript numbers: -7)
 * -1000000 is the minimum recommended exponent value of a Big.
 */
NE = -29, // 0 to -1000000
/*
 * The positive exponent (PE) at and above which toString returns exponential notation.
 * (JavaScript numbers: 21)
 * 1000000 is the maximum recommended exponent value of a Big, but this limit is not enforced.
 */
PE = 29, // 0 to 1000000
/*
 * When true, an error will be thrown if a primitive number is passed to the Big constructor,
 * or if valueOf is called, or if toNumber is called on a Big which cannot be converted to a
 * primitive number without a loss of precision.
 */
STRICT = false, // true or false
/**************************************************************************************************/
// Error messages.
NAME = '[big.js] ', INVALID = NAME + 'Invalid ', INVALID_DP = INVALID + 'decimal places', INVALID_RM = INVALID + 'rounding mode', DIV_BY_ZERO = NAME + 'Division by zero', UNDEFINED = void 0, NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
/*
 * Create and return a Big constructor.
 */
function _Big_() {
    /*
     * The Big constructor and exported function.
     * Create and return a new instance of a Big number object.
     *
     * n {number|string|Big} A numeric value.
     */
    function Big(n) {
        var x = this;
        // Enable constructor usage without new.
        if (!(x instanceof Big))
            return n === UNDEFINED ? _Big_() : new Big(n);
        // Duplicate.
        if (n instanceof Big) {
            x.s = n.s;
            x.e = n.e;
            x.c = n.c.slice();
            normalize(x);
        }
        else {
            if (typeof n !== 'string') {
                if (Big.strict === true) {
                    throw TypeError(INVALID + 'number');
                }
                // Minus zero?
                n = n === 0 && 1 / n < 0 ? '-0' : String(n);
            }
            parse(x, n);
        }
        // Retain a reference to this Big constructor.
        // Shadow Big.prototype.constructor which points to Object.
        x.constructor = Big;
    }
    Big.prototype = P;
    Big.DP = DP;
    Big.RM = RM;
    Big.NE = NE;
    Big.PE = PE;
    Big.strict = STRICT;
    return Big;
}
function normalize(x) {
    // x = round(x, DP, 0);
    if (x.c.length > 1 && !x.c[0]) {
        let i = x.c.findIndex(x => x);
        x.c = x.c.slice(i);
        x.e = x.e - i;
    }
}
/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */
function parse(x, n) {
    var e, i, nl;
    if (!NUMERIC.test(n)) {
        throw Error(INVALID + 'number');
    }
    // Determine sign.
    x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;
    // Decimal point?
    if ((e = n.indexOf('.')) > -1)
        n = n.replace('.', '');
    // Exponential form?
    if ((i = n.search(/e/i)) > 0) {
        // Determine exponent.
        if (e < 0)
            e = i;
        e += +n.slice(i + 1);
        n = n.substring(0, i);
    }
    else if (e < 0) {
        // Integer.
        e = n.length;
    }
    nl = n.length;
    // Determine leading zeros before decimal point.
    for (i = 0; i < e && i < nl && n.charAt(i) == '0';)
        ++i;
    // original version (ignores decimal point).
    // // Determine leading zeros.
    // for (i = 0; i < nl && n.charAt(i) == '0';) ++i;
    if (i == nl) {
        // Zero.
        x.c = [x.e = 0];
    }
    else {
        x.e = e - i - 1;
        x.c = [];
        // Convert string to array of digits without leading zeros
        for (e = 0; i < nl;)
            x.c[e++] = +n.charAt(i++);
        // older version (doesn't keep trailing zeroes).
        // // Determine trailing zeros.
        // for (; nl > 0 && n.charAt(--nl) == '0';);
        // // Convert string to array of digits without leading/trailing zeros.
        // for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
    }
    x = round(x, Big.DP + 1, Big.RM);
    return x;
}
/*
 * Round Big x to a maximum of sd significant digits using rounding mode rm.
 *
 * x {Big} The Big to round.
 * sd {number} Significant digits: integer, 0 to MAX_DP inclusive.
 * rm {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 * [more] {boolean} Whether the result of division was truncated.
 */
function round(x, sd, rm, more) {
    var xc = x.c;
    if (rm === UNDEFINED)
        rm = Big.RM;
    if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
        throw Error(INVALID_RM);
    }
    if (sd < 1) {
        more =
            rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 ||
                rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
        xc.length = 1;
        if (more) {
            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
            x.e = x.e - sd + 1;
            xc[0] = 1;
        }
        else {
            // Zero.
            xc[0] = x.e = 0;
        }
    }
    else if (sd < xc.length) {
        // xc[sd] is the digit after the digit that may be rounded up.
        const isZero = xc.findIndex((xci, idx) => idx >= sd && xci > 0) < 0;
        more =
            rm === 1 && xc[sd] >= 5 ||
                rm === 2 && (xc[sd] > 5 || xc[sd] === 5 &&
                    (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) ||
                rm === 3 && (more || !isZero);
        // Remove any digits after the required precision.
        xc.length = sd--;
        // Round up?
        if (more) {
            // Rounding up may mean the previous digit has to be rounded up.
            for (; ++xc[sd] > 9;) {
                xc[sd] = 0;
                if (!sd--) {
                    ++x.e;
                    xc.unshift(1);
                }
            }
        }
        // Remove trailing zeros.
        for (sd = xc.length; !xc[--sd];)
            xc.pop();
    }
    return x;
}
/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 */
function stringify(x, doExponential, isNonzero) {
    var e = x.e, s = x.c.join(''), n = s.length;
    // Exponential notation?
    if (doExponential) {
        s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;
        // Normal notation.
    }
    else if (e < 0) {
        for (; ++e;)
            s = '0' + s;
        s = '0.' + s;
    }
    else if (e > 0) {
        if (++e > n) {
            for (e -= n; e--;)
                s += '0';
        }
        else if (e < n) {
            s = s.slice(0, e) + '.' + s.slice(e);
        }
    }
    else if (n > 1) {
        s = s.charAt(0) + '.' + s.slice(1);
    }
    return x.s < 0 && isNonzero ? '-' + s : s;
}
// Prototype/instance methods
/*
 * Return a new Big whose value is the absolute value of this Big.
 */
P.abs = function () {
    var x = new this.constructor(this);
    x.s = 1;
    return x;
};
/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
 */
P.cmp = function (y) {
    var isneg, Big = this.constructor, x = new Big(this), y = new Big(y), xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
    // Either zero?
    if (!xc[0] || !yc[0])
        return !xc[0] ? !yc[0] ? 0 : -j : i;
    // Signs differ?
    if (i != j)
        return i;
    isneg = i < 0;
    // Compare exponents.
    if (k != l)
        return k > l ^ isneg ? 1 : -1;
    // Compare digit by digit.
    j = Math.max(xc.length, yc.length);
    for (i = 0; i < j; i++) {
        k = i < xc.length ? xc[i] : 0;
        l = i < yc.length ? yc[i] : 0;
        if (k != l)
            return k > l ^ isneg ? 1 : -1;
    }
    return 0;
    // original version (doesn't compare well trailing zeroes, e.g. 1.0 with 1.00)
    // j = (k = xc.length) < (l = yc.length) ? k : l;
    // // Compare digit by digit.
    // for (i = -1; ++i < j;) {
    //   if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
    // }
    // // Compare lengths.
    // return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};
/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.div = function (y) {
    var Big = this.constructor, x = new Big(this), y = new Big(y), a = x.c, // dividend
    b = y.c, // divisor
    k = x.s == y.s ? 1 : -1, dp = Big.DP;
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
        throw Error(INVALID_DP);
    }
    // Divisor is zero?
    if (!b[0]) {
        throw Error(DIV_BY_ZERO);
    }
    // Dividend is 0? Return +-0.
    if (!a[0]) {
        y.s = k;
        y.c = [y.e = 0];
        return y;
    }
    var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r = a.slice(0, bl), // remainder
    rl = r.length, q = y, // quotient
    qc = q.c = [], qi = 0, p = dp + (q.e = x.e - y.e) + 1; // precision of the result
    q.s = k;
    k = p < 0 ? 0 : p;
    // Create version of divisor with leading zero.
    bz.unshift(0);
    // Add zeros to make remainder as long as divisor.
    for (; rl++ < bl;)
        r.push(0);
    do {
        // n is how many times the divisor goes into current remainder.
        for (n = 0; n < 10; n++) {
            // Compare divisor and remainder.
            if (bl != (rl = r.length)) {
                cmp = bl > rl ? 1 : -1;
            }
            else {
                for (ri = -1, cmp = 0; ++ri < bl;) {
                    if (b[ri] != r[ri]) {
                        cmp = b[ri] > r[ri] ? 1 : -1;
                        break;
                    }
                }
            }
            // If divisor < remainder, subtract divisor from remainder.
            if (cmp < 0) {
                // Remainder can't be more than 1 digit longer than divisor.
                // Equalise lengths using divisor with extra leading zero?
                for (bt = rl == bl ? b : bz; rl;) {
                    if (r[--rl] < bt[rl]) {
                        ri = rl;
                        for (; ri && !r[--ri];)
                            r[ri] = 9;
                        --r[ri];
                        r[rl] += 10;
                    }
                    r[rl] -= bt[rl];
                }
                for (; !r[0];)
                    r.shift();
            }
            else {
                break;
            }
        }
        // Add the digit n to the result array.
        qc[qi++] = cmp ? n : ++n;
        // Update the remainder.
        if (r[0] && cmp)
            r[rl] = a[ai] || 0;
        else
            r = [a[ai]];
    } while ((ai++ < al || r[0] !== UNDEFINED) && k--);
    // Leading zero? Do not remove if result is simply zero (qi == 1).
    if (!qc[0] && qi != 1) {
        // There can't be more than one zero.
        qc.shift();
        q.e--;
        p--;
    }
    // Round?
    if (qi > p)
        round(q, p, Big.RM, r[0] !== UNDEFINED);
    return q;
};
/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */
P.eq = function (y) {
    return this.cmp(y) === 0;
};
/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */
P.gt = function (y) {
    return this.cmp(y) > 0;
};
/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */
P.gte = function (y) {
    return this.cmp(y) > -1;
};
/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */
P.lt = function (y) {
    return this.cmp(y) < 0;
};
/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */
P.lte = function (y) {
    return this.cmp(y) < 1;
};
/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */
P.minus = P.sub = function (y) {
    var i, j, t, xlty, Big = this.constructor, x = new Big(this), y = new Big(y), a = x.s, b = y.s;
    // Signs differ?
    if (a != b) {
        y.s = -b;
        return x.plus(y);
    }
    var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
    // Either zero?
    if (!xc[0] || !yc[0]) {
        if (yc[0]) {
            y.s = -b;
        }
        else if (xc[0]) {
            y = new Big(x);
        }
        else {
            y.s = 1;
        }
        return y;
    }
    // Determine which is the bigger number. Prepend zeros to equalise exponents.
    if (a = xe - ye) {
        if (xlty = a < 0) {
            a = -a;
            t = xc;
        }
        else {
            ye = xe;
            t = yc;
        }
        t.reverse();
        for (b = a; b--;)
            t.push(0);
        t.reverse();
    }
    else {
        // Exponents equal. Check digit by digit.
        j = ((xlty = xc.length < yc.length) ? xc : yc).length;
        for (a = b = 0; b < j; b++) {
            if (xc[b] != yc[b]) {
                xlty = xc[b] < yc[b];
                break;
            }
        }
    }
    // x < y? Point xc to the array of the bigger number.
    if (xlty) {
        t = xc;
        xc = yc;
        yc = t;
        y.s = -y.s;
    }
    /*
     * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
     * needs to start at yc.length.
     */
    if ((b = (j = yc.length) - (i = xc.length)) > 0)
        for (; b--;)
            xc[i++] = 0;
    // Subtract yc from xc.
    for (b = i; j > a;) {
        if (xc[--j] < yc[j]) {
            for (i = j; i && !xc[--i];)
                xc[i] = 9;
            --xc[i];
            xc[j] += 10;
        }
        xc[j] -= yc[j];
    }
    // Remove trailing zeros.
    for (; xc[--b] === 0;)
        xc.pop();
    // Remove leading zeros and adjust exponent accordingly.
    for (; xc[0] === 0;) {
        xc.shift();
        --ye;
    }
    if (!xc[0]) {
        // n - n = +0
        y.s = 1;
        // Result must be zero.
        xc = [ye = 0];
    }
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */
P.mod = function (y) {
    var ygtx, Big = this.constructor, x = new Big(this), y = new Big(y), a = x.s, b = y.s;
    if (!y.c[0]) {
        throw Error(DIV_BY_ZERO);
    }
    x.s = y.s = 1;
    ygtx = y.cmp(x) == 1;
    x.s = a;
    y.s = b;
    if (ygtx)
        return new Big(x);
    a = Big.DP;
    b = Big.RM;
    Big.DP = Big.RM = 0;
    x = x.div(y);
    Big.DP = a;
    Big.RM = b;
    return this.minus(x.times(y));
};
/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */
P.plus = P.add = function (y) {
    var e, k, t, Big = this.constructor, x = new Big(this), y = new Big(y);
    // Signs differ?
    if (x.s != y.s) {
        y.s = -y.s;
        return x.minus(y);
    }
    var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
    // Either zero?
    if (!xc[0] || !yc[0]) {
        if (!yc[0]) {
            if (xc[0]) {
                y = new Big(x);
            }
            else {
                y.s = x.s;
            }
        }
        return y;
    }
    xc = xc.slice();
    // Prepend zeros to equalise exponents.
    // Note: reverse faster than unshifts.
    if (e = xe - ye) {
        if (e > 0) {
            ye = xe;
            t = yc;
        }
        else {
            e = -e;
            t = xc;
        }
        t.reverse();
        for (; e--;)
            t.push(0);
        t.reverse();
    }
    // Point xc to the longer array.
    if (xc.length - yc.length < 0) {
        t = yc;
        yc = xc;
        xc = t;
    }
    e = yc.length;
    // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
    for (k = 0; e; xc[e] %= 10)
        k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    if (k) {
        xc.unshift(k);
        ++ye;
    }
    // Remove trailing zeros.
    for (e = xc.length; xc[--e] === 0;)
        xc.pop();
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */
P.pow = function (n) {
    var Big = this.constructor, x = new Big(this), y = new Big('1'), one = new Big('1'), isneg = n < 0;
    if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
        throw Error(INVALID + 'exponent');
    }
    if (isneg)
        n = -n;
    for (;;) {
        if (n & 1)
            y = y.times(x);
        n >>= 1;
        if (!n)
            break;
        x = x.times(x);
    }
    return isneg ? one.div(y) : y;
};
/*
 * Return a new Big whose value is the value of this Big rounded to a maximum precision of sd
 * significant digits using rounding mode rm, or Big.RM if rm is not specified.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.prec = function (sd, rm) {
    if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
        throw Error(INVALID + 'precision');
    }
    return round(new this.constructor(this), sd, rm);
};
/*
 * Return a new Big whose value is the value of this Big rounded to a maximum of dp decimal places
 * using rounding mode rm, or Big.RM if rm is not specified.
 * If dp is negative, round to an integer which is a multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.round = function (dp, rm) {
    if (dp === UNDEFINED)
        dp = 0;
    else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
        throw Error(INVALID_DP);
    }
    return round(new this.constructor(this), dp + this.e + 1, rm);
};
/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.sqrt = function () {
    var r, c, t, Big = this.constructor, x = new Big(this), s = x.s, e = x.e, half = new Big('0.5');
    // Zero?
    if (!x.c[0])
        return new Big(x);
    // Negative?
    if (s < 0) {
        throw Error(NAME + 'No square root');
    }
    // Estimate.
    s = Math.sqrt(x + '');
    // Math.sqrt underflow/overflow?
    // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
    if (s === 0 || s === 1 / 0) {
        c = x.c.join('');
        if (!(c.length + e & 1))
            c += '0';
        s = Math.sqrt(c);
        e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
        r = new Big((s == 1 / 0 ? '5e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
    }
    else {
        r = new Big(s + '');
    }
    e = r.e + (Big.DP += 4);
    // Newton-Raphson iteration.
    do {
        t = r;
        r = half.times(t.plus(x.div(t)));
    } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));
    return round(r, (Big.DP -= 4) + r.e + 1, Big.RM);
};
/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */
P.times = P.mul = function (y) {
    var c, Big = this.constructor, x = new Big(this), y = new Big(y), xc = x.c, yc = y.c, a = xc.length, b = yc.length, i = x.e, j = y.e;
    // Determine sign of result.
    y.s = x.s == y.s ? 1 : -1;
    // Return signed 0 if either 0.
    if (!xc[0] || !yc[0]) {
        y.c = [y.e = 0];
        return y;
    }
    // Initialise exponent of result as x.e + y.e.
    y.e = i + j;
    // If array xc has fewer digits than yc, swap xc and yc, and lengths.
    if (a < b) {
        c = xc;
        xc = yc;
        yc = c;
        j = a;
        a = b;
        b = j;
    }
    // Initialise coefficient array of result with zeros.
    for (c = new Array(j = a + b); j--;)
        c[j] = 0;
    // Multiply.
    // i is initially xc.length.
    for (i = b; i--;) {
        b = 0;
        // a is yc.length.
        for (j = a + i; j > i;) {
            // Current sum of products at this digit position, plus carry.
            b = c[j] + yc[i] * xc[j - i - 1] + b;
            c[j--] = b % 10;
            // carry
            b = b / 10 | 0;
        }
        c[j] = b;
    }
    // Increment result exponent if there is a final carry, otherwise remove leading zero.
    if (b)
        ++y.e;
    else
        c.shift();
    // Remove trailing zeros.
    for (i = c.length; !c[--i];)
        c.pop();
    y.c = c;
    return y;
};
/*
 * Return a string representing the value of this Big in exponential notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.toExponential = function (dp, rm) {
    var x = this, n = x.c[0];
    if (dp !== UNDEFINED) {
        if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throw Error(INVALID_DP);
        }
        x = round(new x.constructor(x), ++dp, rm);
        for (; x.c.length < dp;)
            x.c.push(0);
    }
    return stringify(x, true, !!n);
};
/*
 * Return a string representing the value of this Big in normal notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */
P.toFixed = function (dp, rm) {
    var x = this, n = x.c[0];
    if (dp !== UNDEFINED) {
        if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throw Error(INVALID_DP);
        }
        x = round(new x.constructor(x), dp + x.e + 1, rm);
        // x.e may have changed if the value is rounded up.
        for (dp = dp + x.e + 1; x.c.length < dp;)
            x.c.push(0);
    }
    return stringify(x, false, !!n);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */
P.toJSON = P.toString = function () {
    var x = this, Big = x.constructor;
    return stringify(x, x.e <= Big.NE || x.e >= Big.PE, !!x.c[0]);
};
/*
 * Return the value of this Big as a primitve number.
 */
P.toNumber = function () {
    var n = Number(stringify(this, true, true));
    if (this.constructor.strict === true && !this.eq(n.toString())) {
        throw Error(NAME + 'Imprecise conversion');
    }
    return n;
};
/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * rounding mode rm, or Big.RM if rm is not specified.
 * Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.toPrecision = function (sd, rm) {
    var x = this, Big = x.constructor, n = x.c[0];
    if (sd !== UNDEFINED) {
        if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
            throw Error(INVALID + 'precision');
        }
        x = round(new Big(x), sd, rm);
        for (; x.c.length < sd;)
            x.c.push(0);
    }
    return stringify(x, sd <= x.e || x.e <= Big.NE || x.e >= Big.PE, !!n);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */
P.valueOf = function () {
    var x = this, Big = x.constructor;
    if (Big.strict === true) {
        throw Error(NAME + 'valueOf disallowed');
    }
    return stringify(x, x.e <= Big.NE || x.e >= Big.PE, true);
};
// Export
var Big = _Big_();
/// <reference types="https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/big.js/index.d.ts" />
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Big);


/***/ }),

/***/ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/lib/long.js":
/*!***************************************************************************!*\
  !*** ./src/Popup/fable_modules/fable-library.4.0.0-theta-018/lib/long.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Long": () => (/* binding */ Long),
/* harmony export */   "MAX_UNSIGNED_VALUE": () => (/* binding */ MAX_UNSIGNED_VALUE),
/* harmony export */   "MAX_VALUE": () => (/* binding */ MAX_VALUE),
/* harmony export */   "MIN_VALUE": () => (/* binding */ MIN_VALUE),
/* harmony export */   "NEG_ONE": () => (/* binding */ NEG_ONE),
/* harmony export */   "ONE": () => (/* binding */ ONE),
/* harmony export */   "UONE": () => (/* binding */ UONE),
/* harmony export */   "UZERO": () => (/* binding */ UZERO),
/* harmony export */   "ZERO": () => (/* binding */ ZERO),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "and": () => (/* binding */ and),
/* harmony export */   "compare": () => (/* binding */ compare),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "fromBits": () => (/* binding */ fromBits),
/* harmony export */   "fromBytes": () => (/* binding */ fromBytes),
/* harmony export */   "fromBytesBE": () => (/* binding */ fromBytesBE),
/* harmony export */   "fromBytesLE": () => (/* binding */ fromBytesLE),
/* harmony export */   "fromInt": () => (/* binding */ fromInt),
/* harmony export */   "fromNumber": () => (/* binding */ fromNumber),
/* harmony export */   "fromString": () => (/* binding */ fromString),
/* harmony export */   "fromValue": () => (/* binding */ fromValue),
/* harmony export */   "getHighBits": () => (/* binding */ getHighBits),
/* harmony export */   "getHighBitsUnsigned": () => (/* binding */ getHighBitsUnsigned),
/* harmony export */   "getLowBits": () => (/* binding */ getLowBits),
/* harmony export */   "getLowBitsUnsigned": () => (/* binding */ getLowBitsUnsigned),
/* harmony export */   "getNumBitsAbs": () => (/* binding */ getNumBitsAbs),
/* harmony export */   "greaterThan": () => (/* binding */ greaterThan),
/* harmony export */   "greaterThanOrEqual": () => (/* binding */ greaterThanOrEqual),
/* harmony export */   "isEven": () => (/* binding */ isEven),
/* harmony export */   "isLong": () => (/* binding */ isLong),
/* harmony export */   "isNegative": () => (/* binding */ isNegative),
/* harmony export */   "isOdd": () => (/* binding */ isOdd),
/* harmony export */   "isPositive": () => (/* binding */ isPositive),
/* harmony export */   "isZero": () => (/* binding */ isZero),
/* harmony export */   "lessThan": () => (/* binding */ lessThan),
/* harmony export */   "lessThanOrEqual": () => (/* binding */ lessThanOrEqual),
/* harmony export */   "modulo": () => (/* binding */ modulo),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "not": () => (/* binding */ not),
/* harmony export */   "notEquals": () => (/* binding */ notEquals),
/* harmony export */   "or": () => (/* binding */ or),
/* harmony export */   "rotateLeft": () => (/* binding */ rotateLeft),
/* harmony export */   "rotateRight": () => (/* binding */ rotateRight),
/* harmony export */   "shiftLeft": () => (/* binding */ shiftLeft),
/* harmony export */   "shiftRight": () => (/* binding */ shiftRight),
/* harmony export */   "shiftRightUnsigned": () => (/* binding */ shiftRightUnsigned),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "toBytes": () => (/* binding */ toBytes),
/* harmony export */   "toBytesBE": () => (/* binding */ toBytesBE),
/* harmony export */   "toBytesLE": () => (/* binding */ toBytesLE),
/* harmony export */   "toInt": () => (/* binding */ toInt),
/* harmony export */   "toNumber": () => (/* binding */ toNumber),
/* harmony export */   "toSigned": () => (/* binding */ toSigned),
/* harmony export */   "toString": () => (/* binding */ toString),
/* harmony export */   "toUnsigned": () => (/* binding */ toUnsigned),
/* harmony export */   "xor": () => (/* binding */ xor)
/* harmony export */ });
/* harmony import */ var _Numeric_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Numeric.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Numeric.js");
// Adapted from: https://github.com/dcodeIO/long.js/blob/master/src/long.js
// Apache License 2.0: https://github.com/dcodeIO/long.js/blob/master/LICENSE
/* tslint:disable */

/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
var wasm = null;
try {
    wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
    ])), {}).exports;
}
catch (e) {
    // no wasm support :(
}
/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {
    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */
    this.low = low | 0;
    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */
    this.high = high | 0;
    /**
     * Whether unsigned or not.
     * @type {boolean}
     */
    this.unsigned = !!unsigned;
}
Long.prototype.GetHashCode = function () {
    let h1 = this.unsigned ? 1 : 0;
    h1 = ((h1 << 5) + h1) ^ this.high;
    h1 = ((h1 << 5) + h1) ^ this.low;
    return h1;
};
Long.prototype.Equals = function (x) { return equals(this, x); };
Long.prototype.CompareTo = function (x) { return compare(this, x); };
Long.prototype.toString = function (radix) { return toString(this, radix); };
Long.prototype.toJSON = function () { return toString(this); };
Long.prototype[_Numeric_js__WEBPACK_IMPORTED_MODULE_0__.symbol] = function () {
    const x = this;
    return {
        multiply: y => multiply(x, y),
        toPrecision: sd => String(x) + (0).toPrecision(sd).substr(1),
        toExponential: dp => String(x) + (0).toExponential(dp).substr(1),
        toFixed: dp => String(x) + (0).toFixed(dp).substr(1),
        toHex: () => toString(x.unsigned ? x : fromBytes(toBytes(x), true), 16),
    };
};
// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.
/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;
Object.defineProperty(Long.prototype, "__isLong__", { value: true });
/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
    return (obj && obj["__isLong__"]) === true;
}
/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
// Long.isLong = isLong;
/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};
/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};
/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    }
    else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}
/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromInt = fromInt;
/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
    if (isNaN(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    }
    else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return negate(fromNumber(-value, unsigned));
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}
/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromNumber = fromNumber;
/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}
/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromBits = fromBits;
/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)
/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        // For goog.math.long compatibility
        radix = unsigned,
            unsigned = false;
    }
    else {
        unsigned = !!unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    var p = str.indexOf('-');
    if (p > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return negate(fromString(str.substring(1), unsigned, radix));
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));
    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = add(multiply(result, power), fromNumber(value));
        }
        else {
            result = multiply(result, radixToPower);
            result = add(result, fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}
/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
// Long.fromString = fromString;
/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
    if (typeof val === 'number')
        return fromNumber(val, unsigned);
    if (typeof val === 'string')
        return fromString(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}
/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
// Long.fromValue = fromValue;
// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);
/**
 * Signed zero.
 * @type {!Long}
 */
// Long.ZERO = ZERO;
/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);
/**
 * Unsigned zero.
 * @type {!Long}
 */
// Long.UZERO = UZERO;
/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);
/**
 * Signed one.
 * @type {!Long}
 */
// Long.ONE = ONE;
/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);
/**
 * Unsigned one.
 * @type {!Long}
 */
// Long.UONE = UONE;
/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);
/**
 * Signed negative one.
 * @type {!Long}
 */
// Long.NEG_ONE = NEG_ONE;
/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
/**
 * Maximum signed value.
 * @type {!Long}
 */
// Long.MAX_VALUE = MAX_VALUE;
/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
/**
 * Maximum unsigned value.
 * @type {!Long}
 */
// Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);
/**
 * Minimum signed value.
 * @type {!Long}
 */
// Long.MIN_VALUE = MIN_VALUE;
/**
 * @alias Long.prototype
 * @inner
 */
// var LongPrototype = Long.prototype;
/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @this {!Long}
 * @returns {number}
 */
function toInt($this) {
    return $this.unsigned ? $this.low >>> 0 : $this.low;
}
;
/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @this {!Long}
 * @returns {number}
 */
function toNumber($this) {
    if ($this.unsigned)
        return (($this.high >>> 0) * TWO_PWR_32_DBL) + ($this.low >>> 0);
    return $this.high * TWO_PWR_32_DBL + ($this.low >>> 0);
}
;
/**
 * Converts the Long to a string written in the specified radix.
 * @this {!Long}
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
function toString($this, radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    if (isZero($this))
        return '0';
    if (isNegative($this)) { // Unsigned Longs are never negative
        if (equals($this, MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = fromNumber(radix), div = divide($this, radixLong), rem1 = subtract(multiply(div, radixLong), $this);
            return toString(div, radix) + toInt(rem1).toString(radix);
        }
        else
            return '-' + toString(negate($this), radix);
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 6), $this.unsigned), rem = $this;
    var result = '';
    while (true) {
        var remDiv = divide(rem, radixToPower), intval = toInt(subtract(rem, multiply(remDiv, radixToPower))) >>> 0, digits = intval.toString(radix);
        rem = remDiv;
        if (isZero(rem))
            return digits + result;
        else {
            while (digits.length < 6)
                digits = '0' + digits;
            result = '' + digits + result;
        }
    }
}
;
/**
 * Gets the high 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed high bits
 */
function getHighBits($this) {
    return $this.high;
}
;
/**
 * Gets the high 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned high bits
 */
function getHighBitsUnsigned($this) {
    return $this.high >>> 0;
}
;
/**
 * Gets the low 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed low bits
 */
function getLowBits($this) {
    return $this.low;
}
;
/**
 * Gets the low 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned low bits
 */
function getLowBitsUnsigned($this) {
    return $this.low >>> 0;
}
;
/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @this {!Long}
 * @returns {number}
 */
function getNumBitsAbs($this) {
    if (isNegative($this)) // Unsigned Longs are never negative
        return equals($this, MIN_VALUE) ? 64 : getNumBitsAbs(negate($this));
    var val = $this.high != 0 ? $this.high : $this.low;
    for (var bit = 31; bit > 0; bit--)
        if ((val & (1 << bit)) != 0)
            break;
    return $this.high != 0 ? bit + 33 : bit + 1;
}
;
/**
 * Tests if this Long's value equals zero.
 * @this {!Long}
 * @returns {boolean}
 */
function isZero($this) {
    return $this.high === 0 && $this.low === 0;
}
;
/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
// LongPrototype.eqz = LongPrototype.isZero;
/**
 * Tests if this Long's value is negative.
 * @this {!Long}
 * @returns {boolean}
 */
function isNegative($this) {
    return !$this.unsigned && $this.high < 0;
}
;
/**
 * Tests if this Long's value is positive.
 * @this {!Long}
 * @returns {boolean}
 */
function isPositive($this) {
    return $this.unsigned || $this.high >= 0;
}
;
/**
 * Tests if this Long's value is odd.
 * @this {!Long}
 * @returns {boolean}
 */
function isOdd($this) {
    return ($this.low & 1) === 1;
}
;
/**
 * Tests if this Long's value is even.
 * @this {!Long}
 * @returns {boolean}
 */
function isEven($this) {
    return ($this.low & 1) === 0;
}
;
/**
 * Tests if this Long's value equals the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function equals($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    if ($this.unsigned !== other.unsigned && ($this.high >>> 31) === 1 && (other.high >>> 31) === 1)
        return false;
    return $this.high === other.high && $this.low === other.low;
}
;
/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.eq = LongPrototype.equals;
/**
 * Tests if this Long's value differs from the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function notEquals($this, other) {
    return !equals($this, /* validates */ other);
}
;
/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.neq = LongPrototype.notEquals;
/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.ne = LongPrototype.notEquals;
/**
 * Tests if this Long's value is less than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function lessThan($this, other) {
    return compare($this, /* validates */ other) < 0;
}
;
/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.lt = LongPrototype.lessThan;
/**
 * Tests if this Long's value is less than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function lessThanOrEqual($this, other) {
    return compare($this, /* validates */ other) <= 0;
}
;
/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.lte = LongPrototype.lessThanOrEqual;
/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.le = LongPrototype.lessThanOrEqual;
/**
 * Tests if this Long's value is greater than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function greaterThan($this, other) {
    return compare($this, /* validates */ other) > 0;
}
;
/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.gt = LongPrototype.greaterThan;
/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function greaterThanOrEqual($this, other) {
    return compare($this, /* validates */ other) >= 0;
}
;
/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.gte = LongPrototype.greaterThanOrEqual;
/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.ge = LongPrototype.greaterThanOrEqual;
/**
 * Compares this Long's value with the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
function compare($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    if (equals($this, other))
        return 0;
    var thisNeg = isNegative($this), otherNeg = isNegative(other);
    if (thisNeg && !otherNeg)
        return -1;
    if (!thisNeg && otherNeg)
        return 1;
    // At this point the sign bits are the same
    if (!$this.unsigned)
        return isNegative(subtract($this, other)) ? -1 : 1;
    // Both are positive if at least one is unsigned
    return (other.high >>> 0) > ($this.high >>> 0) || (other.high === $this.high && (other.low >>> 0) > ($this.low >>> 0)) ? -1 : 1;
}
;
/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
// LongPrototype.comp = LongPrototype.compare;
/**
 * Negates this Long's value.
 * @this {!Long}
 * @returns {!Long} Negated Long
 */
function negate($this) {
    if (!$this.unsigned && equals($this, MIN_VALUE))
        return MIN_VALUE;
    return add(not($this), ONE);
}
;
/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
// LongPrototype.neg = LongPrototype.negate;
/**
 * Returns the sum of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
function add($this, addend) {
    if (!isLong(addend))
        addend = fromValue(addend);
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = $this.high >>> 16;
    var a32 = $this.high & 0xFFFF;
    var a16 = $this.low >>> 16;
    var a00 = $this.low & 0xFFFF;
    var b48 = addend.high >>> 16;
    var b32 = addend.high & 0xFFFF;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, $this.unsigned);
}
;
/**
 * Returns the difference of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
function subtract($this, subtrahend) {
    if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
    return add($this, negate(subtrahend));
}
;
/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
// LongPrototype.sub = LongPrototype.subtract;
/**
 * Returns the product of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
function multiply($this, multiplier) {
    if (isZero($this))
        return $this.unsigned ? UZERO : ZERO;
    if (!isLong(multiplier))
        multiplier = fromValue(multiplier);
    // use wasm support if present
    if (wasm) {
        var low = wasm.mul($this.low, $this.high, multiplier.low, multiplier.high);
        return fromBits(low, wasm.get_high(), $this.unsigned);
    }
    if (isZero(multiplier))
        return $this.unsigned ? UZERO : ZERO;
    if (equals($this, MIN_VALUE))
        return isOdd(multiplier) ? MIN_VALUE : ZERO;
    if (equals(multiplier, MIN_VALUE))
        return isOdd($this) ? MIN_VALUE : ZERO;
    if (isNegative($this)) {
        if (isNegative(multiplier))
            return multiply(negate($this), negate(multiplier));
        else
            return negate(multiply(negate($this), multiplier));
    }
    else if (isNegative(multiplier))
        return negate(multiply($this, negate(multiplier)));
    // If both longs are small, use float multiplication
    if (lessThan($this, TWO_PWR_24) && lessThan(multiplier, TWO_PWR_24))
        return fromNumber(toNumber($this) * toNumber(multiplier), $this.unsigned);
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = $this.high >>> 16;
    var a32 = $this.high & 0xFFFF;
    var a16 = $this.low >>> 16;
    var a00 = $this.low & 0xFFFF;
    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 0xFFFF;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, $this.unsigned);
}
;
/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
// LongPrototype.mul = LongPrototype.multiply;
/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
function divide($this, divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    if (isZero(divisor))
        throw Error('division by zero');
    // use wasm support if present
    if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!$this.unsigned &&
            $this.high === -0x80000000 &&
            divisor.low === -1 && divisor.high === -1) {
            // be consistent with non-wasm code path
            return $this;
        }
        var low = ($this.unsigned ? wasm.div_u : wasm.div_s)($this.low, $this.high, divisor.low, divisor.high);
        return fromBits(low, wasm.get_high(), $this.unsigned);
    }
    if (isZero($this))
        return $this.unsigned ? UZERO : ZERO;
    var approx, rem, res;
    if (!$this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (equals($this, MIN_VALUE)) {
            if (equals(divisor, ONE) || equals(divisor, NEG_ONE))
                return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
            else if (equals(divisor, MIN_VALUE))
                return ONE;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = shiftRight($this, 1);
                approx = shiftLeft(divide(halfThis, divisor), 1);
                if (equals(approx, ZERO)) {
                    return isNegative(divisor) ? ONE : NEG_ONE;
                }
                else {
                    rem = subtract($this, multiply(divisor, approx));
                    res = add(approx, divide(rem, divisor));
                    return res;
                }
            }
        }
        else if (equals(divisor, MIN_VALUE))
            return $this.unsigned ? UZERO : ZERO;
        if (isNegative($this)) {
            if (isNegative(divisor))
                return divide(negate($this), negate(divisor));
            return negate(divide(negate($this), divisor));
        }
        else if (isNegative(divisor))
            return negate(divide($this, negate(divisor)));
        res = ZERO;
    }
    else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned)
            divisor = toUnsigned(divisor);
        if (greaterThan(divisor, $this))
            return UZERO;
        if (greaterThan(divisor, shiftRightUnsigned($this, 1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
        res = UZERO;
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = $this;
    while (greaterThanOrEqual(rem, divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(toNumber(rem) / toNumber(divisor)));
        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48), 
        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
        approxRes = fromNumber(approx), approxRem = multiply(approxRes, divisor);
        while (isNegative(approxRem) || greaterThan(approxRem, rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, $this.unsigned);
            approxRem = multiply(approxRes, divisor);
        }
        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (isZero(approxRes))
            approxRes = ONE;
        res = add(res, approxRes);
        rem = subtract(rem, approxRem);
    }
    return res;
}
;
/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
// LongPrototype.div = LongPrototype.divide;
/**
 * Returns this Long modulo the specified.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
function modulo($this, divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    // use wasm support if present
    if (wasm) {
        var low = ($this.unsigned ? wasm.rem_u : wasm.rem_s)($this.low, $this.high, divisor.low, divisor.high);
        return fromBits(low, wasm.get_high(), $this.unsigned);
    }
    return subtract($this, multiply(divide($this, divisor), divisor));
}
;
/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
// LongPrototype.mod = LongPrototype.modulo;
/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
// LongPrototype.rem = LongPrototype.modulo;
/**
 * Returns the bitwise NOT of this Long.
 * @this {!Long}
 * @returns {!Long}
 */
function not($this) {
    return fromBits(~$this.low, ~$this.high, $this.unsigned);
}
;
/**
 * Returns the bitwise AND of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
function and($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits($this.low & other.low, $this.high & other.high, $this.unsigned);
}
;
/**
 * Returns the bitwise OR of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
function or($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits($this.low | other.low, $this.high | other.high, $this.unsigned);
}
;
/**
 * Returns the bitwise XOR of this Long and the given one.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
function xor($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits($this.low ^ other.low, $this.high ^ other.high, $this.unsigned);
}
;
/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
function shiftLeft($this, numBits) {
    if (isLong(numBits))
        numBits = toInt(numBits);
    if ((numBits &= 63) === 0)
        return $this;
    else if (numBits < 32)
        return fromBits($this.low << numBits, ($this.high << numBits) | ($this.low >>> (32 - numBits)), $this.unsigned);
    else
        return fromBits(0, $this.low << (numBits - 32), $this.unsigned);
}
;
/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shl = LongPrototype.shiftLeft;
/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
function shiftRight($this, numBits) {
    if (isLong(numBits))
        numBits = toInt(numBits);
    if ((numBits &= 63) === 0)
        return $this;
    else if (numBits < 32)
        return fromBits(($this.low >>> numBits) | ($this.high << (32 - numBits)), $this.high >> numBits, $this.unsigned);
    else
        return fromBits($this.high >> (numBits - 32), $this.high >= 0 ? 0 : -1, $this.unsigned);
}
;
/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shr = LongPrototype.shiftRight;
/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
function shiftRightUnsigned($this, numBits) {
    if (isLong(numBits))
        numBits = toInt(numBits);
    numBits &= 63;
    if (numBits === 0)
        return $this;
    else {
        var high = $this.high;
        if (numBits < 32) {
            var low = $this.low;
            return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, $this.unsigned);
        }
        else if (numBits === 32)
            return fromBits(high, 0, $this.unsigned);
        else
            return fromBits(high >>> (numBits - 32), 0, $this.unsigned);
    }
}
;
/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shru = LongPrototype.shiftRightUnsigned;
/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
/**
 * Returns this Long with bits rotated to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
const rotateLeft = function rotateLeft(numBits) {
    var b;
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    if (numBits === 32)
        return fromBits(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = (32 - numBits);
        return fromBits(((this.low << numBits) | (this.high >>> b)), ((this.high << numBits) | (this.low >>> b)), this.unsigned);
    }
    numBits -= 32;
    b = (32 - numBits);
    return fromBits(((this.high << numBits) | (this.low >>> b)), ((this.low << numBits) | (this.high >>> b)), this.unsigned);
};
/**
 * Returns this Long with bits rotated to the left by the given amount. This is an alias of {@link Long#rotateLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
// LongPrototype.rotl = LongPrototype.rotateLeft;
/**
 * Returns this Long with bits rotated to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
const rotateRight = function rotateRight(numBits) {
    var b;
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    if (numBits === 32)
        return fromBits(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = (32 - numBits);
        return fromBits(((this.high << b) | (this.low >>> numBits)), ((this.low << b) | (this.high >>> numBits)), this.unsigned);
    }
    numBits -= 32;
    b = (32 - numBits);
    return fromBits(((this.low << b) | (this.high >>> numBits)), ((this.high << b) | (this.low >>> numBits)), this.unsigned);
};
/**
 * Returns this Long with bits rotated to the right by the given amount. This is an alias of {@link Long#rotateRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
// LongPrototype.rotr = LongPrototype.rotateRight;
/**
 * Converts this Long to signed.
 * @this {!Long}
 * @returns {!Long} Signed long
 */
function toSigned($this) {
    if (!$this.unsigned)
        return $this;
    return fromBits($this.low, $this.high, false);
}
;
/**
 * Converts this Long to unsigned.
 * @this {!Long}
 * @returns {!Long} Unsigned long
 */
function toUnsigned($this) {
    if ($this.unsigned)
        return $this;
    return fromBits($this.low, $this.high, true);
}
;
/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @this {!Long}
 * @returns {!Array.<number>} Byte representation
 */
function toBytes($this, le) {
    return le ? toBytesLE($this) : toBytesBE($this);
}
;
/**
 * Converts this Long to its little endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Little endian byte representation
 */
function toBytesLE($this) {
    var hi = $this.high, lo = $this.low;
    return [
        lo & 0xff,
        lo >>> 8 & 0xff,
        lo >>> 16 & 0xff,
        lo >>> 24,
        hi & 0xff,
        hi >>> 8 & 0xff,
        hi >>> 16 & 0xff,
        hi >>> 24
    ];
}
;
/**
 * Converts this Long to its big endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Big endian byte representation
 */
function toBytesBE($this) {
    var hi = $this.high, lo = $this.low;
    return [
        hi >>> 24,
        hi >>> 16 & 0xff,
        hi >>> 8 & 0xff,
        hi & 0xff,
        lo >>> 24,
        lo >>> 16 & 0xff,
        lo >>> 8 & 0xff,
        lo & 0xff
    ];
}
;
/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
function fromBytes(bytes, unsigned, le) {
    return le ? fromBytesLE(bytes, unsigned) : fromBytesBE(bytes, unsigned);
}
;
/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
function fromBytesLE(bytes, unsigned) {
    return new Long(bytes[0] |
        bytes[1] << 8 |
        bytes[2] << 16 |
        bytes[3] << 24, bytes[4] |
        bytes[5] << 8 |
        bytes[6] << 16 |
        bytes[7] << 24, unsigned);
}
;
/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
function fromBytesBE(bytes, unsigned) {
    return new Long(bytes[4] << 24 |
        bytes[5] << 16 |
        bytes[6] << 8 |
        bytes[7], bytes[0] << 24 |
        bytes[1] << 16 |
        bytes[2] << 8 |
        bytes[3], unsigned);
}
;


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
/******/ 			// no module.id needed
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/Popup/Popup.fs.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyError": () => (/* binding */ MyError),
/* harmony export */   "MyError$reflection": () => (/* binding */ MyError$reflection),
/* harmony export */   "MyError__Equals_229D3F39": () => (/* binding */ MyError__Equals_229D3F39),
/* harmony export */   "addClickEventListener": () => (/* binding */ addClickEventListener),
/* harmony export */   "beastNameToUrl": () => (/* binding */ beastNameToUrl),
/* harmony export */   "getActiveTab": () => (/* binding */ getActiveTab),
/* harmony export */   "hidePage": () => (/* binding */ hidePage),
/* harmony export */   "raiseError": () => (/* binding */ raiseError)
/* harmony export */ });
/* harmony import */ var _fable_modules_fable_library_4_0_0_theta_018_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fable_modules/fable-library.4.0.0-theta-018/Types.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Types.js");
/* harmony import */ var _fable_modules_fable_library_4_0_0_theta_018_Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fable_modules/fable-library.4.0.0-theta-018/Reflection.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Reflection.js");
/* harmony import */ var _fable_modules_fable_library_4_0_0_theta_018_Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fable_modules/fable-library.4.0.0-theta-018/Util.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Util.js");
/* harmony import */ var _fable_modules_fable_library_4_0_0_theta_018_Option_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fable_modules/fable-library.4.0.0-theta-018/Option.js */ "./src/Popup/fable_modules/fable-library.4.0.0-theta-018/Option.js");





const hidePage = "body > :not(.beastify-image) {\n        display: none;\n    }";

class MyError extends _fable_modules_fable_library_4_0_0_theta_018_Types_js__WEBPACK_IMPORTED_MODULE_0__.FSharpException {
    constructor(Data0) {
        super();
        this.Data0 = Data0;
    }
}

function MyError$reflection() {
    return (0,_fable_modules_fable_library_4_0_0_theta_018_Reflection_js__WEBPACK_IMPORTED_MODULE_1__.class_type)("Popup.MyError", void 0, MyError, (0,_fable_modules_fable_library_4_0_0_theta_018_Reflection_js__WEBPACK_IMPORTED_MODULE_1__.class_type)("System.Exception"));
}

function MyError__Equals_229D3F39(this$, obj) {
    if (!(0,_fable_modules_fable_library_4_0_0_theta_018_Util_js__WEBPACK_IMPORTED_MODULE_2__.equals)(this$, (0,_fable_modules_fable_library_4_0_0_theta_018_Util_js__WEBPACK_IMPORTED_MODULE_2__.defaultOf)())) {
        if (!(0,_fable_modules_fable_library_4_0_0_theta_018_Util_js__WEBPACK_IMPORTED_MODULE_2__.equals)(obj, (0,_fable_modules_fable_library_4_0_0_theta_018_Util_js__WEBPACK_IMPORTED_MODULE_2__.defaultOf)())) {
            if (obj instanceof MyError) {
                return this$.Data0 === obj.Data0;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else if (!(0,_fable_modules_fable_library_4_0_0_theta_018_Util_js__WEBPACK_IMPORTED_MODULE_2__.equals)(obj, (0,_fable_modules_fable_library_4_0_0_theta_018_Util_js__WEBPACK_IMPORTED_MODULE_2__.defaultOf)())) {
        return false;
    }
    else {
        return true;
    }
}

function raiseError(e) {
    const object = JSON.stringify(e);
    console.log((0,_fable_modules_fable_library_4_0_0_theta_018_Option_js__WEBPACK_IMPORTED_MODULE_3__.some)(object));
    throw new MyError(`Error occurred: ${object}`);
}

function beastNameToUrl(beastName) {
    if (beastName === "Frog") {
        return (chrome).runtime.getURL("beasts/frog.jpg");
    }
    else if (beastName === "Snake") {
        return (chrome).runtime.getURL("beasts/snake.jpg");
    }
    else if (beastName === "Turtle") {
        return (chrome).runtime.getURL("beasts/turtle.jpg");
    }
    else {
        throw new MyError("No such beast!");
    }
}

function getActiveTab(f) {
    const tabQuery = {
        active: true,
        currentWindow: true,
    };
    let pr_1;
    const pr = (chrome).tabs.query(tabQuery);
    pr_1 = (pr.then(f));
    void (pr_1.catch((e) => {
        raiseError(e);
    }));
}

function addClickEventListener() {
    document.addEventListener("click", (e) => {
        const beast = e.target.textContent;
        const beastify = (tabs) => {
            let pr;
            const cssDetails = {
                css: hidePage,
                target: {
                    tabId: tabs[0].id,
                },
            };
            (pr = (chrome).scripting.insertCSS(cssDetails), pr.then(() => {
                const url = beastNameToUrl(beast);
                return (chrome).tabs.sendMessage(tabs[0].id, {
                    beastUrl: url,
                    command: "beastify",
                });
            }));
        };
        getActiveTab(beastify);
    });
}

getActiveTab((tabs) => {
    const scriptDetails = {
        files: ["content.js"],
        target: {
            tabId: tabs[0].id,
        },
    };
    let pr_1;
    const pr = (chrome).scripting.executeScript(scriptDetails);
    pr_1 = (pr.then(() => {
        addClickEventListener();
    }));
    void (pr_1.catch((e) => {
        raiseError(e);
    }));
});


})();

/******/ })()
;
//# sourceMappingURL=popup.js.map