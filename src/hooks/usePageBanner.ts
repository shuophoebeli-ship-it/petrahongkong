import { useLanguage } from '../context/LanguageContext'
import { PAGE_BANNERS, type BannerKey } from '../config/banners'

export function usePageBanner(key: BannerKey) {
  const { language } = useLanguage()
  const banner = PAGE_BANNERS[key]
  return {
    src: banner.src,
    alt: language === 'zh' ? banner.alt.zh : banner.alt.en,
    objectPosition: banner.objectPosition,
  }
}
