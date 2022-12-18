import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getTypeAuth } from "../../../Redux/userSlice";
import s from './Auth.module.css';
import { SignIn } from "./SignIn/SignIn";
import { SignUp } from "./SignUp/SignUp";


export const Auth = () => {

    const dispatch = useDispatch();
    
    const currentUser = useSelector(getUser);
    const typeAuth = useSelector(getTypeAuth);


    return (
        <div className={s.outterContainerAuth}>
            {typeAuth === 'signin' ? <SignIn /> : <SignUp/>}
        </div>
    )
}