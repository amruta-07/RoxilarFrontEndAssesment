import React from 'react'

const TableBottom = ({ pageno, onChangePage }) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: "space-between" }}
    >
      <p

      >
        page No:{pageno}
      </p>
      <div
        style={{
          display: "flex",
          margin: "auto"
        }}
      >

        <p
          onClick={() => {
            if (pageno > 1) {

              onChangePage(pageno - 1)
            }
          }}
        >
          previous
        </p>

        <p

        >
          -
        </p>

        <p
          onClick={() => {
            onChangePage(pageno + 1)
          }}
        >
          Next
        </p>
      </div>
      <p>
        Per Page:10
      </p>
    </div>
  )
}

export default TableBottom
