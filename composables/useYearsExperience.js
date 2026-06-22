export function useYearsExperience() {
  const careerStart = new Date(2018, 9, 1) // octubre 2018
  const now = new Date()

  let years = now.getFullYear() - careerStart.getFullYear()
  if (
    now.getMonth() < careerStart.getMonth() ||
    (now.getMonth() === careerStart.getMonth() && now.getDate() < careerStart.getDate())
  ) {
    years--
  }

  return years
}
