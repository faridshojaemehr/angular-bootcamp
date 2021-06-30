import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : recipe[] = [
    new recipe('A Test Recipe' , 'THis is simply a test' , '.././assets/123.jpg'),
    new recipe('A Test Recipe' , 'THis is simply a test' , '.././assets/11.jpg')
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
