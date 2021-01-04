import React from 'react';
import ReactDOM from 'react-dom';
import { useMediaPredicate } from 'react-media-hook';

import MenuWrapper from './components/MenuWrapper';
import Companies from './components/Companies';
import KendoInfo from './components/KendoInfo';
import KendoImage from './components/KendoImage';

import { Row, Col } from 'react-simple-flex-grid';

import './css/kendo-theme.css'; 
import "react-simple-flex-grid/lib/main.css"; 
import './css/custom.css';

const App = () => {
  const checkIfMediumPlus = useMediaPredicate("(min-width: 768px)");
  return (
    <Row gutter={40}>
      <Col xs={{ span: 12 }} sm={{ span: 2 }}>
        <MenuWrapper isMediumPlus={checkIfMediumPlus} />
      </Col>
      <Col xs={{ span: 12 }} sm={{ span: 10 }} >
        <Row gutter={0}>
          <Col xs={{ span: 12 }} sm={{ span: 3 }} md={{ span: 3 }}>
            <KendoImage />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 9 }} md={{ span: 9 }}>
            <KendoInfo />
          </Col>
          <Col span={12}>
            <Companies />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

ReactDOM.render(<App />, document.querySelector('my-app'));
