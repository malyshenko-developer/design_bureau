import About from "./components/about";
import CarouselPreview from "./components/carousel-preview";
import Realization from "./components/realization";
import StageOfWorks from "./components/stage-of-works";

export default function Main() {
  return (
    <div className="w-full select-none">
      <CarouselPreview />

      <div className="max-w-[1710px] mx-auto px-3">
        <About />

        <Realization />

        <StageOfWorks />
      </div>
    </div>
  );
}
