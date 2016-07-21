import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ShoppingList } from './shoppinglist.ts';

@Injectable()
export class ShoppingListService{
    private shoppingListsUrl = 'app/shoppingLists'
    
    constructor(private http:Http){

    }

    getShoppingLists(): Promise<ShoppingList[]>  {
        return this.http.get(this.shoppingListsUrl)
                .toPromise()
                .then(response => {
                    return response.json().data
                })
                .catch(this.handleError);  
    }

    private handleError(error: any){
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}