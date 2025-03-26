/* empty css                                 */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, n as renderSlot, j as defineScriptVars } from '../chunks/astro/server_TYuzZ-KD.mjs';
import 'kleur/colors';
import { B as BusinessInfo, $ as $$StandardNavBar } from '../chunks/standard-nav-bar_Dm2qMC6H.mjs';
import 'clsx';
/* empty css                                 */
import { j as project2, k as project3, l as project4, i as project10, m as project6, n as project7, o as project8, q as project9 } from '../chunks/project9_ghrf4a7q.mjs';
export { renderers } from '../renderers.mjs';

const Slide1 = new Proxy({"src":"/_astro/slide-1.C2JCW9PJ.webp","width":1920,"height":700,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/slides/hero/slide-1.webp";
							}
							
							return target[name];
						}
					});

const Slide2 = new Proxy({"src":"/_astro/slide-2.CTGSLzxB.webp","width":1920,"height":700,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/slides/hero/slide-2.webp";
							}
							
							return target[name];
						}
					});

const Slide3 = new Proxy({"src":"/_astro/slide-3.BxS3KpFV.webp","width":1920,"height":700,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/slides/hero/slide-3.webp";
							}
							
							return target[name];
						}
					});

const Grass = new Proxy({"src":"/_astro/shape-2.B1MXL1Mb.webp","width":1920,"height":54,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/shape/shape-2.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$8 = createAstro("https://hardrocklandscapingca.com/");
const $$ArrowButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ArrowButton;
  const { label, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}> <button class="overflow-hidden hover:bg-[#0685c4] bg-secondaryC rounded-sm cursor-pointer group active:translate-x-[1px] active:translate-y-[1px]"> <div class="grid overflow-hidden w-[200px] min-h-[40px] max-h-[65px] relative"> <div class="flex flex-row-reverse relative"> <span class="inline-block text-white uppercase font-bold px-5 py-2 text-lg absolute inset-0 transition-all duration-500 group-hover:translate-y-[-50px]">${label} </span> <span class="inline-block text-white uppercase font-bold px-5 py-2 text-lg absolute inset-0 translate-y-[50px] transition-all duration-500 group-hover:translate-y-[0px]">${label} </span> <div class="my-auto relative h-full w-[35px] overflow-x-hidden"> <img src="/assets/icons/right-white.png" alt="navigation arrow" decoding="async" loading="eager" class="w-[35px] aspect-square absolute right-[5px] top-[10%] transition-all duration-500 group-hover:translate-x-[30px]"> <img src="/assets/icons/right-white.png" alt="navigation arrow" decoding="async" loading="eager" class="w-[35px] aspect-square absolute right-[5px] top-[10%] translate-x-[-30px] transition-all duration-500 group-hover:translate-x-[0px]"> </div> </div> </div> </button> </a>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/buttons/arrow-button.astro", void 0);

const $$Index$4 = createComponent(($$result, $$props, $$slots) => {
  var HeroImages = [];
  try {
    HeroImages.push(Slide1);
    HeroImages.push(Slide2);
    HeroImages.push(Slide3);
  } catch (error) {
    console.log("Error: ", error);
  }
  return renderTemplate`${maybeRenderHead()}<section id="HeroSection" class="relative flex text-center block bg-cover bg-no-repeat bg-center overflow-hidden h-[60vh] md:h-[85vh] w-full scrollToTopIndicator bg-[url('/assets/images/hero-image-artificial-lawn-763-compressed.webp')] md:bg-[url('/assets/images/hero-image-artificial-lawn-1600-compressed.webp')] 2xl:bg-[url('/assets/images/hero-image-artificial-lawn-2234-compressed.webp')] 2xl:bg-[center_top_-100px] translate-y-[15px] sm:translate-y-[0px]"> <div id="HeroBackdrop" class="absolute inset-0 md:left-0 md:top-0 md:bottom-0 z-[0] w-full md:w-d[50%] h-full opacity-50 md:opacity-60 bg-black"></div> <div class="pattern-layer absolute left-0 right-0 bottom-[0px] bg-repeat-x h-[54px] w-full z-[19]"${addAttribute(`background-image:url(${Grass.src})`, "style")}></div> <div class="m-auto md:mtd-[130px] text-white z-[1] px-5 md:text-left md:w-[50%] md:ml-[20px] md:mr-auto childrenFadeInFromBottomTag"> <h1 class="text-2xl md:text-4xl font-bold text-white uppercase floatUp">
Artificial Turf Installation
</h1> <h2 class="text-2xl floatUp delay-200">
Keep your outdoor space green and lush while saving water and hours on
      grass maintenance
</h2> <h2 class="mb-5 floatUp delay-[400ms]">
Experience delight in every step you take on synthetic grass.
</h2> <div class="floatUp delay-[600ms]"> ${renderComponent($$result, "ArrowButton", $$ArrowButton, { "label": "Let's discuss", "link": "/#contact-us-section" })} </div> </div> </section>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/hero-section/index.astro", void 0);

const TestimonialBG = new Proxy({"src":"/_astro/testimonial-bg.CjNFUTvP.webp","width":930,"height":620,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/background/testimonial-bg.webp";
							}
							
							return target[name];
						}
					});

const ShapeNine = new Proxy({"src":"/_astro/shape-9.DHBaER0-.webp","width":341,"height":385,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/shape/shape-9.webp";
							}
							
							return target[name];
						}
					});

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$7 = createAstro("https://hardrocklandscapingca.com/");
const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$3;
  const { testimonials } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", " ", '<section class="testimonial-section relative sec-pad p-[143px_0px_250px_0px] overflow-x-hidden bg-white"> <div class="bg-layer absolute bg-center hidden md:block" id="testimonial-background"', '></div> <div id="shape-9" class="slideOutLeft absolute left-[0px] bottom-[0px] w-[341px] h-[385px] bg-norepeat"', `></div> <div class="auto-container static max-w-[1200px] py-0 px-[15px] my-0 mx-auto"> <div class="flex flex-wrap lg:flex-nowrap justify-between"> <div class="w-full lg:w-4/12 md:w-full sm:w-full title-column"> <div class="sec-title text-center md:text-left"> <span class="uppercase text-lg text-slate-500">Testimonials</span> <h2 class="text-4xl">Don't take our word for it.</h2> <h3 class="text-2xl">See what our clients have said about us.</h3> <div class="hidden md:block"> `, ' </div> <div class="block md:hidden"> ', ' </div> </div> </div> <div class="w-full md:w-full sm:w-full inner-column"> <div class="inner-content hidden md:block"> ', ' </div> <div class="inner-content block md:hidden mt-10"> ', ' </div> </div> </div> </div> </section> <script>\n  document.addEventListener("astro:page-load", () => {\n    const ShapeNine = document.getElementById("shape-9");\n    let options = {\n      threshold: 1.0,\n    };\n    const ShapeNineObserver = new IntersectionObserver((entries) => {\n      if (entries[0].isIntersecting) {\n        entries[0].target.classList.remove("slideOutLeft");\n      } else {\n        entries[0].target.classList.add("slideOutLeft");\n      }\n    });\n    if (ShapeNine) ShapeNineObserver.observe(ShapeNine);\n  });\n<\/script>'])), renderComponent($$result, "TestimonialLightBox", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Astro/Hard-Rock-Landscaping/src/components/Testimonial/testimonial-light-box", "client:component-export": "default" }), maybeRenderHead(), addAttribute(`background-image: url(${TestimonialBG.src})`, "style"), addAttribute(`background-image: url(${ShapeNine.src})`, "style"), renderComponent($$result, "NavButtons", null, { "client:only": "react", "size": testimonials.length, "desktop": true, "client:component-hydration": "only", "client:component-path": "D:/Astro/Hard-Rock-Landscaping/src/components/Testimonial/carousel-nav.tsx", "client:component-export": "default" }), renderComponent($$result, "NavButtons", null, { "client:only": "react", "size": testimonials.length, "desktop": false, "client:component-hydration": "only", "client:component-path": "D:/Astro/Hard-Rock-Landscaping/src/components/Testimonial/carousel-nav.tsx", "client:component-export": "default" }), renderComponent($$result, "Carousel", null, { "testimonials": testimonials, "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Astro/Hard-Rock-Landscaping/src/components/Testimonial/carousel.tsx", "client:component-export": "default" }), renderComponent($$result, "MobileCarousel", null, { "testimonials": testimonials, "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Astro/Hard-Rock-Landscaping/src/components/Testimonial/carousel-mobile.tsx", "client:component-export": "default" }));
}, "D:/Astro/Hard-Rock-Landscaping/src/components/Testimonial/index.astro", void 0);

const testimonials = [
  {
    name: "Houzz Reviewer",
    rating: 5,
    designation: "",
    testimonial: "I'm happy with how they get the job done in one day (front yard turf installation). Helen listens and communicate well to her client. She is reliable and trustworthy. She doesn’t charge much unlike the others I invited for an estimate. Highly recommended. You guys won’t regret it.",
    profile_image: null,
    date: "6/1/22",
    platform: "Houzz",
    url: "https://www.houzz.com/professionals/landscape-contractors/hard-rock-landscaping-pfvwus-pf~1799635898"
  },
  {
    name: "Houzz Reviewer",
    rating: 5,
    designation: "",
    testimonial: "Good job and well done turf on my back yard will recommend to all family and friends who need yard work done and also turf",
    profile_image: null,
    date: "4/21/22",
    platform: "Houzz",
    url: "https://www.houzz.com/professionals/landscape-contractors/hard-rock-landscaping-pfvwus-pf~1799635898"
  },
  {
    name: "Houzz Reviewer",
    rating: 5,
    designation: "",
    testimonial: "Very professional personalized work … the job was don on Tim ad well done . Helm the manager was the best !",
    profile_image: null,
    date: "4/20/22",
    platform: "Houzz",
    url: "https://www.houzz.com/professionals/landscape-contractors/hard-rock-landscaping-pfvwus-pf~1799635898"
  },
  {
    name: "Houzz Reviewer",
    rating: 5,
    designation: "",
    testimonial: "Love the turf job they did for me. My house looks very beautiful and amazing, will recommend to my neighbors and family.",
    profile_image: null,
    date: "4/20/22",
    platform: "Houzz",
    url: "https://www.houzz.com/professionals/landscape-contractors/hard-rock-landscaping-pfvwus-pf~1799635898"
  },
  {
    name: "Houzz Reviewer",
    rating: 5,
    designation: "",
    testimonial: "Hard Rock Landscaping is my go to when I need a project done at one of my properties.  Not only are they creative and can give direction on projects but they are also priced right. Great service",
    profile_image: null,
    date: "4/20/22",
    platform: "Houzz",
    url: "https://www.houzz.com/professionals/landscape-contractors/hard-rock-landscaping-pfvwus-pf~1799635898"
  },
  {
    name: "Eddie S.",
    rating: 5,
    designation: "",
    location: "Los Angeles, CA",
    testimonial: "Fast and efficient!",
    profile_image: null,
    date: "4/3/22",
    platform: "Home Advisor"
  },
  {
    name: "Patricia P",
    rating: 5,
    designation: "",
    location: "Compton, CA",
    testimonial: "Loved that they showed up in a mask. My previous gardener disappeared. I have been thinking n the market for a new gardener for about a month. I searched Yelp twice and last night I finally made contact with multiple gardeners. I quickly learned that I do not have a mow & blow type of yard. After multiple exchanges with multiple gardeners, the Hardrock team came by and gave me an estimate. Chris was the translator for Gabino. My service needs have conditions. 1) Rinse the blades of the lawnmower twice: before starting and before moving to either front or back. Rationale is to limit cross contamination from the weeds of others and/or my St. Augustine. Before hiring a gardener 9 years ago, my lawn was fairly nice. Over time, my lawn became full of weeds and crab grass. The issue was that the gardener was going from lawn to lawn. The seeds from the lawns of others ended up destroying my lawn. The Team agreed to rinse before and again at the exchange from back to front or front to back. I have multiple flowerbeds, newly planted boxwood trees, and prefab concrete stones. I am fully aware of the amount of detail that is needed to maintain my lawn, which is why I was in search of a qualified gardener. I needed a gardener who k owe about lawns and also knows the difference between a fern and a weed. Gabino gave me his price; $120 a month for weekly service. Knowing that no-weekly rate is $60 a month, I found this price to be fair. I asked when they could start? They said now. My last gardener only accepted cash or check. It's nice finding a gardener who accepts electronic forms of payment. Gabino speaks Spanish. Chris speaks English. Gabino is very knowledgeable about lawns. He let me know that my newly installed sod is being over watered, which is why it's turning brown. He suggested that I reduce watering to every other day vs. daily. He noticed that I have a large dog and recognized the worn path from my dog. Gabino suggested that I resume blocking off the back lawn, allowing additional time for the newly planted sod to mature.  These pics were taken today, after today's lawn maintenance service. I am happy with the results. I am thankful for Yelp, who provided me with a resource to find a good gardener. Chris and Gabino, I will see you guys next week.",
    profile_image: null,
    date: "7/17/2020",
    platform: "Yelp"
  },
  {
    name: "Savor D.",
    rating: 5,
    designation: "",
    location: "Redondo Beach, CA",
    testimonial: "Best experience I have had with a contractor. On time, finished ahead of schedule, fixed any concerns, even priced additional work fairly. My artificial turf looks amazing. Helen was extremely courteous and professional. It's a small company feel, and they're were understandable snags, but it helped to see Helen on site almost every day, to make sure any concerns were addressed. I would use her company again without hesitation.",
    profile_image: null,
    date: "7/17/2020",
    platform: "Yelp"
  },
  {
    name: "Barry B.",
    rating: 5,
    designation: "",
    location: "Mar Vista, Los Angeles, CA",
    testimonial: "While I wasn't able to use them for this one particular project, I will definitely be using them for some landscaping in the near future. Great communication, showed up on time, and they knew what they were talking about. Looking forward to working with them soon. Thanks again for your time.",
    profile_image: null,
    date: "9/16/2020",
    platform: "Yelp"
  },
  {
    name: "B C",
    rating: 5,
    designation: "",
    location: "Valley Glen, CA",
    testimonial: "Wow, these guys came out at 7 am-ish on the HOTTEST day of the month so far. They did a FABULOUS job by clearing up the front yard of all the weeds, trimming the side brush back from the overgrowth from the neighbors fence ( ivy and tall bush trees) then they attacked and removed all of the tall weeds, cleaned up all the walkways and were so nice! So good at what they do!!!! Highly recommend!",
    profile_image: null,
    date: "7/11/2020",
    platform: "Yelp"
  }
];

const $$WhyInstallArtificialTurf = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="px-5 pt-[100px] my-10 flex flex-col md:grid md:grid-cols-2 md:gap-x-5 relative"> <div class="hidden md:block md:sticky h-fit top-[250px] w-fit"> <img src="/assets/images/girl-lying-on-grass-646.webp" alt="Artificial Turf Installation Yard" loading="lazy" decoding="async" class="w-[646px] aspect-[4/3] object-cover mx-auto"> </div> <div class="[&>div>h3]:font-bold [&>div>h3]:text-2xl [&>div>h3]:my-5 [&>div>h3]:text-center [&>div>svg]:mx-auto [&>p]:mb-5 [&>div>p]:mb-5 [&>div]:rounded-lg [&>div]:bg-slate-100 [&>div]:p-5 [&>div]:my-5 [&>div]:transition-all [&>div]:duration-500"> <p class="text-slate-500 uppercase text-lg text-center md:text-left">
Enjoy all the benefits of a real lawn without its hassles
</p> <h2 class="text-2xl md:text-3xl font-bold mb-5">
Why installing
<span class="text-secondaryC">artificial turf</span> can be the smartest move
      you can make.
</h2> <div class="block md:hidden"> <img src="/assets/images/girl-lying-on-grass-646.webp" alt="Artificial Turf Installation Yard" loading="lazy" decoding="async" class="w-[646px] aspect-[4/3] object-cover mx-auto"> </div> <p>
Choosing to install artificial turf can transform your outdoor space into
      a beautiful, low-maintenance landscape. With synthetic turf grass, you can
      say goodbye to the hassle of mowing, watering, and weeding.
</p> <p>
Unlike regular grass, fake grass offers durability and a lush look without
      the constant upkeep.
</p><p>
When you install artificial grass, you ensure proper drainage and a solid
      weed barrier that keeps your lawn pristine.
</p><p>
The edges of the turf and seam are designed for seamless integration,
      creating a stunning visual appeal.
</p> <p>
No more worrying about the perimeter of your yard; just enjoy your vibrant
      green oasis!
</p> <div id="lower-cost" class="RotateInTag RotateInTag"> <h3>Lower Cost and Maintenance</h3> <svg id="Layer_1" width="150px" height="150px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><style>
            .cls-1 {
              fill: #82b02a;
            }
            .cls-2 {
              fill: #2d3e50;
            }
          </style></defs><title>b</title><path class="cls-1" d="M125.59337,76.97083l-27.2233-2.33972a.71544.71544,0,0,1-.42961-1.23328l6.8673-6.47676-1.52436-1.55589-1.01717-1.03806-5.16336-5.36022q-2.98435-3.14546-5.94486-6.30581-2.12084-2.273-4.2178-4.57275Q81.92,42.59389,77.02811,36.97415c-1.62268-1.87923-3.2394-3.76738-4.83227-5.67644-.42355-.50708-.84117-1.02014-1.26175-1.53021l-1.70322.95752L42.65642,45.66325l-4.24167,2.38334-3.03954-3.311L31.572,40.59235,1.62991,7.97758,7.91782,1.84477l32.397,31.26355h.003L59.283,20.77115l9.69734-6.3088,3.51681-2.28786.80538-.522,4.57572,4.009q2.8099,2.46536,5.53324,5.01122c1.82256,1.69428,3.61824,3.40943,5.408,5.13056Q94.17968,30.98,99.38181,36.3c3.484,3.53471,6.90238,7.13206,10.31181,10.73538l5.07388,5.44674.68605.74869,1.794,1.95787,6.5569-6.184a.71544.71544,0,0,1,1.20539.48413l1.35929,26.73292A.71541.71541,0,0,1,125.59337,76.97083Z"></path><path class="cls-2" d="M6.83054,123.81562a2.34845,2.34845,0,0,0,2.349,2.3396H25.39766a2.34645,2.34645,0,0,0,2.3396-2.3396V48.1809L6.83054,25.41191Z"></path><path class="cls-2" d="M38.93926,123.81562a2.34645,2.34645,0,0,0,2.3396,2.3396H57.50638a2.34645,2.34645,0,0,0,2.3396-2.3396V45.1301L38.93926,56.8749Z"></path><path class="cls-2" d="M85.34767,58.09149c-1.44123-1.54416-2.873-3.08827-4.28617-4.65116C77.3275,49.36007,74.04269,45.69158,71.048,42.229v81.58666a2.34645,2.34645,0,0,0,2.3396,2.3396H89.6151a2.34645,2.34645,0,0,0,2.3396-2.3396V65.08219l-.58022-.5989C89.325,62.33082,87.33165,60.21586,85.34767,58.09149Z"></path><path class="cls-2" d="M103.1567,83.02232v40.7933a2.34645,2.34645,0,0,0,2.3396,2.3396h16.21815a2.34844,2.34844,0,0,0,2.349-2.3396V84.81912Z"></path></svg> <p>
Although the cost of installing fake grass is higher, the cost of
        maintaining it over the years is significantly lower than maintaining
        real grass. Artificial turf does not require frequent mowing, watering,
        backbreaking weeding, and fertilizing.
</p> <p>
Unlike traditional grass lawns, artificial grass eliminates the need to
        install a sprinkler system, making it easier to enjoy vibrant turf areas
        year-round.
</p> <p>
Plus, the cleanup is a breeze, allowing you more time to enjoy your
        beautiful yard. You can simply deal with any debris by hosing the turf. <br><br> </p> </div> <div id="conservation" class="RotateInTag RotateInTag"> <h3>Dramatic Water Conservation</h3> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="150px" height="150px" viewBox="0 0 402.122 402.122" style="enable-background:new 0 0 402.122 402.122;" xml:space="preserve"> <g> <g id="Guides_For_Artboard_35_"></g> <g id="Artwork_34_"></g> <g id="Layer_2_34_"> <g> <path style="fill:#048fd4;" d="M160.713,6.974c-6.931-6.021-23.389-15.699-26.083,9.367
				c-9.673,64.829-79.324,110.136-79.324,174.054c0,53.879,43.678,97.557,97.558,97.557c53.879,0,97.557-43.678,97.557-97.557
				C250.42,141.51,230.799,67.858,160.713,6.974z M114.707,242.138c-1.511,2.022-3.824,3.092-6.164,3.092
				c-1.584,0-3.181-0.489-4.554-1.505c-0.858-0.636-21.076-15.899-25.434-44.748c-4.357-28.843,15.175-55.873,16.009-57.01
				c2.51-3.423,7.322-4.166,10.748-1.652c3.42,2.51,4.162,7.314,1.659,10.739c-0.253,0.349-16.599,23.194-13.209,45.627
				c3.378,22.368,19.246,34.584,19.406,34.705C116.546,233.938,117.242,238.749,114.707,242.138z"></path> <path style="fill:#F7F1E6;" d="M113.169,231.386c-0.16-0.121-16.028-12.337-19.406-34.705
				c-3.39-22.433,12.956-45.278,13.209-45.627c2.503-3.425,1.761-8.229-1.659-10.739c-3.426-2.513-8.238-1.771-10.748,1.652
				c-0.834,1.137-20.366,28.167-16.009,57.01c4.357,28.849,24.575,44.112,25.434,44.748c1.373,1.016,2.97,1.505,4.554,1.505
				c2.34,0,4.653-1.069,6.164-3.092C117.242,238.749,116.546,233.938,113.169,231.386z"></path> <path style="fill:#048fd4;" d="M295.623,241.773c-3.956-3.437-13.348-8.96-14.885,5.346c-5.52,36.996-45.27,62.852-45.27,99.328
				c0,30.748,24.927,55.675,55.676,55.675c30.747,0,55.672-24.927,55.672-55.675C346.816,318.55,335.619,276.518,295.623,241.773z
				 M269.368,375.976c-0.862,1.154-2.181,1.765-3.518,1.765c-0.903,0-1.815-0.279-2.599-0.859
				c-0.49-0.363-12.028-9.074-14.514-25.537c-2.486-16.46,8.66-31.886,9.135-32.534c1.433-1.954,4.18-2.377,6.134-0.943
				c1.952,1.433,2.376,4.174,0.948,6.128c-0.146,0.2-9.474,13.237-7.539,26.039c1.929,12.765,10.982,19.737,11.075,19.806
				C270.417,371.296,270.814,374.042,269.368,375.976z"></path> <path style="fill:#F7F1E6;" d="M268.491,369.84c-0.093-0.069-9.146-7.041-11.075-19.806c-1.935-12.801,7.393-25.839,7.539-26.039
				c1.428-1.954,1.004-4.696-0.948-6.128c-1.954-1.434-4.701-1.011-6.134,0.943c-0.475,0.648-11.621,16.074-9.135,32.534
				c2.485,16.463,14.023,25.174,14.514,25.537c0.783,0.58,1.695,0.859,2.599,0.859c1.337,0,2.655-0.61,3.518-1.765
				C270.814,374.042,270.417,371.296,268.491,369.84z"></path> </g> </g> </g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg> <p>
Artificial turf not only provides the stunning look and feel of natural
        grass but also helps to conserve water during times of drought. By
        installing the turf, you make a sustainable choice that benefits both
        your yard and the environment.
</p> </div> <div id="durability" class="RotateInTag RotateInTag"> <h3>Durability &amp; Longevity</h3> <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="150px" height="150px"><title>Leaf</title><path style="fill:#82b02a" d="M43.7,13.54a35.693,35.693,0,0,1-7.51,17.95,19.955,19.955,0,0,1-8.73,6.29,25.441,25.441,0,0,1-8.83,1.48h-.36a35.317,35.317,0,0,1-9.42-1.44,45.143,45.143,0,0,1,3.87-5.25,35.6,35.6,0,0,0,6.42.74,13.358,13.358,0,0,0,1.44-.07,1.014,1.014,0,0,0,.9-1.1,1,1,0,0,0-1.1-.89,25.141,25.141,0,0,1-6.09-.43,46.291,46.291,0,0,1,4.15-3.89,26.742,26.742,0,0,0,7.39,1.01,27.992,27.992,0,0,0,2.82-.14,1,1,0,1,0-.21-1.99,26.116,26.116,0,0,1-8-.44c1.16-.86,2.41-1.7,3.75-2.5s2.63-1.6,3.85-2.4a26.286,26.286,0,0,0,3.76.31,11.34,11.34,0,0,0,2.07-.17,1,1,0,0,0-.37-1.96,12.474,12.474,0,0,1-2.89.09c1.72-1.21,3.31-2.4,4.74-3.59a1,1,0,0,0-1.28-1.54c-1.47,1.22-3.11,2.46-4.91,3.7a8.057,8.057,0,0,1,.57-1.51,1,1,0,0,0-1.76-.97,11.235,11.235,0,0,0-1.11,4.03c-1.18.76-2.41,1.53-3.69,2.29-1.36.81-2.62,1.66-3.8,2.52a34.183,34.183,0,0,1,1.19-5.32,1,1,0,1,0-1.9-.62,31.494,31.494,0,0,0-1.43,7.61,48.328,48.328,0,0,0-4.05,3.75,12.468,12.468,0,0,1,.69-3.61,1,1,0,1,0-1.86-.73,13.831,13.831,0,0,0-.73,6.42,46.064,46.064,0,0,0-3.02,3.9c-.34.49-.66.97-.96,1.43a19.4,19.4,0,0,1-.98-5.39A17.723,17.723,0,0,1,10.36,18.9c5.74-6.98,13.12-8.63,19.63-10.09,4.56-1.02,8.86-1.98,12.14-4.59a.986.986,0,0,1,.98-.15.953.953,0,0,1,.62.76A32,32,0,0,1,43.7,13.54Z"></path><path style="fill:#82b02a" d="M8.85,37.82a33.954,33.954,0,0,0-2.91,5.53A1,1,0,0,1,5,44a1,1,0,0,1-.94-1.35A35.275,35.275,0,0,1,7.3,36.5c.11.31.18.48.19.51a.973.973,0,0,0,.59.55C8.12,37.58,8.39,37.67,8.85,37.82Z"></path></svg> <p>
Synthetic grass offers unmatched durability and longevity, ensuring your
        lawn remains vibrant and lush for years to come. Unlike traditional
        regular grass turf, it withstands heavy foot traffic without the wear
        and tear and damage from dogs that like to dig, allowing you to enjoy
        your outdoor space without the hassle of constant maintenance.
</p> </div> <div id="safety" class="RotateInTag RotateInTag"> <h3>Eliminates health and safety risks for children</h3> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 153.3635 227.6915" enable-background="new 0 0 153.3635 227.6915" xml:space="preserve"> <g> <path d="M73.4883,171.8873v45.8042c0,5.5234,4.4766,10,10,10c5.5215,0,10-4.4766,10-10v-49.544
		c-5.8018-0.0732-11.0225-0.5205-15.6455-1.1831C77.0625,169.1168,75.5,170.8682,73.4883,171.8873z"></path> <path d="M96.8223,217.6915c0,5.5234,4.4746,10,10,10c5.5195,0,10-4.4766,10-10v-51.4419c-5.6172,1.042-12.2959,1.8008-20,1.8979
		V217.6915z"></path> <path d="M90.2813,42.4356c11.5625,2.6914,23.1172-4.498,25.8086-16.0605c2.6914-11.5625-4.4981-23.1172-16.0586-25.8106
		c-11.5625-2.6914-23.1172,4.5-25.8106,16.0606C71.5274,28.1876,78.7188,39.7442,90.2813,42.4356z"></path> <path d="M140.419,128.4254c0.4687,3.5581,3.7334,6.0629,7.292,5.5947c3.5585-0.4688,6.0664-3.7334,5.5957-7.2944
		c-4.6104-34.938-14.0948-54.1167-23.2373-64.7735c-8.4463-9.8872-16.5733-12.02-18.7266-12.3628
		c-1.874-0.4624-8.7324-2.0737-16.1875-2.0981c-7.4561,0.0244-14.3135,1.6352-16.1885,2.0981
		c-2.1533,0.3423-10.2793,2.4746-18.7275,12.3628c-2.0176,2.3521-4.0528,5.1206-6.0469,8.3809
		c3.7881,4.04,6.1152,9.4663,6.1152,15.4297c0,0.396-0.0185,0.7895-0.04,1.1826c2.9033-6.7793,5.9473-11.6826,8.749-15.2046
		l-7.792,38.2934c2.3496,1.4253,5.0059,3.6309,7.4649,7.0665c6.5605,9.0839,9.7578,22.8544,9.7715,42.0839
		c-0.003,1.5957-0.0254,3.2315-0.0713,4.9161c0,0.0092-0.002,0.0185-0.002,0.0278c4.9307,0.6816,10.5244,1.1196,16.7666,1.1196
		c25.2647,0,39.9287-7.1577,42.8008-8.7031c0.3477-0.187,0.5332-0.2969,0.5332-0.2969l-17.1904-84.4917
		c0.08,0.1001,0.1572,0.1885,0.2383,0.291C128.252,80.6348,136.3037,97.2012,140.419,128.4254z"></path> <path style="fill:#048fd4;" d="M16.6895,218.4825c0,4.9414,4.0078,8.9492,8.9511,8.9492c4.9414,0,8.9493-4.0078,8.9493-8.9492v-39.9551h6.2812v39.9551
		c0,4.9414,4.0059,8.9492,8.9492,8.9492c4.9434,0,8.9492-4.0078,8.9492-8.9492v-54.6484h-42.08V218.4825z"></path> <path style="fill:#048fd4;" d="M75.459,159.1856c-0.0117-21.3164-4.1309-33.3076-9.209-40.3398c-4.8047-6.71-10.4844-8.2022-12.0859-8.378
		c-0.3203-0.0576-0.6504-0.0927-0.9883-0.0927h-5.7344c-1.7344,3.0908-5.4258,5.2314-9.7109,5.2314
		c-4.2852,0-7.9766-2.1406-9.711-5.2314h-5.7363c-0.3379,0-0.6679,0.0351-0.9902,0.0927c-1.6035,0.1778-7.2813,1.6719-12.084,8.3789
		C4.1328,125.878,0.0117,137.8702,0,159.1866c0,1.5576,0.0215,3.1748,0.0703,4.8506c0.0938,3.2519,2.7578,5.8252,5.9922,5.8252
		c0.0606,0,0.1192-0.001,0.1797-0.002c3.3125-0.0957,5.9199-2.8594,5.8242-6.1719C12.0215,162.1358,12,160.6358,12,159.1866
		c-0.0078-15.1104,2.2793-24.1563,4.6895-29.4072v30.0547h42.08v-30.0508c2.4102,5.2363,4.6973,14.3056,4.6895,29.4023
		c0,1.4453-0.0234,2.9502-0.0625,4.5156c-0.0898,3.3135,2.5234,6.0694,5.8379,6.1592c0.0527,0.002,0.1074,0.002,0.1621,0.002
		c3.2402,0.0009,5.9082-2.5811,5.9941-5.8399C75.4356,162.3614,75.457,160.751,75.459,159.1856z"></path> <path style="fill:#048fd4;" d="M47.5606,102.6749c5.8242-3.3926,9.748-9.6875,9.748-16.9131c0-10.8125-8.7656-19.5781-19.5781-19.5781
		c-10.8125,0-19.5781,8.7656-19.5781,19.5781c0,7.2256,3.9257,13.5205,9.75,16.9131c2.8906,1.6836,6.2421,2.665,9.8281,2.665
		C41.3184,105.3399,44.6699,104.3594,47.5606,102.6749z"></path> </g> </svg> <p>
You can feel confident that children won't become sick playing on
        artificial turf. Unlike regular grass turf, it is devoid of allergens
        and pollen due to its non-toxicity, and it provides a non-slip surface.
        By installing fake grass, you pave the way for healthier, happier
        outdoor experiences for kids.
</p> </div> </div> <div class="absolute bottom-0 left-0 right-0 z-[-4]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="translate-y-[5px]"><path fill="#048fd4" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,245.3C960,224,1200,160,1320,128L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> <div id="background1" class="bg-primaryC transition-all duration-[1500ms] w-full max-h-[1850px] md:max-h-[1300px] !max-h-0 h-[1850px] md:h-[1300px]"></div> </div> <div class="absolute bottom-0 left-0 right-0 z-[-3]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="translate-y-[5px]"><path fill="#82b02a" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,245.3C960,224,1200,160,1320,128L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> <div id="background2" class="bg-secondaryC transition-all duration-[1350ms] w-full max-h-[1500px] md:max-h-[950px] !max-h-0 h-[1350px] md:h-[950px]"></div> </div> <div class="absolute bottom-0 left-0 right-0 z-[-2]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="translate-y-[5px]"><path fill="#161d27" fill-opacity="1" d="M0,32L80,69.3C160,107,320,181,480,176C640,171,800,85,960,58.7C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> <div id="background3" class="bg-darkBlack transition-all duration-[1500ms] w-full max-h-[750px] md:max-h-[500px] !max-h-0 h-[750px] md:h-[500px]"></div> </div> <div class="absolute bottom-[-5px] sm:bottom-[-10px] left-0 right-0 z-[-2]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="translate-y-[10px]"> <path fill="#ffffff" fill-opacity="1" d="M0,64L80,58.7C160,53,320,43,480,64C640,85,800,139,960,138.7C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path> </svg> <div id="background4" class="bg-white transition-all duration-[1500ms] w-full max-h-[350px] md:max-h-[150px] !max-h-0 h-[350px] md:h-[150px]"></div> </div> </section>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/home-components/why-install-artificial-turf.astro", void 0);

const affordable = new Proxy({"src":"/_astro/affordable.CX9Inw1J.webp","width":150,"height":150,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/why-work-w-us/affordable.webp";
							}
							
							return target[name];
						}
					});

