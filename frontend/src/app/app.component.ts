import { Component } from '@angular/core';
import {HttpServiceService} from './_Services/http-service.service'
import { LogServiceService } from './_Services/log-service.service';
import { Client } from './_Classe/Client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  client:Client;
  constructor(private httpService: HttpServiceService,public logServiceService:LogServiceService) { 
    this.client=this.logServiceService.getCurrentClient();
  }

  ngOnInit() {

  }

}
