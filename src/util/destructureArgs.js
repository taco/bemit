import { toObj } from './toObj';

export const destructureArgs = (
    name, modifiers, states, className, utils, scopes, qa, js
) => {

    let namespace = 'c';
    const cfg = name;

    if (typeof cfg === 'object') {
        name = cfg.name;
        modifiers = cfg.modifiers;
        namespace = cfg.namespace;
        className = cfg.className;
        utils = cfg.utils;
        scopes = cfg.scopes;
        qa = cfg.qa;
        js = cfg.qa;
    }
}
