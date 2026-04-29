// Multi-step booking form. Self-contained; reads strings from window.STRINGS[lang].
const { useState, useMemo, useEffect } = React;

function BookingForm({ lang }) {
  const t = window.STRINGS[lang].booking;
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    services: [],
    date: null,
    time: null,
    name: "",
    phone: "",
    email: "",
    notes: "",
    forWho: "self",
    firstTime: "yes",
  });
  const [monthOffset, setMonthOffset] = useState(0);

  const services = window.STRINGS[lang].services.items;

  function update(patch) { setData(d => ({ ...d, ...patch })); }
  function toggleService(idx) {
    setData(d => {
      const has = d.services.includes(idx);
      return { ...d, services: has ? d.services.filter(i => i !== idx) : [...d.services, idx] };
    });
  }

  function validate(s) {
    const e = {};
    if (s === 0 && data.services.length === 0) e.services = t.err.services;
    if (s === 1) {
      if (!data.date) e.date = t.err.date;
      if (!data.time) e.time = t.err.time;
    }
    if (s === 2) {
      if (!data.name.trim()) e.name = t.err.name;
      if (!data.phone.trim() && !data.email.trim()) e.contact = t.err.contact;
      if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = t.err.email;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validate(step)) setStep(s => Math.min(3, s + 1));
  }
  function back() { setStep(s => Math.max(0, s - 1)); setErrors({}); }

  function submit() {
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setDone(true); }, 900);
  }

  function reset() {
    setData({ services: [], date: null, time: null, name: "", phone: "", email: "", notes: "", forWho: "self", firstTime: "yes" });
    setStep(0); setDone(false); setErrors({});
  }

  // calendar
  const today = new Date();
  const monthDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const monthName = `${t.months[monthDate.getMonth()]} ${monthDate.getFullYear()}`;

  const days = useMemo(() => {
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const firstDow = (new Date(year, month, 1).getDay() + 6) % 7; // 0=Mon
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    // pad with empties
    for (let i = 0; i < firstDow; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const past = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      cells.push({ date, past });
    }
    return cells;
  }, [monthOffset]);

  const times = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

  if (done) {
    return (
      <div className="success fade-in">
        <div className="success__icon"><Icon.Check size={36} /></div>
        <h3>{t.successTitle}</h3>
        <p>{t.successText}</p>
        <p style={{ marginTop: 24 }}>
          <button className="btn btn--ghost" onClick={reset}>{t.successAgain}</button>
        </p>
      </div>
    );
  }

  return (
    <>
      {/* progress dots */}
      <div className="steps" aria-hidden="true">
        {t.steps.map((label, i) => (
          <React.Fragment key={i}>
            <div className={`step-dot ${i === step ? "active" : ""} ${i < step ? "done" : ""}`}>
              <div className="step-dot__circle">{i < step ? <Icon.Check size={14} /> : i + 1}</div>
              <span>{label}</span>
            </div>
            {i < t.steps.length - 1 && <div className={`step-line ${i < step ? "done" : ""}`} />}
          </React.Fragment>
        ))}
      </div>

      {/* Step 1: services */}
      {step === 0 && (
        <div className="fade-in" key="s1">
          <h3 className="section-title" style={{ fontSize: 32, textAlign: "center", marginBottom: 4 }}>{t.step1Title}</h3>
          <p style={{ textAlign: "center", color: "var(--muted)", marginTop: 0, marginBottom: 32 }}>{t.step1Sub}</p>
          <div className="svc-options">
            {services.map((svc, i) => {
              const checked = data.services.includes(i);
              const ICONS = [Icon.Home, Icon.Car, Icon.Basket, Icon.People, Icon.Eye];
              const Ic = ICONS[i];
              return (
                <label key={i} className={`svc-opt ${checked ? "checked" : ""}`}>
                  <input type="checkbox" checked={checked} onChange={() => toggleService(i)} />
                  <div className="svc-opt__icon"><Ic size={22} /></div>
                  <div className="svc-opt__text">
                    <div className="svc-opt__name">{svc.name}</div>
                    <div className="svc-opt__desc">{svc.desc}</div>
                  </div>
                  <div className="svc-opt__check">{checked && <Icon.Check size={12} />}</div>
                </label>
              );
            })}
          </div>
          {errors.services && <div className="field__error" style={{ textAlign: "center", marginTop: 16 }}>{errors.services}</div>}
        </div>
      )}

      {/* Step 2: date/time */}
      {step === 1 && (
        <div className="fade-in" key="s2">
          <h3 className="section-title" style={{ fontSize: 32, textAlign: "center", marginBottom: 4 }}>{t.step2Title}</h3>
          <p style={{ textAlign: "center", color: "var(--muted)", marginTop: 0, marginBottom: 32 }}>{t.step2Sub}</p>

          <div className="month-nav">
            <button onClick={() => setMonthOffset(m => Math.max(0, m - 1))} disabled={monthOffset === 0} aria-label="Previous month"><Icon.ChevL /></button>
            <h4>{monthName}</h4>
            <button onClick={() => setMonthOffset(m => Math.min(3, m + 1))} disabled={monthOffset === 3} aria-label="Next month"><Icon.ChevR /></button>
          </div>

          <div className="date-grid" style={{ marginBottom: 28 }}>
            {t.dows.map(d => (
              <div key={d} style={{ textAlign: "center", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", paddingBottom: 4 }}>{d}</div>
            ))}
            {days.map((cell, i) => {
              if (!cell) return <div key={i} />;
              const sel = data.date && data.date.toDateString() === cell.date.toDateString();
              return (
                <button
                  key={i}
                  type="button"
                  className={`date-cell ${sel ? "selected" : ""}`}
                  disabled={cell.past}
                  onClick={() => update({ date: cell.date })}
                >
                  <div className="date-cell__day">{cell.date.getDate()}</div>
                </button>
              );
            })}
          </div>

          {data.date && (
            <>
              <div style={{ fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--sage-darker)", fontWeight: 600, marginBottom: 12 }}>
                {lang === "sv" ? "Välj tid" : "Choose a time"}
              </div>
              <div className="time-grid">
                {times.map(time => (
                  <button
                    key={time}
                    type="button"
                    className={`time-cell ${data.time === time ? "selected" : ""}`}
                    onClick={() => update({ time })}
                  >{time}</button>
                ))}
              </div>
            </>
          )}
          {errors.date && <div className="field__error" style={{ marginTop: 12 }}>{errors.date}</div>}
          {errors.time && <div className="field__error" style={{ marginTop: 12 }}>{errors.time}</div>}
        </div>
      )}

      {/* Step 3: contact */}
      {step === 2 && (
        <div className="fade-in" key="s3">
          <h3 className="section-title" style={{ fontSize: 32, textAlign: "center", marginBottom: 4 }}>{t.step3Title}</h3>
          <p style={{ textAlign: "center", color: "var(--muted)", marginTop: 0, marginBottom: 32 }}>{t.step3Sub}</p>

          <div style={{ maxWidth: 540, margin: "0 auto" }}>
            <div className="field">
              <label>{t.labels.name}</label>
              <input value={data.name} onChange={e => update({ name: e.target.value })} placeholder="Anna Andersson" />
              {errors.name && <div className="field__error">{errors.name}</div>}
            </div>
            <div className="field--row field">
              <div>
                <label>{t.labels.phone}</label>
                <input value={data.phone} onChange={e => update({ phone: e.target.value })} placeholder="070 ..." />
              </div>
              <div>
                <label>{t.labels.email}</label>
                <input value={data.email} onChange={e => update({ email: e.target.value })} placeholder="namn@exempel.se" />
                {errors.email && <div className="field__error">{errors.email}</div>}
              </div>
            </div>
            {errors.contact && <div className="field__error" style={{ marginTop: -8, marginBottom: 16 }}>{errors.contact}</div>}

            <div className="field">
              <label>{t.labels.forWho}</label>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { k: "self", label: t.labels.forSelf },
                  { k: "other", label: t.labels.forOther },
                ].map(o => (
                  <button
                    key={o.k}
                    type="button"
                    onClick={() => update({ forWho: o.k })}
                    className={`time-cell ${data.forWho === o.k ? "selected" : ""}`}
                    style={{ flex: 1, padding: "14px 12px" }}
                  >{o.label}</button>
                ))}
              </div>
            </div>

            <div className="field">
              <label>{t.labels.firstTime}</label>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { k: "yes", label: t.labels.yes },
                  { k: "no", label: t.labels.no },
                ].map(o => (
                  <button
                    key={o.k}
                    type="button"
                    onClick={() => update({ firstTime: o.k })}
                    className={`time-cell ${data.firstTime === o.k ? "selected" : ""}`}
                    style={{ flex: 1, padding: "14px 12px" }}
                  >{o.label}</button>
                ))}
              </div>
            </div>

            <div className="field">
              <label>{t.labels.notes}</label>
              <textarea value={data.notes} onChange={e => update({ notes: e.target.value })} placeholder={t.labels.notesPh} />
            </div>
          </div>
        </div>
      )}

      {/* Step 4: confirm */}
      {step === 3 && (
        <div className="fade-in" key="s4">
          <h3 className="section-title" style={{ fontSize: 32, textAlign: "center", marginBottom: 4 }}>{t.step4Title}</h3>
          <p style={{ textAlign: "center", color: "var(--muted)", marginTop: 0, marginBottom: 32 }}>{t.step4Sub}</p>

          <div className="confirm-box" style={{ maxWidth: 600, margin: "0 auto" }}>
            <div className="confirm-row">
              <div className="confirm-row__label">{t.summary.services}</div>
              <div className="confirm-row__value">{data.services.map(i => services[i].name).join(", ")}</div>
            </div>
            <div className="confirm-row">
              <div className="confirm-row__label">{t.summary.date}</div>
              <div className="confirm-row__value">
                {data.date && data.date.toLocaleDateString(lang === "sv" ? "sv-SE" : "en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
              </div>
            </div>
            <div className="confirm-row">
              <div className="confirm-row__label">{t.summary.time}</div>
              <div className="confirm-row__value">{data.time}</div>
            </div>
            <div className="confirm-row">
              <div className="confirm-row__label">{t.summary.forWho}</div>
              <div className="confirm-row__value">{data.forWho === "self" ? t.labels.forSelf : t.labels.forOther}</div>
            </div>
            <div className="confirm-row">
              <div className="confirm-row__label">{t.summary.name}</div>
              <div className="confirm-row__value">{data.name}</div>
            </div>
            {data.phone && (
              <div className="confirm-row">
                <div className="confirm-row__label">{t.summary.phone}</div>
                <div className="confirm-row__value">{data.phone}</div>
              </div>
            )}
            {data.email && (
              <div className="confirm-row">
                <div className="confirm-row__label">{t.summary.email}</div>
                <div className="confirm-row__value">{data.email}</div>
              </div>
            )}
            {data.notes && (
              <div className="confirm-row">
                <div className="confirm-row__label">{t.summary.notes}</div>
                <div className="confirm-row__value" style={{ maxWidth: 320 }}>{data.notes}</div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="form-actions">
        {step > 0 ? (
          <button className="btn btn--ghost" onClick={back}><Icon.ArrowL /> {t.back}</button>
        ) : <span />}
        {step < 3 ? (
          <button className="btn btn--primary" onClick={next}>{t.next} <Icon.ArrowR /></button>
        ) : (
          <button className="btn btn--primary" onClick={submit} disabled={submitting}>
            {submitting ? t.booking : t.send} {!submitting && <Icon.Heart size={16} />}
          </button>
        )}
      </div>
    </>
  );
}

window.BookingForm = BookingForm;
