"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[1963],{29014:(e,t,i)=>{i.r(t),i.d(t,{PiPMiniPlayer:()=>Re,TEST_IDS:()=>Pe});var n=i(50959),l=i(84875),a=i.n(l),o=i(32780),r=i(29611),s=i(99211),c=i(5701),u=(i(56202),i(23092),i(61470)),d=i(88923),m=i(75453),k=i(15162),g=i(8801),h=i(59242),p=i(78602),x=i(88798),C=i(13477),f=i(78952),y=i(64169),b=i(66574),v=i(37014),j=i(84899);const w="gXC4vnPDiiiiawwnDN6i",S="HGOZPJuKeigRY5I0vqQw",N="AZLdtyFhMa1Aqml2YhF2",B="QfiWYSeXiPwGYmKED38q";var P=i(11527);const R=({item:e,onClick:t,className:i})=>{const n=(0,f.QR)(e),l=(0,g.k6)(e)?n?.title:e.name,o=(0,g.k6)(e)?n?.subtitle:e.name,r="SMALL"===(0,C.G)().vertical;return(0,P.jsxs)("div",{className:a()(w,i),children:[(0,P.jsx)("div",{className:S,children:(0,P.jsx)(v.R,{title:l,children:(0,P.jsx)(x.x,{"data-testid":"context-item-info-title",as:"div",variant:r?"bodyMedium":"titleSmall",className:S,dir:"auto",children:(0,P.jsx)(b.b,{item:e,onClick:t,adUrl:n?.url,children:l})})},e.uri)}),(0,P.jsx)(j.t,{className:B,item:e}),(0,P.jsx)("div",{className:N,children:(0,P.jsx)(v.R,{title:o,children:(0,P.jsx)(x.x,{"data-testid":"context-item-info-subtitles",as:"div",variant:"bodySmall",className:N,semanticColor:"textSubdued",children:(0,P.jsx)(y._,{item:e,onClick:t,adSubtitle:o,adBlurbUri:n?.blurbUri,adUrl:n?.url?n?.url:void 0})})},e.uri)})]})};var E=i(80956),T=i(60820),F=i(39154),I=i(26917),V=i(67253);const _="yGrUaUzhqIFvdg5zlVYX",L="NSayKQ_soKzuAAg2YhAq",A="eF7BXmqMaY8xVdOtoH1Z",O="UgnljPH_Vf14LZWb1jBu",M={title:"cello",subtitle:"mesto"},D={title:"canon",subtitle:"ballad"},z=n.memo((()=>{const{openURLWithSessionTransfer:e}=(0,I.e)(),t="SMALL"===(0,C.G)().vertical?M:D,i=(0,V.d)("loggedin_upgrade_button"),l=(0,n.useCallback)((()=>{e(i(F.IT),"_blank")}),[i,e]);return(0,P.jsx)("div",{className:_,children:(0,P.jsxs)("div",{className:a()("encore-dark-theme","encore-layout-themes",L),children:[(0,P.jsx)(E.D,{variant:t.title,dir:"auto",className:A,children:c.ag.get("web-player.pip-mini-player.upsell.title")}),(0,P.jsx)(E.D,{variant:t.subtitle,semanticColor:"textSubdued",children:c.ag.get("web-player.pip-mini-player.upsell.subtitle")}),(0,P.jsx)("div",{className:O,children:(0,P.jsx)(T.D,{onClick:l,size:"small",children:c.ag.get("web-player.pip-mini-player.upsell.cta-button")})})]})})}));var H=i(81086),W=i(49857),U=i(98141),q=i(22385),G=i(59012),K=i(84435),Y=i(10201),Z=i(45255),X=i(49225),Q=i(22576),J=i(86506);function $(e){return{itemToBeSkipped:e.item?.uri||"",positionMs:(0,Q.k)(e)??-1,totalContentMs:e.duration??-1}}function ee(e){return Math.floor(100*e)}const te="E7rR1kkQFoqCTrZAxs8l",ie="I2v17dp_FDztHzG7CZy9",ne="H5VJw6yCxUOoh88LJ42y",le=n.memo((({item:e,spec:t,logger:i})=>{const l=e.uri,{onClickPlayPause:a,onClickLike:o,onClickSkipPrevious:r,onClickSkipNext:s,onClickRepeat:c,onClickShuffle:u,onClickVolumeButton:d,onClickVolumeBar:m,onDragVolumeBar:k,onClickSeekBack:h,onClickSeekForward:p}=(({uri:e,spec:t,logger:i})=>{const l=(0,n.useRef)(e);l.current=e;const a=(0,X.g)(),o=(0,n.useMemo)((()=>t.playerControlsFactory()),[t]),r=(0,n.useCallback)((e=>{let t=null;l.current&&("pause"===e?t=o.playPauseButtonFactory().hitPause({itemToBePaused:l.current}):"resume"===e&&(t=o.playPauseButtonFactory().hitResume({itemToBeResumed:l.current})),t&&i.logInteraction(t))}),[i,o]),s=(0,n.useCallback)((e=>{if(!l.current)return;const t=o.likeButtonFactory(),n=e?t.hitLike({itemToBeLiked:l.current}):t.hitRemoveLike({itemNoLongerLiked:l.current});i.logInteraction(n)}),[i,o]),c=(0,n.useCallback)((()=>{const e=a.getState();if(!e)return;const t=o.previousButtonFactory().hitSkipToPrevious($(e));i.logInteraction(t)}),[i,a,o]),u=(0,n.useCallback)((()=>{const e=a.getState();if(!e)return;const t=o.nextButtonFactory().hitSkipToNext($(e));i.logInteraction(t)}),[i,a,o]),d=(0,n.useCallback)((e=>{const t=o.repeatButtonFactory();let n=null;switch(e){case g.zq.REPEAT_TRACK:n=t.hitRepeatOneEnable();break;case g.zq.REPEAT_CONTEXT:n=t.hitRepeatEnable();break;case g.zq.REPEAT_NONE:n=t.hitRepeatDisable();break;default:(0,J._)(e)}n&&i.logInteraction(n)}),[i,o]),m=(0,n.useCallback)((e=>{if(!l.current)return;const t=e?"shuffle":"linear",n=e?"linear":"shuffle",a=o.shuffleButtonFactory({uri:l.current}).hitSelectShuffleMode({previousMode:n,selectedMode:t});i.logInteraction(a)}),[i,o]),k=(0,n.useCallback)((e=>{const t=o.volumeMuteButtonFactory();i.logInteraction("muted"===e?t.hitMutePlayback():t.hitUnmutePlayback())}),[i,o]),h=(0,n.useCallback)((e=>{const t=o.volumeBarFactory();i.logInteraction(t.hitSetVolume({newVolumePercentage:ee(e)}))}),[i,o]),p=(0,n.useCallback)((e=>{const t=o.volumeBarFactory();i.logInteraction(t.dragSetVolume({newVolumePercentage:ee(e)}))}),[i,o]),x=(0,n.useCallback)((e=>{const t=o.seekBackwardButtonFactory();i.logInteraction(t.hitSeekByTime({msSeekedOffset:e}))}),[i,o]);return{onClickSeekForward:(0,n.useCallback)((e=>{const t=o.seekForwardButtonFactory();i.logInteraction(t.hitSeekByTime({msSeekedOffset:e}))}),[i,o]),onClickSeekBack:x,onClickPlayPause:r,onClickLike:s,onClickSkipPrevious:c,onClickSkipNext:u,onClickRepeat:d,onClickShuffle:m,onClickVolumeButton:k,onClickVolumeBar:h,onDragVolumeBar:p}})({uri:l,spec:t,logger:i}),x=(0,C.G)(),f=(0,W.y1)(k,500,{leading:!1,trailing:!0});if(!l)return null;const y=(0,q.G)(e),b=(0,U.i)(e),v=function(e){if((0,U.i)(e)||(0,g.G7)(e))return"audio"===e.mediaType||"mixed"===e.mediaType;return!1}(e),j="SMALL"===x.horizontal;return"SMALL"===x.vertical?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Y.IF,{onClick:a}),v?(0,P.jsx)(Y.Of,{onClick:p}):(0,P.jsx)(Y.C$,{onClick:s})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("div",{className:te,children:[y&&(0,P.jsx)(K.B,{uri:l,onClick:o,className:ie}),b&&(0,P.jsx)(G.w,{uri:l,onClick:o,className:ie})]}),v?(0,P.jsx)(Y.FP,{onClick:h}):(0,P.jsx)(Y.P4,{onClick:u}),(0,P.jsx)(Y.Wu,{onClick:r}),(0,P.jsx)(Y.IF,{iconSize:j?"small":"medium",onClick:a,className:ne}),(0,P.jsx)(Y.C$,{onClick:s}),v?(0,P.jsx)(Y.Of,{onClick:p}):(0,P.jsx)(Y.$Z,{onClick:c}),(0,P.jsx)(Z.h,{mode:Z.R.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:"vertical",onToggleMuteClick:d,onVolumeBarClick:m,onVolumeBarDrag:f})]})}));var ae=i(4704),oe=i(90343),re=i(99529),se=i(42066),ce=i(25889),ue=i(63408);var de=i(58022);function me(e){if(!e)return null;return{width:e.innerWidth,height:e.innerHeight}}var ke=i(81468);const ge="transparent",he="AFZj_hxk7gFsvDDwhsHA",pe="UJwngpM5puDW7Frkha4F",xe="ktiXGqfcVuegTncUQJim",Ce="u7pi5kPx9ekghoqH8RcS",fe="EzVSQ6md_ZPcpGd373uw",ye="xM5DXnNVIBKl0D8KmkKr",be="xZLIxv5s2tm_tmFk3WK8",ve="X_fBDy8Kj2NkVB4npQT3",je="yMMglN43dvX2QKTUoivA",we="D0BU1OBnl1EjBDosrWXn",Se="tKfqdd6glswVG49yHgiT",Ne="Hbbk972I34uVuWeqBn2Q",Be="xI3ObXOh1ql5ZWoAUyff",Pe={HOVER_CONTAINER:"document-pip-hover-element",COVER_ART:"document-pip-cover-art",COVER_ART_PLACEHOLDER:"document-pip-cover-art-placeholder"},Re=n.memo((()=>{const{item:e,context:t}=(0,re.x)()??{},[i,l]=(0,n.useState)(!1),x=640,C=(0,r.W6)(oe.nN2),f=(0,n.useMemo)((()=>(0,p.o)(e?.images??void 0,{desiredSize:x})),[e?.images,x]),y=(0,m.b)(f,ge),b=(0,r.W6)(oe.YZd),v=(0,ae.E)();((e,t)=>{const i=(0,ke.Y)((e=>e?.nextItems?.[0]),((e,t)=>e?.uri===t?.uri)),l=(0,n.useMemo)((()=>(0,p.o)(i?.images??void 0,{desiredSize:e})),[i?.images,e]);(0,m.b)(l,t)})(x,ge);const{spec:j,logger:w}=(0,h.fU)(s.O,{}),S=(0,h.Wi)(j);(({spec:e,logger:t})=>{const i=(0,ue.zY)(),l=(0,n.useRef)(null);null===l.current&&(l.current=me(i)),(0,de.a)((()=>{const n=me(i);null!==n&&null!==l.current&&(t.logInteraction(e.dragUiResize2d({startWidthPx:l.current.width,startHeightPx:l.current.height,endWidthPx:n.width,endHeightPx:n.height})),l.current=n)}),{throttleTime:500,leading:!1,trailing:!0})})({logger:w,spec:j}),(({spec:e,logger:t,pipWindow:i})=>{(0,n.useEffect)((()=>{if(!i)return;const n=n=>{if(n.currentTarget===i){const i=e.windowControlsFactory().closeButtonFactory().hitUiHide();t.logInteraction(i)}};return i.addEventListener("pagehide",n),()=>{i.removeEventListener("pagehide",n)}}),[t,i,e])})({logger:w,spec:j,pipWindow:window.documentPictureInPicture?.window??null});const{setVideoPlayerUIFlag:N}=(0,se.l)(),{isPlayingRemotely:B}=(0,k.H)(),[E,T]=(0,n.useState)("");(0,n.useLayoutEffect)((()=>{T(pe)}),[]);const F=function(){const e=(0,ue.zY)(),[t,i]=(0,n.useState)(!1);return(0,de.a)((()=>{const t=me(e);null!==t&&(t.width<=300&&t.height<=300?i(!0):i(!1))}),{throttleTime:500,leading:!1,trailing:!0}),t}();(0,n.useEffect)((()=>{b&&N(ce.x.documentPip,!0)}),[b,N]);const I=(0,n.useCallback)((e=>{var t;(t=e.target)&&"object"==typeof t&&"nodeName"in t&&"A"===t.nodeName&&"_blank"!==e.target.target&&("showMainWindow"in window?window.showMainWindow?.():l(!0))}),[]);if(((e,t)=>{const i=(0,ue.zY)(),l=t??i;(0,n.useEffect)((()=>{e&&l&&(l.document.title=e)}),[e,l])})(c.ag.get("web-player.pip-mini-player.window-title")),(0,n.useEffect)((()=>{if(i){const e=setTimeout((()=>{l(!1)}),3e3);return()=>{clearTimeout(e)}}}),[i]),!e||!t)return null;const V={"--background-color":y,"--background-image-url":`url(${f})`,"--background-image-width":"640px","--background-image-height":"640px",display:"var(--mini-player-display)"},_=function(e){return"video"===e.mediaType||"mixed"===e.mediaType}(e);let L=!_;!_||!B&&b||(L=!0);const A=(0,g.k6)(e);return!C&&!A&&F?(0,P.jsx)(z,{}):(0,P.jsxs)("div",{className:he,style:{"--mini-player-display":"none"},children:[(0,P.jsxs)("div",{className:a()("encore-dark-theme","encore-layout-themes",xe,{[Ce]:v}),style:V,ref:S,children:[(0,P.jsx)("div",{className:a()(ye,{[be]:!_}),"data-testid":"pip-hover-element",children:(0,P.jsx)("div",{className:ve,id:"document-pip-main-container",children:L&&(0,P.jsx)(d.Ee,{className:je,src:f,loading:"eager",testid:Pe.COVER_ART,children:(0,P.jsx)("div",{className:we,children:(0,P.jsx)(u.t,{size:"xlarge",type:e.type,"data-testid":Pe.COVER_ART_PLACEHOLDER})})})})}),(0,P.jsx)(R,{item:e,className:Be,onClick:I}),(0,P.jsx)("div",{className:a()("encore-over-media-set",Se,{[Ne]:!(0,g.k6)(e)}),dir:"ltr","data-testid":Pe.HOVER_CONTAINER,children:(0,P.jsx)(le,{item:e,spec:j,logger:w})})]}),(0,P.jsx)("div",{className:E,children:(0,P.jsx)(H.E,{fadeIn:!1})}),(0,P.jsx)(o.A9,{colorSet:"invertedLight",showSnackbar:i,className:fe,children:c.ag.get("web-player.pip-mini-player.snackbar.link-opened-in-main-window")})]})}))}}]);
//# sourceMappingURL=xpui-pip-mini-player.js.map