// This is a temporary file to prepare new content entries
// After verifying, we'll add these to the storage.ts file

const newContent = [
  // 70s TV Intros
  {
    title: "M*A*S*H Intro",
    type: "video",
    year: 1972,
    decade: "70s",
    category: "TV Intros",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/PlkxcC79LA8",
    thumbnailUrl: "https://img.youtube.com/vi/PlkxcC79LA8/hqdefault.jpg",
    description: "The iconic opening sequence from M*A*S*H featuring the haunting 'Suicide is Painless' theme.",
    metadata: { duration: "1:02" }
  },
  {
    title: "All in the Family Intro",
    type: "video",
    year: 1971,
    decade: "70s",
    category: "TV Intros",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/0d8FTPv955I",
    thumbnailUrl: "https://img.youtube.com/vi/0d8FTPv955I/hqdefault.jpg",
    description: "The opening sequence of Norman Lear's groundbreaking sitcom with Archie and Edith Bunker singing 'Those Were the Days'.",
    metadata: { duration: "1:30" }
  },
  {
    title: "Happy Days Intro",
    type: "video",
    year: 1974,
    decade: "70s",
    category: "TV Intros",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/slvGKU7HF6M",
    thumbnailUrl: "https://img.youtube.com/vi/slvGKU7HF6M/hqdefault.jpg",
    description: "The nostalgic opening credits of Happy Days featuring the memorable 'Rock Around the Clock'.",
    metadata: { duration: "1:01" }
  },
  {
    title: "Charlie's Angels Intro",
    type: "video",
    year: 1976,
    decade: "70s",
    category: "TV Intros",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/fUdx2siotUo",
    thumbnailUrl: "https://img.youtube.com/vi/fUdx2siotUo/hqdefault.jpg",
    description: "The opening sequence from the iconic female detective show with its distinctive voiceover.",
    metadata: { duration: "1:30" }
  },
  {
    title: "The Muppet Show Intro",
    type: "video",
    year: 1976,
    decade: "70s",
    category: "TV Intros",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/EJ9yAV8uQ7g",
    thumbnailUrl: "https://img.youtube.com/vi/EJ9yAV8uQ7g/hqdefault.jpg",
    description: "The colorful and energetic opening of Jim Henson's beloved variety show featuring Kermit and the gang.",
    metadata: { duration: "1:01" }
  },

  // 70s Movies
  {
    title: "Close Encounters of the Third Kind Trailer",
    type: "video",
    year: 1977,
    decade: "70s",
    category: "Movies",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/Fj5_2Ov-eCM",
    thumbnailUrl: "https://img.youtube.com/vi/Fj5_2Ov-eCM/hqdefault.jpg",
    description: "The original trailer for Steven Spielberg's sci-fi masterpiece about first contact.",
    metadata: { duration: "2:20" }
  },
  {
    title: "Rocky (1976) Trailer",
    type: "video",
    year: 1976,
    decade: "70s",
    category: "Movies",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/7RYpJAUMo2M",
    thumbnailUrl: "https://img.youtube.com/vi/7RYpJAUMo2M/hqdefault.jpg",
    description: "The trailer for the inspirational boxing film that made Sylvester Stallone a star.",
    metadata: { duration: "3:12" }
  },
  {
    title: "Grease (1978) Trailer",
    type: "video",
    year: 1978,
    decade: "70s",
    category: "Movies",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/-FiN-5DJW3E",
    thumbnailUrl: "https://img.youtube.com/vi/-FiN-5DJW3E/hqdefault.jpg",
    description: "The trailer for the classic musical starring John Travolta and Olivia Newton-John.",
    metadata: { duration: "2:46" }
  },
  {
    title: "Alien (1979) Trailer",
    type: "video",
    year: 1979,
    decade: "70s",
    category: "Movies",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/jQ5lPt9edzQ",
    thumbnailUrl: "https://img.youtube.com/vi/jQ5lPt9edzQ/hqdefault.jpg",
    description: "The chilling trailer for Ridley Scott's sci-fi horror masterpiece.",
    metadata: { duration: "1:43" }
  },
  {
    title: "Superman: The Movie (1978) Trailer",
    type: "video",
    year: 1978,
    decade: "70s",
    category: "Movies",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/pUwxH4SM9Rg",
    thumbnailUrl: "https://img.youtube.com/vi/pUwxH4SM9Rg/hqdefault.jpg",
    description: "The original trailer for the Christopher Reeve Superman film that made you believe a man could fly.",
    metadata: { duration: "3:03" }
  },

  // 70s Music
  {
    title: "Bee Gees - Stayin' Alive",
    type: "video",
    year: 1977,
    decade: "70s",
    category: "Music",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/I_izvAbhExY",
    thumbnailUrl: "https://img.youtube.com/vi/I_izvAbhExY/hqdefault.jpg",
    description: "The Bee Gees' disco anthem from the Saturday Night Fever soundtrack that defined the era.",
    metadata: { duration: "4:04" }
  },
  {
    title: "Fleetwood Mac - Go Your Own Way",
    type: "video",
    year: 1977,
    decade: "70s",
    category: "Music",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/6ul-cZyUYq4",
    thumbnailUrl: "https://img.youtube.com/vi/6ul-cZyUYq4/hqdefault.jpg",
    description: "The classic hit from Fleetwood Mac's legendary Rumours album.",
    metadata: { duration: "3:43" }
  },
  {
    title: "The Eagles - Hotel California",
    type: "video",
    year: 1976,
    decade: "70s",
    category: "Music",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/09839DpTctU",
    thumbnailUrl: "https://img.youtube.com/vi/09839DpTctU/hqdefault.jpg",
    description: "The Eagles' magnum opus with one of the most famous guitar solos of all time.",
    metadata: { duration: "7:07" }
  },
  {
    title: "Donna Summer - I Feel Love",
    type: "video",
    year: 1977,
    decade: "70s",
    category: "Music",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/B2qI6UDD2uQ",
    thumbnailUrl: "https://img.youtube.com/vi/B2qI6UDD2uQ/hqdefault.jpg",
    description: "Donna Summer's revolutionary electronic disco track that influenced generations of dance music.",
    metadata: { duration: "5:55" }
  },
  {
    title: "Village People - Y.M.C.A.",
    type: "video",
    year: 1978,
    decade: "70s",
    category: "Music",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/CS9OO0S5w2k",
    thumbnailUrl: "https://img.youtube.com/vi/CS9OO0S5w2k/hqdefault.jpg",
    description: "The Village People's dance floor classic with its iconic choreography that everyone knows.",
    metadata: { duration: "4:29" }
  },

  // 70s Games
  {
    title: "Space Invaders Arcade Game",
    type: "video",
    year: 1978,
    decade: "70s",
    category: "Games",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/MU4psw3ccUI",
    thumbnailUrl: "https://img.youtube.com/vi/MU4psw3ccUI/hqdefault.jpg",
    description: "Gameplay footage of the revolutionary Space Invaders arcade game that changed the gaming industry.",
    metadata: { duration: "3:52" }
  },
  {
    title: "Breakout Arcade Game",
    type: "video",
    year: 1976,
    decade: "70s",
    category: "Games",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/AMUv8KvVt08",
    thumbnailUrl: "https://img.youtube.com/vi/AMUv8KvVt08/hqdefault.jpg",
    description: "Footage of Atari's brick-breaking arcade classic designed by Steve Wozniak and Steve Jobs.",
    metadata: { duration: "2:12" }
  },
  {
    title: "Asteroids Arcade Game",
    type: "video",
    year: 1979,
    decade: "70s",
    category: "Games",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/cZfsnA7dAHI",
    thumbnailUrl: "https://img.youtube.com/vi/cZfsnA7dAHI/hqdefault.jpg",
    description: "Gameplay of the vector graphics classic where players shoot and navigate through asteroid fields.",
    metadata: { duration: "3:38" }
  },
  {
    title: "Adventure for Atari 2600",
    type: "video",
    year: 1979,
    decade: "70s",
    category: "Games",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/JmEQGYT2EFs",
    thumbnailUrl: "https://img.youtube.com/vi/JmEQGYT2EFs/hqdefault.jpg",
    description: "One of the first action-adventure games and the first to contain an Easter egg.",
    metadata: { duration: "10:28" }
  },
  {
    title: "Intellivision TV Commercial",
    type: "video",
    year: 1979,
    decade: "70s",
    category: "Games",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/oFGHZseo4bs",
    thumbnailUrl: "https://img.youtube.com/vi/oFGHZseo4bs/hqdefault.jpg",
    description: "An original commercial for the Intellivision gaming console, rival to the Atari 2600.",
    metadata: { duration: "1:01" }
  },

  // 70s Commercials
  {
    title: "Coca-Cola 'Hilltop' Commercial",
    type: "video",
    year: 1971,
    decade: "70s",
    category: "Commercials",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/1VM2eLhvsSM",
    thumbnailUrl: "https://img.youtube.com/vi/1VM2eLhvsSM/hqdefault.jpg",
    description: "The iconic 'I'd Like to Teach the World to Sing' Coca-Cola commercial filmed on an Italian hilltop.",
    metadata: { duration: "1:00" }
  },
  {
    title: "Life Cereal 'Mikey Likes It' Commercial",
    type: "video",
    year: 1972,
    decade: "70s",
    category: "Commercials",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/CLQ0LZSnJFE",
    thumbnailUrl: "https://img.youtube.com/vi/CLQ0LZSnJFE/hqdefault.jpg",
    description: "The famous cereal commercial where reluctant Mikey surprisingly 'likes it!'",
    metadata: { duration: "0:30" }
  },
  {
    title: "Oscar Mayer Bologna Commercial",
    type: "video",
    year: 1973,
    decade: "70s",
    category: "Commercials",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/rmPRHJd3uHI",
    thumbnailUrl: "https://img.youtube.com/vi/rmPRHJd3uHI/hqdefault.jpg",
    description: "The memorable 'My bologna has a first name' jingle commercial.",
    metadata: { duration: "0:30" }
  },
  {
    title: "Tootsie Pop 'How Many Licks' Commercial",
    type: "video",
    year: 1970,
    decade: "70s",
    category: "Commercials",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/O6rHeD5x2tI",
    thumbnailUrl: "https://img.youtube.com/vi/O6rHeD5x2tI/hqdefault.jpg",
    description: "The classic animated commercial asking how many licks it takes to get to the center of a Tootsie Pop.",
    metadata: { duration: "1:00" }
  },
  {
    title: "McDonald's 'You Deserve a Break Today' Commercial",
    type: "video",
    year: 1971,
    decade: "70s",
    category: "Commercials",
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/DRpnmCdI6uo",
    thumbnailUrl: "https://img.youtube.com/vi/DRpnmCdI6uo/hqdefault.jpg",
    description: "One of McDonald's most successful ad campaigns with its catchy jingle.",
    metadata: { duration: "1:00" }
  }
];