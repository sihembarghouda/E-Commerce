import { Component } from '@angular/core';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class bagsComponent {
  bags = [
    {
      name: 'Guess',
      price: 200,
      image: 'assets/images/guess.jpg',
      selected:false,
    },
    {
      name: 'Tommy',
      price: 139,
      image: 'assets/images/Tommy.jpg',
      selected:false,
    },
    {
      name: 'Carpisa',
      price: 149,
      image: 'assets/images/carpisa.jpg',
      selected:false,
    },
    {
      name: 'ZARA',
      price: 99,
      image: 'assets/images/zara.jpg',
      selected:false,
    },
    {
      name: 'Parfois',
      price: 200,
      image: 'assets/images/parfois.jpg',
      selected:false,
    },
    {
      name: 'Coach',
      price: 50,
      image: 'assets/images/coach.png',
      selected:false,
    },
    {
      name: 'Nike',
      price: 40,
      image: 'assets/images/nike.jpg',
      selected:false,
    },
    {
      name: 'Adidas',
      price: 25,
      image: 'assets/images/adidas1.png',
      selected:false,
    },
    {
      name: 'Michael Kors',
      price: 250,
      image: 'assets/images/kors.png',
      selected:false,
    },
    {
      name: 'Louis Vuitton',
      price: 80,
      image: 'assets/images/luis.png',
      selected:false,
    },
    
   
  ];

  toggleSelectItem(item: any) {
    if (!item.hasOwnProperty('selected')) {
      item.selected = false; // Ajoute la propriété si elle n'existe pas
    }
    item.selected = !item.selected; // Inverse l'état
  }
  // Propriété pour stocker l'article sélectionné
  selectedItem: any = null;

  // Méthode pour définir l'article sélectionné
  selectItem(item: any): void {
    this.selectedItem = item;
  }

  orderItem(item: any): void {
    console.log('Commande passée pour :', item.name);
    // Logique supplémentaire pour le traitement de la commande
  }
}