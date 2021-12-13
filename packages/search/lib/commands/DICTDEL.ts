import { RedisCommandArguments } from '@thiimo/redisclient/dist/lib/commands';
import { pushVerdictArguments } from '@thiimo/redisclient/dist/lib/commands/generic-transformers';

export function transformArguments(dictionary: string, term: string | Array<string>): RedisCommandArguments {
    return pushVerdictArguments(['FT.DICTDEL', dictionary], term);
}

export declare function transformReply(): number;
