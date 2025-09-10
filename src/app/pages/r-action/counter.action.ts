import { createAction, props } from "@ngrx/store";



export const countAction = createAction(
    '[Count] Increment',
    // at the place of this we can name anythings.
    props<{ value: number }>()
)

export const decrementCountAction = createAction(
    '[Count] Decrement',
    // at the place of this we can name anythings.
    props<{ value: number }>()
)

