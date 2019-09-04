(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\" text=\"返回\" color=\"white\" defaultHref=\"/\"></ion-back-button>\n    <ion-title>cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  color=\"white\">\n  <ion-list>\n    <ion-list-header>\n      购物车列表\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let item of productes;index as index\">\n      <div>\n        <p\n                [class.active]=\"item.price == active\"\n                [ngClass]=\"{'special': item.price == 799}\"\n                [style.color]=\"item.price == 399 ? '#f63' : ''\"\n                [ngStyle]=\"{'color': item.price == 299 ? '#0f0' : ''}\"\n        >百分比: {{ item.price | percent }}</p>\n        <p>\n          大小写转换：{{ item.name | uppercase | lowercase}} - 美元化：{{ item.price | currency }}\n        </p>\n        <p>日期时间：{{ date | date: 'yyyy-MM-dd'}}</p>\n      </div>\n    </ion-item>\n\n    <ion-item *ngFor=\"let item of shiping | async\">\n      <div>\n        <h3>{{ item.type }} - {{ item.price | currency }}</h3>\n        <p>对象异步处理和转json字符串：{{ shiping | async | json}}</p>\n        <p>{{ strNum | number }}</p>\n        <p>{{ strNum | slice }} - {{ strNum | slice:1 }}</p>\n        <p>{{ item | keyvalue }}</p>\n        <p>{{ 'test' | titlecase}}</p>\n\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <form [formGroup]=\"checkoutForm\" (submit)=\"onSubmit(checkoutForm.value)\" >\n    <div>\n      <label >name</label>\n      <input type=\"text\" formControlName=\"name\">\n    </div>\n\n    <div>\n      <label >address</label>\n      <input type=\"text\" formControlName=\"address\">\n    </div>\n\n    <ion-input [(ngModel)]=\"strNum\" [ngModelOptions]=\"{standalone: true}\" ></ion-input>\n\n    <button class=\"button\" type=\"submit\" disabled=\"false\">提交</button>\n\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
let CartPageModule = class CartPageModule {
};
CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            // ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  color: #ff3a3b;\n}\n\n.special {\n  color: #00a1e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9EOlxcY2tcXG5hdGl2ZS1qc1xcYW5ndWxhcjhcXGFwcC9zcmNcXGFwcFxcY2FydFxcY2FydC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZjNhM2I7XHJcbn1cclxuLnNwZWNpYWwge1xyXG4gIGNvbG9yOiAjMDBhMWU0O1xyXG59IiwiLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmYzYTNiO1xufVxuXG4uc3BlY2lhbCB7XG4gIGNvbG9yOiAjMDBhMWU0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");




let CartPage = class CartPage {
    constructor(cartService, formBuilder) {
        this.cartService = cartService;
        this.formBuilder = formBuilder;
        this.productes = [];
        this.strNum = '123';
        this.active = '699';
        console.log('constructor', 1);
        this.date = new Date();
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter', 4);
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter', 3);
    }
    ionViewWillLeave() {
        console.log('ionViewWillLeave', 5);
    }
    ngOnDestroy() {
        console.log('ngOnDestroy', 7);
    }
    ionViewDidLeave() {
        console.log('ionViewDidLeave', 6);
    }
    ngOnInit() {
        this.getShops();
        console.log('ngOnInit', 2);
    }
    /*ngAfterViewInit() {
      console.log('ngAfterViewInit DOM操作在这里',30)
    }*/
    getShops() {
        this.productes = this.cartService.getShops();
        this.shiping = this.cartService.getShipping();
        // rxjs 中的of() 和 httpClient 都会返回   Observable对象
        /*this.cartService.getShipping().subscribe(items => {
          console.log(items)
        })*/
    }
    onSubmit(data) {
        console.log(data);
        this.productes = this.cartService.clearShop();
        this.checkoutForm.reset();
    }
};
CartPage.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html"),
        styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], CartPage);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map