import { StackContext, EventBus } from "sst/constructs";

export function EventBusStack({ stack }: StackContext) {
  const eventBus = new EventBus(stack, 'eventBus', {
    cdk: {
      eventBus: {
        eventBusName: 'Q4-event-bus',
      },
    },
  });

  eventBus.addRules(stack, {
    "user.created": {
      pattern: { source: ["user.service"], detailType: ["UserCreated"] },
      targets: {
        notifyAdmin: 'packages/functions/src/notify-admin.handler',
      },
    },
  });
  return { eventBus };
}