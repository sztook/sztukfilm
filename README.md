# Sztukfilm – sztuka o filmie

Darmowa aplikacja, która dobiera filmy do Twojej osobowości i nastroju.

- test osobowości (10 pytań) i opcjonalny test nastroju na dziś
- ocenianie filmów i rekomendacje z uzasadnieniem
- kalendarz obejrzanych seansów
- tryb „Razem”: wspólny wybór filmu we dwoje

Bez rejestracji i reklam. Wszystkie dane zostają na urządzeniu użytkownika – zobacz [politykę prywatności](polityka.html).

---

## 1. Pierwsze wrzucenie aplikacji na GitHuba

1. Rozpakuj `sztukfilm.zip`.
2. Na GitHubie: **+** (prawy górny róg) → **New repository** → nazwa **sztukfilm** → **Public** → **Create repository**.
3. Kliknij link **„uploading an existing file”** i przeciągnij **wszystkie pliki** z folderu `sztukfilm` (zaznacz je Ctrl+A) → **Commit changes**. Wszystkie pliki leżą w jednym miejscu – bez podfolderów.
4. **Settings** → **Pages** → Branch: **main**, folder **/(root)** → **Save**.
5. Po 1–2 minutach odśwież stronę – pojawi się adres `https://TWOJ-LOGIN.github.io/sztukfilm/`.

## 2. Aktualizacja całej aplikacji (nowa wersja plików)

Wejdź do repozytorium → **Add file** → **Upload files** → przeciągnij nowe pliki → **Commit changes**. Pliki o tych samych nazwach zostaną nadpisane.

Jeśli zmieniasz coś poza `filmy.json`, zwiększ też numer wersji w pierwszych linijkach `sw.js` (np. `sztukfilm-v2` → `sztukfilm-v3`).

## 3. Dodawanie filmów (plik `filmy.json`)

1. W repozytorium kliknij **filmy.json** → ikonka **ołówka** (Edit).
2. Przewiń na sam dół. Na końcu ostatniego filmu dopisz **przecinek**, a pod nim nową linijkę (przed zamykającym `]`):

```
{"id": 373, "tytul": "Tytuł filmu", "rok": 2025, "gatunki": ["Dramat", "Romans"], "mrok": 1, "zlozonosc": 2, "lekkosc": 1, "napiecie": 1, "wzruszenie": 3}
```

3. **Commit changes**. Po kilku minutach film pojawi się u wszystkich użytkowników (przy następnym otwarciu aplikacji z internetem). Numeru w `sw.js` przy dodawaniu filmów nie trzeba zmieniać.

### Zasady

- **id** – kolejny numer (o 1 większy niż ostatni). **Nigdy nie zmieniaj i nie używaj ponownie numerów** istniejących filmów – są do nich przypisane oceny użytkowników. Tytuł i rok można poprawiać.
- **gatunki** – jeden lub kilka z listy: Akcja, Komedia, Dramat, Sci-fi, Fantasy, Horror, Thriller, Romans, Animacja, Kryminał, Wojenny, Biograficzny, Przygodowy, Muzyczny, Familijny.
- **mrok, zlozonosc, lekkosc, napiecie, wzruszenie** – skala 0–3 (0 = wcale, 3 = bardzo). Przykłady:
  - mrok: 3 = Siedem, 0 = Shrek
  - złożoność: 3 = Incepcja, 0 = Kac Vegas
  - lekkość: 3 = Notting Hill, 0 = Pianista
  - napięcie: 3 = Mad Max, 0 = Między słowami
  - wzruszenie: 3 = Coco, 0 = John Wick
- Usunięcie filmu: skasuj jego linijkę (pilnuj przecinków). Użytkownicy, którzy go ocenili, zobaczą go jako „film usunięty z bazy”.

### Najczęstsze błędy

- brak przecinka między filmami albo przecinek po ostatnim filmie,
- polskie cudzysłowy „ ” zamiast zwykłych `"`,
- brakujący nawias `{` `}`.

Jeśli plik będzie zawierał błąd, aplikacja **nie przestanie działać** – użyje ostatniej poprawnej listy. Plik możesz sprawdzić, wklejając go na stronie jsonlint.com.

---

Czcionki: Inter i Fraunces (SIL Open Font License). Test osobowości oparty na TIPI (Gosling i in., 2003).
