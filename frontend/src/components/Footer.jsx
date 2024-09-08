const Footer = () => {
	return (
		<footer className='w-full py-6 bg-black text-white border-t border-gray-800'>
  <div className='flex flex-col items-center justify-center text-center'>
    <p className='text-sm leading-loose text-muted-foreground'>
      Built by{" "}
      <a
        href='https://github.com/rishadha'
        target='_blank'
        className='font-medium underline underline-offset-4'
      >
        Rishadha
      </a>
      . The source code is available on{" "}
      <a
        href='https://github.com/rishadha'
        target='_blank'
        rel='noreferrer'
        className='font-medium underline underline-offset-4'
      >
        GitHub
      </a>
      .
    </p>
  </div>
</footer>

	);
};
export default Footer;