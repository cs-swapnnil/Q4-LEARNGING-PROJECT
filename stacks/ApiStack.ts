import { StackContext, Api, use } from "sst/constructs";
import { Auth } from "./AuthStack";

export function API({ stack }: StackContext) {
  const { auth } = use(Auth);

  const api = new Api(stack, "api", {
    authorizers: {
      jwt: {
        type: "user_pool",
        userPool: {
          id: auth.userPoolId,
          clientIds: [auth.userPoolClientId],
        },
      },
    },
    defaults: {
      authorizer: "jwt",
    },
    routes: {
      "GET /users": "packages/functions/src/users/list.handler",
      "POST /messages": "packages/functions/src/messages/create.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return { api };
}