import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class shoppingListsService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Potato', 5),
    new Ingredient('Tomato', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredientsToList(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
      // this.addIngredients(ingredient);
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());

    }

  }

