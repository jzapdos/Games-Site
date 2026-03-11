const CONVEX_URL = "https://compassionate-platypus-431.convex.cloud";

const client = new convex.ConvexClient(CONVEX_URL);

async function loadGames() {
  try {
    const games = await client.query("games:getGames");

    const container = document.getElementById("games");
    container.innerHTML = "";
    
    console.log(games)

    games.forEach(game => {
      const div = document.createElement("div");

      div.innerHTML = `
        <h3>${game.name}</h3>
        <p>By ${game.creator}</p>
        <a href="${game.link}" target="_blank">Play Game</a>
      `;

      container.appendChild(div);
    });

  } catch (err) {
    console.error("Error loading games:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadGames);