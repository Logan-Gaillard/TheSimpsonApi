# The Simpsons API

## 📋 Introduction

Bienvenue dans ce cours sur **The Simpsons API** ! 

Au cours de ce module, vous apprendrez à construire une application complète qui intègre des technologies modernes de développement web et mobile. Ce projet pratique couvre l'utilisation d'un framework frontend réactif, de bibliothèques UI performantes et la capacité de déployer sur plusieurs plateformes.

Nous mettrons l'accent sur des concepts clés comme :
- La gestion du **localStorage** pour la persistance des données
- Les requêtes **GET/POST** pour communiquer avec une API externe
- L'intégration avec l'API : https://thesimpsonsapi.com/

## 🛠️ Outils Utilisés

- **[ReactJS](https://react.dev/)** - Bibliothèque JavaScript pour construire des interfaces utilisateur interactives
- **[TypeScript](https://www.typescriptlang.org/)** - Superset typé de JavaScript pour plus de sécurité
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitaire pour un styling rapide et responsive
- **[HeroUI](https://heroui.com/)** - Composants UI modernes et stylisés basés sur React
- **[Capacitor](https://capacitorjs.com/)** - Framework pour construire des applications mobiles natives avec du code web
- **[Vite](https://vitejs.dev/)** - Build tool moderne et performant pour le développement frontend

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- **Node.js** (version 16.x ou supérieure) - [Télécharger](https://nodejs.org/)
- **Android Studio** - Requis pour le développement Android
- **Git** - Pour cloner le repository (en cas de soucis)

## 🚀 Guide d'Installation

Ce guide vous accompagne dans la création complète du projet à partir d'un dossier vide, en installant et configurant chaque outil un par un.

### Prérequis avant de commencer

Assurez-vous que **Node.js** et **npm** sont installés :

```bash
node --version
npm --version
```

### Étape 1️⃣ : Créer un projet Vite avec React et TypeScript

Vite est un build tool moderne qui permet de créer des projets très rapidement. Créez un nouveau projet :

```bash
npm create vite@latest thesimpsonapi -- --template react-swc-ts
```

Voici ce que vous devez répondre aux questions :
`Use rolldown-vite (Experimental)?:` ❌ NON
`Install with npm and start now?` ✅ OUI

Vous devriez voir le serveur démarrer sur `http://localhost:5173`.  
Vous pouvez l'arrêtez avec `Ctrl+C`.

### Étape 2️⃣ : Installer et configurer Tailwind CSS v3

**Tailwind CSS** est un framework CSS utilitaire qui permet de styliser rapidement.

⚠️ **Important** : Nous installons Tailwind v3 car HeroUI n'est pas encore compatible avec Tailwind v4.

Installez Tailwind CSS v3 et ses dépendances :

```bash
npm install -D tailwindcss@^3 postcss autoprefixer
```

Initialisez la configuration Tailwind :

```bash
npx tailwindcss init -p
```

Cela crée deux fichiers : `tailwind.config.js` et `postcss.config.js`.

Supprimez tout le contenu par défaut dans `src/index.css` et remplacez-le par :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Étape 3️⃣ : Installer et configurer HeroUI

**HeroUI** fournit des composants React modernes et stylisés.

Installez HeroUI :

```bash
npm install @heroui/react framer-motion
```

Modifiez `tailwind.config.js` pour configurer les chemins des fichiers :

```javascript
/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
}
```

Mettez à jour `src/main.tsx` pour envelopper votre application avec le provider HeroUI :

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider } from '@heroui/react'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </React.StrictMode>,
)
```

Maintenant vous pouvez utiliser les composants HeroUI dans votre application :

```tsx
import { Button } from "@heroui/react";

export default function MyComponent() {
  return <Button color="primary">Click me</Button>;
}
```

### Étape 4️⃣ : Installer et configurer React Router

**React Router** permet de gérer la navigation entre les pages.

Installez React Router :

```bash
npm install react-router
```

Modifier le fichier `src/App.tsx` pour mettre en place et configurer les routes :

```typescript
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/page2" element={<div>Je suis une page 2</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

### Étape 5️⃣ : Créer les pages de l'application

Créez le dossier `pages` dans le répertoire `/src` :

Ensuite, nous allons créer notre première page :  
Créez `src/pages/Accueil.tsx` :

```tsx
export const Accueil = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600">
      <h1 className="text-4xl font-bold text-white">Bienvenue sur The Simpsons API</h1>
    </div>
  );
}
```

Modifier le Routage dans `App.tsx` pour appliquer la page créé :

```typescript
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  )
}
```

### Étape 6️⃣ : Installer et configurer Capacitor

Tout d'abord il faudra compiler votre projet, pour cela nous allons faire cette commande :
```bash
npm run build
```

Si vous voulez déployer sur mobile, installez Capacitor :

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

Initialisez Capacitor :

```bash
npx cap init NOMAPP com.NOMAPP.PRENOM --web-dir=dist
```

Synchroniser le build avec capacitor :
```bash
npx cap sync
```

Ajoutez la plateforme Android et copier la synchronisation:

```bash
npx cap add android
npx cap copy
```

#### Compiler l'application et tester sur Android

Pour pouvoir tester votre application sur Android, tout d'abord, **ouvrez Android Studio** et **ouvrez un projet à partir d'un projet exitant** en ciblant le dossier `/android` à la racine créé par Capacitor.

Android Studio analysera le projet Android et téléchargera tout le neccessaire.

Cela peut prendre un certains temps en fonction de votre connexion internet.

Une fois l'initialisation par Android Studio fait sans soucis, nous n'avez plus qu'a télécharger un émulateur Android ou relier votre téléphone pour installer et afficher votre application.

**PS : APRÈS TOUT CHANGEMENT, VOUS DEVRIEZ A CHAQUES FOIS BUILD ET SYNCHRONISER LE PROJET**, sinon l'application restera à la dernière version synchronisé !

Je vous remet les commandes :
```bash
npx npm run build
npx cap sync
```

### ✅ Tout est bon !

Vous avez enfin initié votre projet.
Pour plus d'informations voici quelques notions ci-dessous.

### 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement avec hot reload |
| `npm run build` | Compile et crée une version de production |
| `npm run preview` | Prévisualise la build de production |
| `npm run lint` | Vérifie la qualité du code |

## 📁 Structure du Projet

```
TheSimpsonApi/
├── src/                  # Code source
│   ├── components/       # Composants React réutilisables
│   ├── pages/            # Pages de l'application
│   ├── assets/           # Ressources statiques
│   ├── App.tsx           # Composant principal
│   └── main.tsx          # Point d'entrée
├── public/               # Fichiers publics
├── android/              # Code Android natif (Capacitor)
├── capacitor.config.ts   # Configuration Capacitor
├── vite.config.ts        # Configuration Vite
├── tailwind.config.ts    # Configuration Tailwind CSS
└── package.json          # Dépendances et scripts
```

## 🤝 Contribuer

Les contributions sont bienvenues ! Veuillez ouvrir une issue ou une pull request pour toute amélioration.

## 📄 Licence

Ce projet est fourni à titre de démonstration éducative.