import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Bcaj2chw.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/expired.astro.mjs');
const _page5 = () => import('./pages/faq.astro.mjs');
const _page6 = () => import('./pages/feedback.astro.mjs');
const _page7 = () => import('./pages/message_sent.astro.mjs');
const _page8 = () => import('./pages/privacy-policy.astro.mjs');
const _page9 = () => import('./pages/projects/_photo_.astro.mjs');
const _page10 = () => import('./pages/projects.astro.mjs');
const _page11 = () => import('./pages/quote_requested.astro.mjs');
const _page12 = () => import('./pages/services.astro.mjs');
const _page13 = () => import('./pages/terms-and-conditions.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/expired.astro", _page4],
    ["src/pages/faq.astro", _page5],
    ["src/pages/feedback.astro", _page6],
    ["src/pages/message_sent.astro", _page7],
    ["src/pages/privacy-policy.astro", _page8],
    ["src/pages/projects/[photo].astro", _page9],
    ["src/pages/projects/index.astro", _page10],
    ["src/pages/quote_requested.astro", _page11],
    ["src/pages/services.astro", _page12],
    ["src/pages/terms-and-conditions.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e366efb8-240c-4e0b-ae2b-11d008c01f9a"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
