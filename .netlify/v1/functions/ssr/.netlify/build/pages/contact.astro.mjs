/* empty css                                 */
import { e as createAstro, f as createComponent, r as renderTemplate, j as defineScriptVars, h as addAttribute, m as maybeRenderHead, i as renderComponent } from '../chunks/astro/server_TYuzZ-KD.mjs';
import 'kleur/colors';
import { f as formatPhoneNumber, B as BusinessInfo, $ as $$StandardNavBar } from '../chunks/standard-nav-bar_Dm2qMC6H.mjs';
import 'clsx';
/* empty css                                   */
import { $ as $$Index } from '../chunks/index_BObaeLYP.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://hardrocklandscapingca.com/");
const $$Split = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Split;
  const publicKey = "tHBYlvU2xEPsRF34Y";
  const serviceId = "service_31odtnr";
  const templateId = "template_daj3axk";
  const {
    title = "Have something to say?",
    subtitle = "Share your thoughts.",
    BTNLabel = "Send"
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="relative isolate bg-white overflow-hidden"> <div class="mx-auto grid grid-cols-1 md:grid-cols-2"> <div id="left-panel" class="bg-primaryHoverC rounded-b-lg order-[2] md:order-[1] md:rounded-l-lg md:rounded-br-[0px]"> <div class="p-10 lg:px-32 md:pb-32 md:pt-20"> <div> <div class="text-gray-600 text-2xl uppercase mb-5 grid"> <div id="Contact-company-info" class="text-base"> <div class=""> <span class="font-bold">Email: </span><a', ">", '</a> </div> <div class=""> <span class="font-bold">Tel: </span><a', ">", '</a> </div> </div> </div> <h2 class="text-2xl md:text-4xl pb-5">', "</h2> <h3>", `</h3> </div> <form method="POST" class="mt-10" id="SplitContactForm" data-netlify="true"> <div class="mx-auto max-w-xl"> <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"> <div class="sm:col-span-2"> <div class="mt-2.5"> <input type="text" name="name" id="nameInput" placeholder="Full Name" class="block w-full p-2 text-gray-900 bg-transparent placeholder:text-gray-800 sm:text-sm/6 border-b-slate-300 border-b-[2px]" required> </div> </div> <div class="sm:col-span-2"> <div class="mt-2.5"> <input type="email" name="email" id="emailInput" autocomplete="email" placeholder="Email" class="block w-full p-2 text-gray-900 bg-transparent placeholder:text-gray-800 sm:text-sm/6 border-b-slate-300 border-b-[2px]" required> </div> </div> <div class="sm:col-span-2"> <div class="mt-2.5"> <input type="tel" name="phone" id="phoneInput" autocomplete="tel" placeholder="Phone" class="block w-full p-2 text-gray-900 bg-transparent placeholder:text-gray-800 sm:text-sm/6 border-b-slate-300 border-b-[2px]" required> </div> </div> <div class="sm:col-span-2"> <div class="mt-2.5"> <input type="text" name="subject" id="subjectInput" autocomplete="tel" placeholder="Subject Line" class="block w-full p-2 text-gray-900 bg-transparent placeholder:text-gray-800 sm:text-sm/6 border-b-slate-300 border-b-[2px]"> </div> </div> <div class="sm:col-span-2"> <div class="mt-2.5"> <textarea name="message" id="messageInput" rows="4" class="block w-full p-2 text-gray-900 bg-transparent placeholder:text-gray-800 sm:text-sm/6 border-b-slate-300 border-b-[2px]" placeholder="Type your message here."></textarea> </div> </div> </div> </div> <div class="mt-8 flex justify-start"> <button type="submit" class="rounded-[50px] bg-slate-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send message</button> </div> </form> </div> </div> <div id="right-panel" class="rounded-t-lg min-h-[360px] md:rounded-r-lg order-[1] md:order-[2] bg-[url('https://images.pexels.com/photos/212324/pexels-photo-212324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover"></div> </div> </div> <div id="Alert-Message" class="fixed font-primaryF !bg-primaryC border-2 border-primaryC border-solid rounded-lg text-white text-center h-fit w-11/12 sm:w-8/12 md:w-[300px] fixed top-[25%] left-[50%] translate-x-[-50%] block justify-center transition-all duration-500 !z-[99] py-5 MessageFadeOut"></div> <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script> <script type="module">`, '\n  document.addEventListener("astro:page-load", () => {\n    (function () {\n      try {\n        emailjs.init(publicKey);\n      } catch (error) {\n        console.log("error: ", error);\n      }\n    })();\n    const MessageElement = document?.getElementById("Alert-Message");\n\n    const openMessage = (message) => {\n      MessageElement.innerHTML = message;\n      MessageElement.classList.remove("MessageFadeOut");\n      const clearTimeout = setTimeout(() => {\n        MessageElement.classList.add("MessageFadeOut");\n      }, 3000);\n    };\n\n    const HandleSubmit = () => {\n      const nameInput = document.getElementById("nameInput");\n      const emailInput = document.getElementById("emailInput");\n      const phoneInput = document.getElementById("phoneInput");\n      const subjectInput = document.getElementById("subjectInput");\n      const messageInput = document.getElementById("messageInput");\n\n      const name = nameInput?.value;\n      const email = emailInput?.value;\n      const subject = subjectInput?.value;\n      const phone = phoneInput?.value;\n      const message = messageInput?.value;\n      var templateParams = {\n        to_name: BusinessInfo.owner,\n        from_name: name,\n        subject_line: subject,\n        phone_number: phone,\n        message,\n        reply_to: email,\n      };\n      try {\n        emailjs.send(serviceId, templateId, templateParams).then(\n          function (response) {\n            console.log("SUCCESS!", response.status, response.text);\n            window.location.href = "/message_sent";\n          },\n          function (error) {\n            console.log("FAILED...", error);\n            openMessage(error);\n          },\n        );\n      } catch (error) {\n        console.log("error: ", error);\n        openMessage(error);\n      }\n    };\n\n    const ContactForm = document.getElementById("SplitContactForm");\n    ContactForm?.addEventListener("submit", (event) => {\n      event.preventDefault();\n      HandleSubmit();\n    });\n  });\n</script>'])), maybeRenderHead(), addAttribute(`mailto:${BusinessInfo.email}`, "href"), BusinessInfo.email, addAttribute(`tel:${BusinessInfo.phone}`, "href"), formatPhoneNumber(BusinessInfo.phone), title, subtitle, defineScriptVars({ publicKey, serviceId, templateId, BusinessInfo }));
}, "D:/Astro/Hard-Rock-Landscaping/src/components/contact-form/split.astro", void 0);

