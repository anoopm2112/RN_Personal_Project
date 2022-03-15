import { actions } from '../../common';

const { action, navigation: { navigate } } = actions;

export const types = {
    RUN_PRELIMINARY_CHECKS: 'Splash/RUN_PRELIMINARY_CHECKS',
};

export function runPreliminaryChecks() {
    return action(types.RUN_PRELIMINARY_CHECKS);
}