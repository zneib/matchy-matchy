import React from 'react'
import styled from 'styled-components'

const TileItem = styled.div`
  border: 1px solid black;
  padding: 70px;
  font-size: 48px;
`

export default function Tile({ value }) {
  return (
    <TileItem>{value}</TileItem>
  )
}