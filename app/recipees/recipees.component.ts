import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

// import { CharacterComponent } from './character.component';
// import { CharacterListComponent } from './character-list.component';
// import { CharacterService } from './character.service';

@Component({
  selector: 'recipees-root',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'Recipees', component: RecipeeListComponent, useAsDefault: true },
	{ path: '/list/:id', name: 'Recipees', component: RecipeeListComponent	},
	{ path: '/:id', name: 'Recipee', component: RecipeeComponent }
])
export class CharactersComponent { }
