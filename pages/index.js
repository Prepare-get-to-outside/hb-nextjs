import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Divider, Header, Loader, Dimmer } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios.get(API_URL)
      .then((res => {
        setList(res.data);
        setIsLoading(false);
      }))
  }

  useEffect(() => {
    getData();
  }, []);

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
      {isLoading ?
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
        :
        <>
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      }
    </div>
  )
}
