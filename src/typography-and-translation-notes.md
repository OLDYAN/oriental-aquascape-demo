# Typography And Translation Notes

## Typography Direction

- English display headings use an editorial serif stack: `"Iowan Old Style", "Palatino Linotype", Palatino, "Times New Roman", serif`.
- English body, navigation, controls, filters, drawers, product UI, forms, and footer links use a clean system sans stack.
- Chinese display headings use a Songti-style serif stack only for hero, page, section, product, and editorial headings.
- Chinese body, navigation, buttons, filter chips, product UI, cart, forms, and consultation controls use a modern Chinese sans stack.
- Numeric index markers use a monospaced numeric stack so category ordering feels intentional and precise.

## Chinese Typography Rules

- Major Chinese headings need a little more line-height than English headings and should avoid compressed tracking.
- Chinese UI labels should not inherit uppercase-style English spacing or text-transform.
- Chinese buttons, chips, and builder options need enough vertical padding to wrap cleanly on mobile.
- Chinese body copy should stay clear and calm: elegant, but not so literary that the user has to parse it twice.

## English Typography Rules

- English display copy can feel editorial, but controls must remain direct and readable.
- Small English labels may use restrained uppercase and letter spacing.
- Product names use display serif treatment; product metadata, prices, filters, and buttons stay sans-serif.
- Avoid negative letter spacing. Hero and page title tracking should remain neutral for predictable bilingual rendering.

## Translation Principles

- 信: preserve business meaning, prototype limits, and safety boundaries.
- 达: make Chinese read naturally as brand copy, not literal translation.
- 雅: keep the voice calm, refined, premium, and Eastern-aesthetic without becoming mystical or ornate.
- Chinese copy should sound like a design studio and curated catalog, not a pet store, discount marketplace, or fortune-telling service.

## Ecommerce Translation Standards

- Use clear ecommerce language for actions: "购物车", "加入购物车", "购物车为空", "清空购物车", "移除", "数量", "小计", "合计", and "结账".
- Use "精选目录" for the curated catalog surface, but do not use "清单" for cart UI.
- Use "查看详情", "商品详情", "需咨询确认", "未来类目", "未开放在线购买", and "演示版本暂不支持结账".
- Prototype disclaimers must clearly say the demo does not process payment, reserve inventory, or ship products: "当前为演示版本，不处理支付、库存预留或发货。"
- High-End Ornamental Fish remains a future category and should be framed around sourcing, care standards, logistics, and consultation.
- Avoid urgency, discount, and commodity-shopping language such as "爆款", "限时", "秒杀", "低价", "抢购", or "买买买".

## Consultation Translation Standards

- Consultation copy should feel like design intake, spatial review, project preparation, and early direction setting.
- I Ching & Feng Shui Spatial Consultation is cultural, spatial, symbolic, and aesthetic.
- AI-assisted copy should say "AI 辅助", "设计初筛", "方案准备", and "推荐路径"; it must not imply real processing or final design output.
- Recommendation output is a static preparation aid, not a submitted request, final design proposal, or outcome claim.

## Terms To Use

- Heritage Aquariums
- heritage aquariums crafted through intangible cultural heritage techniques
- craft techniques rooted in intangible cultural heritage traditions
- Vessels & Decorative Pieces
- ceramic, jade, and other decorative pieces
- I Ching & Feng Shui Spatial Consultation
- AI-Assisted Platform
- High-End Ornamental Fish
- Eastern Aquascapes
- B2B Partnership
- 东方水景
- 东方美学水族空间
- 高端观赏鱼
- 水生植物
- 水族设备
- 非物质文化遗产传承手法制作的古法鱼缸
- 非遗传承手法
- 器皿与装饰品
- 陶瓷、玉器等装饰品
- 易学风水空间咨询
- AI 辅助平台
- To C / To B 平台
- 商业合作

## Terms To Avoid

- old-method
- old method
- Classical Tanks
- Vessels & Objects
- Ceramic & Jade Objects
- certified intangible cultural heritage
- officially recognized intangible cultural heritage
- guarantee or guaranteed outcomes
- wealth or health promises
- fortune telling
- prediction
- magical AI
- 发财
- 改运
- 保证
- 包治
- 预测命运
- 算命
- 神奇AI
- 开运
- 官方认证非遗
- 非遗认证产品
- 清单 as cart wording
- 演示清单
- 原型清单
- 加入演示清单
- 清空清单
- 原型结账未启用
- 爆款
- 秒杀
- 低价
- 抢购
- 买买买

## Layout Risks

- Chinese nav labels can become wider than English; the mobile menu should stack and keep tappable row height.
- Product filters and consultation options need natural wrapping and must not force long Chinese terms into cramped pills.
- Drawer specs should use readable one-column stacking on mobile because Chinese terms and values are longer.
- Textured panels must not reduce contrast for product descriptions, checkout disclaimers, or consultation output.
- Illustration labels and captions need backing surfaces so line art and texture never compete with text.

## Intentionally Not Changed

- The demo remains a static React/Vite prototype with hash routes and no Shopify, Webflow, backend, real payment, real inventory, external fonts, or external assets.
- English business terminology remains consistent with the approved brand terms rather than introducing broader ecommerce marketplace language.
- Chinese brand/editorial copy stays calm and design-led; only product/cart actions become more direct.
