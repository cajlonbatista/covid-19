import React from "react";
import "./Footer.css";
import github from "./github.svg";
import instagram from "./instagram.svg";
import facebook from "./facebook.svg";
import rocket from "./rocket.svg";
export default function Footer() {
    return (
        <div>
            <div className="divider"></div>
            <footer>
                <div>
                    <a href="https://www.instagram.com/cajlonbatista/?hl=pt-br" target="_blank">
                        <img src={instagram} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.facebook.com/franciscocajlon.jhonanthanmourabatista" target="_blank">
                        <img src={facebook} alt="" />
                    </a>
                </div>
                <div>
                    <a href="http://github.com/cajlonbatista" target="_blank">
                        <img src={github} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://hunterspace.vercel.app/" target="_blank">
                        <img src={rocket} alt="" />
                    </a>
                </div>
            </footer>
        </div>
    );
}