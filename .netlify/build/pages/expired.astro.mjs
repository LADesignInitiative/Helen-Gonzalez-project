/* empty css                                 */
import { f as createComponent, r as renderTemplate, k as renderHead, h as addAttribute } from '../chunks/astro/server_TYuzZ-KD.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const Logo = new Proxy({"src":"/_astro/LADI-logo-SVG-RGB.DCv9-igt.svg","width":720,"height":720,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/logo/LADI-logo-SVG-RGB.svg";
							}
							
							return target[name];
						}
					});

const $$Expired = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta name="description" content="Webpage description goes here"><meta charset="utf-8"><title>Expired</title><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex">${renderHead()}</head> <body> <div class=""> <div class="w-fit px-10 my-10 mx-auto leading-10 text-center"> <div> <img${addAttribute(Logo.src, "src")} alt="logo" loading="eager" decoding="async" class="w-[500px] aspect-[3/2] mx-auto"> </div> <p>The link you are viewing has expired.</p> <p>Please, contact the administrator for assistance.</p> <p>email: Alberth@LADesignInitiative.com</p> <p>
Visit <a href="https://www.LADesignInitiative.com" rel="nofollow">www.LADesignInitiative.com</a> </p> </div> </div> </body></html>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/pages/expired.astro", void 0);

const $$file = "D:/Astro/Hard-Rock-Landscaping/src/pages/expired.astro";
const $$url = "/expired";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Expired,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
