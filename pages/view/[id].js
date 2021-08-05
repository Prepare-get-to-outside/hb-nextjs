import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head'


import Item from '../../src/component/Item';

const Post = ({ item }) => {

    return (
        <>
            <Head>
                <title> Deveeni | {item.name} </title>
                <meta name="description" content={item.description}></meta>
            </Head>
            <Item item={item} />
        </>
    )

}

export default Post;

export async function getServerSideProps(context) {

    const id = context.params.id;
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(API_URL);
    const data = res.data;

    return {
        props: {
            item: data,
        }
    }

}