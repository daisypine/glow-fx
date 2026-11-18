# Glow FX site (glow-fx.com)

Coded rebuild of Destiny's lash and brow studio site. Astro, static output, built for Cloudflare Pages.

## Links
- Production: https://glow-fx.com (still WordPress on SiteGround until cutover)
- Design: https://www.figma.com/design/57vnQEtGzUQXpBuqP3WoVu/Glow-FX (frames "HOME v2" and "SERVICE PAGE v1")
- Project notes: Claude project "Destiny - Glow FX" (site brief and decisions log)

## Status
- Homepage built with motion. Not yet approved by Destiny.
- Inner pages not built. Nav links point at the live WordPress pages for now.
- The homepage is set to `noindex` until launch (see `src/pages/index.astro`).

## Where to change things
| What | File |
|---|---|
| Business details, services, prices, reviews, FAQs | `src/data/site.ts` |
| Homepage sections | `src/pages/index.astro` |
| Colours, fonts, layout, motion | `src/styles/global.css` |
| Meta tags, schema, scroll animation script | `src/layouts/Base.astro` |
| Photos and stickers | `public/img/` |

## Brand rules
- Colours: cream #FFF3DB, brown #3B2A20, coral #E07970, orange #DE8948, peach #FFCDA7, pink #FFC3BE, blush #FCE4E2, green #D9F9CE.
- Sticker outline look: dark outline plus a solid offset shadow or offset colour backing.
- Fonts are self-hosted with @fontsource: Ovo (headings), Alice (body), Pacifico (script), Satisfy (signature, used once), Poppins (labels).
- The wordmark font in Figma is Couture, which is not licensed here yet. Ovo stands in for "GLOW FX" and "Find the Studio".

## Call-only style site
No forms. Booking goes to Fresha. Phone links are `tel:+16696000399`.

## Run locally
```
npm install
npm run dev
```
Build with `npm run build`. Output is `dist`.

## Cloudflare Pages settings
Build command `npm run build`, output directory `dist`, Node version from `.node-version`.

## Before launch
- [ ] Destiny approves the homepage
- [ ] Confirm: Korean Lash Lift card wording, SAVE20 still running (TikTok confirmed: @glow.fx.sunnyvale)
- [ ] Korean-Style Set is a placeholder at $235 in `src/data/site.ts`. Get Destiny's real name, price and description
- [ ] Copy all 9 Google reviews word for word with dates
- [ ] Build inner pages: 5 service pages, About, Gallery, Blog + LED post, Booking Policies, 4 legal pages
- [ ] Keep every existing URL, add redirects in `public/_redirects`
- [ ] Remove `noindex`, add middleware so only *.pages.dev is noindexed
- [ ] Larger or vector versions of the stickers
- [ ] License and add the Couture font
- [ ] GA4 G-RL2X137SJ8 and Search Console carry over
