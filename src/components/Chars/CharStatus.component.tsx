// create component for chars of characters
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ListCharactersContextInterface } from "../../interfaces/charactersList.Interfaces";
import { ListCharactersContext } from "../../contexts/charactersList.context";
import { IChar } from "../../interfaces/chars.interfaces";

export const CharStatus = () => {
  const { ElementList } = React.useContext(
    ListCharactersContext
  ) as ListCharactersContextInterface;

  // function definition the status of ElementList
  const statusList = () => {
    const status: Array<IChar> = [];
    ElementList.forEach((element) => {
      if (!status.find((item) => item.name === element.status)) {
        status.push({
          name: element.status,
          y: 1,
        });
      } else {
        const index = status.findIndex((item) => item.name === element.status);
        status[index].y++;
      }
    });
    return status;
  };

  // funtion definition for char status
  const optionsCharStatus = () => {
    console.log(statusList());

    const charStatus = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Status of Rick and Morty Characters per page",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        series: {
            borderWidth: 0,
            colorByPoint: true,
            type: 'pie',
            size: '100%',
            innerSize: '60%',
            dataLabels: {
                enabled: true,
                crop: false,
                distance: '-10%',
                style: {
                    fontWeight: 'bold',
                    fontSize: '16px'
                },
                connectorWidth: 0
            }
        }
    },
    colors: ['#FCE700', '#F8C4B4', '#B8E8FC', '#BCE29E', '#f6e1ea'],
      series: [
        {
          name: "Status",
          colorByPoint: true,
          data: statusList(),
        },
      ],
      credits: {
        text: '',
      }
    };
    return charStatus;
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={optionsCharStatus()} />
  );
};

export default CharStatus;
