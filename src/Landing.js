import React from "react";
import "./Landing.css";
import { Main } from "./landing_comps/Main";
import { About } from "./landing_comps/About";
import { Spnsrs } from "./landing_comps/Sponsors";
import { Theme } from "./landing_comps/theme";
import { Photos } from "./landing_comps/Photos";
import { Bot } from "./landing_comps/Bot";
import { Adv } from "./landing_comps/Adv";

export const LandingPage = () => {
    return (
        <div className="mt-auto">
            <Main/>
            <About/>
        </div>

    );
};

