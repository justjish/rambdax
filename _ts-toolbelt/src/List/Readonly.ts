import {Depth} from '../Object/_Internal.ts'
import {ReadonlyPart} from '../Object/Readonly.ts'
import {List} from './List.ts'

/**
Make `L` readonly (deeply or not)
@param L to make readonly
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Readonly<L extends List, depth extends Depth = 'flat'> =
    ReadonlyPart<L, depth>
