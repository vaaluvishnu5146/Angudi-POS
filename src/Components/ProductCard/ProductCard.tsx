import * as React from 'react';
import './style.scss';

export interface Data {
  id?: number;
  title?: String;
  description?: String;
  image?: String;
}

type Props = {
  data: Data;
};

export default function ProductCard({ data }: Props) {
  return (
    <div className="content-card">
      <img src="https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.webp?b=1&s=170667a&w=0&k=20&c=Aq7Dg29n3DDE3gqgT2cWSh9LYxZnr-8SFu0crRQxArA=" />
      <p className="fw-500">Chicken Biriyani</p>
    </div>
  );
}
