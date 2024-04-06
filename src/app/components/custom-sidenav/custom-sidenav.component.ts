import { Component, Input, computed, signal } from '@angular/core';

export type MenuItem ={
  icon: string;
  label : string;
  route : string; 
}

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val : boolean){
    this.sideNavCollapsed.set(val)
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'category',
      label : 'Fammile Produit',
      route : 'famille-produit'
    },
    {
      icon: 'inventory_2',
      label : 'Produit',
      route : 'produit'
    },
    {
      icon: 'south',
      label : 'Bon d\'entrer',
      route : 'bent'
    },
    {
      icon: 'north_east',
      label : 'Bon de sortie',
      route : 'bs'
    },

  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '33' : '100');
}
