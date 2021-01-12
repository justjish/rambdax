import {Iteration} from '../Iteration/Iteration.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Merge} from './Merge.ts'
import {Pos} from '../Iteration/Pos.ts'
import {Next} from '../Iteration/Next.ts'
import {Length} from '../List/Length.ts'
import {Cast} from '../Any/Cast.ts'
import {List} from '../List/List.ts'
import {Extends} from '../Any/Extends.ts'
import {Depth, MergeStyle} from './_Internal.ts'
import {BuiltInObject} from '../Misc/BuiltInObject.ts'

/**
@hidden
*/
type __Assign<O extends object, Os extends List<object>, depth extends Depth, style extends MergeStyle, ignore extends any, I extends Iteration = IterationOf<'0'>> = {
    0: __Assign<Merge<Os[Pos<I>], O, depth, style, ignore>, Os, depth, style, ignore, Next<I>>
    1: O
}[Extends<Pos<I>, Length<Os>>]

/**
@hidden
*/
export type _Assign<O extends object, Os extends List<object>, depth extends Depth, style extends MergeStyle, ignore extends any> =
    __Assign<O, Os, depth, style, ignore> extends infer X
    ? Cast<X, object>
    : never

/**
Assign a list of [[Object]] into `O` with [[Merge]]. Merges from right to
left, first items get overridden by the next ones (last-in overrides).
@param O to assign to
@param Os to assign
@param depth (?=`'flat'`) to do it deeply
@param style (?=`1`) 0 = lodash, 1 = ramda
@param ignore (?=`BuiltinObject`) types not to merge
@returns [[Object]]
@example
```ts
```
*/
export type Assign<O extends object, Os extends List<object>, depth extends Depth = 'flat', style extends MergeStyle = 2, ignore extends any = BuiltInObject> =
    O extends unknown
    ? Os extends unknown
      ? _Assign<O, Os, depth, style, ignore>
      : never
    : never
