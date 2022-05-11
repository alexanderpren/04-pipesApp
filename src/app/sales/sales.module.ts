import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsComponent } from './pages/basics/basics.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { SortComponent } from './pages/sort/sort.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    MayusculasPipe,
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    //Pipes
    SortComponent,
    FlyPipe,
    OrdenarPipe,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortComponent,
  ],
})
export class SalesModule {}
