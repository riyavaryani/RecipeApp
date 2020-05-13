import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class shoppingListsService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Potato', 5),
    new Ingredient('Tomato', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredientsToList(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
      // this.addIngredients(ingredient);
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());

    }

  }

