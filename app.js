(() => {
  "use strict";

  const LANG_KEY = "ce-lang";

  const LANGS = [
    { code: "en", label: "EN", name: "English" },
    { code: "bg", label: "BG", name: "Български" },
    { code: "es", label: "ES", name: "Español" },
    { code: "pt-BR", label: "PT-BR", name: "Português (Brasil)" },
    { code: "de", label: "DE", name: "Deutsch" },
    { code: "fr", label: "FR", name: "Français" },
    { code: "it", label: "IT", name: "Italiano" },
    { code: "tr", label: "TR", name: "Türkçe" },
    { code: "pl", label: "PL", name: "Polski" },
    { code: "ru", label: "RU", name: "Русский" },
  ];

  const LANG_LOCALES = {
    en: "en-GB",
    bg: "bg-BG",
    es: "es-ES",
    "pt-BR": "pt-BR",
    de: "de-DE",
    fr: "fr-FR",
    it: "it-IT",
    tr: "tr-TR",
    pl: "pl-PL",
    ru: "ru-RU",
  };

  const MONTHS_FULL = {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    bg: ["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"],
    es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    "pt-BR": ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
    de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    fr: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    it: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
    tr: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
    pl: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
    ru: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
  };

  const I18N = {
    en: {
      matchAnalysis: "MATCH ANALYSIS",
      pageTitle: "Selected signals for upcoming matches.",
      pageSubtitle: "Corners — expected value, line and probability.",
      currentSignals: "Current signals",
      noSignals: "There are no upcoming signals published at the moment.",
      hitRate: "Hit rate",
      backtest: "Backtest",
      signals: "signals",
      history: "History",
      win: "WIN",
      lost: "LOST",
      backtestByLeague: "Backtest by league",
      contact: "Contact",
      gambleResponsibly: "Gamble responsibly",
      disclaimer:
        "This website provides statistical analysis, does not guarantee profit and does not accept bets.",
      line: "Line",
      probability: "Probability",
      odds: "Odds",
      noBet: "NO BET",
      signal: "SIGNAL",
      noSignal: "NO SIGNAL",
      cornersSuffix: "CORNERS",
      historyKicker: "HISTORY",
      historyTitle: "History — Corners",
      previousMonth: "Previous month",
      currentMonth: "Current month",
      backHome: "← Back",
      totalPredictions: "Total predictions",
      averageOdds: "Average odds",
      monthTotal: "Month total (1 unit stake)",
      noHistory: "No published results for this month yet.",
      colDateTime: "Date / time",
      colLeague: "League",
      colMatch: "Match",
      colLine: "Line",
      colProbability: "Probability",
      colOdds: "Odds",
      colFinalCorners: "Final corners",
      colStatus: "Status",
      published: "Published",
    },
    bg: {
      matchAnalysis: "АНАЛИЗ НА МАЧОВЕ",
      pageTitle: "Избрани сигнали за предстоящи мачове.",
      pageSubtitle: "Корнери — очаквана стойност, линия и вероятност.",
      currentSignals: "Текущи сигнали",
      noSignals: "В момента няма публикувани предстоящи сигнали.",
      hitRate: "Успеваемост",
      backtest: "Исторически тест",
      signals: "сигнала",
      history: "История",
      win: "УСПЕШНИ",
      lost: "НЕУСПЕШНИ",
      backtestByLeague: "Исторически тест по лиги",
      contact: "Контакт",
      gambleResponsibly: "Залагайте отговорно",
      disclaimer:
        "Този сайт предоставя статистически анализ, не гарантира печалба и не приема залози.",
      line: "Линия",
      probability: "Вероятност",
      odds: "Коеф.",
      noBet: "БЕЗ КОЕФ.",
      signal: "СИГНАЛ",
      noSignal: "БЕЗ СИГНАЛ",
      cornersSuffix: "КОРНЕРИ",
      historyKicker: "ИСТОРИЯ",
      historyTitle: "История — Корнери",
      previousMonth: "Предишен месец",
      currentMonth: "Текущ месец",
      backHome: "← Назад",
      totalPredictions: "Общо прогнози",
      averageOdds: "Среден коеф.",
      monthTotal: "Месечен резултат (залог 1 единица)",
      noHistory: "Все още няма публикувани резултати за този месец.",
      colDateTime: "Дата / час",
      colLeague: "Лига",
      colMatch: "Мач",
      colLine: "Линия",
      colProbability: "Вероятност",
      colOdds: "Коеф.",
      colFinalCorners: "Крайни корнери",
      colStatus: "Статус",
      published: "Публикуван",
    },
    es: {
      matchAnalysis: "ANÁLISIS DEL PARTIDO",
      pageTitle: "Señales seleccionadas para los próximos partidos.",
      pageSubtitle: "Córners — valor esperado, línea y probabilidad.",
      currentSignals: "Señales actuales",
      noSignals: "En este momento no hay señales próximas publicadas.",
      hitRate: "Tasa de acierto",
      backtest: "Prueba histórica",
      signals: "señales",
      history: "Historial",
      win: "EXITOSOS",
      lost: "FALLIDOS",
      backtestByLeague: "Prueba histórica por ligas",
      contact: "Contacto",
      gambleResponsibly: "Juega de forma responsable",
      disclaimer:
        "Este sitio web ofrece análisis estadístico, no garantiza beneficios y no acepta apuestas.",
      line: "Línea",
      probability: "Probabilidad",
      odds: "Cuota",
      noBet: "SIN CUOTA",
      signal: "SEÑAL",
      noSignal: "SIN SEÑAL",
      cornersSuffix: "CÓRNERS",
      historyKicker: "HISTORIAL",
      historyTitle: "Historial — Córners",
      previousMonth: "Mes anterior",
      currentMonth: "Mes actual",
      backHome: "← Volver",
      totalPredictions: "Total de predicciones",
      averageOdds: "Cuota media",
      monthTotal: "Total del mes (apuesta 1 unidad)",
      noHistory: "Aún no hay resultados publicados para este mes.",
      colDateTime: "Fecha / hora",
      colLeague: "Liga",
      colMatch: "Partido",
      colLine: "Línea",
      colProbability: "Probabilidad",
      colOdds: "Cuota",
      colFinalCorners: "Córners finales",
      colStatus: "Estado",
      published: "Publicado",
    },
    "pt-BR": {
      matchAnalysis: "ANÁLISE DA PARTIDA",
      pageTitle: "Sinais selecionados para as próximas partidas.",
      pageSubtitle: "Escanteios — valor esperado, linha e probabilidade.",
      currentSignals: "Sinais atuais",
      noSignals: "No momento não há sinais próximos publicados.",
      hitRate: "Taxa de acerto",
      backtest: "Teste histórico",
      signals: "sinais",
      history: "Histórico",
      win: "BEM-SUCEDIDOS",
      lost: "MALSUCEDIDOS",
      backtestByLeague: "Teste histórico por ligas",
      contact: "Contato",
      gambleResponsibly: "Jogue com responsabilidade",
      disclaimer:
        "Este site fornece análise estatística, não garante lucro e não aceita apostas.",
      line: "Linha",
      probability: "Probabilidade",
      odds: "Odd",
      noBet: "SEM ODD",
      signal: "SINAL",
      noSignal: "SEM SINAL",
      cornersSuffix: "ESCANTEIOS",
      historyKicker: "HISTÓRICO",
      historyTitle: "Histórico — Escanteios",
      previousMonth: "Mês anterior",
      currentMonth: "Mês atual",
      backHome: "← Voltar",
      totalPredictions: "Total de previsões",
      averageOdds: "Odd média",
      monthTotal: "Total do mês (aposta 1 unidade)",
      noHistory: "Ainda não há resultados publicados para este mês.",
      colDateTime: "Data / hora",
      colLeague: "Liga",
      colMatch: "Partida",
      colLine: "Linha",
      colProbability: "Probabilidade",
      colOdds: "Odd",
      colFinalCorners: "Escanteios finais",
      colStatus: "Status",
      published: "Publicado",
    },
    de: {
      matchAnalysis: "SPIELANALYSE",
      pageTitle: "Ausgewählte Signale für bevorstehende Spiele.",
      pageSubtitle: "Ecken — erwarteter Wert, Linie und Wahrscheinlichkeit.",
      currentSignals: "Aktuelle Signale",
      noSignals: "Derzeit sind keine bevorstehenden Signale veröffentlicht.",
      hitRate: "Trefferquote",
      backtest: "Historischer Test",
      signals: "Signale",
      history: "Verlauf",
      win: "ERFOLGREICH",
      lost: "ERFOLGLOS",
      backtestByLeague: "Historischer Test nach Ligen",
      contact: "Kontakt",
      gambleResponsibly: "Verantwortungsbewusst spielen",
      disclaimer:
        "Diese Website bietet statistische Analysen, garantiert keinen Gewinn und nimmt keine Wetten an.",
      line: "Linie",
      probability: "Wahrscheinlichkeit",
      odds: "Quote",
      noBet: "OHNE QUOTE",
      signal: "SIGNAL",
      noSignal: "KEIN SIGNAL",
      cornersSuffix: "ECKEN",
      historyKicker: "VERLAUF",
      historyTitle: "Verlauf — Ecken",
      previousMonth: "Vorheriger Monat",
      currentMonth: "Aktueller Monat",
      backHome: "← Zurück",
      totalPredictions: "Vorhersagen gesamt",
      averageOdds: "Durchschnittsquote",
      monthTotal: "Monatsgesamt (1 Einheit Einsatz)",
      noHistory: "Für diesen Monat sind noch keine Ergebnisse veröffentlicht.",
      colDateTime: "Datum / Uhrzeit",
      colLeague: "Liga",
      colMatch: "Spiel",
      colLine: "Linie",
      colProbability: "Wahrscheinlichkeit",
      colOdds: "Quote",
      colFinalCorners: "Endgültige Ecken",
      colStatus: "Status",
      published: "Veröffentlicht",
    },
    fr: {
      matchAnalysis: "ANALYSE DU MATCH",
      pageTitle: "Signaux sélectionnés pour les prochains matchs.",
      pageSubtitle: "Corners — valeur attendue, ligne et probabilité.",
      currentSignals: "Signaux actuels",
      noSignals: "Aucun signal à venir n'est publié pour le moment.",
      hitRate: "Taux de réussite",
      backtest: "Test historique",
      signals: "signaux",
      history: "Historique",
      win: "RÉUSSIS",
      lost: "ÉCHOUÉS",
      backtestByLeague: "Test historique par ligues",
      contact: "Contact",
      gambleResponsibly: "Jouez de manière responsable",
      disclaimer:
        "Ce site fournit une analyse statistique, ne garantit aucun profit et n'accepte pas les paris.",
      line: "Ligne",
      probability: "Probabilité",
      odds: "Cote",
      noBet: "SANS COTE",
      signal: "SIGNAL",
      noSignal: "SANS SIGNAL",
      cornersSuffix: "CORNERS",
      historyKicker: "HISTORIQUE",
      historyTitle: "Historique — Corners",
      previousMonth: "Mois précédent",
      currentMonth: "Mois en cours",
      backHome: "← Retour",
      totalPredictions: "Total des prédictions",
      averageOdds: "Cote moyenne",
      monthTotal: "Total du mois (mise 1 unité)",
      noHistory: "Aucun résultat publié pour ce mois pour le moment.",
      colDateTime: "Date / heure",
      colLeague: "Ligue",
      colMatch: "Match",
      colLine: "Ligne",
      colProbability: "Probabilité",
      colOdds: "Cote",
      colFinalCorners: "Corners finaux",
      colStatus: "Statut",
      published: "Publié",
    },
    it: {
      matchAnalysis: "ANALISI DELLA PARTITA",
      pageTitle: "Segnali selezionati per le prossime partite.",
      pageSubtitle: "Corner — valore atteso, linea e probabilità.",
      currentSignals: "Segnali attuali",
      noSignals: "Al momento non ci sono segnali imminenti pubblicati.",
      hitRate: "Tasso di successo",
      backtest: "Test storico",
      signals: "segnali",
      history: "Cronologia",
      win: "RIUSCITI",
      lost: "NON RIUSCITI",
      backtestByLeague: "Test storico per leghe",
      contact: "Contatto",
      gambleResponsibly: "Gioca in modo responsabile",
      disclaimer:
        "Questo sito fornisce analisi statistiche, non garantisce profitti e non accetta scommesse.",
      line: "Linea",
      probability: "Probabilità",
      odds: "Quota",
      noBet: "SENZA QUOTA",
      signal: "SEGNALE",
      noSignal: "SENZA SEGNALE",
      cornersSuffix: "CORNER",
      historyKicker: "CRONOLOGIA",
      historyTitle: "Cronologia — Corner",
      previousMonth: "Mese precedente",
      currentMonth: "Mese corrente",
      backHome: "← Indietro",
      totalPredictions: "Previsioni totali",
      averageOdds: "Quota media",
      monthTotal: "Totale del mese (puntata 1 unità)",
      noHistory: "Nessun risultato pubblicato per questo mese.",
      colDateTime: "Data / ora",
      colLeague: "Lega",
      colMatch: "Partita",
      colLine: "Linea",
      colProbability: "Probabilità",
      colOdds: "Quota",
      colFinalCorners: "Corner finali",
      colStatus: "Stato",
      published: "Pubblicato",
    },
    tr: {
      matchAnalysis: "MAÇ ANALİZİ",
      pageTitle: "Yaklaşan maçlar için seçilmiş sinyaller.",
      pageSubtitle: "Kornerler — beklenen değer, çizgi ve olasılık.",
      currentSignals: "Güncel sinyaller",
      noSignals: "Şu anda yayınlanmış yaklaşan sinyal yok.",
      hitRate: "İsabet oranı",
      backtest: "Tarihsel test",
      signals: "sinyal",
      history: "Geçmiş",
      win: "BAŞARILI",
      lost: "BAŞARISIZ",
      backtestByLeague: "Liglere göre tarihsel test",
      contact: "İletişim",
      gambleResponsibly: "Sorumlu oynayın",
      disclaimer:
        "Bu web sitesi istatistiksel analiz sunar, kâr garantisi vermez ve bahis kabul etmez.",
      line: "Çizgi",
      probability: "Olasılık",
      odds: "Oran",
      noBet: "ORAN YOK",
      signal: "SİNYAL",
      noSignal: "SİNYAL YOK",
      cornersSuffix: "KORNER",
      historyKicker: "GEÇMİŞ",
      historyTitle: "Geçmiş — Kornerler",
      previousMonth: "Önceki ay",
      currentMonth: "Mevcut ay",
      backHome: "← Geri",
      totalPredictions: "Toplam tahmin",
      averageOdds: "Ortalama oran",
      monthTotal: "Aylık toplam (1 birim bahis)",
      noHistory: "Bu ay için henüz yayınlanmış sonuç yok.",
      colDateTime: "Tarih / saat",
      colLeague: "Lig",
      colMatch: "Maç",
      colLine: "Çizgi",
      colProbability: "Olasılık",
      colOdds: "Oran",
      colFinalCorners: "Final korner",
      colStatus: "Durum",
      published: "Yayınlandı",
    },
    pl: {
      matchAnalysis: "ANALIZA MECZU",
      pageTitle: "Wybrane sygnały na nadchodzące mecze.",
      pageSubtitle: "Rożne — wartość oczekiwana, linia i prawdopodobieństwo.",
      currentSignals: "Bieżące sygnały",
      noSignals: "W tej chwili nie ma opublikowanych nadchodzących sygnałów.",
      hitRate: "Skuteczność",
      backtest: "Test historyczny",
      signals: "sygnałów",
      history: "Historia",
      win: "UDANE",
      lost: "NIEUDANE",
      backtestByLeague: "Test historyczny według lig",
      contact: "Kontakt",
      gambleResponsibly: "Graj odpowiedzialnie",
      disclaimer:
        "Ta strona zapewnia analizę statystyczną, nie gwarantuje zysku i nie przyjmuje zakładów.",
      line: "Linia",
      probability: "Prawdopodobieństwo",
      odds: "Kurs",
      noBet: "BRAK KURSU",
      signal: "SYGNAŁ",
      noSignal: "BRAK SYGNAŁU",
      cornersSuffix: "ROŻNE",
      historyKicker: "HISTORIA",
      historyTitle: "Historia — Rożne",
      previousMonth: "Poprzedni miesiąc",
      currentMonth: "Bieżący miesiąc",
      backHome: "← Wstecz",
      totalPredictions: "Łączna liczba prognoz",
      averageOdds: "Średni kurs",
      monthTotal: "Suma miesiąca (stawka 1 jednostka)",
      noHistory: "Brak opublikowanych wyników dla tego miesiąca.",
      colDateTime: "Data / godzina",
      colLeague: "Liga",
      colMatch: "Mecz",
      colLine: "Linia",
      colProbability: "Prawdopodobieństwo",
      colOdds: "Kurs",
      colFinalCorners: "Końcowe rożne",
      colStatus: "Status",
      published: "Opublikowano",
    },
    ru: {
      matchAnalysis: "АНАЛИЗ МАТЧА",
      pageTitle: "Выбранные сигналы на предстоящие матчи.",
      pageSubtitle: "Угловые — ожидаемая ценность, линия и вероятность.",
      currentSignals: "Текущие сигналы",
      noSignals: "На данный момент нет опубликованных предстоящих сигналов.",
      hitRate: "Процент успеха",
      backtest: "Исторический тест",
      signals: "сигналов",
      history: "История",
      win: "УСПЕШНЫЕ",
      lost: "НЕУСПЕШНЫЕ",
      backtestByLeague: "Исторический тест по лигам",
      contact: "Контакт",
      gambleResponsibly: "Играйте ответственно",
      disclaimer:
        "Этот сайт предоставляет статистический анализ, не гарантирует прибыль и не принимает ставки.",
      line: "Линия",
      probability: "Вероятность",
      odds: "Коэф.",
      noBet: "БЕЗ КОЭФ.",
      signal: "СИГНАЛ",
      noSignal: "БЕЗ СИГНАЛА",
      cornersSuffix: "УГЛОВЫЕ",
      historyKicker: "ИСТОРИЯ",
      historyTitle: "История — Угловые",
      previousMonth: "Предыдущий месяц",
      currentMonth: "Текущий месяц",
      backHome: "← Назад",
      totalPredictions: "Всего прогнозов",
      averageOdds: "Средний коэф.",
      monthTotal: "Итог месяца (ставка 1 единица)",
      noHistory: "За этот месяц пока нет опубликованных результатов.",
      colDateTime: "Дата / время",
      colLeague: "Лига",
      colMatch: "Матч",
      colLine: "Линия",
      colProbability: "Вероятность",
      colOdds: "Коэф.",
      colFinalCorners: "Итоговые угловые",
      colStatus: "Статус",
      published: "Опубликовано",
    },
  };

  const state = {
    lang: "en",
    current: null,
    previous: null,
    historyMode: "current",
  };

  function isSupportedLang(code) {
    return Object.prototype.hasOwnProperty.call(I18N, code);
  }

  function langMeta(code) {
    return LANGS.find((l) => l.code === code) || LANGS[0];
  }

  function t(key) {
    return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
  }

  function localizeMonthLabel(label) {
    if (!label) return "—";
    if (state.lang === "en") return label;

    const monthsEn = MONTHS_FULL.en;
    const monthsLang = MONTHS_FULL[state.lang] || MONTHS_FULL.en;

    return String(label).replace(
      /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/gi,
      (month) => {
        const idx = monthsEn.findIndex((m) => m.toLowerCase() === month.toLowerCase());
        return idx >= 0 ? monthsLang[idx] : month;
      }
    );
  }

  function statusLabel(status) {
    const value = String(status || "").toUpperCase();
    if (value === "WIN" || value === "SUCCESSFUL") return t("win");
    if (value === "LOST" || value === "UNSUCCESSFUL") return t("lost");
    return status || "—";
  }

  function applyI18n() {
    document.documentElement.lang = state.lang === "pt-BR" ? "pt-BR" : state.lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });
    const label = document.getElementById("lang-label");
    if (label) label.textContent = langMeta(state.lang).label;

    const menu = document.getElementById("lang-menu");
    if (menu) {
      menu.querySelectorAll("[data-lang]").forEach((item) => {
        const selected = item.getAttribute("data-lang") === state.lang;
        item.setAttribute("aria-selected", selected ? "true" : "false");
        item.classList.toggle("is-active", selected);
      });
    }
  }

  function formatNumber(value, decimals = 0) {
    const num = Number(value) || 0;
    return num.toLocaleString("en-GB", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      useGrouping: true,
    });
  }

  function formatHitRate(value) {
    const num = Number(value) || 0;
    if (num === 0) return "0%";
    const decimals = Number.isInteger(num) ? 0 : 2;
    return `${formatNumber(num, decimals)}%`;
  }

  function formatProbability(value) {
    const num = Number(value) || 0;
    const decimals = Number.isInteger(num) ? 0 : 2;
    return `${formatNumber(num, decimals)}%`;
  }

  function getDeviceTimeZone() {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    } catch (err) {
      return "UTC";
    }
  }

  function formatKickoff(iso) {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "—";

    const locale = LANG_LOCALES[state.lang] || "en-GB";
    const timeZone = getDeviceTimeZone();

    const dayPart = new Intl.DateTimeFormat(locale, {
      timeZone,
      day: "numeric",
      month: "short",
    }).format(date);

    const timePart = new Intl.DateTimeFormat(locale, {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);

    return `${dayPart} · ${timePart}`;
  }

  function kickoffValue(item) {
    return item && (item.kickoffUtc || item.kickoff || item.datetime);
  }

  function publishedAtMarkup(item) {
    const raw = item && item.publishedAtUtc;
    if (!raw) return "";
    const formatted = formatKickoff(raw);
    if (!formatted || formatted === "—") return "";
    return `<p class="when published-at">${escapeHtml(`${t("published")}: ${formatted}`)}</p>`;
  }

  function hasOdds(odds) {
    return odds !== null && odds !== undefined && odds !== "" && !Number.isNaN(Number(odds));
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  async function loadJson(path) {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load ${path}`);
    return res.json();
  }

  function sortSignalsByKickoff(signals) {
    return signals.slice().sort((a, b) => {
      const kickA = String(kickoffValue(a) || "");
      const kickB = String(kickoffValue(b) || "");
      if (kickA !== kickB) return kickA < kickB ? -1 : 1;
      const homeA = String(a.homeTeam || a.home || "");
      const homeB = String(b.homeTeam || b.home || "");
      if (homeA !== homeB) return homeA < homeB ? -1 : 1;
      const awayA = String(a.awayTeam || a.away || "");
      const awayB = String(b.awayTeam || b.away || "");
      if (awayA !== awayB) return awayA < awayB ? -1 : 1;
      return 0;
    });
  }

  function sortHistoryByKickoffDesc(predictions) {
    return predictions.slice().sort((a, b) => {
      const kickA = String(kickoffValue(a) || "");
      const kickB = String(kickoffValue(b) || "");
      if (kickA !== kickB) return kickA > kickB ? -1 : 1;
      const homeA = String(a.homeTeam || a.home || "");
      const homeB = String(b.homeTeam || b.home || "");
      if (homeA !== homeB) return homeA < homeB ? -1 : 1;
      const awayA = String(a.awayTeam || a.away || "");
      const awayB = String(b.awayTeam || b.away || "");
      if (awayA !== awayB) return awayA < awayB ? -1 : 1;
      return 0;
    });
  }

  function renderSignals(signals) {
    const list = document.getElementById("signals-list");
    const empty = document.getElementById("signals-empty");
    if (!list) return;

    list.innerHTML = "";
    const items = sortSignalsByKickoff(Array.isArray(signals) ? signals : []);

    if (!items.length) {
      if (empty) empty.hidden = false;
      return;
    }
    if (empty) empty.hidden = true;

    items.forEach((s) => {
      const signal = hasOdds(s.odds);
      const oddsText = signal ? formatNumber(Number(s.odds), 2) : t("noBet");
      const badgeClass = signal ? "badge-signal" : "badge-nosignal";
      const badgeText = signal ? t("signal") : t("noSignal");
      const prob = `${formatNumber(Number(s.probability) || 0, 0)}%`;

      const row = document.createElement("article");
      row.className = "signal-row";
      row.innerHTML = `
        <div class="signal-meta">
          <p class="league">${escapeHtml(s.league || "")} - ${t("cornersSuffix")}</p>
          <p class="teams">${escapeHtml(s.homeTeam || s.home || "")} — ${escapeHtml(s.awayTeam || s.away || "")}</p>
          <p class="when">${escapeHtml(formatKickoff(kickoffValue(s)))}</p>
          ${publishedAtMarkup(s)}
        </div>
        <div class="signal-metrics">
          <div>
            <p class="metric-value">${escapeHtml(s.line || "—")}</p>
            <p class="metric-label">${t("line")}</p>
          </div>
          <div>
            <p class="metric-value">${prob}</p>
            <p class="metric-label">${t("probability")}</p>
          </div>
          <div>
            <p class="metric-value">${oddsText}</p>
            <p class="metric-label">${t("odds")}</p>
          </div>
        </div>
        <span class="badge ${badgeClass}">${badgeText}</span>
      `;
      list.appendChild(row);
    });
  }

  const HOME_LEAGUE_ORDER = ["Premier League", "La Liga", "Serie A", "Bundesliga"];

  function homeStatsFromHistory(historyData) {
    const predictions =
      historyData && Array.isArray(historyData.predictions) ? historyData.predictions : [];
    let win = 0;
    let lost = 0;
    const byLeague = {};
    HOME_LEAGUE_ORDER.forEach((name) => {
      byLeague[name] = { win: 0, total: 0 };
    });

    predictions.forEach((p) => {
      const status = String(p.status || "").toUpperCase();
      const league = String(p.league || "");
      if (!byLeague[league]) byLeague[league] = { win: 0, total: 0 };

      if (status === "WIN" || status === "SUCCESSFUL") {
        win += 1;
        byLeague[league].win += 1;
        byLeague[league].total += 1;
      } else if (status === "LOST" || status === "UNSUCCESSFUL") {
        lost += 1;
        byLeague[league].total += 1;
      }
    });

    const settled = win + lost;
    const hitRate = settled ? (win / settled) * 100 : 0;
    const leagues = HOME_LEAGUE_ORDER.map((name) => {
      const row = byLeague[name] || { win: 0, total: 0 };
      return {
        name,
        hitRate: row.total ? (row.win / row.total) * 100 : 0,
      };
    });

    return {
      hitRate,
      backtest: predictions.length,
      win,
      lost,
      leagues,
    };
  }

  function renderHomeStats() {
    renderStats(homeStatsFromHistory(state.publishedHistory));
  }

  function renderStats(stats) {
    const s = stats || {};
    const hit = document.getElementById("stat-hit-rate");
    const backtest = document.getElementById("stat-backtest");
    const win = document.getElementById("stat-win");
    const lost = document.getElementById("stat-lost");

    if (hit) hit.textContent = formatHitRate(s.hitRate);
    if (backtest) backtest.textContent = formatNumber(s.backtest || 0, 0);
    if (win) win.textContent = formatNumber(s.win || 0, 0);
    if (lost) lost.textContent = formatNumber(s.lost || 0, 0);

    const leagueList = document.getElementById("league-list");
    if (!leagueList) return;

    const leagues = Array.isArray(s.leagues) ? s.leagues : [];
    leagueList.innerHTML = leagues
      .map((league) => {
        const rate = Number(league.hitRate) || 0;
        const width = Math.max(0, Math.min(100, rate));
        return `
          <li class="league-item">
            <span class="league-name">${escapeHtml(league.name)}</span>
            <div class="league-bar" aria-hidden="true"><span style="width:${width}%"></span></div>
            <span class="league-pct">${formatHitRate(rate)}</span>
          </li>
        `;
      })
      .join("");
  }

  function summaryFromPredictions(predictions) {
    const rows = Array.isArray(predictions) ? predictions : [];
    let win = 0;
    let lost = 0;
    let oddsSum = 0;
    let oddsCount = 0;
    let monthTotal = 0;
    rows.forEach((p) => {
      const status = String(p.status || "").toUpperCase();
      const oddsOk = hasOdds(p.odds);
      const odds = oddsOk ? Number(p.odds) : null;
      if (status === "WIN" || status === "SUCCESSFUL") {
        win += 1;
        if (oddsOk) monthTotal += odds - 1;
      } else if (status === "LOST") {
        lost += 1;
        if (oddsOk) monthTotal -= 1;
      }
      if (oddsOk) {
        oddsSum += odds;
        oddsCount += 1;
      }
    });
    const total = rows.length;
    return {
      totalPredictions: total,
      win,
      lost,
      hitRate: total ? (win / total) * 100 : 0,
      averageOdds: oddsCount ? oddsSum / oddsCount : 0,
      monthTotal,
    };
  }

  function getHistoryBundle(mode) {
    if (mode === "previous") {
      return {
        monthLabel: (state.previous && state.previous.monthLabel) || "Previous month",
        summary: (state.previous && state.previous.summary) || {},
        predictions: (state.previous && state.previous.predictions) || [],
      };
    }
    // Current month: only published rows from data/history.json (no demo/hardcoded merge).
    const published = state.publishedHistory || {};
    const predictions = Array.isArray(published.predictions) ? published.predictions : [];
    return {
      monthLabel:
        published.monthLabel ||
        (state.current && state.current.month) ||
        "Current month",
      summary: published.summary || summaryFromPredictions(predictions),
      predictions,
    };
  }

  function renderHistorySummary(summary) {
    const s = summary || {};
    const set = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };

    set("sum-total", formatNumber(s.totalPredictions || 0, 0));
    set("sum-win", formatNumber(s.win || 0, 0));
    set("sum-lost", formatNumber(s.lost || 0, 0));
    set("sum-hit-rate", formatHitRate(s.hitRate));
    set("sum-avg-odds", formatNumber(s.averageOdds || 0, 3));

    const monthTotal = Number(s.monthTotal) || 0;
    const monthEl = document.getElementById("sum-month-total");
    if (monthEl) {
      const sign = monthTotal > 0 ? "+" : "";
      monthEl.textContent = `${sign}${formatNumber(monthTotal, 2)}`;
      monthEl.classList.toggle("text-win", monthTotal > 0);
      monthEl.classList.toggle("text-lost", monthTotal < 0);
    }
  }

  function renderHistoryTable(predictions) {
    const tbody = document.getElementById("history-tbody");
    const empty = document.getElementById("history-empty");
    if (!tbody) return;

    const rows = sortHistoryByKickoffDesc(Array.isArray(predictions) ? predictions : []);
    tbody.innerHTML = "";

    if (!rows.length) {
      if (empty) empty.hidden = false;
      return;
    }
    if (empty) empty.hidden = true;

    rows.forEach((p) => {
      const status = String(p.status || "").toUpperCase();
      const statusClass = status === "WIN" || status === "SUCCESSFUL" ? "status-win" : "status-lost";
      const oddsText = hasOdds(p.odds) ? formatNumber(Number(p.odds), 2) : t("noBet");
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${escapeHtml(formatKickoff(kickoffValue(p)))}${publishedAtMarkup(p)}</td>
        <td>${escapeHtml(p.league || "—")}</td>
        <td>${escapeHtml(p.homeTeam || p.home || "")} — ${escapeHtml(p.awayTeam || p.away || "")}</td>
        <td>${escapeHtml(p.line || "—")}</td>
        <td>${formatProbability(p.probability)}</td>
        <td>${oddsText}</td>
        <td>${p.finalCorners == null ? "—" : escapeHtml(p.finalCorners)}</td>
        <td><span class="status-pill ${statusClass}">${escapeHtml(statusLabel(status))}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  function renderHistoryPage() {
    const params = new URLSearchParams(window.location.search);
    state.historyMode = params.get("month") === "previous" ? "previous" : "current";

    const bundle = getHistoryBundle(state.historyMode);
    const monthLabel = document.getElementById("history-month-label");
    if (monthLabel) monthLabel.textContent = localizeMonthLabel(bundle.monthLabel);

    renderHistorySummary(bundle.summary);
    renderHistoryTable(bundle.predictions);

    const prevBtn = document.getElementById("prev-month-btn");
    const currentBtn = document.getElementById("current-month-btn");

    if (state.historyMode === "previous") {
      if (prevBtn) prevBtn.hidden = true;
      if (currentBtn) currentBtn.hidden = false;
    } else {
      if (prevBtn) prevBtn.hidden = false;
      if (currentBtn) currentBtn.hidden = true;
    }
  }

  function setupHistoryControls() {
    const prevBtn = document.getElementById("prev-month-btn");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        window.location.href = "history.html?month=previous";
      });
    }
  }

  function buildLangMenu(menu) {
    menu.innerHTML = LANGS.map(
      (lang) =>
        `<li role="option" data-lang="${lang.code}" tabindex="0">${escapeHtml(lang.name)} <span class="lang-code">${escapeHtml(lang.label)}</span></li>`
    ).join("");
  }

  function setupLang() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && isSupportedLang(saved)) state.lang = saved;

    const btn = document.getElementById("lang-btn");
    const menu = document.getElementById("lang-menu");
    if (!btn || !menu) return;

    buildLangMenu(menu);

    const close = () => {
      menu.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    };

    const selectLang = (code) => {
      if (!isSupportedLang(code)) return;
      state.lang = code;
      localStorage.setItem(LANG_KEY, state.lang);
      close();
      applyI18n();
      refreshView();
    };

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = menu.hidden;
      menu.hidden = !open;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.addEventListener("click", (e) => {
      const item = e.target.closest("[data-lang]");
      if (!item) return;
      e.stopPropagation();
      selectLang(item.getAttribute("data-lang"));
    });

    menu.addEventListener("keydown", (e) => {
      const item = e.target.closest("[data-lang]");
      if (!item) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectLang(item.getAttribute("data-lang"));
      }
    });

    document.addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  function refreshView() {
    const page = document.body.dataset.page || detectPage();
    if (page === "history") {
      renderHistoryPage();
    } else if (state.current) {
      renderHomeStats();
      renderSignals(state.current.signals);
    }
  }

  function detectPage() {
    const path = (window.location.pathname || "").toLowerCase();
    return path.endsWith("history.html") ? "history" : "home";
  }

  async function init() {
    setupLang();
    applyI18n();

    const page = detectPage();
    document.body.dataset.page = page;

    try {
      const [current, previous, publishedHistory] = await Promise.all([
        loadJson("data/current.json"),
        loadJson("data/previous.json"),
        loadJson("data/history.json").catch(() => ({ predictions: [] })),
      ]);
      state.current = current;
      state.previous = previous;
      state.publishedHistory = publishedHistory || { predictions: [] };
    } catch (err) {
      console.error(err);
      state.current = {
        stats: {
          hitRate: 0,
          backtest: 0,
          win: 0,
          lost: 0,
          leagues: [
            { name: "Premier League", hitRate: 0 },
            { name: "La Liga", hitRate: 0 },
            { name: "Serie A", hitRate: 0 },
            { name: "Bundesliga", hitRate: 0 },
          ],
        },
        signals: [],
        history: {
          monthLabel: "—",
          summary: {
            totalPredictions: 0,
            win: 0,
            lost: 0,
            hitRate: 0,
            averageOdds: 0,
            monthTotal: 0,
          },
          predictions: [],
        },
      };
      state.previous = {
        monthLabel: "—",
        summary: {
          totalPredictions: 0,
          win: 0,
          lost: 0,
          hitRate: 0,
          averageOdds: 0,
          monthTotal: 0,
        },
        predictions: [],
      };
      state.publishedHistory = { predictions: [] };
    }

    if (page === "history") {
      setupHistoryControls();
      renderHistoryPage();
    } else {
      renderHomeStats();
      renderSignals(state.current.signals);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
