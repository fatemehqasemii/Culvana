import { Col, Row, Table, Typography } from "antd";

interface CostItem {
  id: number;
  inventory_item: string;
  unit_cost: number;
  food_cost_percentage?: number;
  material_cost?: number;
  material_cost_percentage?: number;
}

interface CostProps {
  cost: CostItem[];
}

export const Cost: React.FC<CostProps> = ({ cost }) => {
  const { Title, Text } = Typography;

  return (
    <Row gutter={[24, 24]}>
      <Col sm={24} md={24} lg={24}>
        <div style={{ display: "flex", gap: 50 }}>
          <div>
            <Title level={5}>Sell Price</Title>
            <Text>26.64</Text>
          </div>
          <div>
            <Title level={5}>Profit</Title>
            <Text>1.48</Text>
          </div>
        </div>
      </Col>
      <Col sm={24} md={24} lg={24}>
        <Table pagination={false} bordered dataSource={cost} rowKey="id">
          <Table.Column dataIndex="inventory_item" title="Total Cost" />
          <Table.Column dataIndex="unit_cost" title="Food Cost" />
          <Table.Column dataIndex="food_cost_percentage" title="Food Cost%" />
          <Table.Column dataIndex="material_cost" title="Material Cost" />
          <Table.Column
            dataIndex="material_cost_percentage"
            title="Material Cost%"
          />
        </Table>
      </Col>
      <Col sm={24} md={24} lg={24}>
        <Table
          pagination={false}
          dataSource={cost}
          rowKey="id"
          bordered={false}
          showHeader={false}
        >
          <Table.Column dataIndex="inventory_item" />
          <Table.Column dataIndex="unit_cost" />
          <Table.Column dataIndex="food_cost_percentage" />
          <Table.Column dataIndex="material_cost" />
        </Table>
      </Col>
    </Row>
  );
};
