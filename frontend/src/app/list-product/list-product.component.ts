import { Component, Input, OnInit  } from '@angular/core';
import {HttpServiceService} from '../http-service.service'
import { Catalogue } from '../_Classe/Catalogue';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  @Input() titreFilter:String;
  @Input() priceFilter:Number | undefined;
  
  catalogue:Catalogue[]=[];
  catalogueDisplayed:Catalogue[]=[];
  constructor(private httpService: HttpServiceService) {
    this.titreFilter="";    
  }
  title = 'TP3';

  ngOnInit() {
    this.httpService.getData().then((data:any)=>{
      data.map((d:any)=>{
        this.catalogue.push(new Catalogue(d.title,d.price))
      })      
    })
  }

}
