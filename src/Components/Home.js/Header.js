import React from "react";
import "./Header.css";
import header from "./../../img/header.png";


const Header = ()=>{
    return(
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Nous transporonts vos ambitions </h2>
                        <p>la seul solution de livraison et warehousing qui prends soin de vos colis et de vos client.</p>
                        <button>Livrer maintenent</button>
                    </div>
                    <div className="col-md-6" >
                        <img src={header} className="imgsize" style={{
                          width:"600px",
                          height:"600px"
                          }}></img>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;