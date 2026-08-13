# Stallion Recovery 24/7 — Website

A simple, static 6-page website: `index.html` (home + services + call/text CTAs), `about.html`, `contact.html`, plus `privacy-policy.html`, `cookie-policy.html` and `terms.html` for legal compliance. No build tools needed — just open `index.html` in a browser, or upload the folder as-is to any web host.

## 1. Add the logo (required — do this first)

Save the two images you showed me into the `images` folder, using these **exact filenames**:

- `images/logo.png` — the shield/horse crest logo (used in the header, footer and browser tab icon on every page)

That's the only image the site needs — the service list from your flyer has been rebuilt as real text (better for Google, screen readers and editing) rather than baked into a picture. If you'd like a clean photo of the van used anywhere later, that's optional and not required for the site to work.

Once `images/logo.png` exists, every page will pick it up automatically — nothing else to wire up.

## 2. Fill in the placeholders before going live

I used placeholders anywhere I didn't have real information. Search each file for the word `placeholder` (highlighted in a gold dashed box on the legal pages) and fill in:

- Business registered address (footer of every page, Contact page, Privacy Policy, Terms)
- Business email address (Contact page, Privacy Policy, Terms)
- Company/VAT number, if you have one (footer, Terms)
- Number of years in business (About page)
- Booking, payment, cancellation and liability wording on the Terms page — **have a solicitor check this section before launch**, it's a starting point, not legal advice

## 3. Set your real domain

I used a placeholder domain (`https://www.stallionrecovery247.co.uk/`) in the SEO tags (`<link rel="canonical">`, Open Graph tags, `robots.txt`, `sitemap.xml`, and the structured data script in `index.html`). Once you have a real domain, do a find-and-replace across all files.

## 4. What's already done for SEO

- Descriptive titles/meta descriptions per page targeting "recovery" / "vehicle recovery"
- `AutomotiveBusiness` structured data (schema.org) on the homepage so Google can show your phone number, hours and service area directly in search results
- `sitemap.xml` and `robots.txt`
- Semantic HTML headings, alt text on the logo, mobile-friendly responsive layout

## 5. Legal pages included

- **Privacy Policy** — UK GDPR-style policy covering what data is collected and your rights
- **Cookie Policy** — explains the site currently only uses a strictly-necessary cookie-consent preference (no analytics/tracking)
- **Terms & Conditions** — website use + a starting point for service terms (needs your booking/liability details + a solicitor review)
- A cookie consent banner appears on first visit (bottom of screen) and remembers the visitor's choice

## Folder structure

```
stallion-recovery-website/
├── index.html            Home page (services + call/text CTAs)
├── about.html             About Us
├── contact.html           Contact Us
├── privacy-policy.html
├── cookie-policy.html
├── terms.html
├── robots.txt
├── sitemap.xml
├── css/styles.css         All site styling (navy/gold brand colours)
├── js/main.js             Mobile menu + cookie consent banner
└── images/                Put logo.png here
```

## Phone numbers used throughout

- Main: 07901 389378
- Alternative: 07757 265777

Both are linked as `tel:` (call) and `sms:` (text) links everywhere they appear, including a sticky call/text bar that shows at the bottom of the screen on mobile.
