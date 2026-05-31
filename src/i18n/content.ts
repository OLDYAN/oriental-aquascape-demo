import type { Product } from '../data/products';
import type { ConsultationSelections } from '../utils/recommendations';
import type { Language } from './types';

export const siteContent = {
  en: {
    metaTitle: 'Oriental Aquascape - Eastern Aquatic Living',
    accessibility: {
      skipLink: 'Skip to main content',
      primaryActionsLabel: 'Primary homepage actions',
      brandPillarsLabel: 'Brand pillars',
    },
    header: {
      brand: 'Oriental Aquascape',
      homeAria: 'Oriental Aquascape home',
      navLabel: 'Primary navigation',
      cart: 'Cart',
      cartAria: 'Open cart preview',
      menu: 'Menu',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
      language: '中文',
      languageAria: 'Switch language to Chinese',
      nav: [
        { route: 'home', href: '#/', label: 'Vision' },
        { route: 'shop', href: '#/shop', label: 'Shop' },
        { route: 'consultation', href: '#/consultation', label: 'Consultation' },
        { route: 'story', href: '#/story', label: 'Story' },
        { route: 'lookbook', href: '#/lookbook', label: 'Lookbook' },
      ],
    },
    hero: {
      title: 'Eastern Aquatic Living',
      body: 'Living water, Heritage Aquariums, refined decorative pieces, and AI-assisted consultation for contemporary spaces.',
      shopCta: 'Explore Shop',
      consultationCta: 'Begin Consultation',
      label: 'Living water',
      caption: 'Vessel, waterline, jade, and intelligence layer',
    },
    studio: {
      kicker: 'Studio statement',
      title:
        'Oriental Aquascape works across Eastern aquascapes, aquatic life, Heritage Aquariums, vessels, decorative pieces, and spatial consultation.',
      body: 'The practice treats water as atmosphere, material, symbol, and living system.',
    },
    categories: {
      kicker: 'What the platform works with',
      title: 'A minimal index for living water and cultural material.',
      body: 'Categories stay quiet and legible, with room for shop, consultation, and platform workflows.',
      selected: 'Selected focus',
      partnershipNote:
        'B2B Partnership: Future To B workflows for designers, hospitality, offices, and partners.',
      items: [
        {
          id: 'eastern-aquascapes',
          title: 'Eastern Aquascapes',
          caption: 'Living water compositions for contemporary spaces.',
        },
        {
          id: 'high-end-ornamental-fish',
          title: 'High-End Ornamental Fish',
          caption: 'Future category pending sourcing, care, and logistics standards.',
        },
        {
          id: 'aquatic-plants',
          title: 'Aquatic Plants',
          caption: 'Curated planting direction for refined aquascapes.',
        },
        {
          id: 'aquarium-equipment',
          title: 'Aquarium Equipment',
          caption: 'Quiet infrastructure for stable living systems.',
        },
        {
          id: 'heritage-aquariums',
          title: 'Heritage Aquariums',
          caption: 'Craft techniques rooted in intangible cultural heritage traditions.',
        },
        {
          id: 'vessels-decorative-pieces',
          title: 'Vessels & Decorative Pieces',
          caption: 'Ceramic, jade, and other decorative pieces for spatial atmosphere.',
        },
        {
          id: 'spatial-consultation',
          title: 'I Ching & Feng Shui Spatial Consultation',
          caption: 'Cultural, spatial, symbolic, and aesthetic consultation.',
        },
        {
          id: 'ai-assisted-platform',
          title: 'AI-Assisted Platform',
          caption: 'Discovery and preparation tools with human judgment at the center.',
        },
      ],
    },
    lookbookPreview: {
      kicker: 'Concept studies',
      title: 'Quiet studies for future spatial direction.',
      body: 'These are concept studies for tone, composition, and material rhythm.',
      cta: 'View Lookbook',
      studyCaptionPrefix: 'Study',
      studies: [
        {
          id: 'eastern-courtyard-water',
          title: 'Eastern Courtyard Water',
          label: 'Concept Study',
          caption: 'A quiet water atmosphere for residential and hospitality spaces.',
        },
        {
          id: 'jade-stone-composition',
          title: 'Jade Stone Composition',
          label: 'Concept Study',
          caption: 'Stone, vessel, and planted form in restrained balance.',
        },
        {
          id: 'heritage-vessel-aquascape',
          title: 'Heritage Vessel Aquascape',
          label: 'Concept Study',
          caption: 'A vessel-led study rooted in craft techniques and daily ritual.',
        },
      ],
    },
    commercePreview: {
      kicker: 'Shop preview',
      title: 'Curated product worlds, not a marketplace grid.',
      body: 'A static catalog direction for Heritage Aquariums, aquatic plants, equipment, and decorative pieces.',
      cta: 'Open Shop',
      items: [
        {
          title: 'Heritage Aquariums',
          description: 'Vessel-led display directions for water, material, and daily ritual.',
        },
        {
          title: 'Aquatic Plants',
          description: 'Plant selections for calm aquascape composition and atmosphere.',
        },
        {
          title: 'Aquarium Equipment',
          description: 'Quiet infrastructure for stable, visually restrained living systems.',
        },
        {
          title: 'Decorative Pieces',
          description: 'Ceramic, jade, and other decorative pieces for spatial presence.',
        },
      ],
    },
    platform: {
      kicker: 'AI-Assisted Platform',
      title: 'AI supports discovery, matching, and preparation.',
      bodyA: 'Human judgment remains central.',
      bodyB:
        'Future tools will help clients, designers, and partners navigate styles, products, consultation, and supply workflows.',
      label: 'Platform layer',
      caption: 'Discovery, matching, preparation',
    },
    consultationTeaser: {
      kicker: 'Consultation',
      title: 'I Ching & Feng Shui Spatial Consultation',
      body: 'Consultation considers placement, balance, material, atmosphere, and symbolic meaning. It does not provide financial, medical, or personal outcome guidance.',
      cta: 'Build a Consultation Brief',
      diagramLabel: 'Consultation considerations',
      visualLabel: 'Spatial diagram',
      visualCaption: 'Placement, balance, material',
      considerations: ['Placement', 'Balance', 'Material', 'Atmosphere', 'Symbolic meaning'],
      finalTitle: 'Begin a living water project.',
      finalPrimary: 'Begin Consultation',
      finalSecondary: 'View Lookbook',
    },
    pages: {
      shop: {
        title: 'Curated Catalog Preview',
        body: 'A dedicated static catalog for planning Heritage Aquariums, aquatic plants, equipment, and refined decorative pieces.',
        note: 'Demo-only catalog. Checkout remains disabled.',
        visualLabel: 'Catalog study',
        visualCaption: 'Curated static commerce interface',
      },
      consultation: {
        title: 'Consultation Brief Builder',
        body: 'A design-led interface for framing cultural, spatial, symbolic, and aesthetic direction before formal consultation.',
        note: 'Static recommendation mock with no submission, backend, or AI API.',
        visualLabel: 'Consultation study',
        visualCaption: 'Placement, material, atmosphere',
      },
      story: {
        title: 'A Contemporary Practice of Eastern Aquatic Living',
        body: 'Oriental Aquascape brings water, vessels, cultural material, and contemporary intelligence into refined spaces.',
        visualLabel: 'Brand story',
        visualCaption: 'Water, vessel, material',
        sections: [
          {
            title: 'Living Water',
            body: 'The platform treats aquatic life as atmosphere, material, symbol, and living system.',
          },
          {
            title: 'Heritage Aquariums',
            body: 'Heritage aquariums are crafted through intangible cultural heritage techniques, connecting vessel, water, and daily ritual.',
          },
          {
            title: 'Vessels & Decorative Pieces',
            body: 'Ceramic, jade, and other decorative pieces support a quieter spatial rhythm.',
          },
          {
            title: 'AI-Assisted Platform',
            body: 'AI supports discovery and preparation while human judgment remains central.',
          },
        ],
      },
      lookbook: {
        title: 'Concept Studies',
        body: 'A concise lookbook of visual studies for future homes, studios, hospitality spaces, and B2B direction.',
        visualLabel: 'Lookbook',
        visualCaption: 'Concept study index',
      },
    },
    shop: {
      kicker: 'Static catalog prototype',
      title: 'Curated Catalog Preview',
      body: 'A prototype catalog for Heritage Aquariums, aquatic plants, equipment, and decorative pieces. Checkout is not enabled.',
      filtersLabel: 'Product category filters',
      searchLabel: 'Search products',
      searchPlaceholder: 'Search vessels, plants, equipment...',
      cartNote: 'Demo-only cart and disabled checkout',
      itemLabel: 'catalog items',
      emptyTitle: 'No matching catalog items.',
      emptyBody: 'Try a broader search or return to all categories.',
      filters: {
        All: 'All',
        'Heritage Aquariums': 'Heritage Aquariums',
        'Aquatic Plants': 'Aquatic Plants',
        'Aquarium Equipment': 'Aquarium Equipment',
        'Vessels & Decorative Pieces': 'Vessels & Decorative Pieces',
        Consultation: 'Consultation',
        'Future Categories': 'Future Categories',
      },
    },
    product: {
      add: 'Add to Cart',
      future: 'Future Category',
      consultationRequired: 'Consultation Required',
      details: 'Details',
      futureCaption: 'Future category',
      openDetails: 'Open detail drawer for',
      addAria: 'Add to cart',
      reviewAria: 'Review availability for',
      readDetails: 'Read details for',
      close: 'Close product details',
      closeButton: 'Close',
      material: 'Material',
      useCase: 'Use case',
      availability: 'Availability',
      tags: 'Tags',
      prototypeNote:
        'This is a static prototype. It does not process payments, reserve inventory, or ship products.',
      futureDisabled: 'Future category / consultation required',
    },
    cart: {
      kicker: 'Demo cart',
      title: 'Cart Preview',
      close: 'Close cart',
      closeButton: 'Close',
      note: 'This demo does not process payments, reserve inventory, or ship products.',
      itemsLabel: 'Cart items',
      each: 'each',
      subtotal: 'Subtotal',
      decrease: 'Decrease quantity for',
      increase: 'Increase quantity for',
      remove: 'Remove',
      removeAria: 'Remove from cart',
      total: 'Total',
      quantity: 'Quantity',
      clear: 'Clear Cart',
      empty: 'Your prototype cart is empty.',
      checkout: 'Checkout unavailable in prototype',
    },
    builder: {
      kicker: 'AI-Assisted Discovery',
      title: 'Build a Consultation Brief',
      body: 'A static prototype that helps frame an initial direction before a formal consultation.',
      preferencesLabel: 'Consultation preferences',
      progressSuffix: 'preferences selected',
      reset: 'Reset',
      visualLabel: 'AI-Assisted Discovery Prototype',
      outputKicker: 'Consultation Brief',
      outputTitle: 'Project Direction',
      projectSetting: 'Project setting',
      designDirection: 'Design Direction',
      primaryFocus: 'Primary focus',
      suggestedNextStep: 'Suggested next step',
      recommendedCategories: 'Recommended categories',
      conceptDirection: 'Suggested concept direction',
      spatialNote: 'Spatial Consultation note',
      prototypeNote:
        'This prototype does not submit a request or create a final design proposal. It is a static recommendation prototype for early project framing.',
      copy: 'Copy brief',
      copied: 'Brief copied.',
      manual: 'Clipboard is unavailable. Copy the brief text manually.',
      fallbackSpace: 'Select a space type',
      fallbackDirection: 'Select a preferred direction',
      fallbackFocus: 'Select a primary interest',
      optionGroups: [
        {
          id: 'spaceType',
          label: 'Space type',
          options: [
            { value: 'Residential interior', label: 'Residential interior' },
            { value: 'Office / studio', label: 'Office / studio' },
            { value: 'Restaurant / hospitality', label: 'Restaurant / hospitality' },
            { value: 'Retail / showroom', label: 'Retail / showroom' },
            { value: 'Designer / B2B project', label: 'Designer / B2B project' },
          ],
        },
        {
          id: 'preferredDirection',
          label: 'Preferred direction',
          options: [
            { value: 'Minimal Eastern aquascape', label: 'Minimal Eastern aquascape' },
            { value: 'Heritage vessel composition', label: 'Heritage vessel composition' },
            { value: 'Plant-focused living water', label: 'Plant-focused living water' },
            { value: 'Equipment-forward modern setup', label: 'Equipment-forward modern setup' },
            {
              value: 'Decorative pieces and spatial atmosphere',
              label: 'Decorative pieces and spatial atmosphere',
            },
            { value: 'AI-assisted product discovery', label: 'AI-assisted product discovery' },
          ],
        },
        {
          id: 'primaryInterest',
          label: 'Primary interest',
          options: [
            { value: 'Aquascaping design', label: 'Aquascaping design' },
            { value: 'Heritage Aquariums', label: 'Heritage Aquariums' },
            { value: 'Aquatic plants', label: 'Aquatic plants' },
            { value: 'Aquarium equipment', label: 'Aquarium equipment' },
            { value: 'Vessels & Decorative Pieces', label: 'Vessels & Decorative Pieces' },
            {
              value: 'I Ching & Feng Shui Spatial Consultation',
              label: 'I Ching & Feng Shui Spatial Consultation',
            },
            { value: 'B2B Partnership', label: 'B2B Partnership' },
          ],
        },
        {
          id: 'timeline',
          label: 'Timeline',
          options: [
            { value: 'Exploring', label: 'Exploring' },
            { value: '1-3 months', label: '1-3 months' },
            { value: '3-6 months', label: '3-6 months' },
            { value: 'B2B planning cycle', label: 'B2B planning cycle' },
          ],
        },
        {
          id: 'budgetRange',
          label: 'Budget range',
          options: [
            { value: 'Concept only', label: 'Concept only' },
            { value: 'Entry project', label: 'Entry project' },
            { value: 'Premium project', label: 'Premium project' },
            { value: 'Commercial / partnership', label: 'Commercial / partnership' },
          ],
        },
        {
          id: 'maintenancePreference',
          label: 'Maintenance preference',
          options: [
            { value: 'Low-maintenance', label: 'Low-maintenance' },
            { value: 'Balanced', label: 'Balanced' },
            {
              value: 'High-design / specialist maintenance',
              label: 'High-design / specialist maintenance',
            },
            { value: 'Not sure yet', label: 'Not sure yet' },
          ],
        },
      ],
    },
    footer: [
      'Heritage Aquariums',
      'Vessels & Decorative Pieces',
      'AI-Assisted Platform',
      'Story',
      'Lookbook',
      'Consultation',
    ],
  },
  zh: {
    metaTitle: 'Oriental Aquascape - 东方美学水族空间',
    accessibility: {
      skipLink: '跳到主要内容',
      primaryActionsLabel: '首页主要操作',
      brandPillarsLabel: '品牌内容方向',
    },
    header: {
      brand: 'Oriental Aquascape',
      homeAria: 'Oriental Aquascape 首页',
      navLabel: '主导航',
      cart: '购物车',
      cartAria: '打开购物车',
      menu: '菜单',
      menuOpen: '打开导航菜单',
      menuClose: '关闭导航菜单',
      language: 'EN',
      languageAria: '切换语言为英文',
      nav: [
        { route: 'home', href: '#/', label: '首页' },
        { route: 'shop', href: '#/shop', label: '精选' },
        { route: 'consultation', href: '#/consultation', label: '咨询' },
        { route: 'story', href: '#/story', label: '品牌' },
        { route: 'lookbook', href: '#/lookbook', label: '图录' },
      ],
    },
    hero: {
      title: '东方美学水族空间',
      body: '以一泓活水入室，安放器形、草木、石意与当代方法，让空间在留白中生息。',
      shopCta: '浏览精选',
      consultationCta: '生成咨询简报',
      label: '一泓活水',
      caption: '器形、水线、玉石与空间线索',
    },
    studio: {
      kicker: '品牌陈述',
      title: 'Oriental Aquascape 以东方水景、水生系统、古法器缸、器皿陈设与空间咨询，构建适合当代室内的活水体验。',
      body: '水不只是景观，也是气息、材料、象征与日常照拂。我们让它以克制、清晰的方式进入当代空间。',
    },
    categories: {
      kicker: '方向索引',
      title: '围绕活水、器物与空间体验的清晰索引。',
      body: '分类保持疏朗，让精选商品、空间咨询与后续合作流程各有明确位置。',
      selected: '所选方向',
      partnershipNote: '商业合作：未来可面向设计师、酒店、办公空间与供应伙伴，建立更完整的 B2B 协作流程。',
      items: [
        {
          id: 'eastern-aquascapes',
          title: '东方水景',
          caption: '以水、石、草木与留白，构成适合当代空间的安静景象。',
        },
        {
          id: 'high-end-ornamental-fish',
          title: '高端观赏鱼',
          caption: '未来类目，需先明确来源、养护标准与运输条件。',
        },
        {
          id: 'aquatic-plants',
          title: '水生植物',
          caption: '以疏密、层次与生长节奏，完善水景的生命质感。',
        },
        {
          id: 'aquarium-equipment',
          title: '水族设备',
          caption: '隐入空间的稳定基础，让水体运行安静有序。',
        },
        {
          id: 'heritage-aquariums',
          title: '古法鱼缸',
          caption: '承袭传统器缸语汇，连接器形、水体与当代生活。',
        },
        {
          id: 'vessels-decorative-pieces',
          title: '器皿与装饰品',
          caption: '陶瓷、玉石与陈设小品，形成克制而有余韵的空间层次。',
        },
        {
          id: 'spatial-consultation',
          title: '易学风水空间咨询',
          caption: '以文化、空间、象征与审美为边界，讨论摆放、平衡与气氛。',
        },
        {
          id: 'ai-assisted-platform',
          title: 'AI 辅助平台',
          caption: '辅助发现、筛选与方案准备，最终取舍仍回到人的判断。',
        },
      ],
    },
    lookbookPreview: {
      kicker: '概念研究',
      title: '为未来空间方向保留几组克制的视觉研究。',
      body: '每一则研究都记录气息、构成、材料与水线之间的关系。',
      cta: '浏览图录',
      studyCaptionPrefix: '研究',
      studies: [
        {
          id: 'eastern-courtyard-water',
          title: '东方庭院之水',
          label: '概念研究',
          caption: '为住宅与公共空间铺陈一处安静的水意。',
        },
        {
          id: 'jade-stone-composition',
          title: '玉石构成',
          label: '概念研究',
          caption: '石、器与草木在克制中相互照映。',
        },
        {
          id: 'heritage-vessel-aquascape',
          title: '古法鱼缸水景',
          label: '概念研究',
          caption: '以器形为心，连接手作语汇与日常观水。',
        },
      ],
    },
    commercePreview: {
      kicker: '精选预览',
      title: '以策展方式呈现精选商品，而不是堆叠货架。',
      body: '静态目录涵盖古法器缸、水生植物、水族设备与器皿装饰品，便于先理解风格、材料与使用场景。',
      cta: '进入精选',
      items: [
        {
          title: '古法鱼缸',
          description: '以器形为心，连接水、材料与日常观照。',
        },
        {
          title: '水生植物',
          description: '在水中生长的层次，补足景象的柔软气息。',
        },
        {
          title: '水族设备',
          description: '稳定而克制，尽量隐入空间的运行基础。',
        },
        {
          title: '器皿与装饰品',
          description: '陶瓷、玉石与陈设小品，让空间多一层静意。',
        },
      ],
    },
    platform: {
      kicker: 'AI 辅助平台',
      title: '以工具辅助发现、匹配与准备。',
      bodyA: '人的判断始终在前。',
      bodyB: '未来工具将帮助客户、设计师与合作伙伴梳理风格、产品、咨询与供应流程。',
      label: '辅助层',
      caption: '发现、匹配、准备',
    },
    consultationTeaser: {
      kicker: '空间咨询',
      title: '易学风水空间咨询',
      body: '咨询仅从文化、空间、象征与审美角度讨论摆放、平衡、材料与气氛，不提供财务、医疗或个人结果判断。',
      cta: '生成咨询简报',
      diagramLabel: '咨询要点',
      visualLabel: '空间图式',
      visualCaption: '摆放、平衡、材料',
      considerations: ['摆放', '平衡', '材料', '气氛', '象征'],
      finalTitle: '从一处活水开始规划空间。',
      finalPrimary: '生成咨询简报',
      finalSecondary: '浏览图录',
    },
    pages: {
      shop: {
        title: '精选商品预览',
        body: '一份安静的静态商品目录，用于预览古法器缸、水生植物、水族设备与器皿装饰品。',
        note: '当前为演示版本，暂不支持结账。',
        visualLabel: '目录速写',
        visualCaption: '精选商品界面',
      },
      consultation: {
        title: '咨询简报生成器',
        body: '在正式咨询前，先以清楚的问题梳理空间、材料、气氛与文化象征。',
        note: '静态推荐演示，不提交数据，不连接后端或 AI API。',
        visualLabel: '咨询研究',
        visualCaption: '摆放、材料、气氛',
      },
      story: {
        title: '东方美学水族空间的当代实践',
        body: 'Oriental Aquascape 将水、器、草木、石意与当代工具带入清雅克制的空间实践。',
        visualLabel: '品牌故事',
        visualCaption: '水、器、材料',
        sections: [
          {
            title: '活水入室',
            body: '水生生命带来气息、材料、象征与日常照拂。它让空间不止可看，也可被安静感知。',
          },
          {
            title: '古法鱼缸',
            body: '古法器缸承接传统器形与手作语汇，让水体、器物与日常观照彼此相依。',
          },
          {
            title: '器皿与装饰品',
            body: '陶瓷、玉石与陈设小品不争夺视线，只为光、水与留白添一层秩序。',
          },
          {
            title: 'AI 辅助平台',
            body: '工具可以辅助发现与准备，但最终的取舍仍回到人的经验、审美与照护。',
          },
        ],
      },
      lookbook: {
        title: '概念研究',
        body: '面向住宅、工作室、酒店空间与商业合作方向的精简图录。',
        visualLabel: '图录',
        visualCaption: '概念研究索引',
      },
    },
    shop: {
      kicker: '静态商品预览',
      title: '精选商品预览',
      body: '用于古法鱼缸、水生植物、水族设备与器皿装饰品的静态精选目录。当前为演示版本，暂不支持结账。',
      filtersLabel: '商品分类筛选',
      searchLabel: '搜索商品',
      searchPlaceholder: '搜索器皿、植物、设备或材料...',
      cartNote: '当前为演示版本，暂不支持结账',
      itemLabel: '个商品',
      emptyTitle: '暂无匹配商品。',
      emptyBody: '请尝试更宽泛的关键词，或返回全部分类。',
      filters: {
        All: '全部',
        'Heritage Aquariums': '古法鱼缸',
        'Aquatic Plants': '水生植物',
        'Aquarium Equipment': '水族设备',
        'Vessels & Decorative Pieces': '器皿与装饰品',
        Consultation: '咨询',
        'Future Categories': '未来类目',
      },
    },
    product: {
      add: '加入购物车',
      future: '未来类目',
      consultationRequired: '需咨询确认',
      details: '查看详情',
      futureCaption: '未来类目',
      openDetails: '打开商品详情：',
      addAria: '加入购物车：',
      reviewAria: '查看可用性：',
      readDetails: '查看详情：',
      close: '关闭商品详情',
      closeButton: '关闭',
      material: '材料',
      useCase: '使用场景',
      availability: '购买状态',
      tags: '标签',
      prototypeNote: '当前为演示版本，不处理支付、库存预留或发货。',
      futureDisabled: '未来开放，需咨询确认',
    },
    cart: {
      kicker: '购物车',
      title: '购物车',
      close: '关闭购物车',
      closeButton: '关闭',
      note: '当前为演示版本，不处理支付、库存预留或发货。',
      itemsLabel: '购物车商品',
      each: '单件',
      subtotal: '小计',
      decrease: '减少数量',
      increase: '增加数量',
      remove: '移除',
      removeAria: '从购物车移除',
      total: '合计',
      quantity: '数量',
      clear: '清空购物车',
      empty: '购物车为空。',
      checkout: '演示版本暂不支持结账',
    },
    builder: {
      kicker: '咨询简报',
      title: '生成咨询简报',
      body: '静态原型，用于在正式咨询前梳理空间条件、审美方向与下一步准备。',
      preferencesLabel: '咨询偏好',
      progressSuffix: '项已选择',
      reset: '重置',
      visualLabel: '空间研究',
      outputKicker: '咨询简报',
      outputTitle: '初定方向',
      projectSetting: '项目空间',
      designDirection: '设计取向',
      primaryFocus: '关注重点',
      suggestedNextStep: '下一步建议',
      recommendedCategories: '推荐路径',
      conceptDirection: '建议概念方向',
      spatialNote: '空间咨询说明',
      prototypeNote: '本原型不会提交正式咨询请求，也不会生成最终设计方案，仅用于早期项目梳理与准备。',
      copy: '复制简报',
      copied: '简报已复制。',
      manual: '剪贴板不可用，请手动复制简报文本。',
      fallbackSpace: '请选择项目空间',
      fallbackDirection: '请选择设计取向',
      fallbackFocus: '请选择关注重点',
      optionGroups: [
        {
          id: 'spaceType',
          label: '项目空间',
          options: [
            { value: 'Residential interior', label: '住宅室内' },
            { value: 'Office / studio', label: '办公室 / 工作室' },
            { value: 'Restaurant / hospitality', label: '餐饮 / 酒店空间' },
            { value: 'Retail / showroom', label: '零售 / 展厅' },
            { value: 'Designer / B2B project', label: '设计师 / B2B 项目' },
          ],
        },
        {
          id: 'preferredDirection',
          label: '设计取向',
          options: [
            { value: 'Minimal Eastern aquascape', label: '疏朗东方水景' },
            { value: 'Heritage vessel composition', label: '古法器缸构成' },
            { value: 'Plant-focused living water', label: '草木为主的活水景' },
            { value: 'Equipment-forward modern setup', label: '现代设备系统' },
            { value: 'Decorative pieces and spatial atmosphere', label: '器物与空间气氛' },
            { value: 'AI-assisted product discovery', label: 'AI 辅助初筛' },
          ],
        },
        {
          id: 'primaryInterest',
          label: '关注重点',
          options: [
            { value: 'Aquascaping design', label: '水景营造' },
            { value: 'Heritage Aquariums', label: '古法鱼缸' },
            { value: 'Aquatic plants', label: '水生植物' },
            { value: 'Aquarium equipment', label: '水族设备' },
            { value: 'Vessels & Decorative Pieces', label: '器皿与装饰品' },
            { value: 'I Ching & Feng Shui Spatial Consultation', label: '易学风水空间咨询' },
            { value: 'B2B Partnership', label: '商业合作' },
          ],
        },
        {
          id: 'timeline',
          label: '时间节奏',
          options: [
            { value: 'Exploring', label: '先行观望' },
            { value: '1-3 months', label: '1-3 个月' },
            { value: '3-6 months', label: '3-6 个月' },
            { value: 'B2B planning cycle', label: 'B2B 规划周期' },
          ],
        },
        {
          id: 'budgetRange',
          label: '预算范围',
          options: [
            { value: 'Concept only', label: '先做概念' },
            { value: 'Entry project', label: '入门项目' },
            { value: 'Premium project', label: '精品项目' },
            { value: 'Commercial / partnership', label: '商业 / 合作项目' },
          ],
        },
        {
          id: 'maintenancePreference',
          label: '维护偏好',
          options: [
            { value: 'Low-maintenance', label: '低维护' },
            { value: 'Balanced', label: '照护平衡' },
            { value: 'High-design / specialist maintenance', label: '高设计度 / 专业维护' },
            { value: 'Not sure yet', label: '暂不确定' },
          ],
        },
      ],
    },
    footer: ['古法鱼缸', '器皿与装饰品', 'AI 辅助平台', '品牌', '图录', '咨询'],
  },
} as const;

