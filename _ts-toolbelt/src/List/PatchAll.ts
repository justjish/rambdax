import {PatchAll as OPatchAll} from '../Object/PatchAll.ts'
import {List} from '../List/List.ts'
import {Depth} from '../Object/_Internal.ts'
import {BuiltInObject} from '../Misc/BuiltInObject.ts'

/**
[[Patch]] a list of [[List]]s into `L`. Patches from left to right, first
items get completed by the next ones (last-in completes).
@param O to start with
@param Os to patch
@param depth (?=`'flat'`) to do it deeply
@param ignore (?=`BuiltinObject`) types not to merge
@returns [[List]]
@example
```ts
```
*/
export type PatchAll<O extends List, Ls extends List<List>, depth extends Depth = 'flat', ignore extends any = BuiltInObject> =
    OPatchAll<O, Ls, depth, 0, ignore>
