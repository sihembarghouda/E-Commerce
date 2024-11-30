import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  itemName: string = '';
  itemPrice: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupérer les paramètres envoyés depuis la page précédente
    this.itemName = this.route.snapshot.queryParamMap.get('name') || '';
    this.itemPrice = parseFloat(this.route.snapshot.queryParamMap.get('price') || '0');
  }

  submitOrder(form: any) {
    console.log('Formulaire soumis :', form.value);
    alert('Commande passée avec succès !');
  }
}
