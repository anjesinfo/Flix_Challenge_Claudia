'use strict'

import createReducer from '../create-reducer'
import {ADD_VIDEO_SINGLE} from './actions'

const initialState = ''

const videoSingle = createReducer(initialState,{
  [ADD_VIDEO_SINGLE]:(state,action) => action.payload.id
})
export default videoSingle
