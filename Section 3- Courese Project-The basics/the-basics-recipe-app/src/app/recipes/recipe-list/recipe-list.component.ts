import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://hips.hearstapps.com/hmg-prod/images/stuffed-peppers-index-649c91e2e2259.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*'),
    new Recipe('A test recipe', 'this is a test', 'https://hips.hearstapps.com/hmg-prod/images/stuffed-peppers-index-649c91e2e2259.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*'),
      new Recipe('A test recipe', 'this is a test', 'https://hips.hearstapps.com/hmg-prod/images/stuffed-peppers-index-649c91e2e2259.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*'),
]
  constructor() { }

  ngOnInit(): void {
  }

}
