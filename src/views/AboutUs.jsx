import React from 'react';

export default function AboutUs() {
  return (
    <section className="mt-4" style={{ textAlign: 'left', marginLeft: '10%', marginRight: '10%' }}>
      <div className="mt-3">
        <h2 style={{ fontSize: '2.5rem' }}>Our Mission</h2>
        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisi id arcu varius interdum. Sed faucibus, nisl at dictum convallis, augue lacus consectetur magna, in dictum eros eros sed augue.
        </p>
      </div>

      <div className="mt-5">
        <h2 style={{ fontSize: '2.5rem' }}>Our History</h2>
        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisi id arcu varius interdum. Sed faucibus, nisl at dictum convallis, augue lacus consectetur magna, in dictum eros eros sed augue.
        </p>
      </div>

      <div className="mt-5">
        <h2 style={{ fontSize: '2.5rem' }}>Our Team</h2>
        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisi id arcu varius interdum. Sed faucibus, nisl at dictum convallis, augue lacus consectetur magna, in dictum eros eros sed augue. 
        </p>
        <div className="d-flex gap-4 mt-4">
          <div style={{ textAlign: 'center' }}>
            <img src="https://i1.sndcdn.com/artworks-zyYqA8D0BdfuyH28-WeeHrw-t1080x1080.jpg" alt="Team Member 1" className="img-fluid" style={{ borderRadius: '8px', width: '150px', height: '150px' }} />
            <p style={{ marginTop: '0.5rem' }}>Catto 1</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="https://pbs.twimg.com/media/GaffrCkW0AAYA7V?format=jpg&name=large" alt="Team Member 2" className="img-fluid" style={{ borderRadius: '8px', width: '150px', height: '150px' }} />
            <p style={{ marginTop: '0.5rem' }}>Catto 2</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="https://i.pinimg.com/originals/11/95/31/1195315e9d87b377e995ffad59c6fa52.jpg" alt="Team Member 3" className="img-fluid" style={{ borderRadius: '8px', width: '150px', height: '150px' }} />
            <p style={{ marginTop: '0.5rem' }}>Catto 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}
