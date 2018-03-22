import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users:User[];
    
    
    getAllUsers():void{
        
        this.userService.getAllUsers().subscribe(users=>this.users=users);
    }
      
    
    
  constructor(private userService:UserService) { }

  ngOnInit() {
      this.getAllUsers();
  }

}
