export function transformArguments(key: string, string: string): Array<string> {
    return ['FT.SUGDEL', key, string];
}

export { transformReplyBoolean as transformReply } from 'thiimoredisclient/dist/lib/commands/generic-transformers';
