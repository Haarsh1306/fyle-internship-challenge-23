import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should fetch user data from the API', () => {
    const mockUserData = { login: 'testuser' };
    const username = 'testuser';

    apiService.getUser(username).subscribe((data) => {
      expect(data).toEqual(mockUserData);
    });

    const req = httpTestingController.expectOne(`https://api.github.com/users/${username}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUserData);
  });

  it('should fetch user repos data from the API', () => {
    const mockReposData = [{ name: 'repo1' }, { name: 'repo2' }];
    const username = 'testuser';

    apiService.getUserRepos(username).subscribe((data) => {
      expect(data).toEqual(mockReposData);
    });

    const req = httpTestingController.expectOne(`https://api.github.com/users/${username}/repos`);
    expect(req.request.method).toBe('GET');
    req.flush(mockReposData);
  });
});
