import React, { useRef, useEffect } from 'react';
import styles from './About.module.scss';
/* import { Link } from 'gatsby'; */
import ReactMarkdown from 'react-markdown';
/* import mdfile from './about.md';
import marked from 'marked'; */

const md = `
### Background & motivation
This project is a rough attempt to build a news aggregator that displays headlines from countries around the world. Although the web is full of international news aggregators, their scope is understandably limited to stories that will appeal to a wide audience.

To that end, I have identified a single online news source for each country. A twice-daily cron script extracts a headline from each news source. Because the goal of this project is to provide a world-news-at-a-glance view, and because few people are polyglots, all news sources are in English. This naturally presents a dilemma, because many countries do not have online English news sources (in many cases their online media is scarce even in their own language). This is particularly true of Africa and Latin America. As such, there are gaps in the map. I decided to build this map back when Covid first hit, and I was looking for a source of local news from around the world. 

### Scope of countries
The countries included here are all on the list of “countries, dependent territories, and special areas of geographical interest” as laid out by [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1). This list includes all 193 UN-recognized nation states, as well as other states that either are not fully autonomous or aren’t fully recognized by the UN. These include geographically distinct territories like Greenland and de facto independent states like Somaliland.

### Identifying news sources
I used the following criteria to identify a canonical news source for each country, where possible:
* **Widely read and known in that nation:** Many countries have one or multiple so-called ‘newspapers of record.’ I used these where there was an English-language version available. In many cases, a nation’s most celebrated news source didn’t have an English version  (e.g. France’s *Le Monde* and Germany’s *Die Welle*)
* **Generally balanced in its reporting:** While all major news sources have a political swing, I ignored those that plainly represented a viewpoint that is not shared by a significant plurality of the nation’s citizens.
* **Owned and operated by people within the country**, with its reporters and major operations primarily based there
* **Privately owned and run** (i.e. neither government-owned nor government-run)

In many cases, it is not possible to find an online news site that fulfills all of these criteria. Frequently, they are mutually exclusive. For example, in nations without free independent media, the predominant news source will be government-run, and any independent news will likely be run by expats in foreign countries. I used my own discretion in these cases.

I should note that this project is not intended to be a comprehensive or scholarly resource; rather, it is intended to be a fun snapshot of newsworthy life around the world, much of which is too mundane or region-specific to be represented in conventional news aggregators.

### Identifying headlines
Currently, partly out of simplicity and partly to minimize running afoul of fair use clauses, I display only a single headline at a time per news source. I use one script to extract headlines from all of the news webpages. This one-size-fits-all approach presents a challenge, because each site has its own markup and layout. The degree to which these websites employ best practices in their markup (e.g. using <h> tags for headlines, but not for section headers) varies widely.

Apart from preferring text that falls between tags likely to contain a headline (particularly <h1> - <h5> tags), I assume that headlines usually fulfill the following criteria:

* Contain several words (they are almost never one word and seldom two)
* Contain a verb
* Don’t include certain self-referential words and phrases such as ‘newsletter’ or ‘please click here’

These heuristics filter out most section headers, special announcements, and other prominent text that might look like a headline based solely on the underlying HTML. These rules are imperfect, but following them works 90%+ of the time, which is preferable to endlessly smoothing out a carpet that will never lay fully flat.

In a more robust version, a model could help my script correctly identify headlines and discard other markup, but this fast and dirty approach is more than 90% effective. 
`


class About extends React.Component {

  componentDidMount() {
  /* const mdpath = './about.md';
    fetch(mdpath).then(response => {
      return response.text()
    }).then(text => {
      this.setState({
        markdown: marked(text)
      })
    })
    console.log('state', this.state); */
  }

  render() {
  /*     const { markdown } = this.state;
    console.log('state', this.state); */

    return (
    <div className={styles['about']}>
        {<ReactMarkdown source={md}></ReactMarkdown> }
    </div>
    );
  }
};


export default About;