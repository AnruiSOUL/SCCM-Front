/**
 * Created by AnruiSOUL on 6/21/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CharacterSheetService{
    public data: any;
    private characterSheetURL: string = "http://127.0.0.1:8080/charactersheet/getcharacterlist";

    constructor(private http: Http){}

    getCharacterSheetList(){
        return this.http.get(this.characterSheetURL);
    }
}