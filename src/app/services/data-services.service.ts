import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private http:HttpClient) { }
  url='https://api.ryets.com/dev/inspections/68D141AB-47BD-4384-9013-03080143C4FD'; //Id
  getData():Observable<any>{
return this.http.get(this.url)

  }
}
