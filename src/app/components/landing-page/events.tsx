import React from 'react';
import Image from 'next/image';

const EventsCard = (props: any) => {
  return (
    <div className="h-fit">
      <div className="flex items-center justify-center flex-col bg-white rounded-md">
        <div className="h-[150px] w-[150px] bg-[#815514]  flex  items-center justify-center rounded-md">
          <div className="h-[150px] w-[150px]">
            <Image
            width={150}
            height={150}
              className="h-full w-fit"
              src={props.img}
              alt="Ideathon logo"
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-black">{props.text}</h3>
        </div>
      </div>
    </div>
  );
};

const EventsPage = () => {
  return (
    <div className="min-h-fit mb-10">
      <div className="w-full flex items-center justify-center">
        <h2 className="text-[#F2522E] border-b border-b-[rgb(242,82,46)] w-fit p-4 text-2xl">
          EVENTS
        </h2>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-8/12 flex items-center justify-around gap-10 flex-wrap mt-10">
          <EventsCard img="/logos/ideathon.png" text={'Ideathon'} />
          <EventsCard img="/images/placeholder.png" text={'Inception'} />
          <EventsCard img="/images/placeholder2.png" text={'Workshops'} />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
