
import { Product, Testimonial } from './types';

export const COLORS = {
  cream: '#FFFDF5',
  blush: '#FFD1DC',
  mint: '#E0F2F1',
  berry: '#E91E63',
  mango: '#FFB74D',
  pistachio: '#C5E1A5',
  vanilla: '#FDF5E6'
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Strawberry Cloud Cake',
    category: 'Cakes',
    price: '$45.00',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800',
    tags: ['Best Seller', 'Fruity'],
    description: 'Light vanilla sponge layered with fresh cream and organic strawberries.'
  },
  {
    id: '2',
    name: 'Pistachio Dream',
    category: 'Pastries',
    price: '$6.50',
    image: 'https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?auto=format&fit=crop&q=80&w=800',
    tags: ['Premium', 'Nutty'],
    description: 'Crispy flaky crust filled with roasted pistachio cream.'
  },
  {
    id: '3',
    name: 'Mango Mochi Donut',
    category: 'Donuts',
    price: '$4.25',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
    tags: ['Chewy', 'Tropical'],
    description: 'Chewy mochi base with a vibrant Alphonso mango glaze.'
  },
  {
    id: '4',
    name: 'Velvet Rose Macarons',
    category: 'Pastries',
    price: '$12.00',
    image: 'https://images.unsplash.com/photo-1569864358642-9d16197022c3?auto=format&fit=crop&q=80&w=800',
    tags: ['Elegant', 'Floral'],
    description: 'Box of 6 delicate rose-infused macarons.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Bennett",
    role: "Birthday Hostess",
    content: "The Strawberry Cloud cake was the star of the show. It literally felt like eating a cloud!",
    avatar: "https://picsum.photos/seed/sophie/100",
    color: "bg-pink-100"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Pastry Enthusiast",
    content: "Hands down the best pastries in town. That pistachio filling is to die for.",
    avatar: "https://picsum.photos/seed/james/100",
    color: "bg-blue-100"
  },
  {
    id: 3,
    name: "Aria Chen",
    role: "Food Photographer",
    content: "Not only delicious but visually stunning. Every crumb is a work of art!",
    avatar: "https://picsum.photos/seed/aria/100",
    color: "bg-yellow-100"
  }
];
