import{B as JI,Ct as Tf,En as gC,N as Ih,Nr as vr,Qn as ns,Rt as Xr,Sn as fi,Tn as g,Vn as k,_ as Dw,c as C$1,cr as qP,lt as QE,p as Dd,rr as ph,s as Bw,tn as ah}from"./chunk-DGjJOFgO.js";import{ft as y,j as Y,l as Fs,p as Is,s as Fi}from"./chunk-DpIl6n5S.js";import{c as V$1}from"./chunk-pibSZWpN.js";import{t as H}from"./chunk-BwEwTiBj.js";var S=(()=>{class t extends Is{modelValue=fi(void 0);$filled=Bw(()=>y(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static ɵfac=(()=>{let e;return function(o){return(e||(e=Tf(t)))(o||t)}})();static ɵdir=Xr({type:t,features:[ah]})}return t})();var V=`
    
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }


    /* For ngx-prime */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`;var B={root:({instance:t})=>[`p-inputtext p-component`,{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize()===`small`,"p-inputtext-lg":t.pSize()===`large`,"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-inputtext-fluid":t.hasFluid}]};var C=(()=>{class t extends Y{name=`inputtext`;style=V;classes=B;static ɵfac=(()=>{let e;return function(o){return(e||(e=Tf(t)))(o||t)}})();static ɵprov=k({token:t,factory:t.ɵfac})}return t})();var E=new C$1(`INPUTTEXT_INSTANCE`);var et=(()=>{class t extends S{componentName=`InputText`;hostName=qP(``);ptInputText=qP();pInputTextPT=qP();pInputTextUnstyled=qP();bindDirectiveInstance=g(Fs,{self:!0});$pcInputText=g(E,{optional:!0,skipSelf:!0})??void 0;ngControl=g(V$1,{optional:!0,self:!0});pcFluid=g(H,{optional:!0,host:!0,skipSelf:!0});pSize=qP();variant=qP();fluid=qP(void 0,{transform:gC});invalid=qP(void 0,{transform:gC});$variant=Bw(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=g(C);constructor(){super(),Dd(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),Dd(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.pSize()]:this.pSize()})}static ɵfac=function(i){return new(i||t)};static ɵdir=Xr({type:t,selectors:[[``,`pInputText`,``]],hostVars:3,hostBindings:function(i,o){i&1&&Ih(`input`,function(){return o.onInput()}),i&2&&(ph(`data-p`,o.dataP),JI(o.cx(`root`)))},inputs:{hostName:[1,`hostName`],ptInputText:[1,`ptInputText`],pInputTextPT:[1,`pInputTextPT`],pInputTextUnstyled:[1,`pInputTextUnstyled`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},features:[Dw([C,{provide:E,useExisting:t},{provide:Fi,useExisting:t}]),QE([Fs]),ah]})}return t})();var nt=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=ns({type:t});static ɵinj=vr({})}return t})();export{et as n,nt as r,S as t};