import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'feature-module';
  @ViewChild(MatSidenav) menu: MatSidenav;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.setTitle();
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(x => x instanceof NavigationEnd)
    ).subscribe(x => {
      this.setTitle();
      this.menu.close();
    });
  }

  setTitle() {
    let route = this.activeRoute;
    do {
      if (route.snapshot.data['title']) {
        this.title = route.snapshot.data['title']
      }
      route = route.firstChild
    } while (route)
  }
}
