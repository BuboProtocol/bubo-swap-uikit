import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#fbb31b",
  primaryBright: "#e7ac2f",
  primaryDark: "#c58909",
  secondary: "#ecc168",
  success: "#ad881b",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#252422",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#171613",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e5ae3b",
  background: "#252422",
  backgroundDisabled: "#383631",
  contrast: "#FFFFFF",
  invertedContrast: "#252422",
  input: "#42413f",
  primaryDark: "#d89811",
  tertiary: "#353547",
  text: "#eedd79",
  textDisabled: "#82807d",
  textSubtle: "#e0dcce",
  borderColor: "#d0971e",
  card: "#2b2a27",
};
