import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./Categoty/Category";
import { SingleProdPage } from "./SingleProdPage/SingleProdPage";
import { Profile } from "./Profile/Profile";
import  SignUp from "./Signup/Signup";
import Login from "./Login/Login";
import Cart from "./Cart/Cart"
import Payment from "./Payment/Payment";

export const PageRoutes = ()=> {
    return (
        <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/product/:id" element={<SingleProdPage />}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/payment" element={<Payment/>}/>
        </Routes>
    )
}