const cement = new Proxy({"src":"/_astro/cement.CB7kEO-c.webp","width":150,"height":150,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/why-work-w-us/cement.webp";
							}
							
							return target[name];
						}
					});

const design = new Proxy({"src":"/_astro/design.CuVcsv_Y.webp","width":150,"height":150,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/why-work-w-us/design.webp";
							}
							
							return target[name];
						}
					});

const Flexibility = new Proxy({"src":"/_astro/flexibility.CXAN5Gjf.webp","width":150,"height":150,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/why-work-w-us/flexibility.webp";
							}
							
							return target[name];
						}
					});

const guaranteed = new Proxy({"src":"/_astro/guaranteed.jflpGfhV.webp","width":150,"height":150,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/why-work-w-us/guaranteed.webp";
							}
							
							return target[name];
						}
					});

const resourceful = new Proxy({"src":"/_astro/resourceful.CVhYoP7G.webp","width":150,"height":150,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/why-work-w-us/resourceful.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$6 = createAstro("https://hardrocklandscapingca.com/");
const $$WhyPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$WhyPanel;
  const { image, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row rounded-lg bg-white shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] p-5 mb-5 md:mb-0 floatUpTag floatUp"> <div class="min-w-[40%]"> <h3 class="text-center font-bold mb-5 uppercase text-xl lg:text-3xl"> ${label} </h3> <img${addAttribute(image.src, "src")} loading="lazy" decoding="async"${addAttribute(label, "alt")} class="w-[150px] aspect-square m-auto"> </div> <div class="my-auto"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/home-components/why-panel.astro", void 0);

const Helen = new Proxy({"src":"/_astro/helen.BNB8gNMK.webp","width":350,"height":466,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/helen.webp";
							}
							
							return target[name];
						}
					});

