(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["top-bar-top-bar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/top-bar/top-bar.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <a routerLink=\"['/']\">\n      <h1>My Store </h1>\n    </a>\n    <a routerLink=\"['/cart]\" class=\"button fancy-button\">\n      <i class=\"material-icons\">shopping_cart</i>\n      Checkout\n    </a>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/top-bar/top-bar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/top-bar/top-bar.module.ts ***!
  \*******************************************/
/*! exports provided: TopBarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarPageModule", function() { return TopBarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _top_bar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-bar.page */ "./src/app/top-bar/top-bar.page.ts");







var routes = [
    {
        path: '',
        component: _top_bar_page__WEBPACK_IMPORTED_MODULE_6__["TopBarPage"]
    }
];
var TopBarPageModule = /** @class */ (function () {
    function TopBarPageModule() {
    }
    TopBarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_top_bar_page__WEBPACK_IMPORTED_MODULE_6__["TopBarPage"]]
        })
    ], TopBarPageModule);
    return TopBarPageModule;
}());



/***/ }),

/***/ "./src/app/top-bar/top-bar.page.scss":
/*!*******************************************!*\
  !*** ./src/app/top-bar/top-bar.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1iYXIvdG9wLWJhci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/top-bar/top-bar.page.ts":
/*!*****************************************!*\
  !*** ./src/app/top-bar/top-bar.page.ts ***!
  \*****************************************/
/*! exports provided: TopBarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarPage", function() { return TopBarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopBarPage = /** @class */ (function () {
    function TopBarPage() {
    }
    TopBarPage.prototype.ngOnInit = function () {
    };
    TopBarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-bar',
            template: __webpack_require__(/*! raw-loader!./top-bar.page.html */ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.page.html"),
            styles: [__webpack_require__(/*! ./top-bar.page.scss */ "./src/app/top-bar/top-bar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopBarPage);
    return TopBarPage;
}());



/***/ })

}]);
//# sourceMappingURL=top-bar-top-bar-module-es5.js.map