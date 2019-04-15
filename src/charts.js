const newChart = (  ,data) =>
  let labels = [];
  let values = [];

  data.forEach(elem=>  {
    labels.push(elem.Year);
    values.push(elem.Injuries);
  });

  let ctx = document.getElementById(chartId);
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: colors,
          data: values
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Cantidades Anuales'
      }
    }
  });
};
