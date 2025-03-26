import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, u as unescapeHTML, o as Fragment, l as renderScript, k as renderHead, n as renderSlot } from './astro/server_TYuzZ-KD.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const BusinessInfo = {
  tile: "Hard Rock Landscaping",
  owner: "Helen Gonzalez",
  companyName: "Hard Rock Landscaping",
  street: "",
  city: "Inglewood",
  state: "CA",
  zip: "",
  country: "USA",
  phone: "4242230547",
  email: "helen@hardrocklandscapingca.com",
  website_name: "Hard Rock Landscaping",
  websiteURL: "www.HardRockLandscapingCA.com",
  lastUpdated: "January 25, 2025",
  OpenGraphImg: {
    src: "/assets/images/OGImage.jpg",
    alt: "Artificial Grass Installation",
  },
  facebook: "https://www.facebook.com/hardrocklandscapingservices/",
  twitter: "",
  pinterest: "",
  instagram: "",
  youtube: "",
  tiktok: "",
  tumblr: "",
  twitch: "",
  /*URL that leads to Google Business Profile review */
  Google_review_url:
    "https://www.google.com/search?q=hard+rock+landscaping+&sca_esv=567ab18d067741e3&sxsrf=ADLYWIJPXe8VGJZGJLgINm6N3lCwsUysEg%3A1737167974442&source=hp&ei=ZhSLZ6fnGPiXkPIPqc-gEQ&iflsig=AL9hbdgAAAAAZ4sidmoqm66xtqB-xLyTQwphNjE5nzey&ved=0ahUKEwinsp6An_6KAxX4C0QIHaknKAIQ4dUDCBk&uact=5&oq=hard+rock+landscaping+&gs_lp=Egdnd3Mtd2l6IhZoYXJkIHJvY2sgbGFuZHNjYXBpbmcgMgoQIxiABBgnGIoFMgsQLhiABBjHARivATIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjWFVAAWKMVcAB4AJABAJgBkwOgAbQWqgEKMTMuNC4xLjIuMbgBA8gBAPgBAZgCFaAC7BbCAgoQABiABBhDGIoFwgIOEC4YgAQYsQMY0QMYxwHCAgsQABiABBixAxiDAcICCxAAGIAEGJECGIoFwgIQEC4YgAQY0QMYQxjHARiKBcICEBAuGIAEGLEDGEMY1AIYigXCAhEQABiABBiRAhixAxiDARiKBcICCBAuGIAEGLEDwgILEC4YgAQY0QMYxwHCAg0QLhiABBhDGOUEGIoFwgIIEAAYgAQYyQPCAgsQLhiABBixAxiDAcICDhAuGIAEGMcBGI4FGK8BwgILEAAYgAQYkgMYigXCAggQABiABBixA8ICDhAAGIAEGLEDGIMBGIoFwgIOEC4YgAQYsQMYxwEYrwHCAhQQLhiABBjHARiYBRiZBRieBRivAcICGhAuGIAEGLEDGIMBGMcBGJgFGJkFGJ4FGK8BwgIUEC4YgAQYkgMYxwEYyQMYjgUYrwHCAhcQLhiABBixAxjHARiYBRiZBRieBRivAcICBBAAGAOYAwCSBwoxMi41LjEuMS4yoAfnswI&sclient=gws-wiz#lrd=0x80c2b9adad25520d:0x9cdbea1cbbd44530,3,,,,",
  hours: [
    { day: "Monday", hours: "9am-8pm" },
    { day: "Tuesday", hours: "9am-8pm" },
    { day: "Wednesday", hours: "9am-8pm" },
    { day: "Thursday", hours: "9am-8pm" },
    { day: "Friday", hours: "9am-8pm" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],
  subscribed: true,
};

