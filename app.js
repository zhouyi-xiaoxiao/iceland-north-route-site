const siteData = {
  travelDate: "2026-04-05",
  updatedAt: "2026-04-04 22:51 GMT",
  departureWindow: "10:00-11:00",
  departureTarget: "10:30",
  arrivalGoal: "22:00 前到 Akureyri",
  fullRouteDrive: "约 5 小时 35 分",
  fullRouteWithStops: "约 10-12 小时",
  summary:
    "如果 94 号路早晨能开，今天最值的拉满路线就是：Egilsstaðir 补给后直奔 Mývatn 核心圈，接着在路感还可以时加上 Húsavík，最后用 Goðafoss 收尾，再进 Akureyri。更东北边今天不进主计划，不是因为不值，而是因为它在当前路况下更像高风险绕行。",
  routeStops: [
    {
      id: "blabjorg",
      order: 1,
      name: "Blábjörg Resort / Bakkagerði",
      shortName: "Blábjörg",
      coords: [65.5279173, -13.8161364],
      driveFromPrev: "起点",
      stay: "出发前 5-10 分钟",
      tag: "出发",
      note: "先查官方路况。94 号路没开，今天就不要硬下山。",
    },
    {
      id: "egilsstadir",
      order: 2,
      name: "Egilsstaðir",
      shortName: "Egilsstaðir",
      coords: [65.2620412, -14.4035258],
      driveFromPrev: "55 分",
      stay: "25 分",
      tag: "补给",
      note: "加油、热饮、上洗手间、补零食。这里是今天最重要的补给锚点。",
    },
    {
      id: "hverir",
      order: 3,
      name: "Hverir",
      shortName: "Hverir",
      coords: [65.6414205, -16.808015],
      driveFromPrev: "约 2 小时 4 分",
      stay: "30-35 分",
      tag: "必看",
      note: "Mývatn 核心圈里最直接震撼的点，优先级非常高。",
    },
    {
      id: "grjotagja",
      order: 4,
      name: "Grjótagjá",
      shortName: "Grjótagjá",
      coords: [65.6264141, -16.8829708],
      driveFromPrev: "约 10 分",
      stay: "15-20 分",
      tag: "短停",
      note: "短停型景点，适合快速看完。",
    },
    {
      id: "dimmuborgir",
      order: 5,
      name: "Dimmuborgir",
      shortName: "Dimmuborgir",
      coords: [65.5880547, -16.9079361],
      driveFromPrev: "约 8 分",
      stay: "30-40 分",
      tag: "必看",
      note: "黑色熔岩地貌很强，和 Hverir 形成风格反差。",
    },
    {
      id: "skutustadagigar",
      order: 6,
      name: "Skútustaðagígar",
      shortName: "Skútustaðagígar",
      coords: [65.5713765, -17.033733],
      driveFromPrev: "约 15 分",
      stay: "20-25 分",
      tag: "必看",
      note: "拍照效率高，湖边火山口很适合快进快出。",
    },
    {
      id: "husavik",
      order: 7,
      name: "Húsavík 港口",
      shortName: "Húsavík",
      coords: [66.0433168, -17.3410402],
      driveFromPrev: "约 45 分",
      stay: "25-30 分",
      tag: "加分项",
      note: "你们现在接受 22:00 前到店，所以这站可以冲；但如果支线路感不好，就直接跳过去 Goðafoss。",
      skipTo: "godafoss",
    },
    {
      id: "godafoss",
      order: 8,
      name: "Goðafoss",
      shortName: "Goðafoss",
      coords: [65.6828162, -17.550624],
      driveFromPrev: "约 36 分",
      stay: "30-35 分",
      tag: "压轴",
      note: "今天最稳最值的压轴大景点，尽量保留。",
    },
    {
      id: "akureyri",
      order: 9,
      name: "Hotel Kea by Keahotels",
      shortName: "Hotel Kea",
      coords: [65.6805576, -18.0897903],
      driveFromPrev: "约 35 分",
      stay: "入住",
      tag: "终点",
      note: "22:00 前到店就是今天的成功标准。",
    },
  ],
  summaryCards: [
    {
      tone: "danger",
      title: "94 号路没开就停",
      body: "截至 2026-04-04 晚间，Borgarfjarðarvegur 的 Unaós - Borgarfjörður 段仍是 Impassable。",
    },
    {
      tone: "warning",
      title: "Mývatn 主线仍可冲",
      body: "Mývatn 一带今天是 Snow / snowshowers，但这是最值回票价的主菜。",
    },
    {
      tone: "warning",
      title: "Húsavík 现在能当加分",
      body: "你们接受晚一点到店，所以支线只要不高于 Slippery，就可以考虑拉满。",
    },
    {
      tone: "muted",
      title: "东北边今天仍不进主计划",
      body: "Dettifoss / 更东北方向相关道路状态仍差，今天不如把北部主菜吃满。",
    },
  ],
  mapCards: [
    { meta: "10:00 前", title: "先核验 94 号路", body: "没开就别下山" },
    { meta: "55 分", title: "Egilsstaðir", body: "补给锚点" },
    { meta: "主菜", title: "Mývatn 核心圈", body: "Hverir + 熔岩地貌 + 火山口" },
    { meta: "加分", title: "Húsavík", body: "只在支线还能接受时加" },
    { meta: "压轴", title: "Goðafoss", body: "今天最稳的大景点" },
  ],
  checks: [
    {
      tone: "danger",
      title: "94 号路出山段",
      text: "Borgarfjarðarvegur: Unaós - Borgarfjörður (Vatnsskarð) 截至今晚仍是 Impassable。",
    },
    {
      tone: "warning",
      title: "Mývatn 主线",
      text: "Hringvegur: Mývatnssveit = Snow / snowshowers，Mývatnsöræfi 曾出现 Impassable。",
    },
    {
      tone: "warning",
      title: "Húsavík 支线",
      text: "Norðausturvegur: Flugvöllur - Húsavík 与 Húsavík-Máná 为 Slippery。",
    },
    {
      tone: "muted",
      title: "更东北方向",
      text: "Dettifoss 相关道路与 Vopnafjarðarheiði / Hólaheiði 今天仍不适合塞进主计划。",
    },
  ],
  sources: [
    {
      label: "官方路况总图",
      note: "真正上路前先看这个。",
      url: "https://umferdin.is/en",
    },
    {
      label: "94 号路：Eiðar - Unaós",
      note: "东部 94 号路关键页面。",
      url: "https://umferdin.is/en/road/91115",
    },
    {
      label: "Borgarfjörður eystri 出山相关页",
      note: "Bakkagerði 本地最相关。",
      url: "https://umferdin.is/en/road/91153",
    },
  ],
};

