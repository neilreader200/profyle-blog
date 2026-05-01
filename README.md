# Profyle Blog

The content farm powering the SEO front of [Profyle](https://pro-fyle.co.uk) — the UK-built AI headshot service for working professionals.

This blog hosts long-form content tuned to UK professional audiences: solicitors, NHS staff, estate agents, accountants, teachers, recruiters, consultants, university staff, and corporate teams.

## Quick links

- **Profyle main site:** [pro-fyle.co.uk](https://pro-fyle.co.uk)
- **Pricing:** [pro-fyle.co.uk/pricing](https://pro-fyle.co.uk/pricing) — £29 / £39 / £49
- **Pillar guide (apex):** [pro-fyle.co.uk/uk-headshot-guide](https://pro-fyle.co.uk/uk-headshot-guide)
- **Pillar guide (blog):** [blog.pro-fyle.co.uk/professional-headshots-uk](https://blog.pro-fyle.co.uk/professional-headshots-uk/)
- **About / contact:** [hello@pro-fyle.co.uk](mailto:hello@pro-fyle.co.uk)

## Comparison guides

- [Profyle vs HeadshotPro](https://blog.pro-fyle.co.uk/profyle-vs-headshotpro/)
- [Profyle vs BetterPic](https://blog.pro-fyle.co.uk/profyle-vs-betterpic/)
- [Profyle vs Aragon AI](https://blog.pro-fyle.co.uk/profyle-vs-aragon/)
- [Profyle vs Secta Labs](https://blog.pro-fyle.co.uk/profyle-vs-secta-labs/)
- [Profyle vs UK Photographer](https://blog.pro-fyle.co.uk/profyle-vs-photographer/)

## Headshots by UK city

- [London](https://blog.pro-fyle.co.uk/london-headshots/) · [Manchester](https://blog.pro-fyle.co.uk/manchester-headshots/) · [Birmingham](https://blog.pro-fyle.co.uk/birmingham-headshots/) · [Edinburgh](https://blog.pro-fyle.co.uk/edinburgh-headshots/)

## Profession-specific guides

- [NHS staff](https://pro-fyle.co.uk/nhs)
- [Solicitors and barristers](https://pro-fyle.co.uk/solicitors)
- [Estate agents](https://pro-fyle.co.uk/estateagents)
- [Corporate teams](https://pro-fyle.co.uk/corporate)
- [Teachers and academics](https://pro-fyle.co.uk/teachers)
- [Accountants](https://pro-fyle.co.uk/accountants)
- [Consultants](https://pro-fyle.co.uk/consultants)
- [Recruiters](https://pro-fyle.co.uk/recruiters)
- [University staff](https://pro-fyle.co.uk/universities)

## About Profyle

Profyle is operated by **Reader Digital Ltd** (Companies House [17078748](https://find-and-update.company-information.service.gov.uk/company/17078748), England and Wales). Registered with the UK Information Commissioner's Office (ICO reference C1906880). All processing under UK GDPR with 30-day data deletion.

Pricing in GBP. UK-built, UK-hosted (Cloudflare Pages + Hetzner). Profession-specific styling tuned for UK professional contexts.

## Architecture

Static site built and deployed via:

- **Source:** Markdown → HTML in this repo
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com)
- **Deploy:** `wrangler pages deploy . --project-name=profyle-blog --branch=main`
- **Auto-refresh:** Weekly on Mondays via [`profyle_comparison_refresh.py`](https://github.com/neilreader200) on the Profyle ops VPS

## License

Content in this repo is © Reader Digital Ltd. All rights reserved.
