import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
  url:string = "https://jsonplaceholder.typicode.com/users?_limit=5"
  userData:any = [];
  asynMsg:any = "Get Asyn Message"

  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }



  getData(){
    console.log("BEFORE PROMISE RESOLVED ==>", this.userData)
    this.getAsynData().then(data => {
      this.userData = data
      console.log("PROMISE RESOLVED ==>", this.userData)

    }).catch(error =>{
      console.log("PROMISE REJECTED ==>", error)
    })
  }

  // Below data will come after some time till then getData() function will wait. 
  getAsynData(){
    return new Promise( (resolve, reject) =>{
      setTimeout(() => {
        this.http.get(this.url).subscribe(res =>{
          resolve(res)
        }, error => {
          reject(error)
        })
      }, 2000);
     
      
    })
  }

  // Async function always return promise (resolve or reject)
  // await is only allow to used inside async function
  // await function will wait till taht function is called then only below code written in asyn function will excecute 
  async asynFunction(){

    // here function will not print last console it will wait to get execute deleteWatchlistWebSocket() 
    // function then it will run below code
    this.asynMsg = await this.deleteWatchlistWebSocket()
    
    setTimeout(() => {
      this.asynMsg = "GETTING WATCHLIST BROADCAST" 
    }, 2000);
  }

  deleteWatchlistWebSocket(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log("DELETE WATCHLIST WS")
        return resolve("DELETE WATCHLIST BROADCAST")
      }, 3000);
    })
    
  }

}
