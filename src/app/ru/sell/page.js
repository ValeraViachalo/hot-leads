// import HomePage from "@/components/HomePage/HomePage";
// import { getFetchData } from "@/lib/helpers/DataFetch";
// import { URL_SELL_PAGE } from "@/lib/helpers/DataUrls";
// import { generatePagesMetadata } from "@/lib/helpers/generatePagesMetadata";
// import { useLanguageContent } from "@/lib/helpers/useLanguageContent";
// import { DataProvider } from "@/lib/providers/DataProvider/DataProvider";

// export const generateMetadata = async () =>
//   generatePagesMetadata(URL_SELL_PAGE);

// export default async function Home() {
//   const preparedData = await getFetchData(URL_SELL_PAGE);
//   const data = useLanguageContent(preparedData, "ru");

//   return (
//     <DataProvider data={data}>
//       <HomePage lang="ru" type="sell" />
//     </DataProvider>
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
