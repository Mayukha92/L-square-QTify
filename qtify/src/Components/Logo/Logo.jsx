import React from "react";
import LogoImage from "../../assets/logo.png";
import styles from "./Logo.module.css";
function  Logo(){
    return (
        <div className = {styles.logoDiv}>
            <img src={LogoImage} alt="logoImage" width ={67} />

        </div>
    );
}
export default Logo;