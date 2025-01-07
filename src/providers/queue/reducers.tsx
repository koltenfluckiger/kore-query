interface IAction {
  type: string;
  item?: any;
}

const initialState: Array<Object> = [];

function queueReducer(queue: Array<Object>, action: IAction) {
  switch (action.type) {
    case "add":
      return [...queue, action.item];
    case "remove":
      return queue.filter((i) => i !== action.item);
    case "clear":
      return [];
    case "first":
      return queue[0] || null;
    case "last":
      return queue[queue.length - 1] || null;
    case "empty":
      return queue.length === 0;
    default:
      throw new Error("Invalid action type");
  }
}

export {initialState, queueReducer};
