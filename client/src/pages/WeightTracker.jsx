import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/DashboardFormPage";

const data = [
  {
    name: "Page A",
    uv: 4000,

    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,

    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,

    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,

    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,

    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,

    amt: 2100,
  },
];

const WeightTracker = () => {
  const currentDate = new Date();
  return (
    <Wrapper>
      <div className="grid-container">
        <LineChart
          width={666}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#daa520" strokeWidth={2} />
        </LineChart>
        <div className="weight-container">
          <FormRow
            type="date"
            name="date"
            defaultValue={currentDate.toISOString().slice(0, 10)}
          />
          <FormRow type="number" name="weight" labelText="Weight (lbs)" />
          <button type="button" className="btn btn-primary btn-weight">
            Submit
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default WeightTracker;
