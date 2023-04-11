import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipsyOrdersComponent } from './shipsyorders.component';
import { ListComponent } from './list/list.component';
import { SaveComponent } from './save/save.component';
import { PendingListComponent } from './pending-list/pending-list.component';
import { CancelListComponent } from './cancel-list/cancel-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShipsyOrdersComponent,
    children: [
      {
        path: 'add',
        component: SaveComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'pending',
        component: PendingListComponent,
      },
      {
        path: 'cancel',
        component: CancelListComponent,
      },
      {
        path: 'edit/:id',
        component: ShipsyOrdersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ShipsyOrdersRoutingModule {
}

export const routedComponents = [
  ShipsyOrdersComponent, 
  ListComponent,
  SaveComponent,
  PendingListComponent,
  CancelListComponent
];


