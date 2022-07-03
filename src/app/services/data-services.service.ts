import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private http:HttpClient) { }
  url='https://api.ryets.com/dev/inspections/2373DD9C-BCEF-4787-BADD-E1C21C2B95C3';
  getData():Observable<any>{
return this.http.get(this.url)

  }
}