const ClientIcon = new Proxy({"src":"/_astro/customers.DjYccDTq.webp","width":64,"height":64,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/customers.webp";
							}
							
							return target[name];
						}
					});

const $$WhyWorkWithUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full z-[0]"><path fill="#f0f0f0" fill-opacity="1" d="M0,160L720,320L1440,128L1440,0L720,0L0,0Z"></path></svg> </div> <section class="relative overflow-visible md:h-full bg-white"> <div class="px-5 py-20 flex flex-col md:flex-rofw md:grid md:grid-cols-2 md:gap-5"> <div class="min-w-[20%] lg:min-w-[40%] mb-10 md:mb-0 md:sticky md:top-[150px] md:h-fit md:w-fit block"> <h3 class="uppercase text-slate-500 text-lg text-center md:text-left">
About us
</h3> <h2 class="text-2xl md:text-4xl text-center md:text-left font-bold mb-5 text-black">
What make us different than other <span class="text-primaryC">artificial turf installers in Los Angeles?</span> </h2> <div class="relative mb-10"> <div class="w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] rounded-full mx-auto overflow-hidden"> <img${addAttribute(Helen.src, "src")} alt="owner of hard rock landscaping" class="w-[350px] aspect-[3/4]"> <div id="circle_info" class="block absolute flex rounded-full centered bg-white z-10 w-[175px] aspect-square bottom-[-60px] right-0 min-[500px]:right-[50px] sm:right-[25%] md:right-[25px] lg:right-[20%] justify-center bg-slate-200 p-2 floatAnim"> <div class="grid !m-auto w-fit h-fit text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] relative"> <div class="relative text-6xl leading-[60px] mb-[12px]"> <img${addAttribute(ClientIcon.src, "src")} alt="articial turf installation clients" class="w-[64x] aspect-square m-auto" decoding="async" loading="lazy"> </div> <p class="text-lg leading-[32px] font-medium text-center">
Over 1000 clients served
</p> </div> </div> </div> </div> </div> <div class="[&>div]:rounded-lg [&>div]:bg-white [&>div]:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] [&>div]:p-5 [&>div]:mb-5 md:[&>div]:mb-0 md:grid gap-5 z-[1]"> ${renderComponent($$result, "Panel", $$WhyPanel, { "image": Flexibility, "label": "Flexibility" }, { "default": ($$result2) => renderTemplate` <p>
If you have any last minute changes even if a project has already
          started, we will adjust our procedures to make them happen.
</p> ` })} ${renderComponent($$result, "Panel", $$WhyPanel, { "image": resourceful, "label": "Resourcefulness" }, { "default": ($$result2) => renderTemplate` <p>
If you require a specific material that is hard to find, we will
          demonstrate our resourcefulness.
</p> ` })} ${renderComponent($$result, "Panel", $$WhyPanel, { "image": affordable, "label": "Affordability" }, { "default": ($$result2) => renderTemplate` <p>
If your budget is tight, we can negotiate ways to maneuver around it.
</p> ` })} ${renderComponent($$result, "Panel", $$WhyPanel, { "image": design, "label": "Landscape design expertise" }, { "default": ($$result2) => renderTemplate` <p>
We want to share our passion for landscape design with our community,
          which can benefit from our knowledge and years of experience in
          artificial turf installation.
</p> <p>
In every project, it is our mission to help clients achieve what they
          envisioned their yards to look like
</p> ` })} ${renderComponent($$result, "Panel", $$WhyPanel, { "image": cement, "label": "Pavers and cement work" }, { "default": ($$result2) => renderTemplate` <p>
We also include installing pavers and cement work when installing <span class="text-primaryC">ynthetic grass</span>s. This helps to take our designs to the next level.
</p> ` })} ${renderComponent($$result, "Panel", $$WhyPanel, { "image": guaranteed, "label": "Secured investment" }, { "default": ($$result2) => renderTemplate` <p>
We offer a very generous policy. To elaborate, your artificial turf
          will have a 15 year warranty with the manufacturer and 1 year turf
          installation warranty with us. This means that if the product has a
          defect, it will be replaced.
</p> ` })} </div> </div> </section>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/home-components/why-work-with-us.astro", void 0);

