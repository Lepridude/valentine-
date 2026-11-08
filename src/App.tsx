import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Camera,
  ChevronDown,
  Heart,
  MailOpen,
  Sparkles,
  X,
} from 'lucide-react'

type Note = {
  title: string
  text: string
  stamp: string
}

type Moment = {
  date: string
  title: string
  caption: string
  src: string
}

const startDate = '21 мая 2026'
const anniversaryDate = '21 ноября 2026'

const reasons = [
  'Мне нравится, как ты умеешь превращать самый обычный день в особенный.',
  'Мне нравится слушать твои истории — даже те, которые я уже слышал.',
  'Рядом с тобой я могу быть собой и ни о чём не переживать.',
  'Я люблю твои улыбки, смешинки и маленькие привычки.',
  'С тобой даже молчать вместе — приятно.',
  'Я бы снова выбрал тебя. И ещё раз. И ещё.',
]

const notes: Note[] = [
  {
    title: 'Когда грустно',
    text: 'Тебе не обязательно всегда быть сильной и улыбаться. Я рядом не только в хорошие дни. Можно просто прийти ко мне за объятиями.',
    stamp: 'для непростого дня',
  },
  {
    title: 'Когда скучаешь',
    text: 'Считай, что это маленькое объятие через экран. А большое и настоящее я оставил для нашей следующей встречи.',
    stamp: 'обнимаю крепко',
  },
  {
    title: 'Просто так',
    text: 'Небольшое напоминание: ты невероятная. И да, я всё ещё считаю, что мне очень повезло.',
    stamp: 'важное сообщение',
  },
  {
    title: 'На потом',
    text: 'Давай и дальше собирать наши маленькие моменты: прогулки, смешные истории, фотографии и дни, которые захочется повторить.',
    stamp: 'продолжение следует',
  },
]

const moments: Moment[] = [
  { date: 'НАЧАЛО', title: 'С чего всё начиналось', caption: 'Тот самый кадр, с которого хочется снова начать нашу историю.', src: '/photos/memory-05.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-01.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-02.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-03.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-06.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-08.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-11.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-12.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-13.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-14.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-15.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-16.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-18.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-19.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-20.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-21.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-24.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-25.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-27.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-28.webp' },
  { date: 'НАША ИСТОРИЯ', title: 'Самые пиздатые вдвоём', caption: 'Ну какие же мы милые. И вообще — самые пиздатые. ♡', src: '/photos/memory-29.webp' },
]

const timeline = [
  {
    label: '21.05.2026',
    title: 'Начало нашей истории',
    text: 'День, с которого появилась наша маленькая история.',
  },
  {
    label: 'ЛЕТО',
    title: 'Мы собирали свои моменты',
    text: 'Разговоры, прогулки, фотографии и обычные дни, которые стали нашими.',
  },
  {
    label: 'ОСЕНЬ',
    title: 'История стала больше',
    text: 'У нас появились свои привычки, шутки и воспоминания, к которым хочется возвращаться.',
  },
  {
    label: '21.11.2026',
    title: 'Полгода вместе',
    text: 'Первый большой маленький юбилей. И повод сказать тебе самое главное.',
  },
]

const cuteLines = [
  'Ты — моё любимое уведомление.',
  'Мне нравится быть в твоей команде.',
  'Моё любимое место — рядом с тобой.',
  'Если бы можно было сохранить один момент навсегда — я бы выбрал момент рядом с тобой.',
]

