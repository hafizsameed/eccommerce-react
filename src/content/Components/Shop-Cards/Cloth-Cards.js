import { useEffect, useState } from "react";
import "./Cloth-card.css";
import arrow from "../arrow.png"
import { Link } from "react-router-dom";
import { fetchData } from "../../../productIndex";
import { connect } from "react-redux";


const Cloth_cards = ({ data, fetchData, loading, error }) => {
    const [cloth, setCloth] = useState([]);
    const [productIndex, setProductIndex] = useState(0);



    // useEffect(() => {
    //     fetch("http://localhost:8000/clothing")
    //         .then((res) => {
    //             return res.json(res);
    //         })
    //         .then((data) => {
    //             setCloth(data);
    //         })
    // }, [])


    const ClothScrollCarosal = (direction) => {
        var productContainer = document.getElementById('product-container-2');
        var pIndex = productIndex
        if (direction === '1' && pIndex < cloth.length - 19)
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
        setCloth(data)
    }, [data])
    // console.log(data);
    return (loading ? (
        <h2>loading</h2>
    ) : error ? (
        <h2>{error}</h2>
    )
        : (

            // return (
            <section className="cloth-cards">
                <div className="cloth-title">
                    <h2>Clothing</h2>
                </div>
                <div className="cloth-arrows">
                    <img onClick={() => ClothScrollCarosal('-1')} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABSUlEQVR4nO2Yv0oDQRCHB0FEbLS01EprCwVnLoUK6SR3O4pinU6i3mxIF1/B0lZ8gbyAf0CxkOQdLNMJNoLiyZGghRYmcubmnA9+9e5395tj9wAMwzAMwzD+N+jkAtl3gu36ImiG2CdpkOUJ2e+AdhH6iJyt8OEk6BfxCTppY9iYB+0i1KvaYxDVQ9Au0s8bOX+yVK2Og3KRftX8NVUOZkG7CPXSxS1ZhwKIJMj+ldgfQ7M5NtRiyHI7yIJZB1lauNuYyfSp/V3kAaN4uQAiPq3ac8C+pl6EPqt2vrEXT6kXoTRO7kyERv0WuCDVwmIMuwzx+XX+JmdVapU2a9OQJwYUePnVESUnIl2M/BrklR/Ow5X2Y7z+i1V61V1lqYAWvpVw0iaO50AT9HUeTsvl/QnQBhXoB90lsdyXwqOFUe/FMAzDMAwDsucduuQ/xiNmeh4AAAAASUVORK5CYII=" alt="" className="cloth-carosal-right" />
                    <img onClick={() => ClothScrollCarosal('1')} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABSUlEQVR4nO2Yv0oDQRCHB0FEbLS01EprCwVnLoUK6SR3O4pinU6i3mxIF1/B0lZ8gbyAf0CxkOQdLNMJNoLiyZGghRYmcubmnA9+9e5395tj9wAMwzAMwzD+N+jkAtl3gu36ImiG2CdpkOUJ2e+AdhH6iJyt8OEk6BfxCTppY9iYB+0i1KvaYxDVQ9Au0s8bOX+yVK2Og3KRftX8NVUOZkG7CPXSxS1ZhwKIJMj+ldgfQ7M5NtRiyHI7yIJZB1lauNuYyfSp/V3kAaN4uQAiPq3ac8C+pl6EPqt2vrEXT6kXoTRO7kyERv0WuCDVwmIMuwzx+XX+JmdVapU2a9OQJwYUePnVESUnIl2M/BrklR/Ow5X2Y7z+i1V61V1lqYAWvpVw0iaO50AT9HUeTsvl/QnQBhXoB90lsdyXwqOFUe/FMAzDMAwDsucduuQ/xiNmeh4AAAAASUVORK5CYII=" alt="" className="cloth-carosal-left" />
                </div>
                <div className="product-container-wrapper-2">
                    {cloth && <div id='product-container-2' className="clothes">
                        {cloth.map((_, i) => {
                            var product = cloth[i]
                            if (product.category == "clothing") {

                                console.log(product);

                                if (product.sale == true) {
                                    return <Link to={`./Purchase/clothing/${product.id}`}>
                                        <div className={`cloth-card`} key={product.id}>
                                            <div className="cloth-sale-cardtag">
                                                <p className="cloth-sale-cardtag-p" >- 70% </p>
                                            </div>
                                            <img src={product.img} alt={product.title} className="cloth-card-img" />
                                            <div className="cloth-card-title" id="card-effect">
                                                <h3>{product.title}</h3>
                                                <p>{product.snippet}</p>
                                                <p>{product.price}</p>
                                            </div>
                                        </div>
                                    </Link>

                                } else {
                                    return <Link to={`./Purchase/clothing/${product.id}`}><div className={`cloth-card`} key={product.id}>
                                        <img src={product.img} alt={product.title} className="cloth-card-img" />
                                        <div className="cloth-card-title" id="card-effect">
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
            // );
        )

    )


}






const mapStateToProps = (state) => {
    return {
        data: state.product.data,
        loading: state.product.loading,
        error: state.product.error
    }

}


const mapDisptachToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}





export default connect(mapStateToProps, mapDisptachToProps)(Cloth_cards);






