# CRORESTARS — Corporate Website

> **"A crore of stars. One direction."**

The official corporate web presence for **CRORESTARS**, an early-stage company founded by [FOUNDER NAME] to create and operate businesses across industries over generations.

---

## 1. Stack & Architecture

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Plain CSS with CSS Custom Properties (`app/globals.css`). Zero CSS frameworks, zero UI component libraries.
- **Fonts:** Self-hosted via `next/font/google`:
  - **Display:** *Archivo* (heavy width axis used for headlines and wordmark)
  - **Reading:** *Newsreader* (serif with 62-character maximum line measure)
  - **Telugu:** *Noto Sans Telugu* (for heritage etymology terms)
- **Forms & Email:** `nodemailer` with Hostinger SMTP SSL (`smtp.hostinger.com:465`).
- **Dependencies:** Only `next`, `react`, `react-dom`, `nodemailer`.

---

## 2. Placeholders Requiring Real Information

Before public launch, replace the following placeholders:

| Placeholder | File | Description |
| :--- | :--- | :--- |
| `[FOUNDER NAME]` | `app/layout.tsx` | Used in the JSON-LD `Organization` schema `founder.name`. |
| `[REGISTERED BUSINESS NAME, CITY, COUNTRY]` | `app/page.tsx`, `app/privacy/page.tsx` | Footer legal identity string (e.g. `CRORESTARS Pvt. Ltd., Hyderabad, India`). |
| `contact@crorestars.com` | `app/page.tsx`, `components/ContactForm.tsx`, `.env.example` | The visible public email address. |
| `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO` | `.env.local` / Vercel Environment Variables | Hostinger SMTP credentials for the contact form. |

---

## 3. How to Run Locally

### Prerequisites
- Node.js 18.18+ or 20+ (tested with Node 24)
- npm 9+ or 10+

### Setup
```bash
# Navigate to the web project
cd web

# Copy environment variables
cp .env.example .env.local

# Install minimal dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Local Production Build & Test
```bash
npm run build
npm start
```

---

## 4. How to Deploy to Vercel

1. **Push to GitHub**:
   Ensure your code is pushed to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete CRORESTARS corporate site"
   git push origin main
   ```
2. **Import in Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your repository (`cc`).
   - Leave the root directory as default (or `web` if importing the parent repository).
   - Framework preset will automatically detect **Next.js**.
3. **Deploy**:
   - Click **Deploy**. Your site will be live on an official Vercel preview domain in under 45 seconds.

---

## 5. How to Set Environment Variables on Vercel

In your Vercel Project Dashboard:
1. Navigate to **Settings** &rarr; **Environment Variables**.
2. Add the following keys:
   - `NEXT_PUBLIC_SITE_URL`: `https://crorestars.com`
   - `NEXT_PUBLIC_CONTACT_EMAIL`: `contact@crorestars.com`
   - `SMTP_USER`: `your-mailbox@crorestars.com`
   - `SMTP_PASS`: `your-hostinger-password`
   - `CONTACT_TO`: `founder@crorestars.com`
3. Trigger a redeployment to apply variables.

---

## 6. How to Connect Your Custom Domain

1. In Vercel, go to **Settings** &rarr; **Domains**.
2. Enter your custom domain: `crorestars.com` and `www.crorestars.com`.
3. In your domain registrar (Hostinger, Namecheap, GoDaddy, Cloudflare):
   - For `www`: Add a `CNAME` record pointing to `cname.vercel-dns.com`.
   - For root (`@`): Add an `A` record pointing to `76.76.21.21` (or follow Vercel's nameserver instructions).
4. Vercel will automatically issue and renew a free SSL/TLS certificate.

---

## 7. How to Replace the Wordmark with a Final Logo

The wordmark is isolated inside a single dedicated component:
[`components/Wordmark.tsx`](./components/Wordmark.tsx)

When your final custom SVG logo is ready:
1. Place your SVG file in `public/logo.svg`.
2. Open [`components/Wordmark.tsx`](./components/Wordmark.tsx).
3. Replace the text span with your `<img src="/logo.svg" alt="CRORESTARS" ... />` or inline `<svg>`.
4. No other page or component on the website needs to be edited.
