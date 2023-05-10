import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce(
    /*array of data into single value*/ (curNumber, item) => {
      return curNumber + item.amount;
    },
    0
  );

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : " "
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
      {/* <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Add</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button> */}
    </>
  );
};
export default HeaderCartButton;

//-------------------------------------------------------------------------------------------------------
// import { useState } from "react";
// import classes from "./HeaderCartButton.module.css";

// const HeaderCartButton = (props) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const togglePopup = () => {
//     setShowPopup((prevState) => !prevState);
//   };

//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };

//   const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
//   };

//   return (
//     <>
//       <button className={classes.button} onClick={togglePopup}>
//         <span>Add</span>
//       </button>
//       {showPopup && (
//         <div className={classes.popup}>
//           <h2>Add Item</h2>
//           <form>
//             <div className={classes.formControl}>
//               <label htmlFor="firstName">First Name</label>
//               <input
//                 type="text"
//                 id="firstName"
//                 value={firstName}
//                 onChange={handleFirstNameChange}
//               />
//             </div>
//             <div className={classes.formControl}>
//               <label htmlFor="lastName">Last Name</label>
//               <input
//                 type="text"
//                 id="lastName"
//                 value={lastName}
//                 onChange={handleLastNameChange}
//               />
//             </div>
//             <div className={classes.actions}>
//               <button type="button" onClick={togglePopup}>
//                 Cancel
//               </button>
//               <button type="submit">Add Item</button>
//             </div>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default HeaderCartButton;
