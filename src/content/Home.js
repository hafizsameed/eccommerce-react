import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Capture from "./Capture.PNG"
import "./Home.css"
import Game from "./Components/Home-cards/home-game"
import Cloth from "./Components/Home-cards/home-cloth"
import Decour from "./Components/Home-cards/home-decour"


const Home = () => {





    const Hover = () => {
        let title = document.getElementById("title");
        // let h1 = document.getElementById("title-h1");


        title.style.opacity = 1;

    }






    return (
        <div className="home">
            <div className="img-con">
                <img src="https://t3.ftcdn.net/jpg/03/35/74/56/360_F_335745675_MaxYxSsadrviZdThITuHB2oCohYOiwEu.jpg" alt="home-img" className="home-img" onMouseOver={Hover}/>
                <div className="img-title" id="title">
                    <h1>Everything you need in </h1>
                    <div className="text-effect-1">
                        <h2>one</h2>
                        <h2>one</h2>
                    </div>
                    <div className="text-effect-2">
                        <h2>place</h2>
                        <h2>place</h2>
                    </div>
                </div>
            </div>
            <div className="seperator" ></div>
            <Game />
            <div className="seperator" ></div>

            <Cloth />
            <div className="seperator" ></div>
            <Decour />



            {/* {cloth && <div className="game">
                    {[1, 2, 3].map((_, i) => {
                        var product = cloth[i]
                        
                        return <div className="game-card" key={product.id}>
                        <img src={product.img} alt={product.title} className="card-img" />
                        <h3>{product.title}</h3>
                        <p>{product.snippet}</p>
                        <p>{product.price}</p>
                        </div>
                    })}
                </div>} */}



            {/* {decour && <div className="game">
                    {[1, 2, 3].map((_, i) => {
                        var product = decour[i]

                        return <div className="game-card" key={product.id}>
                            <img src={product.img} alt={product.title} className="card-img" />
                            <h3>{product.title}</h3>
                            <p>{product.snippet}</p>
                            <p>{product.price}</p>
                        </div>
                    })}
                </div>} */}


        </div>
    );
}

export default Home;