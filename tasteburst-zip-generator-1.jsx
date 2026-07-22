import { useState, useEffect } from "react";

const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>TasteBurst — Food Reviews</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css"/>
</head>
<body>
<nav>
  <div class="logo">TasteBurst</div>
  <ul>
    <li><a href="#reviews">Reviews</a></li>
    <li><a href="#top">Top Picks</a></li>
    <li><a href="#contact" class="nav-cta">Submit Review</a></li>
  </ul>
</nav>

<div class="page-wrap">
  <div class="ad-top">
    <div class="ad-zone"><span>📢</span>
      <!-- PASTE YOUR ADSTERRA 728x90 BANNER CODE HERE -->
      Adsterra Ad — 728x90
    </div>
  </div>
</div>

<section id="hero">
  <div class="hero-bg"></div>
  <div class="page-wrap hero-inner">
    <div class="hero-text">
      <div class="hero-badge">🔥 #1 Food Review Platform</div>
      <h1>Discover the <em>Tastiest</em> Spots Near You</h1>
      <p class="hero-sub">Honest reviews. Real flavors. Find the best restaurants, street food, and hidden gems — rated by food lovers like you.</p>
      <div class="hero-btns">
        <a href="#reviews" class="btn btn-primary">Explore Reviews</a>
        <a href="#contact" class="btn btn-ghost">Write a Review</a>
      </div>
      <div class="hero-stats">
        <div class="stat"><div class="stat-n">500+</div><div class="stat-l">Reviews</div></div>
        <div class="stat"><div class="stat-n">120+</div><div class="stat-l">Restaurants</div></div>
        <div class="stat"><div class="stat-n">4.8★</div><div class="stat-l">Avg Rating</div></div>
      </div>
    </div>
    <div class="hero-cards">
      <div class="mini-card"><div class="emoji">🍕</div><div class="mc-title">Napoli Pizza Co.</div><div class="stars">★★★★★</div><div class="mc-meta">Italian · Just Reviewed</div></div>
      <div class="mini-card"><div class="emoji">🍔</div><div class="mc-title">Smash Bros Burger</div><div class="stars">★★★★☆</div><div class="mc-meta">American · Trending</div></div>
      <div class="mini-card"><div class="emoji">🍜</div><div class="mc-title">Golden Ramen House</div><div class="stars">★★★★★</div><div class="mc-meta">Asian · Staff Pick</div></div>
    </div>
  </div>
</section>

