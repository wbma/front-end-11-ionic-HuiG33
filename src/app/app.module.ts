import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MediaProvider } from '../providers/media/media';
import {ProfilePage} from '../pages/profile/profile';
import {RegistrationPage} from '../pages/registration/registration';
import {EventsPage} from '../pages/events/events';
import {UploadPage} from '../pages/upload/upload';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    ProfilePage,
    RegistrationPage,
    UploadPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    ProfilePage,
    RegistrationPage,
    UploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediaProvider
  ]
})
export class AppModule {}
