import TestUtils from '@thiimoredis/test-utils';
import TimeSeries from '.';

export default new TestUtils({
    dockerImageName: 'redislabs/redistimeseries',
    dockerImageVersionArgument: 'timeseries-version',
    defaultDockerVersion: '1.6.0'
});

export const GLOBAL = {
    SERVERS: {
        OPEN: {
            serverArguments: ['--loadmodule /usr/lib/redis/modules/redistimeseries.so'],
            clientOptions: {
                modules: {
                    ts: TimeSeries
                }
            }
        }
    }
};
