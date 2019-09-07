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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inicial_inicial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicial/inicial.component */ "./src/app/inicial/inicial.component.ts");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var _publicar_publicar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publicar/publicar.component */ "./src/app/publicar/publicar.component.ts");
/* harmony import */ var _estatisticas_estatisticas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estatisticas/estatisticas.component */ "./src/app/estatisticas/estatisticas.component.ts");
/* harmony import */ var _autor_autor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./autor/autor.component */ "./src/app/autor/autor.component.ts");
/* harmony import */ var _ver_ver_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ver/ver.component */ "./src/app/ver/ver.component.ts");









var routes = [
    { path: '', component: _inicial_inicial_component__WEBPACK_IMPORTED_MODULE_3__["InicialComponent"] },
    { path: 'noticias', component: _inicial_inicial_component__WEBPACK_IMPORTED_MODULE_3__["InicialComponent"] },
    { path: 'noticias/cadastrar', component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["CadastroComponent"] },
    { path: 'noticias/publicar', component: _publicar_publicar_component__WEBPACK_IMPORTED_MODULE_5__["PublicarComponent"] },
    { path: 'noticias/estatisticas', component: _estatisticas_estatisticas_component__WEBPACK_IMPORTED_MODULE_6__["EstatisticasComponent"] },
    { path: 'noticias/autor/:id', component: _autor_autor_component__WEBPACK_IMPORTED_MODULE_7__["AutorComponent"] },
    { path: 'noticias/:id', component: _ver_ver_component__WEBPACK_IMPORTED_MODULE_8__["VerComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<div class=\"container-fluid\">\n\n<nav class=\"nav nav-pills nav-justified\">\n  <a id=\"mudar\" class=\"nav-item nav-link\">Gerenciador<br> de Noticias</a>\n  <a class=\"nav-item nav-link\" [routerLink]=\"['/noticias']\">Inicial</a>\n  <a class=\"nav-item nav-link\" [routerLink]=\"['/noticias/cadastrar']\">Cadastrar</a>\n  <a class=\"nav-item nav-link\" [routerLink]=\"['/noticias/publicar']\">Publicar</a>\n  <a class=\"nav-item nav-link\" [routerLink]=\"['/noticias/estatisticas']\">Estatísticas</a>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <div align='Center'>\n    <hr>\n    <small>Desenvolvedor: Aquiles Alves Barros Junior</small>\n    <br><br>\n  </div>\n</footer>\n\n</div>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _inicial_inicial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicial/inicial.component */ "./src/app/inicial/inicial.component.ts");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var _publicar_publicar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./publicar/publicar.component */ "./src/app/publicar/publicar.component.ts");
/* harmony import */ var _estatisticas_estatisticas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./estatisticas/estatisticas.component */ "./src/app/estatisticas/estatisticas.component.ts");
/* harmony import */ var _ver_ver_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ver/ver.component */ "./src/app/ver/ver.component.ts");
/* harmony import */ var _autor_autor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./autor/autor.component */ "./src/app/autor/autor.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _inicial_inicial_component__WEBPACK_IMPORTED_MODULE_6__["InicialComponent"],
                _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_7__["CadastroComponent"],
                _publicar_publicar_component__WEBPACK_IMPORTED_MODULE_8__["PublicarComponent"],
                _estatisticas_estatisticas_component__WEBPACK_IMPORTED_MODULE_9__["EstatisticasComponent"],
                _ver_ver_component__WEBPACK_IMPORTED_MODULE_10__["VerComponent"],
                _autor_autor_component__WEBPACK_IMPORTED_MODULE_11__["AutorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/autor/autor.component.css":
/*!*******************************************!*\
  !*** ./src/app/autor/autor.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dG9yL2F1dG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/autor/autor.component.html":
/*!********************************************!*\
  !*** ./src/app/autor/autor.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Noticias Publicadas por {{ id }}</h3>\n<h5>Quantidade de Noticias publicadas: {{ cont }}</h5>\n<div *ngIf=\"cont\">\n  <div *ngFor=\"let noticia of noticias\">\n      <li><a (click)=\"service.aumentarViews(noticia)\" [routerLink]=\"['/noticias', noticia.id]\">{{ noticia.titulo }}</a></li>\n  </div>\n</div>\n<div *ngIf=\"!cont\">\n  <h5>Autor não possue Noticias Publicadas</h5>\n</div>"

/***/ }),

/***/ "./src/app/autor/autor.component.ts":
/*!******************************************!*\
  !*** ./src/app/autor/autor.component.ts ***!
  \******************************************/
