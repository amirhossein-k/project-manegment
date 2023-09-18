import React from "react";
import Layout from "../layout/Layout";
import number_format from "number-formatierer";

const DefultBody = ({item}: {item: any}) => {
  return item.title === "buy" ||
    item.title === "sale" ||
    item.title === "kom" ||
    item.title === "sod" ? (
    <Layout size={"price"} key={item.title + "1"}>
      {item.subtitle ? <> {number_format(item.subtitle)} میلیون</> : <p></p>}
    </Layout>
  ) : (
    <Layout size={"noprice"} key={item.id + "2"}>
      {item.subtitle ? <Layout>{item.subtitle}</Layout> : ""}
    </Layout>
  );
};

export default DefultBody;
