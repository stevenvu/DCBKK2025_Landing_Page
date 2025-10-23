# Product Requirements Document: TestTeach Online Landing Page

## 1. Overview
- **Project Name:** TestTeach Online Landing Page Refresh
- **Stakeholders:** Marketing team, Product team, Design team, Engineering team, Founders
- **Objective:** Create a high-converting landing page for TestTeach's online tutoring platform that follows a pain-agitate-solution narrative while establishing trust, clarifying offerings, and driving prospective students or parents to request a consultation or sign up for a trial.

## 2. Background & Context
- Current web presence emphasizes offerings but lacks a clear pain-driven narrative and modern visual aesthetic.
- Target users are overwhelmed parents, adult learners, and students seeking flexible online tutoring.
- Competitive landscape features polished sites with empathetic messaging and modern gradients; TestTeach needs to match or exceed this standard while retaining credibility.

## 3. Goals & Success Metrics
- **Primary Goal:** Increase conversion rate (consultation bookings, trial sign-ups) by 25% within three months of launch.
- **Secondary Goals:**
  - Improve time-on-page by 15% compared to existing online page.
  - Achieve >50% scroll depth to solution section for at least 60% of visitors.
  - Collect at least 200 qualified leads in the first month.

## 4. Target Audience
1. **Parents of school-age children** seeking supplemental tutoring.
2. **Adult learners** preparing for certifications or career changes.
3. **Students** needing specialized exam prep or subject tutoring.

Each persona values reliability, affordability, flexible scheduling, and transparent results.

## 5. Narrative Framework (Pain-Agitate-Solution)
1. **Pain:**
   - Highlight frustrations: confusing online resources, inconsistent tutoring quality, lack of personalized guidance.
   - Include testimonial snippets illustrating prior struggles.

2. **Agitate:**
   - Emphasize consequences of the pain: wasted time, declining grades or confidence, money spent on ineffective solutions.
   - Use emotionally resonant copy with data points (e.g., percentage of students who fall behind without structured support).

3. **Solution:**
   - Present TestTeach Online as the answer: adaptive curriculum, certified tutors, flexible scheduling, transparent progress tracking.
   - Showcase success stories, metrics, and social proof (testimonials, partner logos, trust badges).

## 6. Content Requirements
- **Hero Section (Pain Intro):**
  - Headline highlighting the core pain (e.g., "Struggling to keep up with online learning?").
  - Subheadline introducing TestTeach's supportive solution.
  - Primary CTA: "Book a Free Consultation." Secondary CTA: "See How It Works."
  - Hero imagery: mix of human-focused photography with subtle gradient overlay to match muted palette.

- **Agitate Section:**
  - Bullet list of common challenges, supported by stats or quotes.
  - Supporting illustration depicting frustration.

- **Solution Section:**
  - Three to four benefit pillars (Personalized Plans, Expert Tutors, Flexible Scheduling, Progress Tracking).
  - Include quick metrics (e.g., satisfaction rate, average grade improvement).

- **How It Works:**
  - Step-by-step walkthrough (Discovery Call → Personalized Plan → Ongoing Support → Progress Reviews).

- **Testimonials & Social Proof:**
  - Rotating quotes, star ratings, media logos.

- **Pricing / Packages Overview:**
  - Highlight core packages with concise descriptions and link to detailed pricing.

- **FAQ:**
  - Answer top 5-7 concerns (credentials, availability, technology requirements, cancellation policy, accessibility).

- **Final CTA Banner:**
  - Reinforce solution message with urgent CTA.

- **Footer:**
  - Key navigation links, contact info, compliance statements.

## 7. Visual & Brand Direction
- **Color Palette:** Muted tones with gradient blends (e.g., soft slate-to-teal, blush-to-lavender, warm sand-to-rose) replacing current bright swatch.
- **Typography:** Clean, modern sans-serif for headings; readable serif or rounded sans-serif for body text.
- **Imagery:** Authentic photography of students and tutors in online settings with overlay gradients for consistency.
- **Iconography:** Simple line icons with gradient accents.
- **Layout:** Generous white space, modular sections, and responsive design optimized for mobile-first.

## 8. Functional Requirements
- Responsive layout across mobile, tablet, and desktop.
- Accessibility compliance (WCAG 2.1 AA): proper contrast, semantic structure, keyboard navigation, alt text.
- Performance: Core Web Vitals (LCP < 2.5s, CLS < 0.1, FID/INP < 200ms).
- Analytics hooks for conversion tracking (hero CTA, pricing, final CTA) and scroll depth.
- Integrate with existing CRM/form submission endpoint.
- CMS-friendly architecture: content blocks manageable by marketing team.

## 9. Technical Approach
- **Stack:** Use existing landing page framework (likely Next.js/React or static site generator as per repo conventions).
- **Styling:** Modern CSS (Tailwind, CSS Modules, or SCSS) with gradient utilities and theme tokens.
- **Asset Optimization:** Compress imagery, use WebP/AVIF where possible, and lazy-load non-critical visuals.
- **Deployment:** Follow current CI/CD pipeline; ensure preview environment for stakeholder review.

## 10. SEO & Content Strategy
- Keyword focus: "online tutoring UK," "virtual tutoring for students," "TestTeach online support."
- Include structured data (Organization, FAQ, Reviews) for enhanced SERP appearance.
- Meta tags: compelling title, meta description, Open Graph/Twitter cards.
- Internal links to blog resources, success stories, and broader service pages.

## 11. Metrics & Analytics
- Configure Google Analytics/GA4 events for CTA clicks.
- Use Hotjar or similar tool for heatmaps during first month post-launch.
- Weekly reporting to stakeholders for first eight weeks.

## 12. Timeline & Milestones
1. **Week 1:** Finalize copy outline, gradient palette, and wireframes.
2. **Week 2:** High-fidelity design, stakeholder review, and iterations.
3. **Week 3:** Development sprint, responsive QA, analytics implementation.
4. **Week 4:** UAT, performance testing, launch preparation.

## 13. Risks & Mitigations
- **Risk:** Overly muted palette reduces contrast.
  - **Mitigation:** Validate color accessibility early; maintain high-contrast CTA buttons.
- **Risk:** Messaging may not resonate with all personas.
  - **Mitigation:** Conduct quick user interviews/tests; provide multiple testimonials.
- **Risk:** Delays in asset production.
  - **Mitigation:** Prepare fallback stock imagery with consistent gradient overlays.

## 14. Approval
- **Sign-off Required From:** Head of Marketing, Product Lead, Tech Lead, Founder.

