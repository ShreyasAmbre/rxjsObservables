import { Injectable } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesobservablesService {

  ofObs:any;

  constructor() { }

  print(val:any, containerId:any){
    let el = document.createElement('li')
    el.innerText = val
    document.getElementById(containerId)?.appendChild(el)
  }


  fromEventObservables(element:any, event:any):Observable<any>{
    return fromEvent(element, event)
  }

  ofObservables(data:any): Observable<any>{
    return of(data)
  } 
  
  fromObservables(data:any):Observable<any>{
    return from(data)
  }

  intervalObservables(intervalSeconds:any): Observable<any>{
    return interval(intervalSeconds)
  }

}
