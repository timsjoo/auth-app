import connectMongo from "../../../server/conn";
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  connectMongo().catch(error => res.json({error: "Connection Failed!"}))

  if( req.method === 'POST'){

    if(!req.body) return res.status(404).json({error: "No Form Data Found!"});
    const {username, email, password} = req.body;

    // check duplicate users
    const checkExisting = await Users.findOne({email: email});
    if(checkExisting) return res.status(422).json({error: "User already exists!"});

    Users.create({username, email, password: await hash(password, 12)}, function(err, data) {
      if ( err ) return res.status(404).json({err});
      res.status(201).json({ status: true, user: data});
    })

  } else {
    res.status(500).json({message: "HTTP method not valid, only POST is allowed"})
  }
}