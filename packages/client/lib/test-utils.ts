import TestUtils from '@thiimoredis/test-utils';
import { SinonSpy } from 'sinon';
import { promiseTimeout } from './utils';

export default new TestUtils({
    defaultDockerVersion: '6.2',
    dockerImageName: 'redis',
    dockerImageVersionArgument: 'redis-version'
});

export const GLOBAL = {
    SERVERS: {
        OPEN: {
            serverArguments: []
        },
        PASSWORD: {
            serverArguments: ['--requirepass', 'password'],
            clientOptions: {
                password: 'password'
            }
        }
    },
    CLUSTERS: {
        OPEN: {
            serverArguments: []
        },
        PASSWORD: {
            serverArguments: ['--requirepass', 'password'],
            clusterConfiguration: {
                defaults: {
                    password: 'password'
                }
            }
        }
    }
};

export async function waitTillBeenCalled(spy: SinonSpy): Promise<void> {
    const start = process.hrtime.bigint(),
        calls = spy.callCount;

    do {
        if (process.hrtime.bigint() - start > 1_000_000_000) {
            throw new Error('Waiting for more than 1 second');
        }

        await promiseTimeout(1);
    } while (spy.callCount === calls);
}
