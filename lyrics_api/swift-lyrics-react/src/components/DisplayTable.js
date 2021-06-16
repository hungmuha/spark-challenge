import React from 'react';
import {Table} from "reactstrap";

const DisplayTable = ({lyrics}) => {
    return (
        <Table>
         <thead>
            <tr>
              <th></th>
              <th>Lyrics</th>
              <th>Song</th>
              <th>Album</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
            <tbody>
                {lyrics.map((lyric,index) => {
                  return(
                    <tr key={lyric.id}>
                      <td scope="row">{index+1}</td>
                      <td>{lyric.text}</td>
                      <td>{lyric.song.name}</td>
                      <td>{lyric.album.name}</td>
                      <td>Edit</td>
                      <td>Delete</td>
                    </tr>
                  )
                })}
            </tbody>
        </Table>
    )
}

export default DisplayTable;