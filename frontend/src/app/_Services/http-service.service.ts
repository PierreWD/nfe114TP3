import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) {
    
  }  

  public login(login:string,password:string): Observable<any>{
    const formData = new FormData();
    formData.append('login', login);
    formData.append('pass', password);
    return this.http.post<any> ("https://projet-woll-pierre.onrender.com/api/login",formData);
  }

  async getData() {
    try {
      const data = await this.http.get('../assets/mock/bouchonCatalogue.json').toPromise();
      return data;
    } catch (error) {
      console.log(error);
      return "";
    }
  }

  async getClient() {
    try {
      const data = await this.http.get('../assets/mock/clientsList.json').toPromise();
      return data;
    } catch (error) {
      console.log(error);
      return "";
    }
  }

}