const $$Astro$e = createAstro("https://hardrocklandscapingca.com/");
const $$SocialLinks$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$SocialLinks$1;
  const { customStyle } = Astro2.props;
  const { followUsText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customStyle ? customStyle : "grid sm:flex sm:flex-row"}`, "class")}> ${followUsText && renderTemplate`<div> <p>Follow Us:</p> </div>`} <div class="text-white sm:ml-5 [&>div]:mr-5 flex"> ${BusinessInfo.twitter && renderTemplate`<div> <a${addAttribute(BusinessInfo.twitter, "href")}> <span class="fab fa-twitter"></span> </a> </div>`} ${BusinessInfo.facebook && renderTemplate`<div> <a${addAttribute(BusinessInfo.facebook, "href")}> <span class="fab fa-facebook-square"></span> </a> </div>`} ${BusinessInfo.pinterest && renderTemplate`<div> <a${addAttribute(BusinessInfo.pinterest, "href")}> <span class="fab fa-pinterest-p"></span> </a> </div>`} ${BusinessInfo.instagram && renderTemplate`<div> <a${addAttribute(BusinessInfo.instagram, "href")}> <span class="fab fa-instagram"></span> </a> </div>`} ${BusinessInfo.youtube && renderTemplate`<div> <a${addAttribute(BusinessInfo.youtube, "href")}> <span class="fab fa-youtube"></span> </a> </div>`} </div> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/social-links.astro", void 0);

const formatPhoneNumber = (input) => {
  if (!input) {
    return "";
  }
  var digits = input.toString().replace(/\D/g, "");
  if (digits.length < 10) {
    return "Invalid phone number";
  }
  let countryCode = "+1";
  if (digits.length > 10) {
    countryCode = `+${digits.slice(0, digits.length - 10)}`;
    digits = digits.slice(digits.length - 10);
  }
  const formattedNumber = `${countryCode} (${digits.slice(0, 3)}) ${digits.slice(
    3,
    6
  )}-${digits.slice(6)}`;
  return formattedNumber;
};
function phoneNumberToNumeric(input) {
  if (!input) {
    return NaN;
  }
  const digits = input.toString().replace(/\D/g, "");
  let numericValue;
  if (digits.length <= 10) {
    numericValue = parseInt(`1${digits}`, 10);
  } else {
    numericValue = parseInt(digits, 10);
  }
  return numericValue;
}

const Logo$1 = new Proxy({"src":"/_astro/logo-white-vertical.Xrjq_m7w.svg","width":717,"height":662,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/logo/logo-white-vertical.svg";
							}
							
							return target[name];
						}
					});

const tree = new Proxy({"src":"/_astro/tree-silhouette3-white-200.firHhWql.webp","width":200,"height":200,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/tree-silhouette3-white-200.webp";
							}
							
							return target[name];
						}
					});

const $$Index$4 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="mobile-menu" class="grid md:hidden h-full fixed left-auto right-0 top-0 overflow-y-auto overflow-x-hidden w-[250px] z-[999] bg-black mobile-menu-close no-scrollbar"> <div id="close-btn" class="h-fit"><i class="fas fa-times close-btn"></i></div> <nav class="relative"> <!-- Logo --> <div class="justify-center flex cursor-pointer select-none py-1"> <a href="/" aria-current="page" class="justify-center flex max-w-full w--current"> <img${addAttribute(Logo$1.src, "src")} loading="lazy" decoding="async" class="aspect-[2/1]"${addAttribute(150, "width")}${addAttribute(`${BusinessInfo.companyName} logo`, "alt")}${addAttribute(`${BusinessInfo.companyName} logo`, "aria-label")}> </a> </div> <div class="menu-outer mt-[25px]"> ${renderComponent($$result, "MenuLinks", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Astro/Hard-Rock-Landscaping/src/components/navigation/MobileMenu/menuLinks.tsx", "client:component-export": "default" })} <!-- close menu link --> <div class="mobile-menu-links text-left cursor-pointer" id="close-menu-link"> <div class="relative flex flex-row border-t-[1px] border-t-[#686868] py-[10px] pl-[25px] hover:bg-slate-800 text-slate-300"> <p class="leader-[24px] relative !my-auto block">Close</p> </div> </div> </div> <div class="contact-info text-white pl-[25px] border-t-[1px] border-[#d6d6d6]"> <h4 class="font-bold">Contact Info</h4> <ul> ${BusinessInfo && BusinessInfo.street && renderTemplate`<li>${BusinessInfo.street},</li>`} ${BusinessInfo && (BusinessInfo.city || BusinessInfo.state || BusinessInfo.country || BusinessInfo.zip) && renderTemplate`<li> ${BusinessInfo.city && renderTemplate`<span>${BusinessInfo.city},</span>`} ${BusinessInfo.state && renderTemplate`<span>${BusinessInfo.state},</span>`} ${BusinessInfo.country && renderTemplate`<span>${BusinessInfo.country}</span>`} ${BusinessInfo.zip && renderTemplate`<span>${BusinessInfo.zip}</span>`} </li>`} ${BusinessInfo && BusinessInfo.phone && renderTemplate`<li> <a${addAttribute(`tel:${BusinessInfo.phone}`, "href")}> ${formatPhoneNumber(BusinessInfo.phone)} </a> </li>`} ${BusinessInfo && BusinessInfo.email && renderTemplate`<li> <a${addAttribute(`mailto:${BusinessInfo.email}`, "href")}>${BusinessInfo.email}</a> </li>`} </ul> </div> ${renderComponent($$result, "SocialLinks", $$SocialLinks$1, { "customStyle": "clearfix flex flex-row [&>li]:mr-5 [&>li>a>span]:text-white my-10 pl-[25px]" })} <div class="absolute bottom-0 left-[50%] translate-x-[-50%] right-0 block mx-auto select-none w-fit"> <img${addAttribute(tree.src, "src")} alt="tree" class="w-[200px] aspect-square opacity-30" loading="lazy" decoding="async"> </div> </nav> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/navigation/MobileMenu/index.astro", void 0);

const Logo216 = new Proxy({"src":"/_astro/logo-dark.9dZPdIY7.svg","width":1647,"height":440,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/logo/logo-dark.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$d = createAstro("https://hardrocklandscapingca.com/");
const $$LogoComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$LogoComponent;
  const { customDiv, width = 150, height = "auto" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customDiv ? customDiv : "justify-center flex cursor-pointer select-none py-1 my-auto"}`, "class")}> <a href="/" aria-label="Home" class="w-inline-block max-w-full inline-block my-auto"> <img${addAttribute(Logo216.src, "src")} loading="eager" decoding="async" class="adspect-[2/1] my-auto"${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(`${BusinessInfo.companyName} logo`, "alt")}${addAttribute(`${BusinessInfo.companyName} logo`, "aria-label")}> </a> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/logoComponent.astro", void 0);

const menu_links = [
  {
    url: "/",
    label: "Home",
    subDirectory: [],
  },
  {
    url: "/about/",
    label: "About",
    subDirectory: [],
  },
  {
    url: "/faq",
    label: "FAQ",
    subDirectory: [],
  },
  {
    url: "/projects",
    label: "Projects",
    subDirectory: [],
  },
  {
    url: "/contact/",
    label: "Contact",
    subDirectory: [],
  },
];

