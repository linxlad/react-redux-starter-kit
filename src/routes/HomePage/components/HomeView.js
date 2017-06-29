import React from 'react';
import './HomeView.scss';
import PageLayout from '../../../layouts/PageLayout';

export const HomeView = () => (
  <div>
    <PageLayout>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        <h2>Home Page</h2>
        <h4>Fractal Project Structure Boilerplate</h4>
        <a href="https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure">Read more.</a>
      </div>
    </PageLayout>
  </div>
);

export default HomeView;
