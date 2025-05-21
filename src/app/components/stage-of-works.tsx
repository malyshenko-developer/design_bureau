import { Button } from "@/components/ui/button";
import React from "react";
const StageOfWorks = () => {
  return (
    <div className="pb-20">
      <div className="flex mb-12">
        <h3 className="text-2xl uppercase w-1/4">Этапы работы</h3>

        <p className="max-w-[630px] text-6xl font-medium w-3/4">
          Ваш новый интерьер шаг за шагом
        </p>
      </div>

      <div className="grid grid-cols-4">
        <div className="p-7 flex flex-col items-start gap-2 min-h-[380px] border border-r-0 border-b-0 border-gray-400">
          <h5>Шаг 1</h5>

          <h4 className="text-2xl font-medium">Первичная консультация</h4>

          <p className="text-lg/snug max-w-[300px]">
            Обсуждаем Вашу задачу: тип объекта, площадь, стилистика
          </p>

          <Button className="mt-auto uppercase text-lg">Оставить заявку</Button>
        </div>

        <div className="p-7 flex flex-col items-start gap-2 min-h-[380px] border border-r-0 border-b-0 border-gray-400">
          <h5>Шаг 2</h5>

          <h4 className="text-2xl font-medium">Техническое задание</h4>

          <p className="text-lg/snug max-w-[300px]">
            Грамотно составленная анкета помогает структурировать идеи и учесть
            все детали
          </p>
        </div>

        <div className="p-7 flex flex-col items-start gap-2 min-h-[380px] border border-r-0 border-b-0 border-gray-400">
          <h5>Шаг 3</h5>

          <h4 className="text-2xl font-medium">Договор и обмеры</h4>

          <p className="text-lg/snug max-w-[300px]">
            Выезд на объект, проведение замеров, фото объекта и заключение
            договора
          </p>
        </div>

        <div className="p-7 flex flex-col items-start gap-2 min-h-[380px] border border-b-0 border-gray-400">
          <h5>Шаг 4</h5>

          <h4 className="text-2xl font-medium">Планировочное решение</h4>

          <p className="text-lg/snug max-w-[300px]">
            Проектируем функциональную планировку, отталкиваясь от требований и
            особенностей вашего образа жизни
          </p>
        </div>

        <div className="p-7 flex flex-col items-start gap-2 min-h-[380px] border border-r-0 border-gray-400">
          <h5>Шаг 5</h5>

          <h4 className="text-2xl font-medium">3D визуализация</h4>

          <p className="text-lg/snug max-w-[300px]">
            Создаём фотореалистичные 3D-изображения будущего интерьера, чтобы вы
            заранее увидели результат
          </p>
        </div>

        <div className="p-7 flex flex-col items-start gap-2 min-h-[380px] border border-r-0 border-gray-400">
          <h5>Шаг 6</h5>

          <h4 className="text-2xl font-medium">Комплект чертежей</h4>

          <p className="text-lg/snug max-w-[300px]">
            На основе визуализаций готовим полный комплект рабочих чертежей для
            реализации проекта
          </p>
        </div>

        <div className="p-7 flex flex-col items-start gap-2 min-h-[380px] border border-r-0 border-gray-400">
          <h5>Шаг 7</h5>

          <h4 className="text-2xl font-medium">Развертки</h4>

          <p className="text-lg/snug max-w-[300px]">
            Проектируем развёртки помещений — это помогает чётко понять, что и
            где будет находиться
          </p>
        </div>

        <div className="p-7 flex flex-col items-start gap-2 min-h-[380px] border border-gray-400">
          <h5>Шаг 8</h5>

          <h4 className="text-2xl font-medium">Подготовка сметы</h4>

          <p className="text-lg/snug max-w-[300px]">
            Подбираем всё до мелочей с учётом вашего бюджета, чтобы ремонт
            прошёл без неожиданных расходов
          </p>
        </div>
      </div>
    </div>
  );
};

export default StageOfWorks;
