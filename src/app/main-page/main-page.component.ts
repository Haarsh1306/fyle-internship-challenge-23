import { Component } from '@angular/core';
import {  Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private router: Router , private activatedRoute : ActivatedRoute){}
  username:string="";
  submit(login:any){
    
    this.router.navigate(['profile'], {skipLocationChange: true, queryParams:{username : this.username}})
  }
}
