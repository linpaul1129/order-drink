import Mock from "mockjs";

import httpdata from "./http"

Mock.mock("http://127.0.0.1:5173/home/getdata", "get", httpdata.getData)
Mock.mock("http://127.0.0.1:5173/home/postdata", "post", httpdata.postData)