import { Component } from '@angular/core';

interface ShoesItem {
  name: string;
  price: number;
  image: string;
  selected: boolean;
  showSizes?: boolean; // Propriété optionnelle pour l'affichage des tailles
}
@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent {
  shoes:ShoesItem[]=[
    {
      name: 'Bottine',
      price: 60,
      image: 'assets/images/bottine.jpg',
      selected:false,
    },
    {
      name: 'Caterpillar',
      price: 70,
      image: 'assets/images/cat.jpg',
      selected:false,
    },
    {
      name: 'Sandelle Talon',
      price: 80,
      image: 'assets/images/talon.jpg',
      selected:false,
    },
    {
      name: 'Sandelle Componsée',
      price: 90,
      image: 'assets/images/compense.jpg',
      selected:false,
    },
    {
      name: 'Talon Zara',
      price: 100,
      image: 'assets/images/soiree.jpg',
      selected:false,
    },
    {
      name: 'Basket NIke',
      price: 110,
      image: 'assets/images/basket.jpg',
      selected:false,
    },
    {
      name: 'Vans old school',
      price: 120,
      image: 'assets/images/vans1.png',
      selected:false,
    },
    {
      name: 'Jordan',
      price: 130,
      image: 'assets/images/jordan.jpg',
      selected:false,
    },
    {
      name: 'Asics',
      price: 140,
      image: 'assets/images/asics.png',
      selected:false,
    },
    {
      name: 'Adidas',
      price: 150,
      image: 'assets/images/adidas.png',
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
  selectedItem: ShoesItem|null = null;

  // Méthode pour définir l'article sélectionné
  selectItem(item: any): void {
    this.selectedItem = item;
  }

  orderItem(item: any): void {
    // Si la propriété 'showSizes' n'existe pas, on l'ajoute avec la valeur false
    if (!item.hasOwnProperty('showSizes')) {
      item.showSizes = false;
    }
    // On inverse l'état de 'showSizes' pour afficher/masquer les tailles
    item.showSizes = !item.showSizes;

    // Logique pour afficher la commande
    console.log('Commande passée pour :', item.name);
  }
}