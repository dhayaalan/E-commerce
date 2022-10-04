import React from 'react';
import '../css/footer.css'

function Footer() {
  return (
    <div>
      <footer class='page-footer font-small blue pt-4'>
        <div class='container-fluid text-center text-md-left'>
          <div class='row'>
            <div class='col-md-6 mt-md-0 mt-3'>
              <h5 class='text-uppercase'>Footer Content</h5>
              <p>
                Here is the link that will direct you ot the page listed below
              </p>
            </div>

            <hr class='clearfix w-100 d-md-none pb-3'></hr>

            <div class='col-md-3 mb-md-0 mb-3'>
              <h5 class='text-uppercase'>Links</h5>

              <ul class='list-unstyled'>
                <li>
                  <a href='#!'>contact</a>
                </li>
                <li>
                  <a href='#!'>Email</a>
                </li>
              </ul>
            </div>

            <div class='col-md-3 mb-md-0 mb-3'>
              <h5 class='text-uppercase'>Links</h5>

              <ul class='list-unstyled'>
                <li>
                  <a href='#!'>Mobile Number</a>
                </li>
                <li>
                  <a href='#!'>Website</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
