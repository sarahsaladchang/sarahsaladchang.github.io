# Design QA

## Visual target

- Selected direction: Option 1, Guided Interview Console
- Reference: `/Users/sarahchang/.codex/generated_images/01a04b84-de9a-7940-81c5-1615e1cbb07a/exec-504fde54-79d2-46ec-9fe5-3368ec6438ff.png`
- Reference size: 1487 × 1058
- Implementation capture: `/tmp/sarah-home-final.png`
- Side-by-side comparison: `/tmp/sarah-design-comparison-final.png`
- Browser viewport: 1487 × 1058

## Comparison and iteration

### Iteration 1

- P1: The original implementation used an oversized hero and pushed the core interview card below the first viewport.
- P1: The evidence panel was positioned as a secondary lower card rather than the right-hand evidence rail shown in the reference.
- Fix: Rebuilt the Home layout as a two-column interview console with a compact selector, visible question card, and aligned evidence rail.

### Iteration 2

- P2: The hero and selector group sat lower than the reference.
- P2: The mobile hero wrapped “in” onto an isolated line.
- Fix: Tightened desktop vertical spacing and reduced the mobile display size while preserving the selected typography and color system.

## Functional checks

- HR / Recruiter, Hiring Manager, and Technical Interviewer tabs update the question and supporting evidence.
- Next Question advances within the selected perspective.
- Work Evidence opens as an independent page and contains exactly three projects.
- About Sarah opens as an independent page and includes the career path plus four outside-work evidence themes.
- About Sarah photo carousel supports previous/next controls and touch swipe.
- Resume opens the existing PDF in a new tab.
- Desktop and 390 × 844 mobile layouts were visually inspected.

## Final result

passed
