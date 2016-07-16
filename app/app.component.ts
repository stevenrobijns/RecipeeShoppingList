
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { ShoppingListComponent } from './shoppinglists/shoppinglists';
import { RecipesComponent } from './recipes/recipes';

@Component({
    selector:'my-app',
	templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    precompile: [ShoppingListComponent, RecipesComponent]
})

export class AppComponent {
    public menuItems = [ 
        {caption: 'Shoppinglists', link: ['Shoppinglists']},
        {caption: 'Recipes', link: ['Recipes']}
    ];
}