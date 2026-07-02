/**
 * 全站文案配置 — 修改此处即可更新繁中 / 英文内容
 *
 * 结构：translations.zh（繁体中文）、translations.en（英文）
 * 各页面组件通过 useLanguage() 的 t 对象读取对应语言文案
 */
export type Language = 'zh' | 'en'

export interface NavItem {
  about: string
  business: string
  solutions: string
  advantages: string
  team: string
  contact: string
}

export interface Translation {
  companyName: string
  companyNameEn: string
  nav: NavItem
  breadcrumb: {
    home: string
    ariaLabel: string
  }
  home: {
    carousel: {
      ariaLabel: string
      slogan: string
    }
    aboutIntro: {
      title: string
      subtitle: string
      paragraphs: string[]
      cta: string
    }
    portals: { title: string; description: string; route: string }[]
    portalArrow: string
    news: { title: string; comingSoon: string; subtitle: string }
  }
  about: {
    headline: string
    badge: string
    intro: string
    banner: {
      headline: string
      subtext: string
    }
    valueProps: { title: string; description: string }[]
  }
  business: {
    banner: { headline: string }
    anchorNav: { id: string; label: string }[]
    headline: string
    badge: string
    subtitle: string
    corePositioning: {
      title: string
      boxes: { title: string; description: string; variant: 'beige' | 'white' }[]
    }
    companyStructure: {
      title: string
      parent: { name: string; description: string }
      columns: {
        title: string
        brand?: string
        companies: { name: string; description: string }[]
      }[]
      projects: { name: string; subItems?: string[] }[]
    }
    businessSegments: {
      title: string
      segments: {
        title: string
        description: string
        icon: 'blockchain' | 'rwa'
        subItems: { title: string; description: string }[]
      }[]
      footer: string
    }
    businessEcosystem: {
      title: string
      points: { title: string; description: string }[]
    }
    ecosystemSynergy: {
      title: string
      intro: string
      boxes: { title: string; description: string; icon: 'network' | 'growth' }[]
      conclusion: string
    }
    items: { title: string; description: string }[]
  }
  solutions: {
    banner: { headline: string; subtext: string }
    closedLoop: {
      title: string
      steps: {
        label: string
        title: string
        bullets?: string[]
        flow?: string[]
        description?: string
      }[]
    }
    entryButtons: { id: string; label: string }[]
    chenpiProject: {
      title: string
      cards: { title: string; headline: string; description: string }[]
      officialWebsite: {
        sectionTitle: string
        previewAlt: string
        title: string
        subtitle: string
        description: string
        cta: string
        url: string
      }
    }
    expansion: {
      title: string
      phases: { period: string; timeframe: string; description: string }[]
    }
  }
  advantages: {
    banner: { headline: string; subtext: string }
    coreTitle: string
    pillars: { title: string; description: string; icon: 'innovation' | 'compliance' | 'replication' }[]
    investmentHighlights: {
      title: string
      items: {
        title: string
        highlight?: string
        description: string
        icon: 'market' | 'model' | 'verified' | 'scale' | 'exit'
      }[]
    }
  }
  team: {
    banner: { headline: string; subtext: string }
    management: {
      title: string
      members: {
        name: string
        role: string
        highlights: string[]
      }[]
    }
    outlook: {
      title: string
      summary: string
      pillars: {
        title: string
        subtitle: string
        description: string
        icon: 'tech' | 'ecosystem' | 'standard'
      }[]
    }
  }
  contact: {
    banner: { headline: string; subtext: string }
    offices: {
      title: string
      labels: { address: string; phone: string }
      locations: {
        city: string
        company: string
        companyEn: string
        address: string
        phones: string[]
      }[]
    }
    maps: {
      title: string
      viewButton: string
      items: { title: string; url: string }[]
    }
  }
  footer: {
    rights: string
    privacy: string
    terms: string
    navigation: { title: string }
    legal: { title: string; links: string[] }
    copyright: { title: string; text: string }
    contact: { title: string; hkOffice: string; szOffice: string; phone: string; email: string }
  }
}

