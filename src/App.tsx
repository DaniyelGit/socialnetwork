import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";


import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";

type AppPropsType = {};

export const App = (props: AppPropsType) => {

   return (

      <div className="app-wrapper">
         {/*<Header/>*/}
         <NavBar/>

         <div className={"app-wrapper-content"}>
            <Routes>
               <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
               <Route path={'/profile'} element={<Profile/>}/>
               <Route path={'/dialogs'} element={<DialogsContainer/>}/>
               <Route path={'/users'} element={<Users/>}/>
            </Routes>
         </div>

      </div>

   );
}
