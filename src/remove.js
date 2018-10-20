import { type } from './rambda/type'
import { replace } from './rambda/replace'

export function remove(inputs, text){
  if (type(inputs) !== 'Array'){
    return replace(
      inputs,
      '',
      text
    ).trim()
  }

  let textCopy = text

  inputs.forEach(singleInput => {
    textCopy = replace(
      singleInput,
      '',
      textCopy
    ).trim()
  })

  return textCopy
}

