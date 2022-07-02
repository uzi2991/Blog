---
slug: detect-click-outside-react
title: Detect click outside a React Component with Hook
categories: ["react", "typescript"]
description: A simple hook to detect click outside an element
createdAt: 2022-07-02
---

```ts
import { useEffect } from "react";

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void  
) => {
  useEffect(
    () => {
      
      const listener = (event: MouseEvent) => {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("click", listener);
      return () => {
        document.removeEventListener("click", listener);
      };
    },
    [ref, handler]
  );
};

export default useClickOutside;
```
