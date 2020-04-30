import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageE404Component } from './page-e404.component';

describe('PageE404Component', () => {
  let component: PageE404Component;
  let fixture: ComponentFixture<PageE404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageE404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageE404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