const formatPhone = (num) => {
  if (!num) {
    return "";
  } else {
    var phoneNumber = num.replace(/[^\d]/g, "");
    if (phoneNumber.length < 4) {
      return phoneNumber;
    } else if (phoneNumber.length >= 4 && phoneNumber.length < 7) {
      var area_code = phoneNumber.slice(0, 3);
      var prefix = phoneNumber.slice(3, phoneNumber.length);
      return `(${area_code}) - ${prefix}`;
    } else if (phoneNumber.length >= 7) {
      var area_code = phoneNumber.slice(0, 3);
      var prefix = phoneNumber.slice(3, 6);
      var suffix = "";
      if (phoneNumber.length <= 10)
        suffix = phoneNumber.slice(6, phoneNumber.length);
      else suffix = phoneNumber.slice(6, 10);
      return `(${area_code})-${prefix}-${suffix}`;
    }
  }
};

const Leaf = new Proxy({"src":"/_astro/shape-16.CoSHGGRc.webp","width":76,"height":41,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/shape/shape-16.webp";
							}
							
							return target[name];
						}
					});

const PhoneIcon = new Proxy({"src":"/_astro/phone-white.CS8-qVUm.png","width":16,"height":16,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/phone-white.png";
							}
							
							return target[name];
						}
					});

const EmailIcon = new Proxy({"src":"/_astro/email-white.BDPmRFtj.webp","width":16,"height":16,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/email-white.webp";
							}
							
							return target[name];
						}
					});

