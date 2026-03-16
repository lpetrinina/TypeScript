import React from "react";

async function page({ params }: { params: Promise<{ tourId: string }> }) {
  const { tourId } = await params;

  return (
    <div>
      <h1 className='text-4xl'> ID: {tourId}</h1>
    </div>
  );
}

export default page;
