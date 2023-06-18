import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import "./Purchase.css"
import Cart from "./Cart";
import { fetchData } from "../productIndex";
import { connect } from "react-redux";
import { addDataSucces } from "../cartIndex";
// import { ShopContextProvider } from "./context/shop-context";


const Purchase = ({ item, addData }) => {
    const { id } = useParams();
    const { type } = useParams();
    const [addToCart, setAddToCart] = useState(null)
    const [details, setDetails] = useState(null)
    // const { addToCart } = useContext


    useEffect(() => {
        fetch("http://localhost:8000/Products" + "/" + id)
            .then((res) => {
                return res.json(res);
            })
            .then((data) => {
                setDetails(data);
            })
    }, [])



    const DecrementItem = () => {
        var itemCounter = document.getElementById("item-counter");
        // console.log(itemCounter.value);
        if (itemCounter.value > 0) {
            var decrement = --itemCounter.value;
            itemCounter.value = decrement
        }
        else {
            itemCounter.value = 0
        }



    }
    const IncrementItem = () => {

        var itemCounter = document.getElementById("item-counter");
        var Increment = document.getElementById("Increment");
        var Decrement = document.getElementById("Decrement");


        if (itemCounter.value < 100) {
            // console.log(itemCounter.value);
            Increment.disabled = false;

            var increment = ++itemCounter.value;
            itemCounter.value = increment
        }
        else if (itemCounter.value > 100) {
            // itemCounter.value = `item left : 99 in stock`
            Increment.disabled = true;
        }








    }

    const sale = (Percentage, Price) => {
        // var Decimal = Percentage / 100;
        // var Discount = Price * Decimal;
        // var Sale = Price - Discount;
        var Sale = Math.floor(Price - (Price * (Percentage / 100)))

        return Sale



    }

    const addItem = () => {
        setAddToCart(details.id)
        console.log(addToCart);

    }



    if (details && details.sale == true) {

        var originalPrice = details.price;
        var SalePrice = sale(70, originalPrice);


        return (
            <div>
                {details && <section className="item-details">

                    <div className="item-container">
                        <div className="item-img-div">
                            <img src={details.img} alt="item-img" className="item-img" />
                        </div>
                        <div className="item-description">
                            <p className="saleTag">70% OFF</p>
                            <h1>{details.title}</h1>
                            <h4>{details.snippet}</h4>
                            <h3 className="sale-price">Price : <span className="originalprice"> ${originalPrice}</span> <span className="newprice">${SalePrice}</span> </h3>
                            {/* <div className="item-add">
                                <button className="decrement-btn" onClick={DecrementItem} id="Decrement" >-</button>
                                <input type="name" placeholder="Enter an amount" className="amount" id="item-counter"  />
                                <button className="increment-btn" onClick={IncrementItem} id="Increment">+</button>
                            </div> */}
                            <button className="addtoCart" onClick={() => {
                                var cartProduct = { ...details, count: 1 };
                                addData(cartProduct)
                            }}>Add to Cart</button>
                        </div>
                    </div>

                </section>}
            </div>
        );
    } else {
        return <div>
            {details && <section className="item-details">

                <div className="item-container">
                    <div className="item-img-div">
                        <img src={details.img} alt="item-img" className="item-img" />
                    </div>
                    <div className="item-description">
                        <h1>{details.title}</h1>
                        <h4>{details.snippet}</h4>
                        <h3>Price : ${details.price}</h3>
                        {/* <div className="item-add">
                            <button className="decrement-btn" onClick={DecrementItem} id="Decrement" >-</button>
                            <input type="name" placeholder="Enter an amount" className="amount" id="item-counter" />
                            <button className="increment-btn" onClick={IncrementItem} id="Increment">+</button>
                        </div> */}
                        <button className="addtoCart" onClick={() => addData(details)}>Add to Cart</button>
                    </div>
                </div>

            </section>
            }
        </div >
    }
}






const mapStateToProps = state => {
    return {
        Item: state.cart.Item
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addData: (item) => dispatch(addDataSucces(item)),
        
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Purchase)
