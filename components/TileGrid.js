import React from 'react'
import styled from 'styled-components'
import data from '../data.json'
import Tile from './Tile'

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 25px;
  place-items: center;
`

export default function TileGrid() {
  return (
    <>
      <Grid>
        {data.map(tile => (
          <Tile key={tile.id} value={tile.value} />
        ))}
      </Grid>
    </>
  )
}