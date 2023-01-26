import { Component, OnInit } from '@angular/core';
import { ServicesobservablesService } from 'src/app/services/servicesobservables.service';

@Component({
  selector: 'app-filter-observable',
  templateUrl: './filter-observable.component.html',
  styleUrls: ['./filter-observable.component.css']
})
export class FilterObservableComponent implements OnInit {
  filteredPosts:any = []

  constructor(private service: ServicesobservablesService) { }

  ngOnInit(): void {
    this.getPostS()
  }



  getPostS(){
    let userId = 3
    this.service.getPostsDataFilter(userId).subscribe((res:any) => {
      console.log("AFTER FILTERED RES using filter() operator===>", res)
      this.filteredPosts = res
    })
  }

}
