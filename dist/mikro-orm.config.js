"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const path_1 = __importDefault(require("path"));
console.log("dirname: ", __dirname);
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities: [Post_1.Post],
    dbName: 'blogsite',
    type: 'postgresql',
    // when not in prod, we want debug to be true
    debug: !constants_1._prod__,
    //user: 'postgres',
    password: 'traceon5739'
}; //necessary to resolve type issues
