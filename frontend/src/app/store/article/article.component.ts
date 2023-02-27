import { Component, OnInit } from '@angular/core';
import { Catalogue } from '../../_Classe/Catalogue';
import {ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../_Services/http-service.service';
import { Store } from '@ngxs/store';
import { AddArticle } from 'src/app/_Classe/Catalogue.action';
import { LogServiceService } from '../../_Services/log-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  catalogue:Catalogue=new Catalogue("",0);

  constructor(private route: ActivatedRoute,private httpService: HttpServiceService,private store: Store,public logServiceService:LogServiceService) {
    this.catalogue.title= this.route.snapshot.params.titre;
    this.httpService.getData().then((data:any)=>{
      data.map((d:any)=>{
        if(d.title==this.catalogue.title){
          this.catalogue.price=d.price;
        }
      })      
    })
  }

  ngOnInit(): void {
  }

  addPanier(){
    console.log(this.catalogue)
    var present=false;
    this.store.select(state => state.panier.panier).subscribe(arti =>{
      var panier=arti as Catalogue[];
      panier.forEach(a => {
        if(a.title==this.catalogue.title){
          present=true;
        }
      });      
    });
    if(present){
      alert("article déjà présent dans le panier");
    }else{
      this.store.dispatch(new AddArticle(this.catalogue));
      this.logServiceService.addArticle();
      alert("article ajouté au panier");
    }
  }

}
