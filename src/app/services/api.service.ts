import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serviceUrl = 'http://localhost:40000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public localTest(){
    try {
      let robot = {
        "name":"Eva",
        "pilot":"Wall-e"
      }
      return robot;
      
    } catch (ex) {
      console.log(ex);
      return ex;
    }
  }

  public testRobot(){
    try {
      return this.http.get(this.serviceUrl + '/api/hello');
    } catch (ex) {
      console.log(ex);
      return ex;
    }
  }
  public testName(){
    try {
      return this.http.get(this.serviceUrl + '/api/name');
    } catch (ex) {
      console.log(ex);
      return ex;
    }
  }
}
