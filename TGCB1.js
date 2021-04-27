function createRecipeList(recipes){
    let recipesList = [];
    for (let i in recipes){
        for (let j in recipes[i].ingredients){
            recipesList.push(recipes[i].ingredients[j]);
            //console.log(recipes[i].ingredients[j]);
        }
    }
    return recipesList;
}

function ingredientCheck(bakery, recipes){
    for (let i in bakery){
        for (let j in recipes){
            for (let k in recipes[j].ingredients){
                if (bakery[i] === recipes[j].ingredients[k]){
                    //console.log(recipes[j].ingredients[k]);
                    return recipes[j].ingredients;
                }
            }
        }
    }
}

function findSecond(recipes, bakeryB){
    for (let i in bakeryB){
        for (let j in recipes){
            if (recipes[j] === bakeryB[i]){
                return false;
            }
        }
    }
    return true;
}


function findName(recipes,ingredientsPairs){
    for (let i in recipes){
        if (recipes[i].ingredients === ingredientsPairs){
            return recipes[i].name;
        }
    }
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    // Code here!
    //let recipesList = createRecipeList(recipes);
    //console.log('target list:  ' + recipesList);
    let findrecipes = true;
    let ingredientsPairs = [];
    while (findrecipes){
        ingredientsPairs = ingredientCheck(bakeryA, recipes);
        findrecipes = findSecond(ingredientsPairs, bakeryB);
        bakeryA.shift();
        //bakeryA.length === 1 ? findrecipes = false:'';
    }
    //console.log(ingredientsPairs);
    return findName(recipes,ingredientsPairs);
  }
  
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