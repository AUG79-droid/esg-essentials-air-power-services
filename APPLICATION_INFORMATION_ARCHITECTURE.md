# Application Information Architecture

## Product definition

**ESG ESSENTIALS**  
**Environmental, Social & Governance for Air Power Services**  
**From Principles to Better Business Decisions**

Static, GitHub Pages-compatible learning application. Future implementation: React + Vite preferred; no backend, login, database, analytics, personal-data collection, paid API or required commercial license. Progress uses localStorage only.

## Route and page model

| Route | Page | Primary content/actions | Navigation role |
|---|---|---|---|
| `/` | Home | Identity, purpose, 7 h 39 min, 10 modules, no prior expertise required, local-save notice, Start/Continue | Entry and resume |
| `/overview` | Course overview | Learning outcomes, course structure, completion meaning and disclaimer | Orientation |
| `/modules` | Module map | Modules 00–09 with locked/available/in-progress/completed states | Primary course navigation |
| `/module/:moduleId/screen/:screenId` | Module reader | Frozen content chunk, visual/interaction, Previous/Next and module sidebar | Core learning shell |
| `/module/:moduleId/activity` | Activity view | I-001–I-009 major activity | Required module milestone |
| `/module/:moduleId/check` | Knowledge check | Assigned formative questions and reasoning feedback | Required module milestone |
| `/decision-lab/:stage` | Decision Lab | Eight-stage I-010 simulation, evidence drawer and state summary | Capstone |
| `/decision-lab/debrief` | Decision Lab debrief | Qualitative dimensions, evidence overlooked, transfer and uncertainty | Required capstone review |
| `/progress` | Progress | Module states, resume links, local-only notice and reset | Learner control |
| `/glossary` | Glossary | Terms from `TERMINOLOGY_STANDARD.md`, search/filter and related module links | Reference, always available |
| `/sources` | Sources & Further Reading | Module tabs, clean learner-facing citations and external links | Reference, always available |
| `/about` | About / disclaimer | Scope, fictional-scenario label, source cut-off, no certification/authorization | Trust and boundary |
| `/completion` | Learning experience completed | Completion summary and disclaimer | Final event |

## Global shell

- Skip link to main content.
- Header: product wordmark, Module Map, Progress, Glossary, Sources, About. On mobile use an accessible disclosure menu, not a focus-trapping custom drawer.
- Module reader adds module title, screen title and compact progress. Desktop/laptop show a collapsible left contents rail; tablet/mobile use a **Module contents** disclosure before main content.
- Footer: source cut-off, disclaimer link, local-progress statement and version `content-freeze-2026-08-29`.
- Previous and Next are explicit buttons with destination titles. Browser Back/Forward must work. Deep links to locked modules route to the module map with prerequisite explanation.

## Home page specification

### Above the fold

- H-001 abstract aerospace systems hero; no text embedded in image.
- Eyebrow: `AIR POWER SERVICES DIGITAL LEARNING`.
- H1: `ESG ESSENTIALS`.
- Product line: `Environmental, Social & Governance for Air Power Services`.
- Subtitle: `From Principles to Better Business Decisions`.
- Concise explanation: “A practical, evidence-based learning experience for considering environmental, social and governance information within real business decisions and mandatory technical constraints.”
- Primary CTA determined by progress: Start course / Continue Module NN / Review course.
- Secondary CTA: View module map.

### Trust and scope strip

- Approximately 7 h 39 min.
- 10 modules.
- No previous ESG expertise required.
- Progress saved only in this browser.
- No login or analytics.

### Lower sections

1. Why it matters: three concise decision-focused cards, not marketing claims.
2. What learners will practice: evidence, systems thinking, people/rights, governance and uncertainty.
3. Module map preview: first three plus “View all.”
4. Boundary statement: no certification, technical approval, legal advice or corporate authorization.

Tone avoids “green future,” “saving the planet,” stock sustainability language and unsupported Airbus claims.

## Module map

Render a connected technical systems grid—not a flight path or nature metaphor—with these exact titles:

