import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Importar el servicio
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // Inyectar el servicio
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        ]
      ],
      confirmPassword: ['', Validators.required]
    });
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const { fullName, email, password, confirmPassword } = this.registerForm.value;
      if (password !== confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden.';
        return;
      }

      // Registrar al usuario en el servicio
      this.authService.registerUser({ fullName, email, password });
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Por favor, completa el formulario correctamente.';
    }
  }

  onCancel(): void {
    this.router.navigate(['/login']);
  }
}
