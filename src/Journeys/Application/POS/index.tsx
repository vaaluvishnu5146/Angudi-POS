import React from 'react';
import ScrollableList from '../../../Components/ScrollableList/ScrollableList';
import SearchInput from '../../../Elements/SearchInput/SearchInput';
import './style.scss';
import { CONTENT } from '../../../Constants/data';
import ProductCard from '../../../Components/ProductCard/ProductCard';

export default function POSLayout({}) {
  return (
    <section className="POS-container">
      <div className="content-area">
        <div className="content-area-header">
          <div className="content-prefix">
            <h3>Choose Category</h3>
          </div>
          <div className="content-suffix">
            <SearchInput />
          </div>
        </div>
        <div className="clearfix-20"></div>
        <div className="content-area-body">
          <ScrollableList data={CONTENT.categories} selected={3} />
        </div>
        <div className="clearfix-20"></div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h4>Coffee Menu</h4>
          <h6>12 results</h6>
        </div>
        <div className="clearfix-20"></div>
        <div className="content-body-container">
          <ProductCard data={{}} />
          <ProductCard data={{}} />
          <ProductCard data={{}} />
          <ProductCard data={{}} />
          <ProductCard data={{}} />
          <ProductCard data={{}} />
          <ProductCard data={{}} />
          <ProductCard data={{}} />
          <ProductCard data={{}} />
          <ProductCard data={{}} />
          <ProductCard data={{}} />
          <ProductCard data={{}} />
        </div>
      </div>
      <div className="cart-area">
        <div className="cart-area-header">
          <h3>Current Order</h3>
        </div>
      </div>
    </section>
  );
}
