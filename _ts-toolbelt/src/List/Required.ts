import {Depth} from '../Object/_Internal.ts'
import {RequiredPart} from '../Object/Required.ts'
import {List} from './List.ts'

/**
Make `L` required (deeply or not)
@param L to make required
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Required<L extends List, depth extends Depth = 'flat'> =
    RequiredPart<L, depth>
