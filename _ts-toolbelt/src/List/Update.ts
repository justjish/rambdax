import {Key} from '../Any/Key.ts'
import {List} from './List.ts'
import {Update as OUpdate} from '../Object/Update.ts'
import {Depth} from '../Object/_Internal.ts'

/**
Update in `L` the entries of key `K` with `A`.
Use the [[x]] placeholder to get the current field type.
@param L to update
@param K to chose fields
@param A to update with
@returns [[List]]
@example
```ts
```
*/
export type Update<L extends List, K extends Key, A extends any, depth extends Depth = 'flat'> =
    OUpdate<L, K, A, depth>
