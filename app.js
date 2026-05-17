// Update this whenever the site content changes.
const lastUpdatedText = "05/17/2026 @ 2:17pm";

const appButtons = [
  { id: "messages", label: "messages", color: "#ffd4b8", icon: "💬" },
  { id: "photos", label: "photos", color: "#cfe2c7", icon: "📷" },
  { id: "notes", label: "notes", color: "#fff0a8", icon: "✏️" },
  { id: "blahaj", label: "blåhaj", color: "#7EC0E6", icon: "🦈" },
  { id: "rayeToday", label: "raye today", color: "#ffe4df", icon: "💋" },
  { id: "credits", label: "credits", color: "#E4DFF2", icon: "👯" }
];

const messages = [
  {
    id: "kyra",
    friendName: "kyra",
    status: "unread",
    preview: "a real little note is tucked in here",
    imageSrc: "messages/kyra-message.png",
    imageAlt: "kyra birthday note",
    paperColor: "#fffaf0",
    stickerColor: "#ffd4b8"
  },
  {
    id: "emma",
    friendName: "emma",
    status: "unread",
    preview: "message spot saved",
    paperColor: "#fff0a8",
    stickerColor: "#cfe2c7",
    detailNote: "space saved for emma's birthday note."
  },
  {
    id: "vaish",
    friendName: "vaish",
    status: "unread",
    preview: "message spot saved",
    imageSrc: "messages/vaishmessage.JPEG",
    paperColor: "#d6eef6",
    stickerColor: "#ef8f83",
    detailNote: "space saved for vaish's birthday note."
  },
  {
    id: "jake",
    friendName: "jake",
    status: "unread",
    preview: "message spot saved",
    paperColor: "#f7e7d4",
    stickerColor: "#7fb8b1",
    detailNote: "space saved for jake's birthday note."
  },
  {
    id: "ana",
    friendName: "ana",
    status: "unread",
    preview: "message spot saved",
    paperColor: "#eef5df",
    stickerColor: "#b8ddf0",
    detailNote: "space saved for ana's birthday note."
  },
  {
    id: "vick",
    friendName: "vick",
    status: "unread",
    preview: "message spot saved",
    paperColor: "#ffe4df",
    stickerColor: "#fff0a8",
    detailNote: "space saved for vick's birthday note."
  },
  {
    id: "cassie",
    friendName: "cassie",
    status: "unread",
    preview: "message spot saved",
    paperColor: "#fffaf0",
    stickerColor: "#ef8f83",
    detailNote: "space saved for cassie's birthday note."
  },
  {
    id: "ishaani",
    friendName: "ishaani",
    status: "unread",
    preview: "message spot saved",
    paperColor: "#eef5df",
    stickerColor: "#ffd4b8",
    detailNote: "space saved for ishaani's birthday note."
  }
];

