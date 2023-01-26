import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, fromEvent, interval, Subscription, Observable, of } from 'rxjs';
import { ObserveOnOperator, ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';
import { filter, map, pluck, toArray } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicesobservablesService {

  ofObs:any;
  intervalCustomObservable = 2000
  subscriptionCustomObservable = Subscription

  userData:any;

  constructor(private httpc: HttpClient) { }

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

  customObservables(){
    return new Observable((observer) => {
        observer.next("DATA EMIT 1 from Manual Observable")
    })
  }


  customSetTimeoutObservables(){
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next("DATA EMIT 1 from Interval")
      }, 1000);

      setTimeout(() => {
        observer.next("DATA EMIT 2 from SetTimeOut")
      }, 2000);

      setTimeout(() => {
        observer.next("DATA EMIT 3 from SetTimeOut")
      }, 3000);


      setTimeout(() => {
        // observer.error('Something went wrong')
        observer.next("DATA EMIT 4 from SetTimeOut")
      }, 4000);


      setTimeout(() => {
        observer.complete()
        observer.next("DATA EMIT 5 from SetTimeOut")
      }, 5000);
    })
  }

  customIntervalObservable(intervalDuration:any){
    return new Observable( (observer:any) => {
      let data = interval(intervalDuration)
      data.subscribe(res => {
        return observer.next("PRINTED after every 1 Sec of Interval")
      })

    })
  }



  getUserDataUsingMap(){
    return new Observable( (observer: any) => {
      this.httpc.get('https://jsonplaceholder.typicode.com/users').subscribe(resData => {
        // Here we get res in JSON object but to demostrate map operator we converted that into res String
        // So that inside Map Operator we can again convert that string response into JSON object
        observer.next(JSON.stringify(resData))
      })
    }).pipe(
      map((res:any) =>{ 
        console.log("BEFORE MODIFYED API DATA using MAP operator converted STRING to JSON OBJECT ===>", res)
        return JSON.parse(res)
      })
    )
  }


  getUserDataFromMap(){
    return new Observable((observer:any) => {
      this.httpc.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any) => {
        // OPERATORS are like engine take input process it and provide outpur as observable
        let data = from(res) 
        // here data is now observable so to add another OPERATOR we use pipe 
        data.pipe(
          map((res:any) => {
            res.name = "Mr. " + res.name
            // console.log("Getting array OF obj in STREAM using FROM & MAP ===>", res)
            return res.name
          }),
          toArray()
          // Here we have subscribe to from OPERATOR Observable to get Array of objest into single stream which is modifies in map
          ).subscribe(res => {
            // Using below code we pass that single stream to component where the parent Observable is subscribe
            observer.next(res)
        })
      })
    })
  }




  getUserDataPluck(){
    return new Observable((observer: any) => {
      this.httpc.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any) => {
        from(res).pipe(
          // map((res:any) => {
          //   return res.name
          // }),
          // SHORTHAND of MAP OPERATOR but her we can not modify the data 
          pluck('name'),
          toArray()
        ).subscribe((res:any) => {
          observer.next(res)
        })
      })
    })
  }



  getPostsDataFilter(userId:any){
    return new Observable((observer:any) => {
      this.httpc.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=30').subscribe((res:any) => {
        console.log("BEFORE FILTERED POST DATA ===>", res)
        from(res).pipe(
          filter((res:any) => res.userId === userId)
          , toArray()
        ).subscribe((filteredRes:any) => {
          observer.next(filteredRes)
        })

      })
    })
  }



}
