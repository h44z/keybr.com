import { type GeometryDict } from "../types.ts";

// See https://www.w3.org/TR/uievents-code/#keyboard-102
export const ISO_102_SYMMETRIC: GeometryDict = {
  Backquote: {
    x: 0,
    y: 0,
    zones: ["pinky", "left", "digit"],
  },
  Digit1: {
    x: 1,
    y: 0,
    zones: ["pinky", "left", "digit"],
  },
  Digit2: {
    x: 2,
    y: 0,
    zones: ["ring", "left", "digit"],
  },
  Digit3: {
    x: 3,
    y: 0,
    zones: ["middle", "left", "digit"],
  },
  Digit4: {
    x: 4,
    y: 0,
    zones: ["middle", "left", "digit"],
  },
  Digit5: {
    x: 5,
    y: 0,
    zones: ["leftIndex", "left", "digit"],
  },
  Digit6: {
    x: 6,
    y: 0,
    zones: ["leftIndex", "right", "digit"],
  },
  Digit7: {
    x: 7,
    y: 0,
    zones: ["rightIndex", "right", "digit"],
  },
  Digit8: {
    x: 8,
    y: 0,
    zones: ["middle", "right", "digit"],
  },
  Digit9: {
    x: 9,
    y: 0,
    zones: ["middle", "right", "digit"],
  },
  Digit0: {
    x: 10,
    y: 0,
    zones: ["ring", "right", "digit"],
  },
  Minus: {
    x: 11,
    y: 0,
    zones: ["pinky", "right", "digit"],
  },
  Equal: {
    x: 12,
    y: 0,
    zones: ["pinky", "right", "digit"],
  },
  Backspace: {
    x: 13,
    y: 0,
    w: 2,
    h: 1,
    labels: [{ text: "Backspace" }],
    zones: ["pinky", "right", "digit"],
  },
  Tab: {
    x: 0,
    y: 1,
    w: 1.5,
    h: 1,
    labels: [{ text: "Tab" }],
    zones: ["pinky", "left", "top"],
  },
  KeyQ: {
    x: 1.5,
    y: 1,
    zones: ["pinky", "left", "top"],
  },
  KeyW: {
    x: 2.5,
    y: 1,
    zones: ["ring", "left", "top"],
  },
  KeyE: {
    x: 3.5,
    y: 1,
    zones: ["middle", "left", "top"],
  },
  KeyR: {
    x: 4.5,
    y: 1,
    zones: ["leftIndex", "left", "top"],
  },
  KeyT: {
    x: 5.5,
    y: 1,
    zones: ["leftIndex", "left", "top"],
  },
  KeyY: {
    x: 6.5,
    y: 1,
    zones: ["rightIndex", "right", "top"],
  },
  KeyU: {
    x: 7.5,
    y: 1,
    zones: ["rightIndex", "right", "top"],
  },
  KeyI: {
    x: 8.5,
    y: 1,
    zones: ["middle", "right", "top"],
  },
  KeyO: {
    x: 9.5,
    y: 1,
    zones: ["ring", "right", "top"],
  },
  KeyP: {
    x: 10.5,
    y: 1,
    zones: ["pinky", "right", "top"],
  },
  BracketLeft: {
    x: 11.5,
    y: 1,
    zones: ["pinky", "right", "top"],
  },
  BracketRight: {
    x: 12.5,
    y: 1,
    zones: ["pinky", "right", "top"],
  },
  Enter: {
    x: 13.5,
    y: 1,
    w: 1.5,
    h: 2,
    labels: [{ text: "Enter" }],
    shape: "m 0 0 l 0 38 l 10 0 l 0 40 l 48 0 l 0 -78 z",
    zones: ["pinky", "right", "top"],
  },
  CapsLock: {
    x: 0,
    y: 2,
    w: 1.75,
    h: 1,
    labels: [{ text: "Caps Lock" }],
    zones: ["pinky", "left", "home"],
  },
  KeyA: {
    x: 1.75,
    y: 2,
    zones: ["pinky", "left", "home"],
  },
  KeyS: {
    x: 2.75,
    y: 2,
    zones: ["ring", "left", "home"],
  },
  KeyD: {
    x: 3.75,
    y: 2,
    zones: ["middle", "left", "home"],
  },
  KeyF: {
    x: 4.75,
    y: 2,
    zones: ["leftIndex", "left", "home"],
    homing: true,
  },
  KeyG: {
    x: 5.75,
    y: 2,
    zones: ["leftIndex", "left", "home"],
  },
  KeyH: {
    x: 6.75,
    y: 2,
    zones: ["rightIndex", "right", "home"],
  },
  KeyJ: {
    x: 7.75,
    y: 2,
    zones: ["rightIndex", "right", "home"],
    homing: true,
  },
  KeyK: {
    x: 8.75,
    y: 2,
    zones: ["middle", "right", "home"],
  },
  KeyL: {
    x: 9.75,
    y: 2,
    zones: ["ring", "right", "home"],
  },
  Semicolon: {
    x: 10.75,
    y: 2,
    zones: ["pinky", "right", "home"],
  },
  Quote: {
    x: 11.75,
    y: 2,
    zones: ["pinky", "right", "home"],
  },
  Backslash: {
    x: 12.75,
    y: 2,
    zones: ["pinky", "right", "home"],
  },
  ShiftLeft: {
    x: 0,
    y: 3,
    w: 1.25,
    h: 1,
    labels: [{ text: "Shift" }],
    zones: ["pinky", "left", "bottom"],
  },
  IntlBackslash: {
    x: 1.25,
    y: 3,
    zones: ["pinky", "left", "bottom"],
  },
  KeyZ: {
    x: 2.25,
    y: 3,
    zones: ["ring", "left", "bottom"],
  },
  KeyX: {
    x: 3.25,
    y: 3,
    zones: ["middle", "left", "bottom"],
  },
  KeyC: {
    x: 4.25,
    y: 3,
    zones: ["leftIndex", "left", "bottom"],
  },
  KeyV: {
    x: 5.25,
    y: 3,
    zones: ["leftIndex", "left", "bottom"],
  },
  KeyB: {
    x: 6.25,
    y: 3,
    zones: ["leftIndex", "left", "bottom"],
  },
  KeyN: {
    x: 7.25,
    y: 3,
    zones: ["rightIndex", "right", "bottom"],
  },
  KeyM: {
    x: 8.25,
    y: 3,
    zones: ["rightIndex", "right", "bottom"],
  },
  Comma: {
    x: 9.25,
    y: 3,
    zones: ["middle", "right", "bottom"],
  },
  Period: {
    x: 10.25,
    y: 3,
    zones: ["ring", "right", "bottom"],
  },
  Slash: {
    x: 11.25,
    y: 3,
    zones: ["pinky", "right", "bottom"],
  },
  ShiftRight: {
    x: 12.25,
    y: 3,
    w: 2.75,
    h: 1,
    labels: [{ text: "Shift" }],
    zones: ["pinky", "right", "bottom"],
  },
  ControlLeft: {
    x: 0,
    y: 4,
    w: 1.5,
    h: 1,
    labels: [{ text: "Ctrl" }],
    zones: ["pinky", "left", "bottom"],
  },
  AltLeft: {
    x: 1.5,
    y: 4,
    w: 1.5,
    h: 1,
    labels: [{ text: "Alt" }],
    zones: ["pinky", "left", "bottom"],
  },
  Space: {
    x: 3,
    y: 4,
    w: 9,
    h: 1,
    zones: ["thumb", "right", "bottom"],
  },
  AltRight: {
    x: 12,
    y: 4,
    w: 1.5,
    h: 1,
    labels: [{ text: "Alt" }],
    zones: ["pinky", "right", "bottom"],
  },
  ControlRight: {
    x: 13.5,
    y: 4,
    w: 1.5,
    h: 1,
    labels: [{ text: "Ctrl" }],
    zones: ["pinky", "right", "bottom"],
  },
};
