import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: 'AIzaSyD-NiaomCAZOmuYnUAs0z07oBKFkbtu9qI',
  authDomain: 'questionsapp-d661a.firebaseapp.com',
  databaseURL: 'https://questionsapp-d661a.firebaseio.com',
  projectId: 'questionsapp-d661a',
  storageBucket: '',
  messagingSenderId: '988542168634'
};

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