export type SiteContent = (typeof siteContent)[Language];

type ProductCopy = {
  name: string;
  category: string;
  description: string;
  displayPrice: string;
  tags: string[];
  material: string;
  useCase: string;
  availability: string;
};

const productCopy: Record<Language, Record<string, ProductCopy>> = {
  en: {
    'heritage-vessel-01': {
      name: 'Heritage Vessel No. 01',
      category: 'Heritage Aquariums',
      description:
        'A demo product study for a vessel-led Heritage Aquarium with quiet proportion and daily ritual.',
      displayPrice: '$680 demo price',
      tags: ['Heritage Aquariums', 'vessel', 'porcelain', 'living water'],
      material: 'Porcelain-inspired ceramic with restrained bronze detailing',
      useCase: 'Low-profile interior display for homes, studios, and hospitality spaces',
      availability: 'Demo product only',
    },
    'jade-stone-composition-set': {
      name: 'Jade Stone Composition Set',
      category: 'Vessels & Decorative Pieces',
      description:
        'A curated material composition for spatial atmosphere, display rhythm, and calm contrast.',
      displayPrice: '$340 demo price',
      tags: ['jade', 'stone', 'decorative pieces', 'composition'],
      material: 'Jade-toned stone selections with soft silver display surface',
      useCase: 'Shelf, console, or aquascape-adjacent spatial styling',
      availability: 'Demo product only',
    },
    'ceramic-water-bowl': {
      name: 'Ceramic Water Bowl',
      category: 'Vessels & Decorative Pieces',
      description: 'A quiet vessel study for water, surface reflection, and Eastern interior restraint.',
      displayPrice: '$220 demo price',
      tags: ['ceramic', 'water bowl', 'vessel', 'decorative pieces'],
      material: 'Fine ceramic with porcelain-white finish',
      useCase: 'Water display, entry console, or contemplative interior accent',
      availability: 'Demo product only',
    },
    'aquatic-plant-selection': {
      name: 'Aquatic Plant Selection',
      category: 'Aquatic Plants',
      description:
        'A planning assortment for planted aquascapes, tonal softness, and balanced living texture.',
      displayPrice: '$95 demo price',
      tags: ['aquatic plants', 'planting', 'aquascape', 'living system'],
      material: 'Demo planting palette for submerged and emergent compositions',
      useCase: 'Prototype plant direction for a calm aquascape layout',
      availability: 'Demo product only',
    },
    'low-profile-aquascaping-tools': {
      name: 'Low-Profile Aquascaping Tools',
      category: 'Aquarium Equipment',
      description: 'A restrained tool set for setup, trimming, placement, and quiet maintenance rituals.',
      displayPrice: '$145 demo price',
      tags: ['tools', 'aquascaping', 'maintenance', 'equipment'],
      material: 'Brushed steel and matte graphite tool finishes',
      useCase: 'Hands-on aquascape preparation and routine care',
      availability: 'Demo product only',
    },
    'equipment-starter-set': {
      name: 'Equipment Starter Set',
      category: 'Aquarium Equipment',
      description:
        'Quiet aquatic infrastructure for stable circulation, lighting, and introductory setup planning.',
      displayPrice: '$380 demo price',
      tags: ['equipment', 'starter set', 'lighting', 'filtration'],
      material: 'Compact equipment bundle with graphite and cool mist finish direction',
      useCase: 'Demo setup path for small contemporary aquascapes',
      availability: 'Demo product only',
    },
    'decorative-jade-piece': {
      name: 'Decorative Jade Piece',
      category: 'Vessels & Decorative Pieces',
      description:
        'A jade-toned display piece for material presence, negative space, and refined composition.',
      displayPrice: '$260 demo price',
      tags: ['jade', 'decorative pieces', 'display', 'material'],
      material: 'Jade-inspired stone with soft hand-finished surface',
      useCase: 'Interior styling beside vessels, water bowls, and aquascape studies',
      availability: 'Demo product only',
    },
    'heritage-aquarium-consultation-deposit': {
      name: 'Heritage Aquarium Consultation Deposit',
      category: 'Consultation',
      description: 'A demo-only planning item for consultation flow testing. No payment is processed.',
      displayPrice: '$150 demo price',
      tags: ['consultation', 'Heritage Aquariums', 'planning', 'demo only'],
      material: 'Consultation planning placeholder',
      useCase: 'Prototype pathway for project intake and preparation',
      availability: 'Demo consultation item',
    },
    'high-end-ornamental-fish-selection': {
      name: 'High-End Ornamental Fish Selection',
      category: 'High-End Ornamental Fish',
      description: 'A future category requiring specialist sourcing, care standards, and consultation.',
      displayPrice: 'Future category / consultation required',
      tags: ['High-End Ornamental Fish', 'future category', 'consultation required'],
      material: 'Live-goods category planning only',
      useCase: 'Future consultation pathway, not live checkout',
      availability: 'Future category / consultation required',
    },
    'i-ching-feng-shui-spatial-consultation': {
      name: 'I Ching & Feng Shui Spatial Consultation',
      category: 'Consultation',
      description:
        'Cultural, spatial, symbolic, and aesthetic consultation for placement, balance, material, and atmosphere.',
      displayPrice: 'Consultation required',
      tags: ['consultation', 'placement', 'balance', 'symbolic meaning', 'aesthetic'],
      material: 'Spatial consultation and cultural interpretation',
      useCase: 'Project direction for contemporary spaces without outcome claims',
      availability: 'Consultation required',
    },
  },
  zh: {
    'heritage-vessel-01': {
      name: '古法鱼缸 No. 01',
      category: '古法鱼缸',
      description: '以器形为心的古法鱼缸演示研究，比例安静，适合日常观水。',
      displayPrice: '$680 演示价',
      tags: ['古法鱼缸', '器形', '陶瓷', '活水景'],
      material: '瓷感陶瓷与克制铜色细节',
      useCase: '适用于住宅、工作室与酒店空间的低调室内陈列',
      availability: '仅演示产品',
    },
    'jade-stone-composition-set': {
      name: '玉石构成套组',
      category: '器皿与装饰品',
      description: '以玉色石材组织陈列节奏，让空间在虚实之间更显沉静。',
      displayPrice: '$340 演示价',
      tags: ['玉石', '石材', '装饰品', '构成'],
      material: '玉色石材选择与柔和银雾展示面',
      useCase: '适用于搁架、玄关台面或水景周边陈设',
      availability: '仅演示产品',
    },
    'ceramic-water-bowl': {
      name: '陶瓷水钵',
      category: '器皿与装饰品',
      description: '一只用于承水与映光的安静水钵，适合留白处的低声点题。',
      displayPrice: '$220 演示价',
      tags: ['陶瓷', '水钵', '器皿', '装饰品'],
      material: '细腻陶瓷与瓷白表面',
      useCase: '用于水景陈列、玄关台面或沉静的室内点缀',
      availability: '仅演示产品',
    },
    'aquatic-plant-selection': {
      name: '水生植物精选',
      category: '水生植物',
      description: '以沉水与挺水植物安排层次，补足水景的柔和生机。',
      displayPrice: '$95 演示价',
      tags: ['水生植物', '种植', '水景', '活水系统'],
      material: '沉水与挺水构成的演示植物方向',
      useCase: '平静水景布局的植物原型方向',
      availability: '仅演示产品',
    },
    'low-profile-aquascaping-tools': {
      name: '克制水景工具',
      category: '水族设备',
      description: '用于布景、修剪、定位与日常照护的低调工具组。',
      displayPrice: '$145 演示价',
      tags: ['工具', '水景', '维护', '设备'],
      material: '拉丝钢与哑光石墨工具表面',
      useCase: '用于水景准备与日常护理',
      availability: '仅演示产品',
    },
    'equipment-starter-set': {
      name: '水族设备入门套组',
      category: '水族设备',
      description: '用于循环、照明与初始搭建规划的安静设备组合。',
      displayPrice: '$380 演示价',
      tags: ['设备', '入门套组', '照明', '过滤'],
      material: '石墨与冷雾色方向的小型设备组合',
      useCase: '小型当代水景的演示搭建路径',
      availability: '仅演示产品',
    },
    'decorative-jade-piece': {
      name: '玉色装饰品',
      category: '器皿与装饰品',
      description: '玉色陈设小品，用于材料层次、留白与清雅构成。',
      displayPrice: '$260 演示价',
      tags: ['玉石', '装饰品', '陈列', '材料'],
      material: '玉色石材感材料与柔和手工表面',
      useCase: '适用于器皿、水钵与水景研究旁的室内造型',
      availability: '仅演示产品',
    },
    'heritage-aquarium-consultation-deposit': {
      name: '古法鱼缸咨询预留（演示）',
      category: '咨询',
      description: '仅用于咨询流程测试的演示规划项目，不处理支付或订单。',
      displayPrice: '$150 演示价',
      tags: ['咨询', '古法鱼缸', '规划', '演示'],
      material: '咨询流程演示项',
      useCase: '用于项目需求整理与方案准备的演示路径',
      availability: '演示咨询项目',
    },
    'high-end-ornamental-fish-selection': {
      name: '高端观赏鱼规划',
      category: '高端观赏鱼',
      description: '未来类目，需先确认来源、照护标准、运输条件与咨询流程。',
      displayPrice: '未来开放 / 需咨询确认',
      tags: ['高端观赏鱼', '未来类目', '需咨询确认'],
      material: '活体类目规划中',
      useCase: '未来咨询路径，暂不支持下单',
      availability: '未来开放 / 需咨询确认',
    },
    'i-ching-feng-shui-spatial-consultation': {
      name: '易学风水空间咨询',
      category: '咨询',
      description: '围绕摆放、平衡、材料与气氛展开的文化、空间、象征与审美咨询。',
      displayPrice: '需咨询确认',
      tags: ['咨询', '摆放', '平衡', '象征意义', '审美'],
      material: '空间咨询与文化解读',
      useCase: '用于当代空间方向梳理，不承诺财务、医疗或个人结果',
      availability: '需咨询确认',
    },
  },
};

