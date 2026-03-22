const copy = {
    en: {
        title: "Sleeppy | Baby Sleep Tracker, Routines, Sounds, and Insights",
        description:
            "Sleeppy helps parents track sleep, feeding, diapers, soothing sounds, and daily routines with calm design and clearer insights.",
        "brand.tag": "Baby sleep, routines, and support",
        "nav.features": "Features",
        "nav.resources": "Resources",
        "nav.experience": "Experience",
        "nav.support": "Support",
        "nav.maker": "Maker",
        "hero.eyebrow": "Designed for calmer days and softer nights",
        "hero.titleLead": "Track the full parenting rhythm with",
        "hero.titleAccent": "Sleeppy.",
        "hero.description":
            "Log sleep, feeding, diapers, growth moments, soothing sounds, and daily routines in one place, then keep the whole family in sync with shared updates. Sleeppy turns scattered notes into a calmer flow and clearer insights.",
        "hero.secondaryAction": "Browse support and legal pages",
        "hero.highlightOne": "Sleep, feeding, and diaper logging",
        "hero.highlightTwo": "Family sharing and shared timelines",
        "hero.highlightThree": "iPhone, iPad, and Apple Watch",
        "showcase.status": "Tonight's routine snapshot",
        "showcase.mode": "Calm mode",
        "showcase.heroLabel": "Last sleep",
        "showcase.heroMeta": "Saved automatically in today's timeline",
        "showcase.metricOneLabel": "Next step",
        "showcase.metricOneValue": "Nap window in 35 min",
        "showcase.metricTwoLabel": "Family sync",
        "showcase.metricTwoValue": "Shared timeline updates everyone",
        "showcase.sideTitle": "What stays in flow",
        "showcase.sideItemOne": "Sleep sessions and nap patterns",
        "showcase.sideItemTwo": "Feeding, diapers, and quick logs",
        "showcase.sideItemThree": "Shared updates, sounds, and bedtime cues",
        "showcase.floatingLabel": "Available on",
        "showcase.floatingValue": "iPhone, iPad, Apple Watch",
        "proof.oneLabel": "All-in-one flow",
        "proof.oneText": "Track the moments parents repeat all day without bouncing between tools.",
        "proof.twoLabel": "Family sharing",
        "proof.twoText": "Keep parents and caregivers aligned with the same routine history instead of fragmented updates.",
        "proof.threeLabel": "Actionable insights",
        "proof.threeText": "History, summaries, and patterns help parents understand what is changing.",
        "resources.eyebrow": "Quick access",
        "resources.title": "Reach every public Sleeppy page from one place.",
        "resources.linkDeveloper": "Developer page",
        "resources.linkSupport": "App support",
        "resources.linkPrivacy": "Privacy policy",
        "resources.linkTerms": "Terms of service",
        "resources.linkEula": "EULA",
        "features.eyebrow": "Core product experience",
        "features.title": "Track routines, share them with family, and stay in one calm flow.",
        "features.description":
            "Sleeppy brings daily tracking, family sharing, summaries, insights, and trust resources into one focused place built for real parenting routines.",
        "features.cardOneTitle": "Track the essentials fast",
        "features.cardOneText":
            "Capture sleep, feeding, diapers, and other daily actions with less friction and a clearer home flow.",
        "features.cardTwoTitle": "Share the routine with family",
        "features.cardTwoText":
            "Shared timelines help parents and caregivers see the same updates, recent actions, and next steps without extra check-ins.",
        "features.cardThreeTitle": "Switch from logs to insights",
        "features.cardThreeText":
            "Move from raw entries to summaries, trend reading, and assistant-guided context without losing the daily detail.",
        "features.cardFourTitle": "Keep support close",
        "features.cardFourText":
            "Support, privacy policy, terms, and EULA are available from the same landing surface for easier trust and maintenance.",
        "experience.eyebrow": "Built for real daily use",
        "experience.title": "The visual language mirrors the app.",
        "experience.description":
            "The site mirrors Sleeppy's calm product feel while surfacing core product value earlier, including shared family coordination and direct access to support and legal resources.",
        "experience.tagOne": "Family coordination",
        "experience.tagTwo": "Soft gradients",
        "experience.tagThree": "Direct support access",
        "experience.platformLabel": "Platforms",
        "experience.platformOneTitle": "iPhone and iPad",
        "experience.platformOneText": "Daily logging, summaries, and support resources",
        "experience.platformTwoTitle": "Apple Watch",
        "experience.platformTwoText": "Fast access for active routines and quick context",
        "experience.platformThreeTitle": "Support pages",
        "experience.platformThreeText": "Privacy, terms, EULA, and support stay one tap away",
        "support.eyebrow": "Support and trust",
        "support.title": "Everything important is easy to reach.",
        "support.cardOneLabel": "Need help?",
        "support.cardOneTitle": "Open app support",
        "support.cardOneText": "Questions, feedback, and user support live here.",
        "support.cardTwoLabel": "Privacy",
        "support.cardTwoTitle": "Read the privacy policy",
        "support.cardTwoText": "See how Sleeppy handles data and user privacy.",
        "support.cardThreeLabel": "Terms",
        "support.cardThreeTitle": "Review the terms of service",
        "support.cardThreeText": "Usage terms are part of the landing flow now.",
        "support.cardFourLabel": "License",
        "support.cardFourTitle": "View the EULA",
        "support.cardFourText": "The license is still available, but tucked into a product support section.",
        "maker.eyebrow": "About the maker",
        "maker.title": "Built by Maksim Bulat.",
        "maker.description":
            "Sleeppy is designed and developed by Maksim Bulat, an iOS engineer focused on product quality, maintainable architecture, and polished mobile experiences.",
        "maker.roleLabel": "Role",
        "maker.roleValue": "iOS Developer and App Architect",
        "maker.focusLabel": "Focus",
        "maker.focusValue": "Swift, SwiftUI, quality, and product UX",
        "maker.contactLabel": "Contact",
        "maker.linkedinLabel": "LinkedIn"
    }
};

const DEFAULT_LOCALE = "en";

function resolveLocale() {
    const params = new URLSearchParams(window.location.search);
    const queryLocale = params.get("lang");
    const browserLocale = navigator.language ? navigator.language.toLowerCase().split("-")[0] : DEFAULT_LOCALE;
    const candidate = (queryLocale || browserLocale || DEFAULT_LOCALE).toLowerCase();

    return copy[candidate] ? candidate : DEFAULT_LOCALE;
}

function applyCopy(locale) {
    const dictionary = copy[locale] || copy[DEFAULT_LOCALE];

    document.title = dictionary.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
        descriptionMeta.setAttribute("content", dictionary.description);
    }

    document.documentElement.lang = locale;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });
}

function setupNavigation() {
    const menuToggle = document.getElementById("menuToggle");
    const siteNav = document.getElementById("siteNav");

    if (!menuToggle || !siteNav) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            siteNav.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

function setupReveal() {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    elements.forEach((element) => observer.observe(element));
}

document.getElementById("year").textContent = new Date().getFullYear();

applyCopy(resolveLocale());
setupNavigation();
setupReveal();
