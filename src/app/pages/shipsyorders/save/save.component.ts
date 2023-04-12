import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FileValidator } from 'ngx-material-file-input';
import { Business } from 'src/app/core/models/shipsyorder/business';
import { ShipsyOrderClient } from 'src/app/core/requests/shipsyorder-client.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss'],
})
export class SaveComponent {
  saveForm!: FormGroup;
  maxSize = 104857600;
  businesses!: Business[];

  constructor(private client: ShipsyOrderClient, private builder: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.saveForm = this.builder.group({
      uploadedFile: new FormControl(undefined, [
        Validators.required,
        FileValidator.maxContentSize(this.maxSize),
      ]),
      business: new FormControl('', Validators.required),
    });

    this.client.business().subscribe(
      (data)=> {
        this.businesses = data
      },
      (error) => {
      }
    )
  }

  saveShipsyOrder(){
    
  }
}