const categoryLabelMap = {
  en: {
    'Eastern Aquascapes': 'Eastern Aquascapes',
    'Heritage Aquariums': 'Heritage Aquariums',
    'Aquatic Plants': 'Aquatic Plants',
    'Aquarium Equipment': 'Aquarium Equipment',
    'Vessels & Decorative Pieces': 'Vessels & Decorative Pieces',
    'I Ching & Feng Shui Spatial Consultation': 'I Ching & Feng Shui Spatial Consultation',
    'AI-Assisted Platform': 'AI-Assisted Platform',
    'High-End Ornamental Fish': 'High-End Ornamental Fish',
    'B2B Partnership': 'B2B Partnership',
  },
  zh: {
    'Eastern Aquascapes': '东方水景',
    'Heritage Aquariums': '古法鱼缸',
    'Aquatic Plants': '水生植物',
    'Aquarium Equipment': '水族设备',
    'Vessels & Decorative Pieces': '器皿与装饰品',
    'I Ching & Feng Shui Spatial Consultation': '易学风水空间咨询',
    'AI-Assisted Platform': 'AI 辅助平台',
    'High-End Ornamental Fish': '高端观赏鱼',
    'B2B Partnership': '商业合作',
  },
} as const;

const conceptDirectionMap = {
  en: {
    'Eastern Courtyard Water': 'Eastern Courtyard Water',
    'Jade Stone Composition': 'Jade Stone Composition',
    'Heritage Vessel Aquascape': 'Heritage Vessel Aquascape',
  },
  zh: {
    'Eastern Courtyard Water': '东方庭院之水',
    'Jade Stone Composition': '玉石构成',
    'Heritage Vessel Aquascape': '古法器缸水景',
  },
} as const;

