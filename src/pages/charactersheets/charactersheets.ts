///<reference path="../../services/character-sheet-service.ts"/>
import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CharacterSheetService} from "../../services/character-sheet-service";

@Component({
    selector: 'page-charactersheets',
    templateUrl: 'charactersheets.html'
})

export class CharacterSheetsPage implements OnInit {
    ngOnInit(): void {
        this.listCharacterSheets();
    }

    public data: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public characterSheetService: CharacterSheetService) {}

    ionViewDidLoad(){
        console.log('ionViewDidLoad CharacterSheetsPage');
    }

    listCharacterSheets(){
        this.characterSheetService.getCharacterSheetList().subscribe(response => {
            this.data = response.json();
        });;
    }
}
