import { RouterConfig, provideRouter } from '@angular/router';
import { ShoppingListComponent } from './shoppinglists/shoppinglists';
import { RecipesComponent } from './recipes/recipes';

const routes: RouterConfig = [
    { path: '', component: ShoppingListComponent }, 
    {path: 'shoppinglists', component: ShoppingListComponent},
    {path: 'recipes', component: RecipesComponent}
];

export const appRouterProviders = [
  provideRouter(routes)
];