const Leaf = new Proxy({"src":"/_astro/leaf.BHzqN_un.png","width":238,"height":271,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/Hard-Rock-Landscaping/src/components/contact-form/leaf.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://hardrocklandscapingca.com/");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  if (!BusinessInfo.subscribed) return Astro2.redirect("/expired");
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  document.addEventListener("astro:page-load", () => {\n    const callback = (entries) => {\n      entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n          if (entry.target.classList.contains("sinkTag")) {\n            entry.target.classList.remove("sink");\n          }\n        } else {\n          if (\n            entry.target.classList.contains("sinkTag") &&\n            !entry.target.classList.contains("sink")\n          ) {\n            entry.target.classList.add("sink");\n          }\n        }\n      });\n    };\n    const options = {\n      threshold: 0.1,\n    };\n    const observer = new IntersectionObserver(callback, options);\n    const SinkTag = document.getElementsByClassName("sinkTag");\n    for (var i = 0; i < SinkTag.length; i++) {\n      observer.observe(SinkTag[i]);\n    }\n  });\n<\/script>'])), renderComponent($$result, "StandardNavBar", $$StandardNavBar, { "pageTitle": "Contact Us" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Banner", $$Index, { "title": "Contact Us", "subtitle": "Let us know what's on your mind" })} ${maybeRenderHead()}<div class="my-10 px-5 mx-auto py-32 relative overflow-hidden"> ${renderComponent($$result2, "ContactForm", $$Split, {})} <div> <img${addAttribute(Leaf.src, "src")} alt="leaft" class="absolute bottom-[-20px] left-[-60px] w-[300px] h-[290px]"> </div> </div> ` }));
}, "D:/Astro/Hard-Rock-Landscaping/src/pages/contact.astro", void 0);

const $$file = "D:/Astro/Hard-Rock-Landscaping/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
