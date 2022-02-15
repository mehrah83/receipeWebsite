import React from "react";
import ReceipeItem from "./ReceipeItem";

const Receipe = (props) => {
const {receipes} = props;
  return (
    <>
       <div className="card-columns">
       {
         receipes.map(recipe =><ReceipeItem key={Math.random()*100} name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
         />
          )} 
      </div>
    </>
  );
};

export default Receipe;
