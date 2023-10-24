import{p as v,q as P}from"./links.da3be5e7.js";import{t as b}from"./tags.0f985950.js";import{C as $}from"./Index.7d0ce25e.js";import{C as L}from"./index.6d5de07f.js";import{G as U,a as k}from"./Row.b4141467.js";import{r as d,c as h,a as n,d as A,w as i,n as W,b as p,f as g,o as r,K as x,L as O,z as o,D as c}from"./vue.runtime.esm-bundler.c297bd08.js";import{_ as I}from"./_plugin-vue_export-helper.8a32e791.js";import"./default-i18n.3881921e.js";import"./isArrayLikeObject.10b615a9.js";import"./Caret.8cc4e863.js";import"./constants.44daa6bb.js";/* empty css                                              *//* empty css                                            */const E={setup(){return{pluginsStore:v(),wpCodeStore:P()}},components:{Cta:$,CoreAlert:L,GridColumn:U,GridRow:k},data(){return{loadingUseSnippet:null,failed:!1,activationLoading:!1,strings:{codesnippets:this.$t.__("Code Snippets",this.$td),installSnippet:this.$t.__("Use Snippet",this.$td),editSnippet:this.$t.__("Edit Snippet",this.$td),ctaDescription:this.$t.__("Using WPCode you can install AIOSEO code snippets with 1-click directly from this page or the WPCode library inside the WordPress admin.",this.$td),ctaLearnMoreText:this.$t.__("Learn More about WPCode Snippets",this.$td),noSnippets:this.$t.__("We encountered an error loading the code snippets, please try again later.",this.$td),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$td)}}},computed:{showSnippets(){return this.wpCodeStore.pluginInstalled&&this.wpCodeStore.pluginActive&&!this.wpCodeStore.pluginNeedsUpdate},blurClass(){return this.showSnippets?"":"aioseo-blur"},ctaTitle(){if(this.wpCodeStore.pluginNeedsUpdate)return this.$t.__("Please Update WPCode to load the AIOSEO Snippet Library",this.$td);if(this.wpCodeStore.pluginInstalled){if(!this.wpCodeStore.pluginActive)return this.$t.__("Please Activate WPCode to load the AIOSEO Snippet Library",this.$td)}else return this.$t.__("Please Install WPCode to load the AIOSEO Snippet Library",this.$td);return this.$t.__("Please Install WPCode to load the AIOSEO Snippet Library",this.$td)},ctaButtonText(){if(this.wpCodeStore.pluginNeedsUpdate)return this.$t.__("Update WPCode",this.$td);if(this.wpCodeStore.pluginInstalled){if(!this.wpCodeStore.pluginActive)return this.$t.__("Activate WPCode",this.$td)}else return this.$t.__("Install WPCode",this.$td);return this.$t.__("Install WPCode",this.$td)}},methods:{processUpdateOrActivate(){this.activateOrUpdate(this.wpCodeStore.pluginNeedsUpdate)},activateOrUpdate(l=!1){this.failed=!1,this.activationLoading=!0;const u=l?"upgradePlugins":"installPlugins",a=this.pluginsStore.plugins.wpcodePro.installed?"wpcodePro":"wpcode";this.pluginsStore[u]([{plugin:a,type:"plugin"}]).then(t=>{if(t.body.failed.length){this.activationLoading=!1,this.failed=!0;return}const e=[this.wpCodeStore.loadSnippets()];Promise.all(e).then(()=>{this.activationLoading=!1})}).catch(t=>{this.activationLoading=!1,this.failed=!0,console.error(`Unable to install ${a}: ${t}`)})},decodeHTMLEntities(l){return b.decodeHTMLEntities(l)}}},T={class:"aioseo-tools-wpcode"},N={class:"aioseo-wpcode-snippet"},B={class:"wpcode-snippet-body"},M={class:"snippet-title"},D={class:"snippet-description"},z={class:"wpcode-snippet-footer"};function V(l,u,m,a,t,e){const _=d("base-button"),f=d("grid-column"),S=d("grid-row"),C=d("cta"),w=d("core-alert");return r(),h("div",T,[n("div",{class:W(e.blurClass)},[A(S,null,{default:i(()=>[(r(!0),h(x,null,O(a.wpCodeStore.snippets,(s,y)=>(r(),p(f,{key:y,sm:"12",md:"6",lg:"4"},{default:i(()=>[n("div",N,[n("div",B,[n("div",M,o(s.title),1),n("div",D,o(s.note),1)]),n("div",z,[s.install?(r(),p(_,{key:0,type:"blue",size:"medium",tag:"a",href:e.decodeHTMLEntities(s.install),onClick:G=>t.loadingUseSnippet=s.install,loading:s.install===t.loadingUseSnippet},{default:i(()=>[c(o(s.installed?t.strings.editSnippet:t.strings.installSnippet),1)]),_:2},1032,["href","onClick","loading"])):(r(),p(_,{key:1,type:"gray",size:"medium",disabled:""},{default:i(()=>[c(o(t.strings.installSnippet),1)]),_:1}))])])]),_:2},1024))),128))]),_:1})],2),!e.showSnippets&&a.wpCodeStore.snippets.length?(r(),p(C,{key:0,"button-text":e.ctaButtonText,"learn-more-link":l.$links.getDocUrl("wpcode"),"cta-button-loading":t.activationLoading,onCtaButtonClick:e.processUpdateOrActivate,"same-tab":"","align-top":"","cta-button-action":"","hide-bonus":""},{"header-text":i(()=>[c(o(e.ctaTitle),1)]),description:i(()=>[c(o(t.strings.ctaDescription),1)]),"learn-more-text":i(()=>[c(o(t.strings.ctaLearnMoreText),1)]),_:1},8,["button-text","learn-more-link","cta-button-loading","onCtaButtonClick"])):g("",!0),e.showSnippets&&a.wpCodeStore.snippets.length===0?(r(),p(w,{key:1,type:"yellow"},{default:i(()=>[n("div",null,o(t.strings.noSnippets),1)]),_:1})):g("",!0)])}const it=I(E,[["render",V]]);export{it as default};
