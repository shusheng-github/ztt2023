import observer from './observer';
function observe (data) {
  if (typeof data !== 'object' || data === null) return;
  return new observer(data)
}

export default observe;