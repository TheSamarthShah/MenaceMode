import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  mainItems: MenuItem[] = [];

  ngOnInit(): void {
    this.initializeMenuItems();
  }

  private initializeMenuItems(): void {
    this.mainItems = [
      { label: 'Home', icon: 'pi pi-home', routerLink: ['/'] },
      {
        label: 'Shop',
        icon: 'pi pi-shopping-bag',
        items: [
          { label: 'Men', icon: 'pi pi-male', routerLink: ['/shop/men'] },
          { label: 'Women', icon: 'pi pi-female', routerLink: ['/shop/women'] },
          { label: 'Kids', icon: 'pi pi-users', routerLink: ['/shop/kids'] },
          { separator: true },
          { label: 'New Arrivals', icon: 'pi pi-star', routerLink: ['/shop/new'] },
          { label: 'Best Sellers', icon: 'pi pi-thumbs-up', routerLink: ['/shop/best-sellers'] },
          { label: 'Sale', icon: 'pi pi-tags', routerLink: ['/shop/sale'] }
        ]
      },
      {
        label: 'Categories',
        icon: 'pi pi-th-large',
        items: [
          { label: 'Graphic Tees', icon: 'pi pi-image', routerLink: ['/category/graphic-tees'] },
          { label: 'Plain T-Shirts', icon: 'pi pi-circle', routerLink: ['/category/plain-tees'] },
          { label: 'Oversized', icon: 'pi pi-th-large', routerLink: ['/category/oversized'] },
          { label: 'V-Neck', icon: 'pi pi-check-circle', routerLink: ['/category/v-neck'] },
          { label: 'Polo T-Shirts', icon: 'pi pi-star', routerLink: ['/category/polo'] }
        ]
      },
      { label: 'Customize', icon: 'pi pi-palette', routerLink: ['/customize'] },
      {
        label: 'Account',
        icon: 'pi pi-user',
        items: [
          { label: 'Login', icon: 'pi pi-sign-in', routerLink: ['/login'] },
          { label: 'Register', icon: 'pi pi-user-plus', routerLink: ['/register'] },
          { label: 'Orders', icon: 'pi pi-box', routerLink: ['/orders'] },
          { label: 'Wishlist', icon: 'pi pi-heart', routerLink: ['/wishlist'] }
        ]
      },
      { 
        label: 'Contact Us', 
        icon: 'pi pi-envelope', 
        routerLink: ['/contact']
      },
      { 
        label: 'Cart', 
        icon: 'pi pi-shopping-cart', 
        routerLink: ['/cart'],
        styleClass: 'cart-menu'
      }
    ];
  }
}