import { Component, OnInit } from '@angular/core';
import { ShoppingListService} from './shoppinglist.service';
import { ShoppingList } from './shoppinglist';

import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'my-shoppinglists',
    templateUrl: 'app/shoppinglists/shoppinglists.component.html',
    providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit{
    
    shoppingLists: ShoppingList[];
    error: any;

    constructor(private _shoppingListService: ShoppingListService) {
        
    }

    ngOnInit(){
        this.shoppingLists = [];
        this._shoppingListService
            .getShoppingLists()
            .then(shoppingLists => {
                this.shoppingLists = shoppingLists
            })
            .catch(error => this.error = error);
    }
}