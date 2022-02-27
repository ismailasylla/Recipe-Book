import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient [] = [
    {
      name: 'Orange',
      amount: 64
    },
    {
      name: 'Apple',
      amount: 53
    },
    {
      name: 'Tomato',
      amount: 36
    },
    {
      name: 'Banana',
      amount: 10
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
