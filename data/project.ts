export const projects = [
  {
    title: "Spotifu Music 1",
    short_description:
      "A music streaming app that emulates Spotify's core features.",
    descriptions: [
      "A music streaming app that emulates Spotify's core features.",
      "A music streaming app that emulates Spotify's core features.",
      "A music streaming app that emulates Spotify's core features.",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1720029863009-3319eac8fcfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG11c2ljJTIwYXBwfGVufDB8fDB8fHww",
    preview_link: "https://google.com",
    source: "https://github.com",
    featured_project: true,
  },
  {
    title: "Spotifu Music 2",
    short_description:
      "A music streaming app that emulates Spotify's core features.",
    descriptions: [
      "A music streaming app that emulates Spotify's core features.",
      "A music streaming app that emulates Spotify's core features.",
      "A music streaming app that emulates Spotify's core features.",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1720029863009-3319eac8fcfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG11c2ljJTIwYXBwfGVufDB8fDB8fHww",
    preview_link: "https://google.com",
    source: "https://github.com",
    featured_project: false,
  },
  {
    title: "Spotifu Music 3",
    short_description:
      "A music streaming app that emulates Spotify's core features.",
    descriptions: [
      "A music streaming app that emulates Spotify's core features.",
      "A music streaming app that emulates Spotify's core features.",
      "A music streaming app that emulates Spotify's core features.",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1720029863009-3319eac8fcfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG11c2ljJTIwYXBwfGVufDB8fDB8fHww",
    preview_link: "https://google.com",
    source: "https://github.com",
    featured_project: true,
  },
]

// Get featured projects from projects key:featured_project=true
export const featured_projects = projects.filter(
  (project) => project.featured_project
)
