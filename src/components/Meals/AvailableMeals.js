import { useState } from "react";
import Card from "../UI/Card.js";
import MealItem from "./MealItem/MealItem.js";
import classes from "./AvaliableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const [meals, setMeals] = useState(DUMMY_MEALS);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;

// //-------------------------------------------------------------
// import { useEffect, useState } from "react";
// import Card from "../UI/Card.js";
// import MealItem from "./MealItem/MealItem.js";
// import classes from "./AvaliableMeals.module.css";
// import axios from "axios";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

// // //-----------------------------------------------------------(curd get operation)
// const AvailableMeals = () => {
//   const [meals, setMeals] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [httpError, setHttpError] = useState();
//   useEffect(() => {
//     axios
//       .get("/api/food")
//       .then((res) => {
//         const lodaedMeals = [];
//         for (const key in res.data) {
//           lodaedMeals.push({
//             id: key,
//             name: res.data[key].item_name,
//             description: res.data[key].description,
//             price: res.data[key].price,
//             s_nmbr: res.data[key].s_nmbr,
//           });
//         };
//         setMeals(lodaedMeals);
//         setIsLoading(false);
//       })
//       .catch((err) => console.log(err));
//     //     //     // ---------------------------------------------------------------------------------------------(firebase)
//     const fetchMeals = async () => {
//       const response = await fetch("./pallavi.json");
//       if (!response.ok) {
//         throw new Error("Something went wrong!");
//       }
//       const responseData = await response.json();
//       const lodaedMeals = [];
//       for (const key in responseData) {
//         lodaedMeals.push({
//           id: key,
//           name: responseData[key].name,
//           description: responseData[key].description,
//           price: responseData[key].price,
//         });
//       };
//       setMeals(lodaedMeals);
//       setIsLoading(false);
//     };
//     fetchMeals().catch((error) => {
//       setIsLoading(false);
//       setHttpError(error.message);
//     });
//   }, []);

//   if (isLoading) {
//     return (
//       <section className={classes.MealsLoading}>
//         <p>Loading...</p>
//       </section>
//     );
//   }
//   if (httpError) {
//     return (
//       <section className={classes.MealsError}>
//         <p>{httpError}</p>
//       </section>
//     );
//   }
//   const mealsList = meals.map((meal) => (
//     <MealItem
//       key={meal.id}
//       id={meal.id}
//       name={meal.name}
//       description={meal.description}
//       price={meal.price}
//     />
//   ));
//   return (
//     <section className={classes.meals}>
//       <Card>{mealsList}</Card>
//     </section>
//   );
// };
// export default AvailableMeals;

// //--------------------------------------------------------------------------------
