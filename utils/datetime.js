const timeDifference = (current, previous) => {
  const milliSecondsPerMinute = 60 * 1000
  const milliSecondsPerHour = milliSecondsPerMinute * 60
  const milliSecondsPerDay = milliSecondsPerHour * 24
  const milliSecondsPerMonth = milliSecondsPerDay * 30
  const milliSecondsPerYear = milliSecondsPerDay * 365

  const elapsed = current - previous

  if (elapsed < milliSecondsPerMinute / 3) {
    return 'just now'
  }

  if (elapsed < milliSecondsPerMinute) {
    return 'less than 1 min'
  } else if (elapsed < milliSecondsPerHour) {
    return Math.round(elapsed / milliSecondsPerMinute) + ' min'
  } else if (elapsed < milliSecondsPerDay) {
    return Math.round(elapsed / milliSecondsPerHour) + ' h'
  } else if (elapsed < milliSecondsPerMonth) {
    let days = Math.round(elapsed / milliSecondsPerDay)
    return `${days} day${days > 1 ? 's' : ''}`
  } else if (elapsed < milliSecondsPerYear) {
    return Math.round(elapsed / milliSecondsPerMonth) + ' mo'
  } else {
    return Math.round(elapsed / milliSecondsPerYear) + ' years'
  }
}

const timeDifferenceForDate = date => {
  const now = new Date().getTime()
  const updated = new Date(date).getTime()

  return timeDifference(now, updated)
}

export { timeDifference, timeDifferenceForDate }
