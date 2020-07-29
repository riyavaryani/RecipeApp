import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipesService} from '../recipes/recipes.service';
import {Recipe} from '../recipes/recipe.model';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
constructor(private http: HttpClient, private recipeService: RecipesService) {}
storeRecipe() {
  const recipe = this.recipeService.getRecipes();
  this.http.put('https://recipee-app.firebaseio.com/recipes.json', recipe)
    .subscribe(response => {
      console.log(response);
    });
}
fetchRecipes() {
   return this.http.get<Recipe[]>('https://recipee-app.firebaseio.com/recipes.json')
    .pipe(map(recipes => {
      return recipes.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      });
    }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
      );

}
}
