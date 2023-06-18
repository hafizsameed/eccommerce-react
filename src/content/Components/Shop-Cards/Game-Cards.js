import { useEffect, useState } from "react";
import arrow from "../arrow.png"
import "./Game-card.css"
import { Link } from "react-router-dom";
import { fetchData } from "../../../productIndex";
import { connect } from "react-redux";


const Game_cards = ({ data, fetchData, loading, error }) => {
    const [con, setCon] = useState(null);
    const [productIndex, setProductIndex] = useState(0);



    const scrollCarosal = (direction) => {
        var productContainer = document.getElementById('product-container');
        var pIndex = productIndex
        if (direction === '1' && pIndex < con.length - 19)
            pIndex += 1;
        else if (direction === '-1' && pIndex > 0)
            pIndex -= 1;
        setProductIndex(pIndex)
        console.log(pIndex, 'pIndex');
        productContainer.style.left = `-${550 * pIndex}px`
    }





    useEffect(() => {
        if (data.length <= 0) {
            fetchData()
            console.log(data, "DATa");
        }
        setCon(data)
    }, [data])
    return (loading ? (
        <h2>loading</h2>
    ) : error ? (
        <h2>{error}</h2>
    ) :

        (
            <section className="cards">
                <div className="game-title">
                    <h2>Gaming</h2>
                </div>
                <div className="arrows">
                    <img onClick={() => scrollCarosal('-1')} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABR0lEQVR4nO2Yv0oDQRCHB0FEbLQUBFEyYyyMxWXmLOxUlJmIKFj4FD6CvoKlrfgCeQH/gGIh8R0s0wVsAoond6CNFp4Sc7vOB79699udWXYXwHEcx3Ec53+DbBck9oCpLkLIkFiWB1mfUPQAQhehDyE7m1nZH4fQRSgPawebNg/Bi0iRHjZ1DyIQyfNKYidJkoxC4CLvua4nm9MQgUhGbF1s2joELyLFIfCCbMcARyM/GgzFbksNOOAga3tp1aYGu2p/Fn3EVNMIRCxPfyG1wxhEsqLURM8bjY2J4EUoD9udi9Cwd0HiKa1+BM2u5Y9fFLupVCmxtmeXdyahSpQTsOdfXVEqIcLWJW6tQVX5Zj9chX6Nj+Jh1UO2XQiFr/tBOyTbcxAS9LmpT2u1rTEIDYrlgw5ZL1HsnpJWfdhzcRzHcRzHgcHzBsSvcFqn1vkJAAAAAElFTkSuQmCC" alt="" className="carosal-right" />
                    <img onClick={() => scrollCarosal('1')} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABR0lEQVR4nO2Yv0oDQRCHB0FEbLQUBFEyYyyMxWXmLOxUlJmIKFj4FD6CvoKlrfgCeQH/gGIh8R0s0wVsAoond6CNFp4Sc7vOB79699udWXYXwHEcx3Ec53+DbBck9oCpLkLIkFiWB1mfUPQAQhehDyE7m1nZH4fQRSgPawebNg/Bi0iRHjZ1DyIQyfNKYidJkoxC4CLvua4nm9MQgUhGbF1s2joELyLFIfCCbMcARyM/GgzFbksNOOAga3tp1aYGu2p/Fn3EVNMIRCxPfyG1wxhEsqLURM8bjY2J4EUoD9udi9Cwd0HiKa1+BM2u5Y9fFLupVCmxtmeXdyahSpQTsOdfXVEqIcLWJW6tQVX5Zj9chX6Nj+Jh1UO2XQiFr/tBOyTbcxAS9LmpT2u1rTEIDYrlgw5ZL1HsnpJWfdhzcRzHcRzHgcHzBsSvcFqn1vkJAAAAAElFTkSuQmCC" alt="" className="carosal-left" />
                </div>
                <div className="product-container-wrapper">
                    {con && <div id='product-container' className="game" >


                        {con.map((_, i) => {
                            // console.log(rnd);
                            var product = con[i]
                            if (product.category == "gaming") {

                                console.log(product);

                                if (product.sale == true) {
                                    console.log("wow F");
                                    return (<Link to={`./Purchase/gaming/${product.id}`}>
                                        <div className={`game-card `} key={product.id} >
                                            <div className="sale-cardtag">
                                                <p className="sale-cardtag-p" >- 70% </p>
                                            </div>
                                            <img src={product.img} alt={product.title} className="card-img" />
                                            <div className="card-title"  >
                                                <h3>{product.title}</h3>
                                                <p>{product.snippet}</p>
                                                <p>{product.price}</p>
                                            </div>

                                        </div>
                                    </Link>)
                                }
                                else {

                                    return <Link to={`./Purchase/gaming/${product.id}`}> <div className={`game-card`} key={product.id} >

                                        <img src={product.img} alt={product.title} className="card-img" />
                                        <div className="card-title"  >
                                            <h3>{product.title}</h3>
                                            <p>{product.snippet}</p>
                                            <p>{product.price}</p>
                                        </div>

                                    </div>
                                    </Link>
                                }
                            }
                        })}
                    </div>}
                </div>
            </section >
        )
    );
}




const mapStateToProps = (state) => {
    return {
        data: state.product.data,
        loading: state.product.loading,
        error: state.product.error
    }

}

const mapDisptachToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}




export default connect(mapStateToProps, mapDisptachToProps)(Game_cards);

