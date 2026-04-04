const migrations = {
    1: (state) => {
        return {
            ...state,
            recipes: {
                ...state.recipes,
                chosen: state.recipes?.chosen || [],
            },

            map: state.map || {
                chosen: ['city', 'castle', 'guild', 'graveyard', 'crater', 'teleport-spot', 'tavern', 'teleport',
                    'teleport-broken', 'weapons', 'tower', 'quest', 'specials', 'rebirth', 'quest-dungeon', 'general-dungeon']
            },
        };
    },
    2: (state) => {
        return {
            map: state.map || {
                chosen: [
                    {name: 'city', type: 2},
                    {name: 'castle', type: 2},
                    {name: 'guild', type: 1},
                    {name: 'crater', type: 1},
                    {name: 'teleport-spot', type: 1},
                    {name: 'tavern', type: 1},
                    {name: 'weapons', type: 1},
                    {name: 'tower', type: 1},
                    {name: 'specials', type: 1}
                ]
            },
        };
    },
    3: (state) => {
        return {
            stats: state.stats || {
                statsLeft: [],
                errorLeft: '',
                leftLoading: false,
                statsRight: [],
                errorRight: '',
                rightLoading: false,
                dates: state.stats?.dates || [],
                datesError: '',
                stats: state.stats?.stats ||  [],
                myNames: state.stats?.myNames ||  []
            }
        }
    },
    4: (state) => {
        return {
            doll: state.doll || {
                defaultDolls: state.doll?.defaultDolls || []
            }
        }
    },
    5: (state) => {
        return {
            user: {
                currentUser: state.user?.currentUser || null,
                token: state.user?.token || null,
                registerError: state.user?.registerError || null,
                loginError: state.user?.loginError || null,
                logoutError: state.user?.logoutError || null,
                isIncognito: state.user?.isIncognito || false
            }
        }
    }
};

export default migrations;

export function createMigrate(migrations, {debug = false} = {}) {
    return (state, currentVersion) => {
        if (debug) console.log('Redux Persist: Starting migration...');

        const oldVersion = state?._persist?.version ?? -1;

        if (debug) console.log(`Redux Persist: Old version: ${oldVersion}, Current version: ${currentVersion}`);

        let newState = {...state};

        for (let i = oldVersion + 1; i <= currentVersion; i++) {
            if (migrations[i]) {
                if (debug) console.log(`Redux Persist: Running migration for version ${i}`);
                newState = migrations[i](newState);
            }
        }
        if (debug) console.log('Redux Persist: Migration complete.');

        return Promise.resolve(newState);
    };
}