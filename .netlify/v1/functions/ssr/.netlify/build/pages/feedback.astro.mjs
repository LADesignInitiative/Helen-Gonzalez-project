/* empty css                                 */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../chunks/astro/server_TYuzZ-KD.mjs';
import 'kleur/colors';
import { B as BusinessInfo, $ as $$StandardNavBar } from '../chunks/standard-nav-bar_Dm2qMC6H.mjs';
import { $ as $$Index$1 } from '../chunks/index_BObaeLYP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://hardrocklandscapingca.com/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    title = "Leave us feedback",
    description,
    keyword = null
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden bg-white"> <div class="text-center z-10 childrenFadeInFromBottomTag"> <h1 class="mt-10 fadeOutIntoBottom"> <span class="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl"> <span class="block text-gray-900">${title}</span> </span> </h1> <p class="mt-3 text-base text-gray-500 px-5 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl fadeOutIntoBottom"> ${description} </p> </div> <div class="hidden lg:absolute lg:inset-0 lg:block" aria-hidden="true"> <svg class="absolute left-1/2 top-0 translate-y-8 translate-x-64 transform" width="640" height="784" fill="none" viewBox="0 0 640 784"> <defs> <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse"> <rect x="0" y="0" width="4" height="4" class="text-gray-200 z-[-2]" fill="currentColor"></rect> </pattern> </defs> <rect y="72" width="640" height="640" class="text-gray-50 !z-[-10] hidden" fill="currentColor"></rect> <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" class="z-[-2]"></rect> </svg> </div> <div class="relative pb-16 pt-0 sm:pb-24 lg:pb-32"> <main class="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:mt-10"> <div class="flex relative"> <div class="mx-auto w-full px-6 sm:w-8/12"> ${renderComponent($$result, "ReviewForm", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Astro/Hard-Rock-Landscaping/src/components/reputation-app/review-form.tsx", "client:component-export": "default" })} </div> </div> </main> </div> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/reputation-app/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://hardrocklandscapingca.com/");
const $$Feedback = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Feedback;
  if (!BusinessInfo.subscribed) return Astro2.redirect("/expired");
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  document.addEventListener("astro:page-load", () => {\n    const callback = (entries) => {\n      entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n          if (entry.target.classList.contains("sinkTag")) {\n            entry.target.classList.remove("sink");\n          }\n          if (entry.target.classList.contains("childrenFadeInFromBottomTag")) {\n            for (let i = 0; i < entry.target.children.length; i++) {\n              entry.target.children[i].classList.remove("fadeOutIntoBottom");\n            }\n          }\n        } else {\n          if (\n            entry.target.classList.contains("sinkTag") &&\n            !entry.target.classList.contains("sink")\n          ) {\n            entry.target.classList.add("sink");\n          }\n        }\n      });\n    };\n    const options = { threshold: 0.3 };\n    const observer = new IntersectionObserver(callback, options);\n\n    const ChildrenFadeInFromBottom = document.getElementsByClassName(\n      "childrenFadeInFromBottomTag",\n    );\n    for (var i = 0; i < ChildrenFadeInFromBottom.length; i++) {\n      observer.observe(ChildrenFadeInFromBottom[i]);\n    }\n\n    const SinkTag = document.getElementsByClassName("sinkTag");\n    for (var i = 0; i < SinkTag.length; i++) {\n      observer.observe(SinkTag[i]);\n    }\n  });\n<\/script>'])), renderComponent($$result, "StandardNavBar", $$StandardNavBar, { "pageTitle": "Feedback", "customDescription": "Let us know how we are doing.", "ToBeIndexed": false }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Banner", $$Index$1, { "title": "Let us know how we did.", "subtitle": "" })} ${renderComponent($$result2, "ReviewForm", $$Index, { "title": "Leave us your feedback", "description": "We are constantly striving to be the best in the market and we value what your thoughts on working with us are." })} ` }));
}, "D:/Astro/Hard-Rock-Landscaping/src/pages/feedback.astro", void 0);

const $$file = "D:/Astro/Hard-Rock-Landscaping/src/pages/feedback.astro";
const $$url = "/feedback";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Feedback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
