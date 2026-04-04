const routeData = {
  travelDate: "2026-04-05",
  updatedAt: "2026-04-04 22:51 GMT",
  gates: [
    {
      id: "road94",
      title: "94 号路出山段",
      zone: "Bakkagerði / Borgarfjörður eystri",
      currentStatus: "danger",
      currentLabel: "截至 2026-04-04 晚间：Unaós - Borgarfjörður (Vatnsskarð) = Impassable",
      shortRule: "早晨仍未解除 Impassable 就不要强闯，先联系 Blábjörg 与 Hotel Kea。",
      detail:
        "这是整个行程的第一道闸门。只要这段还关着，后面再漂亮的北部景点都不该成为继续硬开的理由。",
      sourceKeys: ["umferdin-home", "road-91153", "road-91115"],
    },
    {
      id: "crossNorth",
      title: "Mývatn 横穿段",
      zone: "Route 1 / Reykjahlíð 周边",
      currentStatus: "warning",
      currentLabel: "Mývatnssveit = Snow / snowshowers；Mývatnsöræfi 曾出现 Impassable",
      shortRule: "主线可争取，但要把 Mývatn 核心圈放在白天能见度较好的时段。",
      detail:
        "这意味着 A 线可以保留，但要接受雪、结冰和速度明显下降的现实，不适合再额外塞 Dettifoss。",
      sourceKeys: ["umferdin-home", "road-91115"],
    },
    {
      id: "husavik",
      title: "Húsavík 支线",
      zone: "Mývatn → Húsavík → Goðafoss / Akureyri",
      currentStatus: "warning",
      currentLabel: "Norðausturvegur 部分为 Slippery",
      shortRule: "只在中午前进度正常、且支线不高于 Slippery 时启用。",
      detail:
        "Húsavík 是锦上添花，不是救命景点。只要你们离开 Mývatn 核心圈时已经拖慢，立刻砍掉支线。",
      sourceKeys: ["umferdin-home", "road-91115"],
    },
  ],
  routes: [
    {
      id: "a",
      label: "A 线",
      title: "主推荐",
      badge: "主线",
      normalDriveMinutes: 245,
      snowBufferMinutes: 90,
      stopMinutes: 190,
      wholeDayEstimate: "8-10 小时",
      departure: "07:15",
      arrivalWindow: ["15:50", "17:45"],
      summary:
        "Bakkagerði → Egilsstaðir → Hverir / Grjótagjá / Dimmuborgir 或 Skútustaðagígar（三选二）→ Goðafoss → Akureyri",
      mustKeep: [
        "Goðafoss 必留",
        "Mývatn 地热 / 火山景观至少两处",
        "Egilsstaðir 作为补给和缓冲节点",
      ],
      watchouts: [
        "只要 94 号路门槛没打开，A 线直接转入暂停",
        "不要为了多打卡把 Mývatn 核心圈塞到傍晚",
        "Dettifoss 东西两侧今天都不适合作为主计划",
      ],
      scenarioStatus: {
        closed94: "blocked",
        aOnly: "recommended",
        abOpen: "recommended",
      },
      polyline: [
        "blabjorg",
        "egilsstadir",
        "hverir",
        "grjotagja",
        "dimmuborgir",
        "skutustadagigar",
        "godafoss",
        "akureyri",
      ],
    },
    {
      id: "b",
      label: "B 线",
      title: "拉满版",
      badge: "条件加分",
      normalDriveMinutes: 305,
      snowBufferMinutes: 120,
      stopMinutes: 220,
      wholeDayEstimate: "10-12 小时",
      departure: "07:15",
      arrivalWindow: ["17:50", "19:55"],
      summary:
        "在 A 线基础上加入 Húsavík 港口 / 灯塔 / GeoSea 可选段，适合天气稍缓和且你们上午推进顺利的时候。",
      mustKeep: [
        "Mývatn 核心圈完成后再看 Húsavík",
        "中午前若节奏顺畅，再决定是否拐去海边",
        "回 Akureyri 仍以 Goðafoss 收尾",
      ],
      watchouts: [
        "只要 Mývatn → Húsavík 或 Húsavík → Akureyri 高于 Slippery，立刻放弃",
        "B 线是加分不是刚需，晚到 Akureyri 的代价是真实存在的",
        "GeoSea 仅作选项，不嵌进必须时序",
      ],
      scenarioStatus: {
        closed94: "blocked",
        aOnly: "conditional",
        abOpen: "recommended",
      },
      polyline: [
        "blabjorg",
        "egilsstadir",
        "hverir",
        "grjotagja",
        "dimmuborgir",
        "skutustadagigar",
        "husavik",
        "geosea",
        "godafoss",
        "akureyri",
      ],
    },
    {
      id: "c",
      label: "C 线",
      title: "保底版",
      badge: "安全优先",
      normalDriveMinutes: 245,
      snowBufferMinutes: 135,
      stopMinutes: 60,
      wholeDayEstimate: "5-7 小时",
      departure: "07:15",
      arrivalWindow: ["12:30", "14:45"],
      summary:
        "如果北部横穿条件持续恶化，只保留 Egilsstaðir 补给和必要过路停靠，把目标调整成安全到 Akureyri 或及时止损沟通住宿。",
      mustKeep: [
        "补给、热饮、油量和体力管理优先",
        "只在安全停车点短停拍照",
        "把体感最差的支线全部砍掉",
      ],
      watchouts: [
        "C 线不是失败，而是雪天里最理性的保底动作",
        "一旦出现更差的关路信息，优先联系两端住宿而不是继续赌",
        "别把 C 线偷偷执行成 A 线的半残版",
      ],
      scenarioStatus: {
        closed94: "recommended",
        aOnly: "available",
        abOpen: "available",
      },
      polyline: ["blabjorg", "egilsstadir", "godafoss", "akureyri"],
    },
  ],
  stops: [
    {
      id: "blabjorg",
      name: "Blábjörg Resort / Bakkagerði",
      coords: [65.5279173, -13.8161364],
      category: "起点",
      stopMinutes: 0,
      fee: "已住宿",
      snowSkip: "不可跳过",
      priority: "必须保留",
      blurb: "默认 07:00-07:30 之间离店，先查 94 号路再正式出发。",
    },
    {
      id: "egilsstadir",
      name: "Egilsstaðir",
      coords: [65.2620412, -14.4035258],
      category: "补给 / 缓冲",
      stopMinutes: 25,
      fee: "按消费",
      snowSkip: "不建议跳过",
      priority: "必须保留",
      blurb: "最稳的补给点，用来加油、补热饮、校正节奏，也是你们是否继续冲北部的现实分水岭。",
    },
    {
      id: "hverir",
      name: "Hverir",
      coords: [65.6414205, -16.808015],
      category: "地热地貌",
      stopMinutes: 35,
      fee: "免费",
      snowSkip: "不建议跳过",
      priority: "高优先候选",
      blurb: "最能一下子把“北部值得来”体现出来的点之一，硫磺烟雾、沸泥和火山灰色系都很强烈。",
    },
    {
      id: "grjotagja",
      name: "Grjótagjá",
      coords: [65.6264141, -16.8829708],
      category: "岩洞 / 温泉遗迹",
      stopMinutes: 20,
      fee: "免费",
      snowSkip: "雪大可跳过",
      priority: "高优先候选",
      blurb: "短停型景点，适合在体力还行、停车和步道条件都没问题时快速看完。",
    },
    {
      id: "dimmuborgir",
      name: "Dimmuborgir",
      coords: [65.5880547, -16.9079361],
      category: "熔岩迷宫",
      stopMinutes: 40,
      fee: "免费",
      snowSkip: "看风雪情况",
      priority: "高优先候选",
      blurb: "如果想要一处更有“黑色熔岩废土感”的北部代表景点，这里很值得保留。",
    },
    {
      id: "skutustadagigar",
      name: "Skútustaðagígar",
      coords: [65.5713765, -17.033733],
      category: "湖边火山口",
      stopMinutes: 25,
      fee: "免费",
      snowSkip: "风大可跳过",
      priority: "高优先候选",
      blurb: "拍照效率高，湖、火山口和雪地一起出现时很有北部识别度。",
    },
    {
      id: "husavik",
      name: "Húsavík 港口",
      coords: [66.0433168, -17.3410402],
      category: "海港支线",
      stopMinutes: 30,
      fee: "免费",
      snowSkip: "可以直接跳过",
      priority: "仅条件允许",
      blurb: "北部海边风景确实好，但它吃掉的是今天最贵的资源：白天、体力和酒店到达时间。",
    },
    {
      id: "geosea",
      name: "GeoSea",
      coords: [66.0526186, -17.3612942],
      category: "泡汤可选",
      stopMinutes: 90,
      fee: "付费",
      snowSkip: "默认跳过",
      priority: "仅条件允许",
      blurb: "只保留在页面里当作可选项，不建议把它写进主线时序，否则很容易把全天拉崩。",
    },
    {
      id: "godafoss",
      name: "Goðafoss",
      coords: [65.6828162, -17.550624],
      category: "瀑布",
      stopMinutes: 35,
      fee: "免费",
      snowSkip: "不建议跳过",
      priority: "必须保留",
      blurb: "这条线里最稳、最值、最适合作为压轴的大景点。就算今天只能留一个北部标志点，也该是它。",
    },
    {
      id: "akureyri",
      name: "Hotel Kea by Keahotels",
      coords: [65.6805576, -18.0897903],
      category: "终点",
      stopMinutes: 0,
      fee: "已预订",
      snowSkip: "不可跳过",
      priority: "必须到达",
      blurb: "今天最终目标是安全入住，不是把每一个名点都塞进来。",
    },
  ],
  sources: [
    {
      key: "umferdin-home",
      label: "官方路况总图",
      type: "官方 / 核心",
      note: "真正上路前第一个要点开的页面。",
      url: "https://umferdin.is/en",
    },
    {
      key: "road-91153",
      label: "Hafnarhólmavegur: Borgarfjörður eystri",
      type: "官方 / 出山段",
      note: "Bakkagerði 本地出山相关页面。",
      url: "https://umferdin.is/en/road/91153",
    },
    {
      key: "road-91115",
      label: "Borgarfjarðarvegur: Eiðar - Unaós",
      type: "官方 / 94 号路",
      note: "94 号路东部段，可和上面的出山页一起看。",
      url: "https://umferdin.is/en/road/91115",
    },
    {
      key: "time-start-egils",
      label: "Blábjörg → Egilsstaðir 时间基线",
      type: "路段基线",
      note: "页面采用 55 分钟作为晴天基线。",
      url: "https://www.rome2rio.com/s/Blabjorg-Resort-Borgarfjordur-Eystri/Egilssta%C3%B0ir",
    },
    {
      key: "time-egils-reykjahlid",
      label: "Egilsstaðir → Reykjahlíð 时间基线",
      type: "路段基线",
      note: "页面采用 2 小时 4 分作为晴天基线。",
      url: "https://www.rome2rio.com/fr/s/Egilssta%C3%B0ir/Reykjahl%C3%AD%C3%B0",
    },
    {
      key: "time-reykjahlid-akureyri",
      label: "Reykjahlíð → Akureyri 时间基线",
      type: "路段基线",
      note: "页面采用 1 小时 6 分作为晴天基线。",
      url: "https://www.rome2rio.com/s/Reykjahl%C3%AD%C3%B0/Akureyri",
    },
    {
      key: "time-husavik-godafoss",
      label: "Húsavík → Goðafoss 时间基线",
      type: "路段基线",
      note: "页面采用 36 分钟作为支线判断基线。",
      url: "https://www.rome2rio.com/nl/s/H%C3%BAsav%C3%ADk/Godafoss-Waterfall",
    },
    {
      key: "time-husavik-myvatn",
      label: "Húsavík → Mývatn 时间基线",
      type: "路段基线",
      note: "页面采用 45 分钟作为支线判断基线。",
      url: "https://www.rome2rio.com/s/Husavik-Iceland/M%C3%BDvatn",
    },
    {
      key: "visit-myvatn",
      label: "Visit Mývatn 步道参考",
      type: "景点参考",
      note: "看步行量和当日临场体感时有用。",
      url: "https://www.visitmyvatn.is/is/gonguleidir",
    },
    {
      key: "blabjorg-faq",
      label: "Blábjörg FAQ",
      type: "住宿参考",
      note: "万一要调整计划，可以直接回查住宿信息。",
      url: "https://blabjorg.is/faq/",
    },
    {
      key: "geosea",
      label: "GeoSea / Húsavík region",
      type: "支线参考",
      note: "只作为条件允许时的加分项。",
      url: "https://visithusavik.com/activities/bathing-and-swimming/geosea/",
    },
  ],
};

