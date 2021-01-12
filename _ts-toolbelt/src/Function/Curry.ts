import {Pos} from '../Iteration/Pos.ts'
import {Append} from '../List/Append.ts'
import {Concat} from '../List/Concat.ts'
import {Length} from '../List/Length.ts'
import {Next} from '../Iteration/Next.ts'
import {Cast} from '../Any/Cast.ts'
import {Parameters} from './Parameters.ts'
import {Return} from './Return.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {NonNullableFlat} from '../Object/NonNullable.ts'
import {x} from '../Any/x.ts'
import {List} from '../List/List.ts'
import {Function} from './Function.ts'
import {Extends} from '../Any/Extends.ts'
import {Tail} from '../List/Tail.ts'

/**
@hidden
*/
type GapOf<L1 extends List, L2 extends List, LN extends List, I extends Iteration> =
    L1[Pos<I>] extends x
    ? Append<LN, L2[Pos<I>]>
    : LN

/**
@hidden
*/
type _GapsOf<L1 extends List, L2 extends List, LN extends List = [], L2D extends List = L2, I extends Iteration = IterationOf<'0'>> = {
    // L2D is what is left to consume, previously was `Drop` (see git history)
    0: _GapsOf<L1, L2, GapOf<L1, L2, LN, I>, Tail<L2D>, Next<I>>
    1: Concat<LN, L2D>
}[Extends<Pos<I>, Length<L1>>]

/**
@hidden
*/
type GapsOf<L1 extends List, L2 extends List> =
    _GapsOf<L1, L2> extends infer X
    ? Cast<X, List>
    : never

/**
@hidden
*/
type Gaps<L extends List> = Cast<NonNullableFlat<{
    [K in keyof L]?: L[K] | x
}>, List>

/**
Curry a [[Function]]
@param F to curry
@returns [[Function]]
@example
```ts
import {F} from 'ts-toolbelt'

/// If you are looking for creating types for `curry`
/// It handles placeholders and variable arguments
declare function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>
```
*/
export type Curry<F extends Function> =
    <
        L extends List,
        G extends List = GapsOf<L, Parameters<F>>,
        R extends any = Return<F>
    >(...args: Cast<L, Gaps<Parameters<F>>>) =>
        Length<G> extends 0 ? R : Length<G> extends 1
        // it means that it can continue being curried & can be called as terminating function
        // so it allows to continue currying (useless) & call the function (the last parameter)
        ? Curry<(...args: G) => R> & ((...args: G) => R)
        : Curry<(...args: G) => R>
