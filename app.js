const STORAGE_KEY = "suzdal-route-votes-v1";

const DATA = {
  stay: [
    {
      id: "yellow-stars",
      title: 'Желтые Звезды',
      image: "фотографии/04_pokrovsky_monastery.jpg",
      price: "Цена по запросу",
      meta: ["центр", "дом до 8", "парковка", "баня"],
      text: "Дом на 8 человек рядом с ключевыми монастырями. Хорош для спокойного центра и пеших прогулок.",
      link: "https://yellowstarsinn.ru/"
    },
    {
      id: "u-olgi",
      title: "У Ольги",
      image: "развлечения/02_banya.jpg",
      price: "30 000 руб. / 2 дня",
      meta: ["отдельный дом", "баня", "10 мест"],
      text: "Самый понятный по цене вариант для компании. Открытый прайс: 15 000 руб. в сутки в пятницу-воскресенье для 8 человек.",
      link: "https://xn--80adfbgj4adr6aw.xn--p1ai/"
    },
    {
      id: "suzdal-terem",
      title: "Суздаль Терем",
      image: "фотографии/07_kamenka_river_suzdal.jpg",
      price: "Цена по запросу",
      meta: ["дом на 10", "сауна", "бассейн"],
      text: "Дом целиком для вечерних посиделок, банного формата и общей кухни без гостиничной атмосферы.",
      link: "https://www.suzdalterem.ru/"
    },
    {
      id: "dymov-dacha",
      title: "Дымов Дача",
      image: "фотографии/06_trading_rows_suzdal.jpg",
      price: "Цена по запросу",
      meta: ["стильно", "центр", "сервис"],
      text: "Сильный эстетический вариант: красивые дома, сервис, кейтеринг и банные программы. Цены на конкретные дома на сайте не раскрыты.",
      link: "https://dymov-dacha.ru/"
    },
    {
      id: "veles",
      title: "ВеЛес, коттедж Запольский",
      image: "фотографии/13_water_tower_vladimir.jpg",
      price: "110 000 руб. / 2 дня",
      meta: ["загородный формат", "спа", "завтрак"],
      text: "Не в центре Суздаля, зато со спа, бассейнами и инфраструктурой. Сильный комфорт, но другой формат поездки.",
      link: "https://www.velesclub.ru/wp-content/uploads/2023/07/price_may2026.pdf"
    }
  ],
  sights: [
    {
      id: "vladimir-center",
      title: "Исторический центр Владимира",
      image: "фотографии/10_golden_gate_vladimir.jpg",
      meta: ["15 мая", "короткая остановка"],
      text: "Золотые ворота, Георгиевская улица, Успенский и Дмитриевский соборы."
    },
    {
      id: "pokrova-nerli",
      title: "Покрова на Нерли",
      image: "фотографии/09_pokrova_na_nerli.jpg",
      meta: ["15 мая", "must-see"],
      text: "Одна из главных визуальных точек всей поездки. Особенно хороша в мягкий вечерний свет."
    },
    {
      id: "kremlin",
      title: "Суздальский кремль",
      image: "фотографии/01_suzdal_kremlin.jpg",
      meta: ["16 мая", "историческое ядро"],
      text: "Рождественский собор, палаты и старое сердце города."
    },
    {
      id: "wooden",
      title: "Музей деревянного зодчества",
      image: "фотографии/02_wooden_architecture_windmills.jpg",
      meta: ["16 мая", "открытый музей"],
      text: "Мельницы, деревянные храмы и очень фотогеничная часть маршрута."
    },
    {
      id: "evfimiev",
      title: "Спасо-Евфимиев монастырь",
      image: "фотографии/03_spaso_evfimiev_monastery.jpg",
      meta: ["17 мая", "большой комплекс"],
      text: "Один из главных монастырских ансамблей Суздаля, сильный финальный акцент перед выездом."
    },
    {
      id: "kideksha",
      title: "Кидекша",
      image: "фотографии/08_kideksha_boris_gleb.jpg",
      meta: ["17 мая", "на выезде"],
      text: "Белокаменная домонгольская архитектура, логичная остановка перед дорогой обратно."
    }
  ],
  fun: [
    {
      id: "mead",
      title: "Медовуха и дегустации",
      image: "развлечения/01_mead.jpg",
      meta: ["мягкий вечер", "Суздаль"],
      text: "Самый органичный местный формат для первого или второго вечера.",
      link: "https://medovukha-suzdal.ru/"
    },
    {
      id: "banya",
      title: "Русская баня",
      image: "развлечения/02_banya.jpg",
      meta: ["расслабиться", "после прогулок"],
      text: "Пушкарская слобода или городские бани — хороший коллективный вечер без суеты.",
      link: "https://www.pushkarka.ru/spa/rusbanya/"
    },
    {
      id: "karaoke",
      title: "Караоке",
      image: "развлечения/03_karaoke.jpg",
      meta: ["шумно", "компания"],
      text: "Рабочий вариант, если хочется настоящего вечернего движа, а не просто ресторан.",
      link: "https://gtksuzdal.ru/uslugi/"
    },
    {
      id: "quads",
      title: "Квадроциклы",
      image: "развлечения/04_quads.jpg",
      meta: ["активно", "окрестности"],
      text: "Вариант для тех, кому нужна не гастрономия, а адреналин и выезд в природу.",
      link: "https://kvadrosuzdal.orgs.biz/"
    }
  ]
};

