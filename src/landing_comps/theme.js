import React from "react";
import "./Theme.css";

export const Theme = () => {
    return (
        <div className="box">
            <div className="element-theme-wrapper">
                <div className="element-theme">
                    <h1 className="text-wrapper">Про тематику</h1>
                    <div className="cards">
                        <div className="card">
                            <div className="rectangle" />
                            <div className="div">Атмосфера</div>
                            <p className="p">
                                Ритуалы на все случаи жизни, история ремесел и суеверий, обрядовая одежда и развлечения по календарю
                            </p>
                        </div>
                        <div className="card">
                            <div className="rectangle" />
                            <div className="div">Костюмы</div>
                            <p className="p">
                                Чисто славянским украшением были височные разнообразные кольца и подвески, которые <br />
                                не только цепляли к венцу, <br />
                                но и вплетали в волосы у висков.
                            </p>
                        </div>
                        <div className="card">
                            <div className="rectangle-2" />
                            <div className="text-wrapper-2">Игры</div>
                            <p className="text-wrapper-3">
                                Народные игры разнообразны. Даём описание самых популярных из них, так как на славянском празднике{" "}
                                <br />
                                без увеселительных забав просто <br />
                                не обойтись.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
