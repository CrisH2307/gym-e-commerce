import gearData from "@/components/Assets/gearData";
import GearDetailbyID from "@/components/gearDetail/gearDetail";

export default function EachGear({ gear }) {
  return (
    <div>
      <GearDetailbyID gear={gear} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = gearData.map((gear) => ({
    params: { id: String(gear.id) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  const gear = gearData.find((item) => String(item.id) === id);

  return {
    props: {
      gear,
    },
  };
}
