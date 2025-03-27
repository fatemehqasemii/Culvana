import { EditButton, ExportButton, Show } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Button, Tabs, TabsProps } from "antd";
import { Nutritional } from "./steps/nutritional";
import { IngredientsMethodTab } from "./steps/ingredients_methodTab";
import { Cost } from "./steps/cost";

export const BlogPostShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "recipes",
    id: record?.category?.id || "",
    queryOptions: {
      enabled: !!record,
    },
  });
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Ingredients and Method",
      children: (
        <IngredientsMethodTab ingredients={record?.data?.ingredients} />
      ),
    },
    {
      key: "2",
      label: "Cost",
      children: <Cost cost={record?.data?.ingredients} />,
    },
    {
      key: "3",
      label: "Nutritional",
      children: <Nutritional />,
    },
    // {
    //   key: "4",
    //   label: "Feedback",
    //   children: "Content of Feedback Tab",
    // },
    // {
    //   key: "5",
    //   label: "Measurements",
    //   children: "Content of Measurements Tab",
    // },
    // {
    //   key: "6",
    //   label: "Inventory",
    //   children: "Content of Inventory Tab",
    // },
  ];

  return (
    <Show
      headerButtons={
        <>
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              paddingRight: "10px",
            }}
          >
            Batch
            <Button type="default">1x</Button>
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              paddingRight: "10px",
            }}
          >
            Yield
            <Button type="default">20 ea</Button>
          </div>
          <EditButton onClick={() => {}} />
        </>
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ExportButton onClick={() => {}} />
      </div>
      <Tabs defaultActiveKey="1" items={items} />
    </Show>
  );
};
