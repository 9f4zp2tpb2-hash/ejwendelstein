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

INHALTE BEARBEITEN
--------------------
1. Ruft https://eure-domain.de/intern/edit.html auf (Seite ist bewusst nicht
   verlinkt — nur über die direkte Adresse erreichbar).
2. Bearbeitet die Texte in den Reitern oben (Startseite, Über uns, Termine, …).
3. "Vorschau in diesem Browser speichern" zeigt euch die Änderungen sofort auf
   der Website — aber nur auf dem Gerät/Browser, mit dem ihr gerade arbeitet.
4. Wenn alles passt: "content.json herunterladen" klicken und die
   heruntergeladene Datei per FTP anstelle der alten content.json auf den
   Webspace hochladen. Erst dann sehen ALLE Besucher:innen die Änderungen.

SICHERHEITSHINWEIS ZUM INTERNEN BEREICH
-----------------------------------------
/intern/edit.html ist nur durch die "geheime" Adresse geschützt (Security by
Obscurity), nicht durch ein echtes Login. Das reicht für den Alltag meist aus,
ist aber kein vollwertiger Passwortschutz. Wer mehr Sicherheit möchte, kann
den Hoster bitten, den Ordner /intern/ zusätzlich mit HTTP-Basic-Auth
(Benutzername + Passwort auf Serverebene) abzusichern.

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
