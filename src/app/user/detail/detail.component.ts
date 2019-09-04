import {Component, OnInit} from '@angular/core';
import {User, UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user: User;

  constructor(private router: Router, private routerInfo: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    const id = this.routerInfo.snapshot.params['id'];
    this.user = this.userService.getUser(id);
  }

  cancel() {
    this.router.navigateByUrl("/user")
  }

  confirm() {
    this.router.navigateByUrl("/user")
  }
}
