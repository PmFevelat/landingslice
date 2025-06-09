# LandingSlice

A modern landing page for Slice with waitlist functionality.

## Features

- 🎨 Modern design with shadcn/ui components
- 📝 Professional waitlist form with validation
- 📧 Email notifications via Resend
- 🔥 Toast notifications
- ⚡ Optimized performance (no hydration errors)
- 📱 Fully responsive design

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API
- **Notifications:** Sonner (toast)
- **Icons:** Lucide React

## Environment Variables

For the waitlist email functionality to work, you need to set up the following environment variable:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

### Local Development

1. Create a `.env.local` file in the root directory
2. Add your Resend API key:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

### Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the following variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_C3tVgmTN_FbFCnDsjAhzHvg3WrKBGFWRi`
   - **Environments:** Production, Preview, Development

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PmFevelat/landingslice&env=RESEND_API_KEY&envDescription=Resend%20API%20key%20for%20email%20notifications&envLink=https://resend.com/api-keys)

Or manual deployment:

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add the `RESEND_API_KEY` environment variable
4. Deploy!

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
src/
├── app/
│   ├── api/waitlist/route.ts    # Email API endpoint
│   ├── waitlist/page.tsx        # Waitlist form page
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── simple-header.tsx       # Navigation header
│   ├── hero-section-four.tsx   # Hero section
│   ├── features-one.tsx        # Features section
│   ├── integrations-two.tsx    # Integrations section
│   ├── call-to-action-one.tsx  # CTA section
│   └── footer-one.tsx          # Footer section
└── lib/
    └── utils.ts                # Utility functions
```

## Email Configuration

The app sends waitlist notifications to: `pierre-marie.fevelat@hec.edu`

To change the recipient email, modify the `to` field in `src/app/api/waitlist/route.ts`.

## License

MIT
