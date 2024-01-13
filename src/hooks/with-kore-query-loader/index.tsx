import {LoadingComponent} from "../../components";
import React from "react";
import {flatten} from "../../utils";

const withKoreQueryLoader = (Component: React.ComponentType<any>) => (props: any) => {
  const query = props.query;
  const queryOptions = props.queryOptions;
  const {data, isLoading} = query(queryOptions);

  if (isLoading) {
    return <LoadingComponent></LoadingComponent>;
  }
  const flatData = flatten(data).data;

  return <Component {...props}>{props.render(flatData)}</Component>;
};
export default withKoreQueryLoader;
