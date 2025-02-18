import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy{
    isSearchOpen:boolean = false;
    isOpenSubscription: Subscription | undefined;
  
    constructor(private searchService : SearchService){}
  
    ngOnInit(): void {
      this.isOpenSubscription = this.searchService.getIsSearchInputOpen()
      .subscribe(
        (open) => { this.isSearchOpen = open;}
      );
    }
  
    ngOnDestroy(): void {
      if(this.isOpenSubscription){
        this.isOpenSubscription.unsubscribe();
      }
    }

    toggleSearch(){
      this.searchService.toggleSearch();
    }
}
