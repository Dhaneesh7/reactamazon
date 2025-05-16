// // import React from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { REMOVE_FROM_CART, removeFromCart } from "./Store"
// // import "./Card.css"
// // function Cart() {
// //   const cart = useSelector((state) => state.cart);  
// //   const dispatch = useDispatch();
// // function add(){
// //   dispatch({
// //     type: REMOVE_FROM_CART, 
// //     payload: id})
// // }
// //   return (
// //     <div>
// //       <h1>Shopping Cart</h1>
// //       {cart.length === 0 ? <p>Your cart is empty</p> : (
// //         cart.map(item => (
// //           <div  id="cart" key={item.id}>
// //                   <img src={item.img} alt="product picture" width={300} height={200} />

// //             <h3>{item.name}</h3>
// //             <p>Price: ${item.price}</p>
// //             <button onClick={add()}>Remove</button>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

// // export default Cart;


// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { REMOVE_FROM_CART } from "./Store";
// import "./Card.css";

// function Cart() {
//   const cart = useSelector((state) => state.cart);  
//   const dispatch = useDispatch();

//   const handleRemove = (id) => {
//     dispatch({
//       type: REMOVE_FROM_CART,
//       payload: id,
//     });
//   };

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         cart.map((item) => (
//           <div id="cart" key={item.id}>
//             <img src={item.img} alt="product" width={300} height={200} />
//             <h3>{item.name}</h3>
//             <p>Price: ${item.price}</p>
//             <button onClick={() => handleRemove(item.id)}>Remove</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Cart;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FROM_CART, removeFromCart,ADD_TO_WISHLIST, addToCart } from "./Store"
import "./Card.css"
import { data } from "react-router-dom";
function Cart() {
  const cart = useSelector((state) => state.cart);  
  const dispatch = useDispatch();
  
const removeCart = (id) => {
    dispatch({
      type: REMOVE_FROM_CART, 
      payload: id,    
    });
  };
  const addToWishlist = (product) => {
    dispatch({
      type:ADD_TO_WISHLIST, 
      payload: product,    
    });
  };
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        cart.map(item => (
          <div  id="cart" key={item.id}>
                  <img src={item.img} alt="product picture" width={300} height={200} />

            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={/*() => dispatch(REMOVE_FROM_CART(item.id))*/()=>removeCart(item.id)}>Remove</button>
            <button onClick={() => addToWishlist(item)}>Add to wishlist</button>


          </div>
        ))
      )}
    </div>
  );
}

export default Cart;