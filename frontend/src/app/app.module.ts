import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { MoteurComponent } from './moteur/moteur.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { LogServiceService } from './_Services/log-service.service';

const appRoutes: Routes = [
  { path: 'moteur', component: MoteurComponent },
  { path: 'article/:titre', component: ArticleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'client',loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }
];

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    MoteurComponent,
    ArticleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

