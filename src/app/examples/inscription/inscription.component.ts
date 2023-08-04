import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';





@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;
  router: any;

  constructor() { }

  ngOnInit() {
  }

}