const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hidden sm:block h-fit bg-[#003e00] sm:h-[30px] w-full text-center sm:text-left sm:flex sm:flex-row justify-between text-white [&>div]:px-5 md:[&>div]:px-10 text-lg [&>div]:my-auto font-primaryF relative"> <div class="flex flex-row gap-x-[5px]"> <img${addAttribute(PhoneIcon.src, "src")} alt="phone" class="w-[16px] h-[16px] my-auto" loading="lazy" decoding="async"> <b>Phone:</b> <a class="underline pl-1 hover:text-secondaryC text-sm md:text-lg hover:underline"${addAttribute(`tel:${BusinessInfo.phone}`, "href")}>${formatPhone(BusinessInfo.phone)}</a> </div> <div class="absolute bottom-0 left-[50%] translate-x-[-50%]"> <img${addAttribute(Leaf.src, "src")} alt="leaf" class="w-[76px] h-[41px]" loading="lazy" decoding="async"> </div> <div class="flex flex-row gap-x-[5px]"> <img${addAttribute(EmailIcon.src, "src")} alt="email" class="w-[16px] h-[16px] my-auto" loading="lazy" decoding="async"> <b>Email:</b> <a class="underline pl-1 hover:text-secondaryC text-sm md:text-lg hover:underline"${addAttribute(`mailto:${BusinessInfo.email}`, "href")}>${BusinessInfo.email}</a> </div> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/navigation/top-header/index.astro", void 0);

const arrow = new Proxy({"src":"/_astro/white-right-chevron.DbuBBT-3.webp","width":16,"height":16,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/white-right-chevron.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$c = createAstro("https://hardrocklandscapingca.com/");
const $$NavItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$NavItem;
  const { label, url, subDirectory, text_black = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`dropdown cursor-pointer mr-5 !block select-none active:bg-transparent relative group ${text_black ? "text-black" : "text-white"}`, "class")}> <a${addAttribute(url, "href")} class="cursor-pointer !block font-primaryF select-none hover:underline">${label}</a> ${subDirectory && subDirectory.length > 0 && renderTemplate`<ul class="absolute border-b-solid border-b-slate-100 w-fit transition-[opacity_transform] duration-500 invisible opacity-0 translate-y-[50px] group-hover:visible group-hover:opacity-100 group-hover:translate-y-[0px] "> ${subDirectory.map((item) => renderTemplate`<li class="cursor-pointer !block font-primaryF select-none hover:underline whitespace-nowrap border-solid border-b-[1px] border-slate-500 px-5 py-5 bg-slate-700 hover:bg-slate-400 w-full"> <a${addAttribute(item.url.toLowerCase(), "href")} class="select-none flex font-bold justify-between w-full"> <span class="inline-block mr-5 ml-0">${item.label}</span> <img${addAttribute(arrow.src, "src")} class="w-[16px] h-[16px] my-auto block min-w-[16px]" alt="navigation arrow"> </a> </li>`)} </ul>`} </li>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/navigation/NavItem.astro", void 0);

const $$Astro$b = createAstro("https://hardrocklandscapingca.com/");
const $$MobileIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MobileIcon;
  const { customDiv, dark = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="mobile-nav-toggler"${addAttribute(`${customDiv ? customDiv : "mobile-nav-toggler my-auto mr-[1rem] cursor-pointer block"}`, "class")}> <i${addAttribute(`icon-bar ${dark ? "icon-bar-dark" : "icon-bar-white"}`, "class")}></i> <i${addAttribute(`icon-bar ${dark ? "icon-bar-dark" : "icon-bar-white"}`, "class")}></i> <i${addAttribute(`icon-bar ${dark ? "icon-bar-dark" : "icon-bar-white"}`, "class")}></i> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/navigation/mobileIcon.astro", void 0);

const $$Astro$a = createAstro("https://hardrocklandscapingca.com/");
const $$DesktopHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$DesktopHeader;
  const { interactive } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header id="desktop-header"${addAttribute(`grid text-white min-h-[50px] sm:min-h-[50px] relative z-[100] !fixed top-0 right-0 left-0 bg-white border-b-[3px] border-b-[#0289d0] navStyle transition-all duration-500 ${interactive ? "transparentHeader" : ""}`, "class")}> ${renderComponent($$result, "TopHeader", $$Index$3, {})} <div class="w-full px-5 md:px-10 my-5 md:my-auto mx-auto flex md:flex flex-row justify-between"> ${renderComponent($$result, "LogoComponent", $$LogoComponent, { "customDiv": "cursor-pointer my-1 select-none hidden md:block", "width": 200, "height": 53 })} ${renderComponent($$result, "LogoComponent", $$LogoComponent, { "customDiv": "cursor-pointer my-auto flex select-none block md:hidden", "width": 250, "height": 68 })} <nav class="hidden md:block text-black my-auto"> <div class="" id="navbarSupportedContent"> <ul class="flex"> ${menu_links && menu_links.length > 0 && menu_links.map((item) => renderTemplate`${renderComponent($$result, "NavItem", $$NavItem, { ...item })}`)} </ul> </div> </nav> <div class="flex md:hidden my-auto text-right relative"> ${renderComponent($$result, "MobileIcon", $$MobileIcon, { "customDiv": "mr-0 ml-auto cursor-pointer select-none" })} </div> </div> </header>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/navigation/standard/desktopHeader.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$9 = createAstro("https://hardrocklandscapingca.com/");
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$2;
  const { interactive } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Fav Icon -->", '<div id="backdrop" class="fixed z-[199] left-0 top-0 right-0 bottom-0 w-full h-full bg-secondaryC transition-all duration-[900ms] opacity-70 !opacity-0 invisible"></div> ', " <!-- <MobileHeader {interactive} /> --> ", ' <script>\n  document.addEventListener("astro:page-load", () => {\n    const MobileToggler = document.getElementById("mobile-nav-toggler");\n    const CloseBtn = document.getElementById("close-btn");\n    const CloseMenuLink = document.getElementById("close-menu-link");\n    const MobileMenu = document.getElementById("mobile-menu");\n    const Backdrop = document.getElementById("backdrop");\n    const OpenMenu = () => {\n      if (MobileMenu?.classList.contains("mobile-menu-close")) {\n        MobileMenu?.classList.remove("mobile-menu-close");\n        Backdrop?.classList.remove("!opacity-0");\n        Backdrop?.classList.remove("invisible");\n      } else {\n        MobileMenu?.classList.add("mobile-menu-close");\n        Backdrop?.classList.add("!opacity-0");\n        Backdrop?.classList.add("invisible");\n      }\n    };\n\n    const CloseMenu = () => {\n      if (!MobileMenu?.classList.contains("mobile-menu-close")) {\n        MobileMenu?.classList.add("mobile-menu-close");\n        Backdrop?.classList.add("!opacity-0");\n        Backdrop?.classList.add("invisible");\n      }\n    };\n    const CheckIfClickedOutside = (event) => {\n      if (\n        !MobileMenu?.classList.contains("mobile-menu-close") &&\n        !MobileToggler?.contains(event.target) &&\n        !MobileMenu?.contains(event.target)\n      ) {\n        MobileMenu?.classList.add("mobile-menu-close");\n        Backdrop?.classList.add("!opacity-0");\n        Backdrop?.classList.add("invisible");\n      }\n    };\n    MobileToggler?.addEventListener("mousedown", OpenMenu);\n    CloseBtn?.addEventListener("mousedown", CloseMenu);\n    CloseMenuLink?.addEventListener("mousedown", CloseMenu);\n    window.addEventListener("mousedown", CheckIfClickedOutside);\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "DesktopHeader", $$DesktopHeader, { "interactive": interactive }), renderComponent($$result, "MobileMenu", $$Index$4, {}));
}, "D:/Astro/Hard-Rock-Landscaping/src/components/navigation/standard/index.astro", void 0);

function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}

function jsonLDGenerator({ type, post, url }) {
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title ? post.title : "website"}",
        "description": "${post.description ? post.description : ""}",
        "image": "${post.images.length > 0 ? post.images[0].image[0].url : ""}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "datePublished": "${post.date ? post.date : ""}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${BusinessInfo.title}",
      "url": "${undefined                        }"
      }
    </script>`;
}

const $$Astro$8 = createAstro("https://hardrocklandscapingca.com/");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    url = Astro2.url,
    image,
    frontmatter,
    robots,
    canonicalUrl
  } = Astro2.props;
  const jsonLD = jsonLDGenerator({
    type: frontmatter ? "post" : "website",
    post: frontmatter,
    url
  });
  return renderTemplate`<!-- SEO -->${canonicalUrl && renderTemplate`<link rel="canonical"${addAttribute(canonicalUrl, "href")}>`}<!-- Open Graph --><meta property="og:site_name"${addAttribute(BusinessInfo.companyName, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(image?.src || `${url}${BusinessInfo.OpenGraphImg.src}`, "content")}><meta property="og:image:url"${addAttribute(image?.src || `${url}${BusinessInfo.OpenGraphImg.src}`, "content")}><meta property="og:image:secure_url"${addAttribute(image || `${url}${BusinessInfo.OpenGraphImg.src}`, "content")}><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta property="og:image:alt"${addAttribute(BusinessInfo.companyName, "content")}><!-- Twitter --><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:card" content="summary_large_image">${image && renderTemplate`<meta name="twitter:image"${addAttribute(typeof image === "string" ? image : image?.src, "content")}>`}<meta name="twitter:image:alt"${addAttribute(title, "content")}>${BusinessInfo.twitter && renderTemplate`<meta name="twitter:domain"${addAttribute(BusinessInfo.twitter, "content")}>`}${robots && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- JSON LD -->${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(jsonLD)}` })}`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/SEO.astro", void 0);