const notes = [
  {
    id: "note-01",
    emoji: "🩺",
    title: "The Pitt Hogwarts houses",
    preview: "a very serious sorting ceremony for the ER",
    color: "#fffaf0",
    lines: [
      {
        text: "❤️ Gryffindor: Dr. Robby Robinavitch, Trinity Santos, Dr. Jack Abbott. Brave, impulsive, and willing to run straight into chaos."
      },
      {
        text: "💜 Ravenclaw: Dr. Heather Collins, Dr. Melissa King, Dr. Samira Mohan, Victoria Javadi. Analytical, observant, high-standard people who notice what everyone else misses."
      },
      {
        text: "💛 Hufflepuff: Dana Evans, Dr. Dennis Whitaker, Dr. Cassie McKay. Loyal, steady, patient-centered, and quietly carrying a lot."
      },
      {
        text: "💚 Slytherin: Dr. Frank Langdon. Charismatic, ambitious, strategic, and complicated in a way that makes the sorting hat pause dramatically."
      }
    ]
  },
  {
    id: "note-02",
    emoji: "🏛️",
    title: "Top 10 museums in Boston",
    preview: "the museum list, ranked for an actually good day",
    color: "#eef5df",
    lines: [
      placeLine("1. Museum of Fine Arts, Boston", "Museum of Fine Arts Boston"),
      placeLine("2. Isabella Stewart Gardner Museum", "Isabella Stewart Gardner Museum Boston"),
      placeLine("3. Institute of Contemporary Art", "Institute of Contemporary Art Boston"),
      placeLine("4. Museum of Science", "Museum of Science Boston"),
      placeLine("5. Boston Children's Museum", "Boston Children's Museum"),
      placeLine("6. USS Constitution Museum", "USS Constitution Museum Boston"),
      placeLine("7. Boston Tea Party Ships & Museum", "Boston Tea Party Ships and Museum"),
      placeLine("8. Museum of African American History", "Museum of African American History Boston"),
      placeLine("9. Harvard Art Museums", "Harvard Art Museums Cambridge MA"),
      placeLine("10. MIT Museum", "MIT Museum Cambridge MA")
    ]
  },
  {
    id: "note-03",
    emoji: "🍛",
    title: "27 Indian restaurants in Boston",
    preview: "a Boston-area hit list for future cravings",
    color: "#fff0a8",
    lines: [
      placeLine("1. Shanti", "Shanti Indian restaurant Boston"),
      placeLine("2. Momo Masala", "Momo Masala Boston"),
      placeLine("3. Zuzu Momo", "Zuzu Momo Boston"),
      placeLine("4. Chulo Restaurant & Bar", "Chulo Restaurant and Bar Boston"),
      placeLine("5. Singh's Dhaba", "Singh's Dhaba Cambridge MA"),
      placeLine("6. Mirchi Nation", "Mirchi Nation Boston"),
      placeLine("7. Wow Tikka", "Wow Tikka Boston"),
      placeLine("8. Vaisakhi Indian Kitchen", "Vaisakhi Indian Kitchen Boston"),
      placeLine("9. Punjabi Dhaba", "Punjabi Dhaba Cambridge MA"),
      placeLine("10. Dosa n Curry", "Dosa n Curry Somerville MA"),
      placeLine("11. Madras Dosa Co.", "Madras Dosa Co Boston"),
      placeLine("12. India Quality", "India Quality Boston"),
      placeLine("13. Mela", "Mela Indian Restaurant Boston"),
      placeLine("14. Punjab Palace", "Punjab Palace Allston MA"),
      placeLine("15. The Maharaja", "The Maharaja Cambridge MA"),
      placeLine("16. Nirvana", "Nirvana Indian Restaurant Cambridge MA"),
      placeLine("17. Himalayan Bistro", "Himalayan Bistro West Roxbury MA"),
      placeLine("18. Himalayan Kitchen", "Himalayan Kitchen Somerville MA"),
      placeLine("19. Kantipur Cafe", "Kantipur Cafe Cambridge MA"),
      placeLine("20. Masala Square", "Masala Square Somerville MA"),
      placeLine("21. Vaanga", "Vaanga Indian Boston"),
      placeLine("22. Halal Indian Cuisine", "Halal Indian Cuisine Boston"),
      placeLine("23. Godavari", "Godavari Indian Restaurant Woburn MA"),
      placeLine("24. Bawarchi Biryanis", "Bawarchi Biryanis Boston"),
      placeLine("25. Royal India Bistro", "Royal India Bistro Lexington MA"),
      placeLine("26. Soul of India", "Soul of India Sudbury MA"),
      placeLine("27. Treasury Indian Kitchen", "Treasury Indian Kitchen Burlington MA")
    ]
  }
];

const photoPalettes = [
  ["#fffaf0", "#b8ddf0", "#ffd4b8"],
  ["#f7e7d4", "#cfe2c7", "#fff0a8"],
  ["#eef5df", "#7fb8b1", "#ffd4b8"],
  ["#fffaf0", "#ef8f83", "#cfe2c7"],
  ["#ffe4df", "#a7d6ea", "#fff0a8"],
  ["#fffaf0", "#d6eef6", "#ef8f83"]
];

const photoFiles = [
  "bloop.jpeg",
  "cassie bday.jpg",
  "funny faces with jake.jpg",
  "haha with jake.jpg",
  "hee hoo cheetos.JPG",
  "hugs with cassie.JPG",
  "lovers milkshake.JPG",
  "me and jake.jpg",
  "me ish vaish at BLL bridge.JPG",
  "me n cassie at brewery.JPG",
  "me n cassie.jpg",
  "me n vick.jpg",
  "reddddd.jpg",
  "rizzy apples.jpg",
  "rizzy malai.jpg",
  "spooky spooky.jpg",
  "spooky with vaish.jpg",
  "sunny ish.jpg"
];

