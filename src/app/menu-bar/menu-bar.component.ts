import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent implements OnInit, AfterViewInit{
  mobileMenuOpen = false;
  activeDropdown: string | null = null;
  showLeftScroll = false;
  showRightScroll = false;
  
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  ngOnInit() {
    // Initialize component
  }
  
  ngAfterViewInit() {
    this.checkForScrollButtons();
  }
  
  @HostListener('window:resize')
  onResize() {
    this.checkForScrollButtons();
  }
  
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  
  toggleDropdown(name: string) {
    this.activeDropdown = this.activeDropdown === name ? null : name;
  }
  
  scrollLeft() {
    const container = this.scrollContainer.nativeElement;
    container.scrollLeft -= 100; // Adjust scroll amount as needed
    setTimeout(() => this.checkForScrollButtons(), 50);
  }
  
  scrollRight() {
    const container = this.scrollContainer.nativeElement;
    container.scrollLeft += 100; // Adjust scroll amount as needed
    setTimeout(() => this.checkForScrollButtons(), 50);
  }
  
  checkForScrollButtons() {
    const container = this.scrollContainer.nativeElement;
    
    // Check if scrolling is possible
    this.showLeftScroll = container.scrollLeft > 0;
    this.showRightScroll = container.scrollWidth > container.clientWidth && 
                          container.scrollLeft < (container.scrollWidth - container.clientWidth);
  }
  
  // Add event listener for scroll to update button visibility
  @HostListener('scroll', ['$event.target'])
  onScroll(target: any) {
    if (target === this.scrollContainer.nativeElement) {
      this.checkForScrollButtons();
    }
  }
}
