import { Injectable } from '@angular/core';
import { Credentials } from 'src/app/dto/credentials'

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  constructor() { /* TODO document why this constructor is empty */ }

  logIn(credentials: Credentials): boolean {
    if (this.validateUserCredentials(credentials.username, credentials.password)) {
      console.log("Autenticado!");

      localStorage.setItem("authenticatedUser", JSON.stringify(credentials));

      return true;
    } else {
      return false;
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
