import "./Decour-Cards.css";
import { useEffect, useState } from "react";
import arrow from "../arrow.png"
import { Link } from "react-router-dom";
import { fetchData } from "../../../productIndex";
import { connect } from "react-redux";



const Decour_cards = ({ data, fetchData, loading, error }) => {
    const [decour, setDecour] = useState(null);
    const [productIndex, setProductIndex] = useState(0);






    const DecourScrollCarosal = (direction) => {
        var productContainer = document.getElementById('product-container-3');
        var pIndex = productIndex
        if (direction === '1' && pIndex < decour.length - 19)
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
        }
        setDecour(data)
    }, [data])
    return (loading ? (
        <h2>loading</h2>
    ) : error ? (
        <h2>{error}</h2>
    ) :
        (
            <section className="decour-cards">
                <div className="decour-title">
                    <h2>Decour</h2>
                </div>
                <div className="decour-arrows">
                    <img onClick={() => DecourScrollCarosal('-1')} src={arrow} alt="" className="decour-carosal-right" />
                    <img onClick={() => DecourScrollCarosal('1')} src={arrow} alt="" className="decour-carosal-left" />
                </div>
                <div className="product-container-wrapper-3">
                    {decour && <div id='product-container-3' className="decour">
                        {decour.map((_, i) => {
                            var product = decour[i]
                            if (product.category == `Decour`) {

                                console.log(product);
                                if (product.sale == true) {

                                    return <Link to={`./Purchase/Decour/${product.id}`}> <div className={`decour-card`} key={product.id}>
                                        <div className="decour-sale-cardtag">
                                            <p className="decour-sale-cardtag-p" >- 70% </p>
                                        </div>
                                        <img src={product.img} alt={product.title} className="decour-card-img" />
                                        <div className="decour-card-title" id="card-effect">
                                            <h3>{product.title}</h3>
                                            <p>{product.snippet}</p>
                                            <p>{product.price}</p>
                                        </div>
                                    </div>
                                    </Link>
                                }

                                else {
                                    return <Link to={`./Purchase/Decour/${product.id}`}> <div className={`decour-card`} key={product.id}>
                                        <img src={product.img} alt={product.title} className="decour-card-img" />
                                        <div className="decour-card-title" id="card-effect">
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



export default connect(mapStateToProps, mapDisptachToProps)(Decour_cards);

