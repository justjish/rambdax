import {Depth} from '../Object/_Internal.ts'
import {WritablePart} from '../Object/Writable.ts'
import {List} from './List.ts'

/**
Make `L` writable (deeply or not)
@param L to make writable
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Writable<L extends List, depth extends Depth = 'flat'> =
    WritablePart<L, depth>
