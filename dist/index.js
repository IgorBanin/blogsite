"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const main = async () => {
    // connects to the database
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
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
    console.error(err);
});
