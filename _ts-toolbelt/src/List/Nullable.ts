import {Key} from '../Any/Key.ts'
import {Depth} from '../Object/_Internal.ts'
import {List} from './List.ts'
import {Update} from '../Object/Update.ts'
import {x} from '../Any/x.ts'

/**
Make some entries of `L` nullable (deeply or not)
@param L to make nullable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Nullable<L extends List, K extends Key = Key, depth extends Depth = 'flat'> =
    Update<L, K, x | null | undefined, depth>
