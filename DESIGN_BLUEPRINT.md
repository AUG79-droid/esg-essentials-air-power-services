# ESG Essentials — Design Blueprint

## Product intent

The later build should feel like a premium aerospace learning instrument: technically precise, calm, evidence-led and operationally relevant. It should not look like a generic “green” campaign, a military simulation or a dense compliance portal. The visual language supports judgment, traceability and learning—not decoration.

This document defines architecture only. It does not authorize production code, imagery or publication.

## Information architecture

### Top-level structure

```text
Course home
├── Orientation and course outcomes
├── Learning path (Modules 00–09)
│   ├── Module briefing
│   ├── Lessons
│   ├── Applied activity
│   ├── Knowledge check
│   └── Module debrief / sources
├── Decision toolkit
│   ├── ESG decision canvas
│   ├── Claim-evidence checklist
│   ├── Supplier evidence checklist
│   └── Glossary
├── Source and update notes
│   ├── Lesson traceability
│   ├── Guest-perspective labels
│   └── Dated current-information cards
└── Completion summary
```

### Content layers

- **Core path:** required theory, guided examples, practice and checks; 7 h 15 min.
- **Explain layer:** optional definitions, “why this matters,” worked logic and transcript-derived nuance.
- **Evidence layer:** source filenames, methodology caveats, dates and current-information status.
- **Role translation layer:** short engineering, maintenance, supply-chain, procurement, operations, project, quality/compliance and manager views.
- **Reference layer:** glossary and reusable tools; excluded from completion duration.

### URL/state concept for later implementation

Stable, human-readable course/module/lesson identifiers; progress keyed to versioned content IDs rather than display order. Deep links should reopen the exact lesson and section without skipping required assessment integrity rules.

## Navigation

### Desktop

- Persistent left rail showing module number, title, status and estimated time.
- Main learning canvas with a compact top bar: course home, current location, progress, glossary and accessibility/preferences.
- Within a module, a collapsible lesson outline exposes completed/current/available states.
- “Previous,” “Continue,” and “Save and exit” controls remain in consistent positions.
- A source/evidence drawer opens without losing the learner’s place.

### Mobile and narrow screens

- Left rail becomes a modal course map opened by a labeled button—not icon-only navigation.
- Bottom action bar contains Previous/Continue with safe-area spacing.
- Drawers become full-height sheets with explicit Close and focus return.
- Interactions reflow into single-column sequences; no essential horizontal drag or hover.

### Navigation policy

- Modules 00–08 may be freely revisited after first launch.
- Recommended sequencing is clear, but content is not artificially locked unless a prerequisite is genuinely required.
- The Decision Lab unlocks after Modules 00–08 are completed; this dependency is explained before the learner reaches it.
- Knowledge checks can be retried; feedback identifies the concept to revisit.
- Browser Back/Forward must preserve location without duplicating progress events.

## Progress behaviour

### States

`Not started → In progress → Content complete → Check passed → Module complete`

### Rules

- A lesson becomes complete after required sections and interaction decisions are reached, not merely when its page opens.
- Media, if later introduced, is never the sole completion trigger; an equivalent transcript/text path must work.
- Module progress separates content completion from assessment status.
- The overall percentage is weighted by required learning units, not by raw page count.
- Revisions use a content-version marker. Minor copy corrections preserve progress; material assessment/learning changes prompt a clearly explained targeted revisit.
- Cross-device sync, if available, reconciles the latest meaningful event and never silently reduces verified completion.
- Offline/local fallback queues progress events and confirms synchronization later.
- “Reset course” is intentionally placed, names the exact effect and requires confirmation.

### Learner-facing indicators

- Exact completed/total modules and estimated remaining learning time.
- No gamified “green score.”
- Check results show strengths and concepts to review, not a personality judgment.
- Final completion summary identifies modules completed and Decision Lab rubric results without exposing sensitive reflections.

## Module pattern

1. **Briefing (1–2 min):** why the module matters, outcomes, time, prior-knowledge bridge.
2. **Concept sequence:** 5–8 minute lessons, each with one central question and a “decision connection.”
3. **Evidence pause:** inspect a metric, claim, control or stakeholder signal.
4. **APS translation:** an original aerospace scenario labeled `APS original`.
5. **Practice:** manipulation, classification, prioritization or branching decision with explanatory feedback.
6. **Knowledge check:** scenario-led formative assessment.
7. **Debrief:** key takeaways, job transfer prompt, traceability and dated-update notes.

### Page/lesson anatomy

- Eyebrow: module and lesson number.
- Action-oriented lesson title.
- One-sentence purpose and visible estimated time.
- Short theory blocks supported by diagrams, comparison cards or worked steps.
- “Source concept” label for paraphrased supplied material.
- “Guest perspective — paraphrased” label when practitioner material contributes.
- “APS original” label for aerospace additions.
- Expandable “Evidence and limitations” panel.
- Persistent Continue control after required content.