const weatherTrend = [
  {
    place: "Egilsstaðir",
    temp: "-13°C 到 0°C",
    wind: "最高约 22 km/h",
    trend: "全天偏雪，凌晨到中午最差",
    note: "重雪到雪阵，属于今天是否值得继续横穿的现实判断点。",
  },
  {
    place: "Mývatn",
    temp: "-14°C 到 -2°C",
    wind: "最高约 21 km/h",
    trend: "白天前段雪阵，傍晚有望转晴",
    note: "景色最强的地方也是最容易把节奏拖慢的地方，主计划应集中在白天。",
  },
  {
    place: "Húsavík",
    temp: "-14°C 到 -2°C",
    wind: "最高约 21 km/h",
    trend: "与 Mývatn 类似，支线价值高但风险更依赖进度",
    note: "路况只要比 Slippery 更糟，就把它当作今天不该去的海边。",
  },
  {
    place: "Akureyri",
    temp: "-14°C 到 -1°C",
    wind: "最高约 8 km/h",
    trend: "风相对小，但雪阵仍持续",
    note: "终点不代表绝对轻松，夜间和傍晚到达仍要预留减速空间。",
  },
];

const scenarios = {
  closed94: {
    label: "94 号路关闭",
    hero:
      "如果 2026-04-05 早晨 94 号路的 Unaós - Borgarfjörður 段仍然是 Impassable，今天最合理的动作不是硬开，而是先暂停出发、立刻联系 Blábjörg 和 Hotel Kea，等待官方更新或调整住宿。",
    gateLead: "今天最重要的结论：出发闸门没开，所有后续美景都先让位给安全。",
    mapCaption: "当前场景：A / B 线保留在图上做预案，但真正建议执行的是 C 线或直接暂停出发。",
    recommendedRoute: "c",
    routeStates: {
      road94: "danger",
      crossNorth: "warning",
      husavik: "warning",
    },
  },
  aOnly: {
    label: "A 线可走但 Húsavík 不建议",
    hero:
      "如果 94 号路早晨解除封闭，但 Mývatn 和 Húsavík 方向仍然是 Snow / Slippery，那么今天最值的打法是稳走 A 线：先把 Mývatn 核心圈和 Goðafoss 吃满，再把 Húsavík 砍掉。",
    gateLead: "今天的正确心法：主线可以争取，支线不要贪。",
    mapCaption: "当前场景：优先 A 线，B 线只保留在地图上作为预案，不建议实走。",
    recommendedRoute: "a",
    routeStates: {
      road94: "good",
      crossNorth: "warning",
      husavik: "warning",
    },
  },
  abOpen: {
    label: "A / B 线都可展示",
    hero:
      "如果 94 号路已恢复通行，Mývatn 横穿段可接受，且 Húsavík 支线不高于 Slippery，那么可以保留 A 线为主推荐，并把 B 线作为上午推进顺利后的拉满版加分项。",
    gateLead: "今天的策略：先按 A 线起跑，到中午前再决定是否加 Húsavík。",
    mapCaption: "当前场景：A 线主推荐，B 线为条件允许时的拉满版，C 线仍然作为保底存在。",
    recommendedRoute: "a",
    routeStates: {
      road94: "good",
      crossNorth: "good",
      husavik: "good",
    },
  },
};

