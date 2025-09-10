import { createReducer, on } from "@ngrx/store";
import { countAction } from "../r-action/counter.action"

const initialStage = 0

// this is the new method of ngrx how we make reducer 
// export const counterReducer = createReducer(
//     initialStage,
//     // import action and use in on() provide by NgRx ,  state wil get automatically state value from ngrx
//     //  props ke jaga ham kuch bhi naam de sakte hain.or hame wo props meim data component 
//     // se pass hoke action se phir reducer mein milega 
//     on(countAction, (state, props) => state + props.value)

// )


// this is the old method of ngrx where we make fucntion and exports and pass atleast one parameter
// and intilize with some value as we do know only the difference is writing formate

export function counterReducer(state = initialStage, action: any) {

    if (action.type == '[Count] Increment') {
        return state + action.value
    }else if(action.type == '[Count] Decrement'){
        return state - action.value
    }
}
