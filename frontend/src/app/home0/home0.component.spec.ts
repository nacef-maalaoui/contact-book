import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home0Component } from './home0.component';

describe('Home0Component', () => {
  let component: Home0Component;
  let fixture: ComponentFixture<Home0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home0Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Home0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
