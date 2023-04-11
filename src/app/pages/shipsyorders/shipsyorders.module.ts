import { NgModule } from '@angular/core';

import { routedComponents, ShipsyOrdersRoutingModule } from './shipsyorders-routing.module';
import { ListComponent } from './list/list.component';
import { SaveComponent } from './save/save.component';
import { PendingListComponent } from './pending-list/pending-list.component';
import { CancelListComponent } from './cancel-list/cancel-list.component';import { MaterialModule } from 'src/material.module';
;

@NgModule({
  imports: [
    ShipsyOrdersRoutingModule,
    MaterialModule
  ],
  declarations: [
    ...routedComponents,
    ListComponent,
    SaveComponent,
    PendingListComponent,
    CancelListComponent
  ],
  providers: []
})
export class ShipsyOrdersModule { }
