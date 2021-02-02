export const easeOut = [0.25, 0.78, 0.9, 1]

export const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
}

export const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { ease: easeOut, duration: 1 } },
}