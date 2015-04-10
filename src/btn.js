import {Behavior} from 'aurelia-framework'
import {Router} from 'aurelia-router'

export class BtnComponent{

    static metadata(){
        return Behavior
            .attachedBehavior('ai-btn')
            .withOptions().and((x)=>{
                x.withProperty('size')
                x.withProperty('color')
                x.withProperty('shadow')
                x.withProperty('waves')
                x.withProperty('link')
            })
            .noView()
    }

    static inject(){
        return [Element,Router]
    }

    constructor(element, router){

        this.element = element;
        this.defaults = {
            bootstrap: {
                prefix: 'btn',
            },
            ai       : {
                prefix:'ai-btn'
            },
            theme : 'bootstrap'
        };


        this._click = function(url){
            router.navigate(url);
        }
    }

    get prefix(){
        return this.defaults[this.theme].prefix;
    }

    bind(){
        this.link && this.element.addEventListener('click', this.click.bind(this));
    }

    unbind(){
        this.link && this.element.removeEventListener('click', this.click);
    }

    attached(){
        this.theme = this.theme || this.defaults.theme;
        this.element.classList.add(this.defaults[this.theme].prefix);
        this.sizeChanged();
        this.colorChanged();
        this.shadowChanged();
        this.wavesChanged();
    }

    pre(val){
        return `${this.prefix}-${val}`;
    }

    click(evt){
        evt.preventDefault();
        this._click(this.link);
    }

    switch(name){

        if (this[name] === this[`_${name}`]) return;

        this[`_${name}`] && this.element.classList.remove(this.pre(this[`_${name}`]));
        this.element.classList.add(this.pre(this[name]));
        this[`_${name}`] = this[name];
    }

    sizeChanged(){
        this.switch('size');
    }

    colorChanged(){
        this.switch('color');
    }

    shadowChanged(){
        this.switch('shad');
    }

    wavesChanged(){
        this.switch('wave');
    }

}
