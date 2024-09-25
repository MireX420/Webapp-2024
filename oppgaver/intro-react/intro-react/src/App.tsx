import { useState } from "react";
import Streaks from "./Streaks";
import Welcome from "./Welcome";

function App() {
  const user = { name: "Alfred", age: 20 };

  const initialStreaks = [
    { id: "123", habit: "1", streakCount: 10 },
    { id: "234", habit: "2", streakCount: 5 },
  ];

  const [streaks, setStreaks] = useState(initialStreaks);

  const updateStreakCount = (id: string) => {
    setStreaks((prevStreaks) => {
      return prevStreaks.map((streak) => {
        if (streak.id === id) {
          return { ...streak, streakCount: streak.streakCount + 1 };
        }
        return streak;
      });
    });
  };

  const calculateTotalStreaks = () => {
    let total = 0;
    for (const streak of streaks) {
      total += streak.streakCount;
    }
    return total;
  };

  return (
    <main>
      <Welcome user={user} />
      <Streaks
	      // streakOneCount={streakOneCount}
        // streakTwoCount={streakTwoCount}
        streaks={streaks}
        updateStreakCount={updateStreakCount}
        total={calculateTotalStreaks()}
      />
    </main>
  );
}

export default App;