const routeLegNotes = [
  { label: "Blábjörg → Egilsstaðir", normal: 55, note: "第一段先把补给和节奏稳定下来。" },
  { label: "Egilsstaðir → Reykjahlíð", normal: 124, note: "横切去 Mývatn 的主干时间，雪天要明显加缓冲。" },
  { label: "Reykjahlíð → Akureyri", normal: 66, note: "A 线和 C 线收尾基线。" },
  { label: "Húsavík → Akureyri", normal: 63, note: "B 线如果放弃 Goðafoss 可直接回城。" },
  { label: "Húsavík → Goðafoss", normal: 36, note: "B 线绕回主线的基线时间。" },
  { label: "Húsavík → Mývatn", normal: 45, note: "支线自身会吃掉不少白天资源。" },
];

const elements = {
  heroMessage: document.querySelector("#hero-message"),
  heroMetrics: document.querySelector("#hero-metrics"),
  gateSummary: document.querySelector("#gate-summary"),
  weatherGrid: document.querySelector("#weather-grid"),
  gatesGrid: document.querySelector("#gates-grid"),
  mapCaption: document.querySelector("#map-caption"),
  mapOverview: document.querySelector("#map-overview"),
  routeGrid: document.querySelector("#route-grid"),
  stopGrid: document.querySelector("#stop-grid"),
  timeline: document.querySelector("#timeline"),
  arrivalSummary: document.querySelector("#arrival-summary"),
  sourceList: document.querySelector("#source-list"),
  scenarioButtons: Array.from(document.querySelectorAll("[data-scenario]")),
};

