import { toObj } from './toObj';

export const destructureArgs = (
    name, modifiers, states, className, utils, scopes, qa, js
) => {

    let namespace = 'c';
    const cfg = name;

    if (typeof cfg === 'object') {
        namespace = cfg.namespace;
        name = cfg.name;
        className = cfg.className;
        modifiers = cfg.modifiers;
        utils = cfg.utils;
        states = cfg.states;
        scopes = cfg.scopes;
        qa = cfg.qa;
        js = cfg.js;
    }

    return {
        namespace,
        name,
        className,
        modifiers: toObj(modifiers),
        states: toObj(states),
        utils: toObj(utils),
        scopes: toObj(scopes),
        qa: toObj(qa),
        js: toObj(js)
    };
};
