import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any = null;

  
  constructor(private loginService: LoginService) { }



  ngOnInit(): void {
    this.user = this.loginService.getUser();
  }


}
