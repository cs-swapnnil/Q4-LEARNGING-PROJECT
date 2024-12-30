import { StackContext, Queue } from "sst/constructs";

export function Queue({ stack }: StackContext) {
  const queue = new Queue(stack, "Queue", {
    consumer: "packages/functions/src/queues/processor.handler",
  });

  return { queue };
}