import React, { Component } from 'react';
/* import { select } from 'd3-selection'; */
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
/* import { json } from 'd3-request';
 */import { geoRobinson } from 'd3-geo-projection';
import mapData from './map.json';
import headlineData from './data/headlines/headlines.json'; // fetch from S3 instead
import styles from './Map.module.scss';


const width = 1900; // window.innerWidth
const height = 1200; // window.innerHeight;


class Map extends Component {
  componentDidMount() {
    function setClass(d) {
      return d.properties.headline != null ? 'headline' : 'no-headline';
    }

    function setColor(d) {
      return d.properties.headline != null ? 'skyblue' : 'lightgray';
    }

    function buildMap() {
      const geojson = topojson.feature(mapData, mapData.objects.ne_10m_admin_0_countries);

      // Bind headlines to the appropriate country in the TopoJson
      geojson.features.forEach((d) => {
        d.properties['key'] = d.properties.BRK_A3; // .toLowerCase()
        if (d.properties['key'] in dataById) {
          d.properties['headline'] = dataById[d.properties['key']]['headline']; // make explicit key attr in topojson
          d.properties['url'] = dataById[d.properties['key']]['url'];
        }
      });
      // Filter out Antarctica and Baikonur Cosmodrome
      geojson.features = geojson.features.filter(
        (d) => d.properties.SOVEREIGNT !== 'Antarctica' && d.properties.NAME !== 'Baikonur'
      );

      const projection = geoRobinson()
        .center([35, -20])
        .scale([width / (2 * Math.PI)])
        .translate([width / 2, height / 2]);

      const svg = d3.select('#map-container').append('svg')
        .attr('width', width)
        .attr('height', height);

      const path = d3
        .geoPath()
        .projection(projection);

      // Tooltip
      const tooltip = d3.select('#map-container')
        .append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0)
        .style('position', 'absolute')
        .style('border', '1px solid')
        .style('background-color', 'white')
        .style('padding', '12px 24px')
        .style('border-radius', '15px');

      tooltip.html(`
      <div=class"tooltip">
        <div class="tooltip-header">
          <div class="tooltip-country"></div>
          <div class="tooltip-url"></div>
        </div>
        <div class="tooltip-headline"></div>
      </div>
      `);

      svg.selectAll('path')
        .data(geojson.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', (d) => setClass(d))
        .attr('fill', (d) => setColor(d));

      d3.selectAll('.no-headline').attr('class', styles['no-headline']);

      d3.selectAll('.headline')
        .attr('class', styles['headline'])
        .on('click', (d, t) => {
          console.log(this, d.properties.SOVEREIGNT, d.properties.headline);
        })
        .on('mouseover', (d) => {
          console.log(d3.event.x);
          const mouseCoords = [d3.event.x, d3.event.y];
          const xPosition = mouseCoords[0];
          const yPosition = mouseCoords[1];
          console.log(mouseCoords);

          const xOffset = 10;
          const yOffset = 10;

          d3.select('.tooltip')
            .style('opacity', 1)
            .style('left', (xPosition + xOffset).toString() + 'px')
            .style('top', (yPosition + yOffset).toString() + 'px')
            .style('word-wrap', 'break-word')
            .style('max-width', '350px');

          d3.select('.tooltip-header')
            .style('display', 'grid')
            .style('grid-template-columns', '50% 50%')
            .style('width', '100%');

          d3.select('.tooltip-country')
            .style('color', '#8b0000')
            .style('font-weight', 'bold')
            .text(d.properties.SOVEREIGNT);

          d3.select('.tooltip-url')
            .style('font-style', 'italic')
            .style('color', 'gray')
            .text(d.properties.url);

          d3.select('.tooltip-headline')
            .text(d.properties.headline);
        })

        .on('mouseout', () => {
          d3.select('.tooltip').style('opacity', 0);
        });
    }

    let dataById = [];

    const fetchData = () => {
      const headlines = headlineData; // here
      
      const headlinesTest = fetch('www.amazon.com/')
      .then((response) => response.json())
      .catch((err) => {
        console.error(err);
      });

      console.log(headlinesTest);

      headlines.forEach((d) => {
        dataById[d['cca3']] = {
          headline: d['headline'],
          url: d['url']
        };
      });

      console.log('dataById', dataById);
      buildMap();
    };
    fetchData();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (<div id='map-container'></div>);
  }
}

export default Map;