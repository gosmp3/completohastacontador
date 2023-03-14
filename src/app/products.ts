export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  quantity: number;
}
export interface CartProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  quantity: number;
}
export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    images: ['uno.jpg'],
    quantity: 0
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    images: ['dos.jpeg'],
    quantity: 0
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Chinga tu madre',
    images: ['tres.jpeg'],
    quantity: 0
  },
  {
    id: 4,
    name: 'Motorolla',
    price: 899,
    description: 'Chinga tu madre',
    images: ['cuatro.jpeg'],
    quantity: 0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/