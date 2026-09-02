# Phase 6B — Final Release Report

## 1. Repository status

The approved release candidate is committed on the public `main` branch. The working release source excludes dependency folders, build output, caches and Codex workspace artefacts.

## 2. Repository URL

https://github.com/AUG79-droid/esg-essentials-air-power-services

## 3. Release commit

Initial production release: `ea03b0e816ef526f00bac9e30afb18cbbb5de8f0` (`Release ESG Essentials course`).

Release deployment configuration follow-up commits: `a477ef7`, `07b6567`, and `4e655e0`. These only repair and enable the GitHub Pages workflow; they do not alter course content, logic, visuals, images or learning progression.

## 4. Pages configuration

GitHub Pages is configured to deploy through GitHub Actions. The Vite application retains hash routing and the workflow builds, tests, lints and uploads `dist` to the Pages environment.

## 5. Deployment result

The completed GitHub Actions deployment published the `github-pages` artifact (SHA-256 `f5b7f4bb75be1b59702dfa7c75b68fd6e105b7ad96fc7f932141a649bcb8f1f6`).

## 6. Verified public course URL

https://aug79-droid.github.io/esg-essentials-air-power-services/

The URL was opened and rendered from the public deployment.

## 7. Public routes checked

Home, course overview, module map, Module 00, Module 03, Module 05, Module 08, Module 09 / Decision Lab entry, progress, glossary, sources and about routes were opened from the deployed site. Locked modules and the Decision Lab correctly return learners to the module map until their prerequisite progression is complete; this is the approved progression behaviour, not a routing failure. No blank page or horizontal overflow was observed.

## 8. Public asset verification

Production CSS and WebP assets load successfully. The public home hero resolved to `images/home-hero.webp` with natural dimensions 1672 × 941. Module 09 remains wired in the source to `/images/module-09-hero.webp`; the approved A400M runtime asset is retained in the published production build.

## 9. Public console result

No application console errors were recorded during public course checks.

## 10. Public mobile verification

The public desktop route checks found no document overflow. The approved responsive CSS is retained unchanged; prior release-candidate desktop, tablet and mobile verification remains applicable. No deployment-specific responsive regression was detected.

## 11. Phase 6A-C corrections confirmed publicly

The public deployment preserves the approved responsive navigation, wrapping, dark-theme readability and completion-surface corrections. No source changes were made to these corrections during release.

## 12. Final hero-crop corrections confirmed publicly

The public deployment preserves the final approved hero-crop presentation rules and runtime images. No hero images were regenerated or replaced during Phase 6B.

## 13. Sustainability Navigator files changed

- `catalogue-data.js` — added the EN-only, foundation-level ESG Essentials resource with the verified public URL, 459-minute duration, all six pillar IDs and repository provenance.
- `tests/catalogue.test.cjs` — added direct resource coverage and updated the governed catalogue inventory expectation.
- `tests/content-governance.test.cjs`, `tests/eco-design-decision-assessment.test.cjs`, `tests/learning-paths.test.cjs`, `tests/noise-habitat-spanish-localization.test.cjs`, `tests/progress.test.cjs`, `tests/reach-spanish-localization.test.cjs` — updated fixed inventory expectations from 26 to 27 resources.

Existing Learning Paths and their revision/progress semantics were intentionally left intact to avoid an unnecessary progress migration. ESG Essentials is positioned as the new first-class foundation resource leading to the existing specialist learning catalogue.

## 14. Navigator test/build result

`node governance/check-content.cjs` passed with **25 warnings to review and 0 blocking errors**. `node --test tests/*.test.cjs` passed **128/128** tests. JavaScript syntax checks for the changed catalogue files passed. The Navigator Pages workflow completed successfully.

## 15. Navigator commit

`2cc8069c9d87c556623e7a09d8f9501f76aec71b` — `Add ESG Essentials course to catalogue`.

## 16. Navigator public deployment

https://aug79-droid.github.io/sustainability-navigator/

The real public deployment was opened after the successful Pages workflow.

## 17. ESG Essentials integration result

The public Navigator displays ESG Essentials and its English launch control resolves to the verified standalone public course URL. The Navigator rendered without console errors or horizontal overflow during the check.

## 18. Final Airbus Hub target URL

https://aug79-droid.github.io/esg-essentials-air-power-services/

For the Airbus Hub LEARN card:

- **Title:** ESG Essentials
- **Description:** Understand the Environmental, Social and Governance foundations behind better business decisions.
- **Target:** the URL above.

## 19. Remaining issues

None blocking release. GitHub Actions displays an upstream Node 20 deprecation warning for several GitHub-maintained actions; the workflow completed successfully and the public deployment is verified.
