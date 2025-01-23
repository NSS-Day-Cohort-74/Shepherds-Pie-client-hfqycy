export const getSizes = async () => {
    return await fetch("http://localhost:8088/sizes").then((res) => res.json())
}

export const getSauces = async () => {
    return await fetch("http://localhost:8088/sauces").then((res) => res.json())
}

export const getCheeses = async () => {
    return await fetch("http://localhost:8088/cheeses").then((res) => res.json())
}

export const getToppings = async () => {
    return await fetch("http://localhost:8088/toppings").then((res) => res.json())
}

export const addPizza = async (pizzaFormObject) => {
    return await fetch("http://localhost:8088/pizzas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pizzaFormObject)
    })
}

export const addPizzaTopping = async (pizzaToppingRelationship) => {
    return await fetch(`http://localhost:8088/pizzaToppings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pizzaToppingRelationship)
    })
}