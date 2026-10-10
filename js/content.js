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
      goal: "One line goal of the brand.",
      delivered: "What I delivered.",
      video: "assets/videos/nft-energy-drinks.mp4",
      poster: "assets/images/nft-energy-drinks.jpg",
      preview: "assets/videos/nft-energy-drinks-preview.mp4",
      ratio: "4:3"
    },
    {
      brand: "Multi Kross LTD",
      goal: "One line goal of the brand.",
      delivered: "What I delivered.",
      video: "assets/videos/multi-kross.mp4",
      poster: "assets/images/multi-kross.jpg",
      preview: "assets/videos/multi-kross-preview.mp4",
      ratio: "4:3"
    },
    {
      brand: "FFPOSTALSERVICE (fan made)",
      goal: "One line goal of the brand.",
      delivered: "What I delivered.",
      video: "assets/videos/ffpostalservice.mp4",
      poster: "assets/images/ffpostalservice.jpg",
      preview: "assets/videos/ffpostalservice-preview.mp4",
      ratio: "4:3"
    },
    {
      brand: "NFT ENERGY DRINKS",
      goal: "One line goal of the brand.",
      delivered: "What I delivered.",
      video: "assets/videos/nft-energy-drinks-summer.mp4",
      poster: "assets/images/nft-energy-drinks-summer.jpg",
      preview: "assets/videos/nft-energy-drinks-summer-preview.mp4",
      ratio: "16:9"
    },
    {
      brand: "Mira",
      goal: "One line goal of the brand.",
      delivered: "What I delivered.",
      video: "assets/videos/mira.mp4",
      poster: "assets/images/mira.jpg",
      preview: "assets/videos/mira-preview.mp4",
      ratio: "16:9"
    },
    {
      brand: "Presh Stitches",
      goal: "One line goal of the brand.",
      delivered: "What I delivered.",
      video: "assets/videos/presh-stitches.mp4",
      poster: "assets/images/presh-stitches.jpg",
      preview: "assets/videos/presh-stitches-preview.mp4",
      ratio: "4:3"
    },
    {
      brand: "Short film",
      goal: "One line goal of the brand.",
      delivered: "What I delivered.",
      video: "assets/videos/colour-noir.mp4",
      poster: "assets/images/colour-noir.jpg",
      preview: "assets/videos/colour-noir-preview.mp4",
      ratio: "16:9"
    },
    {
      brand: "Flova",
      goal: "One line goal of the brand.",
      delivered: "What I delivered.",
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
