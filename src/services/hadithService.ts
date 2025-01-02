import { Hadith } from '../types/hadith';

const hadiths: Hadith[] = [
  {
    text: "The best among you is the one who learns the Quran and teaches it.",
    narrator: "Sahih Al-Bukhari"
  },
  {
    text: "None of you truly believes until he loves for his brother what he loves for himself.",
    narrator: "Sahih Al-Bukhari"
  },
  {
    text: "The strong person is not the one who can wrestle someone down. The strong person is the one who can control himself when angry.",
    narrator: "Sahih Al-Bukhari"
  },
  {
    text: "A good word is charity.",
    narrator: "Sahih Al-Bukhari"
  },
  {
    text: "Cleanliness is half of faith.",
    narrator: "Sahih Muslim"
  }
];

let currentIndex = 0;

export const fetchDailyHadith = async (): Promise<Hadith> => {
  const hadith = hadiths[currentIndex];
  currentIndex = (currentIndex + 1) % hadiths.length;
  return hadith;
};