import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  users: any[] =[];

  constructor(private userservice: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userservice.getData().subscribe(
      (data) => (this.users = data),
      (error) => console.error('Error fetching data:', error)
    );
  }

  viewPosts(userId: number) {
    this.router.navigate(['/posts', userId]);
  }

}
