System.register(['angular2/core', 'angular2/http', 'angular2/router', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {}],
        execute: function() {
            // import { DashboardComponent } from './dashboard/dashboard';
            // import { VehiclesComponent } from './vehicles/vehicles';
            // import { CONFIG, MessageService } from './shared/shared';
            // import { EntityService, ExceptionService, ModalComponent, ModalService, SpinnerComponent, SpinnerService, ToastComponent, ToastService } from './blocks/blocks';
            let AppComponent = class AppComponent {
                constructor(_messageService, _modalService) {
                    this._messageService = _messageService;
                    this._modalService = _modalService;
                    this.menuItems = [
                        { caption: 'Dashboard', link: ['Dashboard'] },
                        { caption: 'Characters', link: ['Characters'] },
                        { caption: 'Vehicles', link: ['Vehicles'] }
                    ];
                }
                resetDb() {
                    let msg = 'Are you sure you want to reset the database?';
                    this._modalService.activate(msg).then(responseOK => {
                        if (responseOK) {
                            this._messageService.resetDb();
                        }
                    });
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'recipe-shopping-app',
                    templateUrl: 'app/app.component.html',
                    styleUrls: ['app/app.component.css'],
                    directives: [router_1.ROUTER_DIRECTIVES, ModalComponent, SpinnerComponent, ToastComponent],
                    providers: [
                        http_1.HTTP_PROVIDERS,
                        core_1.provide(http_1.XHRBackend, { useClass: InMemoryBackendService }),
                        core_1.provide(SEED_DATA, { useClass: InMemoryStoryService }),
                        core_1.provide(InMemoryBackendConfig, { useValue: { delay: 600 } }),
                        router_1.ROUTER_PROVIDERS,
                        CharacterService,
                        EntityService,
                        ExceptionService,
                        MessageService,
                        ModalService,
                        SpinnerService,
                        ToastService
                    ]
                }),
                router_1.RouteConfig([
                    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
                    { path: '/vehicles/...', name: 'Vehicles', component: VehiclesComponent },
                    { path: '/characters/...', name: 'Characters', component: CharactersComponent },
                ]), 
                __metadata('design:paramtypes', [Object, Object])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map