const $$LeftContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="Experience" class=""> <div class="content_block_1"> <div class="content-box relative block md:mr-[70px]"> <div class="sec-title mb-[35px]"></div> <div class="text relative block mb-[40px]"> <p class="font-primaryF"> ${renderSlot($$result, $$slots["default"])} </p> </div> </div> </div> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/interest_section/LeftContent.astro", void 0);

const Shape3 = new Proxy({"src":"/_astro/shape-3.nv41Yi0H.webp","width":204,"height":284,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/components/interest_section/shapes/shape-3.webp";
							}
							
							return target[name];
						}
					});

const Shape4 = new Proxy({"src":"/_astro/shape-4.wkpOh3YM.webp","width":150,"height":219,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/components/interest_section/shapes/shape-4.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro("https://hardrocklandscapingca.com/");
const $$SellingItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SellingItem;
  const { icon, label, index, delay } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`selling-item-${index}`, "id")}${addAttribute(`feature-block-one wow min-height-[30px] transition-all fadeOutDown SellExperience ${delay}`, "class")}> <div class="text-5xl mb-8 z-10 shadow-[0_0_40px_rgba(0,0,0,0.1)] hover:shadow-[0_0_40px_rgb(0,0,0,20%)] relative mb-[30px] block rounded-[5px] bg-white px-[15px] pb-[60px] pt-[70px] transition-all"> <div${addAttribute(`selling-item-insignia-${index}`, "id")} class="relative inline-block rounded-lg transition before:duration-[1000ms] [&>p]:absolute overflow-hidden w-[70px] bg-white aspect-square relative m-auto flex justify-center rounded-lg text-5xl mb-8 z-10 transition duration-300 before:absolute before:content-[''] before-w-full before:h-full before:bg-slate-800 before:inset-0 before:z-[-1] before:transition-[scale_ease] before:duration-500 before:scale-0 hover:before:scale-100"> <img${addAttribute(icon.src, "src")} class="w-[50px] aspect-square m-auto"${addAttribute(label, "alt")}> </div> <h3 class="text-base leading-7 font-medium"> ${label} </h3> </div> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/interest_section/selling-item.astro", void 0);

