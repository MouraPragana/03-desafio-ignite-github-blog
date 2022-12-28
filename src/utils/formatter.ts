import { formatDistance } from 'date-fns'

export function cutString(text: string) {
	return text.length >= 200 ? `${text.substring(0, 200)}...` : text
}

type Locale = {
	code?: string
	formatDistance?: (...args: Array<any>) => any
	formatRelative?: (...args: Array<any>) => any
	localize?: {
		ordinalNumber: (...args: Array<any>) => any
		era: (...args: Array<any>) => any
		quarter: (...args: Array<any>) => any
		month: (...args: Array<any>) => any
		day: (...args: Array<any>) => any
		dayPeriod: (...args: Array<any>) => any
	}
	formatLong?: {
		date: (...args: Array<any>) => any
		time: (...args: Array<any>) => any
		dateTime: (...args: Array<any>) => any
	}
	match?: {
		ordinalNumber: (...args: Array<any>) => any
		era: (...args: Array<any>) => any
		quarter: (...args: Array<any>) => any
		month: (...args: Array<any>) => any
		day: (...args: Array<any>) => any
		dayPeriod: (...args: Array<any>) => any
	}
	options?: {
		weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
		firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
	}
}

export function formatDateDistanceFromNow(date: string, locale: Locale) {
	return formatDistance(new Date(date), new Date(), {
		addSuffix: true,
		locale,
	})
}
