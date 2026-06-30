export type BannerKey =
  | 'home'
  | 'about'
  | 'business'
  | 'solutions'
  | 'advantages'
  | 'team'
  | 'contact'

export interface PageBanner {
  src: string
  alt: { zh: string; en: string }
  objectPosition: string
}

/** Site-wide banner images — unified gold / blue-gray dusk financial aesthetic */
export const PAGE_BANNERS: Record<BannerKey, PageBanner> = {
  home: {
    src: '/banners/about-harbour-sunset.jpg',
    alt: {
      zh: '香港維港黃昏全景',
      en: 'Hong Kong Victoria Harbour at dusk',
    },
    objectPosition: 'center 55%',
  },
  about: {
    src: '/banners/about-harbour-sunset.jpg',
    alt: {
      zh: '香港維港黃昏全景',
      en: 'Hong Kong Victoria Harbour at dusk',
    },
    objectPosition: 'center 55%',
  },
  business: {
    src: '/banners/business-harbour-skyline.jpg',
    alt: {
      zh: '香港維港與 ICC 天際線',
      en: 'Hong Kong Victoria Harbour skyline with ICC',
    },
    objectPosition: 'center 45%',
  },
  solutions: {
    src: '/banners/solutions-harbour-night.jpg',
    alt: {
      zh: '香港維港夜景與天星小輪',
      en: 'Hong Kong Victoria Harbour at night with Star Ferry',
    },
    objectPosition: 'center 45%',
  },
  advantages: {
    src: '/banners/advantages-harbour-junk-sunset.jpg',
    alt: {
      zh: '維港日落與中式帆船天際線',
      en: 'Victoria Harbour sunset with junk boat and skyline',
    },
    objectPosition: 'center 50%',
  },
  team: {
    src: '/banners/team-network-nodes.png',
    alt: {
      zh: '區塊鏈網絡節點協作示意',
      en: 'Blockchain network nodes collaboration',
    },
    objectPosition: 'center center',
  },
  contact: {
    src: '/banners/solutions-financial-night.jpg',
    alt: {
      zh: '香港金融區',
      en: 'Hong Kong financial district',
    },
    objectPosition: 'center 45%',
  },
}
