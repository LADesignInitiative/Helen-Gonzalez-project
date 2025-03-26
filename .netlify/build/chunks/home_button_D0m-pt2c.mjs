import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderScript } from './astro/server_TYuzZ-KD.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://hardrocklandscapingca.com/");
const $$HomeButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HomeButton;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-primaryC hover:bg-primaryHoverC rounded-lg text-white flex font-bold w-fit px-5 py-1 cursor-pointer ${customStyle}}`, "class")} id="HomeButton">
Go Home
</div> ${renderScript($$result, "D:/Astro/Hard-Rock-Landscaping/src/components/buttons/home_button.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/buttons/home_button.astro", void 0);

export { $$HomeButton as $ };
