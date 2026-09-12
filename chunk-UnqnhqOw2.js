import{n as s,t as r}from"./chunk-Btz99zWn.js";import{$ as Ni,Ht as _,Jn as ri,L as Ka,M as Ja,Mt as Wd,Ot as Vd,P as Je,Pn as oG,Pt as Xa,Rn as p,Sn as ic,Vn as pb,W as Lz,Xn as sS,Zn as sT,cn as eo,f as D,jn as mT,lt as Pv,rt as Oa,s as Av,sn as em,tt as Ny,un as fb,v as Fn,vn as ht,vt as SC,wn as j,xt as TT}from"./chunk-00exbmCc.js";import{N as Y,T as Us,o as Fi}from"./chunk-BqyasRgF.js";import{s as V}from"./chunk-BplKlF4A.js";import{n as U,r as V$1}from"./chunk-DTrVIQFP.js";import{D as ze,F as tr,M as hn,N as ir,P as nr,o as Ra}from"./main-6YPSYBVS.js";import{t as H}from"./chunk-D_UNwuzo.js";import{n as et,r as nt,t as S}from"./chunk-C3F9jDJq.js";import{f as to,r as Kn}from"./chunk-D_lxjJU5.js";var de=`
    
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }


    /* For ngx-prime */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`;var pe={root:({instance:e})=>[`p-textarea p-component`,{"p-filled":e.$filled(),"p-textarea-resizable ":e.autoResize,"p-variant-filled":e.$variant()===`filled`,"p-textarea-fluid":e.hasFluid,"p-inputfield-sm p-textarea-sm":e.pSize()===`small`,"p-textarea-lg p-inputfield-lg":e.pSize()===`large`,"p-invalid":e.invalid()}]};var re=(()=>{class e extends Y{name=`textarea`;style=de;classes=pe;static ɵfac=(()=>{let t;return function(i){return(t||(t=em(e)))(i||e)}})();static ɵprov=_({token:e,factory:e.ɵfac})}return e})();var ne=new D(`TEXTAREA_INSTANCE`);var ae=(()=>{class e extends S{componentName=`Textarea`;bindDirectiveInstance=p(Us,{self:!0});$pcTextarea=p(ne,{optional:!0,skipSelf:!0})??void 0;pTextareaPT=ic();pTextareaUnstyled=ic();autoResize=ic(!1,{transform:Ni});pSize=ic();variant=ic();fluid=ic(void 0,{transform:Ni});invalid=ic(void 0,{transform:Ni});ariaDescribedBy=ic();$variant=ht(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=Ny();ngControlSubscription;_componentStyle=p(re);ngControl=p(V,{optional:!0,self:!0});pcFluid=p(H,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}constructor(){super(),ri(()=>{let t=this.pTextareaPT();t&&this.directivePT.set(t)}),ri(()=>{this.pTextareaUnstyled()&&this.directiveUnstyled.set(this.pTextareaUnstyled())})}onInit(){this.ngControl?.valueChanges&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize()&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.autoResize()&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(t){this.writeModelValue(t.target?.value),this.updateState()}resize(t){this.el.nativeElement.style.height=`auto`,this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+`px`,parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY=`scroll`,this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow=`hidden`,this.onResize.emit(t||{})}updateState(){this.autoResize()&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static ɵfac=function(r){return new(r||e)};static ɵdir=Je({type:e,selectors:[[``,`pTextarea`,``],[``,`pInputTextarea`,``]],hostVars:4,hostBindings:function(r,i){r&1&&Ja(`input`,function(p){return i.onInput(p)}),r&2&&(Ka(`aria-invalid`,i.invalid()||null)(`aria-describedby`,i.ariaDescribedBy()||null),sT(i.cx(`root`)))},inputs:{pTextareaPT:[1,`pTextareaPT`],pTextareaUnstyled:[1,`pTextareaUnstyled`],autoResize:[1,`autoResize`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`],ariaDescribedBy:[1,`ariaDescribedBy`]},outputs:{onResize:`onResize`},features:[TT([re,{provide:ne,useExisting:e},{provide:Fi,useExisting:e}]),sS([Us]),Av]})}return e})();var oe=(()=>{class e{static ɵfac=function(r){return new(r||e)};static ɵmod=eo({type:e});static ɵinj=Fn({})}return e})();var le=nr(()=>{});var $e=(()=>{class e{constructor(){this.userService=p(ze),this.translateService=p(U),this._emitterService=p(oG),this._initialProfile=ht(()=>{let t=this.userService.user();return{name:t.name||``,phone:t.phone||``,bio:t.bio||``}}),this.profileModel=j(this._initialProfile()),this.profileForm=tr(this.profileModel,le),this.isSubmitDisabled=ht(()=>this.profileForm().invalid()),this._emitterService.onComplete(`us.user`).pipe(Lz()).subscribe(()=>{this.profileModel.set(this._initialProfile()),this.profileForm().reset()})}wFormSubmit(){ir(this.profileForm,t=>(this.userService.user.set(r(r({},this.userService.user()),t().value())),this.userService.updateMe(),Promise.resolve()))}updateThumb(t){this.userService.user.set(s(r({},this.userService.user()),{thumb:t})),this.userService.updateMe()}static{this.ɵfac=function(r){return new(r||e)}}static{this.ɵcmp=Vd({type:e,selectors:[[`ng-component`]],decls:15,vars:15,consts:[[1,`profile`],[1,`profile__card`],[`mode`,`single-image`,`view`,`thumb-only`,3,`wImageChange`,`wImage`,`container`,`name`,`accept`,`clearable`,`preview`,`cropWidth`,`cropHeight`],[1,`profile__form`,3,`submit`],[`pInputText`,``,1,`w-full`,3,`placeholder`,`formField`],[`pInputText`,``,`type`,`tel`,1,`w-full`,3,`placeholder`,`formField`],[`pTextarea`,``,1,`w-full`,3,`placeholder`,`formField`],[1,`profile__actions`],[`pButton`,``,`type`,`submit`,3,`disabled`],[`translate`,``],[`type`,`button`,1,`profile__logout`,3,`click`],[1,`pi`,`pi-sign-out`]],template:function(r,i){r&1&&(Oa(0,`section`,0)(1,`div`,1)(2,`ngx-file`,2),Ja(`wImageChange`,function(p){return i.updateThumb(p||``)}),Wd(),Oa(3,`form`,3),Ja(`submit`,function(p){return i.wFormSubmit(),p.preventDefault()}),Xa(4,`input`,4),fb(),Xa(5,`input`,5),fb(),Xa(6,`textarea`,6),fb(),Oa(7,`div`,7)(8,`button`,8)(9,`span`,9),mT(10,`Update`),Wd()()()()(),Oa(11,`button`,10),Ja(`click`,function(){return i.userService.logout()}),Xa(12,`i`,11),Oa(13,`span`,9),mT(14,`Logout`),Wd()()()),r&2&&(SC(2),Pv(`wImage`,i.userService.thumb())(`container`,`user`)(`name`,i.userService.user()._id+`.jpg`)(`accept`,`image/*`)(`clearable`,!1)(`preview`,!0)(`cropWidth`,512)(`cropHeight`,512),SC(2),Pv(`placeholder`,i.translateService.translate(`Enter your name...`)())(`formField`,i.profileForm.name),pb(),SC(),Pv(`placeholder`,i.translateService.translate(`Enter your phone...`)())(`formField`,i.profileForm.phone),pb(),SC(),Pv(`placeholder`,i.translateService.translate(`Enter your bio...`)())(`formField`,i.profileForm.bio),pb(),SC(2),Pv(`disabled`,i.isSubmitDisabled()))},dependencies:[hn,to,Kn,nt,et,oe,ae,Ra,V$1],styles:[`.profile__card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%sp-4);padding:var(--%NS%sp-4);border:1px solid var(--%NS%c-border);border-radius:var(--%NS%radius-card);background:var(--%NS%c-bg-secondary);box-shadow:var(--%NS%shadow-sm)}.profile__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%sp-3)}.profile__actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--%NS%sp-2);padding-top:var(--%NS%sp-2)}.profile__logout[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:var(--%NS%sp-2);width:fit-content;margin-top:var(--%NS%sp-3);padding:var(--%NS%sp-3) var(--%NS%sp-5);border:1px solid transparent;border-radius:var(--%NS%radius-btn);background:var(--%NS%c-secondary);color:var(--%NS%c-text-secondary);font:600 .875rem/1 var(--%NS%ff-base);cursor:pointer}.profile__logout[_ngcontent-%COMP%]:hover{background:var(--%NS%c-secondary-hover)}.profile__logout[_ngcontent-%COMP%]:focus-visible{outline:none;box-shadow:var(--%NS%focus-ring)}`]})}}return e})();export{$e as ProfileComponent};