import { useState } from 'react';

import { log } from '../../log.js';

function HistoryItem({ count }) {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
}

//The previous version demonstrates how react tracks state by component type and its position (previous key was the index) - when clicked, the component is highlighted. However, when the counter button is pressed again, the state does not follow that specific component.
//However, by assigning a unique id (count.id) to the key, the state is tracked via the key.

export default function CounterHistory({ history }) {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map((count, index) => (
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
}
