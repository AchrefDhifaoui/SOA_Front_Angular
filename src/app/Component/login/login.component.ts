import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ReglementserviceService } from 'src/app/services/reglementservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';

  constructor(private reglementService: ReglementserviceService,private router:Router){}
  ngOnInit(): void {
this.onSubmit();
  }
  onSubmit(): void {
    this.reglementService.getClientByEmail(this.email, this.password)
      .subscribe(result => {
        if (result) {
          alert('Login successful!');
          this.router.navigate(['/gestionReglement']);        } else {
          alert('Login failed. Please check your email and password.');
        }
      }, error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
  }
  
  
}
