import { Edit } from "@refinedev/antd";

export const RecipeEdit = () => {
  return (
    <Edit
      saveButtonProps={{ style: { display: "none" } }}
      headerButtons={() => null}
      breadcrumb={false}
    ></Edit>
  );
};
