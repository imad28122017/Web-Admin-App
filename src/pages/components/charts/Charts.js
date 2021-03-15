import React from "react";
import { Row, Col, Button } from "reactstrap";
import Widget from "../../../components/Widget";
import ApexChart from "react-apexcharts";
import { chartData, liveChart, liveChartInterval } from "./mock";
//import LinksGroup from './LinksGroup';
import { Link } from 'react-router-dom'
//import Sparklines from "../../../components/Sparklines";

//import React, { useState } from 'react';
//import { Collapse, Button, CardBody, Card } from 'reactstrap';


import ReactEchartsCore from "echarts-for-react/lib/core";

import echarts from "echarts/lib/echarts";

import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/themeRiver";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";

exporting(Highcharts);
exportData(Highcharts);

class Charts extends React.Component {
  state = {
    cd: chartData,
    ld: liveChart,
    initEchartsOptions: {
      renderer: "canvas",
    },
    sparklineData: {
      series: [{ data: [1, 7, 3, 5, 7, 8] }],
      options1: {
        colors: ["#db2a34"],
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
      },
      options2: {
        colors: ["#2477ff"],
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
      },
    },
  };

  componentWillUnmount() {
    clearInterval(liveChartInterval);
  }

  render() {
    const { cd, initEchartsOptions } = this.state;
    return (
      <div >
        <h1 className="page-title">
          Smart - <span className="fw-semi-bold">Visalizatons</span>
        </h1>
        <div>
          <Row>
            <Col lg={7} xs={12}>
              <Widget
                title={
                  <h5>
                  <h3 className="fw-semi-bold" > Yearly </h3>   <span >Total Crimes recorded in Islamabad </span>
                  </h5>
                }
                close
                collapse
              >
                <ApexChart
                  className="sparkline-chart"
                  height={350}
                  series={cd.apex.column.series}
                  options={cd.apex.column.options}
                  type={"bar"}
                />
              </Widget>
            </Col>


            <Col lg={5} xs={12}>
              <Widget
                title={
                  <h5>
                   <h4 className="fw-semi-bold"> Heinous Crime</h4>
                   {/* <span >Rates Comparison</span> */}
                  </h5>
                }
                close
                collapse
              >
                <ReactEchartsCore
                  echarts={echarts}
                  option={cd.echarts.line}
                  opts={initEchartsOptions}
                  style={{ height: "365px" }}
                />
              </Widget>
            </Col>
            
            <Col lg={7} xs={12}>
              <Row>
                <Col lg={6} xs={12}>
                  <Widget
                    title={
                      <h5>
                        Smart{" "}
                        <span className="fw-semi-bold">Crime-Type Pie</span>
                      </h5>
                    }
                    close
                    collapse
                  >
                    <ApexChart
                      className="sparkline-chart"
                      type={"pie"}
                      height={200}
                      series={cd.apex.pie.series}
                      options={cd.apex.pie.options}
                    />
                  </Widget>
                </Col>

                <Col lg={6} xs={12}>
                  <Widget
                    title={
                      <h5>
                        Smart <span className="fw-semi-bold">Crime Donut</span>
                      </h5>
                    }
                    close
                    collapse
                  >
                    <ReactEchartsCore
                      echarts={echarts}
                      option={cd.echarts.donut}
                      opts={initEchartsOptions}
                      style={{ height: "170px" }}
                    />
                  </Widget>
                </Col>
          
              </Row>
            </Col>       
          <Link to="/opendatapak">
              <Button  color="primary" type="button">
              Crimes Data In Detail
              </Button>
          </Link>
          </Row>
        </div>
      </div>
    );
  }
}

export default Charts;
