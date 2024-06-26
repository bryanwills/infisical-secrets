// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const IdentityKubernetesAuthsSchema = z.object({
  id: z.string().uuid(),
  accessTokenTTL: z.coerce.number().default(7200),
  accessTokenMaxTTL: z.coerce.number().default(7200),
  accessTokenNumUsesLimit: z.coerce.number().default(0),
  accessTokenTrustedIps: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  identityId: z.string().uuid(),
  kubernetesHost: z.string(),
  encryptedCaCert: z.string(),
  caCertIV: z.string(),
  caCertTag: z.string(),
  encryptedTokenReviewerJwt: z.string(),
  tokenReviewerJwtIV: z.string(),
  tokenReviewerJwtTag: z.string(),
  allowedNamespaces: z.string(),
  allowedNames: z.string(),
  allowedAudience: z.string()
});

export type TIdentityKubernetesAuths = z.infer<typeof IdentityKubernetesAuthsSchema>;
export type TIdentityKubernetesAuthsInsert = Omit<z.input<typeof IdentityKubernetesAuthsSchema>, TImmutableDBKeys>;
export type TIdentityKubernetesAuthsUpdate = Partial<
  Omit<z.input<typeof IdentityKubernetesAuthsSchema>, TImmutableDBKeys>
>;
