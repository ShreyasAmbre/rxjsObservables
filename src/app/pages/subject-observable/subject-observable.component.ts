import { Component, OnInit } from '@angular/core';
import { ServicesobservablesService } from 'src/app/services/servicesobservables.service';

@Component({
  selector: 'app-subject-observable',
  templateUrl: './subject-observable.component.html',
  styles: [
  ]
})
export class SubjectObservableComponent implements OnInit {
  subscribeValue:any

  constructor(private service: ServicesobservablesService) {
    this.service.subjectSubscribe.subscribe(res => {
      this.subscribeValue = res
    })
   }

  ngOnInit(): void {
  }

}
