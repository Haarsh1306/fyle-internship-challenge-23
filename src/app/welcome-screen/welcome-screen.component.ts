import { Component } from '@angular/core';
import {  Router} from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {

  constructor(private router: Router, ) { }
  getStarted(){
    this.router.navigate(['main-page'],{skipLocationChange:true})
  }
}
