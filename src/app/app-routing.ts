import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppComponent } from './app.component';




export const routes: Routes=[
                            
{path:"users", component:UsersComponent},
{path:"user/:id", component:UserDetailsComponent},

                            
];

@NgModule
({
imports:[RouterModule.forRoot(routes)],    
exports:[RouterModule]    
    
})



export class AppRouting {
}
