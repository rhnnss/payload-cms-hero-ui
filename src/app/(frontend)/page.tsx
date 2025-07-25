import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";
import React from "react";

import config from "@/payload.config";
import LandingPage from "@/components/LandingPage";

export default async function HomePage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });

  return <LandingPage user={user} adminUrl={payloadConfig.routes.admin} />;
}
