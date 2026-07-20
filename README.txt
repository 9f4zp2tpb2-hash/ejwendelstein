EJ Wendelstein — Website
=========================

INHALT DIESES PAKETS
---------------------
- index.html, ueber-uns.html, angebote.html, termine.html, aktuelles.html,
  mitmachen.html, kontakt.html, impressum.html, datenschutz.html
- css/style.css        -> Design der öffentlichen Seiten
- css/editor.css        -> Design des internen Bearbeitungsbereichs
- js/main.js             -> lädt Inhalte, baut Menü/Fußzeile
- content.json           -> ALLE Texte, Termine, Teammitglieder etc. in einer Datei
- intern/edit.html       -> versteckter Bearbeitungsbereich (siehe unten)
- images/logo.png        -> euer Logo
- robots.txt              -> hält Suchmaschinen vom /intern/-Ordner fern

WICHTIG: ONLINE STELLEN
------------------------
Ladet den kompletten Ordner unverändert (Struktur beibehalten!) auf euren
Webspace hoch, z. B. per FTP. Die Seite muss über einen echten Webserver
aufgerufen werden (http:// bzw. https://) — ein Doppelklick auf die Datei
(file://) funktioniert NICHT, weil der Browser dann content.json aus
Sicherheitsgründen nicht laden darf.

INHALTE BEARBEITEN — DER BAUKASTEN
-------------------------------------
1. Ruft https://eure-domain.de/intern/edit.html auf (Seite ist bewusst nicht
   verlinkt — nur über die direkte Adresse erreichbar).
2. Login:
     Benutzername: webmaster@ejwendelstein.de
     Passwort:     EvangelischeJugend
3. In den Reitern oben bearbeitet ihr ALLES:
   - Design & Logo: Hauptfarbe der Website, eigenes Logo hochladen, Bild im
     Hero-Bereich der Startseite austauschen, einzelne Startseiten-Abschnitte
     ein-/ausblenden
   - Website & Kontakt, Startseite, Über uns, Angebote, Termine, Aktuelles,
     Mitmachen, Kontakt-Seite, Impressum & Datenschutz
   - Bei Listen (Termine, Karten, Team, Angebote, Beiträge) könnt ihr Einträge
     hinzufügen, entfernen und mit den Pfeilen ↑ / ↓ in der Reihenfolge
     verschieben. Beim Team lässt sich zusätzlich ein Foto hochladen.
4. "Vorschau in diesem Browser speichern" zeigt euch die Änderungen sofort auf
   der Website — aber nur auf dem Gerät/Browser, mit dem ihr gerade arbeitet.
5. Wenn alles passt: "content.json herunterladen" klicken und die
   heruntergeladene Datei per FTP oder GitHub-Upload anstelle der alten
   content.json hochladen. Erst dann sehen ALLE Besucher:innen die Änderungen.
6. "Abmelden" beendet die Sitzung wieder.

SICHERHEITSHINWEIS ZUM INTERNEN BEREICH — BITTE LESEN
---------------------------------------------------------
Der Login schützt die BEDIENOBERFLÄCHE vor zufälligen Besucher:innen: Ohne
Benutzername/Passwort sieht man nur den Anmelde-Bildschirm, das Passwort wird
nicht im Klartext im Quelltext gespeichert, sondern nur als Hash geprüft.

WICHTIG: Das ist trotzdem KEIN vollwertiger, serverseitiger Zugriffsschutz.
Bei einer rein statischen Website (GitHub Pages, klassisches Webhosting ohne
eigenes Backend) bleibt jede Datei technisch über ihre Adresse abrufbar — wer
sich den Quelltext ansieht, käme mit Aufwand am Login vorbei. content.json
selbst MUSS ohnehin öffentlich lesbar sein, damit die normale Website
funktioniert — packt deshalb nie echte Geheimnisse (Passwörter, private
Daten) dort hinein.

Für einen wirklich sicheren, serverseitig geprüften Login gibt es zwei
empfehlenswerte, kostenlose bzw. günstige Wege:

  a) Cloudflare Access (kostenlos bis 50 Nutzer:innen): Domain über Cloudflare
     laufen lassen, dann in Cloudflare Zero Trust eine Access-Regel für den
     Pfad /intern/* anlegen, die nur die E-Mail-Adresse
     webmaster@ejwendelstein.de per Einmal-Code zulässt. Der Login läuft dann
     VOR eurem Server ab — echter Schutz, auch bei GitHub Pages nutzbar.

  b) Hosting mit eingebautem Passwortschutz, z. B. Netlify (Passwortschutz für
     einzelne Pfade in den kostenpflichtigen Plänen) oder klassisches Webhosting
     mit HTTP-Basic-Auth (.htaccess) für den Ordner /intern/.

Sagt gerne Bescheid, wenn eine dieser Varianten eingerichtet werden soll —
dafür wird lediglich Zugriff auf euer Hosting/eure Domain gebraucht.

RECHTLICHE HINWEISE
---------------------
Die Texte in impressum.html/datenschutz.html sind PLATZHALTER und müssen vor
dem Livegang durch rechtlich geprüfte, echte Angaben ersetzt werden (am besten
über die Landeskirche/Kirchengemeinde erfragen, ob es Musterformulierungen
gibt).

WEITERE IDEEN FÜR SPÄTER (nicht enthalten)
---------------------------------------------
- Echtes Kontakt-/Anmeldeformular mit E-Mail-Versand (aktuell nur Platzhalter)
- Login-geschützter interner Bereich mit echter Benutzerverwaltung
- Automatischer Instagram-Feed
- Online-Anmeldung für Freizeiten mit Teilnehmerverwaltung
