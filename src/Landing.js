import React from "react";
import "./Landing.css";
import { Main } from "./landing_comps/Main/Main";
import { About } from "./landing_comps/About/About";
import { Spnsrs } from "./landing_comps/Sponsors/Sponsors";
import { Theme } from "./landing_comps/theme";
import { Photos } from "./landing_comps/Photos";
import { Bot } from "./landing_comps/Bot";
import { Adv } from "./landing_comps/Adv";


export const LandingPage = () => {
    return (
        <div className="">
            <Main/>
            <About/>
{/* TODO: Вынести отдельно карточки */}
            <Adv/>
            {/* <Spnsrs/> */}
        </div>

    );
};

