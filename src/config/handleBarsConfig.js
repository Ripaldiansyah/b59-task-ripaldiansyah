const { getDuration } = require("../utils/duration");
const { cutText, isDescriptionOver } = require("../utils/cut_text");
const { getIcon } = require("../utils/get_icon");
const { checkTech } = require("../utils/check_tech");
const { formatDate } = require("../utils/format-date");
const {
  checkMessage,
  checkSelected,
  printValue,
  getObject,
  andIf,
  duration,
  rateIndex,
  subtract,
  orIf,
} = require("../utils/check_message");

module.exports = {
  registerHelpers: (hbs) => {
    hbs.registerHelper("defaultTitle", (value, defaultTitle) => {
      return value || defaultTitle;
    });
    hbs.registerHelper("eq", (arg1, arg2) => {
      return arg1 === arg2;
    });

    hbs.registerHelper("duration", getDuration);
    hbs.registerHelper("description", cutText);
    hbs.registerHelper("isOver", isDescriptionOver);
    hbs.registerHelper("getIcon", getIcon);
    hbs.registerHelper("checkTech", checkTech);
    hbs.registerHelper("formatDate", formatDate);
    hbs.registerHelper("checkMessage", checkMessage);
    hbs.registerHelper("checkSelected", checkSelected);
    hbs.registerHelper("printValue", printValue);
    hbs.registerHelper("getObject", getObject);
    hbs.registerHelper("durationCreated", duration);
    hbs.registerHelper("andIf", andIf);
    hbs.registerHelper("rateIndex", rateIndex);
    hbs.registerHelper("subs", subtract);
    hbs.registerHelper("orIf", orIf);
  },
};