## Visual system

### Art direction

Premium aerospace engineering interface: dark Airbus-style navy, cyan/electric-blue data accents, cool metallic neutrals, precise grid, subtle depth and restrained motion. Visual inspiration comes from technical operations, digital twins, maintenance environments, advanced manufacturing and supply networks.

### Anti-greenwashing visual rule

Never combine aircraft with nature imagery. Specifically prohibited: aircraft with forests, green landscapes, leaves or planet imagery. If aircraft are later shown, only A400M or Eurofighter may appear, and only in technical contexts such as hangar, factory, maintenance, engineering, air base, digital twin or technical operations. No speaker portraits, video stills or copyrighted course imagery.

### Color tokens (provisional; validate for brand and contrast)

- `Navy 950` — #06111F: primary background
- `Navy 900` — #0A1A2D: elevated canvas
- `Navy 800` — #102943: panel / navigation
- `Steel 500` — #71839A: secondary text and structure (large text only unless contrast passes)
- `Steel 200` — #CAD5E0: standard secondary text
- `White 50` — #F5FAFF: primary text
- `Cyan 400` — #25D8F4: focus, active state and key data
- `Blue 500` — #2E7CF6: link and selection accent
- `Amber 400` — #F5B942: uncertainty / needs evidence
- `Red 400` — #F16B73: severe risk / failed control
- `Green 400` — #45D49A: verified completion only, not “environmental goodness”

Color is never the only state cue. Green is reserved for completion/confirmed state and must not decorate environmental content.

### Typography

- Humanist sans-serif for body; technically precise grotesk/sans for headings if licensed/approved.
- Default body equivalent 17–18 px at 1.55 line height; minimum 16 px.
- Compact labels use sentence case and never drop below 12 px equivalent.
- Numerals use tabular figures in data views.
- Line length targets 55–78 characters.
- Acronyms expand on first use and remain available in the glossary.

### Layout and surfaces

- 8 px base spacing system with generous 24/32/48 px section rhythm.
- Main reading column 720–820 px; diagrams may expand into a wider 1120–1280 px canvas.
- Panels use thin cool-blue borders, slight metallic gradients and restrained shadows.
- Avoid glassmorphism where it reduces contrast or makes the interface feel ornamental.
- Diagrams use layered vectors, grids and schematic lines; never photoreal nature-as-decoration.

### Iconography and imagery

- Custom line icons based on engineering primitives: node, link, boundary, control, evidence, alert, stakeholder, material flow.
- Icons always paired with text for navigation and assessment state.
- Later image generation, if authorized, should focus on hangars, inspection, manufacturing, digital twins and abstract network/evidence views.
- Any aircraft image requires model/technical-context validation and rights review.

### Motion

- Motion clarifies cause, sequence or state change; it is not ambient spectacle.
- 150–250 ms UI transitions; 300–500 ms diagram reveals.
- Respect `prefers-reduced-motion`; no essential information depends on animation.
- No rapidly pulsing radar effects, continuous parallax or flashing alerts.

## Visual explainer families

1. **System map:** dependencies and cross-pillar consequences.
2. **Boundary map:** organizational/value-chain scope and exclusions.
3. **Flow:** data, material, decision or escalation sequence.
4. **Risk chain / bow-tie:** drivers, event, barriers and consequences.
5. **Comparison:** approaches, ratings or options with shared dimensions.
6. **Evidence stack:** claim, source, method, control, assurance and confidence.
7. **Lifecycle loop:** design through end-of-life, with leakage and recovery.
8. **Decision matrix:** options with constraints, uncertainty and non-compensable criteria.

Every diagram needs a title, concise explanatory text, accessible alternative and source/original status.

## Accessibility approach

Target WCAG 2.2 AA for the later application.

### Perceivable

- Text/background contrast at least 4.5:1 for normal text and 3:1 for large text/UI graphics.
- Never encode pillar, severity, progress or answer state with color alone.
- Meaningful images receive concise alt text; complex diagrams receive adjacent structured descriptions/data tables.
- Decorative imagery is ignored by assistive technology.
- Captions and transcripts are required for any audio/video; transcript is navigable by section.
- Zoom to 200% and text spacing overrides must not clip or overlap content.

### Operable

- Complete keyboard path with visible 3:1+ focus indicator.
- Logical focus order, skip link, landmarks and heading structure.
- Minimum target size aligned with WCAG 2.2; generous spacing on mobile.
- Drag/drop has click/keyboard alternatives; timed content is avoided.
- Modal/drawer focus is trapped correctly and returns to the trigger.

### Understandable

