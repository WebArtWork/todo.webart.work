import{$ as Ni,$n as sy,D as HS,Et as VS,Ft as Xd,Ht as _,L as Ka,Mt as Wd,N as Jd,Ot as Vd,Pt as Xa,Rn as p,Sn as ic,Tn as j_,Ut as _S,V as L_,Xn as sS,Zn as sT,at as Ov,bn as iH,bt as TS,cn as eo,f as D,in as ec,jn as mT,lt as Pv,mr as zv,pr as zS,rt as Oa,s as Av,sn as em,u as By,v as Fn,vt as SC,wt as US,xt as TT}from"./chunk-00exbmCc.js";import{N as Y$1,T as Us,i as Ds,o as Fi,u as Hn,w as Un}from"./chunk-BqyasRgF.js";var U=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var Y=[`icon`];var Z=[`*`];function ee(e,s){if(e&1&&Xa(0,`span`,3),e&2){let t=US(2);sT(t.cx(`icon`)),Pv(`ngClass`,t.icon())(`pBind`,t.ptm(`icon`))}}function te(e,s){if(e&1&&TS(0,ee,1,4,`span`,2),e&2)_S(US().icon()?0:-1)}function ne(e,s){}function oe(e,s){e&1&&Ov(0,ne,0,0,`ng-template`)}function ie(e,s){if(e&1&&(Oa(0,`span`,4),Ov(1,oe,1,0,null,5),Wd()),e&2){let t=US();sT(t.cx(`icon`)),Pv(`pBind`,t.ptm(`icon`)),SC(),Pv(`ngTemplateOutlet`,t.iconTemplate||t._iconTemplate)}}var ae={root:({instance:e})=>[`p-tag p-component`,{"p-tag-info":e.severity===`info`,"p-tag-success":e.severity===`success`,"p-tag-warn":e.severity===`warn`,"p-tag-danger":e.severity===`danger`,"p-tag-secondary":e.severity===`secondary`,"p-tag-contrast":e.severity===`contrast`,"p-tag-rounded":e.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var W=(()=>{class e extends Y$1{name=`tag`;style=U;classes=ae;static ɵfac=(()=>{let t;return function(n){return(t||(t=em(e)))(n||e)}})();static ɵprov=_({token:e,factory:e.ɵfac})}return e})();var X=new D(`TAG_INSTANCE`);var re=(()=>{class e extends Ds{componentName=`Tag`;$pcTag=p(X,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(Us,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=ic();severity=ic();value=ic();icon=ic();rounded=ic(!1,{transform:Ni});iconTemplate;templates=iH(Hn);_iconTemplate;_componentStyle=p(W);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`icon`&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded(),[this.severity()]:this.severity()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=em(e)))(n||e)}})();static ɵcmp=Vd({type:e,selectors:[[`p-tag`]],contentQueries:function(o,n,C){if(o&1&&(zv(C,n.templates,Hn,4),ec(C,Y,4)),o&2){zS();let _;Xd(_=Jd())&&(n.iconTemplate=_.first)}},hostVars:3,hostBindings:function(o,n){o&2&&(Ka(`data-p`,n.dataP),sT(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[TT([W,{provide:X,useExisting:e},{provide:Fi,useExisting:e}]),sS([Us]),Av],ngContentSelectors:Z,decls:5,vars:6,consts:[[`aria-hidden`,`true`,3,`class`,`pBind`],[3,`pBind`],[`aria-hidden`,`true`,3,`class`,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`pBind`],[4,`ngTemplateOutlet`]],template:function(o,n){o&1&&(VS(),HS(0),TS(1,te,1,1),TS(2,ie,2,4,`span`,0),Oa(3,`span`,1),mT(4),Wd()),o&2&&(SC(),_S(!n.iconTemplate&&!n._iconTemplate?1:-1),SC(),_S(n.iconTemplate||n._iconTemplate?2:-1),SC(),sT(n.cx(`label`)),Pv(`pBind`,n.ptm(`label`)),SC(),sy(n.value()))},dependencies:[By,L_,j_,Un,Us],encapsulation:2})}return e})();var ke=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=eo({type:e});static ɵinj=Fn({imports:[re,Un,Un]})}return e})();export{re as n,ke as t};