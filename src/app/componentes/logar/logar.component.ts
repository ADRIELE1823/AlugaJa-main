// import { Component, Input } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Usuario } from '../../interface/Iusuario';
// import { Router } from '@angular/router';
// import { UsuariosService } from '../../services/usuarios.service';
// import { HeaderComponent } from "../header/header.component";
// import { HttpClient, HttpClientModule } from '@angular/common/http';


// @Component({
//   selector: 'app-logar',
//   standalone: true,
//   imports: [FormsModule, HeaderComponent, HttpClientModule],
//   templateUrl: './logar.component.html',
//   styleUrl: './logar.component.css'
// })
// export class LogarComponent {
//   usuarios!: Usuario[]; //usuários do banco de dados
//   localEmail = "";
//   localSenha = "";
//   router!: Router;


//   constructor(private usuariosService: UsuariosService, router: Router, private http: HttpClient) {
//     this.router = router;
//   }

//   ngOnInit() {
//     this.usuariosService.getUsuario().subscribe((usuario) => {
//       this.usuarios = usuario
//     })
//   }

//   onLogin() {
//     console.log(this.usuarios);

//     var naoTemLogin = true;

//     this.usuarios.forEach(BDUsuario => {

//       if (BDUsuario.email == this.localEmail && BDUsuario.senha == this.localSenha) {
//         alert("Login Realizado, seja bem vindo:" + BDUsuario.nome);
//         naoTemLogin = false;
//         this.router.navigate(['/']);
//       }
//     });

//     if (naoTemLogin) {
//       alert("Login não encontrado")
//     }
//   }

// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../interface/Iusuario';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-logar',
  standalone: true,
  imports: [FormsModule, HeaderComponent], // Removido HttpClientModule
  templateUrl: './logar.component.html',
  styleUrl: './logar.component.css',
})
export class LogarComponent {
  usuarios!: Usuario[]; // Usuários do banco de dados
  localEmail: string = ''; // Inicializado diretamente
  localSenha: string = ''; // Inicializado diretamente

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.usuariosService.getUsuario().subscribe((usuario) => {
      this.usuarios = usuario;
    });
  }

  onLogin() {
    if (!this.usuarios || this.usuarios.length === 0) {
      alert("Nenhum usuário encontrado no banco de dados.");
      return;
    }

    const usuarioEncontrado = this.usuarios.find(
      (BDUsuario) => BDUsuario.email === this.localEmail && BDUsuario.senha === this.localSenha
    );

    if (usuarioEncontrado) {
      alert(`Login realizado! Seja bem-vindo, ${usuarioEncontrado.nome}`);
      this.router.navigate(['/']);
    } else {
      alert("Login não encontrado. Verifique suas credenciais.");
    }
  }
}