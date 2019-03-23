import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { throwToolbarMixedModesError } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth:AuthService) {
    this.auth = auth;
   }

  ngOnInit() {
  }

}
