import { useState } from "react";
import { Instagram, ChevronDown, Check, Menu, X } from "lucide-react";

// ============================================================
// ⚡ CONFIGURA ESTO ANTES DE SUBIR
// ============================================================
const WHATSAPP_NUMBER = "5210000000000"; // 👈 CAMBIA por tu número con código de país (52 para México), sin espacios ni guiones
// Ejemplo: "5214771234567"
// ============================================================

const N = "#0F0F3D", CR = "#F5F0E6", G = "#B0822C", CB = "#0040FF", GL = "#C4A472";

const menuData = {
  cocteleria: [
    { name: "MEZCALITA", spirit: "Mezcal 400 Conejos", price: "$85", flavors: ["Jamaica", "Piña Asada", "Maracuyá", "Mango", "Fresa", "Frutos Rojos"] },
    { name: "MARGARITA", spirit: "Tequila Blanco", price: "$85", flavors: ["Tamarindo", "Maracuyá", "Mango", "Durazno", "Piña Asada"] },
    { name: "GIN TONIC", spirit: "Ginebra", price: "$85", flavors: ["Frutos Rojos", "Menta y Albahaca", "Lavanda"] }
  ],
  especiales: [
    { name: "CARAJILLO", notes: "Licor 43 · Espresso", price: "$90" },
    { name: "ESPRESSO MARTINI", notes: "Vodka · Licor 43 · Espresso", price: "$100" },
    { name: "APEROL SPRITZ", notes: "", price: "$120" },
    { name: "MIMOSA", notes: "", price: "$85" },
    { name: "CANTARITOS", notes: "", price: "$80" },
    { name: "MOJITO", notes: "", price: "$80" }
  ],
  cafeteria: [
    { name: "MATCHA", price: "$50" }, { name: "TARO", price: "$50" }, { name: "CHAI", price: "$50" },
    { name: "LATTE CARMELO", price: "$50" }, { name: "LATTE VAINILLA", price: "$50" },
    { name: "LATTE CHOCOLATE BLANCO", price: "$50" }, { name: "CAFÉ", price: "$55" },
    { name: "MATCHA CON AGUA DE COCO", price: "$55" }
  ]
};

const pkgs = [
  { n: "01", name: "PAQUETE 1", tag: "Clásico", note: "Escoge tu cantidad de cada bebida", items: ["Mezcalita", "Carajillo", "Margarita"] },
  { n: "02", name: "PAQUETE 2", tag: "Mix", note: "Combina café y cócteles", items: ["2 opciones Cafetería", "2 opciones Coctelería"] },
  { n: "03", name: "PAQUETE 3 · BRUNCH", tag: "Brunch", note: "Perfecto para desayunos y brunches", items: ["Mimosa", "2 opciones a elegir", "Café"] },
  { n: "04", name: "PAQUETE 4", tag: "Sin Alcohol", note: "Toda la experiencia sin alcohol", items: ["3 opciones Cafetería"] }
];

const expItems = [
  "Barra móvil profesional",
  "Staff capacitado y presentable",
  "Presentación premium en lata",
  "Hielo y herramientas de mixología",
  "Insumos y mezcladores incluidos",
  "Montaje y desmontaje completo",
  "Menú personalizado a tu evento"
];

