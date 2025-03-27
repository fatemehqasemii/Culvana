import { Edit } from "@refinedev/antd";

export const BlogPostEdit = () => {
  return (
    <Edit
      saveButtonProps={{ style: { display: "none" } }}
      headerButtons={() => null}
      breadcrumb={false}
    ></Edit>
  );
};
