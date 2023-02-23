import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Catalogue } from 'src/app/_Classe/Catalogue';
import { DeleteArticle } from 'src/app/_Classe/Catalogue.action';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier:Catalogue[]=[];

  constructor(private store: Store) {}  

  ngOnInit(): void {
    this.store.select(state => state.panier.panier).subscribe(art=>{
      this.panier=art as Catalogue[];
    });
  }

  deleteArt(art:Catalogue){
    //DeleteArticle
    this.store.dispatch(new DeleteArticle(art));
    alert("article supprimé du panier")
  }
}