- Plain-language definitions before specialist terminology.
- Instructions appear before interactions and state expected response count.
- Errors identify the problem and repair, preserving prior valid input.
- Feedback explains reasoning without shaming the learner.
- Consistent controls and module pattern reduce cognitive load.

### Robust and inclusive

- Semantic HTML first; ARIA only where necessary.
- Screen-reader announcements for saved progress, validation and dynamic feedback are concise.
- Charts/diagrams expose equivalent text and underlying values where applicable.
- Assessments avoid identity stereotyping, unnecessary reading complexity and cultural trivia.
- DEI interactions do not collect personal identity information or expose learner views.

### Accessibility QA gate

Keyboard-only pass; screen-reader pass on at least two major platform/browser combinations; automated scan; 200% zoom/reflow; high contrast; reduced motion; mobile screen-reader spot checks; captions/transcript verification; accessible assessment review.

## Responsive behaviour

### Breakpoints as content responses

- **≥1200 px:** persistent rail, wide explainer canvas, side-by-side evidence panel where appropriate.
- **768–1199 px:** collapsible rail, 12-column grid, comparison cards may use two columns.
- **<768 px:** single column, modal course map, full-width cards, sticky bottom actions.
- **<420 px:** reduce non-essential chrome; maintain body size and target dimensions; break long technical labels safely.

### Component reflow rules

- Comparison tables become labeled record cards only if row/column meaning remains explicit; otherwise use horizontal scroll with sticky row/column headers and a text alternative.
- Network/system diagrams provide zoom, pan buttons and a linear accessible outline.
- Drag interactions become select-and-place steps.
- Decision matrices show one option at a time plus a persistent dimension summary on narrow screens.
- No important text is embedded in raster imagery.

## Proposed interactive components

| Component | Learning purpose | Behaviour | Accessibility / integrity notes |
|---|---|---|---|
| Pillar/system mapper | Expose cross-pillar relationships | Multi-select concepts and draw causal links | Keyboard list alternative; accept defensible multiple labels |
| Scope boundary builder | Teach Scope 1–3 and value-chain boundaries | Place activities inside/outside boundary with rationale | Click alternative to drag; disclose simplified assumptions |
| Lifecycle trade-off simulator | Reveal burden shifting | Adjust a small set of transparent parameters | Never present false precision or a universal green score |
| Materiality sorter | Prioritize decision-relevant issues | Rate impact severity, financial relevance, evidence and time horizon | Explain that course thresholds are illustrative |
| Rating-method mixer | Show why ratings diverge | Change scope/weights and compare results | Provider-neutral; no claim to replicate live ratings |
| Claim/evidence inspector | Build anti-greenwashing skepticism | Reveal claim layers and update confidence | Confidence scale includes “insufficient evidence” |
| Barrier walkthrough | Diagnose inclusion/system barriers | Inspect a process at decision points | No identity role-play that trivializes lived experience |
| Supplier evidence board | Triangulate social evidence | Compare audits, records, worker voice and buyer practices | Severe harm triggers non-compensable escalation logic |
| Control-room challenge | Connect risks, controls and evidence | Match control, owner, frequency and proof | Distinguish design from operating effectiveness |
| Board packet triage | Practice material escalation | Select decision-ready content and reject vanity metrics | Clear rationale; no hidden preference for more data |
| Strategy map builder | Connect ambition to action | Build objective–metric–control–owner chain | Flags missing causal/evidence links, not stylistic choices |
| Decision Lab evidence room | Integrative judgment | Branching investigation and conditional recommendation | Resume-safe; rubric dimensions visible before submission |

## Content governance and traceability in the later build

- Every lesson record includes exact source filenames, paraphrase/original status, content owner, reviewer, version and update date.
- Dated current-information cards are separated from durable theory so volatile facts can be updated without rewriting the module.
- Guest content appears only as attributed paraphrased perspective, with no portrait and no endorsement language.
- Original APS scenarios have their own SME/legal/safety review status and never inherit authority from the source course.
- Quantitative claims require citation metadata and a freshness rule; stale cards show “verification required” in non-production environments and cannot publish.
- The CMS/content model should support withdrawal or correction of a claim without breaking learner progress identifiers.

## Quality and release gates for the later build

1. Source traceability complete for every substantive lesson.
2. All items in `CURRENT_UPDATE_REQUIREMENTS.md` resolved or excluded.
3. APS subject-matter review of technical scenarios and terminology.
4. Legal/compliance/HR review of jurisdiction-sensitive language.
5. Accessibility acceptance against the QA gate.
6. Assessment validity review: objective alignment, plausible distractors, defensible scoring and retry behaviour.
7. Anti-greenwashing visual/content audit, including aircraft-image restrictions.
8. Responsive testing on keyboard, desktop, tablet and narrow mobile.
9. Progress/resume/version migration tests.
10. Editorial review for plain language, acronym control, neutral guest attribution and broken transcript characters.
