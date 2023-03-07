import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Feed from '../client/src/components/Feed.jsx' 


describe ('Feed', () => {
    it ('renders a heading', () => {
        render (<Feed/>);
        const heading = screen.getByRole('heading',
        {name: 'Feed'})
    expect(heading).toBeInTheDocument();
    })
})