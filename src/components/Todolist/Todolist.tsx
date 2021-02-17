import React from "react";
import {Header} from "../Header/Header";
import {List} from "../List/List";
import {Footer} from "../Footer/Footer";

export function Todolist() {
    return (
        <div className={"todolist"}>
            <Header/>
            <List/>
            <Footer/>
        </div>
    )
}