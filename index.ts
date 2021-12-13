import { createClient as _createClient, createCluster as _createCluster, RedisClientOptions, RedisClientType, RedisClusterOptions, RedisClusterType } from '@thiimo/redisclient';
import { RedisScripts } from '@thiimo/redisclient/dist/lib/commands';
import RedisJSON from '@thiimo/redisjson';
import RediSearch from '@thiimo/redissearch';

export * as redisClient from '@thiimo/redisclient';
export * as redisJson from '@thiimo/redisjson';
export * as redisSearch from '@thiimo/redissearch';
export { RedisSocketOptions } from '@thiimo/redisclient/dist/lib/client/socket';

const modules =  {
    json: RedisJSON,
    ft: RediSearch
};

export declare type ClientOptions<S extends RedisScripts = Record<string, never>> = Omit<RedisClientOptions<never, S>, 'modules'>
export declare type RedisClient<S extends RedisScripts = Record<string, never>> = RedisClientType<typeof modules, S>

export function createClient<S extends RedisScripts = Record<string, never>>(
    options?: ClientOptions<S>
): RedisClient<S> {
    return _createClient({
        ...options,
        modules
    });
}

export function createCluster<S extends RedisScripts = Record<string, never>>(
    options: Omit<RedisClusterOptions<never, S>, 'modules'>
): RedisClusterType<typeof modules, S> {
    return _createCluster({
        ...options,
        modules
    });
}
