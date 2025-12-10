# zecwicks.com

A minimalist, high-performance personal landing page for Zechariah Wicks, Software Engineer and Cybersecurity Specialist. Built with SvelteKit and deployed on Cloudflare Pages.

## 🚀 Tech Stack

  * **Framework:** [SvelteKit](https://kit.svelte.dev/)
  * **Styling:** Custom CSS (Mobile-First, Responsive)
  * **Icons:** SVG Components (via Vite imports)
  * **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)

## ✨ Key Features

  * **Responsive Design:** Desktop-optimized layout with a locked viewport vs. a scrolling, stacked layout for mobile devices (`max-width: 768px`).
  * **Interactive UI:** Custom "Rainbow Gradient" border animation on hover using CSS pseudo-elements (`::before`/`::after`) and conic gradients.
  * **Optimized Assets:** SVGs imported directly as Svelte components for optimal rendering and styling control.
  * **Accessibility & Security:** Fully semantic HTML (`<main>`, `aria-label`) with secure external linking (`rel="noopener noreferrer"`).

## 🛠️ Local Development

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Zec-Wicks/zecwicks.com-Website.git
    cd zecwicks.com-Website
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```