/*! exports provided: AutorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutorComponent", function() { return AutorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noticias.service */ "./src/app/noticias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AutorComponent = /** @class */ (function () {
    function AutorComponent(service, route) {
        this.service = service;
        this.route = route;
        this.noticias = null;
        this.id = null;
        this.cont = 0;
    }
    AutorComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.noticias = this.service.consultaAutor(this.id);
        this.cont = this.service.quatidadeDeNoticias(this.id);
    };
    AutorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autor',
            template: __webpack_require__(/*! ./autor.component.html */ "./src/app/autor/autor.component.html"),
            styles: [__webpack_require__(/*! ./autor.component.css */ "./src/app/autor/autor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AutorComponent);
    return AutorComponent;
}());



/***/ }),

/***/ "./src/app/cadastro/cadastro.component.css":
/*!*************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.html":
/*!**************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #formcadastrar=\"ngForm\">\r\n  <h2><i class=\"fa fa-plus-circle\"> Cadastrar Notícia</i></h2>\r\n  <div class=\"form-group\">\r\n    <label for=\"autor\">Autor</label>\r\n    <select class=\"form-control\" name=\"autor\" id=\"autor\" [(ngModel)]=\"autor\" required>\r\n      <option value=\"\" selected disabled>Selecione um Autor</option>\r\n      <option *ngFor=\"let autor of service.listaDeAutores()\">{{ autor }}</option>\r\n    </select>\r\n    <br>\r\n    <label for=\"titulo\">Título</label><br>\r\n    <input type=\"text\" id=\"titulo\" name=\"titulo\" placeholder=\" Título da Noticia\" [(ngModel)]=\"titulo\" required>\r\n    <br>\r\n    <label for=\"noticia\">Noticia</label>\r\n    <textarea type=\"text\" class=\"form-control\" id=\"noticia\" name=\"noticia\" rows=\"5\" placeholder=\"Noticia\" [(ngModel)]=\"noticia\"\r\n      required></textarea>\r\n  </div>\r\n  <button class=\"btn btn-primary\" (click)=\"salvar('publicar')\" [routerLink]=\"['/noticias/publicar']\" [disabled]=\"!formcadastrar.form.valid\">\r\n    <i class=\"fa fa-save\"> Salvar</i>\r\n  </button>&nbsp;\r\n  <button type=\"reset\" class=\"btn btn-secondary\">Limpar</button>\r\n</form>"

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.ts":
/*!************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.ts ***!
  \************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noticias.service */ "./src/app/noticias.service.ts");



var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(service) {
        this.service = service;
        this.autor = '';
        this.titulo = '';
        this.noticia = '';
    }
    CadastroComponent.prototype.salvar = function (valor) {
        this.service.salvarNoticia(this.autor, this.titulo, this.noticia);
        this.autor = '';
        this.titulo = '';
        this.noticia = '';
    };
    CadastroComponent.prototype.ngOnInit = function () {
    };
    CadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.component.html */ "./src/app/cadastro/cadastro.component.html"),
            styles: [__webpack_require__(/*! ./cadastro.component.css */ "./src/app/cadastro/cadastro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"]])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/estatisticas/estatisticas.component.css":
/*!*********************************************************!*\
  !*** ./src/app/estatisticas/estatisticas.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VzdGF0aXN0aWNhcy9lc3RhdGlzdGljYXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/estatisticas/estatisticas.component.html":
/*!**********************************************************!*\
  !*** ./src/app/estatisticas/estatisticas.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Estatísticas das Noticias</h2>\n<table class=\"table table-bordered table-sm\">\n    <thead class=\"thead-dark\">\n        <tr>\n            <th scope=\"col\">Autores</th>\n            <th scope=\"col\">Quantidade de Noticias Publicadas</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let estatistica of service.noticiasPorAutor()\">\n            <td><a [routerLink]=\"['/noticias/autor', estatistica.autor]\">{{ estatistica.autor }}</a></td>\n            <td>{{ estatistica.valor }}</td>\n        </tr>\n    </tbody>\n</table>\n<table class=\"table table-bordered table-sm\">\n    <thead class=\"table-dark\">\n        <tr>\n            <th scope=\"col\">Autor que mais publica</th>\n        </tr>\n    </thead>\n    <tbody>\n        <td><a [routerLink]=\"['/noticias/autor', service.AutorMaisPublicou()]\">{{ service.AutorMaisPublicou() }}</a></td>\n    </tbody>\n</table>\n<table class=\"table table-bordered table-sm\">\n    <thead class=\"table-dark\">\n        <tr>\n            <th scope=\"col\">Views</th>\n            <th scope=\"col\">Noticia</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let noticia of service.quatidadeDeViews()\">\n            <td *ngIf=\"noticia.publicar == true\">{{ noticia.views }}</td>\n            <td *ngIf=\"noticia.publicar == true\"><a (click)=\"service.aumentarViews(noticia)\" [routerLink]=\"['/noticias', noticia.id]\">{{ noticia.titulo }}</a></td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/estatisticas/estatisticas.component.ts":
/*!********************************************************!*\
  !*** ./src/app/estatisticas/estatisticas.component.ts ***!
  \********************************************************/
