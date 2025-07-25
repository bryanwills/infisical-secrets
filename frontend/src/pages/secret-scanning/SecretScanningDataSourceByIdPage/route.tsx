import { createFileRoute, linkOptions } from "@tanstack/react-router";

import { SecretScanningDataSourceByIdPage } from "./SecretScanningDataSourceByIdPage";

export const Route = createFileRoute(
  "/_authenticate/_inject-org-details/_org-layout/projects/secret-scanning/$projectId/_secret-scanning-layout/data-sources/$type/$dataSourceId"
)({
  component: SecretScanningDataSourceByIdPage,
  beforeLoad: ({ context, params }) => {
    return {
      breadcrumbs: [
        ...context.breadcrumbs,
        {
          label: "Data Sources",
          link: linkOptions({
            to: "/projects/secret-scanning/$projectId/data-sources",
            params
          })
        },
        {
          label: "Details"
        }
      ]
    };
  }
});
