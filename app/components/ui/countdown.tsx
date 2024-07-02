import React, { useState, useEffect, useCallback } from 'react';

interface CountdownProps {
      targetDate: Date;
      onComplete?: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, onComplete }) => {
      const calculateTimeLeft = useCallback(() => {
            const difference = +targetDate - +new Date();
            let timeLeft = { hours: 0, minutes: 0, seconds: 0 };

            if (difference > 0) {
                  timeLeft = {
                        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                        minutes: Math.floor((difference / 1000 / 60) % 60),
                        seconds: Math.floor((difference / 1000) % 60),
                  };
            }

            return timeLeft;
      }, [targetDate]);

      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

      useEffect(() => {
            const timer = setInterval(() => {
                  const newTimeLeft = calculateTimeLeft();
                  setTimeLeft(newTimeLeft);

                  if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
                        clearInterval(timer);
                        onComplete && onComplete();
                  }
            }, 1000);

            return () => clearInterval(timer);
      }, [calculateTimeLeft, onComplete]);

      const formatTime = (time: number) => time.toString().padStart(2, '0');

      if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
            return <span className="text-white dark:text-slate-700">Time's up!</span>;
      }

      return (
            <div className="time-separator inline-flex *:text-lg *:font-semibold *:text-white">
                  <span>{formatTime(timeLeft.hours)}</span>
                  <span>{formatTime(timeLeft.minutes)}</span>
                  <span>{formatTime(timeLeft.seconds)}</span>
            </div>
      );
};

export default Countdown;