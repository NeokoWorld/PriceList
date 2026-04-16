import { useEffect, useMemo, useState } from "react";

function getThemesFromCSS(): string[] {
  const themes = new Set<string>();

  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList;

    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }

    for (const rule of Array.from(rules)) {
      if (!(rule instanceof CSSStyleRule)) continue;

      const match = rule.selectorText.match(/\[data-theme="(.+?)"\]/);
      if (match) themes.add(match[1]);
    }
  }

  return Array.from(themes);
}

export default function CockpitThemeHUD() {
  const themes = useMemo(() => {
    const detected = getThemesFromCSS();
    return detected.length ? detected : ["dark"];
  }, []);

  const [theme, setTheme] = useState<string>("dark");
  const [anim, setAnim] = useState(false);

  // init theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    const initial =
      saved && themes.includes(saved)
        ? saved
        : themes[0];

    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, [themes]);

  // apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function switchTheme(next: string) {
    setAnim(true);

    setTimeout(() => {
      setTheme(next);
      setAnim(false);
    }, 500);
  }

  function cycle() {
    const i = themes.indexOf(theme);
    const next = themes[(i + 1) % themes.length];
    switchTheme(next);
  }

  return (
    <>
      <div className="cockpit-hud">
        <div className="hud-title">SYSTEM LINK</div>

        <div className="hud-display">
            <div className="radar">
                <div className="radar-sweep" />
            </div>
          <div className="hud-theme">{theme.toUpperCase()}</div>
        </div>

        <div className="hud-buttons">
          <button className="hud-button" onClick={cycle}>
            CYCLE
          </button>
        </div>
      </div>

      {anim && (
        <div className="cockpit-overlay">
          <div className="plane" />
          <div className="scanline" />
        </div>
      )}
    </>
  );
}