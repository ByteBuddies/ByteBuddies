import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { create } from "react-test-renderer";
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Feed from '../client/src/components/Feed.jsx' 
import Login from '../client/src/pages/Login.jsx'
import Main from '../client/src/pages/Main.jsx'

describe ('Byte Buddies', () => {
    it ('renders routed components properly', () => {
        let renderer = create(
            <MemoryRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/main" element={<Main/>} />
                </Routes>
            </MemoryRouter>
        )
    })
})

describe('Login', () => {
    beforeEach(() => {
        render(<MemoryRouter><Login/></MemoryRouter>)
    })
    it ('renders a heading', () => {
        const heading = screen.getByRole('heading',
        {name: 'Byte Buddies'})
        expect (heading).toBeInTheDocument();
    });
    it ('renders a login button', () => {
        const button = screen.getByRole('button',
        {name: 'Log In'})
        expect (button).toBeInTheDocument();
    })
})

describe ('Feed', () => {
    it ('renders a heading', () => {
        render (<Feed/>);
        const heading = screen.getByRole('heading',
        {name: 'Feed'})
        expect(heading).toBeInTheDocument();
    })
})

