System.register(['aurelia-framework', 'aurelia-router'], function (_export) {
    var Behavior, Router, _classCallCheck, _createClass, BtnComponent;

    return {
        setters: [function (_aureliaFramework) {
            Behavior = _aureliaFramework.Behavior;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }],
        execute: function () {
            'use strict';

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

            _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            BtnComponent = (function () {
                function BtnComponent(element, router) {
                    _classCallCheck(this, BtnComponent);

                    this.element = element;
                    this.defaults = {
                        bootstrap: {
                            prefix: 'btn' },
                        ai: {
                            prefix: 'ai-btn'
                        },
                        theme: 'bootstrap'
                    };

                    this._click = function (url) {
                        router.navigate(url);
                    };
                }

                _createClass(BtnComponent, [{
                    key: 'prefix',
                    get: function () {
                        return this.defaults[this.theme].prefix;
                    }
                }, {
                    key: 'bind',
                    value: function bind() {
                        this.link && this.element.addEventListener('click', this.click.bind(this));
                    }
                }, {
                    key: 'unbind',
                    value: function unbind() {
                        this.link && this.element.removeEventListener('click', this.click);
                    }
                }, {
                    key: 'attached',
                    value: function attached() {
                        this.theme = this.theme || this.defaults.theme;
                        this.element.classList.add(this.defaults[this.theme].prefix);
                        this.sizeChanged();
                        this.colorChanged();
                        this.shadowChanged();
                        this.wavesChanged();
                    }
                }, {
                    key: 'pre',
                    value: function pre(val) {
                        return '' + this.prefix + '-' + val;
                    }
                }, {
                    key: 'click',
                    value: function click(evt) {
                        evt.preventDefault();
                        this._click(this.link);
                    }
                }, {
                    key: 'switch',
                    value: function _switch(name) {

                        if (this[name] === this['_' + name]) {
                            return;
                        }this['_' + name] && this.element.classList.remove(this.pre(this['_' + name]));
                        this.element.classList.add(this.pre(this[name]));
                        this['_' + name] = this[name];
                    }
                }, {
                    key: 'sizeChanged',
                    value: function sizeChanged() {
                        this['switch']('size');
                    }
                }, {
                    key: 'colorChanged',
                    value: function colorChanged() {
                        this['switch']('color');
                    }
                }, {
                    key: 'shadowChanged',
                    value: function shadowChanged() {
                        this['switch']('shad');
                    }
                }, {
                    key: 'wavesChanged',
                    value: function wavesChanged() {
                        this['switch']('wave');
                    }
                }], [{
                    key: 'metadata',
                    value: function metadata() {
                        return Behavior.attachedBehavior('ai-btn').withOptions().and(function (x) {
                            x.withProperty('size');
                            x.withProperty('color');
                            x.withProperty('shadow');
                            x.withProperty('waves');
                            x.withProperty('link');
                        }).noView();
                    }
                }, {
                    key: 'inject',
                    value: function inject() {
                        return [Element, Router];
                    }
                }]);

                return BtnComponent;
            })();

            _export('BtnComponent', BtnComponent);
        }
    };
});