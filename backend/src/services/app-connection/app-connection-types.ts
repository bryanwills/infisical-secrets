import {
  TOCIConnection,
  TOCIConnectionConfig,
  TOCIConnectionInput,
  TValidateOCIConnectionCredentialsSchema
} from "@app/ee/services/app-connections/oci";
import {
  TOracleDBConnection,
  TOracleDBConnectionInput,
  TValidateOracleDBConnectionCredentialsSchema
} from "@app/ee/services/app-connections/oracledb";
import { TGatewayServiceFactory } from "@app/ee/services/gateway/gateway-service";
import { TAppConnectionDALFactory } from "@app/services/app-connection/app-connection-dal";
import { TSqlConnectionConfig } from "@app/services/app-connection/shared/sql/sql-connection-types";
import { SecretSync } from "@app/services/secret-sync/secret-sync-enums";

import {
  TOnePassConnection,
  TOnePassConnectionConfig,
  TOnePassConnectionInput,
  TValidateOnePassConnectionCredentialsSchema
} from "./1password";
import { AWSRegion } from "./app-connection-enums";
import {
  TAuth0Connection,
  TAuth0ConnectionConfig,
  TAuth0ConnectionInput,
  TValidateAuth0ConnectionCredentialsSchema
} from "./auth0";
import {
  TAwsConnection,
  TAwsConnectionConfig,
  TAwsConnectionInput,
  TValidateAwsConnectionCredentialsSchema
} from "./aws";
import {
  TAzureAppConfigurationConnection,
  TAzureAppConfigurationConnectionConfig,
  TAzureAppConfigurationConnectionInput,
  TValidateAzureAppConfigurationConnectionCredentialsSchema
} from "./azure-app-configuration";
import {
  TAzureClientSecretsConnection,
  TAzureClientSecretsConnectionConfig,
  TAzureClientSecretsConnectionInput,
  TValidateAzureClientSecretsConnectionCredentialsSchema
} from "./azure-client-secrets";
import {
  TAzureDevOpsConnection,
  TAzureDevOpsConnectionConfig,
  TAzureDevOpsConnectionInput,
  TValidateAzureDevOpsConnectionCredentialsSchema
} from "./azure-devops/azure-devops-types";
import {
  TAzureKeyVaultConnection,
  TAzureKeyVaultConnectionConfig,
  TAzureKeyVaultConnectionInput,
  TValidateAzureKeyVaultConnectionCredentialsSchema
} from "./azure-key-vault";
import {
  TBitbucketConnection,
  TBitbucketConnectionConfig,
  TBitbucketConnectionInput,
  TValidateBitbucketConnectionCredentialsSchema
} from "./bitbucket";
import {
  TCamundaConnection,
  TCamundaConnectionConfig,
  TCamundaConnectionInput,
  TValidateCamundaConnectionCredentialsSchema
} from "./camunda";
import {
  TChecklyConnection,
  TChecklyConnectionConfig,
  TChecklyConnectionInput,
  TValidateChecklyConnectionCredentialsSchema
} from "./checkly";
import {
  TCloudflareConnection,
  TCloudflareConnectionConfig,
  TCloudflareConnectionInput,
  TValidateCloudflareConnectionCredentialsSchema
} from "./cloudflare/cloudflare-connection-types";
import {
  TDatabricksConnection,
  TDatabricksConnectionConfig,
  TDatabricksConnectionInput,
  TValidateDatabricksConnectionCredentialsSchema
} from "./databricks";
import {
  TDigitalOceanConnection,
  TDigitalOceanConnectionConfig,
  TDigitalOceanConnectionInput,
  TValidateDigitalOceanCredentialsSchema
} from "./digital-ocean";
import {
  TFlyioConnection,
  TFlyioConnectionConfig,
  TFlyioConnectionInput,
  TValidateFlyioConnectionCredentialsSchema
} from "./flyio";
import {
  TGcpConnection,
  TGcpConnectionConfig,
  TGcpConnectionInput,
  TValidateGcpConnectionCredentialsSchema
} from "./gcp";
import {
  TGitHubConnection,
  TGitHubConnectionConfig,
  TGitHubConnectionInput,
  TValidateGitHubConnectionCredentialsSchema
} from "./github";
import {
  TGitHubRadarConnection,
  TGitHubRadarConnectionConfig,
  TGitHubRadarConnectionInput,
  TValidateGitHubRadarConnectionCredentialsSchema
} from "./github-radar";
import {
  TGitLabConnection,
  TGitLabConnectionConfig,
  TGitLabConnectionInput,
  TValidateGitLabConnectionCredentialsSchema
} from "./gitlab";
import {
  THCVaultConnection,
  THCVaultConnectionConfig,
  THCVaultConnectionInput,
  TValidateHCVaultConnectionCredentialsSchema
} from "./hc-vault";
import {
  THerokuConnection,
  THerokuConnectionConfig,
  THerokuConnectionInput,
  TValidateHerokuConnectionCredentialsSchema
} from "./heroku";
import {
  THumanitecConnection,
  THumanitecConnectionConfig,
  THumanitecConnectionInput,
  TValidateHumanitecConnectionCredentialsSchema
} from "./humanitec";
import {
  TLdapConnection,
  TLdapConnectionConfig,
  TLdapConnectionInput,
  TValidateLdapConnectionCredentialsSchema
} from "./ldap";
import { TMsSqlConnection, TMsSqlConnectionInput, TValidateMsSqlConnectionCredentialsSchema } from "./mssql";
import { TMySqlConnection, TMySqlConnectionInput, TValidateMySqlConnectionCredentialsSchema } from "./mysql";
import {
  TNetlifyConnection,
  TNetlifyConnectionConfig,
  TNetlifyConnectionInput,
  TValidateNetlifyConnectionCredentialsSchema
} from "./netlify";
import {
  TOktaConnection,
  TOktaConnectionConfig,
  TOktaConnectionInput,
  TValidateOktaConnectionCredentialsSchema
} from "./okta";
import {
  TPostgresConnection,
  TPostgresConnectionInput,
  TValidatePostgresConnectionCredentialsSchema
} from "./postgres";
import {
  TRailwayConnection,
  TRailwayConnectionConfig,
  TRailwayConnectionInput,
  TValidateRailwayConnectionCredentialsSchema
} from "./railway";
import {
  TRenderConnection,
  TRenderConnectionConfig,
  TRenderConnectionInput,
  TValidateRenderConnectionCredentialsSchema
} from "./render/render-connection-types";
import {
  TSupabaseConnection,
  TSupabaseConnectionConfig,
  TSupabaseConnectionInput,
  TValidateSupabaseConnectionCredentialsSchema
} from "./supabase";
import {
  TTeamCityConnection,
  TTeamCityConnectionConfig,
  TTeamCityConnectionInput,
  TValidateTeamCityConnectionCredentialsSchema
} from "./teamcity";
import {
  TTerraformCloudConnection,
  TTerraformCloudConnectionConfig,
  TTerraformCloudConnectionInput,
  TValidateTerraformCloudConnectionCredentialsSchema
} from "./terraform-cloud";
import {
  TValidateVercelConnectionCredentialsSchema,
  TVercelConnection,
  TVercelConnectionConfig,
  TVercelConnectionInput
} from "./vercel";
import {
  TValidateWindmillConnectionCredentialsSchema,
  TWindmillConnection,
  TWindmillConnectionConfig,
  TWindmillConnectionInput
} from "./windmill";
import {
  TValidateZabbixConnectionCredentialsSchema,
  TZabbixConnection,
  TZabbixConnectionConfig,
  TZabbixConnectionInput
} from "./zabbix";

