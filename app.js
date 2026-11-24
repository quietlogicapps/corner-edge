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
      noSignalsInfoTitle: "No qualifying selections right now",
      noSignalsInfoText:
        "Corner Edge analyses fixtures from Premier League, La Liga, Serie A and Bundesliga only. Selections are published 24–48 hours before kick-off. The model evaluates statistical probability independently of the market and generates a signal only when it exceeds a historically validated threshold. Market-based EV calculations are not used to select or rank signals. Domestic cups, European club competitions and international matches are not analysed, as squad rotation and line-up uncertainty can distort the data.",
      hitRate: "Hit rate",
      roi: "ROI",
      profit: "Profit",
      flatStake: "1 unit flat stake",
      backtest: "Backtest",
      publishedSignals: "Published signals",
      signals: "signals",
      history: "History",
      win: "WIN",
      lost: "LOST",
      backtestByLeague: "Backtest by league",
      resultsByLeague: "Results by league",
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
      sinceStart: "All time",
      thisMonth: "This month",
      tipstrrTitle: "Public records",
      tipstrrText: "Selections are published before kickoff and independently recorded.",
      tipstrrCta: "View Tipstrr profile ↗",
      betstampCta: "View Betstamp profile ↗",
      infoButton: "ⓘ How the model works",
      modalTitle: "How predictions are calculated",
      infoP1: "Each prediction is calculated from our own historical data before bookmaker odds are checked.",
      infoP2:
        "The model independently estimates the expected number of corners, the line and the probability. Bookmaker odds are not used to create a prediction.",
      infoP3:
        "Odds are added only after the relevant market becomes available. They are shown so visitors can compare the market price with the model’s independent estimate. Only predictions with available odds are published as signals.",
      infoP4:
        "The model covers Premier League, La Liga, Serie A and Bundesliga only. It does not analyse domestic cups, club competitions or international matches.",
      infoP5: "Published completed predictions and their actual results can be checked in the History section.",
      infoP6: "Statistical analysis only — probabilities are estimates, not guarantees.",
      infoClose: "Close",
      modelCorners: "Corners",
      modelCards: "Cards",
      modelUo: "Over/Under",
      modelTabsAria: "Models",
      pageSubtitleCards: "Cards — expected value, line and probability.",
      pageSubtitleUo: "Over/Under — expected value, line and probability.",
      historyTitleCards: "History — Cards",
      historyTitleUo: "History — Over/Under",
      cardsSuffix: "CARDS",
      uoSuffix: "OVER/UNDER",
      colFinalCards: "Final cards",
      colFinalUo: "Final total",
      noSignalsInfoTextCards:
        "Corner Edge analyses fixtures from Premier League, La Liga, Serie A and Bundesliga only. Selections are published 24–48 hours before kick-off. The cards model evaluates statistical probability independently of the market and generates a signal only when it exceeds a historically validated threshold. Market-based EV calculations are not used to select or rank signals. Domestic cups, European club competitions and international matches are not analysed, as squad rotation and line-up uncertainty can distort the data.",
      noSignalsInfoTextUo:
        "Corner Edge analyses fixtures from Premier League, La Liga, Serie A and Bundesliga only. Selections are published 24–48 hours before kick-off. The over/under model evaluates statistical probability independently of the market and generates a signal only when it exceeds a historically validated threshold. Market-based EV calculations are not used to select or rank signals. Domestic cups, European club competitions and international matches are not analysed, as squad rotation and line-up uncertainty can distort the data.",
    },
    bg: {
      matchAnalysis: "АНАЛИЗ НА МАЧОВЕ",
      pageTitle: "Избрани сигнали за предстоящи мачове.",
      pageSubtitle: "Корнери — очаквана стойност, линия и вероятност.",
      currentSignals: "Текущи сигнали",
      noSignals: "В момента няма публикувани предстоящи сигнали.",
      noSignalsInfoTitle: "В момента няма селекции, покриващи критериите",
      noSignalsInfoText:
        "Corner Edge анализира само мачове от Premier League, La Liga, Serie A и Bundesliga. Селекциите се публикуват 24–48 часа преди началото. Моделът оценява статистическата вероятност независимо от пазара и генерира сигнал само когато тя премине исторически валидирания праг. Пазарни EV изчисления не се използват за подбор или подреждане на сигналите. Мачове за национални купи, европейски клубни турнири и международни срещи не се анализират, защото ротациите в съставите и несигурността около титулярите могат да изкривят данните.",
      hitRate: "Успеваемост",
      roi: "ROI",
      profit: "Печалба",
      flatStake: "Фиксиран залог 1 единица",
      backtest: "Исторически тест",
      publishedSignals: "Публикувани сигнали",
      signals: "сигнала",
      history: "История",
      win: "УСПЕШНИ",
      lost: "НЕУСПЕШНИ",
      backtestByLeague: "Исторически тест по лиги",
      resultsByLeague: "Резултати по лиги",
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
      sinceStart: "Общо",
      thisMonth: "Този месец",
      tipstrrTitle: "Публични записи",
      tipstrrText: "Селекциите се публикуват преди началото на мача и се записват независимо.",
      tipstrrCta: "Виж Tipstrr профила ↗",
      betstampCta: "Виж Betstamp профила ↗",
      infoButton: "ⓘ Как работи моделът",
      modalTitle: "Как се изчисляват прогнозите",
      infoP1:
        "Всяка прогноза се изчислява от собствена историческа база данни, преди да се проверят коефициентите на букмейкъра.",
      infoP2:
        "Моделът самостоятелно изчислява очаквания брой корнери, линията и вероятността. Букмейкърският коефициент не участва при създаването на прогнозата.",
      infoP3:
        "Коефициентът се добавя едва след като съответният пазар стане наличен. Той е показан, за да се сравни пазарната цена с независимата оценка на модела. Само прогнози с наличен коефициент се публикуват като сигнали.",
      infoP4:
        "Моделът работи само за Premier League, La Liga, Serie A и Bundesliga. Не анализира купи, клубни турнири или международни мачове.",
      infoP5: "Публикуваните завършени прогнози и реалните им резултати могат да бъдат проверени в секция „История“.",
      infoP6: "Само статистически анализ — вероятностите са оценки, не гаранции.",
      infoClose: "Затвори",
      modelCorners: "Корнери",
      modelCards: "Картони",
      modelUo: "Над/Под",
      modelTabsAria: "Модели",
      pageSubtitleCards: "Картони — очаквана стойност, линия и вероятност.",
      pageSubtitleUo: "Над/Под — очаквана стойност, линия и вероятност.",
      historyTitleCards: "История — Картони",
      historyTitleUo: "История — Над/Под",
      cardsSuffix: "КАРТОНИ",
      uoSuffix: "НАД/ПОД",
      colFinalCards: "Крайни картони",
      colFinalUo: "Краен тотал",
      noSignalsInfoTextCards:
        "Corner Edge анализира мачове само от Premier League, La Liga, Serie A и Bundesliga. Селекциите се публикуват 24–48 часа преди началото. Моделът за картони оценява статистическата вероятност независимо от пазара и генерира сигнал само когато тя надхвърли исторически валидиран праг. Пазарни EV изчисления не се използват за избор или подреждане на сигнали. Национални купи, европейски клубни турнири и международни мачове не се анализират, тъй като ротациите и несигурността в съставите могат да изкривят данните.",
      noSignalsInfoTextUo:
        "Corner Edge анализира мачове само от Premier League, La Liga, Serie A и Bundesliga. Селекциите се публикуват 24–48 часа преди началото. Моделът Над/Под оценява статистическата вероятност независимо от пазара и генерира сигнал само когато тя надхвърли исторически валидиран праг. Пазарни EV изчисления не се използват за избор или подреждане на сигнали. Национални купи, европейски клубни турнири и международни мачове не се анализират, тъй като ротациите и несигурността в съставите могат да изкривят данните.",
    },
    es: {
      matchAnalysis: "ANÁLISIS DEL PARTIDO",
      pageTitle: "Señales seleccionadas para los próximos partidos.",
      pageSubtitle: "Córners — valor esperado, línea y probabilidad.",
      currentSignals: "Señales actuales",
      noSignals: "En este momento no hay señales próximas publicadas.",
      noSignalsInfoTitle: "No hay selecciones que cumplan los criterios en este momento",
      noSignalsInfoText:
        "Corner Edge analiza únicamente partidos de Premier League, La Liga, Serie A y Bundesliga. Las selecciones se publican entre 24 y 48 horas antes del inicio. El modelo evalúa la probabilidad estadística de forma independiente del mercado y genera una señal solo cuando supera un umbral validado históricamente. Los cálculos de EV basados en el mercado no se utilizan para seleccionar ni clasificar las señales. Las copas nacionales, las competiciones europeas de clubes y los partidos internacionales no se analizan, ya que las rotaciones de plantilla y la incertidumbre sobre las alineaciones pueden distorsionar los datos.",
      hitRate: "Tasa de acierto",
      roi: "ROI",
      profit: "Beneficio",
      flatStake: "Apuesta fija de 1 unidad",
      backtest: "Prueba histórica",
      publishedSignals: "Selecciones publicadas",
      signals: "señales",
      history: "Historial",
      win: "EXITOSOS",
      lost: "FALLIDOS",
      backtestByLeague: "Prueba histórica por ligas",
      resultsByLeague: "Resultados por liga",
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
      sinceStart: "Total",
      thisMonth: "Este mes",
      tipstrrTitle: "Registros públicos",
      tipstrrText: "Las selecciones se publican antes del inicio del partido y se registran de forma independiente.",
      tipstrrCta: "Ver perfil de Tipstrr ↗",
      betstampCta: "Ver perfil de Betstamp ↗",
      infoButton: "ⓘ Cómo funciona el modelo",
      modalTitle: "Cómo se calculan las predicciones",
      infoP1:
        "Cada predicción se calcula con nuestra propia base de datos histórica antes de consultar las cuotas de las casas de apuestas.",
      infoP2:
        "El modelo estima de forma independiente el número esperado de córners, la línea y la probabilidad. Las cuotas no se utilizan para crear una predicción.",
      infoP3:
        "Las cuotas se añaden solo cuando el mercado correspondiente está disponible. Se muestran para comparar el precio del mercado con la estimación independiente del modelo. Solo se publican como señales las predicciones con cuotas disponibles.",
      infoP4:
        "El modelo cubre únicamente la Premier League, La Liga, la Serie A y la Bundesliga. No analiza copas nacionales, competiciones de clubes ni partidos internacionales.",
      infoP5: "Las predicciones completadas publicadas y sus resultados reales pueden consultarse en la sección Historial.",
      infoP6: "Solo análisis estadístico: las probabilidades son estimaciones, no garantías.",
      infoClose: "Cerrar",
      modelCorners: "Córners",
      modelCards: "Tarjetas",
      modelUo: "Más/Menos",
      modelTabsAria: "Modelos",
      pageSubtitleCards: "Tarjetas — valor esperado, línea y probabilidad.",
      pageSubtitleUo: "Más/Menos — valor esperado, línea y probabilidad.",
      historyTitleCards: "Historial — Tarjetas",
      historyTitleUo: "Historial — Más/Menos",
      cardsSuffix: "TARJETAS",
      uoSuffix: "MÁS/MENOS",
      colFinalCards: "Tarjetas finales",
      colFinalUo: "Total final",
      noSignalsInfoTextCards:
        "Corner Edge analiza partidos solo de Premier League, La Liga, Serie A y Bundesliga. Las selecciones se publican 24–48 horas antes del inicio. El modelo de tarjetas evalúa la probabilidad estadística de forma independiente del mercado y genera una señal solo cuando supera un umbral validado históricamente. No se usan cálculos de EV basados en el mercado para seleccionar o ordenar señales. No se analizan copas nacionales, competiciones europeas de clubes ni partidos internacionales, ya que las rotaciones y la incertidumbre en las alineaciones pueden distorsionar los datos.",
      noSignalsInfoTextUo:
        "Corner Edge analiza partidos solo de Premier League, La Liga, Serie A y Bundesliga. Las selecciones se publican 24–48 horas antes del inicio. El modelo Más/Menos evalúa la probabilidad estadística de forma independiente del mercado y genera una señal solo cuando supera un umbral validado históricamente. No se usan cálculos de EV basados en el mercado para seleccionar o ordenar señales. No se analizan copas nacionales, competiciones europeas de clubes ni partidos internacionales, ya que las rotaciones y la incertidumbre en las alineaciones pueden distorsionar los datos.",
    },
    "pt-BR": {
      matchAnalysis: "ANÁLISE DA PARTIDA",
      pageTitle: "Sinais selecionados para as próximas partidas.",
      pageSubtitle: "Escanteios — valor esperado, linha e probabilidade.",
      currentSignals: "Sinais atuais",
      noSignals: "No momento não há sinais próximos publicados.",
      noSignalsInfoTitle: "No momento, não há seleções que atendam aos critérios",
      noSignalsInfoText:
        "O Corner Edge analisa apenas partidas da Premier League, La Liga, Serie A e Bundesliga. As seleções são publicadas de 24 a 48 horas antes do início. O modelo avalia a probabilidade estatística independentemente do mercado e gera um sinal apenas quando ela supera um limite validado historicamente. Cálculos de EV baseados no mercado não são usados para selecionar ou classificar os sinais. Copas nacionais, competições europeias de clubes e partidas internacionais não são analisadas, pois rotações no elenco e a incerteza sobre as escalações podem distorcer os dados.",
      hitRate: "Taxa de acerto",
      roi: "ROI",
      profit: "Lucro",
      flatStake: "Stake fixa de 1 unidade",
      backtest: "Teste histórico",
      publishedSignals: "Seleções publicadas",
      signals: "sinais",
      history: "Histórico",
      win: "BEM-SUCEDIDOS",
      lost: "MALSUCEDIDOS",
      backtestByLeague: "Teste histórico por ligas",
      resultsByLeague: "Resultados por liga",
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
      sinceStart: "Geral",
      thisMonth: "Este mês",
      tipstrrTitle: "Registros públicos",
      tipstrrText: "As seleções são publicadas antes do início da partida e registradas de forma independente.",
      tipstrrCta: "Ver perfil no Tipstrr ↗",
      betstampCta: "Ver perfil no Betstamp ↗",
      infoButton: "ⓘ Como o modelo funciona",
      modalTitle: "Como as previsões são calculadas",
      infoP1:
        "Cada previsão é calculada com nossa própria base de dados histórica antes da consulta às odds das casas de apostas.",
      infoP2:
        "O modelo estima de forma independente o número esperado de escanteios, a linha e a probabilidade. As odds não são usadas para criar uma previsão.",
      infoP3:
        "As odds são adicionadas somente quando o mercado correspondente fica disponível. Elas são exibidas para comparar o preço de mercado com a estimativa independente do modelo. Apenas previsões com odds disponíveis são publicadas como sinais.",
      infoP4:
        "O modelo cobre apenas Premier League, La Liga, Serie A e Bundesliga. Não analisa copas nacionais, competições de clubes ou jogos internacionais.",
      infoP5: "As previsões concluídas publicadas e seus resultados reais podem ser consultados na seção Histórico.",
      infoP6: "Apenas análise estatística — as probabilidades são estimativas, não garantias.",
      infoClose: "Fechar",
      modelCorners: "Escanteios",
      modelCards: "Cartões",
      modelUo: "Mais/Menos",
      modelTabsAria: "Modelos",
      pageSubtitleCards: "Cartões — valor esperado, linha e probabilidade.",
      pageSubtitleUo: "Mais/Menos — valor esperado, linha e probabilidade.",
      historyTitleCards: "Histórico — Cartões",
      historyTitleUo: "Histórico — Mais/Menos",
      cardsSuffix: "CARTÕES",
      uoSuffix: "MAIS/MENOS",
      colFinalCards: "Cartões finais",
      colFinalUo: "Total final",
      noSignalsInfoTextCards:
        "Corner Edge analisa partidas apenas da Premier League, La Liga, Serie A e Bundesliga. As seleções são publicadas 24–48 horas antes do início. O modelo de cartões avalia a probabilidade estatística independentemente do mercado e gera um sinal somente quando ela ultrapassa um limiar historicamente validado. Cálculos de EV baseados no mercado não são usados para selecionar ou ranquear sinais. Copas domésticas, competições europeias de clubes e jogos internacionais não são analisados, pois rodízios e incerteza nas escalações podem distorcer os dados.",
      noSignalsInfoTextUo:
        "Corner Edge analisa partidas apenas da Premier League, La Liga, Serie A e Bundesliga. As seleções são publicadas 24–48 horas antes do início. O modelo Mais/Menos avalia a probabilidade estatística independentemente do mercado e gera um sinal somente quando ela ultrapassa um limiar historicamente validado. Cálculos de EV baseados no mercado não são usados para selecionar ou ranquear sinais. Copas domésticas, competições europeias de clubes e jogos internacionais não são analisados, pois rodízios e incerteza nas escalações podem distorcer os dados.",
    },
    de: {
      matchAnalysis: "SPIELANALYSE",
      pageTitle: "Ausgewählte Signale für bevorstehende Spiele.",
      pageSubtitle: "Ecken — erwarteter Wert, Linie und Wahrscheinlichkeit.",
      currentSignals: "Aktuelle Signale",
      noSignals: "Derzeit sind keine bevorstehenden Signale veröffentlicht.",
      noSignalsInfoTitle: "Derzeit gibt es keine Auswahl, die die Kriterien erfüllt",
      noSignalsInfoText:
        "Corner Edge analysiert nur Spiele aus der Premier League, La Liga, Serie A und Bundesliga. Die Auswahlen werden 24–48 Stunden vor Anpfiff veröffentlicht. Das Modell bewertet die statistische Wahrscheinlichkeit unabhängig vom Markt und erzeugt nur dann ein Signal, wenn sie einen historisch validierten Schwellenwert überschreitet. Marktbasierte EV-Berechnungen werden weder zur Auswahl noch zur Einordnung der Signale verwendet. Nationale Pokalwettbewerbe, europäische Klubwettbewerbe und Länderspiele werden nicht analysiert, da Kaderrotationen und Unsicherheit bei den Aufstellungen die Daten verzerren können.",
      hitRate: "Trefferquote",
      roi: "ROI",
      profit: "Gewinn",
      flatStake: "Festeinsatz von 1 Einheit",
      backtest: "Historischer Test",
      publishedSignals: "Veröffentlichte Signale",
      signals: "Signale",
      history: "Verlauf",
      win: "ERFOLGREICH",
      lost: "ERFOLGLOS",
      backtestByLeague: "Historischer Test nach Ligen",
      resultsByLeague: "Ergebnisse nach Liga",
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
      sinceStart: "Gesamt",
      thisMonth: "Dieser Monat",
      tipstrrTitle: "Öffentliche Nachweise",
      tipstrrText: "Tipps werden vor Anpfiff veröffentlicht und unabhängig festgehalten.",
      tipstrrCta: "Tipstrr-Profil ansehen ↗",
      betstampCta: "Betstamp-Profil ansehen ↗",
      infoButton: "ⓘ So funktioniert das Modell",
      modalTitle: "Wie die Prognosen berechnet werden",
      infoP1:
        "Jede Prognose wird anhand unserer eigenen historischen Daten berechnet, bevor Buchmacherquoten geprüft werden.",
      infoP2:
        "Das Modell schätzt die erwartete Anzahl an Ecken, die Linie und die Wahrscheinlichkeit unabhängig. Buchmacherquoten werden nicht zur Erstellung einer Prognose verwendet.",
      infoP3:
        "Quoten werden erst hinzugefügt, wenn der betreffende Markt verfügbar ist. Sie dienen dem Vergleich des Marktpreises mit der unabhängigen Einschätzung des Modells. Nur Prognosen mit verfügbaren Quoten werden als Signale veröffentlicht.",
      infoP4:
        "Das Modell deckt nur Premier League, La Liga, Serie A und Bundesliga ab. Nationale Pokale, Klubwettbewerbe und internationale Spiele werden nicht analysiert.",
      infoP5:
        "Veröffentlichte abgeschlossene Prognosen und ihre tatsächlichen Ergebnisse können im Bereich Historie geprüft werden.",
      infoP6: "Nur statistische Analyse — Wahrscheinlichkeiten sind Schätzungen, keine Garantien.",
      infoClose: "Schließen",
      modelCorners: "Ecken",
      modelCards: "Karten",
      modelUo: "Über/Unter",
      modelTabsAria: "Modelle",
      pageSubtitleCards: "Karten — erwarteter Wert, Linie und Wahrscheinlichkeit.",
      pageSubtitleUo: "Über/Unter — erwarteter Wert, Linie und Wahrscheinlichkeit.",
      historyTitleCards: "Verlauf — Karten",
      historyTitleUo: "Verlauf — Über/Unter",
      cardsSuffix: "KARTEN",
      uoSuffix: "ÜBER/UNTER",
      colFinalCards: "Endgültige Karten",
      colFinalUo: "Endgültiger Total",
      noSignalsInfoTextCards:
        "Corner Edge analysiert nur Spiele aus Premier League, La Liga, Serie A und Bundesliga. Auswahlen werden 24–48 Stunden vor Anpfiff veröffentlicht. Das Kartenmodell bewertet die statistische Wahrscheinlichkeit unabhängig vom Markt und erzeugt ein Signal nur, wenn sie eine historisch validierte Schwelle überschreitet. Marktbasierte EV-Berechnungen werden nicht zur Auswahl oder Rangfolge von Signalen verwendet. Nationale Pokale, europäische Klubwettbewerbe und Länderspiele werden nicht analysiert, da Rotation und Aufstellungsunsicherheit die Daten verzerren können.",
      noSignalsInfoTextUo:
        "Corner Edge analysiert nur Spiele aus Premier League, La Liga, Serie A und Bundesliga. Auswahlen werden 24–48 Stunden vor Anpfiff veröffentlicht. Das Über/Unter-Modell bewertet die statistische Wahrscheinlichkeit unabhängig vom Markt und erzeugt ein Signal nur, wenn sie eine historisch validierte Schwelle überschreitet. Marktbasierte EV-Berechnungen werden nicht zur Auswahl oder Rangfolge von Signalen verwendet. Nationale Pokale, europäische Klubwettbewerbe und Länderspiele werden nicht analysiert, da Rotation und Aufstellungsunsicherheit die Daten verzerren können.",
    },
    fr: {
      matchAnalysis: "ANALYSE DU MATCH",
      pageTitle: "Signaux sélectionnés pour les prochains matchs.",
      pageSubtitle: "Corners — valeur attendue, ligne et probabilité.",
      currentSignals: "Signaux actuels",
      noSignals: "Aucun signal à venir n'est publié pour le moment.",
      noSignalsInfoTitle: "Aucune sélection ne répond actuellement aux critères",
      noSignalsInfoText:
        "Corner Edge analyse uniquement des matchs de Premier League, de La Liga, de Serie A et de Bundesliga. Les sélections sont publiées 24 à 48 heures avant le coup d’envoi. Le modèle évalue la probabilité statistique indépendamment du marché et ne génère un signal que lorsqu’elle dépasse un seuil historiquement validé. Les calculs d’EV fondés sur le marché ne servent ni à sélectionner ni à classer les signaux. Les coupes nationales, les compétitions européennes de clubs et les matchs internationaux ne sont pas analysés, car les rotations d’effectif et l’incertitude concernant les compositions peuvent fausser les données.",
      hitRate: "Taux de réussite",
      roi: "ROI",
      profit: "Profit",
      flatStake: "Mise fixe de 1 unité",
      backtest: "Test historique",
      publishedSignals: "Sélections publiées",
      signals: "signaux",
      history: "Historique",
      win: "RÉUSSIS",
      lost: "ÉCHOUÉS",
      backtestByLeague: "Test historique par ligues",
      resultsByLeague: "Résultats par championnat",
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
      sinceStart: "Total",
      thisMonth: "Ce mois-ci",
      tipstrrTitle: "Registres publics",
      tipstrrText: "Les sélections sont publiées avant le coup d'envoi et enregistrées de façon indépendante.",
      tipstrrCta: "Voir le profil Tipstrr ↗",
      betstampCta: "Voir le profil Betstamp ↗",
      infoButton: "ⓘ Comment fonctionne le modèle",
      modalTitle: "Comment les prévisions sont calculées",
      infoP1:
        "Chaque prévision est calculée à partir de notre propre base de données historique avant la consultation des cotes des bookmakers.",
      infoP2:
        "Le modèle estime indépendamment le nombre attendu de corners, la ligne et la probabilité. Les cotes ne sont pas utilisées pour créer une prévision.",
      infoP3:
        "Les cotes sont ajoutées uniquement lorsque le marché concerné devient disponible. Elles servent à comparer le prix du marché avec l’estimation indépendante du modèle. Seules les prévisions avec des cotes disponibles sont publiées comme signaux.",
      infoP4:
        "Le modèle couvre uniquement la Premier League, la Liga, la Serie A et la Bundesliga. Il n’analyse pas les coupes nationales, les compétitions de clubs ni les matchs internationaux.",
      infoP5:
        "Les prévisions terminées publiées et leurs résultats réels peuvent être consultés dans la section Historique.",
      infoP6: "Analyse statistique uniquement — les probabilités sont des estimations, pas des garanties.",
      infoClose: "Fermer",
      modelCorners: "Corners",
      modelCards: "Cartons",
      modelUo: "Plus/Moins",
      modelTabsAria: "Modèles",
      pageSubtitleCards: "Cartons — valeur attendue, ligne et probabilité.",
      pageSubtitleUo: "Plus/Moins — valeur attendue, ligne et probabilité.",
      historyTitleCards: "Historique — Cartons",
      historyTitleUo: "Historique — Plus/Moins",
      cardsSuffix: "CARTONS",
      uoSuffix: "PLUS/MOINS",
      colFinalCards: "Cartons finaux",
      colFinalUo: "Total final",
      noSignalsInfoTextCards:
        "Corner Edge analyse uniquement les matchs de Premier League, La Liga, Serie A et Bundesliga. Les sélections sont publiées 24–48 heures avant le coup d’envoi. Le modèle cartons évalue la probabilité statistique indépendamment du marché et génère un signal uniquement lorsqu’elle dépasse un seuil historiquement validé. Les calculs d’EV basés sur le marché ne sont pas utilisés pour sélectionner ou classer les signaux. Les coupes nationales, les compétitions européennes de clubs et les matchs internationaux ne sont pas analysés, car les rotations et l’incertitude des compositions peuvent fausser les données.",
      noSignalsInfoTextUo:
        "Corner Edge analyse uniquement les matchs de Premier League, La Liga, Serie A et Bundesliga. Les sélections sont publiées 24–48 heures avant le coup d’envoi. Le modèle Plus/Moins évalue la probabilité statistique indépendamment du marché et génère un signal uniquement lorsqu’elle dépasse un seuil historiquement validé. Les calculs d’EV basés sur le marché ne sont pas utilisés pour sélectionner ou classer les signaux. Les coupes nationales, les compétitions européennes de clubs et les matchs internationaux ne sont pas analysés, car les rotations et l’incertitude des compositions peuvent fausser les données.",
    },
    it: {
      matchAnalysis: "ANALISI DELLA PARTITA",
      pageTitle: "Segnali selezionati per le prossime partite.",
      pageSubtitle: "Corner — valore atteso, linea e probabilità.",
      currentSignals: "Segnali attuali",
      noSignals: "Al momento non ci sono segnali imminenti pubblicati.",
      noSignalsInfoTitle: "Al momento non ci sono selezioni che soddisfano i criteri",
      noSignalsInfoText:
        "Corner Edge analizza solo partite di Premier League, La Liga, Serie A e Bundesliga. Le selezioni vengono pubblicate 24–48 ore prima del calcio d’inizio. Il modello valuta la probabilità statistica indipendentemente dal mercato e genera un segnale solo quando supera una soglia validata storicamente. I calcoli di EV basati sul mercato non vengono utilizzati per selezionare o ordinare i segnali. Le coppe nazionali, le competizioni europee per club e le partite internazionali non vengono analizzate, poiché le rotazioni della rosa e l’incertezza sulle formazioni possono distorcere i dati.",
      hitRate: "Tasso di successo",
      roi: "ROI",
      profit: "Profitto",
      flatStake: "Puntata fissa di 1 unità",
      backtest: "Test storico",
      publishedSignals: "Selezioni pubblicate",
      signals: "segnali",
      history: "Cronologia",
      win: "RIUSCITI",
      lost: "NON RIUSCITI",
      backtestByLeague: "Test storico per leghe",
      resultsByLeague: "Risultati per campionato",
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
      sinceStart: "Totale",
      thisMonth: "Questo mese",
      tipstrrTitle: "Cronologie pubbliche",
      tipstrrText: "Le selezioni vengono pubblicate prima del calcio d'inizio e registrate in modo indipendente.",
      tipstrrCta: "Vedi il profilo Tipstrr ↗",
      betstampCta: "Vedi il profilo Betstamp ↗",
      infoButton: "ⓘ Come funziona il modello",
      modalTitle: "Come vengono calcolate le previsioni",
      infoP1:
        "Ogni previsione viene calcolata utilizzando il nostro database storico prima di controllare le quote dei bookmaker.",
      infoP2:
        "Il modello stima in modo indipendente il numero atteso di calci d’angolo, la linea e la probabilità. Le quote dei bookmaker non vengono utilizzate per creare una previsione.",
      infoP3:
        "Le quote vengono aggiunte solo quando il mercato corrispondente è disponibile. Servono a confrontare il prezzo di mercato con la stima indipendente del modello. Solo le previsioni con quote disponibili vengono pubblicate come segnali.",
      infoP4:
        "Il modello copre solo Premier League, La Liga, Serie A e Bundesliga. Non analizza coppe nazionali, competizioni per club o partite internazionali.",
      infoP5:
        "Le previsioni pubblicate concluse e i loro risultati reali possono essere consultati nella sezione Cronologia.",
      infoP6: "Solo analisi statistica — le probabilità sono stime, non garanzie.",
      infoClose: "Chiudi",
      modelCorners: "Corner",
      modelCards: "Cartellini",
      modelUo: "Over/Under",
      modelTabsAria: "Modelli",
      pageSubtitleCards: "Cartellini — valore atteso, linea e probabilità.",
      pageSubtitleUo: "Over/Under — valore atteso, linea e probabilità.",
      historyTitleCards: "Cronologia — Cartellini",
      historyTitleUo: "Cronologia — Over/Under",
      cardsSuffix: "CARTELLINI",
      uoSuffix: "OVER/UNDER",
      colFinalCards: "Cartellini finali",
      colFinalUo: "Totale finale",
      noSignalsInfoTextCards:
        "Corner Edge analizza solo le partite di Premier League, La Liga, Serie A e Bundesliga. Le selezioni vengono pubblicate 24–48 ore prima del calcio d’inizio. Il modello cartellini valuta la probabilità statistica indipendentemente dal mercato e genera un segnale solo quando supera una soglia storicamente validata. I calcoli di EV basati sul mercato non vengono usati per selezionare o ordinare i segnali. Coppe nazionali, competizioni europee per club e partite internazionali non vengono analizzate, perché rotazioni e incertezza nelle formazioni possono distorcere i dati.",
      noSignalsInfoTextUo:
        "Corner Edge analizza solo le partite di Premier League, La Liga, Serie A e Bundesliga. Le selezioni vengono pubblicate 24–48 ore prima del calcio d’inizio. Il modello Over/Under valuta la probabilità statistica indipendentemente dal mercato e genera un segnale solo quando supera una soglia storicamente validata. I calcoli di EV basati sul mercato non vengono usati per selezionare o ordinare i segnali. Coppe nazionali, competizioni europee per club e partite internazionali non vengono analizzate, perché rotazioni e incertezza nelle formazioni possono distorcere i dati.",
    },
    tr: {
      matchAnalysis: "MAÇ ANALİZİ",
      pageTitle: "Yaklaşan maçlar için seçilmiş sinyaller.",
      pageSubtitle: "Kornerler — beklenen değer, çizgi ve olasılık.",
      currentSignals: "Güncel sinyaller",
      noSignals: "Şu anda yayınlanmış yaklaşan sinyal yok.",
      noSignalsInfoTitle: "Şu anda kriterleri karşılayan bir seçim bulunmuyor",
      noSignalsInfoText:
        "Corner Edge yalnızca Premier League, La Liga, Serie A ve Bundesliga maçlarını analiz eder. Seçimler başlangıçtan 24–48 saat önce yayınlanır. Model, istatistiksel olasılığı piyasadan bağımsız olarak değerlendirir ve yalnızca tarihsel olarak doğrulanmış bir eşiği aştığında sinyal üretir. Piyasa temelli EV hesaplamaları sinyalleri seçmek veya sıralamak için kullanılmaz. Ulusal kupalar, Avrupa kulüp organizasyonları ve uluslararası maçlar; kadro rotasyonları ve ilk 11 belirsizliği verileri bozabileceği için analiz edilmez.",
      hitRate: "İsabet oranı",
      roi: "ROI",
      profit: "Kâr",
      flatStake: "Sabit 1 birim bahis",
      backtest: "Tarihsel test",
      publishedSignals: "Yayınlanan seçimler",
      signals: "sinyal",
      history: "Geçmiş",
      win: "BAŞARILI",
      lost: "BAŞARISIZ",
      backtestByLeague: "Liglere göre tarihsel test",
      resultsByLeague: "Liglere göre sonuçlar",
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
      sinceStart: "Toplam",
      thisMonth: "Bu ay",
      tipstrrTitle: "Herkese açık kayıtlar",
      tipstrrText: "Seçimler maç başlamadan önce yayınlanır ve bağımsız olarak kayda geçirilir.",
      tipstrrCta: "Tipstrr profilini gör ↗",
      betstampCta: "Betstamp profilini gör ↗",
      infoButton: "ⓘ Model nasıl çalışır",
      modalTitle: "Tahminler nasıl hesaplanır",
      infoP1:
        "Her tahmin, bahis şirketi oranları kontrol edilmeden önce kendi geçmiş veri tabanımız kullanılarak hesaplanır.",
      infoP2:
        "Model, beklenen korner sayısını, çizgiyi ve olasılığı bağımsız olarak tahmin eder. Bahis oranları tahmin oluşturmak için kullanılmaz.",
      infoP3:
        "Oranlar yalnızca ilgili piyasa açıldıktan sonra eklenir. Piyasa fiyatını modelin bağımsız tahminiyle karşılaştırmak için gösterilir. Yalnızca oranı mevcut olan tahminler sinyal olarak yayımlanır.",
      infoP4:
        "Model yalnızca Premier League, La Liga, Serie A ve Bundesliga'yı kapsar. Yerel kupaları, kulüp turnuvalarını veya uluslararası maçları analiz etmez.",
      infoP5: "Yayımlanan tamamlanmış tahminler ve gerçek sonuçları Geçmiş bölümünde kontrol edilebilir.",
      infoP6: "Yalnızca istatistiksel analiz — olasılıklar tahmindir, garanti değildir.",
      infoClose: "Kapat",
      modelCorners: "Kornerler",
      modelCards: "Kartlar",
      modelUo: "Üst/Alt",
      modelTabsAria: "Modeller",
      pageSubtitleCards: "Kartlar — beklenen değer, çizgi ve olasılık.",
      pageSubtitleUo: "Üst/Alt — beklenen değer, çizgi ve olasılık.",
      historyTitleCards: "Geçmiş — Kartlar",
      historyTitleUo: "Geçmiş — Üst/Alt",
      cardsSuffix: "KARTLAR",
      uoSuffix: "ÜST/ALT",
      colFinalCards: "Final kart",
      colFinalUo: "Final toplam",
      noSignalsInfoTextCards:
        "Corner Edge yalnızca Premier League, La Liga, Serie A ve Bundesliga maçlarını analiz eder. Seçimler kick-off’tan 24–48 saat önce yayınlanır. Kart modeli istatistiksel olasılığı piyasadan bağımsız değerlendirir ve yalnızca tarihsel olarak doğrulanmış bir eşiği aştığında sinyal üretir. Piyasa tabanlı EV hesaplamaları sinyalleri seçmek veya sıralamak için kullanılmaz. Ulusal kupalar, Avrupa kulüp müsabakaları ve uluslararası maçlar analiz edilmez; çünkü rotasyon ve kadro belirsizliği verileri bozabilir.",
      noSignalsInfoTextUo:
        "Corner Edge yalnızca Premier League, La Liga, Serie A ve Bundesliga maçlarını analiz eder. Seçimler kick-off’tan 24–48 saat önce yayınlanır. Üst/Alt modeli istatistiksel olasılığı piyasadan bağımsız değerlendirir ve yalnızca tarihsel olarak doğrulanmış bir eşiği aştığında sinyal üretir. Piyasa tabanlı EV hesaplamaları sinyalleri seçmek veya sıralamak için kullanılmaz. Ulusal kupalar, Avrupa kulüp müsabakaları ve uluslararası maçlar analiz edilmez; çünkü rotasyon ve kadro belirsizliği verileri bozabilir.",
    },
    pl: {
      matchAnalysis: "ANALIZA MECZU",
      pageTitle: "Wybrane sygnały na nadchodzące mecze.",
      pageSubtitle: "Rożne — wartość oczekiwana, linia i prawdopodobieństwo.",
      currentSignals: "Bieżące sygnały",
      noSignals: "W tej chwili nie ma opublikowanych nadchodzących sygnałów.",
      noSignalsInfoTitle: "Obecnie nie ma typów spełniających kryteria",
      noSignalsInfoText:
        "Corner Edge analizuje wyłącznie mecze Premier League, La Liga, Serie A i Bundesligi. Selekcje są publikowane 24–48 godzin przed rozpoczęciem spotkania. Model ocenia prawdopodobieństwo statystyczne niezależnie od rynku i generuje sygnał tylko wtedy, gdy przekracza ono historycznie zweryfikowany próg. Oparte na rynku obliczenia EV nie są używane do wyboru ani klasyfikowania sygnałów. Krajowe puchary, europejskie rozgrywki klubowe i mecze międzynarodowe nie są analizowane, ponieważ rotacje w składzie i niepewność co do wyjściowych jedenastek mogą zniekształcić dane.",
      hitRate: "Skuteczność",
      roi: "ROI",
      profit: "Zysk",
      flatStake: "Stała stawka: 1 jednostka",
      backtest: "Test historyczny",
      publishedSignals: "Opublikowane typy",
      signals: "sygnałów",
      history: "Historia",
      win: "UDANE",
      lost: "NIEUDANE",
      backtestByLeague: "Test historyczny według lig",
      resultsByLeague: "Wyniki według ligi",
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
      sinceStart: "Ogółem",
      thisMonth: "Ten miesiąc",
      tipstrrTitle: "Publiczne zapisy",
      tipstrrText: "Selekcje są publikowane przed rozpoczęciem meczu i zapisywane niezależnie.",
      tipstrrCta: "Zobacz profil Tipstrr ↗",
      betstampCta: "Zobacz profil Betstamp ↗",
      infoButton: "ⓘ Jak działa model",
      modalTitle: "Jak obliczane są prognozy",
      infoP1:
        "Każda prognoza jest obliczana na podstawie naszej własnej historycznej bazy danych, zanim sprawdzone zostaną kursy bukmacherów.",
      infoP2:
        "Model niezależnie szacuje oczekiwaną liczbę rzutów rożnych, linię i prawdopodobieństwo. Kursy bukmacherów nie są używane do tworzenia prognozy.",
      infoP3:
        "Kursy są dodawane dopiero po udostępnieniu odpowiedniego rynku. Pokazujemy je, aby porównać cenę rynkową z niezależną oceną modelu. Jako sygnały publikowane są tylko prognozy z dostępnymi kursami.",
      infoP4:
        "Model obejmuje tylko Premier League, La Liga, Serie A i Bundesligę. Nie analizuje pucharów krajowych, rozgrywek klubowych ani meczów międzynarodowych.",
      infoP5: "Opublikowane zakończone prognozy i ich rzeczywiste wyniki można sprawdzić w sekcji Historia.",
      infoP6: "Wyłącznie analiza statystyczna — prawdopodobieństwa są szacunkami, a nie gwarancjami.",
      infoClose: "Zamknij",
      modelCorners: "Rożne",
      modelCards: "Kartki",
      modelUo: "Over/Under",
      modelTabsAria: "Modele",
      pageSubtitleCards: "Kartki — wartość oczekiwana, linia i prawdopodobieństwo.",
      pageSubtitleUo: "Over/Under — wartość oczekiwana, linia i prawdopodobieństwo.",
      historyTitleCards: "Historia — Kartki",
      historyTitleUo: "Historia — Over/Under",
      cardsSuffix: "KARTKI",
      uoSuffix: "OVER/UNDER",
      colFinalCards: "Końcowe kartki",
      colFinalUo: "Końcowy total",
      noSignalsInfoTextCards:
        "Corner Edge analizuje wyłącznie mecze Premier League, La Liga, Serie A i Bundesligi. Selekcje są publikowane 24–48 godzin przed rozpoczęciem. Model kartek ocenia prawdopodobieństwo statystyczne niezależnie od rynku i generuje sygnał tylko wtedy, gdy przekracza historycznie zweryfikowany próg. Obliczenia EV oparte na rynku nie są używane do wyboru ani rankingowania sygnałów. Puchary krajowe, europejskie rozgrywki klubowe i mecze międzynarodowe nie są analizowane, ponieważ rotacje i niepewność składów mogą zniekształcać dane.",
      noSignalsInfoTextUo:
        "Corner Edge analizuje wyłącznie mecze Premier League, La Liga, Serie A i Bundesligi. Selekcje są publikowane 24–48 godzin przed rozpoczęciem. Model Over/Under ocenia prawdopodobieństwo statystyczne niezależnie od rynku i generuje sygnał tylko wtedy, gdy przekracza historycznie zweryfikowany próg. Obliczenia EV oparte na rynku nie są używane do wyboru ani rankingowania sygnałów. Puchary krajowe, europejskie rozgrywki klubowe i mecze międzynarodowe nie są analizowane, ponieważ rotacje i niepewność składów mogą zniekształcać dane.",
    },
    ru: {
      matchAnalysis: "АНАЛИЗ МАТЧА",
      pageTitle: "Выбранные сигналы на предстоящие матчи.",
      pageSubtitle: "Угловые — ожидаемая ценность, линия и вероятность.",
      currentSignals: "Текущие сигналы",
      noSignals: "На данный момент нет опубликованных предстоящих сигналов.",
      noSignalsInfoTitle: "Сейчас нет сигналов, соответствующих критериям",
      noSignalsInfoText:
        "Corner Edge анализирует только матчи Премьер-лиги, Ла Лиги, Серии A и Бундеслиги. Сигналы публикуются за 24–48 часов до начала матча. Модель оценивает статистическую вероятность независимо от рынка и генерирует сигнал только тогда, когда она превышает исторически подтверждённый порог. Рыночные расчёты EV не используются для отбора или ранжирования сигналов. Национальные кубки, европейские клубные турниры и международные матчи не анализируются, поскольку ротация состава и неопределённость стартовых составов могут исказить данные.",
      hitRate: "Процент успеха",
      roi: "ROI",
      profit: "Прибыль",
      flatStake: "Фиксированная ставка: 1 единица",
      backtest: "Исторический тест",
      publishedSignals: "Опубликованные сигналы",
      signals: "сигналов",
      history: "История",
      win: "УСПЕШНЫЕ",
      lost: "НЕУСПЕШНЫЕ",
      backtestByLeague: "Исторический тест по лигам",
      resultsByLeague: "Результаты по лигам",
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
      sinceStart: "Всего",
      thisMonth: "Этот месяц",
      tipstrrTitle: "Публичные записи",
      tipstrrText: "Селекции публикуются до начала матча и фиксируются независимо.",
      tipstrrCta: "Смотреть профиль Tipstrr ↗",
      betstampCta: "Смотреть профиль Betstamp ↗",
      infoButton: "ⓘ Как работает модель",
      modalTitle: "Как рассчитываются прогнозы",
      infoP1:
        "Каждый прогноз рассчитывается на основе нашей собственной исторической базы данных до проверки букмекерских коэффициентов.",
      infoP2:
        "Модель независимо оценивает ожидаемое количество угловых, линию и вероятность. Букмекерские коэффициенты не используются для создания прогноза.",
      infoP3:
        "Коэффициенты добавляются только после появления соответствующего рынка. Они показаны для сравнения рыночной цены с независимой оценкой модели. В качестве сигналов публикуются только прогнозы с доступными коэффициентами.",
      infoP4:
        "Модель охватывает только Premier League, La Liga, Serie A и Bundesliga. Она не анализирует национальные кубки, клубные турниры или международные матчи.",
      infoP5: "Опубликованные завершённые прогнозы и их фактические результаты можно проверить в разделе «История».",
      infoP6: "Только статистический анализ — вероятности являются оценками, а не гарантиями.",
      infoClose: "Закрыть",
      modelCorners: "Угловые",
      modelCards: "Карточки",
      modelUo: "Тотал",
      modelTabsAria: "Модели",
      pageSubtitleCards: "Карточки — ожидаемая ценность, линия и вероятность.",
      pageSubtitleUo: "Тотал — ожидаемая ценность, линия и вероятность.",
      historyTitleCards: "История — Карточки",
      historyTitleUo: "История — Тотал",
      cardsSuffix: "КАРТОЧКИ",
      uoSuffix: "ТОТАЛ",
      colFinalCards: "Итоговые карточки",
      colFinalUo: "Итоговый тотал",
      noSignalsInfoTextCards:
        "Corner Edge анализирует матчи только из Premier League, La Liga, Serie A и Bundesliga. Селекции публикуются за 24–48 часов до начала. Модель карточек оценивает статистическую вероятность независимо от рынка и формирует сигнал только когда она превышает исторически подтверждённый порог. Рыночные расчёты EV не используются для выбора или ранжирования сигналов. Национальные кубки, европейские клубные турниры и международные матчи не анализируются, поскольку ротации и неопределённость составов могут искажать данные.",
      noSignalsInfoTextUo:
        "Corner Edge анализирует матчи только из Premier League, La Liga, Serie A и Bundesliga. Селекции публикуются за 24–48 часов до начала. Модель тотала оценивает статистическую вероятность независимо от рынка и формирует сигнал только когда она превышает исторически подтверждённый порог. Рыночные расчёты EV не используются для выбора или ранжирования сигналов. Национальные кубки, европейские клубные турниры и международные матчи не анализируются, поскольку ротации и неопределённость составов могут искажать данные.",
    },
  };


  const MODEL_IDS = ["corners", "cards", "uo"];

  const MODELS = {
    corners: {
      id: "corners",
      currentPath: "data/current.json",
      previousPath: "data/previous.json",
      historyPath: "data/history.json",
      tabLabelKey: "modelCorners",
      pageSubtitleKey: "pageSubtitle",
      historyTitleKey: "historyTitle",
      marketSuffixKey: "cornersSuffix",
      colFinalKey: "colFinalCorners",
      noSignalsInfoTextKey: "noSignalsInfoText",
      resultField: "finalCorners",
    },
    cards: {
      id: "cards",
      currentPath: "data/cards_current.json",
      previousPath: null,
      historyPath: "data/cards_history.json",
      tabLabelKey: "modelCards",
      pageSubtitleKey: "pageSubtitleCards",
      historyTitleKey: "historyTitleCards",
      marketSuffixKey: "cardsSuffix",
      colFinalKey: "colFinalCards",
      noSignalsInfoTextKey: "noSignalsInfoTextCards",
      resultField: "finalCards",
    },
    uo: {
      id: "uo",
      currentPath: "data/uo_current.json",
      previousPath: null,
      historyPath: "data/uo_history.json",
      tabLabelKey: "modelUo",
      pageSubtitleKey: "pageSubtitleUo",
      historyTitleKey: "historyTitleUo",
      marketSuffixKey: "uoSuffix",
      colFinalKey: "colFinalUo",
      noSignalsInfoTextKey: "noSignalsInfoTextUo",
      resultField: "finalTotal",
    },
  };

  function parseModelParam() {
    const raw = String(new URLSearchParams(window.location.search).get("model") || "")
      .trim()
      .toLowerCase();
    if (raw === "cards" || raw === "uo" || raw === "corners") return raw;
    return "corners";
  }

  function activeModel() {
    return MODELS[state.model] || MODELS.corners;
  }

  function buildQuery(extra) {
    const params = new URLSearchParams();
    const model = (extra && extra.model) || state.model || "corners";
    params.set("model", model);
    if (extra) {
      Object.keys(extra).forEach((key) => {
        if (key === "model") return;
        const val = extra[key];
        if (val == null || val === "") return;
        params.set(key, String(val));
      });
    }
    const q = params.toString();
    return q ? `?${q}` : "";
  }

  function hrefWithModel(base, extra) {
    return `${base}${buildQuery(extra || {})}`;
  }

  const state = {
    lang: "en",
    model: "corners",
    current: null,
    previous: null,
    publishedHistory: null,
    historyMode: "current",
  };


  function isSupportedLang(code) {
    return Object.prototype.hasOwnProperty.call(I18N, code);
  }

  function langMeta(code) {
    return LANGS.find((l) => l.code === code) || LANGS[0];
  }

  function t(key) {
    const langTable = I18N[state.lang] || I18N.en;
    if (langTable && Object.prototype.hasOwnProperty.call(langTable, key) && langTable[key]) {
      return langTable[key];
    }
    if (I18N.en && Object.prototype.hasOwnProperty.call(I18N.en, key) && I18N.en[key]) {
      return I18N.en[key];
    }
    return key;
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

  function infoButtonLabel() {
    const raw = t("infoButton");
    if (!raw || raw === "infoButton") return "How the model works";
    // Strip leading info-symbol / icon glyphs without requiring the unicode regex flag.
    return String(raw).replace(/^ⓘ\s*/, "").trim() || String(raw).trim();
  }

  function syncModelInfoLabels() {
    const label = infoButtonLabel();
    const btn = document.getElementById("model-info-button");
    const tip = document.getElementById("model-info-tooltip");
    if (btn) {
      btn.setAttribute("aria-label", label);
      // Keep the visible glyph fixed as lowercase "i".
      if (btn.textContent !== "i") btn.textContent = "i";
    }
    if (tip) tip.textContent = label;

    const closeX = document.getElementById("model-info-close-x");
    if (closeX) {
      const closeLabel = t("infoClose");
      if (closeLabel && closeLabel !== "infoClose") closeX.setAttribute("aria-label", closeLabel);
    }
  }

  function applyI18n() {
    document.documentElement.lang = state.lang === "pt-BR" ? "pt-BR" : state.lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const value = t(key);
      // Never replace visible copy with a raw missing-key name.
      if (value && value !== key) el.textContent = value;
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

    syncModelInfoLabels();
    applyModelChrome();
  }

  function applyModelChrome() {
    const model = activeModel();

    const setByKey = (el, key) => {
      if (!el || !key) return;
      const value = t(key);
      if (value && value !== key) el.textContent = value;
    };

    setByKey(document.querySelector('.page-subtitle[data-i18n="pageSubtitle"]'), model.pageSubtitleKey);
    setByKey(document.querySelector('[data-i18n="noSignalsInfoText"]'), model.noSignalsInfoTextKey);
    setByKey(document.querySelector('[data-i18n="historyTitle"]'), model.historyTitleKey);
    setByKey(document.getElementById("col-final-header"), model.colFinalKey);

    const tabsNav = document.getElementById("model-tabs");
    if (tabsNav) {
      const aria = t("modelTabsAria");
      if (aria && aria !== "modelTabsAria") tabsNav.setAttribute("aria-label", aria);
    }

    document.querySelectorAll(".model-tab").forEach((tab) => {
      const id = tab.getAttribute("data-model");
      const def = MODELS[id];
      if (def) setByKey(tab, def.tabLabelKey);
      tab.classList.toggle("is-active", id === model.id);
      if (id === model.id) tab.setAttribute("aria-current", "page");
      else tab.removeAttribute("aria-current");
      tab.setAttribute("href", hrefForModelTab(id));
    });

    syncModelLinks();

    if ((document.body.dataset.page || detectPage()) === "history") {
      document.title = `${t(model.historyTitleKey)} | Corner Edge`;
    }
  }

  function hrefForModelTab(modelId) {
    const page = document.body.dataset.page || detectPage();
    const extra = { model: modelId };
    if (page === "history") {
      const month = new URLSearchParams(window.location.search).get("month");
      if (month === "previous") extra.month = "previous";
      return hrefWithModel("history.html", extra);
    }
    // Prefer index.html?model=… ; fall back to same-path ?model=… if the
    // current URL is already a clean "/" (some static servers redirect and drop query).
    const path = String(window.location.pathname || "").toLowerCase();
    if (path.endsWith("/") || path === "") {
      return buildQuery(extra);
    }
    return hrefWithModel("index.html", extra);
  }

  function syncModelLinks() {
    const brand = document.getElementById("brand-link");
    if (brand) brand.setAttribute("href", hrefWithModel("index.html"));

    const historyCard = document.getElementById("history-card");
    if (historyCard) historyCard.setAttribute("href", hrefWithModel("history.html"));

    const backHome = document.getElementById("back-home-link");
    if (backHome) backHome.setAttribute("href", hrefWithModel("index.html"));

    const currentMonthBtn = document.getElementById("current-month-btn");
    if (currentMonthBtn) currentMonthBtn.setAttribute("href", hrefWithModel("history.html"));
  }

  function setupModelInfoModal() {
    const btn = document.getElementById("model-info-button");
    const modal = document.getElementById("model-info-modal");
    const dialog = document.getElementById("model-info-dialog");
    const closeX = document.getElementById("model-info-close-x");
    // Footer Close button was removed from the markup on purpose.
    // Never call addEventListener on a missing close button.
    if (!btn || !modal || !dialog) return;

    const isOpen = () => !modal.hasAttribute("hidden");

    const open = () => {
      modal.removeAttribute("hidden");
      document.body.classList.add("modal-open");
      btn.setAttribute("aria-expanded", "true");
      syncModelInfoLabels();
      try {
        dialog.focus({ preventScroll: true });
      } catch (err) {
        try {
          dialog.focus();
        } catch (focusErr) {
          /* ignore focus failures */
        }
      }
    };

    const close = () => {
      if (!isOpen()) return;
      modal.setAttribute("hidden", "");
      document.body.classList.remove("modal-open");
      btn.setAttribute("aria-expanded", "false");
      try {
        btn.focus({ preventScroll: true });
      } catch (err) {
        try {
          btn.focus();
        } catch (focusErr) {
          /* ignore focus failures */
        }
      }
    };

    const openFromEvent = (e) => {
      e.preventDefault();
      e.stopPropagation();
      open();
    };

    // Capture phase so this always runs even if another bubble handler stops later.
    btn.addEventListener("click", openFromEvent, true);
    btn.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Enter" || e.key === " ") openFromEvent(e);
      },
      true
    );

    if (closeX) {
      closeX.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        close();
      });
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) close();
    });

    dialog.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        close();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen()) {
        e.preventDefault();
        close();
      }
    });
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

  // Display-only: whole-number corner lines "N+" render as "N.5+". Raw JSON values stay unchanged.
  function formatLineDisplay(rawLine) {
    if (rawLine == null || rawLine === "") return "—";
    const text = String(rawLine).trim();
    const match = text.match(/^(\d+)\+$/);
    if (!match) return text;
    return `${match[1]}.5+`;
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
    const emptyInfo = document.getElementById("signals-empty-info");
    if (!list) return;

    list.innerHTML = "";
    const items = sortSignalsByKickoff(Array.isArray(signals) ? signals : []);

    if (!items.length) {
      if (empty) empty.hidden = false;
      if (emptyInfo) emptyInfo.hidden = false;
      return;
    }
    if (empty) empty.hidden = true;
    if (emptyInfo) emptyInfo.hidden = true;

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
          <p class="league">${escapeHtml(s.league || "")} - ${t(activeModel().marketSuffixKey)}</p>
          <p class="teams">${escapeHtml(s.homeTeam || s.home || "")} — ${escapeHtml(s.awayTeam || s.away || "")}</p>
          <p class="when">${escapeHtml(formatKickoff(kickoffValue(s)))}</p>
          ${publishedAtMarkup(s)}
        </div>
        <div class="signal-metrics">
          <div>
            <p class="metric-value">${escapeHtml(formatLineDisplay(s.line))}</p>
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

  function yearMonthInDeviceTz(date) {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: getDeviceTimeZone(),
      year: "numeric",
      month: "2-digit",
    }).formatToParts(date);
    const year = (parts.find((p) => p.type === "year") || {}).value || "";
    const month = (parts.find((p) => p.type === "month") || {}).value || "";
    return year && month ? `${year}-${month}` : "";
  }

  function isKickoffInDeviceMonth(iso) {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return false;
    return yearMonthInDeviceTz(date) === yearMonthInDeviceTz(new Date());
  }

  function tallySettled(predictions) {
    let win = 0;
    let lost = 0;
    (Array.isArray(predictions) ? predictions : []).forEach((p) => {
      const status = String(p.status || "").toUpperCase();
      if (status === "WIN" || status === "SUCCESSFUL") win += 1;
      else if (status === "LOST" || status === "UNSUCCESSFUL") lost += 1;
    });
    const settled = win + lost;
    return {
      count: Array.isArray(predictions) ? predictions.length : 0,
      win,
      lost,
      hitRate: settled ? (win / settled) * 100 : 0,
    };
  }

  function tallyProfit(predictions) {
    let profit = 0;
    let count = 0;
    (Array.isArray(predictions) ? predictions : []).forEach((p) => {
      if (!hasOdds(p.odds)) return;
      const status = String(p.status || "").toUpperCase();
      const odds = Number(p.odds);
      if (status === "WIN" || status === "SUCCESSFUL") {
        profit += odds - 1;
        count += 1;
      } else if (status === "LOST" || status === "UNSUCCESSFUL") {
        profit -= 1;
        count += 1;
      }
    });
    return {
      count,
      profit,
      roi: count ? (profit / count) * 100 : 0,
      hasData: count > 0,
    };
  }

  function formatRoiValue(value, hasData) {
    if (!hasData) return "—";
    const num = Number(value) || 0;
    const sign = num > 0 ? "+" : "";
    return `${sign}${formatNumber(num, 1)}%`;
  }

  function formatProfitValue(value, hasData) {
    if (!hasData) return "—";
    const num = Number(value) || 0;
    const sign = num > 0 ? "+" : "";
    return `${sign}${formatNumber(num, 2)}u`;
  }

  function setSignedStat(el, value, hasData, formatter) {
    if (!el) return;
    el.textContent = formatter(value, hasData);
    el.classList.toggle("text-win", hasData && Number(value) > 0);
    el.classList.toggle("text-lost", hasData && Number(value) < 0);
  }

  function homeStatsFromHistory(historyData) {
    const predictions =
      historyData && Array.isArray(historyData.predictions) ? historyData.predictions : [];
    const byLeague = {};
    HOME_LEAGUE_ORDER.forEach((name) => {
      byLeague[name] = { win: 0, total: 0 };
    });

    predictions.forEach((p) => {
      const status = String(p.status || "").toUpperCase();
      const league = String(p.league || "");
      if (!byLeague[league]) byLeague[league] = { win: 0, total: 0 };

      if (status === "WIN" || status === "SUCCESSFUL") {
        byLeague[league].win += 1;
        byLeague[league].total += 1;
      } else if (status === "LOST" || status === "UNSUCCESSFUL") {
        byLeague[league].total += 1;
      }
    });

    const all = tallySettled(predictions);
    const monthPreds = predictions.filter((p) => isKickoffInDeviceMonth(kickoffValue(p)));
    const month = tallySettled(monthPreds);
    const allProfit = tallyProfit(predictions);
    const monthProfit = tallyProfit(monthPreds);

    const leagues = HOME_LEAGUE_ORDER.map((name) => {
      const row = byLeague[name] || { win: 0, total: 0 };
      return {
        name,
        win: row.win,
        total: row.total,
        hitRate: row.total ? (row.win / row.total) * 100 : 0,
      };
    });

    return {
      hitRate: all.hitRate,
      backtest: all.count,
      win: all.win,
      lost: all.lost,
      monthHitRate: month.hitRate,
      monthBacktest: month.count,
      monthWin: month.win,
      monthLost: month.lost,
      roi: allProfit.roi,
      profit: allProfit.profit,
      hasProfitData: allProfit.hasData,
      monthRoi: monthProfit.roi,
      monthProfit: monthProfit.profit,
      hasMonthProfitData: monthProfit.hasData,
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
    const hitMonth = document.getElementById("stat-hit-rate-month");
    const backtestMonth = document.getElementById("stat-backtest-month");
    const winMonth = document.getElementById("stat-win-month");
    const lostMonth = document.getElementById("stat-lost-month");

    if (hit) hit.textContent = formatHitRate(s.hitRate);
    if (backtest) backtest.textContent = formatNumber(s.backtest || 0, 0);
    if (win) win.textContent = formatNumber(s.win || 0, 0);
    if (lost) lost.textContent = formatNumber(s.lost || 0, 0);
    if (hitMonth) hitMonth.textContent = formatHitRate(s.monthHitRate);
    if (backtestMonth) backtestMonth.textContent = formatNumber(s.monthBacktest || 0, 0);
    if (winMonth) winMonth.textContent = formatNumber(s.monthWin || 0, 0);
    if (lostMonth) lostMonth.textContent = formatNumber(s.monthLost || 0, 0);

    setSignedStat(document.getElementById("stat-roi"), s.roi, s.hasProfitData, formatRoiValue);
    setSignedStat(document.getElementById("stat-roi-month"), s.monthRoi, s.hasMonthProfitData, formatRoiValue);
    setSignedStat(document.getElementById("stat-profit"), s.profit, s.hasProfitData, formatProfitValue);
    setSignedStat(
      document.getElementById("stat-profit-month"),
      s.monthProfit,
      s.hasMonthProfitData,
      formatProfitValue
    );

    const leagueList = document.getElementById("league-list");
    if (!leagueList) return;

    const leagues = Array.isArray(s.leagues) ? s.leagues : [];
    leagueList.innerHTML = leagues
      .map((league) => {
        const rate = Number(league.hitRate) || 0;
        const width = Math.max(0, Math.min(100, rate));
        const winCount = Number(league.win) || 0;
        const totalCount = Number(league.total) || 0;
        const record = `${formatNumber(winCount, 0)} / ${formatNumber(totalCount, 0)}`;
        return `
          <li class="league-item">
            <span class="league-name">${escapeHtml(league.name)} <span class="league-record">${escapeHtml(record)}</span></span>
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
    rows.forEach((p) => {
      const status = String(p.status || "").toUpperCase();
      const oddsOk = hasOdds(p.odds);
      const odds = oddsOk ? Number(p.odds) : null;
      if (status === "WIN" || status === "SUCCESSFUL") {
        win += 1;
      } else if (status === "LOST" || status === "UNSUCCESSFUL") {
        lost += 1;
      }
      if (oddsOk) {
        oddsSum += odds;
        oddsCount += 1;
      }
    });
    // Month total uses the shared flat-stake profit helper.
    const profitStats = tallyProfit(rows);
    const total = rows.length;
    return {
      totalPredictions: total,
      win,
      lost,
      hitRate: total ? (win / total) * 100 : 0,
      averageOdds: oddsCount ? oddsSum / oddsCount : 0,
      monthTotal: profitStats.profit,
    };
  }

  function deviceYearMonthNow() {
    return yearMonthInDeviceTz(new Date());
  }

  function shiftYearMonth(ym, deltaMonths) {
    const parts = String(ym || "").split("-");
    const year = Number(parts[0]);
    const month = Number(parts[1]);
    if (!year || !month) return "";
    const shifted = new Date(Date.UTC(year, month - 1 + deltaMonths, 1));
    const y = shifted.getUTCFullYear();
    const m = String(shifted.getUTCMonth() + 1).padStart(2, "0");
    return `${y}-${m}`;
  }

  function monthLabelFromYm(ym) {
    const parts = String(ym || "").split("-");
    const year = Number(parts[0]);
    const month = Number(parts[1]);
    if (!year || !month || month < 1 || month > 12) return ym || "—";
    return `${MONTHS_FULL.en[month - 1]} ${year}`;
  }

  function filterPredictionsByYearMonth(predictions, ym) {
    const rows = Array.isArray(predictions) ? predictions : [];
    if (!ym) return [];
    return rows.filter((p) => {
      const iso = kickoffValue(p);
      const date = new Date(iso);
      if (Number.isNaN(date.getTime())) return false;
      return yearMonthInDeviceTz(date) === ym;
    });
  }

  function getHistoryBundle(mode) {
    const published = state.publishedHistory || {};
    const allPredictions = Array.isArray(published.predictions) ? published.predictions : [];
    const currentYm = deviceYearMonthNow();
    const targetYm = mode === "previous" ? shiftYearMonth(currentYm, -1) : currentYm;
    const predictions = filterPredictionsByYearMonth(allPredictions, targetYm);
    return {
      monthLabel: monthLabelFromYm(targetYm),
      summary: summaryFromPredictions(predictions),
      predictions,
    };
  }

  function renderHistorySummary(summary) {
    const s = summary || {};
    const set = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };

    const totalPredictions = Number(s.totalPredictions) || 0;
    const monthTotal = Number(s.monthTotal) || 0;

    set("sum-total", formatNumber(totalPredictions, 0));
    set("sum-win", formatNumber(s.win || 0, 0));
    set("sum-lost", formatNumber(s.lost || 0, 0));
    set("sum-hit-rate", formatHitRate(s.hitRate));
    set("sum-avg-odds", formatNumber(s.averageOdds || 0, 3));

    const monthEl = document.getElementById("sum-month-total");
    if (monthEl) {
      const sign = monthTotal > 0 ? "+" : "";
      monthEl.textContent = `${sign}${formatNumber(monthTotal, 2)}`;
      monthEl.classList.toggle("text-win", monthTotal > 0);
      monthEl.classList.toggle("text-lost", monthTotal < 0);
    }

    // Always update the existing ROI card from the same Month total / Total predictions values.
    const hasRoiData = totalPredictions > 0;
    const roi = hasRoiData ? (monthTotal / totalPredictions) * 100 : 0;
    setSignedStat(document.getElementById("sum-roi"), roi, hasRoiData, formatRoiValue);
  }

  function renderHistoryTable(predictions) {
    const tbody = document.getElementById("history-tbody");
    const cards = document.getElementById("history-cards");
    const empty = document.getElementById("history-empty");
    if (!tbody) return;

    const rows = sortHistoryByKickoffDesc(Array.isArray(predictions) ? predictions : []);
    tbody.innerHTML = "";
    if (cards) cards.innerHTML = "";

    if (!rows.length) {
      if (empty) empty.hidden = false;
      return;
    }
    if (empty) empty.hidden = true;

    rows.forEach((p) => {
      const status = String(p.status || "").toUpperCase();
      const statusClass = status === "WIN" || status === "SUCCESSFUL" ? "status-win" : "status-lost";
      const oddsText = hasOdds(p.odds) ? formatNumber(Number(p.odds), 2) : t("noBet");
      const matchText = `${p.homeTeam || p.home || ""} — ${p.awayTeam || p.away || ""}`;
      const kickoffText = formatKickoff(kickoffValue(p));
      const resultField = activeModel().resultField;
      const finalResult = p[resultField] == null ? "—" : String(p[resultField]);
      const finalLabel = t(activeModel().colFinalKey);
      const publishedHtml = publishedAtMarkup(p);

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${escapeHtml(kickoffText)}${publishedHtml}</td>
        <td>${escapeHtml(p.league || "—")}</td>
        <td>${escapeHtml(matchText)}</td>
        <td>${escapeHtml(formatLineDisplay(p.line))}</td>
        <td>${formatProbability(p.probability)}</td>
        <td>${oddsText}</td>
        <td>${escapeHtml(finalResult)}</td>
        <td><span class="status-pill ${statusClass}">${escapeHtml(statusLabel(status))}</span></td>
      `;
      tbody.appendChild(tr);

      if (cards) {
        const card = document.createElement("article");
        card.className = "history-match-card";
        card.innerHTML = `
          <div class="hmc-top">
            <p class="hmc-match">${escapeHtml(matchText)}</p>
            <span class="status-pill ${statusClass}">${escapeHtml(statusLabel(status))}</span>
          </div>
          <div class="hmc-meta">
            <p class="hmc-meta-row">
              <span class="hmc-label">${escapeHtml(t("colDateTime"))}</span>
              <span class="hmc-text">${escapeHtml(kickoffText)}</span>
            </p>
            <p class="hmc-meta-row">
              <span class="hmc-label">${escapeHtml(t("colLeague"))}</span>
              <span class="hmc-text">${escapeHtml(p.league || "—")}</span>
            </p>
          </div>
          <div class="hmc-grid">
            <div class="hmc-cell">
              <span class="hmc-label">${escapeHtml(t("colLine"))}</span>
              <span class="hmc-value">${escapeHtml(formatLineDisplay(p.line))}</span>
            </div>
            <div class="hmc-cell">
              <span class="hmc-label">${escapeHtml(t("colProbability"))}</span>
              <span class="hmc-value">${formatProbability(p.probability)}</span>
            </div>
            <div class="hmc-cell">
              <span class="hmc-label">${escapeHtml(t("colOdds"))}</span>
              <span class="hmc-value">${oddsText}</span>
            </div>
            <div class="hmc-cell">
              <span class="hmc-label">${escapeHtml(finalLabel)}</span>
              <span class="hmc-value">${escapeHtml(finalResult)}</span>
            </div>
          </div>
          ${publishedHtml}
        `;
        cards.appendChild(card);
      }
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
        window.location.href = hrefWithModel("history.html", { month: "previous" });
      });
    }
  }

  function emptyCurrentFallback() {
    return {
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
  }

  function emptyPreviousFallback() {
    return {
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
  }

  async function loadActiveModelData() {
    const model = activeModel();
    const currentPromise = loadJson(model.currentPath);
    const historyPromise = loadJson(model.historyPath).catch(() => ({ predictions: [] }));
    const previousPromise = model.previousPath
      ? loadJson(model.previousPath)
      : Promise.resolve(emptyPreviousFallback());

    const [current, previous, publishedHistory] = await Promise.all([
      currentPromise,
      previousPromise,
      historyPromise,
    ]);
    state.current = current;
    state.previous = previous;
    state.publishedHistory = publishedHistory || { predictions: [] };
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
    state.model = parseModelParam();
    setupLang();
    try {
      setupModelInfoModal();
    } catch (err) {
      console.error("Model info modal setup failed:", err);
    }

    const page = detectPage();
    document.body.dataset.page = page;
    applyI18n();

    try {
      await loadActiveModelData();
    } catch (err) {
      console.error(err);
      state.current = emptyCurrentFallback();
      state.previous = emptyPreviousFallback();
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
