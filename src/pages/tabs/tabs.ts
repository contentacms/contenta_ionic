import { Component } from '@angular/core';

import { FeaturesPage } from '../features/features';
import { MagazinePage } from '../magazine/magazine';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeaturesPage;
  tab3Root = MagazinePage;

  constructor() {

  }
}
