import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { Catch } from 'rxjs/catch';
import { of } from 'rxjs/observable/of';
import { User } from '../user'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Location } from '@angular/common';


const httpOptions = {
        headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
      };


@Injectable()
export class UserService {

    private url = environment.url;
    private getAllUsersUri="/getAllUsers";
    private getUserUri="/getUser";
    private deleteUserUri="/deleteUser";
    private createUserUri="/createUser";
    public user:User;
  
    
    
    getAllUsers(): Observable<User[]> {

        return this.http.get<User[]>( this.url + this.getAllUsersUri,httpOptions);
    }

   
    
    getUserDetails( id: number ): Observable<any> {
        
       return this.http.get<User>( this.url + this.getUserUri + "?id=" + id ).pipe(
               tap(_=>console.log("getting user details for id=$id")),
               catchError(this.handleError("getUserDetails",[]))
       );
       
       
    }

    deleteUser(id:number, location:Location):Observable<any>{
        console.log("Service method was called")
       return this.http.delete(this.url + this.deleteUserUri + "?id=" + id).pipe(
               map(_=>location.back()),
                catchError(this.handleError("deleteUser", []))
        )
    }
    
    createUser(name:String, dob:Date, age:number){
        
        this.user = new User(name, dob, age);
        this.http.post(this.url+this.createUserUri, this.user).pipe(
          tap(_ => console.log("user created")),
         catchError(this.handleError("createUser", []))      
        )
    }
     private handleError<T>(operation="operation", result?:T)
        {
         
            return(error: any):Observable<T>=>{
                
                console.error(error);
                console.log("$operation failed: ${error.message}");
                
               return of(result as T);
            }
            
           
            
            
     }   
        
    
    
    
    constructor( private http: HttpClient,
               ) { 
        
    }

}
