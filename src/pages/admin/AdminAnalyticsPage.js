import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import AdminLinksComponent from "../../components/Admin/AdminLinksComponent";
import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminAnalyticsPage = () => {
  const data = [
    {
      name: "12:00 AM",
      "2022 year": 4000,
      "2023 year": 2400,
    },
    {
      name: "01:00 AM",
      "2022 year": 3000,
      "2023 year": 1398,
    },
    {
      name: "02:00 AM",
      "2022 year": 2000,
      "2023 year": 9800,
    },
    {
      name: "03:00 AM",
      "2022 year": 2780,
      "2023 year": 3908,
    },
    {
      name: "04:00 AM",
      "2022 year": 1890,
      "2023 year": 4800,
    },
    {
      name: "05:00 AM",
      "2022 year": 2390,
      "2023 year": 3800,
    },
    {
      name: "06:00 AM",
      "2022 year": 3490,
      "2023 year": 4300,
    },
  ];
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>Black Friday Cumulative Revenue 11/26/2023 vs 11/27/2022</h1>
        <Form.Group controlId="firstDataToCompare">
          <Form.Label>Select First Data To Compare</Form.Label>
          <Form.Control
            type="date"
            name="firstDateToCompare"
            placeholder="First Dare to Compare"
          />
        </Form.Group>
        <br/>
        <Form.Group controlId="secondDataToCompare">
          <Form.Label>Select Second Data To Compare</Form.Label>
          <Form.Control
            type="date"
            name="secondDateToCompare"
            placeholder="Second Dare to Compare"
          />
        </Form.Group>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottoom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{
                value: "TIME",
                offset: 50,
                position: "insideBottomRight",
              }}
              allowDuplicatedCategory={false}
            />
            <YAxis
              label={{ value: "REVENUE", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="2022 year"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={4}
            />
            <Line
              type="monotone"
              dataKey="2023 year"
              stroke="#82ca9d"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
};

export default AdminAnalyticsPage;
