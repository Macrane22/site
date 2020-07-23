// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/FullPage/Header/Header';
import FullPage from '../components/FullPage/FullPage';
import { useSiteMetadata } from '../hooks';
import Tabs from '../components/Tabs/Tabs';
import Poststyles from '../components/Post/Post.module.scss';
import Map from '../components/Map/Map';
import styles from '../components/FullPage/FullPage.module.scss';
/* import ReactMarkdown from 'react-markdown'; */
import Tooltip from '../components/Map/Tooltip';

const Headlines = () => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const metaDescription = siteSubtitle;

  /*   const md = `### Header
  Lalala`; */

  return (
    <>
     {/* <Layout title={`${siteTitle}`} description={metaDescription} > */}
     <Header title={ `Headlines of the World` }></Header>
    {/*  <Tooltip className={'mytooltip'} /> */}
     {/* <Link className={Poststyles['post__home-button']} to="/">Home</Link>  */}
     {/* <ReactMarkdown source={md}></ReactMarkdown> */}
{/*
    <FullPage title={'Headlines'} alignment={'full-page__tabs_right'}>

      <Tabs>
        <div label="Map">

          <Map/>
        </div>
        <div label="About">
          <p>About</p>
        </div>
        <div label="List">
          <p>List</p>
        </div>
      </Tabs>

    </FullPage> */}
{/*</Layout>*/}
</>
  );
};

export default Headlines;
