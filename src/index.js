/**
 * 返回数据类型
 *
 * @ignore
 * @param {*} value - 任意值
 * @returns {string}
 */
const typeOf = function (value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

/**
 * 返回类型检查函数
 *
 * @ignore
 * @param {string} type - 指定类型值
 * @returns {string}
 */
const isType = function (type) {
  return function (value) {
    return typeOf(value) === type
  }
}

/**
 * @namespace Validation
 */
export default {
  /**
   * 返回数据类型
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {string}
   */
  'typeof': typeOf,

  /**
   * 检测值是否为undefined
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isUndefined: isType('undefined'),
  /**
   * 检测值是否为null
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isNull: isType('null'),
  /**
   * 检测值是否为undefined或null
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isNil(value) {
    return this.isUndefined(value) || this.isNull(value)
  },
  /**
   * 检测值是否为布尔值
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isBoolean: isType('boolean'),
  /**
   * 检测值是否为数字
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isNumber: isType('number'),
  /**
   * 检测值是否为NaN
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isNaN(value) {
    return this.isNumber(value) && Number.isNaN(value)
  },
  /**
   * 检测值是否为整型数字
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isInteger: Number.isInteger,
  /**
   * 检测值是否为安全整型数字
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isSafeInteger: Number.isSafeInteger,
  /**
   * 检测值是否为有限值
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isFinite: Number.isFinite,
  /**
   * 检测值是否为大于等于0的安全整数
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isLength(value) {
    return this.isInteger(value) && this.isFinite(value) && value >= 0 && value <= Number.MAX_SAFE_INTEGER
  },
  /**
   * 检测值是否为字符串
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isString: isType('string'),
  /**
   * 检测值是否为数组
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isArray: isType('array'),
  /**
   * 检测值是否为类数组对象
   * 类对象应该不是 null ，且 typeof 的结果是 "object"。
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isArrayLikeObject(value) {
    return this.isArray(value) || this.isObject(value) && this.isLength(value.length)
  },
  /**
   * 检测值是否为类数组
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isArrayLike(value) {
    return this.isArrayLikeObject(value) || this.isString(value)
  },
  /**
   * 检测值是否为对象
   * 会检查 value 是否是 Object 的 language type。 (例如： arrays, functions, objects, regexes, new Number(0), 以及 new String(''))
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isObject(value) {
    return value instanceof Object
  },
  /**
   * 检测值是否为类对象
   * 类对象应该不是 null 以及 typeof 的结果是 "object"。
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isObjectLike(value) {
    return this.isObject(value) && this.typeof(value) === 'object'
  },
  /**
   * 检测值是否为纯对象
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isPlainObject(value) {
    return this.isObject(value) && value.constructor === Object
  },
  /**
   * 检测值是否为空：空字符串、空数组、空对象，其余情况均为true
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isEmpty(value) {
    if (this.isString(value) && value.length > 0) {
      return false
    } else if (this.isArray(value) && value.length > 0) {
      return false
    } else if (this.isObject(value) && Object.keys(value).length > 0) {
      return false
    }

    return true
  },
  /**
   * 检测值是否为函数的arguments对象
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isArguments: isType('arguments'),
  /**
   * 检测值是否为函数
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isFunction: isType('function'),
  /**
   * 检测值是否为DOM元素
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isElement: isType('element'),

  /**
   * 检测值是否为Symbol
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isSymbol: isType('symbol'),
  /**
   * 检测值是否为Error对象
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isError: isType('error'),
  /**
   * 检测值是否为正则表达式
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isRegExp: isType('regexp'),
  /**
   * 检测值是否为日期对象
   *
   * @memberOf Validation
   * @function
   * @param {*} value - 任意值
   * @returns {boolean}
   */
  isDate: isType('date'),
}
