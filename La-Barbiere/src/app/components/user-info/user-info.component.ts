// user-info.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  fullName: string;
  email: string;
  password: string;
  phone?: string;
}

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  users: User[] = [
    { fullName: 'John Doe', email: 'john@example.com', password: 'password123*', phone: '123-456-789' }
  ];
}
