import type { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
  {
    name: "Dashboard",
    list: "/dashboard",
    create: "/dashboard/create",
    edit: "/dashboard/edit/:id",
    show: "/dashboard/show/:id",
    meta: {
      icon: <img src={"/assets/icons/dashboard.svg"} />,
      label: "Dashboard",
    },
  },
  {
    name: "Contacts",
    list: "/contacts",
    create: "/contacts/create",
    edit: "/contacts/edit/:id",
    show: "/contacts/show/:id",
    meta: {
      icon: <img src={"/assets/icons/contacts.svg"} />,
      label: "Contacts",
    },
  },
  {
    name: "recipes",
    list: "/recipes",
    create: "/recipes/create",
    edit: "/recipes/edit/:id",
    show: "/recipes/show/:id",
    meta: {
      icon: <img src={"/assets/icons/recipes.svg"} />,
      label: "Recipes",
    },
  },
  {
    name: "Menu Engineering",
    list: "/menuEngineering",
    create: "/menuEngineering/create",
    edit: "/menuEngineering/edit/:id",
    show: "/menuEngineering/show/:id",
    meta: {
      icon: <img src={"/assets/icons/menu.svg"} />,
      label: "Menu Engineering",
    },
  },
  {
    name: "Inventory",
    list: "/inventory",
    create: "/inventory/create",
    edit: "/inventory/edit/:id",
    show: "/inventory/show/:id",
    meta: {
      icon: <img src={"/assets/icons/inventory.svg"} />,
      label: "Inventory",
    },
  },
  {
    name: "Nutritional",
    list: "/nutritional",
    create: "/nutritional/create",
    edit: "/nutritional/edit/:id",
    show: "/nutritional/show/:id",
    meta: {
      icon: <img src={"/assets/icons/nutritional.svg"} />,
      label: "Nutritional",
    },
  },
  {
    name: "Reporting",
    list: "/reporting",
    create: "/reporting/create",
    edit: "/reporting/edit/:id",
    show: "/reporting/show/:id",
    meta: {
      icon: <img src={"/assets/icons/report.svg"} />,
      label: "Reporting",
    },
  },

  {
    name: "Integrations",
    list: "/integrations",
    create: "/integrations/create",
    edit: "/integrations/edit/:id",
    show: "/integrations/show/:id",
    meta: {
      icon: <img src={"/assets/icons/integrations.svg"} />,
      label: "Integrations",
    },
  },
  {
    name: "Settings",
    list: "/settings",
    create: "/settings/create",
    edit: "/settings/edit/:id",
    show: "/settings/show/:id",
    meta: {
      icon: <img src={"/assets/icons/settings.svg"} />,
      label: "Settings",
    },
  },
];
