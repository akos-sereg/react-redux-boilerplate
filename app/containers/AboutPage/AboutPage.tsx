import * as React from 'react';
import { Helmet } from 'react-helmet';
import styles from './style.scss';

const AboutPage = () => (
    <div className={styles.about_page}>
        <Helmet>
        <title>About Page</title>
        <meta
                name="description"
              content="About page of React.js Boilerplate application"
            />
      </Helmet>

        <h1>About</h1>
            This application uses the following technologies:
        <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Redux</li>
            <li>Node</li>
            <li>Bootstrap</li>
      </ul>
  </div>
);

export default AboutPage;
