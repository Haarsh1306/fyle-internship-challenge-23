import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MainPageComponent } from './main-page.component';
import { ApiService } from '../services/api.service';
import { of, throwError } from 'rxjs';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let apiService: ApiService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      providers: [ApiService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('initially, userFound should be true and userInput should be false', () => {
    expect(component.userFound).toBeTrue();
    expect(component.userInput).toBeFalse();
  });

  it('onClick should handle empty username', () => {
    component.username = '';
    component.onClick();

    expect(component.userFound).toBeTrue();
    expect(component.userInput).toBeTrue();
  });

  it('onClick should handle valid username', () => {
    component.username = 'valid-username';

    spyOn(apiService, 'getUser').and.returnValue(of({})); 

    component.onClick();

    expect(component.userFound).toBeTrue();
    expect(component.userInput).toBeFalse();
   
  });

  it('onClick should handle 404 error from apiService', () => {
    component.username = 'non-existent-username';

    spyOn(apiService, 'getUser').and.returnValue(throwError({ status: 404 })); 

    component.onClick();

    expect(component.userFound).toBeFalse();
    expect(component.userInput).toBeFalse();
  });
});
