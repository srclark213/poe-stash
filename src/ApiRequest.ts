import * as request from 'request';



export function getApi() : request.Request{
    var url = 'http://www.pathofexile.com/api/public-stash-tabs';
    return request(url, function(error, response, body){
        if (!error && response.statusCode == 200){
            return response.body;
        }
        else{
            return {'request':'failed'};
        }
    });
}