const photos = photoFiles.map((fileName, index) => {
  const palette = photoPalettes[index % photoPalettes.length];
  return photoFromFile(`photo-${String(index + 1).padStart(2, "0")}`, fileName, ...palette);
});

const plushFiles = [
  "blahaj.jpg",
  "djungelskog.jpg",
  "djungelskog-orangutan.jpg",
  "SKOGSDUVA.jpg",
  "grejsimojs.jpg",
  "sandlöepare.jpg"
];

const rayeMoodData = {
  glamorousDevastation: {
    label: "glamorous devastation",
    emoji: "🍸",
    lyrics: [
      {
        lyric: "Where the hell is my husband?",
        song: "WHERE IS MY HUSBAND!",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE WHERE IS MY HUSBAND")
      },
      {
        lyric: "Jimmy Choo, it's time",
        song: "CLICK CLACK.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE CLICK CLACK")
      },
      {
        lyric: "A big and shiny diamond",
        song: "WHERE IS MY HUSBAND!",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE WHERE IS MY HUSBAND")
      },
      {
        lyric: "Wear floor-length fake fur coats",
        song: "WINTER WOMAN.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE WINTER WOMAN")
      },
      {
        lyric: "Don't you know what you're missing",
        song: "Five Star Hotels.",
        album: "My 21st Century Blues",
        year: "2023",
        spotifyUrl: spotifySearchUrl("RAYE Five Star Hotels")
      }
    ]
  },
  spiralingPolitely: {
    label: "spiraling politely",
    emoji: "🫧",
    lyrics: [
      {
        lyric: "I know you're hurting",
        song: "I KNOW YOU'RE HURTING.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE I KNOW YOU'RE HURTING")
      },
      {
        lyric: "I eat, sleep, scroll, and work",
        song: "CLICK CLACK.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE CLICK CLACK")
      },
      {
        lyric: "Don't know how I'll get there",
        song: "LIFE BOAT.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE LIFE BOAT")
      },
      {
        lyric: "Doctor, doctor, have mercy on me",
        song: "Escapism.",
        album: "My 21st Century Blues",
        year: "2023",
        spotifyUrl: spotifySearchUrl("RAYE Escapism")
      },
      {
        lyric: "How did we ever think?",
        song: "Environmental Anxiety.",
        album: "My 21st Century Blues",
        year: "2023",
        spotifyUrl: spotifySearchUrl("RAYE Environmental Anxiety")
      }
    ]
  },
  mainCharacterDelusion: {
    label: "main character delusion",
    emoji: "🎬",
    lyrics: [
      {
        lyric: "Who let the girls out?",
        song: "CLICK CLACK.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE CLICK CLACK")
      },
      {
        lyric: "The WhatsApp Shakespeare, darling",
        song: "THE DREADFUL WHATSAPP.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE THE DREADFUL WHATSAPP")
      },
      {
        lyric: "I did, I did, darling",
        song: "CLICK CLACK.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE CLICK CLACK")
      },
      {
        lyric: "Cry those Oscar winning tears",
        song: "Oscar Winning Tears.",
        album: "My 21st Century Blues",
        year: "2023",
        spotifyUrl: spotifySearchUrl("RAYE Oscar Winning Tears")
      },
      {
        lyric: "Cinematography, get this on camera, please",
        song: "Oscar Winning Tears.",
        album: "My 21st Century Blues",
        year: "2023",
        spotifyUrl: spotifySearchUrl("RAYE Oscar Winning Tears")
      }
    ]
  },
  jazzClubHeartbreak: {
    label: "jazz club heartbreak",
    emoji: "🎷",
    lyrics: [
      {
        lyric: "Somebody loved me once",
        song: "NIGHTINGALE LANE.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE NIGHTINGALE LANE")
      },
      {
        lyric: "On Nightingale Lane",
        song: "NIGHTINGALE LANE.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE NIGHTINGALE LANE")
      },
      {
        lyric: "This is a sad song",
        song: "GOODBYE HENRY.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE GOODBYE HENRY")
      },
      {
        lyric: "The thrill is gone",
        song: "The Thrill Is Gone.",
        album: "My 21st Century Blues",
        year: "2023",
        spotifyUrl: spotifySearchUrl("RAYE The Thrill Is Gone")
      },
      {
        lyric: "Sweet, sweet Mary Jane",
        song: "Mary Jane.",
        album: "My 21st Century Blues",
        year: "2023",
        spotifyUrl: spotifySearchUrl("RAYE Mary Jane")
      }
    ]
  },
  revengeButCute: {
    label: "revenge but cute",
    emoji: "💅",
    lyrics: [
      {
        lyric: "Beware, the South London lover boy",
        song: "BEWARE OF THE SOUTH LONDON LOVER BOY.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE BEWARE OF THE SOUTH LONDON LOVER BOY")
      },
      {
        lyric: "Girls, stay safe out there",
        song: "BEWARE OF THE SOUTH LONDON LOVER BOY.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE BEWARE OF THE SOUTH LONDON LOVER BOY")
      },
      {
        lyric: "You better run while you can",
        song: "THE DREADFUL WHATSAPP.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE THE DREADFUL WHATSAPP")
      },
      {
        lyric: "Tell him I'm dead if he calling me",
        song: "Flip A Switch.",
        album: "My 21st Century Blues",
        year: "2023",
        spotifyUrl: spotifySearchUrl("RAYE Flip A Switch")
      },
      {
        lyric: "Baby, I bounce back",
        song: "Hard Out Here.",
        album: "My 21st Century Blues",
        year: "2023",
        spotifyUrl: spotifySearchUrl("RAYE Hard Out Here")
      }
    ]
  },
  healingDramatically: {
    label: "healing dramatically",
    emoji: "🩹",
    lyrics: [
      {
        lyric: "Happier times ahead",
        song: "HAPPIER TIMES AHEAD.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE HAPPIER TIMES AHEAD")
      },
      {
        lyric: "I'm not giving up yet",
        song: "LIFE BOAT.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE LIFE BOAT")
      },
      {
        lyric: "There is a future",
        song: "LIFE BOAT.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE LIFE BOAT")
      },
      {
        lyric: "I declare there will be joy",
        song: "JOY!",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE JOY")
      },
      {
        lyric: "Knowing it's my only body",
        song: "Body Dysmorphia.",
        album: "My 21st Century Blues",
        year: "2023",
        spotifyUrl: spotifySearchUrl("RAYE Body Dysmorphia")
      }
    ]
  },
  tooHotToTextBack: {
    label: "too hot to text back",
    emoji: "📵",
    lyrics: [
      {
        lyric: "Tell him he should holler",
        song: "WHERE IS MY HUSBAND!",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE WHERE IS MY HUSBAND")
      },
      {
        lyric: "Your Uber's outside",
        song: "THE DREADFUL WHATSAPP.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE THE DREADFUL WHATSAPP")
      },
      {
        lyric: "He should holler",
        song: "WHERE IS MY HUSBAND!",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE WHERE IS MY HUSBAND")
      },
      {
        lyric: "Call me when you're heading home",
        song: "Regardless",
        album: "Euphoric Sad Songs",
        year: "2020",
        spotifyUrl: spotifySearchUrl("RAYE Regardless")
      },
      {
        lyric: "Don't say hi",
        song: "Walk On By",
        album: "Euphoric Sad Songs",
        year: "2020",
        spotifyUrl: spotifySearchUrl("RAYE Walk On By")
      }
    ]
  },
  cryingInEyeliner: {
    label: "crying in eyeliner",
    emoji: "🖤",
    lyrics: [
      {
        lyric: "I may cry through the night",
        song: "JOY!",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE JOY")
      },
      {
        lyric: "Crying in a stranger's car",
        song: "WINTER WOMAN.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE WINTER WOMAN")
      },
      {
        lyric: "I'll be sad and beautiful",
        song: "WINTER WOMAN.",
        album: "THIS MUSIC MAY CONTAIN HOPE.",
        year: "2026",
        spotifyUrl: spotifySearchUrl("RAYE WINTER WOMAN")
      },
      {const apps
        lyric: "Once you see my black mascara",
        song: "Black Mascara.",
        album: "My 21st Century Blues",
        year: "2023",
        spotifyUrl: spotifySearchUrl("RAYE Black Mascara")
      },
      {
        lyric: "Lying on the bathroom floor",
        song: "Love Me Again",
        album: "Euphoric Sad Songs",
        year: "2020",
        spotifyUrl: ""
      }
    ]
  }
};

