# Specification

## Summary
**Goal:** Build a complete MOBIUS-NOVA Energy single-page investor and test site landing page with all sections, animated hero, product renders, specs, investor pitch, sign-up forms, and a Motoko backend to store submissions.

**Planned changes:**
- Rebuild `LandingPage.tsx` as a full single-page site with seven sections in order: Hero, The Technology, Deployments in Action, Key Specifications, Investor Opportunity, Become a Test Site, and Get Involved
- Apply brand palette (Deep Space Black #0D0D0D, Liquid Silver #C0C0C0, Nova Gold #FFD700, Cosmic Blue #1E90FF) and Montserrat Bold all-caps headings throughout
- **Hero section:** Display the MOBIUS-NOVA logo centered and enlarged, tagline "LIGHTING THE WAY TO THE FUTURE AND BEYOND" in Nova Gold, and a Three.js / React Three Fiber animated liquid Möbius strip with ripple/shimmer effect as background centerpiece
- **The Technology section:** Show `frictionless-power-core.dim_900x1600.png` and `engineering-analysis.dim_900x1600.png` side-by-side (stacked on mobile) with heading and description of the Universal Multi-Modal Core
- **Deployments in Action section:** Four responsive cards (2×2 desktop, 1-column mobile) using `offgrid-render.dim_1200x800.png`, `farm-render.dim_1200x800.png`, `mars-render.dim_1200x800.png`, `cad-detail.dim_1200x800.png`, each with environment name and one-line description
- **Key Specifications section:** Stat grid with Nova Gold values and Liquid Silver labels for all seven specs (power output, turbine height, blade diameter, helix angle, stator count, bearing system, energy modes)
- **Investor Opportunity section:** Pitch card with Nova Gold border covering market opportunity, differentiation, and ROI, plus a prominent "REQUEST INVESTOR DECK" CTA button
- **Become a Test Site section:** Sign-up form collecting name, email, phone (optional), location, property type (dropdown), available energy sources (checkboxes), and notes; submits to Motoko backend; shows success confirmation
- **Get Involved section:** Two side-by-side contact sub-forms — Investor Inquiry (name, email, company, investment range, message) and General Partnership (name, email, organization, partnership type, message); each submits independently to backend with success confirmation
- **Motoko backend:** Add stable data structures and update/query functions for `TestSiteApplication` and `ContactInquiry`; expose `submitTestSiteApplication`, `submitInvestorInquiry`, `submitPartnershipInquiry`, `getTestSiteApplications`, `getInquiries`
- Serve all images from `/assets/generated/`; use logo in hero and navbar/footer

**User-visible outcome:** Visitors see a fully styled, crash-free MOBIUS-NOVA landing page where investors can read the pitch and request a deck, and early adopters can apply as test sites or send partnership inquiries — all submissions saved to the backend.
