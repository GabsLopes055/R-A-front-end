import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isLoading: boolean = true;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router
     // private notificacao: NotificacaoService,
  ) // private service: LoginService,
  {
    this.isLoading = false;
    this.loginForm = this.criarFormularioLogin();
  }

  criarFormularioLogin(): FormGroup {
    return this.formBuilder.group({
      usuario: ['patricia.teixeira', Validators.required],
      password: ['111111111', Validators.required],
    });
  }

  logar() {
    this.route.navigate(['dashboard'])
  }
}
