import { Component, OnInit } from '@angular/core';
import { ServicesobservablesService } from 'src/app/services/servicesobservables.service';

@Component({
  selector: 'app-subject-child-bobservable',
  templateUrl: './subject-child-bobservable.component.html',
  styles: [
  ]
})
export class SubjectChildBObservableComponent implements OnInit {
  subscribeValue:any

  constructor(private service: ServicesobservablesService) {
    this.service.subjectSubscribe.subscribe(res => {
      console.log("SUBJECT SUBSCRIBE form A===>", res)
      this.subscribeValue = res

    })
   }

  ngOnInit(): void {
  }


  channelSubscribe(){
    this.service.subjectSubscribe.next('Subscribe from B')
  }

}
