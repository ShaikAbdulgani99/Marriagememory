import React, { useState, useEffect, useRef } from 'react';
import './NikahBook.css';
import { Howl } from 'howler';

import coverImage from '../src/assets/cover.png';
import leftImage from '../src/assets/left.png';
import rightImage from '../src/assets/right.png';
import musicFile from '../src/assets/nikah-music.mp3';

export default function BookInvite() {
  const [opened, setOpened] = useState(false);
  const [fullyOpened, setFullyOpened] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Howl({
      src: [musicFile],
      html5: true,
      loop: true
    });
  }, []);

  useEffect(() => {
    if (opened) {
      audioRef.current.play();
      setTimeout(() => setFullyOpened(true), 600); // Delay for full open
    } else {
      setFullyOpened(false);
      audioRef.current.stop();
    }
  }, [opened]);

  const toggleBook = () => {
    setOpened(prev => !prev);
  };

  return (
    <div className={`book-wrapper ${opened ? 'shower' : ''}`} onClick={toggleBook}>
      {!opened && (
        <div className="book-cover shake">
          <div className="circle-image">
            <img src={coverImage} alt="Cover" />
          </div>
          <h2 className="cover-title">Gift Card</h2>
          <p className="cover-sub">For Nikah and Walima</p>
          <h2 className="cover-title">A&S</h2>
        </div>
      )}

      {opened && (
        <div className={`book-pages ${fullyOpened ? 'joined' : 'gap'}`}>
          <div className="page left">
            <div className="circle-image">
              <img src={leftImage} alt="Left" />
            </div>
            <p className="page-text">Abdulgani ❤️</p>
            <h2 className="cover-title">Walima</h2>
            <h2 className="cover-title">June 16 2025, Sunday</h2>
          </div>
          <div className="page right">
            <div className="circle-image">
              <img src={rightImage} alt="Right" />
            </div>
            <p className="page-text">❤️ Shahina </p>
            <h2 className="cover-title">Nikah</h2>
            <h2 className="cover-title">June 15 2025, Sunday</h2>
          </div>
        </div>
      )}

      {opened && (
  <div className="flowers">
    {Array.from({ length: 30 }).map((_, i) => (
      <span
        key={i}
        style={{
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      >
        🌸🌺🌼
      </span>
    ))}
  </div>
)}

    </div>
  );
}
