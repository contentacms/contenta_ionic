import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { Datastore } from '../../services/datastore.service';
import { Recipe } from '../../models/recipe.model';
import { RecipePage } from '../recipe/recipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Datastore]
})
export class HomePage {

  public recipes: Recipe[];

  constructor(private navCtrl: NavController, private datastore: Datastore, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {}

  ngOnInit() {
    let loading = this.loadingCtrl.create({
      content: 'Fetching recipes'
    });
    loading.present();
    this.datastore.query(Recipe, {
      // @todo Add infinite scroll to page through results.
      page: { limit: 10, offset: 1 },
      include: 'image,category'
    }).subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        loading.dismiss();
      },
      (error) => {
        let alert = this.alertCtrl.create({
          message: 'Error when fetching recipes: ' + error,
        });
        loading.dismiss();
        alert.present();
      }
    );
  }

  clickRecipe(recipe) {
    this.navCtrl.push(RecipePage, { recipe: recipe });
  }

}
