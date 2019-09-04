import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  private users: User[] = [
    new User(1, 'yangyu2320', '18818915051', 'yangyu2320@live.com', 5),
    new User(2, 'zyjruoruo', '13570287217', '543412454@qq.com', 4),
    new User(3, 'zyjruoruo1', '13570287218', '543412456@qq.com', 5),
    new User(4, 'zyjruoruo2', '13570287219', '543412457@qq.com', 3),
    new User(5, 'zyjruoruo3', '13570287220', '543412458@qq.com', 4),
    new User(6, 'zyjruoruo4', '13570287221', '543412459@qq.com', 1),
    new User(7, 'zyjruoruo5', '13570287222', '543412460@qq.com', 2)
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User {
    const user = this.users.find(user => user.id == id);
    return user ? user : new User(0, null, null, null, 0);
  }
}

export class User {
  constructor(public id: number, public loginName: string, public mobile: string, public email: string, public level: number) {
  }
}

