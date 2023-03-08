import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom';

import Feed from '../client/src/components/Feed.jsx' 
import Login from '../client/src/pages/Login.jsx'

describe ('Feed', () => {
    it ('renders a heading', () => {
        render (<Feed/>);
        const heading = screen.getByRole('heading',
        {name: 'Feed'})
    expect(heading).toBeInTheDocument();
    })
})

describe('Login', () => {
    it ('renders a heading', () => {
        render(<MemoryRouter><Login/></MemoryRouter>)
        const heading = screen.getByRole('heading',
        {name: 'Byte Buddies'})
        expect (heading).toBeInTheDocument();
    })
})