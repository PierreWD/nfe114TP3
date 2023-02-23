import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from '../home/home.component';
import { MoteurComponent } from './moteur/moteur.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListProductComponent } from './list-product/list-product.component';

const childRoutes: Routes = [
  { path: 'moteur', component: MoteurComponent },
  { path: 'home', component: HomeComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'article/:titre', component: ArticleComponent },
];

@NgModule({
  declarations: [
    PanierComponent,
    ArticleComponent,
    MoteurComponent,
    HomeComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(childRoutes),
  ]
})
export class StoreModule { }
