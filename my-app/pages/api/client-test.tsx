import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
    req:NextApiRequest, 
    res:NextApiResponse
){
    await client.user.create({
    data:{
        email:"baba@naver.com",
        name:"joycoding11"
    },
});
    res.json({
        ok:true,
        data:"Hello World"
    })
}