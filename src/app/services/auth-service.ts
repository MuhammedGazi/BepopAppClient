import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  baseurl = 'https://localhost:7175/login';

  login(model) {
    return this.http.post<any>(this.baseurl, model);
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('accessToken');
    return !!token; // token varsa true, yoksa false döner
  }
}
