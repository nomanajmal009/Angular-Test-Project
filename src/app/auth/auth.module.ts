import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { MaterialModule } from "src/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
        AuthRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
      ],
      declarations: [
        LoginComponent,
      ],
})

export class AuthModule{

}