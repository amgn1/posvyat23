import React from "react";
import "./Adv.css";
import Welcome from "../cards/Welcome/Welcome";

import MainProgram from '../cards/MainProgram/MainProgram';
import NightProgram from "../cards/NightProgram/NightProgram";
import Transfer from "../cards/Transfer/Transfer";
import Residence from "../cards/Residence/Residence";
import Food from "../cards/Food/Food";
// import { Accmds } from "./accommods";
// import { Tf } from "./transfer";
// import { Food } from "./eda";
// import { Wlcm } from "./welcome";
// import { Pg } from "./programma";
// import { Emtns } from "./emotions";

export const Adv = () => {
    return (
        <div className="box">
            <div className="element-adv-wrapper">
                <div className="element-adv">
                    <h1 className="text-wrapper">ЧТО ТЕБЯ ЖДЕТ?</h1>
                    <div className="benefits">
                    <Welcome/>
                        <MainProgram/>
                        <NightProgram/>
                        <Transfer/>
                        <Residence/>
                        <Food/>
                        <Adv/>
                        {/* <Accmds/>
                        <Tf/>
                        <Food/>
                        <Wlcm/>
                        <Pg/>
                        <Emtns/> */}
                    </div>
                </div>
            </div>     
        </div>
    );
};
            