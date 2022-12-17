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

  // Dummy data
  private users: Credentials[] = [
    {
      username: "melanymero",
      password: "password"
    },
    {
      username: "kenethriera",
      password: "password"
    },
    {
      username: "ivonneminchala",
      password: "password"
    },
    {
      username: "danilopin",
      password: "password"
    }
  ];

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { }

  usuarioLogin = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  onSubmit() {
    console.log(this.usuarioLogin.value);

    if (this.validateUserCredentials(this.usuarioLogin.value.username, this.usuarioLogin.value.password)) {
      console.log("Autenticado!");

      // Se guarda el usuario en el localStorage
      let authenticatedUser: Credentials = {
        username: this.usuarioLogin.value.username,
        password: this.usuarioLogin.value.password
      }

      localStorage.setItem("authenticatedUser", JSON.stringify(authenticatedUser));

      this.router.navigate(['/cliente']);
      this.dialogRef.close();
    } else {
      console.log("Error en las credenciales");
    }
  }

  private validateUserCredentials(username: any, password: any): boolean {
    for (const user of this.users) {
      if (user.username == username && user.password == password) {
        return true;
      }
    }

    return false;
  }

}

interface Credentials {
  username: string | null | undefined
  password: string | null | undefined
}