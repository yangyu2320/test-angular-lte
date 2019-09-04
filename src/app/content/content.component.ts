import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';

  pageDesc = '';

  constructor(public router: Router) {
    router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        console.log(event.toString());
        if (event.url === '/dashbord') {
          this.pageTitle = '首页';
          this.pageDesc = '';
        } else if (event.url.startsWith('/user')) {
          this.pageTitle = '用户管理';
          this.pageDesc = '维护系统中的用户';
        }
      });
  }

  ngOnInit() {
  }

}
