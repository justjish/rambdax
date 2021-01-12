import {MergeAll as OMergeAll} from '../Object/MergeAll.ts'
import {List} from '../List/List.ts'
import {Depth} from '../Object/_Internal.ts'

/**
[[Merge]] a list of [[List]]s into `L`. Merges from left to right, first
items get completed by the next ones (last-in completes).
@param O to start with
@param Os to merge
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type MergeAll<O extends List, Ls extends List<List>, depth extends Depth = 'flat'> =
    OMergeAll<O, Ls, depth, 0>
