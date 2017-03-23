import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { AbilityMethodPage } from '../ability-method/ability-method';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  goToAbilityMethod(){
    this.navCtrl.push(AbilityMethodPage);
  }
}
