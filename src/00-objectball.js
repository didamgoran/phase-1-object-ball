// Define the gameObject function
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
  },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
       },
    }; 
}
  
  
function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
    return null;
 }
 
function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
   return null;
}
  
function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null;
}
  
function teamNames() {
    const game = gameObject();
    const names = [];
    for (const team in game) {
      names.push(game[team].teamName);
    }
    return names;
}
  
 
  function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].teamName === teamName) {
        const players = game[team].players;
        return Object.values(players).map(player => player.number);
      }
    }
    return null;
}
  
 function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName];
      }
    }
    return null;
}
  
function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;
  
    for (const team in game) {
      const players = game[team].players;
      for (const player in players) {
        if (players[player].shoe > largestShoeSize) {
          largestShoeSize = players[player].shoe;
          playerWithLargestShoe = players[player];
        }
      }
    }
    return playerWithLargestShoe ? playerWithLargestShoe.rebounds : null;
}
  
  console.log(numPointsScored("Alan Anderson")); // its 22
  console.log(shoeSize("Alan Anderson")); // 16
  console.log(teamColors("Brooklyn Nets")); 
  console.log(teamNames()); 
  console.log(playerNumbers("Brooklyn Nets")); 
  console.log(playerStats("Alan Anderson")); 
 
  console.log(bigShoeRebounds());
  

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints = null;
  
    for (const team in game) {
      const players = game[team].players;
      for (const playerName in players) {
        const points = players[playerName].points;
        if (points > maxPoints) {
          maxPoints = points;
          playerWithMostPoints = playerName;
        }
      }
    }
    return playerWithMostPoints;
}

function winningTeam() {
    const game = gameObject();
    let maxPoints = 0;
    let winningTeamName = null;
  
    for (const team in game) {
      const players = game[team].players;
      let teamTotalPoints = 0;
      for (const playerName in players) {
        teamTotalPoints += players[playerName].points;
      }
      if (teamTotalPoints > maxPoints) {
        maxPoints = teamTotalPoints;
        winningTeamName = game[team].teamName;
      }
    }
    return winningTeamName;
  }

  console.log(mostPointsScored()); // The answer to this one is "DeSagna Diop"
  console.log(winningTeam()); // and to this one is "Charlotte Hornets"
    