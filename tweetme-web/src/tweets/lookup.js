import {backendLookup} from '../lookup'

export function apiTweetCreate(newTweet, callBack) {
    backendLookup("POST", "/tweets/create/", callBack, { content: newTweet })
}

export function apiTweetAction(tweetId,action, callBack) {
    const data = { id : tweetId,action : action }
    backendLookup("POST", "/tweets/action/", callBack, data)
}

export function apiTweetDetail(tweetId,callBack) {
    backendLookup("GET", `/tweets/${tweetId}/ `, callBack)
}

export function apiTweetList(username,callBack) {
    let endpoint = "/tweets/"
    if(username){
        endpoint = `/tweets/?username=${username}`
    }
    backendLookup("GET", endpoint, callBack)
}