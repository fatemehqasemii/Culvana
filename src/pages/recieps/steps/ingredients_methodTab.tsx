import { FC } from "react";
import { Table, Col, Row, Card } from "antd";

interface Ingredient {
  id: number;
  ingredient: string;
  recipe_amount: string;
  inventory_unit: string;
  note?: string;
}

interface InventoryItem {
  ingredient: string;
  recipe_amount: string;
  inventory_item: string;
  inventory_unit: string;
  converted_amount: number;
  unit_cost: number;
  total_cost: number;
  per_serving: {
    amount: number;
    unit: string;
    converted_amount: number;
    cost: number;
  };
  is_retail_estimate: boolean;
}

interface IngredientsMethodTabProps {
  ingredients?: Ingredient[];
}

export const IngredientsMethodTab: FC<IngredientsMethodTabProps> = ({
  ingredients = [],
}) => {
  const inventoryData: InventoryItem[] = [
    {
      ingredient: "green bell peppers",
      recipe_amount: "18 unit",
      inventory_item: "green bell peppers",
      inventory_unit: "unit",
      converted_amount: 18,
      unit_cost: 1.48,
      total_cost: 26.64,
      per_serving: {
        amount: 0.45,
        unit: "unit",
        converted_amount: 0.45,
        cost: 0.666,
      },
      is_retail_estimate: true,
    },
    {
      ingredient: "mixed color bell peppers",
      recipe_amount: "12 unit",
      inventory_item: "mixed color bell peppers",
      inventory_unit: "unit",
      converted_amount: 12,
      unit_cost: 0.62,
      total_cost: 7.44,
      per_serving: {
        amount: 0.3,
        unit: "unit",
        converted_amount: 0.3,
        cost: 0.186,
      },
      is_retail_estimate: true,
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Card title="No Idea" variant="borderless">
          <Table
            rowKey="id"
            pagination={false}
            bordered={false}
            showHeader={false}
            dataSource={ingredients}
          >
            <Table.Column<Ingredient> dataIndex="ingredient" />
            <Table.Column<Ingredient> dataIndex="recipe_amount" />
            <Table.Column<Ingredient> dataIndex="inventory_unit" />
            <Table.Column<Ingredient> dataIndex="note" />
          </Table>
        </Card>
      </Col>

      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Card title="Recipes" variant="borderless">
          <Table
            pagination={false}
            dataSource={inventoryData}
            rowKey={(record) => record.inventory_item}
            bordered={true}
            showHeader={false}
          >
            <Table.Column<InventoryItem> dataIndex="inventory_item" />
            <Table.Column<InventoryItem> dataIndex="unit_cost" />
          </Table>
        </Card>
      </Col>
    </Row>
  );
};