const statusMeta = {
  good: { label: "可打开", className: "status-good" },
  warning: { label: "谨慎", className: "status-warning" },
  danger: { label: "暂停", className: "status-danger" },
  muted: { label: "仅参考", className: "status-muted" },
  recommended: { label: "推荐执行", className: "status-good" },
  conditional: { label: "条件允许", className: "status-warning" },
  available: { label: "保留预案", className: "status-muted" },
  blocked: { label: "暂停执行", className: "status-danger" },
};

let activeScenario = "aOnly";
let map;
let routeLayers = {};
let markerLayer;
let keyLabelLayer;

const mapOverviewStops = [
  { key: "gate", title: "出发闸门", body: "94 号路 / Bakkagerði", meta: "07:15 前先核验" },
  { key: "egilsstadir", title: "补给锚点", body: "Egilsstaðir", meta: "55 分基线" },
  { key: "myvatn", title: "核心美景", body: "Mývatn 火山地热圈", meta: "至少两处" },
  { key: "husavik", title: "拉满加分", body: "Húsavík 海港线", meta: "仅条件允许" },
  { key: "godafoss", title: "压轴", body: "Goðafoss", meta: "必须保留" },
  { key: "finish", title: "入住", body: "Hotel Kea", meta: "Akureyri" },
];