const $$Astro$4 = createAstro("https://hardrocklandscapingca.com/");
const $$SellingSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SellingSection;
  const {
    SellingPoint1,
    SellingPoint2,
    SellingPoint3,
    icon1,
    icon2,
    icon3,
    BGImg
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="SellingPoints" class="SellingPoints relative w-full p-[0px] flex my-auto justify-center h-fit"> <div class="inner-content text-center relative w-full h-full"> <div class="pattern-layer hidden md:block my-auto absolute h-full z-[0] inset-0" id="Graphic_patterns"> <div class="pattern-1 bg-[#2e7753] w-[210px] h-[210px] rounded-[50%] opacity-10 absolute inset-0"></div> ${BGImg && renderTemplate`<img${addAttribute(BGImg.src, "src")} loading="lazy" decoding="async" class="w-[350px] aspect-square m-auto object-contain absolute inset-0" alt="Koi Background">`} <div id="interest-pattern-2" class="pattern-2 absolute animated" data-wow-delay="00ms" data-wow-duration="1500ms"${addAttribute(`background-image: url(${Shape3.src});`, "style")}></div> <div id="interest-pattern-3" class="pattern-3 absolute animated" data-wow-delay="00ms" data-wow-duration="1500ms"${addAttribute(`background-image: url(${Shape4.src});`, "style")}></div> </div> <div class="items-center grid sm:grid-cols-2 gap-x-10 px-5 !z-[10] h-full"> <div class=""> ${renderComponent($$result, "SellingItem", $$SellingItem, { "label": SellingPoint1, "icon": icon1, "index": 1, "delay": "" })} ${renderComponent($$result, "SellingItem", $$SellingItem, { "label": SellingPoint2, "icon": icon2, "index": 2, "delay": "delay-[200ms]" })} </div> <div class="col-lg-6 col-md-6 col-sm-12"> ${renderComponent($$result, "SellingItem", $$SellingItem, { "label": SellingPoint3, "icon": icon3, "index": 3, "delay": "delay-[400ms]" })} </div> </div> </div> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/interest_section/selling_section.astro", void 0);

const $$Astro$3 = createAstro("https://hardrocklandscapingca.com/");
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  const {
    SellingPoint1 = "100% Guarantee Services",
    SellingPoint2 = "Environmental Friendly",
    SellingPoint3 = "Dedicated Support Team",
    icon1,
    icon2,
    icon3,
    //BGImg is an optional image for the background of the selling section
    //format: 350*350 png
    BGImg
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="pb-[70px] sm:py-[0px] relative !overflow-hidden bg-[#f0f0f0]"> <div class="static max-w-[1200px] my-0 mx-auto py-0 px-5"> <div class="items-center grid md:grid-cols-2"> ${renderComponent($$result, "LeftContent", $$LeftContent, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })} ${renderComponent($$result, "SellingSection", $$SellingSection, { "SellingPoint1": SellingPoint1, "SellingPoint2": SellingPoint2, "SellingPoint3": SellingPoint3, "icon1": icon1, "icon2": icon2, "icon3": icon3, "BGImg": BGImg })} </div> </div> </section>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/interest_section/index.astro", void 0);

const Puddles = new Proxy({"src":"/_astro/puddles-white.D1ztXCCH.webp","width":50,"height":50,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/flow-interest/puddles-white.webp";
							}
							
							return target[name];
						}
					});

const Mosquito = new Proxy({"src":"/_astro/mosquito-white.C2UtLmMg.webp","width":50,"height":50,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/flow-interest/mosquito-white.webp";
							}
							
							return target[name];
						}
					});

const Heat = new Proxy({"src":"/_astro/hot-white.2MZ1RWx2.webp","width":50,"height":50,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/flow-interest/hot-white.webp";
							}
							
							return target[name];
						}
					});

const BGImg = new Proxy({"src":"/_astro/tree-3.DCZW-4tl.webp","width":350,"height":350,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/tree-3.webp";
							}
							
							return target[name];
						}
					});

const $$IntroducingFlow = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="rotateContainer font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl py-10 [&>span]:inline-block [&>span]:duration-[100ms]"> <span class="transition-all rotateOut delay-[0ms]">I</span> <span class="transition-all rotateOut delay-[50ms]">N</span> <span class="transition-all rotateOut delay-[100ms]">T</span> <span class="transition-all rotateOut delay-[150ms]">R</span> <span class="transition-all rotateOut delay-[200ms]">O</span> <span class="transition-all rotateOut delay-[250ms]">D</span> <span class="transition-all rotateOut delay-[300ms]">U</span> <span class="transition-all rotateOut delay-[350ms]">C</span> <span class="transition-all rotateOut delay-[400ms]">I</span> <span class="transition-all rotateOut delay-[450ms]">N</span> <span class="transition-all rotateOut delay-[500ms]">G</span> <span>&nbsp;</span> <span class="transition-all rotateOut delay-[600ms] text-primaryC">F</span> <span class="transition-all rotateOut delay-[650ms] text-primaryC">L</span> <span class="transition-all rotateOut delay-[700ms] text-primaryC">O</span> <span class="transition-all rotateOut delay-[750ms] text-primaryC">W</span> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/introducing-flow.astro", void 0);

const Icon = new Proxy({"src":"/_astro/warranty.CQ02A33D.webp","width":250,"height":250,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/warranty.webp";
							}
							
							return target[name];
						}
					});

