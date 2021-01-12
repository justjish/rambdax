import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Key} from '../Iteration/Key.ts'
import {Next} from '../Iteration/Next.ts'
import {Append} from '../List/Append.ts'
import {Exclude} from '../Union/Exclude.ts'
import {List} from '../List/List.ts'
import {Extends} from '../Any/Extends.ts'
import {At} from './At.ts'

/**
@hidden
*/
type PickIfEntry<O extends object, LN extends List, I extends Iteration> =
    Key<I> extends keyof O
    ? Append<LN, O[Key<I> & keyof O]>
    : LN

/**
@hidden
*/
type ___ListOf<O extends object, K, LN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: ___ListOf<O, Exclude<K, Key<I>>, PickIfEntry<O, LN, I>, Next<I>>
    1: LN
}[Extends<[K], [never]>]

/**
@hidden
*/
type __ListOf<O extends object> =
    number extends keyof O
    ? At<O, number>[]
    : string extends keyof O
      ? At<O, string>[]
      : symbol extends keyof O
        ? At<O, symbol>[]
        : ___ListOf<O, keyof O>

/**
@hidden
*/
export type _ListOf<O extends object> =
    __ListOf<O>

/**
Transform an [[Object]] into a [[List]]
(It will only pick numeric literal indexes)
@param O to transform
@returns [[List]]
@example
```ts
```
*/
export type ListOf<O extends object> =
    O extends unknown
    ? _ListOf<O>
    : never
