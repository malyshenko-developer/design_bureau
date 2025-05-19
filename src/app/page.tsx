import About from "./components/about";
import CarouselPreview from "./components/carousel-preview";

export default function Main() {
  return (
    <div className="w-full select-none">
      <CarouselPreview />

      <About />
    </div>
  );
}
