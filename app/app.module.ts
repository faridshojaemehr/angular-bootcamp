import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDeatilComponent } from './recipes/recipe-deatil/recipe-deatil.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { ShoopingEditComponent } from './shooping-list/shooping-edit/shooping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDeatilComponent,
    RecipeItemComponent,
    ShoopingListComponent,
    ShoopingEditComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
