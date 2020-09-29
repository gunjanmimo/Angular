import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("mango", 10),
    new Ingredient("Apple", 45),
    new Ingredient("mango", 10),
    new Ingredient("Apple", 45),
    new Ingredient("mango", 10),
    new Ingredient("Apple", 45),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
