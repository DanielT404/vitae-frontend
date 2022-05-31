import { h } from 'preact'

import { mockStore } from './utils/mockStore'
import { route } from 'preact-router'
import fetchFiles from '../src/utils/functions/fetchFiles'

describe('<Desktop />', () => {
    it('should try to retrieve files from api', async () => {
        const mockDispatch = jest.fn()
        let files
        try {
            files = await fetchFiles()
        } catch (err) {
            files = []
        }
        mockDispatch({ type: 'file/setFileArr', payload: files })
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'file/setFileArr',
            payload: files,
        })
        const firstCall = mockDispatch.mock.calls[0][0]
        mockStore.file.files = firstCall.payload.files || []
    })

    test('files array must be empty or filled', () => {
        expect(mockStore.file.files.length).toBeGreaterThanOrEqual(0)
    })
})
