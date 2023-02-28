import { createReduxModule } from "hooks-for-redux";
import checkboxChange from "../checkboxChange";
import deleteItem from "../deleteItem";
import newInput from "../newInput";

export const [useData, { add, del, checkOff }] = createReduxModule('data', [], {

    add: state => newInput(state),
    del: (state, id) => deleteItem(state, id),
    checkOff: (state, id) => checkboxChange(state, id),

});