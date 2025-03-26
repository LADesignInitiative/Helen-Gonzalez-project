/* empty css                                 */
import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_TYuzZ-KD.mjs';
import 'kleur/colors';
import { a as $$LogoComponent, $ as $$StandardNavBar } from '../chunks/standard-nav-bar_Dm2qMC6H.mjs';
import { $ as $$HomeButton } from '../chunks/home_button_D0m-pt2c.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MessageSent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  document.addEventListener("astro:page-load", () => {\n    const callback = (entries) => {\n      entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n          if (entry.target.classList.contains("sinkTag")) {\n            entry.target.classList.remove("sink");\n          }\n        } else {\n          if (\n            entry.target.classList.contains("sinkTag") &&\n            !entry.target.classList.contains("sink")\n          ) {\n            entry.target.classList.add("sink");\n          }\n        }\n      });\n    };\n    const options = {\n      threshold: 0.1,\n    };\n    const observer = new IntersectionObserver(callback, options);\n    const SinkTag = document.getElementsByClassName("sinkTag");\n    for (var i = 0; i < SinkTag.length; i++) {\n      observer.observe(SinkTag[i]);\n    }\n  });\n<\/script>'])), renderComponent($$result, "StandardNavBar", $$StandardNavBar, { "pageTitle": "Message Sent" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-20"> ${renderComponent($$result2, "Logo", $$LogoComponent, { "width": "300px" })} <h1 class="text-center font-bold">Your message has been sent.</h1> <p class="text-center font-bold">
We will contact you as soon as possible.
</p> ${renderComponent($$result2, "HomeButton", $$HomeButton, { "customStyle": "text-center mx-auto my-10 flex" })} </div> ` }));
}, "D:/Astro/Hard-Rock-Landscaping/src/pages/message_sent.astro", void 0);

const $$file = "D:/Astro/Hard-Rock-Landscaping/src/pages/message_sent.astro";
const $$url = "/message_sent";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MessageSent,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
