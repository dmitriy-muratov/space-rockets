export function formatDate(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
}

export function formatDateTime(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  }).format(new Date(timestamp));
}

export function formatDateTimeLaunch(timestamp) {
  // eslint-disable-next-line  no-unused-vars
  const [_, siteDateWithoutTimeZone, siteOffsetString] = timestamp.match(
    /(^.*)([-]\d{2}:\d{2}$)/
  );

  return new Intl.DateTimeFormat(navigator.language, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(new Date(siteDateWithoutTimeZone)) + ` GMT${siteOffsetString}`;
}
