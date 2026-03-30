export function parseYear(dateStr: string | undefined | null): number | null {
	if (!dateStr || typeof dateStr !== 'string') return null;

	const cleaned = dateStr.toLowerCase().replace(/[.\s]/g, '').replace(/^c/, '');

	const bceMatch = cleaned.match(/^(\d+)(?:-\d+)?bce$/);
	if (bceMatch) {
		return -parseInt(bceMatch[1], 10);
	}

	const ceMatch = cleaned.match(/^(\d+)(?:ce)?$/);
	if (ceMatch) {
		return parseInt(ceMatch[1], 10);
	}

	const rangeMatch = cleaned.match(/^(\d+)(?:-\d+)?(?:bce|ce)?$/);
	if (rangeMatch) {
		return parseInt(rangeMatch[1], 10);
	}

	const yearWordMatch = cleaned.match(/year\s*(\d+)/i);
	if (yearWordMatch) {
		const year = parseInt(yearWordMatch[1], 10);
		return cleaned.includes('bce') ? -year : year;
	}

	return null;
}

export function isWithinRange(
	year: number | null,
	referenceYear: number,
	contextYears: number
): boolean {
	if (year === null) return false;
	return Math.abs(year - referenceYear) <= contextYears;
}
