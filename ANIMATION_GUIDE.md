# Animation Guide

The project ships with **Framer Motion 11** (React 19-ready). Use it for scroll reveals, hover/tap interactions, and micro-transitions.

## Common patterns

### Scroll-triggered reveal
```tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
/>;
```

### Hover / tap micro-interaction
```tsx
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
  Card
</motion.div>
```

### Staggered list
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

<motion.div variants={container} initial="hidden" animate="show">
  {items.map((it) => (
    <motion.div key={it.id} variants={item}>{it.label}</motion.div>
  ))}
</motion.div>
```

### Page transitions (optional)
Wrap page content in a `motion.div` and control `initial/animate/exit` for fades or slides. For App Router, use layouts for shared transitions.

## Alternatives (when to consider)
- **GSAP**: Complex timelines or scroll choreography.
- **React Spring**: Physics-based, natural motion.
- **Motion One**: Lightweight, Web Animations API.
- **Lottie**: Play exported vector animations.

## Performance tips
- Prefer animating `transform` and `opacity`.
- Use `once: true` on scroll reveals to avoid re-runs.
- Keep animated DOM count low; group elements and stagger.
- Respect reduced-motion preferences if you add heavier effects.

