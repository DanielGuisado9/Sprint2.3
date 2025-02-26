import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Importar el servicio AuthService

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { // Inyectar el servicio AuthService
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    const email = this.forgotPasswordForm.get('email')?.value;

    // Usar el servicio AuthService para verificar el correo
    const user = this.authService.getUserByEmail(email);
    if (user) {
      this.successMessage = 'Se ha enviado un enlace de recuperación a tu correo.';
      console.log(`Recovery email sent to: ${email}`);
      this.errorMessage = '';
    } else {
      this.errorMessage = 'El correo no está registrado.';
      console.log(`Email not registered: ${email}`);

      this.successMessage = '';
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}