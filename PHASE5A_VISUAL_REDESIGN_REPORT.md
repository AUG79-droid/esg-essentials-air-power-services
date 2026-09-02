# Phase 5A-R Visual Redesign Report

## Status

**Visual redesign implemented and ready for approval review.** Phase 5A functional architecture, routes, frozen educational content, progression, assessment, localStorage, native diagrams, accessibility behavior and Decision Lab state logic remain intact. Phase 5B1 has not started.

## 1. What was visually wrong with the Phase 5A baseline

The approved functional baseline used dark navy as the ordinary reading background, repeated thin outlines and dark panels across most views, and relied heavily on typography and line diagrams. Long theory required sustained light-on-dark reading. Home was dominated by an abstract systems graphic, module openings lacked photographic chapter identity, scenarios did not sufficiently interrupt the reading rhythm, and the visual similarity between ordinary learning and the Decision Lab weakened the Lab’s special role.

## 2. Redesign principles

The new system uses five principles:

1. **Light for sustained reading:** long theory, checks, activities and most diagrams sit on cool white or pale blue-grey surfaces.
2. **Dark for emphasis:** navigation, cinematic module chapters, major scenarios, selected feature diagrams, footer and Decision Lab retain deep navy.
3. **Images mark meaning:** photography appears at Home, module openings and significant scenario/transition moments, not on every screen.
4. **Editorial rhythm:** Read, See, Compare, Explore, Decide and Reflect use visibly different compositions.
5. **Decision Lab contrast:** the ordinary course now feels like premium aerospace editorial learning; the Lab remains a dark mission-control environment.

## 3. New palette

| Role | Value / treatment |
|---|---|
| Main learning canvas | `#F4F7FA`, `#EEF3F7`, white |
| Primary copy | `#071A2B`, `#102438` |
| Secondary copy | blue-grey values around `#324A5E` |
| Primary action | strong blue around `#1167DF` |
| Selective technical accent | cyan / blue around `#008FBD` |
| Dark feature surface | navy around `#071A2B` and `#0A2134` |
| Dividers | soft blue-grey around `#CCD9E3` |

Dark navy is no longer the default behind theory. Cyan is now a selective orientation/focus accent rather than a universal decorative treatment.

## 4. Typography changes

Body reading increased to approximately 1.12 rem with a 1.78 line height on desktop and a controlled 900 px maximum editorial measure. Headings use stronger dark-navy contrast, more generous vertical spacing and fewer tiny uppercase labels. Navigation labels were slightly enlarged and softened. Display typography remains aerospace/technical through Space Grotesk while Inter supports long-form reading.

## 5. Light/dark balance

- Home uses a bright split editorial hero with a large cinematic image.
- Module Map is a pale canvas with a white continuous learning rail rather than a dashboard grid.
- Module 00 theory, activities, checks, close and light diagrams use bright surfaces.
- Module openings and scenarios use full photographic dark feature bands.
- Myth vs Reality uses a large white editorial field and strong typographic contrast.
- Decision Lens uses a pale blue practical-checklist field.
- Alternate native visual explainers use light and dark treatments to create rhythm.
- Decision Lab remains predominantly dark and visually distinct.

## 6. Image strategy and produced assets

Five production-candidate images were generated with the built-in image generation workflow. All contain no embedded learner text, logos or watermarks. No final assets for Modules 02–04 or 07–09 were produced.

| Runtime asset | Concept | Alt-text intent |
|---|---|---|
| `public/images/home-hero.webp` | Multidisciplinary programme decision environment | People connecting engineering and decision evidence |
| `public/images/module-00-hero.webp` | Integrated systems/material decision table | Cross-functional comparison of evidence and options |
| `public/images/module-01-hero.webp` | Maintenance, component inspection and lifecycle evidence | Repair/replacement and material lifecycle decision |
| `public/images/module-05-hero.webp` | Multi-tier component and logistics investigation | Supply-chain evidence and uncertainty investigation |
| `public/images/module-06-hero.webp` | Constructive governance challenge and control evidence | Authority, control and escalation discussion |

Full-resolution PNG masters are preserved in `source-images/`. Optimized WebP runtime files total approximately 774 KB versus approximately 10.3 MB for the five PNG masters. Module/scenario images use meaningful alt text, intentional aspect ratios and `object-fit: cover`; below-the-fold scenario imagery uses lazy loading. Home uses high-priority loading.

### Aircraft and imagery compliance

No complete aircraft appears. The Module 01 asset shows a credible structural maintenance component rather than an aircraft type. There are no commercial aircraft, impossible engines, exposed turbines, duplicated aircraft systems, aircraft/nature combinations, plants, leaves, forests, green globes or generic ESG icons. The Module 05 scene uses a logistics route map as supply-chain evidence, not environmental globe symbolism.

## 7. Screens redesigned

