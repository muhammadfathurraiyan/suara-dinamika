import {
  PiArrowClockwise,
  PiArrowCounterClockwise,
  PiCode,
  PiImage,
  PiLinkSimpleHorizontal,
  PiListBullets,
  PiListNumbers,
  PiQuotes,
  PiTextAlignCenter,
  PiTextAlignLeft,
  PiTextAlignRight,
  PiTextB,
  PiTextHOne,
  PiTextHTwo,
  PiTextItalic,
  PiTextStrikethrough,
  PiTextT,
  PiTextUnderline,
} from "react-icons/pi";

export const eventTypes = {
  paragraph: "paragraph",
  h1: "h1",
  h2: "h2",
  ul: "ul",
  ol: "ol",
  quote: "quote",
  formatCode: "formatCode",
  formatUndo: "formatUndo",
  formatRedo: "formatRedo",
  formatBold: "formatBold",
  formatItalic: "formatItalic",
  formatUnderline: "formatUnderline",
  formatStrike: "formatStrike",
  formatInsertLink: "formatInsertLink",
  formatAlignLeft: "formatAlignLeft",
  formatAlignCenter: "formatAlignCenter",
  formatAlignRight: "formatAlignRight",
  insertImage: "insertImage",
};

export const pluginsList = [
  {
    id: 1,
    Icon: PiTextT,
    event: eventTypes.paragraph,
  },
  {
    id: 2,
    Icon: PiTextHOne,
    event: eventTypes.h1,
  },
  {
    id: 3,
    Icon: PiTextHTwo,
    event: eventTypes.h2,
  },
  {
    id: 4,
    Icon: PiListBullets,
    event: eventTypes.ul,
  },

  {
    id: 5,
    Icon: PiListNumbers,
    event: eventTypes.ol,
  },
  {
    id: 6,
    Icon: PiQuotes,
    event: eventTypes.quote,
  },

  {
    id: 7,
    Icon: PiCode,
    event: eventTypes.formatCode,
  },
  {
    id: 8,
    Icon: PiArrowCounterClockwise,
    event: eventTypes.formatUndo,
  },
  {
    id: 9,
    Icon: PiArrowClockwise,
    event: eventTypes.formatRedo,
  },
  {
    id: 10,
    Icon: PiTextB,
    event: eventTypes.formatBold,
  },
  {
    id: 11,
    Icon: PiTextItalic,
    event: eventTypes.formatItalic,
  },
  {
    id: 12,
    Icon: PiTextUnderline,
    event: eventTypes.formatUnderline,
  },
  {
    id: 13,
    Icon: PiTextStrikethrough,
    event: eventTypes.formatStrike,
  },
  {
    id: 14,
    Icon: PiImage,
    event: eventTypes.insertImage,
  },
  {
    id: 15,
    Icon: PiLinkSimpleHorizontal,
    event: eventTypes.formatInsertLink,
  },
  {
    id: 16,
    Icon: PiTextAlignLeft,
    event: eventTypes.formatAlignLeft,
  },
  {
    id: 17,
    Icon: PiTextAlignCenter,
    event: eventTypes.formatAlignCenter,
  },
  {
    id: 18,
    Icon: PiTextAlignRight,
    event: eventTypes.formatAlignRight,
  },
];
