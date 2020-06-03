import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {shoppingListsService} from '../shopping-list/shopping-list.service';
import {ignoreDiagnostics} from '@angular/compiler-cli/src/ngtsc/typecheck/src/diagnostics';
@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
    new Recipe('Fruit Salad',
      'Fruit salad',
      'https://carlsbadcravings.com/wp-content/uploads/2018/07/fruit-salad-11-600x900.jpg',
      [ new Ingredient('Banana', 1),
      new Ingredient('Apple', 2)]),
    new Recipe('Hakka Noodles',
      'Hakka Noodles',
      'https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg',
      [new Ingredient('Capsicum', 1),
      new Ingredient('Raddish', 1),
      new Ingredient('Carrot', 1)])
  ];
   constructor(private slService: shoppingListsService) {

   }

  getRecipes(id: number) {
    return this.recipes.slice();
  }
  getRecipe(index: number){
     return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientsToList(ingredients);
  }

}
