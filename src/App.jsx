import "./index.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">LAG</div>

        <button className="nav-item active">
          🏠 <span>Accueil</span>
        </button>

        <button className="nav-item">
          🔍 <span>Rechercher</span>
        </button>

        <button className="nav-item">
          ➕ <span>Publier</span>
        </button>

        <button className="nav-item">
          💬 <span>Messages</span>
        </button>

        <button className="nav-item">
          👤 <span>Profil</span>
        </button>

        <button className="nav-item">
          🔒 <span>Confidentialité</span>
        </button>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <h1 className="page-title">LAG</h1>

          <input
            className="search-box"
            type="text"
            placeholder="Rechercher..."
          />
        </div>

        <div className="create-box">
          <textarea placeholder="Quel problème veux-tu résoudre ?"></textarea>

          <div className="create-actions">
            <button className="action-btn">📷 Ajouter une photo</button>

            <button className="primary-btn">
              Publier
            </button>
          </div>
        </div>

        <div className="post">
          <div className="post-header">
            <div className="avatar">L</div>

            <div>
              <div className="username">Utilisateur LAG</div>
              <small>Il y a quelques minutes</small>
            </div>
          </div>

          <div className="post-content">
            <p className="post-text">
              Bienvenue sur LAG. Écris ton problème ou partage une photo,
              et trouve des solutions et des personnes capables de t'aider.
            </p>
          </div>

          <div className="post-actions">
            <button className="action-btn">❤️ J'aime</button>
            <button className="action-btn">💬 Commenter</button>
            <button className="action-btn">↗️ Partager</button>
          </div>
        </div>

        <div className="card">
          <h2 className="privacy-title">🔒 Ta confidentialité</h2>
          <p>
            Tes informations personnelles sont protégées.
            Tu contrôles ce que tu partages sur LAG.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