/*! exports provided: EstatisticasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstatisticasComponent", function() { return EstatisticasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noticias.service */ "./src/app/noticias.service.ts");



var EstatisticasComponent = /** @class */ (function () {
    function EstatisticasComponent(service) {
        this.service = service;
    }
    EstatisticasComponent.prototype.ngOnInit = function () {
    };
    EstatisticasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estatisticas',
            template: __webpack_require__(/*! ./estatisticas.component.html */ "./src/app/estatisticas/estatisticas.component.html"),
            styles: [__webpack_require__(/*! ./estatisticas.component.css */ "./src/app/estatisticas/estatisticas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"]])
    ], EstatisticasComponent);
    return EstatisticasComponent;
}());



/***/ }),

/***/ "./src/app/inicial/inicial.component.css":
/*!***********************************************!*\
  !*** ./src/app/inicial/inicial.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaWNpYWwvaW5pY2lhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/inicial/inicial.component.html":
/*!************************************************!*\
  !*** ./src/app/inicial/inicial.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Lista das Noticias</h2>\r\n<div *ngFor=\"let noticia of service.listaDeNoticias()\">\r\n    <div *ngIf=\"noticia.publicar\">\r\n        <li>\r\n            {{ noticia.titulo }}\r\n            <button class=\"btn btn-success\" (click)=\"service.aumentarViews(noticia)\" [routerLink]=\"['/noticias', noticia.id]\">Ver</button>\r\n        </li>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/inicial/inicial.component.ts":
/*!**********************************************!*\
  !*** ./src/app/inicial/inicial.component.ts ***!
  \**********************************************/
/*! exports provided: InicialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicialComponent", function() { return InicialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noticias.service */ "./src/app/noticias.service.ts");



var InicialComponent = /** @class */ (function () {
    function InicialComponent(service) {
        this.service = service;
    }
    InicialComponent.prototype.ngOnInit = function () {
    };
    InicialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicial',
            template: __webpack_require__(/*! ./inicial.component.html */ "./src/app/inicial/inicial.component.html"),
            styles: [__webpack_require__(/*! ./inicial.component.css */ "./src/app/inicial/inicial.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"]])
    ], InicialComponent);
    return InicialComponent;
}());



/***/ }),

/***/ "./src/app/noticias.service.ts":
/*!*************************************!*\
  !*** ./src/app/noticias.service.ts ***!
  \*************************************/
/*! exports provided: NoticiasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasService", function() { return NoticiasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoticiasService = /** @class */ (function () {
    function NoticiasService() {
        var _this = this;
        this.autor = [
            'Angela',
            'Antonio',
            'João',
            'Marcos',
            'Anonimo'
        ];
        this.dados = [];
        this.excluir = function (noticia) {
            if (confirm("Você realmente que excluir essa notícia '" + noticia.titulo + "' ?"))
                _this.dados = _this.dados.filter(function (element) { return element.id != noticia.id; });
        };
    }
    NoticiasService.prototype.listaDeAutores = function () {
        return this.autor;
    };
    NoticiasService.prototype.listaDeNoticias = function () {
        return this.dados;
    };
    NoticiasService.prototype.consulta = function (id) {
        return this.dados.find(function (noticia) { return noticia.id === id; });
    };
    NoticiasService.prototype.consultaAutor = function (valor) {
        var aux = [];
        for (var _i = 0, _a = this.dados; _i < _a.length; _i++) {
            var noticia = _a[_i];
            if (noticia.autor === valor) {
                aux.push(noticia);
            }
        }
        return aux;
    };
    NoticiasService.prototype.salvarNoticia = function (autor, titulo, noticia) {
        var n = {
            'id': Math.random(),
            'autor': autor,
            'titulo': titulo,
            'noticia': noticia,
            'publicar': false,
            'views': 0
        };
        this.dados.push(n);
    };
    NoticiasService.prototype.publicarNoticia = function (valor) {
        for (var _i = 0, _a = this.dados; _i < _a.length; _i++) {
            var dado = _a[_i];
            if (dado.id === valor.id) {
                dado.publicar = true;
            }
        }
    };
    NoticiasService.prototype.aumentarViews = function (valor) {
        for (var _i = 0, _a = this.dados; _i < _a.length; _i++) {
            var noticia = _a[_i];
            if (noticia.id === valor.id) {
                noticia.views++;
            }
        }
    };
    NoticiasService.prototype.noticiasPorAutor = function () {
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
    NoticiasService.prototype.AutorMaisPublicou = function () {
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
    NoticiasService.prototype.quatidadeDeViews = function () {
        return this.dados.sort(function (a, b) { return b.views - a.views; });
    };
    NoticiasService.prototype.quatidadeDeNoticias = function (valor) {
        var cont = 0;
        for (var _i = 0, _a = this.dados; _i < _a.length; _i++) {
            var noticia = _a[_i];
            if (noticia.autor === valor) {
                if (noticia.publicar === true) {
                    cont++;
                }
            }
        }
        return cont;
    };
    NoticiasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoticiasService);
    return NoticiasService;
}());



/***/ }),

