import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemopagesComponent } from './demopages.component';

describe('DemopagesComponent', () => {
  let component: DemopagesComponent;
  let fixture: ComponentFixture<DemopagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemopagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemopagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
