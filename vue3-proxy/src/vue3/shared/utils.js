function isObject (value) {
  return typeof value === 'object' && value !== null
}

function hasOwnProperty (target, key) {
  return Object.prototype.hasOwnProperty.call(target, key)
}

function isEqual (newVlue, oldVlue) {
  return newVlue === oldVlue
}

export {
  isObject,
  hasOwnProperty,
  isEqual
}