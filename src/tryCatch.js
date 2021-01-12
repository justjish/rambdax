import { isFunction } from './isFunction.js'

export function tryCatch(fn, fallback){
  if (!isFunction(fn)){
    throw new Error(`R.tryCatch | fn '${ fn }'`)
  }
  const passFallback = isFunction(fallback)

    return (...inputs) => {
      try {
        return fn(...inputs)
      } catch (e){
        return passFallback ? fallback(e, ...inputs) : fallback
      }
    }
}
