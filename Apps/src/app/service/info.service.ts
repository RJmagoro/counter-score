import { Injectable } from '@angular/core';
import { HttpModule,Http} from '@angular/http';
import  {map} from 'rxjs/operator'


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  

  constructor( private http: Http) {}

   
   getUser(){
    return this.http.get('https://conduit.productionready.io/api/profiles/eric').pipe(map(res => {return res.json ()
    
   }))
}
}
