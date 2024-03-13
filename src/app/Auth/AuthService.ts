import {Injectable} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserModel} from "../account/user.model";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'http://localhost:8081/api/users/';

  constructor(private jwtHelper: JwtHelperService, private http: HttpClient) {
  }
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  getUserId() : string {
    const token = this.getToken();
    const decodedToken = this.jwtHelper.decodeToken(token)
    return(decodedToken.id)
  }

  public getUser(): Observable<UserModel> {
    const token = sessionStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    return this.http.get<any>(`${this.apiUrl}${this.getUserId()}`, { headers }).pipe(
      map(response => {
        const userPayload = response?.payload;
        return {
          id: userPayload?.id,
          email: userPayload?.email,
          role: userPayload?.role
        } as UserModel;
      })
    );
  }

  getUserRole(): Observable<string> {
    return this.getUser().pipe(
      map(userModel => userModel.role),
      catchError(error => {
        console.error("Error fetching user role:", error);
        return of("USER");
      })
    );
  }

  getUserEmail(): Observable<string> {
    return this.getUser().pipe(
      map(userModel => userModel.email),
    );
  }


}
