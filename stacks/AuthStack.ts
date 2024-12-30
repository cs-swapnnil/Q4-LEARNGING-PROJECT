import { StackContext, Cognito } from "sst/constructs";

export function Auth({ stack }: StackContext) {
  const auth = new Cognito(stack, "Auth", {
    login: ["email"],
  });

  stack.addOutputs({
    UserPoolId: auth.userPoolId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
  });

  return { auth };
}