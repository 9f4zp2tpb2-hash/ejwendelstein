// ============================================================
//  Firebase-Konfiguration – hier trägst du EINMAL deine Werte ein.
//  Du findest sie in der Firebase-Konsole unter
//  Projekteinstellungen → Allgemein → Deine Apps → Web-App → "Config".
//  (Diese Werte sind nicht geheim. Geschützt wird über die Firestore-Regeln.)
// ============================================================

export const firebaseConfig = {
  apiKey: "DEIN_API_KEY",
  authDomain: "DEIN-PROJEKT.firebaseapp.com",
  projectId: "DEIN-PROJEKT",
  storageBucket: "DEIN-PROJEKT.firebasestorage.app",
  messagingSenderId: "DEINE_SENDER_ID",
  appId: "DEINE_APP_ID"
};

// E-Mail des Admin-Nutzers, den du in Firebase unter
// Authentication → Nutzer anlegst. Das Passwort dazu ist das Admin-Passwort.
// Die Adresse muss nicht real existieren.
export const ADMIN_EMAIL = "admin@ejwendelstein.de";

// Name der Firestore-Sammlung (nur ändern, wenn du auch die Regeln anpasst)
export const COLLECTION = "wuensche";
