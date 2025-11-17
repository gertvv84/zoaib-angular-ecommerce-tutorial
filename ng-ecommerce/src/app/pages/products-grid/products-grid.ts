import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';
import { MatNavList, MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, 
    MatSidenav, MatSidenavContainer, MatSidenavContent, MatNavList, MatListItem, 
    RouterLink,
    TitleCasePipe],
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened="true">
        <div class="p-6">
          <h2 class="text-lg text-gray-900">Categories</h2>
          <mat-nav-list>
            @for(cat of categories(); track cat){
              <mat-list-item [activated]="cat === store.category()" class="my-2" [routerLink]="['/products', cat]">
                <span matListItemTitle class="font-medium" [class]="cat === store.category() ? 'text-white' : null">
                  {{cat | titlecase}}
                </span>
              </mat-list-item>
            }
          </mat-nav-list>
        </div>
      </mat-sidenav>
      <mat-sidenav-content class="bg-gray-100 p-6 h-full">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">{{ category() | titlecase}}</h1>
        <p class="text-base text-gray-600 mb-6">
          {{ store.filteredProducts().length}} products found.
        </p>
        <div class="responsive-grid">
          @for(product of store.filteredProducts(); track product.id){
            <app-product-card [product] = "product"/>
          } 
        </div>       
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: ``,
})
export default class ProductsGrid {
  // Categorielijst (getoond in sidenav)
  categories = signal<string[]>(['all', 'electronics', 'sports', 'clothing', 'accessories', 'decoration', 'books']);


  store = inject(EcommerceStore);


  // !!!! Onderstaande code is vervangen door signalStore (zie ecommerce-store.ts) !!!!

  // Zoekcriteria (signal)
    category = input<string>('all');

    constructor() {
      this.store.setCategory(this.category);
    }

  // Volledige productlijst (signal)
  /*products = signal<Product[]>([
      {
    id: "prod-001",
    name: "Wireless Bluetooth Headphones",
    description: "Noise-cancelling over-ear headphones with 30h battery life",
    price: 129.99,
    imageUrl: "/images/headphones.jpeg",
    rating: 4.5,
    reviewCount: 342,
    inStock: true,
    category: "Electronics"
  },
  {
    id: "prod-002",
    name: "Stainless Steel Water Bottle",
    description: "1L insulated water bottle, keeps drinks cold for 24h or hot for 12h",
    price: 24.99,
    imageUrl: "/images/waterfles.jpg",
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    category: "Sports"
  },
  {
    id: "prod-003",
    name: "Organic Cotton T-Shirt",
    description: "Comfortable unisex t-shirt made from 100% organic cotton",
    price: 19.99,
    imageUrl: "/images/tshirt.jpg",
    rating: 4.3,
    reviewCount: 89,
    inStock: true,
    category: "Clothing"
  },
  {
    id: "prod-004",
    name: "Smart Fitness Watch",
    description: "Track heart rate, sleep, and workouts with GPS connectivity",
    price: 199.99,
    imageUrl: "/images/watch.jpeg",
    rating: 4.6,
    reviewCount: 278,
    inStock: false,
    category: "Electronics"
  },
  {
    id: "prod-005",
    name: "Ceramic Coffee Mug Set",
    description: "Set of 4 handmade ceramic mugs in assorted colors",
    price: 34.99,
    imageUrl: "/images/mug.jpeg",
    rating: 4.4,
    reviewCount: 67,
    inStock: true,
    category: "Decoration"
  },
  {
    id: "prod-006",
    name: "Programming Book: TypeScript Basics",
    description: "Comprehensive guide to TypeScript for modern web development",
    price: 39.99,
    imageUrl: "/images/book.jpeg",
    rating: 4.7,
    reviewCount: 124,
    inStock: true,
    category: "Books"
  },
  {
    id: "prod-007",
    name: "Yoga Mat Premium",
    description: "Non-slip eco-friendly yoga mat with carrying strap",
    price: 45.99,
    imageUrl: "/images/yoga-mat.jpg",
    rating: 4.2,
    reviewCount: 203,
    inStock: true,
    category: "Sports"
  },
  {
    id: "prod-008",
    name: "Wireless Phone Charger",
    description: "Fast-charging Qi wireless charger with LED indicator",
    price: 29.99,
    imageUrl: "/images/wireless-charger.jpg",
    rating: 4.0,
    reviewCount: 178,
    inStock: true,
    category: "Electronics"
  },
  {
    id: "prod-009",
    name: "Desk Lamp with USB Ports",
    description: "Adjustable LED desk lamp with 3 USB charging ports",
    price: 49.99,
    imageUrl: "/images/desk-lamp.jpg",
    rating: 4.5,
    reviewCount: 95,
    inStock: false,
    category: "Decoration"
  },
  {
    id: "prod-010",
    name: "Backpack Laptop",
    description: "Water-resistant backpack with dedicated laptop compartment",
    price: 79.99,
    imageUrl: "/images/backpack.jpg",
    rating: 4.6,
    reviewCount: 312,
    inStock: true,
    category: "Accessories"
  }
  ]);*/

  // Gefilterde lijst = compute op basis van signals category en products.
  // Zal steeds wijzigen wanneer één van deze 2 signals verandert.
  /*filteredProducts = computed(() => {
    if(this.category() === "all"){
      return this.products();
    }else{
      return this.products().filter((p) => p.category.toLowerCase() === this.category().toLowerCase())
    }
  });*/


}
