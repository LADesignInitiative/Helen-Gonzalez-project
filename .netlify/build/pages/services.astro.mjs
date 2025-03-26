/* empty css                                 */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_TYuzZ-KD.mjs';
import 'kleur/colors';
import { B as BusinessInfo, $ as $$StandardNavBar } from '../chunks/standard-nav-bar_Dm2qMC6H.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://hardrocklandscapingca.com/");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  if (!BusinessInfo.subscribed) return Astro2.redirect("/expired");
  return renderTemplate`${renderComponent($$result, "StandardNavBar", $$StandardNavBar, { "pageTitle": "Services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-center font-bold">Astro</h1> ` })}`;
}, "D:/Astro/Hard-Rock-Landscaping/src/pages/services.astro", void 0);

const $$file = "D:/Astro/Hard-Rock-Landscaping/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
