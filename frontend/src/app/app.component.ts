import { Component } from '@angular/core';
import {HttpServiceService} from './http-service.service'
import { Catalogue } from './_Classe/Catalogue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpService: HttpServiceService) { }
  title = 'TP3';

  ngOnInit() {

  }

}
