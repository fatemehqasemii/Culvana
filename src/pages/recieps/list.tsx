import { SearchOutlined } from "@ant-design/icons";
import {
  CreateButton,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  TagField,
  useTable,
} from "@refinedev/antd";
import { Col, Input, Row, Select, Space, Table } from "antd";
import { OptionsCategory, OptionsStatus } from "../../enums";
import { BaseRecord } from "@refinedev/core";
import { ColumnType } from "antd/es/table";
import { RecipeRecord } from "./recipes.types";

export const Recipes = () => {
  const { tableProps } = useTable({
    resource: "recipes",
    syncWithLocation: true,
    initialSorter: [
      { field: "recipeName", order: "asc" },
      { field: "category", order: "asc" },
      { field: "type", order: "asc" },
      { field: "yield", order: "asc" },
      { field: "serving", order: "asc" },
    ],
  });

  const columns: ColumnType<BaseRecord>[] = [
    {
      dataIndex: "name",
      title: "Recipe Name",
      sorter: { multiple: 1 },
    },
    {
      dataIndex: "category",
      title: "Category",
      sorter: { multiple: 2 },
    },
    {
      dataIndex: "Type",
      title: "Type",
      sorter: { multiple: 3 },
      render: (value: any, record: BaseRecord) => {
        const recipeRecord = record as RecipeRecord;
        return <TagField value={recipeRecord.Type} color="blue" />;
      },
    },
    {
      dataIndex: "total_yield",
      title: "Yields",
      sorter: { multiple: 4 },
    },
    {
      dataIndex: "servings",
      title: "No.of Serving",
      sorter: { multiple: 5 },
    },
    {
      dataIndex: "recipeCost",
      title: "Recipes Cost",
      sorter: { multiple: 6 },
    },
    {
      dataIndex: "foodCosts",
      title: "Food Cost",
      sorter: { multiple: 6 },
    },
    {
      dataIndex: "materialCosts",
      title: "Material Cost",
      sorter: { multiple: 6 },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (value: any, record: BaseRecord) => {
        const recipeRecord = record as RecipeRecord;
        return (
          <Space>
            <EditButton hideText size="small" recordItemId={recipeRecord?.id} />
            <ShowButton hideText size="small" recordItemId={recipeRecord?.id} />
            <DeleteButton
              hideText
              size="small"
              recordItemId={recipeRecord?.id}
            />
          </Space>
        );
      },
    },
  ];

  return (
    <List
      headerButtons={() => (
        <Row gutter={[16, 16]}>
          <Col flex="auto">
            <Select
              placeholder="Categories: All"
              options={OptionsCategory}
              allowClear
              style={{ width: 200 }}
            />
          </Col>
          <Col flex="auto">
            <Select
              placeholder="Status: All"
              options={OptionsStatus}
              style={{ width: 200 }}
              allowClear
            />
          </Col>
          <Col flex="auto">
            <Input
              placeholder="Search"
              suffix={<SearchOutlined />}
              style={{ width: 200 }}
            />
          </Col>
          <Col flex="auto">
            <CreateButton onClick={() => {}}>Add New Recipe</CreateButton>
          </Col>
          <Col flex="auto">
            <CreateButton icon={false}>Upload</CreateButton>
          </Col>
        </Row>
      )}
    >
      <Table
        {...tableProps}
        columns={columns}
        rowKey="id"
        pagination={{
          ...tableProps.pagination,
          showSizeChanger: false,
          showTotal: (total) => (
            <span
              style={{
                marginLeft: "16px",
              }}
            >
              <span
                className="ant-text secondary"
                style={{
                  marginRight: "5px",
                }}
              >
                {total}
              </span>
              in total
            </span>
          ),
        }}
      />
    </List>
  );
};
