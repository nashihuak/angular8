(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/detail/detail.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detail/detail.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar >\r\n        <ion-back-button slot=\"start\" icon=\"arrow-back\" color=\"white\" text=\"返回\" defaultHref=\"/tabs\" ></ion-back-button>\r\n        <ion-title class=\"txt txt-center txt-size\">\r\n            {{ product.name }}\r\n        </ion-title>\r\n        <ion-button slot=\"end\" color=\"white\" class=\"clean-btn\"></ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- 效果一 -->\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title> 带头和内容 </ion-card-title>\r\n            <ion-card-subtitle >\r\n                <p [innerHtml]=\"product.name + '-'+ product.price | wordColor:699 | safeHtml \" >\r\n                </p>\r\n            </ion-card-subtitle>\r\n        </ion-card-header>\r\n\r\n        <ion-card-content>\r\n            {{ product.description }}\r\n\r\n        </ion-card-content>\r\n\r\n    </ion-card>\r\n\r\n    <!-- 效果二 -->\r\n    <ion-card>\r\n        <ion-item>\r\n            <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{ product.name }}</ion-label>\r\n            <!-- [routerLink]=\"['/cart']\"  -->\r\n            <ion-button fill=\"outline\" slot=\"end\" (click)=\"addToCart(product)\">查看</ion-button>\r\n        </ion-item>\r\n\r\n        <ion-card-content>\r\n            <div [innerHtml]=\"htmlStr | safeHtml\"></div>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n    <!-- 效果三 -->\r\n    <ion-card>\r\n        <ion-item href=\"#\" class=\"activated\">\r\n            <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\r\n            <ion-label> {{ product.name }}</ion-label>\r\n        </ion-item>\r\n        <ion-item href=\"#\" class=\"activated\">\r\n            <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\r\n            <ion-label> {{ product.name }}</ion-label>\r\n        </ion-item>\r\n        <ion-item href=\"#\" class=\"activated\">\r\n            <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\r\n            <ion-label> {{ product.name }}</ion-label>\r\n        </ion-item>\r\n        <ion-item href=\"#\" class=\"activated\">\r\n            <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\r\n            <ion-label> {{ product.name }}</ion-label>\r\n        </ion-item>\r\n    </ion-card>\r\n\r\n    <table>\r\n        <tr>\r\n            <td [attr.colspan]=\"2\">标题</td>\r\n        </tr>\r\n        <tr>\r\n            <td>名字</td>\r\n            <td>年龄</td>\r\n        </tr>\r\n    </table>\r\n\r\n    <div>\r\n        <h2>{{ inputStr }}</h2>\r\n        <label >\r\n            名字：<input type=\"text\" [(ngModel)]=\"inputStr\">\r\n        </label>\r\n        <br>\r\n        <label >\r\n            名字：<input type=\"text\" [value]=\"inputStr\" (input)=\"inputStr=$event.target.value\">\r\n        </label>\r\n        <br>\r\n        <label >\r\n            名字：<input type=\"text\" [ngModel]=\"inputStr\" (ngModelChange)=\"inputStr=$event\">\r\n        </label>\r\n        <br>\r\n        <label >\r\n            名字：<input type=\"text\" [ngModel]=\"inputStr\" (ngModelChange)=\"toUpper($event)\">\r\n        </label>\r\n    </div>\r\n\r\n    <ion-item>\r\n        <ion-label>模板引用变量</ion-label>\r\n        <ion-input #phone placeholder=\"请输入手机号\"></ion-input>\r\n        <ion-button slot=\"end\" (click)=\"getPhone(phone.value)\">获取引用变量的值</ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n        <ion-label slot=\"start\">\r\n            模板引用变量指令引用\r\n        </ion-label>\r\n        <form (ngSubmit)=\"onSubmit(heroForm)\" #heroForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">\r\n                    Name\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" required [(ngModel)]=\"hero.name\">\r\n                </label>\r\n            </div>\r\n            <button type=\"submit\" [disabled]=\"!heroForm.form.valid\">Submit</button>\r\n        </form >\r\n\r\n        <div [hidden]=\"!heroForm.form.valid\">\r\n            {{ submitMessage?.name }}\r\n        </div>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n        <ion-label>模板引用变量用ref代替#</ion-label>\r\n        <ion-input ref-email placeholder=\"请输入邮箱\"></ion-input>\r\n        <ion-button (click)=\"tapEmail(email.value)\">点击</ion-button>\r\n    </ion-item>\r\n\r\n    <br>\r\n    <h2>ngSwitch一组指令</h2>\r\n    <ion-radio-group [(ngModel)]=\"emotion\">\r\n        <ion-list-header>\r\n            <ion-label>表情</ion-label>\r\n        </ion-list-header>\r\n\r\n        <ion-item>\r\n            <ion-label>happy</ion-label>\r\n            <ion-radio slot=\"start\" value=\"happy\"></ion-radio>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label>sad</ion-label>\r\n            <ion-radio slot=\"start\" value=\"sad\"></ion-radio>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label>smile</ion-label>\r\n            <ion-radio slot=\"start\" value=\"smile\"></ion-radio>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label>cat</ion-label>\r\n            <ion-radio slot=\"start\" value=\"cat\"></ion-radio>\r\n        </ion-item>\r\n\r\n\r\n    </ion-radio-group>\r\n    <div [ngSwitch]=\"emotion\">\r\n        <div *ngSwitchCase=\"'happy'\">happy emotion</div>\r\n        <div *ngSwitchCase=\"'sad'\">sad emotion</div>\r\n        <div *ngSwitchCase=\"'smile'\">smile emotion</div>\r\n        <div *ngSwitchCase=\"'cat'\">cat emotion</div>\r\n        <div *ngSwitchDefault>default emotion</div>\r\n    </div>\r\n\r\n    <div>\r\n        <input type=\"text\" #box (keyup)=\"0\" >\r\n        {{ box.value}}\r\n    </div>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/detail/detail.module.ts":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/safe-html.pipe */ "./src/app/pipes/safe-html.pipe.ts");
/* harmony import */ var _pipes_word_color_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/word-color.pipe */ "./src/app/pipes/word-color.pipe.ts");









