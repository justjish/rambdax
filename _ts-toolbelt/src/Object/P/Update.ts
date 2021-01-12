import {IterationOf} from '../../Iteration/IterationOf.ts'
import {Iteration} from '../../Iteration/Iteration.ts'
import {Pos} from '../../Iteration/Pos.ts'
import {Next} from '../../Iteration/Next.ts'
import {Key} from '../../Any/Key.ts'
import {LastIndex} from '../../List/LastIndex.ts'
import {List} from '../../List/List.ts'
import {Record} from '../Record.ts'
import {Patch} from '../Patch.ts'

/**
@hidden
*/
type _Update<O, Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> =
  O extends object                                                     // if it's an object
  ? Pos<I> extends LastIndex<Path>                                     // if it's the last index
    ? Patch<Record<Path[Pos<I>], A>, O>                                // use standard Update
    : (O & Record<Exclude<Path[Pos<I>], keyof O>, {}>) extends infer O // fill in missing keys with non-object
      ? {                                                              // to effectively build the object up
          [K in keyof O]: K extends Path[Pos<I>]                       // if K is part of path
                          ? _Update<O[K], Path, A, Next<I>>            // keep diving
                          : O[K]                                       // not part of path - x
        } & {}
      : never
  : O

/**
Update in `O` the fields at `Path` with `A`
@param O to update
@param Path to be followed
@param A to update with
@returns [[Object]]
@example
```ts
```
*/
export type Update<O extends object, Path extends List<Key>, A extends any> =
    _Update<O, Path, A>
