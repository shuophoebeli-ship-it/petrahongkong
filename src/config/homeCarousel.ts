/** Home hero carousel — user-provided Hong Kong cityscapes */
export const HOME_CAROUSEL_IMAGES = [
  {
    id: 'icc',
    src: '/banners/hero-slide-icc.jpg',
    alt: { zh: '香港 ICC 黃昏俯瞰維港', en: 'ICC overlooking Victoria Harbour at dusk' },
    objectPosition: 'center 40%',
  },
  {
    id: 'harbour',
    src: '/banners/hero-slide-harbour.jpg',
    alt: { zh: '香港維港黃昏天際線', en: 'Hong Kong skyline at golden hour' },
    objectPosition: 'center 45%',
  },
  {
    id: 'victoria',
    src: '/banners/hero-slide-victoria.jpg',
    alt: { zh: '維多利亞港全景', en: 'Victoria Harbour panoramic view' },
    objectPosition: 'center 50%',
  },
] as const

export const HOME_CAROUSEL_SLIDE_COUNT = HOME_CAROUSEL_IMAGES.length