export function getProductCopy(product: Product, language: Language) {
  return productCopy[language][product.id] ?? {
    name: product.name,
    category: product.category,
    description: product.description,
    displayPrice: product.displayPrice,
    tags: product.tags,
    material: product.material,
    useCase: product.useCase,
    availability: product.availability,
  };
}

export function getCategoryLabel(category: string, language: Language) {
  return categoryLabelMap[language][category as keyof (typeof categoryLabelMap)['en']] ?? category;
}

export function getConceptDirectionLabel(conceptDirection: string, language: Language) {
  return (
    conceptDirectionMap[language][conceptDirection as keyof (typeof conceptDirectionMap)['en']] ??
    conceptDirection
  );
}

export function getLocalizedOptionLabel(
  language: Language,
  groupId: keyof ConsultationSelections,
  value: string | undefined,
) {
  if (!value) {
    return undefined;
  }

  const optionGroup = siteContent[language].builder.optionGroups.find((group) => group.id === groupId);
  const option = optionGroup?.options.find((optionItem) => optionItem.value === value);

  return option?.label ?? value;
}

export function getLocalizedPathways(pathways: string[], language: Language) {
  return pathways.map((pathway) => getCategoryLabel(pathway, language));
}

export function buildLocalizedBrief(
  selections: ConsultationSelections,
  pathways: string[],
  language: Language,
) {
  if (language === 'en') {
    return '';
  }

  const selectedCount = Object.values(selections).filter(Boolean).length;
  const isComplete = selectedCount === 6;
  const projectSetting =
    getLocalizedOptionLabel(language, 'spaceType', selections.spaceType) ?? '未选择项目空间';
  const designDirection =
    getLocalizedOptionLabel(language, 'preferredDirection', selections.preferredDirection) ??
    '开放的设计取向';
  const primaryFocus =
    getLocalizedOptionLabel(language, 'primaryInterest', selections.primaryInterest) ??
    '待选择的关注重点';
  const timeline = getLocalizedOptionLabel(language, 'timeline', selections.timeline) ?? '开放时间';
  const maintenance =
    getLocalizedOptionLabel(
      language,
      'maintenancePreference',
      selections.maintenancePreference,
    ) ?? '待明确的维护偏好';
  const localizedPathways = getLocalizedPathways(pathways, language).join('、');

  if (isComplete) {
    return `初定方向：为${projectSetting}梳理${designDirection}，以${primaryFocus}为主要关注。时间节奏为${timeline}，维护偏好为${maintenance}。推荐路径：${localizedPathways}。正式咨询可进一步确认尺度、材料与空间气氛。`;
  }

  return `草案方向：为${projectSetting}梳理${designDirection}，暂以${primaryFocus}为线索。继续选择偏好后，可进一步细化推荐路径、时间节奏与照护方式。`;
}

