import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  id: number;

  recipes: Recipe[];
  constructor(private recipeService: RecipesService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes(this.id);
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
