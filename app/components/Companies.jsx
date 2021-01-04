import React from 'react';

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

import companyList from '../data/companyList.json';

const Companies = () => {
  return (
    <div className="companyList">
      <h2>Companies Using Kendo</h2>
      <Row gutter={40}>
        {(companyList).map(co => 
          <Col 
            xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }}
            lg={{ span: 2 }} xl={{ span: 1 }}
          ><img src={`${co.image}.jpg`} width="100%"/></Col>
        )}
      </Row>
    </div>
  );
}

export default Companies;