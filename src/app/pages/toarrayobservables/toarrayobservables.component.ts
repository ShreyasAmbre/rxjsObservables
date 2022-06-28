import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';
import { ServicesobservablesService } from 'src/app/services/servicesobservables.service';

@Component({
  selector: 'app-toarrayobservables',
  templateUrl: './toarrayobservables.component.html',
  styleUrls: ['./toarrayobservables.component.css']
})
export class ToarrayobservablesComponent implements OnInit {

  interval = 1000
  intervalSubscription: Subscription | undefined;

  constructor(private service: ServicesobservablesService) { }

  ngOnInit(): void {
    this.intervalSubscription = this.service.intervalObservables(this.interval).pipe(
      take(5),
      toArray()
    ).subscribe(res => {
      console.log("SINGLE STREAM =>", res)
    })


  }

}
