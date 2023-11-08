import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  constructor(private router: Router, private activated: ActivatedRoute, private apiService: ApiService) {}
  profileName: string = "";
  avatarUrl: any;
  githubResponse: any;
  profileNotFound: boolean = false;
  userBio: any;
  userName: any;
  userLocation: any;
  userTwitter: any;
  userTwitterAvailable: boolean = true;
  userRepoData: any[] = []; 
  pageSize: number = 10; 
  currentPage: number = 1; 
  isLoading:boolean=true;
  popUp:boolean=false;
  userPageSize:number=10;
  totalPublicRepo:number=0;


 
  get totalPages(): number {
    return Math.ceil(this.userRepoData.length / this.pageSize);
  }

  
  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      if(this.popUp) this.popUp=false;
    }
  }

  
  get pagedUserRepoData(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.userRepoData.slice(startIndex, endIndex);
  }

  changePageSize(){
    if(this.popUp==false) this.popUp=true;
    else{
      this.pageSize = this.userPageSize;
      this.popUp=false;
    }
  }

  resetPageSize(){
    this.pageSize =10;
  }
  fetchNext(){
    this.router.navigate(['main-page']);
  }

  ngOnInit(): void {
    this.activated.queryParams.subscribe((response: any) => {
      this.profileName = response['username'];
    });

    this.apiService.getUser(this.profileName)
        .subscribe((response: any) => {
          this.githubResponse = response;
          this.avatarUrl = this.githubResponse['avatar_url'];
          this.userBio = this.githubResponse["bio"];
          this.userName = this.githubResponse["name"];
          this.userLocation = this.githubResponse["location"];
          this.userTwitter = this.githubResponse["twitter_username"];
          if (this.userTwitter == null) this.userTwitterAvailable = false;
          
        });

    this.apiService.getUserRepos(this.profileName).subscribe((response: any) => {
      this.userRepoData = response;
      this.totalPublicRepo = this.userRepoData.length;
      this.isLoading = false;
    });

    
  }
}
