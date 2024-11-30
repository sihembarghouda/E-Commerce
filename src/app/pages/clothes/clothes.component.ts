
import { Component } from '@angular/core';
interface ClothesItem {
  name: string;
  price: number;
  image: string;
  selected: boolean;
  showSizes?: boolean; // Propriété optionnelle pour les tailles
}

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent {
  clothes : ClothesItem[]= [
    {
      name: 'T-shirt blanc',
      price: 20,
      image: 'assets/images/tshirt-blanc.jpg',
      selected:false,
    },
    {
      name: 'Jean bleu',
      price: 39,
      image: 'assets/images/jean-bleu.jpg',
      selected:false,
    },
    {
      name: 'Robe été',
      price: 49,
      image: 'assets/images/robe-ete.jpg',
      selected:false,
    },
    {
      name: 'TOP Shirt',
      price: 99,
      image: 'assets/images/topshirt.jpg',
      selected:false,
    },
    {
      name: 'Coat',
      price: 200,
      image: 'assets/images/coat-zara.jpg',
      selected:false,
    },
    {
      name: 'Trench',
      price: 50,
      image: 'assets/images/trench.jpg',
      selected:false,
    },
    {
      name: 'Capuche femme',
      price: 40,
      image: 'assets/images/capuche.jpg',
      selected:false,
    },
    {
      name: 'Coll montant',
      price: 25,
      image: 'assets/images/col.jpg',
      selected:false,
    },
    {
      name: 'Doudoune',
      price: 250,
      image: 'assets/images/doudoune.jpg',
      selected:false,
    },
    {
      name: 'Jupe Cuir',
      price: 80,
      image: 'assets/images/jupe.png',
      selected: false,
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
    // Afficher ou masquer les tailles disponibles
    if (!item.hasOwnProperty('showSizes')) {
      item.showSizes = false; // Initialise la propriété si elle n'existe pas
    }
    item.showSizes = !item.showSizes; // Basculer l'état de l'affichage des tailles
  
    // Logique pour afficher la commande
    console.log('Commande passée pour :', item.name);
    // Logique supplémentaire pour le traitement de la commande (par exemple, ajout au panier)
  }}
