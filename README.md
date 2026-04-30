# Profyle Blog

Markdown posts for the Profyle blog. Served by a Cloudflare Worker at `blog.pro-fyle.co.uk`.

## How it works
- Each post is a markdown file in `posts/<slug>.md` with YAML frontmatter.
- `manifest.json` lists all posts for the index page.
- The Cloudflare Worker fetches files from raw.githubusercontent.com on request and renders to HTML.
- The n8n Content Factory workflow (8tqLmhdEBRYaJhmt) writes new posts to this repo via the GitHub API, which then go live within seconds (Worker caches for 60s).

## Adding a post manually
1. Create `posts/<your-slug>.md` with frontmatter
2. Add an entry to `manifest.json`
3. Commit to `main`. Done.
