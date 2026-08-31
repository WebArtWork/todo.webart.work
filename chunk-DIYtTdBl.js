import{Ar as vI,B as JI,Ct as Tf,Dr as uw,En as gC,Er as uu,G as KP,Gr as yI,J as LI,Nn as hh,Nr as vr,O as Hi,Ot as UE,Qn as ns,Qt as _h,S as FI,Tn as g,Vn as k,Vr as xI,Xt as _C,_ as Dw,an as bC,c as C,cr as qP,gt as SC,kn as gh,lt as QE,on as bh,ot as PI,pt as RI,rr as ph,t as $h,tn as ah,tt as OI,wr as uh,yn as fD}from"./chunk-DGjJOFgO.js";import{T as Un,d as Hn,j as Y$1,l as Fs,p as Is,s as Fi}from"./chunk-DpIl6n5S.js";var U=`
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
`;var Y=[`icon`];var Z=[`*`];function ee(e,s){if(e&1&&gh(0,`span`,3),e&2){let t=xI(2);JI(t.cx(`icon`)),hh(`ngClass`,t.icon())(`pBind`,t.ptm(`icon`))}}function te(e,s){if(e&1&&yI(0,ee,1,4,`span`,2),e&2)vI(xI().icon()?0:-1)}function ne(e,s){}function oe(e,s){e&1&&uh(0,ne,0,0,`ng-template`)}function ie(e,s){if(e&1&&(Hi(0,`span`,1),uh(1,oe,1,0,null,4),uu()),e&2){let t=xI();JI(t.cx(`icon`)),hh(`pBind`,t.ptm(`icon`)),fD(),hh(`ngTemplateOutlet`,t.iconTemplate||t._iconTemplate)}}var ae={root:({instance:e})=>[`p-tag p-component`,{"p-tag-info":e.severity===`info`,"p-tag-success":e.severity===`success`,"p-tag-warn":e.severity===`warn`,"p-tag-danger":e.severity===`danger`,"p-tag-secondary":e.severity===`secondary`,"p-tag-contrast":e.severity===`contrast`,"p-tag-rounded":e.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var W=(()=>{class e extends Y$1{name=`tag`;style=U;classes=ae;static ɵfac=(()=>{let t;return function(n){return(t||(t=Tf(e)))(n||e)}})();static ɵprov=k({token:e,factory:e.ɵfac})}return e})();var X=new C(`TAG_INSTANCE`);var re=(()=>{class e extends Is{componentName=`Tag`;$pcTag=g(X,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Fs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=qP();severity=qP();value=qP();icon=qP();rounded=qP(!1,{transform:gC});iconTemplate;templates=KP(Hn);_iconTemplate;_componentStyle=g(W);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`icon`&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded(),[this.severity()]:this.severity()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=Tf(e)))(n||e)}})();static ɵcmp=UE({type:e,selectors:[[`p-tag`]],contentQueries:function(o,n,C){if(o&1&&(_h(C,n.templates,Hn,4),bh(C,Y,4)),o&2){LI();let _;FI(_=PI())&&(n.iconTemplate=_.first)}},hostVars:3,hostBindings:function(o,n){o&2&&(ph(`data-p`,n.dataP),JI(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[Dw([W,{provide:X,useExisting:e},{provide:Fi,useExisting:e}]),QE([Fs]),ah],ngContentSelectors:Z,decls:5,vars:6,consts:[[3,`class`,`pBind`],[3,`pBind`],[3,`class`,`ngClass`,`pBind`],[3,`ngClass`,`pBind`],[4,`ngTemplateOutlet`]],template:function(o,n){o&1&&(RI(),OI(0),yI(1,te,1,1),yI(2,ie,2,4,`span`,0),Hi(3,`span`,1),uw(4),uu()),o&2&&(fD(),vI(!n.iconTemplate&&!n._iconTemplate?1:-1),fD(),vI(n.iconTemplate||n._iconTemplate?2:-1),fD(),JI(n.cx(`label`)),hh(`pBind`,n.ptm(`label`)),fD(),$h(n.value()))},dependencies:[SC,bC,_C,Un,Fs],encapsulation:2})}return e})();var ke=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=ns({type:e});static ɵinj=vr({imports:[re,Un,Un]})}return e})();export{re as n,ke as t};