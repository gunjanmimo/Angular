import { RepcipeListComponent } from './recipes/repcipe-list/repcipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';

import { RepcipeDetailsComponent } from './recipes/repcipe-details/repcipe-details.component';
import { RecipeItemComponent } from './recipes/repcipe-list/recipe-item/recipe-item.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RepcipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    RepcipeListComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
