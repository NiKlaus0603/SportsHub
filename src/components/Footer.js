import React from 'react';
import {
  MDBFooter,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Footer.css'; // Importing the CSS styles

export default function App() {
  return (
    <MDBFooter className='footer-container text-center' bgColor='dark'>
      <div className='footer-links'>
        <MDBBtn outline color="light" floating className='footer-button' href='#!' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='footer-button' href='#!' role='button'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='footer-button' href='#!' role='button'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='footer-button' href='#!' role='button'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='footer-button' href='#!' role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='footer-button' href='#!' role='button'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </div>
    </MDBFooter>
  );
}
