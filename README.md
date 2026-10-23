# CRORESTARS — Official Corporate Website

> **"Many Possibilities. One Vision."**

Official corporate platform for **CRORESTARS**, an evolving diversified business group founded on disciplined growth, long-term thinking, and strategic convergence.

---

## 1. Brand Background & Philosophy

- **Origin:** Inspired by the Telugu surname *Kotichukkala*:
  - **Koti (కోటి):** Crore, representing scale, depth, and abundance.
  - **Chukkala (చుక్కలు):** Stars, representing countless individual lights and possibilities.
- **Core Philosophy:** *Many becoming one* — bringing independent ideas and future ventures together under a single, disciplined corporate vision.
- **Ambition:** To build an enduring group of businesses that creates value across industries and generations over time.

---

## 2. Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with custom brand tokens:
  - Charcoal: `#171614`
  - Warm Amber: `#E5932B`
  - Soft Warm Grey: `#F3F1EC`
  - White: `#FFFFFF`
- **Typography:** Inter (Modern geometric sans-serif with tabular numerals and clean kerning)
- **Icons:** [lucide-react](https://lucide.dev/) (used sparingly for subtle micro-interactions)
- **Deployment Target:** [Vercel](https://vercel.com/)

---

## 3. Project Structure

```
web/
├── app/
│   ├── layout.tsx         # Root layout with SEO metadata, header & footer
│   ├── page.tsx           # Homepage (Hero, Brand Intro, Philosophy, Journey, Contact)
│   ├── about/page.tsx     # About page (Heritage, Etymology, Vision, Mission, Principles)
│   ├── ventures/page.tsx  # Ventures page (Portfolio framework & empty state)
│   ├── contact/page.tsx   # Contact page (Official form, details & standards)
│   ├── not-found.tsx      # Custom 404 page
│   ├── sitemap.ts         # Automated sitemap generator
│   ├── robots.ts          # Search engine crawler directives
│   └── api/
│       └── contact/route.ts # Server-side contact validation and processing
├── components/
│   ├── brand/
│   │   └── Logo.tsx       # Reusable CRORESTARS wordmark with custom A star spark
│   ├── layout/
│   │   ├── Header.tsx     # Navigation header with responsive mobile drawer
│   │   └── Footer.tsx     # Clean corporate footer with dynamic copyright
│   └── contact/
│       └── ContactForm.tsx # Accessible form with validation & anti-spam honeypot
├── lib/
│   └── config.ts          # Central brand configuration & future ventures data
└── public/
    ├── icon.svg           # CRORESTARS emblem favicon
    ├── og-image.svg       # Social media sharing preview card
    └── logo/
        └── crorestars-wordmark.svg # Scalable vector wordmark
```

---

## 4. Single Configuration File (`lib/config.ts`)

All brand parameters are consolidated in [`lib/config.ts`](./lib/config.ts). You can update them at any time without editing any component or page:

- **Brand Details:** Name, tagline, official website URL.
- **Contact Details:** Email, phone, office address.
- **Social Links:** LinkedIn, X (Twitter), etc.
- **Future Ventures:** An easily editable array to add business divisions as they are formed.

### How to Add a Future Venture
When a new division or subsidiary is ready to be announced, simply add an entry to the `ventures` array in `lib/config.ts`:

```typescript
export const ventures = [
  {
    id: "crorestars-capital",
    name: "Crorestars Capital",
    shortDescription: "Strategic capital allocation and venture investments.",
    status: "developing",
    sector: "Financial Services",
    href: "/ventures/capital",
  },
];
```
The Ventures page automatically transitions from the empty-state layout to displaying the portfolio cards.

---

## 5. Local Development Setup

### Prerequisites
- Node.js 18.18+ or 20+ (tested with Node v24)
- npm 9+ or 10+

### Installation & Run
```bash
# Navigate to the web folder
cd web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

---

## 6. Contact Form & Email Integration

The contact form is configured with:
1. **Client-side & Server-side validation:** Verifies name, email formatting, and message body.
2. **Anti-Spam Honeypot:** Discards automated bot submissions without interrupting legitimate users.
3. **Graceful Fallback:** If an email delivery service (like Resend) is not yet wired, the server logs the enquiry securely and displays an honest direct email link (`hello@crorestars.com`).

### Optional: Connecting Resend for Instant Email Forwarding
1. Sign up for a free key at [resend.com](https://resend.com).
2. Create `.env.local` in the `web` folder:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_RECIPIENT_EMAIL=your-personal-inbox@example.com
   ```
3. Install Resend: `npm install resend` and uncomment the email sending block in `app/api/contact/route.ts`.

---

## 7. Deploying to Vercel

### Option A: Import via GitHub / GitLab / Bitbucket
1. Push your repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. In the **Root Directory** field, set `web` (if the Next.js app is inside the `web` subfolder).
4. Click **Deploy**. Vercel will automatically build and assign a production URL (e.g., `crorestars.vercel.app`).

### Option B: Deploy via Vercel CLI
```bash
npm install -g vercel
cd web
vercel
```

---

## 8. Connecting Your Custom Domain

Once deployed to Vercel:
1. Go to your Project Settings on Vercel &rarr; **Domains**.
2. Add your domain: `crorestars.com` and `www.crorestars.com`.
3. In your domain registrar (GoDaddy, Namecheap, Cloudflare, Google Domains):
   - For `www`: Add a `CNAME` record pointing to `cname.vercel-dns.com`.
   - For apex (`crorestars.com`): Add an `A` record pointing to `76.76.21.21` (or follow Vercel's nameserver recommendations).
4. Vercel automatically provisions free SSL/TLS certificates.
5. In `lib/config.ts`, ensure `url: "https://www.crorestars.com"` is set.
