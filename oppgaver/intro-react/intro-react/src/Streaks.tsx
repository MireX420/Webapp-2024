import Streak from "./Streak";

type StreaksProps = {
  streaks: {
    id: string;
    habit: string;
    streakCount: number;
  }[];
  updateStreakCount: (id: string) => void;
  total: number;
};

export default function Streaks(props: Readonly<StreaksProps>) {
  const { streaks = [], total = 0, updateStreakCount } = props;

  return (
    <section>
      <h3>Oversikt over streaks for hver habit</h3>
      <ul>
        {streaks.map((streak) => (
          <li key={streak.id}>
            <Streak
              id={streak.id}
              habit={streak.habit}
              streakCount={streak.streakCount}
            >
              <button
                type="button"
                onClick={() => updateStreakCount(streak.id)}
              >
                Oppdater streak
              </button>
            </Streak>
          </li>
        ))}
      </ul>
      <p>
        Du har {streaks.length} med totalt: {total} streaks
      </p>
    </section>
  );
}