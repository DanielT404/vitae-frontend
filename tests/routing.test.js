import { h } from 'preact'

import Router from 'preact-router'
import { route } from 'preact-router'
import AppWrapper from '../src/components/app-wrapper'
import View from '../src/routes/view'

import { mockStore } from './utils/mockStore'
import { getCurrentSnapshot } from './utils/getCurrentSnapshot.js'

describe('Routing tests', () => {
    test('Router component is mounted', () => {
        const app = getCurrentSnapshot(<AppWrapper />, mockStore)
        expect(app.exists(Router)).toBe(true)
    })

    test('Default page is about me', () => {
        const app = getCurrentSnapshot(<AppWrapper />, mockStore)
        expect(app.find(View).prop('path')).toBe('/')
        expect(app.find(View).prop('page')).toBe('aboutMe')
    })

    it('Should go to desktop page on route change', () => {
        route('/desktop')
        const app = getCurrentSnapshot(<AppWrapper />, mockStore)
        expect(app.find(View).prop('path')).toBe('/desktop')
        expect(app.find(View).prop('page')).toBe('desktop')
    })

    it('Should go to about me page on route change', () => {
        route('/about-me')
        const app = getCurrentSnapshot(<AppWrapper />, mockStore)
        expect(app.find(View).prop('path')).toBe('/about-me')
        expect(app.find(View).prop('page')).toBe('aboutMe')
    })

    it('Should go to projects page on route change', () => {
        route('/projects')
        const app = getCurrentSnapshot(<AppWrapper />, mockStore)
        expect(app.find(View).prop('path')).toBe('/projects')
        expect(app.find(View).prop('page')).toBe('projects')
    })

    it('Should go to resume page on route change', () => {
        route('/resume')
        const app = getCurrentSnapshot(<AppWrapper />, mockStore)
        expect(app.find(View).prop('path')).toBe('/resume')
        expect(app.find(View).prop('page')).toBe('resume')
    })

    it('Should go to contact page on route change', () => {
        route('/contact')
        const app = getCurrentSnapshot(<AppWrapper />, mockStore)
        expect(app.find(View).prop('path')).toBe('/contact')
        expect(app.find(View).prop('page')).toBe('contact')
    })
})
