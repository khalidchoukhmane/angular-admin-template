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
      icon: 'dashboard',
      label : 'Dashboard',
      route : 'dashboard'
    },
    {
      icon: 'video_library',
      label : 'content',
      route : 'content'
    },
    {
      icon: 'analytics',
      label : 'Analytics',
      route : 'analytics'
    },
    {
      icon: 'comment',
      label : 'Comments',
      route : 'comments'
    },

  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '33' : '100');
}
