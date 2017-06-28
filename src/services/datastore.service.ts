import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';
import { config } from '../app/app.config';
import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Category } from '../models/category.model';
import { File } from '../models/file.model';
import { Tag } from '../models/tag.model';
import { User } from '../models/user.model';
import { Image } from '../models/image.model';

@Injectable()
@JsonApiDatastoreConfig({
  baseUrl: config.baseUrl,
  models: {
    recipes: Recipe,
    categories: Category,
    files: File,
    images: Image,
    tags: Tag,
    users: User,
  }
})
export class Datastore extends JsonApiDatastore {}
