import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private isSearchOpen = new BehaviorSubject<boolean>(false);
  private rightPanelOpen = new BehaviorSubject<boolean>(false);

  getIsSearchInputOpen() {
    return this.isSearchOpen.asObservable(); // Ensure it's observable
  }

  toggleSearch() {
    this.isSearchOpen.next(!this.isSearchOpen.value); // Toggle state
  }

  getRightPanelOpen() {
    return this.rightPanelOpen.asObservable(); // Ensure it's observable
  }

  toggleRightPanel() {
    this.rightPanelOpen.next(!this.rightPanelOpen.value); // Toggle state
  }
}
