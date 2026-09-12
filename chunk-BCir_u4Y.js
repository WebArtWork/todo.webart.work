import{D as HS,Dn as jv,Et as VS,Fn as oH,Ft as Xd,Ht as _,Jn as ri,Ln as oT,Mt as Wd,N as Jd,Ot as Vd,Rn as p,Sn as ic,Tn as j_,Ut as _S,Xn as sS,Zn as sT,an as ef,at as Ov,bn as iH,bt as TS,cn as eo,f as D,in as ec,jn as mT,lt as Pv,mr as zv,pr as zS,rt as Oa,s as Av,sn as em,u as By,v as Fn,vt as SC,wn as j,wt as US,xt as TT}from"./chunk-00exbmCc.js";import{N as Y,Q as ie$1,T as Us,et as kn,i as Ds,j as Ws,o as Fi,s as Fn$1,u as Hn,w as Un}from"./chunk-BqyasRgF.js";var ee=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&jv(0)}function se(t,r){if(t&1&&(Oa(0,`div`,1),HS(1,1),Ov(2,pe,1,0,`ng-container`,2),Wd()),t&2){let e=US();sT(e.cx(`header`)),Pv(`pBind`,e.ptm(`header`)),SC(2),Pv(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&mT(0),t&2)ef(` `,US(2).header(),` `)}function ue(t,r){t&1&&jv(0)}function fe(t,r){if(t&1&&(Oa(0,`div`,1),TS(1,me,1,1),Ov(2,ue,1,0,`ng-container`,2),Wd()),t&2){let e=US();sT(e.cx(`title`)),Pv(`pBind`,e.ptm(`title`)),SC(),_S(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),SC(),Pv(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&mT(0),t&2)ef(` `,US(2).subheader(),` `)}function he(t,r){t&1&&jv(0)}function ye(t,r){if(t&1&&(Oa(0,`div`,1),TS(1,_e,1,1),Ov(2,he,1,0,`ng-container`,2),Wd()),t&2){let e=US();sT(e.cx(`subtitle`)),Pv(`pBind`,e.ptm(`subtitle`)),SC(),_S(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),SC(),Pv(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&jv(0)}function ge(t,r){t&1&&jv(0)}function be(t,r){if(t&1&&(Oa(0,`div`,1),HS(1,2),Ov(2,ge,1,0,`ng-container`,2),Wd()),t&2){let e=US();sT(e.cx(`footer`)),Pv(`pBind`,e.ptm(`footer`)),SC(2),Pv(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends Y{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=em(t)))(n||t)}})();static ɵprov=_({token:t,factory:t.ɵfac})}return t})();var ne=new D(`CARD_INSTANCE`);var Me=(()=>{class t extends Ds{componentName=`Card`;$pcCard=p(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(Us,{self:!0});_componentStyle=p(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=ic();subheader=ic();style=ic();styleClass=ic();headerFacet=oH(kn);footerFacet=oH(Fn$1);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=oH(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=j(null);constructor(){super(),ri(()=>{let e=this.style();ie$1(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=iH(Hn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=Vd({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(zv(l,n.headerFacet,kn,5)(l,n.footerFacet,Fn$1,5)(l,n.contentTemplate,ie,4)(l,n.templates,Hn,4),ec(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){zS(4);let d;Xd(d=Jd())&&(n.headerTemplate=d.first),Xd(d=Jd())&&(n.titleTemplate=d.first),Xd(d=Jd())&&(n.subtitleTemplate=d.first),Xd(d=Jd())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(oT(n._style()),sT(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[TT([te,{provide:ne,useExisting:t},{provide:Fi,useExisting:t}]),sS([Us]),Av],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(VS(de),TS(0,se,3,4,`div`,0),Oa(1,`div`,1),TS(2,fe,3,5,`div`,0),TS(3,ye,3,5,`div`,0),Oa(4,`div`,1),HS(5),Ov(6,Te,1,0,`ng-container`,2),Wd(),TS(7,be,3,4,`div`,0),Wd()),i&2&&(_S(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),SC(),sT(n.cx(`body`)),Pv(`pBind`,n.ptm(`body`)),SC(),_S(n.header()||n.titleTemplate||n._titleTemplate?2:-1),SC(),_S(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),SC(),sT(n.cx(`content`)),Pv(`pBind`,n.ptm(`content`)),SC(2),Pv(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),SC(),_S(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[By,j_,Un,Ws,Us],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=eo({type:t});static ɵinj=Fn({imports:[Me,Un,Ws,Un,Ws]})}return t})();export{Ve as n,Me as t};