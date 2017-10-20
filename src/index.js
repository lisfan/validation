const typeOf = function (value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

const isType = function (type) {
  return function (value) {
    return typeOf(value) === type
  }
}

export default {
  'typeof': typeOf,

  isUndefined: isType('undefined'),
  isNull: isType('null'),
  isNil(value) {
    return this.isUndefined(value) || this.isNull(value)
  },
  isBoolean: isType('boolean'),
  isNumber: isType('number'),
  isNaN(value) {
    return this.isNumber(value) && Number.isNaN(value)
  },
  isInteger: Number.isInteger,
  isSafeInteger: Number.isSafeInteger,
  isFinite: Number.isFinite,
  isLength(value) {
    return this.isInteger(value) && this.isFinite(value) && value >= 0 && value <= Number.MAX_SAFE_INTEGER
  },
  isString: isType('string'),
  isArray: isType('array'),
  isArrayLike(value) {
    return this.isArrayLikeObject(value) || this.isString(value)
  },
  isArrayLikeObject(value) {
    return this.isArray(value) || this.isObject(value) && this.isLength(value.length)
  },
  isObject(value) {
    return value instanceof Object
  },
  isObjectLike(value) {
    return this.isObject && typeof value === 'object'
  },
  isPlainObject(value) {
    return this.isObject(value) && value.constructor === Object
  },
  isEmpty(value) {
    if (this.isString(value) && value.length > 0) {
      return false
    } else if (this.isArray(value) && value.length > 0) {
      return false
    } else if (this.isObject(value) && Object.keys(value).length > 0) {
      return false
    }

    return true
    if (this.isNil()) {
      return
    }
  },
  isArguments: isType('arguments'),
  isFunction: isType('function'),
  isElement: isType('element'),

  isSymbol: isType('symbol'),
  isError: isType('error'),
  isRegExp: isType('regexp'),
  isDate: isType('date'),
}

