import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppStartComponent } from './appStart.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppStartComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppStartComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ang-to-do'`, () => {
    const fixture = TestBed.createComponent(AppStartComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ang-to-do');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppStartComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'ang-to-do app is running!'
    );
  });
});
