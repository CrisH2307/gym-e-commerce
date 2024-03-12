import { useRouter } from "next/router";

export default function equipmentDetailbyID(params) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <equipmentDetailbyID id={id} />
    </div>
  );
}
