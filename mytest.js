import '@babel/polyfill/noConflict';
import {Prisma} from 'prisma-binding';

const prisma = new Prisma({
    typeDefs: 'prisma.graphql',
    endpoint: 'http://localhost:9000/drreddy-prj-dev',
    secret: 'mysecret',
})

const verticalsRes = prisma.query.verticals(null,'{id,vertical}');
verticalsRes.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err.message+"=="+process.env.PRISMA_SECRET+"===>");
})
