import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

// import { CharacterComponent } from './character.component';
// import { CharacterListComponent } from './character-list.component';
// import { CharacterService } from './character.service';

@Component({
  selector: 'recipes-root',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'Recipes', component: RecipeListComponent, useAsDefault: true },
	{ path: '/list/:id', name: 'Recipes', component: RecipeListComponent	},
	{ path: '/:id', name: 'Recipe', component: RecipeComponent }
])
export class CharactersComponent { }
