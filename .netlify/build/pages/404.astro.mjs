/* empty css                                 */
import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_TYuzZ-KD.mjs';
import 'kleur/colors';
import { B as BusinessInfo, $ as $$StandardNavBar } from '../chunks/standard-nav-bar_Dm2qMC6H.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "StandardNavBar", $$StandardNavBar, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]"> <header class="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8"> <a href="#"> <span class="sr-only">${BusinessInfo.companyName}</span> <img class="h-10 w-auto sm:h-12" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""> </a> </header> <main class="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8"> <div class="max-w-lg"> <p class="text-base font-semibold leading-8 text-indigo-600">404</p> <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
Page not found
</h1> <p class="mt-6 text-base leading-7 text-gray-600">
Sorry, we couldn't find the page you're looking for.
</p> <div class="mt-10"> <a href="/" class="text-sm font-semibold leading-7 text-indigo-600"><span aria-hidden="true">&larr;</span> Back to home</a> </div> </div> </main> <div class="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block"> <img src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80" alt="" class="absolute inset-0 h-full w-full object-cover"> </div> </div> ` })}`;
}, "D:/Astro/Hard-Rock-Landscaping/src/pages/404.astro", void 0);

const $$file = "D:/Astro/Hard-Rock-Landscaping/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
