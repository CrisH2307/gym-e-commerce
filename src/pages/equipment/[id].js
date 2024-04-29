import EquipmentDetailbyID from "@/components/equipmentDetail/equipmentDetail";
import equipmentData from "@/components/Assets/data";

export default function EachEquipment({ equipment }) {
  return (
    <div>
      <EquipmentDetailbyID equipment={equipment} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = equipmentData.map((equipment) => ({
    params: { id: String(equipment.id) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  const equipment = equipmentData.find((item) => String(item.id) === id);

  return {
    props: {
      equipment,
    },
  };
}
