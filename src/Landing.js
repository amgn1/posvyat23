import React, { useEffect} from "react";
import "./Landing.css";
import { Main } from "./landing_comps/Main/Main";
import { About } from "./landing_comps/About/About";
import Expectations from "./landing_comps/Expectations/Expectations";
import Theme from "./landing_comps/Theme/Theme";


import BackToTopBtn from "./landing_comps/BackToTopBtn/BackToTopBtn";
import Memories from "./landing_comps/Memories/MemoriesRow1/Memories";
import Hands from "./landing_comps/Hands/Hands";
import Ticket from './landing_comps/Ticket/Ticket';
import Food from "./cards/Food/Food";
import MainProgram from './cards/MainProgram/MainProgram';
import { Spnsrs } from "./landing_comps/Sponsors/Sponsors";
// import { Theme } from "./landing_comps/theme";
import { Photos } from "./landing_comps/Photos";
import { Bot } from "./landing_comps/Bot";
import MemoriesRow2 from "./landing_comps/Memories/MemoriesRow2/MemoriesRow2";
import MemoriesRow3 from "./landing_comps/Memories/MemoriesRow3/MemoriesRow3";
import HandsDark from "./landing_comps/HandsDark/HandsDark";
// import { Adv } from "./landing_comps/Adv";


export const LandingPage = () => {

    useEffect(() => {
        document.title = 'О нас';
      }, []);


    return (
        <>
            <Main className = 'main'/>
            <About className = "about"/>
            <Expectations/>
            <Spnsrs className = "spnsrs"/>
            <Theme/>
            <Hands/>
            <Memories/>
            <MemoriesRow2/>
            <MemoriesRow3/>
            {/* <BackToTopBtn/> */}

            <Ticket/>
        </>
    );
};

