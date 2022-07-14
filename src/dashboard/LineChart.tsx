import { Box} from "@mui/material";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [9, 6, 12, 3, 6, 9, 12, 3, 6, 9, 12]
      }
    },series: [
      {
        name: "Open",
        data: [70, 125, 155, 185, 268, 288, 312, 456, 520]
      },
      {
        name: "Bounce",
        data: [120, 192, 250, 364, 428, 498, 540, 598, 690]
      },
      {
        name: "Clicked 2nd time",
        data: [0, 148, 228, 294, 365, 429, 565, 539, 612]
      }
    ]
  };

  render() {
    return (
            <Box>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                />
            </Box>
  );
}
}

export default LineChart;
