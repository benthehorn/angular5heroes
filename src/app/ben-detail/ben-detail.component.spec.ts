import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenDetailComponent } from './ben-detail.component';

describe('BenDetailComponent', () => {
  let component: BenDetailComponent;
  let fixture: ComponentFixture<BenDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
