webpackJsonp([29],{185:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),r=a(2),c=a(80),s=a(182),i=a(8),o=a(29),l=a(1),u=a(3),h=a(54),p={getInitialState:function(){var t=null,e={};return this.props.shareAccounts.getIn(["twitter"]).isEmpty()?this.props.shareAccounts.getIn(["facebook"]).isEmpty()||(t="facebook",e=r.fromJS(this.transformAccount("facebook")(this.props.shareAccounts.getIn(["facebook"]).get(0)))):(t="twitter",e=r.fromJS(this.transformAccount("twitter")(this.props.shareAccounts.getIn(["twitter"]).get(0)))),{type:t,selected:e}}},f={twitter:"Tweet",facebook:"Post"},m={onClick:function(t){if("NoAccount"===t.get("account_type"))return u.default.UI.openSheet("sharingAccounts"),void this.forceUpdate();this.setState({type:t.get("account_type"),selected:t})},linkToShare:function(){return this.props.bitlink.get("keywordLink")||this.props.bitlink.get("userLink")},transformAccount:function(t){return function(e){var a=e.toJS();return a.account_type=t,a.label=h.default(t),a.secondLabel="twitter"===t?"@"+a.account_name:a.account_name,a.enabled=!1,a}},shareForm:function(t,e,a){if(!e)return null;var c,i=a.reduce(function(t,e,a){return t=e.isEmpty()?t.concat([{account_type:"NoAccount",label:h.default(a),secondLabel:"",enabled:!1}]).toList():t.concat(e.map(m.transformAccount(a))).toList()},r.List()),l=e.get("title","")+" "+this.linkToShare();switch(t){case"twitter":c=n.createElement(s.default,{ref:"post",label:"Your Tweet",value:l,maxLength:140,placeholder:l});break;case"facebook":c=n.createElement(s.default,{ref:"post",label:"Your Post",value:l,placeholder:l});break;default:c=n.createElement("div",{className:"checklist--wrapper"},n.createElement(o.default,{items:i.map(function(t){return r.fromJS(t)}),itemClickCallback:this.onClick,radio:!0}))}return c},submitShareBitlinkForm:function(t){t.preventDefault();var e={share_text:this.refs.post.state.value,share_title:this.props.bitlink.get("title"),share_link:this.linkToShare()};e.account_id=this.state.selected.get("account_id"),u.default.API.shareBitlink(e,this.state.type)}},d=l("BitlinkShareSheet",[m,p,f],function(t){var e=this,a=t.bitlink,s=(t.user,t.shareAccounts);return n.createElement("div",{className:"action-sheet--content-wrapper"},n.createElement("form",{onSubmit:this.submitShareBitlinkForm},null!==this.state.type&&n.createElement("a",{href:"#",onClick:function(){return e.onClick(r.fromJS({account_type:null}))}},n.createElement(c.default,{checkbox:!1,label:this.state.selected.get("label"),secondLabel:this.state.selected.get("secondLabel")})),this.shareForm(this.state.type,a,s),null!==this.state.type&&"NoAccount"!==this.state.type&&n.createElement("div",{className:"action-sheet--button-wrapper-visible"},n.createElement(i.default,{aspect:"SOLID-SECONDARY",label:f[this.state.type],type:"submit"}))))});e.default=d}});
//# sourceMappingURL=chunk-bitlinkShareSheet-169060b0bfb1872edc11.js.map