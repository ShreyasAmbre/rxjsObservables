import { Component, ElementRef, OnInit, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ServicesobservablesService } from 'src/app/services/servicesobservables.service';

@Component({
  selector: 'app-debounce-distinct-until-change-observable',
  templateUrl: './debounce-distinct-until-change-observable.component.html',
  styles: [
  ]
})
export class DebounceDistinctUntilChangeObservableComponent implements OnInit, AfterViewInit {
  @ViewChild('mySearchTerm') searchInput: ElementRef | undefined
  @ViewChild('mySearchTerm2') searchInput2: ElementRef | undefined

  searchValue:string = ''
  searchValue2:string = ''



  constructor(private service: ServicesobservablesService) { }
  ngAfterViewInit(): void {
    fromEvent(this.searchInput?.nativeElement, 'keyup').pipe(
      map((event:any) => event.target.value)
      , debounceTime(2000)
    ).subscribe((val:any) => {
      console.log("DEBOUNCE Search Value ===>", val)
      this.searchValue = val
    })



    fromEvent(this.searchInput2?.nativeElement, 'keyup').pipe(
      map((event:any) => event.target.value)
      , debounceTime(2000)
      , distinctUntilChanged()
    ).subscribe(res => {
      console.log("DISTINCTUNTIL CHANGE SUBSCRIBE ===>", res)
      this.searchValue2 = res
    })
  }

  ngOnInit(): void {
  }
}
