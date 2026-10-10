# Divy Cooper, AI Artist

One page portfolio. Plain HTML, CSS and JavaScript, with no build step.

## Updating the site

Everything you will want to change lives in **`js/content.js`**:

| What | Where in `content.js` |
| --- | --- |
| Project videos, posters, brand name, goal, what you delivered | `projects` |
| Reviews | `reviews` |
| Instagram / TikTok / X / YouTube links | `socials` |
| "Book a call" link (e.g. Calendly) | `bookingUrl` |
| Optional hero background video | `hero` |
| Optional About portrait | `aboutImage` |

### Adding a project video

1. Put the video in `assets/videos/` (MP4, H.264). Aim for under ~15 MB.
2. Put a still frame in `assets/images/` (JPG or WebP, ~1080px tall). This poster shows instantly, before the video loads.
3. In `content.js`, fill in that project's `video`, `poster`, `brand`, `goal` and `delivered`.
4. Set `ratio` to `"9:16"`, `"4:3"`, `"1:1"` or `"16:9"` to match the video. Cards in the grid all share one frame; the project view plays the video at its real shape.
5. Optional: add a short silent `preview` clip (5 to 8 seconds, under 1 MB) for the desktop hover effect.

Videos only download when someone opens a project (or hovers a card on desktop), so the page stays fast.

### Reviews

Replace `"Review text goes here."` with a real review. Reviews still showing that placeholder stay hidden, and if none are filled in, the whole "What brands say" section is hidden.
To preview the empty slots anyway, open the page with `?preview` at the end of the URL.

## Publishing

Upload the folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). For GitHub Pages: Settings → Pages → deploy from branch, root folder.
