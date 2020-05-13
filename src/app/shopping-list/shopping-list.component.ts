import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {shoppingListsService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[];
  constructor(private slService: shoppingListsService) { }

  ngOnInit() {
  this.ingredients = this.slService.getIngredients();
  this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
    this.ingredients = ingredients;
    });
  }


}
