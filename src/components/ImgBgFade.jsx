import React from 'react'

const ImgBgFade = ({img}) => {
  return (
    <div style={{ position: 'relative', maxHeight: '50vh', overflow: 'hidden', zIndex: 9, marginTop: '-1px' }}>
    <img
      style={{
        backgroundColor: 'var(--sec-bg-color)',
        minWidth: '100vw',
        maxWidth: '400px',
        marginTop: '-40vh',
      }}
      src={img}
    />
    <div
      style={{
        background: 'linear-gradient(0deg, var(--main-bg-color) 0%, rgba(10, 10, 10, 0) 100%)',
        width: '100vw',
        height: '400px',
        position: 'absolute',
        bottom: 0,
        zIndex: 1000,
      }}
    />
    </div >
  )
}

export default ImgBgFade