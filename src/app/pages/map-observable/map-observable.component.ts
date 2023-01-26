import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServicesobservablesService } from 'src/app/services/servicesobservables.service';

@Component({
  selector: 'app-map-observable',
  templateUrl: './map-observable.component.html',
  styleUrls: ['./map-observable.component.css']
})
export class MapObservableComponent implements OnInit {
  resData:any;
  modifedRes:any = [];

  constructor(private service: ServicesobservablesService) { }

  ngOnInit(): void {
    this.getUserData()
    this.getUserData2()
  }




  getUserData(){
    this.service.getUserDataUsingMap().subscribe(res => {
      console.log("AFTER MODIFYED API DATA using MAP operator in COMPONENT ==>", res)
      this.resData = res
    })
  }



  getUserData2(){
    // let data = from([
    //   {name: "Shreyas Ambre", age: 26},
    //   {name: "Shrikant Ambre", age: 57},
    //   {name: "Sujata Ambre", age: 55},
    // ]) 

    // console.log("Getting STATIC ARRAY OF OBJ in STREAM FROM & MAP ===>", data)

    // data.pipe(
    //   map(res => {
    //     console.log("Getting STATIC ARRAY OF OBJ in STREAM FROM & MAP ===>", res.name)
    //     return res
    //   })
    // ).subscribe(res => {
    //   console.log("Getting STATIC ARRAY OF OBJ in STREAM FROM & MAP ===>", res)

    // })


    this.service.getUserDataFromMap().subscribe((resData:any) => {
      console.log("Getting STATIC ARRAY OF OBJ in STREAM FROM & MAP ===>", resData)
      this.modifedRes = resData
    })

  }

}
