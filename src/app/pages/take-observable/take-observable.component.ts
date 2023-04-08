import { Component, OnInit } from '@angular/core';
import { ServicesobservablesService } from 'src/app/services/servicesobservables.service';

@Component({
  selector: 'app-take-observable',
  templateUrl: './take-observable.component.html',
  styles: [
  ]
})
export class TakeObservableComponent implements OnInit {
  userDataTake:any;
  getUserDataTakeLast:any;

  constructor(private service: ServicesobservablesService) { }

  ngOnInit(): void {
    this.getUserTake()
    this.getUserTakeLast()
    this.getUserTakeUntil()
  }


  getUserTake(){
    this.service.getUserDataTake().subscribe((res:any) => {
      console.log("TAKE RES =>", res)
      this.userDataTake = res
    })
  }


  getUserTakeLast(){
    this.service.getuserDataTakeLast().subscribe(res=> {
      console.log("TAKELAST RES =>", res)

      this.getUserDataTakeLast = res
    })
  }


  getUserTakeUntil(){
    this.service.getUserDataTakeUntil().subscribe((res:any) => {
      console.log("TAKEUNTIL RES =>", res)
    })
  }

}
