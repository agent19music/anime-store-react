import React from 'react';

export default function Termsofservice({ toggle, toggle2, toggle3 }) {
 

  return (
    <div className={`container ${toggle}`}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <h5 className={`text-center text-${toggle3} py-5`}>Terms of Service</h5>
          <h2>1. Introduction</h2>
      <p>
        Welcome to Anime-Store! These Terms of Service (“Terms”) govern your use of Anime-Store and provide information
        about the Anime-Store Service, outlined below. When you create an Anime-Store account or shop from Anime-Store,
        you agree to these terms.
      </p>

      <h2>2. The Anime-Store Service</h2>
      <p>
        We agree to provide you with the Anime-Store Service. The Service includes all of the Anime-Store products,
        features, applications, services, technologies, and software that we provide to advance Anime-Store’s mission: To
        bring you closer to the anime world through our merchandise. We reserve the right to modify or terminate the
        Service or your access to the Service for any reason, without notice, at any time, and without liability to you.
      </p>

      <h2>3. Your Commitments</h2>
      <p>
        In return for our commitment to provide the Service, we require you to make the below commitments to us.
      </p>

      <h4>3.1. Who Can Use Anime-Store</h4>
      <p>
        You must be at least 13 years old to use Anime-Store. If you are under age 13, you may not, under any
        circumstances or for any reason, use the Services. We may, in our sole discretion, refuse to offer the Services
        to any person or entity and change its eligibility criteria at any time.
      </p>

      <h4>3.2. Your Account</h4>
      <p>
        You are responsible for any activity that occurs in your Anime-Store account. So it’s important that you keep
        your account secure. One way to do that is to select a strong password that you don’t use for any other account.
      </p>

     

      <h2>8. Updates</h2>
      <p>
        We may modify these Terms of Service from time to time, and if we make material changes to it, we will provide
        notice through our Service or by other means so that you may review the changes before they become effective.
      </p>

      <p>
        Please note that this is a very basic version of a Terms of Service agreement and does not cover all necessary
        clauses. It’s important to consult with a legal professional when drafting legal documents. This is just a
        starting point and should not be used as a complete Terms of Service agreement.
      </p>
        </div>
      </div>
    </div>
  )
}
