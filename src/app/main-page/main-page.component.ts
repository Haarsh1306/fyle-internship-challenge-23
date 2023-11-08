import { Component } from '@angular/core';
import {  Router, ActivatedRoute} from '@angular/router';
import { ApiService } from '../services/api.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private router: Router , private activatedRoute : ActivatedRoute, private apiService: ApiService){}
  username:string="";
  userFound:boolean = true;

  onClick(){
    this.apiService.getUser(this.username)
        .pipe(
          catchError((error: any) => {
            if (error.status === 404) {
              this.userFound = false;
            }
            else this.userFound=true;
            return throwError(error);
          })
        )
        .subscribe((response: any) => {
          this.router.navigate(['profile'], {skipLocationChange: true, queryParams:{username : this.username}})
        });

  }
}
