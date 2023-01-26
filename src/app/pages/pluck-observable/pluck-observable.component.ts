import { Component, OnInit } from '@angular/core';
import { ServicesobservablesService } from 'src/app/services/servicesobservables.service';

@Component({
  selector: 'app-pluck-observable',
  templateUrl: './pluck-observable.component.html',
  styleUrls: ['./pluck-observable.component.css']
})
export class PluckObservableComponent implements OnInit {
  userName:any;

  constructor(private service: ServicesobservablesService) { }

  ngOnInit(): void {
    this.getUserData()
  }





  getUserData(){
    this.service.getUserDataPluck().subscribe(res => {
      console.log("PLUCK OPERATOR DATA ===>", res)
      this.userName = res
    })
  }

}
