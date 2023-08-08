import React from "react";
import cofix from '../../ui/sponsors/cofix.png';
import tanuki from '../../ui/sponsors/tanuki.png';
import william_lawsons from '../../ui/sponsors/william_lawsons.png';
import subway from '../../ui/sponsors/subway.png';
import durex from '../../ui/sponsors/durex.png';

import "./Sponsors.css";

export const Spnsrs = () => {
    return (
        // <div className="box">
        //     <div className="element-sponsors-wrapper">
        //         <div className="element-sponsors">
        //             <div className="frame" />
        //             <div className="div" />
        //             <div className="frame-2" />
        //             <div className="frame-3" />
        //             <div className="frame-4" />
        //             <div className="frame-5" />
        //             <div className="frame-6" />
        //             <div className="frame-7" />
        //             <div className="frame-8" />
        //         </div>
        //     </div>
        // </div>
        <div className="sponsors">
            <div className="slider">
                <div className="slide_track">
                    {/* TODO: подгружать спонсоров из бд? */}
                    <div className="slide">
                        <img src={cofix} alt="cofix" />
                    </div>
                    <div className="slide">
                        <img src={tanuki} alt="tanuki" />
                    </div>
                    <div className="slide">
                        <img src={william_lawsons} alt="william_lawsons" />
                    </div>
                    <div className="slide">
                        <img src={subway} alt="subway" />
                    </div>
                    <div className="slide">
                        <img src={durex} alt="durex" />
                    </div>

                    <div className="slide">
                        <img src={cofix} alt="cofix" />
                    </div>
                    <div className="slide">
                        <img src={tanuki} alt="tanuki" />
                    </div>
                    <div className="slide">
                        <img src={william_lawsons} alt="william_lawsons" />
                    </div>
                    <div className="slide">
                        <img src={subway} alt="subway" />
                    </div>
                    <div className="slide">
                        <img src={durex} alt="durex" />
                    </div>

                </div>
            </div>
        </div>


    );
};
