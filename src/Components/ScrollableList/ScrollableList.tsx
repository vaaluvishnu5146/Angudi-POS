import * as React from 'react';
import './style.scss';

export interface OptionT {
  id: number;
  label: string;
  value: string;
  image: string;
}

type AppProps = {
  data: OptionT[];
  selected: Number;
};

export default function ScrollableList({ data, selected = 0 }: AppProps) {
  return (
    <div className="scrollable-list-container">
      {data.map((d, i) => (
        <div
          className={`category-card ${d.id === selected && 'active'}`}
          key={i}
        >
          <img src={d.image} id="" />
          <p id="">{d.label}</p>
        </div>
      ))}
    </div>
  );
}
