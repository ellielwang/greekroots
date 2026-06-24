# ACCT 2101 Study Assistant

An AI-powered study tool for UGA students preparing for the ACCT 2101 entrance exam, built with vanilla JavaScript and the Claude API.

## Features

- **Explain It** — Get plain-English explanations of any accounting concept with examples
- **Quiz Me** — Generate multiple choice questions on any topic
- **Practice Problems** — Get realistic journal entry and calculation problems with step-by-step solutions
- Quick-topic chips for the most tested ACCT 2101 concepts
- Session history to revisit previous responses

## Tech Stack

- Vanilla HTML/CSS/JS (no framework needed)
- [Claude API](https://docs.anthropic.com/) (claude-sonnet-4-6)
- Deployable to Vercel, Netlify, or GitHub Pages in one step

## Getting Started

1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/acct2101-study-assistant.git
cd acct2101-study-assistant
```

2. Open `index.html` in your browser — that's it for local dev.

> The app calls the Claude API directly from the browser. For production, you'll want to proxy through a backend to keep your API key secure.

## Deployment (Vercel)

```bash
npm i -g vercel
vercel
```

Done. Vercel will give you a live URL.

## Topics Covered

- Debits & Credits
- The Accounting Equation (Assets = Liabilities + Equity)
- Journal Entries
- Trial Balance
- Income Statement
- Balance Sheet
- Adjusting Entries
- Cash vs. Accrual Accounting

## About

Built by a UGA accounting student who earned an A in ACCT 2101 and wanted to help other students pass the entrance exam. Powered by Anthropic's Claude AI.

---

*Made with ❤️ at UGA Terry College of Business*
