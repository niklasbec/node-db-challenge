const db = require('../data/db-config')

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    return db("ingredients").join(
        "ingredients_needed",
        "ingredients_needed.ingredient_id",
        "=",
        "ingredients.id"
      ).where({recipe_id:id}).select('ingredients.name', 'ingredient_quantity')
  }


/*
SQL:

select ingredients.name, ingredient_quantity
from ingredients_needed
join ingregdients
on ingredients_needed.ingredient_id = ingredients.id
where recipe_id = 2;

order_by desc asc

*/

function getInstructions(id) {
    return db('instructions').where({recipe_id: id})
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
  }