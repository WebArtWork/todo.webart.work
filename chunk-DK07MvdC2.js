import{n as s,t as r}from"./chunk-Btz99zWn.js";import{B as JI,Ct as Tf,Dr as uw,En as gC,Er as uu,N as Ih,Nn as hh,Nr as vr,Nt as WP,O as Hi,Ot as UE,Qn as ns,Rt as Xr,Sn as fi,Tn as g,Vn as k,_ as Dw,_r as tE,c as C,cr as qP,kn as gh,lt as QE,p as Dd,s as Bw,tn as ah,yn as fD,z as JD}from"./chunk-DGjJOFgO.js";import{j as Y,l as Fs,s as Fi}from"./chunk-DpIl6n5S.js";import{c as V}from"./chunk-pibSZWpN.js";import{i as j,t as F}from"./chunk-Chb8W9DI.js";import{r as U}from"./chunk-nKjElIyk.js";import"./chunk-BbiUkdkq.js";import{n as Se}from"./chunk-Dz58Lz5v.js";import{A as On,D as ze,F as zn,N as tn,O as Bn,r as Ld}from"./main-5OVAWTUP.js";import{t as H}from"./chunk-BwEwTiBj.js";import{n as et,r as nt,t as S}from"./chunk-DIELeCQn.js";import{f as to,r as Kn}from"./chunk-Bj3qkYrC.js";var se=`
    
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
`;var de={root:({instance:e})=>[`p-textarea p-component`,{"p-filled":e.$filled(),"p-textarea-resizable ":e.autoResize,"p-variant-filled":e.$variant()===`filled`,"p-textarea-fluid":e.hasFluid,"p-inputfield-sm p-textarea-sm":e.pSize()===`small`,"p-textarea-lg p-inputfield-lg":e.pSize()===`large`,"p-invalid":e.invalid()}]};var ie=(()=>{class e extends Y{name=`textarea`;style=se;classes=de;static ɵfac=(()=>{let t;return function(i){return(t||(t=Tf(e)))(i||e)}})();static ɵprov=k({token:e,factory:e.ɵfac})}return e})();var re=new C(`TEXTAREA_INSTANCE`);var ne=(()=>{class e extends S{componentName=`Textarea`;bindDirectiveInstance=g(Fs,{self:!0});$pcTextarea=g(re,{optional:!0,skipSelf:!0})??void 0;pTextareaPT=qP();pTextareaUnstyled=qP();autoResize=qP(!1,{transform:gC});pSize=qP();variant=qP();fluid=qP(void 0,{transform:gC});invalid=qP(void 0,{transform:gC});$variant=Bw(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=WP();ngControlSubscription;_componentStyle=g(ie);ngControl=g(V,{optional:!0,self:!0});pcFluid=g(H,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}constructor(){super(),Dd(()=>{let t=this.pTextareaPT();t&&this.directivePT.set(t)}),Dd(()=>{this.pTextareaUnstyled()&&this.directiveUnstyled.set(this.pTextareaUnstyled())})}onInit(){this.ngControl?.valueChanges&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize()&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.autoResize()&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(t){this.writeModelValue(t.target?.value),this.updateState()}resize(t){this.el.nativeElement.style.height=`auto`,this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+`px`,parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY=`scroll`,this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow=`hidden`,this.onResize.emit(t||{})}updateState(){this.autoResize()&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static ɵfac=function(r){return new(r||e)};static ɵdir=Xr({type:e,selectors:[[``,`pTextarea`,``],[``,`pInputTextarea`,``]],hostVars:2,hostBindings:function(r,i){r&1&&Ih(`input`,function(p){return i.onInput(p)}),r&2&&JI(i.cx(`root`))},inputs:{pTextareaPT:[1,`pTextareaPT`],pTextareaUnstyled:[1,`pTextareaUnstyled`],autoResize:[1,`autoResize`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},outputs:{onResize:`onResize`},features:[Dw([ie,{provide:re,useExisting:e},{provide:Fi,useExisting:e}]),QE([Fs]),ah]})}return e})();var oe=(()=>{class e{static ɵfac=function(r){return new(r||e)};static ɵmod=ns({type:e});static ɵinj=vr({})}return e})();var ae=zn(()=>{});var je=(()=>{class e{constructor(){this.userService=g(ze),this.translateService=g(F),this._emitterService=g(Se),this._initialProfile=Bw(()=>{let t=this.userService.user();return{name:t.name||``,phone:t.phone||``,bio:t.bio||``}}),this.profileModel=fi(this._initialProfile()),this.profileForm=On(this.profileModel,ae),this.isSubmitDisabled=Bw(()=>this.profileForm().invalid()),this._emitterService.onComplete(`us.user`).pipe(U()).subscribe(()=>{this.profileModel.set(this._initialProfile()),this.profileForm().reset()})}wFormSubmit(){Bn(this.profileForm,t=>(this.userService.user.set(r(r({},this.userService.user()),t().value())),this.userService.updateMe(),Promise.resolve()))}updateThumb(t){this.userService.user.set(s(r({},this.userService.user()),{thumb:t})),this.userService.updateMe()}static{this.ɵfac=function(r){return new(r||e)}}static{this.ɵcmp=UE({type:e,selectors:[[`ng-component`]],decls:15,vars:15,consts:[[1,`profile`],[1,`profile__card`],[`mode`,`single-image`,`view`,`thumb-only`,3,`wImageChange`,`wImage`,`container`,`name`,`accept`,`clearable`,`preview`,`cropWidth`,`cropHeight`],[1,`profile__form`,3,`submit`],[`pInputText`,``,1,`w-full`,3,`placeholder`,`formField`],[`pInputText`,``,`type`,`tel`,1,`w-full`,3,`placeholder`,`formField`],[`pTextarea`,``,1,`w-full`,3,`placeholder`,`formField`],[1,`profile__actions`],[`pButton`,``,`type`,`submit`,3,`disabled`],[`translate`,``],[`type`,`button`,1,`profile__logout`,3,`click`],[1,`pi`,`pi-sign-out`]],template:function(r,i){r&1&&(Hi(0,`section`,0)(1,`div`,1)(2,`ngx-file`,2),Ih(`wImageChange`,function(p){return i.updateThumb(p||``)}),uu(),Hi(3,`form`,3),Ih(`submit`,function(p){return i.wFormSubmit(),p.preventDefault()}),gh(4,`input`,4),JD(),gh(5,`input`,5),JD(),gh(6,`textarea`,6),JD(),Hi(7,`div`,7)(8,`button`,8)(9,`span`,9),uw(10,`Update`),uu()()()()(),Hi(11,`button`,10),Ih(`click`,function(){return i.userService.logout()}),gh(12,`i`,11),Hi(13,`span`,9),uw(14,`Logout`),uu()()()),r&2&&(fD(2),hh(`wImage`,i.userService.thumb())(`container`,`user`)(`name`,i.userService.user()._id+`.jpg`)(`accept`,`image/*`)(`clearable`,!1)(`preview`,!0)(`cropWidth`,512)(`cropHeight`,512),fD(2),hh(`placeholder`,i.translateService.translate(`Enter your name...`)())(`formField`,i.profileForm.name),tE(),fD(),hh(`placeholder`,i.translateService.translate(`Enter your phone...`)())(`formField`,i.profileForm.phone),tE(),fD(),hh(`placeholder`,i.translateService.translate(`Enter your bio...`)())(`formField`,i.profileForm.bio),tE(),fD(2),hh(`disabled`,i.isSubmitDisabled()))},dependencies:[tn,to,Kn,nt,et,oe,ne,Ld,j],styles:[`.profile__card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%sp-4);padding:var(--%NS%sp-4);border:1px solid var(--%NS%c-border);border-radius:var(--%NS%radius-card);background:var(--%NS%c-bg-secondary);box-shadow:var(--%NS%shadow-sm)}.profile__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%sp-3)}.profile__actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--%NS%sp-2);padding-top:var(--%NS%sp-2)}.profile__logout[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:var(--%NS%sp-2);width:fit-content;margin-top:var(--%NS%sp-3);padding:var(--%NS%sp-3) var(--%NS%sp-5);border:1px solid transparent;border-radius:var(--%NS%radius-btn);background:var(--%NS%c-secondary);color:var(--%NS%c-text-secondary);font:600 .875rem/1 var(--%NS%ff-base);cursor:pointer}.profile__logout[_ngcontent-%COMP%]:hover{background:var(--%NS%c-secondary-hover)}.profile__logout[_ngcontent-%COMP%]:focus-visible{outline:none;box-shadow:var(--%NS%focus-ring)}`]})}}return e})();export{je as ProfileComponent};