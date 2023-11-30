interface IAction {
    type: string;
    item?: any;
}
declare const initialState: Array<Object>;
declare function queueReducer(queue: Array<Object>, action: IAction): boolean | Object;
export { initialState, queueReducer };
