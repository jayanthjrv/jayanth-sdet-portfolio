# Jayanth Sivaraju — SDET Portfolio

A responsive dark developer portfolio built with React, Vite, CSS, and Lucide icons.

## Run locally

Requirements: Node.js (LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Personalize before publishing

1. Replace the profile-photo placeholder with your own photo. See `public/PROFILE_PHOTO_README.txt`.
2. Update the GitHub URL in `src/main.jsx` from the generic GitHub profile URL to your real profile.
3. Check contact details and all experience dates.
4. Review project summaries and make sure no confidential employer details are published.
5. If you don't want your phone number public, remove the phone link from the Contact section.

## GitHub and Vercel

- Create a **private** GitHub repository and push this project.
- Import the repository in Vercel.
- Framework preset: Vite; build command: `npm run build`; output directory: `dist`.
- Vercel deployments are public by default for a public-facing portfolio URL even if the source repository is private. Review Vercel project/access settings before sharing.