const apps = {
  messages: {
    title: "messages",
    accent: "#ffd4b8",
    render: renderMessages
  },
  photos: {
    title: "photos",
    accent: "#cfe2c7",
    render: renderPhotos
  },
  notes: {
    title: "notes",
    accent: "#fff0a8",
    render: renderNotes
  },
  blahaj: {
    title: "blåhaj",
    accent: "#7EC0E6",
    render: renderBlahaj
  },
  rayeToday: {
    title: "raye today",
    accent: "#ffe4df",
    render: renderRayeToday
  },
  credits: {
    title: "credits",
    accent: "#E4DFF2",
    render: renderCredits
  }
};

const state = {
  activeApp: null,
  activeMessage: null,
  activeNote: null,
  activePhoto: null,
  activeRayeMood: null,
  activeRayeLyric: null,
  rayeLyricQueues: {},
  readMessages: new Set()
};

const appGrid = document.querySelector("[data-app-grid]");
const appWindow = document.querySelector("[data-app-window]");
const appTitle = document.querySelector("[data-app-title]");
const appContent = document.querySelector("[data-app-content]");
const homeScreen = document.querySelector("[data-screen='home']");
const lockScreen = document.querySelector("[data-screen='lock']");
const lockTime = document.querySelector("[data-lock-time]");
const unlockButton = document.querySelector("[data-unlock]");
const lastUpdate = document.querySelector("[data-last-update]");

