import Mock from "mockjs";

import httpdata from "./http"

Mock.mock("/home/getdata", "get", httpdata.getData)
Mock.mock("/home/postdata", "post", httpdata.postData)