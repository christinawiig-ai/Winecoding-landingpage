# Slide 1 redesign — Winecoding Office Hours #8

Alt du trenger ligger i denne mappen:
- `qr-office-hours-8.png` — ny QR-kode (peker til luma.com/nbweyt18, verifisert)
- `sl-ramme-rod.png` — ytre SL-ramme (rød kantramme)
- `sl-frame-1-pink.png` — indre rosa Frame 1 rundt bildene

Deck: https://docs.google.com/presentation/d/13F2IZz3mMdJ2MVj9nzPd-lJmv3H5xMir4NbJ2Yo1u4k/edit

## Steg for steg i Google Slides

### 1. Bytt QR-koden
1. Klikk eksisterende QR på slide 1, trykk Delete
2. Insert → Image → Upload → velg `qr-office-hours-8.png`
3. Plasser der den gamle var, samme størrelse
4. **Skann med telefonen** — skal åpne luma.com/nbweyt18 (Winecoding Office Hours #8)

### 2. Oppdater venstre-kolonne teksten
Erstatt eksisterende bullets. Lim inn:

```
OFFICE HOURS #8
Thursday · 14:00-16:00

THIS WEEK
What's new in Claude Code
Lightning talks · 3 × 6 min
Office hours · two zones

Bring your laptop with
Claude Code installed

Sign up:
```

**Typografi:**
- "Winecoding"-wordmark: behold som den er (serif, mørk brun)
- "OFFICE HOURS #8" og "THIS WEEK": Inter Bold, all caps, farge `#FF3333` (SL red)
- Resten: Inter Regular, mørk grå `#2A2A2A`
- "Bring your laptop..." mindre, `#4A4A4A`

SL red brukes kun på de to labels, ikke noe annet sted — holder det rolig.

### 3. Legg inn ytre SL-ramme
1. Insert → Image → Upload → `sl-ramme-rod.png`
2. Dra til å dekke hele sliden (16:9)
3. Høyreklikk → Order → Send to back
4. Pass på at venstre-kolonne og bildene ligger **innenfor** den hvite innsiden av rammen

### 4. Erstatt bildegrid med Frame 1 Pink rundt
1. Behold bilde 1 (øvre venstre), 2 (øvre høyre), 4 (nedre høyre)
2. Erstatt bilde 3 (nedre venstre) med placeholder:
   - Insert → Shape → Rectangle
   - Fyll: lys grå `#E8E8E8`
   - Border: SL red `#FF3333`, stiplet (dashed), 2pt
   - Tekst inni: "Nytt bilde fra forrige OH" i Inter, mørk grå, sentrert
3. Insert → Image → Upload → `sl-frame-1-pink.png`
4. Plasser rundt hele 2x2-griden
5. Høyreklikk på Frame 1 Pink → Order → Send backward (slik at bildene ligger oppå)

### 5. Før presentasjon
- [ ] Skannet QR med telefon, åpner riktig Luma-event
- [ ] Byttet ut placeholder #3 med nytt bilde fra siste office hours
- [ ] Sjekket slide i presentasjonsmodus (Cmd/Ctrl+F5)
- [ ] Tekst lesbar fra 2-3 meter
- [ ] SL red kun på 2 labels, ikke i body

## Brand-cheatsheet
- SL red: `#FF3333`
- Mørk grå body: `#2A2A2A`
- Mørk grå sekundær: `#4A4A4A`
- Winecoding lys rosa bakgrunn: `#FBE9E7`
- Winecoding mørk brun (wordmark): `#3D2817`
- Headlines: Inter Bold
- Body: Inter Regular
- Wordmark: Playfair Display (serif)