export type TAppConnection = { id: string } & (
  | TAwsConnection
  | TGitHubConnection
  | TGitHubRadarConnection
  | TGcpConnection
  | TAzureKeyVaultConnection
  | TAzureAppConfigurationConnection
  | TAzureDevOpsConnection
  | TDatabricksConnection
  | THumanitecConnection
  | TTerraformCloudConnection
  | TVercelConnection
  | TPostgresConnection
  | TMsSqlConnection
  | TMySqlConnection
  | TCamundaConnection
  | TAzureClientSecretsConnection
  | TWindmillConnection
  | TAuth0Connection
  | THCVaultConnection
  | TLdapConnection
  | TTeamCityConnection
  | TOCIConnection
  | TOracleDBConnection
  | TOnePassConnection
  | THerokuConnection
  | TRenderConnection
  | TFlyioConnection
  | TGitLabConnection
  | TCloudflareConnection
  | TBitbucketConnection
  | TZabbixConnection
  | TRailwayConnection
  | TChecklyConnection
  | TSupabaseConnection
  | TDigitalOceanConnection
  | TNetlifyConnection
  | TOktaConnection
);

export type TAppConnectionRaw = NonNullable<Awaited<ReturnType<TAppConnectionDALFactory["findById"]>>>;

export type TSqlConnection = TPostgresConnection | TMsSqlConnection | TMySqlConnection | TOracleDBConnection;

