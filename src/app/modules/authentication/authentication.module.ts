import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from 'src/app/components/login/login.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { CoreModule } from 'src/app/core/core.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';

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
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ]
})
export class AuthenticationModule { }