unlockButton.addEventListener("click", unlockPhone);
lockScreen.addEventListener("pointerdown", startUnlockSwipe);
lockScreen.addEventListener("mousedown", startUnlockSwipe);
lockScreen.addEventListener("touchstart", startUnlockTouch, { passive: true });
window.addEventListener("pointerup", finishUnlockSwipe);
window.addEventListener("mouseup", finishUnlockSwipe);
window.addEventListener("touchend", finishUnlockTouch);
window.addEventListener("pointercancel", cancelUnlockSwipe);
lockScreen.addEventListener("wheel", handleUnlockWheel, { passive: true });
document.querySelector("[data-close-app]").addEventListener("click", closeApp);

renderAppGrid();
lastUpdate.textContent = lastUpdatedText;
updateClock();
window.setInterval(updateClock, 30000);

function placeLine(text, query) {
  return {
    text,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
  };
}

function photo(id, caption, src, paper, fill, tape) {
  return {
    id,
    caption,
    src,
    palette: { paper, fill, tape }
  };
}

function photoFromFile(id, fileName, paper, fill, tape) {
  const caption = fileName.replace(/\.[^.]+$/, "");
  const src = `photos/${encodeURIComponent(fileName)}`;
  return photo(id, caption, src, paper, fill, tape);
}

function spotifySearchUrl(query) {
  return `https://open.spotify.com/search/${encodeURIComponent(query)}`;
}

function updateClock() {
  lockTime.textContent = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date());
}

function unlockPhone() {
  lockScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
}

function startUnlockSwipe(event) {
  state.unlockStartY = event.clientY;
}

function startUnlockTouch(event) {
  state.unlockStartY = event.changedTouches[0].clientY;
}

function finishUnlockSwipe(event) {
  finishUnlockAt(event.clientY);
}

function finishUnlockTouch(event) {
  finishUnlockAt(event.changedTouches[0].clientY);
}

function finishUnlockAt(clientY) {
  if (typeof state.unlockStartY !== "number") {
    return;
  }

  const swipedUp = state.unlockStartY - clientY > 44;
  state.unlockStartY = null;

  if (swipedUp) {
    unlockPhone();
  }
}

function cancelUnlockSwipe() {
  state.unlockStartY = null;
}

function handleUnlockWheel(event) {
  if (Math.abs(event.deltaY) > 38) {
    unlockPhone();
  }
}

