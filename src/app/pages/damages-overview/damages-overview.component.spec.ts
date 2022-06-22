import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagesOverviewComponent } from './damages-overview.component';

describe('DamagesOverviewComponent', () => {
  let component: DamagesOverviewComponent;
  let fixture: ComponentFixture<DamagesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamagesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamagesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
