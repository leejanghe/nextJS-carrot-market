import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";



// export default async function handler(
//     req:NextApiRequest, 
//     res:NextApiResponse
// ){
//     if(req.method !== "POST"){
//         res.status(401).end();
//     }
//     console.log(req.body)
//     res.status(200).end();
//     // res.json({ok:true})
// }

async function handler(req:NextApiRequest, res:NextApiResponse){
    // console.log(req.body)
    const {email,phone} = req.body;
    const payload = phone ? {phone: +phone} : {email};
    const user = await client.user.upsert({
        where:{
            ...payload,
        },
        create:{
            name:"Anonymous",
            ...payload,
        },
        update:{
        }
    })
console.log(user)

  /* if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) console.log("found it.");
    if (!user) {
      console.log("Did not find. Will create.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          email,
        },
      });
    }
    console.log(user);
  }
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) console.log("found it.");
    if (!user) {
      console.log("Did not find. Will create.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          phone: +phone,
        },
      });
    }
    console.log(user);
  } */
  return res.status(200).end();
}

export default withHandler("POST",handler);