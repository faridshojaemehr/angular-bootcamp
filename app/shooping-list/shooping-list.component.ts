import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  ingredients: ingredient[] = [
    new ingredient('Apple' , 5),
    new ingredient('Tomatoes' , 10),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
