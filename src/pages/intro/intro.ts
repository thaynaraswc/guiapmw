import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Intro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class Intro {

slides = [
    {
      title: "Bem vindo ao Guia PMW",
      description: "Os <b>melhores destinos</b> para desfrutar da capital do Tocantins você encontra aqui!",
      image: "assets/img/p1.jpg",
    },
    {
      title: "O você vai encontrar aqui?",
      description: "<b>ABSOLUTAMENTE TUDO!</b> Hotéis, bares, restaurantes, pontos turísticos, hospitais, fármácias... Os melhores estabelecimentos estão aqui!",
      image: "assets/img/p2.jpg",
    },
    {
      title: "Não sabe o que procurar?",
      description: "Nós ajudamos você</b> com a programação da semana, com todos os eventos em destaque!",
      image: "assets/img/p3.jpg",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Pular() {
   // go to the MyPage component
   this.navCtrl.push('Home');

   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Intro');
  }

}
