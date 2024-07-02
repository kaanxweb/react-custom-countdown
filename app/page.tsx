import Countdown from "./components/ui/countdown";

export default function Home() {
  const currentTime = new Date();
  const countDownTime = new Date(currentTime.getTime() + 2 * 60 * 60 * 1000);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Countdown targetDate={countDownTime} />
    </main>
  );
}
