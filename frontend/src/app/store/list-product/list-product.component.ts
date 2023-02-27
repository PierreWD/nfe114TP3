import { Component, Input, OnInit  } from '@angular/core';
import {HttpServiceService} from '../../_Services/http-service.service'
import { Catalogue } from '../../_Classe/Catalogue';
import { Store } from '@ngxs/store';
import { AddArticle } from '../../_Classe/Catalogue.action';
import { LogServiceService } from '../../_Services/log-service.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {  
  catalogue:Catalogue[]=[];
  catalogueDisplayed:Catalogue[]=[];
  constructor(private httpService: HttpServiceService,private store: Store,public logServiceService:LogServiceService) {}
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

  addPanier(art:Catalogue){
    console.log(art)
    var present=false;
    this.store.select(state => state.panier.panier).subscribe(arti =>{
      var panier=arti as Catalogue[];
      panier.forEach(a => {
        if(a.title==art.title){
          present=true;
        }
      });      
    });
    if(present){
      alert("article déjà présent dans le panier");
    }else{
      this.store.dispatch(new AddArticle(art));
      this.logServiceService.addArticle();
      alert("article ajouté au panier");
    }
  }
}
