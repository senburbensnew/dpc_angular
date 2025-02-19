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
    rightPanelOpen:boolean = false;
    isOpenSubscription: Subscription | undefined;
    rightPanelOpenSubscription : Subscription | undefined;
  
    constructor(private searchService : SearchService){}
  
    ngOnInit(): void {
      this.isOpenSubscription = this.searchService.getIsSearchInputOpen()
      .subscribe(
        (open:boolean) => { this.isSearchOpen = open;}
      );

      this.rightPanelOpenSubscription = this.searchService.getRightPanelOpen()
      .subscribe(
        (open:boolean) => { this.rightPanelOpen = open;}
      );
    }
  
    ngOnDestroy(): void {
      if(this.isOpenSubscription){
        this.isOpenSubscription.unsubscribe();
      }

      if(this.rightPanelOpenSubscription){
        this.rightPanelOpenSubscription.unsubscribe();
      }
    }

    toggleSearch(){
      this.searchService.toggleSearch();
    }

    toggleHamburgerMenu(){
      this.searchService.toggleRightPanel();
    }

    closeRightPanel(){
      this.toggleHamburgerMenu();
    }
}