export type TAppConnectionInput = { id: string } & (
  | TAwsConnectionInput
  | TGitHubConnectionInput
  | TGitHubRadarConnectionInput
  | TGcpConnectionInput
  | TAzureKeyVaultConnectionInput
  | TAzureAppConfigurationConnectionInput
  | TAzureDevOpsConnectionInput
  | TDatabricksConnectionInput
  | THumanitecConnectionInput
  | TTerraformCloudConnectionInput
  | TVercelConnectionInput
  | TPostgresConnectionInput
  | TMsSqlConnectionInput
  | TMySqlConnectionInput
  | TCamundaConnectionInput
  | TAzureClientSecretsConnectionInput
  | TWindmillConnectionInput
  | TAuth0ConnectionInput
  | THCVaultConnectionInput
  | TLdapConnectionInput
  | TTeamCityConnectionInput
  | TOCIConnectionInput
  | TOracleDBConnectionInput
  | TOnePassConnectionInput
  | THerokuConnectionInput
  | TRenderConnectionInput
  | TFlyioConnectionInput
  | TGitLabConnectionInput
  | TCloudflareConnectionInput
  | TBitbucketConnectionInput
  | TZabbixConnectionInput
  | TRailwayConnectionInput
  | TChecklyConnectionInput
  | TSupabaseConnectionInput
  | TDigitalOceanConnectionInput
  | TNetlifyConnectionInput
  | TOktaConnectionInput
);

export type TSqlConnectionInput =
  | TPostgresConnectionInput
  | TMsSqlConnectionInput
  | TMySqlConnectionInput
  | TOracleDBConnectionInput;

export type TCreateAppConnectionDTO = Pick<
  TAppConnectionInput,
  "credentials" | "method" | "name" | "app" | "description" | "isPlatformManagedCredentials" | "gatewayId"
>;

export type TUpdateAppConnectionDTO = Partial<Omit<TCreateAppConnectionDTO, "method" | "app">> & {
  connectionId: string;
};

export type TAppConnectionConfig =
  | TAwsConnectionConfig
  | TGitHubConnectionConfig
  | TGitHubRadarConnectionConfig
  | TGcpConnectionConfig
  | TAzureKeyVaultConnectionConfig
  | TAzureAppConfigurationConnectionConfig
  | TAzureDevOpsConnectionConfig
  | TAzureClientSecretsConnectionConfig
  | TDatabricksConnectionConfig
  | THumanitecConnectionConfig
  | TTerraformCloudConnectionConfig
  | TSqlConnectionConfig
  | TCamundaConnectionConfig
  | TVercelConnectionConfig
  | TWindmillConnectionConfig
  | TAuth0ConnectionConfig
  | THCVaultConnectionConfig
  | TLdapConnectionConfig
  | TTeamCityConnectionConfig
  | TOCIConnectionConfig
  | TOnePassConnectionConfig
  | THerokuConnectionConfig
  | TRenderConnectionConfig
  | TFlyioConnectionConfig
  | TGitLabConnectionConfig
  | TCloudflareConnectionConfig
  | TBitbucketConnectionConfig
  | TZabbixConnectionConfig
  | TRailwayConnectionConfig
  | TChecklyConnectionConfig
  | TSupabaseConnectionConfig
  | TDigitalOceanConnectionConfig
  | TNetlifyConnectionConfig
  | TOktaConnectionConfig;

