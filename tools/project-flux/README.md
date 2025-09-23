# 🚀 Project Flux (MVP Release)

![Status](https://img.shields.io/badge/status-MVP%20Release-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen)

**Hackable. Modular. Yours. Every line of code is an invitation.**

This is the Minimum Viable Product (MVP) release of Project Flux. It's a fully functional, playable, and hackable proof of concept demonstrating our vision for "sovereign software." We invite you to dive in, break things, and see the potential for yourself.

---

## ⚡ The Manifesto

Welcome to Project Flux, a game framework designed from the ground up to empower creators with total control. This isn't an engine; it's a living manifesto for digital sovereignty, challenging the notion of software as a black box. Here, every pixel is hackable, every rule is rewritable, and every system is explicitly yours to command.

We believe software should be transparent, modifiable, and truly owned by its users. Project Flux is a testament to this belief. It's about refusing to accept limitations and embracing the power to reshape your digital experience. No permissions, no gatekeepers, just pure creative freedom.

## ✨ Core Principles

Project Flux is built on a philosophy of ultimate flexibility and immediate feedback:

- **Dependency-Injected Systems:** The engine's architecture promotes modularity. Core functionalities like the `WeaponSystem`, `CharacterSystem`, and `RulesSystem` are dependency-injected and hot-swappable.
- **No Build Step:** Forget compilers and bundlers. Edit, save, refresh. Your changes are instantly reflected, allowing for rapid iteration.
- **No Licensing:** This project is intentionally in the Public Domain (or uses a highly permissive MIT License). You are free to fork, use, modify, and redistribute without asking for permission.
- **No Servers:** The engine is designed to run independently. It operates offline and can be hosted anywhere—your local machine, a simple HTTP server, IPFS, or GitHub Pages.
- **No Limits:** If you can code it in JavaScript, you can mod it. The game's design explicitly exposes its internal workings, providing you with the tools to implement anything.

---

## 🚀 Get Started (Self-Hosting)

Getting Project Flux up and running is as straightforward as possible:

1. **Clone this repository:**

    ```bash
    git clone https://github.com/ModularDev-Tools/project-flux.git
    cd project-flux
    ```

2. **Serve locally (requires Python 3):**
    Navigate to the cloned directory and start a simple local HTTP server:

    ```bash
    python -m http.server 8000
    ```

    *(If you don't have Python, any other local server like Node.js `http-server` will work.)*

3. **Open in browser:**
    Open your web browser and navigate to `http://localhost:8000`. You should see Project Flux running, ready for your modifications!

---

## 💡 How to Mod

The game is designed for live modification directly in the browser. The "How to Hack" panel in the UI provides a quick reference, but here's the core workflow:

1. **Select a Mod Panel:** Choose what you want to change: 🔫 WEAPON, 🎮 RULES, or 🧍 PLAYER.
2. **Choose a Preset:** Use the dropdown menu to load existing code. This is the best way to see how things work.
3. **Edit the Code:** The code for the selected preset appears in the text editor. Change it however you like!
4. **Apply Your Changes:** Click the "Apply" button for that section. Your changes will take effect instantly.
5. **Save Your Creation:** If you create something you love, give it a name and click "💾 Save". It will be saved to your browser's `localStorage` and will appear in the dropdown next time.

### 🔫 Weapon Mod Example

The weapon mod is a function with the signature `function shoot(player, target, engine)`. To create a new projectile, you add an object to the `engine.projectiles` array.

```javascript
// Paste this into the WEAPON MOD editor for a 3-shot burst fire.
function shoot(player, target, engine) {
    const dx = target.x - player.x;
    const dy = target.y - player.y;
    const angle = Math.atan2(dy, dx);
    const speed = 450;

    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const spread = (engine.random() - 0.5) * 0.1;
            engine.projectiles.push({
                x: player.x, y: player.y,
                vx: Math.cos(angle + spread) * speed,
                vy: Math.sin(angle + spread) * speed,
                size: 3, color: '#ff55ff', life: 1.5, damage: 18
            });
        }, i * 80); // 80ms delay between each shot
    }
}
```

### 🎮 Rules Mod Example

The rules mod is a function that runs every frame: `function update(engine, dt)`. You can use it to control enemy spawning, difficulty, or any other global game logic. The game comes with a "Hardcore Spawner" preset that demonstrates creating custom enemy AI.

---

## ✨ MVP Core Features

This MVP is a fully functional proof of concept showcasing the core value of "sovereign software."

- **Complete Game Loop:** Features a full gameplay experience with a Life & Game Over System, high score tracking, and a level progression system that takes you from wave-based combat to challenging boss fights.
- **Dynamic Power-Up System:** Collect a variety of game-changing power-ups, including shields, speed boosts, and the screen-clearing "Nuke."
- **Advanced & Hackable Boss AI:** Face off against bosses that utilize multiple, distinct attack patterns. The boss AI is not hard-coded; it's another moddable system.
- **Live In-Browser Modding:** The core value proposition in action. Modify weapons, player stats, and even core game logic like enemy AI and level progression directly in your browser with instant feedback.
- **Ready-to-Hack Presets:** Jumpstart your creativity with a collection of pre-built mods. Instantly switch from a pistol to a shotgun, or from an endless mode to a level-based campaign.
- **Procedurally Generated Audio & Visuals:** All sound effects are generated on-the-fly, creating a unique and responsive audio landscape.
- **Deterministic Gameplay:** Utilize the "Seed" system to generate predictable, replayable runs—perfect for speedrunning or competitions.

---

## 🔮 The Vision Realized

Project Flux is more than just a game; it's a proof of concept for sovereign software. Every click in the mod panel is someone exercising digital sovereignty. Every line of code edited is someone refusing to accept software as a black box. The engine teaches by invitation: "Here's how weapons work. Here's how to change them. What will you build?"

Want to add multiplayer? Mod the network layer. Want different graphics? Mod the renderer. The architecture doesn't care what you build—it just gives you the tools and gets out of your way. This is how all software should be built: transparent, modifiable, and yours.

---

## 🌐 Distribution & Sharing

Project Flux is designed for maximum freedom in distribution:

- **Self-Hosting:** A simple `git clone` and `python -m http.server` is all you need.
- **IPFS Distribution:** For truly uncensorable, distributed hosting, add your `project-flux/` directory to IPFS.
- **GitHub Pages:** Push your repository to GitHub and instantly host your game globally. Just enable it in your repository settings, and your game will be live at `https://YOUR_GITHUB_USERNAME.github.io/project-flux/`.

---

## 🤝 Contributing & Sharing Your Mods

We welcome contributions! The best way to share your creations is to add them to the engine as official presets.

### How to Submit Your Mod

If you've created a cool Weapon, Rule, or Player mod, you can submit it to be included in the main repository via a GitHub Pull Request.

1. **Finalize Your Code:** Perfect your mod in the in-game editor and copy the function.
2. **Create a Mod File:**
    - Fork the repository on GitHub.
    - In your fork, navigate to the appropriate `mods/` subdirectory (e.g., `mods/weapons/`).
    - Create a new `.js` file for your mod (e.g., `laser-beam.js`).
    - Paste your code into this new file.
3. **Update the Manifest:**
    - Open the `mods/mod-manifest.json` file.
    - Add a new entry for your mod in the correct category. The key is the name that will appear in the dropdown, and the value is the path to your new file.

    ```json
    "weapon": {
      "Pistol (Default)": "mods/weapons/pistol.js",
      "Shotgun": "mods/weapons/shotgun.js",
      "Your Awesome Mod": "mods/weapons/your-awesome-mod.js"
    },
    ```

4. **Submit a Pull Request:**
    - Commit your changes and push them to your fork.
    - Open a Pull Request to the main `project-flux` repository.
    - In the PR description, briefly explain what your mod does.

We'll review your submission, and if it's a good fit, we'll merge it!

---

## 📄 License

This project is released under the MIT License. For full details, see the `LICENSE` file in this repository.
