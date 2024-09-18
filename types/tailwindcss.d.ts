declare module 'tailwindcss/lib/util/flattenColorPalette' {
    type ColorPalette = {
        [key: string]: string | { [shade: string]: string };
    };

    const flattenColorPalette: (colors: ColorPalette) => { [color: string]: string };
    export default flattenColorPalette;
}