export type TValidateAppConnectionCredentialsSchema =
  | TValidateAwsConnectionCredentialsSchema
  | TValidateGitHubConnectionCredentialsSchema
  | TValidateGitHubRadarConnectionCredentialsSchema
  | TValidateGcpConnectionCredentialsSchema
  | TValidateAzureKeyVaultConnectionCredentialsSchema
  | TValidateAzureAppConfigurationConnectionCredentialsSchema
  | TValidateAzureClientSecretsConnectionCredentialsSchema
  | TValidateAzureDevOpsConnectionCredentialsSchema
  | TValidateDatabricksConnectionCredentialsSchema
  | TValidateHumanitecConnectionCredentialsSchema
  | TValidatePostgresConnectionCredentialsSchema
  | TValidateMsSqlConnectionCredentialsSchema
  | TValidateMySqlConnectionCredentialsSchema
  | TValidateCamundaConnectionCredentialsSchema
  | TValidateVercelConnectionCredentialsSchema
  | TValidateTerraformCloudConnectionCredentialsSchema
  | TValidateWindmillConnectionCredentialsSchema
  | TValidateAuth0ConnectionCredentialsSchema
  | TValidateHCVaultConnectionCredentialsSchema
  | TValidateLdapConnectionCredentialsSchema
  | TValidateTeamCityConnectionCredentialsSchema
  | TValidateOCIConnectionCredentialsSchema
  | TValidateOracleDBConnectionCredentialsSchema
  | TValidateOnePassConnectionCredentialsSchema
  | TValidateHerokuConnectionCredentialsSchema
  | TValidateRenderConnectionCredentialsSchema
  | TValidateFlyioConnectionCredentialsSchema
  | TValidateGitLabConnectionCredentialsSchema
  | TValidateCloudflareConnectionCredentialsSchema
  | TValidateBitbucketConnectionCredentialsSchema
  | TValidateZabbixConnectionCredentialsSchema
  | TValidateRailwayConnectionCredentialsSchema
  | TValidateChecklyConnectionCredentialsSchema
  | TValidateSupabaseConnectionCredentialsSchema
  | TValidateDigitalOceanCredentialsSchema
  | TValidateNetlifyConnectionCredentialsSchema
  | TValidateOktaConnectionCredentialsSchema;

export type TListAwsConnectionKmsKeys = {
  connectionId: string;
  region: AWSRegion;
  destination: SecretSync.AWSParameterStore | SecretSync.AWSSecretsManager;
};

export type TListAwsConnectionIamUsers = {
  connectionId: string;
};

export type TAppConnectionCredentialsValidator = (
  appConnection: TAppConnectionConfig,
  gatewayService: Pick<TGatewayServiceFactory, "fnGetGatewayClientTlsByGatewayId">
) => Promise<TAppConnection["credentials"]>;

export type TAppConnectionTransitionCredentialsToPlatform = (
  appConnection: TAppConnectionConfig,
  callback: (credentials: TAppConnection["credentials"]) => Promise<TAppConnectionRaw>,
  gatewayService: Pick<TGatewayServiceFactory, "fnGetGatewayClientTlsByGatewayId">
) => Promise<TAppConnectionRaw>;

export type TAppConnectionBaseConfig = {
  supportsPlatformManagedCredentials?: boolean;
  supportsGateways?: boolean;
};
