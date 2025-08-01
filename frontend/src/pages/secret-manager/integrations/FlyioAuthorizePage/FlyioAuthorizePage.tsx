import { useState } from "react";
import { Helmet } from "react-helmet";
import { Controller, useForm } from "react-hook-form";
import { faArrowUpRightFromSquare, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";

import { Button, Card, CardTitle, FormControl, Input } from "@app/components/v2";
import { useWorkspace } from "@app/context";
import { useSaveIntegrationAccessToken } from "@app/hooks/api";

const schema = z.object({
  accessToken: z.string().trim()
});

type FormData = z.infer<typeof schema>;

export const FlyioAuthorizePage = () => {
  const navigate = useNavigate();
  const { currentWorkspace } = useWorkspace();

  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      accessToken: ""
    }
  });

  const { mutateAsync } = useSaveIntegrationAccessToken();

  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = async ({ accessToken }: FormData) => {
    try {
      setIsLoading(true);

      const integrationAuth = await mutateAsync({
        workspaceId: currentWorkspace.id,
        integration: "flyio",
        accessToken
      });

      setIsLoading(false);
      navigate({
        to: "/projects/secret-management/$projectId/integrations/flyio/create",
        params: {
          projectId: currentWorkspace.id
        },
        search: {
          integrationAuthId: integrationAuth.id
        }
      });
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Helmet>
        <title>Authorize Fly.io Integration</title>
      </Helmet>
      <Card className="mb-12 max-w-lg rounded-md border border-mineshaft-600">
        <CardTitle
          className="px-6 text-left text-xl"
          subTitle="After adding your access token, you will be prompted to set up an integration for a particular Infisical project and environment."
        >
          <div className="flex flex-row items-center">
            <div className="flex items-center pb-0.5">
              <img src="/images/integrations/Flyio.svg" height={30} width={30} alt="Fly.io logo" />
            </div>
            <span className="ml-2.5">Fly.io Integration </span>
            <a
              href="https://infisical.com/docs/integrations/cloud/flyio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mb-1 ml-2 inline-block cursor-default rounded-md bg-yellow/20 px-1.5 pb-[0.03rem] pt-[0.04rem] text-sm text-yellow opacity-80 hover:opacity-100">
                <FontAwesomeIcon icon={faBookOpen} className="mr-1.5" />
                Docs
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="mb-[0.07rem] ml-1.5 text-xxs"
                />
              </div>
            </a>
          </div>
        </CardTitle>
        <form onSubmit={handleSubmit(onFormSubmit)} className="px-6 pb-8 text-right">
          <Controller
            control={control}
            name="accessToken"
            render={({ field, fieldState: { error } }) => (
              <FormControl
                label="Fly.io Access Token"
                errorText={error?.message}
                isError={Boolean(error)}
              >
                <Input {...field} placeholder="" type="password" autoComplete="new-password" />
              </FormControl>
            )}
          />
          <Button
            colorSchema="primary"
            variant="outline_bg"
            className="mt-2 w-min"
            size="sm"
            type="submit"
            isLoading={isLoading}
          >
            Connect to Fly.io
          </Button>
        </form>
      </Card>
    </div>
  );
};
