import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private loginService: LoginServiceService) { 
    this.username="test";
    this.password="123";


   }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.loginUser(this.username, this.password)
    .subscribe(
      (erg: User) => {this.username = erg.username;},
    
      error => {error = 'Fehler aufgetaucht';
    }
    );
    
  }

}
