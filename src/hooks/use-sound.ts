"use client";

import { useCallback, useRef, useState } from "react";

const audioCtx = typeof window !== "undefined" ? new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)() : null;

function playPop() {
  if (!audioCtx) return;
  if (audioCtx.state === "suspended") audioCtx.resume();

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.frequency.setValueAtTime(800, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);

  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);

  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 0.15);
}

function playBirthdaySong(onEnded: () => void): boolean {
  if (!audioCtx || audioCtx.state === "closed") return false;
  const resumePromise = audioCtx.state === "suspended" ? audioCtx.resume() : null;

  const notes = [
    { freq: 262, dur: 0.2 }, // C
    { freq: 262, dur: 0.2 }, // C
    { freq: 294, dur: 0.4 }, // D
    { freq: 262, dur: 0.4 }, // C
    { freq: 349, dur: 0.4 }, // F
    { freq: 330, dur: 0.8 }, // E
    { freq: 262, dur: 0.2 }, // C
    { freq: 262, dur: 0.2 }, // C
    { freq: 294, dur: 0.4 }, // D
    { freq: 262, dur: 0.4 }, // C
    { freq: 392, dur: 0.4 }, // G
    { freq: 349, dur: 0.8 }, // F
  ];

  let time = audioCtx.currentTime;
  let finalOscillator: OscillatorNode | null = null;
  for (const note of notes) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = "square";
    osc.frequency.setValueAtTime(note.freq, time);
    gain.gain.setValueAtTime(0.08, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + note.dur * 0.9);
    osc.start(time);
    osc.stop(time + note.dur);
    finalOscillator = osc;
    time += note.dur;
  }

  if (!finalOscillator) return false;

  let hasEnded = false;
  const finish = () => {
    if (hasEnded) return;
    hasEnded = true;
    onEnded();
  };

  finalOscillator.addEventListener("ended", finish, { once: true });
  if (resumePromise) {
    void resumePromise.catch((error: unknown) => {
      console.error("Unable to resume birthday song playback.", error);
      finish();
    });
  }

  return true;
}

function playFirework() {
  if (!audioCtx) return;
  if (audioCtx.state === "suspended") audioCtx.resume();

  const bufferSize = audioCtx.sampleRate * 0.3;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
  source.connect(gain);
  gain.connect(audioCtx.destination);
  source.start();
}

export function useSound() {
  const lastPlayRef = useRef(0);
  const birthdaySongPlayingRef = useRef(false);
  const [isBirthdaySongPlaying, setIsBirthdaySongPlaying] = useState(false);

  const playClick = useCallback(() => {
    if (birthdaySongPlayingRef.current) return;

    const now = Date.now();
    if (now - lastPlayRef.current < 100) return;
    lastPlayRef.current = now;
    playPop();
  }, []);

  const playCelebrate = useCallback(() => {
    if (birthdaySongPlayingRef.current || !audioCtx) return;

    birthdaySongPlayingRef.current = true;
    setIsBirthdaySongPlaying(true);

    const finish = () => {
      birthdaySongPlayingRef.current = false;
      setIsBirthdaySongPlaying(false);
    };

    try {
      if (!playBirthdaySong(finish)) finish();
    } catch (error) {
      finish();
      console.error("Unable to play birthday song.", error);
    }
  }, []);

  const playExplosion = useCallback(() => {
    if (birthdaySongPlayingRef.current) return;
    playFirework();
  }, []);

  return { playClick, playCelebrate, playExplosion, isBirthdaySongPlaying };
}
