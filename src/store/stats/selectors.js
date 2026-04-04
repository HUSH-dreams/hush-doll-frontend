// Селекторы для доступа к данным из Redux-стора.
// Селекторы для основной статистики
export const selectLeftStats = state => state.stats.statsLeft;
export const selectLeftLoading = state => state.stats.leftLoading;
export const selectLeftError = state => state.stats.leftError;
export const selectRightStats = state => state.stats.statsRight;
export const selectRightLoading = state => state.stats.rightLoading;
export const selectRightError = state => state.stats.rightError;
export const selectDatesError = state => state.stats.datesError;
export const selectDates = state => state.stats.dates;
export const selectStats = state => state.stats.stats;
export const selectMyNames = state => state.stats.myNames;

// Новые селекторы для статистики по кланам.
export const selectClansLeftStats = state => state.stats.statsClansLeft;
export const selectClansLeftLoading = state => state.stats.leftClansLoading;
export const selectClansLeftError = state => state.stats.errorClansLeft;
export const selectClansRightStats = state => state.stats.statsClansRight;
export const selectClansRightLoading = state => state.stats.rightClansLoading;
export const selectClansRightError = state => state.stats.errorClansRight;
export const selectClansDatesError = state => state.stats.datesClansError;
export const selectClansDates = state => state.stats.datesClans;
export const selectStatsClans = state => state.stats.statsClans;
export const selectMyNamesClans = state => state.stats.myNamesClans;

export const selectCastlesLeftStats = state => state.stats.statsCastlesLeft;
export const selectCastlesLeftLoading = state => state.stats.leftCastlesLoading;
export const selectCastlesLeftError = state => state.stats.errorCastlesLeft;
export const selectCastlesRightStats = state => state.stats.statsCastlesRight;
export const selectCastlesRightLoading = state => state.stats.rightCastlesLoading;
export const selectCastlesRightError = state => state.stats.errorCastlesRight;
export const selectCastlesDatesError = state => state.stats.datesCastlesError;
export const selectCastlesDates = state => state.stats.datesCastles;
export const selectStatsCastles = state => state.stats.statsCastles;
export const selectMyNamesCastles = state => state.stats.myNamesCastles;
