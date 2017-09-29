import * as request from 'request';
import * as webRequest from 'web-request';

export async function updateStashInfo(): Promise<any>{
     return await getStashInfo().then();

}

async function getStashInfo(): Promise<any> {
    var url = 'http://www.pathofexile.com/api/public-stash-tabs';
    var data = await webRequest.json<any>(url);
    return data;
}
