import { connect } from "react-redux";
import "./Cart.css"
import { Link } from "react-router-dom";
import emptyCart from "./emptyCart.png"
import { useEffect, useState } from "react";
import { removeItem } from "../cartIndex";





const Cart = ({ Item, remove }) => {


  const Decrement = (id, index, price) => {
    var item = document.getElementById(`itemCounter${id}`)
    var itemPrice = document.getElementById(`itemPrice${id}`)
    // console.log(itemPrice);

    var itemIncrement = Number(item.innerHTML)
    if (itemIncrement > 1) {
      // console.log(Number(itemPrice.innerHTML, "item Price"));
      var priceDecrement = itemPrice.innerHTML / itemIncrement
      itemPrice.innerHTML = priceDecrement
      // console.log(priceDecrement, "Decrement");
      item.innerHTML = `${itemIncrement - 1}`
      Item[index].count = itemIncrement - 1
      Item[index].price = priceDecrement
      // console.log(price, " price");
    }
  }


  const Increment = (id, index, price) => {
    var item = document.getElementById(`itemCounter${id}`)
    var itemPrice = document.getElementById(`itemPrice${id}`)
    // console.log(id, 'id')
    // console.log(item);
    var itemIncrement = Number(item.innerHTML)
    if (itemIncrement < 15) {
      // console.log(itemIncrement + 1, Item);
      item.innerHTML = `${itemIncrement + 1}`
      Item[index].count = itemIncrement + 1
      var priceIncrement = price * (itemIncrement + 1)
      // console.log(priceIncrement);
      itemPrice.innerHTML = `${priceIncrement}`
      Item[index].price = priceIncrement


    }

  }







  console.log(Item, 'Item')

  if (Item.length == 0) {
    console.log("nigga");
    return (
      <div className="cart">
        {/* <div className="cart-title">
          <h2>Your Shopping cart :</h2>
        </div> */}
        <div className="emptyCart-container">
          <img src={emptyCart} alt="" className="empty-cart-img" />
          <div className="cart-empty">
            <h2>Your cart is empty </h2>
            <Link to={"/Shop"}>
              <h3>Browse Shop</h3>
            </Link>
          </div>

        </div>
      </div>
    )

  }

  return (
    <div className="cart">
      <div className="cart-title">
        <h2>Your Shopping cart :</h2>
      </div>

      <div className="cart-content">
        {Item.map((item, index) => (
          <div className="cart-Item" key={item.id}>
            <div className="title-wrap">
              <h4 className="cartItem-title" >{item.title}</h4>
            </div>
            <div className="count-container">
              <h4 className="counter-btn" onClick={() => Decrement(item.id, index, item.price)} >-</h4>
              <h4 className="counter" id={`itemCounter${item.id}`} >{item.count || 1}</h4>
              <h4 className="counter-btn" onClick={() => Increment(item.id, index, item.price)} >+</h4>
            </div>
            <div className="price-wrap">
              <h4 className="cartItem-price"  >$ <span id={`itemPrice${item.id}`}> {item.price} </span></h4>
              <div className="remove">
                <img width="30" height="30" key={item.id} onClick={() => remove(item)} className="trash-logo" src="https://img.icons8.com/ios-glyphs/30/000000/trash--v1.png" alt="trash-bin" />
              </div>
            </div>
          </div>
        )
        )}

      </div >
      <div className="checkout">
        <div className="total">
          <h3>Total Amount : $  </h3>
        </div>
        <button className="checkout-btn">Check out</button>
      </div>
    </div >
  );
}

const mapStateToProps = state => {
  return {
    Item: state.cart.Item
  }
}

const mapDispatchToProps = dispatch => {
  return {
    remove: (item) => dispatch(removeItem(item))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Cart);