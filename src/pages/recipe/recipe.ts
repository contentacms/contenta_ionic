import { Component } from '@angular/core';
import {  NavParams } from 'ionic-angular';

import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})
export class RecipePage {

  public recipe: Recipe;

  constructor(public navParams: NavParams) {
    this.recipe = this.navParams.get('recipe');
  }

}
