import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ServicesobservablesService } from 'src/app/services/servicesobservables.service';

@Component({
  selector: 'app-fromeventobservables',
  templateUrl: './fromeventobservables.component.html',
  styleUrls: ['./fromeventobservables.component.css']
})
export class FromeventobservablesComponent implements OnInit {
  @ViewChild('fromEventBtn', { static: true }) fromEventBtn!: ElementRef;
  videoCountCreated:any = []
  count: number = 1

  constructor(private service : ServicesobservablesService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.service.fromEventObservables(this.fromEventBtn.nativeElement, 'click').subscribe(res=> {
      this.count++
      let val = `Video ${this.count}`
      this.videoCountCreated.push(val)
    })
  }

}
