import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplepagesComponent } from './examplepages.component';

describe('ExamplepagesComponent', () => {
  let component: ExamplepagesComponent;
  let fixture: ComponentFixture<ExamplepagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamplepagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamplepagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
