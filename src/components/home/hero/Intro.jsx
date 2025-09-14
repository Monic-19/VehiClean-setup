import React from 'react';

const Intro = () => {
  return (
    <section className="intro">
      <h1 className="uppercase absolute top-4 left-4 md:top-8 md:left-8 lg:top-5 lg:left-5">
        Our Services <br />
        at a Glance
      </h1>
      <p className="absolute bottom-8 right-9 md:bottom-16 md:right-16 lg:bottom-12 lg:right-14 tracking-tight scale-200 ">
        (&darr;)
      </p>
    </section>
  );
};

export default Intro;
