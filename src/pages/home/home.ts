import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import _ from 'lodash';

import { Datastore } from '../../services/datastore.service';
import { Recipe } from '../../models/recipe.model';
import { RecipePage } from '../recipe/recipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Datastore]
})
export class HomePage {

  public recipes: Recipe[] = [];

  private offset: number = 1;

  private limit: number = 20;

  private allRecipesLoaded: boolean = false;

  constructor(private navCtrl: NavController, private datastore: Datastore, private alertCtrl: AlertController) {}

  loadRecipes() {
    let query = this.datastore.query(Recipe, {
      page: { limit: this.limit, offset: this.offset },
      include: 'image,category'
    });
    query.subscribe(
      (recipes: Recipe[]) => {
        if (_.difference(recipes, this.recipes).length === 0) {
          this.allRecipesLoaded = true;
        }
        else {
          this.recipes = this.recipes.concat(recipes);
        }
        this.offset += this.limit;
      },
      (error) => {
        let alert = this.alertCtrl.create({
          message: 'Error when fetching recipes: ' + error,
        });
        alert.present();
      }
    );
    return query;
  }

  ngOnInit() {
    this.loadRecipes();
  }

  clickRecipe(recipe) {
    this.navCtrl.push(RecipePage, { recipe: recipe });
  }

  doInfinite(infiniteScroll) {
    if (!this.allRecipesLoaded) {
      this.loadRecipes().subscribe(() => infiniteScroll.complete());
    }
  }

}
