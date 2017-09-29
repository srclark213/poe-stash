import * as webRequest from 'web-request';

const STASH_TAB_URL: string = 'http://www.pathofexile.com/api/public-stash-tabs';

export async function updateStashInfo(): Promise<any> {
    const stashData = await getStashInfo();
    // TODO: Add processing logic
    return stashData;
}

async function getStashInfo(): Promise<any> {
    return await webRequest.json<any>(STASH_TAB_URL);
}
