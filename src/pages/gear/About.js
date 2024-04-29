import { mainStyle } from "@/components/headerSection/HeaderSection";

export default function AboutGear() {
  return (
    <div style={mainStyle} className="py-20">
      <div className="relative w-full flex px-20 flex-col justify-center items-center">
        <div className="flex flex-1">
          <div className="relative w-full px-20 flex-col max-w-4xl mx-auto">
            <div className="max-w-5xl">
              <p className="font-semibold text-xl max-w-none leading-9">
                Discover Eleiko Gear, rooted in 65 years of strength expertise and developed together with the
                world&rsquo;s strongest athletes. Whether you&apos;re an experienced athlete or at the beginning of your
                strength and fitness journey, Eleiko gear is meticulously designed and crafted to elevate your training
                experience and support your best performance outcomes.
              </p>
              <br />
              <p className="font-semibold text-xl max-w-none leading-9">
                At Eleiko, we&rsquo;ve designed gear with the same commitment to quality and durability as we have for
                our strength equipment. We offer a range of gear from apparel to accessories, each piece is engineered
                to endure the toughest workouts, ensuring they withstand the test of time. Eleiko Gear is more than just
                style; it&apos;s about elevating your performance.
              </p>
              <br />
              <p className="font-semibold text-xl max-w-none leading-9">
                We offer a diverse range of training gear, from comfortable and stylish apparel fit for a day in the
                training hall or to wear daily to specialized accessories to aid your performance and support your
                training needs. Eleiko Gear spans the complete range of accessories for powerlifting, weightlifting and
                functional fitness including lifting belts, knee sleeves, lifting straps, wrist wraps and more. Elevate
                your strength training with Eleiko Gear.
              </p>
              <br />
              <p className="font-semibold text-xl max-w-none leading-9">
                Experience firsthand the difference the right lifting gear can make and explore our product catalog to
                elevate your training, make a statement, and conquer your fitness goals with Eleiko Gear. Explore our
                collection to find the perfect gear for your fitness journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
