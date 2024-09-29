import { useState, useEffect } from "react";
import Streaks from "./Streaks";
import Welcome from "./Welcome";
import { ofetch } from "ofetch";

function App() {
  const user = { name: "Alfred", age: 20 };

  const initialStreaks = [
    { id: "123", habit: "1", streakCount: 10 },
    { id: "234", habit: "2", streakCount: 5 },
  ];

  const [streaks, setStreaks] = useState<StreakType[]>([]);
  const [habits, setHabits] = useState<HabitType[]>([]);

  const initializeData = () => {
    console.log("fetching data");
    ofetch("<http://localhost:3000/habits>").then(
      (habits: { data: HabitType[] }) => {
        console.log("data fetched");
        setHabits(habits.data);
        setStreaks(
          habits.data.map((habit) => ({
            id: crypto.randomUUID(),
            habitId: habit.id,
            streakCount: 0,
          }))
        );
        console.log("data initialized");
      }
    );
  };
  
  useEffect(() => {
    initializeData();
  }, []);
  
  // Kortformen. Legg merke til at vi ikke kaller funksjonen
  // Sender kun pekeren til funksjonen slik at useEffect kan kalle den
  // useEffect(initializeData, []);

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