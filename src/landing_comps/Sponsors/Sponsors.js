import React from "react";
import cofix from '../../ui/sponsors/cofix.png';
import tanuki from '../../ui/sponsors/tanuki.png';
import william_lawsons from '../../ui/sponsors/william_lawsons.png';
import subway from '../../ui/sponsors/subway.png';
import durex from '../../ui/sponsors/durex.png';

import "./Sponsors.css";

export const Spnsrs = () => {
    return (
        <div className="sponsors__wrapper">
            <div class="marquee-infinite">
                <div>
                    <span>
                        <img src={cofix} alt="cofix" />
                        <img src={tanuki} alt="tanuki" />
                        <img src={william_lawsons} alt="william_lawsons" />
                        <img src={subway} alt="subway" />
                        <img src={durex} alt="durex" />
                        <img src={cofix} alt="cofix" />
                        <img src={tanuki} alt="tanuki" />
                        <img src={william_lawsons} alt="william_lawsons" />
                        <img src={subway} alt="subway" />
                        <img src={durex} alt="durex" />
                    </span>
                    <span>
                        <img src={cofix} alt="cofix" />
                        <img src={tanuki} alt="tanuki" />
                        <img src={william_lawsons} alt="william_lawsons" />
                        <img src={subway} alt="subway" />
                        <img src={durex} alt="durex" />
                        <img src={cofix} alt="cofix" />
                        <img src={tanuki} alt="tanuki" />
                        <img src={william_lawsons} alt="william_lawsons" />
                        <img src={subway} alt="subway" />
                        <img src={durex} alt="durex" />
                    </span>

                </div>
            </div>
        </div>


    );
};
