import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpeScaleComponent } from './dpe-scale.component';
import {FormsModule} from '@angular/forms';

describe('DpeScaleComponent', () => {
  let component: DpeScaleComponent;
  let fixture: ComponentFixture<DpeScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [ DpeScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpeScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 7 options', () => {
    const dpeScale = fixture.nativeElement;
    const labels = dpeScale.querySelectorAll('label');
    const inputs = dpeScale.querySelectorAll('input[type="radio"]');
    expect(labels.length).toBe(7, 'number of labels');
    expect(inputs.length).toBe(7, 'number of input');
  });
});
