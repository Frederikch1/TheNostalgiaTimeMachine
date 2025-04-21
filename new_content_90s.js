// This is a temporary file to prepare new 90s content entries

const new90sContent = [
  // 90s TV Intros
  {
    title: "Mighty Morphin Power Rangers Intro",
    type: "video",
    year: 1993,
    decade: "90s",
    category: "TV Intros",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/q0YkXmebAGM",
    thumbnailUrl: "https://img.youtube.com/vi/q0YkXmebAGM/hqdefault.jpg",
    description: "The action-packed opening sequence of the popular children's superhero show.",
    metadata: { duration: "1:00" }
  },
  {
    title: "The X-Files Intro",
    type: "video",
    year: 1993,
    decade: "90s",
    category: "TV Intros",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/Vpqffgak7To",
    thumbnailUrl: "https://img.youtube.com/vi/Vpqffgak7To/hqdefault.jpg",
    description: "The eerie opening credits with Mark Snow's iconic theme music that still gives viewers chills.",
    metadata: { duration: "1:12" }
  },
  {
    title: "Rugrats Intro",
    type: "video",
    year: 1991,
    decade: "90s",
    category: "TV Intros",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/jMEj9kQg3F8",
    thumbnailUrl: "https://img.youtube.com/vi/jMEj9kQg3F8/hqdefault.jpg",
    description: "The playful opening sequence of the beloved Nickelodeon animated series about adventurous babies.",
    metadata: { duration: "0:50" }
  },
  {
    title: "Animaniacs Intro",
    type: "video",
    year: 1993,
    decade: "90s",
    category: "TV Intros",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/CWnWwN1z_UM",
    thumbnailUrl: "https://img.youtube.com/vi/CWnWwN1z_UM/hqdefault.jpg",
    description: "The zany, catchy opening for the Warner Brothers (and the Warner Sister) cartoon series.",
    metadata: { duration: "1:17" }
  },
  {
    title: "Saved by the Bell Intro",
    type: "video",
    year: 1990,
    decade: "90s",
    category: "TV Intros",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/1ZAvh6eD0xk",
    thumbnailUrl: "https://img.youtube.com/vi/1ZAvh6eD0xk/hqdefault.jpg",
    description: "The colorful opening credits of the teen sitcom with its catchy theme song and early 90s graphics.",
    metadata: { duration: "1:00" }
  },

  // 90s Movies
  {
    title: "Pulp Fiction (1994) Trailer",
    type: "video",
    year: 1994,
    decade: "90s",
    category: "Movies",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY",
    thumbnailUrl: "https://img.youtube.com/vi/s7EdQ4FqbhY/hqdefault.jpg",
    description: "The trailer for Quentin Tarantino's groundbreaking non-linear crime film.",
    metadata: { duration: "2:32" }
  },
  {
    title: "Forrest Gump (1994) Trailer",
    type: "video",
    year: 1994,
    decade: "90s",
    category: "Movies",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/uPIEn0M8su0",
    thumbnailUrl: "https://img.youtube.com/vi/uPIEn0M8su0/hqdefault.jpg",
    description: "The trailer for the Tom Hanks classic about an extraordinary ordinary man.",
    metadata: { duration: "3:47" }
  },
  {
    title: "Home Alone (1990) Trailer",
    type: "video",
    year: 1990,
    decade: "90s",
    category: "Movies",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/jEDaVHmw7r4",
    thumbnailUrl: "https://img.youtube.com/vi/jEDaVHmw7r4/hqdefault.jpg",
    description: "The trailer for the holiday classic starring Macaulay Culkin as a boy defending his home from burglars.",
    metadata: { duration: "2:29" }
  },
  {
    title: "Terminator 2: Judgment Day (1991) Trailer",
    type: "video",
    year: 1991,
    decade: "90s",
    category: "Movies",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/lwSysg9o7wE",
    thumbnailUrl: "https://img.youtube.com/vi/lwSysg9o7wE/hqdefault.jpg",
    description: "The spectacular trailer for James Cameron's groundbreaking sci-fi action sequel.",
    metadata: { duration: "1:53" }
  },
  {
    title: "Independence Day (1996) Trailer",
    type: "video",
    year: 1996,
    decade: "90s",
    category: "Movies",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/B1E7h3SLDwQ",
    thumbnailUrl: "https://img.youtube.com/vi/B1E7h3SLDwQ/hqdefault.jpg",
    description: "The epic trailer for the alien invasion blockbuster featuring the iconic destruction of the White House.",
    metadata: { duration: "2:31" }
  },

  // 90s Music
  {
    title: "NSYNC - Bye Bye Bye",
    type: "video",
    year: 2000,
    decade: "90s", // Released in 2000 but considered a 90s boy band classic
    category: "Music",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/Eo-KmOd3i7s",
    thumbnailUrl: "https://img.youtube.com/vi/Eo-KmOd3i7s/hqdefault.jpg",
    description: "NSYNC's signature hit with its memorable puppet-themed music video and choreography.",
    metadata: { duration: "3:35" }
  },
  {
    title: "Britney Spears - ...Baby One More Time",
    type: "video",
    year: 1998,
    decade: "90s",
    category: "Music",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/C-u5WLJ9Yk4",
    thumbnailUrl: "https://img.youtube.com/vi/C-u5WLJ9Yk4/hqdefault.jpg",
    description: "Britney's debut single with its iconic school uniform video that launched her to superstardom.",
    metadata: { duration: "3:56" }
  },
  {
    title: "Oasis - Wonderwall",
    type: "video",
    year: 1995,
    decade: "90s",
    category: "Music",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/bx1Bh8ZvH84",
    thumbnailUrl: "https://img.youtube.com/vi/bx1Bh8ZvH84/hqdefault.jpg",
    description: "The Britpop anthem that has become one of the most recognizable rock songs of the era.",
    metadata: { duration: "4:19" }
  },
  {
    title: "Green Day - Basket Case",
    type: "video",
    year: 1994,
    decade: "90s",
    category: "Music",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/NUTGr5t3MoY",
    thumbnailUrl: "https://img.youtube.com/vi/NUTGr5t3MoY/hqdefault.jpg",
    description: "The punk rock hit from the album 'Dookie' with its memorable mental institution video.",
    metadata: { duration: "3:01" }
  },
  {
    title: "Alanis Morissette - Ironic",
    type: "video",
    year: 1996,
    decade: "90s",
    category: "Music",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/Jne9t8sHpUc",
    thumbnailUrl: "https://img.youtube.com/vi/Jne9t8sHpUc/hqdefault.jpg",
    description: "The hit single from Alanis Morissette's groundbreaking album 'Jagged Little Pill'.",
    metadata: { duration: "4:06" }
  },

  // 90s Games
  {
    title: "Super Mario 64 Gameplay",
    type: "video",
    year: 1996,
    decade: "90s",
    category: "Games",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/8Cp-5-Gca7c",
    thumbnailUrl: "https://img.youtube.com/vi/8Cp-5-Gca7c/hqdefault.jpg",
    description: "Gameplay footage of the revolutionary 3D platformer that defined the Nintendo 64 era.",
    metadata: { duration: "10:06" }
  },
  {
    title: "Sonic the Hedgehog 2 Gameplay",
    type: "video",
    year: 1992,
    decade: "90s",
    category: "Games",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/G-i_Zom5c0c",
    thumbnailUrl: "https://img.youtube.com/vi/G-i_Zom5c0c/hqdefault.jpg",
    description: "Gameplay of the Sega Genesis classic featuring Sonic and Tails racing through colorful zones.",
    metadata: { duration: "8:09" }
  },
  {
    title: "Street Fighter II Gameplay",
    type: "video",
    year: 1991,
    decade: "90s",
    category: "Games",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/xI284D4y1q4",
    thumbnailUrl: "https://img.youtube.com/vi/xI284D4y1q4/hqdefault.jpg",
    description: "Arcade gameplay of the fighting game phenomenon that spawned countless sequels and imitators.",
    metadata: { duration: "6:50" }
  },
  {
    title: "Final Fantasy VII Gameplay",
    type: "video",
    year: 1997,
    decade: "90s",
    category: "Games",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/BOUMiEbkZUM",
    thumbnailUrl: "https://img.youtube.com/vi/BOUMiEbkZUM/hqdefault.jpg",
    description: "Gameplay of the PlayStation RPG classic that redefined storytelling in video games.",
    metadata: { duration: "14:50" }
  },
  {
    title: "GoldenEye 007 N64 Gameplay",
    type: "video",
    year: 1997,
    decade: "90s",
    category: "Games",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/y5Ec_NjLNGY",
    thumbnailUrl: "https://img.youtube.com/vi/y5Ec_NjLNGY/hqdefault.jpg",
    description: "Gameplay of the revolutionary first-person shooter that became a multiplayer sensation on Nintendo 64.",
    metadata: { duration: "9:12" }
  },

  // 90s Commercials
  {
    title: "Got Milk? Commercial",
    type: "video",
    year: 1993,
    decade: "90s",
    category: "Commercials",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/OLSsswr6z9Y",
    thumbnailUrl: "https://img.youtube.com/vi/OLSsswr6z9Y/hqdefault.jpg",
    description: "The original 'Aaron Burr' Got Milk? commercial directed by Michael Bay that launched the famous campaign.",
    metadata: { duration: "1:00" }
  },
  {
    title: "Mentos 'The Freshmaker' Commercial",
    type: "video",
    year: 1992,
    decade: "90s",
    category: "Commercials",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/u4hlzRNu3uE",
    thumbnailUrl: "https://img.youtube.com/vi/u4hlzRNu3uE/hqdefault.jpg",
    description: "A classic Mentos commercial where the candy helps solve everyday problems in quirky ways.",
    metadata: { duration: "0:30" }
  },
  {
    title: "Pepsi Commercial with Cindy Crawford",
    type: "video",
    year: 1992,
    decade: "90s",
    category: "Commercials",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/B02DGmkqDDU",
    thumbnailUrl: "https://img.youtube.com/vi/B02DGmkqDDU/hqdefault.jpg",
    description: "The iconic Super Bowl commercial featuring supermodel Cindy Crawford at a gas station.",
    metadata: { duration: "0:30" }
  },
  {
    title: "Budweiser Frogs Commercial",
    type: "video",
    year: 1995,
    decade: "90s",
    category: "Commercials",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/pVcbasIb8lQ",
    thumbnailUrl: "https://img.youtube.com/vi/pVcbasIb8lQ/hqdefault.jpg",
    description: "The famous commercial featuring three frogs croaking 'Bud', 'Weis', 'Er'.",
    metadata: { duration: "0:30" }
  },
  {
    title: "Sega Genesis 'Welcome to the Next Level' Commercial",
    type: "video",
    year: 1994,
    decade: "90s",
    category: "Commercials",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/wlkRPXeUeKQ",
    thumbnailUrl: "https://img.youtube.com/vi/wlkRPXeUeKQ/hqdefault.jpg",
    description: "A high-energy Sega Genesis commercial featuring the iconic 'Sega!' scream.",
    metadata: { duration: "0:30" }
  }
];