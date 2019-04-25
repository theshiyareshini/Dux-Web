import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user/user.service';
import { User } from '../../../shared/services/user/user';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-guide-requests',
  templateUrl: './guide-requests.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class GuideRequestsComponent implements OnInit {
  title = 'Dux-Web | Admin Dashboard';
  users: User[];

  constructor(private userService: UserService, 
              public AuthService: AuthService) { }

  getUsr() {
    const usr = JSON.parse(localStorage.getItem('users'));
    this.users = usr; 
  }

  ngOnInit() {
    this.getUsr();
    this.userService.getUser().subscribe( users => {
      this.users = users;
      localStorage.setItem('users', JSON.stringify(users));
    });
  }

}
