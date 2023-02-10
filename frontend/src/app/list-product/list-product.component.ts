import { Component, Input, OnInit  } from '@angular/core';
import {HttpServiceService} from '../_Services/http-service.service'
import { Catalogue } from '../_Classe/Catalogue';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  //@Input() titreFilter:string;
  //@Input() priceFilter:Number | undefined;
  
  catalogue:Catalogue[]=[];
  catalogueDisplayed:Catalogue[]=[];
  constructor(private httpService: HttpServiceService) {    
  }
  title = 'TP3';

  ngOnInit() {
    this.httpService.getData().then((data:any)=>{
      data.map((d:any)=>{
        this.catalogue.push(new Catalogue(d.title,d.price))
      })      
    }).then(()=>{
      this.catalogueDisplayed=this.catalogue;
    })
  }

  filter(valuePrice:number | undefined,valueTitre:string){
    this.catalogueDisplayed=[];
    this.catalogue.map((Catalogue)=>{
      if(valuePrice!= undefined && valuePrice!= null && Catalogue.price>valuePrice){
        
      }else{
        if(valueTitre=="" || Catalogue.title.includes(valueTitre)){
          this.catalogueDisplayed.push(Catalogue);
        }else{

        }        
      }
    })
  }
}
