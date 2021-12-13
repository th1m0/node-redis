export function transformArguments(key: string, string: string): Array<string> {
    return ['FT.SUGDEL', key, string];
}

export { transformReplyBoolean as transformReply } from '@thiimo/redisclient/dist/lib/commands/generic-transformers';
