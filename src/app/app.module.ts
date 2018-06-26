import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { VipPage } from '../pages/vip/vip';
import { TabsPage } from '../pages/tabs/tabs';
import { PeoplePage } from '../pages/people/people';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    VipPage,
    TabsPage,
    PeoplePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     ContactPage,
     VipPage,
     TabsPage,
     PeoplePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
