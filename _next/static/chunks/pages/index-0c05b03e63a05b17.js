(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9236)}])},7518:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})}},9371:function(e,t,n){"use strict";var r=n(5893),s=n(4184),i=n.n(s),a=n(1664),l=(0,n(1752).default)().publicRuntimeConfig;t.Z=function(e){var t=e.title,n=e.src,s=e.slug,c=l&&l.basePath||"",o=(0,r.jsx)("img",{src:c+n,alt:"Cover Image for ".concat(t),className:i()("shadow-sm",{"hover:shadow-lg transition-shadow duration-200":s})});return(0,r.jsx)("div",{className:"sm:mx-0",children:s?(0,r.jsx)(a.default,{as:"/product/".concat(s),href:"/product/[slug]",children:(0,r.jsx)("a",{"aria-label":t,children:o})}):o})}},3797:function(e,t,n){"use strict";var r=n(5893),s=n(3855),i=n(4797);t.Z=function(e){var t=e.dateString,n=(0,s.Z)(t);return(0,r.jsx)("time",{dateTime:t,children:(0,i.Z)(n,"LLLL\td, yyyy")})}},5303:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),s=n(7518),i=function(){return(0,r.jsx)("footer",{className:"bg-neutral-50 border-t border-neutral-200",children:(0,r.jsx)(s.Z,{children:(0,r.jsx)("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:(0,r.jsx)("h3",{className:"text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",children:"Ohata Kenji (Suzuki Ken) Portfolio"})})})})},a=n(9008),l=function(){return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat("Markdown",".")}),(0,r.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"})]})},c=function(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{}),(0,r.jsx)("div",{className:"min-h-screen",children:(0,r.jsx)("main",{children:t})}),(0,r.jsx)(i,{})]})}},9236:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return g}});var r=n(5893),s=n(7518),i=n(3797),a=n(9371),l=n(1664),c=function(e){var t=e.title,n=e.coverImage,s=e.date,c=e.excerpt,o=e.slug;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-5",children:(0,r.jsx)(a.Z,{slug:o,title:t,src:n})}),(0,r.jsx)("h3",{className:"text-3xl mb-3 leading-snug",children:(0,r.jsx)(l.default,{as:"/product/".concat(o),href:"/product/[slug]",children:(0,r.jsx)("a",{className:"hover:underline",children:t})})}),(0,r.jsx)("div",{className:"text-lg mb-4",children:(0,r.jsx)(i.Z,{dateString:s})}),(0,r.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:c})]})},o=function(e){var t=e.posts;return(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight",children:"Products"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",children:t.map((function(e){return(0,r.jsx)(c,{title:e.title,coverImage:e.coverImage,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})},d=function(){return(0,r.jsxs)("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:[(0,r.jsx)("h1",{className:"text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",children:"Ohata Kenji (Suzuki Ken) Portfolio"}),(0,r.jsx)("h4",{className:"text-center md:text-left text-lg mt-5 md:pl-8",children:"swordgram@gmail.com"})]})},x=n(5303),m=n(9008),u=!0,g=function(e){var t=e.productArticles;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(m.default,{children:(0,r.jsx)("title",{children:"Ken's Portfolio"})}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(d,{}),t.length>0&&(0,r.jsx)(o,{posts:t})]})]})})}}},function(e){e.O(0,[46,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);