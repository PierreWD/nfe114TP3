import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moteur',
  templateUrl: './moteur.component.html',
  styleUrls: ['./moteur.component.css']
})
export class MoteurComponent implements OnInit {

  constructor() { }
  titreFilter:String="";
  priceFilter:number | undefined;

  ngOnInit(): void {
  }

  submit(){

  }

}
