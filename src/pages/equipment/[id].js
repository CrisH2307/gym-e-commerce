import { useRouter } from "next/router";
import equipmentDetail from "../../components/equipmentDetail/equipmentDetail";

export default function equipmentDetailbyID(params) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <equipmentDetail id={id} />
    </div>
  );
}
