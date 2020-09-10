import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RepcipeListComponent } from './recipe/repcipe-list/repcipe-list.component';
import { RepcipeDetailsComponent } from './recipes/repcipe-details/repcipe-details.component';
import { RecipeItemComponent } from './recipes/repcipe-list/recipe-item/recipe-item.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RepcipeListComponent,
    RepcipeDetailsComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
