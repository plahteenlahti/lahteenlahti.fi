import { formatDistance, formatRelative, format as formatTime } from "date-fns";
import { fi, enUS } from "date-fns/locale";
import { useI18next } from "gatsby-plugin-react-i18next";

export const useLocalizedTime = () => {
  const { language } = useI18next();

  const format = (date: Date, f: string) =>
    formatTime(date, f, {
      locale: language === "fi" ? fi : enUS,
    });

  return { format };
};

export const useLocalizedDistance = () => {
  const { language } = useI18next();

  const format = (date1: Date, date2: Date) =>
    formatDistance(date1, date2, {
      locale: language === "fi" ? fi : enUS,
    });

  return { format };
};

export const useLocalizedRelative = () => {
  const { language } = useI18next();

  const format = (date: Date) =>
    formatRelative(date, new Date(), {
      locale: language === "fi" ? fi : enUS,
    });

  return { format };
};
