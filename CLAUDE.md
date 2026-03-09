# Winecoding — Project Context

## What is Winecoding?

A free, recurring community for women building with AI, hosted at StartupLab Oslo. Tagline: **"Sip & Ship."**

- Website: [winecoding.ai](https://winecoding.ai)
- Events: [lu.ma/winecoding](https://lu.ma/winecoding)
- AI Mad Lab (separate event): [lu.ma/aimadlab](https://lu.ma/aimadlab)
- WhatsApp group for members (invite via events)

Hosted by **Christina & The SL Sisterhood**.

## Core Principles

- Learning by building
- Progress over perfection
- Experimentation over theory
- Small steps toward shipping

## Brand

### Colors
| Name    | Hex       | Usage                        |
|---------|-----------|------------------------------|
| Cream   | `#FDFAF5` | Background                   |
| Brown   | `#3D2E1E` | Primary text                 |
| Rose    | `#9B4D5A` | Accent, CTAs                 |
| Golden  | `#C4956A` | Highlights, links            |
| Blush   | `#F0DDD1` | Cards, soft backgrounds      |
| Linen   | `#F5EDE4` | Section backgrounds          |
| Footer  | `#19120A` | Footer background            |

### Typography
- **Headings:** Playfair Display (serif) — elegant, editorial
- **Body:** Inter (sans-serif) — clean, modern

### Art Direction
Illustrations use Nano Banana model, two primary styles:
- **Sorolla style** — golden, Mediterranean, warm brushstrokes
- **Krøyer style** — blue hour, Nordic beach, atmospheric

See `content/image-prompts.md` for full prompt library.

### Tone
- Welcoming but direct
- Builder-focused, never corporate or formal
- Bilingual: Norwegian and English (community is mixed)
- Humor and warmth welcome

## Folder Structure

```
Winecoding/
├── CLAUDE.md              # This file
├── vercel.json            # Deployment config
├── site/                  # Deploys to Vercel (winecoding.ai)
├── brand/                 # Visual assets, wordmarks, event graphics
├── content/               # Content production (prompts, social, events, templates)
├── community/             # Ops: onboarding, routines, evaluations
└── docs/                  # Strategy and reference docs
```

### `site/`
Static HTML deployed to Vercel. Contains `index.html`, `evaluering.html`, `survey-resultater.html`, plus web-referenced images (hero.jpg, og-image.jpg, wordmark-dark.png, favicon).

### `brand/`
Original brand assets. `wordmarks/` subfolder for all logo variants. Non-web images like luma-cover.jpg, whatsapp-icon.jpg live here.

### `content/`
Content production workspace. `maler/` has reusable templates for Luma events, WhatsApp reminders, and social posts. `events/` uses `YYYY-MM-event-name/` folders for per-event materials.

### `community/`
Community operations. Onboarding flow, recurring task checklists, collected survey results.

### `docs/`
Strategy and reference. Relationship to Vibelabs/AI Exec Lab, course overview.

## Deployment

- **Platform:** Vercel
- **Account:** christina-7137s-projects
- **Deploy:** `vercel --yes --prod` from project root
- **Output directory:** `site/` (configured in vercel.json)
- **Rewrites:** `/evaluering` → `evaluering.html`, `/resultater` → `survey-resultater.html`

## Related Projects

- **AI-lab** (`C:\Code\Work\AI-lab\`) — Vibelabs / AI Exec Lab corporate offering
- **AI Mad Lab** — Separate, more selective/technical event series (lu.ma/aimadlab)
