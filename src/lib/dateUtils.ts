export function parseYear(dateStr: string | undefined | null): number | null {
	const range = parseDateRange(dateStr);
	return range?.start ?? null;
}

export function parseDateRange(
	dateStr: string | undefined | null
): { start: number; end?: number } | null {
	if (!dateStr || typeof dateStr !== 'string') return null;

	let working = dateStr.toLowerCase().replace(/[.\s]/g, '');

	const isBce = working.endsWith('bce');
	const isCe = working.endsWith('ce');

	if (!isBce && !isCe) {
		const yearWordMatch = working.match(/year\s*(\d+)/i);
		if (yearWordMatch) {
			const year = parseInt(yearWordMatch[1], 10);
			return { start: working.includes('bce') ? -year : year };
		}
		return null;
	}

	const suffix = isBce ? 'bce' : 'ce';
	const body = working.replace(new RegExp(`${suffix}$`), '');
	const parts = body.split('-').map((p) => p.replace(/^c+/, ''));

	const nums = parts.map((p) => parseInt(p, 10)).filter((n) => !isNaN(n));
	if (nums.length === 0) return null;

	if (nums.length === 1) {
		return { start: isBce ? -nums[0] : nums[0] };
	}

	const start = isBce ? -nums[0] : nums[0];
	const end = isBce ? -nums[nums.length - 1] : nums[nums.length - 1];
	return { start: Math.min(start, end), end: Math.max(start, end) };
}

export function isWithinRange(
	dateStr: string | undefined | null,
	referenceYear: number,
	contextYears: number
): boolean {
	const range = parseDateRange(dateStr);
	if (!range) return false;
	const lo = referenceYear - contextYears;
	const hi = referenceYear + contextYears;
	if (range.end !== undefined) {
		return range.start <= hi && range.end >= lo;
	}
	return range.start >= lo && range.start <= hi;
}
