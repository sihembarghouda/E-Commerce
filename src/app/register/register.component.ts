import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    // Propriétés pour lier les champs du formulaire
    name: string = '';
    prenom: string = '';
    email: string = '';
    password: string = '';
    city: string = '';


  // Fonction de soumission du formulaire
  onSubmit(): void {
    if (this.name && this.prenom && this.email && this.password && this.city) {
      // Logique de soumission
      console.log('Inscription réussie:', {
        name: this.name,
        prenom: this.prenom,
        email: this.email,
        password: this.password,
        city: this.city
      });
      // Ajouter ici la logique pour enregistrer l'utilisateur (ex. appel API)
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

}
