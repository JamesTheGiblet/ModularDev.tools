// --- THEME HANDLING ---
const THEME_KEY = 'theme-preference';
const THEME_DARK = 'dark-theme';
const THEME_LIGHT = 'light-theme';

// Function to apply the theme class to the body
function applyTheme(theme) {
    document.body.classList.remove(THEME_DARK, THEME_LIGHT);
    document.body.classList.add(theme);
}

// Function to get the initial theme
function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) return savedTheme;
    // Fallback to user's OS preference
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT;
}

/**
 * Initializes all the interactive scripts for the page.
 * This function is called after the header and footer components are loaded.
 */
function initializePageScripts() {
    // --- Common Features (for all pages) ---

    // 1. Hamburger menu for mobile navigation
    // This needs to run after the header is injected into the DOM.
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // 2. Dropdown menus in navigation
    // This also needs to run after the header is injected.
    document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const isActive = dropdown.classList.contains('active');
                // Close all other open dropdowns first
                document.querySelectorAll('.nav-item.dropdown.active').forEach(openDropdown => {
                    if (openDropdown !== dropdown) {
                        openDropdown.classList.remove('active');
                    }
                });
                // Then toggle the current one
                if (!isActive) {
                    dropdown.classList.add('active');
                } else {
                    dropdown.classList.remove('active');
                }
            });
        }
    });

    // Close dropdowns if user clicks outside of them
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item.dropdown')) {
            document.querySelectorAll('.nav-item.dropdown.active').forEach(d => d.classList.remove('active'));
        }
    });

    // 3. Scroll-triggered animations for elements with .js-scroll-animate
    const scrollElements = document.querySelectorAll('.js-scroll-animate');
    if (scrollElements.length > 0) {
        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;

                    // Check if the target is a grid container that should have its children staggered.
                    const isStaggerContainer = target.classList.contains('tools-grid') ||
                                               target.classList.contains('features-grid') ||
                                               target.classList.contains('team-grid') ||
                                               target.classList.contains('contact-grid') ||
                                               target.classList.contains('tiers');

                    if (isStaggerContainer) {
                        const children = Array.from(target.children);
                        children.forEach((child, index) => {
                            // Set a custom property for the delay on each child.
                            child.style.setProperty('--stagger-delay', `${index * 100}ms`);
                        });
                    }

                    // Add the .in-view class to trigger the animation (on the element or its children).
                    target.classList.add('in-view');
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        scrollElements.forEach(el => scrollObserver.observe(el));
    }


    // --- Page-Specific Features (handled gracefully) ---

    // 4. CRT Toggle Button (from api-docs page)
    const crtToggle = document.getElementById("crtToggle");
    if (crtToggle) {
        crtToggle.addEventListener("click", () => {
            document.body.classList.toggle("crt");
            crtToggle.textContent = document.body.classList.contains("crt")
                ? "CRT Mode: On"
                : "CRT Mode: Off";
        });
    }

    // 5. Terminal Typewriter Effect (from api-docs page)
    const termText = document.getElementById('terminal-text');
    if (termText) {
        const terminalLines = [
            "$ praximous init my-api", "[RuleEngine] Scanning source code...", "[RuleEngine] Found 23 endpoints across 4 controllers", "[RuleEngine] Building spec_pre_ai.json ✓", "[AI] Enriching endpoint descriptions...", "[AI] Generating realistic examples...", "[AI] Adding parameter explanations...", "[Validator] Running diff check... ✓", "[Validator] Schema validation passed ✓", "", "🎉 Documentation generated successfully!", " 📄 final_spec.json (OpenAPI 3.0)", " 🌐 docs.html (Interactive)", " 📋 README.md (Getting Started)", "", "$ open docs.html", "Opening documentation in browser..."
        ];
        let lineIdx = 0;
        let charIdx = 0;

        const typeLine = () => {
            if (lineIdx < terminalLines.length) {
                if (charIdx < terminalLines[lineIdx].length) {
                    termText.textContent += terminalLines[lineIdx][charIdx];
                    charIdx++;
                    setTimeout(typeLine, 30);
                } else {
                    termText.textContent += "\n";
                    lineIdx++;
                    charIdx = 0;
                    setTimeout(typeLine, lineIdx === terminalLines.length - 1 ? 800 : 200);
                }
            }
        };
        setTimeout(typeLine, 1000);
    }

    // 6. Konami Code Easter Egg (from api-docs page)
    const easterEgg = document.getElementById('easter-egg');
    if (easterEgg) {
        const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
        let konamiIdx = 0;
        document.addEventListener('keydown', e => {
            if (e.code === konami[konamiIdx]) {
                konamiIdx++;
                if (konamiIdx === konami.length) {
                    easterEgg.style.display = 'block';
                    konamiIdx = 0;
                }
            } else {
                konamiIdx = 0;
            }
        });
    }

    // 7. Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Smooth scroll to top on click
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 8. Theme Toggle Button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.classList.contains(THEME_DARK) ? THEME_DARK : THEME_LIGHT;
            const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
            applyTheme(newTheme);
            localStorage.setItem(THEME_KEY, newTheme);
        });
    }

    // 9. Collapsible Sections / Accordion
    document.querySelectorAll('.collapsible-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const section = toggle.closest('.collapsible-section');
            if (section) {
                section.classList.toggle('active');
            }
        });
    });
}


/**
 * Fetches and injects reusable HTML components like header and footer.
 */
async function loadComponents() {
    // Get the base path from the <base> tag, which is set dynamically in the HTML head.
    // This ensures that fetch requests work correctly both locally and on GitHub Pages.
    const baseHref = document.querySelector('base')?.href || window.location.origin;

    const fetchComponent = async (url, placeholderId) => {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) return; // Don't fail if a page doesn't have a placeholder

        // Construct the full, absolute URL for the component.
        const fullUrl = new URL(url, baseHref).href;

        try {
            const response = await fetch(fullUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            // Replace the placeholder div with the fetched content.
            // This is better for semantics as it results in <header> and <footer> tags in the DOM.
            placeholder.outerHTML = html;
        } catch (error) {
            console.error(`Could not load component from ${fullUrl}:`, error);
            // Leave a message in the placeholder if loading fails
            placeholder.innerHTML = `<p style="color: red; text-align: center;">Failed to load ${placeholderId}.</p>`;
        }
    };

    await Promise.all([
        fetchComponent('partials/header.html', 'header-placeholder'),
        fetchComponent('partials/footer.html', 'footer-placeholder')
    ]);
}

document.addEventListener('DOMContentLoaded', async () => {
    // Apply the theme as the very first step to avoid Flash of Unstyled Content (FOUC)
    applyTheme(getInitialTheme());

    await loadComponents();
    initializePageScripts();
});

/* For the scroll animations to be visible, add this to your praximous-theme.css:
.js-scroll-animate { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
.js-scroll-animate.in-view { opacity: 1; transform: translateY(0); }
*/
