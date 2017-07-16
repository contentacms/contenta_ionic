import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FeaturesPage } from '../pages/features/features';
import { MagazinePage } from '../pages/magazine/magazine';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RecipePage } from '../pages/recipe/recipe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContentaServiceModule } from 'contenta-angular-service';

@NgModule({
  declarations: [
    MyApp,
    MagazinePage,
    FeaturesPage,
    RecipePage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ContentaServiceModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MagazinePage,
    FeaturesPage,
    HomePage,
    RecipePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