const mapLabelAnchors = [
  { name: "Bakkagerði", coords: [65.5279173, -13.8161364], index: "1" },
  { name: "Egilsstaðir", coords: [65.2620412, -14.4035258], index: "2" },
  { name: "Mývatn 核心圈", coords: [65.611, -16.905], index: "3" },
  { name: "Húsavík", coords: [66.0433168, -17.3410402], index: "4" },
  { name: "Goðafoss", coords: [65.6828162, -17.550624], index: "5" },
  { name: "Akureyri", coords: [65.6805576, -18.0897903], index: "6" },
];

function sourceByKey(key) {
  return routeData.sources.find((item) => item.key === key);
}

function getStatusBadge(statusKey) {
  const meta = statusMeta[statusKey] || statusMeta.muted;
  return `<span class="status-badge ${meta.className}">${meta.label}</span>`;
}

function minutesToHours(minutes) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours} 小时` : `${hours} 小时 ${rest} 分`;
}

function addMinutesToTime(time, minutes) {
  const [hourText, minuteText] = time.split(":");
  const base = Number(hourText) * 60 + Number(minuteText) + minutes;
  const hour = Math.floor(base / 60) % 24;
  const minute = base % 60;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function renderHero() {
  const scenario = scenarios[activeScenario];
  const recommended = routeData.routes.find((route) => route.id === scenario.recommendedRoute);

  elements.heroMessage.textContent = scenario.hero;
  elements.heroMetrics.innerHTML = `
    <div class="metric"><strong>旅行日期</strong>${routeData.travelDate}</div>
    <div class="metric"><strong>建议起步</strong>${recommended.departure}</div>
    <div class="metric"><strong>主打方案</strong>${recommended.label} ${recommended.title}</div>
    <div class="metric"><strong>当天总估算</strong>${recommended.wholeDayEstimate}</div>
    <div class="metric"><strong>数据更新</strong>${routeData.updatedAt}</div>
  `;

  const gate = routeData.gates[0];
  const gateStatus = scenario.routeStates.road94;
  elements.gateSummary.innerHTML = `
    <div class="gate-summary-head">
      <div>
        <h3>${gate.title}</h3>
        <p class="lead-short">${scenario.gateLead}</p>
      </div>
      ${getStatusBadge(gateStatus)}
    </div>
    <div class="gate-summary-body">
      <p><strong>当前判断：</strong>${gate.currentLabel}</p>
      <p><strong>明早动作：</strong>${gate.shortRule}</p>
    </div>
    <div class="gate-tags">
      <span class="pill">${routeData.travelDate} 早晨先核验</span>
      <span class="pill">今天不是赌运气的日子</span>
    </div>
  `;

  elements.scenarioButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.scenario === activeScenario);
  });
}

function renderWeather() {
  elements.weatherGrid.innerHTML = weatherTrend
    .map(
      (item) => `
        <article class="weather-card card">
          <div class="section-chip">${item.place}</div>
          <h3>${item.temp}</h3>
          <p>${item.trend}</p>
          <div class="weather-meta">
            <span class="pill">${item.wind}</span>
            <span class="pill">趋势参考，不替代路况</span>
          </div>
          <p class="weather-note">${item.note}</p>
        </article>
      `,
    )
    .join("");
}

function renderMapOverview() {
  const recommended = routeData.routes.find((route) => route.id === scenarios[activeScenario].recommendedRoute);
  const showHusavik = recommended.id === "b" || activeScenario === "abOpen";
  const cards = mapOverviewStops.filter((item) => (item.key === "husavik" ? showHusavik : true));

  elements.mapOverview.innerHTML = cards
    .map(
      (item) => `
        <article class="overview-card">
          <span class="overview-meta">${item.meta}</span>
          <strong>${item.title}</strong>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderGates() {
  const scenario = scenarios[activeScenario];

  elements.gatesGrid.innerHTML = routeData.gates
    .map((gate) => {
      const currentStatus = scenario.routeStates[gate.id] || gate.currentStatus;
      return `
        <article class="gate-body card">
          <div class="section-chip">${gate.zone}</div>
          <h3>${gate.title}</h3>
          <p>${gate.detail}</p>
          <div class="gate-tags">
            ${getStatusBadge(currentStatus)}
            <span class="pill">${gate.currentLabel}</span>
          </div>
          <p><strong>执行门槛：</strong>${gate.shortRule}</p>
        </article>
      `;
    })
    .join("");
}