const $$Astro$7 = createAstro("https://hardrocklandscapingca.com/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/Astro/Hard-Rock-Landscaping/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Astro/Hard-Rock-Landscaping/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$6 = createAstro("https://hardrocklandscapingca.com/");
const $$CreatorComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CreatorComponent;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="CreatorContainer"${addAttribute(`${customStyle}`, "class")}> <div class="mx-auto w-8/12"> <a rel="nofollow"${addAttribute(`Agency website - Opens in new tab`, "aria-label")} href="https://www.LADesignInitiative.com" class="underline cursor-pointer font-bold text-lg" target="_blank">Website design and development</a> by
<span class=""> LA Design Initative </span> </div> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/creatorComponent.astro", void 0);

const $$Astro$5 = createAstro("https://hardrocklandscapingca.com/");
const $$ColumnLabel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ColumnLabel;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3 class="text-[2.5rem] lh-[35px] text-white font-primaryFont text-center"> ${label} </h3>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/footer/column_label.astro", void 0);

const $$Contacts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class=""> <div class=""> <div class="font-primaryFont relative block mb-[25px]"> ${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": "Contacts" })} </div> <div class="widget-content max-w-[400px] mx-auto"> <ul class="contact-info clearfix text-center md:text-left md:max-w-[200px] mx-auto"> ${(BusinessInfo.city || BusinessInfo.state || BusinessInfo.country) && renderTemplate`<li class="relative block mb-1"> <p class="text-lg"> ${BusinessInfo.city && renderTemplate`<span>${BusinessInfo.city},</span>`} ${BusinessInfo.state && renderTemplate`<span>${BusinessInfo.state}</span>`} </p> </li>`} <li> <hr class="border-slate-100 w-full sm:3/12 md:w-full mx-auto my-5 opacity-50"> </li> ${BusinessInfo.phone && renderTemplate`<li class="relative block mb-1"> <p class="text-lg"> <a${addAttribute(`tel:${phoneNumberToNumeric(BusinessInfo.phone)}`, "href")}> ${formatPhoneNumber(BusinessInfo.phone)} </a> </p> </li>`} ${BusinessInfo.email && BusinessInfo.email.length > 0 && renderTemplate`<li class="relative block"> <p class="text-lg"> <a${addAttribute(`mailto:${BusinessInfo.email}`, "href")}> ${BusinessInfo.email} </a> </p> </li>`} </ul> </div> </div> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/footer/contacts.astro", void 0);

const Facebook = new Proxy({"src":"/_astro/facebook.CneJsdeJ.webp","width":480,"height":480,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/social/facebook.webp";
							}
							
							return target[name];
						}
					});

const TikTok = new Proxy({"src":"/_astro/Tiktok.BVE3bmnf.webp","width":480,"height":480,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/social/Tiktok.webp";
							}
							
							return target[name];
						}
					});

const Tumblr = new Proxy({"src":"/_astro/tumblr.BZb6Eyv0.webp","width":480,"height":480,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/social/tumblr.webp";
							}
							
							return target[name];
						}
					});

const Twitch = new Proxy({"src":"/_astro/twitch.C11shuz9.webp","width":480,"height":480,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/social/twitch.webp";
							}
							
							return target[name];
						}
					});

const Twitter = new Proxy({"src":"/_astro/twitter.DvVLfaGf.webp","width":480,"height":480,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/social/twitter.webp";
							}
							
							return target[name];
						}
					});

const YouTube = new Proxy({"src":"/_astro/youtube.BCw9vwX6.webp","width":480,"height":480,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/social/youtube.webp";
							}
							
							return target[name];
						}
					});

