import React from "react";
import contactPic from "../../../static/assets/images/auth/pages/contact.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + contactPic + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >

            </div>

            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone"/>
                        </div>

                        <div className="text">555-555-5555</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope"/>
                        </div>

                        <div className="text">d.alexander85.work@gmail.com</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt"/>
                        </div>

                        <div className="text">Los Angeles, Ca</div>
                    </div>
                </div>
            </div>
        </div>
    );
}