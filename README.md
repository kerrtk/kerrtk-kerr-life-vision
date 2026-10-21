# Kerr Life Vision

The personal hub of Todd Kerr — kerrlifevision.com

Next.js (App Router), deployed on Vercel from this repository. Pushes to `main`
deploy automatically. All site copy lives in `lib/content.ts`, so text changes
are a single-file edit.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Hub homepage |
| `/story` | The route, and what it started |
| `/dawson` | In memory of Dawson Lee Kerr (noindex) |
| `/aging-with-honor` | Routes to agingwithhonor.com |
| `/kerr-systems` | Routes to kerr.systems |
| `/marketplace-global` | MPG / VeraCell / PHIX |
| `/books` | Please Tell Me Why Father · Heaven's Blueprint · Unwhistled |
| `/contact` | One address |

## Brand

Ink & Wheat — Ink `#1A1815`, Wheat `#C9A227`, Paper `#FAF7F0`, Stone `#6B6660`.
Spectral for headings, Inter for body.

## The memorial page

`/dawson` is deliberately quiet: name, photo, a gold rule, nothing else. No form,
no links out, no call to action. It is `noindex` by choice — it exists for people
who are sent there, not for search engines.

The photo is controlled by `dawson.photo` in `lib/content.ts`. It stays `false`
until `public/dawson.jpg` exists, so the page degrades to name-only rather than
showing a broken image.

## Local

```
npm install
npm run dev
```

## The Legacy Blueprint sign-up

The homepage form posts to `app/api/subscribe/route.ts`, which adds the person
to a Brevo list. It needs two environment variables set in Vercel:

- `BREVO_API_KEY` — Brevo: Settings → SMTP & API → API Keys
- `BREVO_LIST_ID` — Brevo: Contacts → Lists (the numeric ID)

Until both are set, the form tells visitors sign-up is not switched on and
gives them the email address. It never reports a success it did not get.
Delivering the journal itself is a Brevo automation on that list.

## Redirects from the old WordPress site

Set in `next.config.mjs`. The three 2025 posts moved to Aging With Honor
(`www.agingwithhonor.com/blog/<same-slug>`); `/blog`, `/category/*` and
`/tag/*` go to the Aging With Honor journal; `/about-us` goes to `/story`;
`/contact-us` goes to `/contact`.

## Still to do

- Point kerrlifevision.com at this Vercel project (DNS at Hostinger)
