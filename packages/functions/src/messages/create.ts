import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { EventBridgeClient, PutEventsCommand } from "@aws-sdk/client-eventbridge";

const client = new EventBridgeClient({});
export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const command = new PutEventsCommand({
    Entries: [
      {
        Source: "Q4-event-bus",
        DetailType: "messageCreated",
        Detail: JSON.stringify({
          message: "Message created",
        }),
      },
    ],
  });
  const response = await client.send(command);
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: response,
      event,
    }),
  };
};