const elements = {
  heroSummary: document.querySelector("#hero-summary"),
  heroMetrics: document.querySelector("#hero-metrics"),
  summaryStrip: document.querySelector("#summary-strip"),
  gateCard: document.querySelector("#gate-card"),
  mapCaption: document.querySelector("#map-caption"),
  mapOverview: document.querySelector("#map-overview"),
  navList: document.querySelector("#nav-list"),
  routeSummary: document.querySelector("#route-summary"),
  routeMeta: document.querySelector("#route-meta"),
  sourceList: document.querySelector("#source-list"),
  footerMeta: document.querySelector("#footer-meta"),
  fullRouteLink: document.querySelector("#full-route-link"),
  hotelLink: document.querySelector("#hotel-link"),
};

let map;
let routeLayer;
let routeGlowLayer;
let markerLayer;
let labelLayer;

const statusMeta = {
  good: { label: "可冲", className: "status-good" },
  warning: { label: "谨慎", className: "status-warning" },
  danger: { label: "暂停", className: "status-danger" },
  muted: { label: "不进主计划", className: "status-muted" },
};

function getStopById(id) {
  return siteData.routeStops.find((stop) => stop.id === id);
}

function getStatusBadge(statusKey) {
  const meta = statusMeta[statusKey] || statusMeta.warning;
  return `<span class="status-badge ${meta.className}">${meta.label}</span>`;
}

