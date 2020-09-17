import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import config from '../../../../site-config';

type CustomTheme = { [key: string]: string | CustomTheme };
type FlatObject = { [key: string]: string };

const theme = config.calendar.theme;

const flatTheme = (theme: CustomTheme, prefix = ''): FlatObject =>
    Object.keys(theme).reduce((acc, curr) => {
        const value = theme[curr];
        const key = prefix ? `${prefix}-${curr}` : curr;
        const flatValue =
            typeof value === 'object' ? flatTheme(value, key) : value;

        return {
            ...acc,
            ...(typeof flatValue === 'object'
                ? flatValue
                : { [key]: flatValue }),
        };
    }, {});

const customTheme = deepMerge(grommet, {
    global: {
        colors: flatTheme(theme),
    },
});

export default customTheme;
