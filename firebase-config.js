// ============================================================
//  Firebase-Konfiguration – hier trägst du EINMAL deine Werte ein.
//  Du findest sie in der Firebase-Konsole unter
//  Projekteinstellungen → Allgemein → Deine Apps → Web-App → "Config".
//  (Diese Werte sind nicht geheim. Geschützt wird über die Firestore-Regeln.)
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyAhjJEwhqoqtVs40_34gDxpO87VSoWlm6k",
  authDomain: "silent-disco-songwunsch.firebaseapp.com",
  projectId: "silent-disco-songwunsch",
  storageBucket: "silent-disco-songwunsch.firebasestorage.app",
  messagingSenderId: "782547494115",
  appId: "1:782547494115:web:ac924a9b207180f3d851d6"
};

// E-Mail des Admin-Nutzers, den du in Firebase unter
// Authentication → Nutzer anlegst. Das Passwort dazu ist das Admin-Passwort.
// Die Adresse muss nicht real existieren.
export const ADMIN_EMAIL = "webmaster@ejwendelstein.de";

// Name der Firestore-Sammlung (nur ändern, wenn du auch die Regeln anpasst)
export const COLLECTION = "wuensche";
