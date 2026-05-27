import { useEffect, useState } from "react";

const ACCENT = "#8a9a5b";
const ACCENT_DARK = "#6b7a48";
const OFF_WHITE = "#faf7f2";
const BORDER_LIGHT = "#e8e0d5";
const BORDER_MEDIUM = "#e0d9ce";
const TEXT_DARK = "#2e2820";
const TEXT_LIGHT = "#a89880";
const TEXT_LIGHTER = "#b8ad9e";

const words = ["Developer", "Designer", "Freelancer", "Creator"];
const currentYear = new Date().getFullYear();

export default function AppLoader({ onComplete }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 600);

    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const increment = p < 70 ? Math.random() * 8 + 4 : Math.random() * 3 + 1;
        return Math.min(p + increment, 100);
      });
    }, 120);

    return () => {
      clearInterval(wordTimer);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setVisible(false);
          onComplete?.();
        }, 700);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: OFF_WHITE,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Montserrat', sans-serif",
      overflow: 'hidden',
      transition: 'opacity 0.7s ease, transform 0.7s ease',
      opacity: fadeOut ? 0 : 1,
      transform: fadeOut ? 'scale(1.03)' : 'scale(1)',
    }}>
      {/* Grid Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(${BORDER_LIGHT} 1px, transparent 1px),
          linear-gradient(90deg, ${BORDER_LIGHT} 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
        opacity: 0.6,
      }} />

      {/* Glow Effect */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${ACCENT}18 0%, transparent 70%)`,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        animation: 'pulse 3s ease-in-out infinite',
      }} />

      {/* Corner Text */}
      <span style={{
        position: 'absolute',
        top: '28px',
        left: '32px',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '11px',
        color: TEXT_LIGHTER,
        letterSpacing: '1px',
      }}>Freelance</span>

      <span style={{
        position: 'absolute',
        top: '28px',
        right: '32px',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '11px',
        color: TEXT_LIGHTER,
        letterSpacing: '1px',
        textAlign: 'right',
      }}>v{currentYear}</span>

      <span style={{
        position: 'absolute',
        bottom: '28px',
        left: '32px',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '11px',
        color: TEXT_LIGHTER,
        letterSpacing: '1px',
      }}>Frontend Developer</span>

      <span style={{
        position: 'absolute',
        bottom: '28px',
        right: '32px',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '11px',
        color: TEXT_LIGHTER,
        letterSpacing: '1px',
        textAlign: 'right',
      }}>Hosur, IN</span>

      {/* Center Content */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h1 style={{
          fontFamily: "'Finlandica Headline', system-ui, sans-serif",
          fontSize: 'clamp(42px, 8vw, 72px)',
          fontWeight: 600,
          letterSpacing: '-2px',
          color: TEXT_DARK,
          lineHeight: 1,
          margin: 0,
          animation: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}>
          G<span style={{
            background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT_DARK} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>opika</span>
        </h1>

        <div style={{
          height: '28px',
          overflow: 'hidden',
          marginTop: '10px',
          marginBottom: '48px',
        }}>
          <p key={wordIndex} style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: ACCENT,
            margin: 0,
            animation: 'flip 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
          }}>
            {words[wordIndex]}
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{
          width: 'clamp(240px, 40vw, 340px)',
          position: 'relative',
        }}>
          <span style={{
            position: 'absolute',
            right: 0,
            top: '-22px',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px',
            color: TEXT_LIGHTER,
            letterSpacing: '1px',
          }}>{Math.round(progress)}%</span>

          <div style={{
            width: '100%',
            height: '2px',
            background: BORDER_MEDIUM,
            borderRadius: '2px',
            overflow: 'visible',
          }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})`,
              borderRadius: '2px',
              transition: 'width 0.15s ease',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                right: '-2px',
                top: '-3px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: ACCENT_DARK,
                boxShadow: `0 0 10px ${ACCENT}88`,
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tagline */}
      <p style={{
        position: 'absolute',
        bottom: '68px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '10px',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: TEXT_LIGHT,
        whiteSpace: 'nowrap',
      }}>Crafting digital experiences</p>

      {/* Dot Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '36px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
      }}>
        {words.map((_, i) => (
          <div
            key={i}
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: i === wordIndex % words.length ? ACCENT : BORDER_MEDIUM,
              transition: 'background 0.3s ease, box-shadow 0.3s ease',
              boxShadow: i === wordIndex % words.length ? `0 0 8px ${ACCENT}88` : 'none',
            }}
          />
        ))}
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
        }
        @keyframes flip {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}