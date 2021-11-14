import React from "react";
import "./General.css";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { AreaChart, Area } from 'recharts';
import { chart_data } from "../../static/static_data";
import { AiOutlineShoppingCart } from "react-icons/ai";

function General() {
  let chartDataPrev = chart_data[chart_data.length - 2].total;
  let chartDataNext = chart_data[chart_data.length - 1].total;

  const getTheIncrease = (chartDataPrev, chartDataNext) => {
    if (chartDataNext - chartDataPrev >= 0) {
      return {
        chartStatusInc: true,
        chartFlow: `+${(((chartDataNext - chartDataPrev) / chartDataPrev) * 100).toFixed(2)}`,
      }
    }
    return {
      chartStatusInc: false,
      chartFlow: `-${(((chartDataNext - chartDataPrev) / chartDataPrev) * 100).toFixed(2)}`,
    }
  };
  return (
    <div className="admin__general">
      <h1 className="admin__title">General Statistics</h1>
      <div className="genaral__statistics">
        <div className="statistics">
          <div className="statistics__primary">
            <p className="statistics__number">9506</p>
            <div className="sts__type">
              <AiOutlineShoppingCart />
            </div>
          </div>
          <div className="statistics__flow">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={300} height={100} data={chart_data}>
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#FBC100"
                  strokeWidth={3.5}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="statistics__title">
            <p>Total bought techs</p>
            <p
              style={
                getTheIncrease(chartDataPrev, chartDataNext).chartStatusInc
                  ? { color: "var(--py-success)" }
                  : { color: "var(--py-danger)" }
              }
            >
              {getTheIncrease(chartDataPrev, chartDataNext).chartFlow}
            </p>
          </div>
        </div>
        <div className="statistics">
          <div className="statistics__primary">
            <p className="statistics__number">9506</p>
            <div className="sts__type">
              <AiOutlineShoppingCart />
            </div>
          </div>
          <div className="statistics__flow">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={300}
                height={100}
                data={chart_data}
                margin={{
                  top: 10,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0.3" y2="1">
                    <stop offset="5%" stopColor="#FBC100" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#fdd140" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="total" fillOpacity={0.8} stroke="#FBC100" fill="url(#colorUv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="statistics__title">
            <p>Total bought techs</p>
            <p
              style={
                getTheIncrease(chartDataPrev, chartDataNext).chartStatusInc
                  ? { color: "var(--py-success)" }
                  : { color: "var(--py-danger)" }
              }
            >
              {getTheIncrease(chartDataPrev, chartDataNext).chartFlow}
            </p>
          </div>
        </div>
        <div className="statistics">
          <div className="statistics__primary"></div>
        </div>
        <div className="statistics">
          <div className="statistics__primary"></div>
        </div>
      </div>
    </div>
  );
}

export default General;
