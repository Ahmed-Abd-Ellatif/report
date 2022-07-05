import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private http:HttpClient) { }
  url='https://api.ryets.com/dev/inspections/0715E614-7A39-48D5-A6DF-816DC0A6B921';
  mapUrl=`https://api.mapbox.com/directions/v5/mapbox/`

  getData():Observable<any>{
    return this.http.get(this.url)
  }

  getCordanations(data:any):Observable<any>{
    return this.http.get(this.mapUrl,data)

  }

}
