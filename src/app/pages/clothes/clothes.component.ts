
import { Component } from '@angular/core';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent {
  clothes = [
    {
      name: 'T-shirt blanc',
      price: 19.99,
      image: 'assets/images/tshirt-blanc.jpg'
    },
    {
      name: 'Jean bleu',
      price: 39.99,
      image: 'assets/images/jean-bleu.jpg'
    },
    {
      name: 'Robe d\'été',
      price: 49.99,
      image: 'assets/images/robe-ete.jpg'
    }
  ];

  orderItem(item: any) {
    console.log('Commande passée pour:', item.name);
    // Logique supplémentaire pour le traitement de la commande
  }
}
