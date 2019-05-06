(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: black;\r\n    height: 100px;\r\n    align-items: center;\r\n}\r\na {\r\n    color: white;\r\n    font-size: 20px;\r\n    font-family: 'Times New Roman';\r\n}\r\n#mudar {\r\n    color: white;\r\n    font-size: 25px;\r\n    font-family: 'Times New Roman';\r\n    font-weight: 100;\r\n}\r\nh2 {\r\n    font-family: 'Times New Roman';\r\n}\r\nh3 {\r\n    font-family: 'Times New Roman';\r\n}\r\nbutton {\r\n    font-family: 'Times New Roman';\r\n}\r\nth {\r\n    font-family: 'Times New Roman';\r\n}\r\ntd {\r\n    font-family: 'Times New Roman';\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xyXG59XHJcbiNtdWRhciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcbmgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJztcclxufVxyXG5oMyB7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJztcclxufVxyXG50aCB7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XHJcbn1cclxudGQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <nav class=\"nav nav-pills nav-justified\">\n    <a id=\"mudar\" class=\"nav-item nav-link\">Gerenciador<br> de Noticias</a>\n    <a class=\"nav-item nav-link\" href=\"#Inicial\" (click)=\"irPara('inicial')\">Inicial</a>\n    <a class=\"nav-item nav-link\" href=\"#Cadastrar\" (click)=\"irPara('cadastrar')\">Cadastrar</a>\n    <a class=\"nav-item nav-link\" href=\"#Publicar\" (click)=\"irPara('publicar')\">Publicar</a>\n    <a class=\"nav-item nav-link\" href=\"#Estatísticas\" (click)=\"irPara('estatisticas')\">Estatísticas</a>\n  </nav>\n\n  <div *ngIf=\"tela == 'inicial'\">\n    <h2>Gerenciador de Noticias</h2>\n    <div *ngFor=\"let noticia of service.listaDeNoticias()\">\n      <div *ngIf=\"noticia.publicar\">\n        <li>\n          {{ noticia.noticia }}\n          <button class=\"btn btn-success\" (click)=\"visualizar(noticia)\">Ver</button>\n        </li>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"tela == 'cadastrar'\">\n    <form #formcadastrar=\"ngForm\">\n      <h2><i class=\"fa fa-plus-circle\"> Cadastrar Notícia</i></h2>\n      <div class=\"form-group\">\n        <label for=\"autor\">Autor</label>\n        <select class=\"form-control\" name=\"autor\" id=\"autor\" [(ngModel)]=\"autor\" required>\n          <option value=\"\" selected disabled>Selecione um Autor</option>\n          <option *ngFor=\"let autor of service.listaDeAutores()\">{{ autor }}</option>\n        </select>\n        <br>\n        <label for=\"noticia\">Noticia</label>\n        <textarea type=\"text\" class=\"form-control\" id=\"noticia\" name=\"noticia\" rows=\"5\" placeholder=\"Noticia\" [(ngModel)]=\"noticia\" required></textarea>\n      </div>\n      <button class=\"btn btn-primary\" (click)=\"salvar('publicar')\" [disabled]=\"!formcadastrar.form.valid\">\n        <i class=\"fa fa-save\"> Salvar</i>\n      </button>\n      <button type=\"reset\" class=\"btn btn-secondary\">Limpar</button>\n    </form>\n  </div>\n\n  <div *ngIf=\"tela == 'publicar'\">\n    <h2>Publicar Noticia</h2>\n    <div *ngFor=\"let noticia of service.listaDeNoticias()\">\n      <div *ngIf=\"noticia.publicar == false\">\n        <li>\n          {{ noticia.noticia }}\n          <button class=\"btn btn-success\" (click)=\"publicarNoticia(noticia)\">Publicar</button>\n        </li>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"tela == 'visualizar'\">\n    <h3>Autor</h3>\n    {{ service.noticia.autor }}\n    <h3>Noticia</h3>\n    {{ service.noticia.noticia }}\n  </div>\n\n  <div *ngIf=\"tela == 'estatisticas'\">\n    <h2>Estatísticas das Noticias</h2>\n    <table class=\"table table-bordered table-sm\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Autor</th>\n          <th scope=\"col\">Quantidade de Noticias Publicadas</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let estatistica of service.noticiasPorAutor()\">\n          <td>{{ estatistica.autor }}</td>\n          <td>{{ estatistica.valor }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <table class=\"table table-bordered table-sm\">\n      <thead class=\"table-dark\">\n        <tr>\n          <th scope=\"col\">Autor que mais publica</th>\n        </tr>\n      </thead>\n      <tbody>\n        <td>{{ service.AutorMaisPublicou() }}</td>\n      </tbody>\n    </table>\n    <table class=\"table table-bordered table-sm\">\n      <thead class=\"table-dark\">\n        <tr>\n          <th scope=\"col\">Views</th>\n          <th scope=\"col\">Noticia</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let noticia of service.quatidadeDeViews()\">\n          <td *ngIf=\"noticia.publicar == true\">{{ noticia.views }}</td>\n          <td *ngIf=\"noticia.publicar == true\">{{ noticia.noticia }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servico_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servico.service */ "./src/app/servico.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.tela = 'inicial';
        this.autor = '';
        this.noticia = '';
        this.publicar = false;
    }
    AppComponent.prototype.irPara = function (valor) {
        this.tela = valor;
    };
    AppComponent.prototype.salvar = function (valor) {
        this.service.salvarNoticia(this.autor, this.noticia, this.publicar);
        this.tela = valor;
        this.autor = '';
        this.noticia = '';
    };
    AppComponent.prototype.publicarNoticia = function (valor) {
        this.service.publicarNoticia(valor);
    };
    AppComponent.prototype.visualizar = function (valor) {
        this.service.visualizar(valor);
        this.tela = 'visualizar';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servico_service__WEBPACK_IMPORTED_MODULE_2__["ServicoService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/servico.service.ts":
/*!************************************!*\
  !*** ./src/app/servico.service.ts ***!
  \************************************/
/*! exports provided: ServicoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoService", function() { return ServicoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicoService = /** @class */ (function () {
    function ServicoService() {
        this.autor = [
            'Angela',
            'Antonio',
            'João',
            'Marcos',
            'Anonimo'
        ];
        this.dados = [];
        this.noticia = {};
    }
    ServicoService.prototype.listaDeAutores = function () {
        return this.autor;
    };
    ServicoService.prototype.listaDeNoticias = function () {
        return this.dados;
    };
    ServicoService.prototype.salvarNoticia = function (autor, noticia, publicar) {
        var n = {
            'id': Math.random(),
            'autor': autor,
            'noticia': noticia,
            'publicar': publicar,
            'views': 0
        };
        this.dados.push(n);
    };
    ServicoService.prototype.publicarNoticia = function (valor) {
        for (var _i = 0, _a = this.dados; _i < _a.length; _i++) {
            var dado = _a[_i];
            if (dado.id === valor.id) {
                dado.publicar = true;
            }
        }
    };
    ServicoService.prototype.visualizar = function (valor) {
        for (var _i = 0, _a = this.dados; _i < _a.length; _i++) {
            var dado = _a[_i];
            if (dado.id === valor.id) {
                dado.views++;
                this.noticia = {
                    'autor': dado.autor,
                    'noticia': dado.noticia
                };
            }
        }
    };
    ServicoService.prototype.noticiasPorAutor = function () {
        var estatisticas = [];
        var aux = {};
        for (var _i = 0, _a = this.autor; _i < _a.length; _i++) {
            var x = _a[_i];
            aux[x] = estatisticas.length;
            estatisticas.push({ autor: x, valor: 0 });
        }
        for (var _b = 0, _c = this.dados; _b < _c.length; _b++) {
            var y = _c[_b];
            if (y.publicar === true) {
                estatisticas[aux[y.autor]].valor++;
            }
        }
        return estatisticas;
    };
    ServicoService.prototype.AutorMaisPublicou = function () {
        var nome = '';
        var qt = 0;
        for (var _i = 0, _a = this.noticiasPorAutor(); _i < _a.length; _i++) {
            var x = _a[_i];
            if (x.valor > qt) {
                nome = x.autor;
                qt = x.valor;
            }
        }
        return nome;
    };
    ServicoService.prototype.quatidadeDeViews = function () {
        return this.dados.sort(function (a, b) { return b.views - a.views; });
    };
    ServicoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicoService);
    return ServicoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\123270810\noticias\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map