
import verx from "../assets/img/verx.png"
import vniz from "../assets/img/vniz.png"



export default function Section5() {
    return (
      <div className="container11">
        <h2 className="title">Программа акселератора</h2>

        <div className="module expanded">
          <div className="module-header">
            <div className="module-text">
              <span className="module-title">Модуль 1</span>
              <span className="module-subtitle">
                Тенденции и тренды современного мира
              </span>
            </div>
            <img src={verx} alt="Arrow Up" className="icon" />
          </div>
          <div className="module-content">
            <p>
              Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов
              консалтинговых компаний
            </p>
            <p>Тема 2. Рынки Ближнего Востока, Азии, Латинской Америки</p>
            <p>
              3. Что такое внутренние и внешние инновации? Как искать
              инновационные идеи?
            </p>
            <p className="highlight">
              9 видео роликов, вебинар с приглашенным экспертом
            </p>
          </div>
        </div>

        <div className="module">
          <div className="module-header">
            <div className="module-text">
              <span className="module-title">Модуль 2</span>
              <span className="module-subtitle">
                Стартап подход к созданию международного IT продукта
              </span>
            </div>
            <img src={vniz} alt="Arrow Down" className="icon" />
          </div>
        </div>

        <div className="module">
          <div className="module-header">
            <div className="module-text">
              <span className="module-title">Модуль 3</span>
              <span className="module-subtitle">
                Бизнес моделирование и поиск Product Market Fit
              </span>
            </div>
            <img src={vniz} alt="Arrow Down" className="icon" />
          </div>
        </div>

        <div className="module">
          <div className="module-header">
            <div className="module-text">
              <span className="module-title">Модуль 4</span>
              <span className="module-subtitle">
                Определение рынка, поиск и исследование Целевой аудитории
              </span>
            </div>
            <img src={vniz} alt="Arrow Down" className="icon" />
          </div>
        </div>

        <div className="module">
          <div className="module-header">
            <div className="module-text">
              <span className="module-title">Модуль 5</span>
              <span className="module-subtitle">
                Что такое MVP и почему это важно
              </span>
            </div>
            <img src={vniz} alt="Arrow Down" className="icon" />
          </div>
        </div>

        <div className="module">
          <div className="module-header">
            <div className="module-text">
              <span className="module-title">Модуль 6</span>
              <span className="module-subtitle">
                Unit экономика и финансовое моделирование
              </span>
            </div>
            <img src={vniz} alt="Arrow Down" className="icon" />
          </div>
        </div>

        <div className="module">
          <div className="module-header">
            <div className="module-text">
              <span className="module-title">Модуль 7</span>
              <span className="module-subtitle">
                Что такое дорожная карта продукта?
              </span>
            </div>
            <img src={vniz} alt="Arrow Down" className="icon" />
          </div>
        </div>

        <div className="module">
          <div className="module-header">
            <div className="module-text">
              <span className="module-title">Модуль 8</span>
              <span className="module-subtitle">
                Документы для международных инвесторов
              </span>
            </div>
            <img src={vniz} alt="Arrow Down" className="icon" />
          </div>
        </div>

        <div className="module">
          <div className="module-header">
            <div className="module-text">
              <span className="module-title">Модуль 8</span>
              <span className="module-subtitle">
                Открытие юридического лица. Возможности для стартапов
              </span>
            </div>
            <img src={vniz} alt="Arrow Down" className="icon" />
          </div>
        </div>

        <div className="demo-day">Демо день</div>

        <button className="program-button">Получить полную программу</button>
      </div>
    );
}