const $$WarrantStatement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center text-center relative min-h-[250px] py-10 childrenFadeInFromBottomTag bg-[#f0f0f0] leading-10"> <div class="absolute top-0 left-0 right-0 z-[0] opacity-[.03]"> <img${addAttribute(Icon.src, "src")} alt="artificial turf installation warranty" class="w-[250px] aspect-square mx-auto" decoding="async" loading="lazy"> </div> <h2 class="font-bold text-2xl md:text-4xl floatUp">
Securing your investment
</h2> <p class="floatUp delay-[250ms]">
When clients invest in our Turf, they enjoy the following benefits:
</p> <p class="floatUp delay-500">15 year warranty with the manufacturer</p> <p class="floatUp delay-[750ms]">
1 year installation warranty - If there is something wrong with their turf,
    it will be replaced.
</p> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/warrant-statement.astro", void 0);

const $$Flow = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="[&>h3]:font-bold [&>h3]:,b-5 relative overflow-x-hidden"> <div class="flex flex-col relative"> <div class="justify-center flex flex-col"> <h2 class="text-3xl md:text-4xl font-bold mb-5 text-center"> ${renderComponent($$result, "TitleAnimation", $$IntroducingFlow, {})} </h2> <h3 class="font-bold text-2xl text-slate-600 text-center">
The latest synthetic grass technology that prevents puddles and
        infestations
</h3> </div> <div> <img src="/assets/images/turf-roll-612.webp" alt="Flow turf" decoding="async" loading="lazy" class="w-[646px] aspect-[4/3] object-cover m-auto"> </div> <div class="absolute w-full bottom-0 left-0 right-0 z-[-1]"> <svg width="110%" height="110%" id="svg" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><style>
          .path-1 {
            animation: pathAnim-0 4s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes pathAnim-0 {
            0% {
              d: path(
                "M 0,400 L 0,150 C 116.17857142857142,120.17857142857143 232.35714285714283,90.35714285714286 369,112 C 505.64285714285717,133.64285714285714 662.75,206.75 769,217 C 875.25,227.25 930.6428571428571,174.64285714285714 1034,153 C 1137.357142857143,131.35714285714286 1288.6785714285716,140.67857142857144 1440,150 L 1440,400 L 0,400 Z"
              );
            }
            25% {
              d: path(
                "M 0,400 L 0,150 C 144.35714285714286,122.42857142857143 288.7142857142857,94.85714285714286 398,107 C 507.2857142857143,119.14285714285714 581.5000000000001,171 696,189 C 810.4999999999999,207 965.2857142857142,191.14285714285714 1096,179 C 1226.7142857142858,166.85714285714286 1333.357142857143,158.42857142857144 1440,150 L 1440,400 L 0,400 Z"
              );
            }
            50% {
              d: path(
                "M 0,400 L 0,150 C 125.28571428571428,138.85714285714286 250.57142857142856,127.71428571428572 369,150 C 487.42857142857144,172.28571428571428 598.9999999999999,228 705,216 C 811.0000000000001,204 911.4285714285713,124.28571428571428 1033,102 C 1154.5714285714287,79.71428571428572 1297.2857142857142,114.85714285714286 1440,150 L 1440,400 L 0,400 Z"
              );
            }
            75% {
              d: path(
                "M 0,400 L 0,150 C 153.39285714285717,144.78571428571428 306.78571428571433,139.57142857142858 421,153 C 535.2142857142857,166.42857142857142 610.2499999999999,198.5 725,207 C 839.7500000000001,215.5 994.2142857142858,200.42857142857144 1120,187 C 1245.7857142857142,173.57142857142856 1342.892857142857,161.78571428571428 1440,150 L 1440,400 L 0,400 Z"
              );
            }
            100% {
              d: path(
                "M 0,400 L 0,150 C 116.17857142857142,120.17857142857143 232.35714285714283,90.35714285714286 369,112 C 505.64285714285717,133.64285714285714 662.75,206.75 769,217 C 875.25,227.25 930.6428571428571,174.64285714285714 1034,153 C 1137.357142857143,131.35714285714286 1288.6785714285716,140.67857142857144 1440,150 L 1440,400 L 0,400 Z"
              );
            }
          }
        </style><path d="M 0,400 L 0,150 C 116.17857142857142,120.17857142857143 232.35714285714283,90.35714285714286 369,112 C 505.64285714285717,133.64285714285714 662.75,206.75 769,217 C 875.25,227.25 930.6428571428571,174.64285714285714 1034,153 C 1137.357142857143,131.35714285714286 1288.6785714285716,140.67857142857144 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#f0f0f0" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg> <div class="w-full h-[400px] mb-0 bg-[#f0f0f0]"></div> </div> </div> ${renderComponent($$result, "InterestSection", $$Index$2, { "SellingPoint1": "No puddles", "SellingPoint2": "Prevents mosquito infestations ", "SellingPoint3": "Less trapped heat", ",": true, "icon1": Puddles, "icon2": Mosquito, "icon3": Heat, "BGImg": BGImg }, { "default": ($$result2) => renderTemplate` <div class="[&>p]:mb-5 mx-auto"> <p>
Many inferior artificial turf products that exist in the market are
        susceptible to forming puddles after a rainy weather. Not resolving the
        problem right away will eventually lead to a mosquito infestation. These
        stagnant water pools create a perfect breeding ground for mosquitoes,
        which can pose health risks.<br> </p> <p>
Tackling this issue requires regular maintenance checks to identify
        areas where water tends to accumulate or installing a drainage system
        beneath the system.
</p> <p>
However, our artificial grass product <strong class="text-primaryC">Flow</strong> avoids this requirement and resolves the issue of puddles.
</p> <p>
This new turf technology has more porous holes that allows water to be
        absorbed better. Thus, you can <strong>say goodbye</strong> to stagnant puddles
        of water and mosquitoes.
</p> <p>
It is also cleaner than regular artificial turf because any unwanted
        material, such as dog urine, washes off easier.
</p> <p> <strong class="text-primaryC">Flow</strong> also retains less heat, compared
        to regular fake grass, which has difficulty in cooling itself naturally especially
        in hot summers.
</p> </div> ` })} ${renderComponent($$result, "WarrantStatement", $$WarrantStatement, {})} </section>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/home-components/flow.astro", void 0);

const projects = [
  {
    img: project2,
    url: "/projects/project2",
    title: "Artificial Turf Project 1",
  },
  {
    img: project3,
    url: "/projects/project3",
    title: "Artificial Turf Project 2",
  },
  {
    img: project4,
    url: "/projects/project4",
    title: "Artificial Turf Project 3",
  },
  {
    img: project10,
    url: "/projects/project10",
    title: "Artificial Turf Project 4",
  },
  {
    img: project6,
    url: "/projects/project6",
    title: "Artificial Turf Project 5",
  },
  {
    img: project7,
    url: "/projects/project7",
    title: "Artificial Turf Project 6",
  },
  {
    img: project8,
    url: "/projects/project8",
    title: "Artificial Turf Project 7",
  },
  {
    img: project9,
    url: "/projects/project9",
    title: "Artificial Turf Project 7",
  },
];

const $$Astro$2 = createAstro("https://hardrocklandscapingca.com/");
const $$GridItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { img, url, title, customStyle, imgStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-full relative overflow-hidden group rounded-lg ${customStyle}`, "class")}> <a${addAttribute(url, "href")} class="cursor-pointer group before:'' before:opacity-0 before:absolute before:inset-0 before:w-full before:h-full group-hover:before:opacity-30 before:bg-black before:z-[2]"> <img${addAttribute(typeof img === "string" ? img : img.src, "src")}${addAttribute(title, "alt")}${addAttribute(`object-cover ${imgStyle} `, "class")} loading="lazy" decoding="async"> </a> </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/latest-project-preview/grid-item.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full my-10" id="latest_project_section"> <div class="mx-auto max-w-[1263px] px-6 lg:px-8 grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-3"> ${renderComponent($$result, "GridItem", $$GridItem, { ...projects[0], "customStyle": "order-first md:order-[2] floatUpTag floatUp", "imgStyle": "w-[718px] md:w-[387px] h-[290px]" })} ${renderComponent($$result, "GridItem", $$GridItem, { ...projects[1], "customStyle": "floatUpTag floatUp", "imgStyle": "w-[718px] md:w-[387px] h-[290px]" })} ${renderComponent($$result, "GridItem", $$GridItem, { ...projects[2], "customStyle": "floatUpTag floatUp", "imgStyle": "w-[718px] md:w-[387px] h-[290px]" })} ${renderComponent($$result, "GridItem", $$GridItem, { ...projects[3], "customStyle": "floatUpTag floatUp", "imgStyle": "w-[718px] md:w-[387px] h-[290px]" })} ${renderComponent($$result, "GridItem", $$GridItem, { ...projects[4], "customStyle": "md:row-span-2 floatUpTag floatUp", "imgStyle": "absolute inset-0 w-auto md:h-[599px]" })} ${renderComponent($$result, "GridItem", $$GridItem, { ...projects[5], "customStyle": "floatUpTag floatUp", "imgStyle": "w-[718px] md:w-[387px] h-[290px]" })} ${renderComponent($$result, "GridItem", $$GridItem, { ...projects[6], "customStyle": "hidden sm:block order-last md:order-first md:col-span-2 overflow-hidden floatUpTag floatUp", "imgStyle": "md:w-[792px] h-[290px]" })} ${renderComponent($$result, "GridItem", $$GridItem, { ...projects[7], "customStyle": "block sm:hidden order-last md:order-first md:col-span-2 overflow-hidden floatUpTag floatUp", "imgStyle": "md:w-[792px] h-[490px] sm:h-[290px]" })} </div> </section>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/latest-project-preview/index.astro", void 0);

const BeforeImg = new Proxy({"src":"/_astro/before.BYCx_psg.webp","width":646,"height":466,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/project-photos/before-after/project1/before.webp";
							}
							
							return target[name];
						}
					});

const AfterImg = new Proxy({"src":"/_astro/after.zPkg7ct4.webp","width":646,"height":466,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/project-photos/before-after/project1/after.webp";
							}
							
							return target[name];
						}
					});

const TreeIcon = new Proxy({"src":"/_astro/tree-icon.CmQP_evf.webp","width":150,"height":150,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/icons/tree-icon.webp";
							}
							
							return target[name];
						}
					});

const $$Slider1 = createComponent(($$result, $$props, $$slots) => {
  const FIRST_IMAGE = {
    imageUrl: AfterImg.src,
    alt: "After"
  };
  const SECOND_IMAGE = {
    imageUrl: BeforeImg.src,
    alt: "Before"
  };
  return renderTemplate`${maybeRenderHead()}<div class="my-10 flex relative overflow-hidden"> <div class="absolute top-[50%] left-0 right-0 translate-y-[-50%] z-[-1]"> <hr class="border-2 border-solid border-slate-300 block m-auto w-full"> </div> <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[0] w-[210px] aspect-square bg-white rounded-full"></div> <img${addAttribute(TreeIcon.src, "src")} alt="tree icon" class="w-[150px] aspect-square mx-auto z-[1]" decoding="async" loading="lazy"> </div> <h2 class="text-center text-3xl">See how we've transformed a residence.</h2> <div class="md:w-[768px] mx-auto"> ${renderComponent($$result, "ReactBeforeSliderComponent", null, { "firstImage": FIRST_IMAGE, "secondImage": SECOND_IMAGE, "className": "w-[320px] md:w-[646px] aspect-[3/2] mx-auto my-10", "client:only": "react", "client:component-hydration": "only", "client:component-path": "react-before-after-slider-component", "client:component-export": "default" })} </div>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/before-after-slider/slider1.astro", void 0);

const $$FeaturedProjects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="px-5 bg-white z-[20] block relative"> <h3 class="uppercase text-slate-500 text-lg text-center md:text-left">
Loved by the community
</h3> <h2 class="text-2xl md:text-4xl text-center md:text-left font-bold mb-5 text-black">
Our Featured <span class="text-primaryC">Projects</span> </h2> <p>
Hark Rock Landscaping takes pride in showcasing our portfolio of <strong class="text-secondaryC">artificial grass installations</strong> that have transformed various residential and commercial spaces across Los
    Angeles. From backyards to playgrounds, our experienced artificial grass installers
    are dedicated to delivering high-quality results that meet the unique needs of
    each client. We utilize top-of-the-line materials, including Flow, to create
    visually appealing and functional outdoor spaces.
</p> ${renderComponent($$result, "BentoGrid", $$Index$1, {})} ${renderComponent($$result, "Slider1", $$Slider1, {})} </section>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/home-components/featured-projects.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://hardrocklandscapingca.com/");
const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CTA;
  const publicKey = "tHBYlvU2xEPsRF34Y";
  const serviceId = "service_31odtnr";
  const templateId = "template_daj3axk";
  const {
    title = "Have something to say?",
    subtitle = "Share your thoughts.",
    BTNLabel = "Send"
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<form method="POST" class="mx-auto w-11/12 lg:w-6/12 md:h-[700px] rounded-lg box_shadow z-[2] relative flex md:flex-row overflow-hidden bg-white border-t-primaryColor border-t-solid border-t-[5px]" id="contactForm" data-netlify="true"> <div id="Shell"', '> <div class="grid sm:flex"> <section class="mx-auto"> <h2 class="text-base sm:text-2xl text-center font-bold my-1 uppercase"> ', ' </h2> <h2 class="text-base sm:text-lg text-center my-1">', '</h2> </section> </div> <div class="flex flex-col w-full my-[10px]"> <label class="formLabel" for="nameInput">Full name *</label> <input name="name" id="nameInput" type="text" class="bg-slate-100 rounded-lg px-1 text-base" required> </div> <div class="flex flex-col w-full my-[10px]"> <label class="formLabel" for="emailInput">Email *</label> <input name="email" id="emailInput" type="email" class="bg-slate-100 rounded-lg px-1 text-base" required> </div> <div class="flex flex-col w-full my-[10px]"> <label class="formLabel" for="phoneInput">Phone number *</label> <input name="phone" id="phoneInput" type="tel" class="bg-slate-100 rounded-lg px-1 text-base" required> </div> <div class="grid w-full my-[10px]"> <label class="formLabel" for="messageInput">Message</label> <textarea name="message" id="messageInput" rows="5" class="text-base outline-1 border-2 border-solid border-slate-200 resize-none p-1 rounded-lg bg-transparent placeholder:text-base placeholder:text-slate-800" placeholder="Type your message here."></textarea> </div> <button class="fancyButton bg-primaryC hover:bg-primarcyHoverC !mx-auto text-center" type="submit">', '</button> <div class="text-base pb-10">* required</div> </div> </form> <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script> <script type="module">', '\n  document.addEventListener("astro:page-load", () => {\n    (function () {\n      try {\n        emailjs.init(publicKey);\n      } catch (error) {\n        console.log("error: ", error);\n      }\n    })();\n\n    const HandleSubmit = () => {\n      const nameInput = document.getElementById("nameInput");\n      const emailInput = document.getElementById("emailInput");\n      const phoneInput = document.getElementById("phoneInput");\n      const messageInput = document.getElementById("messageInput");\n\n      const name = nameInput?.value;\n      const email = emailInput?.value;\n      const phone = phoneInput?.value;\n      const message = messageInput?.value;\n      var templateParams = {\n        to_name: BusinessInfo.owner,\n        from_name: name,\n        subject_line: "Someone is inquiring about your service",\n        phone_number: phone,\n        message,\n        reply_to: email,\n      };\n      try {\n        emailjs.send(serviceId, templateId, templateParams).then(\n          function (response) {\n            console.log("SUCCESS!", response.status, response.text);\n            window.location.href = "/message_sent";\n          },\n          function (error) {\n            console.log("FAILED...", error);\n          },\n        );\n      } catch (error) {\n        console.log("error: ", error);\n      }\n    };\n    const ContactForm = document.getElementById("contactForm");\n    ContactForm?.addEventListener("submit", (event) => {\n      event.preventDefault();\n      HandleSubmit();\n    });\n  });\n</script>'])), maybeRenderHead(), addAttribute(`w-11/12 py-10 md:max-w-[50%] mx-auto [&>div>label]:text-black [&>div>label]:text-base [&>div>label]:font-bold  text-2xl`, "class"), title, subtitle, BTNLabel, defineScriptVars({ publicKey, serviceId, templateId, BusinessInfo }));
}, "D:/Astro/Hard-Rock-Landscaping/src/components/contact-form/CTA.astro", void 0);

const leftImg = new Proxy({"src":"/_astro/shape-11.Dmg5dp0R.webp","width":149,"height":167,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/shape/shape-11.webp";
							}
							
							return target[name];
						}
					});