<div class="page-wrap">
  <div class="sec-header fade"><p class="sec-label">Fresh Off the Plate</p><h2 class="sec-title">Latest <span>Food Reviews</span></h2></div>
  <div class="cats fade">
    <button class="cat active">All</button>
    <button class="cat">🍕 Pizza</button>
    <button class="cat">🍔 Burgers</button>
    <button class="cat">🍜 Asian</button>
    <button class="cat">🍰 Desserts</button>
    <button class="cat">🥩 BBQ</button>
  </div>
  <section id="reviews">
    <div class="review-grid">
      <div class="review-card fade">
        <div class="rc-img">🍕</div>
        <div class="rc-body">
          <div class="rc-cat c-pizza">Pizza</div>
          <h3>Napoli Pizza Co.</h3>
          <div class="rc-meta"><span class="stars">★★★★★</span><span class="rc-score">9.5 / 10</span></div>
          <p>Wood-fired perfection. Crispy crust, fresh buffalo mozzarella, tangy San Marzano tomatoes.</p>
          <div class="rc-footer"><span class="rc-author">By AsimKhan · 2 days ago</span><a href="#" class="rc-link">Read More →</a></div>
        </div>
      </div>
      <div class="review-card fade">
        <div class="rc-img">🍔</div>
        <div class="rc-body">
          <div class="rc-cat c-burger">Burgers</div>
          <h3>Smash Bros Burger</h3>
          <div class="rc-meta"><span class="stars">★★★★☆</span><span class="rc-score">8.8 / 10</span></div>
          <p>Double smash patty with caramelized onions and secret sauce. Crispy edges, juicy inside.</p>
          <div class="rc-footer"><span class="rc-author">By FoodieRaj · 3 days ago</span><a href="#" class="rc-link">Read More →</a></div>
        </div>
      </div>
      <div class="review-card fade">
        <div class="rc-img">🍜</div>
        <div class="rc-body">
          <div class="rc-cat c-asian">Asian</div>
          <h3>Golden Ramen House</h3>
          <div class="rc-meta"><span class="stars">★★★★★</span><span class="rc-score">9.2 / 10</span></div>
          <p>18-hour tonkotsu broth, perfectly chewy noodles, soft egg, and chashu pork.</p>
          <div class="rc-footer"><span class="rc-author">By NoodleLover · 5 days ago</span><a href="#" class="rc-link">Read More →</a></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ADSTERRA MID BANNER -->
  <div class="ad-mid"><div class="ad-zone"><span>📢</span><!-- PASTE YOUR ADSTERRA 970x90 CODE HERE -->Adsterra Ad — 970x90</div></div>

  <div class="content-sidebar">
    <div>
      <div class="review-grid">
        <div class="review-card fade">
          <div class="rc-img">🍰</div>
          <div class="rc-body">
            <div class="rc-cat c-dessert">Desserts</div>
            <h3>Sweet Dreams Bakery</h3>
            <div class="rc-meta"><span class="stars">★★★★★</span><span class="rc-score">9.7 / 10</span></div>
            <p>Croissants that shatter at the touch. Best pastry in town, hands down.</p>
            <div class="rc-footer"><span class="rc-author">By SweetTooth · 1 week ago</span><a href="#" class="rc-link">Read More →</a></div>
          </div>
        </div>
        <div class="review-card fade">
          <div class="rc-img">🥩</div>
          <div class="rc-body">
            <div class="rc-cat c-bbq">BBQ</div>
            <h3>Smokehouse Kings</h3>
            <div class="rc-meta"><span class="stars">★★★★☆</span><span class="rc-score">8.6 / 10</span></div>
            <p>Slow-smoked brisket with perfect bark and fall-off-the-bone ribs.</p>
            <div class="rc-footer"><span class="rc-author">By GrillMaster · 1 week ago</span><a href="#" class="rc-link">Read More →</a></div>
          </div>
        </div>
        <div class="review-card fade">
          <div class="rc-img">🍝</div>
          <div class="rc-body">
            <div class="rc-cat c-italian">Italian</div>
            <h3>La Trattoria Roma</h3>
            <div class="rc-meta"><span class="stars">★★★★★</span><span class="rc-score">9.4 / 10</span></div>
            <p>Silky cacio e pepe and tiramisu to die for. Family-run gem serving Rome in every bite.</p>
            <div class="rc-footer"><span class="rc-author">By PastaQueen · 2 weeks ago</span><a href="#" class="rc-link">Read More →</a></div>
          </div>
        </div>
      </div>
    </div>
    <aside class="sidebar" id="top">
      <div class="sidebar-box fade">
        <div class="sb-title">🏆 Top Rated</div>
        <div class="top-item"><div class="top-num">01</div><div class="top-info"><div class="ti-name">Sweet Dreams Bakery</div><div class="ti-score">⭐ 9.7 · Desserts</div></div></div>
        <div class="top-item"><div class="top-num">02</div><div class="top-info"><div class="ti-name">Napoli Pizza Co.</div><div class="ti-score">⭐ 9.5 · Pizza</div></div></div>
        <div class="top-item"><div class="top-num">03</div><div class="top-info"><div class="ti-name">La Trattoria Roma</div><div class="ti-score">⭐ 9.4 · Italian</div></div></div>
        <div class="top-item"><div class="top-num">04</div><div class="top-info"><div class="ti-name">Golden Ramen House</div><div class="ti-score">⭐ 9.2 · Asian</div></div></div>
        <div class="top-item"><div class="top-num">05</div><div class="top-info"><div class="ti-name">Smash Bros Burger</div><div class="ti-score">⭐ 8.8 · Burgers</div></div></div>
      </div>
      <!-- ADSTERRA SIDEBAR 300x250 -->
      <div class="ad-zone" style="height:250px"><span>📢</span><!-- PASTE YOUR ADSTERRA 300x250 CODE HERE -->Adsterra Ad — 300x250</div>
    </aside>
  </div>

  <div class="newsletter fade" id="contact">
    <h2>🍴 Never Miss a Review</h2>
    <p>Get the freshest food reviews delivered to your inbox every week.</p>
    <div class="nl-form">
      <input type="email" placeholder="Your email address"/>
      <button class="btn btn-primary">Subscribe</button>
    </div>
  </div>

  <!-- ADSTERRA FOOTER BANNER -->
  <div class="ad-mid" style="margin-bottom:2rem"><div class="ad-zone"><span>📢</span><!-- PASTE YOUR ADSTERRA FOOTER CODE HERE -->Adsterra Ad — Footer</div></div>
