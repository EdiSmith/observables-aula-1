import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  onSubmit() {
    alert('Login enviado!');
    // aqui você pode colocar a lógica de autenticação
  }

}
