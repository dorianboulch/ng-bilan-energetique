import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DPEValues} from '../../models/DPEValues';

@Component({
  selector: 'be-dpe-scale',
  templateUrl: './dpe-scale.component.html',
  styleUrls: ['./dpe-scale.component.scss']
})
export class DpeScaleComponent {
  DPEEnum = DPEValues;

  @Input() selectable = true;
  @Input() value: DPEValues;

  @Output() changed: EventEmitter<DPEValues> = new EventEmitter();

  constructor() {
  }

  radioChanged(dpeEnum: DPEValues): void {
    this.changed.emit(dpeEnum);
  }
}
