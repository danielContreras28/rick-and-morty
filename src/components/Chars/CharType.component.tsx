// create component for chars of characters
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ListCharactersContextInterface } from "../../interfaces/charactersList.Interfaces";
import { ListCharactersContext } from "../../contexts/charactersList.context";
import { IChar } from "../../interfaces/chars.interfaces";

export const CharType = () => {
  const { ElementList } = React.useContext(
    ListCharactersContext
  ) as ListCharactersContextInterface;

  // function definition the type of ElementList
  const typeList = () => {
    const type: Array<IChar> = [];
    ElementList.forEach((element) => {
      if (!type.find((item) => item.name === element.type)) {
        type.push({
          name: element.type,
          y: 1,
        });
      } else {
        const index = type.findIndex((item) => item.name === element.type);
        type[index].y++;
      }
    });
    return type;
  };

  // funtion definition for char type
  const optionsCharType = () => {
    const charType = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Type of Rick and Morty Characters per page",
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
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          name: "Type",
          colorByPoint: true,
          data: typeList(),
        },
      ],
      credits: {
        text: '',
      }
    };
    return charType;
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={optionsCharType()} />
  );
};

export default CharType;
