import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(private http: HttpClient) { }

  async getData() {
    try {
      const data = await this.http.get('../assets/mock/bouchonCatalogue.json').toPromise();
      return data;
    } catch (error) {
      console.log(error);
      return "";
    }
  }

}
