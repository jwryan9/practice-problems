// eslint-disable-next-line import/no-extraneous-dependencies
import Chance from 'chance';

export default () => {
    const chance = new Chance();
    if (!process.env.CHANCE_SEED) {
        process.env.CHANCE_SEED = chance.hash();
    }
    console.log(`Using Chance Seed: ${process.env.CHANCE_SEED}`);
};
