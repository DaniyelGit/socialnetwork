import {combineReducers, createStore} from "redux";
import {profileReducer} from "../reducer/profile-reducer";
import {dialogsReducer} from "../reducer/dialogs-reducer";
import {usersReducer} from "../reducer/users-reducer";
import {authReducer} from "../reducer/authReducer";


const rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer,
})


export const store = createStore(rootReducer)

// type for main state
export type AppStateType = ReturnType<typeof rootReducer>;
// type for store
export type StoreType = typeof store;

// @ts-ignore
window.store = store;



