# IMI Academy - XR & AI Showroom

Showroom interattivo per visualizzare modelli 3D creati dagli studenti durante il corso di **XR e AI nella creazione di contenuti** presso IMI Academy di Giavera del Montello.

## 🚀 Funzionalità

- **Selezione modelli**: Griglia interattiva con anteprime 3D di tutti i modelli
- **Visualizzazione AR**: Supporto completo per realtà aumentata su dispositivi compatibili
- **Design responsive**: Ottimizzato per desktop, tablet e smartphone
- **QR Code ready**: Perfetto per la condivisione tramite QR code

## 📋 Requisiti

- Un server web locale o hosting (GitHub Pages, Netlify, Vercel, ecc.)
- Browser moderno con supporto WebGL
- Per AR: dispositivo mobile con supporto ARCore (Android) o ARKit (iOS)

## 🛠️ Setup Iniziale

1. **Genera il file models.json** (prima volta o dopo aver aggiunto nuovi modelli):
   ```bash
   node generate-models.js
   ```

2. **Avvia un server web locale** (vedi sezione "Test Locale" sotto)

## 🛠️ Test Locale

**IMPORTANTE**: I modelli 3D non funzionano aprendo il file direttamente (file://) a causa delle restrizioni CORS. Devi usare un server web locale.

### Opzione 1: Python (consigliato)
```bash
# Python 3
python -m http.server 8000

# Poi apri nel browser: http://localhost:8000
```

### Opzione 2: Node.js (http-server)
```bash
# Installa http-server globalmente
npm install -g http-server

# Avvia il server
http-server -p 8000

# Poi apri nel browser: http://localhost:8000
```

### Opzione 3: VS Code Live Server
1. Installa l'estensione "Live Server" in VS Code
2. Clicca destro su `index.html` → "Open with Live Server"

## 🌐 Deploy su GitHub Pages

1. Crea un repository GitHub
2. Carica tutti i file (index.html, viewer.html, e tutti i file .glb/.usdz)
3. Vai su Settings → Pages
4. Seleziona il branch principale e la cartella root
5. Il sito sarà disponibile su `https://tuousername.github.io/nome-repo/`

**Nota**: Su GitHub Pages funziona perfettamente perché i file sono serviti via HTTPS, risolvendo i problemi CORS.

## 📁 Struttura File

```
ModelViewer/
├── index.html          # Pagina principale con selezione modelli
├── viewer.html         # Pagina di visualizzazione AR
├── modelli/
│   ├── glb/           # Cartella per i modelli .glb
│   │   ├── ScarponeMoonBoot.glb
│   │   ├── ScarpaImy.glb
│   │   ├── ScarpaProva.glb
│   │   └── Model.glb
│   └── usdz/          # Cartella per i modelli .usdz (iOS)
│       └── Model.usdz
└── README.md
```

**Nota**: I modelli devono essere inseriti nelle rispettive cartelle:
- File `.glb` → `modelli/glb/`
- File `.usdz` → `modelli/usdz/`

## 🎨 Personalizzazione - Aggiunta Automatica Modelli

I modelli vengono rilevati **automaticamente** dalle cartelle! Non serve modificare il codice.

### Come aggiungere nuovi modelli:

1. **Carica i file nelle cartelle**:
   - File `.glb` → nella cartella `modelli/glb/`
   - File `.usdz` (opzionale, solo per iOS) → nella cartella `modelli/usdz/`

2. **Genera il file models.json**:
   ```bash
   node generate-models.js
   ```

3. **Ricarica la pagina** - i nuovi modelli appariranno automaticamente!

### Convenzioni per i nomi file:

- I file `.glb` e `.usdz` devono avere lo **stesso nome** (senza estensione) per essere associati
- Esempio: `MioModello.glb` e `MioModello.usdz` → verranno associati automaticamente
- Il nome del modello viene generato automaticamente dal nome del file (es: `MioModello.glb` → "Mio Modello")

## 📱 Uso con QR Code

1. Deploya il sito su GitHub Pages o altro hosting
2. Genera un QR code che punta all'URL del sito
3. Gli studenti possono scansionare il QR code e scegliere quale modello visualizzare

## 🎓 Corso

**IMI Academy - Giavera del Montello**  
Modulo: XR e AI nella creazione di contenuti

---

Made with ❤️ for IMI Academy
