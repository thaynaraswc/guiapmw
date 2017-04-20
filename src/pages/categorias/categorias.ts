import { Component } from '@angular/core';
import { NavController,  AlertController, ActionSheetController } from 'ionic-angular';
import * as firebase from 'firebase';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

/**
 * Generated class for the Categorias page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
    atualizarCard: any;
    removerCard: any;

  urlImg = 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj87KbV0O7SAhUEiZAKHaPBDGkQjRwIBw&url=https%3A%2F%2Fgithub.com%2Fangular%2Fangularfire2%2Fissues%2F584&psig=AFQjCNFqY5dZd93aLmkdAV52tyl0_WQ7Xw&ust=1490427342983128';

  rota1 ='local/local.html'

  cards: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire, public actionSheetCtrl: ActionSheetController) {


     console.log(af.database.list('/cards'));
  this.cards = af.database.list('/cards');
  }

mostrarOpcoes(cardsId, cardsTitulo, cardsDescricao, cardsImagem){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'O que você quer fazer?',
      buttons: [
        {
          text: 'Deletar Card',
          role: 'destructive',
          handler: () => {
            this.removerCard(cardsId);
          }
        },{
          text: 'Atualizar Card',
          handler: () => {
            this.atualizarCard(cardsId, cardsTitulo, cardsDescricao, cardsImagem);
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar clicado');
          }
        }
      ]
    });
    actionSheet.present();
  }

removerCards(cardsId: string){
    this.cards.remove(cardsId);
  }

atualizarCards(cardsId: string, cardsTitulo: string, cardsDescricao: string, cardsImagem: string){
    let prompt = this.alertCtrl.create({
    title: 'Nome da categoria',
    message: "Atualizar Card",
    inputs: [
      {
        name: 'tituloVar',
        placeholder: 'Título',
        value: cardsTitulo
      },

      {
        name: 'ImagemVar',
        placeholder: 'Imagem',
        value: cardsImagem
      },


      {
        name: 'DescricaoVar',
        placeholder: 'Descrição',
        value: cardsDescricao
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancelar clicado');
        }
      },
      {
        text: 'Salvar',
        handler: data => {
          this.cards.update(cardsId, {
            titulo: data.tituloVar,
            imagem: data.ImagemVar,
            descricao: data.DescricaoVar
          });
        }
      }
    ]
  });
  prompt.present();
  }

 addCategoria(){
        let prompt = this.alertCtrl.create({
        title: 'Nome da categoria',
        message: "Entre com um nome para esta nova categoria ser adicionada",
        inputs: [
          {
            name: 'titulo',
            placeholder: 'Título'
          },


          {
            name: 'image',
            type: 'file',
            placeholder: 'Imagem'
          },


          {
            name: 'descricao',
            placeholder: 'Descricao'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Cancelar Clicado');
            }
          },
          {
            text: 'Salvar',
            handler: data => {
              this.cards.push({
                titulo: data.titulo,
                imagem: data.image,
                descricao: data.descricao
              });
            }
          }
        ]
      });
      prompt.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

}
