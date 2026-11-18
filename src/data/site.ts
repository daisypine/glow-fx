// Single source of truth for Glow FX business details and homepage content.
// Everything here comes from the live site (glow-fx.com) or was confirmed by Daisy.
// Items marked CONFIRM are placeholders that must be checked with Destiny before launch.

export const site = {
  name: 'Glow FX',
  gbpName: 'Glow FX - Lashes & Lifts',
  owner: 'Destiny Foad',
  url: 'https://glow-fx.com',
  phone: '(669) 600-0399',
  phoneHref: 'tel:+16696000399',
  email: 'info@glow-fx.com',
  address: {
    venue: 'Salon Republic, Suite #906',
    street: '200 W McKinley Ave',
    city: 'Sunnyvale',
    region: 'CA',
    postal: '94086',
  },
  hours: 'By appointment only',
  days: 'Thursday, Friday & Saturday',
  parking: 'Free on-site parking',
  booking:
    'https://www.fresha.com/a/glow-fx-sunnyvale-200-west-mckinley-avenue-q81nzbe6/booking?menu=true&share=true&pId=2997205',
  maps: 'https://www.google.com/maps/place/?q=place_id:ChIJbzlvDQa3j4AR6lFLvuIbwb0',
  instagram: 'https://www.instagram.com/glowfx.co/',
  tiktok: 'https://www.tiktok.com/@glow.fx.sunnyvale',
  promo: { code: 'SAVE20', offer: '20% OFF', line: 'your first lash lift or new extension set' },
};

// Until the inner pages are built, nav points at the live WordPress pages.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: 'https://glow-fx.com/about/' },
  { label: 'Services', href: 'https://glow-fx.com/service/' },
  { label: 'Gallery', href: 'https://glow-fx.com/gallery/' },
  { label: 'Blog', href: 'https://glow-fx.com/blog/' },
];

export const services = [
  {
    name: 'Lash Extensions',
    desc: 'Custom sets that enhance your eyes and last.',
    price: 'From $180',
    img: 'lash-extensions-volume-set.webp',
    alt: 'Close-up of a volume lash extension set on a Glow FX client',
    tone: 'peach',
    pos: 'center 40%',
  },
  {
    name: 'Korean Lash Lift',
    desc: 'A flat-shield lift that stretches each lash from root to tip.', // Claude wording, CONFIRM
    price: '$130',
    img: 'korean-lash-lift-result.webp',
    alt: 'Glow FX client after a lash lift',
    tone: 'pink',
    pos: 'center 35%',
  },
  {
    name: 'Brow Artistry',
    desc: 'Shaped, groomed brows made for your face.',
    price: 'From $20',
    img: 'brow-shaping-result.webp',
    alt: 'Glow FX client with shaped, groomed brows',
    tone: 'green',
    pos: 'center 30%',
  },
];

// Not shown on the homepage yet. Goes on the Lash Extensions and Korean Lash Extensions pages.
// PLACEHOLDER price based on nearby studios (their Korean/anime sets sit between hybrid and volume).
// Destiny's menu: Hybrid $220, Volume $250. Replace with her real name, price and description.
export const koreanStyleSet = {
  name: 'Korean-Style Set',
  price: '$235', // CONFIRM with Destiny
  desc: 'A wispy, spiky, doll-eyed look inspired by Korean lash trends.', // Claude wording, CONFIRM
};

export const beforeAfter = [
  { before: 'lash-lift-before.webp', after: 'lash-lift-after.webp', label: 'lash lift', tone: 'peach' },
  { before: 'client-2-before.webp', after: 'client-2-after.webp', label: 'lash and brow service', tone: 'pink' },
  { before: 'client-3-before.webp', after: 'client-3-after.webp', label: 'lash extensions', tone: 'green' },
];

export const steps = [
  {
    title: 'Before you come',
    text: 'Come with clean lashes and brows - no mascara, makeup, oils, or heavy creams around the eye area. Try to avoid caffeine beforehand.',
    sticker: 'sticker-wand.webp',
    tone: 'peach',
  },
  {
    title: 'While you’re here',
    text: 'Get comfy, put your earphones in, and let me take care of the rest.',
    sticker: 'sticker-heart.webp',
    tone: 'pink',
  },
  {
    title: 'When you leave',
    text: 'I take my time with every detail so you leave loving what you see.',
    sticker: 'sticker-mirror.webp',
    tone: 'green',
  },
];

export const led = [
  { title: 'Better Bond', text: 'Less lifting, less fallout, and extensions that actually last.', tone: 'peach' },
  { title: 'Gentler on Eyes', text: 'Lower fumes and less irritation. Ideal for ultra-sensitive eyes.', tone: 'pink' },
  { title: 'Same Time, Better Results', text: 'Zero extra application time, with noticeably better retention.', tone: 'green' },
];

// Word for word from the live site. Source is her Google Business Profile.
// Before launch: add the date for each, and confirm the name on any duplicate.
export const reviews = [
  {
    name: 'Jayde I',
    text: '10/10 experience over all. Destiny is absolutely amazing and her skill set is even better, from the comfortable environment she creates to the absolute perfection of my lashes. I always leave happy and excited to get my next fill ♥️ I would recommend her to any of my family and friends.',
  },
  {
    name: 'Lauren V',
    text: 'Destiny is awesome! Her space is clean and tidy and her work is consistently great. I have gotten extensions at many different places, I’ll be sticking with Glow FX!',
  },
  {
    name: 'Clarissa S',
    text: 'Glow FX is my new go to place for lashes! The cute salon is private just me and Destiny so the vibe is relaxed and stress free. She did such an amazing job with my lashes, best ever!',
  },
];

// Her own answers from the live Services page.
export const faqs = [
  {
    q: 'What is a Korean Lash Lift?',
    a: 'A specialized technique that lifts and boosts your natural lashes gently, giving a wide-awake look without extensions.',
  },
  {
    q: 'Will lash extensions damage my natural lashes?',
    a: 'When applied correctly — absolutely not. At Glow FX, every single extension is isolated and applied to one natural lash at a time. No clumping, no shortcuts. Lash damage typically comes from poor application, rubbing your eyes, skipping fills, or pulling at extensions. Treat them well and come in regularly, and your natural lashes will stay completely healthy.',
  },
  {
    q: 'I have never had extensions before — where do I start?',
    a: 'Welcome, you are going to love this! Start with a Classic Set — it is the most natural-looking option and a great way to experience extensions for the first time before deciding if you want to go fuller. We will chat at your appointment about length, curl, and style so everything is tailored to you. No guessing, no pressure.',
  },
];
