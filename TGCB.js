

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    // Code here!
    let recipesList = createRecipeList(recipes);
    console.log(recipesList);
    let findrecipes = true;
    let firstIngredient = '';
    let secondIngredient = '';
    let index = 0;
    while (findrecipes){
        firstIngredient = ingredientCheck(backeryA, recipesList);
        index = recipesList.indexOf(firstIngredient);
        if (index > -1){
            recipesList.splice(index,1);
        }
        secondIngredient = ingredientCheck(backeryB, recipesList);
        if (secondIngredient){
            findrecipes = false;
        }
    }

    let result = [firstIngredient, secondIngredient];
    console.log(result);

  }
  /*
  function createRecipeList(recipes){
    let recipesList = [];
    for (let i in recipes){
        for (let j in i.ingredients){
            recipesList.push(i.ingredients[j]);
        }
    }
    return recipesList;
}

function ingredientCheck(bakery, recipes){
    for (let i in bakery){
        for (let j in recipes){
            if (bakery[i] === recipes[j]){
                return backery[i];
            }
        }
    }
}
*/
  let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
  let bakeryB = ['milk', 'butter', 'cream cheese'];
  let recipes = [
      {
          name: 'Coconut Sponge Cake',
          ingredients: ['coconut', 'cake base']
      },
      {
          name: 'Persian Cheesecake',
          ingredients: ['saffron', 'cream cheese']
      },
      {
          name: 'Custard Surprise',
          ingredients: ['custard', 'ground beef']
      }
  ];
  
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));
  
  bakeryA = ['potatoes', 'bay leaf', 'raisins'];
  bakeryB = ['red bean', 'dijon mustard', 'apples'];
  recipes = [
      {
          name: 'Potato Ganache',
          ingredients: ['potatoes', 'chocolate']
      },
      {
          name: 'Sweet Fish',
          ingredients: ['anchovies', 'honey']
      },
      {
          name: "Nima's Famous Dijon Raisins",
          ingredients: ['dijon mustard', 'raisins']
      }
  ];
  
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));