import { categories, actions, objects } from "./analyticsDefinitions";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const trackPageview = (url: string) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

interface TrackEventArgs {
  action: string;
  category: categories;
  label?: string;
  value?: number;
  params?: object;
}
export const trackEvent = ({
  action,
  category,
  label,
  value,
  ...params
}: TrackEventArgs) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    ...params,
  });
};

export const composeAction = (action: actions, object: objects) => {
  return object ? `${action} ${object}` : `${action}`;
};
