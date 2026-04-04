import React from 'react';

// Важно: stroke="currentColor" позволит вам менять цвет иконок через CSS color
// stroke-width="2" - толщина линии
// fill="none" - фон иконки прозрачный

export const CityIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 15h20M2 15V7h20v8M6 7V3M18 7V3"/>
        <path d="M10 21v-6h4v6"/>
        <path d="M12 10V3M15 5h-6"/>
        <path d="M12 3l3-2h-6z"/>
    </svg>
);

export const CastleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18v-9a3 3 0 0 0-3-3h-2V7a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H6a3 3 0 0 0-3 3v9z"/>
        <path d="M10 21V12M14 21V12"/>
        <path d="M3 12h18"/>
    </svg>
);

export const GuildIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 16l3-3 3 3 3-3 3 3 3-3 3 3V3H3z"/>
        <path d="M3 16h18"/>
    </svg>
);

export const CraterIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8"/>
        <path d="M12 4c-3 0-5 3-5 5s2 5 5 5 5-3 5-5-2-5-5-5z"/>
        <path d="M12 12v.01"/>
    </svg>
);

export const PyramidIcon = () => ( // Mayan Pyramid
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 21h20L12 3z"/>
        <path d="M6 17l6-12 6 12"/>
        <path d="M8 13l4-8 4 8"/>
        <path d="M4 21l8-16 8 16"/>
    </svg>
);

export const TavernIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z"/>
        <path d="M2 8h14v12H2z"/>
        <path d="M6 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    </svg>
);

export const TowerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L6 7h12z"/>
        <path d="M10 7V21h4V7"/>
        <path d="M8 21h8M6 21h12"/>
    </svg>
);

export const TeleportIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="18" r="4"/>
        <path d="M12 14V4M6 18l-2-12M18 18l2-12"/>
    </svg>
);

export const BridgeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 16h20M2 16c0-4 4-8 10-8s10 4 10 8"/>
        <path d="M4 16v5M20 16v5"/>
    </svg>
);

export const BrokenTeleportIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="18" r="4"/>
        <path d="M12 14V8M6 18l-2-8M18 18l2-8"/>
        <path d="M10 4h4M3 6h6M15 6h6"/>
    </svg>
);

// Можно также экспортировать объект для удобства
export const IconMap = {
    city: CityIcon,
    castle: CastleIcon,
    guild: GuildIcon, // или crown, если вы так назовете в данных
    crater: CraterIcon,
    pyramid: PyramidIcon, // или mayan_pyramid
    tavern: TavernIcon,
    tower: TowerIcon,
    teleport: TeleportIcon,
    bridge: BridgeIcon,
    broken_teleport: BrokenTeleportIcon,
};