"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[4338],{88797:(e,s,a)=>{a.r(s),a.d(s,{default:()=>Ls});var i=a(50959),t=a(11258),n=a(25890),r=a(5701),l=a(7973),d=a(35913),c=a(38423),o=a(23816),u=a(28528),m=a(38159),g=a(79476),x=a(56522),f=a(59242),h=(a(55330),a(80199)),b=a(84875),j=a.n(b),y=a(88798),p=a(90880),N=a(35665),v=a(74069),k=a(6243),C=a(57735),I=a(42057),L=a(51537),E=a(73855),S=a(54171),w=a(10435),O=a(45053),T=a(44870),M=a(61470),D=a(69767),U=a(22038),A=a(91733),B=a(22745);const _=e=>{if(!Number.isInteger(e))return"";const s=Date.now()-Number(e),a=Math.round(s/1e3/60),i=Math.round(s/1e3/60/60),t=Math.round(s/1e3/60/60/24),n=Math.round(s/1e3/60/60/24/7);return t>=7?r.ag.get("time.weeks.short",n):i>=24?r.ag.get("time.days.short",t):a>=60?r.ag.get("time.hours.short",i):a>0?r.ag.get("time.minutes.short",a):r.ag.get("time.now")};var P=a(11527);const z=e=>{const{timestamp:s,isNowPlaying:a}=e;return a?(0,P.jsx)(g.ws,{label:r.ag.get("time.now"),children:(0,P.jsx)(B.h,{"aria-label":r.ag.get("time.now"),size:"small"})}):(0,P.jsx)("span",{children:_(s)})},F="main-buddyFeed-friendActivity",J="VLKqDIGaQn2bILzJKSZ0",Y="main-buddyFeed-friendsFeedContainer",K="main-buddyFeed-avatarContainer",Z="main-buddyFeed-overlay",H="main-buddyFeed-playIcon",R="main-buddyFeed-activityMetadata",q="main-buddyFeed-usernameAndTimestamp",W="main-buddyFeed-username",Q="main-buddyFeed-timestamp",V="main-buddyFeed-artistAndTrackName",G="main-buddyFeed-playbackContextIcon",X="main-buddyFeed-playbackContext",$="main-buddyFeed-playbackContextLink",ee="main-buddyFeed-addFriendPlaceholder",se="main-buddyFeed-addFriendPlaceholderBtn",ae="main-buddyFeed-emptyBuddyFeed",ie="main-buddyFeed-addFriendPlaceholderText",te="PjDcsgAPmXlcTBJRGpIu",ne="IRpPQFA57qgQ5jicWWaD",re="Hm3nIbegLclY1uCAmnx_",le="bhRoVUHjWdo9mgUkU6fe",de="BliqfY7vu_qE2C9zs5Ou",ce="qdYWuHZd4HdSWfd4pSQB",oe="DhvYWKjDc7uyF3HfkDJJ",ue="ralK8s_OmE8a8zWcfNKM",me=e=>Date.now()-e<9e5,ge=(e,s)=>{const a=(0,p.EC)(e)?.type;switch(a){case p.JM.PLAYLIST:case p.JM.PLAYLIST_V2:return(0,P.jsx)(C.X,{uri:e});case p.JM.EPISODE:case p.JM.SHOW:return(0,P.jsx)(I.M,{uri:e});case p.JM.ALBUM:return(0,P.jsx)(v.Y,{uri:e,artistUri:s});case p.JM.ARTIST:return(0,P.jsx)(k.m,{uri:e});default:return null}},xe=e=>{switch(e){case p.JM.ALBUM:return A.p.ALBUM;case p.JM.ARTIST:return A.p.ARTIST;case p.JM.SHOW:return A.p.SHOW;case p.JM.EPISODE:return A.p.EPISODE;case p.JM.PLAYLIST:case p.JM.PLAYLIST_V2:return A.p.PLAYLIST;default:return}},fe=e=>{const{show:s=!0,spec:a,friend:t}=e,n=(0,i.useMemo)((()=>t.user.imageUrl?[{url:t.user.imageUrl,width:0,height:0}]:[]),[t.user.imageUrl]),l=(0,u.o)(),d=(0,f.$P)(),c=t.track,o=c.uri,{togglePlay:m,isPlaying:g,isActive:x}=(0,U.n)({uri:o},{featureIdentifier:"buddy_feed",referrerIdentifier:"buddy_feed"}),h=(0,p.EC)(c.context?.uri),b=h?.type,v=(0,i.useCallback)((()=>{m(),l({intent:g?"pause":"play",type:"click",itemIdSuffix:"buddyfeed_play",targetUri:o});const e=a.friendRowFactory().playButtonFactory();x?g?d.logInteraction(e.hitPause({itemToBePaused:o})):d.logInteraction(e.hitResume({itemToBeResumed:o})):d.logInteraction(e.hitPlay({itemToBePlayed:o}))}),[l,g,o,a,x,m,d]),C=(0,i.useCallback)(((e,s)=>{d.logInteraction(a.friendRowFactory().friendRowLinkFactory({identifier:e}).hitUiNavigate({destination:s}))}),[d,a]),I=(0,O.O)({itemUris:[o],dragLabelText:c.name}),A=(0,O.O)({itemUris:[c.artist?.uri],dragLabelText:c.artist?.name}),B=(0,O.O)({itemUris:[c.context?.uri],dragLabelText:c.context?.name});return s?(0,P.jsxs)("div",{className:j()(F),children:[(0,P.jsx)(T._,{menu:ge(c.context?.uri,c.artist?.uri),children:(0,P.jsxs)("div",{className:K,children:[(0,P.jsx)(N.q,{label:t.user.name,width:40,userIconSize:"small",images:n,withBadge:me(t.timestamp)}),(0,P.jsx)(w.I,{className:Z,iconClassName:H,isPlaying:g,isLocked:!1,onClick:v,playAriaLabel:g?r.ag.get("pause"):`${r.ag.get("play")} ${c.artist.name} ${c.name}`})]})}),(0,P.jsxs)("div",{className:j()(R),children:[(0,P.jsxs)("div",{className:q,children:[(0,P.jsx)(y.x,{as:"p",variant:"bodySmallBold",className:j()(W,"ellipsis-one-line"),children:(0,P.jsx)(D.JL,{value:"/buddyfeed_user_profile",children:(0,P.jsx)(T._,{menu:(0,P.jsx)(E.I,{uri:t.user.uri}),children:(0,P.jsx)(S.Link,{title:t.user.name,to:t.user.uri,dir:"auto",onClick:()=>C("profile_link",t.user.uri),children:t.user.name})})})}),(0,P.jsx)(y.x,{as:"p",variant:"marginal",className:j()(Q),children:(0,P.jsx)(z,{timestamp:t.timestamp,isNowPlaying:me(t.timestamp)})})]}),(0,P.jsxs)(y.x,{as:"p",variant:"marginal",className:V,children:[(0,P.jsx)(D.JL,{value:"/buddyfeed_track",children:(0,P.jsx)(T._,{menu:(0,P.jsx)(L.$,{uri:c.uri,contextUri:c.context?.uri,albumUri:c.album?.uri,artists:[c.artist]}),children:(0,P.jsx)(S.Link,{title:c.name,to:o,className:"ellipsis-one-line",dir:"auto",draggable:!0,onDragStart:I,onClick:()=>C("track_link",o),children:c.name})})}),(0,P.jsx)("span",{"aria-hidden":!0,children:" • "}),(0,P.jsx)(D.JL,{value:"/buddyfeed_artist",children:(0,P.jsx)(T._,{menu:c.artist?(0,P.jsx)(k.m,{uri:c.artist.uri}):null,children:(0,P.jsx)(S.Link,{title:c.artist?.name,to:c.artist?.uri,className:"ellipsis-one-line",dir:"auto",draggable:!0,onDragStart:A,onClick:()=>C("artist_link",c.artist?.uri),children:c.artist?.name})})})]}),(0,P.jsx)(y.x,{as:"p",variant:"marginal",className:j()("ellipsis-one-line",X),children:(0,P.jsx)(D.JL,{value:"/buddyfeed_context",children:(0,P.jsx)(T._,{menu:ge(c.context?.uri,c.artist?.uri),children:(0,P.jsxs)(S.Link,{title:c.context?.name,to:c.context?.uri,className:$,draggable:!0,onDragStart:B,onClick:()=>C("context_link",c.context?.uri),children:[(0,P.jsx)(M.t,{type:xe(b),iconSize:16,className:G}),(0,P.jsx)("span",{dir:"auto",className:"ellipsis-one-line",children:c.context?.name})]})})})})]})]},t.user.uri):null};function he({friends:e,spec:s}){return(0,P.jsx)(h.U5,{flipKey:e.map((e=>e.user.uri)).join(""),children:(0,P.jsx)("ol",{children:e.map(((e,a)=>(0,P.jsx)(h.$3,{flipId:e.user.uri,children:(0,P.jsx)("li",{children:(0,P.jsx)(fe,{friend:e,show:a<100,spec:s},e.user.uri)})},e.user.uri)))})})}var be=a(86259),je=a(60820),ye=a(40946),pe=a(77370),Ne=a(13704),ve=(a(14534),a(99801),a(49857)),ke=a(5470),Ce=a(18436),Ie=a(40428),Le=a(4345),Ee=a(75364);const Se="w5nHQ74JGTytKwWanjvB",we="u11kJflcqt7CSXo9qL_T",Oe="MmENkh6tW0MyjTtTtPHZ",Te="Gl0dkNQbAyNjVZ1IpghI",Me=({name:e,following:s,imageUrl:a,uri:n})=>{const l=(0,Le.q)(),d=(0,u.o)(),c=i.createRef(),[o,g]=(0,i.useState)(s);(0,Ee.d)(Ie.rA.OPERATION_COMPLETE,(e=>{if(e.data.uris.includes(n))switch(e.data.operation){case Ie.BM.FOLLOW_USER:g(!0);break;case Ie.BM.UNFOLLOW_USER:g(!1)}}));const x=(0,i.useCallback)((()=>{o?l.unfollowUsers([n]):(l.followUsers([n]),d({intent:"follow",type:"click",itemIdSuffix:"buddyfeed"})),c.current&&c.current.blur()}),[o,c,n,l,d]);return(0,i.useEffect)((()=>{g(s)}),[s]),(0,P.jsxs)("div",{className:Se,children:[(0,P.jsx)(N.q,{label:e,width:40,userIconSize:"small",images:(0,i.useMemo)((()=>[{width:40,height:40,url:a}]),[a])}),(0,P.jsxs)("div",{className:j()(we,"ellipsis-one-line"),children:[(0,P.jsx)(y.x,{as:"p",variant:"bodySmallBold",className:"ellipsis-one-line",children:e}),o&&(0,P.jsx)(y.x,{as:"p",variant:"marginal",className:"ellipsis-one-line",children:r.ag.get("following")})]}),(0,P.jsx)("div",{className:Oe,children:(0,P.jsx)(m.E,{className:Te,size:"sm",ref:c,onClick:x,ariaLabel:o?r.ag.get("buddy-feed.button.remove-friend"):r.ag.get("buddy-feed.button.add-friend"),icon:o?Ce.k:t.t})})]})},De="main-buddyFeed-friendsList";function Ue({facebookFriends:e}){return(0,P.jsx)("div",{className:De,children:e.map((({uri:e,following:s,title:a,image:i})=>(0,P.jsx)(Me,{uri:e,name:a,imageUrl:i,following:s},`fb-friend-${e}`)))})}var Ae=a(78453);const Be="main-buddyFeed-loadingFriends";function _e(){return(0,P.jsx)("div",{className:Be,children:Array(20).fill(0).map(((e,s)=>(0,P.jsx)(Ae.C,{isLoading:!0,charCount:100,as:"p",variant:"titleSmall"},s)))})}var Pe=a(39017),ze=a(69200);const Fe="pZFwflwH1vXVCmAO5vbz",Je="yPL55nV5rC97vJhAf7ke",Ye="qpgo9DQ9rVZbO5pLJog5",Ke="A3hvkJOGkBNa6zWj6oZa",Ze="pIyez6N1SF3jW0U5VUx4",He="lIxuZR4lYTrEKkMYedty",Re="VEmC3OHK3uAasHvO5OuA",qe="wzGPtuvvLpOpY1PDu4Qv",We="YoJTUV4hazVCFNbfKoNq",Qe=({onBackButtonClick:e})=>{const[s,a]=(0,i.useState)(""),{isLoading:t,friends:n}=(e=>{const s=(0,ze.I)(),a=e.trim().toLowerCase(),{data:i,isLoading:t}=(0,Pe.useQuery)("useFacebookFriends",(async()=>(await s.fetchFacebookFriends()).sort(((e,s)=>e.title>s.title?1:-1))));return{isLoading:t,friends:i?.filter((({title:e})=>-1!==e.trim().toLowerCase().indexOf(a)))??[]}})(s),l=(0,ve.y1)((e=>{a(e.target.value)}),100),d=(0,i.useCallback)((e=>{null!==e&&e.focus()}),[]);return(0,P.jsxs)("div",{className:Fe,children:[(0,P.jsx)(m.E,{ariaLabel:r.ag.get("buddy-feed.button.back"),onClick:e,ref:d,className:Je,icon:be.e,size:"sm",testId:"back-to-friends"}),(0,P.jsxs)("div",{className:Ye,children:[(0,P.jsx)("div",{className:Ke,children:(0,P.jsx)(ye.z,{className:Ze,size:"large"})}),(0,P.jsx)("div",{className:He,children:t?(0,P.jsx)(Ae.C,{isLoading:!0,charCount:25,as:"p",variant:"bodySmall"}):(0,P.jsx)(y.x,{as:"p",variant:"bodySmall",children:r.ag.get("buddy-feed.number-of-friends",n.length)})})]}),t?(0,P.jsx)(_e,{}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("div",{className:Re,children:[(0,P.jsx)(ke.j,{className:We,size:"small",role:"presentation"}),(0,P.jsx)("input",{onChange:l,className:qe,placeholder:r.ag.get("buddy-feed.find-in-playlists")})]}),(0,P.jsx)(Ue,{facebookFriends:n})]})]})};var Ve=a(81264);function Ge({isOpen:e,onClose:s,onConfirm:a}){return(0,P.jsx)(Ve.Q,{onClose:s,"aria-label":r.ag.get("web-player.buddy-feed.connect-with-facebook-title"),onConfirm:a,titleText:r.ag.get("web-player.buddy-feed.connect-with-facebook-title"),descriptionText:r.ag.get("web-player.buddy-feed.connect-with-facebook-description"),cancelText:r.ag.get("queue.cancel-button"),confirmText:r.ag.get("web-player.buddy-feed.connect-button"),isOpen:e})}let Xe=function(e){return e[e.LOADING=0]="LOADING",e[e.CONNECTED=1]="CONNECTED",e[e.DISCONNECTED=2]="DISCONNECTED",e}({});const $e="EmZCbU1_B_J9RAHebolL",es="Ym6Yyx83U7mNKOMw9dxw",ss="NXcZaSipzomJ6d4_nM94",as="b9rqRkvRvhrSY4FYHQVC",is="xHc_2FQr3NxfCgfDSVhY",ts="QAJYN0xWh3h2A5d8_C1g",ns="PKhH1CknobkjJdVITsb4",rs="HgRmCE3NxfiYNtv6pF3H",ls="HnA5mipUMkheAlbxqCn_",ds="mvp0xhvZTo0xv0TIwi9u",cs=e=>{const s=(0,u.o)(),{onBackButtonClick:a,feedIsEmpty:t,goToAddFriends:n=!1}=e,l=function(){const e=(0,ze.I)(),[s,a]=(0,i.useState)(Xe.LOADING);return(0,i.useEffect)((()=>e.subscribeToFacebookConnectionState((e=>{a(e.connection?Xe.CONNECTED:Xe.DISCONNECTED)})).cancel),[e]),s}(),d=(0,ze.I)(),[c,o]=(0,i.useState)(!1),[g,x]=(0,i.useState)(!1),[f,h]=(0,i.useState)(!1),b=(0,i.useCallback)((e=>{null!==e&&e.focus()}),[]),j=(0,i.useCallback)((()=>{location.reload()}),[]);if(g)return(0,P.jsxs)("div",{className:ls,children:[(0,P.jsx)(m.E,{onClick:a,ref:b,className:ss,ariaLabel:r.ag.get("buddy-feed.button.back"),icon:be.e,size:"sm"}),(0,P.jsxs)("div",{className:ds,children:[(0,P.jsx)(y.x,{as:"h1",variant:"bodyMediumBold",className:es,children:r.ag.get("error-dialog.generic.header")}),(0,P.jsx)(y.x,{as:"p",variant:"bodySmall",className:as,children:r.ag.get("error-dialog.generic.body")}),(0,P.jsx)(je.D,{colorSet:"invertedLight",onClick:j,children:r.ag.get("error.reload")})]})]});const p=(n||f)&&l===Xe.CONNECTED;return(0,P.jsxs)("div",{className:$e,children:[p&&(0,P.jsx)(Qe,{onBackButtonClick:()=>{t&&h(!1),a()}}),!p&&(0,P.jsxs)("div",{className:ts,children:[(0,P.jsx)(m.E,{ariaLabel:r.ag.get("buddy-feed.button.back"),onClick:a,className:ss,ref:b,icon:be.e,size:"sm"}),(0,P.jsx)(y.x,{as:"h1",variant:"bodyMediumBold",className:es,children:r.ag.get("buddy-feed.friend-activity")}),(0,P.jsx)(y.x,{as:"p",variant:"bodySmall",className:as,children:r.ag.get("buddy-feed.facebook.connect-with-friends-default")}),(0,P.jsx)("div",{className:ns,children:(0,P.jsx)(je.D,{className:rs,size:"small",iconLeading:ye.z,UNSAFE_colorSet:(0,pe.Ev)("#2374E1",Ne.ixZ),onClick:()=>{s({intent:"connect-to-facebook",type:"click",itemIdSuffix:"buddyfeed"}),l!==Xe.CONNECTED?o(!0):h(!0)},children:r.ag.get("buddy-feed.facebook.button")})}),(0,P.jsx)(y.x,{as:"p",variant:"marginal",className:is,children:r.ag.get("buddy-feed.facebook.disclaimer")}),(0,P.jsx)(Ge,{isOpen:c,onClose:()=>{o(!1)},onConfirm:()=>{d.connectToFacebook().then((()=>{h(!0),o(!1)})).catch((()=>{x(!0)}))}})]})]})};var os=a(3733),us=a(80956),ms=a(65059);const gs=({showOnlineIndicator:e})=>(0,P.jsxs)("div",{className:te,children:[(0,P.jsxs)("div",{className:ne,children:[(0,P.jsx)(ms.f,{size:"medium"}),e?(0,P.jsx)("div",{className:re}):null]}),(0,P.jsxs)("div",{className:le,children:[(0,P.jsx)("div",{className:j()(de,ce)}),(0,P.jsx)("div",{className:de}),(0,P.jsx)("div",{className:de})]})]}),xs=()=>(0,P.jsxs)("div",{"data-testid":"buddy-feed-empty-state",className:ae,children:[(0,P.jsx)(us.D,{as:"p",className:ie,children:r.ag.get("buddy-feed.let-followers-see-your-listening")}),(0,P.jsx)(gs,{showOnlineIndicator:!0}),(0,P.jsx)(gs,{showOnlineIndicator:!0}),(0,P.jsx)(gs,{}),(0,P.jsx)(us.D,{as:"p",className:ie,children:r.ag.get("buddy-feed.enable-share-listening-activity")}),(0,P.jsx)(os.rU,{to:"/preferences",className:oe,children:(0,P.jsx)(je.D,{colorSet:"invertedLight",className:ue,children:r.ag.get("desktop.settings.settings")})})]});var fs=a(69058),hs=a(81558);const bs="jUF2eKgYMm64aYykubct",js="zhL_lhJqzKfJVy7L5VuY",ys="XqquM_o2eODcnD8Y4QhS",ps="UGtycHBJ4egymBSmD_lX",Ns="ND2ydDPzwQZB7HyaGCN8",vs="D9YN554UFGJle2CPP1TA",ks="v7Zcy9UKVUTDZIMKB6ZF",Cs="RX3U6eAasqazEkuFdnj0",Is=({children:e,page:s})=>{const a=0===s,i=e.filter(((e,a)=>a!==s));return(0,P.jsx)(fs.Z,{component:null,children:i.map((e=>(0,P.jsx)(hs.Z,{in:a,timeout:500,classNames:{enter:a?bs:Ns,enterActive:a?js:vs,exit:a?ys:ks,exitActive:a?ps:Cs},children:e},a?"first-page":"second-page")))})},Ls=({friends:e})=>{const s=(0,u.o)(),a=(0,f.$P)(),{spec:h}=(0,f.fU)(n.J,{});(0,i.useEffect)((()=>{s({intent:"view",type:"impression",itemIdSuffix:"buddyfeed"})}),[s]),(0,i.useEffect)((()=>{a.logImpression(h.impression())}),[a,h]);const[b,j]=(0,i.useState)(!1),y=()=>{b||a.logInteraction(h.addFriendButtonFactory().hitUiReveal()),j(!b)},p=0===e.length,N=(0,i.useCallback)((()=>{a.logInteraction(h.closeButtonFactory().hitUiHide())}),[a,h]);return(0,P.jsx)(x.DJ.Provider,{value:"buddy_feed",children:(0,P.jsx)(l.l,{label:r.ag.get("buddy-feed.friend-activity"),children:(0,P.jsxs)(Is,{page:b?1:0,children:[(0,P.jsx)("div",{className:J,children:(0,P.jsx)(cs,{onBackButtonClick:y,feedIsEmpty:p,goToAddFriends:b})}),(0,P.jsx)("div",{className:Y,children:(0,P.jsxs)(d.K,{children:[(0,P.jsx)(c.V,{title:r.ag.get("buddy-feed.friend-activity"),panel:o.s.BuddyFeed,onClose:N,actions:(0,P.jsx)(g.ws,{label:r.ag.get("buddy-feed.add-friends"),children:(0,P.jsx)(m.E,{ariaLabel:r.ag.get("buddy-feed.add-friends"),testId:"add-friends-button",size:"sm",onClick:y,icon:t.t})})}),(0,P.jsx)("div",{className:ee,children:(0,P.jsx)(m.E,{ariaLabel:r.ag.get("buddy-feed.add-friends"),className:se,size:"sm",onClick:y,icon:t.t})}),p?(0,P.jsx)(xs,{}):(0,P.jsx)(he,{friends:e,spec:h})]})})]})})})}}}]);
//# sourceMappingURL=xpui-routes-buddy-feed.js.map