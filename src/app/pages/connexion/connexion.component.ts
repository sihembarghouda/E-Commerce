import { Component } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  loginEmail: string = '';
  loginPassword: string = '';

  // Validation du formulaire de connexion
  validateLoginForm() {
    if (!this.loginEmail || !this.loginPassword) {
      alert('Veuillez remplir tous les champs du formulaire de connexion.');
    } else {
      // Soumettre le formulaire ou envoyer les données
      console.log('Formulaire de connexion soumis', this.loginEmail, this.loginPassword);
    }
  }


}
