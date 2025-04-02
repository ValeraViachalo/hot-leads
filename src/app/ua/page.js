// import LinkPage from "@/components/LinkPage/LinkPage";
// import { getFetchData } from "@/lib/helpers/DataFetch";
// import { URL_HOME } from "@/lib/helpers/DataUrls";
// import { generatePagesMetadata } from "@/lib/helpers/generatePagesMetadata";
// import { useLanguageContent } from "@/lib/helpers/useLanguageContent";
// import { DataProvider } from "@/lib/providers/DataProvider/DataProvider";

// export const generateMetadata = async () => generatePagesMetadata(URL_HOME);

// export default async function Home() {
//   const preparedData = await getFetchData(URL_HOME);
//   const data = useLanguageContent(preparedData, "ua");

//   return (
//     <LinkPage data={data.linkSection} lang="ua"/>
//   );
// }
export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <p>This is a placeholder for the actual content.</p>
    </div>
  )
}
