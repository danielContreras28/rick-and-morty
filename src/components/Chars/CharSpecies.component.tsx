// create component for chars of characters
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ListCharactersContextInterface } from "../../interfaces/charactersList.Interfaces";
import { ListCharactersContext } from "../../contexts/charactersList.context";
import { IChar } from "../../interfaces/chars.interfaces";

export const CharSpecies = () => {
  const { ElementList } = React.useContext(
    ListCharactersContext
  ) as ListCharactersContextInterface;

  // function definition the species of ElementList
  const speciesList = () => {
    const species: Array<IChar> = [];
    ElementList.forEach((element) => {
      if (!species.find((item) => item.name === element.species)) {
        species.push({
          name: element.species,
          y: 1,
        });
      } else {
        const index = species.findIndex((item) => item.name === element.species);
        species[index].y++;
      }
    });
    return species;
  };

  // funtion definition for char species
  const optionsCharSpecies = () => {
    console.log(speciesList());

    const charSpecies = {
      chart: {
        type: "column",
      },
      title: {
        text: "Species of Rick and Morty Characters per page",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      xAxis: {
        categories: speciesList().map((item) => item.name),
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number of Species",
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
          name: "Species",
          colorByPoint: true,
          data: speciesList(),
        },
      ],
      credits: {
        text: '',
      }
    };
    return charSpecies;
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={optionsCharSpecies()} />
  );
};

export default CharSpecies;