let DetailPageModule = class DetailPageModule {
    constructor() {
    }
};
DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"] }])
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"], _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_7__["SafeHtmlPipe"], _pipes_word_color_pipe__WEBPACK_IMPORTED_MODULE_8__["WordColorPipe"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DetailPageModule);



/***/ }),

/***/ "./src/app/detail/detail.page.scss":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clean-btn {\n  height: 28px;\n}\n\n.dd {\n  color: #ff3a3b;\n}\n\ntable {\n  width: 100%;\n}\n\ntable td {\n  border: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL0Q6XFxja1xcbmF0aXZlLWpzXFxhbmd1bGFyOFxcYXBwL3NyY1xcYXBwXFxkZXRhaWxcXGRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsWUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREFFO0VBQ0UsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5jbGVhbi1idG57XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG4uZGQge1xyXG4gIGNvbG9yOiAjZmYzYTNiO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgfVxyXG59IiwiLmNsZWFuLWJ0biB7XG4gIGhlaWdodDogMjhweDtcbn1cblxuLmRkIHtcbiAgY29sb3I6ICNmZjNhM2I7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/detail/detail.page.ts":
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tab2_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tab2/products */ "./src/app/tab2/products.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");







let DetailPage = class DetailPage {
    constructor(route, cartService, nav, location) {
        this.route = route;
        this.cartService = cartService;
        this.nav = nav;
        this.location = location;
        this.products = _tab2_products__WEBPACK_IMPORTED_MODULE_5__["products"];
        this.inputStr = '';
        this.emotion = 'happy';
        this.hero = {
            name: ''
        };
        // 给事件取别名
        this.myClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.route.paramMap.subscribe(param => this.product = this.products[param.get('id')]);
        this.route.snapshot.paramMap.get('id');
        // console.log(this.route.snapshot.paramMap.get('id'), this.product)
        this.htmlStr = `
            <h1>innerHtml内容</h1>
            <h2 style="color: #1b75bb;">样式自定义</h2>
        `;
    }
    addToCart(item) {
        this.cartService.addToCart(item);
        this.nav.navigateForward('/cart');
        // this.location.forward()
    }
    toUpper(e) {
        this.inputStr = e.toUpperCase();
    }
    getPhone(phone) {
        console.log(phone);
    }
    onSubmit(form) {
        console.log(form);
    }
    tapEmail(val) {
        console.log(val);
    }
};
DetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DetailPage.prototype, "inputStr", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DetailPage.prototype, "myClick", void 0);
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], DetailPage);



/***/ }),

/***/ "./src/app/pipes/safe-html.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanited) {
        this.sanited = sanited;
    }
    transform(value) {
        return this.sanited.bypassSecurityTrustHtml(value);
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeHtml'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SafeHtmlPipe);



/***/ }),

/***/ "./src/app/pipes/word-color.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/word-color.pipe.ts ***!
  \******************************************/
/*! exports provided: WordColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordColorPipe", function() { return WordColorPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WordColorPipe = class WordColorPipe {
    transform(input, word) {
        if (!word)
            return input;
        let result = (input + '').replace(word, `<span style="color: #6ca4ff;" class="tt">${word}</span>`);
        return result;
    }
};
WordColorPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'wordColor'
    })
], WordColorPipe);



/***/ })

}]);
//# sourceMappingURL=detail-detail-module-es2015.js.map