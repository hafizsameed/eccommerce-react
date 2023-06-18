import { useEffect, useState } from "react";
import "./Cloth-card.css";
import arrow from "../arrow.png"




const Cloth_cards = () => {
    const [cloth, setCloth] = useState(null);
    const [productIndex, setProductIndex] = useState(0);




    useEffect(() => {
        fetch("http://localhost:8000/clothing")
            .then((res) => {
                return res.json(res);
            })
            .then((data) => {
                setCloth(data);
            })
    }, [])


    const ClothScrollCarosal = (direction) => {
        var productContainer = document.getElementById('product-container-2');
        var pIndex = productIndex
        if (direction === '1' && pIndex < cloth.length - 3)
            pIndex += 1;
        else if (direction === '-1' && pIndex > 0)
            pIndex -= 1;
        setProductIndex(pIndex)
        console.log(pIndex, 'pIndex');
        productContainer.style.left = `-${550 * pIndex}px`
    }



    return (
                <div id='product-container-2' className="clothes">
                    {cloth.map((_, i) => {
                        var product = cloth[i]

                        if (product.sale == true) {
                            return <div className={`cloth-card`} key={product.id}>
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

                        } else {
                            return <div className={`cloth-card`} key={product.id}>
                                <img src={product.img} alt={product.title} className="cloth-card-img" />
                                <div className="cloth-card-title" id="card-effect">
                                    <h3>{product.title}</h3>
                                    <p>{product.snippet}</p>
                                    <p>{product.price}</p>
                                </div>
                            </div>

                        }
                    })}
                    </div>
                    );
}

export default Cloth_cards;






