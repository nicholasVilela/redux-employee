import {createCompany} from './createCompany'
import {combineReducers} from 'redux'

export const allReducers = combineReducers({
    company: createCompany
})