const Instagram = new Proxy({"src":"/_astro/instagram.CFlSdwts.webp","width":480,"height":480,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/social/instagram.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro("https://hardrocklandscapingca.com/");
const $$SocialIconComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SocialIconComponent;
  const { social, icon, link, wrapperStyle, imgStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${wrapperStyle ? wrapperStyle : "w-[30px] h-[30px] flex justify-center bg-[rgba(255,255,255,0.4)] rounded-lg"}`, "class")}> <a${addAttribute(`${social} - Opens in new tab`, "aria-label")}${addAttribute(link, "href")} target="_blank"> <img${addAttribute(icon.src, "src")}${addAttribute(`${social} link`, "alt")}${addAttribute(`${imgStyle ? imgStyle : "w-[30px] h-[30px] object-fit"}`, "class")}> </a> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/socialMedia/socialIconComponent.astro", void 0);

const $$Astro$3 = createAstro("https://hardrocklandscapingca.com/");
const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  const { customStyle } = Astro2.props;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customStyle ? customStyle : "flex flex-row mx-auto w-fit [&>*]:!mx-1 justify-evenly"}`, "class")}> ${BusinessInfo.facebook && renderTemplate`${renderComponent($$result, "SocialComponent", $$SocialIconComponent, { "social": "Facebook", "icon": Facebook, "link": BusinessInfo.facebook })}`} ${BusinessInfo.tiktok && renderTemplate`${renderComponent($$result, "SocialComponent", $$SocialIconComponent, { "social": "TikTok", "icon": TikTok, "link": BusinessInfo.tiktok })}`} ${BusinessInfo.tumblr && renderTemplate`${renderComponent($$result, "SocialComponent", $$SocialIconComponent, { "social": "Tumblr", "icon": Tumblr, "link": BusinessInfo.tumblr })}`} ${BusinessInfo.twitch && renderTemplate`${renderComponent($$result, "SocialComponent", $$SocialIconComponent, { "social": "Twitch", "icon": Twitch, "link": BusinessInfo.twitch })}`} ${BusinessInfo.twitter && renderTemplate`${renderComponent($$result, "SocialComponent", $$SocialIconComponent, { "social": "Twitter", "icon": Twitter, "link": BusinessInfo.twitter })}`} ${BusinessInfo.youtube && renderTemplate`${renderComponent($$result, "SocialComponent", $$SocialIconComponent, { "social": "YouTube", "icon": YouTube, "link": BusinessInfo.youtube })}`} ${BusinessInfo.instagram && renderTemplate`${renderComponent($$result, "SocialComponent", $$SocialIconComponent, { "social": "Instagram", "icon": Instagram, "link": BusinessInfo.instagram })}`} </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/socialMedia/social-links.astro", void 0);

const Logo = new Proxy({"src":"/_astro/logo-white.CtwkrM-9.svg","width":1647,"height":440,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/logo/logo-white.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://hardrocklandscapingca.com/");
const $$LogoComponentLazy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LogoComponentLazy;
  const { customDiv, width = 150 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customDiv ? customDiv : "justify-center flex cursor-pointer select-none py-1"}`, "class")}> <a href="/" aria-current="page" class="justify-center flex max-w-full w--current"> <img${addAttribute(Logo.src, "src")} loading="lazy" decoding="async" class="aspect-[2/1]"${addAttribute(width, "width")}${addAttribute(`${BusinessInfo.companyName} logo`, "alt")}${addAttribute(`${BusinessInfo.companyName} logo`, "aria-label")}> </a> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/logoComponent-lazy.astro", void 0);

const $$SiteLinkColumn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="widget-content flex flex-col text-left md:text-center"> ${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": "Navigation" })} ${menu_links && menu_links.length > 0 && renderTemplate`<ul class="contact-info clearfix"> ${menu_links.map((links, index) => renderTemplate`<li class="relative block mb-[20px] !text-white text-center"> <a${addAttribute(links.url, "href")}> <p class="text-lg">${links.label}</p> </a> </li>`)} </ul>`} </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/footer/site-link-column.astro", void 0);

const $$HoursInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="widget-content flex flex-col text-left md:text-center" aria-labelledby="business-hours-label"> ${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": "Business Hours", "id": "business-hours-label" })} <div class=""> ${BusinessInfo.hours && BusinessInfo.hours.length > 0 && renderTemplate`<ul class="contact-info clearfix max-w-[200px] mx-auto" aria-label="Business hours"> ${BusinessInfo.hours.map((item, index) => renderTemplate`<li class="relative block mb-1 !text-white text-center sm:text-left" role="listitem"> <p> ${item.day}: ${item.hours} </p> </li>`)} </ul>`} </div> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/footer/hours-info.astro", void 0);

const ForestImg = new Proxy({"src":"/_astro/forest-silhouette2-green2.SpLDnzYU.webp","width":350,"height":350,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/forest-silhouette2-green2.webp";
							}
							
							return target[name];
						}
					});

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  var YEAR = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<div class="relative translate-y-[5px] mt-[200px] sm:mt-[75px]"> <div class="absolute top-[-200px] sm:top-[-75px] md:top-[-30px] lg:top-[-20px] right-[25px] sinkTag sink z-[10]"> <img${addAttribute(ForestImg.src, "src")} alt="forest silhouette" class="w-[350px] aspect-square" loading="lazy" decoding="async"> </div> <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 L 0,187 C 141.33333333333331,221.93333333333334 282.66666666666663,256.8666666666667 449,233 C 615.3333333333334,209.13333333333335 806.6666666666667,126.46666666666667 976,109 C 1145.3333333333333,91.53333333333333 1292.6666666666665,139.26666666666665 1440,187 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#161d27" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg> </div> <footer class="main_footer relative bg-darkBlack bottom-0 w-full" role="contentinfo"> <div class="relative w-10/12 pt-[65px] pb-[70px] justify-evenly mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:min-h-[450px] lg:mx-auto gap-[30px]"> <div class=""> <div class="mb-10"> ${renderComponent($$result, "LogoComponentLazy", $$LogoComponentLazy, {})} </div> <div class="relative block mb-[25px]"> ${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": "About" })} </div> <div class=""> <div class="relative block mb-[30px]"> <p> <span class="text-secondaryC font-bold">${BusinessInfo.companyName}</span> is an artificial turf installation company that has served over 200
              clients, transforming their outdoor space. Our clients enjoy the benefits
              of a real lawn without its hassles such as wasting water and hours
              spent on lawn maintenance.
</p> </div> <div> <p class="text-white text-center">Follow us</p> ${renderComponent($$result, "SocialMedia", $$SocialLinks, {})} </div> </div> </div> ${renderComponent($$result, "SiteLinkColumn", $$SiteLinkColumn, {})} <div class="flex flex-col gap-y-10"> ${renderComponent($$result, "Contacts", $$Contacts, {})} <div class="block md:hidden lg:block"> ${renderComponent($$result, "HoursInfo", $$HoursInfo, {})} </div> </div> <div class="hidden md:block lg:hidden"> ${renderComponent($$result, "HoursInfo", $$HoursInfo, {})} </div> </div> </div> <div id="footer-bottom" class="bg-black pt-[30px] pb-[30px]"> <div class="auto-container"> <div class="grid"> <div class="w-full min-h-[20px] text-slate-300 text-center relative"> <div> <span id="WebsiteName">${BusinessInfo.companyName}</span> &copy;
<span id="CopyRight">${YEAR}</span> </div> <ul class=""> <li class="inline-block mr-[30px]"> <a href="/terms-and-conditions" class="text-[15px]">Terms of Service</a> </li> <li class="inline-block"> <a href="/privacy-policy" class="text-[15px]">Privacy Policy</a> </li> </ul> ${renderComponent($$result, "CreatorComponent", $$CreatorComponent, { "customStyle": "lg:absolute lg:right-[10px] lg:top-0" })} </div> </div> </div> </div> </footer>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/footer/index.astro", void 0);

const $$WithCTA = createComponent(($$result, $$props, $$slots) => {
  var YEAR = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<div class="relative translate-y-[5px] mt-[200px] sm:mt-[75px] w-full py-[200px] md:py-[240px] !bg-fixed bg-center bg-no-repeat bg-cover text-white before:content-[''] before:w-full before:h-full before:bg-black before:opacity-30 before:absolute before:inset-0 bg-[url('/assets/images/slide-646.webp')] sm:bg-[url('/assets/images/slide-1024.webp')] lg:bg-[url('/assets/images/slide-1920.webp')] overflow-visible"> <div class="px-5 md:px-20"> <div class="relative flex flex-col gap-1 sm:flex-row clearfix justify-between"> <div class="text-center sm:text-left"> <span class="text-2xl">Have an idea for a project?</span> <h2 class="text-3xl md:text-6xl">Get in touch with us</h2> </div> <a href="/contact" class="cursor-pointer block mx-auto md:ml-auto md:mr-0 !z-[20]"> <div class="bg-secondaryC rounded-lg px-5 py-5 hover:bg-slate-700 hover:text-white float-right mt-[50px] sm:whitespace-nowrap">
Make an appointment<i class="far fa-long-arrow-right"></i> </div></a> </div> </div> <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" class="absolute bottom-[-60px] md:bottom-[-100px] lg:bottom-[-205px] left-0 right-0 z-[10]" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(22, 29, 39, 1)" offset="0%"></stop><stop stop-color="rgba(22, 29, 39, 1)" offset="100%"></stop></linearGradient></defs><path class="absolute bottom-0 left-0 right-0 z-0 w-full h-full" style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,49L80,89.8C160,131,320,212,480,204.2C640,196,800,98,960,73.5C1120,49,1280,98,1440,130.7C1600,163,1760,180,1920,212.3C2080,245,2240,294,2400,277.7C2560,261,2720,180,2880,155.2C3040,131,3200,163,3360,196C3520,229,3680,261,3840,302.2C4000,343,4160,392,4320,400.2C4480,408,4640,376,4800,343C4960,310,5120,278,5280,269.5C5440,261,5600,278,5760,302.2C5920,327,6080,359,6240,351.2C6400,343,6560,294,6720,253.2C6880,212,7040,180,7200,212.3C7360,245,7520,343,7680,351.2C7840,359,8000,278,8160,212.3C8320,147,8480,98,8640,130.7C8800,163,8960,278,9120,326.7C9280,376,9440,359,9600,367.5C9760,376,9920,408,10080,400.2C10240,392,10400,343,10560,310.3C10720,278,10880,261,11040,245C11200,229,11360,212,11440,204.2L11520,196L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"></path> </svg> </div> <footer class="main_footer relative bg-darkBlack bottom-0 w-full" role="contentinfo"> <div id="forest-icon2" class="absolute top-[-168px] sm:top-[-200px] md:top-[-250px] translate-x-[-50%] left-[50%] md:translate-x-[0] md:left-auto md:right-[20px] md:right-[25px] sinkTag2 sink2 !z-[5]"> <img${addAttribute(ForestImg.src, "src")} alt="forest silhouette" class="w-[350px] sm:w-[300px] aspect-square mx-auto" loading="lazy" decoding="async"> </div> <div class="relative w-10/12 pt-[65px] pb-[70px] justify-evenly mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:min-h-[450px] lg:mx-auto gap-[30px]"> <div class=""> <div class="mb-10 z-[12]"> ${renderComponent($$result, "LogoComponentLazy", $$LogoComponentLazy, {})} </div> <div class="relative block mb-[25px]"> ${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": "About" })} </div> <div class=""> <div class="relative block mb-[30px]"> <p> <span class="text-secondaryC font-bold">${BusinessInfo.companyName}</span> is an artificial turf installation company that has served over 200
              clients, transforming their outdoor space. Our clients enjoy the benefits
              of a real lawn without its hassles such as wasting water and hours
              spent on lawn maintenance.
</p> </div> <div> <h5 class="text-white text-center">Follow us</h5> ${renderComponent($$result, "SocialMedia", $$SocialLinks, {})} </div> </div> </div> ${renderComponent($$result, "SiteLinkColumn", $$SiteLinkColumn, {})} <div class="flex flex-col gap-y-10"> ${renderComponent($$result, "Contacts", $$Contacts, {})} <div class="block md:hidden lg:block"> ${renderComponent($$result, "HoursInfo", $$HoursInfo, {})} </div> </div> <div class="hidden md:block lg:hidden"> ${renderComponent($$result, "HoursInfo", $$HoursInfo, {})} </div> </div> </div> <div id="footer-bottom" class="bg-black pt-[30px] pb-[30px]"> <div class="auto-container"> <div class="grid"> <div class="w-full min-h-[20px] text-slate-300 text-center relative"> <div> <span id="WebsiteName">${BusinessInfo.companyName}</span> &copy;
<span id="CopyRight">${YEAR}</span> </div> <ul class=""> <li class="inline-block mr-[30px]"> <a href="/terms-and-conditions" class="text-[15px]">Terms of Service</a> </li> <li class="inline-block"> <a href="/privacy-policy" class="text-[15px]">Privacy Policy</a> </li> </ul> ${renderComponent($$result, "CreatorComponent", $$CreatorComponent, { "customStyle": "lg:absolute lg:right-[10px] lg:top-0" })} </div> </div> </div> </div> </footer>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/footer/with-CTA.astro", void 0);

const $$Astro$1 = createAstro("https://hardrocklandscapingca.com/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    pageTitle,
    customDescription,
    OGImage,
    canonicalUrl = null,
    ToBeIndexed = true,
    withCTA = false
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="utf-8"><title>${pageTitle}</title>${renderComponent($$result, "SEO", $$SEO, { "title": pageTitle, "description": customDescription, "image": OGImage, "canonicalUrl": canonicalUrl })}<meta name="viewport" content="width=device-width, initial-scale=1"><meta name="author" content="">${!ToBeIndexed && renderTemplate`<meta name="robots" content="noindex">`}<link href="/style/global.css" rel="stylesheet" type="text/css" media="print" onload="this.media='all'; this.onload=null;"><link rel="sitemap" href="/sitemap-index.xml"><link href="/assets/icons/favicon.svg" rel="shortcut icon" type="image/svg">${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="h-full relative" id="body"> ${renderSlot($$result, $$slots["default"])} ${withCTA && renderTemplate`${renderComponent($$result, "CTAFooter", $$WithCTA, {})}`} ${!withCTA && renderTemplate`${renderComponent($$result, "Footer", $$Index$1, {})}`} </body></html>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/layout/BaseLayout.astro", void 0);

const WhiteUpArrow = new Proxy({"src":"/_astro/up-arrow-white.DFTgkCfd.svg","width":64,"height":64,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/up-arrow-white.svg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div id="ScrollTopButton" class="ScrollTopButton w-[3rem] h-[3rem] rounded-full fixed bottom-[6rem] right-[2rem] z-20 cursor-pointer block w-fit userselect-none transition-all duration-1000 buttonHidden invisible bg-primaryC"> <img class="mx-auto w-[3rem] h-[3rem] userselect-none text-[#dbdbdb]"', ' alt="Scroll Up"> </div> <script>\n  document.addEventListener("astro:page-load", () => {\n    const indicator = document.querySelector(".scrollToTopIndicator");\n    const ScrollTopButton = document.querySelector("#ScrollTopButton");\n    if (!indicator || !ScrollTopButton) return;\n    ScrollTopButton?.addEventListener("mousedown", () =>\n      window.scrollTo({ top: 0, left: 0, behavior: "smooth" }),\n    );\n    const ButtonScrollEvent = (evt) => {\n      if (!indicator) return;\n      if (indicator.getBoundingClientRect().top < 0) {\n        ScrollTopButton?.classList.remove("invisible");\n        ScrollTopButton?.classList.remove("buttonHidden");\n      } else {\n        ScrollTopButton?.classList.add("invisible");\n        ScrollTopButton?.classList.add("buttonHidden");\n      }\n    };\n    window.addEventListener("scroll", ButtonScrollEvent);\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(WhiteUpArrow.src, "src"));
}, "D:/Astro/Hard-Rock-Landscaping/src/components/buttons/ScrollTopButton/index.astro", void 0);

const $$Astro = createAstro("https://hardrocklandscapingca.com/");
const $$StandardNavBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StandardNavBar;
  const {
    pageTitle,
    customDescription,
    OGImage,
    canonicalUrl,
    ToBeIndexed = true,
    withCTA = false
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "customDescription": customDescription, "OGImage": OGImage, "canonicalUrl": canonicalUrl, "ToBeIndexed": ToBeIndexed, "withCTA": withCTA }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$Index$2, { "interactive": false })} ${maybeRenderHead()}<div class="mt-[50px] sm:mt-[75px] lg:mt-[100px] flex-1 min-h-[100px] relative"> ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "ScrollTopButton", $$Index, {})} </div> ` })}`;
}, "D:/Astro/Hard-Rock-Landscaping/src/layout/standard-nav-bar.astro", void 0);

export { $$StandardNavBar as $, BusinessInfo as B, $$LogoComponent as a, formatPhone as b, formatPhoneNumber as f };
