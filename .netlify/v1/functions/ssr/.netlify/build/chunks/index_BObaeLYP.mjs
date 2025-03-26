import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from './astro/server_TYuzZ-KD.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro("https://hardrocklandscapingca.com/");
const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$3;
  const {
    button_label,
    link,
    customStyle = "",
    btnColor,
    txtStyle,
    maskColor,
    customID,
    newTab = false
  } = Astro2.props;
  const BeforeStyle = `before:object-fit before:content-[''] before:h-full before:w-0 ${maskColor ? maskColor : "before:bg-primaryHoverC"} before:bg-[#21563D] before:absolute before:inset-0 before:opacity-60 hover:before:w-full before:transform-all before:z-[0]`;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`${customID ? customID : button_label}-liquid-button`, "id")}${addAttribute(`w-fit mx-auto rounded-lg cursor-pointer select-none active:translate-x-[1px] active:translate-y-[1px] relative ${btnColor ? btnColor : "bg-primaryC"}  text-white font-bold overflow-hidden ${BeforeStyle} clippedShape ${customStyle}`, "class")}> <a${addAttribute(link, "href")}${addAttribute(`${newTab ? "_blank" : "_self"}`, "target")} aria-label="opens in new tab"${addAttribute(`capitalize text-base whitespace-nowrap py-[17px] px-[30px] ${txtStyle ? txtStyle : "text-white font-primaryF"} text-center relative !select-none`, "class")}> ${button_label} </a> </button>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/buttons/liquid-button/index.astro", void 0);

const $$Astro$1 = createAstro("https://hardrocklandscapingca.com/");
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$2;
  const { title, subtitle, button_label, link, titleStyle, wrapperStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="TitleSection" class="absolute h-fit w-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[50] text-white font-['Prata', sans-serif]"> <div id="TitleWrapper"${addAttribute(wrapperStyle ? wrapperStyle : "w-11/12 sm:max-w-[800px] mx-auto", "class")}> <h1${addAttribute(titleStyle ? titleStyle : "text-white text-center text-2xl sm:text-[50px] leading-[50px] sm:text-[90px] sm:leading-[90px] fadeInUp font-['Prata',serif]", "class")}> ${title} </h1> <h2 class="text-white text-center text-sm sm:text-[20px] !block fadeInUp opacity-0 animation-delay-1 font-['Montserrat',sans-serif]"> ${subtitle} </h2> ${button_label && renderTemplate`${renderComponent($$result, "LiquidButton", $$Index$3, { "button_label": button_label, "link": link, "customStyle": "fadeInUp opacity-0 animation-delay-2 font-['Montserrat',sans-serif] text-[17px] my-10" })}`} </div> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/TitleComponent/index.astro", void 0);

const Grass = new Proxy({"src":"/_astro/shape-2.FRlZyyoD.png","width":1920,"height":54,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/shape/shape-2.png";
							}
							
							return target[name];
						}
					});

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="absolute left-0 right-0 bottom-[-1px] sm:bottom-0 bg-repeat-x h-[54px] w-full z-[19] animated-grass"${addAttribute(`background-image: url(${Grass.src})`, "style")}></div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/animated_grass/index.astro", void 0);

const $$Astro = createAstro("https://hardrocklandscapingca.com/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { image, title, subtitle, button_label, link, wrapperStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="small_banner"${addAttribute(`relative h-[350px] w-full before:absolute  before:content-[''] before:bg-[rgba(0,0,0,0.4)] before:w-full before:h-full before:z-10 scrollToTopIndicator bg-fixed bg-cover bg-no-repeat bg-[url('/assets/images/grass-646.webp')] sm:bg-[url('/assets/images/grass.webp')] !bg-bottom`, "class")}> ${title && renderTemplate`${renderComponent($$result, "TitleComponent", $$Index$2, { "title": title, "subtitle": subtitle, "button_label": button_label, "link": link, "wrapperStyle": "w-11/12 mx-auto overflow-hidden max-w-[270px] xm:max-w-[360px] sm:max-w-[636px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]", "titleStyle": "md:whitespace-nowrap text-white text-center text-3xl leading-[50px] sm:text-[45px] sm:leading-[90px] fadeInUp font-primaryFont" })}`} ${renderComponent($$result, "AnimatedGrass", $$Index$1, {})} </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/small_banner/index.astro", void 0);

export { $$Index as $ };
