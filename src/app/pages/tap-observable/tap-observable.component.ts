import { Component, OnInit } from '@angular/core';
import { ServicesobservablesService } from 'src/app/services/servicesobservables.service';

@Component({
  selector: 'app-tap-observable',
  templateUrl: './tap-observable.component.html',
  styles: [
  ]
})
export class TapObservableComponent implements OnInit {
  userDataUsingTap:any;

  constructor(private service: ServicesobservablesService) { }

  ngOnInit(): void {
    this.getUserData()
  }

  // Ex : 01
  getUserData(){
    this.service.getUserDataTap().subscribe((res:any) => {
      console.log("TAP OPERATOR ===> ", res)
      this.userDataUsingTap = res
      this.getIntervalValues()
    })
  }


  // Ex: 02

  getIntervalValues(){
    this.service.getIntervalValueTap().subscribe(res => {
      console.log("INTERVAL from comp =>", res)
      this.service.print(res, 'elContainer')
    })
  }
}
