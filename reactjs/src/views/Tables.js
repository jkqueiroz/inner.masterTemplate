/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.js";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  CardFooter,
  Col,
  Button
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Análise de Performance em Treino</CardTitle>
              </CardHeader>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Atletas</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Nome</th>
                      <th>Ataque</th>
                      <th>Defesa</th>
                      <th>Passe</th>
                      <th>Levatamento</th>
                      <th>Bloqueio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Manuella Penharbel</td>
                      <td><Button
                            block
                            color="primary"
                           
                          >
                            +1
                          </Button></td>
                          <td><Button
                            block
                            color="danger"
                           
                          >
                            +1
                          </Button></td>
                          <td><Button
                            block
                            color="warning"
                          >
                            +1
                          </Button></td>
                          <td><Button
                            block
                            color="success"
                          >
                            +1
                          </Button></td>
                          <td><Button
                            block
                            color="default"
                          >
                            +1
                          </Button></td>
                    </tr>
                    <tr>
                    <td>Murillo Penharbel</td>
                      <td><Button
                            block
                            color="primary"
                          >
                            +1
                          </Button></td>
                          <td><Button
                            block
                            color="danger"
                          >
                            +1
                          </Button></td>
                          <td><Button
                            block
                            color="warning"
                          >
                            +1
                          </Button></td>
                          <td><Button
                            block
                            color="success"
                          >
                            +1
                          </Button></td>
                          <td><Button
                            block
                            color="default"
                          >
                            +1
                          </Button></td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

        </Row>
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Análise de Treino</CardTitle>
                <p className="card-category">Ultimos 15 Treinos</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Ataque{" "}
                  <i className="fa fa-circle text-warning" /> Defesa{" "}
                  <i className="fa fa-circle text-danger" /> Bloqueio{" "}
                  <i className="fa fa-circle text-gray" /> Saque
                </div>
                <hr />

              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Evolução Mensal</CardTitle>
                <p className="card-category">Fundamentos Certos no Último Mês</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />

              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Ataque{" "}
                  <i className="fa fa-circle text-warning" /> Defesa
                </div>
                <hr />
               
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
