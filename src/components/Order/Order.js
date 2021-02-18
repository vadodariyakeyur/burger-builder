import React from 'react'
import classes from "./Order.module.css"

const Order = (props) => {

    const ingredients = []

    for (let ingredientName in props.ingredients){
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredients.map(ig => (
        <span
            key={ig.name}
            className={classes.Ingredient}
        >
            {ig.name} ({ig.amount})
        </span>
    ))

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong> </p>

        </div>
    )
}

export default Order;