import { IBookProductionService } from "../api/bookProductionService/typing";

export const bookProductionServicesList: IBookProductionService[] = [
        {
            pk: 1,
            title: "Корректура текста",
            image_url: "",
            price: "от 45 руб. за 1000 символов",
            description: "Корректура текста (корректорская правка) - это исправление орфографических, грамматических и пунктуационных ошибок в тексте, устранение морфологических ошибок (употребления форм склонения, числа, падежа и т.д.), проверку соблюдения правил переноса.",
            is_active: true,
        },
        {
            pk: 2,
            title: "Дизайн обложки",
            image_url: "",
            price: "от 3500 руб.",
            description: "Разрабатываем дизайн обложки для книги любого жанра.\nСложность: от простой шрифтовой композиции до сложной иллюстрированной.\nТехнические требования: для книг в разных переплетах.\nВыбор: всегда предоставляем три варианта дизайна на выбор заказчику.\nИспользуем лицензионные шрифты и картинки, учитываем пожелания.",
            is_active: true,
        },
        {
            pk: 3,
            title: "Вёрстка книги",
            image_url: "",
            price: "от 65 руб. за 1 страницу",
            description: "Верстаем книги любой сложности и любого формата.\nМакеты: полиграфический и электронный.\nСложность: от художественной литературы до научной с формулами.\nДизайн: от незамысловатого до макета с разработанной дизайн-концепцией.\nСоблюдаем технические требования типографии, СанПины и ГОСТы.",
            is_active: true,
        },
        {
            pk: 4,
            title: "Иллюстрирование",
            image_url: "",
            price: "от 1200 руб.",
            description: "Работаем с иллюстративным материалом для книги.\nОтрисовка: создаем иллюстрации с нуля по вашему техническому заданию или составляем ТЗ. В разных стилях и техниках.\nПодбор: подбираем иллюстрации из лицензионных стоков под вашу тематику в едином стиле.",
            is_active: true,
        },
        {
            pk: 5,
            title: "Рецензирование",
            image_url: "",
            price: "от 9900 руб.",
            description: "Рецензирование рукописи – редакторский анализ, оценка и написание рецензии к рукописи. Включает в себя критическую оценку оценку значения темы рукописи и отзыв о способе ее реализации в тексте, также отзыв о языке повествования, стиле и композиции текста.",
            is_active: true,
        }
    ];