function App() {
  const [reason, setReason] = useState(0)
  const [opened, setOpened] = useState<number | null>(null)
  const [photo, setPhoto] = useState<number | null>(null)
  const [compliment, setCompliment] = useState(0)
  const [surprise, setSurprise] = useState(false)

  const nextReason = () => setReason((current) => (current + 1) % reasons.length)
  const previousReason = () =>
    setReason((current) => (current + reasons.length - 1) % reasons.length)

  const navigation = useMemo(
    () => [
      ['home', 'Главная'],
      ['story', 'Наша история'],
      ['memories', 'Моменты'],
      ['letters', 'Послания'],
    ],
    [],
  )

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <header className="topbar">
        <a
          className="brand"
          href="#home"
          onClick={(event) => {
            event.preventDefault()
            goTo('home')
          }}
        >
          <span className="brand-mark">♡</span>
          our little story
        </a>

        <nav className="desktop-nav" aria-label="Навигация по подарку">
          {navigation.map(([id, label]) => (
            <button key={id} onClick={() => goTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <button className="date-pill" onClick={() => goTo('story')}>
          <Heart size={14} fill="currentColor" />
          6 месяцев
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-grain" />
        <span className="floating f1">♡</span>
        <span className="floating f2">✦</span>
        <span className="floating f3">♡</span>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="eyebrow">
            <span />
            {startDate.toUpperCase()} · {anniversaryDate.toUpperCase()}
            <span />
          </div>

          <div className="hero-heart">
            <Heart size={31} strokeWidth={1.1} />
          </div>

          <p className="script hero-script">для Маши, с любовью</p>

          <h1>
            Полгода
            <br />
            <em>с тобой.</em>
          </h1>

          <p className="hero-sub">
            Маленький цифровой подарок о наших моментах,
            <br className="desktop-break" /> воспоминаниях и о том, как сильно я тебя люблю.
          </p>

          <button className="primary-btn" onClick={() => goTo('story')}>
            Открыть нашу историю <ArrowRight size={17} />
          </button>

          <div className="hero-foot">
            ЛИСТАЙ МЕДЛЕННО — ЗДЕСЬ ВСЁ ДЛЯ ТЕБЯ
            <ArrowDown size={13} />
          </div>
        </motion.div>
      </section>

      <section className="dashboard section-wrap" id="story">
        <div className="section-kicker">НАШ ПОВОД</div>

        <div className="dashboard-head">
          <div>
            <p className="script accent-script">если считать не дни, а чувства</p>
            <h2>
              Шесть месяцев,
              <br />
              <em>которые стали нашими.</em>
            </h2>
          </div>
          <span className="dashboard-doodle">♡</span>
        </div>

        <p className="body-copy dashboard-copy">
          Я собрал здесь не просто фотографии. Это маленькое место, куда можно вернуться,
          когда захочется вспомнить нас и ещё раз увидеть, как много ты для меня значишь.
        </p>

        <div className="stats-grid">
          <article className="stat-card stat-card-main">
            <span className="stat-icon">♡</span>
            <strong>6</strong>
            <span>месяцев вместе</span>
          </article>
          <article className="stat-card">
            <strong>{moments.length}</strong>
            <span>кадров в нашей коллекции</span>
          </article>
          <article className="stat-card">
            <strong>∞</strong>
            <span>причин любить тебя</span>
          </article>
        </div>

        <div className="date-card dashboard-date">
          <span className="date-flower">✿</span>
          <span className="date-label">ДЕНЬ, КОТОРЫЙ МЫ ОТМЕЧАЕМ</span>
          <strong>
            21 <i>ноября 2026</i>
          </strong>
          <span className="date-divider">♡ ───────── ♡</span>
          <p>полгода вместе</p>
          <span className="date-hand">и я хочу ещё очень много наших дат</span>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-wrap">
          <div className="section-kicker">НАША ХРОНИКА</div>
          <div className="section-heading">
            <div>
              <p className="script accent-script">не всё поместится на одну страницу</p>
              <h2>
                История,
                <br />
                <em>которую хочется продолжать.</em>
              </h2>
            </div>
            <span className="heading-doodle">✦</span>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.article
                className="timeline-item"
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="timeline-marker">{index + 1}</div>
                <div className="timeline-content">
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="reasons-section">
        <div className="section-wrap">
          <div className="section-kicker">НЕБОЛЬШИЕ ПРИЗНАНИЯ</div>
          <div className="section-heading">
            <div>
              <p className="script accent-script">если вдруг ты забыла</p>
              <h2>
                6 причин,
                <br />
                <em>почему ты.</em>
              </h2>
            </div>
            <span className="heading-doodle">♡</span>
          </div>

          <div className="reason-stage">
            <div className="paper-shadow" />
            <AnimatePresence mode="wait">
              <motion.article
                className="reason-card"
                key={reason}
                initial={{ opacity: 0, rotate: -2, y: 15 }}
                animate={{ opacity: 1, rotate: 0, y: 0 }}
                exit={{ opacity: 0, rotate: 2, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="tape" />
                <span className="big-heart">♡</span>
                <p>{reasons[reason]}</p>
                <span className="card-sign">♡</span>
              </motion.article>
            </AnimatePresence>

            <div className="reason-controls">
              <button className="round-btn" onClick={previousReason} aria-label="Предыдущая причина">
                <ArrowLeft size={17} />
              </button>
              <div className="dots">
                {reasons.map((_, index) => (
                  <button
                    key={index}
                    className={index === reason ? 'dot active' : 'dot'}
                    onClick={() => setReason(index)}
                    aria-label={`Причина ${index + 1}`}
                  />
                ))}
              </div>
              <button className="round-btn filled" onClick={nextReason} aria-label="Следующая причина">
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="memories section-wrap" id="memories">
        <div className="section-kicker">КАДРЫ, КОТОРЫЕ ХОЧЕТСЯ СОХРАНИТЬ</div>

        <div className="memories-head">
          <div>
            <p className="script accent-script">маленькая машина времени</p>
            <h2>
              Наши <em>моменты.</em>
            </h2>
          </div>
          <Camera className="outline-icon" size={38} />
        </div>

        <p className="body-copy memories-copy">
          Нажми на любую фотографию, чтобы рассмотреть её. Здесь собран весь доступный сейчас
          фотоархив подарка.
        </p>

        <div className="photo-grid">
          {moments.map((moment, index) => (
            <motion.button
              key={moment.src}
              className="photo-card"
              onClick={() => setPhoto(index)}
              whileHover={{ y: -6, rotate: index % 2 === 0 ? -1 : 1 }}
              transition={{ duration: 0.2 }}
              aria-label={`Открыть фотографию: ${moment.title}`}
            >
              <img
                className="moment-photo"
                src={moment.src}
                alt={moment.title}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f8e9ed'/%3E%3Ctext x='50%25' y='48%25' text-anchor='middle' fill='%23bd8497' font-size='72'%3E%E2%99%A1%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' fill='%239b7180' font-size='24'%3E%D0%A4%D0%BE%D1%82%D0%BE%20%D1%81%D0%BA%D0%BE%D1%80%D0%BE%20%D0%B7%D0%B4%D0%B5%D1%81%D1%8C%3C/text%3E%3C/svg%3E"
                }}
              />
              <div className="photo-caption">
                <span>{moment.date}</span>
                <strong>{moment.title}</strong>
                <p>{moment.caption}</p>
              </div>
              <span className="photo-heart">♡</span>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="letters-section" id="letters">
        <div className="section-wrap">
          <div className="section-kicker">НЕСКОЛЬКО СЛОВ ДЛЯ ТЕБЯ</div>

          <div className="section-heading">
            <div>
              <p className="script accent-script">открой, когда захочется</p>
              <h2>
                Послания,
                <br />
                <em>которые рядом.</em>
              </h2>
            </div>
            <span className="heading-doodle">✉</span>
          </div>

          <p className="body-copy">
            Небольшие послания на разные случаи. Выбирай конверт — внутри кое-что только для тебя.
          </p>

          <div className="envelopes">
            {notes.map((note, index) => (
              <motion.button
                className={`envelope envelope-${index + 1}`}
                key={note.title}
                onClick={() => setOpened(index)}
                whileHover={{ y: -5 }}
              >
                <span className="envelope-stamp">♡</span>
                <MailOpen size={27} strokeWidth={1.25} />
                <strong>{note.title}</strong>
                <small>{note.stamp}</small>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="little-joy section-wrap">
        <div className="joy-card">
          <span className="joy-spark">✦</span>
          <p className="script">маленькое напоминание</p>
          <h2>{cuteLines[compliment]}</h2>
          <button
            className="text-btn"
            onClick={() => setCompliment((current) => (current + 1) % cuteLines.length)}
          >
            Ещё одну милую фразу <Sparkles size={16} />
          </button>
        </div>
      </section>

      <section className="letter-final section-wrap">
        <div className="section-kicker">САМОЕ ГЛАВНОЕ</div>

        <article className="final-paper">
          <span className="paper-top">
            21.05.2026 — 21.11.2026 · SIX MONTHS TOGETHER
          </span>

          <p className="script accent-script">моя хорошая,</p>

          <h2>
            И всё-таки
            <br />
            <em>самое главное...</em>
          </h2>

          <div className="letter-body">
            <p>
              Знаешь, шесть месяцев — вроде бы не так много, но за это время ты стала огромной
              частью моей жизни.
            </p>
            <p>
              Мне нравятся наши разговоры, прогулки, объятия, глупые шутки и даже самые обычные
              моменты. Я рад, что всё это у нас есть.
            </p>
            <p>
              Я хочу продолжать собирать с тобой воспоминания — большие, маленькие, смешные,
              красивые и совершенно обычные.
            </p>
            <p>Спасибо тебе за эти полгода. Я очень тебя люблю.</p>
          </div>

          <div className="letter-sign">
            <Heart size={20} fill="currentColor" />
          </div>
          <span className="paper-seal">♡</span>
        </article>
      </section>

      <section className="ending">
        <div className="ending-inner">
          <span className="ending-heart">♡</span>
          <p className="script">и это только начало</p>
          <h2>
            To be continued<span>...</span>
          </h2>
          <p>ещё больше наших моментов впереди</p>

          <button className="surprise-btn" onClick={() => setSurprise((value) => !value)}>
            <Heart size={15} fill={surprise ? 'currentColor' : 'none'} />
            {surprise ? 'Сюрприз открыт' : 'И ещё кое-что'}
          </button>

          <AnimatePresence>
            {surprise && (
              <motion.div
                className="surprise-note"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                Я бы выбрал тебя снова. В любой истории. В любом времени. ♡
              </motion.div>
            )}
          </AnimatePresence>

          <button className="back-to-top" onClick={() => goTo('home')}>
            <ChevronDown size={16} /> наверх
          </button>
        </div>

        <footer>СДЕЛАНО С ЛЮБОВЬЮ · ДЛЯ МАШИ · ПОЛГОДА ВМЕСТЕ</footer>
      </section>

      <AnimatePresence>
        {opened !== null && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpened(null)}
          >
            <motion.div
              className="note-modal"
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setOpened(null)} aria-label="Закрыть">
                <X size={18} />
              </button>
              <span className="script accent-script">маленькое письмо</span>
              <span className="modal-heart">♡</span>
              <h3>{notes[opened].title}</h3>
              <p>{notes[opened].text}</p>
              <span className="modal-sign">с любовью ♡</span>
            </motion.div>
          </motion.div>
        )}

        {photo !== null && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPhoto(null)}
          >
            <motion.div
              className="photo-modal"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setPhoto(null)} aria-label="Закрыть">
                <X size={18} />
              </button>

              <img
                className="photo-modal-image"
                src={moments[photo].src}
                alt={moments[photo].title}
                decoding="async"
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f8e9ed'/%3E%3Ctext x='50%25' y='48%25' text-anchor='middle' fill='%23bd8497' font-size='72'%3E%E2%99%A1%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' fill='%239b7180' font-size='24'%3E%D0%A4%D0%BE%D1%82%D0%BE%20%D1%81%D0%BA%D0%BE%D1%80%D0%BE%20%D0%B7%D0%B4%D0%B5%D1%81%D1%8C%3C/text%3E%3C/svg%3E"
                }}
              />

              <div className="photo-modal-copy">
                <span>{moments[photo].date}</span>
                <h3>{moments[photo].title}</h3>
                <p>{moments[photo].caption}</p>
              </div>

              <div className="photo-modal-controls">
                <button
                  className="round-btn"
                  onClick={() =>
                    setPhoto((current) =>
                      current === null ? 0 : (current + moments.length - 1) % moments.length,
                    )
                  }
                  aria-label="Предыдущая фотография"
                >
                  <ArrowLeft size={16} />
                </button>
                <span>
                  {photo + 1} / {moments.length}
                </span>
                <button
                  className="round-btn filled"
                  onClick={() =>
                    setPhoto((current) =>
                      current === null ? 0 : (current + 1) % moments.length,
                    )
                  }
                  aria-label="Следующая фотография"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
