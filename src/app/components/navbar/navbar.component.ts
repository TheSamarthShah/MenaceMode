import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
    this.initializeMenuItems();
  }

  private initializeMenuItems(): void {
    /*this.mainItems.set([
      {
        label: 'Apparel',
        items: [
          [
            {
              label: 'Men',
              items: [
                { label: 'Graphic Tees' },
                { label: 'Oversized Tees' },
                { label: 'Hoodies' },
                { label: 'Joggers' },
                { label: 'Denim' }
              ]
            }
          ],
          [
            {
              label: 'Women',
              items: [
                { label: 'Cropped Tees' },
                { label: 'Oversized Tees' },
                { label: 'Hoodies' },
                { label: 'Leggings' },
                { label: 'Denim' }
              ]
            }
          ]
        ]
      },
      {
        label: 'Statement Pieces',
        items: [
          [
            {
              label: 'Outerwear',
              items: [
                { label: 'Bomber Jackets' },
                { label: 'Denim Jackets' },
                { label: 'Windbreakers' }
              ]
            }
          ],
          [
            {
              label: 'Limited Editions',
              items: [
                { label: 'Artist Collabs' },
                { label: 'Drops' },
                { label: 'Numbered Tees' }
              ]
            }
          ],
          [
            {
              label: 'Wearables',
              items: [
                { label: 'Caps & Beanies' },
                { label: 'Chains & Rings' },
                { label: 'Watches' }
              ]
            }
          ],
          [
            {
              label: 'Carriers',
              items: [
                { label: 'Crossbody Bags' },
                { label: 'Backpacks' },
                { label: 'Tote Bags' }
              ]
            }
          ]
        ]
      },
      {
        label: 'Gadget Accessories',
        items: [
          [
            {
              label: 'Tech Essentials',
              items: [
                { label: 'Phone Cases' },
                { label: 'Laptop Sleeves' },
                { label: 'Smart Bracelets' }
              ]
            }
          ]
        ]
      },
      {
        label: 'Others',
        items: [
          [
            {
              label: 'Lifestyle',
              items: [
                { label: 'Reusable Bottles' },
                { label: 'Notebooks' },
                { label: 'Wall Posters' }
              ]
            }
          ],
          [
            {
              label: 'Extras',
              items: [
                { label: 'Stickers' },
                { label: 'Patches' },
                { label: 'Gift Cards' }
              ]
            }
          ]
        ]
      }
    ]);*/
    
    
  }
}
