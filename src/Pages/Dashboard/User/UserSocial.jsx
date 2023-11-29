const UserSocial = () => {
  return (
    <div>
      <footer className="flex  flex-col bg-transparent space-y-10 justify-center mr-14 mt-4">
        <div className="flex justify-center space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <img className="w-[30px] " src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer">
            <img className='w-[30px] ' src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            <img className='w-[30px] ' src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </a>
          <a
            href="https://messenger.com"
            target="_blank"
            rel="noopener noreferrer">
            <img className='w-[30px] ' src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <img className='w-[30px] ' src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default UserSocial;
