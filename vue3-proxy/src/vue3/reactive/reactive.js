import { isObject } from '../shared/utils';
import { mutableHandler } from './mutableHandler';
function reactive (target) {
  return createReactiveObject(target, mutableHandler)
}

function createReactiveObject (target, baseHandler) {
  if (!isObject(target)) return
  const observer = new Proxy(target, baseHandler)
  return observer
}

export {
  reactive
}