export function getLocalizedNextStep(selections: ConsultationSelections, language: Language) {
  if (language === 'en') {
    return '';
  }

  if (
    selections.spaceType === 'Designer / B2B project' ||
    selections.primaryInterest === 'B2B Partnership' ||
    selections.timeline === 'B2B planning cycle'
  ) {
    return '准备合作简报，先整理场地背景、时间安排与采购范围。';
  }

  if (selections.primaryInterest === 'I Ching & Feng Shui Spatial Consultation') {
    return '先梳理文化、空间、象征与审美方向，再进入具体产品选择。';
  }

  if (selections.timeline === 'Exploring' || selections.budgetRange === 'Concept only') {
    return '从概念速写开始，先确认尺度、材料与照护节奏。';
  }

  return '通过正式咨询进一步确认尺度、材料、产品路径与照护方式。';
}

export function getLocalizedSpatialNote(selections: ConsultationSelections, language: Language) {
  if (language === 'en') {
    return '';
  }

  const mayBenefitFromSpatialReview =
    selections.primaryInterest === 'I Ching & Feng Shui Spatial Consultation' ||
    selections.preferredDirection === 'Decorative pieces and spatial atmosphere' ||
    selections.spaceType === 'Restaurant / hospitality' ||
    selections.spaceType === 'Retail / showroom';

  if (!mayBenefitFromSpatialReview) {
    return '空间咨询可作为辅助层，服务于水景方向，不取代设计判断。';
  }

  return '空间咨询可帮助梳理摆放、平衡、材料、气氛与象征意义，但不提供财务、医疗或个人结果判断。';
}
