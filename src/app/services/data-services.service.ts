import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private http:HttpClient) { }
  url='https://api.ryets.com/dev/inspections/22AB2502-949B-4A8F-90AC-DBB8C963F83D'; //Id
  getData():Observable<any>{
return this.http.get(this.url)

  }
}
