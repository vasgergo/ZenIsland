import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService} from '@angular/fire/analytics';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {AngularFireModule} from "@angular/fire/compat";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      "projectId": "vasgergo-webkert",
      "appId": "1:924022631597:web:0e09a16f5544e0edcdaa24",
      "storageBucket": "vasgergo-webkert.appspot.com",
      "apiKey": "AIzaSyAdeSdRm0crRW2JfUEo3BI7JAA2lzlSysE",
      "authDomain": "vasgergo-webkert.firebaseapp.com",
      "messagingSenderId": "924022631597",
      "measurementId": "G-4WS8KV1PG7"
    }),
    provideFirebaseApp(() => initializeApp({"projectId":"vasgergo-webkert","appId":"1:924022631597:web:0e09a16f5544e0edcdaa24","storageBucket":"vasgergo-webkert.appspot.com","apiKey":"AIzaSyAdeSdRm0crRW2JfUEo3BI7JAA2lzlSysE","authDomain":"vasgergo-webkert.firebaseapp.com","messagingSenderId":"924022631597","measurementId":"G-4WS8KV1PG7"})),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
