import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DPCService } from '../dpc.service';

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
  
    constructor(private dpcService : DPCService){}
  
    ngOnInit(): void {
      this.isOpenSubscription = this.dpcService.getIsSearchInputOpen()
      .subscribe(
        (open:boolean) => { this.isSearchOpen = open;}
      );

      this.rightPanelOpenSubscription = this.dpcService.getRightPanelOpen()
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
      this.dpcService.toggleSearch();
    }

    toggleHamburgerMenu(){
      this.dpcService.toggleRightPanel();
    }

    closeRightPanel(){
      this.toggleHamburgerMenu();
    }
}
