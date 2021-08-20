import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head'


import Item from '../../src/component/Item';

const Post = ({ item, name }) => {

    return (
        <>
            <Head>
                <title> Deveeni | {item.name} </title>
                <meta name="description" content={item.description}></meta>
            </Head>
            {name} 환경입니다.
            <Item item={item} />
        </>
    )

}

export default Post;

export async function getServerSideProps(context) {
//serverSide 내부는 브라우저 환경이 아니다. 서버 내부에서 동작하기 때문에 window 같은것 사용하면 안됨 
    const id = context.params.id;
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(API_URL);
    const data = res.data;

    return {
        props: {
            item: data,
            name: process.env.name,
        }
    }

}