import {Recipe} from './recipe.model';
import { Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {shoppingListsService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';
@Injectable()
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
    //new Recipe('Fruit Salad',
      //'Fruit salad',
      //'https://carlsbadcravings.com/wp-content/uploads/2018/07/fruit-salad-11-600x900.jpg',
      //[ new Ingredient('Banana', 1),
      //new Ingredient('Apple', 2)]),
    //new Recipe('Hakka Noodles',
      //'Hakka Noodles',
      //'https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg',
      //[new Ingredient('Capsicum', 1),
      //new Ingredient('Raddish', 1),
      //new Ingredient('Carrot', 1)])
  //];
  private recipes : Recipe[] = [];
   constructor(private slService: shoppingListsService) {

   }
   setRecipes(recipes: Recipe[]){
     this.recipes = recipes;
     this.recipesChanged.next(this.recipes.slice());
   }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
     return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientsToList(ingredients);
  }
  addRecipe(recipe: Recipe) {
     this.recipes.push(recipe);
     this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
     this.recipes[index] = newRecipe;
     this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
     this.recipes.splice(index, 1);
     this.recipesChanged.next(this.recipes.slice());
  }

}
