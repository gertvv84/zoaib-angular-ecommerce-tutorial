import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard],
  template: `
    <div class="bg-gray-100 p-6 h-full">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">{{ category()}}</h1>
      <div class="responsive-grid">
        @for(product of filteredProducts(); track product.id){
          <app-product-card [product] = "product"/>
        } 
      </div>
    </div>
  `,
  styles: ``,
})
export default class ProductsGrid {

  // Zoekcriteria (signal)
  category = input<string>('all');

  // Volledige productlijst (signal)
  products = signal<Product[]>([
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
    category: "SportsAndOutdoors"
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
    category: "Home & Kitchen"
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
    category: "Sports & Outdoors"
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
    category: "Home & Kitchen"
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
  ]);

  // Gefilterde lijst = compute op basis van signals category en products.
  // Zal steeds wijzigen wanneer één van deze 2 signals verandert.
  filteredProducts = computed(() => {
    if(this.category() === "all"){
      return this.products();
    }else{
      return this.products().filter((p) => p.category.toLowerCase() === this.category().toLowerCase())
    }
  });


}
