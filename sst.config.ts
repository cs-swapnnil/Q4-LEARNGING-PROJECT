import { SSTConfig } from "sst";
import { API } from "./stacks/ApiStack";
import { Auth } from "./stacks/AuthStack";
import { EventBusStack } from "./stacks/EventBusStack";
import { Queue } from "./stacks/QueueStack";

export default {
  config(_input) {
    return {
      name: "aws-serverless-nx",
      region: "ap-south-1",
    };
  },
  stacks(app) {
    app.stack(Auth);
    app.stack(API)
    app.stack(EventBusStack)
    app.stack(Queue);
  },
} satisfies SSTConfig;






