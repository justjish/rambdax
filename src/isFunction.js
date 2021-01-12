import { type } from './type.js'

export function isFunction(fn){
  return [ 'Async', 'Function' ].includes(type(fn))
}
