import { _prod__ } from "./constants"
import { Post } from "./entities/Post"
import { MikroORM } from "@mikro-orm/core"
import path from 'path';

console.log("dirname: ", __dirname);
export default{
    migrations: {
        path: path.join(__dirname, "./migrations"), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities: [Post],
    dbName: 'blogsite',
    type: 'postgresql',
    // when not in prod, we want debug to be true
    debug: !_prod__,
    //user: 'postgres',
    password: 'traceon5739'
} as Parameters<typeof MikroORM.init>[0]; //necessary to resolve type issues