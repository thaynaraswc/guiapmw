import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CategoriasPage } from '../pages/categorias/categorias';
import { Intro } from '../pages/intro/intro';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

export const firebaseConfig = {
apiKey: "AIzaSyAzojDkhtx84Yu9s53kvKLOYq3hw8MUgb4",
  authDomain: "guiapalmas-7965b.firebaseapp.com",
  databaseURL: "https://guiapalmas-7965b.firebaseio.com",
  storageBucket: "guiapalmas-7965b.appspot.com",
  messagingSenderId: "1078648058779"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Intro,
    CategoriasPage,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: HomePage, name: 'Home', segment: 'home' },
      ]
    }),
    IonicStorageModule.forRoot(),
  ],



  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Intro,
    CategoriasPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
