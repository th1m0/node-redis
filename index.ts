import { createClient as _createClient, createCluster as _createCluster, RedisClientOptions, RedisClientType, RedisClusterOptions, RedisClusterType } from 'thiimoredisclient';
import { RedisScripts } from 'thiimoredisclient/dist/lib/commands';
import RedisJSON from 'thiimoredisjson';
import RediSearch from 'thiimoredissearch';

export * as redisClient from 'thiimoredisclient';
export * as redisJson from 'thiimoredisjson';
export * as redisSearch from 'thiimoredissearch';
export { RedisSocketOptions } from 'thiimoredisclient/dist/lib/client/socket';

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