/***/ "./src/app/publicar/publicar.component.css":
/*!*************************************************!*\
  !*** ./src/app/publicar/publicar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2FyL3B1YmxpY2FyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/publicar/publicar.component.html":
/*!**************************************************!*\
  !*** ./src/app/publicar/publicar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Publicar Noticia</h2>\n<div *ngFor=\"let noticia of service.listaDeNoticias()\">\n    <div *ngIf=\"noticia.publicar == false\">\n        <li>\n            {{ noticia.titulo }}\n            <button class=\"btn btn-success\" [routerLink]=\"['/noticias', noticia.id]\">Ver</button>&nbsp;\n            <button class=\"btn btn-success\" (click)=\"publicarNoticia(noticia)\">Publicar</button>\n        </li>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/publicar/publicar.component.ts":
/*!************************************************!*\
  !*** ./src/app/publicar/publicar.component.ts ***!
  \************************************************/
/*! exports provided: PublicarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicarComponent", function() { return PublicarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noticias.service */ "./src/app/noticias.service.ts");



var PublicarComponent = /** @class */ (function () {
    function PublicarComponent(service) {
        this.service = service;
    }
    PublicarComponent.prototype.publicarNoticia = function (valor) {
        this.service.publicarNoticia(valor);
    };
    PublicarComponent.prototype.ngOnInit = function () {
    };
    PublicarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publicar',
            template: __webpack_require__(/*! ./publicar.component.html */ "./src/app/publicar/publicar.component.html"),
            styles: [__webpack_require__(/*! ./publicar.component.css */ "./src/app/publicar/publicar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"]])
    ], PublicarComponent);
    return PublicarComponent;
}());



/***/ }),

/***/ "./src/app/ver/ver.component.css":
/*!***************************************!*\
  !*** ./src/app/ver/ver.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zlci92ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ver/ver.component.html":
/*!****************************************!*\
  !*** ./src/app/ver/ver.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"noticia\">\r\n    <h3>Autor</h3>\r\n    {{ noticia.autor }}\r\n    <h3>Título</h3>\r\n    {{ noticia.titulo }}\r\n    <h3>Noticia</h3>\r\n    {{ noticia.noticia }}\r\n    <br><br>\r\n    <button class=\"btn btn-danger\" (click)=\"excluir(noticia)\" [routerLink]=\"['/noticias']\">Excluir</button>\r\n</div>\r\n\r\n<div *ngIf=\"!noticia\">\r\n    Notícia não encontrada\r\n</div>"

/***/ }),

/***/ "./src/app/ver/ver.component.ts":
/*!**************************************!*\
  !*** ./src/app/ver/ver.component.ts ***!
  \**************************************/
/*! exports provided: VerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerComponent", function() { return VerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noticias.service */ "./src/app/noticias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var VerComponent = /** @class */ (function () {
    function VerComponent(service, route) {
        this.service = service;
        this.route = route;
        this.noticia = null;
    }
    VerComponent.prototype.excluir = function (noticia) {
        this.service.excluir(noticia);
    };
    VerComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.noticia = this.service.consulta(parseFloat(id));
    };
    VerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ver',
            template: __webpack_require__(/*! ./ver.component.html */ "./src/app/ver/ver.component.html"),
            styles: [__webpack_require__(/*! ./ver.component.css */ "./src/app/ver/ver.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], VerComponent);
    return VerComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Aquiles\noticias\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map