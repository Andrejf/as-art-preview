# AS Art — website preview

Open `index.html` directly, or run `python3 -m http.server 8080` from this folder and visit http://localhost:8080.

Buildless, dependency-free HTML/CSS/JavaScript. All images and fonts are local. Slovenian copy, responsive layouts, keyboard-accessible navigation, contact dialog, catalogue filters, product detail pages, and email composition form.

## Pages
- index.html — homepage
- servis.html — service, assembly, upgrades and FAQs
- kolesa.html — selected bikes, frames and equipment
- kolo.html?model=scylon|scott|alpe — product details
- o-nas.html — modest shop introduction
- kontakt.html — contact, hours and directions

## Before the final shop launch
- This is a design preview for review. It does not replace the current shop website. Search-engine indexing is discouraged through robots metadata and robots.txt.
- Ask Andrej to approve service scope, copy, opening hours and featured models. No stock or final prices are asserted.
- Viber currently opens a contact dialog with number-copy and contact-download options. A verified Viber Business chat URL is needed for supported one-tap chat. See https://help.viber.com/hc/en-us/articles/36712478644381-Get-your-Viber-chat-link-and-QR-code-for-Business-accounts . Do not assume that a regular personal phone account supports business links.
- Phone links open the visitor's dialler. The enquiry form opens an email draft; it does not send mail or store data.
- The Google rating (4.9/40) is a manually checked snapshot from 25 October 2026, not a live integration. Refresh or integrate before launch.
- Customer review excerpts are from the shop's public Google Maps listing: https://maps.google.com/?cid=6869082002894314913 . Confirm reuse arrangements before publication.
- Product and cycling photographs plus logo are reused from as-art.net for this redesign. Confirm the shop's rights to reuse them in production. No stock photograph is presented as Andrej or his workshop. Replace selected product photographs with owner-supplied workshop photographs when available.
- The About page's Olympic servicing history is supported by Slovenian Olympic Committee rosters for Sydney 2000 and Athens 2004, linked in SOURCES.md.

## Design
Light ivory, charcoal and restrained lime; original AS Art logo retained. Plain Slovenian copy, direct contact above the fold, a contained product photograph, compact service links and Google review strip. Interior pages use the same typography and spacing. Contact remains visible in desktop navigation and a fixed mobile bottom bar.

## Revision
The second version removes slogans and repeated promotional copy across all six layouts, simplifies the homepage, and replaces the decorative map with a link to the actual shop location.

## Mobile refinement
- 44–50 px primary touch targets; paired contact buttons even on narrow phones.
- Native horizontal scrolling with snap points and previous/next controls for the homepage bike selection; no automatic rotation.
- Bottom-aligned, scrollable contact dialog with safe-area spacing.
- 16 px form controls, email keyboard hint, and contact bar hidden while editing a form field.
- Menu dismisses on outside click, Escape, navigation or crossing its responsive breakpoint.
- Short landscape views avoid sticky elements taking over the screen.

Validated in browser viewports of 320×640, 390×844, 430×932, 768×1024 and 844×390 across all six page layouts: no horizontal document overflow or broken loaded images. Checked carousel end controls, menu dismissal, form focus behavior and landscape dialog scrolling. Physical iOS/Android keyboard, calling and Viber handoff remain device checks before launch.

## GitHub Pages
Publish the `main` branch from the repository root (`/`). The `.nojekyll` file serves the project as plain static files. All website asset and page paths are relative, so the site works at a GitHub Pages project URL. Pushing an update to `main` republishes the preview.
