import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model"
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("mango shake", "mango shake is very good", "https://i.pinimg.com/736x/84/60/45/846045f99d8231e7bbc7f34139235429.jpg"),
    new Recipe("mango shake", "mango shake is very good", "https://i.pinimg.com/736x/84/60/45/846045f99d8231e7bbc7f34139235429.jpg"),
    new Recipe("mango shake", "mango shake is very good", "https://i.pinimg.com/736x/84/60/45/846045f99d8231e7bbc7f34139235429.jpg"),

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
