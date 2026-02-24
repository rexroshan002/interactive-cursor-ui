# Interactive Cursor UI

A modern interactive cursor experiment built using vanilla JavaScript and CSS.

This project demonstrates dynamic cursor tracking, clip-path masking, and a smooth light/dark theme toggle system powered by CSS variables.

---

## ✨ Overview

This UI interaction recreates a masked text reveal effect where a circular cursor dynamically reveals alternate text using CSS `clip-path`. The theme can be toggled between Light and Dark modes with animated transitions.

The animation is powered by `requestAnimationFrame` for smooth performance.

---

## 🚀 Features

- Custom animated circular cursor
- Real-time mouse tracking
- Dynamic clip-path text masking
- Light / Dark theme toggle
- Cursor scaling on hover
- CSS variable-driven theming
- Smooth transitions and performance-optimized animation loop

---

## 🛠 Tech Stack

- HTML5
- CSS3 (Custom Properties, clip-path)
- Vanilla JavaScript
- requestAnimationFrame API

---

## 📂 Project Structure
interactive-cursor-ui/
│
├── index.html
├── css/
│ └── style.css
└── js/
└── main.js


---

## 🧠 Concepts Demonstrated

- DOM manipulation
- Real-time animation rendering
- CSS variable updates via JavaScript
- Clip-path masking techniques
- Event handling (mousemove, click, hover)
- UI state management

---

## ⚙️ How It Works

- Mouse position is tracked using the `mousemove` event.
- The custom cursor is positioned using CSS transforms.
- The masked text is revealed using a dynamically updated `clip-path`.
- Theme switching updates CSS variables (`--textColor`, `--bgColor`).
- Animations are rendered using `requestAnimationFrame` for smoother performance.

---

## 📌 Future Improvements

- Cursor trailing (lerp interpolation)
- Theme persistence using localStorage
- Mobile compatibility fallback
- Accessibility improvements
- Performance fine-tuning

---

## 👨‍💻 Author

Rex Roshan  
Frontend Developer focused on UI interaction and motion design.