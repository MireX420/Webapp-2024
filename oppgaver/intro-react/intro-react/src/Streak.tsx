import type { PropsWithChildren } from "react";

type StreakProps = {
  id: string;
  habit: string;
  streakCount: number;
};

export default function Streak(
  props: Readonly<PropsWithChildren<StreakProps>>
) {
  const { children, streakCount, habit } = props;

  return (
    <section>
      {children}
      <p>
        {habit}: {streakCount}
      </p>
    </section>
  );
}