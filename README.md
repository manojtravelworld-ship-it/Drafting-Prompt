# Nexus Justice — Gemma 4 Edition

AI-powered legal assistant for Kerala advocates. Runs entirely in the browser with three inference tiers:

| Priority | Engine | Model |
|----------|--------|-------|
| 1 | Chrome Built-in AI | Gemma 4 Nano (native) |
| 2 | wllama (Brain1) | Qwen2.5-0.5B (~398 MB) |
| 3 | wllama (Brain2) | Qwen3.5-0.8B (~352 MB) |

---

## Technical Architecture

- **Brain1 (Qwen2.5-0.5B)**: Optimized for speed and low-memory devices.
- **Brain2 (Qwen3.5-0.8B)**: Fast reasoning for advanced legal logic.
- **Engine**: Both models run via `wllama` using WASM/CPU, ensuring compatibility on nodes without WebGPU.
- **Resilient Downloads**: Uses `ParallelDownloader` with block-based resumes for reliable large-model delivery.

---

## Deploy to Vercel (one-click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Steps

1. Push this repo to GitHub / GitLab / Bitbucket
2. Import the repo in [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — no framework config needed
4. Add environment variables (optional):

| Variable | Purpose |
|----------|---------|
| `GEMINI_API_KEY` | Gemini API key for AI features |
| `VITE_SARVAM_API_KEY` | Sarvam AI Malayalam TTS |

5. Click **Deploy**

---

## Local development

```bash
cp .env.example .env.local   # add your keys
npm install
npm run dev                  # http://localhost:3000
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the dist build locally
```

---

## Notes

- **Brain1 & Brain2** use `wllama` (Llama.cpp in WASM), which works on almost any modern browser without requiring WebGPU.
- **SharedArrayBuffer** is enabled for multi-threading; if not available, the engine falls back to single-threaded mode automatically.
- Models are cached in **IndexedDB** for fast subsequent loads.
