import React, {Component} from 'react';
import {Sparklines, SparklinesBars, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

let average = data => data.reduce( (a, b) => a + b, 0) / data.length; 

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} limit={15}>
        <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
        <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        Average: {average(props.data).toFixed(2)} {props.unit}
      </div>
    </div>
  );
}