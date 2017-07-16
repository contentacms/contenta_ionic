import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import _ from 'lodash';

import { Recipe } from 'contenta-angular-service';
import { ContentaDatastore } from 'contenta-angular-service';
import { BASE_URL } from 'contenta-angular-service';

import { RecipePage } from '../recipe/recipe';
import { config } from '../../app/app.config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ContentaDatastore,
    { provide: BASE_URL, useValue: config.baseUrl }
  ]
})
export class HomePage {

  public recipes: Recipe[] = [];

  private offset: number = 1;

  private limit: number = 20;

  private allRecipesLoaded: boolean = false;

  constructor(private navCtrl: NavController, private datastore: ContentaDatastore, private alertCtrl: AlertController) {}

  loadRecipes() {
    let query = this.datastore.query(Recipe, {
      page: { limit: this.limit, offset: this.offset },
      // @todo Remove image.field_image when JSON API bug is fixed.
      include: 'image,category,tags,image.field_image,image.imageFile'
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
