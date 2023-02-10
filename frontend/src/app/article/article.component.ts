import { Component, OnInit } from '@angular/core';
import { Catalogue } from '../_Classe/Catalogue';
import {ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../_Services/http-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  catalogue:Catalogue=new Catalogue("",0);

  constructor(private route: ActivatedRoute,private httpService: HttpServiceService) {
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

}
