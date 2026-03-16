import { Router } from '@angular/router';
import { AuthService } from './../../services/auth-service';
import { Component, inject } from '@angular/core';
import { LoginModel } from '../../models/loginModel';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService=inject(AuthService)
  private router=inject(Router);
  loginDto:LoginModel=new LoginModel();

  login(){
    this.authService.login(this.loginDto).subscribe({
      next:response=>{
        localStorage.setItem('accessToken',response.accessToken);
        this.router.navigate(['/'])
      },
      error:err=>console.error(err)
    })
  }
}
