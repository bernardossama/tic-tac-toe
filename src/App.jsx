
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">Player1</span>
              <span className="Player-symbol">X</span>
            </span>
            <button>Edit</button>
          </li>
          <li>
            <span className="player">
              <span className="player-name">Player1</span>
              <span className="Player-symbol">O</span>
            </span>
            <button>Edit</button>

          </li>
        </ol>
      </div>

    </main>
    
  );
}

export default App
