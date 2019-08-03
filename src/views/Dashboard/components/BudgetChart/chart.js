import palette from "theme/palette";
import {colors} from '@material-ui/core';

export const data = {
  labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug"],
  datasets: [
    {
      label: "My First dataset",
      fill: true,
      lineTension: 0.5,
      backgroundColor: colors.lightBlue[50],
      borderColor: palette.primary.main,
      borderWidth: 1,
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [20, 30, 30, 35]
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: { display: false },
  tooltips: {
    enabled: false
  },
  scales: {
    yAxes: [
      {
        display: false
      }
    ],
    xAxes: [
      {
        display: false
      }
    ]
  }
};