const rightImg = new Proxy({"src":"/_astro/shape-12.DGCXVP6w.webp","width":149,"height":166,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/assets/images/shape/shape-12.webp";
							}
							
							return target[name];
						}
					});

const $$CTASection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact-us-section" class="bg-white block w-full py-10 px-5 relative overflow-x-hidden"> <div id="CTA-left-plant" class="absolute left-0 top-0 z-[0] opacity-30"> <img${addAttribute(leftImg.src, "src")} alt="left decoration" decoding="async" loading="lazy" class="w-[250px] md:w-[300px] aspect-square object-cover transform-all duration-500 slideLeft"> </div> <div id="CTA-right-plant" class="absolute right-0 top-0 z-[0] opacity-30"> <img${addAttribute(rightImg.src, "src")} alt="right decoration" decoding="async" loading="lazy" class="w-[250px] md:w-[300px] aspect-square object-cover transform-all duration-500 slideRight"> </div> <div class="my-10 z-[3]"> <p class="text-center mx-auto text-2xl">
Are you ready to experience bliss in every step of your feet?
</p> <h2 class="text-center">
Let's discuss transforming your yard with <strong class="text-secondaryC">artificial grass.</strong> </h2> </div> ${renderComponent($$result, "CTA", $$CTA, { "title": "Request a quote", "subtitle": "Reach out to us to estimate your project", "BTNLabel": "Send" })} </section>`;
}, "D:/Astro/Hard-Rock-Landscaping/src/components/home-components/CTA-section.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://hardrocklandscapingca.com/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (!BusinessInfo.subscribed) return Astro2.redirect("/expired");
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  document.addEventListener("astro:page-load", () => {\n    /* for the animations throughout the webpage*/\n\n    const Bg1 = document.getElementById("background1");\n    const Bg2 = document.getElementById("background2");\n    const Bg3 = document.getElementById("background3");\n    const Bg4 = document.getElementById("background4");\n\n    /** Interest Section */\n    const GraphicPatterns = document.getElementById("Graphic_patterns");\n    const PatternTwo = document.getElementById("interest-pattern-2");\n    const PatternThree = document.getElementById("interest-pattern-3");\n\n    const SellItemInsignia1 = document.getElementById(\n      "selling-item-insignia-1",\n    );\n    const SellItemInsignia2 = document.getElementById(\n      "selling-item-insignia-2",\n    );\n    const SellItemInsignia3 = document.getElementById(\n      "selling-item-insignia-3",\n    );\n\n    const callback = (entries) => {\n      entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n          if (entry.target.classList.contains("fallingTag")) {\n            entry.target.classList.remove("startingFallingAnim");\n          }\n          if (entry.target.classList.contains("floatUpTag")) {\n            entry.target.classList.remove("floatUp");\n          }\n          if (entry.target.classList.contains("sinkTag")) {\n            entry.target.classList.remove("sink");\n          }\n          if (entry.target.classList.contains("childrenFadeInFromBottomTag")) {\n            for (let i = 0; i < entry.target.children.length; i++) {\n              entry.target.children[i].classList.remove("floatUp");\n            }\n          }\n\n          if (entry.target.id === "lower-cost") {\n            entry.target.classList.remove("RotateInTag");\n            Bg1.classList.remove("!max-h-0");\n          }\n          if (entry.target.id === "conservation") {\n            entry.target.classList.remove("RotateInTag");\n            Bg2.classList.remove("!max-h-0");\n          }\n          if (entry.target.id === "durability") {\n            entry.target.classList.remove("RotateInTag");\n            Bg3.classList.remove("!max-h-0");\n          }\n          if (entry.target.id === "safety") {\n            entry.target.classList.remove("RotateInTag");\n            Bg4.classList.remove("!max-h-0");\n          }\n\n          /* introducing flow */\n          if (entry.target.classList.contains("rotateContainer")) {\n            for (let i = 0; i < entry.target.children.length; i++) {\n              entry.target.children[i].classList.remove("rotateOut");\n            }\n          }\n          /*interest section*/\n          if (entry.target.id === "Graphic_patterns") {\n            if (!PatternTwo?.classList.contains("slideInRight")) {\n              PatternTwo?.classList.add("slideInRight");\n            }\n            if (!PatternThree?.classList.contains("slideInLeft")) {\n              PatternThree?.classList.add("slideInLeft");\n            }\n          }\n          if (entry.target.classList.contains("SellExperience")) {\n            entry.target.classList.remove("fadeOutDown");\n          }\n          if (entry.target.id === "selling-item-1") {\n            entry.target.classList.remove("fadeOutDown");\n            SellItemInsignia1.classList.add("before:scale-100");\n          }\n          if (entry.target.id === "selling-item-2") {\n            entry.target.classList.remove("fadeOutDown");\n            SellItemInsignia2.classList.add("before:scale-100");\n          }\n          if (entry.target.id === "selling-item-3") {\n            entry.target.classList.remove("fadeOutDown");\n            SellItemInsignia3.classList.add("before:scale-100");\n          }\n          if (entry.target.id === "CTA-left-plant") {\n            entry.target.children[0].classList.remove("slideLeft");\n          }\n          if (entry.target.id === "CTA-right-plant") {\n            entry.target.children[0].classList.remove("slideRight");\n          }\n        } else {\n          if (entry.target.classList.contains("fallingTag")) {\n            entry.target.classList.add("startingFallingAnim");\n          }\n          if (\n            entry.target.classList.contains("floatUpTag") &&\n            !entry.target.classList.contains("floatUp")\n          ) {\n            entry.target.classList.add("floatUp");\n          }\n\n          if (\n            entry.target.classList.contains("sinkTag") &&\n            !entry.target.classList.contains("sink")\n          ) {\n            entry.target.classList.add("sink");\n          }\n          if (entry.target.id === "lower-cost") {\n            Bg1.classList.add("!max-h-0");\n          }\n          if (entry.target.id === "conservation") {\n            Bg2.classList.add("!max-h-0");\n          }\n          if (entry.target.id === "durability") {\n            Bg3.classList.add("!max-h-0");\n          }\n          /**introducing flow */\n          if (entry.target.classList.contains("rotateContainer")) {\n            for (let i = 0; i < entry.target.children.length; i++) {\n              entry.target.children[i].classList.add("rotateOut");\n            }\n          }\n          if (entry.target.id === "selling-item-1") {\n            if (!entry.target.classList.contains("fadeOutDown"))\n              entry.target.classList.add("fadeOutDown");\n            SellItemInsignia1.classList.remove("before:scale-100");\n          }\n          if (entry.target.id === "selling-item-2") {\n            if (!entry.target.classList.contains("fadeOutDown"))\n              entry.target.classList.add("fadeOutDown");\n            SellItemInsignia2.classList.remove("before:scale-100");\n          }\n          if (entry.target.id === "selling-item-3") {\n            if (!entry.target.classList.contains("fadeOutDown"))\n              entry.target.classList.add("fadeOutDown");\n            SellItemInsignia3.classList.remove("before:scale-100");\n          }\n\n          if (entry.target.id === "Graphic_patterns") {\n            PatternTwo?.classList.remove("slideInRight");\n            PatternThree?.classList.remove("slideInLeft");\n          }\n          if (entry.target.id === "CTA-left-plant") {\n            if (!entry.target.children[0].classList.contains("slideLeft"))\n              entry.target.children[0].classList.add("slideLeft");\n          }\n          if (entry.target.id === "CTA-right-plant") {\n            if (!entry.target.children[0].classList.contains("slideRight"))\n              entry.target.children[0].classList.add("slideRight");\n          }\n        }\n      });\n    };\n    const options = {\n      threshold: 0.1,\n    };\n    const observer = new IntersectionObserver(callback, options);\n    const FallFromTop = document.getElementsByClassName("fallingTag ");\n    for (var i = 0; i < FallFromTop.length; i++) {\n      observer.observe(FallFromTop[i]);\n    }\n\n    const FloatUpTag = document.getElementsByClassName("floatUpTag");\n    for (var i = 0; i < FloatUpTag.length; i++) {\n      observer.observe(FloatUpTag[i]);\n    }\n\n    const SinkTag = document.getElementsByClassName("sinkTag");\n    for (var i = 0; i < SinkTag.length; i++) {\n      observer.observe(SinkTag[i]);\n    }\n\n    const ChildrenFadeInFromBottomTag = document.getElementsByClassName(\n      "childrenFadeInFromBottomTag",\n    );\n    for (var i = 0; i < ChildrenFadeInFromBottomTag.length; i++) {\n      observer.observe(ChildrenFadeInFromBottomTag[i]);\n    }\n\n    const observeElement = (elementId) => {\n      const element = document.getElementById(elementId);\n      if (element) {\n        observer.observe(element);\n      } else {\n        //only uncomment the following for debugging\n        // console.warn(\n        //   `Failed to observe element with id "${elementId}" as it does not exist.`,\n        // );\n      }\n    };\n\n    // List of element IDs to observe\n    const elementIds = ["lower-cost", "conservation", "durability", "safety"];\n    elementIds.forEach(observeElement);\n\n    /** Introducing Flow animation */\n    const RotateContainer = document.getElementsByClassName("rotateContainer");\n    for (var i = 0; i < RotateContainer.length; i++) {\n      observer.observe(RotateContainer[i]);\n    }\n\n    /*interest section */\n    if (GraphicPatterns) observer.observe(GraphicPatterns);\n\n    const SellExperience = document.getElementsByClassName("SellExperience");\n    for (let i = 0; i < SellExperience.length; i++) {\n      observer.observe(SellExperience[i]);\n    }\n\n    /*CTA section */\n    const CTALeftPlant = document.getElementById("CTA-left-plant");\n    const CTARightPlant = document.getElementById("CTA-right-plant");\n    if (CTALeftPlant) observer.observe(CTALeftPlant);\n    if (CTARightPlant) observer.observe(CTARightPlant);\n  });\n<\/script>'], ["", ' <script>\n  document.addEventListener("astro:page-load", () => {\n    /* for the animations throughout the webpage*/\n\n    const Bg1 = document.getElementById("background1");\n    const Bg2 = document.getElementById("background2");\n    const Bg3 = document.getElementById("background3");\n    const Bg4 = document.getElementById("background4");\n\n    /** Interest Section */\n    const GraphicPatterns = document.getElementById("Graphic_patterns");\n    const PatternTwo = document.getElementById("interest-pattern-2");\n    const PatternThree = document.getElementById("interest-pattern-3");\n\n    const SellItemInsignia1 = document.getElementById(\n      "selling-item-insignia-1",\n    );\n    const SellItemInsignia2 = document.getElementById(\n      "selling-item-insignia-2",\n    );\n    const SellItemInsignia3 = document.getElementById(\n      "selling-item-insignia-3",\n    );\n\n    const callback = (entries) => {\n      entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n          if (entry.target.classList.contains("fallingTag")) {\n            entry.target.classList.remove("startingFallingAnim");\n          }\n          if (entry.target.classList.contains("floatUpTag")) {\n            entry.target.classList.remove("floatUp");\n          }\n          if (entry.target.classList.contains("sinkTag")) {\n            entry.target.classList.remove("sink");\n          }\n          if (entry.target.classList.contains("childrenFadeInFromBottomTag")) {\n            for (let i = 0; i < entry.target.children.length; i++) {\n              entry.target.children[i].classList.remove("floatUp");\n            }\n          }\n\n          if (entry.target.id === "lower-cost") {\n            entry.target.classList.remove("RotateInTag");\n            Bg1.classList.remove("!max-h-0");\n          }\n          if (entry.target.id === "conservation") {\n            entry.target.classList.remove("RotateInTag");\n            Bg2.classList.remove("!max-h-0");\n          }\n          if (entry.target.id === "durability") {\n            entry.target.classList.remove("RotateInTag");\n            Bg3.classList.remove("!max-h-0");\n          }\n          if (entry.target.id === "safety") {\n            entry.target.classList.remove("RotateInTag");\n            Bg4.classList.remove("!max-h-0");\n          }\n\n          /* introducing flow */\n          if (entry.target.classList.contains("rotateContainer")) {\n            for (let i = 0; i < entry.target.children.length; i++) {\n              entry.target.children[i].classList.remove("rotateOut");\n            }\n          }\n          /*interest section*/\n          if (entry.target.id === "Graphic_patterns") {\n            if (!PatternTwo?.classList.contains("slideInRight")) {\n              PatternTwo?.classList.add("slideInRight");\n            }\n            if (!PatternThree?.classList.contains("slideInLeft")) {\n              PatternThree?.classList.add("slideInLeft");\n            }\n          }\n          if (entry.target.classList.contains("SellExperience")) {\n            entry.target.classList.remove("fadeOutDown");\n          }\n          if (entry.target.id === "selling-item-1") {\n            entry.target.classList.remove("fadeOutDown");\n            SellItemInsignia1.classList.add("before:scale-100");\n          }\n          if (entry.target.id === "selling-item-2") {\n            entry.target.classList.remove("fadeOutDown");\n            SellItemInsignia2.classList.add("before:scale-100");\n          }\n          if (entry.target.id === "selling-item-3") {\n            entry.target.classList.remove("fadeOutDown");\n            SellItemInsignia3.classList.add("before:scale-100");\n          }\n          if (entry.target.id === "CTA-left-plant") {\n            entry.target.children[0].classList.remove("slideLeft");\n          }\n          if (entry.target.id === "CTA-right-plant") {\n            entry.target.children[0].classList.remove("slideRight");\n          }\n        } else {\n          if (entry.target.classList.contains("fallingTag")) {\n            entry.target.classList.add("startingFallingAnim");\n          }\n          if (\n            entry.target.classList.contains("floatUpTag") &&\n            !entry.target.classList.contains("floatUp")\n          ) {\n            entry.target.classList.add("floatUp");\n          }\n\n          if (\n            entry.target.classList.contains("sinkTag") &&\n            !entry.target.classList.contains("sink")\n          ) {\n            entry.target.classList.add("sink");\n          }\n          if (entry.target.id === "lower-cost") {\n            Bg1.classList.add("!max-h-0");\n          }\n          if (entry.target.id === "conservation") {\n            Bg2.classList.add("!max-h-0");\n          }\n          if (entry.target.id === "durability") {\n            Bg3.classList.add("!max-h-0");\n          }\n          /**introducing flow */\n          if (entry.target.classList.contains("rotateContainer")) {\n            for (let i = 0; i < entry.target.children.length; i++) {\n              entry.target.children[i].classList.add("rotateOut");\n            }\n          }\n          if (entry.target.id === "selling-item-1") {\n            if (!entry.target.classList.contains("fadeOutDown"))\n              entry.target.classList.add("fadeOutDown");\n            SellItemInsignia1.classList.remove("before:scale-100");\n          }\n          if (entry.target.id === "selling-item-2") {\n            if (!entry.target.classList.contains("fadeOutDown"))\n              entry.target.classList.add("fadeOutDown");\n            SellItemInsignia2.classList.remove("before:scale-100");\n          }\n          if (entry.target.id === "selling-item-3") {\n            if (!entry.target.classList.contains("fadeOutDown"))\n              entry.target.classList.add("fadeOutDown");\n            SellItemInsignia3.classList.remove("before:scale-100");\n          }\n\n          if (entry.target.id === "Graphic_patterns") {\n            PatternTwo?.classList.remove("slideInRight");\n            PatternThree?.classList.remove("slideInLeft");\n          }\n          if (entry.target.id === "CTA-left-plant") {\n            if (!entry.target.children[0].classList.contains("slideLeft"))\n              entry.target.children[0].classList.add("slideLeft");\n          }\n          if (entry.target.id === "CTA-right-plant") {\n            if (!entry.target.children[0].classList.contains("slideRight"))\n              entry.target.children[0].classList.add("slideRight");\n          }\n        }\n      });\n    };\n    const options = {\n      threshold: 0.1,\n    };\n    const observer = new IntersectionObserver(callback, options);\n    const FallFromTop = document.getElementsByClassName("fallingTag ");\n    for (var i = 0; i < FallFromTop.length; i++) {\n      observer.observe(FallFromTop[i]);\n    }\n\n    const FloatUpTag = document.getElementsByClassName("floatUpTag");\n    for (var i = 0; i < FloatUpTag.length; i++) {\n      observer.observe(FloatUpTag[i]);\n    }\n\n    const SinkTag = document.getElementsByClassName("sinkTag");\n    for (var i = 0; i < SinkTag.length; i++) {\n      observer.observe(SinkTag[i]);\n    }\n\n    const ChildrenFadeInFromBottomTag = document.getElementsByClassName(\n      "childrenFadeInFromBottomTag",\n    );\n    for (var i = 0; i < ChildrenFadeInFromBottomTag.length; i++) {\n      observer.observe(ChildrenFadeInFromBottomTag[i]);\n    }\n\n    const observeElement = (elementId) => {\n      const element = document.getElementById(elementId);\n      if (element) {\n        observer.observe(element);\n      } else {\n        //only uncomment the following for debugging\n        // console.warn(\n        //   \\`Failed to observe element with id "\\${elementId}" as it does not exist.\\`,\n        // );\n      }\n    };\n\n    // List of element IDs to observe\n    const elementIds = ["lower-cost", "conservation", "durability", "safety"];\n    elementIds.forEach(observeElement);\n\n    /** Introducing Flow animation */\n    const RotateContainer = document.getElementsByClassName("rotateContainer");\n    for (var i = 0; i < RotateContainer.length; i++) {\n      observer.observe(RotateContainer[i]);\n    }\n\n    /*interest section */\n    if (GraphicPatterns) observer.observe(GraphicPatterns);\n\n    const SellExperience = document.getElementsByClassName("SellExperience");\n    for (let i = 0; i < SellExperience.length; i++) {\n      observer.observe(SellExperience[i]);\n    }\n\n    /*CTA section */\n    const CTALeftPlant = document.getElementById("CTA-left-plant");\n    const CTARightPlant = document.getElementById("CTA-right-plant");\n    if (CTALeftPlant) observer.observe(CTALeftPlant);\n    if (CTARightPlant) observer.observe(CTARightPlant);\n  });\n<\/script>'])), renderComponent($$result, "StandardNavBar", $$StandardNavBar, { "pageTitle": "Say goodbye to grass maintenance with artificial turf installation", "customDescription": "Transform your yard with artificial turf installation! Say goodbye to grass maintenance and enjoy bliss in every step on lush, low-care artificial grass." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$Index$4, {})} ${renderComponent($$result2, "WhySection", $$WhyInstallArtificialTurf, {})} ${renderComponent($$result2, "FlowSection", $$Flow, {})} ${renderComponent($$result2, "WhyWorkWithUsSection", $$WhyWorkWithUs, {})} ${renderComponent($$result2, "ProjectSection", $$FeaturedProjects, {})} ${maybeRenderHead()}<div class="sticky top-0"> ${renderComponent($$result2, "TestimonialSection", $$Index$3, { "testimonials": testimonials })} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ` }));
}, "D:/Astro/Hard-Rock-Landscaping/src/pages/index.astro", void 0);

const $$file = "D:/Astro/Hard-Rock-Landscaping/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
