import { Component } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { NavController, ViewController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private nav : NavController, public platform: Platform, public navCtrl: NavController, private viewCtrl: ViewController, public menuCtrl: MenuController) {

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
