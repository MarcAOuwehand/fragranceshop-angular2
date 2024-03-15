import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;

  loginChanged = new EventEmitter<void>();
  loginError = new EventEmitter<boolean>();

  private apiUrl = 'http://localhost:8081/api/v1/auth/authenticate';
  private registerApiUrl = 'http://localhost:8081/api/v1/auth/register';
  private registerAdminApiUrl = 'http://localhost:8081/api/v1/auth/registerAdmin';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: any) {
    this.http.post<any>(this.apiUrl, credentials).subscribe(
      (response) => {
        sessionStorage.setItem('token', response.token);
        this.loginChanged.emit();
        this.router.navigate(['']);
      },
      (error) => {
        this.loginError.emit(true);
      }
    );
  }

  register(userDetails: any) {
    this.http.post<any>(this.registerApiUrl, userDetails).subscribe(
      (response) => {
        sessionStorage.setItem('token', response.token);
        this.loginChanged.emit();
        this.router.navigate(['']);
      },
      (error) => {
        this.loginError.emit(true);
      }
    );
  }

  registerAdmin(userDetails: any) {
    this.http.post<any>(this.registerAdminApiUrl, userDetails).subscribe(
      (response) => {
        this.router.navigate(['admin']);
      },
      (error) => {
        console.error(error);
        this.loginError.emit(true);
      }
    );
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.isLoggedIn = false;
    this.loginChanged.emit();
  }

  getIsLoggedIn(): boolean {
    return sessionStorage.getItem('token') !== null;
  }
}
