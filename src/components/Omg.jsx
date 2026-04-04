import { useState } from 'react';

export default function Omg() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Показать/Скрыть
      </button>
      {isVisible && <p>Hello, World!</p>}
    </div>
  );
}
