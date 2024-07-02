# React Custom Countdown

A lightweight, customizable countdown component for React applications.

## Features

- Simple and easy to use
- Customizable styling
- Efficient performance
- TypeScript support
- No external dependencies


## Usage

Here's a basic example of how to use the Countdown component:

```tsx
import React from 'react';
import Countdown from '/app/components/ui/countdown';

const App = () => {
  const targetDate = new Date('2024-12-31T23:59:59');

  return (
    <div>
      <h1>New Year Countdown</h1>
      <Countdown  targetDate={targetDate} />
    </div>
  );
};

export default App;
```

## Props

The Countdown component accepts the following props:

* targetDate (required): A Date object representing the target date and time for the countdown.
* onComplete (optional): A callback function that will be called when the countdown reaches zero.