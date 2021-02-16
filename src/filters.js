import data from './data'

export const filterSeriesByArc = (filter) => {
  const filterValue = filter.replace('arc:', '')
  const filterBase = JSON.parse(JSON.stringify(data))

  filterBase.forEach(series => {
    series.entries = series.entries.filter(entry => entry.tags.includes(filterValue))
  })

  return filterBase
}

export const filterSeriesByStatus = (filter) => {
  const filterValue = filter.replace('status:', '')
  const filterBase = JSON.parse(JSON.stringify(data))

  filterBase.forEach(series => {
    switch (filterValue) {
      case 'done':
        series.entries = series.entries.filter(entry => entry.done)
        break;
      case 'progress':
        series.entries = series.entries.filter(entry => !entry.done)
        break;
    }
  })

  return filterBase
}

export const filterSeriesByType = (filter) => {
  const filterValue = filter.replace('type:', '')
  const filterBase = JSON.parse(JSON.stringify(data))

  return filterBase.filter(series => series.type === filterValue)
}