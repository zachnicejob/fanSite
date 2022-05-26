import { GiphyFetch } from '@giphy/js-fetch-api';
import getAPIKey from './giphyCredentials.js';

export async function getRandomChopper() {
  const giphy = new GiphyFetch(getAPIKey());

  const { data: gifs } = await giphy.search('tony tony chopper', { sort: 2, lang: 'en', limit: 1, type: 'gifs'})
  // console.log(gifs);

  if(!gifs){
    return Promise.reject(['Something went wrong with the request']);
  }

  return gifs;
}

export async function getChopperById(identifier) {
  const giphy = new GiphyFetch(getAPIKey());

  const { data: gifs } = await giphy.gifs([identifier]);

  if(!gifs){
    return Promise.reject(['Something went wrong with the request']);
  }

  return gifs;
}