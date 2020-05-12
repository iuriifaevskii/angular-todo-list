import { Injectable } from '@angular/core';

import products from './products';

@Injectable({
    providedIn: 'root',
})

export class ProductListService {

  constructor() { }

  fetchProducts(): Promise<object[]> {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json());
  }

}