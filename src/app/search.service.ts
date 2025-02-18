import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private isSearchOpen = new BehaviorSubject<boolean>(false); // Default: false

  getIsSearchInputOpen() {
    return this.isSearchOpen.asObservable(); // Ensure it's observable
  }

  toggleSearch() {
    this.isSearchOpen.next(!this.isSearchOpen.value); // Toggle state
  }
}
