import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class ProductListService {

  constructor() { }
  baseURL = 'https://my-json-server.typicode.com/iuriifaevskii/my-json-server/posts';

  fetchProducts(): Promise<object[]> {
    return fetch(this.baseURL)
      .then(res => res.json());
  }

  deleteProduct(productID): Promise<Number> {
    return fetch(`${this.baseURL}/${productID}`, {
      method: 'DELETE'
    })
    .then(response => response.status)
  }

  createProduct(title, body, userId = 999): Promise<Number> {
    return fetch(this.baseURL, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId
      }),
    })
    .then(response => response.status)
  }
}