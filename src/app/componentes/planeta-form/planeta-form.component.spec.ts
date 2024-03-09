import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaFormComponent } from './planeta-form.component';

describe('PlanetaFormComponent', () => {
  let component: PlanetaFormComponent;
  let fixture: ComponentFixture<PlanetaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanetaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