function renderAppGrid() {
  appGrid.innerHTML = appButtons
    .map(
      (app) => `
        <button class="app-icon-button" type="button" data-open-app="${app.id}" aria-label="open ${app.label}">
          <span class="app-icon-tile" style="background: ${app.color}">${app.icon}</span>
          <span class="app-icon-label">${app.label}</span>
        </button>
      `
    )
    .join("");

  appGrid.querySelectorAll("[data-open-app]").forEach((button) => {
    button.addEventListener("click", () => openApp(button.dataset.openApp));
  });
}

function openApp(appId) {
  state.activeApp = appId;
  appWindow.classList.remove("hidden");
  appWindow.style.setProperty("--app-accent", apps[appId].accent);
  appTitle.textContent = apps[appId].title;
  apps[appId].render();
}

function closeApp() {
  state.activeApp = null;
  state.activeMessage = null;
  state.activeNote = null;
  state.activePhoto = null;
  state.activeRayeMood = null;
  state.activeRayeLyric = null;
  appWindow.classList.add("hidden");
  appContent.innerHTML = "";
}

function renderMessages() {
  if (state.activeMessage) {
    const message = messages.find((item) => item.id === state.activeMessage);
    renderMessageDetail(message);
    return;
  }

  appContent.innerHTML = `
    <div class="messages-app">
      <div class="message-intro">
        <p>birthday notes</p>
        <div class="heart-icon" aria-hidden="true"></div>
      </div>
      <div class="message-list">
        ${messages.map(renderMessageRow).join("")}
      </div>
    </div>
  `;

  appContent.querySelectorAll("[data-message-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeMessage = button.dataset.messageId;
      state.readMessages.add(state.activeMessage);
      renderMessages();
    });
  });
}

function renderMessageRow(message) {
  const isUnread = !state.readMessages.has(message.id) && message.status === "unread";

  return `
    <button class="message-row" type="button" data-message-id="${message.id}" aria-label="open message from ${message.friendName}">
      <span class="message-avatar" style="background: ${message.stickerColor}">${message.friendName.slice(0, 1)}</span>
      <span class="message-row-copy">
        <span class="message-row-top">
          <strong>${message.friendName}</strong>
          ${isUnread ? `<span class="message-unread-dot"></span>` : ""}
        </span>
        <span>${message.preview}</span>
      </span>
    </button>
  `;
}

function renderMessageDetail(message) {
  appContent.innerHTML = `
    <div class="messages-app">
      <div class="detail-topbar">
        <button class="round-icon-button" type="button" data-back-to-messages aria-label="back to people">back</button>
        <p>${message.friendName}</p>
        <div class="star-icon" aria-hidden="true"></div>
      </div>
      <div class="message-note-stage" style="background: ${message.paperColor}">
        <span class="paper-tape paper-tape-left" style="background: ${message.stickerColor}" aria-hidden="true"></span>
        <span class="paper-tape paper-tape-right" style="background: ${message.stickerColor}" aria-hidden="true"></span>
        ${message.imageSrc ? `<img class="message-image" src="${message.imageSrc}" alt="${message.imageAlt || `${message.friendName} note`}" />` : renderMessagePlaceholder()}
      </div>
      ${message.detailNote ? `<p class="message-detail-note">${message.detailNote}</p>` : ""}
    </div>
  `;

  appContent.querySelector("[data-back-to-messages]").addEventListener("click", () => {
    state.activeMessage = null;
    renderMessages();
  });
}

function renderMessagePlaceholder() {
  return `
    <div class="message-placeholder">
      <div class="heart-icon" aria-hidden="true"></div>
      <p>message coming soon</p>
      <span>this paper is saving a warm little place</span>
    </div>
  `;
}

function renderPhotos() {
  appContent.innerHTML = `
    <div class="photos-app">
      <div class="photos-heading">
        <p>pics w my besties &lt;3</p>
        <div class="star-icon" aria-hidden="true"></div>
      </div>
      <div class="photo-grid">
        ${photos.map(renderPhotoCard).join("")}
      </div>
      <div data-lightbox></div>
    </div>
  `;

  appContent.querySelectorAll("[data-photo-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activePhoto = photos.find((photoItem) => photoItem.id === button.dataset.photoId);
      renderLightbox();
    });
  });
}