1. Home
2. Module Map
3. Module 00 opening
4. Module 00 theory
5. Module 00 native visual page
6. Module 00 Air Power Services Learning Scenario
7. Myth vs Reality
8. Decision Lens
9. ESG Compass
10. Knowledge Check
11. Module close and sources
12. Module 01 representative page
13. Module 05 representative page
14. Module 06 representative page
15. Decision Lab Stage 1, preserved as the dark immersive exception

## 8. Diagrams restyled

Native diagrams retain their original concepts and responsive/text alternatives. The connected ESG diagram now uses soft blue nodes on white with a navy decision core. The governance cascade remains available as a darker feature explainer, creating a purposeful light/dark alternation. Representative Environmental, Social and Governance flows use light editorial diagram frames instead of universal cyan-on-black styling.

## 9. Distinctive content patterns

- **Theory:** wide light editorial canvas, large heading, generous measure and spacing.
- **Scenario:** cinematic split image/briefing environment.
- **Myth vs Reality:** oversized split typographic identity with substantial whitespace.
- **Decision Lens:** “Before you decide…” checklist field with central schematic marker.
- **Activity:** bright focused workspace with blue selection states.
- **Knowledge check:** bright single-task field with professional amber/green explanatory feedback.
- **Module close:** light reflective surface and accessible sources drawer.
- **Decision Lab:** retained dark rail, evidence tray, authority state and decision workspace.

## 10. Responsive corrections

Rendered QA covered 1440 desktop review, 1280 × 720 laptop/short-height, 768 tablet and 390 × 844 mobile.

Corrections made during QA:

- Reduced Home display-heading scale so “ESSENTIALS” does not collide with the image.
- Corrected Home mobile negative margins that caused a 7 px page overflow.
- Preserved the Phase 5A tablet diagram fix and mobile select-width fix.
- Stacked cinematic split features at tablet/mobile widths.
- Changed module and scenario images to controlled 420 px/300 px mobile crops.
- Converted the Decision Lens to a single-column mobile composition.
- Retained internal horizontal module-section navigation without page-level overflow.

The final automated rendered scan found zero page-level overflow and zero broken images across 36 route/viewport combinations.

## 11. Accessibility checks

Preserved and rechecked:

- semantic landmarks and heading order;
- skip link;
- visible keyboard focus;
- labelled native inputs;
- diagram text alternatives;
- non-color-only feedback;
- readable light-surface contrast;
- dark-feature white-text contrast;
- reduced-motion handling;
- responsive reflow;
- meaningful image alt text;
- lazy loading for below-the-fold imagery;
- no text embedded in images;
- no activity trapped inside a feature panel.

No functional ARIA or input semantics were removed. Full NVDA, VoiceOver and forced-colors verification remains a later production QA task.

## 12. Functional regression checks

Progression, assessment retry/reveal, localStorage sanitation, Module 00 unlock logic and Decision Lab evidence-state logic remain unchanged. The existing seven automated tests were rerun after the redesign. Lint and production build were also rerun.

Final verification: 7/7 Vitest tests pass; ESLint reports zero errors and zero warnings; Vite production build succeeds with 378.60 kB JavaScript (124.00 kB gzip) and 30.35 kB CSS (7.53 kB gzip), plus the five optimized image assets.

## 13. Review screenshots

Saved in `review-screenshots/`:

1. `01-home-desktop.png`
2. `02-home-mobile.png`
3. `03-module-map.png`
4. `04-module00-opening.png`
5. `05-module00-theory.png`
6. `06-module00-visual.png`
7. `07-module00-scenario.png`
8. `08-myth-reality.png`
9. `09-decision-lens.png`
10. `10-esg-compass.png`
11. `11-knowledge-check.png`
12. `12-module01.png`
13. `13-module05.png`
14. `14-module06.png`
15. `15-decision-lab.png`

## 14. Known issues and deliberate limits

- Only the five requested production-candidate images are created. The remaining module-opening image system is not yet produced.
- Module 00 currently reuses its hero image for its major learning scenario; a dedicated scenario image can be considered after direction approval.
- Google Fonts remain externally loaded with robust system fallbacks; self-hosting remains a later release decision.
- Full screen-reader and forced-colors matrices remain pending broader production QA.
- The generated images are candidates subject to visual/content-owner approval, not a claim that all future module assets are approved.
- Phase 5B1 content expansion has not begun.

## Quality-gate result

- Theory substantially easier to read: **Pass**
- Application no longer predominantly dark: **Pass**
- Images create meaningful visual richness: **Pass**
- Module openings visually distinctive: **Pass**
- Ordinary course no longer resembles a control dashboard: **Pass**
- Decision Lab remains immersive and distinct: **Pass**
- Native diagrams retain educational function: **Pass**
- Aircraft/nature and generic-aircraft restrictions: **Pass**
- Responsive behavior: **Pass**
- Progression and assessment behavior preserved: **Pass**
- Automated tests, lint and production build: **Pass after final verification**

## Stop condition

Phase 5A-R stops at the redesigned, reviewable vertical slice. Phase 5B1 has not started. No publishing or Git operation is authorized or performed.