function renderRoutes() {
  const scenario = scenarios[activeScenario];

  elements.routeGrid.innerHTML = routeData.routes
    .map((route) => {
      const state = route.scenarioStatus[activeScenario];
      const isHighlight = route.id === scenario.recommendedRoute;
      return `
        <article class="route-card card ${isHighlight ? "is-highlight" : ""}">
          <div class="route-head">
            <div class="route-copy">
              <div class="section-chip">${route.label}</div>
              <h3>${route.title}</h3>
              <p>${route.summary}</p>
            </div>
            ${getStatusBadge(state)}
          </div>

          <div class="route-meta">
            <span class="pill"><strong>基线驾驶</strong>${minutesToHours(route.normalDriveMinutes)}</span>
            <span class="pill"><strong>雪天增量</strong>+ ${minutesToHours(route.snowBufferMinutes)}</span>
            <span class="pill"><strong>当天总估算</strong>${route.wholeDayEstimate}</span>
          </div>

          <ul class="route-points">
            <li><strong>必须保留：</strong>${route.mustKeep.join("；")}</li>
            <li><strong>主要提醒：</strong>${route.watchouts.join("；")}</li>
            <li><strong>离店 / 到店窗口：</strong>${route.departure} 左右出发，预计 ${route.arrivalWindow[0]} - ${route.arrivalWindow[1]} 到 Hotel Kea</li>
          </ul>
        </article>
      `;
    })
    .join("");
}

