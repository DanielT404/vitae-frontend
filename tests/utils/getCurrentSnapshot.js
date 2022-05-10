import { h } from 'preact'
import { mountWithStore } from './mountWithStore'

export function getCurrentSnapshot(component, mockState = null) {
    return mountWithStore(component, mockState)
}
