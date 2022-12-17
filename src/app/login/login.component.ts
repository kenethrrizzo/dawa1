import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { }

  usuarioLogin = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  onSubmit() {
    console.log(this.usuarioLogin.value);

    if (this.validateUserCredentials(this.usuarioLogin.value.usuario, this.usuarioLogin.value.password)) {
      console.log("Autenticado!");
      this.router.navigate(['/cliente']);
      this.dialogRef.close();
    } else {
      console.log("Error en las credenciales");
    }
  }

  private validateUserCredentials(username: any, password: any): boolean {
    const dummyUser = "Keneth";
    const dummyPassword = "Password";

    if (dummyUser != username && dummyPassword != password) {
      return false;
    }

    return true;
  }

}