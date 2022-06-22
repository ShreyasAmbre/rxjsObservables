import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromeventobservables',
  templateUrl: './fromeventobservables.component.html',
  styleUrls: ['./fromeventobservables.component.css']
})
export class FromeventobservablesComponent implements OnInit {
  @ViewChild('fromEventBtn', { static: true }) fromEventBtn!: ElementRef;
  videoCountCreated:any = []
  count: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    fromEvent(this.fromEventBtn.nativeElement, 'click').subscribe(res => {
      this.count++
      let val = `Video ${this.count}`
      this.videoCountCreated.push(val)
    })
  }

}
