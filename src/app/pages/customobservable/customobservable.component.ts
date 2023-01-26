import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ServicesobservablesService } from 'src/app/services/servicesobservables.service';


@Component({
  selector: 'app-customobservable',
  templateUrl: './customobservable.component.html',
  styleUrls: ['./customobservable.component.css']
})
export class CustomobservableComponent implements OnInit, OnDestroy {
  observablesFailed:boolean | undefined;
  customeIntervalObssubscribtion: Subscription | undefined ;
  intervalDuration = interval(2000)

  constructor(private service: ServicesobservablesService) { }
  

  ngOnInit(): void {
    this.manualObservables()
    this.IntervalObservable()
  }

  ngOnDestroy(): void {
    this.customeIntervalObssubscribtion?.unsubscribe()
  }


  manualObservables(){
    this.service.customObservables().subscribe(res => {
      console.log("CUSTOM OBSERVABLES RES ==>", res)
      this.service.print(res, 'elContainer')
    })
  }


  customSetTimeoutObservables(){
    this.service.customSetTimeoutObservables().subscribe(res => {
      console.log("CUSTOM OBSERVABLES RES ==>", res)
      this.service.print(res, 'elContainer2')
    }, error => {
      this.observablesFailed = true
    }, () => {
      this.observablesFailed = false
    })
  }


  IntervalObservable(){
    this.customeIntervalObssubscribtion = this.service.customIntervalObservable(this.intervalDuration).subscribe(res => {
      console.log("INTERVAL OBSERVABLE ===>", res)
      this.service.print(res, 'elContainer3')
    })
  }


  unSubscribeIntervalPbs(){
    this.customeIntervalObssubscribtion?.unsubscribe()
  }



}