</div>

<footer>
  <div class="footer-logo">🍽️ TasteBurst</div>
  <p>© 2026 TasteBurst. All rights reserved.</p>
  <div class="footer-links"><a href="#">About</a><a href="#">Privacy</a><a href="#">Advertise</a><a href="#">Contact</a></div>
</footer>
<script src="script.js"><\/script>
</body>
</html>`;

const STYLE_CSS = `/* TasteBurst - style.css */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#0F0800;--card:#1C1008;--orange:#FF6B00;--red:#FF3131;--yellow:#FFD60A;--white:#FFF5E4;--muted:#9C8878;--border:rgba(255,107,0,.2);}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--white);font-family:'Poppins',sans-serif;overflow-x:hidden}
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:var(--orange);border-radius:3px}
.ad-zone{background:rgba(255,107,0,.06);border:1.5px dashed rgba(255,107,0,.3);border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;color:var(--muted);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;gap:.4rem;}
nav{position:fixed;top:0;width:100%;z-index:100;background:rgba(15,8,0,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;padding:1rem 3rem;}
.logo{font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:900;background:linear-gradient(90deg,var(--orange),var(--yellow));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
nav ul{list-style:none;display:flex;gap:2rem}
nav a{color:var(--muted);text-decoration:none;font-size:.88rem;transition:color .3s}nav a:hover{color:var(--orange)}
.nav-cta{background:linear-gradient(135deg,var(--orange),var(--red));color:#fff!important;padding:.4rem 1.2rem;border-radius:100px;font-weight:600;}
.ad-top{margin-top:72px;width:100%;max-width:728px;height:90px;margin-left:auto;margin-right:auto;display:flex;align-items:center;justify-content:center;}
.ad-top .ad-zone{width:100%;height:90px}
#hero{min-height:88vh;display:flex;align-items:center;padding:4rem 3rem;position:relative;overflow:hidden;}
.hero-bg{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse 60% 70% at 70% 50%,rgba(255,107,0,.18) 0%,transparent 70%),radial-gradient(ellipse 40% 50% at 20% 80%,rgba(255,49,49,.12) 0%,transparent 60%);}
.hero-inner{position:relative;z-index:1;width:100%;display:flex;justify-content:space-between;align-items:center;gap:2rem;}
.hero-text{max-width:560px}
.hero-badge{display:inline-flex;align-items:center;gap:.5rem;background:rgba(255,107,0,.15);border:1px solid rgba(255,107,0,.4);border-radius:100px;padding:.3rem 1rem;font-size:.78rem;color:var(--orange);font-weight:600;margin-bottom:1.5rem;}
h1{font-family:'Playfair Display',serif;font-size:clamp(2.5rem,6vw,4.5rem);line-height:1.1;font-weight:900;margin-bottom:1.2rem;}
h1 em{font-style:normal;background:linear-gradient(135deg,var(--orange),var(--yellow));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.hero-sub{color:var(--muted);font-size:1rem;line-height:1.8;margin-bottom:2rem}
.hero-btns{display:flex;gap:1rem;flex-wrap:wrap}
.btn{padding:.7rem 1.8rem;border-radius:100px;font-family:'Poppins',sans-serif;font-size:.88rem;font-weight:600;cursor:pointer;text-decoration:none;display:inline-block;transition:transform .2s,box-shadow .2s;border:none;}
.btn-primary{background:linear-gradient(135deg,var(--orange),var(--red));color:#fff;box-shadow:0 0 20px rgba(255,107,0,.4);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 0 30px rgba(255,107,0,.6)}
.btn-ghost{background:transparent;border:1.5px solid var(--orange);color:var(--orange)}
.btn-ghost:hover{background:rgba(255,107,0,.1);transform:translateY(-2px)}
.hero-stats{display:flex;gap:2.5rem;margin-top:2.5rem;padding-top:2rem;border-top:1px solid var(--border);}
.stat-n{font-family:'Playfair Display',serif;font-size:2rem;font-weight:900;background:linear-gradient(135deg,var(--yellow),var(--orange));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.stat-l{font-size:.75rem;color:var(--muted);margin-top:.1rem}
.hero-cards{display:flex;flex-direction:column;gap:1rem;}
.mini-card{background:rgba(28,16,8,.9);border:1px solid var(--border);border-radius:16px;padding:1rem 1.2rem;width:220px;backdrop-filter:blur(10px);transition:transform .3s;}
.mini-card:hover{transform:translateX(-5px)}
.mini-card .emoji{font-size:1.8rem;margin-bottom:.4rem}
.mini-card .mc-title{font-size:.85rem;font-weight:600;margin-bottom:.2rem}
.mini-card .mc-meta{font-size:.72rem;color:var(--muted)}
.stars{color:var(--yellow);font-size:.85rem}
.page-wrap{max-width:1200px;margin:auto;padding:0 2rem}
.sec-header{text-align:center;padding:4rem 0 2.5rem}
.sec-label{font-size:.72rem;letter-spacing:.25em;text-transform:uppercase;color:var(--orange);margin-bottom:.6rem;}
.sec-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.6rem);font-weight:900;}
.sec-title span{background:linear-gradient(90deg,var(--orange),var(--yellow));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.cats{display:flex;gap:.8rem;flex-wrap:wrap;justify-content:center;margin-bottom:3rem}
.cat{padding:.45rem 1.3rem;border-radius:100px;font-size:.82rem;font-weight:500;cursor:pointer;transition:all .2s;border:1.5px solid var(--border);color:var(--muted);background:transparent;}
.cat:hover,.cat.active{background:linear-gradient(135deg,var(--orange),var(--red));color:#fff;border-color:transparent;}
.review-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.5rem;margin-bottom:3rem;}
.review-card{background:var(--card);border:1px solid var(--border);border-radius:20px;overflow:hidden;transition:transform .25s,box-shadow .25s;}
.review-card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(255,107,0,.2)}
.rc-img{height:180px;display:flex;align-items:center;justify-content:center;font-size:4rem;background:linear-gradient(135deg,rgba(255,107,0,.15),rgba(255,49,49,.1));}
.rc-body{padding:1.3rem}
.rc-cat{font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;font-weight:600;margin-bottom:.5rem;}
.c-italian{color:#FF6B00}.c-burger{color:#FF3131}.c-dessert{color:#FFD60A}.c-asian{color:#3DFF8F}.c-bbq{color:#FF9500}.c-pizza{color:#FF2D7E}
.rc-body h3{font-family:'Playfair Display',serif;font-size:1.15rem;margin-bottom:.4rem}
.rc-meta{display:flex;align-items:center;justify-content:space-between;margin:.7rem 0;font-size:.78rem;color:var(--muted);}
.rc-score{background:linear-gradient(135deg,var(--orange),var(--yellow));-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:700;}
.rc-body p{font-size:.82rem;color:var(--muted);line-height:1.7;margin-bottom:1rem}
.rc-footer{display:flex;align-items:center;justify-content:space-between;padding-top:1rem;border-top:1px solid var(--border);}
.rc-author{font-size:.75rem;color:var(--muted)}
.rc-link{font-size:.78rem;font-weight:600;color:var(--orange);text-decoration:none;}
.rc-link:hover{color:var(--yellow)}
.ad-mid{max-width:970px;height:90px;margin:2rem auto;}.ad-mid .ad-zone{width:100%;height:90px}
.content-sidebar{display:grid;grid-template-columns:1fr 300px;gap:2rem;align-items:start;margin-bottom:4rem;}
.sidebar{display:flex;flex-direction:column;gap:1.5rem;position:sticky;top:90px}
.sidebar-box{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:1.3rem;}
.sb-title{font-family:'Playfair Display',serif;font-size:1rem;font-weight:700;margin-bottom:1rem;padding-bottom:.6rem;border-bottom:1px solid var(--border);}
.top-item{display:flex;align-items:center;gap:.8rem;padding:.6rem 0;border-bottom:1px solid rgba(255,255,255,.04);}
.top-item:last-child{border-bottom:none}
.top-num{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:900;color:var(--orange);min-width:1.5rem;}
.ti-name{font-size:.82rem;font-weight:600;margin-bottom:.15rem}.ti-score{font-size:.72rem;color:var(--muted)}
.newsletter{background:linear-gradient(135deg,rgba(255,107,0,.2),rgba(255,49,49,.15));border:1px solid rgba(255,107,0,.3);border-radius:24px;padding:3rem;text-align:center;margin:3rem 0;}
.newsletter h2{font-family:'Playfair Display',serif;font-size:1.8rem;margin-bottom:.6rem}
.newsletter p{color:var(--muted);margin-bottom:1.5rem}
.nl-form{display:flex;gap:.8rem;max-width:440px;margin:auto}
.nl-form input{flex:1;padding:.75rem 1.2rem;border-radius:100px;background:rgba(255,255,255,.07);border:1.5px solid var(--border);color:var(--white);font-family:'Poppins',sans-serif;font-size:.88rem;outline:none;}
.nl-form input:focus{border-color:var(--orange)}.nl-form input::placeholder{color:var(--muted)}
footer{border-top:1px solid var(--border);padding:2.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;}
.footer-logo{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:900;background:linear-gradient(90deg,var(--orange),var(--yellow));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
footer p{font-size:.78rem;color:var(--muted)}
.footer-links{display:flex;gap:1.5rem}.footer-links a{font-size:.78rem;color:var(--muted);text-decoration:none;}.footer-links a:hover{color:var(--orange)}
.fade{opacity:0;transform:translateY(24px);transition:opacity .6s,transform .6s}.fade.on{opacity:1;transform:none}
@media(max-width:900px){.hero-cards{display:none}.content-sidebar{grid-template-columns:1fr}nav ul{display:none}}`;

const SCRIPT_JS = `// TasteBurst - script.js

// Fade-in on scroll
const fades = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.08 });
fades.forEach(el => observer.observe(el));

// Category filter
document.querySelectorAll('.cat').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Newsletter
const nlBtn = document.querySelector('.nl-form .btn');
if (nlBtn) {
  nlBtn.addEventListener('click', () => {
    const input = document.querySelector('.nl-form input');
    if (input && input.value) {
      alert('Subscribed! Thank you 🎉');
      input.value = '';
    } else {
      alert('Please enter your email address.');
    }
  });
}`;

const README_MD = `# TasteBurst — Food Review Website

## Files Included
- index.html   Main HTML page
- style.css    All styles & layout
- script.js    Scroll animations & interactions
- images/      Put your food images here
- README.md    This file

## Adsterra Ad Zones
Search "PASTE YOUR ADSTERRA" in index.html to find 4 ad spots:
1. Top Banner    (728x90)
2. Mid Banner    (970x90)
3. Sidebar       (300x250)
4. Footer Banner

## How to Run
Open index.html in any browser. No server needed!

Built by AsimKhan — 2026`;

export default function ZipGenerator() {
  const [status, setStatus] = useState("⏳ ZIP tayaar ho rahi hai...");
  const [ready, setReady] = useState(false);
  const [zipUrl, setZipUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    generateZip();
  }, []);

  async function generateZip() {
    try {
      setStatus("📦 Files pack ho rahi hain...");
      setProgress(20);

      const { default: JSZip } = await import("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js");
      const zip = new JSZip();

      setProgress(40);
      zip.file("index.html", INDEX_HTML);
      setProgress(55);
      zip.file("style.css", STYLE_CSS);
      setProgress(65);
      zip.file("script.js", SCRIPT_JS);
      setProgress(75);
      zip.file("README.md", README_MD);
      zip.folder("images");
      setProgress(85);

      setStatus("🔧 ZIP compress ho rahi hai...");
      const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" });
      const url = URL.createObjectURL(blob);

      setProgress(100);
      setZipUrl(url);
      setReady(true);
      setStatus("✅ ZIP tayaar hai! Download karein.");
    } catch (err) {
      setStatus("❌ Error: " + err.message);
    }
  }

  const files = [
    { name: "index.html", size: "~8 KB", icon: "🌐" },
    { name: "style.css",  size: "~5 KB", icon: "🎨" },
    { name: "script.js",  size: "~1 KB", icon: "⚡" },
    { name: "images/",    size: "folder", icon: "🖼️" },
    { name: "README.md",  size: "~1 KB", icon: "📄" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0F0800",
      color: "#FFF5E4",
      fontFamily: "'Segoe UI', sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
    }}>
      <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>

        {/* Logo */}
        <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🍽️</div>
        <h1 style={{
          fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.3rem",
          background: "linear-gradient(90deg,#FF6B00,#FFD60A)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>TasteBurst</h1>
        <p style={{ color: "#9C8878", fontSize: "0.9rem", marginBottom: "2rem" }}>
          Food Review Website — ZIP Export
        </p>

        {/* Progress bar */}
        <div style={{
          background: "rgba(255,107,0,.15)", borderRadius: 100,
          height: 8, marginBottom: "1.5rem", overflow: "hidden",
        }}>
          <div style={{
            height: "100%", borderRadius: 100,
            background: "linear-gradient(90deg,#FF6B00,#FFD60A)",
            width: `${progress}%`,
            transition: "width 0.5s ease",
          }} />
        </div>

        {/* Status */}
        <p style={{ fontSize: "1rem", marginBottom: "1.5rem", color: ready ? "#3DFF8F" : "#FFF5E4" }}>
          {status}
        </p>

        {/* File list */}
        <div style={{
          background: "rgba(255,107,0,.06)", border: "1px solid rgba(255,107,0,.2)",
          borderRadius: 16, padding: "1.2rem", marginBottom: "1.5rem", textAlign: "left",
        }}>
          <p style={{ fontSize: ".72rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#FF6B00", marginBottom: ".8rem" }}>
            📂 Files Included
          </p>
          {files.map(f => (
            <div key={f.name} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: ".4rem 0", borderBottom: "1px solid rgba(255,255,255,.05)",
              fontSize: ".85rem",
            }}>
              <span>{f.icon} {f.name}</span>
              <span style={{ color: "#9C8878", fontSize: ".75rem" }}>{f.size}</span>
            </div>
          ))}
        </div>

        {/* Download button */}
        {ready && zipUrl ? (
          <a
            href={zipUrl}
            download="tasteburst-website.zip"
            style={{
              display: "inline-block", padding: ".85rem 2.5rem",
              background: "linear-gradient(135deg,#FF6B00,#FF3131)",
              color: "#fff", borderRadius: 100, fontWeight: 700,
              fontSize: "1rem", textDecoration: "none",
              boxShadow: "0 0 25px rgba(255,107,0,.5)",
            }}
          >
            ⬇️ Download ZIP
          </a>
        ) : (
          <div style={{
            width: 48, height: 48, margin: "auto",
            border: "4px solid rgba(255,107,0,.2)", borderTopColor: "#FF6B00",
            borderRadius: "50%", animation: "spin 0.8s linear infinite",
          }} />
        )}

        <p style={{ color: "#9C8878", fontSize: ".75rem", marginTop: "1rem" }}>
          tasteburst-website.zip · 4 files + images folder
        </p>

        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}