function renderPhotoCard(item) {
  return `
    <button
      class="photo-card"
      type="button"
      data-photo-id="${item.id}"
      style="--photo-paper: ${item.palette.paper}; --photo-fill: ${item.palette.fill}; --photo-tape: ${item.palette.tape}"
    >
      <span class="photo-tape" aria-hidden="true"></span>
      <span class="photo-image-slot">
        <img src="${item.src}" alt="${item.caption}" loading="eager" />
      </span>
      <span class="photo-caption">${item.caption}</span>
    </button>
  `;
}

function renderLightbox() {
  const lightbox = appContent.querySelector("[data-lightbox]");

  if (!state.activePhoto) {
    lightbox.innerHTML = "";
    return;
  }

  const item = state.activePhoto;
  lightbox.innerHTML = `
    <div class="photo-lightbox" data-close-lightbox>
      <div class="photo-lightbox-card" style="--photo-fill: ${item.palette.fill}">
        <button class="round-icon-button" type="button" data-close-photo aria-label="close photo">close</button>
        <div class="photo-lightbox-image" style="background: ${item.palette.fill}">
          <img src="${item.src}" alt="${item.caption}" />
        </div>
        <p>${item.caption}</p>
      </div>
    </div>
  `;

  lightbox.querySelector("[data-close-photo]").addEventListener("click", closeLightbox);
  lightbox.querySelector("[data-close-lightbox]").addEventListener("click", closeLightbox);
  lightbox.querySelector(".photo-lightbox-card").addEventListener("click", (event) => event.stopPropagation());
}

function closeLightbox() {
  state.activePhoto = null;
  renderLightbox();
}

function renderNotes() {
  if (state.activeNote) {
    const note = notes.find((item) => item.id === state.activeNote);
    renderNoteDetail(note);
    return;
  }

  appContent.innerHTML = `
    <div class="notes-app">
      <div class="notes-heading">
        <p>notes</p>
      </div>
      <div class="notes-stack">
        ${notes.map(renderNoteCard).join("")}
      </div>
    </div>
  `;

  appContent.querySelectorAll("[data-note-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeNote = button.dataset.noteId;
      renderNotes();
    });
  });
}

function renderNoteCard(note) {
  return `
    <button class="note-card" type="button" data-note-id="${note.id}" style="background: ${note.color}" aria-label="open note ${note.title}">
      <h3><span class="note-emoji" aria-hidden="true">${note.emoji}</span>${note.title}</h3>
      <p>${note.preview}</p>
    </button>
  `;
}

function renderNoteDetail(note) {
  appContent.innerHTML = `
    <div class="notes-app">
      <div class="detail-topbar">
        <button class="round-icon-button" type="button" data-back-to-notes aria-label="back to notes">back</button>
        <p>${note.title}</p>
        <div class="star-icon" aria-hidden="true"></div>
      </div>
      <article class="note-detail-card" style="background: ${note.color}">
        <h3><span class="note-emoji" aria-hidden="true">${note.emoji}</span>${note.title}</h3>
        <div class="note-detail-body">
          ${note.lines.map(renderNoteLine).join("")}
        </div>
      </article>
    </div>
  `;

  appContent.querySelector("[data-back-to-notes]").addEventListener("click", () => {
    state.activeNote = null;
    renderNotes();
  });
}

function renderNoteLine(line) {
  if (!line.href) {
    return `<p class="note-line">${line.text}</p>`;
  }

  return `
    <p class="note-line">
      <a href="${line.href}" target="_blank" rel="noopener noreferrer">${line.text}</a>
    </p>
  `;
}

function renderBlahaj() {
  appContent.innerHTML = `
    <div class="blahaj-app">
      <div class="blahaj-heading">
        <p>blåhaj's friends</p>
        <div class="heading-shark" aria-hidden="true">🦈</div>
      </div>
      <div class="plush-grid">
        ${plushFiles.map(renderPlushCard).join("")}
      </div>
    </div>
  `;
}

function renderCredits() {
  appContent.innerHTML = `
    <div class="notes-app">
      <div class="notes-heading">
        <p>credits</p>
      </div>

      <article class="note-detail-card" style="background: #fffaf0">
        <h3><span class="note-emoji" aria-hidden="true">❣️</span>thank you</h3>
        <div class="note-detail-body">
          <p class="note-line">
            Thank you to Ana, Cassie, Emma, Ishaani, Jake, Vaish, and Vick for all of your thoughtful contributions! We love you, Meghna!
          </p>
        </div>
      </article>
    </div>
  `;
}

