import { Injectable } from '@angular/core';

interface User {
  fullName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];

  constructor() {
    // Datos mockeados
    this.users = [
      { fullName: 'John Doe', email: 'john@example.com', password: 'password123*' },
      { fullName: 'Jack Smith', email: 'jack@example.com', password: 'password456*' },
      { fullName: 'Brandon Johnson', email: 'brandon@example.com', password: 'password789*' }
    ];
  }

  registerUser(user: User): void {
    this.users.push(user);
    console.log('Usuario registrado:', user);
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    return !!user;
  }

  getUserByEmail(email: string): User | undefined {
    return this.users.find(u => u.email === email);
  }
}
