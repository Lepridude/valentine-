import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowLeft, ArrowRight, Camera, ChevronDown, Heart, LockKeyhole, MailOpen, Music2, Sparkles, X } from 'lucide-react'

type Note = { title: string; text: string; stamp: string }
const reasons = [
  'Мне нравится, как ты умеешь превращать самый обычный день в особенный.',
  'Мне нравится слушать твои истории — даже те, которые я уже слышал.',
  'Рядом с тобой я могу быть собой и ни о чём не переживать.',
  'Я люблю твои улыбки, смешинки и маленькие привычки.',
  'С тобой даже молчать вместе — приятно.',
  'Я бы снова выбрал тебя. И ещё раз. И ещё.'
]
const notes: Note[] = [
  { title: 'Когда грустно', text: 'Тебе не обязательно всегда быть сильной и улыбаться. Я рядом не только в хорошие дни. Можно просто прийти ко мне за объятиями.', stamp: 'для непростого дня' },
  { title: 'Когда скучаешь', text: 'Считай, что это маленькое объятие через экран. А большое и настоящее я оставил для нашей следующей встречи.', stamp: 'обнимаю крепко' },
  { title: 'Просто так', text: 'Небольшое напоминание: ты невероятная. И да, я всё ещё считаю, что мне очень повезло.', stamp: 'важное сообщение' },
  { title: 'На потом', text: 'Давай и дальше собирать наши маленькие моменты: прогулки, смешные истории, фотографии и дни, которые захочется повторить.', stamp: 'продолжение следует' }
]
const moments = [
  { date: 'Глава первая', title: 'С чего всё начиналось', caption: 'Здесь будет фотография и история вашего знакомства.' },
  { date: 'Один из любимых дней', title: 'Маленькое приключение', caption: 'Добавим место, дату и то, что хочется запомнить.' },
  { date: 'И сейчас', title: 'Наши полгода', caption: 'Ещё одна глава нашей общей истории.' }
]

