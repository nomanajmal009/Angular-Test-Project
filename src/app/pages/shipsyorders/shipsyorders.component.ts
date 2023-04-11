import { Component } from '@angular/core';
import { ShipsyOrderClient } from 'src/app/core/requests/shipsyorder-client.service';

@Component({
  selector: 'app-shipsyorders',
  providers: [ShipsyOrderClient],
  template: `
    <router-outlet></router-outlet>
  `,
  
})
export class ShipsyOrdersComponent {

}
