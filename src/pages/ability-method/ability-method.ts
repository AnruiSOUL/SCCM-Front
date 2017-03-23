import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManualScorePage } from '../manual-score/manual-score';
/*
  Generated class for the AbilityMethod page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ability-method',
  templateUrl: 'ability-method.html'
})
export class AbilityMethodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbilityMethodPage');
  }
  goToManualScore() {
    this.navCtrl.push(ManualScorePage);   
  }
}
