import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export default function formatUTC(time: string, format = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs.utc(time).format(format)
}
