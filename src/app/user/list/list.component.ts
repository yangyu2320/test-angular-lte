import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User, UserService} from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private users: Array<User>;

  constructor(public router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }


  createUser() {
    this.router.navigateByUrl('/user/0');
  }

  modifyUser(user: User) {
    this.router.navigateByUrl('/user/' + user.id);
  }
}
