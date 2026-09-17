// app.js — Render y lógica de la capacitación
(function () {
  const STORAGE_KEY = "curso-ia-progreso-v1";

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) {}
  }

  let progress = loadProgress(); // { m1: {passed: true, score: 4, total: 4}, ... }

  const app = document.getElementById("app");
  const sidebarNav = document.getElementById("nav-list");
  const progressFill = document.getElementById("progress-fill");
  const progressLabel = document.getElementById("progress-label");

  function letters(i) { return String.fromCharCode(65 + i); }

  function renderSidebar(activeId) {
    sidebarNav.innerHTML = "";

    const homeBtn = document.createElement("button");
    homeBtn.className = "nav-item" + (activeId === "home" ? " active" : "");
    homeBtn.innerHTML = `<span class="nav-dot ${activeId === "home" ? "" : ""}"></span><span>Inicio</span>`;
    homeBtn.onclick = () => navigate("home");
    sidebarNav.appendChild(homeBtn);

    COURSE.modules.forEach((m) => {
      const done = progress[m.id] && progress[m.id].passed;
      const li = document.createElement("button");
      li.className = "nav-item" + (activeId === m.id ? " active" : "");
      li.innerHTML = `<span class="nav-dot ${done ? "done" : ""}"></span><span class="nav-num">M${m.numero}</span><span>${m.titulo}</span>`;
      li.onclick = () => navigate(m.id);
      sidebarNav.appendChild(li);
    });

    const nextBtn = document.createElement("button");
    nextBtn.className = "nav-item" + (activeId === "next" ? " active" : "");
    nextBtn.innerHTML = `<span class="nav-dot"></span><span>¿Qué estudiar después?</span>`;
    nextBtn.onclick = () => navigate("next");
    sidebarNav.appendChild(nextBtn);

    const total = COURSE.modules.length;
    const doneCount = COURSE.modules.filter((m) => progress[m.id] && progress[m.id].passed).length;
    const pct = Math.round((doneCount / total) * 100);
    progressFill.style.width = pct + "%";
    progressLabel.textContent = `${doneCount} de ${total} módulos aprobados (${pct}%)`;
  }

  function renderHome() {
    const doneCount = COURSE.modules.filter((m) => progress[m.id] && progress[m.id].passed).length;
    let html = `
      <div class="home-hero">
        <div class="module-eyebrow">Capacitación interna</div>
        <h1>${COURSE.title}</h1>
        <p>${COURSE.subtitle}. Recorré los seis módulos en orden, respondé la evaluación de cada uno y llegá al final con un mapa claro de qué estudiar a continuación.</p>
      </div>
      <div class="module-cards">
    `;
    COURSE.modules.forEach((m) => {
      const st = progress[m.id];
      const statusText = st && st.passed ? `Aprobado · ${st.score}/${st.total}` : "Sin completar";
      html += `
        <button class="module-card" data-nav="${m.id}">
          <div class="num">${String(m.numero).padStart(2, "0")}</div>
          <div class="info">
            <div class="t">${m.titulo}</div>
            <div class="q">${m.pregunta}</div>
          </div>
          <div class="status ${st && st.passed ? "done" : ""}">${statusText}</div>
        </button>
      `;
    });
    html += `</div>`;
    app.innerHTML = html;
    app.querySelectorAll("[data-nav]").forEach((el) => {
      el.onclick = () => navigate(el.getAttribute("data-nav"));
    });
  }

  function renderNext() {
    let html = `
      <div class="module-eyebrow">Cierre del curso</div>
      <h1 class="module-title">¿Qué estudiar después?</h1>
      <p class="module-intro">Este curso es un mapa inicial. Este es un orden orientativo de cómo la carrera va a profundizar cada uno de estos temas.</p>
      <div class="roadmap">
    `;
    COURSE.proximosPasos.forEach((r) => {
      html += `
        <div class="roadmap-item">
          <div class="area">${r.area}</div>
          <p>${r.texto}</p>
        </div>
      `;
    });
    html += `</div>
      <div class="module-nav-buttons">
        <button class="btn secondary" data-nav="m6">&larr; Volver al Módulo 6</button>
        <button class="btn secondary" data-nav="home">Volver al inicio</button>
      </div>
    `;
    app.innerHTML = html;
    app.querySelectorAll("[data-nav]").forEach((el) => {
      el.onclick = () => navigate(el.getAttribute("data-nav"));
    });
  }

  function renderModule(m) {
    let html = `
      <div class="module-eyebrow">Módulo ${m.numero} de ${COURSE.modules.length}</div>
      <h1 class="module-title">${m.titulo}</h1>
      <p class="module-question">${m.pregunta}</p>
      <p class="module-intro">${m.intro}</p>
    `;

    m.secciones.forEach((s, i) => {
      html += `
        <div class="section-block">
          <h2>${i + 1}. ${s.titulo}</h2>
          ${s.html}
        </div>
      `;
    });

    html += `
      <div class="ideas-box">
        <h2>Idea clave</h2>
        <ul>${m.ideas.map((i) => `<li>${i}</li>`).join("")}</ul>
      </div>
    `;

    html += renderQuizHTML(m);

    const idx = COURSE.modules.findIndex((x) => x.id === m.id);
    const prev = idx > 0 ? COURSE.modules[idx - 1] : null;
    const next = idx < COURSE.modules.length - 1 ? COURSE.modules[idx + 1] : null;

    html += `<div class="module-nav-buttons">`;
    html += prev
      ? `<button class="btn secondary" data-nav="${prev.id}">&larr; Módulo ${prev.numero}</button>`
      : `<button class="btn secondary" data-nav="home">&larr; Inicio</button>`;
    html += next
      ? `<button class="btn secondary" data-nav="${next.id}">Módulo ${next.numero} &rarr;</button>`
      : `<button class="btn secondary" data-nav="next">Ver qué estudiar después &rarr;</button>`;
    html += `</div>`;

    app.innerHTML = html;

    app.querySelectorAll("[data-nav]").forEach((el) => {
      el.onclick = () => navigate(el.getAttribute("data-nav"));
    });

    wireQuiz(m);
  }

  function renderQuizHTML(m) {
    const st = progress[m.id];
    let html = `
      <div class="quiz" id="quiz-${m.id}">
        <div class="quiz-header">
          <h2>Evaluación del módulo</h2>
          <span class="quiz-score" id="quiz-score-${m.id}">${st ? `Último resultado: ${st.score}/${st.total}` : ""}</span>
        </div>
    `;

    let qNum = 0;
    m.quiz.mc.forEach((q, qi) => {
      qNum++;
      html += `
        <div class="q-block" data-qtype="mc" data-qindex="${qi}">
          <span class="q-kind">Opción múltiple · pregunta ${qNum}</span>
          <p class="q-text">${q.pregunta}</p>
          <div class="q-options">
            ${q.opciones
              .map(
                (op, oi) =>
                  `<button class="q-option" data-opt="${oi}"><span class="letter">${letters(oi)}</span><span>${op}</span></button>`
              )
              .join("")}
          </div>
          <div class="q-feedback" style="display:none;"></div>
        </div>
      `;
    });

    m.quiz.vf.forEach((q, qi) => {
      qNum++;
      html += `
        <div class="q-block" data-qtype="vf" data-qindex="${qi}">
          <span class="q-kind">Verdadero o falso · pregunta ${qNum}</span>
          <p class="q-text">${q.pregunta}</p>
          <div class="q-options vf-options">
            <button class="q-option" data-opt="true"><span>Verdadero</span></button>
            <button class="q-option" data-opt="false"><span>Falso</span></button>
          </div>
          <div class="q-feedback" style="display:none;"></div>
        </div>
      `;
    });

    html += `
        <div class="quiz-actions">
          <button class="btn" id="check-${m.id}">Corregir evaluación</button>
          <button class="btn secondary" id="retry-${m.id}">Reintentar</button>
          <span class="quiz-result" id="result-${m.id}"></span>
        </div>
      </div>
    `;
    return html;
  }

  function wireQuiz(m) {
    const container = document.getElementById(`quiz-${m.id}`);
    const answers = {}; // key: "mc-0" -> selected index/bool

    container.querySelectorAll(".q-block").forEach((block) => {
      const type = block.getAttribute("data-qtype");
      const qi = block.getAttribute("data-qindex");
      const key = `${type}-${qi}`;
      block.querySelectorAll(".q-option").forEach((btn) => {
        btn.addEventListener("click", () => {
          block.querySelectorAll(".q-option").forEach((b) => b.classList.remove("selected"));
          btn.classList.add("selected");
          const raw = btn.getAttribute("data-opt");
          answers[key] = type === "vf" ? raw === "true" : parseInt(raw, 10);
        });
      });
    });

    document.getElementById(`check-${m.id}`).addEventListener("click", () => {
      let correctCount = 0;
      let total = 0;

      container.querySelectorAll(".q-block").forEach((block) => {
        total++;
        const type = block.getAttribute("data-qtype");
        const qi = parseInt(block.getAttribute("data-qindex"), 10);
        const key = `${type}-${qi}`;
        const feedback = block.querySelector(".q-feedback");
        const opts = block.querySelectorAll(".q-option");

        let correctAnswer, given;
        if (type === "mc") {
          correctAnswer = m.quiz.mc[qi].correcta;
          given = answers[key];
        } else {
          correctAnswer = m.quiz.vf[qi].correcta;
          given = answers[key];
        }

        opts.forEach((btn) => (btn.disabled = true));

        if (given === undefined) {
          feedback.style.display = "block";
          feedback.className = "q-feedback incorrect";
          feedback.textContent = "No respondiste esta pregunta.";
          return;
        }

        const isCorrect =
          type === "mc" ? given === correctAnswer : given === correctAnswer;

        if (isCorrect) correctCount++;

        opts.forEach((btn) => {
          const val = type === "vf" ? btn.getAttribute("data-opt") === "true" : parseInt(btn.getAttribute("data-opt"), 10);
          if (val === correctAnswer) btn.classList.add("correct");
          else if (btn.classList.contains("selected") && !isCorrect) btn.classList.add("incorrect");
        });

        feedback.style.display = "block";
        if (isCorrect) {
          feedback.className = "q-feedback correct";
          feedback.textContent = "Correcto.";
        } else {
          feedback.className = "q-feedback incorrect";
          const correctText =
            type === "mc" ? m.quiz.mc[qi].opciones[correctAnswer] : correctAnswer ? "Verdadero" : "Falso";
          feedback.textContent = `Incorrecto. Respuesta correcta: ${correctText}`;
        }
      });

      const passed = correctCount === total;
      progress[m.id] = { passed, score: correctCount, total };
      saveProgress(progress);

      document.getElementById(`result-${m.id}`).textContent = `Resultado: ${correctCount}/${total} ${passed ? "· Módulo aprobado" : ""}`;
      document.getElementById(`quiz-score-${m.id}`).textContent = `Último resultado: ${correctCount}/${total}`;
      renderSidebar(m.id);
    });

    document.getElementById(`retry-${m.id}`).addEventListener("click", () => {
      renderModule(m);
    });
  }

  function navigate(id) {
    window.location.hash = id;
    render(id);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function render(id) {
    renderSidebar(id);
    if (id === "home" || !id) {
      renderHome();
    } else if (id === "next") {
      renderNext();
    } else {
      const m = COURSE.modules.find((x) => x.id === id);
      if (m) renderModule(m);
      else renderHome();
    }
  }

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("¿Reiniciar todo el progreso guardado en este navegador?")) {
      progress = {};
      saveProgress(progress);
      render(window.location.hash.replace("#", "") || "home");
    }
  });

  window.addEventListener("hashchange", () => {
    render(window.location.hash.replace("#", "") || "home");
  });

  // Init
  document.getElementById("course-title").textContent = COURSE.title;
  render(window.location.hash.replace("#", "") || "home");
})();
