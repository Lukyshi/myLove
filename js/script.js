/**
 * Birthday Appreciation Website — Interactions & Ambient Experience
 * ------------------------------------------------------------------
 * Handles configuration loading, duotone filter toggling, category filtering,
 * interactive birthday cake animation with microphone blow detection,
 * shower of kisses and hearts animation, "The Only Exception" by Paramore
 * music integration & acoustic guitar synthesizer, floating particle canvas,
 * sealed envelope reveal, and interactive modals.
 */

(function () {
  "use strict";

  const config = window.BIRTHDAY_CONFIG || {};

  // ==========================================================================
  // 1. Initialize Content from Config (Dynamic Personalization)
  // ==========================================================================
  function initConfigContent() {
    if (!config) return;

    if (config.girlfriendName) {
      document.title = `Happy Birthday, ${config.girlfriendName} | The Only Exception`;
    }

    if (config.monogram) {
      const brandInitials = document.querySelector(".brand-initials");
      if (brandInitials) brandInitials.textContent = config.monogram;
    }

    // Hero Section
    if (config.hero) {
      setElText("hero-tag", config.hero.tag);
      setElText("hero-heading", config.hero.heading);
      setElText("hero-intro", config.hero.intro);
      if (config.hero.portraitImage) {
        const heroImg = document.getElementById("hero-portrait-img");
        if (heroImg) heroImg.src = config.hero.portraitImage;
      }
      setElText("hero-portrait-caption", config.hero.portraitCaption);

      if (config.hero.stats && config.hero.stats.length >= 3) {
        setElText("stat-1-num", config.hero.stats[0].number);
        setElText("stat-1-label", config.hero.stats[0].label);
        setElText("stat-2-num", config.hero.stats[1].number);
        setElText("stat-2-label", config.hero.stats[1].label);
        setElText("stat-3-num", config.hero.stats[2].number);
        setElText("stat-3-label", config.hero.stats[2].label);
      }
    }

    // Reminder Section
    if (config.reminder) {
      setElText("reminder-accent", config.reminder.accentText);
      setElText("reminder-heading", config.reminder.heading);
      setElText("reminder-body", config.reminder.body);
    }

    // Memories Section
    if (config.memories) {
      setElText("memories-tag", config.memories.sectionTag);
      setElText("memories-heading", config.memories.heading);
      setElText("memories-story", config.memories.storyText);

      if (config.memories.photos) {
        config.memories.photos.forEach((photo, idx) => {
          const imgEl = document.getElementById(`mem-img-${idx}`);
          const badgeEl = document.getElementById(`mem-badge-${idx}`);
          if (imgEl && photo.image) imgEl.src = photo.image;
          if (badgeEl && photo.badge) badgeEl.textContent = photo.badge;
        });
      }
    }

    // Letter Section (Authentic Personal Letter Message)
    if (config.letter) {
      if (config.letter.envelopeTo) {
        setElText("envelope-recipient", config.letter.envelopeTo);
      } else if (config.girlfriendName) {
        setElText("envelope-recipient", `For ${config.girlfriendName}`);
      }
      if (config.letter.envelopeDeliveryNote) {
        setElText("envelope-delivery-note", config.letter.envelopeDeliveryNote);
      }
      setElText("letter-salutation", config.letter.salutation);
      setElText("letter-signoff", config.letter.signOff);
      setElText("letter-signature", config.letter.signature);
      if (config.birthdayDate) {
        setElText("letter-date", `${config.birthdayDate} • Your Birthday`);
      }

      const letterContainer = document.getElementById("letter-paragraphs");
      if (letterContainer && config.letter.paragraphs && config.letter.paragraphs.length > 0) {
        letterContainer.innerHTML = "";
        config.letter.paragraphs.forEach(p => {
          const pEl = document.createElement("p");
          if (p.includes("HAPPY BIRTHDAY!")) {
            pEl.innerHTML = `HAPPY BIRTHDAY! <svg class="icon-svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
            pEl.style.fontWeight = "700";
            pEl.style.color = "var(--color-deep-rose)";
            pEl.style.fontSize = "1.35rem";
            pEl.style.display = "flex";
            pEl.style.alignItems = "center";
            pEl.style.gap = "8px";
          } else {
            pEl.textContent = p;
          }
          letterContainer.appendChild(pEl);
        });
      }
    }

    // Cake Surprise Customization
    if (config.cakeSurprise) {
      setElText("cake-instruction", config.cakeSurprise.instruction);
      setElText("surprise-title", config.cakeSurprise.surpriseMessage);
      setElText("surprise-text", config.cakeSurprise.surpriseSubtext);
    }

    // Final Section Promises
    if (config.finalSection) {
      setElText("final-tag", config.finalSection.tag);
      setElText("final-heading", config.finalSection.heading);
      setElText("final-subheading", config.finalSection.subheading);

      if (config.finalSection.promises) {
        config.finalSection.promises.forEach((p, idx) => {
          const num = idx + 1;
          setElText(`promise-${num}-num`, p.number ? `${p.number}.` : `0${num}.`);
          setElText(`promise-${num}-title`, p.title);
          setElText(`promise-${num}-desc`, p.description);
        });
      }
    }

    // Set Footer Year
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function setElText(id, text) {
    if (!text) return;
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  // ==========================================================================
  // 2. Reference Duotone Pink Filter (Toggleable)
  // ==========================================================================
  function initDuotoneFilter() {
    const filterToggleBtn = document.getElementById("filter-toggle");
    const statusLabel = document.getElementById("filter-status-label");
    const targetElements = document.querySelectorAll(
      ".hero-preview-card, .appreciation-card, .polaroid-frame, .collage-card, .original-strip-card, .keepsake-card-item"
    );

    let isDuotoneActive = config.enableDuotoneFilter || false;

    function applyFilterState(active) {
      targetElements.forEach(el => {
        if (active) {
          el.classList.add("duotone-pink");
        } else {
          el.classList.remove("duotone-pink");
        }
      });

      if (statusLabel) {
        statusLabel.textContent = active ? "Pink Filter: ON" : "Pink Filter: OFF";
      }
    }

    applyFilterState(isDuotoneActive);

    if (filterToggleBtn) {
      filterToggleBtn.addEventListener("click", () => {
        isDuotoneActive = !isDuotoneActive;
        applyFilterState(isDuotoneActive);
      });
    }
  }

  // ==========================================================================
  // 3. Header & Navigation (Active Link on Scroll, Mobile Menu & Smooth Anchor Jumps)
  // ==========================================================================
  function initNavigation() {
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
    const sections = document.querySelectorAll("section[id]");
    const mobileMenuBtn = document.getElementById("mobile-menu-toggle");
    const mobileNavDrawer = document.getElementById("mobile-nav-drawer");

    // Toggle Mobile Navigation Drawer
    if (mobileMenuBtn && mobileNavDrawer) {
      function closeMobileMenu() {
        mobileMenuBtn.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        mobileNavDrawer.classList.remove("open");
        mobileNavDrawer.setAttribute("aria-hidden", "true");
      }

      function toggleMobileMenu() {
        const isOpen = mobileNavDrawer.classList.contains("open");
        if (isOpen) {
          closeMobileMenu();
        } else {
          mobileMenuBtn.classList.add("active");
          mobileMenuBtn.setAttribute("aria-expanded", "true");
          mobileNavDrawer.classList.add("open");
          mobileNavDrawer.setAttribute("aria-hidden", "false");
        }
      }

      mobileMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMobileMenu();
      });

      // Close on outside click
      document.addEventListener("click", (e) => {
        if (!mobileNavDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          closeMobileMenu();
        }
      });

      // Close on Escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeMobileMenu();
        }
      });

      // Close when any mobile link is clicked
      mobileNavDrawer.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          closeMobileMenu();
        });
      });

      // Close on window resize to desktop
      window.addEventListener("resize", () => {
        if (window.innerWidth > 1040) {
          closeMobileMenu();
        }
      });
    }

    function onScroll() {
      const scrollY = window.pageYOffset + 120;

      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      });
    });
  }

  // ==========================================================================
  // 4. Horizontal Filter Pills for Appreciation Cards
  // ==========================================================================
  function initAppreciationFilters() {
    const pills = document.querySelectorAll(".filter-pill");
    const cards = document.querySelectorAll(".appreciation-card");
    const seeAllBtn = document.getElementById("btn-toggle-all-cards");
    const secondaryGrid = document.getElementById("appreciation-secondary-grid");

    let isExpanded = false;

    pills.forEach(pill => {
      pill.addEventListener("click", () => {
        pills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");

        const category = pill.getAttribute("data-category");

        cards.forEach(card => {
          const cardCat = card.getAttribute("data-category");
          if (category === "all" || cardCat === category) {
            card.style.display = "";
            card.style.opacity = "0";
            card.style.transform = "translateY(12px)";
            setTimeout(() => {
              card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, 30);
          } else {
            card.style.display = "none";
          }
        });
      });
    });

    if (seeAllBtn && secondaryGrid) {
      seeAllBtn.addEventListener("click", () => {
        isExpanded = !isExpanded;
        if (isExpanded) {
          secondaryGrid.classList.remove("collapsed");
          seeAllBtn.innerHTML = `<span>Show Less</span> <svg class="icon-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`;
        } else {
          secondaryGrid.classList.add("collapsed");
          seeAllBtn.innerHTML = "<span>See All (14)</span>";
        }
      });
    }
  }

  // ==========================================================================
  // 5. Interactive Birthday Cake Animation (Microphone & Click Blowing)
  // ==========================================================================
  let isCandlesBlownOut = false;
  let micAudioContext = null;
  let micAnalyser = null;
  let micStream = null;
  let isMicListening = false;
  let micAnimFrame = null;

  function initBirthdayCake() {
    const cakeStage = document.getElementById("cake-stage");
    const clickBlowBtn = document.getElementById("btn-click-blow");
    const micBlowBtn = document.getElementById("btn-mic-blow");
    const micIcon = document.getElementById("mic-icon");
    const micStatusText = document.getElementById("mic-status-text");
    const instructionText = document.getElementById("cake-instruction");

    // Click to blow out (desktop fallback / mobile touch)
    if (clickBlowBtn) {
      clickBlowBtn.addEventListener("click", () => {
        blowOutCandles("click");
      });
    }

    if (cakeStage) {
      cakeStage.addEventListener("click", () => {
        if (!isCandlesBlownOut) {
          blowOutCandles("click");
        }
      });
    }

    // Microphone Blowing Interaction
    if (micBlowBtn) {
      micBlowBtn.addEventListener("click", async () => {
        if (isCandlesBlownOut) {
          relightCandles();
          return;
        }

        if (isMicListening) {
          stopMicListening();
          if (micStatusText) micStatusText.textContent = "Blow with Microphone";
          micBlowBtn.classList.remove("listening");
          return;
        }

        // Request microphone access
        try {
          micStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
          micAudioContext = new (window.AudioContext || window.webkitAudioContext)();
          
          if (micAudioContext.state === "suspended") {
            await micAudioContext.resume();
          }

          micAnalyser = micAudioContext.createAnalyser();
          micAnalyser.fftSize = 256;
          micAnalyser.smoothingTimeConstant = 0.2;

          const source = micAudioContext.createMediaStreamSource(micStream);
          source.connect(micAnalyser);

          isMicListening = true;
          micBlowBtn.classList.add("listening");
          if (micIcon) {
            micIcon.innerHTML = `<svg class="icon-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>`;
          }
          if (micStatusText) micStatusText.textContent = "Blow into mic now!";
          if (instructionText) {
            instructionText.textContent = "Blow gently into your microphone to put out the candles!";
          }

          checkMicrophoneBlowing();
        } catch (err) {
          console.warn("Microphone access denied or unavailable", err);
          if (micStatusText) micStatusText.textContent = "Mic unavailable — click button below!";
          if (micIcon) {
            micIcon.innerHTML = `<svg class="icon-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
          }
          if (instructionText) {
            instructionText.textContent = "Microphone unavailable. Click the button below to blow out candles!";
          }
        }
      });
    }

    // Relight Button in Surprise Modal
    const relightBtn = document.getElementById("btn-relight-candles");
    if (relightBtn) {
      relightBtn.addEventListener("click", () => {
        relightCandles();
        closeModal("modal-wish-surprise");
      });
    }
  }

  function checkMicrophoneBlowing() {
    if (!isMicListening || isCandlesBlownOut) return;

    const dataArray = new Uint8Array(micAnalyser.frequencyBinCount);
    micAnalyser.getByteFrequencyData(dataArray);

    let sum = 0;
    const lowFreqBins = 16;
    for (let i = 0; i < lowFreqBins; i++) {
      sum += dataArray[i];
    }
    const lowFreqAvg = sum / lowFreqBins;

    const meterBar = document.getElementById("mic-meter-bar");
    if (meterBar) {
      const pct = Math.min(100, Math.round((lowFreqAvg / 140) * 100));
      meterBar.style.width = `${pct}%`;
    }

    // Detect breath turbulence threshold
    if (lowFreqAvg > 75) {
      blowOutCandles("mic");
      return;
    }

    micAnimFrame = requestAnimationFrame(checkMicrophoneBlowing);
  }

  function stopMicListening() {
    isMicListening = false;
    if (micAnimFrame) {
      cancelAnimationFrame(micAnimFrame);
      micAnimFrame = null;
    }
    if (micStream) {
      micStream.getTracks().forEach(track => track.stop());
      micStream = null;
    }
    if (micAudioContext && micAudioContext.state !== "closed") {
      micAudioContext.close();
      micAudioContext = null;
    }
    const micBlowBtn = document.getElementById("btn-mic-blow");
    const meterBar = document.getElementById("mic-meter-bar");
    if (micBlowBtn) micBlowBtn.classList.remove("listening");
    if (meterBar) meterBar.style.width = "0%";
  }

  // --- Extinguish Candles & Trigger Surprise Animation ---
  function blowOutCandles(triggerType = "click") {
    if (isCandlesBlownOut) return;
    isCandlesBlownOut = true;

    stopMicListening();

    const cakeStage = document.getElementById("cake-stage");
    const instructionText = document.getElementById("cake-instruction");
    const clickBlowBtn = document.getElementById("btn-click-blow");

    if (cakeStage) cakeStage.classList.add("blown-out");

    if (instructionText) {
      instructionText.textContent = "Candles blown out! A shower of love for you...";
    }
    if (clickBlowBtn) {
      clickBlowBtn.innerHTML = `<svg class="icon-svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 2c-.5 2-2 4-2 6 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2-1.5-4-2-6-1 2-3 2-4 0z"/></svg> <span>Relight Candles</span>`;
    }

    // Play gentle wind breath sound & musical bell chime
    playBlowSound();
    setTimeout(() => playChimeSound(), 350);

    // Trigger full-screen shower of kisses, hearts, and confetti
    triggerShowerOfKisses();

    // After 1.2s, reveal the sweet birthday surprise message modal
    setTimeout(() => {
      openModal("modal-wish-surprise");
    }, 1200);
  }

  // --- Relight Candles ---
  function relightCandles() {
    isCandlesBlownOut = false;
    const cakeStage = document.getElementById("cake-stage");
    const instructionText = document.getElementById("cake-instruction");
    const clickBlowBtn = document.getElementById("btn-click-blow");
    const micStatusText = document.getElementById("mic-status-text");
    const micIcon = document.getElementById("mic-icon");

    if (cakeStage) cakeStage.classList.remove("blown-out");

    if (instructionText) {
      instructionText.textContent = config.cakeSurprise?.instruction || "Make a wish and blow out the candles!";
    }
    if (clickBlowBtn) {
      clickBlowBtn.innerHTML = `
        <svg class="icon-svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
        </svg>
        <span>Blow Out Candles (Click)</span>
        <span class="arrow-circle">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
        </span>
      `;
    }
    if (micStatusText) micStatusText.textContent = "Blow with Microphone";
    if (micIcon) {
      micIcon.innerHTML = `
        <svg class="icon-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      `;
    }

    // Play pleasant chime note
    playNote(587.33, (getAudioContext()?.currentTime || 0), 1.0, 0.08); // D5
  }

  // ==========================================================================
  // 6. SHOWER OF KISSES & PINK HEARTS ANIMATION (Clean Vector SVGs)
  // ==========================================================================
  function triggerShowerOfKisses() {
    const overlay = document.getElementById("kiss-shower-overlay");
    if (!overlay) return;

    overlay.innerHTML = "";
    overlay.classList.add("active");

    // Celebratory Heart Confetti
    if (typeof confetti === "function") {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.65 },
        colors: ["#D96D94", "#F8DDE5", "#E8A1B0", "#F5B9CC", "#FFFFFF"]
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.7 },
          colors: ["#D96D94", "#F5B9CC", "#A94770"]
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.7 },
          colors: ["#D96D94", "#F5B9CC", "#A94770"]
        });
      }, 350);
    }

    const cakeStage = document.getElementById("cake-stage");
    let originY = window.innerHeight * 0.6;
    if (cakeStage) {
      const rect = cakeStage.getBoundingClientRect();
      originY = rect.top + window.pageYOffset - window.scrollY;
    }

    // Spawn 36 Floating Lipstick Kiss Marks & 24 Floating SVG Hearts
    const totalKisses = 36;
    const totalHearts = 24;

    const kissShades = [
      "rgba(217, 109, 148, 0.9)", // Rose
      "rgba(169, 71, 112, 0.95)", // Deep Rose
      "rgba(232, 72, 128, 0.92)", // Hot Pink
      "rgba(245, 185, 204, 0.95)"  // Sweet Pink
    ];

    // Spawn Lipstick Kiss Marks (Clean Vector SVGs)
    for (let i = 0; i < totalKisses; i++) {
      setTimeout(() => {
        const kissEl = document.createElement("div");
        kissEl.className = "floating-kiss-mark";

        const screenSpreadX = (Math.random() * window.innerWidth * 0.85) + (window.innerWidth * 0.075);
        const startY = originY + (Math.random() * 80 - 40);

        const size = Math.floor(Math.random() * 26 + 32); // 32px to 58px
        const shade = kissShades[Math.floor(Math.random() * kissShades.length)];

        kissEl.style.left = `${screenSpreadX}px`;
        kissEl.style.top = `${startY}px`;
        kissEl.style.setProperty("--rot-start", `${Math.random() * 30 - 15}deg`);
        kissEl.style.setProperty("--rot-mid", `${Math.random() * 40 - 20}deg`);
        kissEl.style.setProperty("--rot-end", `${Math.random() * 30 - 15}deg`);
        kissEl.style.setProperty("--rot-final", `${Math.random() * 40 - 20}deg`);

        kissEl.innerHTML = `
          <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="${shade}">
            <path d="M31.8 14.5c-5.2 0-9.8 2.2-13.6 5.8-3.4 3.2-6.5 7.4-8.2 11.8-.7 1.8.8 3.5 2.6 3.1 4.5-1 9.4-2.2 14.2-2.2 2.6 0 4.8.6 6.8 1.4 2-1 4.4-1.6 7-1.6 5.2 0 10.5 1.4 15.2 2.6 1.8.5 3.4-1.2 2.6-3-2-4.6-5.4-8.8-9-12-3.8-3.5-8.4-5.9-13.6-5.9zm-16.2 24c3.8 2.8 8.8 5 14.2 5 2.2 0 4.2-.4 6-1.1 1.8.8 4 1.3 6.4 1.3 5.4 0 10.8-2.4 14.8-5.2 1.5-1.1 3.5.2 3 2-2 7.2-7.8 12.5-14.8 14.8-5.8 1.9-12.4 1.7-18.2-.4-6.4-2.3-11.8-7.2-14-14.2-.5-1.8 1.3-3.2 2.6-2.2z"/>
          </svg>
        `;

        overlay.appendChild(kissEl);
        setTimeout(() => kissEl.remove(), 4200);
      }, i * 75);
    }

    // Spawn Floating SVG Hearts & Sparkle Stars (Clean Vector Elements)
    const heartSvgShapes = [
      (color, size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
      (color, size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
      (color, size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>`
    ];

    for (let j = 0; j < totalHearts; j++) {
      setTimeout(() => {
        const heartEl = document.createElement("div");
        heartEl.className = "floating-shower-heart";

        const x = Math.random() * window.innerWidth;
        const y = originY + (Math.random() * 60);
        const size = Math.floor(Math.random() * 18 + 20); // 20px - 38px
        const color = kissShades[Math.floor(Math.random() * kissShades.length)];
        const shapeFn = heartSvgShapes[Math.floor(Math.random() * heartSvgShapes.length)];

        heartEl.innerHTML = shapeFn(color, size);
        heartEl.style.left = `${x}px`;
        heartEl.style.top = `${y}px`;
        heartEl.style.setProperty("--sway-x", `${Math.random() * 60 - 30}px`);
        heartEl.style.setProperty("--sway-x-end", `${Math.random() * 80 - 40}px`);

        overlay.appendChild(heartEl);
        setTimeout(() => heartEl.remove(), 4500);
      }, j * 110);
    }

    setTimeout(() => {
      overlay.classList.remove("active");
    }, 5500);
  }

  // ==========================================================================
  // 7. Background Music: "The Only Exception" by Paramore
  // Natural playback with user interaction & acoustic guitar synthesizer fallback
  // ==========================================================================
  // 7. Miniature Romantic Music Player — "The Only Exception" by Paramore
  // Integrated with Official YouTube Video Player & Fallback Synthesizer
  // ==========================================================================
  let audioCtx = null;
  let isPlayingMusic = false;
  let paramoreSynthInterval = null;
  let activeAudioEl = null;
  let ytPlayer = null;
  let isYouTubeReady = false;
  let pendingPlay = false;

  // Global YouTube IFrame API Hook
  window.onYouTubeIframeAPIReady = function() {
    initYouTubePlayer();
  };

  function initYouTubePlayer() {
    if (ytPlayer || typeof YT === "undefined" || !YT.Player) return;
    try {
      const ytTarget = document.getElementById("youtube-audio-player");
      if (!ytTarget) return;

      ytPlayer = new YT.Player("youtube-audio-player", {
        videoId: config.music?.youtubeVideoId || "-J7J_IWUhls",
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          playsinline: 1,
          loop: 1,
          playlist: config.music?.youtubeVideoId || "-J7J_IWUhls"
        },
        events: {
          onReady: function() {
            isYouTubeReady = true;
            if (pendingPlay) {
              pendingPlay = false;
              playYouTube();
            }
          },
          onStateChange: function(event) {
            if (event.data === YT.PlayerState.PLAYING) {
              updateUiState(true);
            } else if (event.data === YT.PlayerState.PAUSED) {
              updateUiState(false);
            } else if (event.data === YT.PlayerState.ENDED) {
              if (isPlayingMusic && ytPlayer && typeof ytPlayer.playVideo === "function") {
                ytPlayer.playVideo();
              }
            }
          },
          onError: function(err) {
            console.log("YouTube player note (falling back to local/acoustic audio):", err);
            isYouTubeReady = false;
            if (isPlayingMusic) {
              fallbackPlay();
            }
          }
        }
      });
    } catch (e) {
      console.log("YouTube initialization note:", e);
    }
  }

  function playYouTube() {
    if (ytPlayer && typeof ytPlayer.playVideo === "function") {
      try {
        ytPlayer.playVideo();
        stopParamoreAcousticSynth();
        if (activeAudioEl) activeAudioEl.pause();
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  }

  function pauseYouTube() {
    if (ytPlayer && typeof ytPlayer.pauseVideo === "function") {
      try {
        ytPlayer.pauseVideo();
      } catch (e) {}
    }
  }

  function fallbackPlay() {
    if (activeAudioEl) {
      const playPromise = activeAudioEl.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          stopParamoreAcousticSynth();
        }).catch(() => {
          playParamoreAcousticSynth();
        });
      } else {
        playParamoreAcousticSynth();
      }
    } else {
      playParamoreAcousticSynth();
    }
  }

  function updateUiState(playing) {
    isPlayingMusic = playing;

    // 1. Hero Miniature Romantic Music Player Card
    const heroPlayer = document.getElementById("hero-music-player");
    const statusText = document.getElementById("music-status-text");
    const heroPlayBtn = document.getElementById("hero-music-start");

    if (heroPlayer) {
      if (playing) {
        heroPlayer.classList.add("is-playing");
      } else {
        heroPlayer.classList.remove("is-playing");
      }
    }

    if (statusText) {
      statusText.textContent = playing ? "Playing our song • Listen with love" : "Click to listen together";
    }

    if (heroPlayBtn) {
      heroPlayBtn.setAttribute("aria-label", playing ? "Pause The Only Exception by Paramore" : "Play The Only Exception by Paramore");
    }

    // 2. Navigation Bar Music Toggle (Synchronized)
    const musicBtn = document.getElementById("music-toggle");
    const musicLabel = document.getElementById("music-label");

    if (musicBtn) {
      if (playing) {
        musicBtn.classList.remove("paused");
        musicBtn.classList.add("is-playing");
      } else {
        musicBtn.classList.add("paused");
        musicBtn.classList.remove("is-playing");
      }
    }

    if (musicLabel) {
      musicLabel.textContent = playing ? "Playing: The Only Exception" : "The Only Exception";
    }
  }

  function togglePlayback() {
    if (!isPlayingMusic) {
      updateUiState(true);

      if (isYouTubeReady && ytPlayer) {
        const played = playYouTube();
        if (!played) {
          fallbackPlay();
        }
      } else if (!isYouTubeReady && typeof YT !== "undefined" && YT.Player) {
        pendingPlay = true;
        fallbackPlay();
      } else {
        fallbackPlay();
      }
    } else {
      updateUiState(false);
      pendingPlay = false;
      pauseYouTube();
      if (activeAudioEl) {
        activeAudioEl.pause();
      }
      stopParamoreAcousticSynth();
    }
  }

  function initMusicPlayer() {
    const musicBtn = document.getElementById("music-toggle");
    const heroPlayBtn = document.getElementById("hero-music-start");
    const vinylDisc = document.getElementById("music-card-art-wrap");

    // Check for HTML5 audio element
    const audioEl = document.getElementById("paramore-audio") || new Audio("assets/audio/the-only-exception.mp3");
    audioEl.loop = true;
    activeAudioEl = audioEl;

    // Check if YouTube API already loaded
    if (typeof YT !== "undefined" && YT.Player) {
      initYouTubePlayer();
    }

    if (heroPlayBtn) {
      heroPlayBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        togglePlayback();
      });
    }

    if (vinylDisc) {
      vinylDisc.addEventListener("click", (e) => {
        e.preventDefault();
        togglePlayback();
      });
    }

    if (musicBtn) {
      musicBtn.addEventListener("click", (e) => {
        e.preventDefault();
        togglePlayback();
      });
    }

    // Hero portrait card click starts song gently if not already playing
    const heroCard = document.getElementById("hero-card");
    if (heroCard) {
      heroCard.addEventListener("click", () => {
        if (!isPlayingMusic) {
          togglePlayback();
        }
        openLightbox(
          config.hero?.portraitImage || "assets/images/her-sunlit-glasses-portrait.jpg",
          config.hero?.portraitCaption || "The girl who became my only exception"
        );
      });
    }
  }

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Plucked Acoustic Guitar String Synthesis (Intimate, warm nylon/steel timbre)
  function playGuitarPluck(freq, startTime, duration = 2.4, gainLevel = 0.08) {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(freq, startTime);

    const osc2 = ctx.createOscillator();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(freq * 2, startTime);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(Math.min(freq * 5.5, 2400), startTime);
    filter.frequency.exponentialRampToValueAtTime(Math.min(freq * 1.4, 480), startTime + 0.38);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(gainLevel, startTime + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    const osc2Gain = ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.22, startTime);
    osc2.connect(osc2Gain);

    osc1.connect(gain);
    osc2Gain.connect(gain);
    gain.connect(filter);
    filter.connect(ctx.destination);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.1);
    osc2.stop(startTime + duration + 0.1);
  }

  function playNote(freq, startTime, duration, gainLevel = 0.08) {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(gainLevel, startTime + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
  }

  function playBlowSound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const bufferSize = ctx.sampleRate * 0.4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(450, now);
    filter.frequency.exponentialRampToValueAtTime(100, now + 0.4);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);
  }

  function playChimeSound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      playNote(freq, now + idx * 0.12, 1.8, 0.12);
    });
  }

  // "The Only Exception" by Paramore — Acoustic Guitar Arpeggios (Key of B: B - F# - E - E)
  const paramoreProgression = [
    // Measure 1: B Major Arpeggio
    { bass: 123.47, notes: [246.94, 311.13, 369.99, 493.88, 369.99, 311.13] },
    // Measure 2: F# Major Arpeggio
    { bass: 92.50, notes: [185.00, 233.08, 277.18, 369.99, 277.18, 233.08] },
    // Measure 3: E Major Arpeggio
    { bass: 82.41, notes: [164.81, 207.65, 246.94, 329.63, 246.94, 207.65] },
    // Measure 4: E Major Arpeggio (Turnaround)
    { bass: 82.41, notes: [164.81, 207.65, 246.94, 329.63, 246.94, 207.65] }
  ];

  let currentBarIndex = 0;

  function playParamoreAcousticSynth() {
    const ctx = getAudioContext();
    if (!ctx) return;

    function playBar() {
      if (!isPlayingMusic) return;

      const bar = paramoreProgression[currentBarIndex % paramoreProgression.length];
      currentBarIndex++;

      const now = ctx.currentTime;
      // Pluck warm sustained bass note
      playGuitarPluck(bar.bass, now, 3.2, 0.11);

      // Fingerpick 6/8 acoustic arpeggio
      const step = 0.44; // ~68 BPM in 6/8 time
      bar.notes.forEach((pitch, i) => {
        playGuitarPluck(pitch, now + i * step, 2.2, 0.075);
      });
    }

    playBar();
    paramoreSynthInterval = setInterval(playBar, 2640);
  }

  function stopParamoreAcousticSynth() {
    if (paramoreSynthInterval) {
      clearInterval(paramoreSynthInterval);
      paramoreSynthInterval = null;
    }
  }

  // ==========================================================================
  // 8. Ambient Romantic Particle Canvas Background
  // ==========================================================================
  function initParticleCanvas() {
    const canvas = document.getElementById("particles-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(35, Math.floor(window.innerWidth / 40));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 3 + 1.2,
        dx: (Math.random() - 0.5) * 0.45,
        dy: (Math.random() - 0.5) * 0.45,
        alpha: Math.random() * 0.45 + 0.15,
        color: Math.random() > 0.5 ? "217, 109, 148" : "245, 185, 204"
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  // ==========================================================================
  // 9. Interactive Modals, Lightbox & Envelope Reveal
  // ==========================================================================
  function initModals() {
    document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
      backdrop.addEventListener("click", e => {
        if (e.target === backdrop) {
          backdrop.classList.remove("active");
        }
      });
    });

    document.querySelectorAll(".modal-close-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        btn.closest(".modal-backdrop").classList.remove("active");
      });
    });

    // Close Surprise Modal button
    const closeSurprise = document.getElementById("modal-close-surprise");
    if (closeSurprise) {
      closeSurprise.addEventListener("click", () => {
        closeModal("modal-wish-surprise");
      });
    }

    // Appreciation Card Click -> Opens Detail Modal
    document.querySelectorAll(".appreciation-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        openAppreciationModal(id, card);
      });
    });

    const appOkBtn = document.getElementById("modal-app-ok");
    if (appOkBtn) {
      appOkBtn.addEventListener("click", () => {
        closeModal("modal-appreciation");
      });
    }

    // Memory Collage Cards Click -> Opens Lightbox
    document.querySelectorAll(".collage-card").forEach((card, idx) => {
      card.addEventListener("click", () => {
        const img = card.querySelector("img");
        const photoConfig = config.memories?.photos?.[idx];
        const caption = photoConfig ? `${photoConfig.title} — ${photoConfig.caption}` : "A Treasured Memory";
        if (img) {
          openLightbox(img.src, caption);
        }
      });
    });

    // Polaroid Cameos in Section 3 -> Opens Lightbox
    const polaroidCameo = document.getElementById("polaroid-cameo");
    if (polaroidCameo) {
      polaroidCameo.addEventListener("click", () => {
        const img = polaroidCameo.querySelector("img");
        const caption = polaroidCameo.getAttribute("data-caption") || config.reminder?.photoCaption || "My radiant only exception • The smile that lights up my whole world";
        if (img) {
          openLightbox(img.src, caption);
        }
      });
    }

    const polaroidCameoBack = document.getElementById("polaroid-cameo-back");
    if (polaroidCameoBack) {
      polaroidCameoBack.addEventListener("click", (e) => {
        e.stopPropagation();
        const img = polaroidCameoBack.querySelector("img");
        const caption = polaroidCameoBack.getAttribute("data-caption") || config.reminder?.photoBackCaption || "Even your cute everyday pouts are pure poetry";
        if (img) {
          openLightbox(img.src, caption);
        }
      });
    }

    // Original Digital Photobooth Strip Card -> Opens Lightbox
    const originalStripCard = document.getElementById("card-original-strip");
    if (originalStripCard) {
      originalStripCard.addEventListener("click", () => {
        const img = originalStripCard.querySelector("img");
        if (img) {
          openLightbox(img.src, "Original Digital Scan • 4-Pose Wedding Photobooth Strip (Photoism)");
        }
      });
    }

    // Keepsake Cards in Photobooth Section -> Opens Lightbox
    document.querySelectorAll(".keepsake-card-item").forEach(card => {
      card.addEventListener("click", () => {
        const photoSrc = card.getAttribute("data-photo");
        const caption = card.getAttribute("data-caption") || "Our Keepsake";
        if (photoSrc) {
          openLightbox(photoSrc, caption);
        }
      });
    });

    // Envelope Opening & Resealing Interactivity
    const envelopeShell = document.getElementById("envelope-shell");
    const waxSealOpener = document.getElementById("wax-seal-opener");
    const resealBtn = document.getElementById("btn-reseal-letter");

    if (envelopeShell) {
      envelopeShell.addEventListener("click", () => {
        openEnvelope();
      });
      envelopeShell.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openEnvelope();
        }
      });
    }

    if (waxSealOpener) {
      waxSealOpener.addEventListener("click", (e) => {
        e.stopPropagation();
        openEnvelope();
      });
      waxSealOpener.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          openEnvelope();
        }
      });
    }

    if (resealBtn) {
      resealBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        resealEnvelope();
      });
    }

    // Modal Surprise -> Read My Letter Button
    const readLetterSurpriseBtn = document.getElementById("btn-surprise-read-letter");
    if (readLetterSurpriseBtn) {
      readLetterSurpriseBtn.addEventListener("click", () => {
        closeModal("modal-wish-surprise");
        openEnvelope();
      });
    }

    // Wax Seal Click Easter Egg inside unfolded stationery
    const waxSeal = document.getElementById("wax-seal-badge");
    if (waxSeal) {
      waxSeal.addEventListener("click", () => {
        playChimeSound();
        if (typeof confetti === "function") {
          confetti({
            particleCount: 40,
            spread: 50,
            origin: { y: 0.5 },
            colors: ["#D96D94", "#F8DDE5", "#FFFFFF"]
          });
        }
      });
    }

    // Copy Letter Button (Copies authentic letter to clipboard)
    const copyLetterBtn = document.getElementById("btn-copy-letter");
    if (copyLetterBtn) {
      copyLetterBtn.addEventListener("click", () => {
        const letterEl = document.getElementById("letter-paragraphs");
        const salutation = document.getElementById("letter-salutation")?.textContent || "";
        const signature = document.getElementById("letter-signature")?.textContent || "";
        const fullText = `${salutation}\n\n${letterEl?.innerText || ""}\n\n${signature}`;

        navigator.clipboard.writeText(fullText).then(() => {
          const original = copyLetterBtn.innerHTML;
          copyLetterBtn.innerHTML = `
            <svg class="icon-svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Letter Copied to Clipboard!</span>
          `;
          setTimeout(() => {
            copyLetterBtn.innerHTML = original;
          }, 2500);
        }).catch(() => {
          alert("Letter ready! You can select and copy it.");
        });
      });
    }
  }

  // --- Envelope Opening & Resealing Handlers ---
  function openEnvelope() {
    const envelopeBox = document.getElementById("envelope-box");
    if (!envelopeBox || envelopeBox.classList.contains("opened")) return;

    envelopeBox.classList.add("opening");
    playChimeSound();

    if (typeof confetti === "function") {
      confetti({
        particleCount: 55,
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#D96D94", "#F8DDE5", "#F5B9CC", "#A94770", "#FFFFFF"]
      });
    }

    setTimeout(() => {
      envelopeBox.classList.remove("opening");
      envelopeBox.classList.add("opened");

      // Smoothly bring the letter header into view
      const letterSection = document.getElementById("letter");
      if (letterSection) {
        const topOffset = letterSection.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }
    }, 450);
  }

  function resealEnvelope() {
    const envelopeBox = document.getElementById("envelope-box");
    if (!envelopeBox || !envelopeBox.classList.contains("opened")) return;

    envelopeBox.classList.remove("opened");
    envelopeBox.classList.remove("opening");
    playGentlePop();

    const letterSection = document.getElementById("letter");
    if (letterSection) {
      const topOffset = letterSection.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }

  function playGentlePop() {
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(450, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.14);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.14);
    } catch (e) {}
  }

  function openAppreciationModal(cardId, cardEl) {
    const modal = document.getElementById("modal-appreciation");
    const tag = document.getElementById("modal-app-tag");
    const title = document.getElementById("modal-app-title");
    const body = document.getElementById("modal-app-body");

    const item = config.appreciation?.find(a => a.id === cardId);

    if (item) {
      if (tag) tag.textContent = `REASON #${item.number}`;
      if (title) title.textContent = item.title;
      if (body) body.textContent = item.fullNote || item.shortDescription;
    } else if (cardEl) {
      const cardTitle = cardEl.querySelector(".card-title")?.textContent || "Things I Love";
      const cardDesc = cardEl.querySelector(".card-description")?.textContent || "";
      const cardNum = cardEl.querySelector(".card-number-badge")?.textContent || "REASON";

      if (tag) tag.textContent = cardNum;
      if (title) title.textContent = cardTitle;
      if (body) body.textContent = cardDesc;
    }

    if (modal) modal.classList.add("active");
  }

  function openLightbox(imgSrc, captionText) {
    const modal = document.getElementById("modal-lightbox");
    const img = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");

    if (img) img.src = imgSrc;
    if (caption) caption.textContent = captionText;
    if (modal) modal.classList.add("active");
  }

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("active");
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("active");
  }

  // ==========================================================================
  // 9. Smooth Entrance & Scroll Reveal Animation System
  // ==========================================================================
  function initScrollAnimations() {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    if (!revealElements.length) return;

    // Respect reduced-motion accessibility preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealElements.forEach(el => el.classList.add("in-view"));
      return;
    }

    // Fallback for older browsers
    if (!("IntersectionObserver" in window)) {
      revealElements.forEach(el => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          // Animate once smoothly without repeated distracting re-triggers on up/down scroll
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => {
      observer.observe(el);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initConfigContent();
    initDuotoneFilter();
    initNavigation();
    initAppreciationFilters();
    initBirthdayCake();
    initMusicPlayer();
    initParticleCanvas();
    initModals();
    initScrollAnimations();
  });

})();
