export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
    },    
  }
};

export const titleAnimation = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export const imageAnimation = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
};

export const lineAnimation = {
  hidden: { 
    width: '0%',
  },
  show: {
    width: '100%',
    transition: { 
      duration: 1, 
    },
  },
};

export const NavAnimation = {
  hidden: { 
    height: '0%',
    when: 'afterChildren',
  },
  show: {
    height: '100%',
    transition: { 
      duration: 0.5,
      ease: 'linear',
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
};

export const ItemsAnimation = {
  hidden: {
    height: '0%',
    opacity: 0,
    transition: { 
      duration: 0.1,
    },
  },
  show: {
    height: '100%',
    opacity: 1,
  }
};

export const reveal = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 1,
    },
  },
};