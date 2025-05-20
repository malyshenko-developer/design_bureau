import { Button } from "@/components/ui/button";
import ShowMoreText from "@/components/ui/show-more-text";
import React from "react";

const About = () => {
  return (
    <div className="flex py-20">
      <h3 className="text-2xl uppercase w-1/4">Кто мы?</h3>

      <div className="flex w-3/4 justify-between">
        <p className="text-6xl max-w-[560px] font-semibold">
          Студия дизайна интерьера и ремонта
        </p>

        <div className="flex flex-col gap-8 max-w-[600px]">
          <ShowMoreText
            text="Авторские дизайн-проекты квартир, загородных домов с ремонтом в
          Санкт-Петербурге и Москве — под ключ. Свои проверенные строители,
          надежные поставщики материалов. Хотите получить современный интерьер,
          продуманный до мелочей? LINEIKA DESIGN – студия дизайна интерьера СПб,
          где вы можете заказать дизайн проект и ремонт под ключ. Разработка
          дизайна интерьера в LINEIKA DESIGN — это синтез академических знаний,
          индивидуальности и новейших трендов, подкрепленный передовым
          программным обеспечением. Доверьте этот вопрос профессионалам, и вы с
          удовольствием заедете в новое жилье. Заказать дизайн квартиры,
          пригласить дизайнера на ваш объект, задать все интересующие вопросы
          можно по телефону +7 (921) 333-46-41 или оставьте заявку на сайте."
            numberOfLine={5}
            showLessLabel="Скрыть"
            showMoreLabel="Читать полностью"
          />

          <Button variant={"outline"} className="self-start uppercase text-lg">
            Обсудить проект
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
