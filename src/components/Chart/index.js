import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Doughnut, Bar } from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    '& canvas':  {
      maxHeight:"400px",
      width: "auto"
    }
  },
  wrapper: {
    margin: "2rem 1.5rem",
    maxHeight: "400px",
  },
}));

export default function Chart() {
  const classes = useStyles();

  const doughnut = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const bar = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Red Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: '# of Blue Votes',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: '# of Green Votes',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };
  

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid md={6} xs={12} item>
          <div className={classes.wrapper}>
            <Doughnut
              data={doughnut}
              options={{
                responsive: true,
                maintainAspectRatio: true,
              }}
            />
          </div>
        </Grid>
        <Grid md={6} xs={12} item>
          <div className={classes.wrapper}>
            <Bar data={bar} options={options} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
