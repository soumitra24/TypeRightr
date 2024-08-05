const DarkTheme = {
    label: 'dark',
    background: 'black',
    backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)",
    font: 'white',
    typeboxText: 'gray',
    correctFont: 'white',
    cursor: '2px solid transparent',
    cursorColor: '2px solid white'
}
const LightTheme = {
    label: 'light',
    background: 'white',
    backgroundImage: "linear-gradient(white, white)",
    font: 'black',
    typeboxText: 'gray',
    correctFont: 'black',
    cursor: '2px solid transparent',
    cursorColor: '2px solid black'
}

const WineTheme = {
    label: 'wine',
    background: "#ff0084",
    backgroundImage: 'linear-gradient(to right, #33001b, #ff0084)',
    font: 'white',
    typeboxText: 'white',
    correctFont: 'white',
    cursor: '2px solid transparent',
    cursorColor: '2px solid white'
}

const BlueTheme = {
    label: 'blue',
    background: "#243b55",
    backgroundImage: 'linear-gradient(to right, #141e30, #243b55)',
    font: 'white',
    typeboxText: 'gray',
    correctFont: 'wheat',
    cursor: '2px solid transparent',
    cursorColor: '2px solid white'
}

const PinkTheme = {
    label: 'pink',
    background: " #FAACA8",
    backgroundImage: 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
    font: 'black',
    typeboxText: 'gray',
    correctFont: 'black',
    cursor: '2px solid transparent',
    cursorColor: '2px solid black' 
}

export const ThemeOptions = [
    {label: 'Dark', value : DarkTheme},
    {label: 'Light', value : LightTheme},
    {label: 'Wine', value: WineTheme},
    {label: 'Blue', value: BlueTheme},
    // {label: 'Pink', value: PinkTheme}
]