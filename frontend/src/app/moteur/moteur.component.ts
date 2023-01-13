import { Component, OnInit,ViewChild  } from '@angular/core';
import {ListProductComponent} from '../list-product/list-product.component'
import { Catalogue } from '../_Classe/Catalogue';

@Component({
  selector: 'app-moteur',
  templateUrl: './moteur.component.html',
  styleUrls: ['./moteur.component.css']
})
export class MoteurComponent implements OnInit {

  @ViewChild(ListProductComponent) ListProduct: ListProductComponent | undefined;
  constructor() { }
  titreFilter:string="";
  priceFilter:number | undefined;

  ngOnInit(): void {
  }

  onInputChangeTitre(value:any){
    //console.log(value);
    this.titreFilter=value;
    this.ListProduct?.filter(this.priceFilter,value);
  }

  onInputChangePrice(value:any){
    //console.log(value);
    this.priceFilter=value;
    this.ListProduct?.filter(value,this.titreFilter);
  }

}