function App() {
  const [started, setStarted] = useState(false)
  const [reason, setReason] = useState(0)
  const [opened, setOpened] = useState<number | null>(null)
  const [photo, setPhoto] = useState<number | null>(null)
  const [musicOn, setMusicOn] = useState(false)
  const [surprise, setSurprise] = useState(false)
  const randomLine = useMemo(() => [
    'Ты — моё любимое уведомление.',
    'Мне нравится быть в твоей команде.',
    'Сегодня хороший день, чтобы напомнить, как сильно ты мне нравишься.',
    'Моё любимое место — рядом с тобой.'
  ], [])
  const [compliment, setCompliment] = useState(0)

  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return <main>
    <header className="topbar">
      <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); goTo('home') }}><span className="brand-mark">♡</span> our little story</a>
      <button className="sound-toggle" onClick={() => setMusicOn(!musicOn)} aria-label="Переключить музыку"><Music2 size={16}/><span>{musicOn ? 'Музыка включена' : 'Звук выключен'}</span></button>
    </header>

    <section className="hero" id="home">
      <div className="hero-grain" />
      <span className="floating f2">♡</span>
      <motion.div className="hero-content" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
        <div className="eyebrow"><span/> 21 MAY 2026 · 21 NOVEMBER 2026 <span/></div>
        <div className="hero-heart"><Heart size={31} strokeWidth={1.1}/></div>
        <p className="script hero-script">для самого любимого человека</p>
        <h1>Полгода<br/><em>с тобой.</em></h1>
        <p className="hero-sub">Небольшая история о нас, наших моментах<br className="desktop-break"/> и о том, как я рад, что ты есть.</p>
        <button className="primary-btn" onClick={() => { setStarted(true); goTo('intro') }}>Открыть подарок <ArrowRight size={17}/></button>
        <div className="hero-foot">ЛИСТАЙ МЕДЛЕННО — ЗДЕСЬ ВСЁ ДЛЯ ТЕБЯ <ArrowDown size={13}/></div>
      </motion.div>
      <div className="hero-sticker sticker-left">made<br/>with love <Heart size={13}/></div>
      <div className="hero-sticker sticker-right">для тебя ♡</div>
    </section>

    <section className="intro section-wrap" id="intro">
      <div className="section-kicker">НАШ МАЛЕНЬКИЙ ПОВОД</div>
      <div className="intro-grid">
        <div>
          <p className="script accent-script">и вот уже...</p>
          <h2>Шесть месяцев,<br/><em>которые стали</em><br/>особенными.</h2>
          <p className="body-copy">Кажется, совсем недавно всё только начиналось. А теперь у нас есть свои шутки, привычки, любимые моменты и целая маленькая история, которую хочется продолжать.</p>
        </div>
        <div className="date-card">
          <span className="date-flower">✿</span>
          <span className="date-label">НАЧАЛО НАШЕЙ ИСТОРИИ</span>
          <strong>21 <i>мая 2026</i></strong>
          <span className="date-divider">♡ ───────── ♡</span>
          <p>21 ноября 2026 · полгода вместе</p>
          <span className="date-hand">с любовью, для тебя</span>
        </div>
      </div>
    </section>

    <section className="reasons-section">
      <div className="section-wrap">
        <div className="section-kicker">НЕБОЛЬШИЕ ПРИЗНАНИЯ</div>
        <div className="section-heading"><div><p className="script accent-script">если вдруг ты забыла</p><h2>6 причин,<br/><em>почему ты.</em></h2></div><span className="heading-doodle">♡</span></div>
        <div className="reason-stage">
          <div className="paper-shadow"/>
          <AnimatePresence mode="wait">
            <motion.article className="reason-card" key={reason} initial={{ opacity: 0, rotate: -2, y: 15 }} animate={{ opacity: 1, rotate: 0, y: 0 }} exit={{ opacity: 0, rotate: 2, y: -10 }} transition={{ duration: .3 }}>
              <span className="tape"/>
              
              <span className="big-heart">♡</span>
              <p>{reasons[reason]}</p>
              <span className="card-sign">твой человек ♡</span>
            </motion.article>
          </AnimatePresence>
          <div className="reason-controls">
            <button className="round-btn" onClick={() => setReason((reason + reasons.length - 1) % reasons.length)} aria-label="Предыдущая карточка"><ArrowLeft size={17}/></button>
            <div className="dots">{reasons.map((_, i) => <button key={i} className={i === reason ? 'dot active' : 'dot'} onClick={() => setReason(i)} aria-label={`Карточка ${i+1}`}/>)}</div>
            <button className="round-btn filled" onClick={() => setReason((reason + 1) % reasons.length)} aria-label="Следующая карточка"><ArrowRight size={17}/></button>
          </div>
          <p className="swipe-hint">можно листать стрелками или просто нажимать на точки</p>
        </div>
      </div>
    </section>

    <section className="memories section-wrap">
      <div className="section-kicker">КАДРЫ, КОТОРЫЕ ХОЧЕТСЯ СОХРАНИТЬ</div>
      <div className="memories-head"><div><p className="script accent-script">маленькая машина времени</p><h2>Наши <em>моменты.</em></h2></div><Camera className="outline-icon" size={38}/></div>
      <p className="body-copy memories-copy">Некоторые дни заканчиваются, а воспоминания о них остаются. Здесь будут наши любимые фотографии и подписи к ним.</p>
      <div className="photobooth-pair" aria-hidden="true">
        <div className="photobooth photobooth-left"><img src="/photos/photobooth-pair.jpg" alt="" /></div>
        <div className="photobooth photobooth-right"><img src="/photos/photobooth-pair.jpg" alt="" /></div>
      </div>
      <div className="photo-grid">
        {moments.map((m, i) => <button key={m.title} className={`photo-card photo-${i+1}`} onClick={() => setPhoto(i)}>
          <div className="photo-placeholder"><span className="photo-icon"><Camera size={22}/></span><span>ВАША ФОТОГРАФИЯ</span><small>нажми, чтобы открыть</small></div>
          <div className="photo-caption"><span>{m.date}</span><strong>{m.title}</strong><p>{m.caption}</p></div><span className="photo-heart">♡</span>
        </button>)}
      </div>
    </section>

    <section className="letters-section">
      <div className="section-wrap">
        <div className="section-kicker">НЕСКОЛЬКО СЛОВ ДЛЯ ТЕБЯ</div>
        <div className="section-heading"><div><p className="script accent-script">открой, когда захочется</p><h2>Письма,<br/><em>которые рядом.</em></h2></div><span className="heading-doodle">✉</span></div>
        <p className="body-copy">Небольшие послания на разные случаи. Выбирай конверт — внутри кое-что для тебя.</p>
        <div className="envelopes">
          {notes.map((n, i) => <button className={`envelope envelope-${i+1}`} key={n.title} onClick={() => setOpened(i)}>
            <span className="envelope-stamp">♡</span><MailOpen size={27} strokeWidth={1.25}/><strong>{n.title}</strong><small>{n.stamp}</small>
          </button>)}
        </div>
      </div>
    </section>

    <section className="little-joy section-wrap">
      <div className="joy-card">
        <span className="joy-spark">♡</span><p className="script">маленькое напоминание</p><h2>{randomLine[compliment]}</h2>
        <button className="text-btn" onClick={() => setCompliment((compliment + 1) % randomLine.length)}>Ещё одну милую фразу <Sparkles size={16}/></button>
      </div>
    </section>

    <section className="letter-final section-wrap">
      <div className="section-kicker">САМОЕ ГЛАВНОЕ</div>
      <article className="final-paper">
        <span className="paper-top">21.05.2026 — 21.11.2026 · SIX MONTHS TOGETHER</span>
        <p className="script accent-script">моя хорошая,</p>
        <h2>И всё-таки<br/><em>самое главное...</em></h2>
        <div className="letter-body">
          <p>Знаешь, шесть месяцев — вроде бы не так много, но за это время ты стала огромной частью моей жизни.</p>
          <p>Мне нравятся наши разговоры, прогулки, объятия, глупые шутки и даже самые обычные моменты. Я рад, что всё это у нас есть.</p>
          <p>Я не знаю, что нас ждёт дальше, но точно знаю, что хочу продолжать создавать с тобой воспоминания.</p>
          <p>Спасибо тебе за эти полгода. Я очень тебя люблю.</p>
        </div>
        <div className="letter-sign"><span className="script">твой человек</span><Heart size={20} fill="currentColor"/></div>
        <span className="paper-seal">♡</span>
      </article>
    </section>

    <section className="ending">
      <div className="ending-inner"><span className="ending-heart">♡</span><p className="script">и это только начало</p><h2>To be continued<span>...</span></h2><p>ещё больше моментов впереди</p><button className="surprise-btn" onClick={() => setSurprise(!surprise)}><LockKeyhole size={15}/> {surprise ? 'Сюрприз открыт' : 'И ещё кое-что'}</button>
        <AnimatePresence>{surprise && <motion.div className="surprise-note" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:10}}>Я бы выбрал тебя снова. В любой истории. В любом времени. ♡</motion.div>}</AnimatePresence>
      </div><footer>СДЕЛАНО С ЛЮБОВЬЮ · ДЛЯ ОДНОГО ОСОБЕННОГО ЧЕЛОВЕКА</footer>
    </section>

    <AnimatePresence>
      {opened !== null && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setOpened(null)}>
        <motion.div className="note-modal" initial={{opacity:0,y:25,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:15}} onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setOpened(null)} aria-label="Закрыть"><X size={18}/></button><span className="script accent-script">маленькое письмо</span><span className="modal-heart">♡</span><h3>{notes[opened].title}</h3><p>{notes[opened].text}</p><span className="modal-sign">с любовью ♡</span>
        </motion.div>
      </motion.div>}
      {photo !== null && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setPhoto(null)}>
        <motion.div className="photo-modal" initial={{scale:.94,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:.96,opacity:0}} onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setPhoto(null)} aria-label="Закрыть"><X size={18}/></button><div className="photo-placeholder large"><Camera size={30}/><span>ЗДЕСЬ БУДЕТ ВАШ КАДР</span></div><h3>{moments[photo].title}</h3><p>{moments[photo].caption}</p>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  </main>
}

export default App