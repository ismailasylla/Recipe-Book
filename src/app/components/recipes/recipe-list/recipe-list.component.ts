import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes?: Recipe [] = [
    {
      name:'First recipe',
      description:'This is our first recipe',
      imagePath:'https://icon-library.com/images/recipe-icon-png/recipe-icon-png-8.jpg'
    }

  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
