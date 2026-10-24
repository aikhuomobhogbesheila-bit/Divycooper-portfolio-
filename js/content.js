/* =============================================================
   SITE CONTENT
   This is the only file you need to edit to update the site.
   Change the text between the quotes "like this" and save.
   ============================================================= */

window.SITE_CONTENT = {

  /* Your email. Used by every "Email me" button. */
  email: "divycooper@gmail.com",

  /* Link for the "Book a call" button (for example a Calendly link).
     If left empty, the button opens an email to you instead. */
  bookingUrl: "https://calendly.com/divycooper/30min",

  /* Social links. Paste the full link, e.g. "https://instagram.com/yourname" */
  socials: {
    instagram: "https://www.instagram.com/divycooper/",
    tiktok: "https://www.tiktok.com/@divycooper",
    x: "",
    youtube: ""
  },

  /* Optional background video for the top of the page (muted, looping).
     Keep it short and small (under ~5 MB). Leave empty for none. */
  hero: {
    video: "",   // e.g. "assets/videos/hero.mp4"
    poster: ""   // e.g. "assets/images/hero.jpg"
  },

  /* Optional portrait for the About section. Leave empty for none. */
  aboutImage: "",  // e.g. "assets/images/divy.jpg"

  /* ---------------------------------------------------------------
     RECENT WORK
     One block per project. Put your files in assets/videos and
     assets/images, then write their paths here.
       goal:      "The brief" line in the project view
       delivered: "What I delivered" line in the project view
                  (leave either empty to hide it)
       video:   the final ad (.mp4)
       poster:  a still frame shown before the video plays (.jpg / .webp)
       preview: optional short silent clip that plays when a card is
                hovered on desktop. Keeps the page light. If empty,
                the full video is used.
       ratio:   shape of the video in the project view:
                "9:16" vertical, "4:3", "1:1" square, "16:9" wide
     Add or remove blocks to change how many projects are shown.
     --------------------------------------------------------------- */
  projects: [
    {
      brand: "NFT Energy Drinks",
      goal: "NFT Energy Xplosion needed a cinematic spec ad targeting creators, athletes, and grind-culture audiences.",
      delivered: "A 45-second match-cut driven AI ad across 7 scenes : F1, surgery, surfing, modeling, chef, founder, and esports.",
      video: "assets/videos/nft-energy-drinks.mp4",
      poster: "assets/images/nft-energy-drinks.jpg",
      preview: "assets/videos/nft-energy-drinks-preview.mp4",
      ratio: "4:3"
    },
    {
      brand: "Multi Kross LTD",
      goal: "MULTI KROSS NIG LTD, a Port Harcourt fumigation company, wanted a realistic 45-second ad with their CEO and crew.",
      delivered: "I built the ad's plan: CEO character sheet, shot-by-shot image and video prompts, voiceover script, and premium flyer concepts.",
      video: "assets/videos/multi-kross.mp4",
      poster: "assets/images/multi-kross.jpg",
      preview: "assets/videos/multi-kross-preview.mp4",
      ratio: "4:3"
    },
    {
      brand: "FFPOSTALSERVICE (fan made)",
      goal: "Self-directed entry for Pollo AI's Wan 3.0 fashion film contest, built as an unofficial fan campaign for FFFPOSTALSERVICE.",
      delivered: "A 45 second, 11 shot cinematic film concept with full image/video prompts, 6 model cast, and locked style guide.",
      video: "assets/videos/ffpostalservice.mp4",
      poster: "assets/images/ffpostalservice.jpg",
      preview: "assets/videos/ffpostalservice-preview.mp4",
      ratio: "4:3"
    },
    {
      brand: "NFT ENERGY DRINKS",
      goal: "Energy Wabbits is hiring AI creators, so I skipped pitching and built a spec ad for NFT Energy Xplosion.",
      delivered: "A 30-second cinematic summer ad in 16:9 with match-cut scenes, made in Gemini, Pixverse and CapCut.",
      video: "assets/videos/nft-energy-drinks-summer.mp4",
      poster: "assets/images/nft-energy-drinks-summer.jpg",
      preview: "assets/videos/nft-energy-drinks-summer-preview.mp4",
      ratio: "16:9"
    },
    {
      brand: "Mira",
      goal: "Mira's Creators Battle contest asked for a vibe video telling my own Mira story.",
      delivered: "A 45-second 3D animated vibe video, three scenes, midnight blue and amber palette, custom end card.",
      video: "assets/videos/mira.mp4",
      poster: "assets/images/mira.jpg",
      preview: "assets/videos/mira-preview.mp4",
      ratio: "16:9"
    },
    {
      brand: "Presh Stitches",
      goal: "A Port Harcourt fashion designer needed a premium, realistic 45 second ad showcasing her tailoring, fabrics and finished outfits.",
      delivered: "A 45 second AI ad: consistent character, realistic shop scenes, varied camera moves, voiceover script, on-screen service text.",
      video: "assets/videos/presh-stitches.mp4",
      poster: "assets/images/presh-stitches.jpg",
      preview: "assets/videos/presh-stitches-preview.mp4",
      ratio: "4:3"
    },
    {
      brand: "Short film",
      goal: "A self-initiated, dialogue-free noir short for X, built to meet OiiOii's 45-second minimum.",
      delivered: "\"Wrong Number,\" a black-and-white 16:9 short with red colour isolation, animated in OiiOii.",
      video: "assets/videos/colour-noir.mp4",
      poster: "assets/images/colour-noir.jpg",
      preview: "assets/videos/colour-noir-preview.mp4",
      ratio: "16:9"
    },
    {
      brand: "Flova",
      goal: "I set myself a personal vintage theme reel for my Flova CPP content, using Pinterest inspo for direction.",
      delivered: "14 cinematic shots with full image and video prompts (Seedance 2.5), built around \"Bubblegum Bitch\" by Marina.",
      video: "assets/videos/flova.mp4",
      poster: "assets/images/flova.jpg",
      preview: "assets/videos/flova-preview.mp4",
      ratio: "4:3"
    }
  ],

  /* ---------------------------------------------------------------
     REVIEWS
     Replace the placeholder text with a real review to show it.
     Reviews still reading "Review text goes here." stay hidden,
     and if none are filled in, the whole section is hidden.
     --------------------------------------------------------------- */
  reviews: [
    {
      text: "Review text goes here.",
      brand: "Brand name",
      client: "Client name"
    },
    {
      text: "Review text goes here.",
      brand: "Brand name",
      client: "Client name"
    },
    {
      text: "Review text goes here.",
      brand: "Brand name",
      client: "Client name"
    }
  ]
};
