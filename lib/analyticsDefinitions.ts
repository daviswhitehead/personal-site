export enum standardDimensions {}
// https://support.google.com/analytics/answer/9143382

export enum customDimensions {
  CATEGORY = "category",
  ACTION = "action",
  OBJECT = "object",
}

export enum categories {
  // represents the part of the product an event belongs to
  // always lowercase and the prefix to an event name
  HOME = "home",
  ABOUT = "about",
  PRODUCTS = "products",
  WRITING = "writing",
  COLLABORATE = "collaborate",
  SUBSCRIBE = "subscribe",
  SOCIAL = "social",
  HEADER = "header",
}

export enum actions {
  // represents the action a user took
  // always lowercase, present-tense, after the category, and can be followed by an object
  PRESS = "press",
  VIEW = "view",
}

export enum objects {
  // represents the ui object engaged with
  // always lowercase, present-tense, after the category and action. optional
  SUBSCRIBE_LINK = "subscribe link",
  SUBSCRIBE_MODAL = "subscribe modal",
  ICON = "icon",
}

export const label = (label: string) => {
  {
    label: label;
  }
};

// RESOURCES
// About Events: https://support.google.com/analytics/answer/1033068
