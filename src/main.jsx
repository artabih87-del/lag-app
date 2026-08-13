 import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const translations = {
  ar: {
    home: "الرئيسية",
    search: "بحث",
    create: "إنشاء منشور",
    messages: "الرسائل",
    profile: "الملف الشخصي",
    settings: "الإعدادات",
    profession: "المهنة",
    location: "الموقع",
    language: "اللغة",
    discover: "اكتشف",
    post: "منشور",
    save: "حفظ",
    privacy: "الخصوصية",
    admin: "الإدارة",
    welcome: "مرحبا بك في LAG",
    placeholder: "ابحث عن مشكل، حل أو مهني...",
    createPost: "شنو بغيتي تشارك؟",
    problem: "المشكل",
    solution: "الحل",
    send: "إرسال"
  },

  fr: {
    home: "Accueil",
    search: "Recherche",
    create: "Créer un post",
    messages: "Messages",
    profile: "Profil",
    settings: "Paramètres",
    profession: "Métier",
    location: "Localisation",
    language: "Langue",
    discover: "Découvrir",
    post: "Publication",
    save: "Enregistrer",
    privacy: "Confidentialité",
    admin: "Administration",
    welcome: "Bienvenue sur LAG",
    placeholder:
      "Recherchez un problème, une solution ou un professionnel...",
    createPost: "Que souhaitez-vous partager ?",
    problem: "Problème",
    solution: "Solution",
    send: "Envoyer"
  },

  en: {
    home: "Home",
    search: "Search",
    create: "Create post",
    messages: "Messages",
    profile: "Profile",
    settings: "Settings",
    profession: "Profession",
    location: "Location",
    language: "Language",
    discover: "Discover",
    post: "Post",
    save: "Save",
    privacy: "Privacy",
    admin: "Admin",
    welcome: "Welcome to LAG",
    placeholder:
      "Search for a problem, solution or professional...",
    createPost: "What do you want to share?",
    problem: "Problem",
    solution: "Solution",
    send: "Send"
  }
};

const demoPosts = [
  {
    name: "Yassine",
    city: "Rabat",
    profession: "Technicien",
    text: "عندي مشكل فواحد الجهاز، واش شي حد يقدر يعاوني؟",
    tag: "Technology"
  },
  {
    name: "Sara",
    city: "Casablanca",
    profession: "Designer",
    text: "كنقدم خدمات التصميم وكنشارك بعض الأعمال ديالي.",
    tag: "Service"
  },
  {
    name: "Omar",
    city: "Marrakesh",
    profession: "Mechanic",
    text: "حل بسيط لمشكل شائع فسيارة.",
    tag: "Solution"
  }
];

function App() {
  const [lang, setLang] = useState(
    localStorage.getItem("lag-lang") || "ar"
  );

  const [view, setView] = useState("home");
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(demoPosts);

  const [profile, setProfile] = useState({
    name: "",
    profession: "",
    city: "",
    age: "",
    phone: "",
    bio: ""
  });

  const t = translations[lang] || translations.en;
  const rtl = lang === "ar";

  useEffect(() => {
    localStorage.setItem("lag-lang", lang);
  }, [lang]);

  function addPost() {
    const text = window.prompt(t.createPost);

    if (!text) return;

    const newPost = {
      name: profile.name || "LAG User",
      city: profile.city || "Morocco",
      profession: profile.profession || "User",
      text,
      tag: "New"
    };

    setPosts((currentPosts) => [newPost, ...currentPosts]);
  }

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="app">
      <Splash />

      <header className="top">
        <button
          className="brand"
          onClick={() => setView("home")}
          aria-label="LAG home"
        >
          <span className="mark">L</span>
          <span>LAG</span>
        </button>

        <div className="topSearch">
          <span>⌕</span>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.placeholder}
          />
        </div>

        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          aria-label={t.language}
        >
          <option value="ar">العربية</option>
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <Nav
            label={t.home}
            active={view === "home"}
            onClick={() => setView("home")}
            icon="⌂"
          />

          <Nav
            label={t.discover}
            active={view === "discover"}
            onClick={() => setView("discover")}
            icon="✦"
          />

          <Nav
            label={t.create}
            onClick={addPost}
            icon="＋"
          />

          <Nav
            label={t.messages}
            active={view === "messages"}
            onClick={() => setView("messages")}
            icon="◌"
          />

          <Nav
            label={t.profile}
            active={view === "profile"}
            onClick={() => setView("profile")}
            icon="◯"
          />

          <Nav
            label={t.settings}
            active={view === "settings"}
            onClick={() => setView("settings")}
            icon="⚙"
          />

          <Nav
            label={t.admin}
            active={view === "admin"}
            onClick={() => setView("admin")}
            icon="♛"
          />
        </aside>

        <main className="main">
          <section className="hero">
            <div>
              <p className="eyebrow">
                LAG · HELP / SOLVE / CONNECT
              </p>

              <h1>{t.welcome}</h1>

              <p>
                من المشكل للحل، ومن الشخص المناسب للمساعدة — في مكان واحد.
              </p>
            </div>

            <button className="primary" onClick={addPost}>
              {t.create}
            </button>
          </section>

          <div className="mobileActions">
            <button onClick={() => setView("home")}>
              {t.home}
            </button>

            <button onClick={() => setView("messages")}>
              {t.messages}
            </button>

            <button onClick={() => setView("profile")}>
              {t.profile}
            </button>

            <button onClick={() => setView("settings")}>
              {t.settings}
            </button>
          </div>

          {view === "home" && (
            <Home
              posts={posts}
              search={search}
              t={t}
            />
          )}

          {view === "discover" && (
            <Discover t={t} />
          )}

          {view === "messages" && (
            <Messages t={t} />
          )}

          {view === "profile" && (
            <Profile
              profile={profile}
              setProfile={setProfile}
              t={t}
            />
          )}

          {view === "settings" && (
            <Settings
              lang={lang}
              setLang={setLang}
              t={t}
            />
          )}

          {view === "admin" && (
            <Admin t={t} />
          )}
        </main>
      </div>
    </div>
  );
}