function Can({ color, acc, cls }) {
  return (
    <div className={cls} style={{ width: 76 }}>
      <svg viewBox="0 0 76 136" width="76" height="136">
        <defs>
          <linearGradient id={`g-${cls}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity=".55" />
            <stop offset="50%" stopColor={acc} stopOpacity=".85" />
            <stop offset="100%" stopColor={color} stopOpacity=".5" />
          </linearGradient>
        </defs>
        <ellipse cx="38" cy="17" rx="28" ry="6.5" fill="#bbb" opacity=".45" />
        <rect x="32" y="11" width="12" height="4" rx="2" fill="#aaa" opacity=".65" />
        <rect x="10" y="17" width="56" height="100" rx="6" fill={`url(#g-${cls})`} />
        <rect x="10" y="17" width="56" height="100" rx="6" fill={color} opacity=".2" />
        <rect x="16" y="21" width="6" height="90" rx="3" fill="white" opacity=".1" />
        <circle cx="22" cy="62" r="1.8" fill="white" opacity=".32" />
        <circle cx="25" cy="78" r="1.2" fill="white" opacity=".25" />
        <circle cx="55" cy="70" r="1.6" fill="white" opacity=".28" />
        <text x="38" y="80" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="700" fontSize="14" fill="#0F0F3D" opacity=".8">BI</text>
        <text x="38" y="96" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="700" fontSize="14" fill="#0F0F3D" opacity=".8">TO</text>
        <ellipse cx="38" cy="117" rx="28" ry="6.5" fill="#999" opacity=".3" />
      </svg>
    </div>
  );
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');
  .disp{font-family:'Cormorant Garamond',serif;font-weight:700;color:#F5F0E6;line-height:1.05}
  .gold{color:#B0822C}
  .slabel{font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:#B0822C;font-weight:500}
  .nav{position:sticky;top:0;z-index:100;background:rgba(15,15,61,.96);backdrop-filter:blur(14px);border-bottom:1px solid rgba(176,130,44,.18);padding:0 5%;display:flex;align-items:center;justify-content:space-between;height:64px}
  .nlogo{font-family:'Cormorant Garamond',serif;font-weight:700;font-size:28px;letter-spacing:.1em;cursor:pointer;user-select:none;color:#F5F0E6}
  .nlinks{display:flex;align-items:center;gap:30px}
  .nlink{font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#F5F0E6;opacity:.6;cursor:pointer;background:none;border:none;font-family:'Poppins',sans-serif;transition:all .2s}
  .nlink:hover{opacity:1;color:#B0822C}
  .ncta{background:#B0822C;color:#0F0F3D;border:none;font-family:'Poppins',sans-serif;font-size:10px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;padding:10px 22px;cursor:pointer;border-radius:2px;transition:all .2s}
  .ncta:hover{background:#c8962f}
  .nburg{display:none;background:none;border:none;color:#F5F0E6;cursor:pointer}
  .mmenu{display:none;position:sticky;top:64px;z-index:99;background:rgba(15,15,61,.98);border-bottom:1px solid rgba(176,130,44,.15);padding:22px 5%;flex-direction:column;gap:18px}
  .mmenu.open{display:flex}
  .hero{min-height:92vh;display:flex;align-items:center;padding:80px 5% 60px;position:relative;overflow:hidden}
  .hbg{position:absolute;top:50%;right:-8%;width:500px;height:500px;background:radial-gradient(circle,rgba(0,64,255,.07) 0%,transparent 68%);transform:translateY(-50%);pointer-events:none;border-radius:50%}
  .hbg2{position:absolute;bottom:-10%;left:-5%;width:380px;height:380px;background:radial-gradient(circle,rgba(176,130,44,.05) 0%,transparent 70%);pointer-events:none;border-radius:50%}
  .hinner{max-width:1100px;margin:0 auto;width:100%;display:flex;align-items:center;justify-content:space-between;gap:48px;flex-wrap:wrap}
  .htxt{flex:1 1 340px}
  .hcans{flex:1 1 260px;display:flex;justify-content:center;align-items:flex-end;gap:14px;min-height:270px}
  @keyframes f1{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-14px) rotate(-2deg)}}
  @keyframes f2{0%,100%{transform:translateY(-7px) rotate(2deg)}50%{transform:translateY(7px) rotate(2deg)}}
  @keyframes f3{0%,100%{transform:translateY(-4px) rotate(-1deg)}50%{transform:translateY(-18px) rotate(-1deg)}}
  .can-a{animation:f1 4s ease-in-out infinite}
  .can-b{animation:f2 3.6s ease-in-out infinite;margin-bottom:22px}
  .can-c{animation:f3 4.4s ease-in-out infinite;animation-delay:.8s}
  @keyframes fu{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
  .fu1{animation:fu .7s ease-out forwards}
  .fu2{animation:fu .7s .2s ease-out forwards;opacity:0}
  .fu3{animation:fu .7s .38s ease-out forwards;opacity:0}
  .sec{padding:80px 5%}
  .sinner{max-width:1100px;margin:0 auto}
  .divhr{height:1px;background:linear-gradient(90deg,transparent,rgba(176,130,44,.32),transparent);margin:0 5%}
  .tabs{display:flex;justify-content:center;margin-bottom:44px;flex-wrap:wrap}
  .tb{background:transparent;border:1px solid rgba(176,130,44,.25);color:#F5F0E6;font-family:'Poppins',sans-serif;font-size:10px;letter-spacing:.14em;text-transform:uppercase;padding:11px 24px;cursor:pointer;opacity:.6;transition:all .22s}
  .tb.on{background:#B0822C;border-color:#B0822C;color:#0F0F3D;opacity:1;font-weight:600}
  .tb:hover:not(.on){opacity:1;border-color:#B0822C}
  .card{background:rgba(255,255,255,.04);border:1px solid rgba(176,130,44,.17);border-radius:3px;padding:26px 22px;transition:all .28s}
  .card:hover{background:rgba(255,255,255,.07);border-color:rgba(176,130,44,.42);transform:translateY(-2px)}
  .mgrid{display:grid;gap:16px}
  .prc{color:#0040FF;font-size:21px;font-weight:600;font-family:'Cormorant Garamond',serif}
  .chip{display:inline-block;background:rgba(176,130,44,.12);border:1px solid rgba(176,130,44,.26);color:#F5F0E6;font-size:9px;letter-spacing:.07em;text-transform:uppercase;padding:4px 10px;border-radius:20px;margin:3px 2px}
  .cgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:10px}
  .pkgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(226px,1fr));gap:22px}
  .pkn{font-family:'Cormorant Garamond',serif;font-size:50px;font-weight:700;color:rgba(176,130,44,.17);line-height:1}
  .pktag{font-size:9px;letter-spacing:.2em;text-transform:uppercase;background:rgba(0,64,255,.14);color:#7A9FFF;border:1px solid rgba(0,64,255,.24);padding:3px 10px;border-radius:12px;display:inline-block;margin-bottom:10px}
  .ci{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid rgba(176,130,44,.11);font-size:14px}
  .cc{width:26px;height:26px;border-radius:50%;background:rgba(176,130,44,.12);border:1px solid rgba(176,130,44,.36);display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .fgrid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
  .fl{font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#B0822C;display:block;margin-bottom:8px}
  .fi{width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(176,130,44,.27);border-radius:3px;color:#F5F0E6;font-family:'Poppins',sans-serif;font-size:14px;padding:12px 15px;outline:none;transition:border-color .2s;-webkit-appearance:none;appearance:none}
  .fi:focus{border-color:#B0822C;background:rgba(255,255,255,.07)}
  .fi::placeholder{color:rgba(245,240,230,.28)}
  .fi option{background:#0F0F3D;color:#F5F0E6}
  .s2{grid-column:span 2}
  .cta{background:#B0822C;color:#0F0F3D;border:none;font-family:'Poppins',sans-serif;font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;padding:17px 36px;cursor:pointer;transition:all .22s;border-radius:2px}
  .cta:hover{background:#c8962f}
  .sbox{background:rgba(176,130,44,.08);border:1px solid rgba(176,130,44,.38);border-radius:4px;padding:56px 36px;text-align:center}
  .foot{border-top:1px solid rgba(176,130,44,.17);padding:30px 5%;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px}
  @media(max-width:640px){
    .nlinks{display:none}
    .nburg{display:block}
    .hcans{display:none}
    .fgrid{grid-template-columns:1fr}
    .s2{grid-column:span 1}
  }
`;

export default function App() {
  const [tab, setTab] = useState("cocteleria");
  const [mob, setMob] = useState(false);
  const [f, setF] = useState({ nombre: "", telefono: "", evento: "", fecha: "", personas: "", ciudad: "", paquete: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMob(false); };

  const send = () => {
    const txt = `¡Hola BITO! 🥂\n\n*Solicitud de cotización*\nNombre: ${f.nombre}\nWhatsApp: ${f.telefono}\nEvento: ${f.evento}\nFecha: ${f.fecha}\nPersonas: ${f.personas}\nCiudad: ${f.ciudad}\nPaquete: ${f.paquete}\nNotas: ${f.mensaje}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(txt)}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <style>{css}</style>
      <div style={{ fontFamily: "'Poppins',sans-serif", background: N, color: CR, minHeight: "100vh", overflowX: "hidden" }}>

        {/* NAV */}
        <nav className="nav">
          <div className="nlogo" onClick={() => go("hero")}>BI<span className="gold">TO</span></div>
          <div className="nlinks">
            <button className="nlink" onClick={() => go("menu")}>Menú</button>
            <button className="nlink" onClick={() => go("paquetes")}>Paquetes</button>
            <button className="nlink" onClick={() => go("experiencia")}>Experiencia</button>
            <button className="ncta" onClick={() => go("cotizar")}>Cotizar</button>
          </div>
          <button className="nburg" onClick={() => setMob(!mob)}>
            {mob ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        <div className={`mmenu${mob ? " open" : ""}`}>
          {["menu", "paquetes", "experiencia", "cotizar"].map(id => (
            <button key={id} className="nlink" onClick={() => go(id)} style={{ fontSize: 13, textAlign: "left" }}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        {/* HERO */}
        <section className="hero" id="hero">
          <div className="hbg" /><div className="hbg2" />
          <div className="hinner">
            <div className="htxt">
              <div className="slabel fu1" style={{ marginBottom: 22 }}>Guanajuato & León · México</div>
              <h1 className="disp fu1" style={{ fontSize: "clamp(72px,11vw,128px)", marginBottom: 16 }}>
                BI<br /><span className="gold">TO</span>
              </h1>
              <p className="fu2" style={{ fontSize: 10, letterSpacing: ".38em", textTransform: "uppercase", color: GL, marginBottom: 26, fontWeight: 500 }}>
                YOUR DRINK, ON THE GO
              </p>
              <p className="fu2" style={{ fontSize: 15, lineHeight: 1.8, opacity: .58, maxWidth: 370, marginBottom: 44 }}>
                Barra móvil premium para eventos. Cócteles artesanales servidos en lata, listos para disfrutar donde sea.
              </p>
              <div className="fu3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button className="cta" onClick={() => go("cotizar")} style={{ padding: "15px 32px" }}>Solicitar Cotización</button>
                <button className="tb" onClick={() => go("menu")} style={{ opacity: 1, padding: "15px 28px" }}>Ver Menú</button>
              </div>
            </div>
            <div className="hcans">
              <Can color="#E87B50" acc="#F4A66A" cls="can-a" />
              <Can color="#4DAF6A" acc="#7EC88A" cls="can-b" />
              <Can color="#B04080" acc="#D05590" cls="can-c" />
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: .3 }}>
            <span style={{ fontSize: 8, letterSpacing: ".25em", textTransform: "uppercase" }}>scroll</span>
            <ChevronDown size={13} />
          </div>
        </section>

        {/* MENÚ */}
        <section className="sec" id="menu">
          <div className="sinner">
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <div className="slabel" style={{ marginBottom: 12 }}>Nuestras bebidas</div>
              <h2 className="disp" style={{ fontSize: "clamp(40px,7vw,70px)" }}>MENÚ</h2>
            </div>
            <div className="tabs">
              {[{ k: "cocteleria", l: "Coctelería" }, { k: "especiales", l: "Especiales" }, { k: "cafeteria", l: "Sin Alcohol" }].map(t => (
                <button key={t.k} className={`tb${tab === t.k ? " on" : ""}`} onClick={() => setTab(t.k)}>{t.l}</button>
              ))}
            </div>
            {tab === "cocteleria" && (
              <div className="mgrid">
                {menuData.cocteleria.map(i => (
                  <div key={i.name} className="card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
                      <div>
                        <h3 className="disp" style={{ fontSize: 30, marginBottom: 5 }}>{i.name}</h3>
                        <span className="slabel" style={{ marginBottom: 0 }}>{i.spirit}</span>
                      </div>
                      <span className="prc">{i.price}</span>
                    </div>
                    <div>{i.flavors.map(fl => <span key={fl} className="chip">{fl}</span>)}</div>
                  </div>
                ))}
              </div>
            )}
            {tab === "especiales" && (
              <div className="mgrid">
                {menuData.especiales.map(i => (
                  <div key={i.name} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                    <div>
                      <h3 className="disp" style={{ fontSize: 26, marginBottom: i.notes ? 5 : 0 }}>{i.name}</h3>
                      {i.notes && <span style={{ fontSize: 12, color: G, opacity: .8 }}>{i.notes}</span>}
                    </div>
                    <span className="prc">{i.price}</span>
                  </div>
                ))}
              </div>
            )}
            {tab === "cafeteria" && (
              <div>
                <p style={{ textAlign: "center", fontSize: 10, opacity: .45, letterSpacing: ".14em", marginBottom: 32 }}>SIN ALCOHOL · PARA TODOS</p>
                <div className="cgrid">
                  {menuData.cafeteria.map(i => (
                    <div key={i.name} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 11, letterSpacing: ".07em", textTransform: "uppercase" }}>{i.name}</span>
                      <span className="prc" style={{ fontSize: 18 }}>{i.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="divhr" />

        {/* PAQUETES */}
        <section className="sec" id="paquetes">
          <div className="sinner">
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div className="slabel" style={{ marginBottom: 12 }}>Para tu evento</div>
              <h2 className="disp" style={{ fontSize: "clamp(40px,7vw,70px)", marginBottom: 14 }}>PAQUETES ON THE GO</h2>
              <p style={{ opacity: .5, fontSize: 14, maxWidth: 400, margin: "0 auto", lineHeight: 1.75 }}>
                Elige el paquete ideal o cuéntanos lo que necesitas y lo personalizamos.
              </p>
            </div>
            <div className="pkgrid">
              {pkgs.map((p, i) => (
                <div key={i} className="card">
                  <div className="pkn">{p.n}</div>
                  <div className="pktag">{p.tag}</div>
                  <h3 className="disp" style={{ fontSize: 18, marginBottom: 6 }}>{p.name}</h3>
                  <p style={{ fontSize: 12, opacity: .45, marginBottom: 18 }}>{p.note}</p>
                  {p.items.map((item, j) => (
                    <div key={j} className="ci">
                      <div className="cc"><Check size={11} color={G} strokeWidth={2.5} /></div>
                      <span style={{ fontSize: 14 }}>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <button className="cta" onClick={() => go("cotizar")} style={{ padding: "15px 36px" }}>Cotizar Mi Evento</button>
            </div>
          </div>
        </section>

        <div className="divhr" />

        {/* EXPERIENCIA */}
        <section className="sec" id="experiencia">
          <div className="sinner" style={{ display: "flex", gap: 80, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "1 1 280px" }}>
              <div className="slabel" style={{ marginBottom: 14 }}>¿Qué incluye?</div>
              <h2 className="disp" style={{ fontSize: "clamp(36px,5.5vw,58px)", marginBottom: 26 }}>EXPERIENCIA<br /><span className="gold">BITO</span></h2>
              <p style={{ fontStyle: "italic", opacity: .42, fontSize: 14, lineHeight: 1.85, borderLeft: `2px solid ${G}`, paddingLeft: 18 }}>
                "La experiencia que tu evento merece"
              </p>
            </div>
            <div style={{ flex: "1 1 300px" }}>
              {expItems.map((item, i) => (
                <div key={i} className="ci">
                  <div className="cc"><Check size={11} color={G} strokeWidth={2.5} /></div>
                  <span style={{ fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divhr" />

        {/* CONDICIONES */}
        <section className="sec" style={{ padding: "40px 5%" }}>
          <div className="sinner">
            <details style={{ cursor: "pointer" }}>
              <summary style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: G, opacity: .7, outline: "none", listStyle: "none", display: "flex", alignItems: "center", gap: 8 }}>
                <ChevronDown size={14} /> Condiciones de contratación
              </summary>
              <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 12 }}>
                {[
                  "Anticipo del 50% para reservar la fecha",
                  "El 50% restante se paga el día del evento, antes del inicio del servicio",
                  "Cambios de fecha con mínimo 5 días de anticipación",
                  "Espacio asignado para barra y acceso a electricidad",
                  "Anticipo no reembolsable con menos de 5 días de anticipación"
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, opacity: .65, lineHeight: 1.65 }}>
                    <span style={{ color: G, marginTop: 2, flexShrink: 0 }}>·</span>{c}
                  </div>
                ))}
              </div>
            </details>
          </div>
        </section>

        <div className="divhr" />

        {/* COTIZAR */}
        <section className="sec" id="cotizar" style={{ paddingBottom: 100 }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <div className="slabel" style={{ marginBottom: 12 }}>Estamos listos</div>
              <h2 className="disp" style={{ fontSize: "clamp(38px,7vw,66px)", marginBottom: 14 }}>
                COTIZA TU<br /><span className="gold">EVENTO</span>
              </h2>
              <p style={{ opacity: .48, fontSize: 14, lineHeight: 1.75 }}>
                Completa el formulario y te contactamos por WhatsApp en menos de 24 hrs.
              </p>
            </div>
            {sent ? (
              <div className="sbox">
                <div style={{ fontSize: 48, marginBottom: 14 }}>🥂</div>
                <h3 className="disp" style={{ fontSize: 34, marginBottom: 12 }}>¡Solicitud enviada!</h3>
                <p style={{ opacity: .55, fontSize: 14, marginBottom: 32 }}>Nos comunicaremos contigo pronto por WhatsApp.</p>
                <button className="cta" onClick={() => setSent(false)} style={{ padding: "13px 32px" }}>Nueva Solicitud</button>
              </div>
            ) : (
              <div className="fgrid">
                <div className="s2">
                  <label className="fl">Nombre completo</label>
                  <input className="fi" placeholder="Tu nombre" value={f.nombre} onChange={e => setF({ ...f, nombre: e.target.value })} />
                </div>
                <div>
                  <label className="fl">WhatsApp</label>
                  <input className="fi" placeholder="+52 000 000 0000" value={f.telefono} onChange={e => setF({ ...f, telefono: e.target.value })} />
                </div>
                <div>
                  <label className="fl">Tipo de evento</label>
                  <select className="fi" value={f.evento} onChange={e => setF({ ...f, evento: e.target.value })}>
                    <option value="">Selecciona...</option>
                    {["Boda", "XV Años", "Cumpleaños", "Corporativo", "Brunch", "Bautizo", "Otro"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="fl">Fecha del evento</label>
                  <input className="fi" type="date" value={f.fecha} onChange={e => setF({ ...f, fecha: e.target.value })} />
                </div>
                <div>
                  <label className="fl">Personas aprox.</label>
                  <select className="fi" value={f.personas} onChange={e => setF({ ...f, personas: e.target.value })}>
                    <option value="">Selecciona...</option>
                    {["Menos de 50", "50 – 100", "100 – 200", "Más de 200"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="fl">Ciudad</label>
                  <select className="fi" value={f.ciudad} onChange={e => setF({ ...f, ciudad: e.target.value })}>
                    <option value="">Selecciona...</option>
                    {["Guanajuato", "León", "San Miguel de Allende", "Irapuato", "Celaya", "Otra ciudad"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="s2">
                  <label className="fl">Paquete de interés</label>
                  <select className="fi" value={f.paquete} onChange={e => setF({ ...f, paquete: e.target.value })}>
                    <option value="">Selecciona...</option>
                    <option>Paquete 1 – Coctelería clásica</option>
                    <option>Paquete 2 – Mix café + coctelería</option>
                    <option>Paquete 3 – Brunch</option>
                    <option>Paquete 4 – Cafetería sin alcohol</option>
                    <option>No sé, quiero asesoría personalizada</option>
                  </select>
                </div>
                <div className="s2">
                  <label className="fl">Notas adicionales</label>
                  <textarea className="fi" rows={4} placeholder="Cuéntanos más sobre tu evento..." value={f.mensaje} onChange={e => setF({ ...f, mensaje: e.target.value })} style={{ resize: "vertical" }} />
                </div>
                <div className="s2">
                  <button className="cta" onClick={send} style={{ width: "100%", padding: 17 }}>
                    Enviar Solicitud por WhatsApp
                  </button>
                  <p style={{ fontSize: 9, opacity: .28, marginTop: 13, textAlign: "center", letterSpacing: ".1em" }}>
                    SE REQUIERE 50% DE ANTICIPO PARA RESERVAR FECHA · BITO SE RESERVA EL DERECHO DE SERVICIO RESPONSABLE DE ALCOHOL
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="foot">
          <div className="nlogo">BI<span className="gold">TO</span></div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, opacity: .5 }}>
            <Instagram size={14} color={G} />
            <span>@bito.onthego</span>
          </div>
          <p style={{ fontSize: 9, opacity: .25, letterSpacing: ".1em", textTransform: "uppercase", maxWidth: 280, textAlign: "right" }}>
            BITO se reserva el derecho de servicio responsable de alcohol
          </p>
        </footer>
      </div>
    </>
  );
}
