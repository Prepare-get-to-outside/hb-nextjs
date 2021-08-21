import Axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Divider, Header, Loader, Dimmer } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';

export default function Home({ list }) {
  return (
    <div>

      <Head>
        <title> Deveeni | NextJS </title>
        <meta name="description" content="Deveeni Home"></meta>
      </Head>


      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
          </Header>
      <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
          </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
    </div>
  )
}

export async function getStaticProps() {
  //serverSide 내부는 브라우저 환경이 아니다. 서버 내부에서 동작하기 때문에 window 같은것 사용하면 안됨 
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    }
  }
}