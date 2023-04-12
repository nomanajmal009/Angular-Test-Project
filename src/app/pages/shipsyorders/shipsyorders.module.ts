import { NgModule } from '@angular/core';
import {
  routedComponents,
  ShipsyOrdersRoutingModule,
} from './shipsyorders-routing.module';
import { ListComponent } from './list/list.component';
import { SaveComponent } from './save/save.component';
import { PendingListComponent } from './pending-list/pending-list.component';
import { CancelListComponent } from './cancel-list/cancel-list.component';
import { MaterialModule } from 'src/material.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    ShipsyOrdersRoutingModule,
    MaterialModule,
    MaterialFileInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...routedComponents,
    ListComponent,
    SaveComponent,
    PendingListComponent,
    CancelListComponent,
  ],
  providers: [],
})
export class ShipsyOrdersModule {}