00 ESG: Why It Exists  
01 Environmental Essentials  
02 Sustainable Finance & ESG Investment  
03 Ratings, Reporting & Greenwashing  
04 Social Essentials: People & Equity  
05 Social Risk in Global Supply Chains  
06 Governance Essentials  
07 Boards, Oversight & Ethical Decisions  
08 ESG into Business Strategy  
09 Air Power Services ESG Decision Lab

Each card exposes status in icon and text:

- **Locked:** lock icon, prerequisite text, non-interactive card except accessible explanation.
- **Available:** “Start module.”
- **In progress:** current milestone and “Continue.”
- **Completed:** check icon and “Review.”

Desktop uses a 2×5 or responsive grid with a subtle ordered connector. Tablet uses 2 columns. Mobile uses a single ordered list. Never rely on connector lines to communicate order.

## Module reader content patterns

- Standard reading: 250–500 words per screen group, with short paragraphs and meaningful subheads.
- Step sequence: methods with ordered stages; one overview followed by selectable steps, all content available to assistive technology.
- Tabs: only for genuine peer comparisons of 2–4 items; tabs remain visible and keyboard compliant.
- Accordion: limited to Myth vs Reality, optional Explore Further and dense reference detail. Core reasoning is never hidden behind many closed accordions.
- Card comparison: options, two lenses, investment approaches and assurance types.
- Interactive diagram: concepts that depend on relationships or sequence; always paired with a text/table alternative.
- Tooltip/popover: brief definitions only; never required evidence or feedback. Touch/keyboard activation and dismissible.
- Scenario: visually separated Air Power Services Learning Scenario with fiction/non-authorization note at first occurrence per module.
- Modal: only confirmation/reset or optional focused evidence item; no core theory in modal.

## Learner-facing source system

Every module close includes a **Sources & Further Reading** link. `/sources` groups sources by module with:

- organization;
- document/framework title;
- version/date where relevant;
- brief “Used for” description;
- external link indicator.

Exclude all internal control identifiers and workflow phrases: CV/AE IDs, CURRENT VERIFICATION REQUIRED, AUTHORITATIVE EXPANSION REQUIRED, Phase 4A/4B, research finding, marker and audit status. Practitioner interviews are labelled “Practitioner perspective.” Authoritative sources and further reading are visually distinct but not ranked by brand prestige.

## Accessibility requirements

- WCAG 2.2 AA target.
- Semantic landmarks, heading order, lists, tables and native controls first; ARIA only when native semantics are insufficient.
- Full keyboard path; visible 3:1 focus indicator; no keyboard traps.
- Reflow at 320 CSS px and 400% zoom without two-dimensional scrolling, except genuinely tabular content with an accessible alternative.
- Text contrast at least 4.5:1; large text/UI boundaries meet applicable AA ratios.
- Generated images contain no text. Decorative images use empty alt; informative ones use concise purpose-based alt.
- Every diagram has an adjacent structured alternative and equivalent controls.
- Reduced motion disables auto-animation, parallax, pulsing and nonessential transitions.
- Feedback uses icon + heading + explanation, never color alone; `aria-live` is polite.
- Forms use visible labels, instructions before inputs and error summaries linked to fields.
- No countdowns, forced timing, autoplay audio or hover-only content.

## Responsive behavior

| Viewport | Layout behavior |
|---|---|
| Large desktop ≥1440 px | Max reading width 760–820 px; diagrams up to 1200 px; persistent contents rail; optional evidence drawer beside Decision Lab. |
| Laptop 1024–1439 px | Collapsible rail; single main reading column; diagrams fit container; no fixed-height prose. |
| Tablet 768–1023 px | Contents disclosure; two-column comparisons collapse where needed; evidence drawer becomes inline panel. |
| Mobile 320–767 px | Single column; 18 px minimum body target; horizontal diagrams become vertical steps/cards; tables become labelled cards or scroll regions with summaries; sticky bottom Previous/Next may be used if it never obscures content. |

No content container uses a fixed height. Avoid clipped gradients/masks around prose. Generated heroes use art-directed crops and never carry essential information.

