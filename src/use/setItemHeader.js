export function setItemHeader(type, buttons) {
    let header = ''

    switch (type) {
        case 'sword-light':
            header = buttons.lightSwords;
            break;
        case 'sword-semi':
            header = buttons.semiSworder;
            break;
        case 'sword-heavy':
            header = buttons.heavySwords;
            break;
        case 'axe':
            header = buttons.axes;
            break;
        case 'hammer':
            header = buttons.hammers;
            break;
        case 'crossbow-light':
            header = buttons.lightCrossbows;
            break;
        case 'crossbow-heavy':
            header = buttons.heavyCrossbows;
            break;
        case 'helmet':
            header = buttons.helmets;
            break;
        case 'jacket':
            header = buttons.cuirasses
            break;
        case 'shield':
            header = buttons.shields
            break;
        case 'gloves':
            header = buttons.gloves
            break;
        case 'belt':
            header = buttons.belts
            break;
        case 'pants':
            header = buttons.pants
            break;
        case 'boots':
            header = buttons.boots
            break;
        case 'robe-green':
            header = buttons.greenRobe
            break;
        case 'robe-white':
            header = buttons.whiteRobe
            break;
        case 'robe-red':
            header = buttons.redRobe
            break;
        case 'robe-blue':
            header = buttons.blueRobe
            break;
        case 'amulet':
            header = buttons.amulets
            break;
        case 'bracelet':
            header = buttons.bracers
            break;
        case 'ring-title':
            header = buttons.titleRings
            break;
        case 'ring-degree':
            header = buttons.degreeRings
            break;
        case 'assassin':
            header = buttons.assassin
            break;
        case 'barbarian':
            header = buttons.barbarian
            break;
        case 'thief':
            header = buttons.thief
            break;
        case 'blacksmith':
            header = buttons.blacksmith
            break;
        case 'archmage':
            header = buttons.archmage
            break;
        case 'druid':
            header = buttons.druid
            break;
        case 'inquisitor':
            header = buttons.inquisitor
            break;
        case 'necromancer':
            header = buttons.necromancer
            break;
        case 'sorcerer':
            header = buttons.sorcerer
            break;
        case 'bandier':
            header = buttons.bandier
            break;
        case 'crusader':
            header = buttons.boots
            break;
        case 'steel-master':
            header = buttons.steelMaster
            break;
        case 'armorer':
            header = buttons.armorer
            break;
        case 'hunter':
            header = buttons.hunter
            break;
        case 'mantra-radiant':
            header = buttons.radiantMantras
            break;
        case 'mantra-dire':
            header = buttons.direMantras
            break;
        case 'powder-earth':
            header = buttons.earthPowder
            break;
        case 'powder-air':
            header = buttons.airPowder
            break;
        case 'powder-fire':
            header = buttons.firePowder
            break;
        case 'powder-water':
            header = buttons.waterPowder
            break;
        case 'castle15':
            header = `15 ${buttons.castles.toLowerCase()}`
            break;
        case 'castle30':
            header = `30 ${buttons.castles.toLowerCase()}`
            break;
        case 'castle45':
            header = `45 ${buttons.castles.toLowerCase()}`
            break;
        case 'castle60':
            header = `60 ${buttons.castles.toLowerCase()}`
            break;
        case 'castle75':
            header = `75 ${buttons.castles.toLowerCase()}`
            break;
        case 'castle90':
            header = `90 ${buttons.castles.toLowerCase()}`
            break;
        case 'castle120':
            header = `120+ ${buttons.castles.toLowerCase()}`
            break;
        case 'crystals':
            header = buttons.crystals
            break;
        case 'premium':
            header = buttons.premium
            break;
        case 'event':
            header = buttons.event
            break;
        case 'elixir':
            header = buttons.elixir
            break;
        case 'radiant-useless':
            header = buttons.radiantUseless
            break;
        case 'dire-useless':
            header = buttons.direUseless
            break;
    }

    return header;
}