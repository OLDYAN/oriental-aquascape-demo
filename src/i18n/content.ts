import type { Product } from '../data/products';
import type { ConsultationSelections } from '../utils/recommendations';
import type { Language } from './types';

export const siteContent = {
  en: {
    metaTitle: 'Oriental Aquascape - Eastern Aquatic Living',
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
          caption: 'Future/later category pending sourcing, care, and logistics standards.',
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
      body: 'Consultation considers placement, balance, material, atmosphere, and symbolic meaning. It does not promise financial, medical, or personal outcomes.',
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
        title: 'Curated Commerce Preview',
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
      title: 'Curated Commerce Preview',
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
      note: 'This demo does not process payments, reserve inventory, or ship products.',
      itemsLabel: 'Cart items',
      each: 'each',
      subtotal: 'Subtotal',
      decrease: 'Decrease quantity for',
      increase: 'Increase quantity for',
      remove: 'Remove',
      removeAria: 'Remove from cart',
      total: 'Total',
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
    header: {
      brand: 'Oriental Aquascape',
      homeAria: 'Oriental Aquascape 首页',
      navLabel: '主导航',
      cart: '清单',
      cartAria: '打开演示清单',
      menu: '菜单',
      menuOpen: '打开导航菜单',
      menuClose: '关闭导航菜单',
      language: 'EN',
      languageAria: '切换语言为英文',
      nav: [
        { route: 'home', href: '#/', label: '首页' },
        { route: 'shop', href: '#/shop', label: '商城' },
        { route: 'consultation', href: '#/consultation', label: '咨询' },
        { route: 'story', href: '#/story', label: '品牌故事' },
        { route: 'lookbook', href: '#/lookbook', label: '作品集' },
      ],
    },
    hero: {
      title: '东方美学水族空间',
      body: 'Oriental Aquascape 将东方水景、古法鱼缸、器皿与装饰品，以及 AI 辅助咨询带入当代空间。',
      shopCta: '探索商城',
      consultationCta: '开始咨询',
      label: '生活之水',
      caption: '器形、水线、玉石与智能线索',
    },
    studio: {
      kicker: '品牌陈述',
      title: 'Oriental Aquascape 关注东方水景、水生生命、古法鱼缸、器皿、装饰品与空间咨询。',
      body: '我们将水视为气氛、材料、象征与有生命的系统。',
    },
    categories: {
      kicker: '平台内容',
      title: '围绕生活之水与文化材料的克制索引。',
      body: '分类保持简洁清晰，为商城、咨询与平台工作流预留空间。',
      selected: '当前关注',
      partnershipNote: '商业合作：面向设计师、酒店、办公室与合作伙伴的未来 To B 工作流。',
      items: [
        {
          id: 'eastern-aquascapes',
          title: '东方水景',
          caption: '面向当代空间的生活水景构成。',
        },
        {
          id: 'high-end-ornamental-fish',
          title: '高端观赏鱼',
          caption: '未来类目，需完善来源、养护与物流标准。',
        },
        {
          id: 'aquatic-plants',
          title: '水生植物',
          caption: '服务于精致水景的植物搭配方向。',
        },
        {
          id: 'aquarium-equipment',
          title: '水族设备',
          caption: '稳定水体系统所需的安静基础设施。',
        },
        {
          id: 'heritage-aquariums',
          title: '古法鱼缸',
          caption: '非遗传承手法与当代空间相连接。',
        },
        {
          id: 'vessels-decorative-pieces',
          title: '器皿与装饰品',
          caption: '陶瓷、玉器等装饰品营造空间气韵。',
        },
        {
          id: 'spatial-consultation',
          title: '易学风水空间咨询',
          caption: '以文化、空间、象征与审美为边界的咨询。',
        },
        {
          id: 'ai-assisted-platform',
          title: 'AI 辅助平台',
          caption: '辅助发现与准备，最终判断仍以人为中心。',
        },
      ],
    },
    lookbookPreview: {
      kicker: '概念研究',
      title: '为未来空间方向准备的安静研究。',
      body: '这些研究用于表达气质、构成与材料节奏。',
      cta: '查看作品集',
      studies: [
        {
          id: 'eastern-courtyard-water',
          title: '东方庭院之水',
          label: '概念研究',
          caption: '适用于住宅与商业空间的安静水景气氛。',
        },
        {
          id: 'jade-stone-composition',
          title: '玉石构成',
          label: '概念研究',
          caption: '石、器与植物形态在克制中取得平衡。',
        },
        {
          id: 'heritage-vessel-aquascape',
          title: '古法器形水景',
          label: '概念研究',
          caption: '以器形为核心，连接传承手法与日常仪式。',
        },
      ],
    },
    commercePreview: {
      kicker: '商城预览',
      title: '策展式产品世界，而非嘈杂货架。',
      body: '静态目录方向涵盖古法鱼缸、水生植物、水族设备与器皿装饰品。',
      cta: '进入商城',
      items: [
        {
          title: '古法鱼缸',
          description: '以器形为核心，连接水、材料与日常仪式。',
        },
        {
          title: '水生植物',
          description: '用于安静水景构成与空间气氛的植物选择。',
        },
        {
          title: '水族设备',
          description: '稳定、克制，并尽量隐入空间的基础设施。',
        },
        {
          title: '装饰品',
          description: '陶瓷、玉器等装饰品形成空间存在感。',
        },
      ],
    },
    platform: {
      kicker: 'AI 辅助平台',
      title: 'AI 辅助发现、匹配与准备。',
      bodyA: '人的判断始终居于中心。',
      bodyB: '未来工具将帮助客户、设计师与合作伙伴理解风格、产品、咨询与供应流程。',
      label: '平台层',
      caption: '发现、匹配、准备',
    },
    consultationTeaser: {
      kicker: '咨询',
      title: '易学风水空间咨询',
      body: '咨询关注摆放、平衡、材料、气氛与象征意义，不承诺财务、医疗或个人结果。',
      cta: '构建咨询简报',
      diagramLabel: '咨询考虑维度',
      visualLabel: '空间图式',
      visualCaption: '摆放、平衡、材料',
      considerations: ['摆放', '平衡', '材料', '气氛', '象征意义'],
      finalTitle: '开始一个生活水景项目。',
      finalPrimary: '开始咨询',
      finalSecondary: '查看作品集',
    },
    pages: {
      shop: {
        title: '策展式商城预览',
        body: '独立静态目录，用于规划古法鱼缸、水生植物、水族设备与克制的装饰品。',
        note: '仅为演示目录，结账保持关闭。',
        visualLabel: '目录研究',
        visualCaption: '策展式静态商城界面',
      },
      consultation: {
        title: '咨询简报生成器',
        body: '以设计为导向，在正式咨询前梳理文化、空间、象征与审美方向。',
        note: '静态推荐演示，不提交数据，不连接后端或 AI API。',
        visualLabel: '咨询研究',
        visualCaption: '摆放、材料、气氛',
      },
      story: {
        title: '一种当代东方水族空间实践',
        body: 'Oriental Aquascape 将水、器、文化材料与当代智能带入克制空间。',
        visualLabel: '品牌故事',
        visualCaption: '水、器、材料',
        sections: [
          {
            title: '生活之水',
            body: '平台将水生生命视为气氛、材料、象征与有生命的系统。',
          },
          {
            title: '古法鱼缸',
            body: '非物质文化遗产传承手法制作的古法鱼缸连接器形、水体与日常仪式。',
          },
          {
            title: '器皿与装饰品',
            body: '陶瓷、玉器等装饰品帮助空间形成更安静的节奏。',
          },
          {
            title: 'AI 辅助平台',
            body: 'AI 辅助发现与准备，但人的判断始终居于中心。',
          },
        ],
      },
      lookbook: {
        title: '概念研究',
        body: '面向住宅、工作室、酒店空间与商业合作方向的精简作品集。',
        visualLabel: '作品集',
        visualCaption: '概念研究索引',
      },
    },
    shop: {
      kicker: '静态目录原型',
      title: '策展式商城预览',
      body: '用于古法鱼缸、水生植物、水族设备与装饰品的原型目录。结账未启用。',
      filtersLabel: '产品分类筛选',
      searchLabel: '搜索产品',
      searchPlaceholder: '搜索器皿、植物、设备...',
      cartNote: '演示清单与关闭的结账',
      itemLabel: '个目录项目',
      emptyTitle: '没有匹配的目录项目。',
      emptyBody: '请尝试更宽泛的搜索，或回到全部分类。',
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
      add: '加入清单',
      future: '未来类目',
      consultationRequired: '需咨询',
      details: '详情',
      futureCaption: '未来类目',
      openDetails: '打开详情',
      addAria: '加入清单',
      reviewAria: '查看可用性',
      readDetails: '阅读详情',
      close: '关闭产品详情',
      material: '材料',
      useCase: '使用场景',
      availability: '可用性',
      tags: '标签',
      prototypeNote: '这是静态原型，不处理付款、不保留库存、不发货。',
      futureDisabled: '未来类目 / 需咨询',
    },
    cart: {
      kicker: '演示清单',
      title: '清单预览',
      close: '关闭清单',
      note: '此演示不处理付款、不保留库存、不发货。',
      itemsLabel: '清单项目',
      each: '单件',
      subtotal: '小计',
      decrease: '减少数量',
      increase: '增加数量',
      remove: '移除',
      removeAria: '从清单中移除',
      total: '总计',
      clear: '清空清单',
      empty: '你的演示清单为空。',
      checkout: '原型中不提供结账',
    },
    builder: {
      kicker: 'AI 辅助发现',
      title: '构建咨询简报',
      body: '静态原型，用于在正式咨询前梳理初始方向。',
      preferencesLabel: '咨询偏好',
      progressSuffix: '项偏好已选择',
      reset: '重置',
      visualLabel: 'AI 辅助发现原型',
      outputKicker: '咨询简报',
      outputTitle: '项目方向',
      projectSetting: '空间类型',
      designDirection: '设计方向',
      primaryFocus: '主要关注',
      suggestedNextStep: '建议下一步',
      recommendedCategories: '推荐路径',
      conceptDirection: '建议概念方向',
      spatialNote: '空间咨询说明',
      prototypeNote: '此原型不会提交请求，也不会生成最终设计方案，仅用于早期项目梳理。',
      copy: '复制简报',
      copied: '简报已复制。',
      manual: '剪贴板不可用，请手动复制简报文本。',
      fallbackSpace: '请选择空间类型',
      fallbackDirection: '请选择设计方向',
      fallbackFocus: '请选择主要关注',
      optionGroups: [
        {
          id: 'spaceType',
          label: '空间类型',
          options: [
            { value: 'Residential interior', label: '住宅空间' },
            { value: 'Office / studio', label: '办公室 / 工作室' },
            { value: 'Restaurant / hospitality', label: '餐饮 / 酒店空间' },
            { value: 'Retail / showroom', label: '零售 / 展厅' },
            { value: 'Designer / B2B project', label: '设计师 / B2B 项目' },
          ],
        },
        {
          id: 'preferredDirection',
          label: '偏好方向',
          options: [
            { value: 'Minimal Eastern aquascape', label: '极简东方水景' },
            { value: 'Heritage vessel composition', label: '古法器形构成' },
            { value: 'Plant-focused living water', label: '以植物为主的生活水景' },
            { value: 'Equipment-forward modern setup', label: '偏现代设备系统' },
            { value: 'Decorative pieces and spatial atmosphere', label: '装饰品与空间气氛' },
            { value: 'AI-assisted product discovery', label: 'AI 辅助产品发现' },
          ],
        },
        {
          id: 'primaryInterest',
          label: '主要关注',
          options: [
            { value: 'Aquascaping design', label: '水景设计' },
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
            { value: 'Exploring', label: '仍在探索' },
            { value: '1-3 months', label: '1-3 个月' },
            { value: '3-6 months', label: '3-6 个月' },
            { value: 'B2B planning cycle', label: 'B2B 规划周期' },
          ],
        },
        {
          id: 'budgetRange',
          label: '预算范围',
          options: [
            { value: 'Concept only', label: '概念阶段' },
            { value: 'Entry project', label: '入门项目' },
            { value: 'Premium project', label: '高端项目' },
            { value: 'Commercial / partnership', label: '商业 / 合作项目' },
          ],
        },
        {
          id: 'maintenancePreference',
          label: '维护偏好',
          options: [
            { value: 'Low-maintenance', label: '低维护' },
            { value: 'Balanced', label: '平衡维护' },
            { value: 'High-design / specialist maintenance', label: '高设计度 / 专业维护' },
            { value: 'Not sure yet', label: '暂不确定' },
          ],
        },
      ],
    },
    footer: ['古法鱼缸', '器皿与装饰品', 'AI 辅助平台', '品牌故事', '作品集', '咨询'],
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
      description: 'A future/later category requiring specialist sourcing, care standards, and consultation.',
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
      useCase: 'Project direction for contemporary spaces without outcome promises',
      availability: 'Consultation required',
    },
  },
  zh: {
    'heritage-vessel-01': {
      name: '古法器形 No. 01',
      category: '古法鱼缸',
      description: '器形主导的古法鱼缸演示研究，强调克制比例与日常仪式。',
      displayPrice: '$680 演示价格',
      tags: ['古法鱼缸', '器形', '陶瓷', '生活之水'],
      material: '瓷感陶瓷与克制铜色细节',
      useCase: '适用于住宅、工作室与酒店空间的低姿态室内陈列',
      availability: '仅演示产品',
    },
    'jade-stone-composition-set': {
      name: '玉石构成套组',
      category: '器皿与装饰品',
      description: '用于空间气氛、陈列节奏与安静对比的材料构成。',
      displayPrice: '$340 演示价格',
      tags: ['玉石', '石材', '装饰品', '构成'],
      material: '玉色石材选择与柔和银雾展示面',
      useCase: '适用于搁架、玄关台面或水景周边空间造型',
      availability: '仅演示产品',
    },
    'ceramic-water-bowl': {
      name: '陶瓷水钵',
      category: '器皿与装饰品',
      description: '关于水面、反射与东方室内克制感的安静器皿研究。',
      displayPrice: '$220 演示价格',
      tags: ['陶瓷', '水钵', '器皿', '装饰品'],
      material: '细腻陶瓷与瓷白表面',
      useCase: '水景陈列、玄关台面或沉静室内点缀',
      availability: '仅演示产品',
    },
    'aquatic-plant-selection': {
      name: '水生植物选择',
      category: '水生植物',
      description: '用于种植水景、柔和色调与平衡生命质感的规划组合。',
      displayPrice: '$95 演示价格',
      tags: ['水生植物', '种植', '水景', '生命系统'],
      material: '沉水与挺水构成的演示植物方向',
      useCase: '平静水景布局的植物原型方向',
      availability: '仅演示产品',
    },
    'low-profile-aquascaping-tools': {
      name: '低姿态水景工具',
      category: '水族设备',
      description: '用于布景、修剪、摆放与日常维护的克制工具组。',
      displayPrice: '$145 演示价格',
      tags: ['工具', '水景', '维护', '设备'],
      material: '拉丝钢与哑光石墨工具表面',
      useCase: '用于水景准备与日常护理',
      availability: '仅演示产品',
    },
    'equipment-starter-set': {
      name: '设备入门套组',
      category: '水族设备',
      description: '用于稳定循环、照明与初始搭建规划的安静基础设施。',
      displayPrice: '$380 演示价格',
      tags: ['设备', '入门套组', '照明', '过滤'],
      material: '石墨与冷雾色方向的小型设备组合',
      useCase: '小型当代水景的演示搭建路径',
      availability: '仅演示产品',
    },
    'decorative-jade-piece': {
      name: '玉色装饰品',
      category: '器皿与装饰品',
      description: '用于材料存在感、留白与精致构成的玉色陈列品。',
      displayPrice: '$260 演示价格',
      tags: ['玉石', '装饰品', '陈列', '材料'],
      material: '玉石感材料与柔和手工表面',
      useCase: '适用于器皿、水钵与水景研究旁的室内造型',
      availability: '仅演示产品',
    },
    'heritage-aquarium-consultation-deposit': {
      name: '古法鱼缸咨询占位（演示）',
      category: '咨询',
      description: '仅用于咨询流程测试的演示规划项目，不处理付款。',
      displayPrice: '$150 演示价格',
      tags: ['咨询', '古法鱼缸', '规划', '演示'],
      material: '咨询规划占位',
      useCase: '用于项目 intake 与准备流程的原型路径',
      availability: '演示咨询项目',
    },
    'high-end-ornamental-fish-selection': {
      name: '高端观赏鱼选择',
      category: '高端观赏鱼',
      description: '未来类目，需要专业来源、照护标准与咨询流程。',
      displayPrice: '未来类目 / 需咨询',
      tags: ['高端观赏鱼', '未来类目', '需咨询'],
      material: '活体类目规划',
      useCase: '未来咨询路径，不开放在线结账',
      availability: '未来类目 / 需咨询',
    },
    'i-ching-feng-shui-spatial-consultation': {
      name: '易学风水空间咨询',
      category: '咨询',
      description: '围绕摆放、平衡、材料与气氛的文化、空间、象征与审美咨询。',
      displayPrice: '需咨询',
      tags: ['咨询', '摆放', '平衡', '象征意义', '审美'],
      material: '空间咨询与文化解读',
      useCase: '为当代空间提供项目方向，不承诺外部结果',
      availability: '需咨询',
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
    'Heritage Vessel Aquascape': '古法器形水景',
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
    getLocalizedOptionLabel(language, 'spaceType', selections.spaceType) ?? '未选择空间';
  const designDirection =
    getLocalizedOptionLabel(language, 'preferredDirection', selections.preferredDirection) ??
    '开放的设计方向';
  const primaryFocus =
    getLocalizedOptionLabel(language, 'primaryInterest', selections.primaryInterest) ??
    '待选择的主要关注';
  const timeline = getLocalizedOptionLabel(language, 'timeline', selections.timeline) ?? '开放时间';
  const maintenance =
    getLocalizedOptionLabel(
      language,
      'maintenancePreference',
      selections.maintenancePreference,
    ) ?? '待明确的维护偏好';
  const localizedPathways = getLocalizedPathways(pathways, language).join('、');

  if (isComplete) {
    return `初步方向：为${projectSetting}建立${designDirection}，主要关注为${primaryFocus}。时间节奏：${timeline}。维护偏好：${maintenance}。建议路径：${localizedPathways}。正式咨询将进一步明确尺度、材料与空间气氛。`;
  }

  return `草案方向：为${projectSetting}建立${designDirection}，主要关注为${primaryFocus}。继续选择偏好后，可进一步细化推荐路径、时间节奏与维护方式。`;
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
    return '准备合作简报，包含场地背景、时间安排与采购范围。';
  }

  if (selections.primaryInterest === 'I Ching & Feng Shui Spatial Consultation') {
    return '先进行文化、空间、象征与审美审阅，再进入产品选择。';
  }

  if (selections.timeline === 'Exploring' || selections.budgetRange === 'Concept only') {
    return '从概念研究开始，明确尺度、材料与维护节奏。';
  }

  return '通过正式咨询进一步梳理尺度、材料、产品路径与维护方式。';
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
    return '空间咨询可作为辅助层，服务于水景方向而不喧宾夺主。';
  }

  return '空间咨询可帮助梳理摆放、平衡、材料、气氛与象征意义，但不承诺外部结果。';
}
