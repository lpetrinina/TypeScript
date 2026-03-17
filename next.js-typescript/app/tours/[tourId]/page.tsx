import maps from "@/images/maps.jpg";
import Image from "next/image";

const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

async function page({ params }: { params: Promise<{ tourId: string }> }) {
  const { tourId } = await params;

  return (
    <div>
      <h1 className='text-4xl'> ID: {tourId}</h1>
      <section className='flex gap-4 mt-4'>
        {/* Local image */}
        <div>
          <Image
            src={maps}
            alt='Maps image'
            width={192}
            height={192}
            className='w-48 h-48 object-cover rounded'
          />
        </div>

        {/* Remote image */}
        <div>
          <Image
            src={url}
            alt='Tour image'
            width={192}
            height={192}
            className='w-48 h-48 object-cover rounded'
          />
        </div>
      </section>
    </div>
  );
}

export default page;
