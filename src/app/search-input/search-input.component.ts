import { Component, OnDestroy, OnInit } from '@angular/core';
import { DPCService } from '../dpc.service';
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

  constructor(private dpcService : DPCService){}

  ngOnInit(): void {
    this.isOpenSubscription = this.dpcService.getIsSearchInputOpen()
    .subscribe(
      (open) => { this.isOpen = open }
    );
  }

  ngOnDestroy(): void {
    if(this.isOpenSubscription){
      this.isOpenSubscription.unsubscribe();
    }
  }

  search(){}
}
