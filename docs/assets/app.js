(() => {
  "use strict";

  // The official site runs on FLEXDownloadManager.com, so the repository cannot
  // be detected from the host name: pin it here instead.
  const GITHUB_REPO_OVERRIDE = "Osama96gi/FLEX-Download-Manager";

  const STRINGS = {
    ar: {
      navFeatures: "الميزات",
      navScreenshots: "لقطات الشاشة",
      navExtension: "إضافة المتصفح",
      navChangelog: "الجديد في 1.2.5",
      navDownload: "التحميل",
      navDownloadBtn: "تنزيل 1.2.5",
      heroBadge: "الإصدار 1.2.5 · مفتوح المصدر · Windows 10/11 x64",
      heroTitle: "مدير تنزيل مجزّأ سريع وذكي لنظام ويندوز",
      heroSubtitle:
        "FLEX Download Manager يسرّع تنزيلاتك بتقسيم الملفات إلى اتصالات متوازية، مع استئناف آمن حتى بعد إعادة تشغيل الجهاز، ودعم كامل لتنزيل فيديوهات وقوائم تشغيل يوتيوب حتى 4K، وساحب المواقع، والجدولة التلقائية.",
      heroDownloadCta: "تحميل FLEX Download Manager 1.2.5",
      heroExploreCta: "استكشف الميزات",
      heroMetaFree: "مجاني 100% ومفتوح المصدر",
      heroMetaTech: "C++17 · Qt 6 · WinHTTP",
      heroMetaLang: "واجهة عربية وإنجليزية",
      tabMain: "الجدول",
      tabStart: "الواجهة",
      tabScheduler: "الجدولة",
      statConn: "اتصالات متوازية قابلة للتخصيص",
      statYt: "دعم فيديوهات وقوائم تشغيل يوتيوب",
      statPersist: "حفظ تلقائي للجدول بعد إعادة التشغيل",
      statRtl: "دعم فوري للعربية RTL والإنجليزية",
      featuresTag: "الميزات الأساسية",
      featuresTitle: "كل ما تحتاجه لتسريع وإدارة تنزيلاتك",
      featuresDesc:
        "مصمم من الصفر بلغة C++17 وQt 6 ليكون خفيفاً، سريع الاستجابة، ومتكاملاً مع متصفحك.",
      feat1Title: "محرك تنزيل مجزّأ فائق السرعة",
      feat1Desc:
        "يفحص دعم الخادم لنطاقات البايت (Byte-Range) ويقسّم الملف إلى عدة أجزاء متوازية، مع تراجع سلس عند عدم دعم الاستئناف وإعادة المحاولة التلقائية.",
      feat2Title: "حفظ دائم واستئناف آمن",
      feat2Desc:
        "يحفظ جدول التنزيلات وحالة الأجزاء بشكل ذري ودوري على القرص، مع معالجة إغلاق ويندوز لحفظ التنزيلات المتوقفة واستكمالها فور إعادة التشغيل.",
      feat3Title: "فيديوهات وقوائم تشغيل يوتيوب",
      feat3Desc:
        "زر «Download this video» و«Download this playlist» يظهران مباشرة في يوتيوب، مع نافذة متكاملة لاختيار المقاطع والجودة (حتى 4K أو M4A) ومجلد الحفظ والترقيم التلقائي.",
      feat4Title: "تكامل سلس مع المتصفحات",
      feat4Desc:
        "يلتقط تنزيلات Chrome وBrave وEdge دون تعارض أو ظهور نوافذ حفظ مزدوجة، مع «مثبت الإضافة» المدمج داخل قائمة المساعدة لتسهيل التثبيت في أي وقت.",
      feat5Title: "ساحب المواقع (Site Grabber)",
      feat5Desc:
        "افحص أي صفحة ويب لاكتشاف الأرشيفات أو المستندات أو الفيديو أو الصوت أو امتدادات مخصصة، وحدد الملفات المطلوبة لتنزيلها دفعة واحدة.",
      feat6Title: "مجدول وطابور تنزيلات ذكي",
      feat6Desc:
        "حدّد نافذة زمنية للبدء والإيقاف التلقائي، وعدد الملفات المتزامنة، وعدد المحاولات، والإجراء بعد الانتهاء (الخروج أو إيقاف تشغيل الكمبيوتر).",
      shotsTag: "لقطات من البرنامج",
      shotsTitle: "واجهة داكنة مألوفة ومصممة للإنتاجية",
      shotsDesc: "اضغط على أي لقطة شاشة لتكبيرها واستعراض تفاصيل الواجهة.",
      shot1Caption: "جدول التنزيلات الرئيسي مع التصنيفات وشريط الأدوات الكامل",
      shot2Caption: "شريط الأدوات الجديد متضمناً أداة Download Playlist وساحب المواقع",
      shot3Caption: "نافذة الجدولة لضبط أوقات البدء والإيقاف والتنزيلات المتزامنة",
      extTag: "إضافة المتصفح",
      extTitle: "تكامل مباشر مع Chrome وBrave وEdge",
      extDesc:
        "لأن الإضافة مدمجة محلياً مع حزمة التثبيت دون متجر، يمكنك إضافتها في 4 خطوات بسيطة — أو فتح «مثبت الإضافة» مباشرة من قائمة Help داخل البرنامج:",
      extStep1:
        "افتح <code>chrome://extensions</code> أو <code>brave://extensions</code> أو <code>edge://extensions</code>",
      extStep2: "فعّل خيار <strong>وضع المطوّر (Developer mode)</strong>",
      extStep3:
        "اضغط <strong>Load unpacked</strong> واختر مجلد <code>browser-extension</code> داخل مجلد البرنامج",
      extStep4:
        "تأكد من تفعيل <strong>FLEX Download Manager</strong> لالتقاط التنزيلات وظهور أزرار يوتيوب",
      extFeat1Title: "Download this video",
      extFeat1Desc: "قائمة جودات فورية أعلى أي فيديو على يوتيوب ومواقع التواصل.",
      extFeat2Title: "Download this playlist",
      extFeat2Desc:
        "شريط أعلى قوائم تشغيل يوتيوب لتحميل القائمة كاملة بالجودة التي تختارها.",
      extFeat3Title: "آمن تماماً على تنزيلاتك",
      extFeat3Desc:
        "إذا كان التطبيق مغلقاً، يترك المتصفح التحميل يعمل بشكل طبيعي دون فقدانه.",
      chgTag: "سجل التغييرات",
      chgTitle: "ما الجديد في الإصدار 1.2.5",
      chgDesc:
        "تحديث رئيسي يركّز على استقرار الحفظ، قوائم تشغيل يوتيوب، وتسهيل إعداد المتصفح.",
      badgeFix: "إصلاح مهم",
      badgeNew: "ميزة جديدة",
      badgeNew2: "ميزة جديدة",
      badgeImp: "تحسين",
      chg1Title: "حفظ واستعادة جدول التحميلات بعد إعادة تشغيل الجهاز",
      chg1Desc:
        "حفظ القائمة تلقائياً وبشكل ذري في ملف downloads.json، وحفظ ملفات .state دورياً كل ثانيتين، وعدم حذف الملفات المؤقتة عند الإغلاق أو إعادة التشغيل، مع استعادة التحميلات النشطة في حالة «متوقف مؤقتاً» لاستكمالها بأمان.",
      chg2Title: "تحميل قوائم تشغيل يوتيوب كاملة (Download this playlist)",
      chg2Desc:
        "إظهار شريط «Download this playlist» أعلى قوائم التشغيل في يوتيوب مع اختيار الجودة، وإضافة أداة «Download Playlist» إلى شريط الأدوات للّصق المباشر، ونافذة لاختيار المقاطع والجودة ومجلد الحفظ والترقيم التلقائي، مع تنبيه سريع عائم عند الإضافة.",
      chg3Title: "مثبت الإضافة (Extension Installer) في قائمة المساعدة",
      chg3Desc:
        "نافذة مخصصة ضمن قائمة Help لمساعدة المستخدم على تثبيت إضافة المتصفح في Chrome أو Brave أو Edge في حال تخطّاها أثناء التثبيت، مع نسخ المسار وفتح صفحة الإضافات بنقرة واحدة.",
      chg4Title: "تشغيل تلقائي افتراضي مع بدء ويندوز",
      chg4Desc:
        "تفعيل خيار التشغيل مع بداية تشغيل ويندوز افتراضياً عند التثبيت ليبقى التكامل مع المتصفح جاهزاً في صينية النظام دائماً، مع إمكانية تعطيله من الإعدادات في أي وقت.",
      dlTag: "التحميل الرسمي",
      dlTitle: "FLEX Download Manager 1.2.5 لنظام ويندوز",
      dlDesc:
        "مثبّت مستقل لا يتطلب صلاحيات مسؤول، يشمل التطبيق وyt-dlp ومكتبات Qt 6 وإضافة المتصفح.",
      dlBtn: "تحميل FLEX Download Manager 1.2.5 Setup.exe",
      dlReleasesBtn: "كل الإصدارات على GitHub",
      specVerK: "الإصدار",
      specOsK: "النظام",
      specSizeK: "الحجم",
      specRightsK: "الصلاحيات",
      specRightsV: "تثبيت للمستخدم الحالي (بدون UAC)",
      copyBtn: "نسخ",
      copiedBtn: "تم النسخ",
      footerNote:
        "مشروع حر ومفتوح المصدر مبني باستخدام C++17 وQt 6 Widgets وWinHTTP. جميع الحقوق محفوظة."
    },
    en: {
      navFeatures: "Features",
      navScreenshots: "Screenshots",
      navExtension: "Browser Extension",
      navChangelog: "What's New in 1.2.5",
      navDownload: "Download",
      navDownloadBtn: "Download 1.2.5",
      heroBadge: "Version 1.2.5 · Open Source · Windows 10/11 x64",
      heroTitle: "A Fast, Native Segmented Download Manager for Windows",
      heroSubtitle:
        "FLEX Download Manager accelerates your downloads with parallel byte-range connections, crash-safe persistence across restarts, full YouTube video & playlist downloading up to 4K, Site Grabber, and a built-in Scheduler.",
      heroDownloadCta: "Download FLEX Download Manager 1.2.5",
      heroExploreCta: "Explore Features",
      heroMetaFree: "100% Free & Open Source",
      heroMetaTech: "C++17 · Qt 6 · WinHTTP",
      heroMetaLang: "English & Arabic (RTL)",
      tabMain: "Queue",
      tabStart: "Clean UI",
      tabScheduler: "Scheduler",
      statConn: "Parallel connections per download",
      statYt: "YouTube videos & complete playlists",
      statPersist: "Automatic queue persistence on reboot",
      statRtl: "Instant English & Arabic RTL UI",
      featuresTag: "Core Capabilities",
      featuresTitle: "Everything you need to accelerate and organize downloads",
      featuresDesc:
        "Built from scratch in C++17 and Qt 6 Widgets to stay lightweight, responsive, and tightly integrated with your browser.",
      feat1Title: "High-Speed Segmented Engine",
      feat1Desc:
        "Probes server byte-range support and splits transfers across parallel connections, with graceful single-stream fallback and automatic retries.",
      feat2Title: "Persistent Queue & Safe Resume",
      feat2Desc:
        "Atomically persists the download table and part state on disk, and catches Windows shutdown events so paused or active downloads resume cleanly after reboot.",
      feat3Title: "YouTube Videos & Full Playlists",
      feat3Desc:
        "\"Download this video\" and \"Download this playlist\" bars appear directly on YouTube, with a dedicated desktop dialog for selecting clips, quality (up to 4K or M4A audio), subfolder, and numbering.",
      feat4Title: "Seamless Browser Integration",
      feat4Desc:
        "Captures Chrome, Brave, and Edge downloads without duplicate Save As prompts, plus a built-in Extension Installer under Help if you skipped it during setup.",
      feat5Title: "Site Grabber",
      feat5Desc:
        "Scan any web page for archives, documents, videos, music, images, or custom extensions, then batch-add your selected links in one click.",
      feat6Title: "Smart Scheduler & Queue",
      feat6Desc:
        "Configure start/stop time windows, concurrent downloads, per-file retries, and post-queue actions (do nothing, exit app, or shut down PC).",
      shotsTag: "Screenshots",
      shotsTitle: "Familiar Dark Interface Built for Productivity",
      shotsDesc: "Click any screenshot to inspect it in full size.",
      shot1Caption: "Main download table with category sidebar and dark toolbar",
      shot2Caption: "Clean toolbar featuring the Download Playlist tool and Site Grabber",
      shot3Caption: "Scheduler dialog for timed queues, concurrency, and after-finish actions",
      extTag: "Browser Extension",
      extTitle: "Direct Integration for Chrome, Brave & Edge",
      extDesc:
        "Because the extension ships locally alongside the app without a store dependency, load it in 4 quick steps — or open Help ▸ Extension Installer inside the app:",
      extStep1:
        "Open <code>chrome://extensions</code>, <code>brave://extensions</code>, or <code>edge://extensions</code>",
      extStep2: "Turn on <strong>Developer mode</strong>",
      extStep3:
        "Click <strong>Load unpacked</strong> and choose the <code>browser-extension</code> folder inside the install directory",
      extStep4:
        "Verify <strong>FLEX Download Manager</strong> is enabled to capture downloads and show YouTube buttons",
      extFeat1Title: "Download this video",
      extFeat1Desc: "Instant quality picker directly above videos on YouTube and social sites.",
      extFeat2Title: "Download this playlist",
      extFeat2Desc: "Top-of-playlist toolbar on YouTube to send entire playlists with your chosen quality.",
      extFeat3Title: "Never loses a browser download",
      extFeat3Desc: "If the desktop app is closed, Chrome proceeds normally without dropping your file.",
      chgTag: "Changelog",
      chgTitle: "What's New in Version 1.2.5",
      chgDesc:
        "A milestone update focused on download persistence, YouTube playlist support, and easier browser setup.",
      badgeFix: "Key Fix",
      badgeNew: "New Feature",
      badgeNew2: "New Feature",
      badgeImp: "Improvement",
      chg1Title: "Persistent Download Table Across Restarts",
      chg1Desc:
        "Atomically saves all downloads to downloads.json, flushes .state files every 2 seconds, keeps temp parts across exits, and catches Windows shutdown events so interrupted items reopen as Paused ready to resume.",
      chg2Title: "Complete YouTube Playlist Downloader",
      chg2Desc:
        "Adds the \"Download this playlist\" bar at the top of YouTube playlists, a toolbar \"Download Playlist\" tool for pasting playlist URLs, track/quality/folder selection with numbering, and a quick toast confirmation.",
      chg3Title: "Built-in Extension Installer in Help Menu",
      chg3Desc:
        "Adds Help ▸ Extension Installer with detected Chrome/Brave/Edge launchers, extension folder path copy, and step-by-step instructions.",
      chg4Title: "Run on Windows Startup Enabled by Default",
      chg4Desc:
        "Automatically registers FLEX Download Manager at install time (with --startup to launch quietly in the tray) so browser integration is always ready; can be toggled off anytime in Options.",
      dlTag: "Official Download",
      dlTitle: "FLEX Download Manager 1.2.5 for Windows",
      dlDesc:
        "Self-contained per-user installer including the app, yt-dlp, Qt 6 runtime, and the browser extension.",
      dlBtn: "Download FLEX Download Manager 1.2.5 Setup.exe",
      dlReleasesBtn: "All Releases on GitHub",
      specVerK: "Version",
      specOsK: "Platform",
      specSizeK: "Size",
      specRightsK: "Privileges",
      specRightsV: "Per-user install (no UAC required)",
      copyBtn: "Copy",
      copiedBtn: "Copied",
      footerNote:
        "Free & open-source project built with C++17, Qt 6 Widgets, and WinHTTP. All rights reserved."
    }
  };

  let currentLang = (() => {
    try {
      const saved = localStorage.getItem("flexdm-site-lang");
      if (saved === "ar" || saved === "en") return saved;
    } catch (e) { /* ignore */ }
    return (navigator.language || "").toLowerCase().startsWith("ar") ? "ar" : "en";
  })();

  function applyLanguage(lang) {
    currentLang = lang === "ar" ? "ar" : "en";
    const dict = STRINGS[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    for (const el of document.querySelectorAll("[data-i18n]")) {
      const key = el.getAttribute("data-i18n");
      if (!dict[key]) continue;
      if (key.startsWith("extStep")) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }

    const toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = currentLang === "ar" ? "EN" : "العربية";

    try {
      localStorage.setItem("flexdm-site-lang", currentLang);
    } catch (e) { /* ignore */ }
  }

  function detectGitHubRepo() {
    if (GITHUB_REPO_OVERRIDE) return GITHUB_REPO_OVERRIDE;
    const host = window.location.hostname.toLowerCase();
    if (!host.endsWith(".github.io")) return "";
    const owner = host.slice(0, -".github.io".length);
    const parts = window.location.pathname.split("/").filter(Boolean);
    const repo = parts.length > 0 ? parts[0] : `${owner}.github.io`;
    return owner && repo ? `${owner}/${repo}` : "";
  }

  async function wireGitHubReleaseLinks() {
    const repo = detectGitHubRepo();
    if (!repo) return;

    const repoUrl = `https://github.com/${repo}`;
    const releasesUrl = `${repoUrl}/releases`;
    const latestDownload = `${repoUrl}/releases/latest/download/FLEX.Download.Manager.1.2.5.Setup.exe`;

    const navGh = document.getElementById("navGithubBtn");
    const setupLink = document.getElementById("setupDownloadLink");
    const allReleases = document.getElementById("allReleasesLink");
    if (navGh) navGh.href = repoUrl;
    if (allReleases) allReleases.href = releasesUrl;
    if (setupLink) setupLink.href = latestDownload;

    try {
      const resp = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
        headers: { Accept: "application/vnd.github+json" }
      });
      if (!resp.ok) return;
      const data = await resp.json();
      const assets = Array.isArray(data.assets) ? data.assets : [];
      const exeAsset = assets.find((a) => /\.exe$/i.test(a.name || ""));
      if (exeAsset && exeAsset.browser_download_url && setupLink) {
        setupLink.href = exeAsset.browser_download_url;
        if (exeAsset.size > 0) {
          const sizeEl = document.getElementById("releaseSize");
          if (sizeEl) sizeEl.textContent = `${(exeAsset.size / (1024 * 1024)).toFixed(1)} MB`;
        }
      }
      if (data.tag_name) {
        const verEl = document.getElementById("releaseVersion");
        if (verEl) verEl.textContent = String(data.tag_name).replace(/^v/i, "");
      }
    } catch (e) {
      // Keep static fallback URLs if API rate-limited or offline.
    }
  }

  // Hero screenshot switcher
  const heroTabs = document.querySelectorAll(".hero-tab");
  const heroImg = document.getElementById("heroPreviewImg");
  const heroBtn = document.getElementById("heroImageBtn");
  let activeHeroCaptionKey = "shot1Caption";

  heroTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      heroTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const shot = tab.getAttribute("data-shot");
      if (shot && heroImg) heroImg.src = shot;
      if (shot === "screenshots/flexdm-main.png") activeHeroCaptionKey = "shot1Caption";
      else if (shot === "screenshots/1.PNG") activeHeroCaptionKey = "shot2Caption";
      else activeHeroCaptionKey = "shot3Caption";
    });
  });

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(src, captionKey) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxCaption) {
      lightboxCaption.textContent = STRINGS[currentLang][captionKey] || "";
    }
    lightbox.hidden = false;
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    if (lightboxImg) lightboxImg.src = "";
  }

  if (heroBtn && heroImg) {
    heroBtn.addEventListener("click", () => {
      openLightbox(heroImg.getAttribute("src"), activeHeroCaptionKey);
    });
  }

  document.querySelectorAll("[data-lightbox]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openLightbox(btn.getAttribute("data-lightbox"), btn.getAttribute("data-caption-key"));
    });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox && !lightbox.hidden) closeLightbox();
  });

  // Copy SHA-256
  const copyHashBtn = document.getElementById("copyHashBtn");
  const sha256Code = document.getElementById("sha256Code");
  if (copyHashBtn && sha256Code) {
    copyHashBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(sha256Code.textContent.trim());
        copyHashBtn.textContent = STRINGS[currentLang].copiedBtn;
        setTimeout(() => {
          copyHashBtn.textContent = STRINGS[currentLang].copyBtn;
        }, 2000);
      } catch (e) { /* clipboard blocked */ }
    });
  }

  // Language toggle
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLanguage(currentLang === "ar" ? "en" : "ar");
    });
  }

  applyLanguage(currentLang);
  wireGitHubReleaseLinks();
})();