function loadVotes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveVotes(votes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
}

function ensureEntry(votes, key) {
  if (!votes[key]) votes[key] = { score: 0, must: false };
  return votes[key];
}

function voteCard(item, group, votes) {
  const state = ensureEntry(votes, item.id);
  const chips = [];

  if (item.price) chips.push(`<span class="chip">${item.price}</span>`);
  item.meta.forEach((meta) => chips.push(`<span class="chip">${meta}</span>`));

  return `
    <article class="vote-card" data-group="${group}" data-id="${item.id}">
      <div class="vote-card__media">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="vote-card__body">
        <h3>${item.title}</h3>
        <div class="vote-card__meta">${chips.join("")}</div>
        <p class="vote-card__text">${item.text}</p>
        ${item.link ? `<p><a href="${item.link}" target="_blank" rel="noreferrer">Открыть источник</a></p>` : ""}
        <div class="vote-controls">
          <label>Оценка</label>
          <div class="counter">
            <button type="button" data-action="minus">-</button>
            <output>${state.score}</output>
            <button type="button" data-action="plus">+</button>
          </div>
          <label class="toggle">
            <span>Обязательно включить</span>
            <input type="checkbox" ${state.must ? "checked" : ""} data-action="must">
          </label>
        </div>
      </div>
    </article>
  `;
}

function renderLists(votes) {
  document.getElementById("stay-list").innerHTML = DATA.stay.map((item) => voteCard(item, "stay", votes)).join("");
  document.getElementById("sights-list").innerHTML = DATA.sights.map((item) => voteCard(item, "sights", votes)).join("");
  document.getElementById("fun-list").innerHTML = DATA.fun.map((item) => voteCard(item, "fun", votes)).join("");
}

function scoreOf(votes, item) {
  const state = ensureEntry(votes, item.id);
  return state.score + (state.must ? 2 : 0);
}

function topItem(items, votes) {
  return [...items].sort((a, b) => scoreOf(votes, b) - scoreOf(votes, a))[0];
}

function summaryText(votes) {
  const bestStay = topItem(DATA.stay, votes);
  const bestSight = topItem(DATA.sights, votes);
  const bestFun = topItem(DATA.fun, votes);

  return [
    "Итоги голосования по этому устройству",
    "",
    `Проживание: ${bestStay.title} — ${ensureEntry(votes, bestStay.id).score}/3${ensureEntry(votes, bestStay.id).must ? ", обязательно" : ""}`,
    `Достопримечательность: ${bestSight.title} — ${ensureEntry(votes, bestSight.id).score}/3${ensureEntry(votes, bestSight.id).must ? ", обязательно" : ""}`,
    `Развлечение: ${bestFun.title} — ${ensureEntry(votes, bestFun.id).score}/3${ensureEntry(votes, bestFun.id).must ? ", обязательно" : ""}`
  ].join("\n");
}

function updateSummary(votes) {
  const bestStay = topItem(DATA.stay, votes);
  const bestSight = topItem(DATA.sights, votes);
  const bestFun = topItem(DATA.fun, votes);

  document.getElementById("summary-stay").textContent = `${bestStay.title} (${ensureEntry(votes, bestStay.id).score}/3)`;
  document.getElementById("summary-sight").textContent = `${bestSight.title} (${ensureEntry(votes, bestSight.id).score}/3)`;
  document.getElementById("summary-fun").textContent = `${bestFun.title} (${ensureEntry(votes, bestFun.id).score}/3)`;
  document.getElementById("share-text").textContent = summaryText(votes);
}

function bindVoting(votes) {
  document.querySelectorAll(".vote-card").forEach((card) => {
    const id = card.dataset.id;
    const output = card.querySelector("output");
    const checkbox = card.querySelector('input[type="checkbox"]');
    const state = ensureEntry(votes, id);

    card.addEventListener("click", (event) => {
      const action = event.target.dataset.action;
      if (!action) return;

      if (action === "minus") state.score = Math.max(0, state.score - 1);
      if (action === "plus") state.score = Math.min(3, state.score + 1);
      if (action === "must") state.must = checkbox.checked;

      output.textContent = state.score;
      saveVotes(votes);
      updateSummary(votes);
    });

    checkbox.addEventListener("change", () => {
      state.must = checkbox.checked;
      saveVotes(votes);
      updateSummary(votes);
    });
  });
}

function bindToolbar(votes) {
  document.getElementById("copy-summary").addEventListener("click", async () => {
    const text = summaryText(votes);
    await navigator.clipboard.writeText(text);
    document.getElementById("copy-summary").textContent = "Скопировано";
    window.setTimeout(() => {
      document.getElementById("copy-summary").textContent = "Скопировать итоги";
    }, 1400);
  });

  document.getElementById("reset-votes").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  });
}

function init() {
  const votes = loadVotes();
  renderLists(votes);
  bindVoting(votes);
  bindToolbar(votes);
  updateSummary(votes);
}

init();
