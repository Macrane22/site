import React, { Component } from 'react';
/* import { select } from 'd3-selection'; */
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
/* import { json } from 'd3-request';
 */import { geoRobinson } from 'd3-geo-projection';
import mapData from './map.json';
import headlineData from './data/headlines/headlines.json';
import styles from './Map.module.scss';
import ReactMarkdown from 'react-markdown';


/* const HEADLINE_JSON_PATH = './data/headlines/headlines.json';
const MAP_JSON_PATH = './countries.json'; // './data/headlines/countries.json';
 */
const width = 1900; // window.innerWidth
const height = 1200; // window.innerHeight;


class Map extends Component {
  componentDidMount() {
    console.log('mounted');
    /*     const data = fetch(MAP_JSON_PATH).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
    });
    console.log('DATA:', data); */

/*     function selectCountryFromTopoJson(topo, cca3) {
      return topo.objects.ne_10m_admin_0_countries.geometries.filter(
        (geom) => geom.properties.BRK_A3 === cca3
      );
    } */

/*     function bindHeadlinesToCountries(topology, headlines) {
      console.log(headlines);
      headlines.forEach((headline) => {
        const { country } = headline;
        const topo = selectCountryFromTopoJson(topology, country);
        return headlines;
      });
    } */

    function setClass(d) {
      return d.properties.headline != null ? 'headline' : 'no-headline';
    }

    function setColor(d) {
      return d.properties.headline != null ? 'skyblue' : 'lightgray';
    }

    function buildMap() {

      const geojson = topojson
      .feature(mapData, mapData.objects.ne_10m_admin_0_countries);

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
        .attr('width', width) // $('#map-container').width())
        .attr('height', height); // $('#map-container').height())

      const path = d3
        .geoPath()
        .projection(projection);

/*       const bounds = d3.geoBounds(geojson);
      const center = d3.geoCentroid(geojson);
      const distance = d3.geoDistance(bounds[0], bounds[1]);
      const scale = height / distance / Math.sqrt(2); */


      /* const coast = topojson.feature(map, map.objects.border); */

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
/*      .style('width', '100px')
        .style('height', '100px'); */

      tooltip.html(`
      <div=class"tooltip">
        <div class="tooltip-header">
          <div class="tooltip-country"></div>
          <div class="tooltip-url"></div>
        </div>
        <div class="tooltip-headline"></div>
      </div>
      `);
      
/*       tooltip.selectAll('.country').append('div').attr('class', '.country').style('width', 100).style('height', 100).style('border', '1px solid'); */
      
/*       d3.select('.tooltip').append('p').attr('class', 'country').text('COUNTRY'); */ // doesn't work

      svg.selectAll('path')
        //.attr('class', styles['map'])
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
          // const mouseCoords = d3.mouse(this);
          console.log(d3.event.x);
          const mouseCoords = [d3.event.x, d3.event.y];
          const xPosition = mouseCoords[0];
          const yPosition = mouseCoords[1];
          console.log(mouseCoords);
          /*
          svg.append('text')
            .attr('id', 'tooltip')
            .attr('x', xPosition)
            .attr('y', yPosition)
            .attr('text-anchor', 'middle')
            .attr('font-family', 'sans-serif')
            .text(d)
            .text(`${d.properties.SOVEREIGNT}: ${d.properties.headline}`); */

            const xOffset = 10;
            const yOffset = 10;

          d3.select('.tooltip')
            .style('opacity', 1)
            .style('left', (xPosition + xOffset).toString() + 'px')
            .style('top', (yPosition + yOffset).toString() + 'px')
            .style('word-wrap', 'break-word')
            .style('max-width', '350px');
            
            //.text(`${d.properties.SOVEREIGNT}: ${d.properties.headline}`);

          d3.select('.tooltip-header')
          .style('display', 'grid')
          .style('grid-template-columns', '50% 50%')
          .style('width', '100%');
          //.style('justify-items', 'self-start');

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
/*       fetch(MAP_JSON_PATH).then((res) => res.text()).then((data) => console.log('data', data)).catch((error) => console.log('Error', error));

      Promise.all([
        json(MAP_JSON_PATH),
        json(HEADLINE_JSON_PATH)])
        .then(([topology, headlines]) => { */
/*       console.log('headlines', headlineData);
      console.log('topology', mapData); */
      const headlines = headlineData;

      headlines.forEach((d) => {
        dataById[d['cca3']] = {
          headline: d['headline'],
          url: d['url']
        };
      });

      console.log('dataById', dataById);

      /* bindHeadlinesToCountries(mapData, headlines); */
      buildMap();
      // });
    /* select('#map-container').append('svg').style('border', '2px solid gold'); */
    };
    fetchData();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (<div id = 'map-container'> </div>);
  }
}

export default Map;