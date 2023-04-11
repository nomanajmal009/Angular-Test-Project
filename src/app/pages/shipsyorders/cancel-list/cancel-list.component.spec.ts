import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelListComponent } from './cancel-list.component';

describe('CancelListComponent', () => {
  let component: CancelListComponent;
  let fixture: ComponentFixture<CancelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
