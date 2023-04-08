import { Component, OnInit } from '@angular/core';
import { ServicesobservablesService } from 'src/app/services/servicesobservables.service';

@Component({
  selector: 'app-subject-child-aobservable',
  templateUrl: './subject-child-aobservable.component.html',
  styles: [
  ]
})
export class SubjectChildAObservableComponent implements OnInit {
  subscribeValue:any



  constructor(private service: ServicesobservablesService) {
    this.service.subjectSubscribe.subscribe(res => {
      console.log("SUBJECT SUBSCRIBE from B ===>", res)
      this.subscribeValue = res

    })
   }

  ngOnInit(): void {
  }


  channelSubscribe(){
    this.service.subjectSubscribe.next('Subscribe from A')
  }

}
