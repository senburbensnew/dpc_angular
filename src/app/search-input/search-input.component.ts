import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent implements OnInit, OnDestroy{
  isOpen:boolean = false;
  isOpenSubscription: Subscription | undefined;

  constructor(private searchService : SearchService){}

  ngOnInit(): void {
    this.isOpenSubscription = this.searchService.getIsSearchInputOpen()
    .subscribe(
      (open) => { this.isOpen = open }
    );
  }

  ngOnDestroy(): void {
    if(this.isOpenSubscription){
      this.isOpenSubscription.unsubscribe();
    }
  }
}
