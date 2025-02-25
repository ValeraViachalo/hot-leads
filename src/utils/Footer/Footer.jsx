import React from "react";
import { Logo } from "../Logo/Logo";

import "./Footer.scss";
import { getFetchData } from "@/lib/helpers/DataFetch";
import { useLanguageContent } from "@/lib/helpers/useLanguageContent";
import { URL_FOOTER } from "@/lib/helpers/DataUrls";
import { DataProvider } from "@/lib/providers/DataProvider/DataProvider";
import FooterContent from "./FooterContent";

export default async function Footer() {
  const preparedData = await getFetchData(URL_FOOTER);
  const data = useLanguageContent(preparedData, "en");

  console.log(data);
  

  return (
      <DataProvider data={data}>
        <FooterContent />
      </DataProvider>
  );
}
