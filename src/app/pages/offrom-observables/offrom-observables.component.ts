import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ServicesobservablesService } from 'src/app/services/servicesobservables.service';

@Component({
  selector: 'app-offrom-observables',
  templateUrl: './offrom-observables.component.html',
  styleUrls: ['./offrom-observables.component.css']
})
export class OffromObservablesComponent implements OnInit {
  employeesData: object = {firstName: "Shreyas", middleName:"Sujata", lastName: "Shrikant"}
  ofObsData:any;
  data = [1,2,3,4,5,6,7,8,9]
  fromObsData:any;

  constructor(private service: ServicesobservablesService) { }


  ngOnInit(): void {
    this.service.ofObservables(this.employeesData).subscribe(res=> {
      this.ofObsData = res
      console.log("OBS of ===>", this.ofObsData)
    })


    this.service.fromObservables(this.data).subscribe(res => {
      console.log("FROM OBS DATA =>", res)
      this.service.print(res, 'elContainer')
    })
  }
}