export const translations: Record<Language, Translation> = {
  zh: {
    companyName: '香港盤石管理科技有限公司',
    companyNameEn: 'Petra Management Technology Limited',
    nav: {
      about: '關於盤石',
      business: '業務布局',
      solutions: '解決方案',
      advantages: '核心優勢',
      team: '團隊與合作',
      contact: '聯繫我們',
    },
    breadcrumb: {
      home: '首頁',
      ariaLabel: '麵包屑導航',
    },
    home: {
      carousel: {
        ariaLabel: '首頁輪播',
        slogan: '立足香港・背靠祖國・面向全球',
      },
      aboutIntro: {
        title: '關於我們',
        subtitle: 'ABOUT US',
        paragraphs: [
          '盤石管理科技有限公司（Petra Management Technology Limited，簡稱「盤石數科」）坐落於香港第一高樓——環球貿易廣場（ICC）86 樓，俯瞰維多利亞港，不僅具備絕佳的視野，而且擁有舒適的接待配套。',
          '「出海香港，放眼全球」，盤石香港擁有優越的地理位置，步行可直達香港西九龍高鐵站，一站地鐵直達中環，不僅可以快速迎接內地來港貴賓，而且能夠與各大金融服務機構緊密聯繫，為中國新中層家庭提供絕佳的環球資產配置服務，助力家業傳承、三代興旺、家庭幸福、社會和諧。',
          '深圳前海盤石數科以「數據資產」和「數字家辦」為立足點，以創新科技和專業服務為雙引擎，構建完整閉環的數字科技業務布局。公司通過優質數據資產化運營，幫助客戶企業打通新金融模式，將數據資產納入資產負債表，從而進一步得到融資等業務發展。',
        ],
        cta: '詳細信息 >',
      },
      portals: [
        {
          title: '關於盤石',
          description: '了解公司使命、願景與香港 RWA 戰略定位',
          route: '/about',
        },
        {
          title: '業務布局',
          description: '全鏈路 RWA 業務體系與跨境資產數字化布局',
          route: '/business',
        },
        {
          title: '解決方案',
          description: '從資產上鏈到全球流通的端到端服務',
          route: '/solutions',
        },
        {
          title: '核心優勢',
          description: '技術、合規、商業模式與投資亮點',
          route: '/advantages',
        },
        {
          title: '團隊與合作',
          description: '核心團隊與未來展望',
          route: '/team',
        },
        {
          title: '聯繫我們',
          description: '香港與深圳辦公室聯絡方式',
          route: '/contact',
        },
      ],
      portalArrow: '了解更多',
      news: {
        title: '最新動態',
        comingSoon: 'COMING SOON',
        subtitle: '未來將在此發布公司新聞、\n產業觀點與市場動態。',
      },
    },
    about: {
      headline: '科技賦能資產・鏈接創造價值',
      badge: '全球領先的 RWA 數字化基礎設施服務機構',
      intro:
        '立足香港，背靠祖國，面向全球。我們依托香港國際金融中心的區位優勢，融合前沿科技與全球資本，構建起真實世界資產數字化的新價值樞紐，推動具備中國文化元素的特色產業優質資產走向全球，實現全球化流通與價值提升。',
      banner: {
        headline: '立足香港・背靠祖國・面向全球',
        subtext:
          '依托香港國際金融中心與數字資產監管優勢，連接內地廣闊市場與全球資本網絡，構建 RWA 跨境流通的橋樑與樞紐。',
      },
      valueProps: [
        {
          title: '解決優質資產全球流通痛點',
          description:
            '以區塊鏈數字科技打破地域與制度壁壘，為優質真實世界資產提供高效、合規的全球化流通路徑。',
        },
        {
          title: '幫助資產所有者實現資產價值最大化',
          description:
            '通過資產數字化、結構化設計與全球投資者對接，釋放沉澱資產的流動性與價值潛力。',
        },
        {
          title: '為投資者提供合規、透明的數字金融產品科技服務',
          description:
            '以合規架構為基石，以鏈上透明為保障，為專業投資者提供可信、可審計的 RWA 數字金融產品。',
        },
      ],
    },
    business: {
      banner: {
        headline: '技術+資本雙輪驅動　構建RWA價值生態',
      },
      anchorNav: [
        { id: 'core-positioning', label: '核心定位' },
        { id: 'company-structure', label: '公司架構' },
        { id: 'business-segments', label: '業務板塊' },
        { id: 'business-ecosystem', label: '業務生態' },
        { id: 'ecosystem-synergy', label: '生態協同' },
      ],
      headline: '業務布局',
      badge: 'RWA 全生命周期服務體系',
      subtitle: '圍繞 RWA 全生命周期，構建資產數字化、服務、技術、合規與全球資源五位一體的業務體系',
      corePositioning: {
        title: '核心定位',
        boxes: [
          {
            title: '香港 RWA 發行的區塊鏈數字科技服務商',
            description:
              '立足香港、面向全球，以區塊鏈、大數據與人工智能為核心引擎，為 RWA 發行與數字資產流通提供專業、穩健、合規的數字科技服務。',
            variant: 'beige',
          },
          {
            title: '中國首家同時具備境內資產數字化與境外 RWA 發行能力，並搭橋進行兩股聯動的區塊鏈數字科技平台',
            description:
              '打通境內資產數字化與境外 RWA 發行通道，以「兩股聯動」機制連接真實世界資產與全球數字資本市場，構建跨境 RWA 價值流通新范式。',
            variant: 'white',
          },
        ],
      },
      companyStructure: {
        title: '公司架構',
        parent: {
          name: '香港盤石管理科技有限公司',
          description:
            'RWA數字科技平台，作為「數字投行」（總顧問＋落地操盤方），在香港負責簽約並實施優質資產RWA代幣化項目',
        },
        columns: [
          {
            title: '技術服務',
            brand: 'Fin-EasyLinks',
            companies: [
              {
                name: '香港融易鏈服務技術有限公司（100%控股）',
                description:
                  '公司技術主體，負責區塊鏈底層技術研發與RWA資產代幣鑄造、發行及持續運維，為集團提供核心技術支撐。',
              },
              {
                name: '深圳融易鏈服務技術有限公司（100%新設）',
                description:
                  '深圳融易鏈專注於區塊鏈技術應用服務，為傳統實物資產項目提供數字化系統開發與數據上鏈技術開發，實現「資產上鏈數字化」。',
              },
            ],
          },
          {
            title: '數字投行',
            companies: [
              {
                name: '香港RWA數字資產投資服務公司（100%新設）',
                description:
                  '專注於真實世界資產數字化（RWA）領域的投融資服務，助推RWA項目代幣發行及其資產價值最大化，驅動集團第二增長曲線。',
              },
            ],
          },
        ],
        projects: [
          { name: '新能源項目' },
          { name: '廣東南玉項目' },
          {
            name: '香港時光倉陳皮紀元科技有限公司（100%新設）',
            subItems: ['新會陳皮RWA項目'],
          },
          { name: '海南海物項目' },
          { name: '更多優質項目' },
        ],
      },
      businessSegments: {
        title: '業務板塊',
        segments: [
          {
            title: '業務板塊一：區塊鏈技術應用',
            description:
              '定位為集團的技術基石與服務引擎，聚焦底層技術研發，為全生態提供安全、高效、可擴展的技術支撐體系。',
            icon: 'blockchain',
            subItems: [
              {
                title: '全棧跨鏈技術開發',
                description:
                  '提供專業的區塊鏈應用開發與解決方案諮詢，覆蓋底層架構至上層應用。',
              },
              {
                title: '資產數字化賦能',
                description:
                  '完善知識產權專利布局，為各類實體與數字資產的合規化、通證化提供核心技術支持，創新數據資產應用。',
              },
            ],
          },
          {
            title: '業務板塊二：RWA數字資產服務',
            description:
              '定位為集團的資本觸角與生態加速器，通過資本運作鏈接全球資源，推動優質項目落地與價值釋放。',
            icon: 'rwa',
            subItems: [
              {
                title: '「幣+股」聯動投資',
                description:
                  '採用股權與通證結合的戰略投資模式，深度綁定優質項目，實現資本與產業的雙向賦能。',
              },
              {
                title: '全周期孵化運營',
                description:
                  '孵化高潛力RWA項目，助力境外代幣合規發行，打通價值流通鏈路，最大化資產回報。',
              },
            ],
          },
        ],
        footer:
          '技術板塊筑牢底層根基，資產板塊拓展資本邊界，二者相互協同、雙向賦能，構建集團可持續發展的戰略閉環。',
      },
      businessEcosystem: {
        title: '業務生態',
        points: [
          {
            title: '以區塊鏈技術為核心',
            description:
              '該平台以區塊鏈技術為核心，利用區塊鏈的不可篡改、可追溯等特性，為業務開展提供堅實的技術支撐，保障數據安全與交易的可信度。',
          },
          {
            title: '整合香港上市公司資源',
            description:
              '平台積極整合香港上市公司資源，借助上市公司的優勢，實現資源共享與優勢互補，為構建數字金融新生態奠定基礎。',
          },
          {
            title: '構建「境內數字資產 + 境外股幣結合」的數字金融新生態',
            description:
              '通過構建「境內數字資產 + 境外股幣結合」的數字金融新生態，實現境內外金融資源的有效對接，為投資者提供更多元化的投資選擇，促進資產的全球流通。',
          },
        ],
      },
      ecosystemSynergy: {
        title: '生態協同',
        intro:
          '平台的兩大業務板塊並非孤立運作，而是深度融合、互為支撐，形成了強大的內部協同效應，構建起一個高效自循環的商業生態系統。',
        boxes: [
          {
            title: '技術服務賦能投資業務',
            description:
              '技術板塊為投資項目提供底層技術支持，確保資產數字化安全高效；同時，投資業務中遇到的實際技術難題，反向驅動技術板塊進行針對性研發，提升技術壁壘。',
            icon: 'network',
          },
          {
            title: '投資業務反哺技術服務',
            description:
              '成功孵化的投資項目成為技術板塊的標杆案例，極大增強市場公信力；投資收益帶來的持續現金流，為技術研發提供了穩定、充足的資金保障，形成正向循環。',
            icon: 'growth',
          },
        ],
        conclusion:
          '核心結論：這種「技術+資本」的雙向賦能閉環生態，不僅實現了資源的最優配置，更構築了行業內難以複製、極具壁壘的核心競爭優勢。',
      },
      items: [
        {
          title: '資產數字化',
          description:
            '提供真實世界資產的評估、結構化設計與上鏈代幣化服務，覆蓋股權、債權、收益權、實物資產等多元品類，助力資產合規進入數字世界。',
        },
        {
          title: 'RWA 數字資產服務',
          description:
            '面向機構與專業投資者，提供 RWA 發行、託管、流動性管理與投資者關係等一站式數字資產服務，打通資產端與資金端。',
        },
        {
          title: '技術服務',
          description:
            '基於區塊鏈、大數據與人工智能，提供底層鏈開發、智能合約審計、數據中台、AI 風控模型等核心技術能力，保障平台安全與高效運營。',
        },
        {
          title: '合規架構',
          description:
            '結合香港及國際監管框架，設計 KYC/AML、信息披露、投資者適當性與跨境合規方案，為 RWA 業務構建可持續、可審計的合規基礎設施。',
        },
        {
          title: '全球資源整合',
          description:
            '依托香港國際金融中心優勢，整合全球律所、託管機構、交易所、技術夥伴與產業資源，為客戶提供跨境、跨市場的 RWA 解決方案。',
        },
      ],
    },
    solutions: {
      banner: {
        headline: '全鏈路 RWA 解決方案',
        subtext:
          '從資產確真、數字化上鏈、RWA 發行到全球流通，打造真實世界資產數字化全生命週期服務體系。',
      },
      closedLoop: {
        title: '全鏈路運營閉環',
        steps: [
          {
            label: '境內',
            title: '農產品資產數字化可信上鏈成功案例',
            description:
              '以新會陳皮為全球首個農產品資產數字化標杆案例，完成數字身份確權、深圳數據交易所掛牌與監管合規審計，為沉澱資產提供可信上鏈與流動性突破路徑。',
          },
          {
            label: '境外',
            title: 'NFT 數字提貨卡 · RWA 全球發行 · DAT 財庫服務',
            bullets: [
              'NFT 數字提貨卡面向全球投資者',
              '合規 RWA 代幣全球發行',
              'DAT 數字資產財庫託管服務',
            ],
            description:
              '依托香港數字科技平台，將境內可信上鏈資產延伸至境外資本市場，打造合規、透明、可交易的數字金融產品。',
          },
          {
            label: '閉環邏輯',
            title: '從數據到價值的完整轉化路徑',
            flow: [
              '數據確真',
              '資產數字化',
              '香港 RWA 發行',
              '上市公司合作',
              '股幣結合',
            ],
            description:
              '沿循上述閉環邏輯，確保資產從數據確真到價值變現的順暢過渡，最大化資產價值與流動性。',
          },
        ],
      },
      entryButtons: [
        { id: 'chenpi-project', label: '新會陳皮首期項目落地' },
        { id: 'business-expansion', label: '業務拓展與複製能力' },
      ],
      chenpiProject: {
        title: '新會陳皮首期項目落地',
        cards: [
          {
            title: '架構',
            headline: '發行－託管－監管三位一體',
            description:
              '底層資產為 20 萬斤新會陳皮，權屬通過貿易採購轉移至香港 SPV 公司，構建標準化運營架構，確保資產安全與合規管理。',
          },
          {
            title: '代幣設計',
            headline: '1000 萬枚 CP_RWA',
            description:
              '每枚代幣對應 10 克陳皮，代表提貨權與增值收益權，受香港 SFC 監管框架約束，面向境外合格投資者發行。',
          },
          {
            title: '合規保障',
            headline: '國營倉存＋跨境合規審計',
            description:
              '資產存放於中國供銷國營倉，鏈上溯源數據可信可審計，僅面向境外合格個人投資者與機構投資者，確保跨境合規。',
          },
        ],
        officialWebsite: {
          sectionTitle: '項目官網',
          previewAlt: '陳皮紀元 chenpigenesis.io 官方網站預覽',
          title: '陳皮紀元 · Chenpi Genesis',
          subtitle: '全球首枚增值型 RWA：新會陳皮創歲紀元 NFT',
          description:
            '把時間裝進錢包——每一枚 NFT 均 1:1 錨定新會核心產區實物陳皮，鏈上確權、國企託管、合規披露，構建真實世界資產與數字金融融合的新範式。',
          cta: '訪問官方網站',
          url: 'https://chenpigenesis.io/',
        },
      },
      expansion: {
        title: '業務拓展與複製能力',
        phases: [
          {
            period: '短期',
            timeframe: '2026 H1',
            description:
              '上線陳皮數字交易儲存服務平台，完成 400 萬美元融資，收購香港上市金融公司殼資源，為業務快速拓展提供資本與平台支撐。',
          },
          {
            period: '中期',
            timeframe: '2026 H2 – 2027 H1',
            description:
              '推動陳皮 RWA 審批上市，同步啟動 2–3 個其他高質量資產 RWA 項目（如新能源、礦業），以「股幣結合」模式拓展業務版圖。',
          },
          {
            period: '長期',
            timeframe: '2 年以上',
            description:
              '以「股幣結合」模式孵化 5–10 個上市項目，公司市值突破 100 億，打造 5 個百億級標杆案例，成為 RWA 領域標杆平台。',
          },
        ],
      },
    },
    advantages: {
      banner: {
        headline: '核心優勢',
        subtext: '技術、資本與合規能力的深度融合，構建難以複製的 RWA 競爭壁壘。',
      },
      coreTitle: '核心優勢',
      pillars: [
        {
          title: '模式創新',
          description:
            '平台是唯一具備「境內資產數字化 + 境外 RWA 上市」雙輪驅動能力的區塊鏈數字科技平台，已完成全鏈路閉環驗證，具備先發優勢，可適配不同市場需求，實現資產高效流通。',
          icon: 'innovation',
        },
        {
          title: '技術與合規',
          description:
            '基於以太坊等主流公鏈構建底層架構，同時具備境內外合規資質，確保業務安全、合法、可靠，有效吸引機構與專業投資者參與。',
          icon: 'compliance',
        },
        {
          title: '可複製性',
          description:
            '平台的技術標準與資產化模式可在垂直行業快速複製，具備強大的業務拓展能力與市場佔有率提升空間，形成規模化競爭優勢。',
          icon: 'replication',
        },
      ],
      investmentHighlights: {
        title: '投資亮點',
        items: [
          {
            title: '賽道藍海',
            description:
              '據波士頓諮詢集團預測，萬億級RWA市場前景廣闊，到2030年預計達16萬億美元，佔全球GDP的10%，較2022年增長超50倍，為公司發展提供了巨大的市場空間。',
            icon: 'market',
          },
          {
            title: '模式稀缺',
            description:
              '公司採用雙軌運營模式，全鏈路跑通「境內資產數字化+境外RWA上市」，這種獨特模式尚屬唯一，具有很強的競爭優勢和發展潛力。',
            icon: 'model',
          },
          {
            title: '已驗證',
            description:
              '新會陳皮項目已成功落地，架構為發行 - 託管 - 監管三位一體，發行的代幣受香港SFC監管，有合規保障，證明了公司業務模式的可行性。',
            icon: 'verified',
          },
          {
            title: '可複製',
            description:
              '公司的技術、標準和資產化模式可複製至特色產業，短期、中期和長期都有明確的業務拓展規劃，如上線交易平台、推進上市項目等。',
            icon: 'scale',
          },
          {
            title: '退出清晰',
            description:
              '公司有明確的港股上市路徑，為投資者提供了清晰的退出機制，降低了投資風險，增加了投資的吸引力。',
            icon: 'exit',
          },
        ],
      },
    },
    team: {
      banner: {
        headline: '團隊與合作',
        subtext: '匯聚頂尖人才與全球夥伴，共建 RWA 數字金融新生態',
      },
      management: {
        title: '核心管理團隊',
        members: [
          {
            name: '李高生',
            role: '創始人 & CEO',
            highlights: [
              '李高生畢業於人大本科、復旦碩士，持有香港4/9號資管牌照RO，擁有20年金融與區塊鏈經驗，在公司的戰略規劃和運營管理方面發揮著關鍵作用。',
            ],
          },
          {
            name: '劉宜云',
            role: '聯席董事長',
            highlights: [
              '劉宜云畢業於廈門大學，現任A股某上市公司副董事長，資深實業企業家、產業資本實操專家，兼具實體企業經營管理與A股、港股上市公司資本運作、資產重組、困境紓困、產業併購的全鏈條實操經驗。',
            ],
          },
          {
            name: '曹兆洋教授',
            role: 'AI首席官',
            highlights: [
              '曹兆洋教授是港大等客座教授，以其深厚的學術造詣和專業知識，為公司在AI+區塊鏈領域的發展提供技術支持和戰略指導，助力公司的科技研發。',
            ],
          },
          {
            name: '余剛博士',
            role: 'CIO',
            highlights: [
              '余剛博士曾在前摩根任職，擔任香港區塊鏈協會共同主席，憑藉豐富的行業經驗和廣泛的人脈資源，為公司的投資決策和行業合作提供有力支持。',
            ],
          },
        ],
      },
      outlook: {
        title: '未來展望',
        summary:
          '展望未來，香港盤石科技集團將繼續深耕RWA領域，致力於成為全球資產數字化浪潮中的關鍵基礎設施提供者，以技術創新驅動價值互聯，構建開放、可信、高效的數字金融新生態。',
        pillars: [
          {
            title: '技術深化',
            subtitle: '探索前沿，融合創新',
            description:
              '持續投入核心研發，深度探索AI與區塊鏈融合應用，攻堅下一代公鏈性能優化與安全增強技術，夯實資產數字化底層基座。',
            icon: 'tech',
          },
          {
            title: '生態擴張',
            subtitle: '鏈接全球，開放共贏',
            description:
              '擴大現實資產數字化版圖，覆蓋更多元資產類型；積極與全球頂尖金融機構、技術夥伴建立深度戰略合作，共建繁榮生態。',
            icon: 'ecosystem',
          },
          {
            title: '標準制定',
            subtitle: '引領規範，穩健發展',
            description:
              '積極參與行業標準與監管規則的研討與制定，推動RWA行業建立透明、合規的治理框架，護航行業健康、有序、可持續發展。',
            icon: 'standard',
          },
        ],
      },
    },
    contact: {
      banner: {
        headline: '聯繫我們',
        subtext: '立足香港，鏈接全球資本與數字資產生態。',
      },
      offices: {
        title: '聯絡資訊',
        labels: { address: '地址', phone: '電話' },
        locations: [
          {
            city: '香港',
            company: '盤石管理科技有限公司',
            companyEn: 'Petra Management Technology Limited',
            address: '香港特別行政區九龍柯士甸道西1號\n環球貿易廣場8653C',
            phones: ['+852 6948 3416'],
          },
          {
            city: '深圳',
            company: '深圳市盤石家族數字科技有限公司',
            companyEn: 'Shenzhen Pan Shi Family Digital Technology Co., Ltd.',
            address:
              '深圳市前海深港合作區南山街道夢海大道5188號\n前海深港夢工場北區一期G棟402L',
            phones: ['+86 139 2464 4116', '+86 139 2466 4416'],
          },
        ],
      },
      maps: {
        title: '辦公地點',
        viewButton: '查看高德地图',
        items: [
          {
            title: '香港辦公室',
            url: 'https://ditu.amap.com/search?query=%E9%A6%99%E6%B8%AF%20%E4%B9%9D%E9%BE%8D%20%E6%9F%AF%E5%A3%AB%E7%94%B8%E9%81%93%E8%A5%BF1%E8%99%9F%20%E7%92%B0%E7%90%83%E8%B2%BF%E6%98%93%E5%BB%A3%E5%A0%B4%208653C',
          },
          {
            title: '深圳辦公室',
            url: 'https://ditu.amap.com/search?query=%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%89%8D%E6%B5%B7%E6%B7%B1%E6%B8%AF%E5%90%88%E4%BD%9C%E5%8D%80%E5%8D%97%E5%B1%B1%E8%A1%97%E9%81%93%E5%A4%A2%E6%B5%B7%E5%A4%A7%E9%81%935188%E8%99%9F%E5%89%8D%E6%B5%B7%E6%B7%B1%E6%B8%AF%E5%A4%A2%E5%B7%A5%E5%A0%B4%E5%8C%97%E5%8D%80%E4%B8%80%E6%9C%9FG%E6%A3%9F402L',
          },
        ],
      },
    },
    footer: {
      rights: '© 2025 香港盤石管理科技有限公司 版權所有',
      privacy: '私隱政策',
      terms: '服務條款',
      navigation: {
        title: '導航',
      },
      legal: {
        title: '法律信息',
        links: ['私隱政策', '服務條款', '免責聲明'],
      },
      copyright: {
        title: '版權信息',
        text: '© 2025 香港盤石管理科技有限公司 版權所有',
      },
      contact: {
        title: '聯繫方式',
        hkOffice: '香港：環球貿易廣場 8653C',
        szOffice: '深圳：前海深港夢工場北區 G 棟 402L',
        phone: '+852 6948 3416',
        email: '297126626@qq.com',
      },
    },
  },
  en: {
    companyName: 'Petra Management Technology Limited',
    companyNameEn: '香港盤石管理科技有限公司',
    nav: {
      about: 'About Us',
      business: 'Business',
      solutions: 'Solutions',
      advantages: 'Advantages',
      team: 'Team & Partners',
      contact: 'Contact',
    },
    breadcrumb: {
      home: 'Home',
      ariaLabel: 'Breadcrumb',
    },
    home: {
      carousel: {
        ariaLabel: 'Home carousel',
        slogan: 'Based in Hong Kong · Connected to the Mainland · Serving the World',
      },
      aboutIntro: {
        title: 'About Us',
        subtitle: 'ABOUT US',
        paragraphs: [
          'Petra Management Technology Limited ("Petra Digital") is located on the 86th floor of the International Commerce Centre (ICC) — Hong Kong\'s tallest building — overlooking Victoria Harbour with exceptional views and premium reception facilities.',
          '"Based in Hong Kong, serving the world." With a prime location steps from West Kowloon High Speed Rail and one MTR stop from Central, we welcome mainland guests with ease and maintain close ties with leading financial institutions — delivering global asset allocation services for China\'s emerging affluent families.',
          'Petra Digital in Shenzhen Qianhai focuses on data assets and digital family office services — powered by innovation and professional expertise to build a complete digital technology business loop, helping clients integrate data assets into balance sheets and unlock new financing opportunities.',
        ],
        cta: 'Learn more >',
      },
      portals: [
        {
          title: 'About Us',
          description: 'Our mission, vision, and Hong Kong RWA strategic positioning',
          route: '/about',
        },
        {
          title: 'Business Portfolio',
          description: 'Full-chain RWA business framework and cross-border asset digitization',
          route: '/business',
        },
        {
          title: 'Solutions',
          description: 'End-to-end services from on-chain assets to global circulation',
          route: '/solutions',
        },
        {
          title: 'Core Advantages',
          description: 'Differentiated strength in technology, compliance, business model, and investment highlights',
          route: '/advantages',
        },
        {
          title: 'Team & Partners',
          description: 'Leadership team and future outlook',
          route: '/team',
        },
        {
          title: 'Contact Us',
          description: 'Hong Kong and Shenzhen office contact details',
          route: '/contact',
        },
      ],
      portalArrow: 'Learn more',
      news: {
        title: 'Latest News',
        comingSoon: 'COMING SOON',
        subtitle: 'Company news, industry insights,\nand market updates will be published here.',
      },
    },
    about: {
      headline: 'Technology Empowers Assets · Connection Creates Value',
      badge: 'A Leading Global RWA Digital Infrastructure Provider',
      intro:
        'Petra Management Technology Limited is a Hong Kong-based RWA digital technology platform with a global outlook. We serve as a blockchain digital technology provider for RWA issuance in Hong Kong — leveraging blockchain, big data, and artificial intelligence to connect real-world assets with the digital economy, delivering professional, dependable, and compliant digital asset services for institutions and enterprises.',
      banner: {
        headline: 'Based in Hong Kong · Connected to the Mainland · Serving the World',
        subtext:
          'Anchored in Hong Kong\'s international financial centre and digital asset regulatory framework, we bridge mainland markets and global capital networks to enable cross-border RWA circulation.',
      },
      valueProps: [
        {
          title: 'Solving Global Circulation Challenges for Quality Assets',
          description:
            'Using blockchain digital technology to break down geographic and regulatory barriers, providing efficient and compliant global circulation pathways for quality real-world assets.',
        },
        {
          title: 'Helping Asset Owners Maximize Value',
          description:
            'Through asset digitization, structured design, and global investor matching, we unlock the liquidity and value potential of previously illiquid assets.',
        },
        {
          title: 'Compliant, Transparent Digital Financial Products for Investors',
          description:
            'Built on a compliance-first architecture with on-chain transparency, we deliver trustworthy, auditable RWA digital financial products for professional investors.',
        },
      ],
    },
    business: {
      banner: {
        headline: 'Tech + Capital Dual Drive — Building the RWA Value Ecosystem',
      },
      anchorNav: [
        { id: 'core-positioning', label: 'Core Positioning' },
        { id: 'company-structure', label: 'Company Structure' },
        { id: 'business-segments', label: 'Business Segments' },
        { id: 'business-ecosystem', label: 'Business Ecosystem' },
        { id: 'ecosystem-synergy', label: 'Ecosystem Synergy' },
      ],
      headline: 'Business Portfolio',
      badge: 'Full RWA Lifecycle Services',
      subtitle:
        'Five integrated pillars spanning the full RWA lifecycle — asset digitization, digital asset services, technology, compliance, and global resources',
      corePositioning: {
        title: 'Core Positioning',
        boxes: [
          {
            title: 'Hong Kong Blockchain Digital Technology Provider for RWA Issuance',
            description:
              'Based in Hong Kong with a global outlook, we leverage blockchain, big data, and AI to deliver professional, dependable, and compliant digital technology services for RWA issuance and digital asset circulation.',
            variant: 'beige',
          },
          {
            title: 'A Blockchain Platform Bridging Onshore Asset Digitization and Offshore RWA Issuance',
            description:
              'Connecting onshore asset digitization with offshore RWA issuance through a dual-market linkage mechanism — building a new paradigm for cross-border RWA value circulation.',
            variant: 'white',
          },
        ],
      },
      companyStructure: {
        title: 'Company Structure',
        parent: {
          name: 'Petra Management Technology Limited',
          description:
            'An RWA digital technology platform serving as a "Digital Investment Bank" (lead advisor and execution partner), responsible in Hong Kong for contracting and implementing RWA tokenization projects for quality assets.',
        },
        columns: [
          {
            title: 'Technology Services',
            brand: 'Fin-EasyLinks',
            companies: [
              {
                name: 'Hong Kong Rongyilian Service Technology Co., Ltd. (100% owned)',
                description:
                  'The group\'s core technology entity, responsible for blockchain infrastructure R&D, RWA asset token minting, issuance, and ongoing operations — providing essential technical support across the group.',
              },
              {
                name: 'Shenzhen Rongyilian Service Technology Co., Ltd. (100% newly established)',
                description:
                  'Shenzhen Rongyilian focuses on blockchain technology application services, delivering digital system development and on-chain data technology for traditional physical asset projects to achieve "asset on-chain digitization".',
              },
            ],
          },
          {
            title: 'Digital Investment Bank',
            companies: [
              {
                name: 'Hong Kong RWA Digital Asset Investment Services Company (100% newly established)',
                description:
                  'Focused on investment and financing services in the Real World Asset (RWA) digitization space, accelerating RWA project token issuance and asset value maximization — driving the group\'s second growth curve.',
              },
            ],
          },
        ],
        projects: [
          { name: 'New Energy Project' },
          { name: 'Guangdong Nanyu Project' },
          {
            name: 'Hong Kong Shiguangcang Chenpi Genesis Technology Co., Ltd. (100% newly established)',
            subItems: ['Xinhui Chenpi RWA Project'],
          },
          { name: 'Hainan Haiwu Project' },
          { name: 'More Quality Projects' },
        ],
      },
      businessSegments: {
        title: 'Business Segments',
        segments: [
          {
            title: 'Segment 1: Blockchain Technology Applications',
            description:
              'Positioned as the group\'s technical cornerstone and service engine, focusing on underlying technology R&D to provide a secure, efficient, and scalable technical support system for the entire ecosystem.',
            icon: 'blockchain',
            subItems: [
              {
                title: 'Full-Stack Cross-Chain Development',
                description:
                  'Professional blockchain application development and solution consulting, covering everything from underlying architecture to upper-layer applications.',
              },
              {
                title: 'Asset Digitization Empowerment',
                description:
                  'Building intellectual property and patent portfolios to provide core technical support for the compliance and tokenization of physical and digital assets, innovating data asset applications.',
              },
            ],
          },
          {
            title: 'Segment 2: RWA Digital Asset Services',
            description:
              'Positioned as the group\'s capital outreach and ecosystem accelerator, linking global resources through capital operations to drive quality project execution and value release.',
            icon: 'rwa',
            subItems: [
              {
                title: '"Token + Equity" Linked Investment',
                description:
                  'A strategic investment model combining equity and tokens, deeply binding quality projects to achieve mutual empowerment of capital and industry.',
              },
              {
                title: 'Full-Cycle Incubation & Operations',
                description:
                  'Incubating high-potential RWA projects, supporting compliant offshore token issuance, opening value circulation pathways, and maximizing asset returns.',
              },
            ],
          },
        ],
        footer:
          'The technology segment builds a solid foundation, while the asset segment expands capital boundaries — the two collaborate and empower each other to form a strategic closed loop for sustainable group development.',
      },
      businessEcosystem: {
        title: 'Business Ecosystem',
        points: [
          {
            title: 'Blockchain Technology at the Core',
            description:
              'The platform takes blockchain technology as its core, utilizing its immutable and traceable characteristics to provide solid technical support for business operations, ensuring data security and transaction credibility.',
          },
          {
            title: 'Integrating Hong Kong Listed Company Resources',
            description:
              'The platform actively integrates the resources of Hong Kong listed companies, leveraging their advantages to achieve resource sharing and complementary strengths, laying the foundation for building a new digital finance ecosystem.',
          },
          {
            title: 'Building a New Digital Finance Ecosystem of "Onshore Digital Assets + Offshore Stock-Token Combination"',
            description:
              'By building a new digital finance ecosystem of "onshore digital assets + offshore stock-token combination", it achieves effective connection of domestic and foreign financial resources, provides investors with more diversified investment choices, and promotes the global circulation of assets.',
          },
        ],
      },
      ecosystemSynergy: {
        title: 'Ecosystem Synergy',
        intro:
          'The platform\'s two major business segments do not operate in isolation — they are deeply integrated and mutually supportive, forming a strong internal synergy and building a highly efficient, self-circulating business ecosystem.',
        boxes: [
          {
            title: 'Technology Services Empower Investment',
            description:
              'The technology segment provides underlying technical support for investment projects, ensuring safe and efficient asset digitization; at the same time, actual technical challenges encountered in investment business reversely drive targeted R&D in the technology segment, strengthening technical barriers.',
            icon: 'network',
          },
          {
            title: 'Investment Business Feeds Back to Technology Services',
            description:
              'Successfully incubated investment projects become benchmark cases for the technology segment, greatly enhancing market credibility; continuous cash flow from investment returns provides stable and sufficient funding for technology R&D, forming a positive cycle.',
            icon: 'growth',
          },
        ],
        conclusion:
          'Core conclusion: This "technology + capital" dual-empowerment closed-loop ecosystem not only achieves optimal resource allocation but also builds a core competitive advantage that is difficult to replicate and highly defensible within the industry.',
      },
      items: [
        {
          title: 'Asset Digitization',
          description:
            'End-to-end tokenization services for real-world assets — including equity, debt, revenue rights, and physical assets. From valuation and structuring to on-chain representation, we help assets enter the digital world compliantly.',
        },
        {
          title: 'RWA Digital Asset Services',
          description:
            'One-stop digital asset services for institutions and professional investors — covering RWA issuance, custody, liquidity management, and investor relations to connect asset originators with capital markets.',
        },
        {
          title: 'Technology Services',
          description:
            'Core technology capabilities built on blockchain, big data, and AI — including chain infrastructure, smart contract auditing, data platforms, and AI-powered risk models to ensure secure and efficient platform operations.',
        },
        {
          title: 'Compliance Architecture',
          description:
            'Regulatory frameworks aligned with Hong Kong and international standards — covering KYC/AML, disclosure, investor suitability, and cross-border compliance to build a sustainable, audit-ready foundation for RWA business.',
        },
        {
          title: 'Global Resource Integration',
          description:
            'Leveraging Hong Kong\'s position as an international financial hub, we connect clients with global law firms, custodians, exchanges, technology partners, and industry resources for cross-border RWA solutions.',
        },
      ],
    },
    solutions: {
      banner: {
        headline: 'End-to-End RWA Solutions',
        subtext:
          'From asset verification and on-chain digitization to RWA issuance and global circulation — a full-lifecycle service system for real-world asset digitization.',
      },
      closedLoop: {
        title: 'Full-Chain Operational Loop',
        steps: [
          {
            label: 'Onshore',
            title: 'A Proven Case of Credible On-Chain Agricultural Asset Digitization',
            description:
              'Xinhui Chenpi serves as a global benchmark for agricultural asset digitization — achieving digital identity verification, Shenzhen Data Exchange listing, and regulatory compliance to unlock liquidity for illiquid assets.',
          },
          {
            label: 'Offshore',
            title: 'NFT Pickup Cards · Global RWA Issuance · DAT Treasury Services',
            bullets: [
              'NFT digital pickup cards for global investors',
              'Compliant RWA token global issuance',
              'DAT digital asset treasury custody',
            ],
            description:
              'Through our Hong Kong digital technology platform, onshore verified assets extend to offshore capital markets as compliant, transparent, and tradable digital financial products.',
          },
          {
            label: 'Closed Loop',
            title: 'The Complete Path from Data to Value',
            flow: [
              'Data Verification',
              'Asset Digitization',
              'HK RWA Issuance',
              'Listed Company Partnership',
              'Stock-Token Integration',
            ],
            description:
              'Following this closed-loop logic ensures a seamless transition from data verification to value realization — maximizing asset value and liquidity.',
          },
        ],
      },
      entryButtons: [
        { id: 'chenpi-project', label: 'Xinhui Chenpi Phase I Launch' },
        { id: 'business-expansion', label: 'Business Expansion & Replication' },
      ],
      chenpiProject: {
        title: 'Xinhui Chenpi Phase I Launch',
        cards: [
          {
            title: 'Architecture',
            headline: 'Issuance – Custody – Supervision Trinity',
            description:
              'Underlying assets comprise 200,000 catties of Xinhui Chenpi, with ownership transferred to a Hong Kong SPV via trade procurement — ensuring standardized operations and asset security.',
          },
          {
            title: 'Token Design',
            headline: '10 Million CP_RWA Tokens',
            description:
              'Each token represents 10g of Chenpi, conferring pickup rights and value-added returns under Hong Kong SFC regulatory framework, issued to qualified offshore investors.',
          },
          {
            title: 'Compliance',
            headline: 'State-Owned Storage + Cross-Border Audit',
            description:
              'Assets stored in China Supply and Marketing state-owned warehouses with verifiable on-chain traceability — open exclusively to qualified offshore individual and institutional investors.',
          },
        ],
        officialWebsite: {
          sectionTitle: 'Project Website',
          previewAlt: 'Chenpi Genesis chenpigenesis.io website preview',
          title: 'Chenpi Genesis · 陳皮紀元',
          subtitle: 'Global First Appreciating RWA: Xinhui Chenpi Genesis NFT (2025)',
          description:
            'Put time in your wallet — each NFT is 1:1 backed by authentic Xinhui Chenpi with on-chain verification, state-owned custody, and full compliance disclosure.',
          cta: 'Visit Official Website',
          url: 'https://chenpigenesis.io/',
        },
      },
      expansion: {
        title: 'Business Expansion & Replication',
        phases: [
          {
            period: 'Short-term',
            timeframe: '2026 H1',
            description:
              'Launch the Chenpi digital trading and storage platform, complete USD 4M financing, and acquire a Hong Kong listed financial company shell to accelerate expansion.',
          },
          {
            period: 'Mid-term',
            timeframe: '2026 H2 – 2027 H1',
            description:
              'Drive Chenpi RWA approval and listing, while initiating 2–3 additional high-quality RWA projects (e.g. new energy, mining) using the stock-token integration model.',
          },
          {
            period: 'Long-term',
            timeframe: '2+ Years',
            description:
              'Incubate 5–10 listed projects via stock-token integration, achieve company market value exceeding HKD 10B, and build 5 benchmark cases at the 10B level.',
          },
        ],
      },
    },
    advantages: {
      banner: {
        headline: 'Core Advantages',
        subtext:
          'Deep integration of technology, capital, and compliance — building defensible competitive moats in RWA.',
      },
      coreTitle: 'Core Advantages',
      pillars: [
        {
          title: 'Model Innovation',
          description:
            'The only blockchain digital technology platform with dual-drive capability in onshore asset digitization and offshore RWA listing — having completed the full-chain closed loop with first-mover advantage and adaptability across market needs.',
          icon: 'innovation',
        },
        {
          title: 'Technology & Compliance',
          description:
            'Built on mainstream public chains such as Ethereum, with both onshore and offshore compliance qualifications — ensuring safe, legal, and reliable operations that attract institutional and professional investors.',
          icon: 'compliance',
        },
        {
          title: 'Replicability',
          description:
            'Our technology standards and assetization model can be rapidly replicated across vertical industries — enabling strong business expansion and scalable market share growth.',
          icon: 'replication',
        },
      ],
      investmentHighlights: {
        title: 'Investment Highlights',
        items: [
          {
            title: 'Blue Ocean Market',
            description:
              'According to Boston Consulting Group, the trillion-dollar RWA market offers vast potential — projected to reach USD 16 trillion by 2030, representing 10% of global GDP and over 50x growth from 2022, providing enormous market opportunity for the company.',
            icon: 'market',
          },
          {
            title: 'Scarce Model',
            description:
              'The company operates a dual-track model with a full-chain closed loop of "onshore asset digitization + offshore RWA listing" — a unique approach that delivers strong competitive advantages and growth potential.',
            icon: 'model',
          },
          {
            title: 'Proven Track Record',
            description:
              'The Xinhui Chenpi project has been successfully launched with an issuance–custody–supervision integrated architecture. Tokens issued are regulated by Hong Kong SFC with compliance safeguards, validating the feasibility of the business model.',
            icon: 'verified',
          },
          {
            title: 'Replicable',
            description:
              'The company\'s technology, standards, and assetization model can be replicated across specialty industries, with clear short-, medium-, and long-term expansion plans including trading platform launches and listing project advancement.',
            icon: 'scale',
          },
          {
            title: 'Clear Exit Path',
            description:
              'The company has a defined pathway to Hong Kong stock market listing, providing investors with a clear exit mechanism that reduces investment risk and enhances investment appeal.',
            icon: 'exit',
          },
        ],
      },
    },
    team: {
      banner: {
        headline: 'Team & Partnership',
        subtext: 'Elite talent and global partners building the RWA digital finance ecosystem',
      },
      management: {
        title: 'Core Management Team',
        members: [
          {
            name: 'Li Gaosheng',
            role: 'Founder & CEO',
            highlights: [
              'Li Gaosheng holds a bachelor\'s degree from Renmin University and a master\'s from Fudan University. He is a Hong Kong Type 4/9 asset management licensed RO with 20 years of experience in finance and blockchain, playing a key role in the company\'s strategic planning and operational management.',
            ],
          },
          {
            name: 'Liu Yiyun',
            role: 'Co-Chairman',
            highlights: [
              'Liu Yiyun graduated from Xiamen University and currently serves as Vice Chairman of a listed A-share company. A seasoned industrial entrepreneur and expert in industrial capital operations, he brings full-chain practical experience in corporate management, capital operations, asset restructuring, distress resolution, and industrial M&A across A-share and Hong Kong listed companies.',
            ],
          },
          {
            name: 'Prof. Cao Zhaoyang',
            role: 'Chief AI Officer',
            highlights: [
              'Professor Cao Zhaoyang is a visiting professor at HKU and other institutions. With deep academic expertise, he provides technical support and strategic guidance for the company\'s development in AI + blockchain, driving technology R&D.',
            ],
          },
          {
            name: 'Dr. Yu Gang',
            role: 'CIO',
            highlights: [
              'Dr. Yu Gang previously worked at JPMorgan and serves as Co-Chairman of the Hong Kong Blockchain Association. With extensive industry experience and a broad network, he provides strong support for the company\'s investment decisions and industry partnerships.',
            ],
          },
        ],
      },
      outlook: {
        title: 'Future Outlook',
        summary:
          'Looking ahead, Hong Kong Petra Technology Group will continue to deepen its presence in RWA, striving to become a key infrastructure provider in the global wave of asset digitization — driving value interconnection through technological innovation and building an open, credible, and efficient new digital finance ecosystem.',
        pillars: [
          {
            title: 'Technology Deepening',
            subtitle: 'Explore Frontiers, Integrate Innovation',
            description:
              'Sustained core R&D investment, deep exploration of AI and blockchain integration, tackling next-generation public chain performance optimization and security enhancement, and solidifying the underlying foundation for asset digitization.',
            icon: 'tech',
          },
          {
            title: 'Ecosystem Expansion',
            subtitle: 'Link Globally, Open Win-Win',
            description:
              'Expanding the digital map of real-world assets across more diverse asset types; actively building deep strategic partnerships with leading global financial institutions and technology partners to co-create a thriving ecosystem.',
            icon: 'ecosystem',
          },
          {
            title: 'Standard Setting',
            subtitle: 'Lead Norms, Steady Development',
            description:
              'Actively participating in the discussion and formulation of industry standards and regulatory rules, promoting a transparent and compliant governance framework for the RWA industry, and safeguarding its healthy, orderly, and sustainable development.',
            icon: 'standard',
          },
        ],
      },
    },
    contact: {
      banner: {
        headline: 'Contact Us',
        subtext: 'Based in Hong Kong — connecting global capital and the digital asset ecosystem.',
      },
      offices: {
        title: 'Contact Information',
        labels: { address: 'Address', phone: 'Phone' },
        locations: [
          {
            city: 'Hong Kong',
            company: 'Petra Management Technology Limited',
            companyEn: 'Petra Management Technology Limited',
            address:
              'Unit 8653C, International Commerce Centre\n1 Austin Road West, Kowloon\nHong Kong SAR',
            phones: ['+852 6948 3416'],
          },
          {
            city: 'Shenzhen',
            company: 'Shenzhen Pan Shi Family Digital Technology Co., Ltd.',
            companyEn: 'Shenzhen Pan Shi Family Digital Technology Co., Ltd.',
            address:
              'Room 402L, Building G, Phase 1\nQianhai Shenzhen-Hong Kong Dream Workshop (North)\n5188 Meng Hai Avenue, Nanshan, Qianhai\nShenzhen, China',
            phones: ['+86 139 2464 4116', '+86 139 2466 4416'],
          },
        ],
      },
      maps: {
        title: 'Office Locations',
        viewButton: 'View on Amap',
        items: [
          {
            title: 'Hong Kong Office',
            url: 'https://ditu.amap.com/search?query=%E9%A6%99%E6%B8%AF%20%E4%B9%9D%E9%BE%8D%20%E6%9F%AF%E5%A3%AB%E7%94%B8%E9%81%93%E8%A5%BF1%E8%99%9F%20%E7%92%B0%E7%90%83%E8%B2%BF%E6%98%93%E5%BB%A3%E5%A0%B4%208653C',
          },
          {
            title: 'Shenzhen Office',
            url: 'https://ditu.amap.com/search?query=%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%89%8D%E6%B5%B7%E6%B7%B1%E6%B8%AF%E5%90%88%E4%BD%9C%E5%8D%80%E5%8D%97%E5%B1%B1%E8%A1%97%E9%81%93%E5%A4%A2%E6%B5%B7%E5%A4%A7%E9%81%935188%E8%99%9F%E5%89%8D%E6%B5%B7%E6%B7%B1%E6%B8%AF%E5%A4%A2%E5%B7%A5%E5%A0%B4%E5%8C%97%E5%8D%80%E4%B8%80%E6%9C%9FG%E6%A3%9F402L',
          },
        ],
      },
    },
    footer: {
      rights: '© 2025 Petra Management Technology Limited. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      navigation: {
        title: 'Navigation',
      },
      legal: {
        title: 'Legal',
        links: ['Privacy Policy', 'Terms of Service', 'Disclaimer'],
      },
      copyright: {
        title: 'Copyright',
        text: '© 2025 Petra Management Technology Limited. All rights reserved.',
      },
      contact: {
        title: 'Contact',
        hkOffice: 'Hong Kong: ICC Tower, Unit 8653C',
        szOffice: 'Shenzhen: Qianhai Dream Workshop, Building G, 402L',
        phone: '+852 6948 3416',
        email: '297126626@qq.com',
      },
    },
  },
}
