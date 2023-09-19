import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./Categoty/Category";
import { SingleProdPage } from "./SingleProdPage/SingleProdPage";
import { Profile } from "./Profile/Profile";

export const PageRoutes = ()=> {
    return (
        <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/product/:id" element={<SingleProdPage/>}/>
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}