# Final Hero Crop Correction Report

**Project:** ESG Essentials — Sustainable Business Strategies for a Changing World  
**Scope:** CSS-only hero composition correction  
**Status:** Complete — ready for final human approval — not published

## CSS changes made

Only `src/styles.css` was edited. No image asset, React component, educational content, route, progression rule, assessment, Decision Lab state, or responsive-navigation rule was changed.

The correction adds a final presentation-only override that:

- increases the Home cinematic frame from 560 px to 620 px on large screens, 540 px at tablet widths, and 430 px at mobile widths;
- shifts the Home focal point toward the team (`72% 44%` on desktop and `68% 42%` on mobile), retaining more space around the right-hand people while preserving the approved split composition;
- increases the Module 00 editorial frame to 590 px on large screens and 600 px on mobile, with a higher vertical focal point for faces and the planning-table context;
- increases Modules 01–08 opening frames to `clamp(470px, 37vw, 560px)` on large screens, 500 px at tablet widths, and 480 px on mobile;
- sets per-module focal points rather than applying one uniform crop: Modules 01, 04, 05, 06, 07, and 08 are biased upward toward people and faces; Modules 02 and 03 preserve evidence, material, and desktop-workspace context;
- leaves Module 09's approved A400M geometry at 16:9 and explicitly keeps its centered full-scene presentation. The hero asset itself was not changed.

## Heroes adjusted

- Home — frame height and right-biased team focal point.
- Module 00 — taller editorial hero and higher team/table focal point.
- Module 01 — taller opening with increased headroom for the two engineers.
- Module 02 — taller opening preserving the hand, material board, and technical evidence.
- Module 03 — taller opening preserving the evidence workstation, lamp, and table context.
- Module 04 — taller opening and higher team focal point.
- Module 05 — taller opening and higher supply-chain team focal point.
- Module 06 — taller opening and higher briefing-team focal point.
- Module 07 — taller opening and higher boardroom focal point.
- Module 08 — taller opening and higher strategy-room focal point.
- Module 09 — inspected and preserved; the full approved A400M scene remains visible without a geometry change.

## Responsive views checked

Rendered production QA was completed at:

- 1440 × 1000 — Home; Modules 01, 03, 05, 07, and 08 openings; Module 09 opening.
- 1024 × 768 — Home.
- 768 × 1024 — Module 03 opening.
- 390 × 844 — Home, Module 01 opening, and Module 09 opening.

Results:

- no document-level horizontal overflow;
- no clipped interactive control;
- no broken image;
- no clipped approved navigation label;
- no console error;
- no responsive-regression observed.

The final image evidence is in `final-hero-crop-screenshots/`:

1. Home desktop;
2. Module 01 desktop;
3. Module 05 desktop;
4. Module 08 desktop;
5. Module 09 desktop;
6. Home mobile;
7. Module 01 mobile.

## Quality checks

| Check | Result |
|---|---|
| Automated tests | PASS — 32/32 |
| ESLint | PASS — zero errors and zero warnings |
| Production build | PASS — Vite production build completed |
| Browser console | PASS — 0 application errors |
| Responsive safety | PASS — no overflow, broken images, or clipped controls in checked views |

## Release constraints

No publishing, deployment, Git initialization, commit, push, image regeneration, or Phase 6B work was performed. The approved Module 09 A400M master and WebP runtime asset remain unchanged.