function renderPlushCard(fileName) {
  const caption = plushCaption(fileName);

  return `
    <figure class="plush-card">
      <img src="placeholders/${encodeURIComponent(fileName)}" alt="${caption}" />
      <figcaption>${caption}</figcaption>
    </figure>
  `;
}

function plushCaption(fileName) {
  const name = fileName.replace(/\.[^.]+$/, "");
  const captions = {
    blahaj: "blåhaj",
    djungelskog: "djungelskog bear",
    "djungelskog-orangutan": "djungelskog orangutan",
    SKOGSDUVA: "skogsduva",
    grejsimojs: "grejsimojs",
    "sandlöepare": "sandlöpare"
  };

  return captions[name] || name.toLowerCase().replace(/-/g, " ");
}

function renderRayeToday() {
  if (state.activeRayeMood) {
    renderRayeLyricCard();
    return;
  }

  appContent.innerHTML = `
    <div class="raye-app">
      <div class="raye-intro">
        <span class="raye-kiss" aria-hidden="true">💋</span>
        <h3>what's raye feeling today?</h3>
      </div>
      <div class="raye-mood-grid">
        ${Object.entries(rayeMoodData).map(renderRayeMoodButton).join("")}
      </div>
    </div>
  `;

  appContent.querySelectorAll("[data-raye-mood]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeRayeMood = button.dataset.rayeMood;
      queueNextRayeLyric();
      renderRayeToday();
    });
  });
}

function renderRayeMoodButton([key, mood]) {
  return `
    <button class="raye-mood-button" type="button" data-raye-mood="${key}" aria-label="choose ${mood.label}">
      <span aria-hidden="true">${mood.emoji}</span>
      <strong>${mood.label}</strong>
    </button>
  `;
}

function renderRayeLyricCard() {
  const mood = rayeMoodData[state.activeRayeMood];
  const lyric = mood.lyrics[state.activeRayeLyric];
  const count = mood.lyrics.length - state.rayeLyricQueues[state.activeRayeMood].length;

  appContent.innerHTML = `
    <div class="raye-app">
      <div class="detail-topbar raye-topbar">
        <button class="round-icon-button" type="button" data-back-to-raye aria-label="back to moods">back</button>
        <p>${mood.emoji} ${mood.label}</p>
        <div class="heart-icon" aria-hidden="true"></div>
      </div>
      <article class="raye-lyric-card">
        <span class="paper-tape paper-tape-left" aria-hidden="true"></span>
        <span class="paper-tape paper-tape-right" aria-hidden="true"></span>
        <p class="raye-count">${count} / ${mood.lyrics.length}</p>
        <blockquote>${lyric.lyric}</blockquote>
        <p class="raye-song-meta">
          <strong>${lyric.song}</strong>
          <span>${lyric.album} (${lyric.year})</span>
        </p>
        <div class="raye-actions">
          <button class="round-icon-button" type="button" data-next-raye-lyric>next lyric</button>
          ${lyric.spotifyUrl ? `<a class="raye-spotify-link" href="${lyric.spotifyUrl}" target="_blank" rel="noopener noreferrer">listen on Spotify</a>` : ""}
        </div>
      </article>
    </div>
  `;

  appContent.querySelector("[data-back-to-raye]").addEventListener("click", () => {
    state.activeRayeMood = null;
    state.activeRayeLyric = null;
    renderRayeToday();
  });

  appContent.querySelector("[data-next-raye-lyric]").addEventListener("click", () => {
    queueNextRayeLyric();
    renderRayeToday();
  });
}

function queueNextRayeLyric() {
  const mood = rayeMoodData[state.activeRayeMood];
  let queue = state.rayeLyricQueues[state.activeRayeMood] || [];

  if (!queue.length) {
    queue = shuffleIndexes(mood.lyrics.length);
  }

  state.activeRayeLyric = queue.shift();
  state.rayeLyricQueues[state.activeRayeMood] = queue;
}

function shuffleIndexes(length) {
  const indexes = Array.from({ length }, (_, index) => index);

  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
  }

  return indexes;
}