function renderStops() {
  elements.stopGrid.innerHTML = routeData.stops
    .map(
      (stop) => `
        <article class="stop-card card">
          <div class="stop-head">
            <div class="stop-copy">
              <div class="section-chip">${stop.category}</div>
              <h3>${stop.name}</h3>
              <p>${stop.blurb}</p>
            </div>
            ${getStatusBadge(stop.priority === "必须保留" ? "recommended" : stop.priority === "高优先候选" ? "conditional" : "available")}
          </div>
          <div class="stop-meta">
            <span class="pill"><strong>建议停留</strong>${stop.stopMinutes === 0 ? "不额外停留" : `${stop.stopMinutes} 分钟`}</span>
            <span class="pill"><strong>费用</strong>${stop.fee}</span>
            <span class="pill"><strong>雪天策略</strong>${stop.snowSkip}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderTimeline() {
  const recommended = routeData.routes.find((route) => route.id === scenarios[activeScenario].recommendedRoute);
  const timelineRows = [
    {
      time: recommended.departure,
      title: "从 Blábjörg 离店",
      note: "先打开官方路况页确认 94 号路门槛，再决定是否真的启动今天计划。",
    },
    {
      time: addMinutesToTime(recommended.departure, 55),
      title: "Egilsstaðir 补给窗口",
      note: "加油、热饮、上洗手间、重新判断今天节奏和能见度。",
    },
    {
      time: addMinutesToTime(recommended.departure, 55 + 124 + 35),
      title: "Mývatn 核心圈",
      note: "优先 Hverir，再看体力与风雪在 Grjótagjá / Dimmuborgir / Skútustaðagígar 中做两到三个点。",
    },
    {
      time: activeScenario === "abOpen" ? "13:30 前后" : "14:30 前后",
      title: activeScenario === "abOpen" ? "决定是否打开 Húsavík" : "放弃 Húsavík，直接收 Goðafoss",
      note:
        activeScenario === "abOpen"
          ? "只有上午推进顺畅、道路不高于 Slippery 时才加 B 线。"
          : "把所有额外支线砍掉，专心把大景点和入住时间守住。",
    },
    {
      time: activeScenario === "closed94" ? "待定" : recommended.arrivalWindow[0],
      title: "Hotel Kea 到店下限",
      note:
        activeScenario === "closed94"
          ? "如果 94 号路没开，真正的动作应是暂停，而不是勉强给出一个不现实的到店时刻。"
          : `这条方案的保守到店窗口为 ${recommended.arrivalWindow[0]} - ${recommended.arrivalWindow[1]}。`,
    },
  ];

  elements.timeline.innerHTML = `
    <div class="timeline-list">
      ${timelineRows
        .map(
          (row) => `
            <div class="timeline-row">
              <div class="timeline-time">${row.time}</div>
              <div>
                <strong>${row.title}</strong>
                <p>${row.note}</p>
              </div>
            </div>
          `,
        )
        .join("")}
    </div>
    <div class="route-meta" style="margin-top: 20px;">
      ${routeLegNotes
        .map(
          (leg) => `<span class="pill"><strong>${leg.label}</strong>${minutesToHours(leg.normal)}</span>`,
        )
        .join("")}
    </div>
  `;
}

function renderArrivalSummary() {
  const scenario = scenarios[activeScenario];
  const recommended = routeData.routes.find((route) => route.id === scenario.recommendedRoute);
  const alternates = routeData.routes.filter((route) => route.id !== recommended.id);

  elements.arrivalSummary.innerHTML = `
    <p>
      当前场景下主推荐是 <strong>${recommended.label} ${recommended.title}</strong>。默认按 07:15 出发，不做长徒步、不预订鲸鱼船，也不把 GeoSea 写进必做时序。
    </p>
    <div class="arrival-window">
      <strong>${recommended.label} ${recommended.title}</strong>
      <p>保守到店：${recommended.arrivalWindow[0]} - ${recommended.arrivalWindow[1]}</p>
      <p>基线驾驶 ${minutesToHours(recommended.normalDriveMinutes)}，雪天再加 ${minutesToHours(recommended.snowBufferMinutes)}。</p>
    </div>
    ${alternates
      .map(
        (route) => `
          <div class="arrival-window">
            <strong>${route.label} ${route.title}</strong>
            <p>参考到店：${route.arrivalWindow[0]} - ${route.arrivalWindow[1]}</p>
            <p>整天估算 ${route.wholeDayEstimate}</p>
          </div>
        `,
      )
      .join("")}
  `;
}

function renderSources() {
  elements.sourceList.innerHTML = routeData.sources
    .map(
      (source) => `
        <div class="source-item">
          <div>
            <strong>${source.label}</strong>
            <p>${source.note}</p>
            <div class="source-tags">
              <span class="pill">${source.type}</span>
            </div>
          </div>
          <a href="${source.url}" target="_blank" rel="noreferrer noopener">打开链接</a>
        </div>
      `,
    )
    .join("");
}

function initMap() {
  const mapEl = document.querySelector("#map");
  const fallbackEl = document.querySelector("#map-fallback");

  if (!mapEl) {
    return;
  }

  if (typeof window.L === "undefined") {
    fallbackEl.classList.remove("hidden");
    fallbackEl.textContent = "Leaflet 未加载，已保留文本版路线、停靠点和官方核验链接。";
    return;
  }

  map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: true,
  }).setView([65.66, -16.6], 7);

  const tileLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
    maxZoom: 18,
    subdomains: "abcd",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  });

  tileLayer.on("tileerror", () => {
    fallbackEl.classList.remove("hidden");
    fallbackEl.textContent = "地图瓦片加载失败，但文本版路线、停靠点和官方核验链接仍可直接使用。";
  });

  tileLayer.addTo(map);
  fallbackEl.classList.remove("hidden");

  markerLayer = L.layerGroup().addTo(map);
  keyLabelLayer = L.layerGroup().addTo(map);
  createRouteLayers();
  renderMapMarkers();
  updateMapScenario();
}

function createRouteLayers() {
  const styles = {
    a: {
      glow: { color: "#7fdcff", weight: 13, opacity: 0.26 },
      line: { color: "#0b7fa6", weight: 6, opacity: 0.94 },
    },
    b: {
      glow: { color: "#8ee0bf", weight: 11, opacity: 0.2, dashArray: "12 14" },
      line: { color: "#2ea879", weight: 5, opacity: 0.86, dashArray: "12 14" },
    },
    c: {
      glow: { color: "#f6d8a3", weight: 9, opacity: 0.24, dashArray: "4 10" },
      line: { color: "#f2b66b", weight: 4, opacity: 0.92, dashArray: "4 10" },
    },
  };

  routeData.routes.forEach((route) => {
    const latLngs = route.polyline.map((stopId) => routeData.stops.find((stop) => stop.id === stopId)?.coords);
    routeLayers[route.id] = {
      glow: L.polyline(latLngs, styles[route.id].glow),
      line: L.polyline(latLngs, styles[route.id].line).bindPopup(
        `<strong>${route.label} ${route.title}</strong><br>${route.summary}`,
      ),
    };
  });
}

function buildLabelIcon(anchor) {
  return L.divIcon({
    className: "route-label-marker",
    html: `
      <div class="route-label-chip">
        <span class="route-label-index">${anchor.index}</span>
        <span class="route-label-name">${anchor.name}</span>
      </div>
    `,
    iconSize: [120, 30],
    iconAnchor: [20, 15],
  });
}

function renderMapMarkers() {
  markerLayer.clearLayers();
  keyLabelLayer.clearLayers();

  routeData.stops.forEach((stop) => {
    const marker = L.circleMarker(stop.coords, {
      radius: stop.priority === "必须保留" ? 6 : 5,
      color: "#ffffff",
      weight: 2,
      fillColor: stop.priority === "必须保留" ? "#0b7fa6" : stop.priority === "高优先候选" ? "#2ea879" : "#f2b66b",
      fillOpacity: 0.92,
    }).bindPopup(
      `<strong>${stop.name}</strong><br>${stop.category}<br>建议停留：${stop.stopMinutes === 0 ? "不额外停留" : `${stop.stopMinutes} 分钟`}<br>${stop.blurb}`,
    );
    marker.addTo(markerLayer);
  });

  mapLabelAnchors.forEach((anchor) => {
    L.marker(anchor.coords, { icon: buildLabelIcon(anchor), keyboard: false }).addTo(keyLabelLayer);
  });
}

function updateMapScenario() {
  if (!map) {
    return;
  }

  elements.mapCaption.textContent = scenarios[activeScenario].mapCaption;
  Object.values(routeLayers).forEach((routeLayer) => {
    Object.values(routeLayer).forEach((layer) => {
      if (map.hasLayer(layer)) {
        map.removeLayer(layer);
      }
    });
  });

  Object.values(routeLayers).forEach((routeLayer) => {
    routeLayer.glow.addTo(map);
    routeLayer.line.addTo(map);
  });

  if (activeScenario === "closed94") {
    routeLayers.a.glow.setStyle({ opacity: 0.08 });
    routeLayers.a.line.setStyle({ opacity: 0.24 });
    routeLayers.b.glow.setStyle({ opacity: 0.04 });
    routeLayers.b.line.setStyle({ opacity: 0.14 });
    routeLayers.c.glow.setStyle({ opacity: 0.24 });
    routeLayers.c.line.setStyle({ opacity: 0.92 });
  } else if (activeScenario === "aOnly") {
    routeLayers.a.glow.setStyle({ opacity: 0.24 });
    routeLayers.a.line.setStyle({ opacity: 0.95 });
    routeLayers.b.glow.setStyle({ opacity: 0.08 });
    routeLayers.b.line.setStyle({ opacity: 0.28 });
    routeLayers.c.glow.setStyle({ opacity: 0.12 });
    routeLayers.c.line.setStyle({ opacity: 0.48 });
  } else {
    routeLayers.a.glow.setStyle({ opacity: 0.24 });
    routeLayers.a.line.setStyle({ opacity: 0.95 });
    routeLayers.b.glow.setStyle({ opacity: 0.18 });
    routeLayers.b.line.setStyle({ opacity: 0.82 });
    routeLayers.c.glow.setStyle({ opacity: 0.08 });
    routeLayers.c.line.setStyle({ opacity: 0.34 });
  }

  const boundsRoute = activeScenario === "closed94" ? routeLayers.c.line : routeLayers.a.line;
  map.fitBounds(boundsRoute.getBounds().pad(0.22), {
    animate: true,
    duration: 0.4,
  });
}

function renderMapSection() {
  renderMapOverview();

  if (!map) {
    return;
  }

  if (activeScenario === "closed94") {
    keyLabelLayer.eachLayer((layer) => {
      const html = layer.getElement();
      if (html) {
        html.style.opacity = "0.74";
      }
    });
  } else {
    keyLabelLayer.eachLayer((layer) => {
      const html = layer.getElement();
      if (html) {
        html.style.opacity = "1";
      }
    });
  }
}

function renderScenario() {
  renderHero();
  renderGates();
  renderRoutes();
  renderTimeline();
  renderArrivalSummary();
  renderMapSection();
  updateMapScenario();
}

function bindScenarioButtons() {
  elements.scenarioButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeScenario = button.dataset.scenario;
      renderScenario();
    });
  });
}

function init() {
  renderWeather();
  renderStops();
  renderSources();
  bindScenarioButtons();
  initMap();
  renderScenario();
}

init();
