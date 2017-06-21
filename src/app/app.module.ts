import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage }from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { AbilityMethodPage } from '../pages/ability-method/ability-method';
import { ManualScorePage } from '../pages/manual-score/manual-score';
import { CharacterSheetsPage} from '../pages/charactersheets/charactersheets';
import { CharacterSheetService } from '../services/character-sheet-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    LoginPage,
    SignUpPage,
    AbilityMethodPage,
    ManualScorePage,
    CharacterSheetsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    AbilityMethodPage,
    ManualScorePage,
    CharacterSheetsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, CharacterSheetService]
})
export class AppModule {}
