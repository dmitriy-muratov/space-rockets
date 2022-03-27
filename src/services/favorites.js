export function toFavorite(item) {
  return {
    id: item.site_id ?? item.flight_number,
    name: item.site_name_long ?? item.mission_name,
    details: item.details ? item.details.slice(0, 60) + '...' : 'No details provided',
    type: item.flight_number ? 'Launch' : 'Launch Pad',
    category: item.flight_number ? 'launches' : 'launch-pads',
  }
}
