import { SELETED_AUDIO } from "./types";


export const audioSelect = (audios) => ({
    type: SELETED_AUDIO ,
    payload: audios
})