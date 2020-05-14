import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class ProductListPageService {

  constructor() { }
  baseURL = 'https://my-json-server.typicode.com/iuriifaevskii/my-json-server/posts';

  fetchProducts(): Promise<any> {
    return fetch(this.baseURL)
      .then(res => res.json());
  }

  deleteProduct(productID): Promise<any> {
    return fetch(`${this.baseURL}/${productID}`, {
      method: 'DELETE'
    })
    .then(response => response.status)
  }

  createProduct(title, body, userId = 1): Promise<any> {
    return fetch(this.baseURL, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId
      }),
    })
    .then(response => response.json())
  }
}