function coordsText(stop) {
  return `${stop.coords[0]},${stop.coords[1]}`;
}

function googleSearchUrl(stop) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coordsText(stop))}`;
}

function googleDirectionsUrl(fromStop, toStop) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    coordsText(fromStop),
  )}&destination=${encodeURIComponent(coordsText(toStop))}&travelmode=driving`;
}

function googleFullRouteUrl(stops) {
  const origin = coordsText(stops[0]);
  const destination = coordsText(stops[stops.length - 1]);
  const waypoints = stops.slice(1, -1).map(coordsText).join("|");
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    origin,
  )}&destination=${encodeURIComponent(destination)}&travelmode=driving&waypoints=${encodeURIComponent(waypoints)}`;
}

function renderHero() {
  elements.heroSummary.textContent = siteData.summary;
  elements.heroMetrics.innerHTML = `
    <div class="metric"><strong>出发窗口</strong>${siteData.departureWindow}</div>
    <div class="metric"><strong>建议起步</strong>${siteData.departureTarget}</div>
    <div class="metric"><strong>纯驾驶</strong>${siteData.fullRouteDrive}</div>
    <div class="metric"><strong>含停留</strong>${siteData.fullRouteWithStops}</div>
    <div class="metric"><strong>目标</strong>${siteData.arrivalGoal}</div>
  `;

  elements.summaryStrip.innerHTML = siteData.summaryCards
    .map(
      (card) => `
        <article class="summary-card">
          ${getStatusBadge(card.tone)}
          <strong>${card.title}</strong>
          <p>${card.body}</p>
        </article>
      `,
    )
    .join("");

  elements.gateCard.innerHTML = `
    <div class="section-chip">出发前先看这个</div>
    <div class="gate-copy">
      ${getStatusBadge("danger")}
      <strong>94 号路是今天的第一道门槛</strong>
      <p>如果 2026-04-05 早晨这段还没有从 Impassable 解除，就不要强行下山。那时该做的不是继续优化路线，而是先联系两端住宿。</p>
    </div>
    <div class="button-row">
      <a class="button-link" href="https://umferdin.is/en/road/91115" target="_blank" rel="noreferrer noopener">打开 94 号路页面</a>
      <a class="button-link secondary" href="https://umferdin.is/en/road/91153" target="_blank" rel="noreferrer noopener">打开 Bakkagerði 出山页</a>
    </div>
  `;
}

function renderMapSection() {
  elements.mapCaption.textContent =
    "这张图只保留今天这条拉满路线：Bakkagerði → Egilsstaðir → Mývatn 核心圈 → Húsavík → Goðafoss → Akureyri。";

  elements.mapOverview.innerHTML = siteData.mapCards
    .map(
      (card) => `
        <article class="overview-card">
          <span class="overview-meta">${card.meta}</span>
          <strong>${card.title}</strong>
          <p>${card.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderRouteSection() {
  elements.routeSummary.textContent =
    "只保留今天这条拉满路线。Google Maps 全程按钮适合总览；下面逐段按钮更适合你们路上每到一站就直接点开继续走。";
  elements.routeMeta.innerHTML = `
    <span class="pill"><strong>建议起步</strong>${siteData.departureTarget}</span>
    <span class="pill"><strong>全程纯驾驶</strong>${siteData.fullRouteDrive}</span>
    <span class="pill"><strong>含停留</strong>${siteData.fullRouteWithStops}</span>
    <span class="pill"><strong>最晚目标</strong>${siteData.arrivalGoal}</span>
  `;

  elements.navList.innerHTML = siteData.routeStops
    .map((stop, index) => {
      const prev = index > 0 ? siteData.routeStops[index - 1] : null;
      const skipTarget = stop.skipTo ? getStopById(stop.skipTo) : null;

      return `
        <article class="nav-stop">
          <div class="nav-stop-head">
            <div class="nav-stop-title">
              <div class="stop-index">${stop.order}</div>
              <div>
                <div class="section-chip">${stop.tag}</div>
                <h3>${stop.name}</h3>
                <p>${stop.note}</p>
              </div>
            </div>
            ${getStatusBadge(stop.tag === "加分项" ? "warning" : "good")}
          </div>

          <div class="notes-inline">
            <span class="pill"><strong>从上一站开</strong>${stop.driveFromPrev}</span>
            <span class="pill"><strong>建议停留</strong>${stop.stay}</span>
          </div>

          <div class="stop-links">
            <a class="button-link" href="${googleSearchUrl(stop)}" target="_blank" rel="noreferrer noopener">导航到这里</a>
            ${
              prev
                ? `<a class="button-link secondary" href="${googleDirectionsUrl(prev, stop)}" target="_blank" rel="noreferrer noopener">从上一站去这里</a>`
                : ""
            }
            ${
              skipTarget
                ? `<a class="button-link ghost" href="${googleDirectionsUrl(siteData.routeStops[index - 1], skipTarget)}" target="_blank" rel="noreferrer noopener">跳过这站直去 ${skipTarget.shortName}</a>`
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function renderSources() {
  elements.sourceList.innerHTML = siteData.sources
    .map(
      (source) => `
        <div class="source-item">
          <div>
            <strong>${source.label}</strong>
            <p>${source.note}</p>
          </div>
          <a href="${source.url}" target="_blank" rel="noreferrer noopener">打开</a>
        </div>
      `,
    )
    .join("");

  elements.footerMeta.textContent = `数据更新时间：${siteData.updatedAt}`;
}

function buildLabelIcon(stop) {
  return L.divIcon({
    className: "route-label-marker",
    html: `
      <div class="route-label-chip">
        <span class="route-label-index">${stop.order}</span>
        <span class="route-label-name">${stop.shortName}</span>
      </div>
    `,
    iconSize: [120, 30],
    iconAnchor: [20, 15],
  });
}

function initMap() {
  const mapEl = document.querySelector("#map");
  const fallbackEl = document.querySelector("#map-fallback");

  if (!mapEl || typeof window.L === "undefined") {
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
    fallbackEl.textContent = "地图底图没显示也没关系，直接点上面的 Google Maps 按钮导航。";
  });

  tileLayer.addTo(map);
  markerLayer = L.layerGroup().addTo(map);
  labelLayer = L.layerGroup().addTo(map);

  const latLngs = siteData.routeStops.map((stop) => stop.coords);
  routeGlowLayer = L.polyline(latLngs, {
    color: "#7fdcff",
    weight: 12,
    opacity: 0.24,
  }).addTo(map);
  routeLayer = L.polyline(latLngs, {
    color: "#0b7fa6",
    weight: 6,
    opacity: 0.95,
  }).addTo(map);

  siteData.routeStops.forEach((stop) => {
    L.circleMarker(stop.coords, {
      radius: 6,
      color: "#ffffff",
      weight: 2,
      fillColor: stop.tag === "加分项" ? "#2ea879" : "#0b7fa6",
      fillOpacity: 0.92,
    })
      .bindPopup(
        `<strong>${stop.name}</strong><br>${stop.tag}<br>建议停留：${stop.stay}<br><a href="${googleSearchUrl(
          stop,
        )}" target="_blank" rel="noreferrer noopener">Google Maps 打开</a>`,
      )
      .addTo(markerLayer);

    L.marker(stop.coords, { icon: buildLabelIcon(stop), keyboard: false }).addTo(labelLayer);
  });

  map.fitBounds(routeLayer.getBounds().pad(0.22), {
    animate: false,
  });
}

function initLinks() {
  elements.fullRouteLink.href = googleFullRouteUrl(siteData.routeStops);
  elements.hotelLink.href = googleSearchUrl(getStopById("akureyri"));
}

function init() {
  renderHero();
  renderMapSection();
  renderRouteSection();
  renderSources();
  initLinks();
  initMap();
}

init();
