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

export const BlogPostList = () => {
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
      >
        <Table.Column
          dataIndex="name"
          title="Recipe Name"
          sorter={{ multiple: 1 }}
        />
        <Table.Column
          dataIndex="category"
          title="Category"
          sorter={{ multiple: 2 }}
        />
        <Table.Column
          dataIndex="Type"
          title="Type"
          sorter={{ multiple: 3 }}
          render={(value: string) => (
            <TagField value={"Bulk Recipe"} color="blue" />
          )}
        />
        <Table.Column
          dataIndex="total_yield"
          title="Yields"
          sorter={{ multiple: 4 }}
        />
        <Table.Column
          dataIndex="servings"
          title="No.of Serving"
          sorter={{ multiple: 5 }}
        />
        <Table.Column
          dataIndex={"recipeCost"}
          title={"Recipes Cost"}
          sorter={{ multiple: 6 }}
        />
        <Table.Column
          dataIndex={"foodCosts"}
          title={"Food Cost"}
          sorter={{ multiple: 6 }}
        />
        <Table.Column
          dataIndex={"materialCosts"}
          title={"Material Cost"}
          sorter={{ multiple: 6 }}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record?.id} />
              <ShowButton hideText size="small" recordItemId={record?.id} />
              <DeleteButton hideText size="small" recordItemId={record?.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
