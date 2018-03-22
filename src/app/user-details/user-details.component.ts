import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    
  user: User;
  users:User[];
    
  getUserDetails():void{
      
      const id = +this.router.snapshot.paramMap.get("id");
      this.userService.getUserDetails(id).subscribe(user=>this.user=user);
      
  }
  
  navigateBack()
  {
      this.location.back();
  }
  
  deleteUser(id:number)
  {
      console.log("Delete User was called with id= " +id)
      this.userService.deleteUser(id, this.location).subscribe(res=>console.log("deleted"));
  }
    
  constructor(private userService:UserService,
              private router:ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
      this.getUserDetails();
      
  }

}
