import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isLoading: boolean = true
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private notificacao: NotificacaoService,
    // private service: LoginService,
    // private router: Router
  ) {
    this.isLoading = false;
    this.loginForm = this.criarFormularioLogin();
  }

  criarFormularioLogin(): FormGroup {
    return this.formBuilder.group({
      usuario: ['patricia.teixeira', Validators.required],
      password: ['111111111', Validators.required],
    });
  }

}
