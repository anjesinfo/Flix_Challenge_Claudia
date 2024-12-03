'use strict'
import { ADD_VIDEO_SINGLE } from './actions'


export const addVideoSingle = (id) => ({
  type:ADD_VIDEO_SINGLE,
  payload:{ id }
})
