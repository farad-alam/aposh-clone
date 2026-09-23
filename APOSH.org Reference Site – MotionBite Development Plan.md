# APOSH.org Reference Site – MotionBite Development Plan

Sep 23, 2026 

## Project Brief & Scope

- **Ask:** build a site "same as / similar to" [aposh.org](https://www.aposh.org/) — the site for Ashokta Punarbashan Sangstha (APOSH), a Rajshahi-based NGO running drug detox, rehabilitation and HIV/harm-reduction programs since 1999.
- **How to read "same as":** match the page structure, section types, information architecture and general layout pattern. This does **not** mean copying APOSH's actual copy, photos, donor names or logo — that content is specific to a different organization and, for text/images, copyrighted. Treat aposh.org as a structural/UX reference; build the client's own brand, copy and imagery on the same skeleton.
- **Open question:** we don't yet know the client's actual business/organization type. Everything below mirrors aposh.org's structure (an NGO site) — flag with the client which sections genuinely apply (e.g. "Projects", "Donors") and which should be renamed or dropped (see Section 9).

> **Scope note:** the client is APOSH's own owner. They've asked MotionBite for a 1:1 demo clone of their current site as a trust-building step before signing a redesign agreement — that's a normal ask for a local agency to hear, and since it's their own content, cloning it isn't a third-party copyright problem. Two practical safeguards: (1) get the "we're building a full clone for approval, then redesigning" scope confirmed in writing (a short email is enough) before the team spends real hours on it; (2) using APOSH's name/logo in MotionBite's own case studies or portfolio needs its own explicit sign-off once there's a signed agreement — don't publish that until it's agreed separately from the demo itself.

## Reference Site Analysis: aposh.org

**7 distinct pages**, flat structure (no sub-navigation within a page), plus one dynamic detail route:

1. **Home** — `/index`
2. **Projects** — `/pages/project`
3. **Services** — `/pages/service` (FAQ, English + Bangla toggle)
4. **Notice** — `/pages/notice` (paginated, 4 pages of items)
5. **Career** — `/pages/career` (paginated, 3 pages — currently reuses the Notice content/template rather than real job postings)
6. **Events / Blog** — `/pages/blog` (currently empty: "No event news")
7. **Contact** — `/pages/contact`
8. **Notice/Career detail** — `/pages/notice_view?id=N` (dynamic, one per notice or career item)

**Global header:** logo (links home) + hamburger icon · nav: Home, Projects, Services, a "Notice" dropdown (Notice / Career / Events), Contact.

**Global footer (identical on all 7 pages):** "About Us" blurb · Quick Links (repeats main nav) · Contact Us block (address, phone, email, web) · copyright line.

## Page-by-Page Content & Feature Breakdown

### Home (`/index`)

- Full-width **image slider/carousel**: 13 slides, prev/next arrows.
- **Introduction** section: org history (founded 1999 as a self-help group; program milestones 2003–2006) + 1 inline photo.
- **Mission**, **Vision**, **Working Area** (10 districts / 10 upazilas) as labeled text blocks + 2 more inline photos.
- **Donors/Development Contributors** — bullet list, 11 organizations.
- **Development Partners/Organizations** — bullet list, 8 organizations.
- **Legal Identity** — bullet list, 5 government bodies.
- **Major Areas of Intervention** — bullet list, 9 items + 1 more inline photo.
- Short "About Us" blurb (also repeated in the footer sitewide).

### Projects (`/pages/project`)

- Two sections: "Recent/Ongoing Projects" (4 cards) and "Closed Projects" (8 cards).
- Each card = **photo + title + Focus / Area / Donor / Period** fields — a repeatable "project card" component.
- All 12 shown on one page, no pagination — worth adding status/donor filtering as the list grows.

### Services (`/pages/service`)

- One "Detoxification Services (FAQ)" section with an **English / Bangla language toggle**.
- 22 Q&A pairs, mirrored in both languages, rendered as one long block (no accordion) — a real accordion/collapsible component would improve this.
- Topics: treatment duration & cost, admission rules, treatment process, security, early-leave policy, mental-health & family support, recreation, relapse prevention, food, visiting rules, religious facilities, center address.

### Notice (`/pages/notice`)

- Card list: thumbnail + title (links to detail) + date + 1-line excerpt + "View Details".
- Pagination (4 pages).
- Detail page at `/pages/notice_view?id=N`.
- Current items are placeholder/leftover template content ("School Reopening", "New Library Books") — needs real NGO notices.

### Career (`/pages/career`)

- Same card layout as Notice, headed "Latest Jobs".
- Content is currently generic notice placeholders, not job listings — needs its own schema (title, department, deadline, apply link / CV upload) rather than reusing the Notice model.
- Pagination (3 pages).

### Events / Blog (`/pages/blog`)

- "Latest Blog/News Post" heading — currently empty ("No event news"): an unpopulated CMS module on the live site.

### Contact (`/pages/contact`)

- Contact block: 1 photo, address, phone, email, website.
- "Send a Message" contact form (field set not visible in the rendered markup — likely name / email / subject / message).
- Embedded Google Map, pinned to Rajshahi coordinates.
- Same sitewide footer.

## Visual Design System

- **Layout pattern:** classic template shape — header bar → full-bleed hero carousel → stacked single-column content sections → 3-column footer. Mobile nav collapses to a hamburger icon.
- **Logo:** one raster logo image, top-left of the header, links to Home.
- **Imagery:** the homepage carousel (13 slides) is the main visual/branding driver, not an illustrated hero. Content sections lean on real program photography (12+ images) rather than icons or illustration — a documentary/field-work visual identity, fitting a health/social-services NGO.
- **Trust signals:** donor and partner names are shown as plain bullet lists — worth upgrading to a proper logo strip/grid as a real design element if the client has permission to display those.
- **Colors/typography — limitation:** I wasn't able to capture a live screenshot of aposh.org in this session, so I can't hand you exact hex codes, the font stack, or spacing values as verified fact. Before design starts, have the team open the live site and pull the palette/type scale with browser dev tools (Inspect → Computed), or — better — get the client's own brand guidelines/logo files rather than reverse-engineering a different organization's site, since the new site should carry the client's own brand, not APOSH's.

> **Updated:** since this is the client's own site and the goal is a faithful demo clone, match logo, colors, fonts and photography exactly too, not just layout. For the best result, ask the client directly for their original logo file, brand colors if documented, and full-resolution photos/CMS export rather than pulling everything back off the live site — re-compressed web images and reconstructed fonts will look visibly worse than the real files. If they can't hand those over before the demo, the asset inventory below (Section 10) is enough to build a very close visual match straight from the live site.

## Technical Findings & Recommended Stack

**What the reference site's code tells us:** URL pattern (`/pages/xxx`, `/pages/notice_view?id=N`, `/index`) points to a lightweight PHP/custom CMS, not WordPress. Several details show the site was launched from a generic, under-customized "school/organization" template and never fully cleaned up — worth avoiding when we rebuild:

- The visible email is `abashar302@yahoo.com` but the mailto: link actually points to `usschbd@gmail.com`.
- The "Web" link reads `www.aposh.org` but points to `usschoolbd.com`.
- The displayed phone number and the number the tel: link actually dials don't match.
- Career and Notice pages share one content model, still full of school-themed placeholders (Science Fair, Parent-Teacher Meeting, Library Books) that were never swapped for real APOSH content.
- The Contact page's embedded map is labeled "US School" in its query string.
- The Services/FAQ page has raw formatting bugs (stray `**` asterisks, a duplicated "4. 4." heading) — a reminder to QA rich-text content carefully in whatever CMS we use.

**Recommended stack:** nothing here needs e-commerce or complex logic — a standard CMS (WordPress) or a headless setup (Next.js + Sanity/Strapi) both fit well; use whatever MotionBite's team already standardizes on rather than a fully custom PHP build like the reference site.

**Core content types needed:**

- Page (static: Home, About, Services, Contact)
- Project (title, image, focus, area, donor, period, status: ongoing/closed)
- Notice (title, image, date, body)
- Career/Job (title, department, deadline, description, apply link) — kept separate from Notice, not reused
- FAQ item (question, answer, language)

**Integrations:** contact form → email/CRM, Google Maps embed, carousel/slider library, EN/BN language toggle (if the client wants bilingual, matching the reference site's Services page).

## Proposed Sitemap

Mirrors the reference site's structure — adapt names/inclusion to the client's actual business once confirmed (see Section 9):

1. Home
2. About *(recommend splitting this out from Home into its own page — aposh.org folds a lot of institutional content into the homepage, which gets long; a dedicated About page reads cleaner)*
3. Projects / Programs
4. Services *(with FAQ section)*
5. Notices / Announcements
6. Careers
7. Blog / News
8. Contact
9. *(optional)* Donors & Partners — if the client wants this promoted rather than buried on Home

## Development Phases & Timeline

Rough day estimates — adjust to actual team size/velocity:

| Phase | Scope | Est. |
| --- | --- | --- |
| 1. Discovery & Content | Collect client's real logo, brand colors, org copy, photos, project/service data | 2–3 days |
| 2. Design | Wireframes → UI design (Figma) for all 8 templates, 1–2 revision rounds | 4–6 days |
| 3. Frontend Build | Shared header/footer, carousel, project cards, FAQ accordion, notice/career cards, contact form UI, responsive pass | 6–8 days |
| 4. CMS/Backend | Content types (Page, Project, Notice, Career, FAQ), contact form → email/CRM, EN/BN toggle if needed | 4–5 days |
| 5. Content Population & QA | Load real content, cross-browser/mobile check, link audit, accessibility pass | 3–4 days |
| 6. Launch | Domain/hosting/SSL setup, final client review, go-live | 1–2 days |

**Total estimate: \~20–28 working days**, sequential where noted but Phase 2 design and Phase 1 discovery can overlap once initial content starts arriving.

## Assets & Info Needed From the Client

- Logo — vector/source file (AI, EPS, or SVG), not a raster pulled off a website
- Brand colors and typography, if they have any, or sign-off on a proposed palette
- Organization bio/history, mission, vision, service areas
- List of current and past projects/programs: images, focus, area, funder, time period
- Service/FAQ content (bilingual if the site needs EN/BN)
- Real notices/news items to launch with
- Real job postings, if a Careers section is wanted
- Address, phone, email, and the exact map pin location
- High-resolution photos: 8–10+ for the homepage slider, plus section photography
- Any donor/partner logos they have rights to display
- Domain & hosting access, or confirmation MotionBite is setting these up

## QA Checklist & Open Questions

**QA before launch:**

- Every nav link resolves correctly — no tel:/mailto: mismatches like the reference site has
- Mobile responsiveness: hamburger menu, carousel, FAQ accordion, contact form
- Contact form actually delivers/logs submissions
- EN/BN toggle (if included) renders cleanly in both languages, no stray markdown artifacts
- Pagination works on Notices/Careers
- Image alt text present for accessibility
- Cross-browser/cross-device check, including common Bangladesh mobile browsers

**Open questions for the client, before design starts:**

- What is the client's actual business/organization? This plan mirrors an NGO's structure — confirm which sections (Projects, Donors, bilingual FAQ) genuinely apply versus should be renamed or cut.
- Do they want a bilingual (Bangla/English) site like the reference?
- Is a real Careers/jobs module needed, or does a simple Notices section cover it?
- Do they have existing brand guidelines, logo files, or colors?
- Hosting/domain: new setup, or existing accounts to hand over?

## Live Asset Inventory (Current aposh.org)

All live on the current site today — pull directly, or better, ask the client for the originals (see the note in Section 4):

**Pages (7 + 1 dynamic):**

- `https://www.aposh.org/index` — Home
- `https://www.aposh.org/pages/project` — Projects
- `https://www.aposh.org/pages/service` — Services/FAQ
- `https://www.aposh.org/pages/notice` — Notice (paginate via `?page=1..4`)
- `https://www.aposh.org/pages/career` — Career (paginate via `?page=1..3`)
- `https://www.aposh.org/pages/blog` — Events/Blog
- `https://www.aposh.org/pages/contact` — Contact
- `https://www.aposh.org/pages/notice_view?id=N` — individual notice/career detail

**Logo:**

- `https://www.aposh.org/logos/aposh_logo.png`

**Homepage hero slider — 13 images:**

- `https://www.aposh.org/slide_images/slide_1.jpg` through `slide_13.jpg`

**Content/section photos (Home, Projects, Contact use these):**

- `https://www.aposh.org/uploads/page_images/image_1.jpg` through `image_12.jpg`

**Notice/Career thumbnails:**

- `https://www.aposh.org/uploads/notice_images/image_1.jpg`, `image_2.jpg`, `image_7.jpg`, `image_13.jpg` (seen in current listings — check the full folder for the rest)

**Contact page map embed (client's actual pin):**

- Google Maps query: `24.373031697835515,88.56440099447495`

**Live contact details currently shown on-site** (verify these with the client — the current site has mismatches between displayed text and the actual link targets, e.g. the shown phone/email differ from the tel:/mailto: targets, so confirm which is correct rather than copying either blindly):

- Address: Kashiadanga More (Beside Sonali Bank), Rajshahi Court, Rajshahi-6000
- Displayed phone: +88 01715 605080
- Displayed email: abashar302@yahoo.com

**Page copy (About text, Mission/Vision, donor & partner lists, all 22 FAQ Q&As in EN + BN, project descriptions):** don't hand-retype these from a summary — have the dev team pull the exact wording straight from View Source / Inspect Element on each live page above, or ask the client for a CMS export, so nothing gets transcribed incorrectly.
