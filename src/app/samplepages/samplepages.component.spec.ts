import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplepagesComponent } from './samplepages.component';

describe('SamplepagesComponent', () => {
  let component: SamplepagesComponent;
  let fixture: ComponentFixture<SamplepagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamplepagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplepagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
