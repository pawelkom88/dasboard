import Table from "../../common/components/table/Table";

export default function Home({ airlines }: { airlines: any }) {
  return (
    <>
      <Table airlines={airlines} />
      {/* <OtherComponentsInTheFutire /> */}
    </>
  );
}
