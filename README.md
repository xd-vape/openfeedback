# OpenFeedback

OpenFeedback ist eine moderne Feedback-Plattform, mit der Nutzer Feedback, Ideen und Verbesserungsvorschläge einfach einreichen können.

Das Projekt basiert auf **Next.js**, **Prisma**, **PostgreSQL** und **Better Auth**.

## Überblick

OpenFeedback soll dabei helfen, Feedback strukturiert zu sammeln, zu verwalten und später auszuwerten.

Die Anwendung kann zum Beispiel für folgende Zwecke genutzt werden:

- Produktfeedback
- Webseiten-Feedback
- Feature Requests
- Bug Reports
- Interne Tools
- SaaS-Projekte
- Community-Plattformen

## Tech Stack

- **Next.js** – React Framework für Frontend, Routing und Backend-Funktionen
- **React** – Bibliothek für Benutzeroberflächen
- **TypeScript** – typsichere Entwicklung
- **Prisma** – ORM für Datenbankzugriffe
- **PostgreSQL** – relationale Datenbank
- **Better Auth** – Authentifizierung und Session-Management
- **Tailwind CSS** – Utility-first CSS Framework
- **shadcn/ui** – moderne UI-Komponenten
- **Radix UI** – barrierearme UI-Primitives
- **Zod** – Validierung von Eingaben
- **React Hook Form** – Formularverwaltung

## Funktionen

- Feedback einreichen
- Feedback verwalten
- Nutzerregistrierung und Login
- Authentifizierung mit Better Auth
- Speicherung der Daten in PostgreSQL
- Datenbankzugriff über Prisma
- Moderne Benutzeroberfläche mit Tailwind CSS und shadcn/ui
- Formularvalidierung mit Zod
- Erweiterbare Projektstruktur

## Voraussetzungen

Bevor du das Projekt startest, solltest du Folgendes installiert haben:

- Node.js
- npm, pnpm, yarn oder bun
- PostgreSQL
- Git

## Installation

Repository klonen:

```bash
git clone https://github.com/xd-vape/openfeedback.git
cd openfeedback
```

Abhängigkeiten installieren:

```bash
npm install
```

## Umgebungsvariablen

Erstelle im Hauptverzeichnis eine Datei mit dem Namen `.env`.

Beispiel:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/openfeedback"

BETTER_AUTH_SECRET="DEIN_SECRET"
BETTER_AUTH_URL="http://localhost:3000"
```

Passe die Werte an deine lokale Umgebung an.

### DATABASE_URL

Die `DATABASE_URL` verbindet Prisma mit deiner PostgreSQL-Datenbank.

Beispiel-Aufbau:

```txt
postgresql://BENUTZERNAME:PASSWORT@HOST:PORT/DATENBANKNAME
```

### BETTER_AUTH_SECRET

`BETTER_AUTH_SECRET` wird von Better Auth verwendet, um sicherheitsrelevante Daten zu signieren.

Für die lokale Entwicklung kannst du einen eigenen zufälligen Wert verwenden.

### BETTER_AUTH_URL

`BETTER_AUTH_URL` enthält die Basis-URL deiner Anwendung.

Lokal ist das meistens:

```txt
http://localhost:3000
```

In Produktion muss hier deine echte Domain eingetragen werden.

## Datenbank einrichten

Prisma Client generieren:

```bash
npx prisma generate
```

Migrationen ausführen:

```bash
npx prisma migrate dev
```

Optional kannst du Prisma Studio öffnen:

```bash
npx prisma studio
```

Damit kannst du deine Datenbank visuell ansehen und bearbeiten.

## Entwicklungsserver starten

```bash
npm run dev
```

Die Anwendung ist danach erreichbar unter:

```txt
http://localhost:3000
```

## Verfügbare Scripts

### Entwicklungsserver starten

```bash
npm run dev
```

Startet die Anwendung im Entwicklungsmodus.

### Produktions-Build erstellen

```bash
npm run build
```

Erstellt eine optimierte Produktionsversion der Anwendung.

### Produktionsserver starten

```bash
npm run start
```

Startet die zuvor gebaute Produktionsversion.

### Linting ausführen

```bash
npm run lint
```

Prüft den Code auf mögliche Fehler und Stilprobleme.

## Projektstruktur

Eine mögliche Projektstruktur sieht so aus:

```txt
openfeedback/
├── app/
│   ├── api/
│   ├── auth/
│   ├── dashboard/
│   └── page.tsx
├── components/
│   └── ui/
├── lib/
│   ├── auth.ts
│   ├── prisma.ts
│   └── utils.ts
├── prisma/
│   └── schema.prisma
├── public/
├── .env
├── package.json
└── README.md
```

## Authentifizierung

OpenFeedback verwendet **Better Auth** für die Authentifizierung.

Damit können unter anderem folgende Funktionen umgesetzt werden:

- Registrierung
- Login
- Logout
- Session-Verwaltung
- geschützte Bereiche
- Benutzerverwaltung

Die Authentifizierung kann mit Prisma verbunden werden, sodass Benutzer- und Sessiondaten in PostgreSQL gespeichert werden.

## Datenbank

Die Datenbank wird mit **Prisma** verwaltet.

Das Prisma-Schema befindet sich normalerweise unter:

```txt
prisma/schema.prisma
```

Nach Änderungen am Datenbankschema sollte eine neue Migration erstellt werden:

```bash
npx prisma migrate dev
```

Danach sollte der Prisma Client neu generiert werden:

```bash
npx prisma generate
```

## Deployment

Das Projekt kann zum Beispiel auf **Vercel** deployed werden.

Für das Deployment müssen die Umgebungsvariablen in der Hosting-Plattform gesetzt werden:

```env
DATABASE_URL="..."
BETTER_AUTH_SECRET="..."
BETTER_AUTH_URL="..."
```

Wichtig:

- `DATABASE_URL` muss auf die produktive PostgreSQL-Datenbank zeigen
- `BETTER_AUTH_SECRET` sollte ein sicherer zufälliger Wert sein
- `BETTER_AUTH_URL` muss auf die Produktionsdomain zeigen
- Prisma-Migrationen müssen für die Produktionsdatenbank ausgeführt werden

Vor dem Deployment kann lokal geprüft werden, ob der Build funktioniert:

```bash
npm run build
```

## Geplante Erweiterungen

Mögliche zukünftige Funktionen:

- Feedback-Dashboard
- Kategorien für Feedback
- Upvotes für Feedback
- Kommentare zu Feedback
- Admin-Bereich
- Benutzerrollen
- Status für Feedback-Einträge
- Suchfunktion
- Filterfunktion
- Benachrichtigungen
- Öffentliche Roadmap

## Mitwirken

Beiträge sind willkommen.

So kannst du mitwirken:

1. Repository forken
2. Neuen Branch erstellen

```bash
git checkout -b feature/neue-funktion
```

3. Änderungen vornehmen
4. Änderungen committen

```bash
git commit -m "Neue Funktion hinzugefügt"
```

5. Branch pushen

```bash
git push origin feature/neue-funktion
```

6. Pull Request erstellen

## Autor

GitHub: [@xd-vape](https://github.com/xd-vape)
