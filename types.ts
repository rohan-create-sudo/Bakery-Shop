
export interface Product {
  id: string;
  name: string;
  category: 'Cakes' | 'Pastries' | 'Donuts' | 'Cookies';
  price: string;
  image: string;
  tags: string[];
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  color: string;
}
