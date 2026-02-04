// ===== מאגר משחקים (בינתיים בזיכרון) =====
const games = {};

// יצירת קוד רנדומלי
function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// ===== פתח משחק =====
function createGame() {
  const code = generateCode();

  games[code] = {
    players: 1,
    locked: false
  };

  document.getElementById("status").innerText =
    `נוצר משחק! הקוד שלך: ${code}`;

  console.log("משחק נוצר:", games);
}

// ===== הצטרפות למשחק =====
function joinGame() {
  const code = document.getElementById("codeInput").value.toUpperCase();

  if (!games[code]) {
    alert("❌ קוד לא קיים");
    return;
  }

  if (games[code].locked) {
    alert("❌ המשחק כבר התחיל");
    return;
  }

  games[code].players++;

  if (games[code].players === 2) {
    games[code].locked = true;
    startGame(code);
  }
}

// ===== התחלת משחק =====
function startGame(code) {
  document.getElementById("status").innerText =
    `🎉 המשחק ${code} התחיל!`;

  console.log("משחק התחיל:", games[code]);

  // 👉 כאן תעבור למסך הלוח שלך
}
