import React from 'react';
import { browserHistory } from 'react-router';
import './HomeView.scss';
import PageLayout from '../../../layouts/PageLayout';
import { Button } from 'semantic-ui-react';

export const HomeView = () => (
  <div>
    <PageLayout>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        <h2>Home Page</h2>
        <h4>Fractal Project Structure Boilerplate</h4>
        <a href="https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure">Read more.</a>
        <p></p>
        <p>
          <Button onClick={() => browserHistory.push('/login')} size='large' color='green'>Login</Button>
        </p>
      </div>
    </PageLayout>
  </div>
);

export default HomeView;
