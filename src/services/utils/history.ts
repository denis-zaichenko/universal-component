import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const moveToRouteCallback = (path: string) => () => history.push(path);
export const moveToRoute = (path: string) => history.push(path);
