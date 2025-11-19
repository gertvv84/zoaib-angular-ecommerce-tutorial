import { Component, computed, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Product } from '../../models/product';
import { EcommerceStore } from '../../ecommerce-store';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIconButton, MatIcon],
  template: `
        <button
          class="!absolute z-10 top-3 right-3 w-10 h-10 rounded-full !bg-white border-0 shadow-md flex items-center justifiy-center cursor-pointer transition-all duration-200 hover: scale-110 hover:shadow-lg"
          [class]= "isInWishlist() ? '!text-red-500' : '!text-gray-400'"
          matIconButton
          (click)="toggleWishlist(product())"
        >
          <mat-icon>{{ isInWishlist() ? 'favorite' : 'favorite_border' }}</mat-icon>
        </button>
  `,
  styles: ``,
})
export class ToggleWishlistButton {
  store = inject(EcommerceStore);

  product = input.required<Product>();

  isInWishlist = computed(() => this.store.wishlistItems().find(p => p.id === this.product().id))

  toggleWishlist(product: Product) {
    if(this.isInWishlist()){
      // Remove from wishlist
      this.store.removeFromWishlist(product);
    }else{
      // Add to wishlist
      this.store.addToWishlist(product);
    }
    
  }

}