function Splash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="splash">
      <div className="logoBox">
        <div className="logoIcon">
          <i></i>
          <b>L</b>
        </div>

        <div className="logoText">
          LAG
        </div>

        <small>
          CONNECT · SOLVE · HELP
        </small>
      </div>
    </div>
  );
}

function Nav({ label, onClick, active, icon }) {
  return (
    <button
      className={`nav ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}

function Home({ posts, search, t }) {
  const filtered = posts.filter((post) =>
    (
      post.text +
      post.name +
      post.city +
      post.profession +
      post.tag
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="feed">
      <div className="quick">
        <button className="tile mainTile">
          <strong>⌕</strong>
          <span>{t.search}</span>
          <small>{t.placeholder}</small>
        </button>

        <button
          className="tile"
          onClick={() =>
            alert("Post composer جاهز للربط مع Supabase")
          }
        >
          ＋
          <span>{t.create}</span>
        </button>
      </div>

      <div className="sectionHead">
        <h2>
          {t.post}
          {lang === "ar" ? "ات" : "s"}
        </h2>

        <span>{filtered.length} results</span>
      </div>

      {filtered.map((post, index) => (
        <article className="card" key={index}>
          <div className="avatar">
            {post.name[0]}
          </div>

          <div className="postBody">
            <div className="postMeta">
              <strong>{post.name}</strong>
              <span>{post.profession}</span>
              <span>· {post.city}</span>
            </div>

            <p>{post.text}</p>

            <div className="tag">
              {post.tag}
            </div>

            <div className="postActions">
              <button>♡ Like</button>
              <button>◌ Comment</button>
              <button>↗ Share</button>
              <button>☆ {t.save}</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function Discover({ t }) {
  return (
    <div className="panel">
      <h2>{t.discover}</h2>

      <div className="chips">
        <span>Electrician</span>
        <span>Designer</span>
        <span>Mechanic</span>
        <span>Developer</span>
        <span>Teacher</span>
      </div>

      <div className="people">
        <div>
          👤 <b>Professional</b>

          <small>
            Rabat · Arabic / Français
          </small>

          <button>{t.profile}</button>
        </div>

        <div>
          👤 <b>Service provider</b>

          <small>
            Casablanca · Français
          </small>

          <button>{t.profile}</button>
        </div>
      </div>
    </div>
  );
}

function Messages({ t }) {
  return (
    <div className="panel">
      <h2>{t.messages}</h2>

      <div className="chat">
        <div className="bubble">
          مرحبا! هادي واجهة الرسائل الخاصة.
          اربطها بـ Supabase Realtime باش تولي حقيقية.
        </div>

        <div className="composer">
          <input placeholder={`${t.send}...`} />

          <button className="primary">
            {t.send}
          </button>
        </div>
      </div>
    </div>
  );
}

function Profile({ profile, setProfile, t }) {
  const field = (key) => (
    <input
      value={profile[key]}
      onChange={(e) =>
        setProfile({
          ...profile,
          [key]: e.target.value
        })
      }
    />
  );

  return (
    <div className="panel">
      <h2>{t.profile}</h2>

      <div className="profileGrid">
        <div className="profileAvatar">
          L
        </div>

        <div>
          <label>
            Name
            {field("name")}
          </label>

          <label>
            {t.profession}
            {field("profession")}
          </label>

          <label>
            {t.location}
            {field("city")}
          </label>

          <label>
            Age
            {field("age")}
          </label>

          <label>
            Phone
            {field("phone")}
          </label>

          <label>
            Bio

            <textarea
              value={profile.bio}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  bio: e.target.value
                })
              }
            />
          </label>

          <button className="primary">
            {t.save}
          </button>
        </div>
      </div>
    </div>
  );
}

function Settings({ lang, setLang, t }) {
  return (
    <div className="panel">
      <h2>{t.settings}</h2>

      <div className="settingsList">
        <div>
          <b>{t.language}</b>

          <select
            value={lang}
            onChange={(e) =>
              setLang(e.target.value)
            }
          >
            <option value="ar">
              العربية
            </option>

            <option value="fr">
              Français
            </option>

            <option value="en">
              English
            </option>
          </select>
        </div>

        <div>
          <b>{t.privacy}</b>

          <span>
            Private profile · Phone hidden ·
            Location controlled
          </span>
        </div>

        <div>
          <b>{t.location}</b>

          <span>
            Morocco → choose region → city
          </span>
        </div>

        <div>
          <b>Security</b>

          <span>
            Authentication + RLS ready for
            Supabase
          </span>
        </div>
      </div>
    </div>
  );
}

function Admin({ t }) {
  return (
    <div className="panel">
      <h2>{t.admin}</h2>

      <p>
        Owner-only dashboard shell.
        Connect server-side role checks
        before production.
      </p>

      <div className="adminGrid">
        <div>
          Users
          <strong>0</strong>
        </div>

        <div>
          Reports
          <strong>0</strong>
        </div>

        <div>
          Support
          <strong>0</strong>
        </div>

        <div>
          Security
          <strong>Protected</strong>
        </div>
      </div>
    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(
  <App />
);
