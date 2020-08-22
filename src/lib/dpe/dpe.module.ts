import {NgModule} from '@angular/core';
import {DpeScaleComponent} from './components/dpe-scale/dpe-scale.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DpeScaleComponent,
  ],
  imports: [
    FormsModule
  ],
  exports: [
    DpeScaleComponent,
  ]
})
export class DpeModule { }
