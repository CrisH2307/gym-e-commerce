import Error from "next/error";

export default function equipmentDetail(params) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`https://eleiko.com/en-ca/equipment/${id}`, fetcher);

  if (error) return <Error statusCode={404} />;
  if (!data) return null;

  return (
    <>
      <div key={data.id}></div>
    </>
  );
}
