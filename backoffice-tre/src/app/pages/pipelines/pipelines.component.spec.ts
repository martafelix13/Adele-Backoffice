import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelinesComponent } from './pipelines.component';

describe('PipelinesComponent', () => {
  let component: PipelinesComponent;
  let fixture: ComponentFixture<PipelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipelinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
