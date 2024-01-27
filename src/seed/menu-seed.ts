export interface MenuSeed {
    label: string
    url: string
}
interface SeedData {
    menuGender: MenuSeed[]
}

export const initialDataMenu: SeedData = {
    menuGender: [
        {
            label: 'Hombres',
            url: 'men'
        },
        {
            label: 'Mujeres',
            url: 'women'
        },
        {
            label: 'Niños',
            url: 'kid'
        },
    ]
}