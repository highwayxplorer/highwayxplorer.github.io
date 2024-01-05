import { Component } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(router: Router){
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        console.log("Navigation started")
      }
      if(event instanceof NavigationEnd) {
        console.log("NavigationEnd")
      }
      if(event instanceof NavigationError) {
        console.log("NavigationError")
      }
      if(event instanceof RoutesRecognized) {
        console.log("RoutesRecognized")
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }
}
