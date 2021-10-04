import { MikroORM } from "@mikro-orm/core"
import { _prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
    // connects to the database
    const orm = await MikroORM.init(microConfig);
    // runs the migrations
    await orm.getMigrator().up();
    // constructor for a Post, and runs SQL
    // const post = orm.em.create(Post, {title: 'my first post'});
    // await orm.em.persistAndFlush(post);

    // const posts = await orm.em.find(Post, {});
    // console.log(posts);
};

// useful for getting more information on an error that occurs
main().catch((err) => {
    console.error(err)
});