---
slug: track-window-size
title: Use a custom hook to get the current Window size in React
categories: ["react"]
description: Get the current window size with hook
createdAt: 2022-07-02
---

```ts
import {useState} from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const listener = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);

  return size;
};
```
